'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, courses } from '@/data/mockData';
import {
  sendStructuredTelegram,
  sendStructuredWhatsApp,
  BookingInquiry,
} from '@/utils/telegram';
import {
  FaTimes,
  FaTelegramPlane,
  FaWhatsapp,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserAlt,
  FaPhoneAlt,
  FaGraduationCap,
  FaMagic,
  FaArrowRight,
  FaArrowLeft,
  FaCheck,
  FaCopy,
} from 'react-icons/fa';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'service' | 'course';
  initialItemName?: string;
}

const ADDIS_NEIGHBORHOODS = [
  'Bole / Medhanialem',
  'Bole Atlas / Rwanda',
  'CMC / Summit / Ayat',
  'Kazanchis / ECA',
  'Old Airport / Sarbet',
  'Bisrate Gabriel / Mekanisa',
  'Piassa / Arat Kilo',
  'Other / Outside Ring Road',
];

const TIME_SLOTS = [
  { id: 'morning', label: 'Morning (09:00 AM - 12:30 PM)' },
  { id: 'afternoon', label: 'Afternoon (01:30 PM - 04:30 PM)' },
  { id: 'evening', label: 'Evening (05:00 PM - 08:00 PM)' },
];

export default function BookingModal(props: BookingModalProps) {
  if (!props.isOpen) return null;

  return (
    <BookingModalDialog
      key={`${props.initialType || 'service'}-${props.initialItemName || 'default'}`}
      {...props}
    />
  );
}

function BookingModalDialog({
  onClose,
  initialType = 'service',
  initialItemName,
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [type, setType] = useState<'service' | 'course'>(initialType);
  const [selectedItem, setSelectedItem] = useState<string>(
    initialItemName || (initialType === 'service' ? services[0].name : courses[0].title)
  );
  const [serviceMode, setServiceMode] = useState<'at-home' | 'studio'>('at-home');
  const [cohortSchedule, setCohortSchedule] = useState<string>('Weekday Morning');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>(TIME_SLOTS[0].label);
  const [neighborhood, setNeighborhood] = useState<string>(ADDIS_NEIGHBORHOODS[0]);
  const [clientName, setClientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Close on Escape & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const currentItemObject =
    type === 'service'
      ? services.find((s) => s.name === selectedItem)
      : courses.find((c) => c.title === selectedItem);

  const buildInquiry = (): BookingInquiry => ({
    type,
    itemName: selectedItem,
    clientName,
    phone,
    date,
    timeSlot: type === 'service' ? timeSlot : undefined,
    serviceMode: type === 'service' ? serviceMode : undefined,
    cohortSchedule: type === 'course' ? cohortSchedule : undefined,
    neighborhood: type === 'service' && serviceMode === 'at-home' ? neighborhood : undefined,
    notes,
  });

  const handleSendTelegram = () => {
    sendStructuredTelegram(buildInquiry());
    onClose();
  };

  const handleSendWhatsApp = () => {
    sendStructuredWhatsApp(buildInquiry());
    onClose();
  };

  const handleCopyDetails = () => {
    const inquiry = buildInquiry();
    const text = `Booking: ${inquiry.itemName} | Name: ${inquiry.clientName || 'N/A'} | Phone: ${
      inquiry.phone || 'N/A'
    } | Date: ${inquiry.date || 'TBD'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#16161c] via-[#121217] to-[#0c0c10] border border-rosegold/30 rounded-3xl shadow-[0_0_50px_rgba(183,110,121,0.25)] p-6 sm:p-8 text-white z-10 overflow-hidden my-auto"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rosegold/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-20"
          >
            <FaTimes size={18} />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-rosegold text-xs uppercase tracking-widest font-semibold mb-1">
              <FaMagic />
              <span>BeautyVibes Booking & Enrollment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              {type === 'service' ? 'Book Your Luxury Experience' : 'Secure Your Academy Seat'}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Complete your inquiry details below. We confirm with you directly via Telegram or WhatsApp.
            </p>
          </div>

          {/* Step Progress Bar */}
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex flex-col gap-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step >= s ? 'bg-rosegold shadow-[0_0_10px_rgba(183,110,121,0.8)]' : 'bg-white/10'
                  }`}
                />
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  {s === 1 ? 'Selection' : s === 2 ? 'Schedule' : 'Confirm'}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Type Switcher */}
              <div className="grid grid-cols-2 p-1.5 bg-black/40 border border-white/10 rounded-2xl">
                <button
                  type="button"
                  onClick={() => {
                    setType('service');
                    setSelectedItem(services[0].name);
                  }}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    type === 'service'
                      ? 'bg-rosegold text-black font-semibold shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <FaMagic />
                  <span>Beauty Service</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setType('course');
                    setSelectedItem(courses[0].title);
                  }}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    type === 'course'
                      ? 'bg-rosegold text-black font-semibold shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <FaGraduationCap />
                  <span>Academy Course</span>
                </button>
              </div>

              {/* Service or Course Dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Select {type === 'service' ? 'Service Package' : 'Academy Program'}
                </label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-white focus:outline-none focus:border-rosegold transition-colors text-sm"
                >
                  {type === 'service'
                    ? services.map((s) => (
                        <option key={s.id} value={s.name} className="bg-[#121217] text-white">
                          {s.name} — ({s.price})
                        </option>
                      ))
                    : courses.map((c) => (
                        <option key={c.id} value={c.title} className="bg-[#121217] text-white">
                          {c.title} — ({c.duration}, {c.price})
                        </option>
                      ))}
                </select>
              </div>

              {/* Mode Toggle */}
              {type === 'service' ? (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Service Location
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceMode('at-home')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        serviceMode === 'at-home'
                          ? 'border-rosegold bg-rosegold/10 text-white'
                          : 'border-white/10 bg-black/30 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1 text-white">🚗 At-Home / Mobile</div>
                      <span>Delivered directly to your home or hotel in Addis Ababa</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceMode('studio')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        serviceMode === 'studio'
                          ? 'border-rosegold bg-rosegold/10 text-white'
                          : 'border-white/10 bg-black/30 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1 text-white">🏛️ Salon Studio Visit</div>
                      <span>Experience our fully equipped luxury studio sanctuary</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Preferred Cohort Schedule
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Weekday Morning (9am - 12:30pm)', 'Weekend Intensive (Sat & Sun)'].map((sched) => (
                      <button
                        key={sched}
                        type="button"
                        onClick={() => setCohortSchedule(sched)}
                        className={`p-3 rounded-xl border text-left text-xs transition-all ${
                          cohortSchedule === sched
                            ? 'border-rosegold bg-rosegold/10 text-white font-semibold'
                            : 'border-white/10 bg-black/30 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {sched}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-7 py-3 bg-rosegold text-black font-semibold rounded-full hover:scale-105 transition-all text-sm shadow-[0_0_20px_rgba(183,110,121,0.4)]"
                >
                  <span>Continue to Schedule</span>
                  <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Schedule & Location */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-2">
                  <FaCalendarAlt className="text-rosegold" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-white focus:outline-none focus:border-rosegold transition-colors text-sm"
                />
              </div>

              {/* Time Slot (if service) */}
              {type === 'service' ? (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-2">
                    <FaClock className="text-rosegold" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setTimeSlot(slot.label)}
                        className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                          timeSlot === slot.label
                            ? 'border-rosegold bg-rosegold/15 text-white font-semibold'
                            : 'border-white/10 bg-black/30 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {slot.label.split('(')[0]}
                        <span className="block text-[10px] text-gray-400 mt-0.5">
                          {slot.label.split('(')[1]?.replace(')', '')}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Addis Neighborhood (if at-home service) */}
              {type === 'service' && serviceMode === 'at-home' && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-rosegold" />
                    <span>Addis Ababa Neighborhood (Coverage Area)</span>
                  </label>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-white focus:outline-none focus:border-rosegold transition-colors text-sm"
                  >
                    {ADDIS_NEIGHBORHOODS.map((area) => (
                      <option key={area} value={area} className="bg-[#121217] text-white">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 px-5 py-2.5 border border-white/15 text-gray-300 rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  <FaArrowLeft size={12} />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-7 py-3 bg-rosegold text-black font-semibold rounded-full hover:scale-105 transition-all text-sm shadow-[0_0_20px_rgba(183,110,121,0.4)]"
                >
                  <span>Continue to Details</span>
                  <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Contact & Direct Dispatch */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Client Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-2">
                    <FaUserAlt className="text-rosegold" size={11} />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hermela Kebede"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-rosegold transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-2">
                    <FaPhoneAlt className="text-rosegold" size={11} />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +251 91 234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-rosegold transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Special Notes / Bridal Party Details / Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Wedding event at Sheraton Addis, need veil placement..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-rosegold transition-colors text-sm resize-none"
                />
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-black/40 border border-rosegold/20 text-xs text-gray-300 space-y-1.5">
                <div className="flex justify-between font-medium">
                  <span className="text-white font-serif">{selectedItem}</span>
                  <span className="text-rosegold font-bold">
                    {currentItemObject && 'price' in currentItemObject ? currentItemObject.price : ''}
                  </span>
                </div>
                <div className="text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                  {date && <span>📅 Date: {date}</span>}
                  {type === 'service' ? (
                    <>
                      <span>⏰ {timeSlot.split('(')[0]}</span>
                      <span>
                        📍 {serviceMode === 'at-home' ? `At-Home (${neighborhood})` : 'Studio'}
                      </span>
                    </>
                  ) : (
                    <span>🗓️ {cohortSchedule}</span>
                  )}
                </div>
              </div>

              {/* Dispatch Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleSendTelegram}
                    className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-rosegold text-black font-bold rounded-full hover:scale-102 hover:shadow-[0_0_25px_rgba(183,110,121,0.6)] transition-all text-sm"
                  >
                    <FaTelegramPlane size={17} />
                    <span>Send via Telegram</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] text-black font-bold rounded-full hover:scale-102 hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all text-sm"
                  >
                    <FaWhatsapp size={18} />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <FaArrowLeft size={10} />
                    <span>Back to Schedule</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="flex items-center gap-1.5 text-xs text-rosegold hover:underline"
                  >
                    {copied ? <FaCheck size={11} /> : <FaCopy size={11} />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

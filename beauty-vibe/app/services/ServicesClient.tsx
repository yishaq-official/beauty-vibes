'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { services, Service } from '@/data/mockData';
import BookingModal from '@/components/BookingModal';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import FAQSection from '@/components/FAQSection';
import {
  FaMagic,
  FaCrown,
  FaClock,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaShieldAlt,
  FaFilter,
} from 'react-icons/fa';

/* ---------------- ANIMATION VARIANTS ---------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const CATEGORIES = [
  { id: 'All', label: 'All Services' },
  { id: 'Bridal', label: 'Bridal & Traditional' },
  { id: 'Hair', label: 'Hair & Updos' },
  { id: 'Aesthetics', label: 'Facials & Prep' },
  { id: 'Packages', label: 'VIP Packages' },
];

export default function ServicesClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | null>(null);

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName || services[0].name);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen relative overflow-hidden pt-32 pb-24 px-4 sm:px-6">
      {/* Ambient background glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(183,110,121,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03),transparent_40%)]" />

      {/* ===== HERO HEADER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rosegold/10 border border-rosegold/30 text-rosegold text-xs uppercase tracking-widest font-semibold mb-4">
            <FaCrown />
            <span>Luxury Mobile & Studio Salon</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-rosegold mb-6">
            Our Premium Services
          </h1>

          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Indulge in personalized beauty transformations delivered directly to your doorstep across Addis Ababa or at our private studio.
          </p>
        </motion.div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#131318] border border-white/5 text-center">
          <StatItem icon={<FaMagic />} value="100% Pro" label="Luxury Palettes" />
          <StatItem icon={<FaCrown />} value="500+" label="Bridal Clients" />
          <StatItem icon={<FaClock />} value="On-Time" label="Mobile Delivery" />
          <StatItem icon={<FaShieldAlt />} value="Certified" label="Expert Artists" />
        </div>
      </section>

      {/* ===== CATEGORY FILTER TABS ===== */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 mr-2 uppercase tracking-wider">
            <FaFilter className="text-rosegold" size={11} />
            <span>Filter:</span>
          </div>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-pointer px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-rosegold text-black font-semibold shadow-[0_0_20px_rgba(183,110,121,0.5)] scale-105'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {filteredServices.map((service: Service, index: number) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#16161c] via-[#121217] to-[#0d0d10] hover:border-rosegold/40 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Popular Ribbon for First Item */}
              {index === 0 && activeCategory === 'All' && (
                <div className="absolute top-4 left-4 z-20 bg-rosegold text-black text-[11px] px-3.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <FaCrown size={10} />
                  <span>Signature Favorite</span>
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={
                    service.image.startsWith('http') || service.image.startsWith('/')
                      ? service.image
                      : `/${service.image}`
                  }
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/30 to-transparent" />

                {/* Duration & Price Overlay Badge */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                  <span className="bg-black/80 backdrop-blur-md border border-white/15 text-gray-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                    <FaClock size={10} className="text-rosegold" />
                    {service.duration}
                  </span>
                  <span className="bg-rosegold/20 backdrop-blur-md border border-rosegold/40 text-rosegold-light text-xs font-bold px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 group-hover:text-rosegold transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <FaCheckCircle className="text-rosegold flex-shrink-0 mt-0.5" size={12} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Trigger Button */}
                <button
                  onClick={() => handleOpenBooking(service.name)}
                  className="cursor-pointer w-full py-3.5 relative overflow-hidden group/btn rounded-full border border-rosegold bg-transparent text-rosegold font-bold uppercase tracking-wider text-xs transition-all duration-300 mt-2"
                >
                  <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300 flex items-center justify-center gap-2">
                    <FaCalendarCheck size={13} />
                    <span>Book Appointment</span>
                  </span>
                  <div className="absolute inset-0 bg-rosegold scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-300 ease-out" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== BEFORE & AFTER TRANSFORMATION SLIDER ===== */}
      <section className="max-w-7xl mx-auto mb-24 border-t border-white/5 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
            Real Transformations, <span className="text-rosegold">Flawless Results</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Slide through to witness how our tailored skin prep, precision contouring, and 16-hour setting techniques create radiant confidence.
          </p>
        </div>

        <BeforeAfterSlider />
      </section>

      {/* ===== COVERAGE AREA BANNER ===== */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#17141b] via-[#141217] to-[#111116] border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-rosegold text-xs uppercase tracking-widest font-semibold">
              <FaMapMarkerAlt />
              <span>Addis Ababa Coverage Areas</span>
            </div>
            <h3 className="text-2xl font-serif text-white">
              We Come Directly To You
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
              Our mobile beauty team provides full bridal and glam setups across Bole, CMC, Kazanchis, Old Airport, Sarbet, and surrounding residential hotels and venues.
            </p>
          </div>
          <button
            onClick={() => handleOpenBooking()}
            className="cursor-pointer px-7 py-3.5 bg-rosegold text-black font-bold rounded-full hover:scale-105 transition-all text-xs uppercase tracking-wider whitespace-nowrap shadow-[0_0_25px_rgba(183,110,121,0.4)]"
          >
            Check Location Availability
          </button>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-rosegold mb-3">
            How The Experience Works
          </h2>
          <p className="text-gray-400 text-sm">Effortless luxury from reservation to the final look.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            number="01"
            title="Select Service & Location"
            desc="Choose your preferred glam package and specify whether you desire mobile at-home service or private studio session."
          />
          <ProcessStep
            number="02"
            title="Confirm via Telegram / WhatsApp"
            desc="Our structured booking wizard sends your exact date, time, and address directly to our coordination desk for instant verification."
          />
          <ProcessStep
            number="03"
            title="Enjoy Red Carpet Beauty"
            desc="Relax as our certified artists arrive fully equipped with sterilized luxury kits to deliver your radiant, long-lasting look."
          />
        </div>
      </section>

      {/* ===== FREQUENTLY ASKED QUESTIONS ===== */}
      <section className="max-w-6xl mx-auto mb-24 border-t border-white/5 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif text-rosegold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know about bridal trials, mobile arrangements in Addis Ababa, and product safety.
          </p>
        </div>

        <FAQSection defaultCategory="salon" showCategoryTabs={true} />
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType="service"
        initialItemName={selectedServiceForModal || undefined}
      />
    </div>
  );
}

/* ---------------- SUBCOMPONENTS ---------------- */
function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-rosegold text-xl mb-1.5">{icon}</div>
      <h4 className="text-lg font-bold text-white">{value}</h4>
      <p className="text-gray-400 text-[11px] uppercase tracking-wider">{label}</p>
    </div>
  );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="bg-[#15151b] p-8 rounded-3xl border border-white/5 hover:border-rosegold/40 transition duration-300">
      <div className="text-rosegold text-3xl font-bold font-serif mb-3">{number}</div>
      <h3 className="text-lg font-serif text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

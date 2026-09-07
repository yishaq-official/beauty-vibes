'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs, FAQItem } from '@/data/mockData';
import {
  FaQuestionCircle,
  FaChevronDown,
  FaTelegramPlane,
  FaWhatsapp,
  FaCrown,
  FaGraduationCap,
} from 'react-icons/fa';
import { TELEGRAM_HANDLE, PHONE_NUMBER } from '@/utils/telegram';

interface FAQSectionProps {
  defaultCategory?: 'salon' | 'academy';
  showCategoryTabs?: boolean;
}

export default function FAQSection({
  defaultCategory = 'salon',
  showCategoryTabs = true,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'salon' | 'academy'>(defaultCategory);
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({ 0: true });

  const filteredFaqs = faqs.filter((item: FAQItem) => item.category === activeCategory);

  const toggleFAQ = (idx: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleOpenTelegram = () => {
    const text = encodeURIComponent(
      `Hi BeautyVibes! ✨ I have a quick question regarding ${
        activeCategory === 'salon' ? 'your salon services / bridal booking' : 'the training academy enrollment'
      }.`
    );
    window.open(`https://t.me/${TELEGRAM_HANDLE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsApp = () => {
    const cleanPhone = PHONE_NUMBER.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hi BeautyVibes! ✨ I have a quick question regarding ${
        activeCategory === 'salon' ? 'your salon services / bridal booking' : 'the training academy enrollment'
      }.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Tabs */}
      {showCategoryTabs && (
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => {
              setActiveCategory('salon');
              setOpenIndexes({ 0: true });
            }}
            className={`cursor-pointer px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'salon'
                ? 'bg-rosegold text-black font-semibold shadow-[0_0_25px_rgba(183,110,121,0.5)] scale-105'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <FaCrown size={12} />
            <span>Salon & Bridal FAQs</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveCategory('academy');
              setOpenIndexes({ 0: true });
            }}
            className={`cursor-pointer px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'academy'
                ? 'bg-rosegold text-black font-semibold shadow-[0_0_25px_rgba(183,110,121,0.5)] scale-105'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <FaGraduationCap size={13} />
            <span>Academy & Training FAQs</span>
          </button>
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-4 mb-12">
        {filteredFaqs.map((faq: FAQItem, idx: number) => {
          const isOpen = !!openIndexes[idx];

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-rosegold/40 bg-[#16161c] shadow-[0_0_30px_rgba(183,110,121,0.1)]'
                  : 'border-white/5 bg-[#121217] hover:border-white/15'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4 pr-4">
                  <span className="w-7 h-7 rounded-full bg-rosegold/10 text-rosegold flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-base sm:text-lg font-serif text-white">
                    {faq.question}
                  </span>
                </div>
                <FaChevronDown
                  size={14}
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-rosegold' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 sm:px-6 pb-6 pt-0 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5"
                  >
                    <p className="mt-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#18131a] via-[#141219] to-[#121217] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="text-left space-y-1">
          <div className="flex items-center gap-2 text-rosegold text-xs uppercase tracking-wider font-semibold">
            <FaQuestionCircle />
            <span>Have a specific question?</span>
          </div>
          <h4 className="text-xl font-serif text-white">
            Chat with Our Coordination Team
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md">
            We are available every day to assist with wedding schedules, custom party quotes, and syllabus consultations.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleOpenTelegram}
            className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-rosegold text-black font-bold text-xs flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(183,110,121,0.4)]"
          >
            <FaTelegramPlane size={14} />
            <span>Telegram</span>
          </button>

          <button
            type="button"
            onClick={handleOpenWhatsApp}
            className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
          >
            <FaWhatsapp size={14} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}

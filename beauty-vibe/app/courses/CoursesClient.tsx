'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { courses, Course, graduateSpotlights, GraduateSpotlight } from '@/data/mockData';
import BookingModal from '@/components/BookingModal';
import FAQSection from '@/components/FAQSection';
import {
  FaGraduationCap,
  FaCheckCircle,
  FaBoxOpen,
  FaCalendarAlt,
  FaChevronDown,
  FaAward,
  FaUsers,
  FaPalette,
  FaClock,
} from 'react-icons/fa';

/* ---------------- ANIMATION VARIANTS ---------------- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function CoursesClient() {
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const handleOpenEnrollment = (courseTitle: string) => {
    setSelectedCourseForModal(courseTitle);
    setIsModalOpen(true);
  };

  const toggleModuleAccordion = (key: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden min-h-screen bg-[#0e0e0e] text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0f0f14] via-[#14141c] to-[#0a0a0d]" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rosegold/10 blur-[170px] opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* ===== HERO HEADER ===== */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rosegold/10 border border-rosegold/30 text-rosegold text-xs uppercase tracking-widest font-semibold mb-4"
          >
            <FaAward />
            <span>Accredited Beauty Academy</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl font-serif text-white tracking-wide mb-6"
          >
            Master Your Craft. <br />
            <span className="text-rosegold">Build Your Legacy.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Transform your creative passion into a lucrative career. Our certified programs in Addis Ababa combine hands-on studio training, high-end student toolkits, and live client practicums.
          </motion.p>
        </motion.div>

        {/* ===== ACADEMY PILLARS STRIP ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl mb-20 text-center"
        >
          <Pillar icon={<FaAward />} title="Certified Diploma" desc="Recognized professional certification" />
          <Pillar icon={<FaBoxOpen />} title="Pro Kit Included" desc="Full brushes & palettes to keep" />
          <Pillar icon={<FaUsers />} title="Small Batches" desc="Max 8 students for 1-on-1 coaching" />
          <Pillar icon={<FaPalette />} title="Live Practicum" desc="Work with real bridal & fashion models" />
        </motion.div>

        {/* ===== COURSES DETAILED LIST ===== */}
        <div className="space-y-16 mb-24">
          {courses.map((course: Course, courseIndex: number) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: courseIndex * 0.1 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#16161c] via-[#121217] to-[#0e0e12] overflow-hidden shadow-2xl hover:border-rosegold/40 transition-all duration-500"
            >
              {/* Course Top Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
                {/* Course Image & Badges (5 cols) */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[320px] shadow-lg">
                  <img
                    src={
                      course.image.startsWith('http') || course.image.startsWith('/')
                        ? course.image
                        : `/${course.image}`
                    }
                    alt={course.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                    <span className="bg-black/75 backdrop-blur-md text-xs font-semibold px-3.5 py-1 rounded-full text-white border border-white/15 flex items-center gap-1.5">
                      <FaClock size={11} className="text-rosegold" />
                      {course.duration}
                    </span>
                    <span className="bg-rosegold text-black text-xs font-bold px-3.5 py-1 rounded-full shadow-lg shadow-rosegold/30">
                      {course.level}
                    </span>
                  </div>

                  {/* Bottom Batch & Seats Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between z-10">
                    <div className="text-xs">
                      <div className="text-gray-400 flex items-center gap-1.5">
                        <FaCalendarAlt className="text-rosegold" size={11} />
                        <span>Next Cohort:</span>
                      </div>
                      <div className="text-white font-medium">{course.nextBatch}</div>
                    </div>
                    <span className="bg-rosegold/20 text-rosegold-light border border-rosegold/40 text-[11px] font-bold px-2.5 py-1 rounded-full animate-pulse">
                      Only {course.seatsLeft} Seats Left
                    </span>
                  </div>
                </div>

                {/* Course Overview & Enrollment (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h2 className="text-2xl sm:text-3xl font-serif text-white group-hover:text-rosegold transition-colors">
                        {course.title}
                      </h2>
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold text-rosegold">
                          {course.price}
                        </div>
                        <div className="text-[11px] text-gray-400">Tuition & Full Pro Kit</div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Schedule Tag */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-300 mb-6 flex items-center gap-2">
                      <span className="text-rosegold font-semibold">Schedule:</span>
                      <span>{course.schedule}</span>
                    </div>

                    {/* What You'll Learn Highlights */}
                    <div className="mb-6">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-rosegold mb-3">
                        Key Competencies & Practical Mastery
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {course.learn.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <FaCheckCircle className="text-rosegold flex-shrink-0 mt-0.5" size={13} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action CTA Strip */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <span className="text-xs text-gray-400">
                      Flexible installment plans available upon inquiry.
                    </span>
                    <button
                      onClick={() => handleOpenEnrollment(course.title)}
                      className="cursor-pointer w-full sm:w-auto px-8 py-3.5 bg-rosegold text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(183,110,121,0.5)] transition-all duration-300 text-sm flex items-center justify-center gap-2"
                    >
                      <FaGraduationCap size={16} />
                      <span>Reserve Your Seat</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Collapsible Sections: Kit & Syllabus */}
              <div className="border-t border-white/10 bg-black/30 p-6 sm:p-10 space-y-8">
                {/* What's In Your Kit */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white mb-4">
                    <FaBoxOpen className="text-rosegold" size={16} />
                    <span>Included With Tuition: Professional Student Kit</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {course.kitIncluded.map((kitItem, kitIdx) => (
                      <div
                        key={kitIdx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-rosegold flex-shrink-0" />
                        <span>{kitItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Week-by-Week Syllabus Accordion */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white mb-4">
                    <FaCalendarAlt className="text-rosegold" size={15} />
                    <span>Curriculum & Module Breakdown</span>
                  </div>

                  <div className="space-y-3">
                    {course.modules.map((module, modIdx) => {
                      const accordionKey = `${course.id}-mod-${modIdx}`;
                      const isExpanded = !!expandedModules[accordionKey];

                      return (
                        <div
                          key={modIdx}
                          className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/15"
                        >
                          <button
                            type="button"
                            onClick={() => toggleModuleAccordion(accordionKey)}
                            className="w-full flex items-center justify-between p-4 text-left transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="px-2.5 py-1 rounded-md bg-rosegold/10 text-rosegold font-bold text-xs">
                                {module.week}
                              </span>
                              <span className="text-sm font-medium text-white">
                                {module.title}
                              </span>
                            </div>
                            <FaChevronDown
                              size={12}
                              className={`text-gray-400 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180 text-rosegold' : ''
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="px-4 pb-4 pt-1 border-t border-white/5"
                              >
                                <ul className="space-y-2 mt-2">
                                  {module.topics.map((topic, tIdx) => (
                                    <li
                                      key={tIdx}
                                      className="text-xs text-gray-400 flex items-start gap-2 pl-2"
                                    >
                                      <span className="text-rosegold mt-1">•</span>
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== GRADUATE SUCCESS SPOTLIGHT ===== */}
        <section className="mb-24 border-t border-white/5 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rosegold/10 border border-rosegold/30 text-rosegold text-xs uppercase tracking-widest font-semibold mb-3">
              <FaAward />
              <span>Alumni Hall of Fame</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
              Where Are Our <span className="text-rosegold">Graduates Now?</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              From salon founders in Bole to editorial stylists in Kazanchis, our graduates build profitable, highly respected beauty careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {graduateSpotlights.map((grad: GraduateSpotlight) => (
              <div
                key={grad.id}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#16161c] to-[#101014] p-8 flex flex-col justify-between shadow-xl hover:border-rosegold/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={grad.image}
                      alt={grad.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-rosegold shadow-md"
                    />
                    <div>
                      <h4 className="text-lg font-serif text-white font-semibold">
                        {grad.name}
                      </h4>
                      <p className="text-rosegold text-xs">{grad.currentRole}</p>
                      <p className="text-gray-400 text-[11px]">{grad.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed mb-6">
                    &ldquo;{grad.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                  <span>{grad.course}</span>
                  <span className="text-rosegold font-medium">{grad.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FREQUENTLY ASKED QUESTIONS ===== */}
        <section className="mb-24 border-t border-white/5 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif text-rosegold mb-3">
              Academy Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm">
              Answers about enrollment requirements, professional starter kits, certifications, and installment options.
            </p>
          </div>

          <FAQSection defaultCategory="academy" showCategoryTabs={true} />
        </section>

        {/* ===== BOTTOM ADVICE & REGISTRATION CTA ===== */}
        <div className="relative rounded-3xl overflow-hidden border border-rosegold/30 p-10 sm:p-14 text-center bg-gradient-to-r from-[#181216] via-[#14121a] to-[#121217] shadow-[0_0_60px_rgba(183,110,121,0.15)]">
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
            Unsure Which Course Suits Your Career Goals?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Speak directly with our lead instructor Hermela for personalized guidance on course selection, payment plans, and curriculum details.
          </p>
          <button
            onClick={() => handleOpenEnrollment(courses[0].title)}
            className="cursor-pointer px-10 py-4 bg-rosegold text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(183,110,121,0.5)] text-sm"
          >
            Inquire & Schedule Academy Tour
          </button>
        </div>
      </div>

      {/* Booking / Enrollment Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType="course"
        initialItemName={selectedCourseForModal || undefined}
      />
    </div>
  );
}

function Pillar({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-4">
      <div className="text-rosegold text-2xl mb-2 flex justify-center">{icon}</div>
      <div className="font-semibold text-sm text-white mb-1">{title}</div>
      <div className="text-gray-400 text-xs">{desc}</div>
    </div>
  );
}

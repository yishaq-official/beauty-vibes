'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import FAQSection from '@/components/FAQSection';
import { graduateSpotlights } from '@/data/mockData';
import { FaGraduationCap, FaHeart, FaStar } from 'react-icons/fa';

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const floating: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

/* ---------------- TESTIMONIAL DATA ---------------- */

const testimonials = [
  {
    id: 1,
    name: "Amina T.",
    role: "Bride (Sheraton Addis)",
    text: "BeautyVibes completely transformed my look for my wedding day. The at-home mobile service was incredibly punctual, and the makeup stayed completely flawless through tears and 10 hours of dancing!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Melse Traditional Bride",
    text: "The traditional Habesha kemis matching was extraordinary. The gold dewy skin finish looked majestic in daylight and in our studio photography.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Hanna B.",
    role: "VIP Red Carpet Client",
    text: "Flawless execution! Having premium salon services brought directly to my living room in Bole saves me so much time without compromising on international luxury standards.",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStoryType, setActiveStoryType] = useState<'brides' | 'graduates'>('brides');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'service' | 'course'>('service');

  const activeStories = activeStoryType === 'brides' ? testimonials : graduateSpotlights;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeStories.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [activeStories.length]);

  const openBooking = (type: 'service' | 'course') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#0e0e0e] text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(183,110,121,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_40%)]" />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#111]/70 to-black/90 backdrop-blur-md" />
        </div>

        <motion.div variants={floating} animate="animate" className="absolute top-20 left-10 w-32 h-32 bg-rosegold/20 rounded-full blur-3xl" />
        <motion.div variants={floating} animate="animate" className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-rosegold-light mb-4">
            Beauty Salon & <br /><span className="text-white">Certified Academy</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Learn. Get Certified. Look Professional.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => openBooking('service')}
              className="cursor-pointer px-8 py-4 bg-rosegold hover:bg-rosegold-light text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(183,110,121,0.6)]"
            >
              Book Service
            </button>

            <button
              onClick={() => openBooking('course')}
              className="cursor-pointer px-8 py-4 border border-rosegold text-rosegold hover:bg-rosegold/10 font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Register for Course
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
            alt="Beauty Salon Session"
            className="rounded-3xl shadow-[0_0_40px_rgba(183,110,121,0.2)] w-full object-cover"
          />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif text-rosegold mb-6">About BeautyVibes</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            BeautyVibes offers personalized makeup services right at your home across Addis Ababa.
            We’re here to elevate your beauty routine and ensure you look flawless for weddings, red carpets, and special occasions.
            We also provide certified professional beauty training programs with kits included.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => openBooking('service')}
              className="cursor-pointer px-8 py-3 bg-rosegold text-black font-semibold rounded-full hover:scale-105 transition"
            >
              Book Now
            </button>
            <Link href="/courses">
              <button className="cursor-pointer px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition">
                Explore Academy
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-[#121212] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <StatCard number="500+" label="Happy Clients" />
          <StatCard number="120+" label="Certified Students" />
          <StatCard number="5★" label="Client Rating" />
          <StatCard number="3+" label="Years Experience" />
        </div>
      </section>

      {/* SERVICES GALLERY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-rosegold mb-4">Our Signature Work</h2>
          <p className="text-gray-400">A glimpse of the red-carpet looks we create.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
              title: "Luxury Bridal Makeup"
            },
            {
              img: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=800&q=80",
              title: "Traditional Melse Glam"
            },
            {
              img: "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=800&q=80",
              title: "Hairstyling & Updos"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => openBooking('service')}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-serif mb-1">{item.title}</h3>
                <span className="text-rosegold text-xs font-semibold uppercase tracking-wider">
                  Click to Book Appointment →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <button className="cursor-pointer px-8 py-3.5 border border-rosegold/50 text-rosegold rounded-full hover:bg-rosegold/10 transition-colors text-sm uppercase tracking-wider font-semibold">
              View All Services & Pricing
            </button>
          </Link>
        </div>
      </section>

      {/* ===== INTERACTIVE BEFORE & AFTER SLIDER SECTION ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rosegold/10 border border-rosegold/30 text-rosegold text-xs uppercase tracking-widest font-semibold mb-3">
            <span>Visual Proof of Artistry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">
            See The <span className="text-rosegold">Transformation</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider to reveal how our skin prep and Ultra-HD bridal techniques create effortless, enduring elegance.
          </p>
        </div>

        <BeforeAfterSlider />
      </section>

      {/* ===== DUAL TESTIMONIALS SECTION ===== */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif text-rosegold mb-4">Stories of Transformation</h2>
          <p className="text-gray-400 text-sm">Loved by brides across Addis Ababa and praised by certified academy graduates.</p>

          {/* Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => {
                setActiveStoryType('brides');
                setCurrentSlide(0);
              }}
              className={`cursor-pointer px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeStoryType === 'brides'
                  ? 'bg-rosegold text-black shadow-[0_0_20px_rgba(183,110,121,0.5)]'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              <FaHeart size={11} />
              <span>Bridal Clients</span>
            </button>

            <button
              onClick={() => {
                setActiveStoryType('graduates');
                setCurrentSlide(0);
              }}
              className={`cursor-pointer px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeStoryType === 'graduates'
                  ? 'bg-rosegold text-black shadow-[0_0_20px_rgba(183,110,121,0.5)]'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              <FaGraduationCap size={13} />
              <span>Certified Graduates</span>
            </button>
          </div>
        </div>

        <div className="relative min-h-[340px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeStoryType === 'brides' ? (
              <motion.div
                key={`bride-${currentSlide}`}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl bg-gradient-to-br from-[#1a1a20] via-[#141418] to-[#101014] border border-rosegold/30 rounded-3xl p-8 sm:p-10 shadow-[0_0_60px_rgba(183,110,121,0.15)] flex flex-col md:flex-row items-center gap-8"
              >
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-rosegold flex-shrink-0 shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-1 text-rosegold mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={12} />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4 text-sm sm:text-base leading-relaxed">
                    &ldquo;{testimonials[currentSlide].text}&rdquo;
                  </p>
                  <h4 className="text-white font-serif text-lg font-bold">{testimonials[currentSlide].name}</h4>
                  <p className="text-rosegold text-xs">{testimonials[currentSlide].role}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`grad-${currentSlide}`}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl bg-gradient-to-br from-[#1a1a20] via-[#141418] to-[#101014] border border-rosegold/30 rounded-3xl p-8 sm:p-10 shadow-[0_0_60px_rgba(183,110,121,0.15)] flex flex-col md:flex-row items-center gap-8"
              >
                <img
                  src={graduateSpotlights[currentSlide].image}
                  alt={graduateSpotlights[currentSlide].name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-rosegold flex-shrink-0 shadow-lg"
                />
                <div>
                  <div className="inline-block px-3 py-0.5 rounded-full bg-rosegold/10 text-rosegold text-[11px] font-semibold mb-2 border border-rosegold/20">
                    {graduateSpotlights[currentSlide].course} • {graduateSpotlights[currentSlide].year}
                  </div>
                  <p className="text-gray-300 italic mb-4 text-sm sm:text-base leading-relaxed">
                    &ldquo;{graduateSpotlights[currentSlide].quote}&rdquo;
                  </p>
                  <h4 className="text-white font-serif text-lg font-bold">{graduateSpotlights[currentSlide].name}</h4>
                  <p className="text-rosegold text-xs">
                    {graduateSpotlights[currentSlide].currentRole} ({graduateSpotlights[currentSlide].location})
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-rosegold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know about booking our mobile bridal services or enrolling in the academy.
          </p>
        </div>

        <FAQSection />
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 text-center border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-rosegold mb-6">
            Ready To Elevate Your Beauty?
          </h2>
          <p className="text-gray-300 text-base mb-8">
            Experience the finest luxury makeup and hairstyling in Addis Ababa, delivered right to your home or prepared at our studio.
          </p>
          <button
            onClick={() => openBooking('service')}
            className="cursor-pointer px-10 py-4 bg-rosegold text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_35px_rgba(183,110,121,0.5)] transition"
          >
            Book Your Session Today
          </button>
        </motion.div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-[#0e0e0e] border border-white/5 hover:border-rosegold/40 transition"
    >
      <h3 className="text-3xl font-bold text-rosegold mb-2">{number}</h3>
      <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

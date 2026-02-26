import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaTelegramPlane,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaAward,
  FaHome,
  FaGem,
  FaQuoteLeft
} from 'react-icons/fa';

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const floating = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

/* ---------------- TESTIMONIAL DATA ---------------- */

const testimonials = [
  {
    id: 1,
    name: "Amina T.",
    text: "BeautyVibes completely transformed my look for my wedding. The at-home service was incredibly convenient, and the makeup lasted all night!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Sarah M.",
    text: "Taking the professional makeup course was the best decision for my career. The instructors are top-tier and so supportive.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Hanna B.",
    text: "Flawless execution! Having premium salon services brought directly to my living room saves me so much time without compromising on quality.",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#0e0e0e] text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(183,110,121,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_40%)]"></div>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#111]/70 to-black/90 backdrop-blur-md"></div>
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
            <Link to="/services">
              <button className="px-8 py-4 bg-rosegold hover:bg-rosegold-light text-luxury font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(183,110,121,0.6)]">
                Book Now
              </button>
            </Link>

            <Link to="/courses">
              <button className="px-8 py-4 border border-rosegold text-rosegold hover:bg-rosegold/10 font-bold rounded-full transition-all duration-300 transform hover:scale-105">
                Register for Course
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
            alt="Beauty"
            className="rounded-3xl shadow-[0_0_40px_rgba(183,110,121,0.2)]"
          />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif text-rosegold mb-6">About BeautyVibes</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            BeautyVibes offers personalized makeup services right at your home.
            We’re here to elevate your beauty routine and ensure you look flawless for any occasion.
            We also provide certified professional beauty training programs.
          </p>
          <Link to="/services">
            <button className="px-8 py-3 bg-rosegold text-luxury rounded-full hover:scale-105 transition">
              Book Now
            </button>
          </Link>
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
          <h2 className="text-4xl font-serif text-rosegold mb-4">Our Premium Services</h2>
          <p className="text-gray-400">A glimpse of the transformations we create.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=800&q=80"
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img src={img} className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <h3 className="text-white text-xl font-serif">Professional Glam Makeup</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-rosegold mb-4">Client Love</h2>
        </div>

        <div className="relative h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full max-w-3xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-rosegold/30 rounded-3xl p-10 shadow-[0_0_60px_rgba(183,110,121,0.2)] flex flex-col md:flex-row items-center gap-8"
            >
              <img src={testimonials[currentSlide].image} className="w-24 h-24 rounded-full object-cover border-2 border-rosegold" />
              <div>
                <p className="text-gray-300 italic mb-4">"{testimonials[currentSlide].text}"</p>
                <h4 className="text-rosegold font-bold">{testimonials[currentSlide].name}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-rosegold mb-6">
            Ready To Elevate Your Beauty?
          </h2>
          <Link to="/services">
            <button className="px-10 py-4 bg-rosegold text-luxury rounded-full hover:scale-105 transition">
              Book Your Session Today
            </button>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({ number, label }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-luxury border border-white/5 hover:border-rosegold/40 transition"
    >
      <h3 className="text-3xl font-bold text-rosegold mb-2">{number}</h3>
      <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}
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

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// --- MOCK DATA FOR TESTIMONIALS ---
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
  // Logic for the Testimonial Slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      
      {/* 1. HERO SECTION (RESTORED) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/IMG_20260226_230532_105.jpg')` }} 
        >
          <div className="absolute inset-0 bg-luxury/80 backdrop-blur-sm"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl pt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-rosegold-light mb-4">
            Beauty Salon & <br/><span className="text-white">Certified Academy</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Learn. Get Certified. Look Professional.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services" className="group flex flex-col items-center">
              <button className="px-8 py-4 bg-rosegold hover:bg-rosegold-light text-luxury font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(183,110,121,0.5)]">
                Book Now
              </button>
              <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Book your beauty service instantly</span>
            </Link>

            <Link to="/courses" className="group flex flex-col items-center">
              <button className="px-8 py-4 bg-transparent border border-rosegold text-rosegold hover:bg-rosegold/10 font-bold rounded-full transition-all duration-300 transform hover:scale-105">
                Register for Course
              </button>
              <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Start your beauty career today</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="relative rounded-full p-2 border border-rosegold/30 inline-block mx-auto flex justify-center shadow-[0_0_30px_rgba(183,110,121,0.15)] bg-luxury">
            <img 
              src="/IMG_20260226_230531_939.jpg" 
              alt="BeautyVibes Logo" 
              className="w-full max-w-md rounded-full object-cover" 
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-rosegold mb-6">About BeautyVibes</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed font-light">
            BeautyVibes offers personalized makeup services right at your home. 
            We’re here to elevate your beauty routine and ensure you look flawless for any occasion without stepping out your door.
          </p>
          <Link to="/services">
            <button className="px-8 py-3.5 bg-rosegold hover:bg-rosegold-light text-luxury font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(183,110,121,0.4)]">
              Book Now
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-20 bg-[#121212] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Why Choose BeautyVibes?</h2>
            <p className="text-gray-400">Excellence in every brushstroke.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard 
              icon={<FaHome size={32} />} 
              title="At-Home Convenience" 
              desc="We bring the luxury salon experience directly to your living room."
            />
            <FeatureCard 
              icon={<FaAward size={32} />} 
              title="Certified Experts" 
              desc="Our trainers and stylists are top-tier professionals with years of experience."
            />
            <FeatureCard 
              icon={<FaGem size={32} />} 
              title="Premium Products" 
              desc="We strictly use high-end, cruelty-free beauty products for a flawless finish."
            />
          </motion.div>
        </div>
      </section>

      {/* 4. ANIMATED TESTIMONIALS SLIDESHOW */}
      <section className="py-24 px-6 max-w-5xl mx-auto overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-rosegold mb-4">Client Love</h2>
          <p className="text-gray-400">Hear from our beautiful clients and students.</p>
        </div>

        <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full max-w-3xl bg-luxury border border-rosegold/20 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(183,110,121,0.1)] flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative shrink-0">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-rosegold p-1"
                />
                <div className="absolute -bottom-2 -right-2 bg-rosegold text-luxury w-8 h-8 rounded-full flex items-center justify-center">
                  <FaQuoteLeft size={12} />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-lg md:text-xl italic mb-6 leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </p>
                <h4 className="text-rosegold font-bold tracking-wider uppercase">
                  {testimonials[currentSlide].name}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Slideshow Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-rosegold scale-125' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 5. CONTACT INFORMATION SECTION */}
      <section className="py-20 bg-[#121212] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400">Reach out for bookings, collaborations, or course inquiries.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <ContactCard 
              icon={<FaPhoneAlt size={24} />} 
              title="Phone" 
              info="+251 714 358 869" 
              link="tel:+251714358869" 
            />
            <ContactCard 
              icon={<FaEnvelope size={24} />} 
              title="Email" 
              info="hermelab19@gmail.com" 
              link="mailto:hermelab19@gmail.com" 
            />
            <ContactCard 
              icon={<FaTelegramPlane size={24} />} 
              title="Telegram" 
              info="@YourTelegram" 
              link="https://t.me/yourtelegramhandle" 
            />
            <ContactCard 
              icon={<FaLinkedinIn size={24} />} 
              title="LinkedIn" 
              info="Connect with us" 
              link="https://linkedin.com/in/yourprofile" 
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// --- REUSABLE MICRO-COMPONENTS ---

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-luxury p-8 rounded-2xl border border-white/5 hover:border-rosegold/30 transition-colors duration-300 flex flex-col items-center text-center group"
    >
      <div className="w-16 h-16 rounded-full bg-rosegold/10 text-rosegold flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rosegold group-hover:text-luxury transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ContactCard({ icon, title, info, link }) {
  return (
    <motion.a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      className="flex flex-col items-center justify-center p-8 bg-luxury rounded-2xl border border-white/5 hover:border-rosegold/50 hover:bg-white/5 transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-rosegold/10 text-rosegold rounded-full flex items-center justify-center mb-4 group-hover:bg-rosegold group-hover:text-luxury transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">{info}</p>
    </motion.a>
  );
}
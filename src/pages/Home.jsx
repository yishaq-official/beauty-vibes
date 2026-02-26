import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/mockData';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('IMG_20260226_230532_105.jpg')` }} // Use the dynamic powder brush image
        >
          <div className="absolute inset-0 bg-luxury/80 backdrop-blur-sm"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl"
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

      {/* ABOUT PREVIEW */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <img src="IMG_20260226_230531_939.jpg" alt="Salon Logo" className="w-full max-w-md mx-auto rounded-full shadow-2xl shadow-rosegold/20" />
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-serif text-rosegold mb-6">Mastering the Art of Beauty</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            With over a decade of industry experience, we blend premium salon services with elite, hands-on training. Our certified professionals are dedicated to enhancing your natural beauty while educating the next generation of top-tier stylists and makeup artists.
          </p>
        </motion.div>
      </section>
      
      {/* Add Services & Testimonial Preview Sections similarly using Framer Motion's whileInView... */}
    </main>
  );
}
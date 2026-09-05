import { motion } from 'framer-motion';
import { services } from '../data/mockData';
import { openTelegram } from '../utils/telegram';
import { FaCrown, FaClock, FaCheckCircle, FaMagic } from 'react-icons/fa';

/* ---------------- ANIMATION VARIANTS ---------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const floating = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

/* ---------------- PAGE ---------------- */

export default function Services() {
  return (
    <main className="bg-[#0e0e0e] text-white min-h-screen relative overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(183,110,121,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.04),transparent_40%)]"></div>

      {/* HERO HEADER */}
      <section className="relative pt-36 pb-24 text-center px-6">
        <motion.div
          variants={floating}
          animate="animate"
          className="absolute top-24 left-20 w-40 h-40 bg-rosegold/20 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-rosegold mb-6">
            Our Premium Services
          </h1>

          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Indulge in our curated collection of luxury beauty treatments —
            professionally designed to elevate your elegance and confidence.
          </p>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <section className="py-10 border-y border-white/5 bg-[#121212]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          <StatItem icon={<FaMagic />} value="100%" label="Luxury Products" />
          <StatItem icon={<FaCrown />} value="500+" label="Satisfied Clients" />
          <StatItem icon={<FaClock />} value="On-Time" label="Service Delivery" />
          <StatItem icon={<FaCheckCircle />} value="Certified" label="Professionals" />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#151515] to-[#111] hover:border-rosegold/40 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              {/* Popular Ribbon */}
              {index === 0 && (
                <div className="absolute top-5 left-5 z-20 bg-rosegold text-black text-xs px-4 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                <img
                  src={
                    service.image.startsWith('http')
                      ? service.image
                      : `/${service.image}`
                  }
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between h-[260px]">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-rosegold transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <button 
  onClick={() => openTelegram('service', service.name)}
  className="w-full py-3.5 relative overflow-hidden group/btn rounded-full border border-rosegold bg-transparent text-rosegold font-bold uppercase tracking-wider text-sm transition-all duration-300"
>
                  <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">
                    Book Appointment
                  </span>
                  <div className="absolute inset-0 bg-rosegold scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-300 ease-out"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#121212] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-rosegold mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <ProcessStep number="01" title="Choose Service" desc="Select your desired luxury treatment from our premium collection." />
            <ProcessStep number="02" title="Book via Telegram" desc="Confirm your appointment instantly with our booking system." />
            <ProcessStep number="03" title="Enjoy Luxury" desc="Relax while our certified experts deliver flawless results." />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-rosegold mb-6">
            Experience Luxury Like Never Before
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Your beauty deserves premium attention. Book your personalized
            session today and transform your look with confidence.
          </p>

          <button
            onClick={() => openTelegram('service', 'General Booking')}
            className="px-12 py-4 bg-rosegold text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(183,110,121,0.5)] transition-all duration-300"
          >
            Book Now
          </button>
        </motion.div>
      </section>

    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-rosegold text-2xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold text-white">{value}</h3>
      <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

function ProcessStep({ number, title, desc }) {
  return (
    <div className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 hover:border-rosegold/40 transition duration-300">
      <div className="text-rosegold text-4xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
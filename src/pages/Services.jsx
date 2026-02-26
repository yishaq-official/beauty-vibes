import { motion } from 'framer-motion';
import { services } from '../data/mockData';
import { openWhatsApp } from '../utils/whatsapp';

// Staggered animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Services() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      
      {/* HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-rosegold mb-4">Our Premium Services</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Indulge in our curated selection of high-end beauty treatments. 
          Expertly executed to elevate your natural elegance.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {services.map((service) => (
          <motion.div 
            key={service.id}
            variants={cardVariants}
            className="group relative bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-rosegold/30 transition-colors duration-500 shadow-xl"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={`/${service.image}`} 
                alt={service.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* CONTENT CONTAINER */}
            <div className="p-8 flex flex-col justify-between h-[250px]">
              <div>
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-rosegold transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* BOOKING BUTTON */}
              <button 
                onClick={() => openWhatsApp('service', service.name)}
                className="w-full py-3.5 relative overflow-hidden group/btn rounded-full border border-rosegold bg-transparent text-rosegold font-bold uppercase tracking-wider text-sm transition-all duration-300"
              >
                <span className="relative z-10 group-hover/btn:text-luxury transition-colors duration-300">
                  Book Appointment
                </span>
                <div className="absolute inset-0 bg-rosegold transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </main>
  );
}
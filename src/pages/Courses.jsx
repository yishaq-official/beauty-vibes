import { motion } from 'framer-motion';
import { courses } from '../data/mockData';
import { openWhatsApp } from '../utils/whatsapp';

export default function Courses() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-rosegold mb-4">Training Academy</h1>
        <p className="text-gray-400 text-lg">Master your craft with our certified professional courses.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-800/50 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(183,110,121,0.2)] transition-shadow duration-300 group cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-black/70 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-white">{course.duration}</span>
                <span className="bg-rosegold/90 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-luxury">{course.level}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">{course.description}</p>
              
              <button 
                onClick={() => openWhatsApp('course', course.title)}
                className="w-full py-3 bg-luxury border border-rosegold text-rosegold rounded-xl font-bold hover:bg-rosegold hover:text-luxury transition-colors duration-300"
              >
                Register via WhatsApp
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
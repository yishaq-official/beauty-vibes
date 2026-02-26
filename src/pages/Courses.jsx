import { motion } from 'framer-motion';
import { courses } from '../data/mockData';
import { openTelegram } from '../utils/telegram';

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative pt-28 pb-20 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rosegold/10 blur-[140px] opacity-40 pointer-events-none" />

      {/* HEADER */}
      <div className="relative text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
          Training <span className="text-rosegold">Academy</span>
        </h1>

        <div className="w-24 h-[2px] bg-rosegold mx-auto mb-6"></div>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Master your craft with our certified professional courses.
          Elevate your skills and transform your passion into expertise.
        </p>
      </div>

      {/* COURSES GRID */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative bg-gradient-to-b from-zinc-900/60 to-black/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(183,110,121,0.25)] transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <span className="bg-black/70 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full text-white border border-white/10">
                  {course.duration}
                </span>

                <span className="bg-rosegold text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg shadow-rosegold/30">
                  {course.level}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rosegold transition-colors duration-300">
                {course.title}
              </h3>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2">
                {course.description}
              </p>

              {/* CTA BUTTON */}
              <button
                onClick={() => openWhatsApp('course', course.title)}
                className="relative w-full py-3 rounded-xl font-semibold tracking-wide overflow-hidden group/button"
              >
                {/* Glow Background */}
                <span className="absolute inset-0 bg-rosegold transition-all duration-300 group-hover/button:scale-105 shadow-[0_0_25px_rgba(183,110,121,0.4)] group-hover/button:shadow-[0_0_45px_rgba(183,110,121,0.7)]" />

                {/* Button Text */}
                <span className="relative text-black">
                  Register via WhatsApp
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
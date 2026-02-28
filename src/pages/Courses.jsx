import { motion } from 'framer-motion';
import { courses } from '../data/mockData';
import { openTelegram } from '../utils/telegram';

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative pt-28 pb-24 px-6 overflow-hidden"
    >
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f0f14] via-[#14141c] to-black" />

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rosegold/10 blur-[160px] opacity-40 pointer-events-none" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-rosegold/10 blur-[140px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide">
            Training <span className="text-rosegold">Academy</span>
          </h1>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-rosegold to-transparent mx-auto mb-6"></div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Master your craft with our certified professional courses.
            Elevate your skills and transform your passion into expertise.
          </p>
        </div>

        {/* ===== COURSES GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.03] backdrop-blur-xl shadow-2xl transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-rosegold/5 blur-2xl" />

              {/* ===== IMAGE ===== */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

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

              {/* ===== CONTENT ===== */}
              <div className="relative p-8">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-rosegold transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() => openTelegram('course', course.title)}
                  className="relative w-full py-3 rounded-xl font-semibold tracking-wide overflow-hidden group/button"
                >
                  <span className="absolute inset-0 bg-rosegold transition-all duration-300 group-hover/button:scale-105 shadow-[0_0_25px_rgba(183,110,121,0.4)] group-hover/button:shadow-[0_0_45px_rgba(183,110,121,0.7)]" />
                  <span className="relative text-black">
                    Register via Telegram
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
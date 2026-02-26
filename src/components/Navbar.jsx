import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Glass background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0f0f14]/80 backdrop-blur-xl shadow-lg border-b border-rosegold/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Soft Glow Line */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rosegold/40 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-rosegold/20 blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
            <img
              src="/IMG_20260226_230531_939.jpg"
              alt="Salon Logo"
              className="relative w-full h-full object-cover rounded-full border-2 border-transparent group-hover:border-rosegold transition-all duration-300 group-hover:scale-105"
            />
          </div>

          <span className="text-2xl font-serif text-white tracking-wide group-hover:tracking-wider transition-all duration-300">
            Beauty<span className="text-rosegold">Academy</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-medium tracking-widest uppercase group"
            >
              <span
                className={`transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-rosegold'
                    : 'text-gray-300 group-hover:text-white'
                }`}
              >
                {link.name}
              </span>

              {/* Animated Underline */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-rosegold transition-all duration-400 ${
                  isActive(link.path)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            to="/services"
            className="relative px-7 py-3 rounded-full font-semibold text-sm tracking-wider overflow-hidden group"
          >
            {/* Glow Background */}
            <span className="absolute inset-0 bg-rosegold rounded-full transition-all duration-300 group-hover:scale-105 shadow-[0_0_25px_rgba(183,110,121,0.4)] group-hover:shadow-[0_0_40px_rgba(183,110,121,0.7)]" />

            {/* Button Text */}
            <span className="relative text-black group-hover:text-black transition-colors duration-300">
              Book Now
            </span>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-gray-300 hover:text-rosegold transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt4 size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#111118]/95 backdrop-blur-xl border-b border-rosegold/20 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-7">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg tracking-widest uppercase transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-rosegold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/services"
                className="relative mt-4 py-3 text-center font-semibold tracking-wider rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-rosegold rounded-full shadow-[0_0_25px_rgba(183,110,121,0.5)] group-hover:shadow-[0_0_40px_rgba(183,110,121,0.8)] transition-all duration-300" />
                <span className="relative text-black">
                  Book Now
                </span>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
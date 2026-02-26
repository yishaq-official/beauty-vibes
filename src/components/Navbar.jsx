import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle glassmorphism background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-luxury/80 backdrop-blur-md shadow-lg border-b border-rosegold/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-rosegold transition-colors duration-300">
            {/* Using the provided logo image */}
            <img 
              src="IMG_20260226_230531_939.jpg" 
              alt="Salon Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-serif text-white tracking-wide">
            Beauty<span className="text-rosegold">Academy</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                isActive(link.path) 
                  ? 'text-rosegold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden md:block">
          <Link 
            to="/services"
            className="px-6 py-2.5 bg-rosegold text-luxury font-bold rounded-full hover:bg-rosegold-light transition-all duration-300 shadow-[0_0_15px_rgba(183,110,121,0.3)] hover:shadow-[0_0_25px_rgba(183,110,121,0.6)] transform hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden text-gray-300 hover:text-rosegold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt4 size={28} />}
        </button>
      </div>

      {/* MOBILE MENU (Framer Motion AnimatePresence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-luxury border-b border-rosegold/20 shadow-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-lg font-medium tracking-wider uppercase transition-colors duration-300 ${
                    isActive(link.path) ? 'text-rosegold' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/services"
                className="w-full py-3 bg-rosegold text-luxury text-center font-bold rounded-full mt-4"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
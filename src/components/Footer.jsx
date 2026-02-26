import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/IMG_20260226_230531_939.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-serif text-white tracking-wide">
                Beauty<span className="text-rosegold">Vibes</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Premium personalized makeup services delivered to your door, and professional academy training to kickstart your beauty career.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-rosegold transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-rosegold transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-rosegold transition-colors text-sm">Training Academy</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="mailto:hermelab19@gmail.com" className="hover:text-rosegold transition-colors">hermelab19@gmail.com</a></li>
              <li><a href="tel:+251714358869" className="hover:text-rosegold transition-colors">+251 714 358 869</a></li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://t.me/yourtelegramhandle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-rosegold hover:text-luxury transition-all duration-300">
                <FaTelegramPlane size={18} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-rosegold hover:text-luxury transition-all duration-300">
                <FaLinkedinIn size={18} />
              </a>
              {/* Added Instagram as a placeholder since it's highly relevant to beauty */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-rosegold hover:text-luxury transition-all duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} BeautyVibes. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="cursor-pointer hover:text-rosegold transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-rosegold transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
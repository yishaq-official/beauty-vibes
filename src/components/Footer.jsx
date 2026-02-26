import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0f0f14] via-[#14141c] to-black border-t border-white/10 pt-20 pb-10 overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-rosegold/10 blur-[120px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/IMG_20260226_230531_939.jpg"
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-rosegold/40 group-hover:ring-rosegold transition-all duration-300"
              />
              <span className="text-2xl font-serif text-white tracking-wide">
                Beauty<span className="text-rosegold">Vibes</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium personalized makeup services delivered to your door,
              and professional academy training to elevate your beauty career.
            </p>

            {/* Accent Line */}
            <div className="w-16 h-[2px] bg-rosegold rounded-full"></div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-rosegold"></span>
            </h4>

            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Our Services", path: "/services" },
                { name: "Training Academy", path: "/courses" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="relative text-gray-400 hover:text-rosegold transition-colors text-sm after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-rosegold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-rosegold"></span>
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:hermelab19@gmail.com"
                  className="hover:text-rosegold transition-colors"
                >
                  hermelab19@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+251714358869"
                  className="hover:text-rosegold transition-colors"
                >
                  +251 714 358 869
                </a>
              </li>
              <li className="text-gray-500">
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
              Follow Us
              <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-rosegold"></span>
            </h4>

            <div className="flex gap-5">
              {[
                {
                  icon: <FaTelegramPlane size={18} />,
                  link: "https://t.me/yourtelegramhandle"
                },
                {
                  icon: <FaLinkedinIn size={18} />,
                  link: "https://linkedin.com/in/yourprofile"
                },
                {
                  icon: <FaInstagram size={18} />,
                  link: "#"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-black hover:bg-rosegold transition-all duration-300 hover:scale-110 shadow-lg shadow-black/30"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm tracking-wide">
            &copy; {currentYear} BeautyVibes. Crafted with elegance.
          </p>

          <div className="flex gap-8 text-sm text-gray-500">
            {["Privacy Policy", "Terms of Service"].map((item, index) => (
              <span
                key={index}
                className="relative cursor-pointer hover:text-rosegold transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-rosegold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
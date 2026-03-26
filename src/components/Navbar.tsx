import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: 'Features', page: 'features' },
  { label: 'How It Works', page: 'how-it-works' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : currentPage === 'home'
          ? 'bg-transparent'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16 overflow-visible">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center group"
          >
            <img
              src="/qwiksend-logo.png"
              alt="QwikSend"
              className="w-auto group-hover:scale-105 transition-transform"
              style={{ height: '56px' }}
            />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === link.page
                    ? 'text-brand-600 bg-brand-50'
                    : scrolled || currentPage !== 'home'
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
            >
              Start Now
            </a>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || currentPage !== 'home'
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center px-4 py-3 rounded-xl text-white text-sm font-semibold"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

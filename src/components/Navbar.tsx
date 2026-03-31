import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: 'Features', page: 'features' },
  { label: 'How It Works', page: 'how-it-works' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'FAQ', page: 'faq' },
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
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass py-3'
            : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/logo.svg"
                alt="QwikSend"
                className="h-8 sm:h-9 w-auto transition-transform duration-300"
              />
            </motion.button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === link.page
                      ? 'text-brand-400'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {currentPage === link.page && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-white/5 border border-white/10"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ChevronRight size={16} />
              </motion.a>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-surface-950/95 backdrop-blur-xl" />
            <div className="relative pt-20 px-4">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.page}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(link.page)}
                    className={`w-full text-left px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                      currentPage === link.page
                        ? 'text-brand-400 bg-brand-500/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 pt-6 border-t border-white/10 space-y-3"
              >
                <a
                  href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center px-5 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ChevronRight size={18} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <motion.button
              onClick={() => handleNav('home')}
              className="flex items-center mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/logo.svg"
                alt="QwikSend"
                className="h-8 w-auto"
              />
            </motion.button>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              Recover abandoned carts automatically with WhatsApp reminders. Zero per-message cost.
            </p>
            <div className="flex items-center gap-2 mt-6">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/40 hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  <item.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', page: 'features' },
                { label: 'How It Works', page: 'how-it-works' },
                { label: 'Pricing', page: 'pricing' },
                { label: 'FAQ', page: 'faq' },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Contact Us', page: 'contact' },
                { label: 'Privacy Policy', page: 'home' },
                { label: 'Terms of Service', page: 'home' },
                { label: 'Support', page: 'contact' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} QwikSend. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full text-brand-400">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
              Zero Message Cost
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

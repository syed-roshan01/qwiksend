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
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <button onClick={() => handleNav('home')} className="flex items-center mb-4 group">
              <img
                src="/qwiksend-logo.png"
                alt="QwikSend"
                className="h-16 w-auto group-hover:scale-105 transition-transform"
              />
            </button>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Recover abandoned carts automatically with WhatsApp reminders. Zero per-message cost. Built for Shopify & WooCommerce stores.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white">
                <Mail size={16} />
              </a>
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
                    className="text-sm hover:text-white transition-colors"
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
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} QwikSend. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs badge px-3 py-1 rounded-full text-brand-400">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse-slow" />
              Zero Message Cost
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

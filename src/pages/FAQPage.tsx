import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Zap, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import AnimatedBackground from '../components/AnimatedBackground';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

const categories = [
  {
    name: 'General',
    faqs: [
      { q: 'What is QwikSend?', a: 'QwikSend is a WhatsApp automation software that helps Shopify and WooCommerce store owners recover abandoned carts by sending automated WhatsApp reminders.' },
      { q: 'Is QwikSend a WhatsApp API product?', a: 'No. QwikSend uses WhatsApp Web automation, which means zero per-message costs and no API approval process required.' },
      { q: 'Is QwikSend safe to use?', a: 'Yes. The software runs locally on your device. Your customer data and WhatsApp connection never go to any third-party server.' },
      { q: 'Do I need technical knowledge?', a: 'No. QwikSend is designed for non-technical users. Setup takes under 10 minutes with no coding required.' },
    ],
  },
  {
    name: 'Integrations',
    faqs: [
      { q: 'Does QwikSend work with Shopify?', a: 'Yes, full Shopify integration. Connect using your store URL and API key in about 2 minutes.' },
      { q: 'Does QwikSend work with WooCommerce?', a: 'Yes, fully supports WooCommerce. You will need to install the WooCommerce REST API and generate keys.' },
      { q: 'Can I connect multiple stores?', a: 'Each QwikSend installation supports one store connection. Multiple stores need separate installations.' },
      { q: 'Other e-commerce platforms?', a: 'Currently supports Shopify and WooCommerce. Magento and BigCommerce are on the roadmap.' },
    ],
  },
  {
    name: 'WhatsApp',
    faqs: [
      { q: 'Do I need a WhatsApp Business account?', a: 'No. QwikSend works with your regular WhatsApp account using WhatsApp Web.' },
      { q: 'How many messages can I send?', a: 'No hard limit set by QwikSend. Smart rate limiting keeps usage natural.' },
      { q: 'Will my account get banned?', a: 'QwikSend mimics natural messaging patterns and only messages customers who interacted with your store. Risk is minimized.' },
      { q: 'Can I customize messages?', a: 'Yes, fully. Create custom templates with personalization and interactive buttons.' },
    ],
  },
  {
    name: 'Technical',
    faqs: [
      { q: 'What operating systems?', a: 'Available for Windows and macOS. Linux version available for advanced users.' },
      { q: 'Does it need to run continuously?', a: 'Yes, for automated reminders. It is lightweight (under 200MB RAM) and runs in background.' },
      { q: 'Where is my data stored?', a: 'All data is processed and stored locally on your device only. No cloud storage.' },
      { q: 'How often does it sync?', a: 'Real-time sync using webhooks (Shopify) or periodic polling (WooCommerce).' },
    ],
  },
  {
    name: 'Billing',
    faqs: [
      { q: 'What is included in all plans?', a: 'Full QwikSend software — automated reminders, templates, integrations, analytics, and zero per-message cost.' },
      { q: 'Is there a free trial?', a: 'Yes, 7-day free trial. No credit card required.' },
      { q: 'Do you offer refunds?', a: 'Yes, 14-day money-back guarantee if not satisfied.' },
      { q: 'Can I change plans?', a: 'Yes, upgrade or downgrade anytime. Upgrades effective immediately.' },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      className={`glass-card rounded-xl overflow-hidden transition-colors ${open ? 'border-brand-500/30' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
      >
        <span className={`font-medium text-sm leading-snug transition-colors ${open ? 'text-brand-400' : 'text-white'}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} className={`shrink-0 ${open ? 'text-brand-400' : 'text-white/40'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 pb-5">
              <p className="text-white/50 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
  const [activeCategory, setActiveCategory] = useState('General');
  const currentCategory = categories.find((c) => c.name === activeCategory)!;

  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 px-4 py-2 rounded-full mb-6"
          >
            <HelpCircle size={14} className="text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">FAQ</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked
            <br />
            <span className="text-brand-400">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl mx-auto"
          >
            Everything you need to know about QwikSend. Can't find your answer? Reach out directly.
          </motion.p>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mb-10 justify-center"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-brand-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {currentCategory.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-card rounded-2xl p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
              <Zap size={22} className="text-brand-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Still have questions?</h3>
            <p className="text-white/40 text-sm mb-6">
              Our team is here to help. We'll respond within 24 hours.
            </p>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

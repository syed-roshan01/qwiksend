import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ArrowRight, Star, Smartphone } from 'lucide-react';
import CTASection from '../components/CTASection';
import AnimatedBackground from '../components/AnimatedBackground';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const plans = [
  {
    name: 'Monthly',
    price: '₹499',
    period: '/month',
    description: 'Perfect for testing.',
    popular: false,
    savings: null,
    devices: '1 device',
    campaigns: '5 campaigns',
  },
  {
    name: '6 Months',
    price: '₹1,999',
    period: '/6 mo',
    perMonth: '₹333/mo',
    description: 'Most popular choice.',
    popular: true,
    savings: 'Save ₹996',
    devices: '3 devices',
    campaigns: '100 campaigns',
  },
  {
    name: 'Yearly',
    price: '₹3,499',
    period: '/year',
    perMonth: '₹292/mo',
    description: 'Best value.',
    popular: false,
    savings: 'Save ₹2,489',
    devices: '8 devices',
    campaigns: 'Unlimited',
  },
];

const allFeatures = [
  'Abandoned cart recovery',
  'Automated WhatsApp reminders',
  'Custom message templates',
  'Interactive buttons',
  'Shopify integration',
  'WooCommerce integration',
  'Analytics dashboard',
  'Local software',
  'Zero per-message cost',
  'No Meta API required',
  'No coding required',
  '5-minute setup',
];

const faqs = [
  { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade anytime. The difference will be prorated.' },
  { q: 'Is there a free trial?', a: 'We offer a 7-day free trial on all plans. No credit card required.' },
  { q: 'What payment methods?', a: 'We accept UPI, credit/debit cards, net banking, and all major Indian payment methods.' },
  { q: 'Can I get a refund?', a: 'Yes, we offer a 14-day money-back guarantee if you are not satisfied.' },
];

export default function PricingPage({ onNavigate }: PricingPageProps) {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 px-4 py-2 rounded-full mb-6"
          >
            <Zap size={14} className="text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">Simple Pricing</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Invest Once,
            <br />
            <span className="text-brand-400">Recover Forever</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl mx-auto"
          >
            No hidden fees. No per-message charges. Just one flat fee to automate your cart recovery.
          </motion.p>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid sm:grid-cols-3 gap-6 mb-16"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl p-6 sm:p-8 card-interactive ${
                  plan.popular
                    ? 'glass-card border-brand-500/30'
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-white/30 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/30 text-sm mb-2">{plan.period}</span>
                  </div>
                  {plan.perMonth && (
                    <p className="text-brand-400 text-sm font-medium">≈ {plan.perMonth}</p>
                  )}
                  {plan.savings && (
                    <div className="mt-2 inline-flex items-center gap-1 bg-brand-500/10 text-brand-400 text-xs font-semibold px-2 py-1 rounded-lg">
                      <Star size={11} className="fill-brand-400" />
                      {plan.savings}
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-white/50 bg-white/5 rounded-lg px-3 py-2">
                    <Smartphone size={14} className="text-brand-400" />
                    {plan.devices}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50 bg-white/5 rounded-lg px-3 py-2">
                    <Zap size={14} className="text-brand-400" />
                    {plan.campaigns}
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center block ${
                    plan.popular ? 'btn-primary' : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">All plans include</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle2 size={15} className="text-brand-500 shrink-0" />
                  {feat}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Pricing FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-6"
              >
                <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-3">Not sure which plan?</h3>
            <p className="text-white/40 mb-6 text-sm">
              Start with monthly to test. Upgrade anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
                <ArrowRight size={16} />
              </motion.a>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Talk to Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShoppingBag, Smartphone, MessageSquare, TrendingUp, Zap, Play, Clock } from 'lucide-react';
import CTASection from '../components/CTASection';
import AnimatedBackground from '../components/AnimatedBackground';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

const steps = [
  {
    number: '01',
    icon: ShoppingBag,
    title: 'Connect Your Store',
    subtitle: 'Shopify or WooCommerce',
    desc: 'Link your store to QwikSend using your store URL and API key. The connection is secure and takes under 2 minutes.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    points: ['Enter your store URL', 'Generate and paste API key', 'QwikSend verifies connection', 'Customer data syncs automatically'],
    duration: '2 minutes',
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Connect WhatsApp',
    subtitle: 'Scan QR code',
    desc: 'Open WhatsApp Web in QwikSend and scan the QR code with your phone. Your existing number works instantly.',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    points: ['Open WhatsApp section', 'Scan QR with your phone', 'Connected instantly', 'No new number needed'],
    duration: '1 minute',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Create Reminders',
    subtitle: 'Personalized templates',
    desc: 'Write your abandoned cart reminder messages. Add customer name, product details, and checkout link automatically.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    points: ['Use pre-built templates', 'Add personalization', 'Include Buy Now buttons', 'Set timing for reminders'],
    duration: '5 minutes',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Recover Revenue',
    subtitle: 'Automated 24/7',
    desc: 'Once set up, QwikSend runs automatically. When a customer abandons their cart, reminders are sent on schedule.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    points: ['Automatic detection', 'Reminders on schedule', 'Personalized messages', 'Track in dashboard'],
    duration: 'Ongoing',
  },
];

const faqs = [
  { q: 'What if the customer already purchased?', a: 'QwikSend detects completed orders and stops the reminder sequence immediately.' },
  { q: 'When is the first reminder sent?', a: 'Default is 1 hour after abandonment, with a follow-up at 24 hours. Fully configurable.' },
  { q: 'Can I message international customers?', a: 'Yes, WhatsApp works globally. Anyone with WhatsApp can receive reminders.' },
  { q: 'Does QwikSend need to run continuously?', a: 'Yes, it needs to be running for reminders to send. It is lightweight and uses minimal resources.' },
];

export default function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
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
            <Play size={14} className="text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">How It Works</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Up and Running in
            <br />
            <span className="text-brand-400">Under 10 Minutes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl mx-auto"
          >
            QwikSend is built to be simple. Follow these four steps and your cart recovery system will be live.
          </motion.p>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl sm:text-5xl font-black text-white/10">{step.number}</span>
                    <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                      <step.icon size={20} className={step.color} />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-white/30 uppercase tracking-wider">{step.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{step.title}</h2>
                  <p className="text-white/40 leading-relaxed mb-6">{step.desc}</p>

                  <ul className="space-y-3 mb-6">
                    {step.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/50">
                        <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-white/50">
                    <Clock size={14} className="text-brand-400" />
                    <span>Takes: <strong className="text-white">{step.duration}</strong></span>
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                        <step.icon size={20} className={step.color} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Step {step.number}</p>
                        <p className="text-white/40 text-xs">{step.title}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <span className="w-2 h-2 bg-brand-500 rounded-full" />
                        <span className="text-brand-400 text-xs">Active</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {step.points.map((pt, j) => (
                        <div key={j} className="flex items-center gap-2 bg-white/[0.02] rounded-lg px-3 py-2.5 border border-white/5">
                          <CheckCircle2 size={13} className="text-brand-500 shrink-0" />
                          <span className="text-white/60 text-xs">{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between bg-brand-500/10 border border-brand-500/20 rounded-lg px-3 py-2">
                      <span className="text-brand-400 text-xs font-medium">Completion time</span>
                      <span className="text-brand-300 text-xs font-bold">{step.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-brand-400" />
                <span className="text-brand-400 text-sm font-medium">Total: ~10 minutes</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Your automation runs 24/7 after setup</h3>
              <p className="text-white/40 text-sm">Set it once, recover revenue while you sleep.</p>
            </div>
            <motion.a
              href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Common Questions</h2>
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
                <h4 className="font-semibold text-white mb-2 text-sm">{faq.q}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

import { motion } from 'framer-motion';
import { MessageSquare, DollarSign, Smartphone, Settings, BarChart3, Shield, Zap, ShoppingBag, ShoppingCart, CheckCircle2, ArrowRight, Bell, LayoutGrid as Layout } from 'lucide-react';
import CTASection from '../components/CTASection';
import AnimatedBackground from '../components/AnimatedBackground';

interface FeaturesPageProps {
  onNavigate: (page: string) => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const features = [
  {
    icon: ShoppingCart,
    title: 'Abandoned Cart Recovery',
    desc: 'Automatically detects when a customer abandons their cart and triggers personalized WhatsApp reminders.',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    points: ['Real-time cart detection', 'Automatic trigger system', 'Works 24/7'],
  },
  {
    icon: MessageSquare,
    title: 'Interactive Templates',
    desc: 'Create beautiful WhatsApp messages with interactive buttons for one-tap checkout.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    points: ['Custom templates', 'Quick-reply buttons', 'Product previews'],
  },
  {
    icon: DollarSign,
    title: 'Zero Message Cost',
    desc: 'Uses WhatsApp Web automation. No Meta API, no per-conversation charges. Ever.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    points: ['No Meta API needed', 'No approval process', 'Unlimited messages'],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Integration',
    desc: 'Connect your Shopify store in minutes with seamless data sync.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    points: ['One-click connection', 'Real-time sync', 'No coding'],
  },
  {
    icon: Layout,
    title: 'WooCommerce Integration',
    desc: 'Full WooCommerce compatibility with the same seamless automation.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    points: ['WordPress compatible', 'API key setup', 'Auto-sync'],
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Track recovery performance with clean, insightful metrics.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    points: ['Revenue tracking', 'Conversion metrics', 'Historical reports'],
  },
  {
    icon: Shield,
    title: 'Local & Secure',
    desc: 'Runs locally on your device. Your data never goes to third-party servers.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    points: ['Runs on device', 'Full data ownership', 'GDPR-friendly'],
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'Get notified when carts are recovered and track all activity.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    points: ['Recovery alerts', 'Daily summaries', 'Activity log'],
  },
  {
    icon: Settings,
    title: 'Easy Setup',
    desc: 'A guided setup process anyone can follow. Up and running in 5 minutes.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    points: ['Step-by-step wizard', 'No coding needed', 'Documentation'],
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Web Control',
    desc: 'Uses your existing WhatsApp number. No new number or business account needed.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    points: ['Existing number', 'No verification', 'Instant activation'],
  },
  {
    icon: Zap,
    title: 'Real-Time Detection',
    desc: 'Cart abandonment detected instantly for timely reminders.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    points: ['Instant detection', 'Configurable timing', 'Smart filtering'],
  },
];

const comparison = [
  { feature: 'Per-message cost', qwiksend: '₹0 (Free)', metaapi: '₹0.60–₹1.20' },
  { feature: 'API Approval', qwiksend: 'No', metaapi: 'Yes (weeks)' },
  { feature: 'Setup time', qwiksend: '5 minutes', metaapi: '1–2 weeks' },
  { feature: 'Technical skills', qwiksend: 'None', metaapi: 'Developer needed' },
  { feature: 'Existing number', qwiksend: 'Yes', metaapi: 'New number' },
  { feature: 'Message limit', qwiksend: 'Unlimited', metaapi: 'Tier limits' },
];

export default function FeaturesPage({ onNavigate }: FeaturesPageProps) {
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
            <span className="text-brand-400 text-sm font-medium">All Features</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Powerful Features to
            <br />
            <span className="text-brand-400">Maximize Recovery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl mx-auto"
          >
            Everything you need to automate abandoned cart recovery — with zero per-message costs.
          </motion.p>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 card-interactive"
              >
                <div className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center mb-5`}>
                  <feat.icon size={22} className={feat.color} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feat.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{feat.desc}</p>
                <ul className="space-y-2">
                  {feat.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              QwikSend vs Meta API
            </h2>
            <p className="text-white/40">Why QwikSend is the smarter choice.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/5">
              <div className="p-4 text-sm font-medium text-white/50">Feature</div>
              <div className="p-4 text-sm font-bold text-brand-400 border-l border-white/5 flex items-center gap-2">
                <Zap size={14} />
                QwikSend
              </div>
              <div className="p-4 text-sm font-medium text-white/40 border-l border-white/5">Meta API</div>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                <div className="p-4 text-sm text-white/70 font-medium">{row.feature}</div>
                <div className="p-4 text-sm text-brand-400 font-semibold border-l border-white/5 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-500" />
                  {row.qwiksend}
                </div>
                <div className="p-4 text-sm text-white/40 border-l border-white/5">{row.metaapi}</div>
              </div>
            ))}
          </motion.div>
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
              <h3 className="text-xl font-bold text-white mb-2">Ready to see it in action?</h3>
              <p className="text-white/40">Start your first automated recovery campaign in minutes.</p>
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

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

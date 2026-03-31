import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShoppingCart,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  DollarSign,
  BarChart3,
  Star,
  ChevronRight,
  Smartphone,
  Sparkles,
  Play,
} from 'lucide-react';
import CTASection from '../components/CTASection';
import DownloadSection from '../components/DownloadSection';
import AnimatedBackground from '../components/AnimatedBackground';

interface LandingPageProps {
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

function HeroSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 glass-light px-3 py-1.5 rounded-full mb-6"
          >
            <Sparkles size={12} className="text-brand-400" />
            <span className="text-brand-400 text-xs font-medium">
              WhatsApp Automation for E-Commerce
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-5"
          >
            Recover Abandoned
            <br />
            <span className="text-brand-400">Carts Automatically</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-7 leading-relaxed px-4 sm:px-0"
          >
            Send personalized WhatsApp reminders to customers who leave without purchasing.
            Zero per-message cost. Just recovered revenue.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-0"
          >
            <motion.a
              href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Now — It's Free
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.a>
            <motion.button
              onClick={() => onNavigate('how-it-works')}
              className="btn-secondary px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={16} className="sm:w-[18px] sm:h-[18px]" />
              See How It Works
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3"
          >
            {[
              'Shopify Compatible',
              'WooCommerce Compatible',
              'Secure Automation',
              'No API Cost',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-white/40 text-xs sm:text-sm">
                <CheckCircle2 size={12} className="text-brand-500 sm:w-[14px] sm:h-[14px]" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated">
        <div className="px-4 py-3 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-brand-500/60" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white/5 rounded-lg px-3 py-1 text-xs text-white/40 flex items-center gap-1.5">
              <Zap size={10} className="text-brand-400" />
              QwikSend Dashboard
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {[
              { label: 'Recovered', value: '₹45,230', color: 'text-brand-400' },
              { label: 'Reminders', value: '284', color: 'text-blue-400' },
              { label: 'Conv. Rate', value: '28.4%', color: 'text-orange-400' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/5"
              >
                <p className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-white/30 text-xs sm:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <p className="text-white/40 text-xs font-medium">Recent Reminders Sent</p>
            {[
              { name: 'Priya S.', item: 'Running Shoes', amount: '₹2,499', status: 'Recovered', time: '2m ago' },
              { name: 'Rahul M.', item: 'Backpack', amount: '₹1,899', status: 'Sent', time: '5m ago' },
              { name: 'Anjali K.', item: 'Watch', amount: '₹3,200', status: 'Recovered', time: '12m ago' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center justify-between bg-white/[0.02] rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-white/5"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <span className="text-brand-400 text-xs font-bold">{item.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.name}</p>
                    <p className="text-white/30 text-xs">{item.item} · {item.amount}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    item.status === 'Recovered'
                      ? 'bg-brand-500/10 text-brand-400'
                      : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {item.status}
                  </span>
                  <p className="text-white/20 text-xs mt-1 hidden sm:block">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/5"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                <MessageSquare size={12} className="text-white" />
              </div>
              <span className="text-white/70 text-sm font-medium">WhatsApp Reminder Preview</span>
            </div>
            <div className="bg-surface-900 rounded-xl p-3 sm:p-4">
              <div className="inline-block bg-brand-500/10 rounded-xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 max-w-xs">
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Hi Priya! You left something in your cart. Your <strong className="text-white">Running Shoes</strong> are waiting! 🛒
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="bg-brand-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">Buy Now</span>
                  <span className="bg-white/5 text-white/50 text-xs px-3 py-1.5 rounded-full">Later</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, type: 'spring', stiffness: 200 }}
        className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-glow-sm"
      >
        Live
      </motion.div>
    </div>
  );
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = 20;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / stepTime));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 70, suffix: '%', label: 'Cart abandonment rate', highlight: true },
    { value: 28, suffix: '%', label: 'Recovery with WhatsApp' },
    { value: 0, suffix: '', label: 'Per-message cost' },
    { value: 5, suffix: ' min', label: 'Setup time' },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
                stat.highlight ? 'text-red-400' : 'text-brand-400'
              }`}>
                {stat.value === 0 ? '₹0' : <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
              </p>
              <p className="text-white/40 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    { icon: DollarSign, title: 'Price Hesitation', desc: 'Customers second-guess and leave to compare prices.' },
    { icon: Clock, title: 'Distractions', desc: 'Life gets in the way during checkout.' },
    { icon: ShoppingCart, title: 'Payment Issues', desc: 'Failed cards or complex checkout flows.' },
    { icon: TrendingUp, title: 'Comparison Shopping', desc: 'Customers browse multiple stores before buying.' },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-6"
          >
            <span className="text-red-400 text-sm font-medium">The Problem</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Your Store is Losing
            <br />
            <span className="text-red-400">60–80% of Revenue</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed"
          >
            Customers add products to carts, start checkout, and disappear — forever. Without recovery, that revenue is gone.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 card-interactive"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-red-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { step: '01', title: 'Cart Abandoned', desc: 'Customer leaves without completing purchase.', icon: ShoppingCart, color: 'text-white/40', bg: 'bg-white/5' },
    { step: '02', title: 'QwikSend Detects', desc: 'Instantly detects the abandoned cart.', icon: Zap, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { step: '03', title: 'WhatsApp Sent', desc: 'Personalized reminder sent automatically.', icon: MessageSquare, color: 'text-brand-400', bg: 'bg-brand-500/10' },
    { step: '04', title: 'Revenue Recovered', desc: 'Customer returns and completes checkout.', icon: TrendingUp, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 px-4 py-2 rounded-full mb-6"
            >
              <Zap size={14} className="text-brand-400" />
              <span className="text-brand-400 text-sm font-medium">The Solution</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              QwikSend Recovers
              <br />
              <span className="text-brand-400">Lost Revenue</span>
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/40 leading-relaxed mb-8"
            >
              Connects to your Shopify or WooCommerce store and automatically sends personalized WhatsApp reminders. No manual work. No per-message costs.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 mb-8">
              {[
                'Detects abandoned carts in real-time',
                'Sends personalized WhatsApp messages',
                'Interactive buttons for instant checkout',
                'Runs locally — no Meta API required',
                'Zero cost per message',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                  <span className="text-white/60">{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={fadeInUp}
              onClick={() => onNavigate('features')}
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Features
              <ArrowRight size={16} />
            </motion.button>
          </div>

          <motion.div variants={stagger} className="space-y-4">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 card-interactive"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-white/20">{item.step}</span>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-white/40">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureHighlights({ onNavigate }: { onNavigate: (page: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { icon: MessageSquare, title: 'Automated Reminders', desc: 'Set up once and let QwikSend handle all reminder sequences automatically.', color: 'text-brand-400', bg: 'bg-brand-500/10' },
    { icon: DollarSign, title: 'Zero Message Cost', desc: 'Uses WhatsApp Web — no Meta API, no per-conversation charges.', color: 'text-green-400', bg: 'bg-green-500/10' },
    { icon: Smartphone, title: 'Interactive Templates', desc: 'Custom WhatsApp templates with buttons for instant checkout.', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track recovered revenue, conversion rates, and performance.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { icon: Shield, title: 'Runs Locally', desc: 'Software runs on your device. Your data never leaves your control.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6"
          >
            <span className="text-white/60 text-sm font-medium">Features</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Everything You Need to
            <br />
            <span className="text-brand-400">Recover Revenue</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/40 max-w-2xl mx-auto"
          >
            Powerful automation tools for Shopify and WooCommerce store owners.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 card-interactive"
            >
              <div className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center mb-4`}>
                <feat.icon size={22} className={feat.color} />
              </div>
              <h3 className="font-semibold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={() => onNavigate('features')}
            className="inline-flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition-colors"
          >
            View all features
            <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: 'Vikram Sharma', role: 'Shopify Store', content: 'QwikSend recovered ₹1.2 lakh in just the first month. Setup took 5 minutes.', avatar: 'VS', color: 'bg-emerald-500' },
    { name: 'Priya Nair', role: 'WooCommerce', content: 'We were losing 65% of carts. Now we recover about 30% with zero message cost.', avatar: 'PN', color: 'bg-sky-500' },
    { name: 'Rohit Agarwal', role: 'D2C Brand', content: 'The WhatsApp reminders feel personal. Customers appreciate the follow-up.', avatar: 'RA', color: 'bg-orange-500' },
    { name: 'Sneha Kulkarni', role: 'Shopify Seller', content: 'Recovered 4 big orders last week alone that I would have lost.', avatar: 'SK', color: 'bg-rose-500' },
    { name: 'Arjun Mehta', role: 'Electronics', content: 'High-ticket items mean every abandoned cart hurts. QwikSend closes 40% of them.', avatar: 'AM', color: 'bg-blue-500' },
    { name: 'Deepa Iyer', role: 'Beauty Brand', content: 'Our repeat purchase rate went up after WhatsApp follow-ups.', avatar: 'DI', color: 'bg-pink-500' },
  ];

  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-white/60 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Loved by Store Owners
          </h2>
          <p className="text-lg text-white/40">Real results from real businesses.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...row1, ...row1].map((t, i) => (
              <div key={i} className="w-72 sm:w-80 shrink-0 mx-3 glass-card rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-4 text-sm">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track" style={{ animationDirection: 'reverse' }}>
            {[...row2, ...row2].map((t, i) => (
              <div key={i} className="w-72 sm:w-80 shrink-0 mx-3 glass-card rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-4 text-sm">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const plans = [
    { name: 'Monthly', price: '₹499', period: '/month', note: 'Flexible', devices: '1 device', popular: false },
    { name: '6 Months', price: '₹1,999', period: '/6 mo', note: 'Save 33%', devices: '3 devices', popular: true },
    { name: 'Yearly', price: '₹3,499', period: '/year', note: 'Best value', devices: '8 devices', popular: false },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6"
          >
            <span className="text-white/60 text-sm font-medium">Pricing</span>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Simple Pricing
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/40 mb-12"
          >
            No hidden fees. No per-message costs. Ever.
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl p-6 card-interactive ${
                  plan.popular
                    ? 'glass-card border-brand-500/30'
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                  </div>
                )}
                <p className="font-semibold text-white mb-1">{plan.name}</p>
                <p className="text-xs text-brand-400 font-medium mb-4">{plan.note}</p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/30 text-sm mb-1">{plan.period}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white/40 mb-5 px-3 py-2 rounded-lg bg-white/5">
                  <Smartphone size={12} />
                  {plan.devices}
                </div>
                <a
                  href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold text-center block transition-all ${
                    plan.popular
                      ? 'btn-primary'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-sm text-white/30">
            All plans include unlimited reminders, Shopify & WooCommerce support.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <ProblemSection />
      <SolutionSection onNavigate={onNavigate} />
      <FeatureHighlights onNavigate={onNavigate} />
      <TestimonialsSection />
      <PricingTeaser />
      <DownloadSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

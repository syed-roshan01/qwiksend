import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface CTASectionProps {
  onNavigate: (page: string) => void;
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  onNavigate,
  title = 'Start Recovering Lost Revenue Today',
  subtitle = 'Join hundreds of store owners recovering abandoned carts automatically. Zero setup fees, zero per-message cost.',
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 px-4 py-2 rounded-full mb-6">
            <Zap size={14} className="text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">Start Free Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-lg text-white/40 mb-10 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
              <ArrowRight size={18} />
            </motion.a>
            <motion.button
              onClick={() => onNavigate('how-it-works')}
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See How It Works
            </motion.button>
          </div>

          <p className="mt-6 text-sm text-white/30">
            No credit card required • Cancel anytime • Setup in minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}

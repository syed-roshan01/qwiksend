import { ArrowRight, Zap } from 'lucide-react';

interface CTASectionProps {
  onNavigate: (page: string) => void;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTASection({
  onNavigate,
  title = 'Start Recovering Lost Revenue Today',
  subtitle = 'Join hundreds of store owners who are recovering abandoned carts automatically. Zero setup fees, zero per-message cost.',
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`py-24 relative overflow-hidden ${dark ? 'bg-hero' : 'bg-gray-950'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
          <Zap size={13} className="text-brand-500" />
          <span className="text-brand-400 text-xs font-semibold tracking-wider uppercase">
            Start Free Today
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base glow-green"
          >
            Get Started Now
            <ArrowRight size={18} />
          </a>
          <button
            onClick={() => onNavigate('how-it-works')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-gray-300 font-semibold text-base border border-white/10 hover:bg-white/5 transition-all duration-300"
          >
            See How It Works
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          No credit card required &bull; Cancel anytime &bull; Setup in minutes
        </p>
      </div>
    </section>
  );
}

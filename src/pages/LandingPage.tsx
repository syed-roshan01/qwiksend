import { useEffect, useRef } from 'react';
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
  Settings,
  Star,
  ChevronRight,
  Smartphone,
} from 'lucide-react';
import CTASection from '../components/CTASection';
import DownloadSection from '../components/DownloadSection';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

function HeroSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="bg-hero min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand-500/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,198,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,198,90,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              <Zap size={13} className="text-brand-500" />
              <span className="text-brand-400 text-xs font-semibold tracking-wider uppercase">
                WhatsApp Automation for E-Commerce
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Recover Abandoned Carts Automatically with{' '}
              <span className="text-gradient-light">WhatsApp</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              Increase your store revenue by sending automated WhatsApp reminders to customers who leave checkout without completing their purchase.
            </p>

            <div className="inline-flex items-center gap-2 bg-brand-500/15 border border-brand-500/30 px-4 py-2 rounded-lg mb-8">
              <DollarSign size={16} className="text-brand-400" />
              <span className="text-brand-300 font-semibold text-sm">
                ZERO per-message cost — ever.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base glow-green"
              >
                Start Now
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-transparent"
              >
                View Demo
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: CheckCircle2, label: 'Shopify Compatible' },
                { icon: CheckCircle2, label: 'WooCommerce Compatible' },
                { icon: Shield, label: 'Secure Automation' },
                { icon: CheckCircle2, label: 'No API Cost' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <item.icon size={15} className="text-brand-500" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <DashboardMockup onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative">
      <div className="bg-gray-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden glow-green">
        <div className="bg-gray-800/80 px-4 py-3 flex items-center gap-2 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 flex items-center gap-1.5">
              <Zap size={10} className="text-brand-500" />
              QwikSend Dashboard
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Recovered', value: '₹45,230', color: 'text-brand-400' },
              { label: 'Reminders', value: '284', color: 'text-blue-400' },
              { label: 'Conv. Rate', value: '28.4%', color: 'text-orange-400' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/8">
                <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-gray-400 text-xs font-medium mb-2">Recent Reminders Sent</p>
            {[
              { name: 'Priya S.', item: 'Running Shoes', amount: '₹2,499', status: 'Recovered', time: '2m ago' },
              { name: 'Rahul M.', item: 'Backpack', amount: '₹1,899', status: 'Sent', time: '5m ago' },
              { name: 'Anjali K.', item: 'Watch', amount: '₹3,200', status: 'Recovered', time: '12m ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-white/4 rounded-lg px-3 py-2 border border-white/6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <span className="text-brand-400 text-xs font-bold">{item.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.item} · {item.amount}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.status === 'Recovered'
                      ? 'bg-brand-500/20 text-brand-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.status}
                  </span>
                  <p className="text-gray-600 text-xs mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/4 rounded-xl p-3 border border-white/6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                <MessageSquare size={12} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium">WhatsApp Reminder Preview</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="inline-block bg-brand-500/20 rounded-xl rounded-tl-sm px-3 py-2 max-w-xs">
                <p className="text-white text-xs leading-relaxed">
                  Hi Priya! You left something in your cart. Your <strong>Running Shoes</strong> are waiting for you! 🛒 Complete your purchase now and get them delivered fast.
                </p>
                <div className="flex gap-1.5 mt-2">
                  <span className="bg-brand-500 text-white text-xs px-2.5 py-1 rounded-full font-medium">Buy Now</span>
                  <span className="bg-white/10 text-gray-300 text-xs px-2.5 py-1 rounded-full">Remind Later</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg glow-green-sm">
        Live Automation
      </div>
      <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-white/10 text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
        <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-slow" />
        ₹0 per message
      </div>
    </div>
  );
}

function StatsSection() {
  const stats = [
    { value: '70%', label: 'Average cart abandonment rate', highlight: true },
    { value: '28%', label: 'Recovery rate with WhatsApp reminders' },
    { value: '₹0', label: 'Per-message cost with QwikSend' },
    { value: '5 min', label: 'Setup time to get started' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className={`text-4xl font-bold mb-1 ${stat.highlight ? 'text-red-500' : 'text-brand-600'}`}>
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const reasons = [
    { icon: DollarSign, title: 'Price Hesitation', desc: 'Customers second-guess themselves and leave to compare prices elsewhere.' },
    { icon: Clock, title: 'Distractions', desc: 'A phone call, a notification, or simply life gets in the way at checkout.' },
    { icon: ShoppingCart, title: 'Payment Issues', desc: 'Technical glitches, failed cards, or complex checkout flows cause drop-offs.' },
    { icon: TrendingUp, title: 'Comparison Shopping', desc: 'Customers browse multiple stores before deciding where to buy.' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full mb-6">
            <span className="text-red-600 text-xs font-semibold tracking-wider uppercase">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your Store is Losing{' '}
            <span className="text-red-500">60–80% of Revenue</span>
            <br />to Abandoned Carts
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Every day, customers add products to their carts, start checkout, and then disappear — forever. Without a recovery system, that revenue is gone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-red-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
              <Zap size={13} className="text-brand-500" />
              <span className="text-brand-600 text-xs font-semibold tracking-wider uppercase">The Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              QwikSend Recovers Lost Revenue —{' '}
              <span className="text-gradient">Automatically</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              QwikSend connects to your Shopify or WooCommerce store and automatically sends personalized WhatsApp reminders to customers who abandoned their carts. No manual work. No per-message costs. Just recovered revenue.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Detects abandoned carts in real-time',
                'Sends personalized WhatsApp messages automatically',
                'Uses interactive buttons for instant checkout',
                'Runs locally — no Meta API required',
                'Zero cost per message sent',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('features')}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
            >
              Explore All Features
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Cart Abandoned',
                desc: 'Customer leaves your store without completing purchase.',
                icon: ShoppingCart,
                color: 'text-gray-400',
                bg: 'bg-gray-50',
              },
              {
                step: '02',
                title: 'QwikSend Detects It',
                desc: 'QwikSend instantly detects the abandoned cart from your store.',
                icon: Zap,
                color: 'text-blue-500',
                bg: 'bg-blue-50',
              },
              {
                step: '03',
                title: 'WhatsApp Reminder Sent',
                desc: 'A personalized reminder is sent via WhatsApp — automatically.',
                icon: MessageSquare,
                color: 'text-brand-600',
                bg: 'bg-brand-50',
              },
              {
                step: '04',
                title: 'Revenue Recovered',
                desc: 'Customer clicks, completes checkout. Revenue recovered!',
                icon: TrendingUp,
                color: 'text-orange-500',
                bg: 'bg-orange-50',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white card-hover shadow-sm">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon size={22} className={item.color} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-300">{item.step}</span>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureHighlights({ onNavigate }: { onNavigate: (page: string) => void }) {
  const features = [
    {
      icon: MessageSquare,
      title: 'Automated WhatsApp Reminders',
      desc: 'Set up once and let QwikSend handle all reminder sequences automatically.',
      color: 'bg-brand-50 text-brand-600',
    },
    {
      icon: DollarSign,
      title: 'Zero Message Cost',
      desc: 'Uses WhatsApp Web — no Meta API, no per-conversation charges. Ever.',
      color: 'bg-green-50 text-green-700',
    },
    {
      icon: Smartphone,
      title: 'Interactive Templates',
      desc: 'Custom WhatsApp templates with buttons for instant checkout recovery.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      desc: 'Track recovered revenue, conversion rates, and reminder performance.',
      color: 'bg-cyan-50 text-cyan-600',
    },
    {
      icon: Shield,
      title: 'Runs Locally & Secure',
      desc: 'Software runs on your device. Your data never leaves your control.',
      color: 'bg-gray-50 text-gray-600',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
            <span className="text-brand-600 text-xs font-semibold tracking-wider uppercase">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="text-gradient">Recover Revenue</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Powerful automation tools designed specifically for Shopify and WooCommerce store owners.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((feat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover shadow-sm">
              <div className={`w-12 h-12 rounded-xl ${feat.color} flex items-center justify-center mb-4`}>
                <feat.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('features')}
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            View all features
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Vikram Sharma',
      role: 'Shopify Store Owner',
      business: 'FashionKart.in',
      content: 'QwikSend recovered ₹1.2 lakh in just the first month. The setup took 5 minutes and it runs on its own. Absolutely worth every rupee!',
      rating: 5,
      avatar: 'VS',
      color: 'bg-emerald-500',
    },
    {
      name: 'Priya Nair',
      role: 'WooCommerce Store Owner',
      business: 'OrganicHarvest.co',
      content: 'We were losing nearly 65% of carts. Now with QwikSend, we recover about 30% of them. The zero message cost is a game changer.',
      rating: 5,
      avatar: 'PN',
      color: 'bg-sky-500',
    },
    {
      name: 'Rohit Agarwal',
      role: 'D2C Brand Founder',
      business: 'UrbanFit India',
      content: 'The WhatsApp reminders feel personal and not spammy. Customers actually appreciate the follow-up and come back to buy.',
      rating: 5,
      avatar: 'RA',
      color: 'bg-orange-500',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Etsy & Shopify Seller',
      business: 'CraftsBySneh',
      content: 'I run a small handmade business and QwikSend has been a lifesaver. Recovered 4 big orders last week alone that I would have lost.',
      rating: 5,
      avatar: 'SK',
      color: 'bg-rose-500',
    },
    {
      name: 'Arjun Mehta',
      role: 'Electronics Store Owner',
      business: 'GadgetZone.in',
      content: 'High-ticket items mean every abandoned cart hurts bad. QwikSend sends the reminder automatically and we close almost 40% of them.',
      rating: 5,
      avatar: 'AM',
      color: 'bg-blue-500',
    },
    {
      name: 'Deepa Iyer',
      role: 'Beauty Brand Owner',
      business: 'GlowNaturals',
      content: 'Our repeat purchase rate went up after customers started getting WhatsApp follow-ups. Feels like a personal touch without any manual work.',
      rating: 5,
      avatar: 'DI',
      color: 'bg-pink-500',
    },
    {
      name: 'Karan Bhatia',
      role: 'WooCommerce Store Owner',
      business: 'FitGear Pro',
      content: 'Set it up on a Sunday evening, forgot about it, and woke up Monday to 3 recovered orders. That literally paid for the whole year.',
      rating: 5,
      avatar: 'KB',
      color: 'bg-teal-500',
    },
    {
      name: 'Meera Joshi',
      role: 'Jewellery Store Owner',
      business: 'AarohaJewels.com',
      content: 'Jewellery buyers often abandon at checkout due to second thoughts. QwikSend brings them back at the right moment. Conversions doubled.',
      rating: 5,
      avatar: 'MJ',
      color: 'bg-amber-500',
    },
    {
      name: 'Suresh Pillai',
      role: 'Grocery & FMCG Seller',
      business: 'FreshBasket India',
      content: 'Even in grocery, cart abandonment is real. QwikSend recovered 22% of dropped carts last month. The ROI is undeniable.',
      rating: 5,
      avatar: 'SP',
      color: 'bg-lime-600',
    },
    {
      name: 'Ananya Reddy',
      role: 'Kids Fashion Brand',
      business: 'TinyTrendz',
      content: 'Parents are busy and forget. QwikSend sends a gentle reminder and they come back. Simple, effective, and no extra cost per message.',
      rating: 5,
      avatar: 'AR',
      color: 'bg-cyan-500',
    },
    {
      name: 'Nitin Chavan',
      role: 'Home Décor Store',
      business: 'NestCraft.in',
      content: 'I tried email campaigns but open rates were terrible. WhatsApp via QwikSend changed everything — people actually read it.',
      rating: 5,
      avatar: 'NC',
      color: 'bg-violet-500',
    },
    {
      name: 'Ritu Saxena',
      role: 'Shopify Store Owner',
      business: 'SkinSutra',
      content: 'The messages look like they come from us personally, not a bot. Customers respond and complete their purchases. Very natural flow.',
      rating: 5,
      avatar: 'RS',
      color: 'bg-red-500',
    },
    {
      name: 'Ajay Verma',
      role: 'Sports Equipment Seller',
      business: 'PlayMax Sports',
      content: 'Bulk campaign feature alone is worth it. We send restock alerts and offers and the orders start rolling in within minutes.',
      rating: 5,
      avatar: 'AV',
      color: 'bg-green-600',
    },
    {
      name: 'Pooja Tiwari',
      role: 'Handloom & Textile Brand',
      business: 'WeaveIndia.co',
      content: 'Our customers love hearing from us on WhatsApp. QwikSend makes it feel personal and the recovery rate speaks for itself.',
      rating: 5,
      avatar: 'PT',
      color: 'bg-fuchsia-500',
    },
  ];

  const row1 = testimonials.slice(0, 7);
  const row2 = testimonials.slice(7);

  const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
    <div className="w-72 shrink-0 mx-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed mb-5 text-sm">"{t.content}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
          {t.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.role} · {t.business}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
            <span className="text-brand-600 text-xs font-semibold tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Store Owners
          </h2>
          <p className="text-gray-500 text-lg">Real results from real businesses using QwikSend.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...row1, ...row1].map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track-reverse">
            {[...row2, ...row2].map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingTeaser({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
          <span className="text-brand-600 text-xs font-semibold tracking-wider uppercase">Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Simple, Affordable Pricing
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          Start recovering revenue today. No hidden fees. No per-message costs. Ever.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: 'Monthly', price: '₹499', period: '/month', popular: false, note: 'Flexible billing', devices: '1 WhatsApp device' },
            { name: '6 Months', price: '₹1,999', period: '/6 months', popular: true, note: 'Save 33%', devices: '3 WhatsApp devices' },
            { name: 'Yearly', price: '₹3,499', period: '/year', popular: false, note: 'Best value', devices: '8 WhatsApp devices' },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 border card-hover ${
                plan.popular
                  ? 'bg-white border-brand-300 shadow-lg ring-2 ring-brand-400/30'
                  : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              <p className="font-semibold text-gray-900 mb-1">{plan.name}</p>
              <p className="text-xs text-brand-600 font-medium mb-4">{plan.note}</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
              </div>
              <div className={`flex items-center gap-1.5 text-xs font-medium mb-5 px-3 py-2 rounded-lg ${
                plan.popular ? 'bg-brand-50 text-brand-700' : 'bg-gray-50 text-gray-500'
              }`}>
                <Smartphone size={12} />
                {plan.devices}
              </div>
              <a
                href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 text-center block ${
                  plan.popular
                    ? 'btn-primary text-white'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-400">
          All plans include unlimited reminders, Shopify & WooCommerce support, and zero message costs.
        </p>
      </div>
    </section>
  );
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef}>
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <ProblemSection />
      <SolutionSection onNavigate={onNavigate} />
      <FeatureHighlights onNavigate={onNavigate} />
      <TestimonialsSection />
      <PricingTeaser onNavigate={onNavigate} />
      <DownloadSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

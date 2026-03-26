import { MessageSquare, DollarSign, Smartphone, Settings, BarChart3, Shield, Zap, ShoppingBag, ShoppingCart, CheckCircle2, ArrowRight, Bell, LayoutGrid as Layout } from 'lucide-react';
import CTASection from '../components/CTASection';

interface FeaturesPageProps {
  onNavigate: (page: string) => void;
}

const features = [
  {
    icon: ShoppingCart,
    title: 'Abandoned Cart Recovery Automation',
    desc: 'QwikSend automatically detects when a customer abandons their cart and triggers a personalized WhatsApp reminder sequence — no manual work required.',
    color: 'bg-brand-50 text-brand-600',
    points: ['Real-time cart abandonment detection', 'Automatic trigger system', 'Works 24/7 without intervention'],
  },
  {
    icon: MessageSquare,
    title: 'Interactive WhatsApp Templates',
    desc: 'Create beautiful, personalized WhatsApp messages with interactive buttons that allow customers to complete their purchase in one tap.',
    color: 'bg-blue-50 text-blue-600',
    points: ['Custom message templates', 'Quick-reply buttons', 'Product image previews', 'Personalized with customer name'],
  },
  {
    icon: DollarSign,
    title: 'Zero Message Cost — Forever',
    desc: 'Unlike Meta Business API which charges per conversation, QwikSend uses WhatsApp Web automation. You pay nothing per message, ever.',
    color: 'bg-green-50 text-green-700',
    points: ['No Meta API required', 'No per-conversation charges', 'No approval process needed', 'Unlimited messages'],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Integration',
    desc: 'Connect your Shopify store in minutes. QwikSend seamlessly syncs with your store data to access cart and customer information securely.',
    color: 'bg-emerald-50 text-emerald-600',
    points: ['One-click store connection', 'Real-time order sync', 'Customer data access', 'No coding required'],
  },
  {
    icon: Layout,
    title: 'WooCommerce Integration',
    desc: 'Full WooCommerce compatibility. Connect your WordPress store and start recovering abandoned carts with the same seamless automation.',
    color: 'bg-purple-50 text-purple-600',
    points: ['WordPress plugin compatible', 'API key setup in minutes', 'Full cart data access', 'Auto-sync on cart changes'],
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Track your recovery performance with a clean, insightful dashboard. See exactly how much revenue you are recovering.',
    color: 'bg-cyan-50 text-cyan-600',
    points: ['Revenue recovered tracking', 'Conversion rate metrics', 'Reminder delivery stats', 'Historical reports'],
  },
  {
    icon: Shield,
    title: 'Local & Secure',
    desc: 'QwikSend runs locally on your device. Your customer data never goes to any third-party server. Complete privacy and control.',
    color: 'bg-gray-50 text-gray-600',
    points: ['Runs on your device', 'No third-party data storage', 'Full data ownership', 'GDPR-friendly approach'],
  },
  {
    icon: Bell,
    title: 'Smart Notification System',
    desc: 'Get notified when carts are recovered, when reminders are sent, and track all activity from a clean notification center.',
    color: 'bg-yellow-50 text-yellow-600',
    points: ['Recovery notifications', 'Daily summary reports', 'Activity log', 'Desktop notifications'],
  },
  {
    icon: Settings,
    title: 'Easy Setup — No Coding',
    desc: 'A simple, guided setup process that anyone can follow. Be up and running in under 5 minutes, even with zero technical knowledge.',
    color: 'bg-rose-50 text-rose-600',
    points: ['Step-by-step setup wizard', 'No coding required', 'Visual dashboard', 'Support documentation'],
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Web Control',
    desc: 'Uses your existing WhatsApp number through WhatsApp Web. No new number needed. No business account approval required.',
    color: 'bg-teal-50 text-teal-600',
    points: ['Use your existing number', 'No new account needed', 'No Meta verification', 'Instant activation'],
  },
  {
    icon: Zap,
    title: 'Real-Time Detection',
    desc: 'Cart abandonment is detected in real-time, ensuring reminders reach customers while their interest is still fresh.',
    color: 'bg-amber-50 text-amber-600',
    points: ['Instant abandonment detection', 'Configurable wait time', 'Smart customer filtering', 'Prevents over-messaging'],
  },
];

const comparison = [
  { feature: 'Per-message cost', qwiksend: '₹0 (Free)', metaapi: '₹0.60–₹1.20 per message' },
  { feature: 'API Approval needed', qwiksend: 'No', metaapi: 'Yes (takes weeks)' },
  { feature: 'Setup time', qwiksend: '5 minutes', metaapi: '1–2 weeks' },
  { feature: 'Technical skills required', qwiksend: 'None', metaapi: 'Developer needed' },
  { feature: 'Works with existing number', qwiksend: 'Yes', metaapi: 'New number required' },
  { feature: 'Monthly message limit', qwiksend: 'Unlimited', metaapi: 'Tier-based limits' },
  { feature: 'Cost for 1000 messages', qwiksend: '₹0', metaapi: '₹600–₹1,200' },
];

export default function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  return (
    <div className="pt-16">
      <section className="bg-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-brand-500/4 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(32,198,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,198,90,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
            <Zap size={13} className="text-brand-500" />
            <span className="text-brand-400 text-xs font-semibold tracking-wider uppercase">All Features</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Powerful Features to{' '}
            <span className="text-gradient-light">Maximize Revenue Recovery</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to automate abandoned cart recovery and grow your store revenue — with zero per-message costs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div key={i} className="rounded-2xl p-6 border border-gray-100 card-hover shadow-sm bg-white">
                <div className={`w-12 h-12 rounded-xl ${feat.color} flex items-center justify-center mb-5`}>
                  <feat.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{feat.desc}</p>
                <ul className="space-y-1.5">
                  {feat.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              QwikSend vs Meta WhatsApp API
            </h2>
            <p className="text-gray-500">See why QwikSend is the smarter choice for e-commerce stores.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
              <div className="p-4 text-sm font-semibold text-gray-500">Feature</div>
              <div className="p-4 text-sm font-bold text-brand-600 border-l border-gray-100 flex items-center gap-1.5">
                <Zap size={14} className="text-brand-500" />
                QwikSend
              </div>
              <div className="p-4 text-sm font-semibold text-gray-400 border-l border-gray-100">Meta Business API</div>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                <div className="p-4 text-sm text-gray-700 font-medium">{row.feature}</div>
                <div className="p-4 text-sm text-brand-700 font-semibold border-l border-gray-100 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-brand-500" />
                  {row.qwiksend}
                </div>
                <div className="p-4 text-sm text-gray-500 border-l border-gray-100">{row.metaapi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to see it in action?</h3>
              <p className="text-gray-600">Start your first automated WhatsApp recovery campaign in minutes.</p>
            </div>
            <a
              href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shrink-0"
            >
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

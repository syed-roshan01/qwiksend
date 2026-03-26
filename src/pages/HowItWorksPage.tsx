import { ArrowRight, CheckCircle2, ShoppingBag, Smartphone, MessageSquare, TrendingUp, Zap, Play, Clock } from 'lucide-react';
import CTASection from '../components/CTASection';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

const steps = [
  {
    number: '01',
    icon: ShoppingBag,
    title: 'Connect Your Store',
    subtitle: 'Shopify or WooCommerce',
    desc: 'Link your Shopify or WooCommerce store to QwikSend using your store URL and API key. The connection is secure and takes under 2 minutes.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 text-blue-600',
    points: [
      'Enter your store URL',
      'Generate and paste your API key',
      'QwikSend verifies the connection',
      'Customer and cart data syncs automatically',
    ],
    duration: '2 minutes',
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Connect WhatsApp',
    subtitle: 'Scan QR code to activate',
    desc: 'Open WhatsApp Web in QwikSend and scan the QR code with your phone — just like using WhatsApp Web normally. Your existing number works instantly.',
    color: 'bg-brand-500',
    lightColor: 'bg-brand-50 text-brand-600',
    points: [
      'Open the WhatsApp section in QwikSend',
      'Scan QR code with your phone',
      'Connected to your WhatsApp account',
      'No new number or API approval needed',
    ],
    duration: '1 minute',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Create Reminder Messages',
    subtitle: 'Personalized templates',
    desc: 'Write your abandoned cart reminder messages using our template editor. Add the customer name, product name, and a direct checkout link automatically.',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50 text-orange-600',
    points: [
      'Use our pre-built templates or create your own',
      'Add personalization variables (name, product)',
      'Include interactive "Buy Now" buttons',
      'Set timing for each reminder in the sequence',
    ],
    duration: '5 minutes',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Recover Lost Revenue',
    subtitle: 'Automated, 24/7',
    desc: 'Once set up, QwikSend runs automatically. When a customer abandons their cart, reminders are sent on schedule. Watch your revenue recovery happen in real-time.',
    color: 'bg-green-600',
    lightColor: 'bg-green-50 text-green-600',
    points: [
      'Automatic detection of cart abandonment',
      'Reminders sent on your configured schedule',
      'Customers receive personalized WhatsApp messages',
      'Revenue tracked in your analytics dashboard',
    ],
    duration: 'Ongoing',
  },
];

const faqs = [
  { q: 'What happens if the customer already purchased?', a: 'QwikSend automatically detects when an order is completed and stops the reminder sequence for that customer immediately.' },
  { q: 'How long after abandonment is the first reminder sent?', a: 'You can configure this. The default is 1 hour after abandonment, with a follow-up at 24 hours.' },
  { q: 'Can I send reminders to international customers?', a: 'Yes, WhatsApp works globally. As long as your customer has WhatsApp, they will receive the reminder.' },
  { q: 'Does QwikSend need to be running all the time?', a: 'Yes, QwikSend needs to be running on your device for reminders to be sent. It is lightweight and uses minimal resources.' },
];

export default function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  return (
    <div className="pt-16">
      <section className="bg-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-500/6 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(32,198,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,198,90,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
            <Play size={13} className="text-brand-500" />
            <span className="text-brand-400 text-xs font-semibold tracking-wider uppercase">How It Works</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Up and Running in{' '}
            <span className="text-gradient-light">Under 10 Minutes</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            QwikSend is built to be simple. Follow these four easy steps and your automated cart recovery system will be live.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-black text-gray-100">{step.number}</span>
                    <div className={`w-10 h-10 rounded-xl ${step.lightColor} flex items-center justify-center`}>
                      <step.icon size={20} />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{step.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{step.desc}</p>

                  <ul className="space-y-3 mb-6">
                    {step.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600">
                    <Clock size={14} className="text-brand-500" />
                    <span>Takes only: <strong className="text-gray-900">{step.duration}</strong></span>
                  </div>
                </div>

                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-950 rounded-2xl p-6 border border-white/10 shadow-xl glow-green">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center`}>
                        <step.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Step {step.number}</p>
                        <p className="text-gray-400 text-xs">{step.title}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-slow" />
                        <span className="text-brand-400 text-xs">Active</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {step.points.map((pt, j) => (
                        <div key={j} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 border border-white/6">
                          <CheckCircle2 size={13} className="text-brand-500 shrink-0" />
                          <span className="text-gray-300 text-xs">{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between bg-brand-500/10 border border-brand-500/20 rounded-lg px-3 py-2">
                      <span className="text-brand-400 text-xs font-medium">Completion time</span>
                      <span className="text-brand-300 text-xs font-bold">{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-brand-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-brand-500" />
                <span className="text-brand-600 text-sm font-semibold">Total setup time: ~10 minutes</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Your automation runs 24/7 after setup</h3>
              <p className="text-gray-500 text-sm">Set it once, recover revenue while you sleep. No maintenance required.</p>
            </div>
            <a
              href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shrink-0 glow-green-sm"
            >
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

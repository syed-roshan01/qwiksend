import { CheckCircle2, Zap, ArrowRight, Star, Smartphone } from 'lucide-react';
import CTASection from '../components/CTASection';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

const plans = [
  {
    name: 'Monthly',
    price: '₹499',
    period: 'per month',
    description: 'Perfect for testing and getting started.',
    popular: false,
    badge: null,
    savings: null,
    cta: 'Start Monthly Plan',
    devices: 1,
    devicesLabel: '1 WhatsApp Device',
    bulkCampaigns: 5,
    bulkCampaignsLabel: '5 Promotional Bulk Campaigns',
  },
  {
    name: '6 Months',
    price: '₹1,999',
    period: 'for 6 months',
    perMonth: '₹333/mo',
    description: 'Most popular for growing stores.',
    popular: true,
    badge: 'Most Popular',
    savings: 'Save ₹996',
    cta: 'Start 6-Month Plan',
    devices: 3,
    devicesLabel: '3 WhatsApp Devices',
    bulkCampaigns: 100,
    bulkCampaignsLabel: '100 Promotional Bulk Campaigns',
  },
  {
    name: 'Yearly',
    price: '₹3,499',
    period: 'per year',
    perMonth: '₹292/mo',
    description: 'Best value for serious store owners.',
    popular: false,
    badge: 'Best Value',
    savings: 'Save ₹2,489',
    cta: 'Start Yearly Plan',
    devices: 8,
    devicesLabel: '8 WhatsApp Devices',
    bulkCampaigns: null,
    bulkCampaignsLabel: 'Unlimited Promotional Bulk Campaigns',
  },
];

const allFeatures = [
  'Abandoned cart recovery automation',
  'Automated WhatsApp reminders',
  'Custom message templates',
  'Interactive WhatsApp buttons',
  'Shopify store integration',
  'WooCommerce store integration',
  'Analytics dashboard',
  'Local software (runs on your device)',
  'Zero per-message cost',
  'No Meta API required',
  'No coding required',
  'Easy 5-minute setup',
  'Desktop app with real-time monitoring',
];

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes, you can upgrade or downgrade your plan at any time. The difference will be prorated.',
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer a 7-day free trial on all plans. No credit card required to start.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept UPI, credit/debit cards, net banking, and all major Indian payment methods.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Yes, we offer a 14-day money-back guarantee if you are not satisfied.',
  },
];

export default function PricingPage({ onNavigate }: PricingPageProps) {
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
            <span className="text-brand-400 text-xs font-semibold tracking-wider uppercase">Simple Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Invest Once, Recover{' '}
            <span className="text-gradient-light">Revenue Forever</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No per-message charges. No surprises. Just one flat fee to automate your abandoned cart recovery.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-8 border card-hover ${
                  plan.popular
                    ? 'border-brand-400 shadow-xl ring-2 ring-brand-400/20 scale-105'
                    : 'border-gray-100 shadow-sm'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`text-xs font-bold px-4 py-1.5 rounded-full ${
                      plan.popular ? 'bg-brand-500 text-white' : 'bg-gray-900 text-white'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-5">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-400 text-sm mb-2">{plan.period}</span>
                  </div>
                  {plan.perMonth && (
                    <p className="text-brand-600 text-sm font-medium">≈ {plan.perMonth}</p>
                  )}
                  {plan.savings && (
                    <div className="mt-2 inline-flex items-center gap-1 bg-brand-50 text-brand-700 text-xs font-semibold px-2 py-1 rounded-lg">
                      <Star size={11} className="fill-brand-500 text-brand-500" />
                      {plan.savings}
                    </div>
                  )}
                </div>

                <div className={`flex items-center gap-2.5 rounded-xl px-4 py-3 mb-5 border ${
                  plan.popular
                    ? 'bg-brand-500/10 border-brand-400/30'
                    : 'bg-gray-50 border-gray-100'
                }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    plan.popular ? 'bg-brand-500 text-white' : 'bg-white border border-gray-200 text-gray-500'
                  }`}>
                    <Smartphone size={15} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${plan.popular ? 'text-brand-700' : 'text-gray-800'}`}>
                      {plan.devicesLabel}
                    </p>
                    <p className="text-xs text-gray-400">WhatsApp connectivity</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: Math.min(plan.devices, 5) }).map((_, d) => (
                      <div key={d} className={`w-2 h-2 rounded-full ${plan.popular ? 'bg-brand-500' : 'bg-gray-300'}`} />
                    ))}
                    {plan.devices > 5 && (
                      <span className={`text-xs font-bold leading-none ${plan.popular ? 'text-brand-500' : 'text-gray-400'}`}>+{plan.devices - 5}</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm mb-6 transition-all duration-300 ${
                    plan.popular
                      ? 'btn-primary text-white glow-green-sm'
                      : 'border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {plan.cta}
                </button>

                <ul className="space-y-2.5">
                  {allFeatures.slice(0, 8).map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="text-brand-500 mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-brand-500 mt-0.5 shrink-0" />
                    {plan.bulkCampaignsLabel}
                  </li>
                  {plan.name !== 'Monthly' && (
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="text-brand-500 mt-0.5 shrink-0" />
                      Mobile view (access from anywhere while software runs locally)
                    </li>
                  )}
                  <li className="text-xs text-brand-600 font-medium pt-1">+ all other features included</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Everything included in all plans</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-brand-500 shrink-0" />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-brand-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Not sure which plan is right for you?</h3>
            <p className="text-gray-500 mb-6 text-sm">
              Start with the monthly plan to test QwikSend. Upgrade anytime for better value.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
              >
                Start Free Trial
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

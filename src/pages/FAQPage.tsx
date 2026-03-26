import { useState } from 'react';
import { ChevronDown, HelpCircle, Zap, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

const categories = [
  {
    name: 'General',
    faqs: [
      {
        q: 'What is QwikSend?',
        a: 'QwikSend is a WhatsApp automation software that helps Shopify and WooCommerce store owners recover abandoned carts by sending automated WhatsApp reminders to customers who left without completing their purchase.',
      },
      {
        q: 'Is QwikSend a WhatsApp API product?',
        a: 'No. QwikSend does NOT use the Meta WhatsApp Business API. It uses WhatsApp Web automation, which means there are zero per-message costs and no API approval process required.',
      },
      {
        q: 'Is QwikSend safe to use?',
        a: 'Yes, QwikSend is completely safe. The software runs locally on your device. Your customer data and WhatsApp connection never go to any third-party server. You remain in full control at all times.',
      },
      {
        q: 'Do I need any technical knowledge to use QwikSend?',
        a: 'No. QwikSend is designed for non-technical users. The setup is guided step-by-step and takes under 10 minutes. No coding or developer help is required.',
      },
    ],
  },
  {
    name: 'Integrations',
    faqs: [
      {
        q: 'Does QwikSend work with Shopify?',
        a: 'Yes, QwikSend has full Shopify integration. You can connect your Shopify store using your store URL and a Shopify API key. The setup takes about 2 minutes.',
      },
      {
        q: 'Does QwikSend work with WooCommerce?',
        a: 'Yes, QwikSend fully supports WooCommerce stores on WordPress. You will need to install the WooCommerce REST API and generate keys. The setup guide is included in the software.',
      },
      {
        q: 'Can I connect multiple stores?',
        a: 'Currently each QwikSend installation supports one store connection. If you manage multiple stores, you would need separate installations.',
      },
      {
        q: 'Does QwikSend work with other e-commerce platforms?',
        a: 'Currently QwikSend officially supports Shopify and WooCommerce. Support for additional platforms like Magento and BigCommerce is on our roadmap.',
      },
    ],
  },
  {
    name: 'WhatsApp & Messaging',
    faqs: [
      {
        q: 'Do I need a WhatsApp Business account?',
        a: 'No. QwikSend works with your regular WhatsApp account using WhatsApp Web. You do not need to create a separate WhatsApp Business account or apply for any API access.',
      },
      {
        q: 'How many messages can I send per day?',
        a: 'There is no hard limit set by QwikSend. However, we recommend staying within reasonable volumes to align with WhatsApp\'s own guidelines. The software includes smart rate limiting to keep usage natural.',
      },
      {
        q: 'Will my WhatsApp account get banned?',
        a: 'QwikSend is designed with safety in mind. It mimics natural human messaging patterns, includes rate limiting, and only messages customers who have actually interacted with your store. Risk is minimized when used responsibly.',
      },
      {
        q: 'Can I customize the WhatsApp messages?',
        a: 'Yes, fully. You can create custom message templates with your brand voice, personalize with the customer\'s name and product details, and add interactive buttons for instant checkout.',
      },
      {
        q: 'Does QwikSend send bulk messages?',
        a: 'No. QwikSend only sends messages to specific customers who have abandoned their carts. It is not a bulk broadcast tool — it is a targeted, personalized recovery tool.',
      },
    ],
  },
  {
    name: 'Technical',
    faqs: [
      {
        q: 'What operating systems does QwikSend support?',
        a: 'QwikSend is available for Windows and macOS. A Linux version is available for advanced users.',
      },
      {
        q: 'Does QwikSend need to run continuously?',
        a: 'Yes, QwikSend needs to be running on your computer for automated reminders to be sent. It is lightweight (uses under 200MB of RAM) and can run silently in the background.',
      },
      {
        q: 'Is my customer data stored anywhere else?',
        a: 'No. All your store data and customer information is processed and stored locally on your device only. QwikSend has no cloud storage of your business data.',
      },
      {
        q: 'How often does QwikSend sync with my store?',
        a: 'QwikSend syncs with your store in real-time using webhooks (Shopify) or periodic polling (WooCommerce) to ensure cart abandonment is detected as quickly as possible.',
      },
    ],
  },
  {
    name: 'Billing & Plans',
    faqs: [
      {
        q: 'What is included in all plans?',
        a: 'All plans include the full QwikSend software with all features — automated WhatsApp reminders, custom templates, Shopify & WooCommerce integration, analytics, and zero per-message cost.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes, we offer a 7-day free trial. No credit card is required to start.',
      },
      {
        q: 'Do you offer refunds?',
        a: 'Yes. If you are not satisfied within the first 14 days, we offer a full money-back guarantee, no questions asked.',
      },
      {
        q: 'Can I upgrade or downgrade my plan?',
        a: 'Yes, you can change your plan at any time. Upgrades are effective immediately. Downgrades take effect at the end of your current billing period.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-xl transition-all duration-300 ${open ? 'border-brand-300 bg-brand-50/30' : 'border-gray-100 bg-white'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
      >
        <span className={`font-medium text-sm leading-snug ${open ? 'text-brand-700' : 'text-gray-900'}`}>{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-brand-500' : 'text-gray-400'}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
  const [activeCategory, setActiveCategory] = useState('General');

  const currentCategory = categories.find((c) => c.name === activeCategory)!;

  return (
    <div className="pt-16">
      <section className="bg-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-500/6 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(32,198,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,198,90,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
            <HelpCircle size={13} className="text-brand-500" />
            <span className="text-brand-400 text-xs font-semibold tracking-wider uppercase">FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="text-gradient-light">Questions</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about QwikSend. Can't find your answer? Reach out to us directly.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.name
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {currentCategory.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
              <Zap size={22} className="text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Our team is here to help. Send us a message and we'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
            >
              Contact Us
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

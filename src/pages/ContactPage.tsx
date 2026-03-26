import { useState } from 'react';
import { Mail, MessageSquare, Clock, CheckCircle2, Send, Zap } from 'lucide-react';
import CTASection from '../components/CTASection';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'support@qwiksend.in',
    desc: 'Send us an email anytime',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Support',
    value: '+91 98765 43210',
    desc: 'Chat with us on WhatsApp',
    color: 'bg-brand-50 text-brand-600',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    desc: 'Mon–Sat, 9 AM – 7 PM IST',
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      <section className="bg-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-500/6 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(32,198,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,198,90,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
            <Mail size={13} className="text-brand-500" />
            <span className="text-brand-400 text-xs font-semibold tracking-wider uppercase">Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            We're Here to{' '}
            <span className="text-gradient-light">Help You Succeed</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions about QwikSend? Want to see a live demo? Or just want to say hello? Our team is ready to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in Touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Whether you have a sales question, need technical help, or want to explore partnerships — we respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">{item.title}</p>
                      <p className="text-gray-900 font-semibold text-sm">{item.value}</p>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-50 border border-brand-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={16} className="text-brand-500" />
                  <span className="text-brand-700 font-semibold text-sm">Quick Start Guide</span>
                </div>
                <p className="text-brand-800 text-xs leading-relaxed mb-3">
                  Ready to start? Download QwikSend and be up and running in 10 minutes.
                </p>
                <a
                  href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center w-full py-2.5 rounded-lg text-white text-xs font-semibold"
                >
                  View Pricing & Get Started
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={32} className="text-brand-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-brand-600 text-sm font-medium hover:text-brand-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all bg-white"
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="sales">Sales & Pricing</option>
                          <option value="support">Technical Support</option>
                          <option value="demo">Request a Demo</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        We typically respond within 24 hours during business hours.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        onNavigate={onNavigate}
        title="Ready to Start Recovering Revenue?"
        subtitle="Join store owners who are automatically recovering abandoned carts with QwikSend. Zero message cost, easy setup."
      />
    </div>
  );
}

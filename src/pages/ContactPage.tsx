import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock, CheckCircle2, Send, Zap } from 'lucide-react';
import CTASection from '../components/CTASection';
import AnimatedBackground from '../components/AnimatedBackground';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const contactInfo = [
  { icon: Mail, title: 'Email Us', value: 'support@qwiksend.in', desc: 'Send us an email anytime', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: MessageSquare, title: 'WhatsApp', value: '+91 72900 58166', desc: 'Chat with us directly', color: 'text-brand-400', bg: 'bg-brand-500/10' },
  { icon: Clock, title: 'Response Time', value: 'Within 24 hours', desc: 'Mon–Sat, 9 AM – 7 PM', color: 'text-orange-400', bg: 'bg-orange-500/10' },
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
    <div className="pt-20">
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 px-4 py-2 rounded-full mb-6"
          >
            <Mail size={14} className="text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">Contact Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            We're Here to
            <br />
            <span className="text-brand-400">Help You Succeed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl mx-auto"
          >
            Have questions about QwikSend? Want a live demo? Our team is ready to help.
          </motion.p>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Get in Touch</h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  Whether you have a sales question, need technical help, or want to explore partnerships — we respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-xl p-4 flex items-start gap-4"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon size={18} className={item.color} />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-medium mb-0.5">{item.title}</p>
                      <p className="text-white font-semibold text-sm">{item.value}</p>
                      <p className="text-white/30 text-xs">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 border-brand-500/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={16} className="text-brand-400" />
                  <span className="text-brand-400 font-semibold text-sm">Quick Start</span>
                </div>
                <p className="text-white/50 text-xs leading-relaxed mb-3">
                  Ready to start? Download QwikSend and be up and running in 10 minutes.
                </p>
                <motion.a
                  href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center w-full py-2.5 rounded-lg text-sm font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={32} className="text-brand-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-brand-400 text-sm font-medium hover:text-brand-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-white/60 mb-1.5">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-500/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/60 mb-1.5">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-500/50 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-1.5">Subject</label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500/50 transition-colors"
                        >
                          <option value="" className="bg-surface-900">Select a topic</option>
                          <option value="general" className="bg-surface-900">General Inquiry</option>
                          <option value="sales" className="bg-surface-900">Sales & Pricing</option>
                          <option value="support" className="bg-surface-900">Technical Support</option>
                          <option value="demo" className="bg-surface-900">Request a Demo</option>
                          <option value="partnership" className="bg-surface-900">Partnership</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-1.5">Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-500/50 transition-colors resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                        whileHover={{ scale: loading ? 1 : 1.01 }}
                        whileTap={{ scale: loading ? 1 : 0.99 }}
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
                      </motion.button>

                      <p className="text-xs text-white/30 text-center">
                        We typically respond within 24 hours.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        onNavigate={onNavigate}
        title="Ready to Start Recovering Revenue?"
        subtitle="Join store owners who are automatically recovering abandoned carts. Zero message cost, easy setup."
      />
    </div>
  );
}

import { motion } from 'framer-motion';
import { Download, Monitor, Apple, Cpu } from 'lucide-react';

const downloads = [
  {
    platform: 'Windows',
    icon: Monitor,
    version: '1.0.1',
    size: '~45 MB',
    file: 'https://github.com/syed-roshan01/qwiksend/releases/download/v1.0.1/QwikSend.Setup.1.0.1.exe',
    available: true,
    desc: 'For Windows 10/11',
  },
  {
    platform: 'Mac (Intel)',
    icon: Apple,
    version: '1.0.1',
    size: '~52 MB',
    file: 'https://github.com/syed-roshan01/qwiksend/releases/download/v1.0.1/QwikSend-1.0.1.dmg',
    available: true,
    desc: 'For Intel-based Macs',
  },
  {
    platform: 'Mac (Apple Silicon)',
    icon: Cpu,
    version: '1.0.1',
    size: '~48 MB',
    file: 'https://github.com/syed-roshan01/qwiksend/releases/download/v1.0.1/QwikSend-1.0.1-arm64.dmg',
    available: true,
    desc: 'For M1/M2/M3 Macs',
  },
];

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <Download size={14} className="text-brand-400" />
            <span className="text-white/60 text-sm font-medium">Download</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Download QwikSend
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Get started in minutes. Download the app and connect your store.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {downloads.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-6 text-center card-interactive glass-card ${
                !item.available ? 'opacity-50' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-brand-500/10">
                <item.icon size={26} className="text-brand-400" />
              </div>

              <h3 className="font-semibold text-white text-lg mb-1">{item.platform}</h3>
              <p className="text-white/30 text-sm mb-3">{item.desc}</p>

              <div className="flex items-center justify-center gap-3 text-xs text-white/40 mb-4">
                <span>v{item.version}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{item.size}</span>
              </div>

              {item.available ? (
                <motion.a
                  href={item.file}
                  download
                  className="btn-primary w-full py-3 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} />
                  Download
                </motion.a>
              ) : (
                <button
                  disabled
                  className="w-full py-3 rounded-xl text-white/30 text-sm font-medium bg-white/5 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/30">
          By downloading, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
}

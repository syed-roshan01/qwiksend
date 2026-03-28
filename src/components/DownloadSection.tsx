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
    <section id="download" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge px-4 py-1.5 rounded-full mb-6">
            <Download size={13} className="text-brand-500" />
            <span className="text-brand-600 text-xs font-semibold tracking-wider uppercase">Download</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Download QwikSend
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Get started in minutes. Download the app for your platform and connect your store.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {downloads.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 border card-hover text-center ${
                item.available
                  ? 'bg-white border-gray-100 shadow-sm hover:border-brand-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                item.available ? 'bg-brand-50' : 'bg-gray-100'
              }`}>
                <item.icon size={26} className={item.available ? 'text-brand-600' : 'text-gray-400'} />
              </div>

              <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.platform}</h3>
              <p className="text-gray-400 text-sm mb-3">{item.desc}</p>

              <div className="flex items-center justify-center gap-3 text-xs text-gray-500 mb-4">
                <span>v{item.version}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{item.size}</span>
              </div>

              {item.available ? (
                <a
                  href={item.file}
                  download
                  className="btn-primary w-full py-2.5 rounded-xl text-white text-sm font-semibold inline-flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-2.5 rounded-xl text-gray-400 text-sm font-medium bg-gray-100 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          By downloading, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
}

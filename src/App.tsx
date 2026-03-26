import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'features' | 'pricing' | 'how-it-works' | 'faq' | 'contact';

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/features': 'features',
  '/pricing': 'pricing',
  '/how-it-works': 'how-it-works',
  '/faq': 'faq',
  '/contact': 'contact',
};

const pageToPath: Record<Page, string> = {
  home: '/',
  features: '/features',
  pricing: '/pricing',
  'how-it-works': '/how-it-works',
  faq: '/faq',
  contact: '/contact',
};

function getInitialPage(): Page {
  const path = window.location.pathname;
  return pathToPage[path] || 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);

  useEffect(() => {
    const handlePopState = () => {
      const page = pathToPage[window.location.pathname] || 'home';
      setCurrentPage(page);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: string) => {
    const p = page as Page;
    setCurrentPage(p);
    const path = pageToPath[p] || '/';
    window.history.pushState({}, '', path);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'features':
        return <FeaturesPage onNavigate={navigate} />;
      case 'pricing':
        return <PricingPage onNavigate={navigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={navigate} />;
      case 'faq':
        return <FAQPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917290058166?text=Hey%2C%20how%20can%20I%20get%20more%20info%20on%20this"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.77L0 32l8.43-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.853l-.486-.29-4.998 1.192 1.215-4.863-.318-.5A13.24 13.24 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.163-2.72-1.295-.365-.133-.631-.199-.897.199-.265.398-1.029 1.295-1.261 1.562-.232.265-.465.298-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.199-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.363-1.394 3.325s1.427 3.856 1.626 4.122c.199.265 2.808 4.287 6.804 6.014.951.41 1.693.655 2.271.839.954.303 1.823.26 2.51.158.766-.114 2.354-.963 2.686-1.893.332-.93.332-1.728.232-1.893-.1-.166-.365-.265-.763-.464z"/>
        </svg>
      </a>
    </div>
  );
}

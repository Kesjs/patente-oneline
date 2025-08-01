import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Tailwind CSS
import './index.css';

// Import Custom CSS
import './assets/css/styles.css';
import './assets/css/loader.css';
import './assets/css/licenses.css';

// Import Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CategoriePatente from './pages/CategoriePatente';
import Pagamento from './pages/Pagamento';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookiePolicy from './pages/CookiePolicy';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <CookieBanner />
            <main className="flex-grow">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <>
                      <Header />
                      <About />
                      <Services />
                      <Testimonials />
                      <Contact />
                    </>
                  } 
                />
                <Route 
                  path="/categorie-patente" 
                  element={
                    <CategoriePatente />
                  } 
                />
                <Route 
                  path="/pagamento" 
                  element={
                    <Pagamento />
                  } 
                />
                <Route 
                  path="/privacy-policy" 
                  element={
                    <PrivacyPolicy />
                  } 
                />
                <Route 
                  path="/termini-condizioni" 
                  element={
                    <TermsAndConditions />
                  } 
                />
                <Route 
                  path="/cookie-policy" 
                  element={
                    <CookiePolicy />
                  } 
                />
                <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Pagina non trovata</h1>
                    <p className="text-gray-600 mb-6">La pagina che stai cercando non esiste o è stata spostata.</p>
                    <Link 
                      to="/" 
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Torna alla Home
                    </Link>
                  </div>
                </div>} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </>
        )}
      </div>
  );
}

export default App;

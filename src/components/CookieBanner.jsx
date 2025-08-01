import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { XMarkIcon, Cog6ToothIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const translations = {
    title: "Utilizziamo i cookie",
    description: "Noi e i nostri partner utilizziamo tecnologie come i cookie per memorizzare e/o accedere alle informazioni del dispositivo. Utilizziamo queste informazioni per migliorare l'esperienza di navigazione e mostrare annunci personalizzati. Il mancato consenso o la revoca del consenso può influire negativamente su determinate caratteristiche e funzioni.",
    necessary: "Necessari",
    necessaryDesc: "Cookie essenziali per il corretto funzionamento del sito.",
    analytics: "Analitici",
    analyticsDesc: "Ci aiutano a capire come interagisci con il nostro sito.",
    marketing: "Marketing",
    marketingDesc: "Utilizzati per mostrarti annunci pertinenti.",
    preferences: "Preferenze",
    preferencesDesc: "Memorizzano le tue preferenze di navigazione.",
    acceptAll: "Accetta tutto",
    rejectAll: "Rifiuta tutto",
    saveSettings: "Salva preferenze",
    settings: "Impostazioni",
    privacyPolicy: "informativa sulla privacy",
    cookieSettings: "Impostazioni cookie"
  };

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    const savedPreferences = localStorage.getItem('cookiePreferences');
    
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
    
    if (cookieConsent !== 'accepted' && cookieConsent !== 'rejected') {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setCookiePreferences(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    setCookiePreferences(onlyNecessary);
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const toggleCookiePreference = (key) => {
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Banner */}
      <AnimatePresence>
        {!showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 300,
              mass: 0.5
            }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl rounded-t-2xl border border-gray-100 z-50 mx-4 mb-4 p-6 max-w-4xl lg:mx-auto lg:left-8 lg:right-auto lg:max-w-md lg:mb-8 lg:rounded-2xl"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-gray-900">{translations.title}</h3>
                <button 
                  onClick={() => setShowBanner(false)}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Close"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-sm text-gray-600">
                {translations.description}{' '}
                <Link 
                  to="/privacy-policy" 
                  className="text-blue-600 hover:underline font-medium"
                >
                  {translations.privacyPolicy}
                </Link>.
              </p>

              <div className="flex flex-col space-y-3 pt-2">
                <motion.button
                  onClick={handleAcceptAll}
                  className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <CheckCircleIcon className="h-5 w-5" />
                  <span>{translations.acceptAll}</span>
                </motion.button>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {translations.rejectAll}
                  </button>
                  
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Cog6ToothIcon className="h-4 w-4" />
                    <span>{translations.settings}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => e.target === e.currentTarget && setShowSettings(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{translations.cookieSettings}</h3>
                  <button 
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-500"
                    aria-label="Close"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {Object.entries({
                    necessary: { desc: translations.necessaryDesc, disabled: true },
                    analytics: { desc: translations.analyticsDesc },
                    marketing: { desc: translations.marketingDesc },
                    preferences: { desc: translations.preferencesDesc }
                  }).map(([key, { desc, disabled }]) => (
                    <div key={key} className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={key}
                          name={key}
                          type="checkbox"
                          checked={cookiePreferences[key]}
                          onChange={() => toggleCookiePreference(key)}
                          disabled={disabled}
                          className={`h-4 w-4 rounded ${disabled ? 'text-blue-300' : 'text-blue-600'} focus:ring-blue-500 border-gray-300`}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={key} className={`font-medium ${disabled ? 'text-gray-900' : 'text-gray-700'}`}>
                          {translations[key]}
                        </label>
                        <p className="text-gray-500">{desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={handleSaveSettings}
                      className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {translations.saveSettings}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;

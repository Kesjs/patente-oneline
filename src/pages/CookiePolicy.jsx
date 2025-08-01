import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CookiePolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookieConsent') === 'true';
    }
    return false;
  });

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleAcceptCookies = () => {
    setCookieConsent(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'true');
      // Ici, vous pourriez initialiser les cookies de suivi (Google Analytics, Facebook Pixel, etc.)
      console.log('Cookies acceptés');
    }
  };

  const handleRejectCookies = () => {
    setCookieConsent(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'false');
      // Ici, vous pourriez désactiver les cookies non essentiels
      console.log('Cookies refusés');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Informativa sui Cookie
            </span>
          </h1>

        </motion.div>

        <motion.div 
          className="prose prose-blue prose-lg max-w-none mb-12"
          variants={itemVariants}
        >
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Cosa sono i cookie?</h2>
            <p className="text-gray-700">
              I cookie sono piccoli file di testo che i siti visitati dall'utente inviano e registrano sul suo computer o dispositivo mobile, per essere poi ritrasmessi agli stessi siti alla visita successiva. Grazie ai cookie, un sito ricorda le azioni e le preferenze dell'utente (come credenziali di accesso, lingua, dimensioni dei caratteri, altre impostazioni di visualizzazione, ecc.) in modo che non debbano essere nuovamente indicate quando l'utente torna a visitare detto sito o naviga da una pagina all'altra del sito stesso.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Tipologie di cookie utilizzati su questo sito</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2.1 Cookie tecnici</h3>
            <p className="text-gray-700 mb-4">
              Questi cookie sono essenziali per il corretto funzionamento del nostro sito e per fornire i servizi richiesti. Includono:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Cookie di sessione:</strong> necessari per la navigazione sul sito e l'utilizzo delle sue funzionalità</li>
              <li><strong>Cookie di autenticazione:</strong> utilizzati per riconoscere gli utenti registrati</li>
              <li><strong>Cookie di sicurezza:</strong> per prevenire frodi e proteggere i dati degli utenti</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2.2 Cookie di analisi e prestazioni</h3>
            <p className="text-gray-700 mb-4">
              Questi cookie ci aiutano a capire come gli utenti interagiscono con il nostro sito, fornendoci informazioni sulle aree visitate, il tempo trascorso sul sito e eventuali problemi riscontrati, come messaggi di errore. Questo ci aiuta a migliorare le prestazioni del nostro sito.
            </p>
            <p className="text-gray-700 mb-4">
              Utilizziamo Google Analytics, un servizio di analisi web fornito da Google, Inc. ("Google"). Le informazioni generate dal cookie sull'utilizzo del sito web da parte dell'utente verranno trasmesse a e depositate presso i server di Google negli Stati Uniti.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2.3 Cookie di funzionalità</h3>
            <p className="text-gray-700 mb-4">
              Questi cookie permettono al sito di ricordare le scelte dell'utente (come il nome utente, la lingua o l'area geografica in cui ti trovi) e forniscono funzionalità avanzate e personalizzate. Possono anche essere utilizzati per fornire servizi richiesti dall'utente, come guardare un video o commentare un blog.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2.4 Cookie di terze parti</h3>
            <p className="text-gray-700">
              Pagine del presente sito potrebbero incorporare strumenti di terze parti e contenuti di social network (come pulsanti per la condivisione) che potrebbero impostare cookie sul tuo dispositivo. Non abbiamo alcun controllo su questi cookie e ti invitiamo a consultare le informative sulla privacy delle terze parti per ulteriori informazioni.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Gestione dei cookie</h2>
            <p className="text-gray-700 mb-4">
              Alla prima visita al nostro sito, visualizzerai un banner che ti informa dell'utilizzo dei cookie. Cliccando su "Accetta tutti i cookie", acconsenti all'utilizzo di tutti i cookie come descritto in questa informativa. Puoi anche personalizzare le tue preferenze o rifiutare i cookie non essenziali.
            </p>
            <p className="text-gray-700 mb-4">
              Puoi modificare le tue preferenze sui cookie in qualsiasi momento cliccando sull'icona delle impostazioni cookie che trovi in basso a destra su ogni pagina del sito.
            </p>
            <p className="text-gray-700 mb-6">
              Inoltre, la maggior parte dei browser internet sono impostati per accettare automaticamente i cookie. Tuttavia, puoi modificare le impostazioni del tuo browser per cancellare i cookie o impedirne l'installazione. Di seguito i link alle istruzioni per i browser più comuni:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
              <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Opera</a></li>
            </ul>
            <p className="text-gray-700">
              Tieni presente che la disabilitazione dei cookie potrebbe influire sulle funzionalità del sito e limitare l'utilizzo di alcune aree del sito stesso.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Dettagli sui cookie utilizzati</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fornitore</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scadenza</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finalità</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PHPSESSID</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Patente Autentica</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sessione</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Mantiene la sessione dell'utente durante la navigazione</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">cookie_consent</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Patente Autentica</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 anno</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Memorizza le preferenze di consenso ai cookie</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_ga</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Google Analytics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 anni</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Distinguere gli utenti unici</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_gid</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Google Analytics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24 ore</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Distinguere gli utenti</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_gat_gtag_UA_*</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Google Analytics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 minuto</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Limitare la frequenza delle richieste</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Cookie di terze parti</h2>
            <p className="text-gray-700 mb-4">
              Il nostro sito potrebbe includere contenuti e servizi forniti da terze parti che potrebbero impostare i propri cookie. Non abbiamo alcun controllo su questi cookie e ti invitiamo a consultare le informative sulla privacy delle terze parti per ulteriori informazioni:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Informativa sulla privacy di Google</a></li>
              <li><a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Informativa sui dati di Facebook</a></li>
              <li><a href="https://twitter.com/it/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Informativa sulla privacy di Twitter</a></li>
              <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Informativa sulla privacy di LinkedIn</a></li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Contatti</h2>
            <p className="text-gray-700 mb-4">
              Per qualsiasi domanda o richiesta relativa alla presente Informativa sui cookie, non esitare a contattarci:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Email:</strong> privacy@patenteautentica.it</li>
              <li><strong>Telefono:</strong> +39 06 123 4567</li>
              <li><strong>Indirizzo:</strong> Via Roma 123, 00100 Roma, Italia</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Per ulteriori informazioni sulla protezione dei dati personali, consulta la nostra <Link to="/privacy-policy" className="text-blue-600 hover:underline">Informativa sulla Privacy</Link> completa.
            </p>
          </motion.section>
        </motion.div>

        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 text-center"
          variants={itemVariants}
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Torna alla Homepage
          </Link>
        </motion.div>
      </div>

      {/* Cookie Consent Banner - Solo se non ha ancora dato il consenso */}
      {!cookieConsent && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <p className="text-sm md:text-base">
                  Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito. Cliccando su "Accetta tutti i cookie", acconsenti all'utilizzo di TUTTI i cookie. Puoi visitare "Impostazioni cookie" per fornire un consenso controllato.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleRejectCookies}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm font-medium transition-colors"
                >
                  Rifiuta tutti
                </button>
                <button
                  onClick={handleAcceptCookies}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors"
                >
                  Accetta tutti i cookie
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CookiePolicy;

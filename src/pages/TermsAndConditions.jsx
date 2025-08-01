import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TermsAndConditions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

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
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
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
              Termini e Condizioni
            </span>
          </h1>

        </motion.div>

        <motion.div 
          className="prose prose-blue prose-lg max-w-none"
          variants={itemVariants}
        >
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Accettazione dei Termini</h2>
            <p className="text-gray-700">
              L'accesso e l'utilizzo del sito web <strong>Patente Autentica</strong> (di seguito, il "Sito") sono soggetti ai seguenti Termini e Condizioni. Accedendo e utilizzando il Sito, l'utente accetta di essere vincolato da questi Termini e Condizioni e da tutte le leggi e regolamenti applicabili. Se non si è d'accordo con uno qualsiasi di questi termini, si prega di non utilizzare il Sito.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Servizi Offerti</h2>
            <p className="text-gray-700 mb-4">
              Patente Autentica fornisce servizi di assistenza per il conseguimento e il rinnovo della patente di guida, tra cui:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Preparazione all'esame teorico della patente</li>
              <li>Assistenza per il rinnovo della patente</li>
              <li>Supporto per il recupero punti patente</li>
              <li>Informazioni aggiornate sulla normativa stradale</li>
              <li>Altri servizi correlati alla guida e alla mobilità</li>
            </ul>
            <p className="text-gray-700 mt-4">
              I servizi sono forniti "così come sono" e "come disponibili", senza garanzie di alcun tipo, espresse o implicite.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Registrazione e Account</h2>
            <p className="text-gray-700 mb-4">
              Per accedere ad alcune funzionalità del Sito, potrebbe essere necessario registrarsi e creare un account. L'utente si impegna a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fornire informazioni accurate, aggiornate e complete durante la registrazione</li>
              <li>Mantenere la riservatezza delle credenziali di accesso</li>
              <li>Non condividere l'account con terzi</li>
              <li>Comunicare tempestivamente eventuali accessi non autorizzati all'account</li>
              <li>Essere l'unico responsabile di tutte le attività che avvengono tramite il proprio account</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Pagamenti e Rimborsi</h2>
            <p className="text-gray-700 mb-4">
              I prezzi dei servizi sono indicati sul Sito e sono espressi in Euro (€), IVA inclusa dove applicabile. I pagamenti possono essere effettuati tramite i metodi di pagamento accettati sul Sito.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Politica di rimborso:</strong> I rimborsi sono regolati secondo le seguenti condizioni:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>I servizi digitali acquistati sono rimborsabili entro 14 giorni dall'acquisto, purché non siano stati fruiti</li>
              <li>I servizi già erogati non sono rimborsabili</li>
              <li>In caso di annullamento da parte nostra, verrà emesso un rimborso completo</li>
              <li>Le richieste di rimborso vanno inoltrate all'indirizzo email: assistenza@patenteautentica.it</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Proprietà Intellettuale</h2>
            <p className="text-gray-700">
              Tutti i contenuti presenti sul Sito, inclusi testi, grafica, loghi, icone, immagini, video, software e ogni altro materiale, sono di proprietà di Patente Autentica o dei rispettivi titolari dei diritti e sono protetti dalle leggi sul diritto d'autore e sulla proprietà intellettuale. È vietato copiare, riprodurre, modificare, distribuire, visualizzare o sfruttare commercialmente qualsiasi contenuto del Sito senza il nostro previo consenso scritto.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Limitazione di Responsabilità</h2>
            <p className="text-gray-700 mb-4">
              In nessun caso Patente Autentica sarà responsabile per danni diretti, indiretti, incidentali, speciali, consequenziali o esemplari, inclusi, a titolo esemplificativo, danni per perdita di profitti, avviamento, utilizzo, dati o altre perdite intangibili (anche se Patente Autentica è stata informata della possibilità di tali danni), derivanti da:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>L'uso o l'impossibilità di utilizzare il Sito</li>
              <li>L'accesso non autorizzato o l'alterazione delle tue trasmissioni o dati</li>
              <li>Dichiarazioni o comportamenti di terzi sul Sito</li>
              <li>Qualsiasi altro argomento relativo al Sito</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Modifiche ai Termini</h2>
            <p className="text-gray-700">
              Ci riserviamo il diritto di modificare questi Termini e Condizioni in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione sul Sito. L'uso continuato del Sito dopo tali modifiche costituirà accettazione delle nuove condizioni. Ti consigliamo di rivedere periodicamente questa pagina per essere informato su eventuali aggiornamenti.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Legge Applicabile e Foro Competente</h2>
            <p className="text-gray-700 mb-4">
              Questi Termini e Condizioni sono regolati e interpretati in conformità con le leggi italiane. Qualsiasi controversia relativa a questi Termini e Condizioni sarà di competenza esclusiva del Foro di Roma, con esclusione di qualsiasi altro foro competente.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Disposizioni Varie</h2>
            <p className="text-gray-700 mb-4">
              Se una qualsiasi disposizione di questi Termini e Condizioni dovesse essere ritenuta invalida o inapplicabile, le restanti disposizioni continueranno ad essere valide e applicabili nella massima misura consentita dalla legge.
            </p>
            <p className="text-gray-700">
              La mancata applicazione da parte nostra di qualsiasi diritto o disposizione di questi Termini non costituirà una rinuncia a tale diritto o disposizione.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contatti</h2>
            <p className="text-gray-700 mb-4">
              Per qualsiasi domanda o informazione riguardante questi Termini e Condizioni, è possibile contattarci tramite:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Email:</strong> info@patenteautentica.it</li>
              <li><strong>Telefono:</strong> +39 06 123 4567</li>
              <li><strong>Indirizzo:</strong> Via Roma 123, 00100 Roma, Italia</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Per questioni relative alla privacy, consulta la nostra <Link to="/privacy-policy" className="text-blue-600 hover:underline">Informativa sulla Privacy</Link>.
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
    </motion.div>
  );
};

export default TermsAndConditions;

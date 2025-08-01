import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
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
              Informativa sulla Privacy
            </span>
          </h1>

        </motion.div>

        <motion.div 
          className="prose prose-blue prose-lg max-w-none"
          variants={itemVariants}
        >
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduzione</h2>
            <p className="text-gray-700">
              Benvenuto/a su <strong>Patente Autentica</strong> (di seguito, il "Sito"). La tua privacy è di fondamentale importanza per noi. Questa Informativa sulla privacy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali quando utilizzi il nostro sito web.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Dati che raccogliamo</h2>
            <p className="text-gray-700 mb-4">Raccogliamo diversi tipi di informazioni, tra cui:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Informazioni personali identificative</strong> come nome, indirizzo email, numero di telefono, indirizzo, ecc.</li>
              <li><strong>Dati di pagamento</strong> per l'elaborazione degli ordini (i dati di pagamento completi vengono gestiti dai nostri fornitori di servizi di pagamento certificati).</li>
              <li><strong>Dati di navigazione</strong> come indirizzo IP, tipo di browser, pagine visitate, orari di accesso, ecc.</li>
              <li><strong>Cookie e tecnologie simili</strong> per migliorare la tua esperienza sul nostro sito.</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Come utilizziamo i tuoi dati</h2>
            <p className="text-gray-700 mb-4">Utilizziamo le informazioni raccolte per:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fornire, gestire e migliorare i nostri servizi</li>
              <li>Elaborare le tue transazioni e inviarti notifiche relative</li>
              <li>Rispondere alle tue richieste di assistenza</li>
              <li>Inviarti aggiornamenti, offerte promozionali e altre comunicazioni di marketing</li>
              <li>Rilevare, prevenire e affrontare problemi tecnici o di sicurezza</li>
              <li>Rispettare gli obblighi di legge</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Base giuridica del trattamento</h2>
            <p className="text-gray-700">
              Il trattamento dei tuoi dati personali è basato su una delle seguenti basi giuridiche:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Il tuo consenso esplicito (es. per l'invio di comunicazioni di marketing)</li>
              <li>L'esecuzione di un contratto di cui sei parte (es. fornitura di servizi richiesti)</li>
              <li>Il rispetto di obblighi legali</li>
              <li>I nostri legittimi interessi (es. miglioramento dei servizi, prevenzione delle frodi)</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Condivisione dei dati</h2>
            <p className="text-gray-700">
              Potremmo condividere le tue informazioni personali con:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Fornitori di servizi che ci assistono nelle nostre operazioni (es. hosting, pagamenti, analisi)</li>
              <li>Autorità competenti quando richiesto dalla legge o per proteggere i nostri diritti</li>
              <li>Acquirenti o successori in caso di fusione, acquisizione o vendita di attività</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Non vendiamo né affittiamo i tuoi dati personali a terze parti a scopo di marketing senza il tuo esplicito consenso.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Trasferimento dei dati al di fuori dell'UE</h2>
            <p className="text-gray-700">
              I tuoi dati potrebbero essere trasferiti e trattati in paesi al di fuori dell'Unione Europea. In tal caso, adotteremo le misure adeguate per garantire che i tuoi dati ricevano un livello di protezione adeguato, come previsto dal Regolamento Generale sulla Protezione dei Dati (GDPR).
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Conservazione dei dati</h2>
            <p className="text-gray-700">
              Conserveremo i tuoi dati personali solo per il periodo necessario a raggiungere le finalità per cui sono stati raccolti, compreso il rispetto di obblighi legali, contabili o di segnalazione. I criteri specifici di conservazione variano a seconda del tipo di dati e del contesto del trattamento.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. I tuoi diritti</h2>
            <p className="text-gray-700 mb-4">Hai il diritto di:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Accesso</strong> ai tuoi dati personali</li>
              <li><strong>Rettifica</strong> di dati inesatti o incompleti</li>
              <li><strong>Cancellazione</strong> dei tuoi dati ("diritto all'oblio") in determinate circostanze</li>
              <li><strong>Limitazione</strong> del trattamento dei tuoi dati</li>
              <li><strong>Portabilità</strong> dei tuoi dati in un formato strutturato</li>
              <li><strong>Opposizione</strong> al trattamento per motivi legittimi</li>
              <li><strong>Revocare il consenso</strong> in qualsiasi momento, senza pregiudicare la liceità del trattamento basato sul consenso prima della revoca</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Per esercitare questi diritti, puoi contattarci utilizzando le informazioni di contatto fornite di seguito.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Cookie e tecnologie simili</h2>
            <p className="text-gray-700">
              Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito. Per ulteriori dettagli, consulta la nostra <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Sicurezza</h2>
            <p className="text-gray-700 mb-4">
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i tuoi dati personali da accessi non autorizzati, alterazione, divulgazione o distruzione. Tuttavia, nessun sistema è completamente sicuro e non possiamo garantire la sicurezza assoluta dei tuoi dati.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Modifiche a questa informativa</h2>
            <p className="text-gray-700">
              Potremmo aggiornare periodicamente questa Informativa sulla privacy per riflettere modifiche alle nostre pratiche o per altri motivi operativi, legali o normativi. Ti incoraggiamo a rivedere periodicamente questa pagina per essere informato su come proteggiamo le tue informazioni. La data dell'ultimo aggiornamento è indicata in alto in questo documento.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contatti</h2>
            <p className="text-gray-700 mb-4">
              Se hai domande o dubbi riguardanti questa Informativa sulla privacy o le nostre pratiche in materia di privacy, non esitare a contattarci:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Email:</strong> privacy@patenteautentica.it</li>
              <li><strong>Telefono:</strong> +39 06 123 4567</li>
              <li><strong>Indirizzo:</strong> Via Roma 123, 00100 Roma, Italia</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Hai anche il diritto di presentare un reclamo all'Autorità Garante per la Protezione dei Dati Personali se ritieni che il trattamento dei tuoi dati personali violi la normativa applicabile.
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

export default PrivacyPolicy;

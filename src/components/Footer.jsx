import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate subscription
    console.log('Subscribed with email:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset subscription message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const footerLinks = [
    {
      title: 'Servizi',
      links: [
        { name: 'Patente B', href: '/categorie-patente#patente-b' },
        { name: 'Patente A', href: '/categorie-patente#patente-a' },
        { name: 'Patente C', href: '/categorie-patente#patente-c' },
        { name: 'Rinnovo Patente', href: '/servizi#rinnovo' },
        { name: 'Duplicato Patente', href: '/servizi#duplicato' }
      ]
    },
    {
      title: 'Azienda',
      links: [
        { name: 'Chi Siamo', href: '/#about' },
        { name: 'Testimonianze', href: '/#testimonianze' },
        { name: 'Contatti', href: '/#contatti' },
        { name: 'Lavora con Noi', href: '/lavora-con-noi' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Supporto',
      links: [
        { name: 'Domande Frequenti', href: '/faq' },
        { name: 'Guida', href: '/guida' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Termini e Condizioni', href: '/termini-condizioni' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
      ]
    }
  ];

  // Animation variants for footer elements
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-20 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
          variants={container}
        >
          {/* Logo and description */}
          <motion.div 
            className="space-y-6"
            variants={item}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="https://patentediguida.org/wp-content/uploads/2024/08/Patente-Di-Guida-Logo.jpg" 
                alt="Logo Patente Autentica" 
                className="h-16 w-auto"
              />
              <span className="text-2xl font-bold">Patente Autentica</span>
            </div>
            <p className="text-gray-400">
              Il tuo partner affidabile per il rilascio e il rinnovo della patente di guida in Italia. 
              Servizi professionali e su misura per ogni esigenza.
            </p>
            
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div 
              key={sectionIndex}
              variants={item}
              custom={sectionIndex * 0.1}
            >
              <h3 className="text-lg font-semibold mb-6 relative pb-2">
                {section.title}
                <motion.span 
                  className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: '3rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (sectionIndex * 0.1) }}
                />
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const isActive = activeLink === link.href;
                  return (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Link 
                        to={link.href} 
                        className={`${isActive ? 'text-white font-medium' : 'text-gray-400'} hover:text-white transition-colors flex items-center`}
                      >
                        <motion.span 
                          className="inline-block mr-2"
                          animate={{ rotate: isActive ? 90 : 0 }}
                          transition={{ type: 'spring' }}
                        >
                          <i className={`fas fa-chevron-right text-xs ${isActive ? 'text-blue-500' : 'text-blue-600'}`}></i>
                        </motion.span>
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}


        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="border-t border-gray-800 pt-8 w-full relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Patente Autentica. Tutti i diritti riservati.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link 
                to="/privacy-policy" 
                className={`text-sm transition-colors ${activeLink === '/privacy-policy' ? 'text-white font-medium' : 'text-gray-500 hover:text-white'}`}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/termini-condizioni" 
                className={`text-sm transition-colors ${activeLink === '/termini-condizioni' ? 'text-white font-medium' : 'text-gray-500 hover:text-white'}`}
              >
                Termini e Condizioni
              </Link>
              <Link 
                to="/cookie-policy" 
                className={`text-sm transition-colors ${activeLink === '/cookie-policy' ? 'text-white font-medium' : 'text-gray-500 hover:text-white'}`}
              >
                Cookie Policy
              </Link>
              <Link 
                to="/mappa-del-sito" 
                className={`text-sm transition-colors ${activeLink === '/mappa-del-sito' ? 'text-white font-medium' : 'text-gray-500 hover:text-white'}`}
              >
                Mappa del Sito
              </Link>
            </div>
          </div>
          
          {/* Legal notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              <strong>Nota legale:</strong> Questo è un sito privato e non è affiliato al Ministero delle Infrastrutture e dei Trasporti o ad alcun ente governativo. 
              I servizi offerti sono di supporto per la preparazione agli esami e per le pratiche amministrative relative alla patente di guida.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              P.IVA: IT22E0760102400001076101458 | Intestatario: Marco Matera | Banca: POSTE ITALIANE
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-20 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-[60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Torna su"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}

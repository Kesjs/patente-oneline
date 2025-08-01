import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants for form fields
  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98 
    }
  };

  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    hover: { 
      scale: 1.03,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98,
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    }
  };

  // Animation d'entrée de la section
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus({
        success: true,
        message: 'Il tuo messaggio è stato inviato con successo! Ti risponderemo al più presto.'
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contatti" 
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-4">
            Supporto Clienti
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contattaci</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hai domande o hai bisogno di maggiori informazioni? Compila il modulo o contattaci direttamente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Address Card */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Indirizzo</h3>
                  <p className="text-gray-600">Via Roma 123, 00100 Roma, Italia</p>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg text-green-600">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefono</h3>
                 
                  <div className="group">
                    <a 
                      href="https://wa.me/393505354783" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center"
                    >
                      <span className="border-b border-transparent group-hover:border-blue-600 pb-0.5">
                        +39 350 535 4783
                      </span>
                      <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                        WhatsApp
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg text-purple-600">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <div className="group">
                    <a 
                      href="mailto:patenteautentico@gmail.com" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <span className="border-b border-transparent group-hover:border-blue-600 pb-0.5">
                        patenteautentico@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg text-yellow-600">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Orari di Apertura</h3>
                  <p className="text-gray-600">24 ore su 24, 7 giorni su 7</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white"
              variants={fieldVariants}
              custom={4}
            >
              <h4 className="text-xl font-bold mb-4">Supporto Rapido</h4>
              <p className="mb-4 text-blue-100">Hai bisogno di aiuto immediato? Contattaci su WhatsApp per una risposta rapida!</p>
              <motion.a
                href="https://wa.me/393505354783"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-whatsapp text-2xl mr-2"></i>
                Chatta su WhatsApp
              </motion.a>
            </motion.div>

          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gray-800 relative inline-block"
              variants={fieldVariants}
            >
              <span className="relative z-10">Inviaci un Messaggio</span>
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-100 -z-0"></span>
            </motion.h3>
            
            <AnimatePresence>
              {submitStatus.message && (
                <motion.div 
                  className={`mb-8 p-4 rounded-xl ${submitStatus.success ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      {submitStatus.success ? (
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <p className={`text-sm ${submitStatus.success ? 'text-green-700' : 'text-red-700'}`}>
                      {submitStatus.message}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fieldVariants} custom={0}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i className="fas fa-user text-blue-500"></i>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`block w-full pl-12 pr-4 py-3 border-2 ${activeField === 'name' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200 hover:border-blue-300'} rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all duration-200 bg-gray-50`}
                    placeholder="Il tuo nome"
                    required
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fieldVariants} custom={1}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-envelope text-blue-500"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={`block w-full pl-12 pr-4 py-3 border-2 ${activeField === 'email' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200 hover:border-blue-300'} rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all duration-200 bg-gray-50`}
                      placeholder="tua@email.com"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants} custom={2}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-phone-alt text-blue-500"></i>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      className={`block w-full pl-12 pr-4 py-3 border-2 ${activeField === 'phone' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200 hover:border-blue-300'} rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all duration-200 bg-gray-50`}
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fieldVariants} custom={3}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Oggetto <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i className="fas fa-tag text-blue-500"></i>
                  </div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    className={`block w-full pl-12 pr-12 py-3 border-2 ${activeField === 'subject' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200 hover:border-blue-300'} rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent appearance-none transition-all duration-200 bg-gray-50`}
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%233b82f6'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3e%3c/svg%3e\")",
                      backgroundPosition: 'right 1rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '3rem',
                      WebkitPrintColorAdjust: 'exact',
                      printColorAdjust: 'exact',
                      cursor: 'pointer'
                    }}
                    required
                  >
                    <option value="">Seleziona un'opzione</option>
                    <option value="Informazioni Generali">Informazioni Generali</option>
                    <option value="Preventivo">Preventivo</option>
                    <option value="Supporto Tecnico">Supporto Tecnico</option>
                    <option value="Recupero Patente">Recupero Patente</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
              </motion.div>

              <motion.div variants={fieldVariants} custom={4}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Messaggio <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute top-4 left-4">
                    <i className="fas fa-comment-alt text-blue-500"></i>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className={`block w-full pl-12 pr-4 py-3 border-2 ${activeField === 'message' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200 hover:border-blue-300'} rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all duration-200 bg-gray-50`}
                    placeholder="Scrivi il tuo messaggio qui..."
                    required
                  ></textarea>
                </div>
              </motion.div>

              <motion.div variants={fieldVariants} custom={5} className="flex items-start">
                <div className="flex items-center h-5 mt-1">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-600">
                    Acconsento al trattamento dei miei dati personali in conformità con la{' '}
                    <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                      Privacy Policy
                    </a>
                    . <span className="text-red-500">*</span>
                  </label>
                </div>
              </motion.div>

              <motion.div 
                variants={fieldVariants} 
                custom={6} 
                className="pt-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-3"></i> Invia Messaggio
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

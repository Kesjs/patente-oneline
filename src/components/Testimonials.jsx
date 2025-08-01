import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  // Images de joie plus expressives
  const joyImages = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1531123895809-71037a2a76e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Marco R.',
      location: 'Roma',
      rating: 5,
      content: 'Servizio eccellente! Ho ricevuto la mia patente in soli 7 giorni lavorativi. Tutto perfetto e documenti assolutamente autentici. Consigliatissimo!',
      image: joyImages[0],
      date: '15 Gennaio 2023',
      emotion: 'Soddisfazione Totale'
    },
    {
      id: 2,
      name: 'Laura B.',
      location: 'Milano',
      rating: 5,
      content: 'Non credevo fosse possibile ottenere una patente così facilmente. Personale professionale e disponibile. La patente è perfetta e registrata regolarmente.',
      image: joyImages[1],
      date: '3 Marzo 2023',
      emotion: 'Felicità Immensa'
    },
    {
      id: 3,
      name: 'Alessio T.',
      location: 'Napoli',
      rating: 5,
      content: 'Ho avuto bisogno di un duplicato della patente dopo averla smarrita. In 3 giorni ho risolto tutto senza muovermi da casa. Servizio impeccabile!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      date: '22 Aprile 2023',
      emotion: 'Sollievo e Gioia'
    },
    {
      id: 4,
      name: 'Giulia M.',
      location: 'Torino',
      rating: 5,
      content: 'Ho scelto questo servizio per il rinnovo della patente. Risparmiato tempo e fatica. La consulenza legale inclusa è stata molto utile.',
      image: joyImages[3],
      date: '10 Maggio 2023',
      emotion: 'Soddisfazione'
    },
    {
      id: 5,
      name: 'Luca P.',
      location: 'Palermo',
      rating: 5,
      content: 'Patente ottenuta in tempi rapidissimi. Ho verificato personalmente l\'autenticità ed è tutto in regola. Consiglio vivamente questo servizio!',
      image: joyImages[4],
      date: '28 Giugno 2023',
      emotion: 'Entusiasmo'
    },
    {
      id: 6,
      name: 'Sofia C.',
      location: 'Bologna',
      rating: 5,
      content: 'Servizio professionale e affidabile. Ho ricevuto la patente internazionale in 48 ore. Assolutamente soddisfatta del risultato!',
      image: joyImages[5],
      date: '12 Luglio 2023',
      emotion: 'Gratitudine'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <motion.i 
        key={i} 
        className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        whileHover={{ scale: 1.2, rotate: 15 }}
        transition={{ type: 'spring', stiffness: 300 }}
      ></motion.i>
    ));
  };

  // Group testimonials into chunks of 3 for carousel
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialGroups.push(testimonials.slice(i, i + 3));
  }

  // Animation variants for Framer Motion
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Testimonianze Verificate
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cosa Dicono i Nostri Clienti</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ascolta le esperienze di chi ha già scelto i nostri servizi per ottenere la patente di guida.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-700 ease-in-out"
              initial={{ x: 0 }}
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonialGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {group.map((testimonial, index) => (
                      <motion.div 
                        key={testimonial.id} 
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        variants={item}
                        onMouseEnter={() => setIsHovered(testimonial.id)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered === testimonial.id ? 'scale-110' : 'scale-100'}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="text-xl font-bold">{testimonial.name}</h3>
                            <p className="text-blue-200">{testimonial.location}</p>
                          </div>
                          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                            {testimonial.emotion}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex mb-3">
                            {renderStars(testimonial.rating)}
                          </div>
                          <p className="text-gray-700 mb-4 italic relative">
                            <span className="absolute -left-6 -top-2 text-5xl text-gray-200 font-serif">"</span>
                            {testimonial.content}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                            <span>{testimonial.date}</span>
                            <div className="flex space-x-2">
                              <button className="text-blue-500 hover:text-blue-700 transition-colors">
                                <i className="far fa-thumbs-up"></i>
                              </button>
                              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <i className="far fa-comment"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-lg text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-10"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-chevron-left w-5 h-5"></i>
          </motion.button>
          <motion.button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-lg text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-10"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-chevron-right w-5 h-5"></i>
          </motion.button>
        </div>

        <motion.div 
          className="flex justify-center mt-12 space-x-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {testimonialGroups.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gradient-to-r from-blue-500 to-blue-600 w-8' : 'bg-gray-200 w-3'}`}
              aria-label={`Vai al testimonianza ${index + 1}`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            ></motion.button>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Unisciti ai nostri clienti soddisfatti!</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Non aspettare oltre. Contattaci oggi stesso per ottenere la tua patente di guida in modo rapido e sicuro.
          </p>
          <a 
            href="#contatti" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Richiedi Ora
          </a>
        </div>
      </div>
    </section>
  );
}

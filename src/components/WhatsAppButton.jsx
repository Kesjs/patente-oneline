import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.div 
      className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50"
      initial={{ y: 100, opacity: 0, x: 0 }}
      animate={{ y: 0, opacity: 1, x: 0 }}
      exit={{ y: 100, opacity: 0, x: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.5,
        type: 'spring',
        damping: 25,
        stiffness: 300
      }}
    >
      {/* WhatsApp Button */}
      <motion.a 
        href="https://wa.me/393505354783?text=Salve,%20vorrei%20maggiori%20informazioni%20sui%20vostri%20servizi"
        className="bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center relative"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          transition: { delay: 0.1 }
        }}
      >
        <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
        <motion.span 
          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: ['0 0 0 0 rgba(220, 38, 38, 0.7)', '0 0 0 10px rgba(220, 38, 38, 0)']
          }}
          transition={{
            scale: { repeat: Infinity, duration: 1.5 },
            boxShadow: { repeat: Infinity, duration: 1.5, delay: 0.5 }
          }}
        >
          <span className="relative">1</span>
        </motion.span>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;

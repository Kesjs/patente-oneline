import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const observer = useRef();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Set up intersection observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);
    
    sections.forEach(section => {
      observer.current.observe(section);
    });

    return () => {
      if (observer.current) {
        sections.forEach(section => {
          observer.current.unobserve(section);
        });
      }
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', type: 'route', section: 'home' },
    { name: 'Servizi', href: '#servizi', type: 'anchor', section: 'servizi' },
    { name: 'Categorie di Patente', href: '/categorie-patente', type: 'route', section: 'categorie' },
    { name: 'Testimonianze', href: '#temoignages', type: 'anchor', section: 'temoignages' },
    { name: 'Pagamento', href: '/pagamento', type: 'route', section: 'pagamento' },
    { name: 'Contatti', href: '#contatti', type: 'anchor', section: 'contatti' },
  ];

  const isActive = (link) => {
    if (link.type === 'anchor') {
      return activeSection === link.section;
    }
    return location.pathname === link.href;
  };

  const handleNavigation = (e, link) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (link.type === 'anchor') {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/${link.href}`;
      }
    } else {
      window.location.href = link.href;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://patentediguida.org/wp-content/uploads/2024/08/Patente-Di-Guida-Logo.jpg" 
              alt="Logo Patente Autentica"
              className="h-16 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-gray-800">Patente Autentica</span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <div className="relative">
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link)}
                    className={`relative px-2 py-1 transition uppercase text-sm tracking-wider cursor-pointer ${
                      isActive(link) ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'
                    } ${link.className || ''}`}
                  >
                    {link.name}
                    {isActive(link) && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"
                        layoutId="activeNavItem"
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>
        
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-4 bg-white shadow-lg">
          <ul className="space-y-3 font-semibold">
            {navLinks.map((link) => (
              <li key={`mobile-${link.name}`}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link)}
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    isActive(link) 
                      ? 'text-blue-700 font-bold bg-blue-50' 
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${link.className || ''}`}
                >
                  <div className="flex items-center">
                    {isActive(link) && (
                      <motion.span 
                        className="w-1 h-5 bg-blue-700 rounded-full mr-3"
                        initial={false}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    <span className={isActive(link) ? 'ml-1' : 'ml-4'}>{link.name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

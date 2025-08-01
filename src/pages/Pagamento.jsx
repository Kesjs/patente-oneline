import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ClipboardJS from 'clipboard';

const Pagamento = () => {
  const clipboardRef = useRef(null);

  useEffect(() => {
    // Inizializza clipboard.js
    clipboardRef.current = new ClipboardJS('.copy-btn');
    
    clipboardRef.current.on('success', function(e) {
      // Mostra il messaggio di copiato
      const copiedMessage = e.trigger.nextElementSibling;
      if (copiedMessage && copiedMessage.classList.contains('copied-message')) {
        copiedMessage.classList.add('show');
        setTimeout(() => {
          copiedMessage.classList.remove('show');
        }, 2000);
      }
      
      // Aggiungi l'animazione all'elemento copiato
      const target = document.querySelector(e.trigger.getAttribute('data-clipboard-target'));
      if (target) {
        target.classList.add('pulse-animation');
        setTimeout(() => {
          target.classList.remove('pulse-animation');
        }, 1000);
      }
      
      e.clearSelection();
    });

    // Pulsante torna su
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('opacity-0', 'invisible');
          backToTopButton.classList.add('opacity-100', 'visible');
        } else {
          backToTopButton.classList.remove('opacity-100', 'visible');
          backToTopButton.classList.add('opacity-0', 'invisible');
        }
      });

      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('hidden');
        if (isOpen) {
          mobileMenu.classList.remove('hidden');
          mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
    }

    return () => {
      // Distruggi l'istanza di clipboard
      if (clipboardRef.current) {
        clipboardRef.current.destroy();
      }
      
      // Rimuovi gli event listener per evitare memory leak
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        window.removeEventListener('scroll', () => {});
        backToTopButton.removeEventListener('click', () => {});
      }
      
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="font-sans bg-gray-50">
      <Helmet>
        <title>Pagamento Sicuro - Patente Autentica</title>
        <meta name="description" content="Pagamento sicuro per la tua patente di guida. Accettiamo pagamenti tramite bonifico bancario." />
        <meta name="keywords" content="pagamento patente, bonifico bancario, pagamento sicuro, patente di guida, pagamento online" />
        <meta name="author" content="Patente Autentica" />
        <link rel="icon" type="image/png" href="https://patentediguida.org/wp-content/uploads/2024/08/Patente-Di-Guida-Logo.jpg" />
        <link rel="apple-touch-icon" href="https://patentediguida.org/wp-content/uploads/2024/08/Patente-Di-Guida-Logo.jpg" />
        <meta name="theme-color" content="#0066cc" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden" style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://tse3.mm.bing.net/th/id/OIP.M1W0JqS2NEI90Wc1F7XpvAHaEK?r=0&w=1850&h=1042&rs=1&pid=ImgDetMain&o=7&rm=3) no-repeat center center',
        backgroundSize: 'cover'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate__animated animate__fadeInDown">Pagamento Sicuro</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate__animated animate__fadeInUp animate__delay-1s">Completa il tuo acquisto in modo sicuro e protetto</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
      </section>

      {/* Payment Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Come Effettuare il Pagamento</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Segui questi semplici passaggi per completare il tuo acquisto in modo sicuro</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clipboard-list text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scegli il Servizio</h3>
              <p className="text-gray-600">Seleziona il tipo di patente o servizio desiderato dalla nostra gamma di offerte.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-euro-sign text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Effettua il Pagamento</h3>
              <p className="text-gray-600">Segui le istruzioni per il pagamento tramite bonifico bancario sicuro.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ricevi Conferma</h3>
              <p className="text-gray-600">Riceverai una conferma via email e potrai scaricare i tuoi documenti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Pagamento con Bonifico Bancario</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-gray-600">Per completare il tuo acquisto, effettua un bonifico alle seguenti coordinate bancarie:</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-university text-blue-600 text-xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Coordinate Bancarie</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Intestatario</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                        <span className="font-mono text-gray-800" id="account-holder">Marco Matera</span>
                        <button className="copy-btn text-blue-600 hover:text-blue-800 ml-2" data-clipboard-target="#account-holder">
                          <i className="far fa-copy"></i>
                        </button>
                      </div>
                      <p className="text-xs text-green-600 mt-1 copied-message">Copiato!</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">IBAN</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                        <span className="font-mono text-gray-800" id="iban">IT22E0760102400001076101458</span>
                        <button className="copy-btn text-blue-600 hover:text-blue-800 ml-2" data-clipboard-target="#iban">
                          <i className="far fa-copy"></i>
                        </button>
                      </div>
                      <p className="text-xs text-green-600 mt-1 copied-message">Copiato!</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">BIC/SWIFT</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                        <span className="font-mono text-gray-800" id="bic">BPPIITRRXXX</span>
                        <button className="copy-btn text-blue-600 hover:text-blue-800 ml-2" data-clipboard-target="#bic">
                          <i className="far fa-copy"></i>
                        </button>
                      </div>
                      <p className="text-xs text-green-600 mt-1 copied-message">Copiato!</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Nome Banca</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                        <span className="font-mono text-gray-800" id="bank-name">POSTE ITALIANE</span>
                        <button className="copy-btn text-blue-600 hover:text-blue-800 ml-2" data-clipboard-target="#bank-name">
                          <i className="far fa-copy"></i>
                        </button>
                      </div>
                      <p className="text-xs text-green-600 mt-1 copied-message">Copiato!</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-blue-50 p-6 rounded-lg h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Importante</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <i className="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                          <span>Inserisci il tuo nome e cognome nella causale del bonifico</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-shield-alt text-blue-500 mt-1 mr-2"></i>
                          <span>Le tue informazioni di pagamento sono protette da crittografia avanzata</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-clock text-blue-500 mt-1 mr-2"></i>
                          <span>Il pagamento verrà elaborato entro 1-2 giorni lavorativi</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-envelope text-blue-500 mt-1 mr-2"></i>
                          <span>Riceverai una conferma via email</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-blue-100">
                      <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 text-yellow-500">
                            <i className="fas fa-exclamation-triangle text-xl"></i>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-yellow-800">Attenzione</h4>
                            <p className="text-xs text-yellow-700">Verifica sempre l'IBAN e i dati del beneficiario prima di effettuare il bonifico.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-exclamation-circle text-yellow-400 text-xl"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <span className="font-medium">Nota importante:</span> Dopo aver effettuato il pagamento, invia una copia della ricevuta di pagamento a 
                      <a href="mailto:patenteautentico@gmail.com" className="font-medium underline">patenteautentico@gmail.com</a> 
                      per accelerare l'elaborazione del tuo ordine.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hai bisogno di aiuto?</h3>
                <p className="text-gray-600 mb-6">Il nostro team di supporto è qui per aiutarti con qualsiasi domanda sul processo di pagamento.</p>
                <a href="mailto:patenteautentico@gmail.com" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  <i className="fas fa-envelope mr-2"></i> Contatta il Supporto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Pagamento;

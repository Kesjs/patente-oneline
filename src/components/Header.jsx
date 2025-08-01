export default function Header() {
  return (
    <header className="relative text-white overflow-hidden h-screen max-h-[900px] bg-gray-900" id="home">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://tse1.mm.bing.net/th/id/OIP.sYUTAao61Bohm_BQ3pEZwAHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Patente di Guida Autentica" 
            className="w-full h-full object-cover object-center transform scale-110 md:scale-100"
            style={{
              animation: 'zoomInOut 20s ease-in-out infinite alternate',
            }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1601584115223-5b9e2bbcb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/50 to-blue-900/60"></div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(40px)',
                opacity: 0.3,
                animation: `float ${15 + Math.random() * 20}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `}</style>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
              </span>
              <span className="text-yellow-300 text-sm font-medium tracking-wider">SERVIZIO UFFICIALE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              <span className="block text-white mb-3">PATENTE DI GUIDA</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">AUTENTICA ITALIANA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Ottieni la tua patente di guida italiana registrata ufficialmente <span className="font-semibold text-yellow-300">senza sostenere esami</span>. 
              Consegna rapida in <span className="font-semibold text-yellow-300">3-5 giorni lavorativi</span> in tutta Italia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a 
                  href="#contatti" 
                  className="relative flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-xl text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                >
                  <i className="fas fa-phone-alt mr-3 animate-pulse"></i>
                  RICHIEDI ORA
                </a>
              </div>
              
              <a 
                href="#servizi" 
                className="relative flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 border-2 border-white/30 hover:border-white/50 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <i className="fas fa-info-circle mr-3"></i>
                SCOPRI DI PIÙ
              </a>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-blue-100">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-yellow-400 mr-2"></i>
                <span>100% Legale e Registrato</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-yellow-400 mr-2"></i>
                <span>Consegna Rapida</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Document Preview */}
          <div className="relative z-10">
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-400/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/10 rounded-2xl mb-4 border border-yellow-400/30">
                    <i className="fas fa-file-alt text-3xl text-yellow-400"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">DOCUMENTO UFFICIALE</h3>
                  <p className="text-blue-100/80 text-sm font-medium">Registrato presso il PRA e Ministero dei Trasporti</p>
                </div>
                
                <div className="space-y-5 mb-8">
                  {[
                    { icon: 'shield-alt', text: 'Registrazione ufficiale' },
                    { icon: 'check-circle', text: 'Verifica online' },
                    { icon: 'truck', text: 'Consegna in 3-5 giorni lavorativi' },
                    { icon: 'lock', text: 'Privacy garantita' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-8 h-8 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors duration-300">
                          <i className={`fas fa-${item.icon} text-yellow-400 text-sm`}></i>
                        </div>
                      </div>
                      <span className="ml-3 text-blue-100 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <button className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                    <i className="fas fa-download mr-2"></i>
                    Scarica la guida completa
                  </button>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-yellow-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-900/90 rounded-2xl -z-10"></div>
              </div>
            </div>
            
            {/* Floating verification badge */}
            <div className="absolute -bottom-4 right-8 bg-white text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-1.5"></i>
              VERIFICATO
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <span className="text-sm text-white/70 mb-2 font-medium tracking-wider">Scopri di più</span>
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <header className="relative text-white overflow-hidden min-h-screen" id="home">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://www.veronatomorrow.it/wp-content/uploads/2024/04/esame-patente-scuola-guida.jpg" 
          alt="Patente di guida" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFjM2M2MyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIj5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-800/20"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-16 sm:py-24">
        <div className="w-full">
          {/* Top Section - Main Title */}
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
              </span>
              <span className="text-yellow-300 text-sm font-medium tracking-wider">SERVIZIO UFFICIALE</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              <span className="block text-white">PATENTE DI GUIDA</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2">AUTENTICA ITALIANA</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ottieni la tua patente di guida italiana registrata ufficialmente <span className="font-semibold text-yellow-300">senza sostenere esami</span>. 
              Consegna rapida in <span className="font-semibold text-yellow-300">3-5 giorni lavorativi</span> in tutta Italia.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a 
                href="#contatti" 
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-bold rounded-lg text-center transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center"
              >
                <i className="fas fa-phone-alt mr-3"></i>
                RICHIEDI ORA
              </a>
              <a 
                href="#servizi" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg text-center transition-all hover:bg-white/20 hover:border-white/30 flex items-center justify-center"
              >
                <i className="fas fa-info-circle mr-3"></i>
                SCOPRI DI PIÙ
              </a>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-check-circle text-yellow-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">100% Legale</h3>
                <p className="text-sm text-blue-100/80">Documento ufficiale registrato</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-bolt text-yellow-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Consegna Rapida</h3>
                <p className="text-sm text-blue-100/80">3-5 giorni lavorativi</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-file-alt text-yellow-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">DOCUMENTO UFFICIALE</h3>
                <p className="text-sm text-blue-100/80">Registrato presso il PRA e Ministero dei Trasporti</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-shield-alt text-yellow-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Verifica Online</h3>
                <p className="text-sm text-blue-100/80">Privacy garantita</p>
              </div>
            </div>
            
            {/* Download Guide */}
            <div className="text-center">
              <a 
                href="#guida" 
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 transition-colors group text-lg"
              >
                <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
                <span>Scarica la guida completa</span>
                <i className="fas fa-chevron-right ml-2 text-sm opacity-70 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
          
          {/* Verification Badge */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center text-sm text-white/80">
            <i className="fas fa-shield-check text-green-400 mr-2"></i>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

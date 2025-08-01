export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">La Tua Licenza, La Nostra Competenza</h1>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Benvenuti in Patente Originale Autentico, la vostra agenzia di fiducia per l'ottenimento di patenti di guida autentiche attraverso il nostro team di esperti qualificati.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          <div className="p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-700">Anni di Esperienza</div>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">23,500+</div>
            <div className="text-gray-700">Clienti Soddisfatti</div>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-700">Tasso di Successo</div>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-700">Supporto Clienti</div>
          </div>
        </div>

        {/* First Feature Section - Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Licenza Autentica e Registrata</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed">
              Siamo un'associazione di esperti multinazionali, specializzata nella stampa, registrazione e distribuzione di documenti difficili da ottenere. Acquisiamo documenti come patenti di guida, passaporti, carte d'identità, permessi di soggiorno, certificati di matrimonio, diplomi universitari, offerte di lavoro internazionali e visti.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Consegniamo in qualsiasi paese utilizzando un servizio postale collaudato. I nostri agenti vi spiegheranno come richiedere il vostro documento specifico con la massima discrezione e professionalità.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3 text-lg"></i>
                <span className="text-gray-700">Documenti autentici e verificabili</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3 text-lg"></i>
                <span className="text-gray-700">Registrazione ufficiale presso le autorità competenti</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3 text-lg"></i>
                <span className="text-gray-700">Consegna rapida e sicura in tutto il mondo</span>
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A3Q78weB3qur4pWP/permis-de-conduire-m5KLaqKxDRI6V3B1.webp" 
              alt="Patente di Guida Autentica" 
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Documenti Ufficiali</h3>
                <p className="text-blue-100">Autentici e verificabili</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Image Left */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] order-2 md:order-1">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=511,fit=crop/A3Q78weB3qur4pWP/permis-de-conduire-min-d957jjv4lWCVn9M2.jpg" 
              alt="Acquisto Patente di Guida" 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900">Acquisto Patente di Guida</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed">
              Il nostro team di esperti ha più di 10 anni di esperienza nel farvi superare l'esame di guida in Italia. Siete stati bocciati più volte a causa dello stress, della mancanza di concentrazione o semplicemente perché il sistema è troppo esigente?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Siamo qui per aiutarvi. Offriamo un servizio completo per l'ottenimento della patente di guida senza dover affrontare lo stress degli esami. I nostri documenti sono perfettamente identici a quelli originali e vengono registrati ufficialmente.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="text-blue-800 font-medium">
                <i className="fas fa-info-circle mr-2"></i>
                Tutte le nostre patenti sono registrate nel database ufficiale e perfettamente verificabili.
              </p>
            </div>
          </div>
        </div>

        {/* Third Feature Section - Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Sostituzione Patente Smarrita o Sospesa</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed">
              La vostra patente di guida italiana è temporaneamente sospesa? Avete commesso un errore e avete perso definitivamente la patente? Non preoccupatevi, abbiamo la soluzione perfetta per voi.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Utilizziamo le nostre risorse e le nostre relazioni governative per GARANTIRE che i nostri clienti possano tornare a guidare legalmente. Potete ottenere una nuova patente di guida italiana senza lo stress di dover studiare nuovamente.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-blue-600 text-2xl mb-2">
                  <i className="fas fa-clock"></i>
                </div>
                <h4 className="font-semibold text-gray-800">Consegna Rapida</h4>
                <p className="text-sm text-gray-600">Tempi di consegna da 3 a 7 giorni lavorativi</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-blue-600 text-2xl mb-2">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="font-semibold text-gray-800">Garanzia di Qualità</h4>
                <p className="text-sm text-gray-600">Documenti autentici al 100%</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=459,fit=crop/A3Q78weB3qur4pWP/csm_cours_moto_4a77799fbd-d957j0jvPycr0zGW.jpg" 
              alt="Sostituzione Patente" 
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Ripristino Licenza</h3>
                <p className="text-blue-100">Soluzioni rapide ed efficaci</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-car-side"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Patente B</h3>
            <p className="text-gray-600 mb-4">
              La patente B è necessaria per guidare autovetture e autocarri fino a 3,5 tonnellate.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Scopri di più <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-truck"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Patente C</h3>
            <p className="text-gray-600 mb-4">
              Per la guida di veicoli pesanti adibiti al trasporto di cose con massa complessiva superiore a 3,5 tonnellate.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Scopri di più <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-motorcycle"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Patente A</h3>
            <p className="text-gray-600 mb-4">
              Per la guida di motocicli di qualsiasi cilindrata, senza limiti di potenza o rapporto potenza/peso.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Scopri di più <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const services = [
    {
      title: "Acquisto Patente di Guida",
      description: "Ottenimento di una patente di guida autentica e registrata senza sostenere esami teorici o pratici. Documento ufficiale valido in tutta Italia e in Europa, perfettamente identico all'originale.",
      icon: "fas fa-id-card",
      features: [
        "Registrazione ufficiale presso il PRA",
        "Nessun esame teorico o pratico richiesto",
        "Documenti autentici e verificabili",
        "Consegna rapida in 3-7 giorni lavorativi",
        "Supporto clienti dedicato 24/7"
      ],
      badge: "Più Richiesto",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=511,fit=crop/A3Q78weB3qur4pWP/mre-italie-colere-changement-permis-AE0awbNzzOtX877p.jpg"
    },
    {
      title: "Ripristino Licenza Sospesa",
      description: "Soluzioni professionali per il ripristino della patente di guida sospesa o ritirata. Il nostro team di esperti si occupa di tutta la procedura per voi.",
      icon: "fas fa-undo-alt",
      features: [
        "Analisi gratuita del caso",
        "Presentazione ricorsi",
        "Assistenza legale specializzata",
        "Massima riservatezza",
        "Alto tasso di successo"
      ],
      badge: "Soluzione Rapida",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=432,fit=crop/A3Q78weB3qur4pWP/photo_fc_permis_am_934d97a7d7-A85ELx1j1yCr4jML.jpg"
    },
    {
      title: "Duplicato Patente Smarrita",
      description: "Servizio rapido per il duplicato della patente in caso di smarrimento, furto o deterioramento. Consegna direttamente a casa tua in tutta Italia.",
      icon: "fas fa-clone",
      features: [
        "Procedura rapida e sicura",
        "Nessun esame da sostenere",
        "Documenti perfettamente identici all'originale",
        "Consegna espresso in 48-72 ore",
        "Supporto completo post-consegna"
      ],
      image: "https://tse3.mm.bing.net/th/id/OIP.qBaLdhrRdE6GcfpCnvi97QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Patente Internazionale",
      description: "Ottieni la patente internazionale per guidare all'estero senza problemi. Valida in oltre 150 paesi in tutto il mondo, con traduzione ufficiale in 12 lingue.",
      icon: "fas fa-globe-americas",
      features: [
        "Valida in 150+ paesi in tutto il mondo",
        "Consegna espressa in 24-48 ore",
        "Tradotta in 12 lingue ufficiali",
        "Validità da 1 a 3 anni",
        "Supporto clienti multilingua"
      ],
      badge: "Popolare",
      image: "https://tse2.mm.bing.net/th/id/OIP._Zk3Atqny8zoByGkebXibgHaE0?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Conversione Patente Estera",
      description: "Servizio professionale per la conversione della patente di guida estera in patente italiana. Nessun esame richiesto nella maggior parte dei casi.",
      icon: "fas fa-exchange-alt",
      features: [
        "Conversione rapida e sicura",
        "Nessun esame nella maggior parte dei casi",
        "Supporto per tutti i paesi",
        "Traduzioni certificate",
        "Pratiche burocratiche gestite da esperti"
      ],
      image: "https://th.bing.com/th/id/OIP.gJ-D5qdrmbInoWZGeXlS0QHaEK?w=299&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
      title: "Consulenza Legale Specializzata",
      description: "Assistenza legale specializzata in diritto della circolazione stradale. Supporto completo per ricorsi, ritiro patente e pratiche burocratiche complesse.",
      icon: "fas fa-balance-scale",
      features: [
        "Ricorsi contro ritiro patente",
        "Difesa in tribunale",
        "Rottamazione cartelle",
        "Consulenza personalizzata",
        "Massima riservatezza garantita"
      ],
      badge: "Nuovo Servizio",
      image: "https://tse3.mm.bing.net/th/id/OIP.asFxGZVmCLgVCqMpH_CjIwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">I Nostri Servizi Esclusivi</h2>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Scopri la nostra gamma completa di servizi professionali per il rilascio, il ripristino e la gestione della tua patente di guida. 
            Siamo qui per offrirti soluzioni personalizzate e affidabili.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden service-card transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  {service.badge && (
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <i className={`${service.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-5 leading-relaxed flex-grow">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3 text-lg"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                    Richiedi Maggiori Informazioni
                  </button>
                </div>
                <a 
                  href="#contatti" 
                  className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Richiedi informazioni
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Non hai trovato il servizio che cercavi? Contattaci per una consulenza personalizzata.
          </p>
          <a 
            href="#contatti" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Contattaci Ora
          </a>
        </div>
      </div>
    </section>
  );
}

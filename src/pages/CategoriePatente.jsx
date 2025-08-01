import React from 'react';
import { Link } from 'react-router-dom';

const CategoriePatente = () => {
  const categories = [
    {
      id: 'cqc',
      title: 'CQC - Certificato di Qualificazione del Conducente',
      description: 'Obbligatorio per i conducenti professionisti che trasportano passeggeri o merci in Europa.',
      etaMinima: 21,
      validita: '5 anni (rinnovabile)',
      prezzo: '€700-€1200',
      note: 'Corso di formazione iniziale di 140 ore, seguito da 35 ore di formazione continua ogni 5 anni.',
      requisiti: [
        'Essere in possesso della patente C, D, CE o DE',
        'Avere compiuto 21 anni',
        'Idoneità medica in corso di validità',
        'Casellario giudiziale pulito (certificato del casellario)',
        'Formazione iniziale di 140 ore',
        'Superamento di un esame finale'
      ],
      veicoli: 'Veicoli per il trasporto merci > 3,5t o trasporto persone > 9 posti',
      limitazioni: 'Obbligatorio per il trasporto professionale a pagamento di merci o persone in Europa'
    },
    {
      id: 'am',
      title: 'Patente AM (Ciclomotori)',
      description: 'Per la guida di ciclomotori a due o tre ruote e quadricicli leggeri fino a 50 cc (4 kW per i veicoli elettrici).',
      etaMinima: 14,
      validita: '10 anni (5 anni per over 50)',
      prezzo: '€250-€400',
      note: 'Include teoria e pratica con istruttore abilitato. Obbligatoria dal 2013.',
      requisiti: [
        'Età minima 14 anni compiuti',
        'Esame teorico (quiz) e pratico',
        'Certificato medico non agonistico',
        'Foglio rosa con validità 6 mesi',
        'Corso di teoria (se minorenne)'
      ],
      veicoli: 'Ciclomotori 50cc, quadricicli leggeri, mini-car',
      limitazioni: 'Velocità massima 45 km/h, potenza max 4 kW (elettrici)'
    },
    {
      id: 'a1',
      title: 'Patente A1',
      description: 'Per motocicli di cilindrata massima di 125 cc, potenza massima di 11 kW e rapporto potenza/peso max 0,1 kW/kg.',
      etaMinima: 16,
      validita: '10 anni (5 anni per over 50)',
      prezzo: '€600-€900',
      note: 'Include esame teorico e pratico. Consente di guidare anche i veicoli della categoria AM.',
      requisiti: [
        'Età minima 16 anni compiuti',
        'Esame teorico (quiz ministeriale)',
        '6 ore di guida obbligatorie (2 in notturno)',
        'Esame pratico su strada',
        'Certificato medico non agonistico'
      ],
      veicoli: 'Motocicli 125cc, tricicli 15kW, quadricicli',
      limitazioni: 'Potenza max 11 kW, rapporto potenza/peso max 0,1 kW/kg'
    },
    {
      id: 'a2',
      title: 'Patente A2',
      description: 'Per motocicli di potenza massima di 35 kW e con un rapporto potenza/peso non superiore a 0,2 kW/kg.',
      etaMinima: 18,
      validita: '10 anni (5 anni per over 50)',
      prezzo: '€800-€1.200',
      note: 'Accesso diretto o conversione da A1 dopo 2 anni. Include A1 e AM.',
      requisiti: [
        'Età minima 18 anni',
        'Esame teorico (se non già in possesso di A1)',
        '10 ore di guida obbligatorie (3 in notturna, 2 in autostrada, 2 su strade extraurbane)',
        'Esame pratico su strada',
        'Certificato medico non agonistico'
      ],
      veicoli: 'Motocicli di potenza non superiore a 35 kW',
      limitazioni: 'Rapporto potenza/peso max 0,2 kW/kg, non derivato da un veicolo di potenza superiore ai 70 kW'
    },
    {
      id: 'a',
      title: 'Patente A (senza limiti)',
      description: 'Per motocicli di qualsiasi cilindrata e potenza, senza limitazioni. La patente definitiva per i motociclisti.',
      etaMinima: 24,
      validita: '10 anni (5 anni per over 50)',
      prezzo: '€1.000-€1.500',
      note: 'Accesso diretto a 24 anni o dopo 2 anni di A2. Include A2, A1 e AM.',
      requisiti: [
        'Età minima 24 anni (accesso diretto) o 20 anni (con 2 anni di A2)',
        'Esame teorico (se non già in possesso di A2)',
        '12 ore di guida obbligatorie (4 in notturna, 2 in autostrada, 3 su strade extraurbane, 3 in condizioni di traffico intenso)',
        'Esame pratico su strada',
        'Certificato medico non agonistico'
      ],
      veicoli: 'Tutti i motocicli senza limiti di cilindrata e potenza',
      limitazioni: 'Nessuna limitazione'
    },
    {
      id: 'b',
      title: 'Patente B (Auto)',
      description: 'Per autoveicoli con massa complessiva non superiore a 3,5 tonnellate e non più di 8 posti a sedere (escluso conducente).',
      etaMinima: 18,
      validita: '10 anni (fino a 50 anni), poi 5 anni (50-70), 3 anni (70-80), 2 anni (over 80)',
      prezzo: '€700-€1.200',
      note: 'Include foglio rosa, esame teorico e pratico. Consente di trainare rimorchi leggeri (fino a 750 kg).',
      requisiti: [
        'Età minima 18 anni compiuti',
        'Esame teorico (quiz ministeriale)',
        '6 ore di guida obbligatorie (2 in notturna, 2 in autostrada, 2 su strade extraurbane)',
        'Esame pratico della durata minima di 25 minuti',
        'Certificato medico non agonistico'
      ],
      veicoli: 'Autovetture, furgoni, autocaravan fino a 3,5t, quadricicli pesanti',
      limitazioni: 'Massimo 8 passeggeri, massa complessiva 3,5t, rimorchio fino a 750kg'
    },
    {
      id: 'b96',
      title: 'Patente B96',
      description: 'Estensione della patente B per il traino di rimorchi pesanti (combinazione veicolo + rimorchio tra 3,5t e 4,25t).',
      etaMinima: 18,
      validita: 'Come patente B',
      prezzo: '€200-€400',
      note: 'Non è un esame ma un corso di addestramento di 7 ore. Richiede patente B.',
      requisiti: [
        'Patente B da almeno 1 anno',
        'Corso pratico di 7 ore (4h di guida, 2h di teoria, 1h di guida in condizioni di sicurezza)',
        'Nessun esame finale',
        'Certificato di frequenza al corso'
      ],
      veicoli: 'Combinazione auto + rimorchio tra 3,5t e 4,25t',
      limitazioni: 'Peso complessivo max 4,25t, rimorchio non più pesante del veicolo trainante'
    },
    {
      id: 'be',
      title: 'Patente BE',
      description: 'Per il traino di rimorchi pesanti con patente B (combinazione oltre le 3,5t).',
      etaMinima: 18,
      validita: 'Come patente B',
      prezzo: '€400-€700',
      note: 'Richiede patente B. Include la patente B96.',
      requisiti: [
        'Patente B',
        'Esame teorico specifico (se non già in possesso di altra patente superiore)',
        'Esame pratico con veicolo attrezzato',
        'Certificato medico non agonistico'
      ],
      veicoli: 'Combinazione auto + rimorchio oltre le 3,5t',
      limitazioni: 'Massa massima complessiva 7t, rimorchio non più pesante del veicolo trainante'
    },
    {
      id: 'c',
      title: 'Patente C (Autocarri)',
      description: 'Per autoveicoli per trasporto di cose con massa complessiva superiore a 3,5 tonnellate.',
      etaMinima: 18,
      validita: '5 anni (fino a 65 anni), poi rinnovo ogni 2 anni',
      prezzo: '€1.200-€1.800',
      note: 'Richiede patente B da almeno 1 anno. Include CQC merci per uso professionale.',
      requisiti: [
        'Età minima 18 anni',
        'Patente B da almeno 1 anno',
        'Esame teorico specifico',
        'Esame pratico su strada con veicolo della categoria',
        'Certificato medico di II categoria',
        'Corso di pronto soccorso (per il primo rilascio)'
      ],
      veicoli: 'Autocarri, autofurgoni, autocaravan oltre 3,5t',
      limitazioni: 'Solo trasporto merci, non persone'
    },
    {
      id: 'ce',
      title: 'Patente CE (Autoarticolati)',
      description: 'Per la guida di autoarticolati e autotreni per trasporto merci di massa superiore a 3,5t con rimorchio superiore a 750kg.',
      etaMinima: 21,
      validita: '5 anni (fino a 65 anni), poi rinnovo ogni anno',
      prezzo: '€1.500-€2.200',
      note: 'Richiede patente C da almeno 1 anno. Include CQC merci.',
      requisiti: [
        'Età minima 21 anni',
        'Patente C da almeno 1 anno',
        'Esame teorico specifico (se non già in possesso di D o D1)',
        'Esame pratico con veicolo della categoria',
        'Certificato medico di II categoria',
        'Corso di formazione specifico (se richiesto)'
      ],
      veicoli: 'Autoarticolati, autotreni, autocarri con rimorchio pesante',
      limitazioni: 'Solo trasporto merci, non persone'
    },
    {
      id: 'd1',
      title: 'Patente D1 (Minibus)',
      description: 'Per autoveicoli per trasporto di persone con non più di 16 posti a sedere oltre al conducente e lunghezza massima di 8 metri.',
      etaMinima: 21,
      validita: '5 anni (fino a 65 anni), poi rinnovo ogni 5 anni',
      prezzo: '€1.800-€2.500',
      note: 'Richiede patente B da almeno 2 anni. Include CQC persone se usato professionalmente.',
      requisiti: [
        'Età minima 21 anni',
        'Patente B da almeno 2 anni',
        'Esame teorico specifico',
        'Esame pratico su strada',
        'Certificato medico di II categoria',
        'Corso di formazione specifico per il trasporto persone'
      ],
      veicoli: 'Minibus fino a 16 posti, lunghezza max 8 metri',
      limitazioni: 'Non può essere usato per servizi di linea'
    },
    {
      id: 'd',
      title: 'Patente D (Autobus)',
      description: 'Per autoveicoli per trasporto di persone con più di 8 posti a sedere (escluso conducente).',
      etaMinima: 24,
      validita: '5 anni (fino a 65 anni), poi rinnovo ogni anno',
      prezzo: '€2.000-€3.000',
      note: 'Richiede patente B da almeno 2 anni. Include CQC persone per uso professionale.',
      requisiti: [
        'Età minima 24 anni (21 per servizio pubblico)',
        'Patente B da almeno 2 anni',
        'Esame teorico specifico',
        'Esame pratico su strada con veicolo della categoria',
        'Certificato medico di II categoria',
        'Corso di formazione specifico per il trasporto persone',
        'Corso di pronto soccorso'
      ],
      veicoli: 'Autobus, filobus, autosnodati, autobus a due piani',
      limitazioni: 'Nessuna limitazione di posti o lunghezza'
    },
    {
      id: 'de',
      title: 'Patente DE (Autosnodati)',
      description: 'Per la guida di autobus con rimorchio di massa superiore a 750 kg o autosnodati.',
      etaMinima: 24,
      validita: '5 anni (fino a 65 anni), poi rinnovo ogni anno',
      prezzo: '€2.500-€3.500',
      note: 'Richiede patente D da almeno 2 anni. Include CQC persone.',
      requisiti: [
        'Età minima 24 anni',
        'Patente D da almeno 2 anni',
        'Esame teorico specifico (se non già in possesso di CE)',
        'Esame pratico con veicolo della categoria',
        'Certificato medico di II categoria',
        'Corso di formazione specifico'
      ],
      veicoli: 'Autobus con rimorchio pesante, autosnodati, filobus con rimorchio',
      limitazioni: 'Nessuna limitazione di lunghezza o posti'
    },
    {
      id: 'c1',
      title: 'Patente C1 (Medi Carichi)',
      description: 'Per autoveicoli per trasporto di cose con massa compresa tra 3,5t e 7,5t.',
      etaMinima: 18,
      validita: '5 anni (fino a 65 anni), poi rinnovo ogni 5 anni',
      prezzo: '€1.000-€1.500',
      note: 'Richiede patente B. Include CQC merci se usato professionalmente.',
      requisiti: [
        'Età minima 18 anni',
        'Patente B',
        'Esame teorico specifico',
        'Esame pratico con veicolo della categoria',
        'Certificato medico di II categoria'
      ],
      veicoli: 'Autocarri medi, furgoni grandi, camioncini',
      limitazioni: 'Massa massima 7,5t, solo trasporto merci'
    },
    {
      id: 'c1e',
      title: 'Patente C1E (Medi Carichi + Rimorchio)',
      description: 'Per la guida di veicoli della categoria C1 con rimorchio di massa superiore a 750 kg.',
      etaMinima: 18,
      validita: '5 anni (fino a 65 anni), poi rinnovo ogni 5 anni',
      prezzo: '€1.200-€1.800',
      note: 'Richiede patente C1. Include CQC merci se usato professionalmente.',
      requisiti: [
        'Età minima 18 anni',
        'Patente C1',
        'Esame teorico specifico (se non già in possesso di altra patente superiore)',
        'Esame pratico con veicolo della categoria',
        'Certificato medico di II categoria'
      ],
      veicoli: 'Autocarri medi con rimorchio pesante',
      limitazioni: 'Massa complessiva max 12t, rimorchio non più pesante del veicolo trainante'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image and Overlay */}
      <header className="relative bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-80" 
            src="https://www.tvrus.eu/wp-content/uploads/2022/05/depositphotos_404131702_l-e1651251184995.jpg" 
            alt="Patente di guida"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-700/50 mix-blend-multiply" aria-hidden="true"></div>
        </div>

        {/* Animated Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight animate-fade-in">
            Scopri le <span className="text-yellow-400">Categorie di Patente</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100 animate-fade-in-up animate-delay-100">
            Tutte le informazioni di cui hai bisogno per scegliere la patente giusta per te
          </p>
          
          {/* Animated Stats */}
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { number: '8+', label: 'Categorie' },
              { number: '98%', label: 'Successo' },
              { number: '24/7', label: 'Supporto' },
              { number: '10+', label: 'Anni Esperienza' }
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:bg-opacity-20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.3}s forwards`,
                  opacity: 0
                }}
              >
                <p className="text-3xl font-bold text-yellow-400">{stat.number}</p>
                <p className="mt-1 text-sm font-medium text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>

        
        </div>
      </header>

      {/* Add CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Search and Filter Bar */}
          <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">Cerca categoria</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Cerca tra le categorie..."
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Filtra per:</span>
                <select 
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  defaultValue=""
                >
                  <option value="">Tutte le categorie</option>
                  <option value="motoveicoli">Motoveicoli</option>
                  <option value="autoveicoli">Autoveicoli</option>
                  <option value="merci">Trasporto merci</option>
                  <option value="persone">Trasporto persone</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    {category.id === 'b' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Più richiesta
                      </span>
                    )}
                    {category.id === 'a2' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Popolare
                      </span>
                    )}
                  </div>
                  
                  <p className="mt-2 text-gray-600">{category.description}</p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-user-clock text-blue-500 w-5"></i>
                      <span className="ml-2 text-sm text-gray-700">Età minima: <span className="font-medium">{category.etaMinima} anni</span></span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-calendar-check text-blue-500 w-5"></i>
                      <span className="ml-2 text-sm text-gray-700">Validità: <span className="font-medium">{category.validita}</span></span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-tag text-blue-500 w-5"></i>
                      <span className="ml-2 text-sm text-gray-700">Costo: <span className="font-medium">{category.prezzo}</span></span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Veicoli abilitati:</h4>
                    <p className="text-sm text-gray-600">{category.veicoli}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Limitazioni:</h4>
                    <p className="text-sm text-gray-600">{category.limitazioni}</p>
                  </div>

                  <div className="mt-6">
                    <button 
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      onClick={() => document.getElementById(`modal-${category.id}`).showModal()}
                    >
                      Dettagli completi
                      <i className="fas fa-chevron-right ml-2 text-xs"></i>
                    </button>
                  </div>
                </div>

                {/* Modal for detailed view */}
                <dialog id={`modal-${category.id}`} className="modal">
                  <div className="modal-box max-w-4xl">
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Descrizione</h4>
                        <p className="text-gray-700 mb-4">{category.description}</p>
                        
                        <h4 className="font-medium text-gray-900 mt-6 mb-2">Informazioni chiave</h4>
                        <div className="space-y-2">
                          <p className="flex justify-between">
                            <span className="text-gray-600">Età minima:</span>
                            <span className="font-medium">{category.etaMinima} anni</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-gray-600">Validità:</span>
                            <span className="font-medium">{category.validita}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-gray-600">Costo indicativo:</span>
                            <span className="font-medium">{category.prezzo}</span>
                          </p>
                        </div>

                        <h4 className="font-medium text-gray-900 mt-6 mb-2">Veicoli abilitati</h4>
                        <p className="text-gray-700">{category.veicoli}</p>

                        <h4 className="font-medium text-gray-900 mt-6 mb-2">Limitazioni</h4>
                        <p className="text-gray-700">{category.limitazioni}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Requisiti</h4>
                        <ul className="space-y-2">
                          {category.requisiti.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>

                        {category.note && (
                          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-medium text-blue-800 mb-1">Nota importante</h4>
                            <p className="text-blue-700 text-sm">{category.note}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Chiudi</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800">Hai bisogno di aiuto nella scelta?</h3>
            <p className="mt-2 text-blue-700">Contatta i nostri esperti per una consulenza personalizzata sulla patente più adatta alle tue esigenze.</p>
            <div className="mt-4">
              <Link 
                to="/contatti" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contattaci ora
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoriePatente;

import {
  SupportedLanguage,
  HistoricalEra,
  Artifact,
  ClassicalDance,
  IndianLanguage,
  PhilosophicalSchool,
  Festival,
  CraftTradition,
  SpiceProfile,
  RegionalCuisine
} from '../types';

export interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    es: string;
  };
}

export const COMPREHENSIVE_TRANSLATIONS: Translations = {
  // Navigation & Shell
  museumTitle: {
    en: 'The Living Canvas',
    hi: 'द लिविंग कैनवास',
    es: 'El Lienzo Vivo'
  },
  museumSubtitle: {
    en: 'Heritage of Bharat • Digital Pavilion',
    hi: 'भारत की सांस्कृतिक विरासत • डिजिटल मंडप',
    es: 'Patrimonio de la India • Pabellón Digital'
  },
  exhibitHalls: {
    en: 'Exhibition Halls',
    hi: 'प्रदर्शनी दीर्घाएं',
    es: 'Salas de Exposición'
  },
  scrollForMore: {
    en: '6 Halls • Scroll for more',
    hi: '6 दीर्घाएं • अधिक के लिए स्क्रॉल करें',
    es: '6 Salas • Desplaza para más'
  },
  homeRoom: {
    en: 'Pavilion Entrance',
    hi: 'मंडप प्रवेश द्वार',
    es: 'Entrada al Pabellón'
  },
  historyRoom: {
    en: 'Chronicles & Eras',
    hi: 'कालक्रम एवं युग',
    es: 'Crónicas y Eras'
  },
  cultureRoom: {
    en: 'Cosmology & Arts',
    hi: 'कला एवं दर्शन',
    es: 'Cosmología y Artes'
  },
  festivalsRoom: {
    en: 'Seasonal Epics',
    hi: 'ऋतु पर्व एवं उत्सव',
    es: 'Épicas Estacionales'
  },
  craftsRoom: {
    en: 'Mastery of Hands',
    hi: 'हस्तशिल्प महारत',
    es: 'Maestría de Manos'
  },
  foodRoom: {
    en: 'Sensory Alchemy',
    hi: 'पाक कला एवं रस',
    es: 'Alquimia Sensorial'
  },
  selectLanguage: {
    en: 'Language',
    hi: 'भाषा',
    es: 'Idioma'
  },
  featuredExpeditions: {
    en: 'Featured Expeditions',
    hi: 'विशेष अभियान',
    es: 'Expediciones Destacadas'
  },
  external: {
    en: 'External',
    hi: 'बाहरी',
    es: 'Externo'
  },
  newFeature: {
    en: 'New Feature',
    hi: 'नया फ़ीचर',
    es: 'Nueva Función'
  },
  aiDocentChat: {
    en: 'AI Docent Chat',
    hi: 'एआई गाइड चैट',
    es: 'Chat con Guía IA'
  },
  aiDocentSubtitle: {
    en: 'Interactive Museum Conversational Guide',
    hi: 'संवादात्मक संग्रहालय मार्गदर्शक',
    es: 'Guía Conversacional del Museo'
  },
  soundscapePlaying: {
    en: 'Atmospheric Sitar & Tanpura Soundscape',
    hi: 'सितार एवं तानपुरा ध्वनि वातावरण',
    es: 'Ambiente Sonoro de Sitar y Tanpura'
  },
  pauseSound: {
    en: 'Pause Soundscape',
    hi: 'संगीत रोकें',
    es: 'Pausar Sonido'
  },
  playSound: {
    en: 'Play Soundscape',
    hi: 'संगीत बजाएं',
    es: 'Reproducir Sonido'
  },

  // Home Page
  homeHeroBadge: {
    en: 'Digital Museum Exhibition • The Living Canvas',
    hi: 'डिजिटल संग्रहालय प्रदर्शनी • द लिविंग कैनवास',
    es: 'Exhibición del Museo Digital • El Lienzo Vivo'
  },
  homeHeroTitlePrefix: {
    en: 'The Timeless Tapestry of',
    hi: 'शाश्वत सांस्कृतिक धरोहर:',
    es: 'El Tapiz Eterno de'
  },
  homeHeroTitleHighlight: {
    en: 'Bharat',
    hi: 'भारत',
    es: 'Bharat'
  },
  homeHeroSubtitle: {
    en: 'Moving beyond cliché to explore five millennia of unbroken philosophical inquiry, sacred geometry, metallurgical genius, and living aesthetic traditions.',
    hi: 'पांच सहस्राब्दियों के निरंतर दार्शनिक चिंतन, पवित्र ज्यामिति, धातु विज्ञान और जीवंत कलात्मक परंपराओं की एक गहन यात्रा।',
    es: 'Más allá de los clichés para explorar cinco milenios de indagación filosófica ininterrumpida, geometría sagrada, genio metalúrgico y tradiciones estéticas vivas.'
  },
  homeHeroBtnWalkthrough: {
    en: 'Begin Curated Odyssey',
    hi: 'प्रदर्शनी यात्रा आरंभ करें',
    es: 'Iniciar Odisea Curada'
  },
  homeHeroBtnCrafts: {
    en: 'Explore Artisan Masterworks',
    hi: 'शिल्प कृतियां देखें',
    es: 'Explorar Obras Maestras'
  },
  homeThesisEyebrow: {
    en: 'Curatorial Thesis',
    hi: 'क्यूरेटर का दृष्टिकोण',
    es: 'Tesis Curatorial'
  },
  homeThesisHeading: {
    en: 'Not a static relic, but a pulsating continuum.',
    hi: 'कोई मृत अवशेष नहीं, बल्कि एक निरंतर बहती जीवंत धारा।',
    es: 'No es una reliquia estática, sino un continuo palpitante.'
  },
  homeThesisP1: {
    en: 'In Indian thought, culture is defined as Sanskriti — that which has been refined, purified, and elevated through conscious human contemplation. The traditions presented in this pavilion are not relics preserved in formaldehyde, but living practices practiced today with the exact same phonetic cadence, loom tension, and mudra geometry as three thousand years ago.',
    hi: 'भारतीय विचार में संस्कृति वह है जिसे सचेत चिंतन द्वारा परिष्कृत और उदात्त बनाया गया है। इस मंडप में प्रस्तुत परंपराएं कोई संग्रहालय के मृत अवशेष नहीं हैं, बल्कि आज भी उसी ध्वन्यात्मक लय, करघा तनाव और मुद्रा ज्यामिति के साथ जीवित हैं जैसी तीन हजार वर्ष पूर्व थीं।',
    es: 'En el pensamiento indio, la cultura se define como Sanskriti: aquello refinado y elevado mediante la contemplación consciente. Las tradiciones presentadas no son reliquias inmóviles, sino prácticas vivas que perduran hoy con la misma cadencia fonética, tensión de telar y geometría de mudras que hace tres milenios.'
  },
  homeThesisP2: {
    en: 'From the municipal bronze age engineering of Dholavira to the profound non-dual axioms of Advaita Vedanta, this digital exhibit invites you to experience India as a multi-dimensional sensory tapestry.',
    hi: 'धोलावीरा की कांस्य युगीन नगर योजना से लेकर अद्वैत वेदांत के गहन आत्म-तत्व तक, यह डिजिटल प्रदर्शनी आपको भारत के बहुआयामी संवेदी ताने-बाने का अनुभव करने के लिए आमंत्रित करती है।',
    es: 'Desde la ingeniería urbana de Dholavira hasta los axiomas no duales del Advaita Vedanta, esta exhibición digital te invita a experimentar la India como un tapiz sensorial multidimensional.'
  },
  homeHighlightsEyebrow: {
    en: 'Curated Masterworks',
    hi: 'विशेष चयनित धरोहरें',
    es: 'Obras Maestras Seleccionadas'
  },
  homeHighlightsHeading: {
    en: 'Artifacts of Transcendence',
    hi: 'कालजयी कलाकृतियां',
    es: 'Artefactos de Trascendencia'
  },
  homeHighlightsBtn: {
    en: 'View Complete Temporal Timeline',
    hi: 'सम्पूर्ण कालक्रम देखें',
    es: 'Ver Línea de Tiempo Completa'
  },
  homeGatewayEyebrow: {
    en: 'Exhibition Galleries',
    hi: 'प्रदर्शनी दीर्घाएं',
    es: 'Galerías de la Exhibición'
  },
  homeGatewayHeading: {
    en: 'Step into the Thematic Sanctuaries',
    hi: 'विषयगत दीर्घाओं में प्रवेश करें',
    es: 'Adéntrate en los Santuarios Temáticos'
  },
  homeGatewaySubtitle: {
    en: 'Each room is conceived as an immersive pavilion engaging sight, sound, geometry, and philosophical contemplation.',
    hi: 'प्रत्येक दीर्घा को दृश्य, ध्वनि, ज्यामिति और दार्शनिक चिंतन को झकझोरने वाले एक अनुभव के रूप में रचा गया है।',
    es: 'Cada sala está concebida como un pabellón inmersivo que estimula la vista, el sonido, la geometría y la contemplación filosófica.'
  },
  enterHall: {
    en: 'Enter Gallery',
    hi: 'दीर्घा में प्रवेश करें',
    es: 'Entrar a la Galería'
  },

  // Journeyman & FoodLens
  journeymanTitle: {
    en: 'Journeyman',
    hi: 'जर्नीमैन',
    es: 'Journeyman'
  },
  journeymanDesc: {
    en: 'Embark on generative cultural expeditions, AI-guided historical tours, and living heritage explorations.',
    hi: 'एआई-निर्देशित सांस्कृतिक अभियानों, ऐतिहासिक यात्राओं और जीवंत विरासत अन्वेषणों पर निकलें।',
    es: 'Embárcate en expediciones culturales generativas, recorridos históricos guiados por IA y exploraciones de patrimonio vivo.'
  },
  launchJourneyman: {
    en: 'Launch Journeyman',
    hi: 'जर्नीमैन खोलें',
    es: 'Abrir Journeyman'
  },
  foodlensTitle: {
    en: 'FoodLens',
    hi: 'फ़ूडलेंस',
    es: 'FoodLens'
  },
  foodlensDesc: {
    en: 'AI-powered visual culinary analysis, exploring dishes, spice blends, ingredients, and Ayurvedic nutritional geometry.',
    hi: 'एआई-संचालित दृश्य पाक विश्लेषण, व्यंजनों, मसालों, सामग्रियों और आयुर्वेदिक पोषण ज्यामिति की खोज।',
    es: 'Análisis culinario visual impulsado por IA, explorando platos, especias, ingredientes y geometría nutricional ayurvédica.'
  },
  launchFoodlens: {
    en: 'Launch FoodLens',
    hi: 'फ़ूडलेंस खोलें',
    es: 'Abrir FoodLens'
  },
  artifactLensTitle: {
    en: 'Artifact Lens',
    hi: 'आर्टिफ़ैक्ट लेंस',
    es: 'Artifact Lens'
  },
  artifactLensDesc: {
    en: 'AI-powered visual relic recognition and archaeological artifact analysis.',
    hi: 'एआई-संचालित दृश्य अवशेष पहचान और पुरातात्विक कलाकृति विश्लेषण।',
    es: 'Reconocimiento visual de reliquias y análisis de artefactos arqueológicos con IA.'
  },
  launchArtifactLens: {
    en: 'Launch Artifact Lens',
    hi: 'आर्टिफ़ैक्ट लेंस खोलें',
    es: 'Abrir Artifact Lens'
  },
  bharatDarshanTitle: {
    en: 'Bharat Darshan',
    hi: 'भारत दर्शन',
    es: 'Bharat Darshan'
  },
  bharatDarshanDesc: {
    en: 'AI-guided immersive expeditions across India’s sacred monuments, geography, and living heritage.',
    hi: 'भारत के पवित्र स्मारकों, भूगोल और सजीव सांस्कृतिक विरासत की एआई-निर्देशित यात्रा।',
    es: 'Expediciones inmersivas guiadas por IA a través de monumentos sagrados, geografía y patrimonio vivo de la India.'
  },
  launchBharatDarshan: {
    en: 'Launch Bharat Darshan',
    hi: 'भारत दर्शन खोलें',
    es: 'Abrir Bharat Darshan'
  },

  // History Page
  historyEyebrow: {
    en: 'Chronological Tapestry • 3300 BCE – Present',
    hi: 'कालानुक्रमिक ताना-बाना • 3300 ईसा पूर्व – वर्तमान',
    es: 'Tapiz Cronológico • 3300 a. C. – Presente'
  },
  historyTitle: {
    en: 'Temporal Odyssey',
    hi: 'काल की यात्रा',
    es: 'Odisea Temporal'
  },
  historySubtitle: {
    en: 'Tracing five millennia of philosophical evolution, urban civil planning, epigraphical records, and monumental architecture across the subcontinent. Hover over each epoch to feel its magnetic resonance.',
    hi: 'उपमहाद्वीप में पांच सहस्राब्दियों के दार्शनिक विकास, नगर नियोजन, अभिलेखीय साक्ष्य और भव्य वास्तुकला की खोज। प्रत्येक युग की गूंज अनुभव करें।',
    es: 'Rastreando cinco milenios de evolución filosófica, planificación urbana, registros epigráficos y arquitectura monumental en el subcontinente. Explora cada época y su resonancia.'
  },
  civilizationalOverview: {
    en: 'Civilizational Overview',
    hi: 'सभ्यता का समग्र परिचय',
    es: 'Visión Civilizatoria'
  },
  architecturalSignificance: {
    en: 'Significance & Architectural Legacy',
    hi: 'महत्व एवं स्थापत्य विरासत',
    es: 'Importancia y Legado Arquitectónico'
  },
  keyInnovationsHeading: {
    en: 'Key Societal & Scientific Innovations',
    hi: 'प्रमुख सामाजिक एवं वैज्ञानिक उपलब्धियां',
    es: 'Innovaciones Sociales y Científicas Clave'
  },
  featuredRelicsHeading: {
    en: 'Featured Archaic Relics',
    hi: 'विशेष पुरातात्विक पुरावशेष',
    es: 'Reliquias Arcaicas Destacadas'
  },
  inspectRelic: {
    en: 'Inspect Relic',
    hi: 'अवशेष का परीक्षण करें',
    es: 'Examinar Reliquia'
  },
  epochPrefix: {
    en: 'Epoch',
    hi: 'युग',
    es: 'Época'
  },
  artifactOriginLabel: {
    en: 'Origin',
    hi: 'उत्पत्ति',
    es: 'Origen'
  },
  artifactMediumLabel: {
    en: 'Medium / Material',
    hi: 'माध्यम / सामग्री',
    es: 'Técnica / Material'
  },
  curatorReflection: {
    en: 'Curator’s Reflection',
    hi: 'क्यूरेटर की समीक्षा',
    es: 'Reflexión del Curador'
  },
  archiveCollection: {
    en: 'Archive Collection',
    hi: 'संग्रह पुरालेख',
    es: 'Colección de Archivo'
  },

  // Culture Page
  intangibleHeritage: {
    en: 'Intangible Heritage & Consciousness',
    hi: 'अमूर्त विरासत एवं चेतना',
    es: 'Patrimonio Inmaterial y Conciencia'
  },
  cosmologyArtsTitle: {
    en: 'Cosmology & Arts',
    hi: 'ब्रह्मांड विज्ञान और कलाएं',
    es: 'Cosmología y Artes'
  },
  cosmologyArtsDesc: {
    en: 'An immersive inquiry into the somatic architecture of classical Indian dance, the phonetic computational precision of Indian linguistic scripts, and the non-dual metaphysics of Darshana.',
    hi: 'भारतीय शास्त्रीय नृत्य की दैहिक वास्तुकला, भारतीय लिपियों की ध्वन्यात्मक सटीकता और दर्शनशास्त्र के अद्वैत तत्वज्ञान का एक गहन अनुभव।',
    es: 'Una indagación inmersiva en la arquitectura somática de la danza clásica india, la precisión fonética de sus escrituras lingüísticas y la metafísica no dual de Darshana.'
  },
  tabDance: {
    en: 'Classical Dance & Traditions',
    hi: 'शास्त्रीय नृत्य परंपराएं',
    es: 'Danza Clásica y Tradiciones'
  },
  tabLanguage: {
    en: 'Linguistic Diversity & Scripts',
    hi: 'भाषाई विविधता और लिपियां',
    es: 'Diversidad Lingüística y Escrituras'
  },
  tabPhilosophy: {
    en: 'The Six Darshana Philosophies',
    hi: 'षड् दर्शन परंपरा',
    es: 'Las Seis Filosofías Darshana'
  },
  danceVideoHeading: {
    en: 'Curated Performance Archive',
    hi: 'विशेष प्रदर्शन वीडियो संग्रह',
    es: 'Archivo de Presentaciones'
  },
  danceMusicHeading: {
    en: 'Traditional Music & Oral Narration',
    hi: 'पारंपरिक संगीत एवं मौखिक आख्यान',
    es: 'Música Tradicional y Narración'
  },
  danceHistoryHeading: {
    en: 'Historical Evolution & Lineage',
    hi: 'ऐतिहासिक विकास एवं परंपरा',
    es: 'Evolución Histórica y Linaje'
  },
  danceSignificanceHeading: {
    en: 'Cosmic & Philosophical Significance',
    hi: 'दार्शनिक एवं आध्यात्मिक महत्व',
    es: 'Significado Cósmico y Filosófico'
  },
  playPerformance: {
    en: 'Watch Performance',
    hi: 'प्रस्तुति देखें',
    es: 'Ver Presentación'
  },
  listenNarration: {
    en: 'Listen to Narration & Raga',
    hi: 'आख्यान एवं राग सुनें',
    es: 'Escuchar Narración y Raga'
  },
  pauseNarration: {
    en: 'Pause Audio',
    hi: 'ध्वनि रोकें',
    es: 'Pausar Audio'
  },
  traditionalInstruments: {
    en: 'Accompanying Instruments',
    hi: 'संगत वाद्ययंत्र',
    es: 'Instrumentos de Acompañamiento'
  },
  ragaTalaLabel: {
    en: 'Raga & Tala Matrix',
    hi: 'राग एवं ताल रूपरेखा',
    es: 'Matriz de Raga y Tala'
  },
  originState: {
    en: 'Geographical Origin',
    hi: 'उत्पत्ति क्षेत्र',
    es: 'Origen Geográfico'
  },
  sacredMudras: {
    en: 'Asamyukta Hastas (Sacred Mudras)',
    hi: 'असंयुक्त हस्त मुद्राएं',
    es: 'Asamyukta Hastas (Mudras Sagrados)'
  },
  interactiveMudrasHint: {
    en: 'Click any mudra gesture below to inspect its metaphysical codification',
    hi: 'इसके आध्यात्मिक अर्थ को जानने के लिए किसी भी मुद्रा पर क्लिक करें',
    es: 'Haz clic en cualquier mudra a continuación para examinar su significado'
  },

  // Festivals Page
  festivalsEyebrow: {
    en: 'Cosmic Cycles & Collective Rites',
    hi: 'ब्रह्मांडीय चक्र एवं सामूहिक उत्सव',
    es: 'Ciclos Cósmicos y Ritos Colectivos'
  },
  festivalsTitle: {
    en: 'Seasonal Epics',
    hi: 'ऋतु पर्व एवं उत्सव',
    es: 'Épicas Estacionales'
  },
  festivalsSubtitle: {
    en: 'An astronomical and sensory journey through India’s seasonal clock (Shad Ritu). Each festival aligns agriculture, planetary movement, social cohesion, and the awakening of inner devotion.',
    hi: 'भारत के षड्-ऋतु चक्र की एक खगोलीय और संवेदी यात्रा। प्रत्येक पर्व कृषि, ग्रहों की गति, सामाजिक समरसता और आंतरिक भक्ति को जागृत करता है।',
    es: 'Un viaje astronómico y sensorial por el reloj estacional de la India (Shad Ritu). Cada festival alinea la agricultura, el cosmos y la cohesión social.'
  },
  selectFestivalHint: {
    en: 'Select an astronomical rite to alter the ambient illumination, harmonic frequency, and dynamic petal emissions.',
    hi: 'वातावरण का प्रकाश, ध्वनि तरंगें और फूलों की वर्षा बदलने के लिए किसी भी पर्व का चयन करें।',
    es: 'Selecciona un rito astronómico para alterar la iluminación ambiental, la frecuencia armónica y la emisión dinámica de pétalos.'
  },
  sacredLoreHeading: {
    en: 'Sacred Lore & Philosophical Meaning',
    hi: 'पौराणिक गाथा एवं दार्शनिक महत्व',
    es: 'Historia Sagrada y Significado Filosófico'
  },
  culinaryHighlightsHeading: {
    en: 'Culinary Offerings & Prasadam',
    hi: 'पारंपरिक प्रसाद एवं विशेष व्यंजन',
    es: 'Ofrendas Culinarias y Prasadam'
  },
  traditionsHeading: {
    en: 'Living Traditions & Ritual Practices',
    hi: 'जीवंत परंपराएं एवं अनुष्ठान विधियां',
    es: 'Tradiciones Vivas y Prácticas Rituales'
  },
  triggerAtmosphereBtn: {
    en: 'Trigger Seasonal Atmosphere',
    hi: 'ऋतु वातावरण सक्रिय करें',
    es: 'Activar Atmósfera Estacional'
  },
  seasonLabel: {
    en: 'Season (Ritu)',
    hi: 'ऋतु',
    es: 'Estación (Ritu)'
  },
  lunarMonthLabel: {
    en: 'Lunar Calendar',
    hi: 'चंद्र मास',
    es: 'Calendario Lunar'
  },

  // Crafts Page
  livingHandcraft: {
    en: 'Living Handcraft & Indigenous Metallurgy',
    hi: 'जीवंत हस्तशिल्प एवं स्वदेशी धातु कला',
    es: 'Artesanías Vivas y Metalurgia Indígena'
  },
  craftsTitle: {
    en: 'Mastery of Hands',
    hi: 'हाथों का कौशल एवं शिल्प',
    es: 'Maestría de Manos'
  },
  craftsSubtitle: {
    en: 'A digital artisan gallery exploring India’s heritage of handloom pit weaving, reduction kiln pottery, lost-wax metallurgy, and heirloom storytelling.',
    hi: 'हथकरघा बुनाई, पारंपरिक मिट्टी के बर्तन, प्राचीन मोम-धातु ढलाई और हस्तशिल्प गाथाओं की एक डिजिटल कला दीर्घा।',
    es: 'Una galería artesanal digital que explora el patrimonio indio de tejido en telar, cerámica tradicional, metalurgia a la cera perdida y narrativas ancestrales.'
  },
  allCrafts: {
    en: 'All Master Crafts',
    hi: 'समस्त शिल्प',
    es: 'Todas las Artesanías'
  },
  textileCrafts: {
    en: 'Textiles & Weaving',
    hi: 'वस्त्र एवं बुनाई',
    es: 'Textiles y Tejido'
  },
  potteryCrafts: {
    en: 'Pottery & Ceramics',
    hi: 'मिट्टी के बर्तन व चीनी मिट्टी',
    es: 'Cerámica y Alfarería'
  },
  metalCrafts: {
    en: 'Metalwork & Inlay',
    hi: 'धातुशिल्प एवं नक्काशी',
    es: 'Metalistería e Incrustación'
  },
  paintingCrafts: {
    en: 'Folk Paintings',
    hi: 'लोक चित्रकला',
    es: 'Pintura Tradicional'
  },
  woodCrafts: {
    en: 'Wood & Lacquer',
    hi: 'काष्ठ एवं लाख कला',
    es: 'Madera y Laca'
  },
  readArtisanStory: {
    en: 'Discover Artisan Story',
    hi: 'कारीगर की कहानी जानें',
    es: 'Descubrir Historia del Artesano'
  },
  clickToExploreStory: {
    en: 'Click to reveal oral history & artisan secrets',
    hi: 'मौखिक इतिहास और पारंपरिक तकनीक जानने के लिए क्लिक करें',
    es: 'Haz clic para revelar historia oral y secretos del artesano'
  },
  giCertified: {
    en: 'GI Protected Heritage',
    hi: 'भौगोलिक संकेतक (GI) प्रमाणित',
    es: 'Patrimonio Protegido GI'
  },
  artisanVoice: {
    en: 'Voice of the Master Artisan',
    hi: 'शिल्प गुरु की वाणी',
    es: 'Voz del Maestro Artesano'
  },
  stepByStepTechnique: {
    en: 'Step-by-Step Ancestral Technique',
    hi: 'चरण-दर-चरण पारंपरिक तकनीक',
    es: 'Técnica Ancestral Paso a Paso'
  },
  closeModal: {
    en: 'Close Story',
    hi: 'बंद करें',
    es: 'Cerrar Historia'
  },
  interactiveWheelHeading: {
    en: 'Interactive Terracotta Potter’s Wheel',
    hi: 'इंटरैक्टिव मृत्तिका कुम्हार चक्र',
    es: 'Torno de Alfarero de Terracota Interactivo'
  },
  spinWheelHint: {
    en: 'Drag or click to spin the wheel and shape the clay vessel',
    hi: 'पहिया घुमाने और बर्तन को आकार देने के लिए ड्रैग या क्लिक करें',
    es: 'Arrastra o haz clic para girar el torno y dar forma a la vasija'
  },

  // Food Page
  foodEyebrow: {
    en: 'Ayurvedic Gastronomy & The Alchemy of Fire',
    hi: 'आयुर्वेदिक पाक कला एवं अग्नि का रसायन',
    es: 'Gastronomía Ayurvédica y la Alquimia del Fuego'
  },
  foodTitle: {
    en: 'Sensory Alchemy',
    hi: 'पाक कला एवं रस',
    es: 'Alquimia Sensorial'
  },
  foodSubtitle: {
    en: 'In the Indian culinary ethos, food is Anna Brahma — sacred energy transformed through the six primal rasas (tastes) and botanical pharmacopeia. Floating botanical spice elements glide in gentle parallax behind your view.',
    hi: 'भारतीय परंपरा में भोजन "अन्नं ब्रह्म" है — वह पवित्र ऊर्जा जो छह प्रमुख रसों और औषधीय मसालों के माध्यम से शरीर और आत्मा को पुष्ट करती है।',
    es: 'En la tradición india, el alimento es Anna Brahma: energía sagrada transformada a través de los seis rasas primordiales y la farmacopea botánica.'
  },
  spicesEyebrow: {
    en: 'Botanical Pharmacopeia',
    hi: 'औषधीय मसाला वाटिका',
    es: 'Farmacopea Botánica'
  },
  spicesHeading: {
    en: 'The Sovereign Spices of India',
    hi: 'भारत के प्रमुख दिव्य मसाले',
    es: 'Las Especias Soberanas de la India'
  },
  spicesHint: {
    en: 'Click any spice to reveal its therapeutic chemistry & flavor notes',
    hi: 'किसी भी मसाले के औषधीय गुण और स्वाद जानने के लिए उस पर क्लिक करें',
    es: 'Haz clic en cualquier especia para revelar su química terapéutica y notas de sabor'
  },
  healingPropertiesLabel: {
    en: 'Healing Properties (Ayurveda)',
    hi: 'आयुर्वेदिक औषधीय गुण',
    es: 'Propiedades Curativas (Ayurveda)'
  },
  flavorNotesLabel: {
    en: 'Sensory Notes & Aroma',
    hi: 'स्वाद एवं सुगंध विशेषताएं',
    es: 'Notas Sensoriales y Aroma'
  },
  culinaryRoleLabel: {
    en: 'Traditional Culinary Application',
    hi: 'पारंपरिक पाक उपयोग',
    es: 'Aplicación Culinaria Tradicional'
  },
  botanicalFamilyLabel: {
    en: 'Botanical Family',
    hi: 'वनस्पति कुल',
    es: 'Familia Botánica'
  },
  primaryRasaLabel: {
    en: 'Primary Rasa',
    hi: 'प्रमुख रस',
    es: 'Rasa Principal'
  },
  elementalCompLabel: {
    en: 'Elemental Elements',
    hi: 'तत्वीय संरचना',
    es: 'Composición Elemental'
  },
  rasasEyebrow: {
    en: 'Ayurvedic Flavor Geometry',
    hi: 'आयुर्वेदिक रस ज्यामिति',
    es: 'Geometría de Sabor Ayurvédica'
  },
  rasasHeading: {
    en: 'The Six Rasas: Complete Nourishment',
    hi: 'षड् रस: सम्पूर्ण पोषण और संतुलन',
    es: 'Los Seis Rasas: Nutrición Completa'
  },
  cuisinesEyebrow: {
    en: 'Regional Banquets',
    hi: 'क्षेत्रीय शाही भोज परंपराएं',
    es: 'Banquetes Regionales'
  },
  cuisinesHeading: {
    en: 'Gastronomic Traditions of the Subcontinent',
    hi: 'उपमहाद्वीप की समृद्ध पाक शैलियां',
    es: 'Tradiciones Gastronómicas del Subcontinente'
  },

  // Artifact Modal
  modalProvenance: {
    en: 'Origin & Provenance',
    hi: 'उत्पत्ति एवं प्राप्ति स्थल',
    es: 'Origen y Procedencia'
  },
  modalMedium: {
    en: 'Medium & Material',
    hi: 'माध्यम एवं पदार्थ',
    es: 'Medio y Material'
  },
  modalEra: {
    en: 'Chronological Period',
    hi: 'कालखंड',
    es: 'Período Cronológico'
  },
  modalSignificance: {
    en: 'Historical & Cultural Significance',
    hi: 'ऐतिहासिक एवं सांस्कृतिक महत्व',
    es: 'Importancia Histórica y Cultural'
  },
  modalCuratorNote: {
    en: 'Curator’s Insight',
    hi: 'क्यूरेटर की विशेष टिप्पणी',
    es: 'Nota del Curador'
  },
  modalClose: {
    en: 'Close Artifact Viewer',
    hi: 'दर्शक खिड़की बंद करें',
    es: 'Cerrar Visor'
  },

  // Interactive Map
  mapTitle: {
    en: 'Interactive Cultural Atlas of Bharat',
    hi: 'भारत का संवादात्मक सांस्कृतिक मानचित्र',
    es: 'Atlas Cultural Interactivo de Bharat'
  },
  mapSubtitle: {
    en: 'Explore living craft lineages, classical sanctuaries, and sacred geodetics across all 28 states & 8 territories.',
    hi: 'सभी 28 राज्यों और केंद्र शासित प्रदेशों में जीवंत शिल्प, शास्त्रीय मंदिरों और पवित्र भू-सांस्कृतिक केंद्रों की खोज करें।',
    es: 'Explora linajes artesanales vivos, santuarios clásicos y centros geodésicos sagrados en todos los estados y territorios.'
  },
  mapSelectNode: {
    en: 'Select any node on the map to inspect its architectural legacy',
    hi: 'वास्तुशिल्प विरासत देखने के लिए मानचित्र पर किसी भी केंद्र का चयन करें',
    es: 'Selecciona cualquier punto en el mapa para examinar su legado arquitectónico'
  },
  mapArcheologicalType: {
    en: 'Site Classification',
    hi: 'स्थल वर्गीकरण',
    es: 'Clasificación del Sitio'
  },
  mapEraLabel: {
    en: 'Historical Period',
    hi: 'ऐतिहासिक काल',
    es: 'Período Histórico'
  },

  // General Actions & Badges
  learnMore: {
    en: 'Learn More',
    hi: 'और जानें',
    es: 'Saber Más'
  },
  readMore: {
    en: 'Read Full Narration',
    hi: 'विस्तृत विवरण पढ़ें',
    es: 'Leer Narración Completa'
  },
  backToTop: {
    en: 'Back to Top',
    hi: 'शीर्ष पर जाएं',
    es: 'Volver Arriba'
  },
  exhibitionNote: {
    en: 'Exhibition Note',
    hi: 'प्रदर्शनी संदेश',
    es: 'Nota de la Exhibición'
  },
  vasudhaivaQuote: {
    en: '"Vasudhaiva Kutumbakam — The World is One Family. In every woven silk thread and ringing bronze bell, the cosmos is remembered."',
    hi: '"वसुधैव कुटुम्बकम् — सम्पूर्ण विश्व एक परिवार है। बुने हुए रेशमी धागे और कांस्य की घंटी में ब्रह्मांड का स्मरण होता है।"',
    es: '"Vasudhaiva Kutumbakam — El Mundo es una Sola Familia. En cada hilo de seda tejido y campana de bronce, el cosmos es recordado."'
  },
  footerWings: {
    en: 'Pavilion Halls',
    hi: 'मंडप दीर्घाएं',
    es: 'Salas del Pabellón'
  },
  footerHeritageLabel: {
    en: 'Digital Museum of Indian Civilization',
    hi: 'भारतीय सभ्यता का डिजिटल संग्रहालय',
    es: 'Museo Digital de la Civilización India'
  }
};

// Content Localizations for Eras
export const LOCALIZED_ERAS: Record<string, Record<SupportedLanguage, Partial<HistoricalEra>>> = {
  'indus-valley': {
    en: {
      name: 'Indus-Sarasvati Civilization',
      tagline: 'Urban Precision, Lost-Wax Bronze, and Maritime Trade',
      overview: 'Centuries before the Mediterranean classical era, the urban planning of Harappa, Mohenjo-Daro, and Dholavira introduced grid street designs, sophisticated subterranean sewage networks, standardization of weights, and high-fired terracotta kiln mastery.',
      significance: 'Exemplified peaceful municipal governance without palaces or militaristic monuments, prioritizing public sanitation, dock engineering at Lothal, and spiritual reverence for water.',
      architecturalStyle: 'Baked brick citadel, hypocaust public baths, covered hydraulic drains, standardized brick ratios (1:2:4)',
      keyInnovations: [
        'Standardized binary and decimal weight systems',
        'Cire perdue (lost-wax metal casting technique)',
        'Subterranean drain masonry with sediment traps',
        'Tidal dockyard engineering with sluice gates'
      ]
    },
    hi: {
      name: 'सिंधु-सरस्वती सभ्यता',
      tagline: 'उत्कृष्ट नगर नियोजन, लॉस्ट-वैक्स कांस्य कला और समुद्री व्यापार',
      overview: 'भूमध्यसागरीय शास्त्रीय युग से शताब्दियों पूर्व, हड़प्पा, मोहनजोदड़ो और धोलावीरा ने ग्रिड आधारित सड़क योजना, भूमिगत सीवरेज प्रणाली, मानकीकृत बाट-माप और उच्च-तापीय मृत्तिका पकाने की कला स्थापित की।',
      significance: 'बिना किसी विशाल राजमहल या सैन्य स्मारकों के शांतिपूर्ण नागरिक शासन का आदर्श, जिसमें स्वच्छता, लोथल का गोदीबाड़ा और जल के प्रति पवित्र आदर सर्वोपरि था।',
      architecturalStyle: 'पक्की ईंटों के दुर्ग, विशाल स्नानागार, आच्छादित जल निकासी, मानकीकृत ईंट अनुपात (1:2:4)',
      keyInnovations: [
        'मानकीकृत द्विआधारी एवं दशमलव भार प्रणाली',
        'मोम-धातु ढलाई (लॉस्ट-वैक्स तकनीक)',
        'गाद शोधक कक्षों सहित भूमिगत जल निकासी',
        'ज्वारीय गोदीबाड़ा एवं जल कपाट अभियांत्रिकी'
      ]
    },
    es: {
      name: 'Civilización del Indo-Sarasvati',
      tagline: 'Precisión Urbana, Bronce a la Cera Perdida y Comercio Marítimo',
      overview: 'Siglos antes de la era clásica mediterránea, el urbanismo de Harappa, Mohenjo-Daro y Dholavira introdujo calles en cuadrícula, avanzados drenajes subterráneos, pesos estandarizados y alfarería de alta cocción.',
      significance: 'Ejemplificó una gobernanza civil pacífica sin palacios ni monumentos militaristas, priorizando la sanidad pública, muelles en Lothal y reverencia al agua.',
      architecturalStyle: 'Ciudadelas de ladrillo cocido, baños públicos, drenajes hidráulicos cubiertos, proporciones de ladrillo 1:2:4',
      keyInnovations: [
        'Sistemas estandarizados de pesos binarios y decimales',
        'Fundición de metal a la cera perdida (Cire perdue)',
        'Albañilería de drenajes subterráneos con trampas de sedimentos',
        'Ingeniería de astilleros mareales con compuertas'
      ]
    }
  },
  'vedic-upanishadic': {
    en: {
      name: 'Vedic & Upanishadic Epoch',
      tagline: 'Sonic Rigor, Inward Inquiry, and Axiomatic Grammar',
      overview: 'Marked by the oral preservation of Vedic hymns through complex mnemonic recitations (Patha schemes), progressing from cosmic fire rituals to the profound non-dual ontological inquiries of the early Upanishads and Panini’s generative grammar.',
      significance: 'Formulated the foundational concepts of Dharma, Karma, Samsara, and Moksha, establishing Sanskrit as an acoustic and computational language of extraordinary precision.',
      architecturalStyle: 'Sacred geometric altar structures (Shulba Sutras), natural river hermitages (Ashramas)',
      keyInnovations: [
        'Paninian formal grammar (Ashtadhyayi) anticipating modern algorithmic syntax',
        'Shulba Sutras geometric formulations (early Pythagorean triples and circle squaring)',
        'Intricate oral preservation preserving accentual pitch (Svarita) over millennia'
      ]
    },
    hi: {
      name: 'वैदिक एवं उपनिषदिक युग',
      tagline: 'ध्वन्यात्मक शुद्धता, आत्म-चिंतन और व्याकरणिक परिशुद्धता',
      overview: 'वैदिक ऋचाओं का जटिल पाठ-पद्धतियों द्वारा मौखिक संरक्षण, यज्ञीय अनुष्ठानों से लेकर प्रारंभिक उपनिषदों के गहन अद्वैत चिंतन और पाणिनि के अष्टाध्यायी व्याकरण का प्रादुर्भाव।',
      significance: 'धर्म, कर्म, संसार और मोक्ष की दार्शनिक नींव रखी, तथा संस्कृत को अत्यधिक सटीक संगणकीय एवं ध्वन्यात्मक भाषा के रूप में स्थापित किया।',
      architecturalStyle: 'पवित्र ज्यामितीय यज्ञ वेदियां (शुल्ब सूत्र), प्राकृतिक नदी तटीय आश्रम',
      keyInnovations: [
        'पाणिनीय व्याकरण (अष्टाध्यायी) जिसने आधुनिक एल्गोरिथम भाषा की पूर्वपीठिका रखी',
        'शुल्ब सूत्रों की ज्यामितीय गणनाएं (पाइथागोरस प्रमेय के प्रारंभिक रूप)',
        'उदात्त-अनुदात्त-स्वरित सहित सहस्राब्दियों तक मौखिक मंत्र संरक्षण'
      ]
    },
    es: {
      name: 'Época Védica y Upanishádica',
      tagline: 'Rigor Sónico, Indagación Interior y Gramática Axiomática',
      overview: 'Marcada por la preservación oral de himnos védicos mediante memorización nemotécnica, pasando de rituales de fuego a profundas indagaciones no duales y la gramática generativa de Panini.',
      significance: 'Formuló los conceptos cardinales de Dharma, Karma, Samsara y Moksha, estableciendo el sánscrito como un lenguaje acústico y computacional de máxima precisión.',
      architecturalStyle: 'Altares geométricos sagrados (Shulba Sutras), ermitas ribereñas naturales (Ashramas)',
      keyInnovations: [
        'Gramática formal de Panini (Ashtadhyayi), precursora de sintaxis algorítmica moderna',
        'Formulaciones geométricas de los Shulba Sutras (ternas pitagóricas tempranas)',
        'Preservación oral milenaria con acentuación tonal precisa (Svarita)'
      ]
    }
  },
  'maurya-shunga': {
    en: {
      name: 'Maurya & Shunga Dynasties',
      tagline: 'Imperial Edicts, Polished Sandstone, and Moral Statecraft',
      overview: 'Under Chandragupta and Ashoka, the subcontinent witnessed continental unification, the codification of political realism in Kautilya’s Arthashastra, and monumental rock/pillar edicts disseminating Dhamma.',
      significance: 'Spread compassionate governance across Asia, pioneering hospital infrastructure for both humans and animals.',
      architecturalStyle: 'Polished Chunar sandstone monolithic pillars, barrel-vaulted rock-cut caves (Barabar), great brick stupas (Sanchi)',
      keyInnovations: [
        'Pillar edicts inscribed in Brahmi and Kharosthi scripts',
        'The mirror-like Chunar sandstone polishing technique',
        'Universal state welfare policies and animal rights protection edicts'
      ]
    },
    hi: {
      name: 'मौर्य एवं शुंग साम्राज्य',
      tagline: 'शिलालेख, चिकना बलुआ पत्थर और नैतिक राजधर्म',
      overview: 'चंद्रगुप्त और अशोक के नेतृत्व में भारतीय उपमहाद्वीप का एकीकरण, कौटिल्य के अर्थशास्त्र में यथार्थवादी राजनीति का संहिताकरण और धम्म के प्रसार हेतु विशाल स्तूप एवं स्तंभ।',
      significance: 'करुणामयी शासन व्यवस्था का प्रसार, मनुष्यों एवं पशुओं दोनों के लिए प्रथम सार्वजनिक चिकित्सालयों की स्थापना।',
      architecturalStyle: 'चुनार के पॉलिश किए गए एकाश्म स्तंभ, बराबर की गुफाएं, सांची का महास्तूप',
      keyInnovations: [
        'ब्राह्मी एवं खरोष्ठी लिपियों में उत्कीर्ण धर्म-आदेश',
        'चुनार बलुआ पत्थर पर दर्पण जैसी अद्भुत पॉलिश तकनीक',
        'सर्वकल्याणकारी राज्य नीतियां एवं पशु अधिकार संरक्षण'
      ]
    },
    es: {
      name: 'Dinastías Maurya y Shunga',
      tagline: 'Edictos Imperiales, Arenisca Pulida y Gobernanza Moral',
      overview: 'Bajo Chandragupta y Ashoka, el subcontinente experimentó la unificación continental, la codificación política del Arthashastra y monumentales pilares con edictos de Dhamma.',
      significance: 'Difundió la gobernanza compasiva por Asia, siendo pionero en hospitales públicos para humanos y animales.',
      architecturalStyle: 'Pilares monolíticos de arenisca de Chunar pulida, cuevas de Barabar, grandes estupas de ladrillo (Sanchi)',
      keyInnovations: [
        'Edictos en columnas inscritos en escrituras Brahmi y Kharosthi',
        'Técnica de pulido de arenisca con brillo semejante al espejo',
        'Políticas de bienestar público universal y protección animal'
      ]
    }
  },
  'gupta-golden-age': {
    en: {
      name: 'Gupta Golden Age & Classical Synthesis',
      tagline: 'Mathematical Zero, Ajanta Frescoes, and Sanskrit Drama',
      overview: 'Regarded as the zenith of classical Indian aesthetics and scientific synthesis. Aryabhata computed the earth’s rotation and solar eclipses, Kalidasa composed celestial dramatic poetry, and Ajanta’s frescoes attained sublime spiritual naturalism.',
      significance: 'Invention of the mathematical decimal zero, formulating classical iconography and architectural temple treatises.',
      architecturalStyle: 'Flat-roofed stone sanctums (Deogarh Dashavatara), Ajanta chaitya halls, early Shikhara spires',
      keyInnovations: [
        'Mathematical zero as both place-holder and numerical entity (Aryabhata, Brahmagupta)',
        'Trigonometric sine functions (Jya) and heliocentric planetary models',
        'Natural mineral fresco binders retaining luminosity for fifteen centuries'
      ]
    },
    hi: {
      name: 'गुप्त स्वर्ण युग एवं शास्त्रीय समन्वय',
      tagline: 'गणितीय शून्य, अजंता के भित्तिचित्र और कालिदास का काव्य',
      overview: 'भारतीय शास्त्रीय सौंदर्यशास्त्र और विज्ञान का स्वर्णिम काल। आर्यभट ने पृथ्वी के घूर्णन और ग्रहणों की गणना की, कालिदास ने मेघदूत की रचना की और अजंता के भित्तिचित्रों ने अमर सौंदर्य प्राप्त किया।',
      significance: 'दशमलव शून्य का आविष्कार, शास्त्रीय मूर्तिशिल्प और मंदिर वास्तुकला के मानकीकृत सिद्धांतों की रचना।',
      architecturalStyle: 'देवगढ़ का दशावतार मंदिर, अजंता के चैत्य गृह, प्रारंभिक नागर शिखर',
      keyInnovations: [
        'शून्य का स्थान-मान एवं स्वतंत्र अंक के रूप में आविष्कार (आर्यभट, ब्रह्मगुप्त)',
        'त्रिकोणमितीय ज्या (Sine) फलन और सौरमंडल के खगोलीय सिद्धांत',
        'पंद्रह शताब्दियों तक दीप्तिमान रहने वाले प्राकृतिक खनिज रंग लेप'
      ]
    },
    es: {
      name: 'Edad de Oro Gupta y Síntesis Clásica',
      tagline: 'El Cero Matemático, Frescos de Ajanta y Teatro Sánscrito',
      overview: 'El cenit de la estética y ciencia clásica india. Aryabhata calculó la rotación terrestre y eclipses, Kalidasa compuso poesía celestial y los frescos de Ajanta alcanzaron un naturalismo sublime.',
      significance: 'Invención del cero matemático posicional, iconografía clásica y cánones arquitectónicos de templos.',
      architecturalStyle: 'Santuarios de piedra con techos planos (Deogarh), salas chaitya de Ajanta, torres Shikhara',
      keyInnovations: [
        'El cero matemático como número y valor posicional (Aryabhata, Brahmagupta)',
        'Funciones trigonométricas de seno (Jya) y modelos astronómicos',
        'Aglutinantes minerales naturales que conservan el color por 15 siglos'
      ]
    }
  },
  'medieval-chola-vijayanagara': {
    en: {
      name: 'Chola Maritime & Vijayanagara Era',
      tagline: 'Granite Vimanas, Lost-Wax Bronzes, and Maritime Armada',
      overview: 'The Chola emperors established naval mastery across the Bay of Bengal, erecting granite temples engineered to withstand seismic shocks, while casting the finest sacred bronzes. Vijayanagara later created a monumental citadel celebrating performing arts.',
      significance: 'Spread Indian temple architecture, epigraphy, and Sanskrit-Tamil bilingual culture across Southeast Asia (Angkor, Prambanan).',
      architecturalStyle: 'Pyramidal granite Vimanas (Thanjavur Brihadisvara), multi-pillared musical mandapas (Hampi), gopuram gateway towers',
      keyInnovations: [
        'Chola cire perdue bronze metallurgy capturing dynamic dance kineticism (Nataraja)',
        'Hollow granite interlocking stone joinery without mortar',
        'Autonomous village assembly governance recorded in Uttiramerur inscriptions'
      ]
    },
    hi: {
      name: 'चोल समुद्री साम्राज्य एवं विजयनगर युग',
      tagline: 'ग्रेनाइट विमान, कांस्य नटराज और विशाल नौसैनिक बेड़ा',
      overview: 'चोल राजाओं ने बंगाल की खाड़ी में नौसैनिक प्रभुत्व स्थापित किया, भूकंपरोधी विशाल ग्रेनाइट मंदिरों का निर्माण किया और उत्कृष्ट कांस्य प्रतिमाएं ढालीं। विजयनगर ने कला और संस्कृति का भव्य केंद्र रचा।',
      significance: 'दक्षिण-पूर्व एशिया (अंगकोर वाट, प्रम्बनन) तक भारतीय वास्तुकला, शिलालेखीय परंपरा और संस्कृति का विस्तार।',
      architecturalStyle: 'तंजावुर का बृहदीश्वर मंदिर, हम्पी के संगीतमय स्तंभों वाले मंडप, भव्य गोपुरम',
      keyInnovations: [
        'चोल कांस्य ढलाई कला जिसमें नटराज की ब्रह्मांडीय नृत्य गतिशीलता साकार हुई',
        'बिना गारे के परस्पर जुड़े ग्रेनाइट पत्थरों की इंटरलॉकिंग निर्माण तकनीक',
        'उत्तरमेरूर शिलालेखों में वर्णित लोकतांत्रिक ग्राम सभा प्रशासन'
      ]
    },
    es: {
      name: 'Imperio Marítimo Chola y Era Vijayanagara',
      tagline: 'Vimanas de Granito, Bronces Sagrados y Armada Marítima',
      overview: 'Los emperadores Chola dominaron las rutas navales de Asia, construyendo templos de granito sísmicamente estables y fundiendo bronces extraordinarios. Vijayanagara creó una monumental ciudadela de artes.',
      significance: 'Difundió la arquitectura, epigrafía y cultura bilingüe tamil-sánscrita por el Sudeste Asiático.',
      architecturalStyle: 'Vimanas piramidales de granito (Brihadisvara), mandapas con pilares musicales (Hampi), gopurams',
      keyInnovations: [
        'Metalurgia del bronce a la cera perdida capturando el dinamismo cósmico (Nataraja)',
        'Unión de bloques de granito encajados sin necesidad de mortero',
        'Gobernanza asamblearia comunitaria registrada en inscripciones de Uttiramerur'
      ]
    }
  },
  'mughal-early-modern': {
    en: {
      name: 'Mughal & Early Modern Synthesis',
      tagline: 'Pietra Dura Inlay, Indo-Persian Miniatures, and Astronomical Observatories',
      overview: 'A dazzling intercultural synthesis merging Persian geometric symmetry, Central Asian horticulture, and indigenous Hindu stonecraft. Fostered monumental white marble monuments, Hindustani classical music ragas, and Sawai Jai Singh’s stone observatories.',
      significance: 'Demonstrated synthesis across architectural symmetry, miniature painting schools (Kishangarh, Kangra, Mughal), and global textile dominance.',
      architecturalStyle: 'White Makrana marble with semi-precious stone inlay (Pietra Dura), red sandstone arcades, Charbagh quadripartite gardens',
      keyInnovations: [
        'Astronomical precision of naked-eye stone instruments (Jantar Mantar)',
        'Double-dome engineering creating thermal insulation and acoustic amplification',
        'High-density warp and weft silk-cotton muslin and calico printing exports'
      ]
    },
    hi: {
      name: 'मुग़ल एवं उत्तर-मध्यकालीन समन्वय',
      tagline: 'पिएत्रा ड्यूरा नक्काशी, राग संगीत और खगोलीय जंतर-मंतर',
      overview: 'फारसी ज्यामिति, मध्य एशियाई उद्यान शैली और भारतीय पत्थर शिल्प का अद्भुत संगम। श्वेत संगमरमर के भव्य स्मारक, हिंदुस्तानी शास्त्रीय संगीत और सवाई जयसिंह की विशाल खगोलीय वेधशालाएं।',
      significance: 'वास्तुकला, लघु चित्रकला शैलियों (कांगड़ा, किशनगढ़, मुग़ल) और विश्व वस्त्र व्यापार में अद्वितीय योगदान।',
      architecturalStyle: 'मकराना श्वेत संगमरमर, पिएत्रा ड्यूरा रत्न जड़ाई, लाल बलुआ पत्थर के मेहराब, चारबाग उद्यान',
      keyInnovations: [
        'जंतर-मंतर के विशाल पत्थर यंत्रों द्वारा खगोलीय गणनाओं की अत्यधिक सटीकता',
        'दोहरा गुंबद निर्माण जो आंतरिक तापमान नियंत्रण और ध्वनि विस्तार करता है',
        'ढाका की मलमल और भारतीय छींट वस्त्रों का वैश्विक व्यापार'
      ]
    },
    es: {
      name: 'Síntesis Mogol y Época Moderna Temprana',
      tagline: 'Incrustación Pietra Dura, Miniaturas Indo-Persas y Observatorios',
      overview: 'Fascinante fusión entre la simetría geométrica persa y la maestría en piedra indígena. Creó monumentos de mármol blanco, ragas de música clásica indostaní y los observatorios de Jai Singh.',
      significance: 'Demostró síntesis artística en arquitectura, escuelas de pintura en miniatura (Kangra, Kishangarh) y dominio textil.',
      architecturalStyle: 'Mármol de Makrana con piedras semipreciosas (Pietra Dura), arquerías de arenisca roja, jardines Charbagh',
      keyInnovations: [
        'Precisión astronómica de instrumentos pétreos a simple vista (Jantar Mantar)',
        'Ingeniería de doble cúpula para aislamiento térmico y resonancia acústica',
        'Telas de muselina y chintz de alta densidad para exportación mundial'
      ]
    }
  }
};

// Localized Artifacts
export const LOCALIZED_ARTIFACTS: Record<string, Record<SupportedLanguage, Partial<Artifact>>> = {
  'dancing-girl': {
    en: {
      title: 'The Dancing Girl of Mohenjo-Daro',
      subtitle: 'Bronze statuette embodying poise and confident autonomy',
      origin: 'HR Area, Mohenjo-Daro (Sindh)',
      medium: 'Bronze (Cast via Cire Perdue method)',
      description: 'Standing 10.5 cm high, this youthful figure leans on her right hip with her left arm adorned almost entirely in bangles, exuding a timeless naturalism rarely seen in archaic metallurgy.',
      curatorNote: 'Archaeologist Mortimer Wheeler observed: "There is she, about fifteen years old I should think, not more, but she stands there with her hands on her hips and bends with the rhythm of the music... an absolute masterpiece."'
    },
    hi: {
      title: 'मोहनजोदड़ो की नर्तकी',
      subtitle: 'आत्मविश्वास और संतुलन को दर्शाती कांस्य प्रतिमा',
      origin: 'एचआर क्षेत्र, मोहनजोदड़ो (सिंध)',
      medium: 'कांस्य (लॉस्ट-वैक्स मोम ढलाई विधि द्वारा निर्मित)',
      description: '10.5 सेमी ऊंची यह युवती अपने दाहिने कूल्हे पर हाथ रखे खड़ी है और उसका बायां हाथ चूड़ियों से सजा है, जो प्राचीन धातु विज्ञान में दुर्लभ प्राकृतिक सौंदर्य को दर्शाता है।',
      curatorNote: 'पुरातत्वविद् मोर्टिमर व्हीलर ने कहा: "वह लगभग पंद्रह वर्ष की लगती है, हाथों को कमर पर रखे संगीत की लय में थिरकती हुई... यह प्राचीन कला की एक सर्वोत्कृष्ट कृति है।"'
    },
    es: {
      title: 'La Joven Bailarina de Mohenjo-Daro',
      subtitle: 'Estatuilla de bronce que encarna aplomo y autonomía',
      origin: 'Área HR, Mohenjo-Daro (Sindh)',
      medium: 'Bronce (Fundición a la cera perdida)',
      description: 'Con 10.5 cm de altura, esta joven figura reposa sobre su cadera derecha con el brazo izquierdo cubierto de brazaletes, exudando un naturalismo intemporal.',
      curatorNote: 'El arqueólogo Mortimer Wheeler observó: "Allí está ella, de unos quince años, con las manos en las caderas y meciéndose al compás de la música... una obra maestra absoluta."'
    }
  },
  'pashupati-seal': {
    en: {
      title: 'The Pashupati Steatite Seal',
      subtitle: 'Proto-Shiva in Yogic Mulabandhasana',
      origin: 'Mohenjo-Daro',
      medium: 'Carved steatite fired to white glaze',
      description: 'Depicts a horned, tricephalic figure seated in a meditative posture surrounded by an elephant, tiger, rhinoceros, water buffalo, and two antelopes beneath the throne.',
      curatorNote: 'Considered one of the earliest archaeological testaments to internal meditative yogic discipline and ecological communion in human history.'
    },
    hi: {
      title: 'पशुपति सेलखड़ी मुहर',
      subtitle: 'योगिक मूलबंधासन में विराजमान आदि-शिव',
      origin: 'मोहनजोदड़ो',
      medium: 'सफेद चमक हेतु पकाई गई नक्काशीदार सेलखड़ी (स्टीएटाइट)',
      description: 'सिंहासन पर ध्यानावस्था में बैठे एक श्रृंगयुक्त, त्रिमुखी पुरुष को दर्शाता है जिसके चारों ओर हाथी, बाघ, गैंडा, जल-भैंसा और नीचे दो हिरण उपस्थित हैं।',
      curatorNote: 'मानव इतिहास में योगिक ध्यान साधना और प्रकृति-जीव सहअस्तित्व के प्राचीनतम पुरातात्विक साक्ष्यों में से एक।'
    },
    es: {
      title: 'Sello de Esteatita de Pashupati',
      subtitle: 'Proto-Shiva en postura yóguica Mulabandhasana',
      origin: 'Mohenjo-Daro',
      medium: 'Esteatita tallada cocida a esmalte blanco',
      description: 'Muestra una figura meditativa con cuernos rodeada por un elefante, tigre, rinoceronte, búfalo de agua y dos antílopes.',
      curatorNote: 'Considerado uno de los testimonios arqueológicos más antiguos de disciplina yóguica meditativa y comunión ecológica en la historia.'
    }
  },
  'rigveda-manuscript': {
    en: {
      title: 'Rigveda Samhita Palm-Leaf Folio',
      subtitle: 'The primordial hymns of human consciousness and natural order (Rita)',
      origin: 'Sapta Sindhu / Gangetic Plains',
      medium: 'Birch bark ink inscription in Sharada script',
      description: 'Contains the Nasadiya Sukta (Hymn of Creation), questioning: "Who really knows? Who will here proclaim it? Whence was it produced? Whence is this creation?"',
      curatorNote: 'Included in UNESCO Memory of the World Register for its unmatched linguistic fidelity and philosophical introspection.'
    },
    hi: {
      title: 'ऋग्वेद संहिता ताड़पत्र पांडुलिपि',
      subtitle: 'मानव चेतना एवं प्राकृतिक व्यवस्था (ऋत) के आदिम सूक्त',
      origin: 'सप्त सिंधु / गंगा के मैदान',
      medium: 'शारदा लिपि में भोजपत्र पर स्याही से अंकित',
      description: 'इसमें प्रसिद्ध नासदीय सूक्त (सृष्टि सूक्त) समाहित है: "सृष्टि से पहले न सत् था न असत्... वास्तव में कौन जानता है कि यह सृष्टि कहां से उत्पन्न हुई?"',
      curatorNote: 'अपनी अद्वितीय भाषाई शुद्धता और दार्शनिक चिंतन के लिए यूनेस्को की मेमोरी ऑफ द वर्ल्ड धरोहर सूची में सम्मिलित।'
    },
    es: {
      title: 'Folio de Hoja de Palma del Rigveda Samhita',
      subtitle: 'Los himnos primordiales de la conciencia humana y el orden cósmico (Rita)',
      origin: 'Sapta Sindhu / Llanuras del Ganges',
      medium: 'Inscripción en corteza de abedul en escritura Sharada',
      description: 'Contiene el Nasadiya Sukta (Himno de la Creación), cuestionando: "¿Quién sabe realmente? ¿De dónde provino esta creación?"',
      curatorNote: 'Incluido en el Registro Memoria del Mundo de la UNESCO por su insuperable fidelidad lingüística e introspección filosófica.'
    }
  },
  'ashoka-lion-capital': {
    en: {
      title: 'Ashoka Lion Capital of Sarnath',
      subtitle: 'The Wheel of Universal Law (Dharmachakra) and Four Sovereign Lions',
      origin: 'Sarnath Deer Park, Varanasi',
      medium: 'Polished Chunar sandstone',
      description: 'Four Asiatic lions roaring toward the cardinal directions atop a frieze featuring an elephant, horse, bull, and lion separated by 24-spoke spoked wheels.',
      curatorNote: 'Adopted in 1950 as the National Emblem of the Republic of India; the wheel (Ashoka Chakra) graces the center of the national tricolor.'
    },
    hi: {
      title: 'सारनाथ का अशोक सिंह शीर्ष',
      subtitle: 'धर्मचक्र एवं चारों दिशाओं में गर्जना करते चार सिंह',
      origin: 'सारनाथ मृगदाव, वाराणसी',
      medium: 'दर्पण जैसी पॉलिश से युक्त चुनार का बलुआ पत्थर',
      description: 'चारों दिशाओं की ओर मुख किए चार एशियाई सिंह, जिनके आधार पर 24 तीलियों वाले धर्मचक्रों से पृथक हाथी, अश्व, वृषभ और सिंह उकेरे गए हैं।',
      curatorNote: '1950 में भारत गणराज्य के राष्ट्रीय प्रतीक के रूप में अपनाया गया; इसका 24 तीलियों वाला चक्र राष्ट्रीय ध्वज के केंद्र को सुशोभित करता है।'
    },
    es: {
      title: 'Capitel de Leones de Ashoka en Sarnath',
      subtitle: 'La Rueda de la Ley Cósmica (Dharmachakra) y Cuatro Leones Soberanos',
      origin: 'Parque de los Ciervos de Sarnath, Benarés',
      medium: 'Arenisca pulida de Chunar',
      description: 'Cuatro leones asiáticos orientados a los puntos cardinales sobre un friso con un elefante, caballo, toro y león separados por ruedas de 24 radios.',
      curatorNote: 'Adoptado en 1950 como el Emblema Nacional de la República de la India; su rueda decora el centro de la bandera tricolor.'
    }
  },
  'ajanta-padmapani': {
    en: {
      title: 'Bodhisattva Padmapani Fresco',
      subtitle: 'Sublime Compassion in Cave 1 at Ajanta',
      origin: 'Cave 1, Ajanta (Maharashtra)',
      medium: 'Mineral pigments on clay-straw-cow dung plaster matrix',
      description: 'Holding a blue lotus with lowered contemplative eyelids, leaning gracefully in Tribhanga posture with jewel-encrusted tiara and pearl strands.',
      curatorNote: 'Represents the pinnacle of ancient Asian mural art, demonstrating sophisticated chiaroscuro and atmospheric shading.'
    },
    hi: {
      title: 'बोधिसत्व पद्मपाणि भित्तिचित्र',
      subtitle: 'अजंता की गुफा 1 में करुणा का अलौकिक स्वरूप',
      origin: 'गुफा 1, अजंता (महाराष्ट्र)',
      medium: 'मिट्टी-भूसे के प्लास्टर पर प्राकृतिक खनिज रंग',
      description: 'हाथ में नीलकमल धारण किए, ध्यानमग्न झुकी हुई पलकें, त्रिभंग मुद्रा में सुशोभित, मोतियों और रत्नों के मुकुट से अलंकृत अद्वितीय छवि।',
      curatorNote: 'प्राचीन एशियाई भित्तिचित्र कला का चरमोत्कर्ष, जिसमें प्रकाश और छाया का अद्भुत संयोजन किया गया है।'
    },
    es: {
      title: 'Fresco del Bodhisattva Padmapani',
      subtitle: 'Compasión Sublime en la Cueva 1 de Ajanta',
      origin: 'Cueva 1, Ajanta (Maharashtra)',
      medium: 'Pigmentos minerales sobre base de arcilla y paja',
      description: 'Sosteniendo un loto azul con párpados contemplativos, inclinándose grácilmente en postura Tribhanga con corona de joyas.',
      curatorNote: 'Representa la cima del arte mural asiático antiguo, demostrando un sofisticado claroscuro y sombreado atmosférico.'
    }
  },
  'chola-nataraja': {
    en: {
      title: 'Chola Bronze Nataraja',
      subtitle: 'The Cosmic Dance of Creation and Dissolution (Ananda Tandava)',
      origin: 'Thanjavur, Tamil Nadu',
      medium: 'Lost-wax cast solid copper-bronze alloy (Panchaloha)',
      description: 'Shiva dances within a flaming prabhamandala, balancing fire and the damaru drum, with one foot crushing Apasmara (cosmic ignorance).',
      curatorNote: 'Celebrated worldwide as one of the greatest visual syntheses of art, religion, and quantum dynamics.'
    },
    hi: {
      title: 'चोल कांस्य नटराज',
      subtitle: 'सृष्टि एवं संहार का ब्रह्मांडीय आनंद तांडव',
      origin: 'तंजावुर, तमिलनाडु',
      medium: 'पंचधातु (लॉस्ट-वैक्स ढलाई द्वारा निर्मित तांबा-कांस्य मिश्रधातु)',
      description: 'अग्नि चक्र के भीतर नृत्य करते भगवान शिव, एक हाथ में डमरू और दूसरे में अग्नि धारण किए, अज्ञान के प्रतीक अपस्मार को अपने चरणों से दबाते हुए।',
      curatorNote: 'विश्वभर में कला, दर्शन और आधुनिक भौतिकी के ब्रह्मांडीय नृत्य के अद्भुत समन्वय के रूप में सम्मानित।'
    },
    es: {
      title: 'Nataraja de Bronce Chola',
      subtitle: 'La Danza Cósmica de Creación y Disolución (Ananda Tandava)',
      origin: 'Thanjavur, Tamil Nadu',
      medium: 'Aleación de bronce a la cera perdida (Panchaloha)',
      description: 'Shiva danza dentro de un halo de llamas, sosteniendo el fuego y el tambor damaru, aplastando con su pie la ignorancia cósmica (Apasmara).',
      curatorNote: 'Celebrada internacionalmente como una de las mayores síntesis visuales de arte, religión y física cuántica.'
    }
  }
};

// Localized Festivals
export const LOCALIZED_FESTIVALS: Record<string, Record<SupportedLanguage, Partial<Festival>>> = {
  'diwali': {
    en: {
      name: 'Deepavali',
      season: 'Sharad (Autumn)',
      monthRange: 'Kartika (Oct–Nov)',
      symbolism: 'Victory of Inner Light over Spiritual Ignorance (Tamas)',
      lore: 'Marks the return of Sri Rama to Ayodhya after fourteen years of exile, the emergence of Goddess Lakshmi during the churning of the cosmic ocean (Samudra Manthan), and Lord Krishna’s vanquishing of Narakasura.',
      traditions: [
        'Illuminating clay diyas filled with mustard/sesame oil',
        'Drawing geometric rangoli rice-powder mandalas at entrances',
        'Lakshmi-Ganesha Puja welcoming auspicious fortune',
        'Exchange of handmade saffron and pistachio confections'
      ],
      culinaryHighlights: ['Kaju Katli', 'Besan Ladoo', 'Gujiya', 'Chakli', 'Mawa Peda']
    },
    hi: {
      name: 'दीपावली',
      season: 'शरद ऋतु',
      monthRange: 'कार्तिक मास (अक्टूबर-नवंबर)',
      symbolism: 'अज्ञान के अंधकार पर ज्ञान और अंतरात्मा के प्रकाश की विजय',
      lore: 'चौदह वर्षों के वनवास के उपरांत प्रभु श्रीराम की अयोध्या वापसी, समुद्र मंथन से माता लक्ष्मी का प्राकट्य, और भगवान श्रीकृष्ण द्वारा नरकासुर के वध का पावन स्मरण।',
      traditions: [
        'तिल व सरसों के तेल से भरे मिट्टी के दीयों का प्रज्वलन',
        'प्रवेश द्वारों पर चावल के आटे व रंगों से बनी सुंदर रंगोली',
        'सुख-समृद्धि हेतु श्री गणेश-लक्ष्मी का विधि-विधान से पूजन',
        'पारंपरिक मिठाइयों एवं उपहारों का पारस्परिक आदान-प्रदान'
      ],
      culinaryHighlights: ['काजू कतली', 'बेसन के लड्डू', 'गुझिया', 'चकली', 'मावा पेड़ा']
    },
    es: {
      name: 'Deepavali',
      season: 'Sharad (Otoño)',
      monthRange: 'Kartika (Oct–Nov)',
      symbolism: 'Victoria de la Luz Interior sobre la Ignorancia Espiritual',
      lore: 'Conmemora el regreso de Sri Rama a Ayodhya tras 14 años de exilio, la emergencia de la diosa Lakshmi del océano cósmico y la victoria de Krishna sobre Narakasura.',
      traditions: [
        'Encendido de lámparas diyas de arcilla con aceite de sésamo',
        'Diseño de mandalas rangoli con polvo de arroz en entradas',
        'Puja a Lakshmi y Ganesha para la prosperidad',
        'Intercambio de dulces tradicionales de azafrán y pistacho'
      ],
      culinaryHighlights: ['Kaju Katli', 'Besan Ladoo', 'Gujiya', 'Chakli', 'Mawa Peda']
    }
  },
  'holi': {
    en: {
      name: 'Holi',
      season: 'Vasanta (Spring)',
      monthRange: 'Phalguna (Feb–Mar)',
      symbolism: 'Rebirth of Nature, Dissolution of Social Hierarchy, and Radiant Joy',
      lore: 'Commemorates the steadfast devotion of child Prahlad triumphing over the fiery deceit of Holika, alongside the playful divine lila of Radha and Krishna in the groves of Vrindavan.',
      traditions: [
        'Lighting the sacred Holika bonfire on the eve of Phalguna Purnima',
        'Anointing friends and elders with herbal gulal powders (turmeric, palash, neem)',
        'Folk percussion rhythms of the Dholak and singing of traditional Dhamar songs',
        'Serving cool, cardamom and rose-infused Thandai'
      ],
      culinaryHighlights: ['Chilled Thandai', 'Mawa Gujiya', 'Dahi Vada', 'Malpua with Rabdi', 'Kachori']
    },
    hi: {
      name: 'होली',
      season: 'वसंत ऋतु',
      monthRange: 'फाल्गुन मास (फरवरी-मार्च)',
      symbolism: 'प्रकृति का नवजीवन, सामाजिक बंधनों का विलय और उल्लासमय आनंद',
      lore: 'अग्नि पर भक्त प्रह्लाद की भक्ति की विजय और होलिका दहन का स्मरण, साथ ही ब्रज के उपवनों में राधा-कृष्ण की दिव्य रासलीला का उत्सव।',
      traditions: [
        'फाल्गुन पूर्णिमा की संध्या को पवित्र होलिका दहन',
        'हल्दी, पलाश व चंदन के प्राकृतिक गुलाल से रंग खेलना',
        'ढोलक की थाप पर पारंपरिक फाग और होली गीतों का गायन',
        'गुलाब, केसर और मेवों से सजी शीतल ठंडाई का सेवन'
      ],
      culinaryHighlights: ['केसरिया ठंडाई', 'मावा गुझिया', 'दही वड़ा', 'रबड़ी मालपुआ', 'खस्ता कचौड़ी']
    },
    es: {
      name: 'Holi',
      season: 'Vasanta (Primavera)',
      monthRange: 'Phalguna (Feb–Mar)',
      symbolism: 'Renacimiento de la Naturaleza y Disolución de Jerarquías Sociales',
      lore: 'Conmemora la victoria de la devoción de Prahlad sobre Holika y los juegos divinos de Radha y Krishna en Vrindavan.',
      traditions: [
        'Encendido de la hoguera sagrada de Holika en vísperas de luna llena',
        'Lanzamiento de polvos gulal naturales de cúrcuma y flores de palash',
        'Cantos folclóricos y ritmos de percusión con tambor dholak',
        'Bebida refrescante Thandai con azafrán, frutos secos y cardamomo'
      ],
      culinaryHighlights: ['Thandai Fría', 'Mawa Gujiya', 'Dahi Vada', 'Malpua con Rabri', 'Kachori']
    }
  },
  'onam': {
    en: {
      name: 'Thiruvonam',
      season: 'Varsha to Sharad (Monsoon Autumn)',
      monthRange: 'Chingam (Aug–Sep)',
      symbolism: 'Egalitarian Prosperity, Nature’s Harvest, and Righteous Kingship',
      lore: 'Welcomes the annual spirit visitation of the noble Daitya King Mahabali, whose reign was celebrated as an era free of deceit, hunger, and disparity.',
      traditions: [
        'Laying circular geometric floral carpets (Pookkalam)',
        'Thrilling snake-boat regattas (Vallam Kali) on the Pamba river',
        'Serving the grand 26-dish vegetarian feast (Onasadya) on fresh banana leaves',
        'Traditional graceful Kaikottikali clap-dances by women in kasavu sarees'
      ],
      culinaryHighlights: ['Palada Payasam', 'Avial', 'Olan', 'Erissery', 'Sambar', 'Inji Puli']
    },
    hi: {
      name: 'ओणम',
      season: 'वर्षा-शरद संधिकाल',
      monthRange: 'चिंगम मास (अगस्त-सितंबर)',
      symbolism: 'समानता, प्राकृतिक प्रचुरता और आदर्श लोक-कल्याणकारी शासन',
      lore: 'महादानी एवं न्यायप्रिय असुर सम्राट महाबलि की अपनी प्रजा से वार्षिक भेंट का पावन उत्सव, जिनके शासन में कोई भूखा या दुखी नहीं था।',
      traditions: [
        'घर के आंगन में ताजे पुष्पों की ज्यामितीय रंगोली (पूकलम)',
        'पंपा नदी में रोमांचक सर्प-नौका दौड़ (वल्लम कली)',
        'केले के पत्ते पर परोसा जाने वाला 26 व्यंजनों का भव्य ओणसद्या भोज',
        'कसावु साड़ियों में महिलाओं का पारंपरिक कैकोट्टिकली लोकनृत्य'
      ],
      culinaryHighlights: ['पालदा पायसम', 'अवियल', 'ओलन', 'एरिसेरी', 'सांभर', 'इंजी पुली']
    },
    es: {
      name: 'Thiruvonam (Onam)',
      season: 'Varsha a Sharad (Monzón y Otoño)',
      monthRange: 'Chingam (Ago–Sep)',
      symbolism: 'Prosperidad Igualitaria, Cosecha y Reinado Justo',
      lore: 'Da la bienvenida al noble rey Mahabali, cuyo reinado fue una época dorada de igualdad y abundancia sin hambre ni engaño.',
      traditions: [
        'Alfombras florales geométricas concéntricas (Pookkalam)',
        'Regatas de barcas serpiente (Vallam Kali) en ríos de Kerala',
        'El banquete ceremonial de 26 platos vegetarianos (Onasadya) en hoja de plátano',
        'Danzas Kaikottikali con saris tradicionales blancos y dorados'
      ],
      culinaryHighlights: ['Palada Payasam', 'Avial', 'Olan', 'Erissery', 'Sambar', 'Inji Puli']
    }
  },
  'durga': {
    en: {
      name: 'Durga Puja',
      season: 'Sharad (Autumn)',
      monthRange: 'Ashwin (Sep–Oct)',
      symbolism: 'Cosmic Feminine Energy (Shakti) Vanquishing Tyranny (Mahishasura)',
      lore: 'Celebrates Goddess Durga riding a lion, endowed with the combined celestial armaments of all the gods, slaying the buffalo demon Mahishasura on the tenth day (Vijaya Dashami).',
      traditions: [
        'Consecration of intricate clay idols made with sacred Ganga silt',
        'Ecstatic Dhunuchi Naach dances to the thunderous resonance of Dhaak drums',
        'Pandahopping across architectural bamboo and fabric temporary sanctuaries',
        'Solemn Sindoor Khela blessing ceremony by married women before immersion'
      ],
      culinaryHighlights: ['Khichuri Bhog', 'Labra Mixed Stew', 'Luchi with Alur Dom', 'Chhanar Payesh', 'Mishti Doi']
    },
    hi: {
      name: 'दुर्गा पूजा',
      season: 'शरद ऋतु',
      monthRange: 'आश्विन मास (सितंबर-अक्टूबर)',
      symbolism: 'आदिशक्ति द्वारा दुराचार और अहंकार (महिषासुर) का संहार',
      lore: 'समस्त देवों के तेज से प्रकट हुईं मां दुर्गा द्वारा महिषासुर का मर्दन और विजयादशमी के दिन धर्म एवं सत्य की विजय का जयघोष।',
      traditions: [
        'गंगा की पावन मिट्टी से निर्मित भव्य मृण्मयी प्रतिमाओं की प्राण-प्रतिष्ठा',
        'ढाक की गूंजती थाप पर धुनाची नृत्य का भावपूर्ण प्रदर्शन',
        'विभिन्न कलात्मक विषयों पर आधारित विशाल पूजा पंडालों के दर्शन',
        'विसर्जन पूर्व महिलाओं द्वारा सिंदूर खेला की मंगल परंपरा'
      ],
      culinaryHighlights: ['भोग की खिचड़ी', 'लाबरा तरकारी', 'लूची व आलू दम', 'छेना पायेश', 'मिष्टी दोई']
    },
    es: {
      name: 'Durga Puja',
      season: 'Sharad (Otoño)',
      monthRange: 'Ashwin (Sep–Oct)',
      symbolism: 'La Energía Femenina Cósmica (Shakti) Venciendo la Tiranía',
      lore: 'Celebra a la Diosa Durga montada en su león derrotando al demonio búfalo Mahishasura en Vijaya Dashami.',
      traditions: [
        'Consagración de estatuas de arcilla del Ganges en elaborados pabellones',
        'Danzas extáticas Dhunuchi Naach al ritmo de tambores Dhaak',
        'Recorrido por templos efímeros de bambú y telares artísticos',
        'Ceremonia de bendición Sindoor Khela antes de la inmersión sagrada'
      ],
      culinaryHighlights: ['Khichuri Bhog', 'Guiso Labra', 'Luchi con Alur Dom', 'Chhanar Payesh', 'Mishti Doi']
    }
  },
  'baisakhi': {
    en: {
      name: 'Vaisakhi',
      season: 'Vasanta (Spring Harvest)',
      monthRange: 'Vaisakha (Mid-April)',
      symbolism: 'Golden Rabi Wheat Harvest and the Birth of the Khalsa Order (1699)',
      lore: 'Marks both the joyous agricultural gratitude for the winter wheat harvest and the historic assembly at Anandpur Sahib where Guru Gobind Singh created the Khalsa Panth.',
      traditions: [
        'Vibrant Bhangra and Giddha folk dances to the beat of Punjabi dhols',
        'Nagar Kirtan sacred processions honoring the Guru Granth Sahib',
        'Community voluntary service (Seva) and free Langar dining for thousands',
        'Taking a holy dip in the sacred Amrit Sarovar at the Golden Temple'
      ],
      culinaryHighlights: ['Makki di Roti', 'Sarson da Saag', 'Pindi Chole with Bhature', 'Kheer', 'Sweet Lassi']
    },
    hi: {
      name: 'बैसाखी',
      season: 'वसंत-ग्रीष्म संधिकाल (रबी कटाई)',
      monthRange: 'वैशाख मास (मध्य अप्रैल)',
      symbolism: 'गेहूं की स्वर्णिम फसल का उल्लास एवं खालसा पंथ की स्थापना (1699)',
      lore: 'शीतकालीन रबी फसल की कटाई के प्रति कृतज्ञता, तथा 1699 में श्री आनंदपुर साहिब में गुरु गोविंद सिंह जी द्वारा खालसा पंथ के सृजन का ऐतिहासिक दिन।',
      traditions: [
        'ढोल की गूंजती ताल पर जोशीला भांगड़ा और गिद्दा नृत्य',
        'पंच प्यारों की अगुवाई में भव्य नगर कीर्तन शोभायात्राएं',
        'गुरुद्वारों में बिना किसी भेदभाव के वृहद लंगर और निःस्वार्थ सेवा',
        'स्वर्ण मंदिर के पावन अमृत सरोवर में पवित्र स्नान'
      ],
      culinaryHighlights: ['मक्के दी रोटी', 'सरसों दा साग', 'पिंडी छोले भटूरे', 'चावल की खीर', 'मलाईदार लस्सी']
    },
    es: {
      name: 'Vaisakhi',
      season: 'Vasanta (Cosecha de Primavera)',
      monthRange: 'Vaisakha (Mediados de Abril)',
      symbolism: 'Cosecha Dorada de Trigo y Nacimiento de la Orden Khalsa (1699)',
      lore: 'Celebra la gratitud agrícola por la cosecha de trigo y la asamblea histórica en Anandpur Sahib donde Guru Gobind Singh creó el Khalsa.',
      traditions: [
        'Danzas folclóricas Bhangra y Giddha con tambores dhol',
        'Procesiones sagradas Nagar Kirtan en honor al Guru Granth Sahib',
        'Servicio comunitario voluntario (Seva) y comidas comunales Langar',
        'Baño sagrado en el Amrit Sarovar del Templo Dorado'
      ],
      culinaryHighlights: ['Makki di Roti', 'Sarson da Saag', 'Pindi Chole con Bhature', 'Kheer', 'Lassi Dulce']
    }
  }
};

// Helper function to return localized era
export function getLocalizedEra(era: HistoricalEra, lang: SupportedLanguage): HistoricalEra {
  const loc = LOCALIZED_ERAS[era.id]?.[lang];
  if (!loc) return era;
  return {
    ...era,
    name: loc.name || era.name,
    tagline: loc.tagline || era.tagline,
    overview: loc.overview || era.overview,
    significance: loc.significance || era.significance,
    architecturalStyle: loc.architecturalStyle || era.architecturalStyle,
    keyInnovations: loc.keyInnovations || era.keyInnovations
  };
}

// Helper function to return localized artifact
export function getLocalizedArtifact(artifact: Artifact, lang: SupportedLanguage): Artifact {
  const loc = LOCALIZED_ARTIFACTS[artifact.id]?.[lang];
  if (!loc) return artifact;
  return {
    ...artifact,
    title: loc.title || artifact.title,
    subtitle: loc.subtitle || artifact.subtitle,
    origin: loc.origin || artifact.origin,
    medium: loc.medium || artifact.medium,
    description: loc.description || artifact.description,
    curatorNote: loc.curatorNote || artifact.curatorNote
  };
}

// Helper function to return localized festival
export function getLocalizedFestival(festival: Festival, lang: SupportedLanguage): Festival {
  const loc = LOCALIZED_FESTIVALS[festival.id]?.[lang];
  if (!loc) return festival;
  return {
    ...festival,
    name: loc.name || festival.name,
    season: loc.season || festival.season,
    monthRange: loc.monthRange || festival.monthRange,
    symbolism: loc.symbolism || festival.symbolism,
    lore: loc.lore || festival.lore,
    traditions: loc.traditions || festival.traditions,
    culinaryHighlights: loc.culinaryHighlights || festival.culinaryHighlights
  };
}

// Localized Spices
export const LOCALIZED_SPICES: Record<string, Record<SupportedLanguage, Partial<SpiceProfile>>> = {
  'turmeric': {
    en: {
      englishName: 'Turmeric (Haldi)',
      healingProperties: 'Curcumin-rich antioxidant, blood purifier, anti-inflammatory, sacred wound healer.',
      flavorNotes: 'Warm, earthy, subtle bitter astringency with golden hue',
      culinaryRole: 'Base tempering (Tadka) across dals, curries, and ceremonial Haldi milk'
    },
    hi: {
      englishName: 'हल्दी (हरिद्रा)',
      healingProperties: 'करक्यूमिन युक्त एंटीऑक्सीडेंट, रक्त शोधक, शोथनाशक (सूजन घटाने वाली) और घाव भरने वाला पवित्र द्रव्य।',
      flavorNotes: 'उष्ण, मृदु तिक्त-कषाय, स्वर्णिम रंग और सौम्य सुगंध',
      culinaryRole: 'दाल, करी और मांगलिक हल्दी दूध में आधारभूत तड़का एवं रंग'
    },
    es: {
      englishName: 'Cúrcuma (Haldi)',
      healingProperties: 'Antioxidante rico en curcumina, purificador de sangre, antiinflamatorio y cicatrizante.',
      flavorNotes: 'Cálido, terroso, sutil amargor astringente con tonalidad dorada',
      culinaryRole: 'Base de sofrito (Tadka) en dals, curris y leche dorada ceremonial'
    }
  },
  'black-pepper': {
    en: {
      englishName: 'Black Pepper (Kali Mirch)',
      healingProperties: 'Deep Agni (digestive fire) stimulant, respiratory decongestant, nutrient absorption enhancer.',
      flavorNotes: 'Sharp, penetrating pungency with citrus and pine resin notes',
      culinaryRole: 'The ancient black gold of Malabar; foundational to Rasam, Chaas, and garam masala'
    },
    hi: {
      englishName: 'काली मिर्च (मरिच)',
      healingProperties: 'जठराग्नि प्रदीपक, कफ नाशक, श्वसन मार्ग शोधक और पोषक तत्वों का अवशोषण बढ़ाने वाली।',
      flavorNotes: 'तीक्ष्ण, ऊष्मीय, पाइन और नींबू की सुगंध लिए कटु स्वाद',
      culinaryRole: 'मालाबार का प्राचीन काला सोना; रसम, छाछ और गरम मसाले की रीढ़'
    },
    es: {
      englishName: 'Pimienta Negra (Kali Mirch)',
      healingProperties: 'Estimulante del fuego digestivo (Agni), descongestionante y potenciador de nutrientes.',
      flavorNotes: 'Pungencia penetrante con notas de pino y cítricos',
      culinaryRole: 'El oro negro de Malabar; base del Rasam, Chaas y garam masala'
    }
  },
  'cardamom': {
    en: {
      englishName: 'Green Cardamom (Elaichi)',
      healingProperties: 'Tridoshic pacifier, breath freshener, digestive calmative, aromatic nervine tonic.',
      flavorNotes: 'Eucalyptus, camphor, floral sweetness and cooling warmth',
      culinaryRole: 'Crowning jewel of Biryanis, Chai, Payasam, and royal festive desserts'
    },
    hi: {
      englishName: 'छोटी इलायची (एला)',
      healingProperties: 'त्रिदोष शामक, मुख शुद्धि कारक, पाचन शांतिकारक और तंत्रिका तंत्र को बल देने वाली।',
      flavorNotes: 'यूकेलिप्टस, कपूर, सौम्य मिठास और शीतल-उष्ण सुगंध',
      culinaryRole: 'बिरयानी, मसाला चाय, खीर-पायसम और शाही मिष्ठानों का शिरोमणि'
    },
    es: {
      englishName: 'Cardamomo Verde (Elaichi)',
      healingProperties: 'Pacificador tridóshico, refrescante bucal, calmante digestivo y tónico aromático.',
      flavorNotes: 'Eucalipto, alcanfor, dulzor floral y calidez refrescante',
      culinaryRole: 'La joya de biryanis, té Chai, payasam y postres reales'
    }
  },
  'saffron': {
    en: {
      englishName: 'Kashmiri Saffron (Kesar)',
      healingProperties: 'Mood-elevating crocin antioxidant, skin radiance enhancer, cellular revitalizer.',
      flavorNotes: 'Hay-like honeyed floral aroma with a dry, metallic bittersweet warmth',
      culinaryRole: 'Infused in Awadhi biryanis, Phirni, Kashmiri Kahwa, and festival prasad'
    },
    hi: {
      englishName: 'कश्मीरी केसर (कुंकुम)',
      healingProperties: 'मन-प्रसन्नता कारक, क्रोसिन एंटीऑक्सीडेंट, त्वचा कांतिवर्धक और ओज वर्धक।',
      flavorNotes: 'शहद जैसी सुवासित सुगंध, मधुर-तिक्त और स्वर्णिम रंग',
      culinaryRole: 'अवधी बिरयानी, फिरनी, कश्मीरी कहवा और उत्सवों के दिव्य प्रसाद में'
    },
    es: {
      englishName: 'Azafrán de Cachemira (Kesar)',
      healingProperties: 'Antioxidante elevador del ánimo, revitalizador celular y embellecedor dérmico.',
      flavorNotes: 'Aroma a heno meloso y flores con matiz cálido agridulce',
      culinaryRole: 'Infundido en biryanis Awadhi, Phirni, té Kahwa y prasadam'
    }
  },
  'cumin': {
    en: {
      englishName: 'Cumin (Jeera)',
      healingProperties: 'Stimulates digestive enzymes, eliminates flatulence, cools pitta when roasted gently.',
      flavorNotes: 'Nutty, warm, smoky and earthy with slight bitterness',
      culinaryRole: 'The instant hiss in hot ghee for tadka, raitas, and aromatic tempering'
    },
    hi: {
      englishName: 'जीरा (जीरक)',
      healingProperties: 'पाचक एंजाइमों को उत्तेजित करने वाला, वायु नाशक और भूनने पर पित्त शामक।',
      flavorNotes: 'सौंधी खुशबूदार, उष्ण, भूनी हुई सुगंध और सौम्य कड़वाहट',
      culinaryRole: 'गर्म घी में तड़के की छनछनाहट, रायते और दालों की सुगंध'
    },
    es: {
      englishName: 'Comino (Jeera)',
      healingProperties: 'Estimula enzimas digestivas, combate gases y refresca pitta al tostarse suavemente.',
      flavorNotes: 'Tostado, terroso, ahumado con leve amargor fragante',
      culinaryRole: 'El chisporroteo clásico en ghee para sofritos, raitas y guisos'
    }
  },
  'cloves': {
    en: {
      englishName: 'Cloves (Laung)',
      healingProperties: 'Potent eugenol analgesic for teeth, antimicrobial, deep internal circulation stimulant.',
      flavorNotes: 'Intensely numbing, sweet and hot, astringently aromatic',
      culinaryRole: 'Whole spice in pot-pulaos, biryani dum sealings, and medicinal decoctions'
    },
    hi: {
      englishName: 'लौंग (लवंग)',
      healingProperties: 'दांत दर्द निवारक यूजेनॉल युक्त, जीवाणुरोधी, आंतरिक रक्त संचार प्रदीपक।',
      flavorNotes: 'तीखी, हल्की सुन्न करने वाली, सुगंधित मिठास और गर्माहट',
      culinaryRole: 'पुलाव, दम बिरयानी की हांडी सील करने और काढ़े में साबुत मसाला'
    },
    es: {
      englishName: 'Clavo de Olor (Laung)',
      healingProperties: 'Potente analgésico bucal por eugenol, antimicrobiano y estimulante circulatorio.',
      flavorNotes: 'Intenso, anestesiante, dulce-caliente y aromático',
      culinaryRole: 'Especia entera en arroces pulao, sellado de biryani y decocciones'
    }
  }
};

export function getLocalizedSpice(spice: SpiceProfile, lang: SupportedLanguage): SpiceProfile {
  const loc = LOCALIZED_SPICES[spice.id]?.[lang];
  if (!loc) return spice;
  return {
    ...spice,
    englishName: loc.englishName || spice.englishName,
    healingProperties: loc.healingProperties || spice.healingProperties,
    flavorNotes: loc.flavorNotes || spice.flavorNotes,
    culinaryRole: loc.culinaryRole || spice.culinaryRole
  };
}

// Localized Cuisines
export const LOCALIZED_CUISINES: Record<string, Record<SupportedLanguage, Partial<RegionalCuisine>>> = {
  'awadhi': {
    en: {
      style: 'Awadhi Dastarkhwan (Lucknow)',
      definingFlavor: 'Subtle, perfumed with Kewra, saffron, and slow-roasted nut pastes',
      cookingTechnique: 'Dum Pukht (Sealing heavy degchi pots with wheat dough over smoldering coals)',
      culturalEtiquette: 'Courses presented on embroidered velvet Dastarkhwan; washing hands in Aftaba-Chilimchi basins.'
    },
    hi: {
      style: 'अवधी दस्तरख्वान (लखनऊ)',
      definingFlavor: 'सौम्य, केवड़ा, केसर और धीमी आंच पर भुने मेवों के लेप से सुवासित',
      cookingTechnique: 'दम पुख्त (भारी देगची को आटे की लोई से सील कर मंद अंगारों पर पकाना)',
      culturalEtiquette: 'कशीदाकारी वाले मखमली दस्तरख्वान पर भोजन परोसना; आफताबा-चिलमची में हाथ धुलाना।'
    },
    es: {
      style: 'Awadhi Dastarkhwan (Lucknow)',
      definingFlavor: 'Sutil, perfumado con kewra, azafrán y pastas de frutos secos tostados a fuego lento',
      cookingTechnique: 'Dum Pukht (Sellado de ollas degchi con masa de trigo sobre brasas lentas)',
      culturalEtiquette: 'Servicio en mantel bordado Dastarkhwan; lavado de manos ceremonial en fuentes Aftaba.'
    }
  },
  'chettinad': {
    en: {
      style: 'Chettinad Mercantile Feast (Tamil Nadu)',
      definingFlavor: 'Fiery, complexly roasted whole spices, star anise, and kalpasi (black stone flower)',
      cookingTechnique: 'Ammikkallu stone grinding of fresh wet spice pastes; cast-iron and clay Kalchatti simmering',
      culturalEtiquette: 'Eaten seated cross-legged, using fingers of the right hand to mix rice on a tender plantain leaf.'
    },
    hi: {
      style: 'चेट्टीनाड व्यापारिक भोज (तमिलनाडु)',
      definingFlavor: 'तीखा, भूने हुए साबुत मसाले, चक्रफूल और कल्पसी (दगड़ फूल) का गहरा स्वाद',
      cookingTechnique: 'सिलबट्टे (अम्मिक्कल्लु) पर ताजे मसाले पीसना; मिट्टी और लोहे के पात्रों में पकाना',
      culturalEtiquette: 'केले के पत्ते पर दाहिने हाथ की उंगलियों से चावल और रसम मिलाकर चाव से खाना।'
    },
    es: {
      style: 'Banquete Mercantil Chettinad (Tamil Nadu)',
      definingFlavor: 'Picante, especias enteras tostadas complejas, anís estrellado y flor de piedra kalpasi',
      cookingTechnique: 'Molienda en piedra de mortero de pastas frescas; cocción en vasijas de arcilla kalchatti',
      culturalEtiquette: 'Comido sentado con las piernas cruzadas usando los dedos para mezclar el arroz en hoja de plátano.'
    }
  },
  'bengali': {
    en: {
      style: 'Bengali Rannaghor & Bhoj',
      definingFlavor: 'Pungent raw cold-pressed mustard oil, Paanch Phoron (5-spice temper), and sweet-savory balance',
      cookingTechnique: 'Shorshe Bata (mustard paste steamed in banana leaf or earthen pot), Dheki rice processing',
      culturalEtiquette: 'Strict sequential dining: starting with bitter Shukto, advancing to dal, fish, and closing with sweet Rosogolla.'
    },
    hi: {
      style: 'बंगाली भोजनालय एवं पारंपरिक भोज',
      definingFlavor: 'कच्चे सरसों के तेल की झार, पांच फोड़न का तड़का और मीठे-नमकीन का संतुलित स्वाद',
      cookingTechnique: 'सोरषे बाटा (सरसों के पेस्ट में केले के पत्ते पर भाप में पकाना), धीमी आंच पर कसाना',
      culturalEtiquette: 'क्रमबद्ध भोजन: तीते शुक्तो से शुरुआत, फिर दाल, तरकारी और अंत में मिष्टी दोई व रसगुल्ला।'
    },
    es: {
      style: 'Banquete Bengali Rannaghor',
      definingFlavor: 'Aceite de mostaza prensado en frío, templado Paanch Phoron y armonía agridulce',
      cookingTechnique: 'Shorshe Bata (pasta de mostaza al vapor en hojas de plátano), cocción en barro',
      culturalEtiquette: 'Secuencia estricta: inicia con Shukto amargo, continúa con dal y culmina con dulces de leche.'
    }
  }
};

export function getLocalizedCuisine(cuisine: RegionalCuisine, lang: SupportedLanguage): RegionalCuisine {
  const loc = LOCALIZED_CUISINES[cuisine.id]?.[lang];
  if (!loc) return cuisine;
  return {
    ...cuisine,
    style: loc.style || cuisine.style,
    definingFlavor: loc.definingFlavor || cuisine.definingFlavor,
    cookingTechnique: loc.cookingTechnique || cuisine.cookingTechnique,
    culturalEtiquette: loc.culturalEtiquette || cuisine.culturalEtiquette
  };
}

// Localized Philosophies
export const LOCALIZED_PHILOSOPHIES: Record<string, Record<SupportedLanguage, Partial<PhilosophicalSchool>>> = {
  'samkhya': {
    en: {
      meaning: 'Enumeration / Discernment',
      coreInquiry: 'The fundamental dichotomy between Consciousness (Purusha) and Matter (Prakriti).',
      keyPremise: 'Liberation is achieved through precise discriminative knowledge (Viveka) disentangling the witness from cosmic manifestation.',
      axiom: '"From discernment of the unmanifest, manifest, and the knower, liberation arises."'
    },
    hi: {
      meaning: 'संख्या / यथार्थ विवेक',
      coreInquiry: 'चेतन पुरुष और जड़ प्रकृति के मध्य मौलिक भेद का अन्वेषण।',
      keyPremise: 'सृष्टि के तत्वों का यथार्थ विवेक ज्ञान प्राप्त कर साक्षी चेतना को प्रकृति के बंधनों से मुक्त करना।',
      axiom: '"व्यक्त, अव्यक्त और ज्ञाता के विवेक से ही परम मुक्ति संभव है।"'
    },
    es: {
      meaning: 'Enumeración / Discernimiento',
      coreInquiry: 'La dicotomía fundamental entre la Conciencia Pura (Purusha) y la Materia (Prakriti).',
      keyPremise: 'La liberación se logra mediante el conocimiento discriminativo (Viveka) que desliga al testigo de la manifestación.',
      axiom: '"Del discernimiento de lo inmanifiesto, lo manifiesto y el conocedor surge la liberación."'
    }
  },
  'yoga': {
    en: {
      meaning: 'Union / Stillness',
      coreInquiry: 'Practical methodology for the systematic cessation of mental fluctuations.',
      keyPremise: 'Eight-limbed path (Ashtanga) cultivating physical stability, breath control, and contemplative absorption.',
      axiom: '"Yogas chitta vritti nirodha — Yoga is the cessation of the whirlpools of mind."'
    },
    hi: {
      meaning: 'योग / चित्त की एकाग्रता',
      coreInquiry: 'चित्त की वृत्तियों के क्रमिक निरोध और आत्म-साक्षात्कार की व्यावहारिक पद्धति।',
      keyPremise: 'अष्टांग योग (यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान, समाधि) द्वारा कैवल्य की प्राप्ति।',
      axiom: '"योगश्चित्तवृत्तिनिरोधः — चित्त की वृत्तियों का निरोध ही योग है।"'
    },
    es: {
      meaning: 'Unión / Quietud',
      coreInquiry: 'Metodología práctica para la cesación sistemática de las fluctuaciones de la mente.',
      keyPremise: 'El camino de ocho pasos (Ashtanga) que cultiva estabilidad corporal, respiración y absorción meditativa.',
      axiom: '"Yogas chitta vritti nirodha: el yoga es el cese de los torbellinos de la mente."'
    }
  },
  'vedanta': {
    en: {
      meaning: 'End of Knowledge / Culmination of the Vedas',
      coreInquiry: 'The ontological nature of ultimate reality (Brahman) and its identity with the individual soul (Atman).',
      keyPremise: 'Advaita (Non-dualism): Plurality is an apparent projection (Maya); the witness consciousness and cosmic reality are non-different.',
      axiom: '"Aham Brahmasmi — I am the Infinite Reality."'
    },
    hi: {
      meaning: 'वेदों का चरम सिद्धांत / तत्वज्ञान',
      coreInquiry: 'परमतत्व (ब्रह्म) का स्वरूप और जीवात्मा (आत्मन) के साथ उसकी पूर्ण अद्वैत एकता।',
      keyPremise: 'अद्वैत वेदांत: भेद केवल माया का विवर्त है; शुद्ध साक्षी चेतना और परब्रह्म एक ही हैं।',
      axiom: '"अहं ब्रह्मास्मि — मैं ही वह अनंत परब्रह्म हूँ।"'
    },
    es: {
      meaning: 'Culminación del Conocimiento Védico',
      coreInquiry: 'La naturaleza ontológica de la realidad última (Brahman) y su identidad con el alma (Atman).',
      keyPremise: 'Advaita (No dualismo): La pluralidad es una proyección fenoménica (Maya); la conciencia y el cosmos son uno.',
      axiom: '"Aham Brahmasmi: Yo soy la Realidad Infinita."'
    }
  }
};

export function getLocalizedPhilosophy(phil: PhilosophicalSchool, lang: SupportedLanguage): PhilosophicalSchool {
  const loc = LOCALIZED_PHILOSOPHIES[phil.id]?.[lang];
  if (!loc) return phil;
  return {
    ...phil,
    meaning: loc.meaning || phil.meaning,
    coreInquiry: loc.coreInquiry || phil.coreInquiry,
    keyPremise: loc.keyPremise || phil.keyPremise,
    axiom: loc.axiom || phil.axiom
  };
}

export interface LocalizedRasaItem {
  name: string;
  elements: string;
  effect: string;
  examples: string;
}

export const LOCALIZED_RASAS: Record<number, Record<SupportedLanguage, LocalizedRasaItem>> = {
  0: {
    en: {
      name: 'Madhura (Sweet)',
      elements: 'Earth & Water',
      effect: 'Nourishing, grounding, builds tissue (Dhatus)',
      examples: 'Basmati rice, ghee, dates, wheat, cardamom'
    },
    hi: {
      name: 'मधुर (मीठा)',
      elements: 'पृथ्वी एवं जल',
      effect: 'पोषणकारी, शक्तिवर्धक, धातुओं का निर्माण करने वाला',
      examples: 'बासमती चावल, शुद्ध घी, खजूर, गेहूं, इलायची'
    },
    es: {
      name: 'Madhura (Dulce)',
      elements: 'Tierra y Agua',
      effect: 'Nutritivo, reconfortante, fortalece los tejidos (Dhatus)',
      examples: 'Arroz basmati, ghee, dátiles, trigo, cardamomo'
    }
  },
  1: {
    en: {
      name: 'Amla (Sour)',
      elements: 'Earth & Fire',
      effect: 'Stimulates digestive enzymes, awakens appetite',
      examples: 'Amla (Indian gooseberry), tamarind, yogurt, raw mango'
    },
    hi: {
      name: 'अम्ल (खट्टा)',
      elements: 'पृथ्वी एवं अग्नि',
      effect: 'पाचक रसों को उत्तेजित करता है, भूख बढ़ाता है',
      examples: 'आंवला, इमली, दही, कच्चा आम'
    },
    es: {
      name: 'Amla (Ácido)',
      elements: 'Tierra y Fuego',
      effect: 'Estimula las enzimas digestivas, despierta el apetito',
      examples: 'Amla (grosella india), tamarindo, yogur, mango verde'
    }
  },
  2: {
    en: {
      name: 'Lavana (Salty)',
      elements: 'Water & Fire',
      effect: 'Electrolyte balance, enhances inherent flavors',
      examples: 'Himalayan pink rock salt (Saindhava), sea salt'
    },
    hi: {
      name: 'लवण (नमकीन)',
      elements: 'जल एवं अग्नि',
      effect: 'इलेक्ट्रोलाइट संतुलन, भोजन के मूल स्वाद को उभारता है',
      examples: 'सेंधा नमक (सैंधव), समुद्री लवण'
    },
    es: {
      name: 'Lavana (Salado)',
      elements: 'Agua y Fuego',
      effect: 'Equilibrio electrolítico, realza los sabores inherentes',
      examples: 'Sal de roca del Himalaya (Saindhava), sal marina'
    }
  },
  3: {
    en: {
      name: 'Katu (Pungent)',
      elements: 'Fire & Air',
      effect: 'Clears sinuses, fires metabolic rate, detoxifies',
      examples: 'Black pepper, dry ginger, cloves, mustard seed'
    },
    hi: {
      name: 'कटु (तीखा)',
      elements: 'अग्नि एवं वायु',
      effect: 'कफ को दूर करता है, जठराग्नि प्रदीप्त करता है, विषहरण',
      examples: 'काली मिर्च, सोंठ (अदरक), लौंग, सरसों'
    },
    es: {
      name: 'Katu (Picante)',
      elements: 'Fuego y Aire',
      effect: 'Despeja las vías respiratorias, estimula el metabolismo',
      examples: 'Pimienta negra, jengibre seco, clavo de olor, mostaza'
    }
  },
  4: {
    en: {
      name: 'Tikta (Bitter)',
      elements: 'Air & Ether',
      effect: 'Purifies blood, anti-inflammatory, clears heat',
      examples: 'Turmeric, bitter gourd (Karela), fenugreek, neem'
    },
    hi: {
      name: 'तिक्त (कड़वा)',
      elements: 'वायु एवं आकाश',
      effect: 'रक्त को शुद्ध करता है, सूजनरोधी, पित्त व ताप का शमन',
      examples: 'हल्दी, करेला, मेथी दाना, नीम'
    },
    es: {
      name: 'Tikta (Amargo)',
      elements: 'Aire y Éter',
      effect: 'Purifica la sangre, antiinflamatorio, disipa el calor',
      examples: 'Cúrcuma, melón amargo (Karela), fenogreco, neem'
    }
  },
  5: {
    en: {
      name: 'Kashaya (Astringent)',
      elements: 'Air & Earth',
      effect: 'Tones mucous membranes, cools internal tissues',
      examples: 'Pomegranate, green tea, raw banana, triphala'
    },
    hi: {
      name: 'कषाय (कसैला)',
      elements: 'वायु एवं पृथ्वी',
      effect: 'ऊतकों को सुदृढ़ करता है, आंतरिक शीतलता प्रदान करता है',
      examples: 'अनार, ग्रीन टी, कच्चा केला, त्रिफला'
    },
    es: {
      name: 'Kashaya (Astringente)',
      elements: 'Aire y Tierra',
      effect: 'Tonifica las membranas mucosas, enfría los tejidos internos',
      examples: 'Granada, té verde, plátano verde, triphala'
    }
  }
};

export function getLocalizedRasa(index: number, lang: SupportedLanguage): LocalizedRasaItem {
  return LOCALIZED_RASAS[index]?.[lang] || LOCALIZED_RASAS[index]?.en;
}



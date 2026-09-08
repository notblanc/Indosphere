import {
  Artifact,
  HistoricalEra,
  ClassicalDance,
  IndianLanguage,
  PhilosophicalSchool,
  Festival,
  CraftTradition,
  SpiceProfile,
  RegionalCuisine
} from '../types';

import dancingGirlImg from '../assets/images/dancing_girl_1788799631727.jpg';
import pashupatiSealImg from '../assets/images/pashupati_seal_1788799576729.jpg';
import rigvedaManuscriptImg from '../assets/images/rigveda_manuscript_1788799660216.jpg';
import ashokaLionCapitalImg from '../assets/images/ashoka_lion_capital_1788799592867.jpg';
import ajantaPadmapaniImg from '../assets/images/ajanta_padmapani_1788799611435.jpg';
import natarajaBronzeImg from '../assets/images/chola_nataraja_1788799677955.jpg';
import mughalJaliImg from '../assets/images/mughal_jali_1788799694094.jpg';

export const EXHIBIT_ROOMS = [
  { id: 'home', title: 'The Living Canvas', subtitle: 'Curatorial Entrance', icon: 'Sparkles' },
  { id: 'history', title: 'Temporal Odyssey', subtitle: '5,000 Years of Thought', icon: 'Hourglass' },
  { id: 'culture', title: 'Cosmology & Arts', subtitle: 'Dance, Voice & Darshana', icon: 'Compass' },
  { id: 'festivals', title: 'Seasonal Epics', subtitle: 'Atmospheric Rites', icon: 'Sun' },
  { id: 'crafts', title: 'Mastery of Hands', subtitle: 'Looms, Clay & Bronze', icon: 'Hammer' },
  { id: 'food', title: 'Sensory Alchemy', subtitle: 'Spices & Six Rasas', icon: 'Flame' },
] as const;

export const HISTORICAL_ERAS: HistoricalEra[] = [
  {
    id: 'indus-valley',
    name: 'Indus-Sarasvati Civilization',
    period: 'c. 3300 BCE – 1300 BCE',
    tagline: 'Urban Precision, Lost-Wax Bronze, and Maritime Trade',
    overview: 'Centuries before the Mediterranean classical era, the urban planning of Harappa, Mohenjo-Daro, and Dholavira introduced grid street designs, sophisticated subterranean sewage networks, standardization of weights, and high-fired terracotta kiln mastery.',
    significance: 'Exemplified peaceful municipal governance without palaces or militaristic monuments, prioritizing public sanitation, dock engineering at Lothal, and spiritual reverence for water.',
    architecturalStyle: 'Baked brick citadel, hypocaust public baths, covered hydraulic drains, standardized brick ratios (1:2:4)',
    colorTone: '#B34728',
    bgAtmosphere: 'linear-gradient(135deg, rgba(179,71,40,0.12), rgba(243,237,226,0.9))',
    keyInnovations: [
      'Standardized binary and decimal weight systems',
      'Cire perdue (lost-wax metal casting technique)',
      'Subterranean drain masonry with sediment traps',
      'Tidal dockyard engineering with sluice gates'
    ],
    artifacts: [
      {
        id: 'dancing-girl',
        title: 'The Dancing Girl of Mohenjo-Daro',
        subtitle: 'Bronze statuette embodying poise and confident autonomy',
        era: 'c. 2300–1750 BCE',
        origin: 'HR Area, Mohenjo-Daro (Sindh)',
        medium: 'Bronze (Cast via Cire Perdue method)',
        description: 'Standing 10.5 cm high, this youthful figure leans on her right hip with her left arm adorned almost entirely in bangles, exuding a timeless naturalism rarely seen in archaic metallurgy.',
        curatorNote: 'Archaeologist Mortimer Wheeler observed: "There is she, about fifteen years old I should think, not more, but she stands there with her hands on her hips and bends with the rhythm of the music... an absolute masterpiece."',
        imageUrl: dancingGirlImg,
        category: 'sculpture',
        tags: ['Bronze', 'Lost Wax', 'Harappan', 'Prehistoric']
      },
      {
        id: 'pashupati-seal',
        title: 'The Pashupati Steatite Seal',
        subtitle: 'Proto-Shiva in Yogic Mulabandhasana',
        era: 'c. 2350–2000 BCE',
        origin: 'Mohenjo-Daro',
        medium: 'Carved steatite fired to white glaze',
        description: 'Depicts a horned, tricephalic figure seated in a meditative posture surrounded by an elephant, tiger, rhinoceros, water buffalo, and two antelopes beneath the throne.',
        curatorNote: 'Considered one of the earliest archaeological testaments to internal meditative yogic discipline and ecological communion in human history.',
        imageUrl: pashupatiSealImg,
        category: 'manuscript',
        tags: ['Steatite', 'Iconography', 'Yoga', 'Glyphs']
      }
    ]
  },
  {
    id: 'vedic-upanishadic',
    name: 'Vedic & Upanishadic Epoch',
    period: 'c. 1500 BCE – 500 BCE',
    tagline: 'Sonic Rigor, Inward Inquiry, and Axiomatic Grammar',
    overview: 'Marked by the oral preservation of Vedic hymns through complex mnemonic recitations (Patha schemes), progressing from cosmic fire rituals to the profound non-dual ontological inquiries of the early Upanishads and Panini’s generative grammar.',
    significance: 'Formulated the foundational concepts of Dharma, Karma, Samsara, and Moksha, establishing Sanskrit as an acoustic and computational language of extraordinary precision.',
    architecturalStyle: 'Sacred geometric altar structures (Shulba Sutras), natural river hermitages (Ashramas)',
    colorTone: '#D4881A',
    bgAtmosphere: 'linear-gradient(135deg, rgba(212,136,26,0.12), rgba(243,237,226,0.9))',
    keyInnovations: [
      'Paninian formal grammar (Ashtadhyayi) anticipating modern algorithmic syntax',
      'Shulba Sutras geometric formulations (early Pythagorean triples and circle squaring)',
      'Intricate oral preservation preserving accentual pitch (Svarita) over millennia'
    ],
    artifacts: [
      {
        id: 'rigveda-manuscript',
        title: 'Rigveda Samhita Palm-Leaf Folio',
        subtitle: 'The primordial hymns of human consciousness and natural order (Rita)',
        era: 'Root c. 1500 BCE (Transcribed on birch bark/palm leaf)',
        origin: 'Sapta Sindhu / Gangetic Plains',
        medium: 'Birch bark ink inscription in Sharada script',
        description: 'Contains the Nasadiya Sukta (Hymn of Creation), questioning: "Who really knows? Who will here proclaim it? Whence was it produced? Whence is this creation? The gods came afterwards... He who surveys it from highest heaven, he knows — or perhaps even he knows not."',
        curatorNote: 'Included in UNESCO Memory of the World Register for its unmatched linguistic fidelity and philosophical introspection.',
        imageUrl: rigvedaManuscriptImg,
        category: 'manuscript',
        tags: ['Oral Tradition', 'Sanskrit', 'Philosophy', 'Cosmology']
      }
    ]
  },
  {
    id: 'maurya-ashoka',
    name: 'The Mauryan Empire & Pax Ashoka',
    period: 'c. 322 BCE – 185 BCE',
    tagline: 'Pan-Continental Statecraft, Stone Monoliths, and Moral Edicts',
    overview: 'Under Chandragupta and the statesman Chanakya (author of Arthashastra), followed by Emperor Ashoka, the empire unified the subcontinent from Afghanistan to Bengal. Ashoka renounced imperial conquest following the Kalinga war, adopting Dhamma Vijaya (conquest by righteousness).',
    significance: 'Inscribed moral human and animal rights on polished sandstone monolithic pillars, pioneered animal hospitals, and sent diplomatic missions throughout the Hellenistic and Asian worlds.',
    architecturalStyle: 'Mirror-polished Chunar sandstone monoliths, early rock-cut Barabar caves, Great Stupa at Sanchi',
    colorTone: '#3D5A45',
    bgAtmosphere: 'linear-gradient(135deg, rgba(61,90,69,0.12), rgba(243,237,226,0.9))',
    keyInnovations: [
      'Universal public civil edicts advocating religious tolerance and ahimsa',
      'High-gloss Chunar sandstone polishing technique',
      'Grand Trunk Road (Uttarapatha) infrastructure network with shaded rest houses'
    ],
    artifacts: [
      {
        id: 'ashoka-lion-capital',
        title: 'The Lion Capital of Ashoka',
        subtitle: 'Four Asiatic lions proclaiming moral universalism (Adopted as National Emblem of India)',
        era: 'c. 250 BCE',
        origin: 'Sarnath Deer Park (Varanasi)',
        medium: 'Single block of polished Chunar sandstone',
        description: 'Carved with extraordinary anatomical precision, featuring four lions back to back atop an abacus with an elephant, horse, bull, and lion separated by 24-spoked Dharma wheels (Ashoka Chakra).',
        curatorNote: 'The mirror polish (Mauryan polish) remains lustrous even after twenty-two centuries exposed to elements.',
        imageUrl: ashokaLionCapitalImg,
        category: 'sculpture',
        tags: ['Chunar Sandstone', 'Ashokan', 'Sarnath', 'Emblem']
      }
    ]
  },
  {
    id: 'gupta-golden-age',
    name: 'The Classical Gupta Renaissance',
    period: 'c. 320 CE – 550 CE',
    tagline: 'Mathematical Zero, Ajanta Frescoes, and Kalidasa’s Poetry',
    overview: 'An age of zenith across science, mathematics, astronomy, dramatic arts, and sculpture. Aryabhata calculated the value of Pi, discovered Earth’s axial rotation and solar eclipses, while Kalidasa authored Shakuntala and Meghaduta.',
    significance: 'Formalized the decimal numeral system and the mathematical zero (Shunya), while the university at Nalanda drew scholars across Asia.',
    architecturalStyle: 'Free-standing structural stone temples (Deogarh), Ajanta rock-cut chaityas and viharas with dry fresco wall murals',
    colorTone: '#8A583A',
    bgAtmosphere: 'linear-gradient(135deg, rgba(138,88,58,0.12), rgba(243,237,226,0.9))',
    keyInnovations: [
      'Aryabhata’s mathematical determination of zero and planetary orbits',
      'Invention of Chess (Chaturanga)',
      'Rust-resistant metallurgy (The Iron Pillar of Delhi, uncorroded for 1600+ years)'
    ],
    artifacts: [
      {
        id: 'ajanta-padmapani',
        title: 'Bodhisattva Padmapani Cave Mural',
        subtitle: 'The lotus bearer exhibiting transcendent compassion and subtle chiaroscuro',
        era: 'c. 475 CE',
        origin: 'Cave 1, Ajanta Caves (Maharashtra)',
        medium: 'Mineral pigment tempera on mud-plaster rock substrate',
        description: 'His gaze is directed downward in tender contemplation, holding a blue lotus (Utpala), draped in sheer gossamer fabric and pearl strand necklace with rhythmic three-dimensional shading.',
        curatorNote: 'Art historians worldwide consider Padmapani the highest achievement of Asian classical pictorial art, achieving serene psychological depth.',
        imageUrl: ajantaPadmapaniImg,
        category: 'sculpture',
        tags: ['Ajanta', 'Mural', 'Bodhisattva', 'Fresco']
      }
    ]
  },
  {
    id: 'chola-maritime',
    name: 'The Imperial Chola Thalassocracy',
    period: 'c. 848 CE – 1279 CE',
    tagline: 'Granite Vimanas, Ocean Fleet, and Nataraja in Cosmic Ecstasy',
    overview: 'Reigning from Thanjavur, Rajasimhan and Rajendra Chola commanded the Indian Ocean, trading with Song Dynasty China, the Srivijaya Empire, and Arabia. They pioneered monumental granite engineering without mortar.',
    significance: 'Pinnacle of bronze casting embodying Nataraja (the cosmic dance of subatomic creation and dissolution) and Dravidian temple architecture.',
    architecturalStyle: 'Dravidian Granite Vimanas towering 200 feet (Brihadisvara Temple, Gangaikonda Cholapuram)',
    colorTone: '#1E284A',
    bgAtmosphere: 'linear-gradient(135deg, rgba(30,40,74,0.12), rgba(243,237,226,0.9))',
    keyInnovations: [
      'Single 80-tonne monolithic granite cupola capstone hoisted up 4km earthen ramps',
      'Panchaloha (five-metal alloy) equilibrium sculpture mastery',
      'Advanced ocean navigation cartography and naval logistics'
    ],
    artifacts: [
      {
        id: 'nataraja-bronze',
        title: 'Shiva Nataraja: The Lord of Dance',
        subtitle: 'The cosmic cycle of creation, preservation, destruction, illusion, and grace',
        era: 'c. 10th Century CE',
        origin: 'Thanjavur, Tamil Nadu',
        medium: 'Panchaloha bronze lost-wax casting',
        description: 'Encircled by the Prabha Mandala (flame ring), holding the Damaru (drum of time) and Agni (fire of transformation), stepping lightly on Apasmara (the dwarf of ignorance).',
        curatorNote: 'Physicist Fritjof Capra and astronomer Carl Sagan drew direct parallels between the Nataraja bronze and modern quantum particle physics rhythm.',
        imageUrl: natarajaBronzeImg,
        category: 'sculpture',
        tags: ['Chola', 'Bronze', 'Nataraja', 'Panchaloha']
      }
    ]
  },
  {
    id: 'mughal-synthesis',
    name: 'The Indo-Islamic Synthesis & Mughal Court',
    period: 'c. 1526 CE – 1857 CE',
    tagline: 'Charbagh Symmetry, Pietra Dura Inlay, and Hindustani Ragas',
    overview: 'A cultural renaissance born from the confluence of Persian, Central Asian, and indigenous Indian aesthetic sensibilities, producing architectural monuments of white Makrana marble, miniature manuscript ateliers, and the birth of Urdu.',
    significance: 'Synthesized architectural geometry with lyrical botanical ornamentation, perfected floral Pietra Dura (Parchin Kari), and codified classical Hindustani music schools (Gharanas).',
    architecturalStyle: 'Nine-fold Charbagh garden layouts, bulbous double domes, red sandstone courtyards with inlaid white marble jali screens',
    colorTone: '#702632',
    bgAtmosphere: 'linear-gradient(135deg, rgba(112,38,50,0.12), rgba(243,237,226,0.9))',
    keyInnovations: [
      'Parchin Kari (intricate semi-precious stone inlay in marble: lapis lazuli, jasper, carnelian)',
      'Sublime geometric jali lattices providing passive climatic cooling',
      'Synthesis of Hindustani classical raga systems under court masters like Tansen'
    ],
    artifacts: [
      {
        id: 'mughal-jali-screen',
        title: 'Perforated Marble Jali Screen',
        subtitle: 'Geometric light filtration and passive environmental cooling',
        era: 'c. 1630 CE',
        origin: 'Agra / Fatehpur Sikri',
        medium: 'Hand-pierced single Makrana marble slab',
        description: 'A delicate tessellation of interlocking octagons, stars, and botanical motifs that transforms harsh sunlight into soft ambient illumination while compressing air drafts for cooling.',
        curatorNote: 'The mathematical symmetry reflects cosmological balance where light acts as both material and sacred medium.',
        imageUrl: mughalJaliImg,
        category: 'architecture',
        tags: ['Marble', 'Jali', 'Indo-Islamic', 'Geometry']
      }
    ]
  }
];

export const CLASSICAL_DANCES: ClassicalDance[] = [
  {
    id: 'bharatanatyam',
    name: 'Bharatanatyam',
    nativeName: 'भरतनाट्यम् / பரதநாட்டியம்',
    state: 'Tamil Nadu',
    originEra: 'c. 2nd Century BCE (Natya Shastra root)',
    mood: 'Devotional Precision, Sacred Geometry & Symmetrical Araimandi',
    costumeFabric: 'Pleated Kanjeevaram silk with golden Zari borders that fan out during stance',
    musicalAccompaniment: 'Carnatic music with Mridangam, Nattuvangam cymbals, Violin, Flute, and Veena',
    philosophy: 'Rooted in the Natya Shastra by Sage Bharata Muni; represents the Fire element (Agni) in temple cosmology.',
    accentColor: '#B34728',
    history: 'Originating as Sadir Attam performed by Devadasis in the ancient stone temples of Tamil Nadu, Bharatanatyam is codified in the Natya Shastra and Abhinaya Darpana. It was systematically preserved and revived during the Indian renaissance by pioneers like Rukmini Devi Arundale and E. Krishna Iyer.',
    significance: 'Celebrated as the embodiment of cosmic fire (Agni), its somatic architecture mirrors Dravidian temple architecture through crisp triangles, angular lines, and sacred geometric equilibrium.',
    historyLocalized: {
      en: 'Originating as Sadir Attam performed by Devadasis in the ancient stone temples of Tamil Nadu, Bharatanatyam is codified in the Natya Shastra. Revived in the 20th century, it has become an internationally revered classical tradition.',
      hi: 'तमिलनाडु के प्राचीन मंदिरों में देवदासियों द्वारा किए जाने वाले सादिर अट्टम से उत्पन्न, भरतनाट्यम नाट्यशास्त्र और अभिनय दर्पण में संहिताबद्ध है। २०वीं सदी में रुक्मिणी देवी अरुंडेल द्वारा इसे वैश्विक मंच पर पुनर्जीवित किया गया।',
      es: 'Originada como Sadir Attam practicada por devadasis en templos de Tamil Nadu, esta danza está codificada en el Natya Shastra y fue revitalizada en el siglo XX como tesoro cultural universal.'
    },
    significanceLocalized: {
      en: 'Represents the Fire element (Agni) in temple cosmology. Its geometric stances (Araimandi) and dynamic mudras reflect the cosmic cycle of creation and dissolution.',
      hi: 'मंदिर ब्रह्मांड विज्ञान में यह अग्नि तत्व का प्रतिनिधित्व करता है। इसकी ज्यामितीय मुद्राएं (अरैमंडी) और हस्त मुद्राएं सृष्टि और लय के लौकिक चक्र को दर्शाती हैं।',
      es: 'Representa el elemento Fuego (Agni) en la cosmología sagrada. Su postura geométrica (Araimandi) y mudras dinámicos simbolizan el ciclo cósmico de creación y disolución.'
    },
    videoUrl: 'https://www.youtube-nocookie.com/embed/JWhA3ldZcyY?autoplay=0&rel=0&modestbranding=1',
    videoTitle: 'Bharatanatyam Varnam Recital: Sacred Geometry & Abhinaya',
    performerName: 'Kalakshetra Foundation & Priyadarsini Govind Ensembles',
    audioTitle: 'Alarippu & Jatiswaram in Raga Kalyani',
    ragaTala: 'Raga: Kalyani / Nattai • Tala: Adi Tala (8 Beats)',
    traditionalInstruments: ['Nattuvangam (Bronze cymbals)', 'Mridangam (Double-headed drum)', 'Carnatic Violin', 'Bansuri (Flute)'],
    narration: {
      en: 'Listen to the rhythmic syllables (Sollukattu) recited by the Nattuvanar, synchronizing footwork with the resonant stroke of the Mridangam. Bharatanatyam translates spiritual devotion (Bhakti) into mathematical geometry.',
      hi: 'नट्टुवनार द्वारा उच्चारित छंदमय सोल्लुकट्टु को सुनें, जो मृदंगम की थाप के साथ नर्तक के पदसंचालन को अनुशासित करता है। भरतनाट्यम आध्यात्मिक भक्ति को सटीक गणितीय ज्यामिति में परिवर्तित करता है।',
      es: 'Escuche las sílabas rítmicas (Sollukattu) recitadas por el maestro Nattuvanar, coordinando el zapateo con el resonante tambor Mridangam. Bharatanatyam transmuta la devoción espiritual en geometría viva.'
    },
    primaryMudras: [
      {
        name: 'Pataka (The Flag)',
        meaning: 'Open palm with thumb slightly bent inward touching side',
        symbolism: 'Used to indicate clouds, forest, night, opening of doors, and blessing',
        gestureDescription: 'All fingers extended straight and held close together, thumb folded against the index edge.'
      },
      {
        name: 'Mayura (The Peacock)',
        meaning: 'Third finger touches thumb tip, remaining fingers erect',
        symbolism: 'Symbolizes the peacock, applying tilak mark, hair ornamentation, or river currents',
        gestureDescription: 'Ring finger tip meets the tip of the thumb, index and little finger stretch upward.'
      },
      {
        name: 'Hamsasya (Swan’s Beak)',
        meaning: 'Index finger touches thumb tip like a delicate pearl holder',
        symbolism: 'Depicts pearls, jasmine buds, subtle discourse, and supreme knowledge',
        gestureDescription: 'Index finger and thumb touch gently, other three fingers fan gracefully outward.'
      }
    ]
  },
  {
    id: 'kathak',
    name: 'Kathak',
    nativeName: 'कथक / داستان‌سرایی',
    state: 'Uttar Pradesh / Northern India',
    originEra: 'c. 400 BCE (Storytellers / Kathakars)',
    mood: 'Lyrical Pirouettes (Chakkars), Intricate Tatkar Footwork & Micro-expressive Abhinaya',
    costumeFabric: 'Flowing Anarkali kurtas with churidar or flared lehengas, 100+ resonant brass Ghungroos per ankle',
    musicalAccompaniment: 'Hindustani classical system with Tabla, Pakhawaj, Sarangi, and vocal Bol recitations',
    philosophy: 'From "Katha kahe so Kathak kehlaaye" — one who tells stories becomes a Kathak. Represents the Wind/Air element (Vayu).',
    accentColor: '#702632',
    history: 'Originating with ancient wandering storytellers (Kathakars) in north Indian temple courtyards reciting epics, Kathak later blossomed in the Mughal and Awadhi royal courts of Lucknow, Jaipur, and Banaras, evolving its breathtaking speed, subtle glances, and poetic Ghazal abhinaya.',
    significance: 'Embodying the Air element (Vayu), Kathak seamlessly harmonizes spiritual devotion with courtly sophistication, featuring complex rhythmic cycles (Talas) and rapid pirouettes executed with effortless poise.',
    historyLocalized: {
      en: 'Evolved from wandering temple bards (Kathakars) narrating the Mahabharata and Ramayana, later synthesized with Persian aesthetic refinement in Mughal court ateliers.',
      hi: 'प्राचीन काल में रामायण और महाभारत का गायन करने वाले कथाकारों से प्रारंभ होकर, यह शैली मुग़ल और अवध दरबारों में परिष्कृत होकर जयपुर, लखनऊ और बनारस घरानों में विकसित हुई।',
      es: 'Nacida de bardos errantes que narraban epopeyas sagradas, evolucionó en las cortes mogolas y de Awadh integrando sutileza poética y virtuosismo rítmico.'
    },
    significanceLocalized: {
      en: 'Represents the Wind element (Vayu). Renowned for its Tatkar footwork producing polyrhythms through ankle bells (Ghungroos) and lightning-fast Chakkars (turns).',
      hi: 'वायु तत्व का प्रतीक। पैरों के घुंघरू से उत्पन्न तत्कार ताल, सूक्ष्म नयन-अभिनय और बिजली जैसी तेज़ चक्करदार गति इसकी अद्वितीय पहचान है।',
      es: 'Representa el elemento Viento (Vayu). Famosa por el intrincado zapateo Tatkar con cascabeles Ghungroos y giros vertiginosos Chakkars.'
    },
    videoUrl: 'https://www.youtube-nocookie.com/embed/8rY0a2zJj9o?autoplay=0&rel=0&modestbranding=1',
    videoTitle: 'Kathak Tarana & Tatkar: Virtuoso Footwork & Chakkars',
    performerName: 'Pandit Birju Maharaj Legacy & National Kathak Kendra',
    audioTitle: 'Teental Drut & Thumri in Raga Yaman',
    ragaTala: 'Raga: Yaman / Darbari • Tala: Teental (16 Beats, 4/4/4/4)',
    traditionalInstruments: ['Tabla & Pakhawaj', 'Sarangi (Bowed 39-string instrument)', 'Harmonium', 'Ghungroo (Brass ankle bells)'],
    narration: {
      en: 'Hear the vocal Bol recitation: "Dha-dhin-dhin-dha", where the dancer matches every syllable with razor-sharp foot strikes and flowing wrists, concluding on the triumphant "Sum" (first beat).',
      hi: 'तबले और नर्तक के मुख से निकलने वाले बोल "धा धिं धिं धा" को सुनें, जहाँ प्रत्येक मात्रा पर घुंघरू की खनक और नयनों की गति सम पर आकर अचूक स्थिरता पाती है।',
      es: 'Escuche la recitación vocal de los bols: "Dha-dhin-dhin-dha", donde cada sílaba se sincroniza con el impacto de los cascabeles hasta alcanzar el "Sum", el latido primordial.'
    },
    primaryMudras: [
      {
        name: 'Soochi (The Needle)',
        meaning: 'Index finger pointing straight ahead while other fingers are folded',
        symbolism: 'Points to the divine, one singular truth (Ekam), lightning, or destiny',
        gestureDescription: 'Index finger points straight with razor-sharp direction, other three fingers held firmly by thumb.'
      },
      {
        name: 'Chatura (The Fourfold Wisdom)',
        meaning: 'Thumb placed at base of third finger while three fingers remain extended',
        symbolism: 'Represents humility, subtle fragrance, gold, and clever aesthetic nuance',
        gestureDescription: 'Thumb is brought into palm resting against ring finger root, remaining fingers held parallel.'
      }
    ]
  },
  {
    id: 'odissi',
    name: 'Odissi',
    nativeName: 'ଓଡ଼ିଶୀ / ओडिसी',
    state: 'Odisha',
    originEra: 'c. 1st Century BCE (Kharavela Inscriptions)',
    mood: 'Sculptural Tribhangi (Tri-bend posture), Soft Fluidity & Temple Sculptural Stillness',
    costumeFabric: 'Traditional Sambalpuri or Bomkai silk draped with decorative silver filigree jewelry (Tarakasi)',
    musicalAccompaniment: 'Odissi classical music with Mardala percussion, Bansuri, and Sitar',
    philosophy: 'Represents the Water element (Jala). Emulates the lifelike poses of sculptures in the Sun Temple of Konark.',
    accentColor: '#D4881A',
    history: 'Surviving in stone relief at Udayagiri and the Sun Temple of Konark, Odissi was originally performed by Maharis (temple dancer-priestesses) and Gotipuas (acrobatic youth), reconstructed meticulously post-independence by Guru Kelucharan Mohapatra.',
    significance: 'Embodying the Water element (Jala), Odissi is defined by its sensual lyrical curves, shifting between the masculine, grounded Chowk stance and the feminine, tri-curved Tribhangi posture.',
    historyLocalized: {
      en: 'Sculpted in the stone reliefs of Konark and Jagannath temples, preserved by Mahari devadasis and reconstructed by master gurus as a lyrical classical art.',
      hi: 'कोणार्क के सूर्य मंदिर और जगन्नाथ पुरी के प्रस्तर शिल्पों में उत्कीर्ण, यह कला महारी और गोटीपुआ परंपराओं से संजोई गई और गुरु केलुचरण महापात्र द्वारा पुनर्जीवित हुई।',
      es: 'Inmortalizada en los relieves del Templo del Sol de Konark, preservada por las sacerdotisas Mahari y revitalizada por el legendario Gurú Kelucharan Mohapatra.'
    },
    significanceLocalized: {
      en: 'Represents the Water element (Jala). Characterized by the Tribhangi posture (three distinct body curves at neck, waist, and knee) reflecting lyrical temple sculptures.',
      hi: 'जल तत्व का द्योतक। इसकी त्रिभंगी मुद्रा (ग्रीवा, कटि और घुटने का त्रिकोणीय मोड़) और चौक मुद्रा मंदिर की जीवंत मूर्तिकला का साक्षात रूप प्रस्तुत करती हैं।',
      es: 'Representa el elemento Agua (Jala). Se distingue por la postura Tribhangi (tres curvaturas en cuello, cintura y rodilla) que da vida a las esculturas sagradas.'
    },
    videoUrl: 'https://www.youtube-nocookie.com/embed/5D2G7Z1zVdI?autoplay=0&rel=0&modestbranding=1',
    videoTitle: 'Odissi Pallavi & Mangalacharan: Sculptural Grace of Konark',
    performerName: 'Nrityagram Dance Ensemble & Sujata Mohapatra',
    audioTitle: 'Kalyani Pallavi in Ektali',
    ragaTala: 'Raga: Mohana / Kalyani • Tala: Ektali (4 Beats)',
    traditionalInstruments: ['Mardala (Clay/wood barrel drum)', 'Bansuri (Bamboo flute)', 'Manjira (Small hand cymbals)', 'Sitar'],
    narration: {
      en: 'Feel the undulating wave motion of the torso, creating an optical illusion of temple stone coming to life. The melody on the bamboo flute echoes the sacred breeze of Puri’s coast.',
      hi: 'धड़ की लहराती गति का अनुभव करें, जो ऐसा भ्रम उत्पन्न करती है मानो मंदिर के पाषाण शिल्प स्वयं सजीव होकर नृत्य करने लगे हों। बांसुरी की तान सागर तट की पावन वायु जैसी बहती है।',
      es: 'Sienta el suave oleaje del torso que da la ilusión óptica de que las piedras del templo cobran vida. La flauta de bambú evoca la brisa sagrada del océano Índico.'
    },
    primaryMudras: [
      {
        name: 'Alapadma (Full Bloomed Lotus)',
        meaning: 'Fingers separated and turned outward in rotational flowering motion',
        symbolism: 'Full beauty, blooming lotus flower, sweet fruits, and circular celestial wheels',
        gestureDescription: 'All fingers curl outward in alternating staggered levels mimicking layered lotus petals.'
      },
      {
        name: 'Shikhara (The Peak / Spire)',
        meaning: 'Thumb held erect pointing skyward while fingers curl tightly into fist',
        symbolism: 'Symbolizes temple spires, supreme deity Shiva, courage, and sounding a conch shell',
        gestureDescription: 'All fingers tightly folded against palm with thumb held upright pointing directly to zenith.'
      }
    ]
  },
  {
    id: 'kathakali',
    name: 'Kathakali',
    nativeName: 'കഥകളി / कथकली',
    state: 'Kerala',
    originEra: 'c. 17th Century CE',
    mood: 'Monumental Archetypal Drama, Rigorous Facial Muscle Gymnastics & Chuvanna Thadi',
    costumeFabric: 'Massive bell-shaped crinoline skirts (Kireetam headgear, Vesham faces with Paccha green pigment)',
    musicalAccompaniment: 'Sopana Sangeetham accompanied by Chenda, Maddalam, and Cengila gongs',
    philosophy: 'Represents the Sky/Ether element (Akasha). Complete theatrical integration where narrative is conveyed entirely without speech.',
    accentColor: '#1E284A',
    history: 'Emerging in 17th-century Kerala under the patronage of the Raja of Kottarakkara, Kathakali fused classical Sanskrit drama (Koodiyattam) with martial combat arts (Kalaripayattu) and folk ritual dances (Theyyam).',
    significance: 'Embodying the Ether element (Akasha), it is a total theatre art form where mythic heroes, demons, and gods clash in cosmic morality plays under the glow of a colossal brass oil lamp (Kalivilakku).',
    historyLocalized: {
      en: 'Born from temple theater and the ancient martial art of Kalaripayattu, Kathakali transforms actors into gods and demons through hours of ritual makeup application.',
      hi: 'केरल की प्राचीन कलारिपयट्टू युद्धकला और कूडियाट्टम नाट्य परंपरा से उपजी यह शैली कई घंटों के चूट्टी (चेहरे के श्रृंगार) द्वारा नर्तक को अलौकिक पात्र में ढालती है।',
      es: 'Nacida del teatro sagrado y las artes marciales de Kalaripayattu, transforma a los intérpretes en seres cósmicos tras horas de maquillaje ritual Vesham.'
    },
    significanceLocalized: {
      en: 'Represents the Ether/Sky element (Akasha). The actor speaks entirely through 24 root mudras and extraordinary eye and facial muscle isolations (Navarasas).',
      hi: 'आकाश तत्व का प्रतीक। बिना किसी वाणी के, २४ मूल हस्त मुद्राओं और नवरसों की सूक्ष्म नेत्र-गला अभिव्यक्तियों से संपूर्ण महाकाव्य का मंचन होता है।',
      es: 'Representa el elemento Éter (Akasha). La dramaturgia se expresa sin palabras, valiéndose de 24 mudras raíz y el asombroso control de los músculos faciales y ojos.'
    },
    videoUrl: 'https://www.youtube-nocookie.com/embed/z1dM3o7k5e4?autoplay=0&rel=0&modestbranding=1',
    videoTitle: 'Kathakali Vesham: Divine Archetypes & Chenda Rhythms',
    performerName: 'Kerala Kalamandalam Troupe',
    audioTitle: 'Sopana Sangeetham with Chenda Melam',
    ragaTala: 'Raga: Puraneeru / Bhairavi • Tala: Chempada Tala (8 Beats)',
    traditionalInstruments: ['Chenda (Cylindrical percussion drum)', 'Maddalam (Barrel drum)', 'Cengila (Bronze gong)', 'Elathalam (Heavy cymbals)'],
    narration: {
      en: 'Listen to the thunderous strike of the Chenda drum heralding the entry of the hero behind the handheld curtain (Tiraseela). Every micro-movement of the pupil commands cosmic emotion.',
      hi: 'तिरशीला (हाथ के पर्दे) के पीछे से नायक के प्रवेश पर बजने वाले चेंडा ड्रम की गर्जना सुनें। पुतली की प्रत्येक सूक्ष्म गति नवरसों के ज्वार को प्रगट करती है।',
      es: 'Escuche el estruendoso tambor Chenda que anuncia la aparición del héroe tras la cortina ritual Tiraseela. Cada micro-movimiento de la mirada desata una emoción cósmica.'
    },
    primaryMudras: [
      {
        name: 'Mudrakhya (Primordial Seal)',
        meaning: 'Thumb and index fingers joined, other fingers extended like ray of light',
        symbolism: 'Cosmic origin, invocation of truth, and deep resolution',
        gestureDescription: 'The tip of the thumb and index finger join together forming a loop, remaining fingers held tense.'
      },
      {
        name: 'Kapithaka (The Elephant Apple)',
        meaning: 'Fist with thumb resting over the bent index finger',
        symbolism: 'Signifies holding weapons, kingship, restraint, and divine weapon Sudarshana',
        gestureDescription: 'Thumb is placed firmly on top of the bent index finger with fist clenched.'
      }
    ]
  },
  {
    id: 'kuchipudi',
    name: 'Kuchipudi',
    nativeName: 'కూచిపూడి / कुचिपुड़ी',
    state: 'Andhra Pradesh',
    originEra: 'c. 14th Century CE (Siddhendra Yogi)',
    mood: 'Spirited Agility, Tarangam Brass-Plate Balancing & Sparkling Vachika Abhinaya',
    costumeFabric: 'Pleated silk sari with fan pleats, decorated with golden waist belt (Oddiyanam) and floral headpiece',
    musicalAccompaniment: 'Carnatic orchestra with Mridangam, Violin, Veena, and vocal Nattuvangam',
    philosophy: 'Rooted in the Natya tradition combining pure dance (Nritta), expressive mime (Nritya), and spoken drama (Natya).',
    accentColor: '#C0392B',
    history: 'Originating in the Brahmin village of Kuchelapuram in Andhra Pradesh, Kuchipudi was codified by the saint-poet Siddhendra Yogi as an all-male dance-drama tradition devoted to Krishna, later opened to all artists and celebrated worldwide.',
    significance: 'Celebrated for its theatrical vivacity, dramatic dialogue, and the iconic Tarangam—where the dancer balances on the sharp rim of a brass plate while balancing a water pot on the head.',
    historyLocalized: {
      en: 'Conceived by saint-poet Siddhendra Yogi in Andhra Pradesh, Kuchipudi blends classical music, theatrical dialogue, and dramatic character impersonation.',
      hi: 'आंध्र प्रदेश के कुचेलापुरम गांव में संत सिद्धेंद्र योगी द्वारा प्रतिपादित, यह नृत्य नाटक, संवाद और शुद्ध शास्त्रीय पदताल का अद्भुत समन्वय है।',
      es: 'Concebida por el poeta santo Siddhendra Yogi en Andhra Pradesh, Kuchipudi entrelaza música clásica, monólogo teatral y proezas acrobáticas sagradas.'
    },
    significanceLocalized: {
      en: 'World-famous for the Tarangam climax, dancing with rhythmic precision atop the raised rim of a brass plate, symbolizing mastery over earthly illusion.',
      hi: 'पीतल की थाली के किनारों पर लयबद्ध नृत्य करने के तारंगम दृश्य के लिए विख्यात, जो सांसारिक माया पर नर्तक के आत्म-नियंत्रण का प्रतीक है।',
      es: 'Mundialmente famosa por el clímax Tarangam, bailando al compás sobre el borde elevado de un plato de bronce, simbolizando el dominio sobre la ilusión terrenal.'
    },
    videoUrl: 'https://www.youtube-nocookie.com/embed/6iB3t9S-q1A?autoplay=0&rel=0&modestbranding=1',
    videoTitle: 'Kuchipudi Tarangam: Plate Dancing Virtuosity',
    performerName: 'Raja & Radha Reddy Repertory',
    audioTitle: 'Tarangam in Raga Mohanam',
    ragaTala: 'Raga: Mohanam • Tala: Adi Tala (8 Beats)',
    traditionalInstruments: ['Mridangam', 'Carnatic Flute', 'Violin', 'Talam (Cymbals)'],
    narration: {
      en: 'Watch the rapid syncopation as the dancer steps onto the brass plate, carving rhythmic patterns while the melody of the flute soars overhead.',
      hi: 'नर्तक को पीतल की थाली के रिम पर कदम ताल करते हुए सुनें, जहाँ बांसुरी की मधुर तान के साथ पैरों की थाप अद्भुत लयबद्ध संरचना गढ़ती है।',
      es: 'Aprecie la veloz síncopa cuando el bailarín sube al plato de bronce, esculpiendo ritmos exactos mientras la flauta carnática se eleva en el aire.'
    },
    primaryMudras: [
      {
        name: 'Hamsasya (Swan’s Beak)',
        meaning: 'Index finger touches thumb gently',
        symbolism: 'Delicate flower blossoms, offering incense, painting, and poetic nuance',
        gestureDescription: 'Thumb meets the tip of the index finger while three other fingers are spread like swan plumage.'
      },
      {
        name: 'Tripataka (Three-Part Flag)',
        meaning: 'Third finger bent inward touching palm while others remain erect',
        symbolism: 'Used for crowns, lightning, tree branches, and invocation of royalty',
        gestureDescription: 'Ring finger bent inward to the palm base, remaining three fingers held vertically upright.'
      }
    ]
  },
  {
    id: 'mohiniyattam',
    name: 'Mohiniyattam',
    nativeName: 'മോഹിനിയാട്ടം / मोहिनीअट्टम',
    state: 'Kerala',
    originEra: 'c. 16th Century CE',
    mood: 'Lyrical Swaying, Golden Kasavu Silk & Gentle Waves of Vembanad Lake',
    costumeFabric: 'Pristine off-white Kasavu cotton-silk with pure gold brocade borders and jasmine floral garland',
    musicalAccompaniment: 'Sopana Sangeetham accompanied by Idakka, Maddalam, and Kuzhitalam cymbals',
    philosophy: 'The dance of Mohini, the celestial enchantress; embodies Lasya (delicate, undulating feminine grace).',
    accentColor: '#D4881A',
    history: 'Rooted in the royal courts of Travancore under Maharaja Swathi Thirunal, Mohiniyattam draws inspiration from the mythological avatar of Mohini. It was codified into an elegant classical form by Vallathol Narayana Menon at Kerala Kalamandalam.',
    significance: 'Embodying the gentle, swaying currents of the backwaters and coconut groves, Mohiniyattam avoids sharp angles in favor of circular, undulating Torso movements (Andolika).',
    historyLocalized: {
      en: 'Flourished in Travancore under Maharaja Swathi Thirunal, inspired by the mythical enchantress Mohini, celebrated for its undulating Lasya grace.',
      hi: 'त्रावणकोर के महाराजा स्वाति तिरुनाल के संरक्षण में समृद्ध, यह नृत्य मोहिनी अवतार से प्रेरित है और अपने कोमल लास्य प्रवाह के लिए जाना जाता है।',
      es: 'Floreció en Travancore bajo el mecenas Swathi Thirunal, inspirado en la mítica encantadora Mohini y célebre por su ondulante gracia Lasya.'
    },
    significanceLocalized: {
      en: 'Characterized by soft circular torso rotations mirroring ocean waves and palms, dressed exclusively in white and gold Kasavu textiles.',
      hi: 'केरल के बैकवाटर्स की लहरों और नारियल के पेड़ों की तरह लहराती शारीरिक गति, और पारंपरिक सुनहरी कसवू साड़ी इसकी पहचान है।',
      es: 'Se caracteriza por suaves rotaciones circulares del torso que evocan las olas y las palmeras, vistiendo exclusivamente telas Kasavu en blanco y oro.'
    },
    videoUrl: 'https://www.youtube-nocookie.com/embed/1_fWn-1H2pU?autoplay=0&rel=0&modestbranding=1',
    videoTitle: 'Mohiniyattam Padam: Undulating Backwater Grace',
    performerName: 'Sunanda Nair & Kerala Kalamandalam Ensembles',
    audioTitle: 'Swathi Thirunal Padam in Raga Shankarabharanam',
    ragaTala: 'Raga: Shankarabharanam • Tala: Champa Tala',
    traditionalInstruments: ['Idakka (Hourglass squeeze drum)', 'Maddalam', 'Kuzhitalam', 'Flute'],
    narration: {
      en: 'Listen to the delicate oscillation of the Idakka drum, producing vocal-like microtones that mirror the dancer’s languid, rolling eye movements and swaying spine.',
      hi: 'इडक्का वाद्य की गूंजती तरंगों को सुनें, जो नर्तकी के कोमल नयनों और लहरदार पदचाप के साथ पूर्ण सामंजस्य बनाती हैं।',
      es: 'Escuche la delicada oscilación del tambor Idakka, produciendo microtonos similares a la voz que acompañan el ondulante vaivén de la bailarina.'
    },
    primaryMudras: [
      {
        name: 'Ardhachandra (Half Moon)',
        meaning: 'Thumb opened wide forming a crescent arc with fingers',
        symbolism: 'The sacred crescent moon, evening twilight, water waves, and forehead blessing',
        gestureDescription: 'Thumb is stretched wide apart from the remaining fingers which remain pressed together.'
      },
      {
        name: 'Mukula (Flower Bud)',
        meaning: 'All five fingertips drawn gently together to a single point',
        symbolism: 'Lotus blossom bud, feeding birds, sacred contemplation, and pure essence',
        gestureDescription: 'All five fingers join together at the tips pointing inward in a graceful bud.'
      }
    ]
  }
];

export const PHILOSOPHICAL_SCHOOLS: PhilosophicalSchool[] = [
  {
    id: 'samkhya',
    name: 'Samkhya',
    sanskritName: 'साङ्ख्य',
    meaning: 'Rational Enumeration & Cosmic Dualism',
    founder: 'Sage Kapila (c. 6th Century BCE)',
    coreInquiry: 'How does consciousness interact with the material fabric of the cosmos?',
    keyPremise: 'The universe arises from the eternal interplay of Purusha (pure unattached conscious awareness) and Prakriti (dynamic primal nature comprised of three Gunas: Sattva, Rajas, and Tamas).',
    epistemology: 'Pratyaksha (direct perception), Anumana (logical inference), and Shabda (valid testimony).',
    axiom: '"As the dancer desists after displaying herself to the audience, so does Nature desist after revealing herself to the Spirit."'
  },
  {
    id: 'yoga',
    name: 'Yoga Darshana',
    sanskritName: 'योग',
    meaning: 'Direct Experiential Cessation of Mental Oscillations',
    founder: 'Sage Patanjali (c. 2nd Century BCE)',
    coreInquiry: 'How can consciousness transcend psychological distortion and achieve liberation?',
    keyPremise: 'Patanjali defines Yoga as "Chitta Vritti Nirodha" — the stilling of the fluctuations of consciousness through an eightfold path (Ashtanga: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi).',
    epistemology: 'Rigorous empirical internal psychology, meditative absorption, and somatic breath regulation.',
    axiom: '"When thoughts are stilled, the Seer abides in its own true, untouched nature."'
  },
  {
    id: 'nyaya',
    name: 'Nyaya',
    sanskritName: 'न्याय',
    meaning: 'Logical Epistemology & Rules of Dialectic Truth',
    founder: 'Sage Aksapada Gautama (c. 2nd Century BCE)',
    coreInquiry: 'What constitutes valid knowledge, and how can falsehood be systematically dismantled?',
    keyPremise: 'Pioneered the 5-step syllogism centuries before Western formal logic, asserting that suffering arises from ignorance, and ignorance dissolves under rigorous cognitive analysis.',
    epistemology: 'The 16 Padarthas (categories of reasoning), rigorous debate protocols (Vada, Jalpa, Vitanda).',
    axiom: '"Valid cognition corresponds to reality as it actually exists, free from cognitive doubt and projection."'
  },
  {
    id: 'vaisheshika',
    name: 'Vaisheshika',
    sanskritName: 'वैशेषिक',
    meaning: 'Atomic Physics & Categorical Ontology',
    founder: 'Sage Kanada (c. 6th Century BCE)',
    coreInquiry: 'What are the ultimate, indivisible constituents of the physical universe?',
    keyPremise: 'Posited the atomic theory (Parmanu), postulating that all material objects are combinations of invisible, indestructible spherical atoms combined through invisible moral force (Adrishta).',
    epistemology: 'Perception and Inference analyzing Substance (Dravya), Quality (Guna), Motion (Karma), and Inherence (Samavaya).',
    axiom: '"The material realm is composed of indivisible atoms that combine under the eternal law of cause and effect."'
  },
  {
    id: 'mimamsa',
    name: 'Purva Mimamsa',
    sanskritName: 'मीमांसा',
    meaning: 'Hermeneutics of Sacred Sound & Ethical Duty',
    founder: 'Sage Jaimini (c. 3rd Century BCE)',
    coreInquiry: 'How does acoustic vibration translate into ethical action (Dharma)?',
    keyPremise: 'Asserts the uncreated, beginningless nature of sound (Sphota) and the imperative duty of righteous conduct in alignment with cosmic rhythm.',
    epistemology: 'Detailed linguistic hermeneutics, semantic analysis of injunctions, and prescriptive jurisprudence.',
    axiom: '"Dharma is that which is characterized by command, leading directly to the ultimate welfare of existence."'
  },
  {
    id: 'vedanta',
    name: 'Advaita Vedanta',
    sanskritName: 'वेदान्त',
    meaning: 'The Culmination of Wisdom: Non-Dual Oneness',
    founder: 'Adi Shankaracharya & Badarayana',
    coreInquiry: 'Is there a fundamental boundary between the individual observer and the cosmos?',
    keyPremise: 'Proclaims "Brahman Satyam, Jagan Mithya, Jivo Brahmaiva Naparah" — The infinite ground of being is the absolute reality; the world is an experiential projection; the innermost self (Atman) is non-different from the cosmos.',
    epistemology: 'Direct intuitive self-realization (Aparokshanubhuti) supported by scriptural inquiry.',
    axiom: '"Tat Tvam Asi — Thou Art That: You are not a drop in the ocean, you are the entire ocean in a drop."'
  }
];

export const INDIAN_LANGUAGES: IndianLanguage[] = [
  {
    name: 'Sanskrit',
    nativeScript: 'संस्कृतम्',
    scriptName: 'Devanagari / Brahmi Root',
    family: 'Indo-Aryan',
    speakersCount: 'Scholarly & Liturgical (Classical Root)',
    classicalStatus: true,
    samplePhrase: 'वसुधैव कुटुम्बकम्',
    phraseEnglish: '"The entire world is one interconnected family."',
    historicalRoot: 'Oldest codified phonetic matrix (Panini’s Shiva Sutras), preserved through exact acoustic vibration.'
  },
  {
    name: 'Tamil',
    nativeScript: 'தமிழ்',
    scriptName: 'Tamil Script (Derived from Tamil-Brahmi)',
    family: 'Dravidian',
    speakersCount: '80+ Million Native Speakers',
    classicalStatus: true,
    samplePhrase: 'யாதும் ஊரே யாவரும் கேளிர்',
    phraseEnglish: '"To us all towns are one town, all men are our kin." (Poet Kaniyan Poongunranar, Sangam Era)',
    historicalRoot: 'Over 2,500 years of unbroken literary heritage documented in the Tolkappiyam and Sangam anthologies.'
  },
  {
    name: 'Telugu',
    nativeScript: 'తెలుగు',
    scriptName: 'Telugu Lipi (Rounded circular forms from palm-leaf carving)',
    family: 'Dravidian',
    speakersCount: '95+ Million Speakers',
    classicalStatus: true,
    samplePhrase: 'దేశభాషలందు తెలుగు లెస్స',
    phraseEnglish: '"Among the regional tongues, Telugu is celebrated for its sweetest musicality."',
    historicalRoot: 'Dubbed the "Italian of the East" by European travelers for words universally ending in soft vowel sounds.'
  },
  {
    name: 'Bengali',
    nativeScript: 'বাংলা',
    scriptName: 'Eastern Nagari / Bengali-Assamese',
    family: 'Indo-Aryan',
    speakersCount: '270+ Million Worldwide (7th most spoken globally)',
    classicalStatus: true,
    samplePhrase: 'চিত্ত যেথা ভয়শূন্য, উচ্চ যেথা শির',
    phraseEnglish: '"Where the mind is without fear and the head is held high." (Rabindranath Tagore)',
    historicalRoot: 'Rich Charyapada roots from 8th century Buddhist mystic poetry leading to Nobel Prize literary canon.'
  },
  {
    name: 'Kannada',
    nativeScript: 'ಕನ್ನಡ',
    scriptName: 'Kadamba / Old Kannada Script',
    family: 'Dravidian',
    speakersCount: '50+ Million Speakers',
    classicalStatus: true,
    samplePhrase: 'ಕಾಯಲೊಡನೆ ಕಾಯಕವೇ ಕೈಲಾಸ',
    phraseEnglish: '"Selfless dedicated work is itself the highest heaven." (Basavanna, Vachana Movement)',
    historicalRoot: 'Halmidi stone inscription dates to 450 CE; renowned for revolutionary 12th-century egalitarian Vachana literature.'
  },
  {
    name: 'Malayalam',
    nativeScript: 'മലയാളം',
    scriptName: 'Malayalam Script (Derived from Tigalari & Grantha)',
    family: 'Dravidian',
    speakersCount: '38+ Million Speakers',
    classicalStatus: true,
    samplePhrase: 'വിദ്യ കൊണ്ടറിയേണ്ടതറിഞ്ഞു നാം',
    phraseEnglish: '"Through illuminated learning, let us attain the wisdom that frees all beings."',
    historicalRoot: 'Distinct literary emergence around 9th century, carrying dense botanical and astronomical treatises.'
  }
];

export const FESTIVALS: Festival[] = [
  {
    id: 'diwali',
    name: 'Diwali: Deepavali',
    sanskritName: 'दीपावली',
    season: 'Autumn (Kartika Amavasya)',
    monthRange: 'October – November',
    symbolism: 'The illumination of inner knowledge over existential ignorance (Tamaso Ma Jyotirgamaya).',
    atmosphereTheme: 'diwali',
    themeColor: '#0F1221',
    accentColor: '#F4B234',
    bgGradient: 'radial-gradient(ellipse at 50% 30%, #2A1F45 0%, #0E1020 80%)',
    particleType: 'diyas',
    traditions: [
      'Lighting rows of hand-pressed terracotta earthen oil lamps (Diyas)',
      'Designing geometric Kolam / Rangoli flour floor mosaics at thresholds',
      'Lakshmi-Ganesha invocation honoring ethical prosperity and auspicious beginnings',
      'Sharing artisanal sweets made from reduced whole milk, pistachio, and saffron'
    ],
    culinaryHighlights: ['Kaju Katli', 'Besan Ladoo', 'Gulab Jamun infused with cardamom', 'Mawa Gujiya'],
    lore: 'Historically marks the coronation of justice, the return of illuminated consciousness, and the end of the agricultural harvest cycle.'
  },
  {
    id: 'holi',
    name: 'Holi: Vasantotsava',
    sanskritName: 'होलिका / वसन्तोत्सव',
    season: 'Spring Equinox (Phalguna Purnima)',
    monthRange: 'March',
    symbolism: 'The joyous renaissance of flora, breaking of social hierarchies, and triumph of earnest devotion.',
    atmosphereTheme: 'holi',
    themeColor: '#FAF4EB',
    accentColor: '#E63946',
    bgGradient: 'radial-gradient(circle at 50% 50%, #FFF5EB 0%, #FEE8D6 100%)',
    particleType: 'gulal',
    traditions: [
      'Organic mineral and petal powders (Gulal made from dried Palash flowers, turmeric, and beetroot)',
      'Holika Dahan bonfire dispelling negativity on the eve of the full moon',
      'Communal singing of Dhamar and Braj folk poetry with Dholak drums',
      'Embracing peers across community, caste, and social boundaries in collective exuberance'
    ],
    culinaryHighlights: ['Thandai with crushed almonds and fennel', 'Crisp fried Gujiya', 'Puran Poli', 'Kanji Vada'],
    lore: 'Celebrated in Sanskrit literature as Madanotsava (Festival of Love); celebrated with supreme abandon in the sacred groves of Mathura and Vrindavan.'
  },
  {
    id: 'onam',
    name: 'Onam: The Harvest of Equality',
    sanskritName: 'ഓണം',
    season: 'Late Monsoon (Chingam)',
    monthRange: 'August – September',
    symbolism: 'Honoring the legendary egalitarian golden age of King Mahabali where all beings were equal and truth prevailed.',
    atmosphereTheme: 'onam',
    themeColor: '#FAF8F2',
    accentColor: '#D4881A',
    bgGradient: 'radial-gradient(circle at 50% 40%, #FFF9EC 0%, #F5EDE0 100%)',
    particleType: 'marigold',
    traditions: [
      'Pookkalam: Intricate, concentric floral mandalas laid daily with yellow marigold and white jasmine',
      'Vallam Kali: Majestic snake boat races on the palm-fringed Pamba River with 100 oarsmen singing in unison',
      'Pulikali tiger dances and graceful Kaikottikali clap-dances around brass Nilavilakku lamps',
      'Onasadya: An elaborate 26-dish vegetarian feast served ceremoniously on pristine banana leaves'
    ],
    culinaryHighlights: ['Avial (coconut seasonal stew)', 'Palada Pradhaman', 'Olan with ash gourd', 'Kalan', 'Inji Puli ginger relish'],
    lore: 'Commemorates King Mahabali who relinquished dominion to Vamana, requesting to return once each autumn to see his citizens flourish.'
  },
  {
    id: 'durga-puja',
    name: 'Durga Puja: Sharadotsav',
    sanskritName: 'दुर्गा पूजा',
    season: 'Autumn (Ashwin Navaratri)',
    monthRange: 'September – October',
    symbolism: 'The cosmic triumph of Divine Feminine Shakti against Mahishasura; designated UNESCO Intangible Cultural Heritage.',
    atmosphereTheme: 'durga',
    themeColor: '#1E1218',
    accentColor: '#C0392B',
    bgGradient: 'radial-gradient(circle at 50% 30%, #381B26 0%, #170E14 100%)',
    particleType: 'dhunuchi',
    traditions: [
      'Sculpting monumental clay idols from holy Ganga silt and straw (Kumartuli tradition)',
      'Dhunuchi Nritya: Frenetic devotional dance with smoking earthenware censers fueled by coconut husks and camphor',
      'Rhythmic frenzy of the Dhak drums echoing through monumental artisan bamboo pavilions (Pandals)',
      'Sindoor Khela: Women adorning one another with vermilion on Dashami day celebrating sisterhood'
    ],
    culinaryHighlights: ['Khichuri Bhog with five fried vegetables (Labra)', 'Payesh rice pudding', 'Mishti Doi', 'Sandesh with date palm jaggery'],
    lore: 'More than a ritual, it is an epical ten-day public art installation festival that transforms the entire city of Kolkata into an open-air museum.'
  }
];

export const CRAFT_TRADITIONS: CraftTradition[] = [
  {
    id: 'paithani-saree',
    name: 'Paithani Tapestry Silk Weaving',
    nativeName: 'पैठणी साडी / Paithani',
    category: 'textile',
    region: 'Yeola & Paithan, Maharashtra',
    geographicalIndication: true,
    rawMaterials: ['Pure Charkha Mulberry Silk (Filature yarn)', 'Solid Sterling Silver Zari electroplated with 24-Karat Gold wire', 'Natural vegetable dyes'],
    craftTechnique: 'Ancient tapestry weave where no mechanical jacquard or punch cards are used. The master weaver manually interlocks weft threads using miniature bamboo spools (tillis), creating an identical design on both front and back.',
    heritageStory: 'Traceable to the Satavahana dynasty (c. 2nd Century BCE) of ancient Pratishthana, Paithani sarees were traded to the Roman Empire for gold. Later patronized by the Peshwas of Pune and Nizam royalty of Hyderabad as royal regalia.',
    visualHighlight: 'Opulent solid gold zari pallu with celestial peacocks (Mor), flying parrots (Popat), and kaleidoscopic lotus petals (Kamal).',
    preservationStatus: 'Protected under the Geographical Indications (GI) Act; preserved by master weaver cooperatives in Yeola.',
    artisanName: 'Vitthalrao Shinde & Shilp Guru Guild',
    artisanTitle: 'Master Weaver & Heirs of Pratishthana Loom Heritage',
    artisanImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80',
    regionIcon: '🦚',
    regionalSignificance: 'Paithan & Godavari River Basin • Capital of the Satavahanas',
    shortNarrative: {
      en: 'In the sunlit courtyards of Yeola, the rhythmic clack of wooden pit looms echoes an unbroken 2,200-year-old dialogue with gold thread. Paithani is not merely a garment; it is an heirloom tapestry of royal Maharashtra where each peacock feather on the pallu can take over six months of patient, single-thread knotting.',
      hi: 'येओला के धूप से जगमगाते आंगनों में, लकड़ी के हथकरघों की गूंज सोने के तारों के साथ २,२०० वर्ष पुरानी परंपरा को सजीव करती है। पैठणी केवल एक परिधान नहीं, अपितु महाराष्ट्र के राजघरानों की धरोहर है जहाँ पल्लू के एक-एक मोर पंख को बुनने में छह माह का अथक परिश्रम लगता है।',
      es: 'En los patios iluminados de Yeola, el rítmico chasquido de los telares de fosa revive un diálogo milenario con hilos de oro. El Paithani no es solo una prenda; es un tapiz dinástico de Maharashtra donde cada pluma de pavo real en el pallu exige más de seis meses de anudado manual.'
    },
    culturalSignificance: {
      en: 'Considered the supreme bridal blessing (Shagun) in Maharashtrian culture. The motifs embody cosmic auspiciousness: the peacock represents eternity, the parrot reflects romance and nature, and the Kalas represents divine abundance.',
      hi: 'मराठी संस्कृति में इसे सर्वोच्च वैवाहिक आशीर्वाद (शगुन) माना जाता है। इसके रूपांकन शुभता के प्रतीक हैं: मोर अमरता का, तोता प्रेम और प्रकृति का, तथा कलश समृद्धि का प्रतिनिधित्व करता है।',
      es: 'Considerado el símbolo nupcial supremo (Shagun) en la cultura maratí. Sus motivos encarnan la fortuna cósmica: el pavo real la eternidad, el loro el romance y el loto la pureza celestial.'
    },
    traditionalTechniques: {
      en: [
        'Pure Mulberry silk threads are degummed, hand-dyed in brass vats, and spun onto wooden bobbins.',
        'The warp is warped onto traditional pit looms with heavy wooden balance beams.',
        'The tapestry weft is manipulated by hand using multiple bamboo tillis (spools) without jacquard cards.',
        'Real gold-plated silver zari is packed densely with wooden reeds to achieve an impenetrable golden mirror effect.'
      ],
      hi: [
        'कच्चे रेशम को प्राकृतिक रंगों में रंगा जाता है और लकड़ी की चरखियों पर काता जाता है।',
        'हथकरघे पर ताना व्यवस्थित किया जाता है जहाँ कारीगर बिना किसी मशीनी कार्ड के बुनाई करते हैं।',
        'बांस की छोटी तीलियों (तिल्ली) से पल्लू के डिजाइनों को धागा दर धागा हाथ से गूंथा जाता है।',
        'शुद्ध सोने के पानी चढ़े चांदी के तारों को घनी बुनाई से आईने जैसी चमक दी जाती है।'
      ],
      es: [
        'Los hilos de seda de morera pura se tiñen a mano en calderos de cobre y se devanan.',
        'La urdimbre se monta en telares de fosa tradicionales con contrapesos de madera noble.',
        'El tejido de tapicería se entrelaza a mano con pequeñas canillas de bambú sin tarjetas mecánicas.',
        'El hilo zari de plata bañado en oro de 24k se densifica para forjar un efecto de espejo dorado.'
      ]
    },
    artisanQuote: {
      en: '"A machine can weave a pattern in hours, but only human breath and heartbeat can infuse life into the golden peacock of a Paithani."',
      hi: '"मशीन कुछ घंटों में कपड़ा तैयार कर सकती है, परंतु पैठणी के सुनहरे मोर में प्राण केवल कारीगर की सांसें और धैर्य ही फूंक सकते हैं।"',
      es: '"Una máquina puede tejer un patrón en horas, pero solo el aliento y la paciencia humana infunden vida al pavo real dorado del Paithani."'
    }
  },
  {
    id: 'blue-pottery-jaipur',
    name: 'Jaipur Turquoise Blue Pottery',
    nativeName: 'जयपुर ब्लू पॉटरी / Blue Pottery',
    category: 'pottery',
    region: 'Jaipur, Rajasthan',
    geographicalIndication: true,
    rawMaterials: ['Ground Quartz stone powder', 'Crushed recycled cullet glass', 'Fuller’s Earth (Multani Mitti)', 'Natural Katira gum & Sajji (natural soda)'],
    craftTechnique: 'The only ceramic craft in the world that uses zero clay. The dough is molded by hand in open plaster molds, rubbed with river pebbles, hand-painted with cobalt and copper oxide brushes, and glazed in a single low-heat wood kiln firing.',
    heritageStory: 'Originating from Turko-Persian traditions brought to Delhi and brought to Jaipur in the 19th century by Maharaja Sawai Ram Singh II after witnessing kite flyers defeat royal artisans using secret glass-quartz coats. Revival spearheaded by master artist Kripal Singh Shekhawat.',
    visualHighlight: 'Hypnotic cobalt blue and turquoise glazes with delicate Mughal floral arabesques and Rajasthani wildlife silhouettes.',
    preservationStatus: 'GI tagged; patronized by the Sawai Ram Singh Shilp Sansthan and heritage ateliers in Kot Jewar.',
    artisanName: 'Kripal Kumbh Guild & Ram Gopal Saini',
    artisanTitle: 'Master Ceramist & Shilp Guru Awardee',
    artisanImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80',
    regionIcon: '🏺',
    regionalSignificance: 'Pink City of Jaipur • Foothills of Amer Citadel, Rajasthan',
    shortNarrative: {
      en: 'Unlike traditional pottery born of mud and river silt, Jaipur Blue Pottery is born of pure crushed stone and glass. In the royal ateliers of Rajasthan, artisans transform Egyptian faience recipes into celestial turquoise vessels that never crack or absorb moisture, retaining the azure cool of desert palace courtyards.',
      hi: 'मिट्टी और गाद से बनने वाले पारंपरिक बर्तनों के विपरीत, जयपुर की ब्लू पॉटरी शुद्ध पिसे हुए क्वार्ट्ज पत्थर और कांच से जन्म लेती है। राजस्थान की कार्यशालाओं में कारीगर फारसी और तुर्क शैलियों को मिलाकर ऐसे फिरोजी बर्तन बनाते हैं जो कभी नमी नहीं सोखते और मरुस्थल में भी शीतलता का आभास कराते हैं।',
      es: 'A diferencia de la alfarería nacida del barro, la Cerámica Azul de Jaipur nace del cuarzo pulverizado y el vidrio reciclado. En los talleres reales de Rajastán, los artesanos transforman antiguas fórmulas en recipientes turquesas que jamás absorben humedad, evocando la frescura de los palacios del desierto.'
    },
    culturalSignificance: {
      en: 'Synthesizes Persian geometric motifs with Hindu temple iconography. The cool cobalt color was traditionally believed to repel the scorching summer heat of Rajasthan and purify stored liquids.',
      hi: 'यह फारसी ज्यामितीय डिजाइनों और भारतीय मंदिर कला का अनूठा संगम है। माना जाता था कि इसका गहरा नीला और फिरोजा रंग राजस्थान की भीषण ग्रीष्म ऋतु में शीतलता प्रदान करता है।',
      es: 'Fusiona los arabescos persas con la iconografía arquitectónica de Rajastán. Se creía que el tono cobalto alejaba el calor abrasador del desierto y purificaba los líquidos.'
    },
    traditionalTechniques: {
      en: [
        'Quartz stones, glass cullet, and Multani Mitti are pulverized and mixed with water and Katira gum to form a supple dough.',
        'The dough is pressed into two-part plaster molds and filled with wood ash to retain shape while drying.',
        'Surfaces are planed smooth with steel knives and rubbed with smooth riverbed pebbles.',
        'Artisans freehand-paint motifs using handmade squirrel-hair brushes with cobalt oxide (dark blue) and copper oxide (turquoise).',
        'Coated with a lead-free silicate glaze and fired once at 800°C–850°C in traditional wood kilns.'
      ],
      hi: [
        'क्वार्ट्ज पत्थर, कांच और मुल्तानी मिट्टी को पीसकर गोंद के साथ आटा तैयार किया जाता है।',
        'इस मिश्रण को प्लास्टर के सांचों में दबाकर राख भरकर धूप में सुखाया जाता है।',
        'सूखने के बाद सतह को नदी के गोल पत्थरों से घिसकर शीशे जैसा चिकना किया जाता है।',
        'कोबाल्ट और तांबे के प्राकृतिक रंगों से गिलहरी के बालों वाली तूलिका से सुंदर बेल-बूटे बनाए जाते हैं।',
        'पारंपरिक भट्टी में ८०० से ८५० डिग्री पर एक ही बार में पकाकर कांच जैसी चमक प्राप्त की जाती है।'
      ],
      es: [
        'Se pulveriza piedra de cuarzo y vidrio mezclándolos con goma natural para formar una pasta dúctil.',
        'La masa se prensa a mano en moldes de yeso y se rellena de ceniza para mantener su volumen.',
        'La superficie se alisa meticulosamente frotándola con cantos rodados de río.',
        'Los motivos se pintan a pulso con pinceles de pelo de ardilla y óxidos de cobalto y cobre.',
        'Se recubre con barniz de silicato y se cuece una sola vez en hornos de leña a 850°C.'
      ]
    },
    artisanQuote: {
      en: '"We do not dig clay from the earth; we gather starlight from quartz and capture the sky inside a single blue flower."',
      hi: '"हम मिट्टी नहीं खोदते; हम क्वार्ट्ज के पत्थरों से तारों की चमक इकट्ठा करते हैं और एक नीले फूल में पूरे आसमान को कैद कर देते हैं।"',
      es: '"Nosotros no extraemos lodo; recolectamos la luz estelar del cuarzo y atrapamos el cielo entero dentro de una flor azul."'
    }
  },
  {
    id: 'kanjeevaram-silk',
    name: 'Kanjeevaram Korvai Silk Weaving',
    nativeName: 'காஞ்சிபுரம் பட்டு / Kanchipuram Silk',
    category: 'textile',
    region: 'Kanchipuram, Tamil Nadu',
    geographicalIndication: true,
    rawMaterials: ['3-ply Mulberry Silk (warp & weft)', 'Pure Silver Zari wound with 24k electroplated Gold thread'],
    craftTechnique: 'The legendary "Korvai" interlocking technique where the border and body are woven separately on pit looms and interlocked by two master artisans working synchronously with three shuttles.',
    heritageStory: 'Traceable to the Chola dynasty, Kanjeevaram weavers claim descent from Sage Markandeya, the mythical weaver of the gods who wove lotus fiber into celestial garments.',
    visualHighlight: 'Temple border gopuram triangles (Malli moggu), peacock (Mayil), and celestial chariot wheel motifs.',
    preservationStatus: 'Protected under Geographical Indication Act; preserved by master weaver cooperatives in temple towns.',
    artisanName: 'Kuppuswamy Mudaliar & Society',
    artisanTitle: 'Master Weaver & Chola Temple Loom Guardian',
    artisanImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    regionIcon: '🛕',
    regionalSignificance: 'Temple City of Kanchipuram • Palar River Valley, Tamil Nadu',
    shortNarrative: {
      en: 'In the ancient City of a Thousand Temples, silk weaving is an act of liturgical devotion. The Korvai technique requires two weavers sitting side by side on a pit loom, their shuttles criss-crossing in telepathic rhythm to join contrasting borders so tightly that the fabric will tear before the seam gives way.',
      hi: 'हजार मंदिरों के प्राचीन नगर कांचीपुरम में रेशम बुनाई एक अनुष्ठानिक साधना है। कोरवई तकनीक में दो बुनकर गड्ढे वाले करघे पर साथ बैठकर तीन शटल चलाते हैं, जिससे पल्लू और बॉर्डर का जोड़ इतना सुदृढ़ बनता है कि कपड़ा फट सकता है पर जोड़ कभी नहीं खुलता।',
      es: 'En la milenaria ciudad de los mil templos, tejer seda es una devoción litúrgica. La técnica Korvai requiere dos maestros sentados hombro con hombro en el telar, cruzando lanzaderas con sincronía perfecta para fundir los bordes con tal fuerza que la tela cedería antes que la unión.'
    },
    culturalSignificance: {
      en: 'The definitive attire for south Indian brides, infused with blessings of goddess Kamakshi. The triangular temple borders (Gopuram) represent the sacred ascent of consciousness.',
      hi: 'दक्षिण भारतीय दुल्हनों का पारंपरिक परिधान, जो देवी कामाक्षी के आशीर्वाद का प्रतीक है। इसके त्रिकोणीय मंदिर बॉर्डर चेतना के आध्यात्मिक आरोहण को दर्शाते हैं।',
      es: 'La prenda nupcial por excelencia del sur de la India. Sus bordes triangulares Gopuram simbolizan el ascenso espiritual de la conciencia hacia la divinidad.'
    },
    traditionalTechniques: {
      en: [
        'Three-ply twisted mulberry silk is washed and steeped in rice starch for tensile durability.',
        'Warp threads are tied to stone weights inside the pit loom chamber.',
        'Two weavers operate three shuttles simultaneously to weave body and border with distinct colors.',
        'Intricate temple borders are interlocking-stitched using the Petni hand-grafting method.'
      ],
      hi: [
        'तीन परतों वाले मजबूत रेशम को चावल के मांड में भिगोकर टिकाऊ बनाया जाता है।',
        'करघे के गड्ढे में भारी पत्थरों के सहारे तानों को संतुलित खिंचाव दिया जाता है।',
        'दो कारीगर एक साथ तीन शटल चलाकर बॉर्डर और मुख्य भाग को अलग-अलग रंगों में बुनते हैं।',
        'पेटनी पद्धति द्वारा बॉर्डर के रूपांकनों को आपस में मजबूती से गूंथा जाता है।'
      ],
      es: [
        'La seda de morera de tres hebras se baña en almidón de arroz para máxima resistencia.',
        'Los hilos de urdimbre se contrapesan con rocas en el foso del telar tradicional.',
        'Dos tejedores operan tres lanzaderas a la vez para entrelazar colores contrastantes.',
        'Los templos triangulares se unen con la técnica ancestral Petni de costura oculta.'
      ]
    },
    artisanQuote: {
      en: '"When two weavers move their shuttles in Korvai, our hands become the two hands of God weaving earth and sky into a single seam."',
      hi: '"जब दो बुनकर कोरवई में शटल चलाते हैं, तो हमारे हाथ ईश्वर के उन दो हाथों जैसे बन जाते हैं जो धरती और आकाश को एक धागे में पिरोते हैं।"',
      es: '"Cuando dos tejedores mueven las lanzaderas en Korvai, nuestras manos se convierten en las manos divinas que unen la tierra y el cielo en un solo tejido."'
    }
  },
  {
    id: 'khurja-pottery',
    name: 'Terracotta & Khurja Ceramic Glazes',
    nativeName: 'खुर्जा मिट्टी के बर्तन / Khurja Ceramics',
    category: 'pottery',
    region: 'Khurja & Gorakhpur, Uttar Pradesh',
    geographicalIndication: true,
    rawMaterials: ['Riverbed alluvial clay', 'Quartz mineral sand', 'Natural cobalt oxide & copper slip glazes'],
    craftTechnique: 'High-temperature reduction firing in wood-burning kilns, utilizing manual potters wheels rotated with wooden poles to shape graceful earthen vessels.',
    heritageStory: 'With an unbroken continuum from Harappan kiln practices through medieval court ceramics, pottery in India honors Prithvi (Earth) and Agni (Fire) transforming clay into living utility.',
    visualHighlight: 'Hand-painted turquoise floral vines, deep earthen terracotta patina, and unglazed porous cooling vessels (Surahi).',
    preservationStatus: 'Active artisan clusters supported by specialized ceramic design academies.',
    artisanName: 'Munshi Ram Prajapati & Guild',
    artisanTitle: 'Master Potter & Khurja Ceramic Guild Senior',
    artisanImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    regionIcon: '🪔',
    regionalSignificance: 'Potters’ Hub of Khurja • Indo-Gangetic Plains, Uttar Pradesh',
    shortNarrative: {
      en: 'On the sacred plains between the Ganga and Yamuna, the potter’s wheel has spun for five millennia without pause. Khurja is India’s pottery capital, where medieval potters from Timur’s court wedded Central Asian glazes with local river clay, creating glazed tableware and storage vessels that withstand centuries of seasonal weather.',
      hi: 'गंगा और यमुना के पावन दोआब में कुम्हार का चाक पांच हजार वर्षों से निरंतर घूम रहा है। खुर्जा भारत की सिरेमिक राजधानी है, जहाँ तैमूर के दरबार से आए शिल्पकारों ने गंगा की उपजाऊ मिट्टी के साथ फारसी ग्लेज़ का ऐसा संगम किया जो पीढ़ियों तक अटूट रहता है।',
      es: 'En las llanuras sagradas entre el Ganges y el Yamuna, la rueda del alfarero ha girado durante cinco milenios. Khurja es la capital de la cerámica india, donde alfareros medievales fusionaron vidriados centroasiáticos con arcilla fluvial para crear piezas eternas.'
    },
    culturalSignificance: {
      en: 'Embodying the five primordial elements (Pancha Bhoota), terracotta vessels connect modern urban life directly to Mother Earth (Prithvi). Used for cooling drinking water and festive rituals.',
      hi: 'पंचमहाभूतों का जीवंत प्रतीक। मिट्टी के घड़े और सुराही आधुनिक जीवन को सीधे पृथ्वी तत्व से जोड़ते हैं और गर्मियों में प्राकृतिक रूप से जल को शीतल व पाचक बनाए रखते हैं।',
      es: 'Encarna los cinco elementos primordiales (Pancha Bhoota). Las vasijas de terracota conectan la vida con la Madre Tierra, manteniendo el agua fresca de forma natural.'
    },
    traditionalTechniques: {
      en: [
        'Clay dug from riverbeds is soaked, foot-kneaded for hours, and de-aired by hand.',
        'Spun on heavy stone wheels propelled by wooden poles to achieve symmetric balance.',
        'Burnished with smooth seeds to close pores before applying natural mineral glazes.',
        'Fired in traditional multistoried brick kilns over dried cow-dung and acacia wood.'
      ],
      hi: [
        'नदी तलछट की मिट्टी को पानी में भिगोकर पैरों से गूंथा जाता है ताकि हवा के बुलबुले निकल जाएं।',
        'लकड़ी के डंडे से घुमाए जाने वाले भारी चाक पर हाथों के संतुलन से आकार दिया जाता है।',
        'प्राकृतिक खनिज रंगों और ग्लेज़ से हाथ द्वारा बेल-बूटे बनाए जाते हैं।',
        'पारंपरिक ईंटों की भट्टियों में बबूल की लकड़ी और उपलों की आंच पर पकाया जाता है।'
      ],
      es: [
        'La arcilla fluvial se remoja, se amasa con los pies y se desairea pacientemente a mano.',
        'Se modela en pesadas ruedas de piedra impulsadas con varas de madera.',
        'Se pule con semillas lisas antes de aplicar esmaltes minerales a pincel.',
        'Se hornea en hornos de ladrillo con leña de acacia para lograr un vidriado perfecto.'
      ]
    },
    artisanQuote: {
      en: '"The clay asks only for your complete presence; if your mind wanders for a single second, the pot on the wheel collapses back to earth."',
      hi: '"मिट्टी केवल आपकी पूर्ण एकाग्रता मांगती है; यदि एक क्षण के लिए भी ध्यान भटका, तो चाक पर बनता घड़ा पुनः मिट्टी में मिल जाता है।"',
      es: '"La arcilla solo pide tu presencia absoluta; si la mente divaga un instante, la vasija se derrumba y vuelve a ser polvo."'
    }
  },
  {
    id: 'dhokra-bronze',
    name: 'Dhokra Lost-Wax Bell Metalwork',
    nativeName: 'ढोकरा धातुशिल्प / Dhokra Art',
    category: 'metalwork',
    region: 'Bastar (Chhattisgarh) & Bankura (West Bengal)',
    geographicalIndication: true,
    rawMaterials: ['Beeswax cords', 'Scrap brass/bronze alloy', 'Clay core with river silt and rice husk binding'],
    craftTechnique: 'Non-ferrous metal casting using the cire perdue (lost-wax) technique unchanged since the Mohenjo-Daro Dancing Girl 4,000 years ago. Delicate wax threads are hand-coiled over clay cores before baking and molten metal infusion.',
    heritageStory: 'Practiced by the Dhokra Damar nomadic tribes who celebrate the organic silhouettes of wild elephants, horned bulls, tribal musicians, and forest deities.',
    visualHighlight: 'Distinctive open-work lattice mesh texture created by individual beeswax thread windings.',
    preservationStatus: 'National Award-winning tribal master craft, prized in international contemporary sculpture collections.',
    artisanName: 'Sukhdev Kashyap & Tribal Collective',
    artisanTitle: 'National Award Master Sculptor & Ghadwa Elder',
    artisanImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    regionIcon: '🐘',
    regionalSignificance: 'Bastar Forest Heartland • Dandakaranya Forests, Chhattisgarh',
    shortNarrative: {
      en: 'In the deep sal forests of Bastar, Dhokra artisans practice the oldest continuous metallurgy known to humankind. Every sculpture begins with pure beeswax extruded into slender threads, wrapped meticulously around a baked clay core, and buried under river mud before molten bell metal burns the wax away, immortalizing the tribal deities in solid bronze.',
      hi: 'बस्तर के घने साल वनों में, ढोकरा कारीगर मानव इतिहास की प्राचीनतम धातु ढलाई परंपरा को संजोए हुए हैं। प्रत्येक मूर्ति मधुमक्खी के मोम के तारों से मिट्टी के सांचे पर लपेटकर बनाई जाती है। जब पिघला हुआ कांस्य मोम की जगह ले लेता है, तो वन देवताओं की कालजयी प्रतिमाएं उभरती हैं।',
      es: 'En los bosques de Bastar, los artesanos Dhokra practican la metalurgia viva más antigua del planeta. Cada escultura nace de finos hilos de cera de abejas enrollados sobre un núcleo de arcilla, que luego el metal fundido sustituye para eternizar figuras sagradas.'
    },
    culturalSignificance: {
      en: 'Direct stylistic descendant of the 4,500-year-old Dancing Girl of Mohenjo-daro. The artifacts serve as animist totems, honoring tree spirits, horned deer, and ancestor protectors.',
      hi: 'यह मोहनजोदड़ो की ४,५०० वर्ष पुरानी "नर्तकी" की प्रत्यक्ष वंशज है। ये कलाकृतियां वनवासियों के लिए प्रकृति, ग्राम देवताओं और पूर्वजों के सम्मान का प्रतीक हैं।',
      es: 'Descendiente directa de la "Bailarina de Mohenjo-daro" de hace 4.500 años. Estas esculturas funcionan como tótems sagrados dedicados a los espíritus del bosque.'
    },
    traditionalTechniques: {
      en: [
        'Clay core is shaped from ant-hill earth, river silt, and charred rice husk.',
        'Wild beeswax mixed with tree dammar resin is extruded through wooden presses into threads.',
        'Threads are coiled over the core to create facial features, jewellery, and ribbed body textures.',
        'Encased in thick clay slip with pouring funnels and baked until wax drains out.',
        'Molten scrap brass and bronze is poured into the cavity, cooled, and chipped free of clay.'
      ],
      hi: [
        'बांबी की मिट्टी और धान की भूसी से मूर्ति का आंतरिक ढांचा गढ़ा जाता है।',
        'मधुमक्खी के मोम और पेड़ के राल को लकड़ी की छलनी से दबाकर पतले तार बनाए जाते हैं।',
        'मोम के तारों को मिट्टी के सांचे पर लपेटकर आभूषण, मुखाकृति और वस्त्र बनाए जाते हैं।',
        'मिट्टी की दोहरी परत चढ़ाकर भट्ठी में तपाया जाता है जिससे मोम पिघलकर बाहर निकल जाए।',
        'पिघला हुआ पीतल और कांसा सांचे में भरा जाता है और ठंडा होने पर मूर्ति को निखारा जाता है।'
      ],
      es: [
        'El núcleo se moldea con tierra de termiteros, limo de río y cascarilla de arroz.',
        'La cera silvestre se mezcla con resina de árbol y se prensa en finos filamentos.',
        'Los filamentos se enrollan a mano sobre la arcilla para formar los relieves y rostros.',
        'Se cubre con capas de barro con canales de colada y se calienta para drenar la cera.',
        'Se vierte el bronce fundido en el hueco resultante y al enfriarse se pule a mano.'
      ]
    },
    artisanQuote: {
      en: '"Each Dhokra piece is born only once; the clay mold must be broken to liberate the metal. There can never be a duplicate in this world."',
      hi: '"प्रत्येक ढोकरा प्रतिमा केवल एक बार जन्म लेती है; धातु को मुक्त करने के लिए मिट्टी का सांचा तोड़ना ही पड़ता है। पूरे संसार में इसकी कोई दूसरी प्रति नहीं हो सकती।"',
      es: '"Cada pieza Dhokra nace una sola vez; el molde de arcilla debe romperse para liberar el bronce. Jamás existirá un duplicado en este mundo."'
    }
  },
  {
    id: 'bidriware-metal',
    name: 'Bidriware Silver Inlay on Zinc-Copper',
    nativeName: 'बिद्रीवेयर शिल्प / Bidriware',
    category: 'metalwork',
    region: 'Bidar, Karnataka',
    geographicalIndication: true,
    rawMaterials: ['Zinc-Copper alloy (16:1 ratio)', 'Pure silver wire & foil (99.9%)', 'Centuries-old fort soil containing special nitrates'],
    craftTechnique: 'Cast zinc vessels are engraved with fine steel chisels, hammered with 99.9% pure silver inlay, and finally treated with a boiling paste of centuries-old Bidar Fort soil, which oxidizes the zinc to velvet black while leaving the silver brilliant white.',
    heritageStory: 'Developed in the 14th century Bahmani Sultanate, blending Persian floral arabesques with native Deccan geometry.',
    visualHighlight: 'Mesmerizing contrast between deep matte obsidian-black metal and luminous silver vines (Tarkashi).',
    preservationStatus: 'GI tagged; master artisans continue heirloom inlay in old city ateliers.',
    artisanName: 'Mohammed Rauf & Guild',
    artisanTitle: 'Master Craftsman & Presidential Awardee',
    artisanImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    regionIcon: '⚔️',
    regionalSignificance: 'Historic Fortress of Bidar • Deccan Plateau, Karnataka',
    shortNarrative: {
      en: 'In the medieval fort city of Bidar, a miraculous alchemical process occurs: when polished silver is inlaid into zinc alloy, artisans dip the entire piece into boiling black mud collected from the ancient fortress courtyards. The soil’s rare nitrates react chemically to turn the zinc body pitch-black, while the silver inlay shines with brilliant celestial light.',
      hi: 'बीदर के ऐतिहासिक किले में एक चमत्कारी रासायनिक प्रक्रिया संपन्न होती है: जब जस्ते की धातु पर चांदी के तारों की नक्काशी की जाती है, तो उसे किले की सदियों पुरानी मिट्टी के घोल में उबाला जाता है। यह मिट्टी जस्ते को मखमली काला कर देती है जबकि चांदी तारों जैसी चमकने लगती है।',
      es: 'En la fortaleza medieval de Bidar ocurre una alquimia fascinante: tras incrustar plata pura en una aleación de zinc, la pieza se sumerge en barro hirviendo recogido del antiguo castillo. La tierra oxida el zinc hasta un negro azabache mientras la plata brilla intensamente.'
    },
    culturalSignificance: {
      en: 'Patronized by sultans and kings as prestige diplomatic gifts, embodying the Deccani synthesis of Persian refinement and Indian botanical geometry.',
      hi: 'दक्कन के सुल्तानों द्वारा इसे राजकीय उपहारों के रूप में प्रदान किया जाता था। यह फारसी नफासत और भारतीय वनस्पतिक ज्यामिति का उत्कृष्ट समन्वय है।',
      es: 'Apreciado por sultanes y reyes como obsequio diplomático de prestigio, encarnando la síntesis entre el arte persa y la botánica india.'
    },
    traditionalTechniques: {
      en: [
        'Vessel is sand-cast using sixteen parts zinc to one part copper for malleability.',
        'A temporary copper sulphate wash darkens the surface so artisans can scribe delicate patterns.',
        'Master engravers chisel fine grooves into the metal using hardened steel styluses.',
        'Pure silver wire or sheets are tapped gently into the grooves with wooden mallets.',
        'The vessel is boiled in Bidar fort soil paste, turning the zinc velvet-black while silver remains untouched.'
      ],
      hi: [
        '१६ भाग जस्ता और १ भाग तांबे के मिश्रण से बर्तन को सांचे में ढाला जाता है।',
        'सतह पर कॉपर सल्फेट लगाकर अस्थायी रूप से काला किया जाता है ताकि रेखाएं साफ दिखें।',
        'कारीगर छेनी और हथौड़ी से बारीक खांचे तराशते हैं।',
        'शुद्ध चांदी के तारों को इन खांचों में सावधानी से ठोंककर बैठाया जाता है।',
        'किले की मिट्टी और अमोनियम क्लोराइड के गर्म घोल में उबालकर धातु को स्थायी काला रंग दिया जाता है।'
      ],
      es: [
        'La pieza se funde en arena con dieciséis partes de zinc por una de cobre.',
        'Se oscurece temporalmente la superficie para trazar los minuciosos arabescos.',
        'Los maestros cinceladores labran ranuras con estiletes de acero templado.',
        'Se incrusta hilo de plata pura al 99.9% golpeándolo con mazos de madera.',
        'Se hierve en una pasta de tierra del fuerte de Bidar para lograr el fondo negro aterciopelado.'
      ]
    },
    artisanQuote: {
      en: '"Without the sacred soil of Bidar Fort, our silver would just be white on gray. The earth herself breathes the night sky into our art."',
      hi: '"बीदर किले की पवित्र मिट्टी के बिना हमारी चांदी बेजान रह जाती। यह धरती स्वयं हमारे शिल्प में तारों भरे आकाश का अंधकार भर देती है।"',
      es: '"Sin la tierra sagrada del fuerte de Bidar, nuestra plata no tendría contraste. Es la propia tierra la que regala el cielo nocturno a nuestro arte."'
    }
  },
  {
    id: 'madhubani-painting',
    name: 'Madhubani Mithila Folk Painting',
    nativeName: 'मधुबनी मिथिला चित्रकला / Madhubani Art',
    category: 'painting',
    region: 'Mithila & Madhubani, Bihar',
    geographicalIndication: true,
    rawMaterials: ['Handmade bamboo reed pens (Nibhaha)', 'Natural plant pigments (turmeric, indigo, soot, marigold)', 'Handmade cotton-rag paper treated with cow dung'],
    craftTechnique: 'Executed entirely freehand without rulers or compasses, using matchsticks and bamboo twigs. Intricate double-line borders are filled with cross-hatching (Kachni) and solid vibrant colors (Bharni).',
    heritageStory: 'According to the Ramayana, King Janaka commissioned artists to paint the town of Mithila for the wedding of Rama and Sita. Traditionally painted by women on mud-plastered walls of wedding chambers (Kohbar).',
    visualHighlight: 'Stylized fish (fertility), lotus flowers, sacred peepal leaves, and mythological episodes with large almond-shaped eyes.',
    preservationStatus: 'GI certified; practiced in world-famous artisan hamlets like Ranti and Jitwarpur.',
    artisanName: 'Baua Devi & Mithila Collective',
    artisanTitle: 'National Awardee & Padmashree Folk Artist',
    artisanImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    regionIcon: '🌿',
    regionalSignificance: 'Sacred Region of Mithila • Terai Plains, Northern Bihar',
    shortNarrative: {
      en: 'For generations, women in the villages of Mithila have transformed plain mud walls into sacred cosmological mandalas. Using crushed turmeric for yellow, soot for black, and indigo for midnight blue, they draw divine unions and fertility symbols using single bamboo twigs, leaving not an inch of negative space unadorned.',
      hi: 'मिथिला के गांवों में महिलाएं पीढ़ियों से मिट्टी की कच्ची दीवारों को अलौकिक आलेखनों में बदलती आई हैं। हल्दी, काजल और नील के प्राकृतिक रंगों को बांस की सींकों से उकेरते हुए वे विवाह मंडपों में जीवन, प्रकृति और देवताओं की ऐसी छवियां बनाती हैं जिनमें एक इंच भी खाली नहीं छोड़ा जाता।',
      es: 'Durante generaciones, las mujeres de Mithila han convertido paredes de barro en mandalas sagrados. Con tintes de cúrcuma, hollín e índigo aplicados con varitas de bambú, pintan historias de fertilidad y divinidad sin dejar un solo centímetro sin ornamentar.'
    },
    culturalSignificance: {
      en: 'A matrilineal ritual art form passed from mothers to daughters. The motifs celebrate agricultural fertility, celestial bodies, and cosmic harmony between human life and nature.',
      hi: 'माताओं से बेटियों तक पहुंचने वाली मातृसत्तात्मक परंपरा। इसके चित्र प्रकृति और मनुष्य के बीच अखंड संबंध, सौभाग्य और पंचतत्वों की वंदना करते हैं।',
      es: 'Una tradición artística matrilineal transmitida de madres a hijas. Sus motivos celebran la fertilidad de la tierra, los astros celestes y la armonía entre el ser humano y el cosmos.'
    },
    traditionalTechniques: {
      en: [
        'Paper or mud wall is primed with a wash of cow-dung and multani clay for an antiseptic base.',
        'Bamboo twigs wrapped with cotton swabs serve as traditional pens.',
        'Soot from kerosene lamps mixed with gum water produces indelible pitch-black outlines.',
        'Colors are ground from crushed aparajita flowers, marigold petals, and turmeric paste.',
        'Patterns are filled with minute geometric hatching (Kachni) and rich fills (Bharni).'
      ],
      hi: [
        'कागज या दीवार पर गोबर और मुल्तानी मिट्टी का लेप लगाकर प्राकृतिक आधार तैयार किया जाता है।',
        'बांस की बारीक सींक में रुई लपेटकर कलम बनाई जाती है।',
        'काजल और बबूल के गोंद से पक्की काली आउटलाइन खींची जाती है।',
        'अपराजिता, गेंदे के फूल और हल्दी से चमकीले प्राकृतिक रंग बनाए जाते हैं।',
        'कचनी (बारीक रेखाएं) और भरनी (रंग भराव) शैलियों से चित्रों को सजीव किया जाता है।'
      ],
      es: [
        'El soporte se prepara con una fina capa de arcilla y extractos naturales desinfectantes.',
        'Finas ramitas de bambú envueltas en algodón sirven como plumas de dibujo.',
        'El hollín de lámparas mezclado con goma vegetal genera los trazos negros indelebles.',
        'Los colores se extraen machacando pétalos de cempasúchil, cúrcuma e índigo.',
        'Se rellenan con tramas geométricas Kachni y campos cromáticos vivos Bharni.'
      ]
    },
    artisanQuote: {
      en: '"In Mithila, we do not simply paint; our brushes sing prayers to the trees, the rivers, and the birds to protect our homes."',
      hi: '"मिथिला में हम केवल चित्र नहीं बनाते; हमारी तूलिका पेड़ों, नदियों और पक्षियों से हमारे घरों की रक्षा की प्रार्थना करती है।"',
      es: '"En Mithila no nos limitamos a pintar; nuestros pinceles cantan plegarias a los árboles, ríos y aves para bendecir nuestros hogares."'
    }
  }
];

export const SPICE_PROFILES: SpiceProfile[] = [
  {
    id: 'saffron',
    englishName: 'Kashmiri Saffron (Kesar)',
    sanskritName: 'कुङ्कुम (Kumkuma)',
    hindiName: 'केसर',
    botanicalFamily: 'Crocus sativus',
    primaryRasa: 'Tikta (Bitter)',
    elementalComposition: 'Fire & Air (Tejas & Vayu)',
    healingProperties: 'Potent cellular antioxidant, mood regulator (Sattvic stimulant), and skin radiance elixir.',
    flavorNotes: 'Warm honeyed hay, metallic earthiness, bittersweet floral resonance.',
    culinaryRole: 'The crown jewel of Kashmiri Wazwan, royal biryanis, and festive milk confections.',
    iconSymbol: 'Flower'
  },
  {
    id: 'cardamom',
    englishName: 'Malabar Green Cardamom',
    sanskritName: 'एला (Ela)',
    hindiName: 'हरी इलायची',
    botanicalFamily: 'Elettaria cardamomum',
    primaryRasa: 'Madhura (Sweet)',
    elementalComposition: 'Water & Earth (Jala & Prithvi)',
    healingProperties: 'Stimulates digestive fire (Agni), purifies breath, balances Tridosha.',
    flavorNotes: 'Intense herbal eucalyptus, citrus camphor, warm sweet floral nuance.',
    culinaryRole: 'Essential in Chai masala, fragrant basmati pilafs, and desserts like Phirni and Kheer.',
    iconSymbol: 'Sparkles'
  },
  {
    id: 'star-anise',
    englishName: 'Star Anise (Chakra Phool)',
    sanskritName: 'तक्कोल (Takkola)',
    hindiName: 'चक्र फूल',
    botanicalFamily: 'Illicium verum',
    primaryRasa: 'Katu (Pungent)',
    elementalComposition: 'Ether & Air (Akasha & Vayu)',
    healingProperties: 'Carminative, antimicrobial, relieves respiratory congestion.',
    flavorNotes: 'Licorice sharpness, dark sweet woodiness, warm spicy undertones.',
    culinaryRole: 'Signature aromatic base in Chettinad gravies and slow-simmered Awadhi meat broths.',
    iconSymbol: 'Sun'
  },
  {
    id: 'turmeric',
    englishName: 'Golden Lakadong Turmeric',
    sanskritName: 'हरिद्रा (Haridra)',
    hindiName: 'हल्दी',
    botanicalFamily: 'Curcuma longa',
    primaryRasa: 'Tikta (Bitter)',
    elementalComposition: 'Earth & Fire (Prithvi & Agni)',
    healingProperties: 'Contains 7-12% therapeutic curcumin; sovereign anti-inflammatory and antiseptic.',
    flavorNotes: 'Deep earthy warmth, peppery musky bitterness, vibrant sun-gold hue.',
    culinaryRole: 'The sacred foundational pigment and preservative in virtually all Indian tempering (Tadka).',
    iconSymbol: 'Flame'
  },
  {
    id: 'cinnamon',
    englishName: 'Kerala True Cinnamon (Dalchini)',
    sanskritName: 'त्वक् (Tvak)',
    hindiName: 'दालचीनी',
    botanicalFamily: 'Cinnamomum verum',
    primaryRasa: 'Madhura (Sweet)',
    elementalComposition: 'Fire & Air (Tejas & Vayu)',
    healingProperties: 'Sensitizes cellular insulin response, warming circulatory tonic.',
    flavorNotes: 'Subtle sweet cedar, delicate woody warmth without harsh synthetic cassia pungency.',
    culinaryRole: 'Braised in hot ghee at the inception of gravies to infuse lipid-soluble essential oils.',
    iconSymbol: 'Scroll'
  },
  {
    id: 'black-cumin',
    englishName: 'Shahi Jeera (Royal Caraway / Black Cumin)',
    sanskritName: 'कृष्णजीरक (Krishna Jeeraka)',
    hindiName: 'शाही जीरा',
    botanicalFamily: 'Carum carvi',
    primaryRasa: 'Katu (Pungent)',
    elementalComposition: 'Air & Fire (Vayu & Agni)',
    healingProperties: 'Gentle digestive, cooling metabolic regulator, detoxifier.',
    flavorNotes: 'Smoky, nutty, deeply aromatic with faint aniseed finish.',
    culinaryRole: 'Tempered in ghee for royal Mughlai Qormas, slow-cooked dal, and saffron rice.',
    iconSymbol: 'CircleDot'
  }
];

export const REGIONAL_CUISINES: RegionalCuisine[] = [
  {
    id: 'chettinad',
    region: 'Chettinad, Tamil Nadu',
    style: 'Fiery, complex, freshly stone-ground whole spices and sun-dried meat/vegetable vathals',
    definingFlavor: 'Stone-crushed black peppercorns, star anise, kalpasi (black stone flower), and shallots',
    cookingTechnique: 'Aromatics sauteed in unrefined sesame (gingelly) oil inside seasoned soapstone vessels (Kal Chatti).',
    culturalEtiquette: 'Served on fresh banana leaf tip pointing left; distinct courses progressing from Kuzhambu to Rasam to soothing curd.',
    iconicDishes: [
      {
        name: 'Chettinad Kozhi Varuval',
        nativeName: 'செட்டிநாடு சிக்கன்',
        description: 'Dry roasted country chicken coated in stone-ground kalpasi, fennel, and fiery Guntur chilies.',
        keyIngredients: ['Kalpasi (Stone Flower)', 'Maratti Mokku', 'Shallots', 'Curry Leaves']
      },
      {
        name: 'Kavuni Arisi Sweet Rice',
        nativeName: 'கவுனி அரிசி',
        description: 'Heirloom black sticky rice brought by maritime Chettiar traders from Burma, simmered with jaggery and fresh coconut milk.',
        keyIngredients: ['Black Emperor Rice', 'Palm Jaggery', 'Cardamom', 'Ghee']
      }
    ]
  },
  {
    id: 'awadhi',
    region: 'Awadh (Lucknow), Uttar Pradesh',
    style: 'Subtle courtly refinement, aromatic Dum slow cooking, and delicate floral infusions',
    definingFlavor: 'Kewra (pandanus water), Ittar rose essence, saffron, and Potli Masala (bundle of 25 aromatics)',
    cookingTechnique: 'Dum Pukht — sealing handi vessels with wheat dough ribbons over dying charcoal embers, retaining steam essence.',
    culturalEtiquette: 'Dastarkhwan court dining with formal Nawabi hospitality, prioritizing tenderness where meat dissolves upon the palate.',
    iconicDishes: [
      {
        name: 'Galawati Kebab',
        nativeName: 'गलावटी कबाब',
        description: 'Silken minced patties tenderized with green raw papaya and infused with 160 secret botanical aromatics, created for Nawab Asad-ud-Daula.',
        keyIngredients: ['Raw Papaya Puree', 'Kewra Essence', 'Brown Onion Paste', 'Saffron Ghee']
      },
      {
        name: 'Awadhi Gosht Dum Biryani',
        nativeName: 'अवधी दम बिरयानी',
        description: 'Fragrant aged basmati rice layered with delicate yakhni broth, steeped with milk and saffron inside sealed clay.',
        keyIngredients: ['Yakhni Broth', 'Aged Basmati', 'Green Cardamom', 'Rose Water']
      }
    ]
  },
  {
    id: 'kashmiri-wazwan',
    region: 'Kashmir Valley',
    style: 'A royal 36-course feast prepared by master chefs (Vastas), eschewing onion and garlic in favor of hing, fennel, and cockscomb flower',
    definingFlavor: 'Maval (dried cockscomb extract for crimson hue), Saunf (fennel powder), Sonth (dry ginger), and saffron',
    cookingTechnique: 'Pounded on walnut tree trunks with wooden mallets; simmered in tinned copper cauldrons (Degs) over applewood.',
    culturalEtiquette: 'Groups of four share a single large carved copper platter called Traem after ceremonial hand-washing in a Tash-t-Nari basin.',
    iconicDishes: [
      {
        name: 'Rogan Josh',
        nativeName: 'روغن جوش',
        description: 'Slow-cooked lamb infused with Kashmiri red chillies, dried ginger, and aromatic maval petals in pure mustard oil.',
        keyIngredients: ['Kashmiri Red Chilli', 'Maval Petals', 'Asafoetida', 'Mustard Oil']
      },
      {
        name: 'Kashmiri Kahwa',
        nativeName: 'قہوہ',
        description: 'Green tea simmered in a copper Samovar with saffron strands, whole cinnamon, and slivered almonds.',
        keyIngredients: ['Green Tea Leaves', 'Saffron', 'Cinnamon', 'Almonds']
      }
    ]
  },
  {
    id: 'bengali',
    region: 'Bengal (Kolkata & Delta)',
    style: 'Delicate balance of sweet, mustard pungency, and bitter palate cleansers in strict course succession',
    definingFlavor: 'Panch Phoron (five-spice blend: fenugreek, nigella, cumin, radhuni, fennel) and pungent cold-pressed mustard oil',
    cookingTechnique: 'Shorshe Bata (freshly stone-ground mustard paste) and subtle braising with green chillies in iron Kadhai.',
    culturalEtiquette: 'Strict gastronomic progression: starting with bitter Shukto to awaken bile, followed by dal, vegetable Shak, fish, sour Chutney, and ending with Mishti.',
    iconicDishes: [
      {
        name: 'Shorshe Ilish Bhapa',
        nativeName: 'সর্ষে ইলিশ ভাপা',
        description: 'Hilsa fish gently steamed with pungent yellow and black mustard paste, green chillies, and cold-pressed mustard oil.',
        keyIngredients: ['Hilsa Fish', 'Ground Mustard', 'Green Chillies', 'Kachi Ghani Mustard Oil']
      },
      {
        name: 'Nolen Gurer Sandesh',
        nativeName: 'নলেন গুড়ের সন্দেশ',
        description: 'Artisanal sweet crafted from fresh cow milk chenna kneaded with wild winter date-palm sap jaggery.',
        keyIngredients: ['Fresh Chenna', 'Date-Palm Jaggery', 'Cardamom']
      }
    ]
  }
];

export const SHAD_RASAS = [
  {
    name: 'Madhura (Sweet)',
    elements: 'Earth & Water',
    effect: 'Nourishing, grounding, builds tissue (Dhatus)',
    examples: 'Basmati rice, ghee, dates, wheat, cardamom'
  },
  {
    name: 'Amla (Sour)',
    elements: 'Earth & Fire',
    effect: 'Stimulates digestive enzymes, awakens appetite',
    examples: 'Amla (Indian gooseberry), tamarind, yogurt, raw mango'
  },
  {
    name: 'Lavana (Salty)',
    elements: 'Water & Fire',
    effect: 'Electrolyte balance, enhances inherent flavors',
    examples: 'Himalayan pink rock salt (Saindhava), sea salt'
  },
  {
    name: 'Katu (Pungent)',
    elements: 'Fire & Air',
    effect: 'Clears sinuses, fires metabolic rate, detoxifies',
    examples: 'Black pepper, dry ginger, cloves, mustard seed'
  },
  {
    name: 'Tikta (Bitter)',
    elements: 'Air & Ether',
    effect: 'Purifies blood, anti-inflammatory, clears heat',
    examples: 'Turmeric, bitter gourd (Karela), fenugreek, neem'
  },
  {
    name: 'Kashaya (Astringent)',
    elements: 'Air & Earth',
    effect: 'Tones mucous membranes, cools internal tissues',
    examples: 'Pomegranate, green tea, raw banana, triphala'
  }
];

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage } from '../types';

export interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    es: string;
  };
}

export const UI_TRANSLATIONS: Translations = {
  // Navigation & Branding
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
    hi: 'प्रदर्शनी कक्ष',
    es: 'Salas de Exposición'
  },
  homeRoom: {
    en: 'Pavilion Entrance',
    hi: 'मंडप प्रवेश',
    es: 'Entrada al Pabellón'
  },
  historyRoom: {
    en: 'Chronicles & Eras',
    hi: 'कालक्रम एवं युग',
    es: 'Crónicas y Eras'
  },
  cultureRoom: {
    en: 'Cosmology & Arts',
    hi: 'कला और दर्शन',
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
    es: 'Maestría Artesanal'
  },
  foodRoom: {
    en: 'Sensory Alchemy',
    hi: 'पाक कला एवं स्वाद',
    es: 'Alquimia Sensorial'
  },

  // Language selector
  selectLanguage: {
    en: 'Language',
    hi: 'भाषा',
    es: 'Idioma'
  },
  english: {
    en: 'English',
    hi: 'अंग्रेज़ी',
    es: 'Inglés'
  },
  hindi: {
    en: 'हिन्दी',
    hi: 'हिन्दी',
    es: 'Hindi'
  },
  spanish: {
    en: 'Español',
    hi: 'स्पैनिश',
    es: 'Español'
  },

  // Culture & Dance Section
  intangibleHeritage: {
    en: 'Intangible Heritage & Consciousness',
    hi: 'अमूर्त विरासत एवं चेतना',
    es: 'Patrimonio Inmaterial y Conciencia'
  },
  cosmologyArtsTitle: {
    en: 'Cosmology & Arts',
    hi: 'ब्रह्मांड विज्ञान और शास्त्रीय कलाएं',
    es: 'Cosmología y Artes Clásicas'
  },
  cosmologyArtsDesc: {
    en: 'An immersive inquiry into the somatic architecture of classical Indian dance, the phonetic computational precision of Indian linguistic scripts, and the non-dual metaphysics of Darshana.',
    hi: 'भारतीय शास्त्रीय नृत्य की शारीरिक संरचना, भाषाई लिपियों की सटीक ध्वन्यात्मक व्यवस्था और दर्शनशास्त्र के अद्वैत तत्वज्ञान का एक गहन अनुभव।',
    es: 'Una indagación inmersiva en la arquitectura somática de la danza clásica india, la precisión fonética de sus escrituras lingüísticas y la metafísica no dual de Darshana.'
  },
  tabDance: {
    en: 'Classical Dance & Traditions',
    hi: 'शास्त्रीय नृत्य एवं परंपराएं',
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

  // Classical Dance specifics
  danceVideoHeading: {
    en: 'Curated Performance Archive',
    hi: 'विशेष प्रदर्शन वीडियो संग्रह',
    es: 'Archivo de Presentaciones Seleccionadas'
  },
  danceMusicHeading: {
    en: 'Traditional Music & Oral Narration',
    hi: 'पारंपरिक संगीत एवं मौखिक आख्यान',
    es: 'Música Tradicional y Narración Oral'
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
    hi: 'प्रदर्शन देखें',
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
    es: 'Haz clic en cualquier mudra a continuación para examinar su codificación metafísica'
  },

  // Crafts Section
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
    es: 'Una galería artesanal digital que explora el patrimonio indio de tejido en telar de fosa, cerámica de horno de reducción, metalurgia a la cera perdida y narrativas ancestrales.'
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

  // General Actions
  curatorNote: {
    en: 'Curator’s Note',
    hi: 'क्यूरेटर की टिप्पणी',
    es: 'Nota del Curador'
  },
  medium: {
    en: 'Medium',
    hi: 'माध्यम',
    es: 'Medio'
  },
  era: {
    en: 'Era',
    hi: 'काल',
    es: 'Época'
  },
  region: {
    en: 'Region',
    hi: 'क्षेत्र',
    es: 'Región'
  },
  readMore: {
    en: 'Read Full Narration',
    hi: 'पूरा विवरण पढ़ें',
    es: 'Leer Narración Completa'
  },
  audioGuide: {
    en: 'Atmospheric Sitar & Tanpura Soundscape',
    hi: 'सितार एवं तानपुरा ध्वनि वातावरण',
    es: 'Ambiente Sonoro de Sitar y Tanpura'
  },
  interactiveExperience: {
    en: 'Interactive Exhibit',
    hi: 'इंटरैक्टिव प्रदर्शनी',
    es: 'Exhibición Interactiva'
  }
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem('living_canvas_lang');
    if (saved === 'en' || saved === 'hi' || saved === 'es') {
      return saved as SupportedLanguage;
    }
    return 'en';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('living_canvas_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const translation = UI_TRANSLATIONS[key];
    if (translation && translation[language]) {
      return translation[language];
    }
    if (fallback) return fallback;
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

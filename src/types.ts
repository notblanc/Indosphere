export type ExhibitRoom = 'home' | 'history' | 'culture' | 'festivals' | 'crafts' | 'food';

export type SupportedLanguage = 'en' | 'hi' | 'es';

export interface Artifact {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  origin: string;
  medium: string;
  description: string;
  curatorNote: string;
  imageUrl: string;
  category: 'sculpture' | 'textile' | 'manuscript' | 'pottery' | 'metalwork' | 'architecture';
  tags: string[];
}

export interface HistoricalEra {
  id: string;
  name: string;
  period: string;
  tagline: string;
  overview: string;
  significance: string;
  artifacts: Artifact[];
  architecturalStyle: string;
  colorTone: string;
  bgAtmosphere: string;
  keyInnovations: string[];
}

export interface ClassicalDance {
  id: string;
  name: string;
  nativeName?: string;
  state: string;
  originEra: string;
  mood: string;
  costumeFabric: string;
  musicalAccompaniment: string;
  philosophy: string;
  accentColor: string;
  history: string;
  significance: string;
  videoUrl: string;
  videoTitle: string;
  performerName: string;
  audioTitle: string;
  ragaTala: string;
  traditionalInstruments: string[];
  narration: {
    en: string;
    hi: string;
    es: string;
  };
  historyLocalized?: {
    en: string;
    hi: string;
    es: string;
  };
  significanceLocalized?: {
    en: string;
    hi: string;
    es: string;
  };
  primaryMudras: {
    name: string;
    meaning: string;
    symbolism: string;
    gestureDescription: string;
  }[];
}

export interface IndianLanguage {
  name: string;
  nativeScript: string;
  scriptName: string;
  family: 'Indo-Aryan' | 'Dravidian' | 'Tibeto-Burman' | 'Austroasiatic';
  speakersCount: string;
  classicalStatus: boolean;
  samplePhrase: string;
  phraseEnglish: string;
  historicalRoot: string;
}

export interface PhilosophicalSchool {
  id: string;
  name: string;
  sanskritName: string;
  meaning: string;
  founder: string;
  coreInquiry: string;
  keyPremise: string;
  epistemology: string;
  axiom: string;
}

export interface Festival {
  id: string;
  name: string;
  sanskritName: string;
  season: string;
  monthRange: string;
  symbolism: string;
  atmosphereTheme: 'diwali' | 'holi' | 'onam' | 'durga' | 'baisakhi';
  themeColor: string;
  accentColor: string;
  bgGradient: string;
  particleType: 'diyas' | 'gulal' | 'marigold' | 'dhunuchi' | 'golden-grain';
  traditions: string[];
  culinaryHighlights: string[];
  lore: string;
}

export interface CraftTradition {
  id: string;
  name: string;
  nativeName?: string;
  category: 'textile' | 'pottery' | 'metalwork' | 'painting' | 'woodwork';
  region: string;
  geographicalIndication: boolean;
  rawMaterials: string[];
  craftTechnique: string;
  heritageStory: string;
  visualHighlight: string;
  preservationStatus: string;
  // Storytelling integration
  artisanName: string;
  artisanTitle: string;
  artisanImage: string;
  regionIcon: string;
  regionalSignificance: string;
  shortNarrative: {
    en: string;
    hi: string;
    es: string;
  };
  culturalSignificance: {
    en: string;
    hi: string;
    es: string;
  };
  traditionalTechniques: {
    en: string[];
    hi: string[];
    es: string[];
  };
  artisanQuote: {
    en: string;
    hi: string;
    es: string;
  };
}

export interface SpiceProfile {
  id: string;
  englishName: string;
  sanskritName: string;
  hindiName: string;
  botanicalFamily: string;
  primaryRasa: 'Katu (Pungent)' | 'Tikta (Bitter)' | 'Kashaya (Astringent)' | 'Madhura (Sweet)' | 'Lavana (Salty)' | 'Amla (Sour)';
  elementalComposition: string;
  healingProperties: string;
  flavorNotes: string;
  culinaryRole: string;
  iconSymbol: string;
}

export interface RegionalCuisine {
  id: string;
  region: string;
  style: string;
  definingFlavor: string;
  iconicDishes: {
    name: string;
    nativeName: string;
    description: string;
    keyIngredients: string[];
  }[];
  cookingTechnique: string;
  culturalEtiquette: string;
}

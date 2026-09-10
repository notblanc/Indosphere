import React from 'react';
import { motion } from 'motion/react';
import { InteractiveIndiaMap } from '../components/InteractiveIndiaMap';
import { MagneticElement } from '../components/MagneticElement';
import { ExhibitRoom, Artifact } from '../types';
import { HISTORICAL_ERAS } from '../data/museumData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedArtifact } from '../data/translationsData';
import { ArrowRight, Sparkles, Compass, Eye, Shield, Feather, BookOpen, ExternalLink, UtensilsCrossed, ScanSearch, Map } from 'lucide-react';

interface HomeViewProps {
  onNavigateRoom: (room: ExhibitRoom) => void;
  onInspectArtifact: (artifact: Artifact) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateRoom, onInspectArtifact }) => {
  const { language, t } = useLanguage();

  // Collect a few standout artifacts for the dynamic collage and localize them
  const rawCollageArtifacts = HISTORICAL_ERAS.flatMap(era => era.artifacts).slice(0, 4);
  const collageArtifacts = rawCollageArtifacts.map(a => getLocalizedArtifact(a, language));

  return (
    <div className="space-y-24 py-6 md:py-12">
      {/* 1. Curatorial Hero Entrance */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] border border-[#B34728]/20 text-xs font-mono tracking-widest text-[#B34728] uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4881A]" />
              {t('homeHeroBadge', 'Digital Museum Exhibition • The Living Canvas')}
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1E] leading-[1.08]">
              {t('homeHeroTitlePrefix', 'The Timeless Tapestry of')}{' '}
              <span className="italic font-normal text-[#B34728]">
                {t('homeHeroTitleHighlight', 'Bharat')}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#1A1A1E]/80 leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              {t('homeHeroSubtitle', 'Moving beyond cliché to explore five millennia of unbroken philosophical inquiry, sacred geometry, metallurgical genius, and living aesthetic traditions.')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticElement intensity={0.2}>
                <button
                  onClick={() => onNavigateRoom('history')}
                  className="px-6 py-3 rounded-full bg-[#B34728] text-[#FAF7F2] font-medium text-sm hover:bg-[#8F341C] transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
                >
                  <span>{t('homeHeroBtnWalkthrough', 'Begin Curated Odyssey')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticElement>

              <button
                onClick={() => onNavigateRoom('crafts')}
                className="px-6 py-3 rounded-full bg-[#F3EDE2] text-[#1A1A1E] font-medium text-sm hover:bg-[#EBE2D4] border border-[#B34728]/25 transition-all cursor-pointer"
              >
                {t('homeHeroBtnCrafts', 'Explore Artisan Masterworks')}
              </button>
            </div>
          </div>

          {/* 3D Interactive Map of India Hero Feature */}
          <div className="mt-8 pt-6 border-t border-[#B34728]/15">
            <InteractiveIndiaMap />
          </div>
        </div>
      </section>

      {/* 2. Curatorial Statement & Living Canvas Ethos */}
      <section className="bg-[#F3EDE2]/60 border-y border-[#B34728]/15 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 border-l-2 border-[#B34728] pl-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#B34728] font-bold block mb-1">
                {t('homeThesisEyebrow', 'Curatorial Thesis')}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1E] leading-tight">
                {t('homeThesisHeading', 'Not a static relic, but a pulsating continuum.')}
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#1A1A1E]/80 leading-relaxed">
              <p>
                {t('homeThesisP1', 'In Indian thought, culture is defined as Sanskriti — that which has been refined, purified, and elevated through conscious human contemplation. The traditions presented in this pavilion are not relics preserved in formaldehyde, but living practices practiced today with the exact same phonetic cadence, loom tension, and mudra geometry as three thousand years ago.')}
              </p>
              <p>
                {t('homeThesisP2', 'From the municipal bronze age engineering of Dholavira to the profound non-dual axioms of Advaita Vedanta, this digital exhibit invites you to experience India as a multi-dimensional sensory tapestry.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dynamic Artifact Collage (Curated Highlights) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-1">
              {t('homeHighlightsEyebrow', 'Curated Masterworks')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E] tracking-tight">
              {t('homeHighlightsHeading', 'Artifacts of Transcendence')}
            </h2>
          </div>
          <button
            onClick={() => onNavigateRoom('history')}
            className="text-xs font-semibold text-[#B34728] hover:text-[#8F341C] flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>{t('homeHighlightsBtn', 'View Complete Temporal Timeline')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {collageArtifacts.map((artifact, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <motion.div
                key={artifact.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => onInspectArtifact(artifact)}
                className={`group cursor-pointer bg-[#FAF7F2] border border-[#B34728]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${
                  isWide ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#1A1A1E]">
                  <img
                    src={artifact.imageUrl}
                    alt={artifact.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#1A1A1E] font-semibold border border-black/10">
                      {artifact.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-[#E5A93C] font-mono block mb-1">
                      {artifact.era}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight line-clamp-1">
                      {artifact.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between bg-[#FAF7F2]">
                  <p className="text-xs text-[#1A1A1E]/75 line-clamp-2 pr-4 font-sans">
                    {artifact.subtitle}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-[#F3EDE2] text-[#B34728] flex items-center justify-center shrink-0 group-hover:bg-[#B34728] group-hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Exhibition Rooms Preview Gateways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-1">
            {t('homeGatewayEyebrow', 'Exhibition Galleries')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E] tracking-tight">
            {t('homeGatewayHeading', 'Step into the Thematic Sanctuaries')}
          </h2>
          <p className="text-sm text-[#1A1A1E]/70 mt-2">
            {t('homeGatewaySubtitle', 'Each hall features dedicated object animations, dynamic atmospheric transformations, and sensory breakdowns.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={() => onNavigateRoom('history')}
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border border-[#B34728]/20 hover:border-[#B34728] transition-all hover:shadow-lg space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#B34728]/10 text-[#B34728] flex items-center justify-center group-hover:bg-[#B34728] group-hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1E] group-hover:text-[#B34728] transition-colors">
                {t('historyRoom', 'Chronicles & Eras')}
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                {language === 'hi'
                  ? 'सिंधु-सरस्वती की नगर योजना से लेकर आधुनिक लोकतांत्रिक भारत तक का कालानुक्रमिक ताना-बाना।'
                  : language === 'es'
                  ? 'Línea de tiempo vertical desde la cuadrícula del Indo-Sarasvati hasta la India moderna.'
                  : 'Vertical parallax timeline detailing the Indus-Sarasvati urban grid to modern democratic constitutional India.'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B34728] pt-2">
              <span>{t('enterHall', 'Enter Gallery')}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            onClick={() => onNavigateRoom('culture')}
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border border-[#B34728]/20 hover:border-[#B34728] transition-all hover:shadow-lg space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D4881A]/10 text-[#D4881A] flex items-center justify-center group-hover:bg-[#D4881A] group-hover:text-white transition-colors">
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1E] group-hover:text-[#D4881A] transition-colors">
                {t('cultureRoom', 'Cosmology & Arts')}
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                {language === 'hi'
                  ? 'भाषाई विविधता, शास्त्रीय नृत्य हस्त मुद्राएं और भारतीय षड्-दर्शन की दार्शनिक परंपराएं।'
                  : language === 'es'
                  ? 'Matriz de diversidad lingüística, mudras de danza clásica y las seis escuelas de Darshana.'
                  : 'Linguistic diversity matrix, classical dance mudra gesture breakdowns, and the six schools of Indian Darshana.'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4881A] pt-2">
              <span>{t('enterHall', 'Enter Gallery')}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            onClick={() => onNavigateRoom('festivals')}
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border border-[#B34728]/20 hover:border-[#B34728] transition-all hover:shadow-lg space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1E284A]/10 text-[#1E284A] flex items-center justify-center group-hover:bg-[#1E284A] group-hover:text-white transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1E] group-hover:text-[#1E284A] transition-colors">
                {t('festivalsRoom', 'Seasonal Epics')}
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                {language === 'hi'
                  ? 'गतिशील पंचांग जहां दिवाली पर जलते दीयों की रोशनी और ओणम पर फूलों की वर्षा वातावरण को बदल देती है।'
                  : language === 'es'
                  ? 'Calendario dinámico con iluminación de lámparas para Diwali y pétalos para Onam.'
                  : 'Dynamic calendar where lighting transforms into glowing oil lamps for Diwali, or falls into marigold petals for Onam.'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E284A] pt-2">
              <span>{t('enterHall', 'Enter Gallery')}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            onClick={() => onNavigateRoom('crafts')}
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border border-[#B34728]/20 hover:border-[#B34728] transition-all hover:shadow-lg space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#8F341C]/10 text-[#8F341C] flex items-center justify-center group-hover:bg-[#8F341C] group-hover:text-white transition-colors">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1E] group-hover:text-[#8F341C] transition-colors">
                {t('craftsRoom', 'Mastery of Hands')}
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                {language === 'hi'
                  ? 'घूमता हुआ 3D मिट्टी का बर्तन, करघे पर धागे की बुनाई और बिदरी नक्काशी का सजीव अनुभव।'
                  : language === 'es'
                  ? 'Torno 3D interactivo de terracota, telar en vivo e incrustaciones tradicionales de Bidri.'
                  : 'Featuring an interactive rotating 3D terracotta clay pot, live shuttle thread-weaving loom, and Bidriware inlays.'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8F341C] pt-2">
              <span>{t('enterHall', 'Enter Gallery')}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            onClick={() => onNavigateRoom('food')}
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border border-[#B34728]/20 hover:border-[#B34728] transition-all hover:shadow-lg space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#702632]/10 text-[#702632] flex items-center justify-center group-hover:bg-[#702632] group-hover:text-white transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1E] group-hover:text-[#702632] transition-colors">
                {t('foodRoom', 'Sensory Alchemy')}
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                {language === 'hi'
                  ? 'हवा में तैरते सुगंधित मसाले, आयुर्वेदिक षड्-रस ज्यामिति और अवधी दम से लेकर चेट्टीनाड तक शाही भोज।'
                  : language === 'es'
                  ? 'Especias flotantes en paralaje, geometría ayurvédica y banquetes reales desde Awadhi hasta Chettinad.'
                  : 'Floating botanical spice elements in parallax motion, Ayurvedic flavor geometry, and royal regional banquets from Awadhi Dum to Chettinad stone pots.'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#702632] pt-2">
              <span>{t('enterHall', 'Enter Gallery')}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Journeyman New Feature Tile */}
          <a
            id="feature-tile-journeyman"
            href="https://journeyman.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#D4881A]/40 hover:border-[#B34728] transition-all hover:shadow-xl space-y-4 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4881A]/15 text-[#B34728] flex items-center justify-center group-hover:bg-[#B34728] group-hover:text-white transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D4881A]/15 text-[#B34728] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#D4881A]/30">
                  <Sparkles className="w-3 h-3 text-[#D4881A]" />
                  {t('newFeature', 'New Feature')}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1E] group-hover:text-[#B34728] transition-colors">
                  {t('journeymanTitle', 'Journeyman')}
                </h3>
                <p className="text-xs text-[#1A1A1E]/75 leading-relaxed font-sans">
                  {t('journeymanDesc', 'Embark on generative cultural expeditions, AI-guided historical tours, and living heritage explorations.')}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-[#B34728] pt-3 border-t border-[#B34728]/10">
              <span className="font-mono text-[11px] text-[#1A1A1E]/60 group-hover:text-[#B34728] transition-colors">
                journeyman.ai.studio
              </span>
              <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>{t('launchJourneyman', 'Launch Journeyman')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* FoodLens New Feature Tile */}
          <a
            id="feature-tile-foodlens"
            href="https://foodlens-ai.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#702632]/35 hover:border-[#B34728] transition-all hover:shadow-xl space-y-4 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#702632]/10 text-[#702632] flex items-center justify-center group-hover:bg-[#702632] group-hover:text-white transition-colors">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#702632]/10 text-[#702632] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#702632]/25">
                  <Sparkles className="w-3 h-3 text-[#702632]" />
                  {t('newFeature', 'New Feature')}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1E] group-hover:text-[#702632] transition-colors">
                  {t('foodlensTitle', 'FoodLens')}
                </h3>
                <p className="text-xs text-[#1A1A1E]/75 leading-relaxed font-sans">
                  {t('foodlensDesc', 'AI-powered visual culinary analysis, exploring dishes, spice blends, ingredients, and Ayurvedic nutritional geometry.')}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-[#702632] pt-3 border-t border-[#702632]/10">
              <span className="font-mono text-[11px] text-[#1A1A1E]/60 group-hover:text-[#702632] transition-colors">
                foodlens-ai.ai.studio
              </span>
              <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>{t('launchFoodlens', 'Launch FoodLens')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Artifact Lens New Feature Tile */}
          <a
            id="feature-tile-artifact-lens"
            href="https://artirecog.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#1E284A]/30 hover:border-[#B34728] transition-all hover:shadow-xl space-y-4 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1E284A]/10 text-[#1E284A] flex items-center justify-center group-hover:bg-[#1E284A] group-hover:text-white transition-colors">
                  <ScanSearch className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1E284A]/10 text-[#1E284A] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#1E284A]/25">
                  <Sparkles className="w-3 h-3 text-[#1E284A]" />
                  {t('newFeature', 'New Feature')}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1E] group-hover:text-[#1E284A] transition-colors">
                  {t('artifactLensTitle', 'Artifact Lens')}
                </h3>
                <p className="text-xs text-[#1A1A1E]/75 leading-relaxed font-sans">
                  {t('artifactLensDesc', 'AI-powered visual relic recognition and archaeological artifact analysis.')}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-[#1E284A] pt-3 border-t border-[#1E284A]/10">
              <span className="font-mono text-[11px] text-[#1A1A1E]/60 group-hover:text-[#1E284A] transition-colors">
                artirecog.ai.studio
              </span>
              <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>{t('launchArtifactLens', 'Launch Artifact Lens')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Bharat Darshan New Feature Tile */}
          <a
            id="feature-tile-bharat-darshan"
            href="https://bharat-darshan-ai.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#B34728]/35 hover:border-[#B34728] transition-all hover:shadow-xl space-y-4 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#B34728]/10 text-[#B34728] flex items-center justify-center group-hover:bg-[#B34728] group-hover:text-white transition-colors">
                  <Map className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#B34728]/10 text-[#B34728] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#B34728]/25">
                  <Sparkles className="w-3 h-3 text-[#B34728]" />
                  {t('newFeature', 'New Feature')}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1E] group-hover:text-[#B34728] transition-colors">
                  {t('bharatDarshanTitle', 'Bharat Darshan')}
                </h3>
                <p className="text-xs text-[#1A1A1E]/75 leading-relaxed font-sans">
                  {t('bharatDarshanDesc', "AI-guided immersive expeditions across India's sacred monuments, geography, and living heritage.")}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-[#B34728] pt-3 border-t border-[#B34728]/10">
              <span className="font-mono text-[11px] text-[#1A1A1E]/60 group-hover:text-[#B34728] transition-colors">
                bharat-darshan-ai.ai.studio
              </span>
              <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>{t('launchBharatDarshan', 'Launch Bharat Darshan')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

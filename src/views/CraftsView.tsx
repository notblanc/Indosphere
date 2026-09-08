import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CRAFT_TRADITIONS } from '../data/museumData';
import { CraftTradition } from '../types';
import { RotatingPotteryCanvas } from '../components/RotatingPotteryCanvas';
import { TapestryWeaver } from '../components/TapestryWeaver';
import { useLanguage } from '../context/LanguageContext';
import {
  Shield,
  Sparkles,
  Layers,
  Award,
  Hammer,
  Compass,
  Eye,
  X,
  BookOpen,
  User,
  MapPin,
  CheckCircle2,
  Volume2,
  ArrowRight,
  Quote
} from 'lucide-react';

export const CraftsView: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'textile' | 'pottery' | 'metalwork' | 'painting'>('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [storyCraft, setStoryCraft] = useState<CraftTradition | null>(null);
  const [isNarrating, setIsNarrating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter crafts
  const filteredCrafts = selectedCategory === 'all'
    ? CRAFT_TRADITIONS
    : CRAFT_TRADITIONS.filter(c => c.category === selectedCategory);

  // Helper getters for localized content
  const getCraftNarrative = (craft: CraftTradition) => {
    return craft.shortNarrative?.[language] || craft.shortNarrative?.en || craft.heritageStory;
  };

  const getCraftSignificance = (craft: CraftTradition) => {
    return craft.culturalSignificance?.[language] || craft.culturalSignificance?.en || craft.heritageStory;
  };

  const getCraftTechniques = (craft: CraftTradition): string[] => {
    if (craft.traditionalTechniques) {
      return craft.traditionalTechniques[language] || craft.traditionalTechniques.en || [craft.craftTechnique];
    }
    return [craft.craftTechnique];
  };

  const getCraftQuote = (craft: CraftTradition) => {
    return craft.artisanQuote?.[language] || craft.artisanQuote?.en || null;
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'all': return t('allCrafts');
      case 'textile': return t('textileCrafts');
      case 'pottery': return t('potteryCrafts');
      case 'metalwork': return t('metalCrafts');
      case 'painting': return t('paintingCrafts');
      default: return cat;
    }
  };

  return (
    <div className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block">
          {t('livingHandcraft')}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1E]">
          {t('craftsTitle')}
        </h1>
        <p className="text-base text-[#1A1A1E]/80 leading-relaxed font-sans">
          {t('craftsSubtitle')}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-4">
          {(['all', 'textile', 'pottery', 'metalwork', 'painting'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#B34728] text-white shadow-md ring-2 ring-[#B34728]/20'
                  : 'bg-[#FAF7F2] text-[#1A1A1E]/80 border border-[#B34728]/20 hover:bg-[#F3EDE2]'
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* 1. OBJECT-FOCUSED INTERACTIVE SHOWCASE 1: Tapestry Loom Weaving */}
      {(selectedCategory === 'all' || selectedCategory === 'textile') && (
        <section className="bg-[#FAF7F2] border border-[#B34728]/20 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-[#B34728]/10 text-[#B34728] font-semibold">
                  Handloom Heritage
                </span>
                <span className="text-xs font-mono text-[#D4881A] flex items-center gap-1 font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  {t('giCertified')}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E]">
                The Korvai Silk & Gold Zari Tapestry
              </h2>

              <p className="text-sm sm:text-base text-[#1A1A1E]/85 leading-relaxed font-sans">
                Watch the thread visually weave itself into a tapestry on the loom below. In the legendary Korvai technique,
                two master weavers operate three shuttles in synchronized rhythm to interlock solid borders with pure silk body cloth.
              </p>

              <div className="p-4 rounded-xl bg-[#F3EDE2] border border-[#B34728]/15 space-y-2 text-xs">
                <div>
                  <span className="font-bold text-[#1A1A1E]">Raw Materials:</span>{' '}
                  <span className="text-[#1A1A1E]/80">3-ply Mulberry Silk, 24k electroplated gold wrapped around pure silver wire</span>
                </div>
                <div>
                  <span className="font-bold text-[#1A1A1E]">Heritage Lineage:</span>{' '}
                  <span className="text-[#1A1A1E]/80">Descendants of Sage Markandeya, weavers to the Imperial Cholas</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const paithani = CRAFT_TRADITIONS.find(c => c.id === 'paithani-saree');
                    if (paithani) setStoryCraft(paithani);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B34728] text-white text-xs font-semibold hover:bg-[#8F341C] transition-colors cursor-pointer shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Discover Paithani & Kanjeevaram Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Loom Canvas Component */}
            <div className="lg:col-span-6">
              <TapestryWeaver />
            </div>
          </div>
        </section>
      )}

      {/* 2. OBJECT-FOCUSED INTERACTIVE SHOWCASE 2: 3D Clay Pot Scroll Rotation */}
      {(selectedCategory === 'all' || selectedCategory === 'pottery') && (
        <section className="bg-[#FAF7F2] border border-[#B34728]/20 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D Clay Pot Canvas Component */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <RotatingPotteryCanvas scrollProgress={scrollProgress} />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-[#8F341C]/10 text-[#8F341C] font-semibold">
                  Earthen Metallurgy & Ceramics
                </span>
                <span className="text-xs font-mono text-[#D4881A] flex items-center gap-1 font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  {t('giCertified')}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E]">
                Terracotta & Jaipur Turquoise Blue Pottery
              </h2>

              <p className="text-sm sm:text-base text-[#1A1A1E]/85 leading-relaxed font-sans">
                The 3D clay pot on the left slowly rotates with your vertical page scrolling and can also be spun freely with your cursor.
                Experience how powdered quartz, Egyptian faience glazes, and river earth yield timeless vessels.
              </p>

              <div className="p-4 rounded-xl bg-[#F3EDE2] border border-[#B34728]/15 space-y-2 text-xs">
                <div>
                  <span className="font-bold text-[#1A1A1E]">Clay-free Alchemy:</span>{' '}
                  <span className="text-[#1A1A1E]/80">Jaipur Blue Pottery utilizes zero river mud — made entirely from quartz crystal, glass cullet, and Multani Mitti.</span>
                </div>
                <div>
                  <span className="font-bold text-[#1A1A1E]">Firing Chemistry:</span>{' '}
                  <span className="text-[#1A1A1E]/80">Natural cobalt and copper oxide glazes fired once in wood kilns at 850°C</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const bluePottery = CRAFT_TRADITIONS.find(c => c.id === 'blue-pottery-jaipur');
                    if (bluePottery) setStoryCraft(bluePottery);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E284A] text-white text-xs font-semibold hover:bg-[#151D36] transition-colors cursor-pointer shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Discover Jaipur Blue Pottery Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Craft Gallery Cards Breakdown with Storytelling Integration */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-1">
              Artisan Ateliers & Oral Narratives
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1E]">
              Living Craft Traditions & Artisan Stories
            </h2>
          </div>
          <span className="text-xs font-mono text-[#1A1A1E]/60">
            {t('clickToExploreStory')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrafts.map((craft) => (
            <div
              key={craft.id}
              onClick={() => setStoryCraft(craft)}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#B34728]/20 hover:border-[#B34728] transition-all hover:shadow-xl space-y-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Artisan & Region Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {craft.artisanImage ? (
                      <img
                        src={craft.artisanImage}
                        alt={craft.artisanName || 'Artisan'}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-full object-cover border border-[#B34728]/30 shadow-xs"
                      />
                    ) : (
                      <span className="w-8 h-8 rounded-full bg-[#B34728]/10 text-base flex items-center justify-center">
                        {craft.regionIcon || '🎨'}
                      </span>
                    )}
                    <div className="leading-tight">
                      <span className="text-xs font-serif font-bold text-[#1A1A1E] block truncate max-w-[140px]">
                        {craft.artisanName || 'Master Guild'}
                      </span>
                      <span className="text-[10px] font-mono text-[#B34728] flex items-center gap-1">
                        <span>{craft.regionIcon || '📍'}</span>
                        <span className="truncate max-w-[130px]">{craft.region.split(',')[0]}</span>
                      </span>
                    </div>
                  </div>

                  {craft.geographicalIndication && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D4881A]/15 text-[#D4881A] font-semibold flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      GI
                    </span>
                  )}
                </div>

                <div>
                  {craft.nativeName && (
                    <span className="text-[11px] font-serif italic text-[#B34728] block mb-0.5">
                      {craft.nativeName}
                    </span>
                  )}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1E] group-hover:text-[#B34728] transition-colors">
                    {craft.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#1A1A1E]/80 leading-relaxed font-sans line-clamp-3">
                  {getCraftNarrative(craft)}
                </p>

                <div className="bg-[#F3EDE2] rounded-xl p-3 border border-[#B34728]/15 space-y-1.5 text-xs">
                  <div>
                    <span className="font-semibold text-[#1A1A1E]">Medium:</span>{' '}
                    <span className="text-[#1A1A1E]/75 line-clamp-1">{craft.rawMaterials.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#B34728]/15 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#B34728] group-hover:underline">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{t('readArtisanStory')}</span>
                </span>
                <span className="font-mono text-[10px] uppercase text-[#1A1A1E]/60">
                  {craft.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORYTELLING MODAL / EXPANDABLE DRAWER */}
      <AnimatePresence>
        {storyCraft && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF7F2] border border-[#B34728]/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setStoryCraft(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#F3EDE2] text-[#1A1A1E] hover:bg-[#B34728] hover:text-white transition-colors cursor-pointer"
                aria-label="Close story modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Artisan Header & Regional Icon */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#B34728]/20 pr-10">
                <div className="flex items-center gap-4">
                  {storyCraft.artisanImage ? (
                    <img
                      src={storyCraft.artisanImage}
                      alt={storyCraft.artisanName || 'Artisan'}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-[#B34728]/30 shadow-md"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-[#B34728]/15 text-3xl flex items-center justify-center">
                      {storyCraft.regionIcon || '🏺'}
                    </div>
                  )}

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl">{storyCraft.regionIcon || '📍'}</span>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold">
                        {storyCraft.region}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1E]">
                      {storyCraft.artisanName || 'Heirloom Artisan Guild'}
                    </h3>
                    <p className="text-xs text-[#1A1A1E]/70 font-sans">
                      {storyCraft.artisanTitle || 'Custodian of Indigenous Craft Heritage'}
                    </p>
                  </div>
                </div>

                {storyCraft.geographicalIndication && (
                  <div className="px-3 py-1 rounded-full bg-[#D4881A]/15 text-[#D4881A] text-xs font-mono font-bold flex items-center gap-1.5 self-start sm:self-center">
                    <Award className="w-4 h-4" />
                    <span>GI Registered</span>
                  </div>
                )}
              </div>

              {/* Craft Title & Native Name */}
              <div className="space-y-1">
                {storyCraft.nativeName && (
                  <span className="text-xs font-serif font-bold text-[#B34728]">
                    {storyCraft.nativeName}
                  </span>
                )}
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E]">
                  {storyCraft.name}
                </h2>
                {storyCraft.regionalSignificance && (
                  <p className="text-xs font-mono text-[#1A1A1E]/60">
                    {storyCraft.regionalSignificance}
                  </p>
                )}
              </div>

              {/* Oral Narrative Component */}
              <div className="p-6 rounded-2xl bg-[#F3EDE2] border border-[#B34728]/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    Oral Narrative & Cultural History
                  </span>
                  <span className="text-[10px] font-mono text-[#1A1A1E]/50 uppercase">
                    [{language.toUpperCase()}]
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#1A1A1E]/90 leading-relaxed font-serif italic">
                  "{getCraftNarrative(storyCraft)}"
                </p>
              </div>

              {/* Cultural Significance Component */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E284A] font-bold block">
                  Cultural Significance & Sacred Symbolism
                </span>
                <p className="text-xs sm:text-sm text-[#1A1A1E]/85 leading-relaxed">
                  {getCraftSignificance(storyCraft)}
                </p>
              </div>

              {/* Traditional Techniques Step-by-Step Breakdown */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold flex items-center gap-1.5">
                  <Hammer className="w-4 h-4" />
                  {t('stepByStepTechnique')}
                </span>

                <div className="space-y-2">
                  {getCraftTechniques(storyCraft).map((tech, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#B34728]/15 flex items-start gap-3 text-xs sm:text-sm text-[#1A1A1E]/85 shadow-2xs"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#B34728] text-white flex items-center justify-center font-mono font-bold text-[11px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voice of the Master Artisan Quote */}
              {getCraftQuote(storyCraft) && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FAF7F2] to-[#F3EDE2] border border-[#D4881A]/30 flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#D4881A] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4881A] font-bold block">
                      {t('artisanVoice')}
                    </span>
                    <p className="text-xs sm:text-sm text-[#1A1A1E]/90 italic font-serif leading-relaxed">
                      {getCraftQuote(storyCraft)}
                    </p>
                  </div>
                </div>
              )}

              {/* Raw Medium & Preservation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#B34728]/15 text-xs text-[#1A1A1E]/80">
                <div className="space-y-1">
                  <span className="font-bold text-[#1A1A1E] block">Sacred Raw Materials:</span>
                  <p>{storyCraft.rawMaterials.join(', ')}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[#1A1A1E] block">Preservation Status:</span>
                  <p>{storyCraft.preservationStatus || 'Protected by National Handicraft Registry & GI Tag'}</p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[#B34728]/15">
                <span className="text-xs font-mono text-[#B34728]">
                  Curated with Geographical Indications of Goods Act, 1999
                </span>
                <button
                  onClick={() => setStoryCraft(null)}
                  className="px-6 py-2 rounded-full bg-[#B34728] text-white text-xs font-bold hover:bg-[#8F341C] transition-colors cursor-pointer shadow-sm"
                >
                  {t('closeModal')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

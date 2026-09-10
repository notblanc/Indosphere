import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SPICE_PROFILES, REGIONAL_CUISINES, SHAD_RASAS } from '../data/museumData';
import { SpiceProfile, RegionalCuisine } from '../types';
import { ParallaxSpices } from '../components/ParallaxSpices';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedSpice, getLocalizedCuisine, getLocalizedRasa } from '../data/translationsData';
import { Flame, Sparkles, Utensils, Heart, Compass, Info, Check } from 'lucide-react';

export const FoodView: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeSpiceId, setActiveSpiceId] = useState<string>(SPICE_PROFILES[0].id);
  const [activeCuisineId, setActiveCuisineId] = useState<string>(REGIONAL_CUISINES[0].id);
  const [selectedRasaIdx, setSelectedRasaIdx] = useState<number>(0);

  const rawActiveSpice = SPICE_PROFILES.find(s => s.id === activeSpiceId) || SPICE_PROFILES[0];
  const activeSpice = getLocalizedSpice(rawActiveSpice, language);

  const rawActiveCuisine = REGIONAL_CUISINES.find(c => c.id === activeCuisineId) || REGIONAL_CUISINES[0];
  const activeCuisine = getLocalizedCuisine(rawActiveCuisine, language);

  const activeRasa = getLocalizedRasa(selectedRasaIdx, language);

  return (
    <div className="relative py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Floating Botanical Spices in subtle parallax motion behind text */}
      <ParallaxSpices />

      {/* Header */}
      <div className="relative z-10 max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block">
          {t('foodEyebrow', 'Ayurvedic Gastronomy & The Alchemy of Fire')}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1E]">
          {t('foodTitle', 'Sensory Alchemy')}
        </h1>
        <p className="text-base text-[#1A1A1E]/80 leading-relaxed font-sans">
          {t('foodSubtitle', 'In the Indian culinary ethos, food is Anna Brahma — sacred energy transformed through the six primal rasas (tastes) and botanical pharmacopeia. Floating botanical spice elements glide in gentle parallax behind your view.')}
        </p>
      </div>

      {/* 1. The Alchemy of Spices (Interactive Botanical Apothecary) */}
      <section className="relative z-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-1">
              {t('spicesEyebrow', 'Botanical Pharmacopeia')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E]">
              {t('spicesHeading', 'The Sovereign Spices of India')}
            </h2>
          </div>
          <span className="text-xs text-[#1A1A1E]/60 font-mono">
            {t('spicesHint', 'Click any spice to reveal its therapeutic chemistry & flavor notes')}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SPICE_PROFILES.map((rawSpice) => {
            const spice = getLocalizedSpice(rawSpice, language);
            const isSelected = activeSpice.id === spice.id;
            return (
              <button
                key={spice.id}
                onClick={() => setActiveSpiceId(spice.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FAF7F2] border-[#B34728] shadow-md ring-1 ring-[#B34728]'
                    : 'bg-[#FAF7F2]/70 border-[#B34728]/15 hover:bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#B34728] font-bold">
                    {spice.hindiName}
                  </span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: isSelected ? '#B34728' : '#ccc' }} />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1A1A1E] truncate">
                  {spice.englishName.split('(')[0]}
                </h4>
                <p className="text-[11px] text-[#1A1A1E]/60 font-mono italic truncate mt-0.5">
                  {spice.sanskritName}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Spice Dossier Card */}
        <motion.div
          key={activeSpice.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#FAF7F2] border border-[#B34728]/25 rounded-3xl p-6 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-[#B34728]/10 text-[#B34728] font-semibold">
                  {t('botanicalFamilyLabel', 'Botanical')}: {activeSpice.botanicalFamily}
                </span>
                <span className="text-xs font-mono text-[#D4881A] font-semibold">
                  {t('primaryRasaLabel', 'Primary Rasa')}: {activeSpice.primaryRasa}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E]">
                  {activeSpice.englishName} ({activeSpice.hindiName})
                </h3>
                <p className="text-sm font-serif italic text-[#B34728] mt-1">
                  Sanskrit: {activeSpice.sanskritName} • Elements: {activeSpice.elementalComposition}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#1A1A1E]/85">
                <div className="p-3.5 rounded-xl bg-[#F3EDE2] border border-[#B34728]/15">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#B34728] font-bold block mb-1">
                    {t('healingPropertiesLabel', 'Therapeutic & Healing Chemistry')}
                  </span>
                  <p>{activeSpice.healingProperties}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F3EDE2] border border-[#B34728]/15">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#1E284A] font-bold block mb-1">
                    {t('flavorNotesLabel', 'Flavor Bouquet & Aroma')}
                  </span>
                  <p>{activeSpice.flavorNotes}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F3EDE2]/80 rounded-2xl p-6 border border-[#B34728]/20 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-2">
                  {t('culinaryRoleLabel', 'Culinary Alchemy (Tadka / Dum)')}
                </span>
                <p className="text-sm text-[#1A1A1E]/85 leading-relaxed">
                  {activeSpice.culinaryRole}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#B34728]/15 text-xs text-[#1A1A1E]/70 space-y-1 font-mono">
                <div>Ayurvedic Potency: Ushna (Warming)</div>
                <div>Metabolic Action: Deepana & Pachana</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. The Shad-Rasas (Six Tastes of Life) Interactive Wheel */}
      <section className="relative z-10 bg-[#F3EDE2]/60 border border-[#B34728]/20 rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4881A] font-bold block">
            {t('rasasEyebrow', 'Ayurvedic Balance')}
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1E]">
            {t('rasasHeading', 'The Shad-Rasas: Harmony on the Palate')}
          </h2>
          <p className="text-sm text-[#1A1A1E]/80">
            {language === 'hi'
              ? 'प्राचीन ग्रंथों के अनुसार, एक संतुलित भारतीय भोजन में शरीर के धातुओं को पोषण देने और मन को शांत करने के लिए सभी छह रसों का होना अनिवार्य है।'
              : language === 'es'
              ? 'Los textos antiguos dictan que una comida india equilibrada debe integrar los seis sabores en secuencia para nutrir los tejidos y calmar la mente.'
              : "Ancient texts dictate that a balanced Indian meal must integrate all six tastes in precise sequence to nourish the body's tissues and calm mental agitation."}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SHAD_RASAS.map((_, idx) => {
            const rasa = getLocalizedRasa(idx, language);
            return (
              <button
                key={idx}
                onClick={() => setSelectedRasaIdx(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  selectedRasaIdx === idx
                    ? 'bg-[#FAF7F2] border-[#D4881A] shadow-md ring-1 ring-[#D4881A]'
                    : 'bg-[#FAF7F2]/60 border-[#B34728]/15 hover:bg-[#FAF7F2]'
                }`}
              >
                <span className="text-[10px] font-mono text-[#D4881A] font-bold block">
                  Rasa 0{idx + 1}
                </span>
                <h4 className="font-serif font-bold text-sm text-[#1A1A1E]">
                  {rasa.name.split(' ')[0]}
                </h4>
                <p className="text-[11px] text-[#1A1A1E]/60 truncate mt-1">
                  {rasa.elements}
                </p>
              </button>
            );
          })}
        </div>

        <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#B34728]/15 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#B34728] font-bold block mb-1">
              {language === 'hi' ? 'सक्रिय रस' : language === 'es' ? 'Rasa Activo' : 'Active Rasa'}
            </span>
            <h5 className="font-serif text-xl font-bold text-[#1A1A1E]">
              {activeRasa.name}
            </h5>
            <p className="text-xs text-[#1A1A1E]/60 font-mono mt-0.5">
              {language === 'hi' ? 'तत्वीय संतुलन' : language === 'es' ? 'Matriz Elemental' : 'Elemental Matrix'}: {activeRasa.elements}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4881A] font-bold block mb-1">
              {language === 'hi' ? 'शारीरिक प्रभाव' : language === 'es' ? 'Efecto Fisiológico' : 'Physiological Effect'}
            </span>
            <p className="text-xs sm:text-sm text-[#1A1A1E]/80">
              {activeRasa.effect}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1E284A] font-bold block mb-1">
              {language === 'hi' ? 'प्रमुख सामग्री' : language === 'es' ? 'Ingredientes Canónicos' : 'Canonical Ingredients'}
            </span>
            <p className="text-xs sm:text-sm text-[#1A1A1E]/80">
              {activeRasa.examples}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Regional Heritage Banquets (Menu-Style Editorial) */}
      <section className="relative z-10 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-1">
            {t('cuisinesEyebrow', 'Regional Banquets')}
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1E]">
            {t('cuisinesHeading', 'Gastronomic Terroirs of the Subcontinent')}
          </h2>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {REGIONAL_CUISINES.map((rawCuis) => {
            const cuis = getLocalizedCuisine(rawCuis, language);
            const isSelected = activeCuisine.id === cuis.id;
            return (
              <button
                key={cuis.id}
                onClick={() => setActiveCuisineId(cuis.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#B34728] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#1A1A1E]/80 border border-[#B34728]/20 hover:bg-[#F3EDE2]'
                }`}
              >
                {cuis.region.split(',')[0]}
              </button>
            );
          })}
        </div>

        {/* Menu Style Dossier */}
        <motion.div
          key={activeCuisine.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#FAF7F2] border border-[#B34728]/20 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#B34728]/15 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-1">
                {language === 'hi' ? 'क्षेत्रीय परंपरा' : language === 'es' ? 'Linaje Regional' : 'Regional Lineage'}: {activeCuisine.region}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#1A1A1E]">
                {activeCuisine.definingFlavor}
              </h3>
            </div>
            <div className="text-xs text-[#1A1A1E]/70 max-w-md bg-[#F3EDE2] p-3 rounded-xl border border-[#B34728]/15">
              <span className="font-bold text-[#1A1A1E] block mb-0.5">
                {language === 'hi' ? 'भोजन शिष्टाचार:' : language === 'es' ? 'Etiqueta Gastronómica:' : 'Dining Etiquette:'}
              </span>
              {activeCuisine.culturalEtiquette}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCuisine.iconicDishes.map((dish) => (
              <div
                key={dish.name}
                className="p-5 rounded-2xl bg-[#F3EDE2]/60 border border-[#B34728]/15 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-[#1A1A1E]">
                    {dish.name}
                  </h4>
                  <span className="font-serif text-base text-[#B34728] font-semibold">
                    {dish.nativeName}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#1A1A1E]/80 leading-relaxed font-sans">
                  {dish.description}
                </p>

                <div className="pt-3 border-t border-[#B34728]/10 flex flex-wrap gap-1.5">
                  {dish.keyIngredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FAF7F2] text-[#1A1A1E]/80 border border-[#B34728]/15"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#B34728]/15 flex items-center justify-between text-xs text-[#1A1A1E]/60">
            <span>
              {language === 'hi' ? 'बर्तन एवं तकनीक' : language === 'es' ? 'Vasija y Técnica' : 'Cooking Vessel & Technique'}: {activeCuisine.cookingTechnique}
            </span>
            <span className="font-mono text-[#B34728] font-semibold">
              {language === 'hi' ? 'पारंपरिक पाक शैली' : language === 'es' ? 'Tradición Culinaria' : 'Culinary Tradition'}
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

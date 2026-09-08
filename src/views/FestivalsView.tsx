import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FESTIVALS } from '../data/museumData';
import { Festival } from '../types';
import { ParticleTriggerOptions } from '../components/ParticleCanvas';
import { Sparkles, Flame, Calendar, Sun, Heart, Utensils, Info } from 'lucide-react';

interface FestivalsViewProps {
  onTriggerParticles: (options?: ParticleTriggerOptions) => void;
}

export const FestivalsView: React.FC<FestivalsViewProps> = ({ onTriggerParticles }) => {
  const [selectedFestival, setSelectedFestival] = useState<Festival>(FESTIVALS[0]);

  const handleFestivalSelect = (fest: Festival, e: React.MouseEvent) => {
    setSelectedFestival(fest);
    // Trigger physics-based localized micro-animation (user spec requirement)
    onTriggerParticles({
      x: e.clientX,
      y: e.clientY,
      type: fest.particleType as 'marigold' | 'gulal' | 'diyas' | 'dhunuchi',
      count: fest.particleType === 'marigold' ? 50 : 65
    });
  };

  const isDiwali = selectedFestival.atmosphereTheme === 'diwali';
  const isHoli = selectedFestival.atmosphereTheme === 'holi';
  const isOnam = selectedFestival.atmosphereTheme === 'onam';
  const isDurga = selectedFestival.atmosphereTheme === 'durga';

  return (
    <div
      className="min-h-[85vh] py-12 md:py-16 transition-colors duration-1000 ease-in-out relative overflow-hidden"
      style={{
        background: selectedFestival.bgGradient
      }}
    >
      {/* Atmosphere Specific Background Lighting Enhancements */}
      {isDiwali && (
        <div className="pointer-events-none absolute inset-0">
          {/* Glowing bokeh lamps around canvas */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-amber-500/15 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-orange-500/15 blur-3xl animate-pulse delay-700" />
        </div>
      )}

      {isHoli && (
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-10 left-1/3 w-64 h-64 rounded-full bg-rose-400/20 blur-3xl" />
          <div className="absolute bottom-10 right-1/3 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute top-1/2 right-10 w-56 h-56 rounded-full bg-amber-400/20 blur-3xl" />
        </div>
      )}

      {isOnam && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
          {/* Subtle concentric pookkalam geometry in background */}
          <svg viewBox="0 0 400 400" className="w-[600px] h-[600px] stroke-[#D4881A]">
            <circle cx="200" cy="200" r="180" fill="none" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="140" fill="none" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="100" fill="none" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="200" cy="200" r="60" fill="none" strokeWidth="2" />
          </svg>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span
            className="text-xs font-mono uppercase tracking-widest font-bold block"
            style={{ color: isDiwali ? '#F4C464' : '#B34728' }}
          >
            Cosmic Cycles & Collective Rites
          </span>
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-colors duration-500"
            style={{ color: isDiwali ? '#FFFFFF' : '#1A1A1E' }}
          >
            Seasonal Epics
          </h1>
          <p
            className="text-base leading-relaxed transition-colors duration-500 font-sans"
            style={{ color: isDiwali ? 'rgba(255,255,255,0.8)' : '#1A1A1E/80' }}
          >
            A dynamic calendar where ambient illumination and atmospheric colors morph with each festival.
            Click any festival card below to trigger a physical burst of marigold petals, gulal powders, or diya sparks.
          </p>
        </div>

        {/* Festival Calendar Cards Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FESTIVALS.map((fest) => {
            const isSelected = selectedFestival.id === fest.id;
            return (
              <motion.button
                key={fest.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => handleFestivalSelect(fest, e)}
                className={`p-5 rounded-2xl text-left transition-all border relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? isDiwali
                      ? 'bg-[#181D33] border-[#F4C464] shadow-2xl ring-1 ring-[#F4C464]'
                      : 'bg-[#FAF7F2] border-[#B34728] shadow-xl ring-1 ring-[#B34728]'
                    : isDiwali
                    ? 'bg-[#181D33]/60 border-white/10 text-white/80 hover:bg-[#181D33]'
                    : 'bg-[#FAF7F2]/80 border-[#B34728]/15 hover:bg-[#FAF7F2]'
                }`}
              >
                {/* Active Indicator Top line */}
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: fest.accentColor }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider font-bold"
                    style={{ color: isSelected ? fest.accentColor : '#888' }}
                  >
                    {fest.season.split('(')[0]}
                  </span>
                  <span
                    className="font-serif text-lg font-bold"
                    style={{ color: isSelected ? fest.accentColor : '#999' }}
                  >
                    {fest.sanskritName.split('/')[0]}
                  </span>
                </div>

                <h3
                  className="font-serif text-xl font-bold tracking-tight"
                  style={{ color: isDiwali ? '#FFFFFF' : '#1A1A1E' }}
                >
                  {fest.name.split(':')[0]}
                </h3>

                <p
                  className="text-xs mt-1"
                  style={{ color: isDiwali ? 'rgba(255,255,255,0.6)' : 'rgba(26,26,30,0.6)' }}
                >
                  {fest.monthRange}
                </p>

                <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span
                    className="text-[11px] font-medium flex items-center gap-1"
                    style={{ color: fest.accentColor }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Click for Physics Burst
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: fest.accentColor }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Festival Atmospheric Deep-Dive Exhibit */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFestival.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className={`rounded-3xl p-6 sm:p-10 border shadow-2xl transition-colors duration-700 ${
              isDiwali
                ? 'bg-[#131728]/95 border-[#F4C464]/30 text-white'
                : 'bg-[#FAF7F2]/95 border-[#B34728]/20 text-[#1A1A1E]'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Lore & Symbolism */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold"
                      style={{
                        backgroundColor: `${selectedFestival.accentColor}25`,
                        color: selectedFestival.accentColor
                      }}
                    >
                      {selectedFestival.monthRange}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: isDiwali ? 'rgba(255,255,255,0.6)' : 'rgba(26,26,30,0.6)' }}
                    >
                      {selectedFestival.season}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                    {selectedFestival.name}
                  </h2>

                  <p
                    className="font-serif italic text-lg sm:text-xl mt-2"
                    style={{ color: selectedFestival.accentColor }}
                  >
                    "{selectedFestival.symbolism}"
                  </p>
                </div>

                <div
                  className="p-5 rounded-2xl border"
                  style={{
                    backgroundColor: isDiwali ? 'rgba(255,255,255,0.05)' : '#F3EDE2',
                    borderColor: isDiwali ? 'rgba(255,255,255,0.1)' : 'rgba(179,71,40,0.15)'
                  }}
                >
                  <span
                    className="text-xs font-mono uppercase tracking-widest font-bold block mb-1"
                    style={{ color: selectedFestival.accentColor }}
                  >
                    Civilizational Lore & Narrative
                  </span>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: isDiwali ? 'rgba(255,255,255,0.85)' : '#1A1A1E/85' }}
                  >
                    {selectedFestival.lore}
                  </p>
                </div>

                {/* Cultural Traditions List */}
                <div>
                  <h4
                    className="text-xs font-mono uppercase tracking-widest font-bold mb-3"
                    style={{ color: selectedFestival.accentColor }}
                  >
                    Ritual Practices & Community Observances
                  </h4>
                  <div className="space-y-2.5">
                    {selectedFestival.traditions.map((trad, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm p-3 rounded-xl border"
                        style={{
                          backgroundColor: isDiwali ? 'rgba(255,255,255,0.03)' : '#FAF7F2',
                          borderColor: isDiwali ? 'rgba(255,255,255,0.08)' : 'rgba(179,71,40,0.1)'
                        }}
                      >
                        <Sparkles
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: selectedFestival.accentColor }}
                        />
                        <span style={{ color: isDiwali ? 'rgba(255,255,255,0.9)' : '#1A1A1E/90' }}>
                          {trad}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Culinary Offerings & Interactive Atmosphere Card */}
              <div className="lg:col-span-5 space-y-6">
                {/* Visual Motif Card */}
                <div
                  className="rounded-2xl p-6 border text-center space-y-4"
                  style={{
                    backgroundColor: isDiwali ? '#0B0E1B' : '#F3EDE2',
                    borderColor: selectedFestival.accentColor
                  }}
                >
                  <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl shadow-inner border border-white/20 bg-white/5">
                    {isDiwali && '🪔'}
                    {isHoli && '🎨'}
                    {isOnam && '🌼'}
                    {isDurga && '🪘'}
                  </div>

                  <div>
                    <span
                      className="text-xs font-mono uppercase tracking-widest font-bold block"
                      style={{ color: selectedFestival.accentColor }}
                    >
                      Atmospheric Physics Micro-State
                    </span>
                    <h4 className="font-serif text-xl font-bold mt-1">
                      {isDiwali && 'Midnight Illumination • Earthen Diya Sparks'}
                      {isHoli && 'Spring Equinox • Vibrant Gulal Clouds'}
                      {isOnam && 'Floral Pookkalam • Falling Marigold Petals'}
                      {isDurga && 'Dhunuchi Nritya • Camphor & Silt Incense'}
                    </h4>
                  </div>

                  <button
                    onClick={(e) => {
                      onTriggerParticles({
                        x: e.clientX,
                        y: e.clientY,
                        type: selectedFestival.particleType as 'marigold' | 'gulal' | 'diyas' | 'dhunuchi',
                        count: 60
                      });
                    }}
                    className="px-5 py-2.5 rounded-full font-medium text-xs shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                    style={{
                      backgroundColor: selectedFestival.accentColor,
                      color: isDiwali ? '#1A1A1E' : '#FFFFFF'
                    }}
                  >
                    Trigger {selectedFestival.particleType.toUpperCase()} Burst Again
                  </button>
                </div>

                {/* Festive Prasad & Gastronomy */}
                <div
                  className="rounded-2xl p-6 border space-y-4"
                  style={{
                    backgroundColor: isDiwali ? 'rgba(255,255,255,0.04)' : '#F3EDE2',
                    borderColor: isDiwali ? 'rgba(255,255,255,0.1)' : 'rgba(179,71,40,0.15)'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Utensils
                      className="w-4 h-4"
                      style={{ color: selectedFestival.accentColor }}
                    />
                    <h4 className="font-serif text-lg font-bold">
                      Sacred Festive Offerings (Bhog / Prasad)
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedFestival.culinaryHighlights.map((dish) => (
                      <span
                        key={dish}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          backgroundColor: isDiwali ? 'rgba(255,255,255,0.06)' : '#FAF7F2',
                          borderColor: isDiwali ? 'rgba(255,255,255,0.15)' : 'rgba(179,71,40,0.2)',
                          color: isDiwali ? '#F4C464' : '#B34728'
                        }}
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

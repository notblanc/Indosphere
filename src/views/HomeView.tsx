import React from 'react';
import { motion } from 'motion/react';
import { InteractiveIndiaMap } from '../components/InteractiveIndiaMap';
import { MagneticElement } from '../components/MagneticElement';
import { ExhibitRoom, Artifact } from '../types';
import { HISTORICAL_ERAS, FESTIVALS, CRAFT_TRADITIONS } from '../data/museumData';
import { ArrowRight, Sparkles, Compass, Eye, Shield, Feather, BookOpen, ExternalLink, UtensilsCrossed } from 'lucide-react';

interface HomeViewProps {
  onNavigateRoom: (room: ExhibitRoom) => void;
  onInspectArtifact: (artifact: Artifact) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateRoom, onInspectArtifact }) => {
  // Collect a few standout artifacts for the dynamic collage
  const collageArtifacts = HISTORICAL_ERAS.flatMap(era => era.artifacts).slice(0, 4);

  return (
    <div className="space-y-24 py-6 md:py-12">
      {/* 1. Curatorial Hero Entrance */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] border border-[#B34728]/20 text-xs font-mono tracking-widest text-[#B34728] uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4881A]" />
              Digital Museum Exhibition • The Living Canvas
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1E] leading-[1.08]">
              The Timeless Tapestry of <span className="italic font-normal text-[#B34728]">Bharat</span>
            </h1>

            <p className="text-base sm:text-lg text-[#1A1A1E]/80 leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              Moving beyond cliché to explore five millennia of unbroken philosophical inquiry,
              sacred geometry, metallurgical genius, and living aesthetic traditions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticElement intensity={0.2}>
                <button
                  onClick={() => onNavigateRoom('history')}
                  className="px-6 py-3 rounded-full bg-[#B34728] text-[#FAF7F2] font-medium text-sm hover:bg-[#8F341C] transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
                >
                  <span>Begin Curated Odyssey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticElement>

              <button
                onClick={() => onNavigateRoom('crafts')}
                className="px-6 py-3 rounded-full bg-[#F3EDE2] text-[#1A1A1E] font-medium text-sm hover:bg-[#EBE2D4] border border-[#B34728]/25 transition-all cursor-pointer"
              >
                Explore Artisan Masterworks
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
                Curatorial Thesis
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1E] leading-tight">
                Not a static relic, but a pulsating continuum.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#1A1A1E]/80 leading-relaxed">
              <p>
                In Indian thought, culture is defined as <em className="text-[#B34728] font-serif font-semibold">Sanskriti</em> — that which has been refined, purified, and elevated through conscious human contemplation. The traditions presented in this pavilion are not relics preserved in formaldehyde, but living practices practiced today with the exact same phonetic cadence, loom tension, and mudra geometry as three thousand years ago.
              </p>
              <p>
                From the municipal bronze age engineering of Dholavira to the profound non-dual axioms of Advaita Vedanta, this digital exhibit invites you to experience India as a multi-dimensional sensory tapestry.
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
              Curated Masterworks
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E] tracking-tight">
              Artifacts of Transcendence
            </h2>
          </div>
          <button
            onClick={() => onNavigateRoom('history')}
            className="text-xs font-semibold text-[#B34728] hover:text-[#8F341C] flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>View Complete Temporal Timeline</span>
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
            Navigational Wings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E] tracking-tight">
            Explore the Specialized Halls
          </h2>
          <p className="text-sm text-[#1A1A1E]/70 mt-2">
            Each hall features dedicated object animations, dynamic atmospheric transformations, and sensory breakdowns.
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
                Temporal Odyssey
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                Vertical parallax timeline detailing the Indus-Sarasvati urban grid to modern democratic constitutional India.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B34728] pt-2">
              <span>Enter Historical Hall</span>
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
                Cosmology & Arts
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                Linguistic diversity matrix, classical dance mudra gesture breakdowns, and the six schools of Indian Darshana.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4881A] pt-2">
              <span>Enter Culture Pavilion</span>
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
                Seasonal Epics
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                Dynamic calendar where lighting transforms into glowing oil lamps for Diwali, or falls into marigold petals for Onam.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E284A] pt-2">
              <span>Experience Festival Atmosphere</span>
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
                Mastery of Hands
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                Featuring an interactive rotating 3D terracotta clay pot, live shuttle thread-weaving loom, and Bidriware inlays.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8F341C] pt-2">
              <span>Visit Artisan Ateliers</span>
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
                Sensory Alchemy: Spices & The Six Rasas
              </h3>
              <p className="text-xs text-[#1A1A1E]/70 mt-1 leading-relaxed">
                Floating botanical spice elements in parallax motion, Ayurvedic flavor geometry, and royal regional banquets from Awadhi Dum to Chettinad stone pots.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#702632] pt-2">
              <span>Enter Gastronomic Hall</span>
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
                  New Feature
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1E] group-hover:text-[#B34728] transition-colors">
                  Journeyman
                </h3>
                <p className="text-xs text-[#1A1A1E]/75 leading-relaxed font-sans">
                  Embark on generative cultural expeditions, AI-guided historical tours, and living heritage explorations.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-[#B34728] pt-3 border-t border-[#B34728]/10">
              <span className="font-mono text-[11px] text-[#1A1A1E]/60 group-hover:text-[#B34728] transition-colors">
                journeyman.ai.studio
              </span>
              <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>Launch Journeyman</span>
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
                  New Feature
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1E] group-hover:text-[#702632] transition-colors">
                  FoodLens
                </h3>
                <p className="text-xs text-[#1A1A1E]/75 leading-relaxed font-sans">
                  AI-powered visual culinary analysis, exploring dishes, spice blends, ingredients, and Ayurvedic nutritional geometry.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-[#702632] pt-3 border-t border-[#702632]/10">
              <span className="font-mono text-[11px] text-[#1A1A1E]/60 group-hover:text-[#702632] transition-colors">
                foodlens-ai.ai.studio
              </span>
              <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>Launch FoodLens</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

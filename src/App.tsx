import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExhibitRoom, Artifact } from './types';
import { Navigation } from './components/Navigation';
import { ParticleCanvas, ParticleCanvasHandle, ParticleTriggerOptions } from './components/ParticleCanvas';
import { ArtifactModal } from './components/ArtifactModal';
import { HomeView } from './views/HomeView';
import { HistoryView } from './views/HistoryView';
import { CultureView } from './views/CultureView';
import { FestivalsView } from './views/FestivalsView';
import { CraftsView } from './views/CraftsView';
import { FoodView } from './views/FoodView';
import { EXHIBIT_ROOMS } from './data/museumData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ArrowUp } from 'lucide-react';

function MuseumAppContent() {
  const [currentRoom, setCurrentRoom] = useState<ExhibitRoom>('home');
  const [inspectedArtifact, setInspectedArtifact] = useState<Artifact | null>(null);
  const particleCanvasRef = useRef<ParticleCanvasHandle>(null);
  const { t } = useLanguage();

  const handleTriggerParticles = (options?: ParticleTriggerOptions) => {
    particleCanvasRef.current?.triggerBurst(options);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getRoomTitle = (roomId: string) => {
    switch (roomId) {
      case 'home':
        return t('homeRoom');
      case 'history':
        return t('historyRoom');
      case 'culture':
        return t('cultureRoom');
      case 'festivals':
        return t('festivalsRoom');
      case 'crafts':
        return t('craftsRoom');
      case 'food':
        return t('foodRoom');
      default:
        return roomId;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas-texture text-[#1A1A1E] font-sans selection:bg-[#B34728] selection:text-[#FAF7F2]">
      {/* Global Particle Simulation Canvas for physics bursts */}
      <ParticleCanvas ref={particleCanvasRef} />

      {/* Museum Header & Room Switcher */}
      <Navigation
        currentRoom={currentRoom}
        onSelectRoom={(room) => {
          setCurrentRoom(room);
          scrollToTop();
        }}
      />

      {/* Main Exhibition Hall with Magazine-style Restrained Page Transitions */}
      <main className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoom}
            initial={{ opacity: 0, filter: 'blur(6px)', y: 8 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(6px)', y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {currentRoom === 'home' && (
              <HomeView
                onNavigateRoom={(room) => {
                  setCurrentRoom(room);
                  scrollToTop();
                }}
                onInspectArtifact={(art) => setInspectedArtifact(art)}
              />
            )}

            {currentRoom === 'history' && (
              <HistoryView
                onInspectArtifact={(art) => setInspectedArtifact(art)}
              />
            )}

            {currentRoom === 'culture' && (
              <CultureView />
            )}

            {currentRoom === 'festivals' && (
              <FestivalsView
                onTriggerParticles={handleTriggerParticles}
              />
            )}

            {currentRoom === 'crafts' && (
              <CraftsView />
            )}

            {currentRoom === 'food' && (
              <FoodView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Artifact Detailed Inspector Modal */}
      <ArtifactModal
        artifact={inspectedArtifact}
        onClose={() => setInspectedArtifact(null)}
      />

      {/* Curatorial Footer */}
      <footer className="border-t border-[#B34728]/15 bg-[#F3EDE2]/80 mt-20 pt-14 pb-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#B34728]/15">
            {/* Museum Identity */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#B34728] text-white flex items-center justify-center font-serif font-bold text-base shadow-sm">
                  य
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1E]">
                  {t('museumTitle')}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#1A1A1E]/75 leading-relaxed max-w-sm">
                A contemporary digital museum pavilion honoring the sacred geometries, metallurgical science,
                linguistic diversity, and philosophical inquiry of the Indian subcontinent.
              </p>
              <div className="text-[11px] font-mono text-[#B34728] uppercase tracking-wider font-semibold">
                Curated with UNESCO Intangible Cultural Heritage Standards
              </div>
            </div>

            {/* Wings & Exhibition Rooms */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block">
                {t('exhibitHalls')}
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {EXHIBIT_ROOMS.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => {
                      setCurrentRoom(room.id as ExhibitRoom);
                      scrollToTop();
                    }}
                    className={`text-left py-1 hover:text-[#B34728] transition-colors cursor-pointer ${
                      currentRoom === room.id ? 'font-semibold text-[#B34728]' : 'text-[#1A1A1E]/80'
                    }`}
                  >
                    {getRoomTitle(room.id)}
                  </button>
                ))}
              </div>
            </div>

            {/* Curator Notes & Back to Top */}
            <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-1">
                  Exhibition Note
                </span>
                <p className="text-xs text-[#1A1A1E]/70 italic leading-relaxed">
                  "Vasudhaiva Kutumbakam — The World is One Family. In every woven silk thread and ringing bronze bell, the cosmos is remembered."
                </p>
              </div>

              <button
                onClick={scrollToTop}
                className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#B34728]/25 text-xs text-[#1A1A1E] hover:text-[#B34728] transition-colors shadow-sm cursor-pointer"
              >
                <span>Ascend to Zenith</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1A1A1E]/60 gap-4">
            <div>
              © 2026 The Living Canvas • An Interactive Cultural Museum Experience
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span>Web Audio Synthetic Tanpura</span>
              <span>•</span>
              <span>Physics Particle Kinetics</span>
              <span>•</span>
              <span>3D Lathe Kinematics</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MuseumAppContent />
    </LanguageProvider>
  );
}

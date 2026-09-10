import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Artifact } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedArtifact } from '../data/translationsData';
import { X, Sparkles, MapPin, Calendar, Tag, ShieldCheck } from 'lucide-react';

interface ArtifactModalProps {
  artifact: Artifact | null;
  onClose: () => void;
}

export const ArtifactModal: React.FC<ArtifactModalProps> = ({ artifact: rawArtifact, onClose }) => {
  const { language, t } = useLanguage();
  if (!rawArtifact) return null;

  const artifact = getLocalizedArtifact(rawArtifact, language);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#12182E]/80 backdrop-blur-md">
        {/* Backdrop click to dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl bg-[#FAF7F2] rounded-2xl border border-[#B34728]/25 shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FAF7F2]/90 hover:bg-[#B34728] text-[#1A1A1E] hover:text-white transition-colors border border-[#B34728]/20 shadow-md cursor-pointer"
            aria-label="Close artifact viewer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Artifact Visual Pane */}
            <div className="md:col-span-6 bg-[#19191C] relative flex items-center justify-center min-h-[300px] md:min-h-[460px] p-6">
              <img
                src={artifact.imageUrl}
                alt={artifact.title}
                className="max-h-[380px] w-auto object-contain rounded-lg drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[11px] font-mono tracking-widest text-white/60 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Exhibit ID: {artifact.id.toUpperCase()} • {t('archiveCollection', 'Archive Collection')}
                </span>
              </div>
            </div>

            {/* Artifact Curatorial Essay Pane */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest font-mono text-[#B34728] font-bold">
                    {artifact.category}
                  </span>
                  <span className="text-[#1A1A1E]/30">•</span>
                  <span className="text-xs font-mono text-[#1A1A1E]/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {artifact.era}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1E] tracking-tight mb-2">
                  {artifact.title}
                </h2>

                <p className="text-sm font-serif italic text-[#B34728] mb-4">
                  {artifact.subtitle}
                </p>

                {/* Provenance specs */}
                <div className="bg-[#F3EDE2] rounded-xl p-3.5 border border-[#B34728]/15 space-y-2 mb-4 text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#B34728] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1A1A1E]">{t('artifactOriginLabel', 'Origin')}:</span>{' '}
                      <span className="text-[#1A1A1E]/80">{artifact.origin}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4881A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1A1A1E]">{t('artifactMediumLabel', 'Medium / Material')}:</span>{' '}
                      <span className="text-[#1A1A1E]/80">{artifact.medium}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#1A1A1E]/85 leading-relaxed mb-4">
                  {artifact.description}
                </p>

                {/* Curatorial Note */}
                <div className="border-l-2 border-[#B34728] pl-3 py-1 bg-[#B34728]/5 rounded-r-lg mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B34728] font-semibold block mb-0.5">
                    {t('curatorReflection', 'Curator’s Reflection')}
                  </span>
                  <p className="text-xs text-[#1A1A1E]/80 italic">
                    {artifact.curatorNote}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#B34728]/15">
                {artifact.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] bg-[#F3EDE2] text-[#1A1A1E]/70 font-mono"
                  >
                    <Tag className="w-2.5 h-2.5 text-[#B34728]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

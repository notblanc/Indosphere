import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HISTORICAL_ERAS } from '../data/museumData';
import { Artifact, HistoricalEra } from '../types';
import { MagneticElement } from '../components/MagneticElement';
import { Sparkles, ArrowRight, Eye, Landmark, CheckCircle2, ChevronDown } from 'lucide-react';

interface HistoryViewProps {
  onInspectArtifact: (artifact: Artifact) => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({ onInspectArtifact }) => {
  const [selectedEra, setSelectedEra] = useState<string>(HISTORICAL_ERAS[0].id);

  return (
    <div className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block">
          Chronological Tapestry • 3300 BCE – Present
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1E]">
          Temporal Odyssey
        </h1>
        <p className="text-base text-[#1A1A1E]/80 leading-relaxed font-sans">
          Tracing five millennia of philosophical evolution, urban civil planning, epigraphical records,
          and monumental architecture across the subcontinent. Hover over each epoch to feel its magnetic resonance.
        </p>
      </div>

      {/* Vertical Parallax Timeline Container */}
      <div className="relative border-l-2 border-[#B34728]/25 pl-6 sm:pl-10 ml-2 sm:ml-6 space-y-24">
        {HISTORICAL_ERAS.map((era, index) => {
          return (
            <div
              key={era.id}
              className="relative group"
            >
              {/* Timeline Node marker */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#FAF7F2] border-2 border-[#B34728] flex items-center justify-center shadow-sm group-hover:scale-125 transition-transform"
                style={{ borderColor: era.colorTone }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full transition-colors"
                  style={{ backgroundColor: era.colorTone }}
                />
              </div>

              {/* Main Era Card with Magnetic title and expanding background image on hover */}
              <div className="bg-[#FAF7F2] border border-[#B34728]/20 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl">
                {/* Visual Backdrop Header */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-[#1A1A1E]">
                  {/* Expanding background image on hover (user spec requirement) */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${era.artifacts[0]?.imageUrl || 'https://images.unsplash.com/photo-1548013146-72479768bada'})`,
                      filter: 'brightness(0.75) contrast(1.05)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1E] via-[#1A1A1E]/40 to-transparent" />

                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white">
                    <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      Epoch 0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-[#E5A93C] font-semibold bg-black/40 px-2.5 py-1 rounded backdrop-blur-sm">
                      {era.period}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl">
                    {/* Magnetic Pull Effect on Era Title (user spec requirement) */}
                    <MagneticElement intensity={0.3}>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
                        {era.name}
                      </h2>
                    </MagneticElement>
                    <p className="text-sm font-serif italic text-[#E5A93C] mt-2">
                      {era.tagline}
                    </p>
                  </div>
                </div>

                {/* Content & Curatorial Breakdown */}
                <div className="p-6 sm:p-10 space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Overview & Significance */}
                    <div className="lg:col-span-7 space-y-5">
                      <div>
                        <h3 className="text-xs uppercase font-mono tracking-widest text-[#B34728] font-bold mb-2">
                          Civilizational Overview
                        </h3>
                        <p className="text-sm sm:text-base text-[#1A1A1E]/85 leading-relaxed font-sans">
                          {era.overview}
                        </p>
                      </div>

                      <div className="border-l-2 border-[#D4881A] pl-4 py-1 bg-[#F3EDE2]/50 rounded-r-lg">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#D4881A] font-bold block mb-1">
                          Historical Legacy
                        </span>
                        <p className="text-xs sm:text-sm text-[#1A1A1E]/80 italic">
                          {era.significance}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs uppercase font-mono tracking-widest text-[#1A1A1E]/60 font-semibold block mb-2">
                          Architectural Hallmark
                        </span>
                        <div className="text-xs sm:text-sm text-[#1A1A1E] font-medium bg-[#F3EDE2] p-3 rounded-xl border border-[#B34728]/15 flex items-start gap-2">
                          <Landmark className="w-4 h-4 text-[#B34728] shrink-0 mt-0.5" />
                          <span>{era.architecturalStyle}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Innovations */}
                    <div className="lg:col-span-5 bg-[#F3EDE2]/60 rounded-2xl p-6 border border-[#B34728]/15 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold mb-4 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#D4881A]" />
                          Epoch Innovations
                        </h4>
                        <ul className="space-y-3">
                          {era.keyInnovations.map((innovation, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1A1E]/85">
                              <CheckCircle2 className="w-4 h-4 text-[#B34728] shrink-0 mt-0.5" />
                              <span>{innovation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 mt-6 border-t border-[#B34728]/15">
                        <span className="text-[11px] font-mono text-[#1A1A1E]/60 block mb-2">
                          Masterpieces in Museum Archive ({era.artifacts.length})
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {era.artifacts.map((art) => (
                            <button
                              key={art.id}
                              onClick={() => onInspectArtifact(art)}
                              className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] text-[#B34728] border border-[#B34728]/25 hover:bg-[#B34728] hover:text-white transition-all text-xs font-medium flex items-center gap-1.5 shadow-sm cursor-pointer"
                            >
                              <Eye className="w-3 h-3" />
                              <span>{art.title.split(':')[0]}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Artifact Showcase Grid for this Era */}
                  <div className="pt-6 border-t border-[#B34728]/15">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1E]/70 font-semibold">
                        Key Artifacts & Inscriptions
                      </span>
                      <span className="text-xs text-[#B34728] font-medium">Click to inspect provenance</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {era.artifacts.map((art) => (
                        <div
                          key={art.id}
                          onClick={() => onInspectArtifact(art)}
                          className="flex items-center gap-4 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#B34728]/15 hover:border-[#B34728] hover:shadow-md transition-all cursor-pointer group/art"
                        >
                          <img
                            src={art.imageUrl}
                            alt={art.title}
                            className="w-16 h-16 rounded-lg object-cover bg-neutral-900 shrink-0 group-hover/art:scale-105 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B34728] block">
                              {art.origin}
                            </span>
                            <h5 className="font-serif font-bold text-sm text-[#1A1A1E] truncate group-hover/art:text-[#B34728] transition-colors">
                              {art.title}
                            </h5>
                            <p className="text-xs text-[#1A1A1E]/60 truncate font-sans">
                              {art.medium}
                            </p>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-[#F3EDE2] text-[#1A1A1E] flex items-center justify-center shrink-0 group-hover/art:bg-[#B34728] group-hover/art:text-white transition-colors">
                            <Eye className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

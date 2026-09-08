import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLASSICAL_DANCES, INDIAN_LANGUAGES, PHILOSOPHICAL_SCHOOLS } from '../data/museumData';
import { ClassicalDance, IndianLanguage, PhilosophicalSchool } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Film,
  Music,
  Radio,
  BookOpen,
  Hand,
  Compass,
  RotateCcw,
  CheckCircle2,
  Globe
} from 'lucide-react';

export const CultureView: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'dance' | 'language' | 'philosophy'>('dance');
  const [selectedDance, setSelectedDance] = useState<ClassicalDance>(CLASSICAL_DANCES[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<IndianLanguage>(INDIAN_LANGUAGES[0]);
  const [selectedPhilosophy, setSelectedPhilosophy] = useState<PhilosophicalSchool>(PHILOSOPHICAL_SCHOOLS[0]);
  const [activeMudraIdx, setActiveMudraIdx] = useState<number>(0);

  // Video Player state
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Audio / Narration Player state
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(180); // simulated standard track 3 mins
  const audioIntervalRef = useRef<number | null>(null);

  // Audio tone synth for musical immersion
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  // When dance changes, reset players
  useEffect(() => {
    setIsVideoPlaying(false);
    setIsAudioPlaying(false);
    setAudioProgress(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    stopSyntheticDrone();
  }, [selectedDance]);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // pause audio player if running
      if (isAudioPlaying) toggleAudioPlayback();
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true);
      }).catch(() => {
        setIsVideoPlaying(true);
      });
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsVideoMuted(videoRef.current.muted);
  };

  const handleFullscreenVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Synthetic Raga Tanpura Drone + Audio progress simulation
  const startSyntheticDrone = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Root note Sa (C3 ~ 130.81Hz) + Pa (G3 ~ 196Hz)
      const baseFreq = 130.81;
      const pitches = [baseFreq, baseFreq * 1.5, baseFreq * 2];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);

      oscNodesRef.current = pitches.map((pitch, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx === 0 ? 'sawtooth' : 'sine';
        osc.frequency.setValueAtTime(pitch, ctx.currentTime);
        gain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        return osc;
      });
    } catch {
      // Audio context might be restricted before gesture
    }
  };

  const stopSyntheticDrone = () => {
    oscNodesRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    oscNodesRef.current = [];
  };

  const toggleAudioPlayback = () => {
    if (isAudioPlaying) {
      setIsAudioPlaying(false);
      stopSyntheticDrone();
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
        audioIntervalRef.current = null;
      }
    } else {
      // Pause video if playing
      if (isVideoPlaying && videoRef.current) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
      setIsAudioPlaying(true);
      startSyntheticDrone();
      audioIntervalRef.current = window.setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsAudioPlaying(false);
            stopSyntheticDrone();
            return 0;
          }
          return prev + 1;
        });
      }, 400);
    }
  };

  useEffect(() => {
    return () => {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
      stopSyntheticDrone();
    };
  }, []);

  // Localized text getters
  const getDanceHistory = (dance: ClassicalDance) => {
    return dance.historyLocalized?.[language] || dance.historyLocalized?.en || dance.history || dance.originEra;
  };

  const getDanceSignificance = (dance: ClassicalDance) => {
    return dance.significanceLocalized?.[language] || dance.significanceLocalized?.en || dance.significance || dance.philosophy;
  };

  const getDanceNarration = (dance: ClassicalDance) => {
    return dance.narration?.[language] || dance.narration?.en || dance.mood;
  };

  return (
    <div className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block">
          {t('intangibleHeritage')}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1E]">
          {t('cosmologyArtsTitle')}
        </h1>
        <p className="text-base text-[#1A1A1E]/80 leading-relaxed font-sans">
          {t('cosmologyArtsDesc')}
        </p>

        {/* Pillar Sub-Tabs */}
        <div className="flex flex-wrap gap-2 pt-4">
          <button
            onClick={() => setActiveTab('dance')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'dance'
                ? 'bg-[#B34728] text-white shadow-md ring-2 ring-[#B34728]/20'
                : 'bg-[#FAF7F2] text-[#1A1A1E]/80 border border-[#B34728]/20 hover:bg-[#F3EDE2]'
            }`}
          >
            {t('tabDance')} ({CLASSICAL_DANCES.length})
          </button>
          <button
            onClick={() => setActiveTab('language')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'language'
                ? 'bg-[#D4881A] text-white shadow-md ring-2 ring-[#D4881A]/20'
                : 'bg-[#FAF7F2] text-[#1A1A1E]/80 border border-[#B34728]/20 hover:bg-[#F3EDE2]'
            }`}
          >
            {t('tabLanguage')} ({INDIAN_LANGUAGES.length})
          </button>
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'philosophy'
                ? 'bg-[#1E284A] text-white shadow-md ring-2 ring-[#1E284A]/20'
                : 'bg-[#FAF7F2] text-[#1A1A1E]/80 border border-[#B34728]/20 hover:bg-[#F3EDE2]'
            }`}
          >
            {t('tabPhilosophy')} ({PHILOSOPHICAL_SCHOOLS.length})
          </button>
        </div>
      </div>

      {/* 1. CLASSICAL DANCE PILLAR */}
      {activeTab === 'dance' && (
        <motion.div
          key="dance"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="space-y-12"
        >
          {/* Classical Dance Selector Ribbon */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold">
                {t('tabDance')}
              </span>
              <span className="text-[11px] font-mono text-[#1A1A1E]/60">
                Sangeet Natak Akademi Canonical Forms
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {CLASSICAL_DANCES.map((dance) => {
                const isSelected = selectedDance.id === dance.id;
                return (
                  <button
                    key={dance.id}
                    onClick={() => {
                      setSelectedDance(dance);
                      setActiveMudraIdx(0);
                    }}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#FAF7F2] border-[#B34728] shadow-md ring-2 ring-[#B34728]/30'
                        : 'bg-[#F3EDE2]/60 border-[#B34728]/15 hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[#B34728] font-bold block truncate">
                        {dance.state.split(',')[0]}
                      </span>
                      <h3 className="font-serif font-bold text-sm text-[#1A1A1E] leading-tight mt-0.5">
                        {dance.name}
                      </h3>
                    </div>
                    {isSelected && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B34728] mt-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE DANCE SHOWCASE: VIDEO PERFORMANCE & MUSIC/NARRATION STUDIO */}
          <div className="bg-[#FAF7F2] border border-[#B34728]/25 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
            {/* Title & Metadata Ribbon */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#B34728]/15">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#B34728] text-white">
                    {t('originState')}: {selectedDance.state}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F3EDE2] text-[#1A1A1E] border border-[#B34728]/15">
                    {selectedDance.originEra}
                  </span>
                  {selectedDance.nativeName && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-serif font-bold text-[#B34728]">
                      {selectedDance.nativeName}
                    </span>
                  )}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1E] tracking-tight">
                  {selectedDance.name}
                </h2>
                <p className="text-sm sm:text-base font-serif italic text-[#B34728]">
                  "{selectedDance.mood}"
                </p>
              </div>

              {/* Raga & Tala Quick Badge */}
              <div className="bg-[#F3EDE2] border border-[#B34728]/20 rounded-2xl p-3.5 space-y-1 text-right self-start md:self-auto min-w-[220px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B34728] font-bold block">
                  {t('ragaTalaLabel')}
                </span>
                <div className="text-xs font-serif font-bold text-[#1A1A1E]">
                  {selectedDance.raga || 'Traditional Melodic Cycle'}
                </div>
                <div className="text-[11px] font-mono text-[#1A1A1E]/70">
                  {selectedDance.tala || 'Adi Tala (8 Beats)'}
                </div>
              </div>
            </div>

            {/* VIDEO & AUDIO SECTION (User explicit request) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Embedded High-Quality Performance Video */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-[#B34728]" />
                    <h4 className="font-serif font-bold text-lg text-[#1A1A1E]">
                      {t('danceVideoHeading')}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[#B34728] uppercase font-bold tracking-wider">
                    HD Archive Recital
                  </span>
                </div>

                {/* Video Player Container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1A1A1E] border border-[#B34728]/30 shadow-md group">
                  {selectedDance.videoUrl?.includes('embed') || selectedDance.videoUrl?.includes('youtube') ? (
                    isVideoPlaying ? (
                      <iframe
                        src={`${selectedDance.videoUrl}${selectedDance.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                        title={selectedDance.videoTitle || selectedDance.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={selectedDance.videoPoster || 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80'}
                          alt={selectedDance.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

                        {/* Top Label */}
                        <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between text-white pointer-events-none">
                          <div className="text-xs sm:text-sm font-serif font-bold tracking-wide drop-shadow-sm">
                            {selectedDance.videoTitle || `${selectedDance.name} Performance Recital`}
                          </div>
                          <span className="text-[10px] font-mono uppercase bg-[#B34728] px-2 py-0.5 rounded text-white font-bold">
                            Curatorial Archive
                          </span>
                        </div>

                        {/* Center Play Button Overlay */}
                        <button
                          onClick={() => {
                            if (isAudioPlaying) toggleAudioPlayback();
                            setIsVideoPlaying(true);
                          }}
                          className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B34728]/90 text-white flex items-center justify-center shadow-xl backdrop-blur-xs hover:bg-[#8F341C] hover:scale-105 transition-all cursor-pointer group-hover:ring-4 group-hover:ring-[#B34728]/30"
                          aria-label="Play performance recital"
                        >
                          <Play className="w-8 h-8 ml-1 fill-white" />
                        </button>

                        {/* Bottom Bar Preview */}
                        <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between text-white text-xs">
                          <span className="font-mono text-[11px] opacity-90">
                            {selectedDance.performerName || 'Sangeet Natak Akademi Archive'}
                          </span>
                          <span className="font-mono text-[10px] bg-white/20 px-2 py-0.5 rounded text-white">
                            Click to Stream Video
                          </span>
                        </div>
                      </div>
                    )
                  ) : (
                    <>
                      <video
                        ref={videoRef}
                        src={selectedDance.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'}
                        poster={selectedDance.videoPoster || 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80'}
                        playsInline
                        loop
                        className="w-full h-full object-cover"
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                      />

                      {/* Top Gradient & Performance Label */}
                      <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-center justify-between text-white pointer-events-none">
                        <div className="text-xs sm:text-sm font-serif font-bold tracking-wide drop-shadow-sm">
                          {selectedDance.videoTitle || `${selectedDance.name} Performance Recital`}
                        </div>
                        <span className="text-[10px] font-mono uppercase bg-[#B34728] px-2 py-0.5 rounded text-white font-bold">
                          Curatorial Archive
                        </span>
                      </div>

                      {/* Center Play/Pause Big Button Overlay */}
                      {!isVideoPlaying && (
                        <button
                          onClick={toggleVideoPlayback}
                          className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B34728]/90 text-white flex items-center justify-center shadow-xl backdrop-blur-xs hover:bg-[#8F341C] hover:scale-105 transition-all cursor-pointer"
                          aria-label="Play performance video"
                        >
                          <Play className="w-8 h-8 ml-1 fill-white" />
                        </button>
                      )}

                      {/* Bottom Video Controls Bar */}
                      <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between text-white opacity-95 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={toggleVideoPlayback}
                            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                            title={isVideoPlaying ? 'Pause' : 'Play'}
                          >
                            {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                          </button>

                          <button
                            onClick={toggleVideoMute}
                            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                            title={isVideoMuted ? 'Unmute' : 'Mute'}
                          >
                            {isVideoMuted ? <VolumeX className="w-4 h-4 text-red-300" /> : <Volume2 className="w-4 h-4" />}
                          </button>

                          <span className="text-[11px] font-mono opacity-80 hidden sm:inline">
                            {selectedDance.performerName || 'Sangeet Natak Akademi Archive'}
                          </span>
                        </div>

                        <button
                          onClick={handleFullscreenVideo}
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                          title="Fullscreen"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  )}
                </div>

                <div className="text-xs text-[#1A1A1E]/70 flex items-center justify-between px-1">
                  <span>Archival footage: {selectedDance.performerName || 'Sangeet Natak Akademi'}</span>
                  <span className="font-mono text-[10px] text-[#B34728]">High-definition 1080p</span>
                </div>
              </div>

              {/* Right Column: Audio Console & Oral Narration */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-[#B34728]" />
                    <h4 className="font-serif font-bold text-lg text-[#1A1A1E]">
                      {t('danceMusicHeading')}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[#D4881A] font-bold">
                    {selectedDance.tala?.split(' ')[0] || 'Tala'}
                  </span>
                </div>

                {/* Audio Interactive Deck */}
                <div className="bg-[#F3EDE2] rounded-2xl p-5 border border-[#B34728]/20 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#B34728] font-bold">
                        Acoustic & Spoken Track
                      </span>
                      <h5 className="font-serif font-bold text-base text-[#1A1A1E]">
                        {selectedDance.audioTitle || `${selectedDance.name} Melodic Suite`}
                      </h5>
                    </div>

                    <button
                      onClick={toggleAudioPlayback}
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-sm cursor-pointer ${
                        isAudioPlaying
                          ? 'bg-[#B34728] text-white ring-4 ring-[#B34728]/20 scale-105'
                          : 'bg-[#FAF7F2] text-[#B34728] border border-[#B34728]/30 hover:bg-[#B34728] hover:text-white'
                      }`}
                      aria-label="Toggle narration and music playback"
                    >
                      {isAudioPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      )}
                    </button>
                  </div>

                  {/* Waveform / Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="w-full bg-[#FAF7F2] h-2 rounded-full overflow-hidden border border-[#B34728]/15">
                      <div
                        className="bg-[#B34728] h-full transition-all duration-300"
                        style={{ width: `${audioProgress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#1A1A1E]/60">
                      <span>{Math.floor((audioProgress / 100) * 180)}s</span>
                      <span className="flex items-center gap-1 text-[#B34728] font-bold">
                        {isAudioPlaying && <span className="w-1.5 h-1.5 rounded-full bg-[#B34728] animate-ping" />}
                        {isAudioPlaying ? 'Streaming Tanpura & Oral Lore' : 'Ready to stream'}
                      </span>
                      <span>3:00</span>
                    </div>
                  </div>

                  {/* Accompanying Instruments Badges */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1E]/70 font-semibold block">
                      {t('traditionalInstruments')}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(selectedDance.traditionalInstruments || ['Mridangam', 'Nattuvangam', 'Flute', 'Violin']).map((inst) => (
                        <span
                          key={inst}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#B34728]/15 text-[11px] font-medium text-[#1A1A1E]"
                        >
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spoken Oral Narration Text Box with Localized Switch */}
                  <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#B34728]/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#B34728] font-bold flex items-center gap-1">
                        <Radio className="w-3 h-3" />
                        Oral Narration Script
                      </span>
                      <span className="text-[10px] font-mono text-[#1A1A1E]/50 uppercase">
                        [{language.toUpperCase()}]
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1A1A1E]/85 leading-relaxed italic">
                      "{getDanceNarration(selectedDance)}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DESCRIPTIONS OF DANCE HISTORY AND PHILOSOPHICAL SIGNIFICANCE (User explicit request) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#B34728]/15">
              {/* History Section */}
              <div className="bg-[#F3EDE2]/70 rounded-2xl p-6 border border-[#B34728]/20 space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#B34728]" />
                  <h4 className="font-serif font-bold text-lg text-[#1A1A1E]">
                    {t('danceHistoryHeading')}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#1A1A1E]/85 leading-relaxed font-sans">
                  {getDanceHistory(selectedDance)}
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#B34728]">
                  Historical Lineage: {selectedDance.originEra}
                </div>
              </div>

              {/* Cosmic & Philosophical Significance Section */}
              <div className="bg-[#F3EDE2]/70 rounded-2xl p-6 border border-[#B34728]/20 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4881A]" />
                  <h4 className="font-serif font-bold text-lg text-[#1A1A1E]">
                    {t('danceSignificanceHeading')}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#1A1A1E]/85 leading-relaxed font-sans">
                  {getDanceSignificance(selectedDance)}
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#D4881A]">
                  Primary Rasa / Bhava: {selectedDance.mood}
                </div>
              </div>
            </div>

            {/* INTERACTIVE MUDRAS & RHYTHMIC METER ENGINE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#B34728]/15">
              {/* Mudra Hand Gesture Explorer */}
              <div className="lg:col-span-7 bg-[#F3EDE2]/90 rounded-2xl p-6 border border-[#B34728]/20 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#B34728]/15">
                  <div className="flex items-center gap-2">
                    <Hand className="w-4 h-4 text-[#B34728]" />
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A1A1E]">
                      {t('sacredMudras')}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#B34728] font-bold">
                    {activeMudraIdx + 1} / {selectedDance.primaryMudras.length}
                  </span>
                </div>

                <p className="text-xs text-[#1A1A1E]/70 italic">
                  {t('interactiveMudrasHint')}
                </p>

                {/* Mudra Selector Tabs */}
                <div className="flex flex-wrap gap-2">
                  {selectedDance.primaryMudras.map((mudra, idx) => (
                    <button
                      key={mudra.name}
                      onClick={() => setActiveMudraIdx(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        activeMudraIdx === idx
                          ? 'bg-[#B34728] text-white font-bold shadow-xs'
                          : 'bg-[#FAF7F2] text-[#1A1A1E]/75 hover:text-[#B34728] border border-[#B34728]/15'
                      }`}
                    >
                      {mudra.name.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Active Mudra Interactive Card */}
                {selectedDance.primaryMudras[activeMudraIdx] && (
                  <motion.div
                    key={selectedDance.primaryMudras[activeMudraIdx].name}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#FAF7F2] rounded-xl p-5 border border-[#B34728]/15 shadow-sm space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1E]">
                        {selectedDance.primaryMudras[activeMudraIdx].name}
                      </h5>
                      <span className="w-8 h-8 rounded-full bg-[#B34728]/10 text-[#B34728] flex items-center justify-center font-bold text-sm">
                        ✋
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#B34728] font-bold block mb-0.5">
                        Gesture Anatomy
                      </span>
                      <p className="text-xs sm:text-sm text-[#1A1A1E]/85">
                        {selectedDance.primaryMudras[activeMudraIdx].gestureDescription}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4881A] font-bold block mb-0.5">
                        Dramaturgical Symbolism (Viniyoga)
                      </span>
                      <p className="text-xs sm:text-sm text-[#1A1A1E]/80 italic">
                        "{selectedDance.primaryMudras[activeMudraIdx].symbolism}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Rhythmic Meter & Costume Information */}
              <div className="lg:col-span-5 space-y-4">
                {/* Tala Beat Cycle */}
                <div className="bg-[#F3EDE2]/90 rounded-2xl p-5 border border-[#B34728]/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#B34728] font-bold">
                      Rhythmic Meter (Adi Tala: 8 Beats)
                    </span>
                    <span className="text-[10px] font-mono text-[#1A1A1E]/60">Laghu + Dhrutam</span>
                  </div>

                  <div className="grid grid-cols-8 gap-1.5 pt-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((beat) => (
                      <div
                        key={beat}
                        className={`h-12 rounded-lg flex flex-col items-center justify-center text-xs font-mono transition-all ${
                          beat === 1 || beat === 5
                            ? 'bg-[#B34728] text-white font-bold shadow-xs'
                            : 'bg-[#FAF7F2] text-[#1A1A1E]/80 border border-[#B34728]/15'
                        }`}
                      >
                        <span className="text-[9px] opacity-70">B</span>
                        <span className="text-xs font-bold">{beat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-[#1A1A1E]/70 flex justify-between pt-1">
                    <span>Samam (Beat 1 Strike)</span>
                    <span>Tala Cycle Claps (1, 5, 7)</span>
                  </div>
                </div>

                {/* Textile & Ornamentation Note */}
                <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#B34728]/20 space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#1E284A] font-bold block">
                    Textile & Sacramental Ornamentation
                  </span>
                  <p className="text-xs sm:text-sm text-[#1A1A1E]/80 leading-relaxed">
                    {selectedDance.costumeFabric}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. LINGUISTIC DIVERSITY PILLAR */}
      {activeTab === 'language' && (
        <motion.div
          key="language"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="space-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Language Selection Matrix */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block mb-1">
                Select Canonical Language
              </span>
              {INDIAN_LANGUAGES.map((lang) => {
                const isSelected = selectedLanguage.name === lang.name;
                return (
                  <button
                    key={lang.name}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FAF7F2] border-[#D4881A] shadow-md ring-1 ring-[#D4881A]'
                        : 'bg-[#F3EDE2]/50 border-[#B34728]/15 hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-lg font-bold text-[#1A1A1E]">
                          {lang.name}
                        </h4>
                        {lang.classicalStatus && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D4881A]/15 text-[#D4881A] font-semibold">
                            Classical Status
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#1A1A1E]/60 font-mono">
                        {lang.family} • {lang.speakersCount}
                      </span>
                    </div>

                    <span className="text-2xl font-serif text-[#B34728] font-semibold ml-4">
                      {lang.nativeScript}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Language Typographic Display */}
            <div className="lg:col-span-7">
              <motion.div
                key={selectedLanguage.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FAF7F2] border border-[#B34728]/20 rounded-3xl p-8 sm:p-10 shadow-sm space-y-8"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D4881A] font-bold">
                      {selectedLanguage.scriptName}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F3EDE2] text-[#1A1A1E] font-medium">
                      Language Family: {selectedLanguage.family}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1E]">
                    {selectedLanguage.name} ({selectedLanguage.nativeScript})
                  </h3>
                </div>

                {/* Monumental Calligraphy / Phrase Box */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#F3EDE2] to-[#FAF7F2] border border-[#B34728]/20 text-center space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B34728] font-bold block">
                    Seminal Axiom in Native Lipi
                  </span>
                  <div className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1E] leading-relaxed tracking-wide">
                    {selectedLanguage.samplePhrase}
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-[#B34728]">
                    {selectedLanguage.phraseEnglish}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1E]/60 font-semibold block">
                    Historical Root & Script Evolution
                  </span>
                  <p className="text-sm sm:text-base text-[#1A1A1E]/85 leading-relaxed font-sans">
                    {selectedLanguage.historicalRoot}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#B34728]/15 flex items-center justify-between text-xs text-[#1A1A1E]/60">
                  <span>Speakers Demographic: {selectedLanguage.speakersCount}</span>
                  <span className="font-mono text-[#B34728]">Eighth Schedule of Constitution</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 3. PHILOSOPHY PILLAR (THE SIX DARSHANAS) */}
      {activeTab === 'philosophy' && (
        <motion.div
          key="philosophy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="space-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHILOSOPHICAL_SCHOOLS.map((school) => {
              const isSelected = selectedPhilosophy.id === school.id;
              return (
                <div
                  key={school.id}
                  onClick={() => setSelectedPhilosophy(school)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#FAF7F2] border-[#1E284A] shadow-md ring-2 ring-[#1E284A]/30'
                      : 'bg-[#F3EDE2]/50 border-[#B34728]/15 hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#1E284A] font-bold">
                        {school.sanskritName}
                      </span>
                      <span className="text-xs font-mono text-[#1A1A1E]/50">
                        {school.founder}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-[#1A1A1E]">
                      {school.name}
                    </h4>

                    <p className="text-xs text-[#1A1A1E]/80 leading-relaxed font-sans">
                      {school.keyPremise}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#B34728]/15 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#B34728] font-bold block">
                      Canonical Axiom
                    </span>
                    <span className="text-xs font-serif italic text-[#1A1A1E]/90 block">
                      {school.axiom}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Philosophy Deep Inquiry */}
          <div className="bg-[#FAF7F2] border border-[#B34728]/20 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#B34728]/15">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E284A] font-bold">
                  Astika Darshana Hermeneutics
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#1A1A1E] mt-1">
                  {selectedPhilosophy.name} ({selectedPhilosophy.sanskritName})
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-[#1A1A1E]/60 block">Codified by</span>
                <span className="font-serif font-bold text-base text-[#1A1A1E]">{selectedPhilosophy.founder}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-2xl bg-[#F3EDE2] border border-[#B34728]/15 space-y-2">
                <span className="text-xs font-mono uppercase text-[#B34728] font-bold block">
                  Core Philosophical Inquiry
                </span>
                <p className="text-[#1A1A1E]/85 leading-relaxed">
                  {selectedPhilosophy.coreInquiry}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3EDE2] border border-[#B34728]/15 space-y-2">
                <span className="text-xs font-mono uppercase text-[#1E284A] font-bold block">
                  Epistemological Method (Pramana)
                </span>
                <p className="text-[#1A1A1E]/85 leading-relaxed italic">
                  "{selectedPhilosophy.epistemology}"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

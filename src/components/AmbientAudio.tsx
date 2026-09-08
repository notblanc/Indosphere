import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';

export const AmbientAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Base Tonic (Sa) at C#3 (approx 138.59 Hz) - classical meditative Indian pitch
      const baseFreq = 138.59;
      // Harmonics: 1st string (Pa / Fifth) ~ 207.65 Hz, 2nd & 3rd (Sa) ~ 138.59 Hz, 4th (Kharaj / Lower Octave) ~ 69.3 Hz
      const pitches = [
        baseFreq * 1.5, // Pa (Fifth)
        baseFreq,       // Sa (Middle)
        baseFreq * 1.002, // Subtle chorusing detune
        baseFreq * 0.5   // Kharaj (Deep root)
      ];

      const oscList: OscillatorNode[] = [];

      pitches.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const pGain = ctx.createGain();

        // Warm, rich triangle and sine harmonics mimicking gourds and silk strings
        osc.type = index === 3 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle natural LFO pulse mimicking continuous meditative plucked Tanpura strings
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.25 + index * 0.08, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(pGain.gain);
        lfo.start();

        pGain.gain.setValueAtTime(0.12 / (index + 1), ctx.currentTime);

        osc.connect(pGain);
        pGain.connect(masterGain);
        osc.start();
        oscList.push(osc);
      });

      oscillatorsRef.current = oscList;
      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio could not be started:', e);
    }
  };

  const stopDrone = () => {
    if (audioCtxRef.current) {
      try {
        oscillatorsRef.current.forEach(osc => osc.stop());
        audioCtxRef.current.close();
      } catch (err) {
        console.error(err);
      }
      audioCtxRef.current = null;
      oscillatorsRef.current = [];
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(val, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      stopDrone();
    };
  }, []);

  return (
    <div className="flex items-center gap-2 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#B34728]/20 shadow-sm text-xs text-[#1A1A1E]">
      <button
        onClick={toggleAudio}
        className="flex items-center gap-1.5 hover:text-[#B34728] transition-colors focus:outline-none"
        title={isPlaying ? 'Mute Tanpura Soundscape' : 'Enable Ambient Tanpura Drone'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#B34728] animate-pulse" />
            <span className="hidden sm:inline font-medium text-[11px] tracking-wide">
              Tanpura Drone: Active
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#1A1A1E]/60" />
            <span className="hidden sm:inline text-[#1A1A1E]/70 font-medium text-[11px] tracking-wide">
              Soundscape: Off
            </span>
          </>
        )}
      </button>

      {isPlaying && (
        <input
          type="range"
          min="0.05"
          max="0.6"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className="w-14 h-1 accent-[#B34728] cursor-pointer"
          title={`Volume: ${Math.round(volume * 100)}%`}
        />
      )}
    </div>
  );
};

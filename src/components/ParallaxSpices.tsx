import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface ParallaxSpicesProps {
  className?: string;
}

export const ParallaxSpices: React.FC<ParallaxSpicesProps> = ({ className = '' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 80 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(nx);
      mouseY.set(ny);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}>
      {/* 1. Floating Star Anise (Chakra Phool) - Top Right */}
      <motion.div
        className="absolute top-12 right-8 md:right-24 w-32 h-32 md:w-44 md:h-44 opacity-25"
        style={{
          x: smoothX.get() ? -25 : 0,
          y: smoothY.get() ? -35 : 0,
          rotate: 15
        }}
        animate={{
          rotate: [15, 22, 15],
          y: [0, -12, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md text-[#612818]">
          {/* Star Anise 8-pointed star botanical geometry */}
          <g fill="currentColor">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
              <g key={idx} transform={`rotate(${angle} 50 50)`}>
                <path d="M 50 50 C 44 38, 43 20, 50 8 C 57 20, 56 38, 50 50 Z" />
                <ellipse cx="50" cy="22" rx="2.5" ry="4" fill="#C07248" />
              </g>
            ))}
            <circle cx="50" cy="50" r="8" fill="#421C11" />
          </g>
        </svg>
      </motion.div>

      {/* 2. Floating Kerala Cinnamon Sticks (Dalchini) - Middle Left */}
      <motion.div
        className="absolute top-[40%] -left-8 md:left-12 w-36 h-36 md:w-52 md:h-52 opacity-20"
        style={{
          x: smoothX.get() ? 30 : 0,
          y: smoothY.get() ? -20 : 0
        }}
        animate={{
          rotate: [-18, -12, -18],
          y: [0, 15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <svg viewBox="0 0 120 120" className="w-full h-full text-[#823F23]">
          {/* Rolled cinnamon quills */}
          <rect x="25" y="45" width="80" height="12" rx="4" fill="currentColor" transform="rotate(-25 65 51)" />
          <rect x="20" y="55" width="75" height="10" rx="3" fill="#5E2B15" transform="rotate(-22 57 60)" />
          <ellipse cx="32" cy="40" rx="4" ry="7" fill="#A85732" transform="rotate(-25 32 40)" />
          <ellipse cx="27" cy="49" rx="3.5" ry="6" fill="#A85732" transform="rotate(-22 27 49)" />
        </svg>
      </motion.div>

      {/* 3. Floating Green Cardamom Pods (Elaichi) - Bottom Right */}
      <motion.div
        className="absolute bottom-24 right-12 md:right-32 w-28 h-28 md:w-40 md:h-40 opacity-25"
        style={{
          x: smoothX.get() ? -35 : 0,
          y: smoothY.get() ? 25 : 0
        }}
        animate={{
          rotate: [8, 0, 8],
          y: [0, -16, 0]
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#5B6E3F]">
          {/* Ribbed Cardamom pod */}
          <g fill="currentColor">
            <path d="M 50 15 C 32 35, 32 65, 50 85 C 68 65, 68 35, 50 15 Z" />
            <path d="M 50 15 L 50 85" stroke="#3F4F28" strokeWidth="1.5" />
            <path d="M 42 28 Q 44 50 42 72" stroke="#3F4F28" strokeWidth="1" fill="none" />
            <path d="M 58 28 Q 56 50 58 72" stroke="#3F4F28" strokeWidth="1" fill="none" />
            {/* Crown tip */}
            <path d="M 48 15 L 45 10 M 52 15 L 55 10" stroke="#3F4F28" strokeWidth="1.5" />
          </g>
        </svg>
      </motion.div>

      {/* 4. Kashmiri Saffron Stigmas (Kumkuma) - Top Center */}
      <motion.div
        className="absolute top-8 left-1/3 w-24 h-24 md:w-32 md:h-32 opacity-25"
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 5, -5]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <path
            d="M 20 70 Q 30 45 45 35 Q 55 28 65 15"
            stroke="#D84A1B"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 20 70 Q 25 50 32 30 Q 38 18 42 12"
            stroke="#E58325"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 20 70 Q 22 55 20 40 Q 18 25 15 20"
            stroke="#C0392B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Flared trumpet tips */}
          <circle cx="65" cy="15" r="3.5" fill="#D84A1B" />
          <circle cx="42" cy="12" r="3" fill="#E58325" />
          <circle cx="15" cy="20" r="2.8" fill="#C0392B" />
        </svg>
      </motion.div>

      {/* 5. Golden Turmeric Rhizome (Haridra) - Bottom Left */}
      <motion.div
        className="absolute bottom-16 left-6 md:left-24 w-32 h-32 md:w-44 md:h-44 opacity-20"
        animate={{
          rotate: [12, 18, 12],
          y: [0, 10, 0]
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4881A]">
          <path
            d="M 25 40 Q 35 30 55 35 Q 75 40 80 60 Q 75 80 50 75 Q 30 70 25 55 Z"
            fill="currentColor"
          />
          {/* Turmeric node rings */}
          <path d="M 35 35 Q 38 52 35 68" stroke="#9E610A" strokeWidth="1.5" fill="none" />
          <path d="M 48 36 Q 52 55 48 74" stroke="#9E610A" strokeWidth="1.5" fill="none" />
          <path d="M 62 38 Q 66 56 63 71" stroke="#9E610A" strokeWidth="1.5" fill="none" />
          {/* Finger shoot */}
          <path d="M 68 45 Q 85 35 90 42 Q 88 52 75 52 Z" fill="#EBB04D" />
        </svg>
      </motion.div>
    </div>
  );
};

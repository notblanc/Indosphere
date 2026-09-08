import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  id?: string;
}

export const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  className = '',
  intensity = 0.25,
  id
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * intensity;
    const deltaY = (clientY - centerY) * intensity;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      id={id}
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export type ParticleType = 'marigold' | 'gulal' | 'diyas' | 'dhunuchi';

export interface ParticleTriggerOptions {
  x?: number;
  y?: number;
  type?: ParticleType;
  count?: number;
}

export interface ParticleCanvasHandle {
  triggerBurst: (options?: ParticleTriggerOptions) => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  secondaryColor?: string;
  opacity: number;
  decay: number;
  type: ParticleType;
  flutterPhase: number;
  flutterSpeed: number;
  scaleY: number; // For 3D petal flipping
}

export const ParticleCanvas = forwardRef<ParticleCanvasHandle, { className?: string }>(
  ({ className = '' }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number | null>(null);

    const spawnBurst = (options?: ParticleTriggerOptions) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const originX = options?.x ?? canvas.width / 2;
      const originY = options?.y ?? canvas.height / 3;
      const type = options?.type ?? 'marigold';
      const count = options?.count ?? (type === 'marigold' ? 45 : 60);

      const marigoldColors = ['#F59E0B', '#D97706', '#EA580C', '#FEF08A', '#B45309'];
      const gulalColors = ['#E11D48', '#0284C7', '#16A34A', '#F59E0B', '#9333EA', '#DB2777'];
      const diyaColors = ['#FDE047', '#F59E0B', '#EA580C', '#FEF08A'];
      const dhunuchiColors = ['rgba(255,240,220,0.8)', 'rgba(230,200,170,0.6)', '#E5A93C'];

      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
        const speed = Math.random() * (type === 'gulal' ? 7 : 4) + 1.2;

        let color = marigoldColors[Math.floor(Math.random() * marigoldColors.length)];
        let secondaryColor = '#B45309';

        if (type === 'gulal') {
          color = gulalColors[Math.floor(Math.random() * gulalColors.length)];
        } else if (type === 'diyas') {
          color = diyaColors[Math.floor(Math.random() * diyaColors.length)];
        } else if (type === 'dhunuchi') {
          color = dhunuchiColors[Math.floor(Math.random() * dhunuchiColors.length)];
        }

        newParticles.push({
          x: originX + (Math.random() - 0.5) * 20,
          y: originY + (Math.random() - 0.5) * 20,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (type === 'diyas' ? 3 : 1.5),
          size: type === 'marigold' ? Math.random() * 12 + 10 : Math.random() * 6 + 3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
          color,
          secondaryColor,
          opacity: 1,
          decay: type === 'gulal' ? 0.012 : 0.004,
          type,
          flutterPhase: Math.random() * Math.PI * 2,
          flutterSpeed: Math.random() * 0.04 + 0.02,
          scaleY: 1
        });
      }

      particlesRef.current.push(...newParticles);
    };

    useImperativeHandle(ref, () => ({
      triggerBurst: spawnBurst
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const activeParticles: Particle[] = [];

        for (const p of particlesRef.current) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.type === 'marigold') {
            // Organic fluttering leaf physics
            p.flutterPhase += p.flutterSpeed;
            p.vx += Math.sin(p.flutterPhase) * 0.12;
            p.vy += 0.06; // Soft gravity
            p.rotation += p.rotationSpeed;
            p.scaleY = Math.cos(p.flutterPhase);
            p.vx *= 0.98; // Air resistance
          } else if (p.type === 'diyas') {
            // Rising sparks / ember physics
            p.vy -= 0.02; // Buoyancy upward
            p.vx += (Math.random() - 0.5) * 0.15;
          } else if (p.type === 'gulal') {
            // Powder burst spreading & dissipating
            p.vx *= 0.95;
            p.vy *= 0.95;
            p.size += 0.15;
          } else {
            p.vy -= 0.04;
            p.vx += (Math.random() - 0.5) * 0.1;
          }

          p.opacity -= p.decay;

          if (p.opacity > 0 && p.y < canvas.height + 40 && p.y > -50) {
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);

            if (p.type === 'marigold') {
              // Draw authentic teardrop-shaped marigold petal with textured vein
              ctx.scale(1, Math.abs(p.scaleY) || 0.1);
              ctx.beginPath();
              ctx.fillStyle = p.color;
              // Organic petal curve
              ctx.moveTo(0, -p.size);
              ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.8, p.size * 0.8, p.size * 0.2, 0, p.size);
              ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.2, -p.size * 0.6, -p.size * 0.8, 0, -p.size);
              ctx.fill();

              // Subtle orange core vein
              ctx.beginPath();
              ctx.strokeStyle = p.secondaryColor || '#B45309';
              ctx.lineWidth = 1;
              ctx.moveTo(0, -p.size * 0.7);
              ctx.lineTo(0, p.size * 0.6);
              ctx.stroke();
            } else if (p.type === 'diyas') {
              // Glowing soft warm ember
              const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
              gradient.addColorStop(0, '#FFF9C4');
              gradient.addColorStop(0.4, p.color);
              gradient.addColorStop(1, 'transparent');
              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.arc(0, 0, p.size, 0, Math.PI * 2);
              ctx.fill();
            } else if (p.type === 'gulal') {
              // Soft powdery pigment puff
              const rad = p.size * 1.5;
              const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, rad);
              gradient.addColorStop(0, p.color);
              gradient.addColorStop(0.8, p.color);
              gradient.addColorStop(1, 'transparent');
              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.arc(0, 0, rad, 0, Math.PI * 2);
              ctx.fill();
            } else {
              // Dhunuchi fragrant incense smoke
              ctx.fillStyle = p.color;
              ctx.beginPath();
              ctx.arc(0, 0, p.size, 0, Math.PI * 2);
              ctx.fill();
            }

            ctx.restore();
            activeParticles.push(p);
          }
        }

        particlesRef.current = activeParticles;
        animationFrameRef.current = requestAnimationFrame(render);
      };

      animationFrameRef.current = requestAnimationFrame(render);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className={`pointer-events-none fixed inset-0 z-50 ${className}`}
      />
    );
  }
);

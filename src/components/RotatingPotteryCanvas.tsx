import React, { useEffect, useRef, useState } from 'react';

interface RotatingPotteryCanvasProps {
  scrollProgress?: number;
  className?: string;
  motif?: 'harappan' | 'khurja' | 'terracotta';
}

export const RotatingPotteryCanvas: React.FC<RotatingPotteryCanvasProps> = ({
  scrollProgress = 0,
  className = '',
  motif = 'terracotta'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [userRotationY, setUserRotationY] = useState(0);
  const isDraggingRef = useRef(false);
  const lastMouseXRef = useRef(0);
  const autoAngleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    // Profile of the classical terracotta Kalasha/Surahi vessel: [y, radius]
    // Normalized coordinates around vessel center
    const profilePoints: [number, number][] = [
      [-140, 32], // rim lip
      [-132, 28], // rim neck top
      [-110, 24], // narrow neck
      [-75, 42],  // expanding shoulder
      [-30, 85],  // maximum belly width
      [20, 92],   // main vessel body
      [70, 78],   // lower taper
      [115, 50],  // lower base taper
      [135, 44],  // base ring
      [140, 42]   // base foot
    ];

    const numSlices = 24; // Radial resolution
    const numRings = profilePoints.length;

    // Generate 3D vertices
    interface Vertex3D {
      x: number;
      y: number;
      z: number;
      u: number;
      v: number;
    }

    const baseVertices: Vertex3D[][] = [];

    for (let r = 0; r < numRings; r++) {
      const [y, radius] = profilePoints[r];
      const ring: Vertex3D[] = [];
      const v = r / (numRings - 1);

      for (let s = 0; s < numSlices; s++) {
        const u = s / numSlices;
        const angle = (s / numSlices) * Math.PI * 2;
        ring.push({
          x: Math.cos(angle) * radius,
          y: y,
          z: Math.sin(angle) * radius,
          u,
          v
        });
      }
      baseVertices.push(ring);
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 10;

      // Combine auto rotation, scroll progress, and interactive mouse drag
      autoAngleRef.current += 0.006;
      const angleY = autoAngleRef.current + (scrollProgress * Math.PI * 4) + userRotationY;
      const tiltX = 0.22; // subtle top-down exhibition perspective

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      // Light source vector
      const lx = 0.577;
      const ly = -0.577;
      const lz = 0.577;

      // Project vertices to 2D
      const projectedGrid: { sx: number; sy: number; z: number; nx: number; ny: number; nz: number; u: number; v: number }[][] = [];

      for (let r = 0; r < numRings; r++) {
        const ring = [];
        for (let s = 0; s < numSlices; s++) {
          const v = baseVertices[r][s];

          // Rotate around Y
          const x1 = v.x * cosY - v.z * sinY;
          const z1 = v.x * sinY + v.z * cosY;

          // Rotate around X (tilt)
          const y2 = v.y * cosX - z1 * sinX;
          const z2 = v.y * sinX + z1 * cosX;

          // Compute surface normal approximation
          const nx = cosY * Math.cos((s / numSlices) * Math.PI * 2) - sinY * Math.sin((s / numSlices) * Math.PI * 2);
          const ny = 0.1;
          const nz = sinY * Math.cos((s / numSlices) * Math.PI * 2) + cosY * Math.sin((s / numSlices) * Math.PI * 2);

          const scale = 360 / (360 + z2);
          ring.push({
            sx: cx + x1 * scale,
            sy: cy + y2 * scale,
            z: z2,
            nx,
            ny,
            nz,
            u: v.u,
            v: v.v
          });
        }
        projectedGrid.push(ring);
      }

      // Draw subtle pedestal shadow
      ctx.save();
      const shadowGrad = ctx.createRadialGradient(cx, cy + 150, 20, cx, cy + 150, 110);
      shadowGrad.addColorStop(0, 'rgba(26,26,30,0.22)');
      shadowGrad.addColorStop(0.6, 'rgba(26,26,30,0.08)');
      shadowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = shadowGrad;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 150, 110, 26, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Collect quads for depth sorting
      interface Quad {
        p1: { sx: number; sy: number; z: number; u: number; v: number };
        p2: { sx: number; sy: number; z: number; u: number; v: number };
        p3: { sx: number; sy: number; z: number; u: number; v: number };
        p4: { sx: number; sy: number; z: number; u: number; v: number };
        avgZ: number;
        intensity: number;
        u: number;
        v: number;
      }

      const quads: Quad[] = [];

      for (let r = 0; r < numRings - 1; r++) {
        for (let s = 0; s < numSlices; s++) {
          const nextS = (s + 1) % numSlices;
          const p1 = projectedGrid[r][s];
          const p2 = projectedGrid[r][nextS];
          const p3 = projectedGrid[r + 1][nextS];
          const p4 = projectedGrid[r + 1][s];

          // Face normal dot light
          const midZ = (p1.z + p2.z + p3.z + p4.z) / 4;
          const normalZ = (p1.nz + p2.nz + p3.nz + p4.nz) / 4;

          // Backface culling check
          if (normalZ > -0.2) {
            const intensity = Math.max(0.12, (p1.nx * lx + p1.ny * ly + p1.nz * lz));
            quads.push({
              p1,
              p2,
              p3,
              p4,
              avgZ: midZ,
              intensity,
              u: (p1.u + p2.u) / 2,
              v: (p1.v + p4.v) / 2
            });
          }
        }
      }

      // Sort back-to-front
      quads.sort((a, b) => b.avgZ - a.avgZ);

      // Render textured/shaded pottery polygons
      for (const quad of quads) {
        ctx.beginPath();
        ctx.moveTo(quad.p1.sx, quad.p1.sy);
        ctx.lineTo(quad.p2.sx, quad.p2.sy);
        ctx.lineTo(quad.p3.sx, quad.p3.sy);
        ctx.lineTo(quad.p4.sx, quad.p4.sy);
        ctx.closePath();

        const light = quad.intensity;

        if (motif === 'khurja') {
          // Turquoise & cobalt ceramic glaze
          const rCol = Math.floor(18 + light * 40);
          const gCol = Math.floor(120 + light * 90);
          const bCol = Math.floor(140 + light * 105);
          ctx.fillStyle = `rgb(${rCol}, ${gCol}, ${bCol})`;
        } else {
          // Warm earthen terracotta with fire-kissed clay gradients
          const isAccentBand = (quad.v > 0.35 && quad.v < 0.55);
          const rCol = isAccentBand
            ? Math.floor(190 + light * 50)
            : Math.floor(145 + light * 75);
          const gCol = isAccentBand
            ? Math.floor(80 + light * 35)
            : Math.floor(58 + light * 45);
          const bCol = isAccentBand
            ? Math.floor(40 + light * 25)
            : Math.floor(35 + light * 30);

          ctx.fillStyle = `rgb(${rCol}, ${gCol}, ${bCol})`;
        }

        ctx.fill();

        // Subtle handcrafted line wire for aesthetic museum blueprint feeling
        ctx.strokeStyle = motif === 'khurja' ? 'rgba(255,255,255,0.12)' : 'rgba(80,30,15,0.15)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Render the rim opening ellipse
      const rim = projectedGrid[0];
      ctx.beginPath();
      ctx.moveTo(rim[0].sx, rim[0].sy);
      for (let i = 1; i < numSlices; i++) {
        ctx.lineTo(rim[i].sx, rim[i].sy);
      }
      ctx.closePath();
      ctx.fillStyle = motif === 'khurja' ? '#092B38' : '#45180D';
      ctx.fill();
      ctx.strokeStyle = '#FAF7F2';
      ctx.lineWidth = 1;
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [scrollProgress, userRotationY, motif]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMouseXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastMouseXRef.current;
    lastMouseXRef.current = e.clientX;
    setUserRotationY((prev) => prev + deltaX * 0.015);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        isDraggingRef.current = false;
      }}
    >
      <canvas
        ref={canvasRef}
        width={380}
        height={380}
        className="cursor-grab active:cursor-grabbing max-w-full h-auto drop-shadow-xl"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <div className="mt-2 text-center">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs tracking-wider uppercase bg-[#FAF7F2] text-[#B34728] border border-[#B34728]/20 rounded-full font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B34728] animate-pulse" />
          Interactive 3D Kiln Artifact • Scroll & Drag to Rotate
        </span>
      </div>
    </div>
  );
};

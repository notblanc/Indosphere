import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Play, Pause, RefreshCw } from 'lucide-react';

interface TapestryWeaverProps {
  className?: string;
}

export const TapestryWeaver: React.FC<TapestryWeaverProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePattern, setActivePattern] = useState<'korvai' | 'zari' | 'ikkat'>('korvai');
  const [wovenRows, setWovenRows] = useState(0);

  const shuttlePosRef = useRef({ x: 0, y: 0, dir: 1 });
  const rowCountRef = useRef(0);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const numWarpThreads = 44; // Vertical threads
    const warpSpacing = width / (numWarpThreads + 1);
    const rowHeight = 4;
    const maxRows = Math.floor((height - 40) / rowHeight);

    // Grid of woven states: 0 = unwoven, 1 = silk red, 2 = zari gold, 3 = indigo
    const grid: number[][] = Array(maxRows)
      .fill(0)
      .map(() => Array(numWarpThreads).fill(0));

    shuttlePosRef.current = { x: 0, y: 0, dir: 1 };
    rowCountRef.current = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Loom Wooden Frame Header & Foot
      ctx.fillStyle = '#2C1D11';
      ctx.fillRect(0, 0, width, 14);
      ctx.fillRect(0, height - 14, width, 14);

      // Brass tension pins
      ctx.fillStyle = '#D4881A';
      for (let i = 0; i < numWarpThreads; i += 2) {
        const x = warpSpacing * (i + 1);
        ctx.beginPath();
        ctx.arc(x, 7, 2, 0, Math.PI * 2);
        ctx.arc(x, height - 7, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Vertical Warp Threads (Loom tension threads)
      for (let i = 0; i < numWarpThreads; i++) {
        const x = warpSpacing * (i + 1);
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(230, 215, 195, 0.45)' : 'rgba(210, 190, 170, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, 14);
        ctx.lineTo(x, height - 14);
        ctx.stroke();
      }

      // 3. Draw Already Woven Rows
      for (let r = 0; r < rowCountRef.current; r++) {
        const y = 20 + r * rowHeight;
        for (let col = 0; col < numWarpThreads; col++) {
          const x = warpSpacing * (col + 1);
          const cell = grid[r][col];
          if (cell > 0) {
            // Pick color based on cell value
            if (cell === 2) {
              // Metallic Gold Zari
              ctx.fillStyle = r % 2 === 0 ? '#E5A93C' : '#F7D070';
            } else if (cell === 3) {
              // Deep Royal Indigo
              ctx.fillStyle = '#1E2952';
            } else {
              // Rich Crimson Silk
              ctx.fillStyle = '#B34728';
            }

            // Weave over/under pill shape
            const overUnder = (r + col) % 2 === 0;
            if (overUnder) {
              ctx.fillRect(x - warpSpacing / 2, y - 1, warpSpacing + 1, rowHeight);
            } else {
              ctx.fillRect(x - warpSpacing / 2 + 1, y, warpSpacing - 1, rowHeight - 1);
            }
          }
        }
      }

      // 4. Advance Weaving Shuttle Simulation
      if (isPlaying && rowCountRef.current < maxRows) {
        const currRow = rowCountRef.current;
        const shuttle = shuttlePosRef.current;

        // Move shuttle across warp threads
        shuttle.x += shuttle.dir * 0.8;

        const currentCol = Math.floor(shuttle.x);

        if (currentCol >= 0 && currentCol < numWarpThreads) {
          // Determine pattern color logic
          let cellType = 1; // Silk base

          if (activePattern === 'korvai') {
            // Classical temple gopuram triangle border
            const distFromEdge = Math.min(currentCol, numWarpThreads - 1 - currentCol);
            const triangleHeight = 12;
            const triangleStep = (currRow % (triangleHeight * 2));
            const activeThreshold = triangleStep < triangleHeight ? triangleStep / 2 : (triangleHeight * 2 - triangleStep) / 2;

            if (distFromEdge < activeThreshold + 4) {
              cellType = 2; // Zari Gold
            } else if (distFromEdge < 7) {
              cellType = 3; // Indigo border
            } else {
              cellType = 1; // Terracotta Silk
            }
          } else if (activePattern === 'zari') {
            // Continuous gold brocade with geometric stars
            if ((currRow + currentCol) % 5 === 0 || currentCol % 8 === 0) {
              cellType = 2;
            } else {
              cellType = 1;
            }
          } else {
            // Ikkat chevron diamond pattern
            const wave = Math.sin((currentCol / numWarpThreads) * Math.PI * 4 + currRow * 0.3);
            if (wave > 0.4) cellType = 2;
            else if (wave < -0.4) cellType = 3;
            else cellType = 1;
          }

          grid[currRow][currentCol] = cellType;
        }

        // Check if shuttle crossed the loom edge
        if (shuttle.x >= numWarpThreads) {
          shuttle.dir = -1;
          shuttle.x = numWarpThreads - 1;
          rowCountRef.current += 1;
          setWovenRows(rowCountRef.current);
        } else if (shuttle.x < 0) {
          shuttle.dir = 1;
          shuttle.x = 0;
          rowCountRef.current += 1;
          setWovenRows(rowCountRef.current);
        }

        // 5. Draw Active Shuttle & Trailing Silk Thread
        const shuttleX = warpSpacing * (shuttle.x + 1);
        const shuttleY = 20 + currRow * rowHeight;

        // Trailing glowing thread
        ctx.beginPath();
        ctx.strokeStyle = '#D4881A';
        ctx.lineWidth = 2;
        ctx.moveTo(shuttle.dir === 1 ? 14 : width - 14, shuttleY);
        ctx.lineTo(shuttleX, shuttleY);
        ctx.stroke();

        // Wooden Boat Shuttle
        ctx.save();
        ctx.translate(shuttleX, shuttleY);
        ctx.fillStyle = '#8F341C';
        ctx.beginPath();
        ctx.ellipse(0, 0, 14, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        // Brass bobbin center
        ctx.fillStyle = '#F4C464';
        ctx.fillRect(-4, -1.5, 8, 3);
        ctx.restore();
      }

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying, activePattern]);

  const handleReset = () => {
    rowCountRef.current = 0;
    shuttlePosRef.current = { x: 0, y: 0, dir: 1 };
    setWovenRows(0);
  };

  return (
    <div className={`flex flex-col items-center bg-[#F3EDE2] border border-[#B34728]/20 rounded-xl p-5 shadow-inner ${className}`}>
      <div className="flex flex-wrap items-center justify-between w-full gap-3 pb-3 mb-3 border-b border-[#B34728]/15">
        <div>
          <h4 className="font-serif text-lg font-bold text-[#1A1A1E] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4881A]" />
            Korvai Pit Loom • Real-Time Weft Simulation
          </h4>
          <p className="text-xs text-[#1A1A1E]/70">
            Simulating synchronous double-shuttle silk & 24k gold zari thread interlacing
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Pattern selectors */}
          <div className="flex rounded-lg bg-[#FAF7F2] p-0.5 border border-[#B34728]/20 text-xs">
            <button
              onClick={() => { setActivePattern('korvai'); handleReset(); }}
              className={`px-2.5 py-1 rounded transition-colors ${activePattern === 'korvai' ? 'bg-[#B34728] text-white font-medium' : 'text-[#1A1A1E]/80 hover:text-[#B34728]'}`}
            >
              Temple Gopuram
            </button>
            <button
              onClick={() => { setActivePattern('zari'); handleReset(); }}
              className={`px-2.5 py-1 rounded transition-colors ${activePattern === 'zari' ? 'bg-[#B34728] text-white font-medium' : 'text-[#1A1A1E]/80 hover:text-[#B34728]'}`}
            >
              Gold Brocade
            </button>
            <button
              onClick={() => { setActivePattern('ikkat'); handleReset(); }}
              className={`px-2.5 py-1 rounded transition-colors ${activePattern === 'ikkat' ? 'bg-[#B34728] text-white font-medium' : 'text-[#1A1A1E]/80 hover:text-[#B34728]'}`}
            >
              Pochampally Ikkat
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded bg-[#FAF7F2] text-[#1A1A1E] hover:text-[#B34728] border border-[#B34728]/20 transition-colors"
            title={isPlaying ? 'Pause Loom' : 'Start Loom'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded bg-[#FAF7F2] text-[#1A1A1E] hover:text-[#B34728] border border-[#B34728]/20 transition-colors"
            title="Reweave from start"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[480px] flex justify-center">
        <canvas
          ref={canvasRef}
          width={440}
          height={320}
          className="rounded-lg shadow-md bg-[#FAF7F2] max-w-full h-auto"
        />
      </div>

      <div className="flex items-center justify-between w-full max-w-[440px] mt-3 text-xs text-[#1A1A1E]/70 font-mono">
        <span>Rows Picked: {wovenRows}</span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] inline-block" /> Zari (Gold)
          <span className="w-2.5 h-2.5 rounded-full bg-[#B34728] inline-block ml-2" /> Silk (Crimson)
          <span className="w-2.5 h-2.5 rounded-full bg-[#1E2952] inline-block ml-2" /> Indigo
        </span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Info, ChevronRight, Eye } from 'lucide-react';

interface HeritageNode {
  id: string;
  name: string;
  region: string;
  type: string;
  era: string;
  coordinates: { x: number; y: number }; // Percentage on map canvas
  highlight: string;
  accent: string;
}

const HERITAGE_NODES: HeritageNode[] = [
  {
    id: 'dholavira',
    name: 'Dholavira & Lothal',
    region: 'Gujarat / West',
    type: 'Archaeological Citadel',
    era: 'c. 2600 BCE',
    coordinates: { x: 28, y: 47 },
    highlight: 'Hydraulic reservoirs, stone citadel, and the worlds earliest tidal dockyard.',
    accent: '#B34728'
  },
  {
    id: 'sarnath',
    name: 'Sarnath & Varanasi',
    region: 'Gangetic Plains / North',
    type: 'Philosophical & Epigraphical Capital',
    era: 'c. 500 BCE – 250 BCE',
    coordinates: { x: 58, y: 38 },
    highlight: 'The First Sermon (Dharmachakra Pravartana) and Ashokan Polished Lion Capital.',
    accent: '#D4881A'
  },
  {
    id: 'ajanta',
    name: 'Ajanta & Ellora Caves',
    region: 'Deccan / Central West',
    type: 'Rock-Cut Fresco Monasteries',
    era: 'c. 2nd BCE – 6th CE',
    coordinates: { x: 38, y: 55 },
    highlight: 'Padmapani murals and the monolithic Kailasa temple carved top-down from single basalt rock.',
    accent: '#702632'
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur & Chola Temples',
    region: 'Cauvery Basin / South',
    type: 'Granite Vimanas & Bronze Metallurgy',
    era: 'c. 10th Century CE',
    coordinates: { x: 48, y: 84 },
    highlight: 'Brihadisvara Temple with 80-tonne granite capstone and sacred Nataraja bronzes.',
    accent: '#1E284A'
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    region: 'Eastern Seaboard / Odisha',
    type: 'Colossal Chariot of Stone',
    era: 'c. 1250 CE',
    coordinates: { x: 67, y: 56 },
    highlight: '24 intricately carved sun wheels functioning as precise astronomical sundials.',
    accent: '#D4881A'
  },
  {
    id: 'nalanda',
    name: 'Ancient Nalanda Mahavihara',
    region: 'Magadha / East',
    type: 'World Classical University',
    era: 'c. 427 CE – 1197 CE',
    coordinates: { x: 65, y: 40 },
    highlight: 'Vast multi-tiered monastery libraries (Dharmaganja) holding hundreds of thousands of manuscripts.',
    accent: '#8F341C'
  },
  {
    id: 'hampi',
    name: 'Vijayanagara (Hampi)',
    region: 'Tungabhadra / South',
    type: 'Imperial Granite Metropolis',
    era: 'c. 1336 CE',
    coordinates: { x: 41, y: 73 },
    highlight: 'Musical stone pillars, stone chariot, and vast bazaar arcades celebrated by foreign emissaries.',
    accent: '#B34728'
  },
  {
    id: 'majuli',
    name: 'Majuli & Kamakhya',
    region: 'Brahmaputra / North-East',
    type: 'Riverine Neo-Vaishnavite Satras',
    era: 'c. 15th Century CE',
    coordinates: { x: 88, y: 32 },
    highlight: 'World largest inhabited river island, Sattriya classical mask dances and monastic preservation.',
    accent: '#3D5A45'
  }
];

export const InteractiveIndiaMap: React.FC<{ onSelectNode?: (node: HeritageNode) => void }> = ({
  onSelectNode
}) => {
  const [activeNode, setActiveNode] = useState<HeritageNode>(HERITAGE_NODES[0]);
  const [tilt, setTilt] = useState({ x: 5, y: -6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 14, y: x * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 5, y: -6 });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
      {/* 3D Map Container */}
      <div
        className="lg:col-span-7 relative perspective-1000 select-none flex justify-center py-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: 'spring', damping: 20, stiffness: 90 }}
          className="relative w-full max-w-[460px] aspect-[4/5] bg-gradient-to-b from-[#FAF7F2] to-[#F3EDE2] border border-[#B34728]/20 rounded-2xl p-6 shadow-2xl overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Subtle archival topographic contours */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B34728" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Map Title Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="p-1.5 bg-[#FAF7F2] rounded-md shadow-sm border border-[#B34728]/20 text-[#B34728]">
              <Compass className="w-4 h-4 animate-spin-slow" />
            </span>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-mono text-[#1A1A1E]/60 block">
                Geographic Cartography
              </span>
              <span className="font-serif text-xs font-bold tracking-wide text-[#1A1A1E]">
                Bharatavarsha Coordinates
              </span>
            </div>
          </div>

          {/* Artistic Vector Outline of India */}
          <div className="relative w-full h-full flex items-center justify-center pt-8">
            <svg
              viewBox="0 0 500 600"
              className="w-full h-full max-h-[460px] drop-shadow-md text-[#B34728]/10 stroke-[#B34728]/40"
              style={{ strokeWidth: '1.5', fill: 'currentColor' }}
            >
              {/* Detailed Stylized Peninsula Contour */}
              <path
                d="M 210,50 
                   C 230,40 255,45 260,70 
                   C 265,95 285,110 310,115 
                   C 340,120 375,120 400,140
                   C 425,160 450,180 435,210
                   C 420,230 400,240 375,230
                   C 350,225 330,240 315,260
                   C 325,285 345,310 340,335
                   C 335,360 315,385 295,410
                   C 275,440 260,470 250,510
                   C 245,530 240,550 235,565
                   C 230,550 220,525 210,500
                   C 195,450 180,420 170,390
                   C 160,350 150,320 145,280
                   C 135,250 115,245 100,260
                   C 80,275 65,260 75,235
                   C 85,210 110,215 130,200
                   C 145,185 155,160 165,130
                   C 175,100 190,65 210,50 Z"
              />

              {/* Major Sacred Rivers (Ganga, Yamuna, Indus, Narmada, Godavari, Krishna, Cauvery) */}
              <path
                d="M 190,120 Q 240,150 290,210 Q 320,240 340,260"
                fill="none"
                stroke="#2C3E6B"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.6"
              />
              <path
                d="M 120,260 Q 180,280 260,290"
                fill="none"
                stroke="#2C3E6B"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.5"
              />
              <path
                d="M 170,390 Q 220,440 250,510"
                fill="none"
                stroke="#2C3E6B"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.6"
              />
            </svg>

            {/* Interactive Heritage Pins */}
            {HERITAGE_NODES.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => {
                    setActiveNode(node);
                    if (onSelectNode) onSelectNode(node);
                  }}
                  className="group absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 focus:outline-none"
                  style={{
                    left: `${node.coordinates.x}%`,
                    top: `${node.coordinates.y}%`
                  }}
                  aria-label={node.name}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute w-7 h-7 rounded-full transition-opacity ${
                        isSelected ? 'animate-ping opacity-60' : 'opacity-0 group-hover:opacity-40'
                      }`}
                      style={{ backgroundColor: node.accent }}
                    />
                    {/* Core Pin */}
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md transition-all ${
                        isSelected ? 'scale-110 shadow-lg' : 'opacity-85 group-hover:opacity-100'
                      }`}
                      style={{ backgroundColor: node.accent }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    {/* Compact Label */}
                    <span
                      className={`absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-[10px] font-medium tracking-tight px-1.5 py-0.5 rounded shadow-sm transition-all pointer-events-none ${
                        isSelected
                          ? 'bg-[#1A1A1E] text-white opacity-100'
                          : 'bg-[#FAF7F2]/90 text-[#1A1A1E] opacity-0 group-hover:opacity-100 border border-[#B34728]/20'
                      }`}
                    >
                      {node.name.split(' ')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Compass Rose */}
          <div className="absolute bottom-4 right-4 z-20 text-[#B34728]/50 flex flex-col items-center">
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#B34728]">N</span>
            <div className="w-6 h-6 border border-[#B34728]/30 rounded-full flex items-center justify-center">
              <div className="w-0.5 h-4 bg-[#B34728]" />
            </div>
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#B34728]">S</span>
          </div>
        </motion.div>
      </div>

      {/* Selected Node Details Card */}
      <div className="lg:col-span-5">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-[#FAF7F2] border border-[#B34728]/20 rounded-2xl p-6 lg:p-8 shadow-sm relative overflow-hidden"
        >
          {/* Accent top color strip */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{ backgroundColor: activeNode.accent }}
          />

          <div className="flex items-center justify-between text-xs text-[#1A1A1E]/60 mb-2">
            <span className="uppercase tracking-widest font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: activeNode.accent }} />
              {activeNode.region}
            </span>
            <span className="font-mono px-2 py-0.5 rounded bg-[#F3EDE2] text-[#1A1A1E] font-medium border border-[#B34728]/10">
              {activeNode.era}
            </span>
          </div>

          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#1A1A1E] tracking-tight mb-2">
            {activeNode.name}
          </h3>

          <p className="text-xs uppercase tracking-wider font-semibold text-[#B34728] mb-4">
            {activeNode.type}
          </p>

          <p className="text-sm leading-relaxed text-[#1A1A1E]/80 mb-6 font-sans">
            {activeNode.highlight}
          </p>

          <div className="pt-4 border-t border-[#B34728]/15 flex items-center justify-between">
            <span className="text-xs text-[#1A1A1E]/60">
              Click any map node to examine civilizational epochs
            </span>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#B34728]">
              <span>Curator Catalog</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

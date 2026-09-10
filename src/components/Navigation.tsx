import React, { useState, useRef, useEffect } from 'react';
import { ExhibitRoom, SupportedLanguage } from '../types';
import { EXHIBIT_ROOMS } from '../data/museumData';
import { AmbientAudio } from './AmbientAudio';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Menu,
  X,
  Globe,
  Bot,
  ChevronDown,
  ExternalLink,
  Compass,
  BookOpen,
  Sun,
  Hammer,
  Flame,
  Check,
  UtensilsCrossed,
  ScanSearch,
  Map
} from 'lucide-react';

interface NavigationProps {
  currentRoom: ExhibitRoom;
  onSelectRoom: (room: ExhibitRoom) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentRoom, onSelectRoom }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const getRoomTitle = (roomId: string) => {
    switch (roomId) {
      case 'home':
        return t('homeRoom');
      case 'history':
        return t('historyRoom');
      case 'culture':
        return t('cultureRoom');
      case 'festivals':
        return t('festivalsRoom');
      case 'crafts':
        return t('craftsRoom');
      case 'food':
        return t('foodRoom');
      default:
        return roomId;
    }
  };

  const getRoomIcon = (roomId: string) => {
    switch (roomId) {
      case 'home':
        return <Sparkles className="w-4 h-4 text-[#D4881A]" />;
      case 'history':
        return <BookOpen className="w-4 h-4 text-[#B34728]" />;
      case 'culture':
        return <Compass className="w-4 h-4 text-[#D4881A]" />;
      case 'festivals':
        return <Sun className="w-4 h-4 text-[#E5A93C]" />;
      case 'crafts':
        return <Hammer className="w-4 h-4 text-[#8F341C]" />;
      case 'food':
        return <Flame className="w-4 h-4 text-[#702632]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#B34728]" />;
    }
  };

  const languages: { code: SupportedLanguage; label: string; full: string }[] = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'hi', label: 'हिन्दी', full: 'हिन्दी (Hindi)' },
    { code: 'es', label: 'ES', full: 'Español' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#B34728]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Curatorial Monogram */}
        <button
          onClick={() => {
            onSelectRoom('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-[#B34728] text-[#FAF7F2] flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:bg-[#8F341C] transition-colors">
            य
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#1A1A1E]">
                {t('museumTitle')}
              </span>
            </div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#B34728] block -mt-1 font-semibold">
              {t('museumSubtitle')}
            </span>
          </div>
        </button>

        {/* Right Action Bar: Language Selector, Soundscape, AI Chat, and Top-Right Navigation Dropdown */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#F3EDE2]/90 border border-[#B34728]/20 rounded-full p-0.5 shadow-xs">
            <div className="hidden sm:flex items-center px-1.5 text-[#B34728]" title="Language">
              <Globe className="w-3.5 h-3.5 opacity-80" />
            </div>
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => setLanguage(item.code)}
                title={item.full}
                className={`px-2 sm:px-2.5 py-1 rounded-full text-[11px] font-mono font-medium transition-all cursor-pointer ${
                  language === item.code
                    ? 'bg-[#B34728] text-white shadow-xs font-bold'
                    : 'text-[#1A1A1E]/70 hover:text-[#B34728]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <AmbientAudio />

          {/* AI Chatbot Icon Link */}
          <a
            id="nav-ai-chatbot-link"
            href="https://the-entrance.ai.studio/"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with AI Docent"
            aria-label="AI Chatbot"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B34728] hover:bg-[#8F341C] text-[#FAF7F2] border border-[#D4881A]/40 text-xs font-medium transition-all shadow-xs group cursor-pointer"
          >
            <Bot className="w-4 h-4 text-[#FAF7F2] group-hover:rotate-12 transition-transform" />
            <span className="font-sans text-xs">AI Chat</span>
          </a>

          {/* Top-Right Navigation Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="top-nav-dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B34728]/30 ${
                isDropdownOpen
                  ? 'bg-[#B34728] text-[#FAF7F2] border-[#B34728] shadow-md'
                  : 'bg-[#F3EDE2] hover:bg-[#EAE1D3] text-[#1A1A1E] border-[#B34728]/25'
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              aria-label="Toggle navigation dropdown"
            >
              <Compass className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'text-[#FAF7F2] rotate-45' : 'text-[#B34728]'}`} />
              <span className="font-serif font-bold text-xs sm:text-sm tracking-tight">Navigation</span>
              <span className={`hidden md:inline text-[10px] font-mono px-2 py-0.5 rounded-full ${
                isDropdownOpen ? 'bg-white/20 text-[#FAF7F2]' : 'bg-[#B34728]/10 text-[#B34728]'
              }`}>
                {getRoomTitle(currentRoom)}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#FAF7F2]' : 'text-[#1A1A1E]/70'}`} />
            </button>

            {/* Dropdown Menu Overlay */}
            {isDropdownOpen && (
              <div
                id="top-nav-dropdown-menu"
                className="absolute right-0 mt-2.5 w-80 sm:w-96 max-h-[min(480px,calc(100vh-5.5rem))] overflow-y-auto overscroll-contain rounded-2xl bg-[#FAF7F2] border border-[#B34728]/25 shadow-2xl p-3 z-50 transition-all origin-top-right [scrollbar-width:thin] [scrollbar-color:#C4B9A8_#F3EDE2]"
              >
                {/* Halls Header (Sticky while scrolling) */}
                <div className="sticky -top-3 -mx-3 px-4 py-2 bg-[#FAF7F2]/95 backdrop-blur-xs text-[10px] font-mono uppercase tracking-widest text-[#B34728] font-bold border-b border-[#B34728]/15 mb-2 flex items-center justify-between z-10 shadow-xs">
                  <span>{t('exhibitHalls')}</span>
                  <span className="text-[10px] text-[#1A1A1E]/50 font-normal">6 Halls • Scroll for more</span>
                </div>

                {/* All Navigation Room Buttons */}
                <div className="space-y-1">
                  {EXHIBIT_ROOMS.map((room) => {
                    const isActive = currentRoom === room.id;
                    return (
                      <button
                        key={room.id}
                        onClick={() => {
                          onSelectRoom(room.id as ExhibitRoom);
                          setIsDropdownOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer group ${
                          isActive
                            ? 'bg-[#B34728] text-[#FAF7F2] shadow-sm'
                            : 'hover:bg-[#F3EDE2] text-[#1A1A1E]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isActive ? 'bg-white/20 text-white' : 'bg-[#FAF7F2] border border-[#B34728]/15 group-hover:border-[#B34728]/40'
                          }`}>
                            {getRoomIcon(room.id)}
                          </div>
                          <div>
                            <div className={`font-serif font-bold text-sm leading-tight ${isActive ? 'text-[#FAF7F2]' : 'text-[#1A1A1E] group-hover:text-[#B34728]'}`}>
                              {getRoomTitle(room.id)}
                            </div>
                            <div className={`text-[11px] font-sans ${isActive ? 'text-[#FAF7F2]/80' : 'text-[#1A1A1E]/60'}`}>
                              {room.subtitle}
                            </div>
                          </div>
                        </div>
                        {isActive && <Check className="w-4 h-4 text-[#F4C464]" />}
                      </button>
                    );
                  })}
                </div>

                {/* Features & Expeditions Section */}
                <div className="px-3 pt-3 pb-1.5 text-[10px] font-mono uppercase tracking-widest text-[#B34728] font-bold border-t border-[#B34728]/15 mt-2.5 flex items-center justify-between">
                  <span>Features & Expeditions</span>
                  <span className="text-[10px] text-[#D4881A] font-semibold">AI Tools</span>
                </div>

                {/* Bharat Darshan Feature Link Tile */}
                <a
                  id="dropdown-nav-bharat-darshan"
                  href="https://bharat-darshan-ai.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F3EDE2]/90 hover:bg-[#EBE2D4] border border-[#B34728]/35 transition-all group cursor-pointer mt-1 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#B34728]/15 text-[#B34728] flex items-center justify-center shrink-0 group-hover:bg-[#B34728] group-hover:text-white transition-colors">
                      <Map className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-bold text-sm text-[#1A1A1E] group-hover:text-[#B34728] transition-colors">
                          Bharat Darshan
                        </span>
                        <span className="text-[9px] font-mono uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#B34728]/15 text-[#B34728] border border-[#B34728]/25">
                          New Feature
                        </span>
                      </div>
                      <span className="text-[11px] text-[#1A1A1E]/70 block font-sans">
                        AI Virtual Tour & Sacred Cultural Panoramas
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#B34728] group-hover:translate-x-0.5 transition-transform">
                    <span className="text-[10px] hidden sm:inline opacity-75">bharat-darshan-ai</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* Artifact Lens Feature Link Tile */}
                <a
                  id="dropdown-nav-artifact-lens"
                  href="https://artirecog.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F3EDE2]/90 hover:bg-[#EBE2D4] border border-[#1E284A]/30 transition-all group cursor-pointer mt-1.5 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1E284A]/15 text-[#1E284A] flex items-center justify-center shrink-0 group-hover:bg-[#1E284A] group-hover:text-white transition-colors">
                      <ScanSearch className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-bold text-sm text-[#1A1A1E] group-hover:text-[#1E284A] transition-colors">
                          Artifact Lens
                        </span>
                        <span className="text-[9px] font-mono uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#1E284A]/15 text-[#1E284A] border border-[#1E284A]/25">
                          New Feature
                        </span>
                      </div>
                      <span className="text-[11px] text-[#1A1A1E]/70 block font-sans">
                        AI Relic Recognition & Archaeological Vision
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#1E284A] group-hover:translate-x-0.5 transition-transform">
                    <span className="text-[10px] hidden sm:inline opacity-75">artirecog</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* Journeyman Feature Link Tile */}
                <a
                  id="dropdown-nav-journeyman"
                  href="https://journeyman.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F3EDE2]/90 hover:bg-[#EBE2D4] border border-[#D4881A]/40 transition-all group cursor-pointer mt-1.5 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4881A]/20 text-[#B34728] flex items-center justify-center shrink-0 group-hover:bg-[#B34728] group-hover:text-white transition-colors">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-bold text-sm text-[#1A1A1E] group-hover:text-[#B34728] transition-colors">
                          Journeyman
                        </span>
                        <span className="text-[9px] font-mono uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#D4881A]/20 text-[#B34728] border border-[#D4881A]/30">
                          New Feature
                        </span>
                      </div>
                      <span className="text-[11px] text-[#1A1A1E]/70 block font-sans">
                        AI Cultural Expeditions & Journeys
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#B34728] group-hover:translate-x-0.5 transition-transform">
                    <span className="text-[10px] hidden sm:inline opacity-75">journeyman</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* FoodLens Feature Link Tile */}
                <a
                  id="dropdown-nav-foodlens"
                  href="https://foodlens-ai.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F3EDE2]/90 hover:bg-[#EBE2D4] border border-[#B34728]/35 transition-all group cursor-pointer mt-1.5 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#702632]/15 text-[#702632] flex items-center justify-center shrink-0 group-hover:bg-[#702632] group-hover:text-white transition-colors">
                      <UtensilsCrossed className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-bold text-sm text-[#1A1A1E] group-hover:text-[#702632] transition-colors">
                          FoodLens
                        </span>
                        <span className="text-[9px] font-mono uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#702632]/15 text-[#702632] border border-[#702632]/25">
                          New Feature
                        </span>
                      </div>
                      <span className="text-[11px] text-[#1A1A1E]/70 block font-sans">
                        AI Culinary Vision & Gastronomy Analysis
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#702632] group-hover:translate-x-0.5 transition-transform">
                    <span className="text-[10px] hidden sm:inline opacity-75">foodlens-ai</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* AI Docent Chatbot Link in dropdown */}
                <a
                  id="dropdown-nav-ai-chat"
                  href="https://the-entrance.ai.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-[#F3EDE2] text-[#1A1A1E] transition-all group cursor-pointer mt-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#B34728]/10 text-[#B34728] flex items-center justify-center shrink-0 group-hover:bg-[#B34728] group-hover:text-white transition-colors">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-xs text-[#1A1A1E] group-hover:text-[#B34728] transition-colors">
                        AI Docent Chat
                      </div>
                      <span className="text-[10px] text-[#1A1A1E]/60 block font-sans">
                        Interactive Museum Conversational Guide
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1A1A1E]/50 group-hover:text-[#B34728] group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#F3EDE2] text-[#1A1A1E] border border-[#B34728]/20 hover:text-[#B34728] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#B34728]/15 bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#C4B9A8_#F3EDE2]">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#F3EDE2]/70 rounded-lg border border-[#B34728]/15">
            <span className="text-xs font-mono uppercase text-[#B34728] font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              {t('selectLanguage')}
            </span>
            <div className="flex items-center gap-1">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLanguage(item.code)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                    language === item.code
                      ? 'bg-[#B34728] text-white font-bold'
                      : 'bg-white/80 text-[#1A1A1E]/80 hover:bg-[#B34728]/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-[10px] uppercase font-mono tracking-widest text-[#B34728] px-3 py-1 font-bold">
            {t('exhibitHalls')}
          </div>
          <div className="space-y-1">
            {EXHIBIT_ROOMS.map((room) => {
              const isActive = currentRoom === room.id;
              return (
                <button
                  key={room.id}
                  onClick={() => {
                    onSelectRoom(room.id as ExhibitRoom);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#B34728] text-white font-semibold'
                      : 'text-[#1A1A1E] hover:bg-[#F3EDE2]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {getRoomIcon(room.id)}
                    <div>
                      <div className="font-serif font-bold">{getRoomTitle(room.id)}</div>
                      <div className={`text-xs ${isActive ? 'text-white/80' : 'text-[#1A1A1E]/60'}`}>
                        {room.subtitle}
                      </div>
                    </div>
                  </div>
                  {isActive && <Sparkles className="w-4 h-4 text-[#F4C464]" />}
                </button>
              );
            })}
          </div>

          {/* Feature Links in Mobile Menu */}
          <div className="pt-2 border-t border-[#B34728]/15 space-y-2">
            <a
              id="mobile-nav-bharat-darshan-link"
              href="https://bharat-darshan-ai.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#F3EDE2] hover:bg-[#EBE2D4] border border-[#B34728]/35 text-[#1A1A1E] text-xs font-medium shadow-xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-[#B34728]" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm font-serif">Bharat Darshan</span>
                    <span className="text-[9px] font-mono uppercase bg-[#B34728]/15 text-[#B34728] px-1 rounded font-bold">New</span>
                  </div>
                  <span className="text-[10px] text-[#1A1A1E]/70">AI Virtual Tour & Cultural Panorama</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#B34728]">bharat-darshan-ai ↗</span>
            </a>

            <a
              id="mobile-nav-artifact-lens-link"
              href="https://artirecog.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#F3EDE2] hover:bg-[#EBE2D4] border border-[#1E284A]/30 text-[#1A1A1E] text-xs font-medium shadow-xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <ScanSearch className="w-4 h-4 text-[#1E284A]" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm font-serif">Artifact Lens</span>
                    <span className="text-[9px] font-mono uppercase bg-[#1E284A]/15 text-[#1E284A] px-1 rounded font-bold">New</span>
                  </div>
                  <span className="text-[10px] text-[#1A1A1E]/70">AI Relic Recognition & Vision</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#1E284A]">artirecog ↗</span>
            </a>

            <a
              id="mobile-nav-journeyman-link"
              href="https://journeyman.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#F3EDE2] hover:bg-[#EBE2D4] border border-[#D4881A]/40 text-[#1A1A1E] text-xs font-medium shadow-xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#B34728]" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm font-serif">Journeyman</span>
                    <span className="text-[9px] font-mono uppercase bg-[#D4881A]/20 text-[#B34728] px-1 rounded font-bold">New</span>
                  </div>
                  <span className="text-[10px] text-[#1A1A1E]/70">AI Cultural Expeditions</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#B34728]">journeyman ↗</span>
            </a>

            <a
              id="mobile-nav-foodlens-link"
              href="https://foodlens-ai.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#F3EDE2] hover:bg-[#EBE2D4] border border-[#702632]/30 text-[#1A1A1E] text-xs font-medium shadow-xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-[#702632]" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm font-serif">FoodLens</span>
                    <span className="text-[9px] font-mono uppercase bg-[#702632]/15 text-[#702632] px-1 rounded font-bold">New</span>
                  </div>
                  <span className="text-[10px] text-[#1A1A1E]/70">AI Culinary & Gastronomy Vision</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#702632]">foodlens-ai ↗</span>
            </a>

            {/* Mobile AI Chatbot Link */}
            <a
              id="mobile-nav-ai-chatbot-link"
              href="https://the-entrance.ai.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#B34728] hover:bg-[#8F341C] text-[#FAF7F2] text-xs font-medium shadow-xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                <span className="font-semibold">AI Chatbot</span>
              </div>
              <span className="text-[10px] font-mono opacity-85">the-entrance.ai.studio ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

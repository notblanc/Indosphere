import React from 'react';
import { ExhibitRoom, SupportedLanguage } from '../types';
import { EXHIBIT_ROOMS } from '../data/museumData';
import { AmbientAudio } from './AmbientAudio';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Menu, X, Globe, Bot } from 'lucide-react';

interface NavigationProps {
  currentRoom: ExhibitRoom;
  onSelectRoom: (room: ExhibitRoom) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentRoom, onSelectRoom }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

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

        {/* Desktop Room Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F3EDE2]/80 p-1 rounded-full border border-[#B34728]/15 shadow-inner">
          {EXHIBIT_ROOMS.map((room) => {
            const isActive = currentRoom === room.id;
            return (
              <button
                key={room.id}
                onClick={() => {
                  onSelectRoom(room.id as ExhibitRoom);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#B34728] text-[#FAF7F2] shadow-sm font-semibold'
                    : 'text-[#1A1A1E]/80 hover:text-[#B34728] hover:bg-[#FAF7F2]'
                }`}
              >
                {getRoomTitle(room.id)}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Multi-Language Selector, Soundscape & Mobile Toggle */}
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B34728] hover:bg-[#8F341C] text-[#FAF7F2] border border-[#D4881A]/40 text-xs font-medium transition-all shadow-xs group cursor-pointer"
          >
            <Bot className="w-4 h-4 text-[#FAF7F2] group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline font-sans text-xs">AI Chat</span>
          </a>

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
        <div className="lg:hidden border-t border-[#B34728]/15 bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-3 shadow-xl">
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
                  <div>
                    <div className="font-serif font-bold">{getRoomTitle(room.id)}</div>
                    <div className={`text-xs ${isActive ? 'text-white/80' : 'text-[#1A1A1E]/60'}`}>
                      {room.subtitle}
                    </div>
                  </div>
                  {isActive && <Sparkles className="w-4 h-4 text-[#F4C464]" />}
                </button>
              );
            })}
          </div>

          {/* Mobile AI Chatbot Link */}
          <div className="pt-2 border-t border-[#B34728]/15">
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

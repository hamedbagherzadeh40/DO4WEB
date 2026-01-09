
import React, { useState, useEffect } from 'react';
import { MessageCircle, Languages, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: 'fa' | 'en';
  setLang: (l: 'fa' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    fa: {
      services: "خدمات",
      portfolio: "نمونه‌کارها",
      about: "داستان ما",
      cta: "شروع همکاری"
    },
    en: {
      services: "Services",
      portfolio: "Work",
      about: "Story",
      cta: "Start Collab"
    }
  };

  const t = content[lang];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="text-3xl font-black tracking-tighter text-[#1A202C]">
            DO<span className="text-[#8B2252]">4</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#1A202C]/60">
            <a href="#services" className="hover:text-[#8B2252] transition-colors">{t.services}</a>
            <a href="#portfolio" className="hover:text-[#8B2252] transition-colors">{t.portfolio}</a>
            <a href="#about" className="hover:text-[#8B2252] transition-colors">{t.about}</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button 
            onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
            className="p-2 rounded-full hover:bg-[#8B2252]/10 transition-colors text-[#8B2252]"
          >
            <Languages size={20} />
          </button>

          {/* Desktop CTA */}
          <a 
            href="https://wa.me/989925843628" 
            target="_blank"
            className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B2252] text-white text-sm font-bold shadow-lg shadow-[#8B2252]/20 hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.cta}</span>
          </a>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-6 font-bold animate-in slide-in-from-top-4">
          <a href="#services" onClick={() => setMobileMenu(false)}>{t.services}</a>
          <a href="#portfolio" onClick={() => setMobileMenu(false)}>{t.portfolio}</a>
          <a href="#about" onClick={() => setMobileMenu(false)}>{t.about}</a>
          <a href="https://wa.me/989925843628" className="bg-[#8B2252] text-white p-4 rounded-xl text-center">{t.cta}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

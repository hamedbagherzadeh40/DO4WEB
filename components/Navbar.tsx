
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-12 space-x-reverse">
          <a href="#" className="text-3xl font-black tracking-tighter text-[#1A202C] transition-transform hover:scale-105">
            دو<span className="text-[#8B2252]">۴</span>
          </a>
          <div className="hidden md:flex items-center space-x-8 space-x-reverse text-sm font-bold text-[#1A202C]/60">
            <a href="#services" className="hover:text-[#8B2252] transition-colors relative group">
              خدمات
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#8B2252] transition-all group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="hover:text-[#8B2252] transition-colors relative group">
              نمونه‌کارها
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#8B2252] transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-[#8B2252] transition-colors relative group">
              داستان ما
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#8B2252] transition-all group-hover:w-full"></span>
            </a>
          </div>
        </div>
        <a 
          href="https://wa.me/989925843628" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B2252] text-white text-sm font-bold hover:bg-[#6b1a3f] transition-all transform hover:scale-105 shadow-lg shadow-[#8B2252]/20"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]/20" />
          <span>شروع همکاری</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface HeroProps {
  lang: 'fa' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const t = {
    fa: {
      studio: "دو۴",
      tagline1: "روایت صادقانه",
      tagline2: "طراحی خلاقانه",
      desc: "طراحی وب‌سایت های خلاقانه و خلق روایت های بصری برای معرفی حرفه، هنر و کسب و کار شما.",
      cta: "شروع همکاری",
      work: "نمونه‌کارها"
    },
    en: {
      studio: "DO4",
      tagline1: "Honest Narrative",
      tagline2: "Creative Design",
      desc: "Designing creative websites and visual stories to showcase your profession, art, and business.",
      cta: "Start Project",
      work: "Portfolio"
    }
  }[lang];

  const cards = [
    { id: 1, img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600', rotate: '-12deg' },
    { id: 2, img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600', rotate: '-5deg' },
    { id: 3, img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600', rotate: '2deg' },
    { id: 4, img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600', rotate: '8deg' },
  ];

  return (
    <section className="relative min-h-[100vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-20 text-center mb-12 lg:mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#1A202C] tracking-tight flex flex-wrap justify-center items-center gap-4 lg:gap-8">
          <span className="whitespace-nowrap">{t.studio.slice(0, 2)}<span className="text-[#8B2252]">{t.studio.slice(2)}</span></span>
          <span className="text-[#1A202C]/20 font-light hidden lg:block text-7xl">|</span>
          <div className="flex flex-col items-center lg:items-start leading-none text-center lg:text-right">
            <span>{t.tagline1}</span>
            <span className="text-[#8B2252]">{t.tagline2}</span>
          </div>
        </h1>
        
        <p className="text-lg lg:text-2xl text-[#1A202C]/70 max-w-3xl mx-auto mt-8 lg:mt-12 mb-10 leading-relaxed font-light px-4">
          {t.desc}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6">
          <a href="https://wa.me/989925843628" className="w-full md:w-auto px-10 py-5 rounded-full bg-[#8B2252] text-white font-bold text-lg shadow-xl shadow-[#8B2252]/20 hover:scale-105 transition-transform flex items-center justify-center gap-2">
            <MessageCircle className="w-6 h-6" /> {t.cta}
          </a>
          <a href="#portfolio" className="w-full md:w-auto px-12 py-5 rounded-full bg-white text-[#1A202C] font-bold text-lg border border-[#1A202C]/5 hover:bg-[#1A202C]/5 transition-transform">
            {t.work}
          </a>
        </div>
      </div>

      {/* Floating Cards - Optimized for Desktop, Simplified for Mobile */}
      <div className="relative w-full h-[300px] lg:h-[600px] flex justify-center items-center overflow-visible z-10">
        <div 
          className="flex gap-4 lg:gap-10 perspective-2000 transition-transform duration-500 ease-out"
          style={{ transform: `rotateY(${mousePos.x * 0.1}deg) rotateX(${-mousePos.y * 0.1}deg)` }}
        >
          {cards.map((card, i) => (
            <div 
              key={card.id}
              className={`relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-1000 ${i > 1 ? 'hidden md:block' : ''}`}
              style={{ 
                width: 'min(40vw, 320px)',
                height: 'min(50vh, 450px)',
                transform: `rotateY(${card.rotate}) translateY(${Math.sin(i) * 20}px)`,
                animation: `float-slow ${8 + i}s ease-in-out infinite alternate`
              }}
            >
              <img src={card.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          from { transform: translateY(-15px) rotateY(var(--tw-rotate-y, 0deg)); }
          to { transform: translateY(15px) rotateY(var(--tw-rotate-y, 0deg)); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

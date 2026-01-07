
import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const cards = [
    { id: 1, img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop', rotate: '-12deg', scale: '1' },
    { id: 2, img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop', rotate: '-5deg', scale: '1.1' },
    { id: 3, img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1528&auto=format&fit=crop', rotate: '2deg', scale: '1.05' },
    { id: 4, img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop', rotate: '8deg', scale: '1' },
    { id: 5, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop', rotate: '15deg', scale: '0.95' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center mb-16">
        <div className="inline-flex items-center justify-center">
          <h1 className="text-5xl md:text-8xl font-black text-[#1A202C] tracking-tight flex items-center">
            <span className="whitespace-nowrap">
              دو<span className="text-[#8B2252]">۴</span>
            </span>
            <span className="mx-4 md:mx-8 text-[#1A202C]/20 font-light hidden md:block text-6xl md:text-8xl">|</span>
            <div className="flex flex-col items-start leading-[1.1] text-right font-black">
              <span className="block whitespace-nowrap">روایت صادقانه</span>
              <span className="text-[#8B2252] block whitespace-nowrap">طراحی خلاقانه</span>
            </div>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-[#1A202C]/70 max-w-3xl mx-auto mt-12 mb-12 leading-relaxed font-light">
          طراحی وب‌سایت های خلاقانه و خلق روایت های بصری <br className="hidden md:block" />
          برای معرفی حرفه، هنر، کسب و کار و اندیشه شما.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="https://wa.me/905312816518" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-5 rounded-full bg-[#8B2252] text-white font-bold text-lg hover:bg-[#6b1a3f] transition-all transform hover:scale-105 shadow-xl shadow-[#8B2252]/20 text-center flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-7 h-7 text-[#25D366] fill-[#25D366]/20" />
            <span>شروع همکاری</span>
          </a>
          <a 
            href="#portfolio"
            className="w-full md:w-auto px-12 py-5 rounded-full bg-white text-[#1A202C] font-bold text-lg border border-[#1A202C]/5 hover:bg-[#1A202C]/5 transition-all transform hover:scale-105 text-center"
          >
            نمونه‌کارها
          </a>
        </div>
      </div>

      {/* Cinematic Horizontal Depth Cards */}
      <div className="relative w-full h-[450px] md:h-[600px] mt-8 flex justify-center items-center overflow-visible z-10">
        <div 
          className="flex gap-4 md:gap-10 perspective-2000 transition-transform duration-500 ease-out gpu-accelerated"
          style={{ transform: `rotateY(${mousePos.x * 0.1}deg) rotateX(${-mousePos.y * 0.1}deg)` }}
        >
          {cards.map((card, i) => (
            <div 
              key={card.id}
              className="group relative w-40 md:w-80 h-64 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out gpu-accelerated"
              style={{ 
                transform: `rotateY(${card.rotate}) translateY(${Math.sin(i) * 20}px) scale(${card.scale})`,
                animation: `float-slow ${8 + i}s ease-in-out infinite alternate`,
                boxShadow: '0 40px 100px -20px rgba(26, 32, 44, 0.3)'
              }}
            >
              <img 
                src={card.img} 
                alt={`نمونه کار ${card.id}`}
                loading={i < 3 ? "eager" : "lazy"}
                // @ts-ignore
                fetchpriority={i < 2 ? "high" : "auto"}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest text-white/60 mb-2 block">Project 0{card.id}</span>
                  <p className="text-lg font-bold">داستان بصری دو<span className="text-[#8B2252]">۴</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Atmospheric Background Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B2252]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A202C]/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
      </div>

      <style>{`
        @keyframes float-slow {
          from { transform: translateY(-10px) rotateY(var(--tw-rotate-y)); }
          to { transform: translateY(10px) rotateY(var(--tw-rotate-y)); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
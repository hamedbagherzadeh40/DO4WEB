
import React from 'react';
import { Zap, Gem, Video, Monitor, MousePointer2 } from 'lucide-react';

interface ServicesProps {
  lang: 'fa' | 'en';
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const content = {
    fa: {
      title: "ما چه می‌کنیم؟",
      sub: "OUR SERVICES",
      items: [
        { title: 'لانچ سریع (۷ روزه)', desc: 'فرآیند اختصاصی دو۴ برای رساندن ایده شما به بازار در کمترین زمان.', icon: <Zap />, cta: 'لانچ فوری' },
        { title: 'استراتژی برندینگ', desc: 'خلق شخصیتی ماندگار برای برند که فراتر از یک لوگوی ساده است.', icon: <Gem />, cta: 'مشاوره برندینگ' },
        { title: 'تولید ویدیو اینستاگرام', desc: 'تیزرهای سینمایی و ویدیوهای استراتژیک برای درخشش در شبکه‌های اجتماعی.', icon: <Video />, cta: 'تولید ویدیو' },
        { title: 'طراحی لندینگ‌پیج', desc: 'خانه‌های دیجیتال با نرخ تبدیل بالا که روایتگر هویت کسب‌وکار شما هستند.', icon: <Monitor />, cta: 'سفارش لندینگ', active: true }
      ]
    },
    en: {
      title: "What We Do",
      sub: "OUR SERVICES",
      items: [
        { title: 'Rapid Launch (7 Days)', desc: 'DO4 exclusive process to get your idea to market in record time.', icon: <Zap />, cta: 'Launch Now' },
        { title: 'Branding Strategy', desc: 'Creating a lasting personality for your brand beyond just a logo.', icon: <Gem />, cta: 'Consultancy' },
        { title: 'Instagram Video', desc: 'Cinematic teasers and strategic videos for social media brilliance.', icon: <Video />, cta: 'Video Production' },
        { title: 'Landing Page Design', desc: 'High-conversion digital homes that tell your business story.', icon: <Monitor />, cta: 'Order Landing', active: true }
      ]
    }
  }[lang];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F0F4F8] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 lg:mb-20 gap-4">
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A202C]">{content.title}</h2>
          <div className="hidden lg:block h-px flex-1 mx-12 bg-[#1A202C]/10"></div>
          <span className="text-sm font-bold text-[#8B2252] tracking-widest uppercase opacity-60">{content.sub}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-10 flex flex-col items-center text-center transition-all duration-500 group ${
                item.active 
                ? 'bg-white rounded-[3rem] lg:rounded-[3.5rem] shadow-xl scale-100 lg:scale-105 z-10 border border-[#8B2252]/5' 
                : 'rounded-3xl hover:bg-white/50'
              }`}
            >
              <div className={`mb-8 p-4 rounded-2xl ${item.active ? 'bg-[#F0F4F8] text-[#1A202C]' : 'text-[#1A202C]/40 group-hover:text-[#8B2252]'}`}>
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>

              <h3 className="text-xl lg:text-2xl font-black text-[#1A202C] mb-4">{item.title}</h3>
              <p className="text-[#1A202C]/60 leading-relaxed mb-10 text-sm font-medium">{item.desc}</p>

              <div className="mt-auto flex flex-col items-center gap-2">
                {item.active && <MousePointer2 className="w-5 h-5 text-[#1A202C]/40 animate-bounce" />}
                <button className={`text-xs font-bold uppercase tracking-wider ${
                  item.active ? 'text-[#1A202C] border-b border-[#1A202C]/20 pb-1' : 'text-[#1A202C]/40 group-hover:text-[#8B2252]'
                }`}>
                  {item.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

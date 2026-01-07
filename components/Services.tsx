
import React from 'react';
import { Layout, Video, PenTool, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'طراحی وب‌سایت تک‌صفحه‌ای',
      desc: 'ساخت تجربه‌های دیجیتال مدرن و متمرکز که داستان برند شما را به ساده‌ترین شکل روایت می‌کنند.',
      icon: <Layout className="w-8 h-8" />,
    },
    {
      title: 'داستان‌سرایی بصری',
      desc: 'استفاده از قدرت تصویر و حرکت برای برقراری ارتباط عمیق و صادقانه با مخاطب.',
      icon: <Video className="w-8 h-8" />,
    },
    {
      title: 'تولید محتوای ویدئویی',
      desc: 'ساخت ویدئوهای خلاقانه و موشن‌گرافیک برای شبکه‌های اجتماعی با استانداردهای سینمایی.',
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: 'استراتژی برند خلاق',
      desc: 'کمک به برندها برای یافتن صدای منحصر‌به‌فرد و ارتباطی غیردستکاری‌شده.',
      icon: <Globe className="w-8 h-8" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Animated Text - Purple color with low opacity for cinematic feel */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          className="text-[12rem] md:text-[25rem] font-black text-[#8B2252]/[0.06] whitespace-nowrap select-none transition-opacity duration-1000"
          style={{ 
            animation: 'floating-text 25s ease-in-out infinite alternate',
            transform: 'rotate(-8deg)',
            filter: 'blur(2px)'
          }}
        >
          دچار یعنی عاشق
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-[#1A202C] mb-8 border-r-4 border-[#8B2252] pr-4">ما چه می‌کنیم؟</h2>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-[#1A202C] leading-tight">
                سایت برای ما یک موجود زنده است <br/>
                که با آن هویت شما را نشان دهیم.
              </p>
              
              <div className="pt-4 border-t border-[#1A202C]/5">
                <p className="text-xl md:text-2xl text-[#1A202C]/50 font-extralight italic leading-relaxed tracking-wide">
                  من وضو با تپش پنجره‌ها می‌گیرم...
                </p>
              </div>
            </div>
          </div>
          <div className="text-sm font-bold text-[#8B2252] uppercase tracking-widest bg-[#8B2252]/5 px-6 py-3 rounded-2xl self-start">
            CREATIVE ECOSYSTEM
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-[#F0F4F8] hover:bg-[#8B2252] transition-all duration-500 cursor-default shadow-sm hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 text-[#8B2252] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A202C] group-hover:text-white mb-4 transition-colors">
                {s.title}
              </h3>
              <p className="text-[#1A202C]/60 group-hover:text-white/80 transition-colors leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floating-text {
          0% {
            transform: rotate(-8deg) translateX(80px) translateY(0);
            opacity: 0.03;
          }
          50% {
            opacity: 0.07;
            transform: rotate(-6deg) translateX(0) translateY(-20px);
          }
          100% {
            transform: rotate(-10deg) translateX(-80px) translateY(20px);
            opacity: 0.03;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;

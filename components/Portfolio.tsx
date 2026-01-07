
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { 
      title: 'پروژه آفرینش', 
      cat: 'طراحی وب تک‌صفحه‌ای', 
      img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1287&auto=format&fit=crop',
      desc: 'تجربه‌ای غوطه‌ورکننده در دنیای مدرن.'
    },
    { 
      title: 'روایت ناتمام', 
      cat: 'ویدئو استوری', 
      img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1471&auto=format&fit=crop',
      desc: 'داستان‌سرایی با قدرت تصویر.'
    },
    { 
      title: 'هویت بصری دوچار', 
      cat: 'برندینگ و استراتژی', 
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop',
      desc: 'خلق شخصیتی متمایز و انسانی.'
    },
    { 
      title: 'مینیمالیسم دیجیتال', 
      cat: 'تولید محتوا', 
      img: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop',
      desc: 'ارتباطی فراتر از شلوغی‌های بازار.'
    },
  ];

  const line1 = "هر پروژه برای ما فصلی جدید از یک کتاب است. ما با دقت و حوصله،".split(' ');
  const line2 = "بهترین کلمات بصری را برای روایت شما انتخاب می‌کنیم.".split(' ');

  return (
    <section id="portfolio" className="py-32 bg-[#F0F4F8]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="text-[#8B2252]">دچار</span>{" "}
            <span className="text-[#1A202C]">دو</span>
            <span className="text-[#8B2252]">۴</span>
          </h2>
          
          <p className="text-2xl md:text-3xl font-black text-[#1A202C] mb-8 leading-tight">
            ما پروژه‌ها را نمی‌سازیم؛ ما دچار آن‌ها می‌شویم تا جزییات <span className="whitespace-nowrap">جان بگیرند.</span>
          </p>

          <div className="space-y-2">
            <div className="flex flex-wrap gap-x-2 overflow-hidden">
              {line1.map((word, i) => (
                <span 
                  key={`l1-${i}`} 
                  className="text-lg md:text-xl text-[#1A202C]/60 font-medium inline-block opacity-0 translate-x-10"
                  style={{ 
                    animation: `word-flow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards ${i * 0.05}s`
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-2 overflow-hidden">
              {line2.map((word, i) => (
                <span 
                  key={`l2-${i}`} 
                  className="text-lg md:text-xl text-[#1A202C]/60 font-medium inline-block opacity-0 translate-x-10"
                  style={{ 
                    animation: `word-flow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards ${(line1.length + i) * 0.05}s`
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-8">
          <div className="text-sm font-bold text-[#8B2252] border-b-2 border-[#8B2252] pb-1 cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap">
            نمایش همه پروژه‌ها
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((p, idx) => (
            <div key={idx} className="group cursor-pointer perspective-1000">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[450px] lg:h-[550px] transition-all duration-700 transform group-hover:rotate-x-2 group-hover:-rotate-y-2 group-hover:scale-[1.02] gpu-accelerated">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C] via-[#1A202C]/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-4 py-1.5 bg-[#8B2252] rounded-full text-white text-xs font-bold mb-4">
                    {p.cat}
                  </span>
                  <h3 className="text-4xl font-black text-white mb-4 leading-tight">{p.title}</h3>
                  <p className="text-white/70 text-lg font-light mb-6 line-clamp-2 max-w-sm">{p.desc}</p>
                  <div className="flex items-center gap-2 text-[#F0F4F8] font-bold group/btn">
                    <span>مشاهده داستان پروژه</span>
                    <span className="group-hover/btn:translate-x-[-10px] transition-transform">←</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes word-flow {
          0% { opacity: 0; transform: translateX(30px); filter: blur(5px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
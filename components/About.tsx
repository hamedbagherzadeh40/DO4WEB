
import React from 'react';
import { Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const steps = [
    { id: '01', farsi: 'دچار', english: 'Attention' },
    { id: '02', farsi: 'مکث', english: 'Interest' },
    { id: '03', farsi: 'دیدن', english: 'Desire' },
    { id: '04', farsi: 'ساختن', english: 'Conviction' },
    { id: '05', farsi: 'ارتباط', english: 'Action' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 text-right">
            <header className="mb-8">
              <div className="flex items-center justify-start gap-2 mb-4">
                <span className="text-[#8B2252] font-bold text-xs tracking-widest uppercase">MANIFESTO / مانیفست</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#1A202C] leading-tight mb-8">
                داستان ما:<br />
                طراحی برای جان‌های <span className="text-[#8B2252]">آگاه</span>
              </h2>
            </header>

            <div className="space-y-8 mb-12">
              <p className="text-lg md:text-xl text-[#1A202C]/70 leading-relaxed font-light">
                «دوچار» بیش از آنکه یک نام تجاری باشد، یک رویکرد انسانی به دنیای دیجیتال است. ما معتقدیم دنیای امروز به اندازه کافی شلوغ و پر از پیام‌های تهاجمی است؛ به همین دلیل, ما به دنبال سکوت هوشمندانه هستیم.
              </p>
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#8B2252]/10 via-[#F0F4F8] to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-[#F0F4F8]/40 backdrop-blur-sm border-r-2 border-[#8B2252]/20 p-8 md:p-10 rounded-2xl rounded-tr-none overflow-hidden">
                  <svg className="absolute left-0 bottom-0 w-32 h-32 text-[#8B2252]/5 transform -scale-x-100" viewBox="0 0 100 100">
                    <path d="M0 100 C 20 0, 50 0, 100 100" stroke="currentColor" fill="transparent" strokeWidth="0.5" />
                  </svg>
                  
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 text-[#8B2252] shrink-0 mt-1 opacity-60" />
                    <p className="text-xl md:text-2xl font-medium text-[#1A202C] leading-relaxed italic">
                      فرآیند ما یک خط مستقیم نیست، <br className="hidden md:block" />
                      یک <span className="text-[#8B2252] font-black">سفر شاعرانه</span> از ایده تا اجراست.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pr-6 border-r-4 border-[#8B2252] py-2 mb-12">
              <h3 className="text-[#8B2252] text-xl md:text-2xl font-black mb-3">مشاهده مسیر تحول</h3>
              <p className="text-lg md:text-xl font-bold text-[#1A202C] leading-snug mb-10">
                ما از مکث به دیدن، و از دیدن به ساختن می‌رسیم. هر پیکسل، هر کلمه و هر فضا، با هدف دو<span className="text-[#8B2252]">۴</span> شدن مخاطب شما طراحی می‌شود. اینجاست که ایده، تبدیل به اشتیاق می‌شود.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 border-t border-[#1A202C]/5 pt-8">
                {steps.map((step) => (
                  <div key={step.id} className="group cursor-default">
                    <span className="block text-2xl font-black text-[#8B2252]/20 group-hover:text-[#8B2252]/40 transition-colors duration-500 mb-1">
                      {step.id}
                    </span>
                    <h4 className="text-lg font-black text-[#1A202C] mb-1">{step.farsi}</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#1A202C]/40 font-bold">
                      {step.english}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-16">
              <div className="flex -space-x-4 space-x-reverse">
                <img loading="lazy" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Team Member" />
                <img loading="lazy" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Team Member" />
                <img loading="lazy" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" alt="Team Member" />
              </div>
              <div className="text-right">
                <h4 className="text-lg font-black text-[#1A202C]">تیم خلاق دوچار</h4>
                <p className="text-xs text-[#1A202C]/40">همراه شما در خلق تجربه‌های ماندگار.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01] bg-[#F0F4F8] aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" 
                  alt="Our Creative Space" 
                  loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-[#8B2252]/5 rounded-full blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
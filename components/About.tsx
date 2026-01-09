
import React from 'react';
import { Sparkles } from 'lucide-react';

interface AboutProps {
  lang: 'fa' | 'en';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const steps = {
    fa: [
      { id: '01', farsi: 'دچار', english: 'Attention' },
      { id: '02', farsi: 'مکث', english: 'Interest' },
      { id: '03', farsi: 'دیدن', english: 'Desire' },
      { id: '04', farsi: 'ساختن', english: 'Conviction' },
      { id: '05', farsi: 'ارتباط', english: 'Action' },
    ],
    en: [
      { id: '01', farsi: 'Capture', english: 'Attention' },
      { id: '02', farsi: 'Pause', english: 'Interest' },
      { id: '03', farsi: 'Vision', english: 'Desire' },
      { id: '04', farsi: 'Create', english: 'Conviction' },
      { id: '05', farsi: 'Link', english: 'Action' },
    ]
  }[lang];

  const t = {
    fa: {
      sub: "MANIFESTO / مانیفست",
      title: "داستان ما: طراحی برای جان‌های آگاه",
      p1: "«دوچار» بیش از آنکه یک نام تجاری باشد، یک رویکرد انسانی به دنیای دیجیتال است. ما به دنبال سکوت هوشمندانه در هیاهوی امروز هستیم.",
      quote: "فرآیند ما یک خط مستقیم نیست، یک سفر خلاقانه از ایده تا اجراست.",
      team: "تیم خلاق دوچار"
    },
    en: {
      sub: "MANIFESTO",
      title: "Our Story: Designing for Conscious Souls",
      p1: "DOCHAR is more than a brand; it's a human approach to the digital world. We seek intelligent silence in today's noise.",
      quote: "Our process isn't a straight line, it's a creative journey from idea to execution.",
      team: "DO4 Creative Team"
    }
  }[lang];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <header className="mb-8">
              <span className="text-[#8B2252] font-bold text-xs tracking-widest uppercase">{t.sub}</span>
              <h2 className="text-3xl lg:text-6xl font-black text-[#1A202C] mt-4 leading-tight">{t.title}</h2>
            </header>

            <div className="space-y-8 mb-12">
              <p className="text-lg lg:text-xl text-[#1A202C]/70 leading-relaxed font-light">{t.p1}</p>
              
              <div className="relative p-8 lg:p-10 bg-[#F0F4F8]/40 border-r-4 border-[#8B2252] rounded-2xl">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-[#8B2252] shrink-0" />
                  <p className="text-xl lg:text-2xl font-medium text-[#1A202C] italic">{t.quote}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-8 border-t border-[#1A202C]/5">
              {steps.map((step) => (
                <div key={step.id} className="group cursor-default">
                  <span className="block text-2xl font-black text-[#8B2252]/20 group-hover:text-[#8B2252] transition-colors">{step.id}</span>
                  <h4 className="text-lg font-black text-[#1A202C]">{step.farsi}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#1A202C]/40">{step.english}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470" className="w-full h-full object-cover" alt="Team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/989925843628";
  const email = "hello@dochar.studio";

  return (
    <section id="contact" className="bg-white py-24 md:py-32 relative overflow-hidden border-t border-[#1A202C]/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B2252]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1A202C]/5 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section - Centered */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-[#1A202C] mb-10 leading-tight tracking-tighter">
              پرده آخر: <br className="md:hidden" />
              <span className="text-[#8B2252] drop-shadow-sm">وقت دچار شدن</span>
            </h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-3">
                <p className="text-[#8B2252] text-2xl md:text-4xl font-black leading-tight">
                  دعوت به یک گپ ساده درباره برند شما
                </p>
              </div>
              <p className="text-[#8B2252]/90 text-xl md:text-2xl font-medium leading-relaxed">
                شما تنها یک تماس با دو<span className="font-black text-[#1A202C]">۴</span> شدن فاصله دارید
              </p>
            </div>
          </div>

          {/* Contact Boxes Section - Centered Layout */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center justify-center">
            
            {/* WhatsApp Box - Now Purple */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center bg-[#8B2252] hover:bg-[#6b1a3f] text-white px-8 py-4 rounded-full transition-all duration-500 shadow-xl hover:shadow-[#8B2252]/30 transform hover:-translate-y-1 min-w-[300px] md:min-w-[340px] justify-between"
            >
              <span className="text-2xl md:text-3xl font-black tracking-tight ml-4">وقت دچار شدن</span>
              <div className="w-14 h-14 bg-[#7DBE13] rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0">
                <MessageCircle className="w-8 h-8 text-white fill-white/10" />
              </div>
            </a>

            {/* Email Box - Purple Background, White Circle, Black Icon */}
            <a 
              href={`mailto:${email}`}
              className="group flex items-center bg-[#8B2252] hover:bg-[#6b1a3f] text-white px-8 py-4 rounded-full transition-all duration-500 shadow-xl hover:shadow-[#8B2252]/30 transform hover:-translate-y-1 min-w-[300px] md:min-w-[340px] justify-between"
            >
              <span className="text-2xl md:text-3xl font-black tracking-tight ml-4">ارسال ایمیل</span>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0">
                <Mail className="w-8 h-8 text-black" />
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

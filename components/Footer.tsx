
import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/989925843628";

  return (
    <footer className="bg-[#1A202C] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            {/* Title's '4' remains purple as requested previously */}
            <h3 className="text-3xl font-black mb-6">دو<span className="text-[#8B2252]">۴</span></h3>
            <div className="text-white max-w-md mb-8 leading-relaxed space-y-1">
              <p>استودیو خلاق دو<span className="text-white">۴</span>؛</p>
              <p>جایی که تکنولوژی و هنر برای روایت صادقانه برند شما به هم می‌رسند.</p>
              <p>ما دنیای دیجیتال را انسانی‌تر می‌کنیم.</p>
            </div>
            <div className="flex gap-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#8B2252] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#8B2252] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#8B2252] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:info@dochar.studio" className="p-2 bg-white/5 rounded-full hover:bg-[#8B2252] transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">دسترسی سریع</h4>
            <ul className="space-y-4 text-white">
              <li><a href="#services" className="hover:text-white/70 transition-colors">خدمات</a></li>
              <li><a href="#portfolio" className="hover:text-white/70 transition-colors">نمونه‌کارها</a></li>
              <li><a href="#about" className="hover:text-white/70 transition-colors">داستان ما</a></li>
              <li>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white/70 transition-colors"
                >
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">ارتباط با ما</h4>
            <ul className="space-y-4 text-white">
              <li><a href="mailto:info@dochar.studio" className="hover:text-white/70 transition-colors">info@dochar.studio</a></li>
              <li>تهران، استودیو خلاق دو<span className="text-white">۴</span></li>
              <li dir="ltr" className="text-right">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                  +98 992 584 3628
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© ۲۰۲۴ استودیو دو<span className="text-white">۴</span>. تمامی حقوق محفوظ است.</p>
          <p>طراحی شده با عشق برای روایت‌های شما.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

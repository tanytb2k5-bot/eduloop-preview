import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Mascot from './Mascot';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => (
  <section className="relative pt-12 pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-10 relative z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-3 bg-[#10B981]/10 px-6 py-2.5 rounded-full mx-auto lg:mx-0">
          <Sparkles className="text-[#10B981]" size={18} />
          <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">Tiên phong hạ tầng tài nguyên tuần hoàn</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2D3436] leading-[1.1] lg:leading-[0.9] tracking-tighter">
          Đừng Để Tri Thức <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5825D] to-[#10B981]">
            Bám Bụi Trên Kệ.
          </span>
        </h1>
        <p className="text-xl text-gray-500 font-bold max-w-lg leading-relaxed italic mx-auto lg:mx-0">
          "Giáo trình cũ của bạn là khởi đầu mới của người khác. Tiết kiệm 90% chi phí học tập ngay hôm nay."
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
          <button onClick={onStart} className="bg-[#10B981] text-white px-10 py-5 rounded-[24px] font-black text-lg flex items-center gap-2 hover:scale-105 transition-all shadow-2xl shadow-green-100">
            Bắt đầu bán sách <ArrowRight size={24} />
          </button>
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="user" />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-[#2D3436] text-white flex items-center justify-center text-[10px] font-black">+15k</div>
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-[#10B981]/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="relative bg-[#FAF9F6] p-12 rounded-[80px] border border-gray-100 shadow-2xl transition-all duration-700 hover:rotate-2">
           <Mascot className="w-full h-auto" mood="happy" />
           <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 animate-bounce">
              <div className="text-[#10B981] font-black text-4xl">19k+</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sách đang lưu thông</div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
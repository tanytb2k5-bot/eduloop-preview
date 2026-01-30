import React from 'react';
import { ShoppingBag, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import Mascot from './Mascot';

interface SelectionProps {
  onBrandStory: () => void;
  onShopNow: () => void;
}

const Selection: React.FC<SelectionProps> = ({ onBrandStory, onShopNow }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <button 
            onClick={onBrandStory}
            className="group relative bg-[#FAF9F6] rounded-[60px] p-12 text-left border-2 border-transparent hover:border-[#10B981] transition-all overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:h-[500px]"
          >
            <div className="space-y-6 relative z-10">
              <div className="w-20 h-20 bg-white rounded-[28px] flex items-center justify-center shadow-xl shadow-green-100 group-hover:scale-110 transition-transform">
                <Mascot mood="happy" className="w-12 h-12" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2D3436] leading-tight">
                Câu chuyện <br /> <span className="text-[#10B981]">Thương hiệu</span>
              </h2>
              <p className="text-gray-400 font-bold max-w-xs italic leading-relaxed">
                Khám phá tầm nhìn tuần hoàn và tại sao EduLoop ra đời để thay đổi giáo dục Việt Nam.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[#10B981] font-black uppercase tracking-widest text-sm relative z-10">
              Khám phá ngay <ArrowRight size={20} />
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl group-hover:bg-[#10B981]/10 transition-colors"></div>
            <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sparkles size={120} />
            </div>
          </button>

          <button 
            onClick={onShopNow}
            className="group relative bg-[#2D3436] rounded-[60px] p-12 text-left hover:shadow-2xl hover:shadow-gray-200 transition-all overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:h-[500px]"
          >
            <div className="space-y-6 relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-[28px] flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                <ShoppingBag size={40} className="text-[#10B981]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Bắt đầu <br /> <span className="text-[#10B981]">Mua sắm</span>
              </h2>
              <p className="text-white/40 font-bold max-w-xs italic leading-relaxed">
                Tiết kiệm hàng triệu đồng giáo trình ngay hôm nay với kho sách tuần hoàn lớn nhất.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[#10B981] font-black uppercase tracking-widest text-sm relative z-10">
              Vào chợ ngay <ArrowRight size={20} />
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-10 opacity-10">
              <TrendingUp size={120} strokeWidth={1} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Selection;
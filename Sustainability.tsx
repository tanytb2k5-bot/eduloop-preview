import React from 'react';
import { Globe, Leaf, Recycle, Coins } from 'lucide-react';

const Sustainability: React.FC = () => (
  <section className="py-32 bg-[#2D3436] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 p-20 opacity-[0.02] rotate-12">
      <Globe size={800} />
    </div>
    <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-24">
      <div className="space-y-6">
        <h2 className="text-5xl md:text-7xl font-black leading-tight">Mỗi cuốn sách <br /> <span className="text-[#10B981]">Là một mầm xanh.</span></h2>
        <p className="text-white/40 text-xl font-bold italic max-w-2xl mx-auto">Chung tay xây dựng cộng đồng giáo dục bền vững và trách nhiệm tại Việt Nam.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-20">
        {[
          { label: "GIẤY ĐƯỢC TIẾT KIỆM", val: "25.5 Tấn", icon: <Leaf />, color: "text-[#10B981]" },
          { label: "LƯỢT TUẦN HOÀN", val: "125.000", icon: <Recycle />, color: "text-[#3498db]" },
          { label: "CHI PHÍ TIẾT KIỆM", val: "4.8 Tỷ", icon: <Coins />, color: "text-amber-400" }
        ].map((stat, i) => (
          <div key={i} className="space-y-8 group">
            <div className={`w-24 h-24 bg-white/5 rounded-[32px] flex items-center justify-center mx-auto ${stat.color} backdrop-blur-xl group-hover:scale-110 transition-transform`}>
              {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 40 })}
            </div>
            <div className="space-y-3">
              <div className="text-6xl font-black tracking-tight">{stat.val}</div>
              <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12">
        <button className="bg-white text-[#2D3436] px-16 py-7 rounded-[32px] font-black text-xl hover:bg-[#10B981] hover:text-white transition-all shadow-2xl">
          Gia nhập cộng đồng Xanh
        </button>
      </div>
    </div>
  </section>
);

export default Sustainability;
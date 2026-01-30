import React, { useState, useEffect } from 'react';
import { Zap, Clock, ShoppingBag, Mail } from 'lucide-react';
import { BookListing } from '../types';

interface FlashSaleProps {
  listings: BookListing[];
}

const FlashSale: React.FC<FlashSaleProps> = ({ listings }) => {
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 45 * 60 + 12); // 02:45:12 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      h: h.toString().padStart(2, '0'),
      m: m.toString().padStart(2, '0'),
      s: s.toString().padStart(2, '0'),
    };
  };

  const { h, m, s } = formatTime(timeLeft);
  const flashBooks = listings.filter((b) => b.isFlashSale);

  return (
    <section className="py-16 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] text-white rounded-[32px] flex items-center justify-center shadow-xl shadow-red-100 animate-pulse">
              <Zap size={40} fill="currentColor" />
            </div>
            <div className="space-y-1">
              <h2 className="text-4xl font-black text-[#2D3436] tracking-tight">Flash Sale Sinh Viên</h2>
              <p className="text-lg font-bold text-[#FF6B6B]">Tri thức tiếp nối – Tối ưu chi phí, nâng bước tương lai</p>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-white/50 backdrop-blur-sm px-10 py-6 rounded-[40px] border border-[#FF6B6B]/10 shadow-sm">
            <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">THỜI GIAN CÒN LẠI:</span>
            <div className="flex items-center gap-3">
              <span className="bg-[#2D3436] text-white w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl shadow-lg">{h}</span>
              <span className="text-[#2D3436] font-black text-2xl">:</span>
              <span className="bg-[#2D3436] text-white w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl shadow-lg">{m}</span>
              <span className="text-[#2D3436] font-black text-2xl">:</span>
              <span className="bg-[#2D3436] text-white w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl shadow-lg">{s}</span>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {flashBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-[60px] p-6 flex flex-col md:flex-row gap-8 border-2 border-transparent hover:border-[#FF6B6B]/20 transition-all duration-500 shadow-xl shadow-gray-100 group relative overflow-hidden"
            >
              {/* Saving Tag */}
              <div className="absolute top-0 right-0 bg-[#FF6B6B] text-white px-8 py-2.5 rounded-bl-[32px] font-black text-[10px] uppercase tracking-widest z-10">
                TIẾT KIỆM 75%
              </div>

              {/* Image Section */}
              <div className="w-full md:w-56 aspect-[4/5] bg-gray-100 rounded-[48px] overflow-hidden relative flex-shrink-0 shadow-2xl">
                <img
                  src={book.images[0]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  alt={book.title}
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow flex flex-col justify-between py-2 space-y-6">
                <div>
                  <div className="text-[10px] font-black text-[#FF6B6B] uppercase mb-2 tracking-[0.2em]">
                    {book.subjectGroup}
                  </div>
                  <h3 className="text-2xl font-black leading-tight text-[#2D3436] group-hover:text-[#FF6B6B] transition-colors pr-10">
                    {book.title}
                  </h3>
                </div>

                {/* Rental Pack */}
                <div className="bg-[#EBF5FF] p-6 rounded-[40px] border border-[#3498db]/10 space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-[#3498db] relative z-10">
                    <Clock size={16} strokeWidth={3} />
                    <span className="text-[10px] font-black uppercase tracking-widest">GÓI THUÊ SIÊU TỐC</span>
                  </div>
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex-1 text-center">
                      <div className="text-[9px] font-black text-gray-400 uppercase mb-1">2 NGÀY</div>
                      <div className="text-3xl font-black text-[#3498db]">8.9k</div>
                    </div>
                    <div className="w-[1px] h-10 bg-[#3498db]/20"></div>
                    <div className="flex-1 text-center">
                      <div className="text-[9px] font-black text-gray-400 uppercase mb-1">1 TUẦN</div>
                      <div className="text-3xl font-black text-[#10B981]">14.9k</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">MUA ĐỨT LUÔN:</span>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black text-[#2D3436]">{book.price.toLocaleString()}đ</span>
                      <span className="text-xs text-gray-300 line-through font-bold">{book.originalPrice?.toLocaleString()}đ</span>
                    </div>
                  </div>
                  <button className="w-16 h-16 bg-gradient-to-tr from-[#2D3436] to-[#454d4f] text-white rounded-full flex items-center justify-center hover:bg-[#FF6B6B] transition-all shadow-xl hover:scale-110 active:scale-95">
                    <Mail size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
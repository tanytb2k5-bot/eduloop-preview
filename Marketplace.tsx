import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Timer, Star, Zap, Clock } from 'lucide-react';
import { BookListing } from '../types';

interface MarketplaceProps {
  id?: string;
  listings: BookListing[];
}

const Marketplace: React.FC<MarketplaceProps> = ({ id, listings }) => {
  const [rentView, setRentView] = useState(false);
  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
          <div className="space-y-4">
            <h2 className="text-5xl font-black text-[#2D3436] tracking-tight">Chợ Giáo Trình HCMC</h2>
            <p className="text-lg text-gray-500 font-bold max-w-xl">Hệ thống tuần hoàn sách giúp bạn tiếp cận tri thức với giá "hạt dẻ" nhất từ cộng đồng sinh viên.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
             <div className="relative flex-grow md:min-w-[450px]">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={24} />
                <input type="text" placeholder="Tìm Triết, Kinh tế chính trị..." className="w-full pl-16 pr-8 py-6 bg-[#FAF9F6] rounded-[32px] border-none outline-none focus:ring-4 focus:ring-[#10B981]/10 font-bold text-gray-600 shadow-sm text-lg" />
             </div>
             <button className="bg-white p-6 rounded-[24px] shadow-lg border border-gray-100 text-gray-400 hover:text-[#10B981] transition-all"><Filter size={28} /></button>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-[#FAF9F6] p-2.5 rounded-[40px] flex border border-gray-100 shadow-inner">
            <button onClick={() => setRentView(false)} className={`px-12 py-5 rounded-[32px] font-black text-sm transition-all flex items-center gap-3 ${!rentView ? 'bg-white text-[#10B981] shadow-2xl shadow-gray-200' : 'text-gray-400 hover:text-gray-600'}`}><ShoppingBag size={20} /> Mua đứt (từ 19k)</button>
            <button onClick={() => setRentView(true)} className={`px-12 py-5 rounded-[32px] font-black text-sm transition-all flex items-center gap-3 ${rentView ? 'bg-white text-[#3498db] shadow-2xl shadow-blue-50' : 'text-gray-400 hover:text-gray-600'}`}><Timer size={20} /> Thuê thi (8.9k - 14.9k)</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {listings.map(book => (
            <div key={book.id} className="bg-white rounded-[60px] overflow-hidden border border-gray-50 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all group relative">
               <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                  <img src={book.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={book.title} />
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur px-5 py-2 rounded-full text-[10px] font-black uppercase text-gray-600 shadow-xl border border-white tracking-widest">{book.subjectGroup}</div>
                  {book.isFlashSale && <div className="absolute top-8 right-8 bg-[#FF6B6B] text-white p-3 rounded-2xl shadow-2xl animate-bounce"><Zap size={20} fill="currentColor" /></div>}
               </div>
               <div className="p-10 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-[#2D3436] group-hover:text-[#10B981] transition-colors line-clamp-2 leading-tight">{book.title}</h3>
                    <div className="flex items-center gap-5 text-xs font-bold text-gray-400"><div className="flex items-center gap-1.5 text-amber-500"><Star size={16} fill="currentColor" /> {book.sellerScore}</div><span className="flex items-center gap-1.5">• {book.sellerName}</span><span className="flex items-center gap-1.5">• {book.location.split(' (')[0]}</span></div>
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                    <div className="flex flex-col"><div className={`text-4xl font-black ${rentView ? 'text-[#3498db]' : 'text-[#10B981]'}`}>{rentView ? book.rentalPrice2Days?.toLocaleString() : book.price.toLocaleString()}đ</div><div className="text-xs font-bold text-gray-300 line-through">{book.originalPrice?.toLocaleString()}đ</div></div>
                    <button className={`p-6 rounded-[28px] shadow-2xl transition-all active:scale-95 ${rentView ? 'bg-[#3498db] shadow-blue-100 hover:shadow-blue-200' : 'bg-[#2D3436] shadow-gray-100 hover:bg-[#10B981]'} text-white`}>{rentView ? <Clock size={28} /> : <ShoppingBag size={28} />}</button>
                  </div>
               </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center"><button className="px-16 py-6 bg-[#2D3436] text-white rounded-[24px] font-black text-lg hover:bg-[#10B981] hover:scale-105 transition-all shadow-2xl shadow-gray-200">Khám phá toàn bộ kho tri thức</button></div>
      </div>
    </section>
  );
};

export default Marketplace;
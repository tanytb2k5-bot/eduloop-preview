
import React from 'react';
import { AlertTriangle, TrendingDown } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    { 
      label: "LÃNG PHÍ", 
      stat: "1.000 Tỷ", 
      desc: "Giáo trình bị vứt bỏ mỗi năm tại Việt Nam.", 
      iconColor: "text-red-400",
      bgColor: "bg-red-50",
      hoverColor: "group-hover:text-red-500"
    },
    { 
      label: "CHI PHÍ", 
      stat: "32.7%", 
      desc: "Thu nhập SV chi cho sách học tập đắt đỏ.", 
      iconColor: "text-blue-400",
      bgColor: "bg-blue-50",
      hoverColor: "group-hover:text-blue-500"
    },
    { 
      label: "PHOTO LẬU", 
      stat: "90%", 
      desc: "SV chọn sách photo vì không còn lựa chọn rẻ.", 
      iconColor: "text-amber-400",
      bgColor: "bg-amber-50",
      hoverColor: "group-hover:text-amber-500"
    },
    { 
      label: "MẤT GIÁ", 
      stat: "2-10k", 
      desc: "Giá bán/kg sách cũ khi kết thúc kỳ học.", 
      iconColor: "text-purple-400",
      bgColor: "bg-purple-50",
      hoverColor: "group-hover:text-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 shadow-sm">
            <AlertTriangle size={28} />
          </div>
          <div>
            <h2 className="text-4xl font-black text-[#2D3436] tracking-tight">Thực trạng giáo trình</h2>
            <p className="text-gray-400 font-bold text-sm italic">Những con số nói lên nỗi đau của sinh viên HCMC</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-white rounded-[40px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className={`w-14 h-14 ${p.bgColor} rounded-2xl flex items-center justify-center ${p.iconColor} group-hover:scale-110 transition-transform`}>
                <TrendingDown size={28} />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{p.label}</div>
                <div className={`text-4xl font-black text-[#2D3436] transition-colors duration-300 ${p.hoverColor}`}>
                  {p.stat}
                </div>
              </div>
              <p className="text-xs text-gray-500 font-bold leading-relaxed italic">{p.desc}</p>
              <div className="pt-4 w-full">
                <div className="bg-[#10B981]/5 py-2 px-4 rounded-xl text-[10px] font-black text-[#10B981] uppercase border border-[#10B981]/10">
                  EduLoop Giải Quyết
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

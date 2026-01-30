import React, { useEffect } from 'react';
import { ArrowRight, Globe, Lightbulb, RotateCcw, Users, BookOpen, Timer, Layers, AlertTriangle, Sparkles, TrendingUp } from 'lucide-react';
import Mascot from './Mascot';

const CircularVisionSection: React.FC = () => (
  <section className="py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
           <div className="bg-[#FAF9F6] rounded-[100px] p-20 aspect-square flex items-center justify-center relative overflow-hidden group">
              <Mascot mood="thinking" className="w-80 h-80 relative z-10 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </div>
           <div className="absolute -bottom-10 -right-10 bg-[#2D3436] p-10 rounded-[56px] shadow-2xl max-w-xs space-y-4">
              <div className="w-14 h-14 bg-[#10B981]/20 rounded-2xl flex items-center justify-center text-[#10B981]"><Lightbulb size={32} /></div>
              <p className="text-sm font-black text-white italic leading-relaxed">"Tri thức chỉ thực sự có giá trị khi nó được lưu thông và tiếp nối."</p>
           </div>
        </div>
        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-[#2D3436] leading-tight">Tầm nhìn <br /> <span className="text-[#10B981]">Kinh tế Tuần hoàn</span></h2>
            <p className="text-xl text-gray-400 font-bold leading-relaxed italic">
              Tại EduLoop, chúng tôi áp dụng mô hình 3R (Reduce - Reuse - Recycle) vào hệ sinh thái học thuật, biến mỗi giáo trình thành một tài sản tri thức không ngừng luân chuyển.
            </p>
          </div>
          <div className="space-y-10">
            {[
              { title: "Giảm thiểu (Reduce)", desc: "Hạn chế việc tiêu thụ tài nguyên thiên nhiên cho in ấn sách mới bằng cách tận dụng tối đa sách cũ." },
              { title: "Tái sử dụng (Reuse)", desc: "Xây dựng hệ thống quản lý tin cậy giúp kéo dài tuổi thọ sử dụng của mỗi cuốn sách gấp 5-10 lần." },
              { title: "Tiếp nối (Redistribute)", desc: "Đảm bảo tri thức luôn nằm trong tầm tay của mọi sinh viên, không phụ thuộc vào rào cản tài chính." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <div className="w-14 h-14 rounded-[20px] bg-[#FAF9F6] text-[#10B981] flex items-center justify-center font-black text-2xl flex-shrink-0 group-hover:bg-[#10B981] group-hover:text-white transition-all shadow-sm">0{i+1}</div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-[#2D3436]">{item.title}</h4>
                  <p className="text-gray-400 font-bold text-base italic leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MarketGapSection: React.FC = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#FAF9F6] border border-gray-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <RotateCcw size={12} /> Alternative Solutions
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#2D3436]">Các giải pháp hiện có</h2>
        <p className="text-gray-400 font-bold italic">"Cục diện thị trường sách giáo trình cũ hiện nay"</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#FAF9F6] rounded-[48px] p-10 space-y-8 border border-gray-100 hover:border-[#3498db]/30 transition-all">
          <div className="flex justify-between items-start">
            <div className="w-16 h-16 bg-blue-50 text-[#3498db] rounded-[24px] flex items-center justify-center">
              <Users size={32} />
            </div>
            <div className="text-5xl font-black text-[#3498db] opacity-20">~70–80%</div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-black">Facebook groups / chợ tự do</h3>
            <ul className="space-y-3">
              {["Tự phát, không kiểm soát chất lượng", "Khó tìm đúng sách theo môn – chương trình", "Dễ lừa đảo, mất sách, mất thời gian", "Không có thuê ngắn hạn, không có combo học tập"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-500 italic">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#FAF9F6] rounded-[48px] p-10 space-y-8 border border-gray-100 hover:border-[#10B981]/30 transition-all">
          <div className="flex justify-between items-start">
            <div className="w-16 h-16 bg-green-50 text-[#10B981] rounded-[24px] flex items-center justify-center">
              <BookOpen size={32} />
            </div>
            <div className="text-5xl font-black text-[#10B981] opacity-20">~20–30%</div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-black">Thư viện / Sách cũ / Photo</h3>
            <ul className="space-y-3">
              {["Thư viện: Số lượng hạn chế, khó tiếp cận mùa cao điểm", "Sách cũ: Vẫn phải mua, không tối ưu cho dùng ngắn hạn", "Photo: Rẻ nhưng phi pháp, chất lượng kém, không bền vững"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-500 italic">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#2D3436] rounded-[56px] p-12 mb-20 relative overflow-hidden text-center group">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#10B981]/10 to-[#3498db]/10 opacity-0 group-hover:opacity-100 transition-all"></div>
        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#FF6B6B] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest animate-pulse">
            <AlertTriangle size={14} /> Mâu thuẫn lớn của thị trường
          </div>
          <p className="text-2xl md:text-3xl font-black text-white leading-tight">
            Hiện nay, hoặc là rẻ – dễ tiếp cận nhưng không tin cậy & kém hiệu quả,
            hoặc là chất lượng – hợp pháp nhưng đắt và không linh hoạt.
          </p>
          <div className="pt-4 flex flex-col items-center">
            <div className="w-px h-12 bg-white/20 mb-4"></div>
            <p className="text-[#10B981] font-black uppercase tracking-[0.2em] text-sm">
              Chưa có một hệ thống trung gian quản lý vòng đời sách học thuật một cách bài bản.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: <RotateCcw />, title: "Managed Circular Book System", subtitle: "Hệ thống trung gian quản lý vòng đời sách", desc: "Thu gom – phân loại – kiểm định – lưu trữ – tái phân phối. Không còn mua bán tự phát. Biến sách cũ thành tài sản học thuật lưu thông." },
          { icon: <Timer />, title: "Short-term Access & Smart Combos", subtitle: "Thuê ngắn hạn & combo học tập theo nhu cầu", desc: "Thuê theo tuần / tháng / mùa thi. Combo theo: môn học – học kỳ – kỳ thi – nền tảng năm nhất. Tối ưu cho người chỉ cần dùng ngắn hạn." },
          { icon: <Layers />, title: "Intelligent Classification & Tracking", subtitle: "Phân loại thông minh & quản lý bằng hệ thống số", desc: "Phân loại theo: môn – lĩnh vực – trình độ – mục đích. QR / mã hóa để theo dõi, hạn chế thất lạc. Đánh giá chất lượng – tình trạng – mức độ phù hợp." }
        ].map((sol, i) => (
          <div key={i} className="bg-white rounded-[48px] p-10 border border-gray-100 shadow-xl shadow-gray-50 flex flex-col justify-between group hover:scale-[1.02] transition-all">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#10B981]/10 text-[#10B981] rounded-2xl flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-white transition-all">
                {React.cloneElement(sol.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[#10B981] uppercase tracking-[0.2em]">{i + 1} Managed Solution</span>
                <h4 className="text-xl font-black text-[#2D3436] leading-tight">{sol.title}</h4>
                <p className="text-sm font-black text-gray-500 italic">{sol.subtitle}</p>
              </div>
              <p className="text-sm text-gray-400 font-bold leading-relaxed">{sol.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FAF9F6] border-2 border-dashed border-gray-100 rounded-[56px] p-16 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <Mascot mood="happy" className="w-20 h-20 mx-auto opacity-30 grayscale mb-4" />
          <h3 className="text-3xl md:text-4xl font-black text-[#2D3436] tracking-tight">
            We are not building a second-hand marketplace.
          </h3>
          <div className="w-16 h-1 bg-[#10B981] mx-auto rounded-full"></div>
          <h3 className="text-3xl md:text-4xl font-black text-[#10B981] tracking-tight">
            We are building a circular academic resource infrastructure.
          </h3>
        </div>
      </div>
    </div>
  </section>
);

interface BrandStoryProps {
  onBack: () => void;
}

const BrandStory: React.FC<BrandStoryProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-slide-up pb-24">
      <div className="bg-[#10B981]/5 py-24 text-center border-b border-[#10B981]/10 mb-12">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-8">
            <Mascot mood="thinking" className="w-16 h-16" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2D3436] tracking-tight">Câu Chuyện EduLoop</h1>
          <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto italic">
            "Chúng tôi không chỉ bán sách cũ, chúng tôi xây dựng hạ tầng tài nguyên tuần hoàn cho tri thức Việt."
          </p>
          <div className="flex justify-center gap-4 pt-8">
             <button onClick={onBack} className="bg-[#2D3436] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-[#10B981] transition-all shadow-xl">
               Mua sắm ngay <ArrowRight size={20} />
             </button>
          </div>
        </div>
      </div>

      <CircularVisionSection />
      <MarketGapSection />

      <div className="max-w-7xl mx-auto px-4 mt-24">
         <div className="bg-[#FAF9F6] rounded-[80px] p-16 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-[#2D3436]">Sẵn sàng cùng chúng tôi <br /> <span className="text-[#10B981]">Tuần hoàn tri thức?</span></h2>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white px-10 py-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-black text-[#10B981]">125k+</div>
                  <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mt-2">Sách đã lưu thông</div>
                </div>
                <div className="bg-white px-10 py-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-black text-[#3498db]">50k+</div>
                  <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mt-2">Sinh viên đồng hành</div>
                </div>
              </div>
              <button onClick={onBack} className="bg-[#10B981] text-white px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-green-100">
                Khám phá thị trường ngay
              </button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
              <Globe size={600} />
            </div>
         </div>
      </div>
    </div>
  );
};

export default BrandStory;
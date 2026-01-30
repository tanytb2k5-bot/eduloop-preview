import React, { useState, useRef, useEffect } from 'react';
import { X, Scan, Camera, ArrowRight, CheckCircle2, MapPin, Sparkles, Plus, Zap, Award, Loader2, BookOpen, Search, TrendingUp } from 'lucide-react';
import Mascot from './Mascot';

interface SellerFlowProps {
  onCancel: () => void;
}

const SellerFlow: React.FC<SellerFlowProps> = ({onCancel}) => {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [strategy, setStrategy] = useState<'fast' | 'desired'>('fast');
  const [formData, setFormData] = useState({
    title: '',
    sector: 'Kinh tế / Chính trị',
    subject: 'Triết học Mác-Lênin',
    condition: 'Tốt (80%)',
    school: 'ĐH Bách Khoa',
    originalPrice: '50000',
    sellPrice: '',
    notes: [] as string[]
  });

  const sectors = ["Kinh tế / Chính trị", "Khoa học Tự nhiên", "Kỹ thuật / Công nghệ", "Luật / Xã hội", "Ngôn ngữ"];
  const subjects = ["Triết học Mác-Lênin", "Kinh tế Chính trị", "Tư tưởng HCM", "Lịch sử Đảng", "Toán cao cấp", "Pháp luật đại cương", "Xác suất thống kê"];
  const conditions = ["Mới (100%)", "Như mới (95%)", "Tốt (80%)", "Cũ (60%)", "Tệ (Ghi chú nhiều)"];
  const commonNotes = ["Đã highlight", "Không gạch xóa", "Thiếu bìa", "Bản gốc", "Kèm tài liệu ôn thi", "Tặng thêm bài tập"];
  const schools = ["ĐH Bách Khoa", "ĐH Kinh tế (UEH)", "Làng Đại học Thủ Đức", "ĐH Sư Phạm HCMC", "ĐH Luật HCMC", "Cơ sở Quận 10", "Cơ sở Quận 1"];

  const handleToggleNote = (note: string) => {
    setFormData(prev => ({
      ...prev,
      notes: prev.notes.includes(note) ? prev.notes.filter(n => n !== note) : [...prev.notes, note]
    }));
  };

  const handleCaptureClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setFormData(prev => ({ ...prev, title: "Giáo trình Triết học Mác-Lênin (Tập 1)" }));
        setStep(2);
      }, 3000);
    }
  };

  const savingPercent = formData.originalPrice && formData.sellPrice 
    ? Math.max(0, Math.round((1 - Number(formData.sellPrice) / Number(formData.originalPrice)) * 100))
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[60px] shadow-2xl p-12 relative overflow-hidden border border-gray-100 min-h-[600px] flex flex-col">
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          capture="environment" 
          onChange={handleFileChange}
        />

        {/* AI Analyzing State */}
        {isAnalyzing && (
          <div className="absolute inset-0 z-[50] bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-[#10B981]/20 rounded-full blur-2xl animate-pulse"></div>
              <Mascot mood="thinking" className="w-40 h-40 relative z-10" />
            </div>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 text-[#10B981] font-black text-2xl">
                <Loader2 className="animate-spin" size={32} />
                <span>EduLoop AI đang phân tích...</span>
              </div>
              <p className="text-gray-400 font-bold italic">"Đang nhận diện bìa sách, tình trạng và đề xuất giá tối ưu cho bạn."</p>
            </div>
          </div>
        )}

        {/* Step Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gray-100 flex">
          <div className="h-full bg-[#10B981] transition-all duration-700 ease-out" style={{width: `${(step/4)*100}%`}}></div>
        </div>
        
        <div className="flex justify-between items-center mb-12 pt-4">
          <button onClick={onCancel} className="text-gray-400 font-bold flex items-center gap-2 hover:text-red-500 transition-colors z-10">
            <X size={20} /> Hủy đăng
          </button>
          <div className="flex gap-2 z-10">{[1,2,3,4].map(i => <div key={i} className={`h-2 rounded-full transition-all ${step === i ? 'bg-[#10B981] w-8' : 'bg-gray-200 w-2'}`}></div>)}</div>
        </div>

        {/* STEP 1: SCAN & TITLE */}
        {step === 1 && (
          <div className="space-y-10 animate-slide-up flex-grow">
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 bg-[#10B981]/10 text-[#10B981] rounded-3xl mb-4"><Scan size={40} /></div>
              <h2 className="text-4xl font-black text-[#2D3436]">Thông tin cơ bản</h2>
              <p className="text-gray-400 font-bold italic">"Chụp ảnh bìa hoặc quét mã vạch để AI tự động điền thông tin."</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div 
                onClick={handleCaptureClick}
                className="aspect-square border-4 border-dashed border-gray-100 rounded-[48px] flex flex-col items-center justify-center gap-4 hover:border-[#10B981] hover:bg-[#10B981]/5 transition-all cursor-pointer group bg-white"
              >
                <Camera size={48} className="text-gray-300 group-hover:text-[#10B981] transition-colors" />
                <span className="font-black text-gray-400 group-hover:text-[#10B981] transition-colors">Chụp Ảnh Bìa / Mã Vạch</span>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">TÊN SÁCH</label>
                  <input 
                    type="text" 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="Ví dụ: Triết học Mác-Lênin" 
                    className="w-full px-8 py-5 bg-gray-50 rounded-3xl border-2 border-transparent outline-none focus:border-[#10B981]/30 focus:bg-white font-bold text-lg transition-all" 
                  />
                </div>
                <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex items-start gap-3">
                  <Zap size={20} className="text-amber-500 shrink-0" />
                  <p className="text-xs font-bold text-amber-700 italic leading-relaxed">Mẹo: Ảnh rõ nét giúp AI định giá chính xác hơn 20% và giúp tin đăng của bạn uy tín hơn.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setStep(2)} 
              disabled={!formData.title}
              className={`w-full py-6 rounded-[32px] font-black text-xl shadow-xl transition-all flex items-center justify-center gap-2 ${formData.title ? 'bg-[#10B981] text-white hover:scale-[1.01] active:scale-95' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
            >
              Tiếp tục <ArrowRight size={24} />
            </button>
          </div>
        )}

        {/* STEP 2: CLASSIFICATION */}
        {step === 2 && (
          <div className="space-y-12 animate-slide-up flex-grow">
             <div className="text-center space-y-4">
                <h2 className="text-4xl font-black text-[#2D3436]">Phân loại giáo trình</h2>
                <p className="text-gray-400 font-bold italic">"Thông tin chính xác giúp sinh viên khác tìm thấy sách nhanh hơn."</p>
             </div>

             <div className="space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">NGÀNH / KHỐI NGÀNH</label>
                  <div className="flex flex-wrap gap-3">
                    {sectors.map(s => (
                      <button 
                        key={s} 
                        onClick={() => setFormData({...formData, sector: s})}
                        className={`px-8 py-4 rounded-full text-sm font-bold transition-all border-2 ${formData.sector === s ? 'bg-[#10B981] border-[#10B981] text-white' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">GỢI Ý MÔN HỌC (HCMC)</label>
                  <div className="flex flex-wrap gap-3">
                    {subjects.map(s => (
                      <button 
                        key={s}
                        onClick={() => setFormData({...formData, subject: s})}
                        className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all ${formData.subject === s ? 'bg-[#2D3436] text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">TÌNH TRẠNG THỰC TẾ</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {conditions.map(c => (
                      <button 
                        key={c}
                        onClick={() => setFormData({...formData, condition: c})}
                        className={`p-5 rounded-[32px] text-xs font-black transition-all border-2 ${formData.condition === c ? 'bg-[#10B981] border-[#10B981] text-white shadow-xl' : 'bg-white border-gray-50 text-gray-400 hover:border-gray-100'}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
             </div>

             <div className="flex gap-4 pt-4">
                <button onClick={() => setStep(1)} className="flex-1 py-6 rounded-[32px] font-black text-xl bg-gray-50 text-gray-400 hover:bg-gray-100 transition-all">Quay lại</button>
                <button onClick={() => setStep(3)} className="flex-[2] py-6 rounded-[32px] font-black text-xl bg-[#10B981] text-white shadow-xl hover:scale-[1.01] active:scale-95 transition-all">Tiếp tục bước 3</button>
             </div>
          </div>
        )}

        {/* STEP 3: DESCRIPTION & LOCATION */}
        {step === 3 && (
          <div className="space-y-12 animate-slide-up flex-grow">
             <div className="text-center space-y-4">
                <h2 className="text-4xl font-black text-[#2D3436]">Mô tả & Vị trí</h2>
                <p className="text-gray-400 font-bold italic">"Ghi chú chi tiết giúp giảm thiểu thắc mắc khi chat."</p>
             </div>

             <div className="space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">ĐẶC ĐIỂM NHANH (CHỌN NHIỀU)</label>
                  <div className="flex flex-wrap gap-4">
                    {commonNotes.map(n => (
                      <button 
                        key={n}
                        onClick={() => handleToggleNote(n)}
                        className={`px-8 py-4 rounded-[32px] text-sm font-bold transition-all flex items-center gap-3 ${formData.notes.includes(n) ? 'bg-[#2D3436] text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                      >
                        {formData.notes.includes(n) ? <CheckCircle2 size={18} /> : <Plus size={18} />}
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">ĐỊA ĐIỂM GIAO DỊCH TỐT NHẤT</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {schools.map(s => (
                      <button 
                        key={s}
                        onClick={() => setFormData({...formData, school: s})}
                        className={`p-6 rounded-[32px] text-xs font-black transition-all border-2 flex flex-col items-center justify-center gap-3 text-center ${formData.school === s ? 'bg-white border-[#10B981] text-[#10B981] shadow-xl' : 'bg-white border-gray-50 text-gray-400 hover:border-gray-100'}`}
                      >
                        <MapPin size={24} className={formData.school === s ? 'text-[#10B981]' : 'text-gray-200'} />
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
             </div>

             <div className="flex gap-4 pt-4">
                <button onClick={() => setStep(2)} className="flex-1 py-6 rounded-[32px] font-black text-xl bg-gray-50 text-gray-400 hover:bg-gray-100 transition-all">Quay lại</button>
                <button onClick={() => setStep(4)} className="flex-[2] py-6 rounded-[32px] font-black text-xl bg-[#10B981] text-white shadow-xl hover:scale-[1.01] active:scale-95 transition-all">Tiếp tục bước 4</button>
             </div>
          </div>
        )}

        {/* STEP 4: PRICING & STRATEGY (UPDATED) */}
        {step === 4 && (
          <div className="space-y-12 animate-slide-up flex-grow">
             <div className="text-center space-y-4">
                <h2 className="text-4xl font-black text-[#2D3436]">Thiết lập giá & Chiến lược</h2>
                <p className="text-gray-400 font-bold italic leading-relaxed max-w-2xl mx-auto">
                  "Giá tốt + Chiến lược 'Bán nhanh' = 90% giao dịch thành công trong 48h."
                </p>
             </div>

             <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1 tracking-widest">GIÁ BÌA (VNĐ)</label>
                    <input 
                      type="number" 
                      value={formData.originalPrice}
                      onChange={e => setFormData({...formData, originalPrice: e.target.value})}
                      placeholder="50000" 
                      className="w-full px-8 py-6 bg-gray-50 rounded-[32px] border-none outline-none font-black text-2xl text-gray-700 shadow-inner" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1 tracking-widest">GIÁ BẠN MUỐN THU VỀ (VNĐ)</label>
                    <input 
                      type="number" 
                      value={formData.sellPrice}
                      onChange={e => setFormData({...formData, sellPrice: e.target.value})}
                      placeholder="VD: 25000" 
                      className="w-full px-8 py-6 bg-[#10B981]/5 rounded-[32px] border-2 border-[#10B981]/20 outline-none font-black text-2xl text-[#10B981] shadow-sm focus:bg-white transition-all" 
                    />
                  </div>
                </div>

                <div className="bg-[#FAF9F6] p-10 rounded-[60px] flex flex-col justify-center space-y-10 relative overflow-hidden border border-gray-100 shadow-sm">
                   <div className="absolute -top-6 -right-6 opacity-10">
                      <TrendingUp size={120} strokeWidth={3} className="text-[#10B981]" />
                   </div>
                   
                   <div className="text-center space-y-2 relative z-10">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">MỨC TIẾT KIỆM CHO CỘNG ĐỒNG</div>
                      <div className="text-[80px] font-black text-[#10B981] leading-none">
                        {savingPercent}%
                      </div>
                   </div>

                   <div className="space-y-4 relative z-10">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center mb-4">CHIẾN LƯỢC ĐĂNG TIN</div>
                      <div className="flex bg-white p-1.5 rounded-[32px] shadow-inner border border-gray-50">
                        <button 
                          onClick={() => setStrategy('fast')}
                          className={`flex-1 py-4 rounded-[28px] font-black text-xs transition-all flex items-center justify-center gap-2 ${strategy === 'fast' ? 'bg-[#10B981] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                          Bán nhanh ⚡
                        </button>
                        <button 
                          onClick={() => setStrategy('desired')}
                          className={`flex-1 py-4 rounded-[28px] font-black text-xs transition-all flex items-center justify-center gap-2 ${strategy === 'desired' ? 'bg-[#2D3436] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                          Giá mong muốn 🎯
                        </button>
                      </div>
                   </div>
                </div>
             </div>

             {/* Banner Notice */}
             <div className="bg-[#FFF9EA] p-8 rounded-[40px] flex items-center gap-6 border border-[#F6E1B6]/50 shadow-sm animate-in slide-in-from-bottom duration-700">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                  <Award className="text-[#B5825D]" size={32} />
                </div>
                <p className="text-sm font-bold text-[#8C5D3F] italic leading-relaxed">
                  "Bạn sẽ nhận được <strong>+15 điểm EduScore</strong> khi hoàn tất giao dịch này vì đã giúp sinh viên khác tiết kiệm hơn 50%!"
                </p>
             </div>

             <div className="flex gap-4 pt-4">
                <button onClick={() => setStep(3)} className="flex-1 py-6 rounded-[32px] font-black text-xl bg-[#FAF9F6] text-gray-400 hover:bg-gray-100 transition-all">Quay lại</button>
                <button onClick={onCancel} className="flex-[2] py-6 rounded-[32px] font-black text-xl bg-[#2D3436] text-white shadow-2xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3">
                  Đăng tin ngay <Sparkles size={24} />
                </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerFlow;
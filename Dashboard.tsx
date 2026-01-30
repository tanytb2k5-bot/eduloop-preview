import React, { useState } from 'react';
import { Leaf, Award, Recycle, Plus, Search, Truck, ShoppingBag, History, ArrowUpRight, ArrowRight, Zap } from 'lucide-react';
import Mascot from './Mascot';
import { User, Badge, ActivityItem } from '../types';

const ImpactCircle: React.FC<{val: number, unit: string, label: string, color: string, offset: number}> = ({val, unit, label, color, offset}) => (
  <div className="space-y-4">
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50"/>
        <circle strokeWidth="8" strokeDasharray="251.2" strokeDashoffset={251.2 * offset} strokeLinecap="round" stroke={color} fill="transparent" r="40" cx="50" cy="50" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}/>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-black">{val}</span>
        <span className="text-[8px] font-black text-white/40 uppercase">{unit}</span>
      </div>
    </div>
    <p className="text-center text-xs font-medium text-white/60">{label}</p>
  </div>
);

const BadgeSection: React.FC<{badges: Badge[]}> = ({badges}) => (
  <section className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 space-y-8">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-black">Thành Tựu 🏆</h3>
      <button className="text-xs font-black text-[#10B981] hover:underline">Tất cả</button>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {badges.map(badge => (
        <div key={badge.id} className={`p-5 rounded-[40px] text-center space-y-3 transition-all ${badge.unlocked ? 'bg-white border border-gray-100' : 'bg-gray-50 opacity-60 grayscale'}`}>
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto shadow-sm ${badge.unlocked ? 'bg-amber-50 text-amber-500' : 'bg-gray-100 text-gray-300'}`}>
            {React.cloneElement(badge.icon as React.ReactElement<any>, { size: 24 })}
          </div>
          <div className="space-y-1">
            <div className="text-xs font-black text-[#2D3436]">{badge.name}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ScoreStatsSection: React.FC = () => (
  <section className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 space-y-6">
    <h3 className="text-xl font-black">EduScore Stats</h3>
    <div className="space-y-4">
      {[{ label: 'Tin cậy', val: 95 }, { label: 'Phản hồi', val: 88 }].map((stat, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between text-[10px] font-black uppercase text-gray-400">
            <span>{stat.label}</span>
            <span>{stat.val}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#10B981]" style={{width: `${stat.val}%`}}></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const MOCK_BADGES: Badge[] = [
  { id: 'b1', name: 'Đại sứ Xanh', icon: <Leaf />, description: 'Hoàn thành 10 lượt tuần hoàn sách', unlocked: true, progress: 10, target: 10, category: 'green' },
  { id: 'b2', name: 'Kho tri thức', icon: <ShoppingBag />, description: 'Sở hữu 5 bộ giáo trình đại cương', unlocked: true, progress: 5, target: 5, category: 'academic' },
  { id: 'b3', name: 'Người dẫn đầu', icon: <Zap />, description: 'Đạt EduScore trên 800', unlocked: false, progress: 750, target: 800, category: 'trust' },
];

const MOCK_ACTIVITIES: ActivityItem[] = [
  { id: 'a1', bookTitle: 'Triết học Mác-Lênin', subject: 'Triết học', type: 'sale', status: 'completed', price: 19000, date: '12/10/2023', reusedTimes: 3 },
  { id: 'a2', bookTitle: 'Toán cao cấp A1', subject: 'Toán học', type: 'rental', status: 'active', price: 8900, date: '20/10/2023', reusedTimes: 5 },
  { id: 'a3', bookTitle: 'Kinh tế Chính trị', subject: 'Kinh tế', type: 'purchase', status: 'pending', price: 29000, date: '24/10/2023', reusedTimes: 2 },
];

interface DashboardProps {
  user: User;
  onNavigate: (v: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'listings' | 'rentals' | 'history'>('listings');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-10 animate-slide-up">
      {/* Dashboard Profile Header */}
      <section className="bg-white rounded-[48px] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="relative flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="relative">
            <img src={user.avatar} className="w-28 h-28 rounded-[40%] object-cover border-4 border-white shadow-xl" alt="avatar" />
            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
              <Mascot mood="happy" className="w-8 h-8" />
            </div>
          </div>
          <div className="text-center md:text-left space-y-2 flex-grow">
            <h1 className="text-4xl font-black text-[#2D3436]">Chào {user.name.split(' ').pop()}! 👋</h1>
            <p className="text-gray-500 font-medium italic">"Tri thức của bạn đã cứu giúp 17 sinh viên HCMC."</p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <button onClick={() => onNavigate('seller')} className="bg-[#10B981] text-white px-6 py-3 rounded-2xl text-sm font-black flex items-center gap-2 hover:scale-105 transition-all">
                <Plus size={18} /> Đăng bán sách
              </button>
              <button onClick={() => onNavigate('landing')} className="bg-white border-2 border-[#2D3436] text-[#2D3436] px-6 py-3 rounded-2xl text-sm font-black flex items-center gap-2 hover:bg-gray-50 transition-all">
                <Search size={18} /> Tìm sách mượn
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
            {[{ label: 'Đã bán', val: user.sellingCount, icon: <Recycle size={14}/>, color: 'text-blue-500 bg-blue-50' }, 
              { label: 'Cho thuê', val: user.circulatedCount, icon: <Truck size={14}/>, color: 'text-orange-500 bg-orange-50' }, 
              { label: 'Mua/Thuê', val: 5, icon: <ShoppingBag size={14}/>, color: 'text-purple-500 bg-purple-50' }, 
              { label: 'EduScore', val: user.eduScore, icon: <Award size={14}/>, color: 'text-[#10B981] bg-green-50' }].map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-4 rounded-3xl text-center space-y-1 hover:shadow-md transition-all">
                <div className={`w-8 h-8 ${s.color} rounded-full flex items-center justify-center mx-auto mb-2`}>{s.icon}</div>
                <div className="text-xl font-black">{s.val}</div>
                <div className="text-[10px] font-black uppercase text-gray-400 tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Sustainability Impact Stats */}
          <section className="bg-[#2D3436] text-white rounded-[48px] p-10 relative overflow-hidden shadow-xl">
            <div className="absolute bottom-0 right-0 p-10 opacity-10"><Recycle size={180} /></div>
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#10B981]/20 rounded-2xl flex items-center justify-center text-[#10B981]">
                  <Leaf size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black">Sustainability Impact 🌱</h2>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Đóng góp xanh của riêng bạn</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <ImpactCircle val={user.impact.co2Reduced} unit="kg CO2" label="Tiết kiệm khí thải" color="#10B981" offset={0.25} />
                <ImpactCircle val={user.impact.paperSaved} unit="kg Giấy" label="2.4 cây xanh cứu sống" color="#f59e0b" offset={0.4} />
                <div className="space-y-6 flex flex-col justify-center">
                  <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                    <div className="text-[10px] font-black text-white/40 uppercase mb-1">Knowledge Circulation</div>
                    <div className="text-2xl font-black flex items-center gap-2">{user.circulatedCount * 3} <span className="text-xs font-normal text-white/60">cycles</span></div>
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-black text-xs"><Zap size={14} /> Hệ số tuần hoàn: 4.2x</div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activities Section */}
          <section className="bg-white rounded-[48px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
              <h2 className="text-2xl font-black">Hoạt Động Gần Đây</h2>
              <div className="flex bg-[#FAF9F6] p-1.5 rounded-2xl border border-gray-100">
                {[{ id: 'listings', label: 'Tin đăng' }, { id: 'rentals', label: 'Đang thuê' }, { id: 'history', label: 'Lịch sử' }].map(t => (
                  <button key={t.id} onClick={() => setActiveTab(t.id as any)} className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${activeTab === t.id ? 'bg-white text-[#10B981] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {MOCK_ACTIVITIES.map(activity => (
                <div key={activity.id} className="p-6 bg-[#FAF9F6] rounded-[32px] border border-transparent hover:border-gray-100 hover:bg-white transition-all group flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-20 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="book" />
                  </div>
                  <div className="flex-grow space-y-1 text-center md:text-left">
                    <div className="text-[10px] font-black text-[#10B981] uppercase tracking-widest">{activity.subject}</div>
                    <h4 className="font-bold text-lg text-[#2D3436]">{activity.bookTitle}</h4>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-xs text-gray-400 font-bold">
                      <span className="flex items-center gap-1"><History size={14}/> {activity.date}</span>
                      <span className="flex items-center gap-1"><Recycle size={14}/> Tuần hoàn {activity.reusedTimes} lần</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-center md:items-end gap-2">
                    <span className="text-xl font-black text-[#2D3436]">{activity.price.toLocaleString()}đ</span>
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${activity.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                      {activity.status === 'completed' ? 'Đã hoàn tất' : (activity.type === 'rental' ? 'Hết hạn sau 2 ngày' : 'Đang xử lý')}
                    </span>
                  </div>
                  <button className="p-3 bg-white rounded-xl text-gray-400 hover:text-[#10B981] shadow-sm"><ArrowUpRight size={20}/></button>
                </div>
              ))}
              <button className="w-full py-4 text-xs font-black text-gray-400 hover:text-[#10B981] uppercase tracking-[0.2em] pt-8">Xem tất cả giao dịch</button>
            </div>
          </section>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-10">
          <BadgeSection badges={MOCK_BADGES} />
          
          <section className="bg-[#FF6B6B]/10 rounded-[48px] p-10 space-y-6 relative overflow-hidden border border-[#FF6B6B]/20">
            <div className="absolute -top-4 -right-4"><Mascot mood="thinking" className="w-24 h-24 opacity-20 rotate-12" /></div>
            <div className="space-y-2">
              <h4 className="text-lg font-black text-[#FF6B6B]">Gợi ý từ EduLoop ⚡</h4>
              <p className="text-xs font-medium text-gray-600 leading-relaxed">Sắp tới ngày thi <b>Triết học</b>, thuê ngay trọn gói 2 ngày chỉ 8.9k để ôn tập thần tốc!</p>
            </div>
            <button onClick={() => onNavigate('landing')} className="w-full py-4 bg-[#FF6B6B] text-white rounded-2xl font-black text-sm shadow-lg shadow-red-100 flex items-center justify-center gap-2">
              Hốt ngay gói thuê <ArrowRight size={16}/>
            </button>
          </section>

          <ScoreStatsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
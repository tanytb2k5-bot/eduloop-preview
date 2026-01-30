import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Mascot from './components/Mascot';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Selection from './components/Selection';
import FlashSale from './components/FlashSale';
import Marketplace from './components/Marketplace';
import Sustainability from './components/Sustainability';
import BrandStory from './components/BrandStory';
import SellerFlow from './components/SellerFlow';
import Dashboard from './components/Dashboard';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import { BookListing, User } from './types';
import Mascot from "./components/Mascot";

// --- MOCK DATA ---
const MOCK_LISTINGS: BookListing[] = [
  {
    id: 'l1',
    title: 'Kinh tế Chính trị Mác-Lênin',
    subjectGroup: 'KINH TẾ CHÍNH TRỊ',
    level: 'Năm 1',
    condition: 'Tốt (80%)',
    price: 19000,
    originalPrice: 85000,
    rentalPrice2Days: 8900,
    rentalPrice7Days: 14900,
    location: 'Quận 10 (Gần ĐH Bách Khoa)',
    sellerName: 'Minh Tuấn',
    sellerScore: 4.8,
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'],
    notes: ['Sách còn mới', 'Không gạch chân'],
    isFlashSale: true
  },
  {
    id: 'l2',
    title: 'Giáo trình Triết học Mác-Lênin',
    subjectGroup: 'TRIẾT HỌC',
    level: 'Năm 1',
    condition: 'Như mới (95%)',
    price: 25000,
    originalPrice: 90000,
    rentalPrice2Days: 8900,
    rentalPrice7Days: 14900,
    location: 'Thủ Đức (Làng Đại học)',
    sellerName: 'Lan Anh',
    sellerScore: 5.0,
    images: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400'],
    notes: ['Sách gốc', 'Hỗ trợ ship'],
    isFlashSale: true
  },
  {
    id: 'l3',
    title: 'Tư tưởng Hồ Chí Minh',
    subjectGroup: 'TƯ TƯỞNG HCM',
    level: 'Năm 1',
    condition: 'Tốt (80%)',
    price: 29000,
    originalPrice: 70000,
    rentalPrice2Days: 8900,
    rentalPrice7Days: 14900,
    location: 'Quận 1 (Gần ĐH Sư Phạm)',
    sellerName: 'Quốc Bảo',
    sellerScore: 4.5,
    images: ['https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400'],
    notes: ['Sách đẹp'],
    isFlashSale: false
  }
];

export type AppView = 'landing' | 'seller' | 'dashboard' | 'brandStory';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('landing');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSellPopup, setShowSellPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (view === 'landing') {
        setShowSellPopup(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [view]);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setShowLoginModal(false);
    setView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView('landing');
  };

  const scrollToMarket = () => {
    if (view !== 'landing') {
      setView('landing');
      setTimeout(() => {
        document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-[#10B981] selection:text-white font-['Plus_Jakarta_Sans']">
      
      <Nav 
        view={view} 
        onNavigate={setView} 
        currentUser={currentUser} 
        onLogout={handleLogout} 
        onLoginClick={() => setShowLoginModal(true)} 
      />

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} onSuccess={handleLoginSuccess} />
      )}
      
      {showSellPopup && (
        <div className="fixed bottom-8 left-8 z-[100] max-w-sm w-full animate-slide-up">
          <div className="bg-white rounded-[40px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
            <button onClick={() => setShowSellPopup(false)} className="absolute top-6 right-6 text-gray-300 hover:text-gray-500"><X size={20} /></button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#10B981]/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mascot mood="winking" className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-black leading-tight text-[#2D3436]">Bạn có sách cũ cần bán lại không?</h4>
            </div>
            <p className="text-sm text-gray-500 font-medium italic mb-6">"Kiếm thêm thu nhập và giúp tri thức được tiếp nối ngay hôm nay!"</p>
            <button 
              onClick={() => { setView('seller'); setShowSellPopup(false); }}
              className="w-full bg-[#2D3436] text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-[#10B981] transition-all"
            >
              Tôi muốn bán sách <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
      
      <main className="pt-24 pb-20">
        {view === 'landing' && (
          <>
            <Hero onStart={() => setView('seller')} />
            <Problem />
            <Selection 
              onBrandStory={() => setView('brandStory')} 
              onShopNow={scrollToMarket} 
            />
            <FlashSale listings={MOCK_LISTINGS} />
            <Marketplace id="marketplace" listings={MOCK_LISTINGS} />
            <Sustainability />
          </>
        )}
        {view === 'brandStory' && (
          <BrandStory onBack={scrollToMarket} />
        )}
        {view === 'seller' && (
          <SellerFlow onCancel={() => setView('landing')} />
        )}
        {view === 'dashboard' && currentUser && (
          <Dashboard user={currentUser} onNavigate={setView} />
        )}
      </main>

      <Footer />

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};

export default App;

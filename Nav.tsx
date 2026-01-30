import React from 'react';
import { BarChart3, LogOut } from 'lucide-react';
import Mascot from './Mascot';
import { User } from '../types';

interface UserNavProps {
  user: User;
  handleLogout: () => void;
  onNavigate: (v: any) => void;
}

const UserNav: React.FC<UserNavProps> = ({ user, handleLogout, onNavigate }) => (
  <div className="flex items-center gap-4">
    <div className="flex flex-col items-end mr-2">
      <span className="text-xs font-black text-[#2D3436]">{user.name}</span>
      <span className="text-[10px] font-bold text-[#10B981]">EduScore: {user.eduScore}</span>
    </div>
    <div className="relative group">
      <img 
        src={user.avatar} 
        className="w-10 h-10 rounded-full border-2 border-[#10B981] cursor-pointer" 
        alt="User Avatar" 
        onClick={() => onNavigate('dashboard')} 
      />
      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
        <button onClick={() => onNavigate('dashboard')} className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-xl text-sm font-bold flex items-center gap-2">
          <BarChart3 size={16} /> Dashboard
        </button>
        <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-500 rounded-xl text-sm font-bold flex items-center gap-2">
          <LogOut size={16} /> Đăng xuất
        </button>
      </div>
    </div>
  </div>
);

interface NavProps {
  view: string;
  onNavigate: (view: any) => void;
  currentUser: User | null;
  onLogout: () => void;
  onLoginClick: () => void;
}

const Nav: React.FC<NavProps> = ({ view, onNavigate, currentUser, onLogout, onLoginClick }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
        <Mascot className="w-10 h-10" />
        <span className="text-2xl font-extrabold tracking-tight text-[#2D3436]">
          Edu<span className="text-[#10B981]">Loop</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => onNavigate('landing')} className={`text-sm font-bold transition-colors ${view === 'landing' ? 'text-[#10B981]' : 'text-gray-500 hover:text-[#10B981]'}`}>Thị trường</button>
        <button onClick={() => onNavigate('brandStory')} className={`text-sm font-bold transition-colors ${view === 'brandStory' ? 'text-[#10B981]' : 'text-gray-500 hover:text-[#10B981]'}`}>Câu chuyện thương hiệu</button>
        <button onClick={() => onNavigate('seller')} className={`text-sm font-bold transition-colors ${view === 'seller' ? 'text-[#10B981]' : 'text-gray-500 hover:text-[#10B981]'}`}>Bán sách</button>
        
        {currentUser ? (
          <UserNav user={currentUser} handleLogout={onLogout} onNavigate={onNavigate} />
        ) : (
          <button 
            onClick={onLoginClick}
            className="bg-[#10B981] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#059669] transition-all shadow-lg shadow-green-100"
          >
            Đăng Nhập
          </button>
        )}
      </div>
    </div>
  </nav>
);

export default Nav;
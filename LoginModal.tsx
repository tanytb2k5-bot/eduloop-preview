import React from 'react';
import { X } from 'lucide-react';
import Mascot from './Mascot';
import { User } from '../types';

interface LoginModalProps {
  onClose: () => void;
  onSuccess: (user: User) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSuccess }) => {
  const handleLogin = () => {
    onSuccess({
      id: 'u1',
      name: 'Nguyễn Văn A',
      username: 'vana',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
      eduScore: 750,
      balance: 150000,
      sellingCount: 12,
      circulatedCount: 8,
      impact: { paperSaved: 4.5, co2Reduced: 12.2 }
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2D3436]/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white w-full max-w-md rounded-[48px] p-12 relative animate-slide-up shadow-2xl border border-gray-100">
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-gray-600"><X size={24} /></button>
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto">
            <Mascot mood="happy" className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-black text-[#2D3436]">Chào mừng bạn!</h2>
          <p className="text-gray-500 font-bold italic">"Đăng nhập để tham gia cộng đồng tuần hoàn tri thức lớn nhất HCMC."</p>
          <div className="space-y-4 pt-4">
            <button 
              onClick={handleLogin}
              className="w-full bg-[#10B981] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-lg shadow-green-100"
            >
              Tiếp tục với Google
            </button>
            <button className="w-full bg-white border-2 border-gray-100 text-gray-400 py-5 rounded-2xl font-black text-sm">
              Sử dụng tài khoản sinh viên (@hcmut...)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
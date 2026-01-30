import React from 'react';
import Mascot from './Mascot';

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 py-24 text-center">
    <div className="max-w-7xl mx-auto px-4 space-y-12">
      <div className="flex flex-col items-center gap-4">
        <Mascot className="w-12 h-12" />
        <span className="text-2xl font-black">EduLoop</span>
        <p className="text-gray-400 font-bold italic">"Nơi tri thức không bao giờ bị lãng phí."</p>
      </div>
      <p className="text-[10px] text-gray-300 font-black tracking-[0.2em] uppercase">© 2026 EDULOOP HCMC - CIRCULAR ACADEMIC INFRASTRUCTURE, group 6 - IBF003</p>
    </div>
  </footer>
);

export default Footer;

import React from 'react';
import { MascotMood } from '../types';

interface MascotProps {
  mood?: MascotMood;
  className?: string;
}

const Mascot: React.FC<MascotProps> = ({ mood = 'happy', className = "" }) => {
  return (
    <div className={`relative mascot-container ${className}`}>
      <style>{`
        @keyframes mascot-body-dance {
          0%, 100% { transform: translateY(0) scale(1, 1); }
          25% { transform: translateY(-30px) scale(0.95, 1.05) rotate(2deg); }
          50% { transform: translateY(0) scale(1.05, 0.95) rotate(0deg); }
          75% { transform: translateY(-30px) scale(0.95, 1.05) rotate(-2deg); }
        }
        @keyframes arm-swing-left {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-25deg) translateY(-5px); }
        }
        @keyframes arm-swing-right {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg) translateX(5px); }
        }
        @keyframes leg-kick {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.7) translateY(5px); }
        }
        @keyframes tassel-swish {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(20deg) translateX(5px); }
        }
        
        .mascot-main { animation: mascot-body-dance 1.5s ease-in-out infinite; transform-origin: bottom center; }
        .arm-left { animation: arm-swing-left 0.75s ease-in-out infinite; transform-origin: 45px 120px; }
        .arm-right { animation: arm-swing-right 0.75s ease-in-out infinite; transform-origin: 155px 135px; }
        .leg { animation: leg-kick 0.75s ease-in-out infinite; transform-origin: top center; }
        .tassel { animation: tassel-swish 1.5s ease-in-out infinite; transform-origin: 155px 55px; }
      `}</style>

      <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow floor (Static) */}
        <ellipse cx="100" cy="225" rx="50" ry="10" fill="black" fillOpacity="0.08" />

        <g className="mascot-main">
            {/* Legs */}
            <g className="leg">
                <path d="M85 200L85 220" stroke="#2D3436" strokeWidth="4" strokeLinecap="round" />
                <path d="M78 220H92" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" />
            </g>
            <g className="leg" style={{ animationDelay: '0.375s' }}>
                <path d="M115 200L115 220" stroke="#2D3436" strokeWidth="4" strokeLinecap="round" />
                <path d="M108 220H122" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* Book Body */}
            <rect x="45" y="65" width="110" height="135" rx="12" fill="#B5825D" />
            <rect x="48" y="65" width="4" height="135" rx="2" fill="#8E6346" />
            
            {/* Pages Edge */}
            <rect x="145" y="70" width="8" height="125" rx="1" fill="#FFF8E7" />
            <line x1="147" y1="75" x2="147" y2="190" stroke="#E5D9B6" strokeWidth="1" />
            <line x1="150" y1="75" x2="150" y2="190" stroke="#E5D9B6" strokeWidth="1" />

            {/* Circular Arrows Symbol */}
            <g opacity="0.4">
                <path d="M85 140C85 130 115 130 115 140" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <path d="M115 155C115 165 85 165 85 155" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <path d="M110 135L115 140L110 145" stroke="white" strokeWidth="3" strokeLinejoin="round" />
                <path d="M90 150L85 155L90 160" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            </g>

            {/* Graduation Cap */}
            <path d="M100 35L155 55L100 75L45 55L100 35Z" fill="#2D3436" />
            <path d="M75 55V65C75 65 100 75 125 65V55" fill="#2D3436" />
            <g className="tassel">
                <path d="M155 55L155 90" stroke="#F1C40F" strokeWidth="3" />
                <circle cx="155" cy="90" r="4" fill="#F1C40F" />
            </g>
            
            {/* Face */}
            <g>
                <circle cx="78" cy="105" r="9" fill="white" />
                <circle cx="122" cy="105" r="9" fill="white" />
                <circle cx="78" cy="105" r="5" fill="#2D3436" />
                <circle cx="122" cy="105" r="5" fill="#2D3436" />
                <circle cx="62" cy="115" r="5" fill="#E9967A" fillOpacity="0.4" />
                <circle cx="138" cy="115" r="5" fill="#E9967A" fillOpacity="0.4" />
                <path d="M88 122C88 132 112 132 112 122H88Z" fill="white" stroke="#2D3436" strokeWidth="2" />
            </g>

            {/* Arms */}
            <g className="arm-left">
                <path d="M45 120C30 110 25 90 35 75" stroke="#2D3436" strokeWidth="4" strokeLinecap="round" />
                <circle cx="35" cy="75" r="5" fill="#2D3436" />
            </g>
            
            <g className="arm-right">
                <path d="M155 135C165 140 175 150 165 165" stroke="#2D3436" strokeWidth="4" strokeLinecap="round" />
                <circle cx="165" cy="165" r="5" fill="#2D3436" />
            </g>
        </g>
      </svg>
    </div>
  );
};
git mv src/components/mascot.tsx src/components/Mascot_temp.tsx
git mv src/components/Mascot_temp.tsx src/components/Mascot.tsx

export default Mascot;

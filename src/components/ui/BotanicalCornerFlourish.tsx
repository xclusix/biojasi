import React from 'react';

interface BotanicalCornerFlourishProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
  color?: string;
}

/**
 * BotanicalCornerFlourish
 * 
 * Hand-drawn botanical corner bracket flourish (antique apothecary style).
 * Features an organic curling tendril with miniature budding leaves,
 * evoking vintage Mexican herbal treatises and copperplate engravings.
 */
export const BotanicalCornerFlourish: React.FC<BotanicalCornerFlourishProps> = ({
  position = 'top-left',
  className = '',
  size = 40,
  color = 'currentColor',
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'scale(-1, 1)';
      case 'bottom-left':
        return 'scale(1, -1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-2 left-2';
      case 'top-right':
        return 'top-2 right-2';
      case 'bottom-left':
        return 'bottom-2 left-2';
      case 'bottom-right':
        return 'bottom-2 right-2';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getTransform() }}
      className={`absolute pointer-events-none select-none text-[#177333] opacity-25 transition-opacity duration-300 group-hover:opacity-45 ${getPositionClasses()} ${className}`}
      aria-hidden="true"
    >
      {/* Outer corner guide line with floral curl */}
      <path
        d="M 5 45 L 5 15 C 5 8, 8 5, 15 5 L 45 5"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* Sinuous inner botanical tendril */}
      <path
        d="M 8 38 C 9 22, 22 9, 38 8"
        stroke={color}
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />

      {/* Corner leaf sprout 1 */}
      <path
        d="M 12 12 C 16 7, 24 6, 26 12 C 20 15, 14 14, 12 12 Z"
        stroke={color}
        strokeWidth="0.9"
        fill={color}
        fillOpacity="0.1"
      />

      {/* Leaf vein */}
      <line x1="13" y1="12" x2="23" y2="8" stroke={color} strokeWidth="0.6" />

      {/* Tiny bud / fleuron dot */}
      <circle cx="6" cy="6" r="1.5" fill={color} />
      <circle cx="46" cy="5" r="1" fill={color} />
      <circle cx="5" cy="46" r="1" fill={color} />
    </svg>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

interface BiojasiFlowerMaskProps {
  imageSrc?: string;
  className?: string;
  size?: number;
  rotate?: boolean;
}

export const BiojasiFlowerMask: React.FC<BiojasiFlowerMaskProps> = ({
  imageSrc = '/assets/inspo/03_romero_lavanda_harvest.jpg',
  className = '',
  size = 280,
  rotate = true,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background soft glow / color flower petal */}
      <motion.div
        animate={rotate ? { rotate: 360 } : {}}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 w-full h-full"
      >
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full filter drop-shadow-md"
        >
          <defs>
            <clipPath id="flower-mask-path">
              <path d="M 235.00 150.00 L 234.73 158.46 L 233.15 166.86 L 229.47 174.96 L 223.00 182.38 L 213.34 188.58 L 200.74 192.93 L 186.22 194.81 L 171.49 193.81 L 158.58 189.92 L 150.00 184.00 L 141.42 189.92 L 128.51 193.81 L 113.78 194.81 L 99.26 192.93 L 86.66 188.58 L 77.00 182.38 L 70.53 174.96 L 66.85 166.86 L 65.27 158.46 L 65.00 150.00 L 65.27 141.54 L 66.85 133.14 L 70.53 125.04 L 77.00 117.62 L 86.66 111.42 L 99.26 107.07 L 113.78 105.19 L 128.51 106.19 L 141.42 110.08 L 150.00 116.00 L 158.58 110.08 L 171.49 106.19 L 186.22 105.19 L 200.74 107.07 L 213.34 111.42 L 223.00 117.62 L 229.47 125.04 L 233.15 133.14 L 234.73 141.54 Z" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      {/* Flower shape mask containing photo */}
      <div
        className="relative w-full h-full overflow-hidden transition-transform duration-700 hover:scale-105"
        style={{
          clipPath:
            'polygon(50% 0%, 63% 13%, 80% 10%, 85% 26%, 100% 35%, 95% 51%, 100% 68%, 85% 76%, 80% 92%, 63% 89%, 50% 100%, 37% 89%, 20% 92%, 15% 76%, 0% 68%, 5% 51%, 0% 35%, 15% 26%, 20% 10%, 37% 13%)',
        }}
      >
        <img
          src={imageSrc}
          alt="Botánica Biojäsi"
          className="w-full h-full object-cover"
        />
        {/* Warm tint overlay */}
        <div className="absolute inset-0 bg-[#177333]/15 mix-blend-multiply pointer-events-none" />
      </div>
    </div>
  );
};

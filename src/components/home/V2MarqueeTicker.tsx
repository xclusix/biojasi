import React from 'react';
import { motion } from 'framer-motion';
import { BiojasiOrnament } from '@/components/ui/BiojasiOrnament';

export const V2MarqueeTicker: React.FC = () => {
  const tickerItems = [
    'Envíos gratis a todo México a partir de $899',
    'Fórmulas botánicas vivas de Querétaro',
    'Ciencia ancestral',
    '100% natural y libre de sulfatos',
    'Elaboración artesanal en pequeños lotes',
    'Vegano y libre de crueldad',
  ];

  const fullItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-[#FAF8F5] py-5 sm:py-6 overflow-hidden border-y border-[#1C1917]/10 select-none">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex flex-nowrap items-center shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
        >
          {fullItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-8 mx-5 sm:mx-8 shrink-0">
              <span className="font-sans font-bold text-base sm:text-xl text-[#177333] tracking-tight whitespace-nowrap">
                {item}
              </span>
              <BiojasiOrnament size={18} color="#177333" className="flex-shrink-0 opacity-80" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

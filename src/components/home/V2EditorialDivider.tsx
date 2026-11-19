import React from 'react';
import { BiojasiOrnament } from '@/components/ui/BiojasiOrnament';

export const V2EditorialDivider: React.FC = () => {
  return (
    <div className="w-full py-8 sm:py-12 bg-[#FAF8F5] select-none">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-4 sm:gap-8">
        {/* Left hairline with gradient fade */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#1C1917]/20 to-[#177333]/30" />

        {/* Center Botanical Medallion */}
        <div className="flex items-center gap-3 sm:gap-4 px-4 py-1.5 rounded-full bg-white border border-[#1C1917]/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="hidden sm:inline-block text-[11px] font-sans font-medium text-charcoal-500 tracking-wider">
            Destilado en Querétaro
          </span>

          <div className="w-6 h-6 flex items-center justify-center">
            <BiojasiOrnament size={18} color="#177333" />
          </div>

          <span className="hidden sm:inline-block text-[11px] font-sans font-medium text-charcoal-500 tracking-wider">
            Ciencia ancestral
          </span>
        </div>

        {/* Right hairline with gradient fade */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#1C1917]/20 to-[#177333]/30" />
      </div>
    </div>
  );
};

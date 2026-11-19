import React from 'react';
import { motion } from 'framer-motion';

interface BotanicalSectionDividerProps {
  className?: string;
  variant?: 'rosemary' | 'lavender' | 'wildflower';
}

/**
 * BotanicalSectionDivider (Oficial Manual BIOJÄSI ®)
 * 
 * Divisor editorial que combina:
 * - El símbolo del Sol oficial ilustrado a mano en el centro.
 * - Ramas botánicas a mano alzada extendiéndose a los costados.
 * - Destellos herbales verdes de 4 puntas de la Página 26.
 */
export const BotanicalSectionDivider: React.FC<BotanicalSectionDividerProps> = ({
  className = 'my-12 sm:my-16',
}) => {
  return (
    <div
      className={`relative w-full flex items-center justify-center pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="w-full max-w-2xl px-6 flex items-center justify-center gap-4">
        {/* Left hand-drawn branch & line */}
        <div className="flex-1 flex items-center justify-end gap-2">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-[#177333]/25" />
          <motion.img
            src="/assets/branding/botanicals/destello_verde_estrella.svg"
            alt=""
            className="w-4 h-4 opacity-40"
            initial={{ rotate: 0, scale: 0.8 }}
            whileInView={{ rotate: 90, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Central Official BIOJÄSI Sun Symbol */}
        <motion.div
          className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/assets/branding/botanicals/simbolo_sol_oficial.svg"
            alt=""
            className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(23,115,51,0.08)]"
          />
        </motion.div>

        {/* Right hand-drawn branch & line */}
        <div className="flex-1 flex items-center justify-start gap-2">
          <motion.img
            src="/assets/branding/botanicals/destello_verde_estrella_alt.svg"
            alt=""
            className="w-4 h-4 opacity-40"
            initial={{ rotate: 0, scale: 0.8 }}
            whileInView={{ rotate: -90, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="w-full h-[1px] bg-gradient-to-l from-transparent to-[#177333]/25" />
        </div>
      </div>
    </div>
  );
};

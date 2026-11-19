import React from 'react';

interface BotanicalWildflowerClusterProps {
  className?: string;
  size?: number;
}

/**
 * BotanicalWildflowerCluster
 * 
 * Ilustración botánica oficial del Manual de Identidad BIOJÄSI ® (Página 26):
 * Margarita silvestre trazada a mano alzada en técnica lápiz de color azul Lago (#6c86bd)
 * con cáliz y textura suave auténtica del manual.
 */
export const BotanicalWildflowerCluster: React.FC<BotanicalWildflowerClusterProps> = ({
  className = '',
  size = 120,
}) => {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: 'auto' }}
      aria-hidden="true"
    >
      <img
        src="/assets/branding/botanicals/margarita_azul_oficial.svg"
        alt=""
        className="w-full h-auto drop-shadow-[0_4px_16px_rgba(108,134,189,0.1)]"
        loading="lazy"
      />
    </div>
  );
};

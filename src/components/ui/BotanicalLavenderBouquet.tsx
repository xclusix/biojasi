import React from 'react';

interface BotanicalLavenderBouquetProps {
  className?: string;
  size?: number;
}

/**
 * BotanicalLavenderBouquet
 * 
 * Ilustración botánica oficial del Manual de Identidad BIOJÄSI ® (Págs 25 y 26):
 * Espiga de lavanda trazada a mano alzada en técnica de lápiz de color suave
 * con inflorescencias en tono Cosmos (#ed73aa) y cáliz en Pino / Brote (#177333 / #41af65).
 */
export const BotanicalLavenderBouquet: React.FC<BotanicalLavenderBouquetProps> = ({
  className = '',
  size = 130,
}) => {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: 'auto' }}
      aria-hidden="true"
    >
      <img
        src="/assets/branding/botanicals/espiga_lavanda_oficial.svg"
        alt=""
        className="w-full h-auto drop-shadow-[0_4px_16px_rgba(237,115,170,0.12)]"
        loading="lazy"
      />
    </div>
  );
};

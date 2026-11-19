import React from 'react';

interface BiojasiOrnamentProps {
  className?: string;
  size?: number;
  color?: string;
}

export const BiojasiOrnament: React.FC<BiojasiOrnamentProps> = ({
  className = 'w-5 h-5',
  size = 20,
}) => {
  return (
    <img
      src="/assets/branding/biojasi_ornament.png"
      alt="BIOJÄSI Símbolo"
      width={size}
      height={size}
      className={`inline-block object-contain ${className}`}
    />
  );
};

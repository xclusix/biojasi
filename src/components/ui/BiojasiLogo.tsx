import React from 'react';

interface BiojasiLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  variant?: 'principal' | 'secundario';
}

export const BiojasiLogo: React.FC<BiojasiLogoProps> = ({
  className = 'h-8 sm:h-9 w-auto',
  variant = 'principal',
  alt = 'BIOJÄSI ®',
  ...props
}) => {
  return (
    <img
      src="/assets/branding/biojasi_logo.png"
      alt={alt}
      className={`object-contain ${className}`}
      {...props}
    />
  );
};

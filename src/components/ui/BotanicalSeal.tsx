import React from 'react';

interface BotanicalSealProps {
  className?: string;
  size?: number;
  text?: string;
  subtext?: string;
  color?: string;
}

/**
 * BotanicalSeal
 * 
 * Authentic apothecary botanical stamp / wax-seal imprint.
 * Hand-drawn circular double-ring with curved typography,
 * center rosemary sprig, and provenance markings.
 */
export const BotanicalSeal: React.FC<BotanicalSealProps> = ({
  className = '',
  size = 110,
  text = 'CIENCIA ANCESTRAL • QUERÉTARO • DESTILACIÓN VIVA •',
  subtext = 'LOTE BOTÁNICO 09',
  color = '#177333',
}) => {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full text-[#177333]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular path for upper curving text */}
          <path
            id="botanical-seal-path"
            d="M 80 15 A 65 65 0 1 1 79.9 15"
          />
        </defs>

        {/* Outer Stippled Ring */}
        <circle
          cx="80"
          cy="80"
          r="76"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.5"
        />

        {/* Inner Solid Hairline Ring */}
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke={color}
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Core Ring */}
        <circle
          cx="80"
          cy="80"
          r="48"
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="4 2"
          opacity="0.3"
        />

        {/* Curved Typography around Perimeter */}
        <text
          fill={color}
          fontSize="8.5"
          fontFamily="sans-serif"
          fontWeight="600"
          letterSpacing="2.2"
          opacity="0.75"
        >
          <textPath
            href="#botanical-seal-path"
            startOffset="0%"
          >
            {text}
          </textPath>
        </text>

        {/* Central Hand-Drawn Botanical Emblem (Rosemary sprig & 8-petal floret) */}
        <g transform="translate(80 80)">
          {/* Center stem */}
          <path
            d="M 0 22 C -2 10, 4 0, 0 -18"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Symmetrical needle leaves */}
          <path d="M -1 12 C -8 8, -14 10, -18 7" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M 1 10 C 8 6, 14 8, 18 5" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M 0 0 C -9 -3, -13 -1, -16 -6" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M 1 -2 C 9 -5, 13 -3, 16 -8" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M 0 -10 C -7 -14, -9 -18, -10 -22" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
          <path d="M 0 -11 C 7 -15, 9 -19, 10 -23" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />

          {/* Central tiny star floret at apex */}
          <circle cx="0" cy="-24" r="1.5" fill={color} opacity="0.8" />
        </g>

        {/* Provenance Micro-Tag in center */}
        <text
          x="80"
          y="114"
          textAnchor="middle"
          fill={color}
          fontSize="6.5"
          fontFamily="sans-serif"
          fontWeight="700"
          letterSpacing="1.2"
          opacity="0.6"
        >
          {subtext}
        </text>
      </svg>
    </div>
  );
};

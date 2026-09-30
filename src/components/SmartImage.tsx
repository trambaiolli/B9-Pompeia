import React, { useState, useEffect } from 'react';

interface SmartImageProps {
  imageId: string;
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
  onEditClick?: (imageId: string) => void;
  showEditButton?: boolean;
}

export const B9PatchLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => (
  <svg
    viewBox="0 0 120 110"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Barbosa Jiu-Jitsu B9 Eq. Pompéia Logo"
  >
    {/* Outer Black Triangle with Rounded Corners */}
    <path
      d="M60 6 C67 6 72 10 76 17 L112 75 C116 82 112 90 103 90 L17 90 C8 90 4 82 8 75 L44 17 C48 10 53 6 60 6 Z"
      fill="#111111"
      stroke="#2d2a21"
      strokeWidth="2"
    />
    {/* Inner Red Triangle */}
    <path
      d="M60 18 C64 18 67 20 70 25 L98 71 C101 76 98 81 92 81 L28 81 C22 81 19 76 22 71 L50 25 C53 20 56 18 60 18 Z"
      fill="#e31b23"
    />
    {/* Yellow Circle in Center */}
    <circle cx="60" cy="56" r="21" fill="#e31b23" stroke="#ffde00" strokeWidth="2.5" />
    {/* Stylized B9 inside Circle */}
    <text
      x="60"
      y="64"
      textAnchor="middle"
      fill="#ffde00"
      fontFamily="Lexend, Impact, sans-serif"
      fontWeight="900"
      fontSize="24"
      fontStyle="italic"
      letterSpacing="-1"
    >
      B9
    </text>
    {/* Top Arch Text Hint */}
    <text
      x="60"
      y="14"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="Lexend, sans-serif"
      fontWeight="700"
      fontSize="6.5"
      letterSpacing="0.5"
    >
      JIU JITSU
    </text>
    {/* Left & Right Border Text Hints */}
    <text
      x="30"
      y="52"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="Lexend, sans-serif"
      fontWeight="800"
      fontSize="6.5"
      transform="rotate(-58 30 52)"
    >
      BARBOSA
    </text>
    <text
      x="90"
      y="52"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="Lexend, sans-serif"
      fontWeight="800"
      fontSize="6"
      transform="rotate(58 90 52)"
    >
      EQ. POMPÉIA
    </text>
    {/* Black Belt Tied at Bottom */}
    <path
      d="M35 86 L85 86 L92 94 L28 94 Z"
      fill="#1a1a1a"
    />
    {/* Left Belt Tail */}
    <path
      d="M52 90 L16 102 L19 108 L56 96 Z"
      fill="#1f1f1f"
      stroke="#0a0a0a"
      strokeWidth="1"
    />
    {/* Right Belt Tail */}
    <path
      d="M68 90 L104 102 L101 108 L64 96 Z"
      fill="#1f1f1f"
      stroke="#0a0a0a"
      strokeWidth="1"
    />
    {/* Red Coral Bar on Right Belt Tail */}
    <path
      d="M86 96 L96 99.5 L93.5 105.5 L83.5 102 Z"
      fill="#d91b23"
    />
    {/* Belt Knot */}
    <rect x="51" y="84" width="18" height="13" rx="3" fill="#2a2a2a" stroke="#0f0f0f" strokeWidth="1.5" />
  </svg>
);

export const SmartImage: React.FC<SmartImageProps> = ({
  imageId,
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  children,
  onEditClick,
  showEditButton = false,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  // Detect the placeholder repeated string from the original HTML header logo
  const isPlaceholderLogo =
    imageId === 'logo_b9' && src.includes('9zTq9z8p6r9zTq9z8p6r');

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!hasError && !isPlaceholderLogo ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={imgClassName}
          loading="lazy"
        />
      ) : imageId === 'logo_b9' ? (
        <B9PatchLogo className="h-10 w-10 object-contain" />
      ) : (
        <div className="w-full h-full min-h-[160px] bg-gradient-to-br from-surface-container-highest via-surface-container to-surface-container-lowest flex flex-col items-center justify-center p-4 text-center">
          <B9PatchLogo className="w-14 h-14 opacity-40 mb-2" />
          <span className="text-body-sm text-outline line-clamp-2 max-w-xs">{alt}</span>
        </div>
      )}

      {children}

      {showEditButton && onEditClick && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEditClick(imageId);
          }}
          title="Alterar link direto desta imagem"
          className="absolute top-2 left-2 z-30 bg-surface/90 hover:bg-primary text-on-surface hover:text-on-primary border border-primary/40 px-2.5 py-1 rounded text-body-sm font-mono flex items-center gap-1 shadow-lg transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[14px]">link</span>
          <span>Editar Link</span>
        </button>
      )}
    </div>
  );
};

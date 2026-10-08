import React, { useState } from 'react';

interface StationeryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  priority?: boolean;
}

/**
 * StationeryImage Component
 * 
 * HOW TO REPLACE WITH YOUR OWN LOCAL IMAGES:
 * 1. Drop your image files into `src/assets/images/` or the `public/` directory.
 * 2. In `src/data/articles.ts`, update the `heroImage` property for any article:
 *    Example: heroImage: '/src/assets/images/my_photo.jpg' or '/images/my_photo.jpg'
 * 3. This component automatically provides a graceful Japanese paper-textured
 *    fallback container if an image path is missing or fails to load.
 */
export const StationeryImage: React.FC<StationeryImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = '16/9',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : '';

  return (
    <div
      className={`relative overflow-hidden bg-[#F2EDE2] border border-[#E8E2D5] ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Subtle placeholder while image is loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#F4EFE6] animate-pulse flex items-center justify-center">
              <span className="text-[#A8A29E] text-xs font-serif italic tracking-wide">
                kiroku · 記録
              </span>
            </div>
          )}
        </>
      ) : (
        /* Styled Japanese Minimal Fallback Container */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE6] to-[#EBE4D5] text-[#57534E]">
          <div className="w-10 h-10 mb-3 rounded-full border border-[#D6CEBE] flex items-center justify-center text-[#BA3829] font-serif font-bold text-sm bg-white/70 shadow-xs">
            記録
          </div>
          <p className="text-xs uppercase tracking-widest text-[#78716C] font-mono mb-1">
            Editorial Archive
          </p>
          <p className="text-sm font-serif italic text-[#44403C] max-w-[80%] line-clamp-2">
            {alt}
          </p>
          <span className="text-[10px] text-[#A8A29E] mt-2 font-mono">
            Replaceable in src/data/articles.ts
          </span>
        </div>
      )}
    </div>
  );
};

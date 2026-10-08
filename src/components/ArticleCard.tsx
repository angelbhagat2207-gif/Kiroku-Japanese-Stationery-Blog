import React from 'react';
import { Article } from '../types.ts';
import { StationeryImage } from './StationeryImage.tsx';
import { ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onSelect: (slug: string) => void;
  variant?: 'standard' | 'horizontal' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  variant = 'standard',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSelect(article.slug);
  };

  if (variant === 'horizontal') {
    return (
      <article
        onClick={handleClick}
        className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-5 sm:p-6 border border-[#E8E2D5] hover:border-[#D6CEBE] hover:shadow-xs transition-all"
      >
        <div className="md:col-span-5 overflow-hidden">
          <StationeryImage
            src={article.heroImage}
            alt={article.heroImageAlt}
            aspectRatio="16/9"
            className="group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            {/* Zero-Pill Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2 font-mono">
              <span className="text-[#BA3829] font-medium tracking-wide">
                {article.categoryName}
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-10-05">{article.publishedAt}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917] group-hover:text-[#BA3829] transition-colors leading-snug mb-2.5">
              {article.title}
            </h3>

            <p className="text-sm text-[#57534E] line-clamp-3 leading-relaxed mb-4">
              {article.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#F2ECE1]">
            <div className="flex items-center gap-2 text-xs text-[#78716C]">
              <span>By {article.author.name}</span>
            </div>
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1C1917] group-hover:text-[#BA3829] transition-colors focus-visible:outline-hidden"
            >
              <span>Read Article</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </article>
    );
  }

  // Standard vertical card
  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer flex flex-col bg-white border border-[#E8E2D5] hover:border-[#D6CEBE] hover:shadow-xs transition-all duration-300"
    >
      <div className="overflow-hidden">
        <StationeryImage
          src={article.heroImage}
          alt={article.heroImageAlt}
          aspectRatio="4/3"
          className="group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2.5 font-mono">
            <span className="text-[#BA3829] font-medium tracking-wide">
              {article.categoryName}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-05">{article.publishedAt}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1C1917] group-hover:text-[#BA3829] transition-colors leading-snug mb-3">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#57534E] line-clamp-3 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#F2ECE1] mt-auto">
          <span className="text-xs text-[#78716C]">By {article.author.name}</span>
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1C1917] group-hover:text-[#BA3829] transition-colors focus-visible:outline-hidden"
          >
            <span>Read More</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </article>
  );
};

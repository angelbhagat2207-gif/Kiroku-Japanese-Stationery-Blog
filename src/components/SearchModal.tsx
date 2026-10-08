import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { searchArticles } from '../data/articles.ts';
import { Article } from '../types.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onSelectArticle('OPEN_SEARCH'); // Handled in parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectArticle]);

  if (!isOpen) return null;

  const results: Article[] = query.trim() ? searchArticles(query) : [];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1C1917]/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#FAF8F5] border border-[#E8E2D5] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-[#E8E2D5] bg-white">
          <Search className="w-5 h-5 text-[#78716C] mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Japanese pens, notebooks, planners, brands, or techniques..."
            className="w-full text-base sm:text-lg bg-transparent text-[#1C1917] placeholder-[#A8A29E] focus:outline-hidden"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#78716C] hover:text-[#1C1917]"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="text-xs px-2 py-1 bg-[#F3EFE6] border border-[#E8E2D5] rounded-xs text-[#78716C]"
            >
              ESC
            </button>
          )}
        </div>

        {/* Quick Tag Recommendations when empty */}
        {!query.trim() && (
          <div className="p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[#78716C] mb-3">
              Suggested Explorations
            </p>
            <div className="flex flex-wrap gap-2">
              {['Midori MD', 'Tomoe River', 'Uni-ball One', 'Hobonichi Techo', 'Zebra Sarasa', 'Highlighters', 'Gel Pens'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 text-xs bg-white border border-[#E8E2D5] hover:border-[#BA3829] hover:text-[#BA3829] text-[#57534E] transition-colors rounded-xs"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query.trim() && (
          <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#F2ECE1]">
            {results.length > 0 ? (
              results.map((article) => (
                <div
                  key={article.id}
                  onClick={() => {
                    onSelectArticle(article.slug);
                    onClose();
                  }}
                  className="p-4 sm:p-5 hover:bg-white cursor-pointer transition-colors group flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#78716C] mb-1">
                      <span className="text-[#BA3829] font-medium">
                        {article.categoryName}
                      </span>
                      <span>·</span>
                      <span>{article.readingTime}</span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-medium text-[#1C1917] group-hover:text-[#BA3829] transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[#57534E] line-clamp-2 mt-1">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#BA3829] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-[#78716C]">
                <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-40 text-[#BA3829]" />
                <p className="text-sm font-serif italic">
                  No articles matched "{query}".
                </p>
                <p className="text-xs text-[#A8A29E] mt-1">
                  Try searching for "Midori", "gel pens", "planners", or "Kokuyo".
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

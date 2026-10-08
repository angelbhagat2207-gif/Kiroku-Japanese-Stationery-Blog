import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../data/articles.ts';
import { CATEGORIES } from '../data/categories.ts';
import { ArticleCard } from '../components/ArticleCard.tsx';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';
import { CategoryId } from '../types.ts';

interface BlogPageProps {
  onSelectArticle: (slug: string) => void;
  initialCategory?: CategoryId | 'all';
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onSelectArticle,
  initialCategory = 'all',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(initialCategory);
  const [sortBy, setSortBy] = useState<'newest' | 'reading-time' | 'title'>('newest');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'all' || article.category === selectedCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const searchMatch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.categoryName.toLowerCase().includes(query) ||
        article.tags.some((t) => t.toLowerCase().includes(query)) ||
        article.author.name.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    }).sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'reading-time') {
        const timeA = parseInt(a.readingTime) || 0;
        const timeB = parseInt(b.readingTime) || 0;
        return timeB - timeA;
      }
      // Newest default (by id/order)
      return a.id.localeCompare(b.id);
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumbs & Title */}
        <header className="mb-10 pb-8 border-b border-[#E8E2D5]">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78716C] mb-2">
            <span>KIROKU ARCHIVE</span>
            <span>/</span>
            <span>10 EDITIONS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
            The Japanese Stationery Journal
          </h1>

          <p className="text-sm sm:text-base text-[#57534E] max-w-2xl mt-3 leading-relaxed">
            Ten comprehensive monographs examining Japanese fountain pen inks, bleed-resistant notebooks, mechanical pencil engines, and mindful Techo planner routines.
          </p>
        </header>

        {/* Search & Filter Control Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Main Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#78716C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all 10 articles (e.g. Midori, Pilot, gel pens, highlighters, Tomoe River)..."
              aria-label="Search articles"
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#D6CEBE] text-sm text-[#1C1917] placeholder-[#A8A29E] focus:border-[#BA3829] focus:outline-hidden transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-[#1C1917]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Interactive Category Tabs & Sort Dropdown */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Segmented Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist">
              <button
                onClick={() => setSelectedCategory('all')}
                role="tab"
                aria-selected={selectedCategory === 'all'}
                className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors rounded-xs cursor-pointer border ${
                  selectedCategory === 'all'
                    ? 'bg-[#1C1917] text-white border-[#1C1917]'
                    : 'bg-white text-[#57534E] border-[#E8E2D5] hover:border-[#BA3829] hover:text-[#BA3829]'
                }`}
              >
                All Topics ({ARTICLES.length})
              </button>

              {CATEGORIES.map((cat) => {
                const count = ARTICLES.filter((a) => a.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    role="tab"
                    aria-selected={isSelected}
                    className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors rounded-xs cursor-pointer border flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#1C1917] text-white border-[#1C1917]'
                        : 'bg-white text-[#57534E] border-[#E8E2D5] hover:border-[#BA3829] hover:text-[#BA3829]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Sort Control */}
            <div className="flex items-center gap-2 self-end lg:self-auto shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#78716C]" />
              <label htmlFor="sort-select" className="text-xs text-[#78716C] font-mono">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#D6CEBE] text-xs text-[#1C1917] px-2.5 py-1.5 focus:border-[#BA3829] focus:outline-hidden"
              >
                <option value="newest">Curated Order</option>
                <option value="reading-time">Longest Read</option>
                <option value="title">Alphabetical (A-Z)</option>
              </select>
            </div>

          </div>

          {/* Results Count Line */}
          <div className="flex items-center justify-between text-xs text-[#78716C] font-mono pt-2">
            <span>
              Showing {filteredArticles.length} of {ARTICLES.length} articles
            </span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#BA3829] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>

        </div>

        {/* 10 Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={onSelectArticle}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center bg-white border border-[#E8E2D5] p-8 max-w-lg mx-auto">
            <BookOpen className="w-10 h-10 text-[#BA3829] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-medium text-[#1C1917] mb-2">
              No matching stationery articles
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed mb-6">
              We couldn’t find any articles matching "{searchQuery}". Try searching for terms like "Kokuyo", "fountain pen", "planner", or "Mildliner".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#BA3829] transition-colors rounded-xs"
            >
              Show All 10 Articles
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

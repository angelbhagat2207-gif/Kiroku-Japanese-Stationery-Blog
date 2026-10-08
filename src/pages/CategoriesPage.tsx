import React, { useState } from 'react';
import { CATEGORIES } from '../data/categories.ts';
import { ARTICLES } from '../data/articles.ts';
import { ArticleCard } from '../components/ArticleCard.tsx';
import { CategoryId } from '../types.ts';
import { ArrowRight, BookOpen } from 'lucide-react';

interface CategoriesPageProps {
  initialCategory?: CategoryId;
  onSelectArticle: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  initialCategory,
  onSelectArticle,
  onNavigate,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId | 'all'>(
    initialCategory || 'all'
  );

  const displayedArticles =
    activeCategoryId === 'all'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategoryId);

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <header className="mb-12 pb-8 border-b border-[#E8E2D5]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BA3829] block mb-2">
            Classification & Taxonomy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
            Categories of Japanese Stationery
          </h1>
          <p className="text-sm sm:text-base text-[#57534E] max-w-2xl mt-3 leading-relaxed">
            Browse our articles categorized by physical discipline: from micro-machined pen tips and heavy thread-sewn notebooks to mindful daily planners and Tokyo industrial history.
          </p>
        </header>

        {/* Category Cards Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CATEGORIES.map((cat) => {
            const count = ARTICLES.filter((a) => a.category === cat.id).length;
            const isSelected = activeCategoryId === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategoryId(isSelected ? 'all' : cat.id)}
                className={`p-6 bg-white border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#BA3829] shadow-md ring-1 ring-[#BA3829]'
                    : 'border-[#E8E2D5] hover:border-[#D6CEBE] hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-serif text-3xl text-[#BA3829]/80 font-normal">
                      {cat.japaneseName}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 bg-[#FAF8F5] border border-[#E8E2D5] text-[#78716C]">
                      {count} {count === 1 ? 'Article' : 'Articles'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#1C1917] mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F2ECE1] flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#BA3829]' : 'text-[#78716C]'}>
                    {isSelected ? 'Viewing Selection' : 'Click to Filter'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#BA3829]' : 'text-[#A8A29E]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Filtered Articles Section */}
        <section className="pt-8 border-t border-[#E8E2D5]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl font-medium text-[#1C1917]">
                {activeCategoryId === 'all'
                  ? 'All 10 Curated Articles'
                  : `${CATEGORIES.find((c) => c.id === activeCategoryId)?.name} Articles`}
              </h2>
              <span className="text-xs font-mono text-[#78716C]">
                Showing {displayedArticles.length} matching pieces
              </span>
            </div>

            {activeCategoryId !== 'all' && (
              <button
                onClick={() => setActiveCategoryId('all')}
                className="text-xs text-[#BA3829] hover:underline font-mono"
              >
                Show All Categories
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={onSelectArticle}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

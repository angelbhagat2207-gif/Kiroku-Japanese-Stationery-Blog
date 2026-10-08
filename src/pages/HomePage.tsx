import React from 'react';
import { ARTICLES } from '../data/articles.ts';
import { CATEGORIES } from '../data/categories.ts';
import { ArticleCard } from '../components/ArticleCard.tsx';
import { StationeryImage } from '../components/StationeryImage.tsx';
import { NewsletterSection } from '../components/NewsletterSection.tsx';
import { ArrowRight, Compass, Sparkles, Feather } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  // Featured lead article
  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  // Latest articles (excluding featured for diversity, or displaying the top 6)
  const latestArticles = ARTICLES.filter((a) => a.id !== featuredArticle.id).slice(0, 6);

  return (
    <div className="min-h-screen">
      
      {/* 1. Hero Section: Editorial Elegance & Brand Statement */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E8E2D5] overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F4EFE6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#78716C]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BA3829]" />
                <span>Japanese Stationery Chronicle · 記録</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1917] leading-[1.12]">
                Small things. <br />
                <span className="italic font-normal text-[#44403C]">Beautifully written.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl font-normal">
                An independent publication dedicated to the microscopic engineering, tactile paper craft, and mindful rituals of Japanese stationery.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/blog')}
                  className="px-6 py-3.5 text-xs font-semibold tracking-wider text-white bg-[#1C1917] hover:bg-[#BA3829] transition-all uppercase rounded-xs cursor-pointer shadow-xs inline-flex items-center gap-2"
                >
                  <span>Explore All 10 Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('/about')}
                  className="px-5 py-3.5 text-xs font-semibold tracking-wider text-[#1C1917] bg-white border border-[#D6CEBE] hover:border-[#1C1917] transition-all uppercase rounded-xs cursor-pointer"
                >
                  Our Philosophy
                </button>
              </div>

              {/* Cultural Trust Indicators */}
              <div className="pt-6 border-t border-[#E8E2D5] grid grid-cols-3 gap-4 max-w-md text-xs text-[#78716C] font-mono">
                <div>
                  <span className="block font-serif text-base text-[#1C1917] font-semibold">10</span>
                  <span>Original In-Depth Guides</span>
                </div>
                <div>
                  <span className="block font-serif text-base text-[#1C1917] font-semibold">6</span>
                  <span>Curated Categories</span>
                </div>
                <div>
                  <span className="block font-serif text-base text-[#1C1917] font-semibold">100%</span>
                  <span>Real Paper Benchmarks</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#BA3829]/10 to-[#5F7161]/10 rounded-xs blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative bg-white p-3 border border-[#E8E2D5] shadow-xs">
                  <StationeryImage
                    src="/src/assets/images/hero_stationery_flatlay_1791468753941.jpg"
                    alt="Japanese minimalist stationery desk flatlay with Midori notebook, brass ruler, and fine pen"
                    aspectRatio="4/3"
                    priority
                  />
                  <div className="p-4 bg-white flex items-center justify-between border-t border-[#F2ECE1]">
                    <div>
                      <span className="text-[11px] font-mono text-[#BA3829] uppercase tracking-wider block">
                        Featured Still
                      </span>
                      <p className="font-serif text-sm font-medium text-[#1C1917]">
                        The Yanaka Studio Desk Setup
                      </p>
                    </div>
                    <span className="text-xs text-[#78716C] font-mono">
                      No. 01 / 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Featured Lead Article Spotlight */}
      <section className="py-16 sm:py-20 border-b border-[#E8E2D5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#BA3829]" />
              <h2 className="text-xs uppercase tracking-widest font-mono text-[#78716C]">
                Featured Editorial
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/blog')}
              className="text-xs font-semibold text-[#1C1917] hover:text-[#BA3829] transition-colors inline-flex items-center gap-1"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <ArticleCard
            article={featuredArticle}
            onSelect={onSelectArticle}
            variant="horizontal"
          />

        </div>
      </section>

      {/* 3. Popular Categories Navigation */}
      <section className="py-16 sm:py-20 border-b border-[#E8E2D5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BA3829] mb-2 block">
              Curated Taxonomy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917]">
              Explore by Category
            </h2>
            <p className="text-sm text-[#57534E] mt-2 leading-relaxed">
              From microscopic tungsten ball bearings to centuries-old Echizen paper mills.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate(`/categories/${cat.id}`)}
                className="group p-5 bg-white border border-[#E8E2D5] hover:border-[#BA3829] transition-all text-left flex flex-col justify-between h-44 hover:shadow-xs cursor-pointer"
              >
                <div>
                  <span className="font-serif text-2xl text-[#BA3829]/80 group-hover:text-[#BA3829] transition-colors block mb-1">
                    {cat.japaneseName}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-[#1C1917] group-hover:text-[#BA3829] transition-colors">
                    {cat.name}
                  </h3>
                </div>
                
                <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#78716C]">
                  <span className="text-[11px] font-mono">
                    {ARTICLES.filter((a) => a.category === cat.id).length} Stories
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#BA3829] transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Latest Articles Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#E8E2D5]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] mb-1 block">
                Fresh Dispatches
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917]">
                Latest Articles
              </h2>
            </div>
            <p className="text-xs text-[#78716C] mt-2 sm:mt-0 max-w-xs sm:text-right">
              Original reviews, technical teardowns, and historical archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={onSelectArticle}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/blog')}
              className="px-8 py-3.5 text-xs font-semibold tracking-wider text-[#1C1917] bg-[#FAF8F5] border border-[#D6CEBE] hover:border-[#1C1917] hover:bg-white transition-all uppercase rounded-xs cursor-pointer inline-flex items-center gap-2"
            >
              <span>View All 10 Japanese Stationery Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. Japanese Craftsmanship Editorial Manifesto */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-block p-2 border border-[#BA3829]/40 rounded-full mb-6 text-[#BA3829]">
            <Feather className="w-5 h-5" />
          </div>

          <p className="font-serif italic text-2xl sm:text-3xl text-[#1C1917] leading-relaxed mb-6">
            "In Japan, stationery is not disposable office debris. It is the sacred threshold where fleeting thought is granted physical permanence."
          </p>

          <p className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Emi Tanaka · Editor-in-Chief, Kiroku
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#E8E2D5] text-left">
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1C1917] mb-1">
                ものづくり · Monozukuri
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                The pride and spiritual discipline of making things with uncompromising devotion.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1C1917] mb-1">
                こだわり · Kodawari
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Relentless pursuit of perfection in minute details that others might easily overlook.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1C1917] mb-1">
                もったいない · Mottainai
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Deep respect for resources, resulting in refillable tools engineered to last decades.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Newsletter Signup Section */}
      <NewsletterSection />

    </div>
  );
};

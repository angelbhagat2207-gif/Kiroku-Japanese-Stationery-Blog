import React, { useEffect, useState } from 'react';
import { Article } from '../types.ts';
import { ARTICLES, getRelatedArticles } from '../data/articles.ts';
import { StationeryImage } from '../components/StationeryImage.tsx';
import { ArticleCard } from '../components/ArticleCard.tsx';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  BookOpen, 
  Clock, 
  Calendar, 
  Bookmark, 
  ChevronRight,
  List
} from 'lucide-react';

interface ArticleDetailPageProps {
  article: Article;
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onNavigate,
  onSelectArticle,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const relatedArticles = getRelatedArticles(article);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scroll)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <article className="min-h-screen bg-[#FAF8F5] pb-24">
      
      {/* 1. Sticky Reading Progress Indicator */}
      <div className="fixed top-20 left-0 right-0 h-[2.5px] bg-[#E8E2D5] z-30">
        <div
          className="h-full bg-[#BA3829] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Article Header & Metadata */}
      <header className="pt-8 sm:pt-14 pb-10 border-b border-[#E8E2D5] bg-gradient-to-b from-[#FAF8F5] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#78716C] mb-6" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-[#1C1917] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-[#A8A29E]" />
            <button
              onClick={() => onNavigate('/blog')}
              className="hover:text-[#1C1917] transition-colors"
            >
              Blog
            </button>
            <ChevronRight className="w-3 h-3 text-[#A8A29E]" />
            <button
              onClick={() => onNavigate(`/categories/${article.category}`)}
              className="text-[#BA3829] hover:underline"
            >
              {article.categoryName}
            </button>
          </nav>

          {/* Japanese Kana Tagline */}
          {article.japaneseTitle && (
            <p className="text-xs font-serif text-[#BA3829] mb-2 tracking-widest">
              {article.japaneseTitle}
            </p>
          )}

          {/* Article Main H1 Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] leading-[1.18] tracking-tight mb-4">
            {article.title}
          </h1>

          {/* Subtitle Deck */}
          <p className="font-serif italic text-lg sm:text-xl text-[#57534E] leading-relaxed mb-8">
            {article.subtitle}
          </p>

          {/* Author Byline & Article Metrics (Zero-Pill Unboxed) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E8E2D5]">
            
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D6CEBE] bg-[#F4EFE6]">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1C1917]">
                  {article.author.name}
                  {article.author.japaneseName && (
                    <span className="text-xs text-[#78716C] font-normal ml-1.5 font-serif">
                      ({article.author.japaneseName})
                    </span>
                  )}
                </p>
                <p className="text-xs text-[#78716C]">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#78716C] font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#A8A29E]" />
                <time dateTime="2026-10-05">{article.publishedAt}</time>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A8A29E]" />
                <span>{article.readingTime}</span>
              </div>
              <span>·</span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-[#1C1917] hover:text-[#BA3829] cursor-pointer transition-colors"
                title="Share this article"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-[#5F7161]" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* 3. Hero Visual Presentation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <figure className="relative bg-white border border-[#E8E2D5] p-2 sm:p-3 shadow-xs">
          <StationeryImage
            src={article.heroImage}
            alt={article.heroImageAlt}
            aspectRatio="16/9"
            priority
          />
          <figcaption className="text-xs font-serif italic text-[#78716C] pt-2 px-1 text-center">
            {article.heroImageAlt} — Kiroku Archive Photography.
          </figcaption>
        </figure>
      </div>

      {/* 4. Reading Column & Asymmetric Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Reading Column (8 cols on large screens) */}
          <div className="lg:col-span-8">
            
            {/* Table of Contents (Mobile Collapsible / In-line) */}
            {article.tableOfContents.length > 0 && (
              <nav className="p-5 bg-white border border-[#E8E2D5] mb-10 lg:hidden" aria-label="Table of Contents">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BA3829] mb-3">
                  <List className="w-3.5 h-3.5" />
                  <span>Table of Contents</span>
                </div>
                <ol className="space-y-1.5 text-xs text-[#57534E]">
                  {article.tableOfContents.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-[#BA3829] transition-colors"
                      >
                        {idx + 1}. {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Introduction with Drop Cap */}
            <div className="space-y-6 text-[#1C1917] leading-[1.8] text-base sm:text-lg mb-10">
              {article.introduction.map((para, i) => (
                <p key={i} className={i === 0 ? 'drop-cap font-normal' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* Detailed Body Sections */}
            <div className="space-y-12">
              {article.sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="pt-6 border-t border-[#E8E2D5]/80 scroll-mt-24"
                >
                  <div className="mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#BA3829] block mb-1">
                      Part 0{idx + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] tracking-tight">
                      {section.heading}
                    </h2>
                    {section.subheading && (
                      <p className="text-sm font-serif italic text-[#78716C] mt-1">
                        {section.subheading}
                      </p>
                    )}
                  </div>

                  <div className="space-y-5 text-[#292524] leading-[1.8] text-base">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Optional Callout / Pull Quote */}
                  {section.callout && (
                    <aside className="my-8 p-6 bg-[#F4EFE6] border-l-2 border-[#BA3829] text-[#1C1917]">
                      <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-[#292524]">
                        "{section.callout.content}"
                      </p>
                      {section.callout.authorOrSource && (
                        <p className="text-xs font-mono text-[#78716C] uppercase tracking-wider mt-3">
                          — {section.callout.authorOrSource}
                        </p>
                      )}
                    </aside>
                  )}

                  {/* Optional Technical Specification Table */}
                  {section.specTable && (
                    <div className="my-8 overflow-x-auto border border-[#E8E2D5] bg-white">
                      <div className="bg-[#FAF8F5] px-4 py-2 border-b border-[#E8E2D5] flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                          Technical Specification & Matrix
                        </span>
                        <span className="text-[10px] font-mono text-[#BA3829]">
                          Kiroku Benchmark
                        </span>
                      </div>
                      <table className="w-full text-xs text-left">
                        <tbody className="divide-y divide-[#F2ECE1]">
                          {section.specTable.map((spec, sIdx) => (
                            <tr key={sIdx} className="hover:bg-[#FAF8F5]/60 transition-colors">
                              <td className="px-4 py-3 font-semibold text-[#1C1917] w-1/3 bg-[#FBF9F5]/40 border-r border-[#F2ECE1]">
                                {spec.label}
                              </td>
                              <td className="px-4 py-3 text-[#57534E] font-mono">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Optional Highlight List */}
                  {section.highlightList && (
                    <div className="my-8 p-5 bg-white border border-[#E8E2D5] space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#78716C] mb-2">
                        Key Instruments Reviewed
                      </h4>
                      {section.highlightList.map((hl, hlIdx) => (
                        <div key={hlIdx} className="text-xs border-b border-[#F2ECE1] pb-2 last:border-b-0 last:pb-0">
                          <p className="font-semibold text-[#1C1917] font-serif text-sm">
                            {hl.item}
                          </p>
                          <p className="text-[#57534E] mt-0.5 leading-relaxed">
                            {hl.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                </section>
              ))}
            </div>

            {/* Key Takeaways Box */}
            {article.keyTakeaways.length > 0 && (
              <div className="mt-14 p-6 bg-white border border-[#D6CEBE] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BA3829] mb-3">
                  <Bookmark className="w-3.5 h-3.5 text-[#BA3829]" />
                  <span>Key Editorial Takeaways</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#44403C]">
                  {article.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BA3829] mt-2 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conclusion */}
            <div className="mt-12 pt-8 border-t border-[#E8E2D5]">
              <h3 className="font-serif text-2xl font-medium text-[#1C1917] mb-3">
                Closing Reflection
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-[#57534E] leading-relaxed">
                {article.conclusion}
              </p>
            </div>

            {/* Author Biography Box */}
            <div className="mt-12 p-6 bg-[#F4EFE6] border border-[#E8E2D5] flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D6CEBE] bg-white shrink-0">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#78716C] block">
                  About the Author
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#1C1917]">
                  {article.author.name}
                </h4>
                <p className="text-xs text-[#BA3829] font-mono mb-2">
                  {article.author.role}
                </p>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {article.author.bio}
                </p>
              </div>
            </div>

            {/* Share and Return Toolbar */}
            <div className="mt-8 pt-6 border-t border-[#E8E2D5] flex items-center justify-between">
              <button
                onClick={() => onNavigate('/blog')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#BA3829] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to all 10 articles</span>
              </button>

              <button
                onClick={handleShare}
                className="px-4 py-2 text-xs font-medium text-[#1C1917] bg-white border border-[#D6CEBE] hover:border-[#1C1917] transition-colors rounded-xs flex items-center gap-1.5"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-[#5F7161]" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Share Article'}</span>
              </button>
            </div>

          </div>

          {/* Sidebar (4 cols on large screens): Sticky TOC & Quick Actions */}
          <aside className="hidden lg:block lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Sticky Desktop Table of Contents */}
              <div className="p-5 bg-white border border-[#E8E2D5] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BA3829] mb-4 pb-2 border-b border-[#F2ECE1]">
                  <List className="w-3.5 h-3.5" />
                  <span>On This Page</span>
                </div>
                <ol className="space-y-2.5 text-xs text-[#57534E]">
                  {article.tableOfContents.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-[#BA3829] transition-colors block py-0.5 leading-snug"
                      >
                        <span className="font-mono text-[#A8A29E] mr-1.5">
                          0{idx + 1}.
                        </span>
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tag Cloud */}
              <div className="p-5 bg-white border border-[#E8E2D5]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block mb-3">
                  Article Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-[#57534E] bg-[#FAF8F5] border border-[#E8E2D5] px-2 py-0.5 rounded-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* 5. Related Articles Section (Internal Linking Requirement) */}
      {relatedArticles.length > 0 && (
        <section className="mt-20 pt-16 border-t border-[#E8E2D5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E2D5]">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#BA3829] block">
                  Keep Reading
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#1C1917]">
                  Related Articles
                </h3>
              </div>
              <button
                onClick={() => onNavigate('/blog')}
                className="text-xs font-semibold text-[#1C1917] hover:text-[#BA3829] transition-colors"
              >
                Browse All 10
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <ArticleCard
                  key={rel.id}
                  article={rel}
                  onSelect={onSelectArticle}
                />
              ))}
            </div>
          </div>
        </section>
      )}

    </article>
  );
};

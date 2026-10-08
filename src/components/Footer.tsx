import React from 'react';
import { CATEGORIES } from '../data/categories.ts';
import { NewsletterSection } from './NewsletterSection.tsx';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C1917] text-[#D6CEBE] pt-16 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2E2A27]">
          
          {/* Column 1: About Kiroku (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#FAF8F5] uppercase">
                KIROKU
              </span>
              <span className="inline-flex items-center justify-center w-6 h-6 border border-[#BA3829]/60 bg-[#BA3829]/20 text-[#BA3829] text-[11px] font-serif font-medium leading-none rounded-xs select-none">
                記録
              </span>
            </div>
            
            <p className="text-xs uppercase tracking-widest text-[#BA3829] font-mono">
              Small things. Beautifully written.
            </p>

            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm">
              Kiroku is an independent editorial publication exploring Japanese stationery culture, micro-engineering, fountain pen inks, paper mills, and intentional journaling rituals.
            </p>

            <div className="pt-2 text-xs text-[#78716C]">
              <span>Tokyo · Yanaka · Established 2026</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-white transition-colors text-left"
                >
                  All 10 Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/categories')}
                  className="hover:text-white transition-colors text-left"
                >
                  Categories Index
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Kiroku
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate(`/categories/${cat.id}`)}
                    className="hover:text-white transition-colors text-left flex items-center justify-between w-full pr-4"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[#78716C] font-serif text-[11px]">
                      {cat.japaneseName}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter in Footer (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              The Sunday Dispatch
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Receive our weekly essay on Japanese pens and desk craftsmanship.
            </p>
            <NewsletterSection compact />
            
            {/* Social Icons / Outlinks */}
            <div className="pt-2">
              <span className="text-[11px] text-[#78716C] block mb-2 font-mono">
                Connect with our editorial desk:
              </span>
              <div className="flex items-center gap-3 text-xs text-[#A8A29E]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <span className="text-[#44403C]">·</span>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X / Twitter
                </a>
                <span className="text-[#44403C]">·</span>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Utility Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div>
            <p>© {new Date().getFullYear()} Kiroku Editorial. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-4 text-[11px]">
            <a href="/sitemap.xml" className="hover:text-[#D6CEBE] transition-colors">
              Sitemap.xml
            </a>
            <span>·</span>
            <a href="/robots.txt" className="hover:text-[#D6CEBE] transition-colors">
              Robots.txt
            </a>
            <span>·</span>
            <span className="text-[#A8A29E]">
              Designed with Monozukuri (ものづくり) spirit
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

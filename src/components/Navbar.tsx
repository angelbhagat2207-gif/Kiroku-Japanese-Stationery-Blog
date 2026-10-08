import React, { useState } from 'react';
import { Search, Menu, X, BookOpen, PenTool } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onOpenNewsletter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onOpenNewsletter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Categories', path: '/categories' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single Text Element Wordmark with subtle Japanese stamp */}
          <div className="flex items-center">
            <button
              onClick={() => handleLinkClick('/')}
              className="group flex items-center gap-2.5 text-left focus-visible:outline-hidden"
              aria-label="Kiroku Home"
            >
              <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#1C1917] group-hover:text-[#BA3829] transition-colors uppercase">
                KIROKU
              </span>
              <span className="inline-flex items-center justify-center w-6 h-6 border border-[#BA3829]/40 bg-[#BA3829]/5 text-[#BA3829] text-[11px] font-serif font-medium leading-none rounded-xs select-none">
                記録
              </span>
            </button>
          </div>

          {/* Zone 2: 4-6 Clean Text Navigation Links (Zero Pill) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative text-sm tracking-wide transition-colors py-1 ${
                    active
                      ? 'text-[#1C1917] font-semibold'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#BA3829] transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 Primary Actions & Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#57534E] hover:text-[#1C1917] bg-[#F3EFE6] hover:bg-[#EBE4D5] border border-[#E8E2D5] rounded-xs transition-colors"
              title="Search articles (Cmd+K)"
              aria-label="Search articles"
            >
              <Search className="w-3.5 h-3.5 text-[#78716C]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline text-[10px] bg-white/70 px-1 py-0.5 rounded-xs border border-[#D6CEBE] text-[#78716C]">
                ⌘K
              </kbd>
            </button>

            {/* Newsletter Action Button */}
            <button
              onClick={onOpenNewsletter}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#BA3829] rounded-xs transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Subscribe</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EFE6] rounded-xs focus-visible:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left text-base py-2 px-3 rounded-xs transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-[#F3EFE6] text-[#1C1917] font-semibold'
                      : 'text-[#57534E] hover:bg-[#F8F5EE] hover:text-[#1C1917]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BA3829]" />
                  )}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#E8E2D5] flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNewsletter();
                }}
                className="w-full py-2.5 text-center text-xs font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#BA3829] rounded-xs transition-colors"
              >
                Join Kiroku Letter
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

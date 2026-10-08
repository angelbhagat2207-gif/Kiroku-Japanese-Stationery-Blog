import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { NewsletterModal } from './components/NewsletterModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { BlogPage } from './pages/BlogPage.tsx';
import { ArticleDetailPage } from './pages/ArticleDetailPage.tsx';
import { CategoriesPage } from './pages/CategoriesPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { ARTICLES, getArticleBySlug } from './data/articles.ts';
import { getCategoryById } from './data/categories.ts';
import { CategoryId } from './types.ts';
import { updateSEO } from './utils/seo.ts';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Navigate handler that updates browser history
  const navigate = useCallback((path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO and metadata on route change
  useEffect(() => {
    if (currentPath === '/' || currentPath === '') {
      updateSEO({
        title: 'Kiroku – Japanese Stationery Blog | Small things. Beautifully written.',
        description:
          'Small things. Beautifully written. Kiroku is an aesthetic editorial blog exploring the art, engineering, and mindful culture of Japanese pens, notebooks, and planners.',
        url: `${window.location.origin}/`,
        image: '/src/assets/images/hero_stationery_flatlay_1791468753941.jpg',
      });
    } else if (currentPath === '/blog') {
      updateSEO({
        title: 'All 10 Japanese Stationery Guides & Reviews | Kiroku',
        description:
          'Explore our complete archive of 10 in-depth Japanese stationery articles: Midori MD, Kokuyo Campus, Hobonichi Techo, gel pens, and study tools.',
        url: `${window.location.origin}/blog`,
      });
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const article = getArticleBySlug(slug);
      if (article) {
        updateSEO({
          title: article.title,
          description: article.metaDescription,
          url: `${window.location.origin}/blog/${article.slug}`,
          image: article.heroImage,
          article: article,
        });
      }
    } else if (currentPath.startsWith('/categories')) {
      const parts = currentPath.split('/');
      const catSlug = parts[2];
      const category = catSlug ? getCategoryById(catSlug) : null;
      if (category) {
        updateSEO({
          title: `${category.name} (${category.japaneseName}) Guides | Kiroku`,
          description: category.description,
          url: `${window.location.origin}/categories/${category.id}`,
        });
      } else {
        updateSEO({
          title: 'Stationery Categories & Classifications | Kiroku',
          description:
            'Browse Japanese stationery by discipline: Pens, Notebooks, Journaling, Study Tools, Planners, and Heritage Brands.',
          url: `${window.location.origin}/categories`,
        });
      }
    } else if (currentPath === '/about') {
      updateSEO({
        title: 'About Kiroku – Philosophy, Testing Standards & Team',
        description:
          'Learn about Kiroku: our Yanaka studio, the Monozukuri spirit, paper testing methodology, and editorial team.',
        url: `${window.location.origin}/about`,
      });
    } else if (currentPath === '/contact') {
      updateSEO({
        title: 'Contact the Editorial Desk & FAQs | Kiroku',
        description:
          'Reach out to the Kiroku editorial board in Tokyo, explore frequently asked questions, or pitch an article.',
        url: `${window.location.origin}/contact`,
      });
    }
  }, [currentPath]);

  // Route Resolution
  const renderCurrentView = () => {
    // 1. Article Detail View: /blog/:slug
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '').split('?')[0];
      const article = getArticleBySlug(slug);

      if (article) {
        return (
          <ArticleDetailPage
            article={article}
            onNavigate={navigate}
            onSelectArticle={(newSlug) => navigate(`/blog/${newSlug}`)}
          />
        );
      }
      // If not found, return to blog list
      return (
        <BlogPage
          onSelectArticle={(selectedSlug) => navigate(`/blog/${selectedSlug}`)}
        />
      );
    }

    // 2. Blog Listing: /blog
    if (currentPath === '/blog') {
      return (
        <BlogPage
          onSelectArticle={(slug) => navigate(`/blog/${slug}`)}
        />
      );
    }

    // 3. Category Filter: /categories/:categoryId or /categories
    if (currentPath.startsWith('/categories')) {
      const parts = currentPath.split('/');
      const catSlug = parts[2] as CategoryId | undefined;

      return (
        <CategoriesPage
          initialCategory={catSlug}
          onSelectArticle={(slug) => navigate(`/blog/${slug}`)}
          onNavigate={navigate}
        />
      );
    }

    // 4. About: /about
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 5. Contact: /contact
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // 6. Default: Home (/)
    return (
      <HomePage
        onNavigate={navigate}
        onSelectArticle={(slug) => navigate(`/blog/${slug}`)}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1C1917] selection:bg-[#BA3829]/15 selection:text-[#1C1917]">
      {/* Strict Top Bar Contract Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={navigate} />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(slug) => {
          if (slug === 'OPEN_SEARCH') {
            setIsSearchOpen(true);
          } else {
            navigate(`/blog/${slug}`);
          }
        }}
      />

      {/* Quick Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </div>
  );
}

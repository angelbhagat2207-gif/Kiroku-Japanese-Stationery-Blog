import { Article } from '../types.ts';

/**
 * Updates head metadata dynamically for SPA routing
 */
export function updateSEO({
  title,
  description,
  url,
  image,
  article,
}: {
  title: string;
  description: string;
  url?: string;
  image?: string;
  article?: Article;
}) {
  // 1. Update Title Tag
  document.title = `${title} | Kiroku Japanese Stationery`;

  // 2. Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 3. Update Canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const fullUrl = url || window.location.href;
  canonicalLink.setAttribute('href', fullUrl);

  // 4. Update OpenGraph Tags
  const setMetaProperty = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMetaProperty('og:title', title);
  setMetaProperty('og:description', description);
  setMetaProperty('og:url', fullUrl);
  if (image) {
    setMetaProperty('og:image', image);
  }

  // 5. Update JSON-LD Structured Data
  let jsonLdScript = document.getElementById('json-ld-structured-data');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'json-ld-structured-data';
    jsonLdScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(jsonLdScript);
  }

  if (article) {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      alternativeHeadline: article.japaneseTitle || article.subtitle,
      description: article.metaDescription,
      image: article.heroImage,
      datePublished: '2026-10-05T08:00:00+09:00',
      dateModified: '2026-10-06T09:00:00+09:00',
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Kiroku',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kiroku-stationery.com/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
      articleSection: article.categoryName,
      keywords: article.metaKeywords.join(', '),
      wordCount: article.sections.reduce((acc, s) => acc + s.paragraphs.join(' ').split(' ').length, 0),
    };
    jsonLdScript.textContent = JSON.stringify(articleSchema);
  } else {
    const generalSchema = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Kiroku',
      description: description,
      url: fullUrl,
    };
    jsonLdScript.textContent = JSON.stringify(generalSchema);
  }
}

export type CategoryId = 
  | 'pens' 
  | 'notebooks' 
  | 'journaling' 
  | 'study' 
  | 'planners' 
  | 'stationery-brands';

export interface Category {
  id: CategoryId;
  name: string;
  japaneseName: string;
  description: string;
  slug: string;
  accentColor: string;
}

export interface Author {
  name: string;
  japaneseName?: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  callout?: {
    type?: 'quote' | 'note' | 'tip';
    content: string;
    authorOrSource?: string;
  };
  specTable?: {
    label: string;
    value: string;
  }[];
  highlightList?: {
    item: string;
    detail: string;
  }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  japaneseTitle?: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  category: CategoryId;
  categoryName: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  excerpt: string;
  featured?: boolean;
  editorsPick?: boolean;
  tags: string[];
  tableOfContents: {
    id: string;
    title: string;
  }[];
  introduction: string[];
  sections: ArticleSection[];
  conclusion: string;
  keyTakeaways: string[];
  relatedSlugs: string[];
  metaDescription: string;
  metaKeywords: string[];
}

export type PageRoute = 
  | { type: 'home' }
  | { type: 'blog' }
  | { type: 'article'; slug: string }
  | { type: 'categories' }
  | { type: 'category'; categoryId: CategoryId }
  | { type: 'about' }
  | { type: 'contact' };

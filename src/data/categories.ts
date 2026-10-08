import { Category } from '../types.ts';

export const CATEGORIES: Category[] = [
  {
    id: 'pens',
    name: 'Pens',
    japaneseName: '筆記具',
    description: 'Gel pens, ballpoints, needle points, and fountain pens renowned for micro-precision ink flow.',
    slug: 'pens',
    accentColor: '#BA3829', // Hanko vermilion
  },
  {
    id: 'notebooks',
    name: 'Notebooks',
    japaneseName: 'ノート',
    description: 'Tomoe River, MD Paper, bleed-resistant leaves, and thread-bound laying-flat craftsmanship.',
    slug: 'notebooks',
    accentColor: '#5F7161', // Matcha sage
  },
  {
    id: 'journaling',
    name: 'Journaling',
    japaneseName: '手帳生活',
    description: 'The mindful art of daily reflection, wabi-sabi memory keeping, rubber stamps, and washi tape.',
    slug: 'journaling',
    accentColor: '#B07D62', // Earthen clay
  },
  {
    id: 'study',
    name: 'Study',
    japaneseName: '学習文具',
    description: 'Ergonomic highlighters, mechanical pencils with lead-rotating engines, and high-efficiency tools.',
    slug: 'study',
    accentColor: '#3A5A40', // Deep moss
  },
  {
    id: 'planners',
    name: 'Planners',
    japaneseName: '手帳',
    description: 'Hobonichi Techo, Jibun Techo, Traveler’s Notebook, and Japanese chronological time-tracking.',
    slug: 'planners',
    accentColor: '#6B705C', // Olive tint
  },
  {
    id: 'stationery-brands',
    name: 'Stationery Brands',
    japaneseName: '文具ブランド',
    description: 'Profiles and histories of Tokyo ateliers, heritage ink makers, and iconic Japanese manufacturers.',
    slug: 'stationery-brands',
    accentColor: '#7F5539', // Hinoki wood
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id || c.slug === id);
}

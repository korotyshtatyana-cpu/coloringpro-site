import { describe, expect, it } from 'vitest';
import { GalleryItem, GalleryModel } from './GalleryModel';
import { LocaleModel } from './LocaleModel';

const t = LocaleModel.getTranslator('en-US');

function item(id: string, categories: string[]): GalleryItem {
  return {
    id,
    title: id,
    subtitle: t('common.coloring'),
    imageSrc: `https://example.com/${id}.png`,
    svgUrl: null,
    categories,
  };
}

describe('GalleryModel.deriveCategories', () => {
  it('returns only the "All" chip for an empty gallery', () => {
    expect(GalleryModel.deriveCategories([], t)).toEqual([
      { id: 'all', label: 'All', icon: 'grid' },
    ]);
  });

  it('derives unique categories in first-seen order and labels known slugs', () => {
    const categories = GalleryModel.deriveCategories(
      [
        item('a', ['animals', 'flowers']),
        item('b', ['nature', 'animals']),
        item('c', ['zen']),
        item('d', []),
      ],
      t,
    );

    expect(categories).toEqual([
      { id: 'all', label: 'All', icon: 'grid' },
      { id: 'animals', label: 'Animals' },
      { id: 'flowers', label: 'Flowers' },
      { id: 'nature', label: 'Nature' },
      { id: 'zen', label: 'Zen' },
    ]);
  });

  it('uses the active locale for chip labels', () => {
    const ru = LocaleModel.getTranslator('ru-RU');
    expect(GalleryModel.deriveCategories([item('a', ['animals'])], ru)).toEqual([
      { id: 'all', label: 'Все', icon: 'grid' },
      { id: 'animals', label: 'Животные' },
    ]);
  });
});

describe('GalleryModel.filterItems', () => {
  const items = [item('a', ['animals']), item('b', ['flowers']), item('c', ['animals', 'flowers'])];

  it('returns every item for the "All" category', () => {
    expect(GalleryModel.filterItems(items, 'all')).toEqual(items);
  });

  it('filters by category membership', () => {
    expect(GalleryModel.filterItems(items, 'animals').map((entry) => entry.id)).toEqual(['a', 'c']);
    expect(GalleryModel.filterItems(items, 'flowers').map((entry) => entry.id)).toEqual(['b', 'c']);
  });

  it('returns no items for an unknown category', () => {
    expect(GalleryModel.filterItems(items, 'unknown')).toEqual([]);
  });
});

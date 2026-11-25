import { getSupabaseClient } from './SupabaseConfig';
import { Translate, TranslationKey } from './LocaleModel';

export type CategoryId = string;

export interface Category {
  id: CategoryId;
  label: string;
  icon?: 'grid';
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  svgUrl: string | null;
  categories: string[];
}

/** Row shape of the `contours` table in Supabase. */
interface ContourRow {
  id: string;
  title: string | null;
  preview_url: string | null;
  svg_data: string | null;
  categories: string[] | null;
}

function formatCategoryLabel(slug: string, t: Translate): string {
  const key = `category.${slug}` as TranslationKey;
  const label = t(key);
  return label === key ? slug.charAt(0).toUpperCase() + slug.slice(1) : label;
}

function formatItemTitle(row: ContourRow, t: Translate): string {
  const firstKeyword = row.title?.split(',')[0]?.trim();
  if (firstKeyword) {
    return firstKeyword.charAt(0).toUpperCase() + firstKeyword.slice(1);
  }
  return t('common.coloring');
}

export class GalleryModel {
  /** Loads published gallery items from the `contours` table. */
  static async fetchItems(t: Translate): Promise<GalleryItem[]> {
    const supabase = await getSupabaseClient();
    if (!supabase) {
      throw new Error(t('common.notConfigured'));
    }

    const { data, error } = await supabase
      .from('contours')
      .select('id, title, preview_url, svg_data, categories')
      .not('preview_url', 'is', null)
      .order('created_at', { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    return ((data ?? []) as ContourRow[]).map((row) => ({
      id: row.id,
      title: formatItemTitle(row, t),
      subtitle: t('common.coloring'),
      imageSrc: row.preview_url ?? '',
      svgUrl: row.svg_data,
      categories: row.categories ?? [],
    }));
  }

  /**
   * Builds the chip list: "All" plus one chip per category that actually
   * has at least one image. Categories appear in first-seen order.
   */
  static deriveCategories(items: GalleryItem[], t: Translate): Category[] {
    const seen = new Set<string>();
    const dynamic: Category[] = [];

    for (const item of items) {
      for (const slug of item.categories) {
        if (!seen.has(slug)) {
          seen.add(slug);
          dynamic.push({ id: slug, label: formatCategoryLabel(slug, t) });
        }
      }
    }

    return [{ id: 'all', label: t('common.all'), icon: 'grid' }, ...dynamic];
  }

  static filterItems(items: GalleryItem[], activeCategory: CategoryId): GalleryItem[] {
    if (activeCategory === 'all') {
      return items;
    }
    return items.filter((item) => item.categories.includes(activeCategory));
  }
}

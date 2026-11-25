import { useState, useMemo, useEffect, useCallback } from 'react';
import { GalleryModel, Category, CategoryId, GalleryItem } from '../models/GalleryModel';
import { Locale, Translate } from '../models/LocaleModel';

export interface GalleryControllerState {
  activeCategory: CategoryId;
  filteredItems: GalleryItem[];
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  selectedItem: GalleryItem | null;
  setCategory: (category: CategoryId) => void;
  openItem: (item: GalleryItem) => void;
  closeItem: () => void;
}

export function useGalleryController(locale: Locale, t: Translate): GalleryControllerState {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    let cancelled = false;

    GalleryModel.fetchItems(t)
      .then((loaded) => {
        if (!cancelled) {
          setItems(loaded);
          setError(null);
          setIsLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [locale, t]);

  const categories = useMemo(() => GalleryModel.deriveCategories(items, t), [items, t]);

  // If the active category disappears after reload, filter as "all" without
  // mirroring derived state back into the component state.
  const effectiveCategory =
    activeCategory !== 'all' && !categories.some((cat) => cat.id === activeCategory)
      ? 'all'
      : activeCategory;

  const filteredItems = useMemo(() => {
    return GalleryModel.filterItems(items, effectiveCategory);
  }, [items, effectiveCategory]);

  const setCategory = useCallback((category: CategoryId) => {
    setActiveCategory(category);
  }, []);

  const openItem = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
  }, []);

  const closeItem = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return {
    activeCategory: effectiveCategory,
    filteredItems,
    categories,
    isLoading,
    error,
    selectedItem,
    setCategory,
    openItem,
    closeItem,
  };
}

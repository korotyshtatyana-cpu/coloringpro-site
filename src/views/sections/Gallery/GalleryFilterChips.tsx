import React from 'react';
import { Category, CategoryId } from '../../../models/GalleryModel';
import { GalleryChip } from './GalleryChip';
import { useI18n } from '../../../controllers/LocaleContext';

export interface GalleryFilterChipsProps {
  categories: Category[];
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
}

export const GalleryFilterChips: React.FC<GalleryFilterChipsProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  const { t } = useI18n();

  return (
    <div className="chips" aria-label={t('nav.ariaCategories')}>
      {categories.map((cat) => (
        <GalleryChip
          key={cat.id}
          id={cat.id}
          label={cat.label}
          icon={cat.icon}
          isActive={activeCategory === cat.id}
          onClick={onSelectCategory}
        />
      ))}
    </div>
  );
};

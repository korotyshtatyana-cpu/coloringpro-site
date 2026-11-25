import React from 'react';
import { GalleryItem } from '../../../models/GalleryModel';
import { useI18n } from '../../../controllers/LocaleContext';

export interface ArtCardProps {
  item: GalleryItem;
  onSelect: (item: GalleryItem) => void;
}

export const ArtCard: React.FC<ArtCardProps> = ({ item, onSelect }) => {
  const { t } = useI18n();

  return (
    <article className="art-card">
      <button
        type="button"
        className="art-card__media art-card__media--clickable"
        onClick={() => onSelect(item)}
        title={t('gallery.openFull')}
        aria-label={t('gallery.openFullWith').replace('{title}', item.title)}
      >
        <img
          src={item.imageSrc}
          alt={t('gallery.imageAlt').replace('{title}', item.title)}
          loading="lazy"
        />
      </button>
    </article>
  );
};

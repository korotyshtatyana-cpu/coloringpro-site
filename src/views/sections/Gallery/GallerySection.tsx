import React from 'react';
import { GalleryHeader } from './GalleryHeader';
import { GalleryFilterChips } from './GalleryFilterChips';
import { GalleryGrid } from './GalleryGrid';
import { GalleryLightbox } from './GalleryLightbox';
import { GalleryControllerState } from '../../../controllers/useGalleryController';
import { useI18n } from '../../../controllers/LocaleContext';

export interface GallerySectionProps {
  galleryController: GalleryControllerState;
  onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  galleryController,
  onScrollTo,
}) => {
  const { t } = useI18n();
  const {
    activeCategory,
    filteredItems,
    categories,
    isLoading,
    error,
    selectedItem,
    setCategory,
    openItem,
    closeItem,
  } = galleryController;

  return (
    <section className="section" id="gallery">
      <div className="container">
        <GalleryHeader onScrollTo={onScrollTo} />

        <div className="gallery-shell" data-reveal>
          {isLoading && <p className="gallery-status">{t('gallery.loading')}</p>}

          {!isLoading && error && (
            <p className="gallery-status">
              {t('gallery.error')}
              {import.meta.env.DEV && (
                <small style={{ display: 'block', marginTop: 8, opacity: 0.7 }}>{error}</small>
              )}
            </p>
          )}

          {!isLoading && !error && (
            <>
              <GalleryFilterChips
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={setCategory}
              />
              {filteredItems.length > 0 ? (
                <GalleryGrid items={filteredItems} onSelectItem={openItem} />
              ) : (
                <p className="gallery-status">{t('gallery.empty')}</p>
              )}
            </>
          )}
        </div>
      </div>

      {selectedItem && <GalleryLightbox item={selectedItem} onClose={closeItem} />}
    </section>
  );
};

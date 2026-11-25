import React, { useEffect, useRef, useState } from 'react';
import { GalleryItem } from '../../../models/GalleryModel';
import { CloseIcon } from '../../common/Icons/CloseIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export interface GalleryLightboxProps {
  item: GalleryItem;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose }) => {
  const { t } = useI18n();
  const [svgFailed, setSvgFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const showSvg = Boolean(item.svgUrl) && !svgFailed;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        className="lightbox__close"
        type="button"
        aria-label={t('common.close')}
        onClick={onClose}
      >
        <CloseIcon />
      </button>
      <div className="lightbox__canvas" onClick={(e) => e.stopPropagation()}>
        {!isLoaded && <span className="lightbox__loader" aria-label={t('common.loading')} />}
        <img
          className={`lightbox__image ${isLoaded ? 'lightbox__image--ready' : ''}`}
          src={showSvg ? (item.svgUrl as string) : item.imageSrc}
          alt={t('gallery.imageAlt').replace('{title}', item.title)}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            if (showSvg) {
              setSvgFailed(true);
              setIsLoaded(false);
            }
          }}
        />
        {isLoaded && (
          <img
            className="lightbox__watermark"
            src="assets/watermark.png"
            alt=""
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

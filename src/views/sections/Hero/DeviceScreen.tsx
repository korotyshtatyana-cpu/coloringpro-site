import React from 'react';
import { ChevronLeftIcon } from '../../common/Icons/ChevronLeftIcon';
import { PngIcon } from '../../common/Icons/PngIcon';
import { PencilIcon } from '../../common/Icons/PencilIcon';
import { PaletteIcon } from '../../common/Icons/PaletteIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export const DeviceScreen: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="device">
      <div className="device__screen">
        <div className="device__top">
          <span className="micro-pill">
            <ChevronLeftIcon />
            {t('common.gallery')}
          </span>
          <span className="micro-pill">
            <PngIcon />
            {t('common.export')}
          </span>
        </div>

        <div className="device__canvas">
          <img src="assets/gallery/slide_01.webp" alt="" />

          <div className="canvas-toolbar canvas-toolbar--left">
            <span className="tool-dot tool-dot--active">
              <PencilIcon />
            </span>
            <span className="tool-dot">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 16l7-7 5 5-7 7H4v-5z" />
                <path d="M14.5 5.5l4 4" />
              </svg>
            </span>
            <span className="tool-dot">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 9V5h4M20 15v4h-4" />
                <path d="M5.5 15a7 7 0 0 0 12-3M18.5 9a7 7 0 0 0-12 3" />
              </svg>
            </span>
          </div>

          <div className="canvas-toolbar canvas-toolbar--bottom">
            <span className="tool-dot tool-dot--active">
              <PaletteIcon />
            </span>
            <div className="swatch-row">
              <span className="swatch"></span>
              <span className="swatch"></span>
              <span className="swatch"></span>
              <span className="swatch"></span>
            </div>
            <span className="tool-dot">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 7H6a4 4 0 0 0 0 8h3M15 7h3a4 4 0 0 1 0 8h-3M8 11h8" />
              </svg>
            </span>
            <span className="tool-dot">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 7H6a4 4 0 0 1 0-8h3M15 7h3a4 4 0 0 0 0-8h-3M8 3h8" />
              </svg>
            </span>
            <span className="tool-dot">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <path d="M8 12h8" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

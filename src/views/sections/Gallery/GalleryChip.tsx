import React from 'react';
import { CategoryId } from '../../../models/GalleryModel';
import { GridIcon } from '../../common/Icons/GridIcon';

export interface GalleryChipProps {
  id: CategoryId;
  label: string;
  icon?: 'grid';
  isActive: boolean;
  onClick: (id: CategoryId) => void;
}

export const GalleryChip: React.FC<GalleryChipProps> = ({ id, label, icon, isActive, onClick }) => (
  <button
    type="button"
    className={`chip ${isActive ? 'chip--active' : ''}`}
    aria-pressed={isActive}
    onClick={() => onClick(id)}
  >
    {icon === 'grid' && <GridIcon />}
    {label}
  </button>
);

import React from 'react';
import { GalleryItem } from '../../../models/GalleryModel';
import { ArtCard } from './ArtCard';

export interface GalleryGridProps {
  items: GalleryItem[];
  onSelectItem: (item: GalleryItem) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onSelectItem }) => (
  <div className="gallery-grid">
    {items.map((item) => (
      <ArtCard key={item.id} item={item} onSelect={onSelectItem} />
    ))}
  </div>
);

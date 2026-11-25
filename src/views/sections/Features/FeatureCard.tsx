import React from 'react';
import { FeatureItem } from '../../../models/FeatureModel';
import { VectorIcon } from '../../common/Icons/VectorIcon';
import { PencilIcon } from '../../common/Icons/PencilIcon';
import { PaletteIcon } from '../../common/Icons/PaletteIcon';
import { AdjustIcon } from '../../common/Icons/AdjustIcon';
import { CloudIcon } from '../../common/Icons/CloudIcon';
import { PngIcon } from '../../common/Icons/PngIcon';

export interface FeatureCardProps {
  item: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
  const renderIcon = () => {
    switch (item.icon) {
      case 'vector':
        return <VectorIcon />;
      case 'brush':
        return <PencilIcon />;
      case 'palette':
        return <PaletteIcon />;
      case 'adjust':
        return <AdjustIcon />;
      case 'cloud':
        return <CloudIcon />;
      case 'export':
        return <PngIcon />;
      default:
        return null;
    }
  };

  const style = item.delayMs
    ? ({ '--delay': `${item.delayMs}ms` } as React.CSSProperties)
    : undefined;

  return (
    <article className="feature-card" data-reveal style={style}>
      <span className="feature-card__icon">{renderIcon()}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
};

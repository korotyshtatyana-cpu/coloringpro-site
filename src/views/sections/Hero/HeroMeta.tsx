import React from 'react';
import { HeroMetaItem } from './HeroMetaItem';
import { PencilIcon } from '../../common/Icons/PencilIcon';
import { CloudIcon } from '../../common/Icons/CloudIcon';
import { PngIcon } from '../../common/Icons/PngIcon';
import { useI18n } from '../../../controllers/LocaleContext';

export const HeroMeta: React.FC = () => {
  const { t } = useI18n();

  return (
    <ul className="hero__meta">
      <HeroMetaItem icon={<PencilIcon />} text={t('hero.meta.stylus')} />
      <HeroMetaItem icon={<CloudIcon />} text={t('hero.meta.cloud')} />
      <HeroMetaItem icon={<PngIcon />} text={t('hero.meta.export')} />
    </ul>
  );
};

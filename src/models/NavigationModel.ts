import { Translate } from './LocaleModel';

export interface NavLink {
  href: string;
  label: string;
  isCta?: boolean;
}

export class NavigationModel {
  static getNavLinks(t: Translate): NavLink[] {
    return [
      { href: '#gallery', label: t('common.gallery') },
      { href: '#features', label: t('common.features') },
      { href: '#how', label: t('common.howItWorks') },
      { href: '#faq', label: t('common.faq') },
      { href: '#download', label: t('common.download'), isCta: true },
    ];
  }

  static readonly contactEmail = 'korotyshtatyana@gmail.com';

  static readonly googlePlayUrl =
    'https://play.google.com/store/apps/details?id=com.korotysh.tatyana.coloringpro';

  /** App Store is not live yet — set the URL once published. */
  static readonly appStoreUrl: string | null = null;
}

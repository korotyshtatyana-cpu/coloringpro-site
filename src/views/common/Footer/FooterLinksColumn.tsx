import React from 'react';
import { PageRoute } from '../../../models/LegalDocumentModel';

export interface FooterLinkItem {
  label: string;
  href?: string;
  route?: PageRoute;
}

export interface FooterLinksColumnProps {
  title: string;
  links: FooterLinkItem[];
  onNavigate?: (route: PageRoute, e: React.MouseEvent) => void;
  onScrollTo?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const FooterLinksColumn: React.FC<FooterLinksColumnProps> = ({
  title,
  links,
  onNavigate,
  onScrollTo,
}) => (
  <div className="footer-col">
    <h4>{title}</h4>
    <ul>
      {links.map((link) => (
        <li key={link.label}>
          {link.route && onNavigate ? (
            <a href={`${link.route}.html`} onClick={(e) => onNavigate(link.route!, e)}>
              {link.label}
            </a>
          ) : link.href && link.href.startsWith('#') && onScrollTo ? (
            <a href={link.href} onClick={(e) => onScrollTo(e, link.href!)}>
              {link.label}
            </a>
          ) : (
            <a
              href={link.href}
              {...(link.href?.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

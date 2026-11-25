import { describe, expect, it } from 'vitest';
import { LegalDocumentModel, PageRoute } from './LegalDocumentModel';

describe('LegalDocumentModel.getRouteFromPath', () => {
  it.each([
    ['/', 'home'],
    ['/index.html', 'home'],
    ['/unknown', 'home'],
    ['/privacy', 'privacy'],
    ['/privacy.html', 'privacy'],
    ['https://example.com/legal/terms.html', 'terms'],
    ['/DELETE-ACCOUNT.html', 'delete-account'],
  ])('maps %s to %s', (path, expected) => {
    expect(LegalDocumentModel.getRouteFromPath(path)).toBe(expected);
  });
});

describe('LegalDocumentModel.getPathFromRoute', () => {
  it.each<[PageRoute, string]>([
    ['home', './'],
    ['privacy', 'privacy.html'],
    ['terms', 'terms.html'],
    ['delete-account', 'delete-account.html'],
  ])('maps %s to %s', (route, expected) => {
    expect(LegalDocumentModel.getPathFromRoute(route)).toBe(expected);
  });

  it('round-trips every legal route through getRouteFromPath', () => {
    const routes: PageRoute[] = ['privacy', 'terms', 'delete-account'];

    for (const route of routes) {
      expect(LegalDocumentModel.getRouteFromPath(LegalDocumentModel.getPathFromRoute(route))).toBe(
        route,
      );
    }
  });
});

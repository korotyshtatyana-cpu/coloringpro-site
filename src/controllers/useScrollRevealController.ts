import { useEffect } from 'react';

/**
 * Observes all [data-reveal] elements and adds .is-visible when they scroll
 * into view. Re-runs when [watchKey] changes (e.g. page route), so elements
 * rendered after a route change are observed too.
 */
export function useScrollRevealController(watchKey?: unknown): void {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [watchKey]);
}

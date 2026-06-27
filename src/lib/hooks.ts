import { useEffect, useRef, useState } from 'react';

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)';

/** Tracks the user's reduced-motion preference reactively. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(REDUCE_QUERY).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(REDUCE_QUERY);
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/**
 * Adds `is-visible` to an element once it scrolls into view, used to draw the
 * hairline rule under section titleblocks. Content is fully visible by default;
 * this only triggers the rule animation (and is applied immediately under
 * reduced-motion, so nothing depends on a transition firing).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia(REDUCE_QUERY).matches) {
      el.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

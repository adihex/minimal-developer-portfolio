import type { ReactNode } from 'react';
import { useReveal } from '../lib/hooks';

interface SheetProps {
  id: string;
  no: string;
  title: string;
  meta?: ReactNode;
  children: ReactNode;
}

/**
 * A section framed like a drawing sheet: a numbered titleblock with a redline
 * rule that draws across when the section scrolls into view.
 */
export function Sheet({ id, no, title, meta, children }: SheetProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section id={id} className="sheet" ref={ref} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="titleblock">
          <span className="titleblock__no mono">{no}</span>
          <h2 id={`${id}-title`} className="titleblock__title">
            {title}
          </h2>
          {meta ? <div className="titleblock__meta label">{meta}</div> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

import { site } from '../data/site';
import { DocIcon } from './icons';

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a className="nav__brand" href="#top" aria-label="Aditya Balakrishnan — top">
          <svg className="tick" width="13" height="13" viewBox="0 0 13 13" aria-hidden>
            <path d="M6.5 0v13M0 6.5h13" stroke="var(--accent)" strokeWidth="1.4" />
          </svg>
          adihex
        </a>
        <nav className="nav__links" aria-label="Primary">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="nav__resume" href={site.resumeHref} target="_blank" rel="noreferrer">
          résumé
          <DocIcon width="14" height="14" />
        </a>
      </div>
    </header>
  );
}

import { site } from '../data/site';
import { Sheet } from './Sheet';
import { ArrowIcon } from './icons';

export function EarlierWork() {
  return (
    <Sheet id="earlier" no="04" title="Earlier work" meta="archive">
      <p className="lede-muted">
        Student-era projects, kept for the record — where the practice started.
      </p>
      <div className="contactsheet">
        {site.archive.map((a) => (
          <a className="frame" key={a.no} href={a.href} target="_blank" rel="noreferrer">
            <span className="frame__shot">
              <img src={a.image} alt={a.alt} loading="lazy" width={900} height={560} />
              <span className="frame__no mono">{a.no}</span>
            </span>
            <span className="frame__meta">
              <span className="frame__name">{a.name}</span>
              <ArrowIcon className="arrow" width="13" height="13" />
            </span>
            <span className="frame__stack mono">{a.stack}</span>
          </a>
        ))}
      </div>
    </Sheet>
  );
}

import { site } from '../data/site';
import { Sheet } from './Sheet';

export function Experience() {
  return (
    <Sheet id="experience" no="02" title="Experience" meta="2020 — present">
      <div className="timeline">
        {site.experience.map((x) => (
          <div className="tl-item" key={x.org}>
            <div className="tl-when mono">
              {x.current ? (
                <span className="now">
                  <span className="dot" aria-hidden /> {x.when}
                </span>
              ) : (
                x.when
              )}
            </div>
            <div>
              <h3 className="tl-role">{x.role}</h3>
              <p className="tl-org">
                <b>{x.org}</b>
                {x.orgNote ? ` · ${x.orgNote}` : ''}
              </p>
              <ul className="tl-points">
                {x.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  );
}

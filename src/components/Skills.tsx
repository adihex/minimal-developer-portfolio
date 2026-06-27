import { site } from '../data/site';
import { Sheet } from './Sheet';

export function Skills() {
  return (
    <Sheet id="skills" no="03" title="Capabilities" meta="spec">
      <div className="specs">
        {site.skills.map((g) => (
          <div className="spec-row" key={g.key}>
            <div className="spec-key mono">{g.key}</div>
            <div className="spec-val">
              {g.items.map((it) => (
                <span key={it}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  );
}

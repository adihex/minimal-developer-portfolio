import { site } from '../data/site';
import { Sheet } from './Sheet';
import { SocialIcon } from './icons';

export function Contact() {
  return (
    <Sheet id="contact" no="07" title="Contact" meta="→">
      <div className="contact">
        <div>
          <p className="contact__big">
            Building something <span className="red">across the stack</span> — or going deep on
            agents?
          </p>
          <p className="contact__sub">
            Email's fastest — I answer my own inbox. Happy to talk product, infrastructure, or
            anything agentic.
          </p>
        </div>
        <div className="contact__links">
          {site.social.map((s) => (
            <a
              className="cl-row"
              key={s.kind}
              href={s.href}
              target={s.kind === 'email' ? undefined : '_blank'}
              rel="noreferrer"
            >
              <SocialIcon kind={s.kind} />
              <span className="cl-k">{s.label}</span>
              <span className="cl-v">{s.value}</span>
              <span className="arrow" aria-hidden>
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

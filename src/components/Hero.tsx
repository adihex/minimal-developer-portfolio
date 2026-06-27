import { site } from '../data/site';
import { Schematic } from './Schematic';
import { ArrowIcon, SocialIcon } from './icons';

const idLinks = site.social.filter((s) => s.kind === 'github' || s.kind === 'linkedin' || s.kind === 'email');

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="wrap hero__grid">
        <div className="hero__intro">
          <div className="hero__coord rise">
            <span>{site.coords.lat}</span>
            <span className="sep">/</span>
            <span>{site.coords.lon}</span>
            <span className="sep">·</span>
            <span>{site.location}</span>
          </div>

          <h1 className="rise" style={{ animationDelay: '0.05s' }}>
            {site.name}
          </h1>
          <p className="hero__role rise" style={{ animationDelay: '0.1s' }}>
            {site.role}
          </p>
          <p className="hero__rolenote rise" style={{ animationDelay: '0.13s' }}>
            {site.roleNote}
          </p>

          <p className="hero__lede rise" style={{ animationDelay: '0.16s' }}>
            I'm a full-stack engineer who builds end to end — the interface, the services behind it,
            and the infrastructure underneath. At <b>BlinqIO</b> that's spanned a cross-platform
            desktop app and the Kubernetes platform our teams build on. Right now I'm deep in{' '}
            <b>agentic systems</b>, building <b>AgentX</b>.
          </p>

          <div className="hero__actions rise" style={{ animationDelay: '0.22s' }}>
            <a className="nav__resume" href="#work">
              view work
              <ArrowIcon width="14" height="14" style={{ transform: 'rotate(45deg)' }} />
            </a>
            <a className="out" href={site.resumeHref} target="_blank" rel="noreferrer">
              résumé <span className="arrow">↗</span>
            </a>
          </div>

          <div className="idcard rise" style={{ animationDelay: '0.28s' }}>
            {idLinks.map((s) => (
              <a
                key={s.kind}
                href={s.href}
                target={s.kind === 'email' ? undefined : '_blank'}
                rel="noreferrer"
              >
                <SocialIcon kind={s.kind} />
                {s.value}
              </a>
            ))}
          </div>
        </div>

        <div className="hero__art rise" style={{ animationDelay: '0.18s' }}>
          <Schematic />
        </div>
      </div>
    </section>
  );
}

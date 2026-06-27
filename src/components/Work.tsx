import type { Project } from '../types';
import { site } from '../data/site';
import { Sheet } from './Sheet';
import { ScreenshotPanel, SimonCapture, TerminalCapture } from './panels';
import { ArrowIcon } from './icons';

function ProjectArt({ project }: { project: Project }) {
  if (project.panel === 'screenshot' && project.image) {
    return <ScreenshotPanel image={project.image} />;
  }
  if (project.panel === 'simon') {
    return <SimonCapture />;
  }
  return <TerminalCapture />;
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className={project.flip ? 'project project--flip' : 'project'}>
      <div className="project__body">
        <span className="project__index mono">project {project.index}</span>
        <h3 className="project__title">{project.name}</h3>
        <p className="project__kicker">{project.kicker}</p>
        <p className="project__lede">{project.lede}</p>

        <ul className="callouts">
          {project.callouts.map((c) => (
            <li key={c.key}>
              <span className="ckey">{c.key}</span>
              <span className="cval">{c.body}</span>
            </li>
          ))}
        </ul>

        {project.outcome ? (
          <div className="outcome">
            <span className="label">ships</span>
            <span>{project.outcome}</span>
          </div>
        ) : null}

        <div className="stacktags">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="project__links">
          {project.links.map((l) => (
            <a key={l.href} className="out" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
              <ArrowIcon className="arrow" width="13" height="13" />
            </a>
          ))}
        </div>
      </div>

      <div className="project__art">
        <ProjectArt project={project} />
      </div>
    </article>
  );
}

export function Work() {
  return (
    <Sheet id="work" no="01" title="Selected work">
      {site.projects.map((p) => (
        <ProjectRow key={p.index} project={p} />
      ))}
    </Sheet>
  );
}

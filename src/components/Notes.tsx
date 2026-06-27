import { site } from '../data/site';
import { Sheet } from './Sheet';
import { ArrowIcon } from './icons';

export function Notes() {
  const note = site.notes[0];
  if (!note) return null;

  return (
    <Sheet id="notes" no="06" title="Notes" meta={note.date}>
      <article className="essay">
        <h3 className="essay__title">{note.title}</h3>
        <div className="essay__body prose">
          {note.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <a className="out" href={note.href} target="_blank" rel="noreferrer">
          {note.hrefLabel}
          <ArrowIcon className="arrow" width="13" height="13" />
        </a>
      </article>
    </Sheet>
  );
}

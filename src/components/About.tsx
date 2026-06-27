import { Sheet } from './Sheet';

const FACTS: { k: string; v: string }[] = [
  { k: 'based', v: 'Bengaluru, IN' },
  { k: 'role', v: 'R&D Engineer · BlinqIO' },
  { k: 'edu', v: 'B.Tech CSE · IIT Bhubaneswar' },
  { k: 'focus', v: 'Full-stack · agentic systems' },
  { k: 'langs', v: 'TypeScript · Python' },
];

export function About() {
  return (
    <Sheet id="about" no="05" title="About" meta="bio">
      <div className="prose-grid">
        <div className="prose">
          <p>
            I'm a CS grad from <span className="accenttext">IIT Bhubaneswar</span> (2024), now an R&D
            engineer at BlinqIO in Bengaluru. I'm a generalist at heart — happiest moving across the
            whole stack, from the UI down to the Kubernetes underneath — and I like owning a system end
            to end. Lately that's pulled me deep into agentic systems, where I've come to think the hard
            part isn't the model, it's everything around it: scheduling, isolation, and being able to see
            what a run is actually doing.
          </p>
          <p>
            Away from the editor, I played basketball at Inter-IIT 2022 and spent a good chunk of college
            in the quiz and music societies. I also helped run TEDxIITBhubaneswar and Wissenaire, our
            annual tech fest — the kind of organizing chaos that taught me more about shipping than most
            of my classes did.
          </p>
        </div>
        <div className="facts">
          {FACTS.map((f) => (
            <div className="fact" key={f.k}>
              <span className="label">{f.k}</span>
              <span className="v">{f.v}</span>
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

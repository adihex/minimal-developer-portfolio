import type { ProjectImage } from '../types';

/**
 * A faithful AgentX terminal session. Every line matches the real log output in
 * packages/core/src/AgentEventLoop.ts — the four event-loop phases plus ADP
 * control-plane commands (Metacognition.pause/resume) and the 12-step cap.
 * Labelled "captured" because a static panel isn't a live run.
 */
interface LogLine {
  prefix: string;
  glyph: string;
  text: string;
  adp?: boolean;
}

const AGENTX_LOG: LogLine[] = [
  { prefix: '[ADP]', glyph: '📥', text: 'Session.prompt: "summarise my apple notes"', adp: true },
  { prefix: '[Phase 1/4]', glyph: '⏱', text: 'Timers' },
  { prefix: '[Phase 2/4]', glyph: '📥', text: 'I/O Callbacks — 1 macrotask' },
  { prefix: '[Phase 3/4]', glyph: '🧠', text: 'Inference' },
  { prefix: '[ADP]', glyph: '⏸', text: 'Metacognition.pause', adp: true },
  { prefix: '[ADP]', glyph: '▶', text: 'Metacognition.resume', adp: true },
  { prefix: '[Phase 4/4]', glyph: '🔍', text: 'Check — 0 microtasks' },
  { prefix: '[Loop]', glyph: '🛑', text: 'Step cap (12) reached' },
];

export function TerminalCapture() {
  return (
    <div
      className="term"
      role="img"
      aria-label="A captured AgentX terminal session: the four-phase event loop (Timers, I/O Callbacks, Inference, Check) interleaved with ADP control-plane commands Metacognition.pause and Metacognition.resume, ending at the 12-step cap."
    >
      <div className="term__bar">
        <span className="term__dot" aria-hidden />
        <span>agentx · ws / json-rpc :9222</span>
        <span className="term__cap">captured</span>
      </div>
      <div className="term__log">
        {AGENTX_LOG.map((l, i) => (
          <div className="term__line" key={i}>
            <span className={l.adp ? 'term__p adp' : 'term__p'}>{l.prefix}</span>{' '}
            <span className="term__g">{l.glyph}</span> <span className="term__m">{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * A faithful static capture of the simon TUI. The layout, glyphs (sparkline
 * ▁▂▃▄▅▆▇█, gauge █/░, gutter labels you/simon/→/!/✓) and palette (teal accent
 * #5bd2c7, severity ramp ok-green / warn-amber / crit-rose) match the real
 * @opentui/react app in apps/simon-cli — including the approval gate that holds
 * destructive tools (killProcess) until the user says yes. "captured" because a
 * static panel isn't a live 2s-polling run.
 */
interface SimonRow {
  label: 'you' | 'simon' | '→' | '!' | '✓';
  kind: 'you' | 'simon' | 'read' | 'warn' | 'ok';
  text: string;
}

const SIMON_CHAT: SimonRow[] = [
  { label: 'you', kind: 'you', text: "what's eating my memory?" },
  { label: '→', kind: 'read', text: 'getTopProcesses' },
  {
    label: 'simon',
    kind: 'simon',
    text: '"node" (pid 48213) is holding 3.2 GB — a stray dev server. Kill it to free ~20%? I won’t act without a yes.',
  },
  { label: 'you', kind: 'you', text: 'yes' },
  { label: '!', kind: 'warn', text: 'killProcess' },
  { label: '✓', kind: 'ok', text: 'killProcess' },
  { label: 'simon', kind: 'simon', text: 'Killed pid 48213. The gauge will catch up next tick.' },
];

export function SimonCapture() {
  return (
    <div
      className="simon"
      role="img"
      aria-label="A captured simon terminal UI: a telemetry header showing CPU 18.4% with a sparkline, memory 81.6% (elevated) on a gauge, and load average; below it the agent answers 'what's eating my memory?', runs getTopProcesses, proposes killing a 3.2 GB node process, and only kills it after the user approves. Status reads memory elevated."
    >
      <div className="simon__bar">
        <span className="simon__dot" aria-hidden />
        <span>simon · system optimizer</span>
        <span className="simon__cap">captured</span>
      </div>

      <div className="simon__head">
        <div className="simon__metric">
          <span className="simon__k">cpu</span>
          <span className="simon__v">18.4%</span>
          <span className="simon__spark">▂▃▂▄▆▅▇▅▃▂</span>
        </div>
        <div className="simon__metric">
          <span className="simon__k">memory</span>
          <span className="simon__gauge">
            <span className="simon__fill simon__fill--warn">██████████</span>
            <span className="simon__track">░░</span>
          </span>
          <span className="simon__v simon__v--warn">81.6%</span>
        </div>
        <div className="simon__metric">
          <span className="simon__k">load</span>
          <span className="simon__v">1.24</span>
          <span className="simon__sub">0.98 0.71 · 8 cores</span>
        </div>
        <span className="simon__up">uptime 4h 12m</span>
      </div>

      <div className="simon__console">
        {SIMON_CHAT.map((r, i) => (
          <div className="simon__row" key={i}>
            <span className={`simon__gutter simon__gutter--${r.kind}`}>{r.label}</span>
            <span className={`simon__msg simon__msg--${r.kind}`}>{r.text}</span>
          </div>
        ))}
      </div>

      <div className="simon__input">
        <div className="simon__prompt">
          <span className="simon__caret">›</span>
          <span className="simon__ph">ask simon something…</span>
        </div>
        <div className="simon__status">
          <span className="simon__hint">enter send · ctrl+c quit</span>
          <span className="simon__sev">● memory elevated</span>
        </div>
      </div>
    </div>
  );
}

/** A real screenshot of a shipped project, framed as a drawing plate. */
export function ScreenshotPanel({ image }: { image: ProjectImage }) {
  return (
    <figure className="shot">
      <img src={image.src} alt={image.alt} loading="lazy" width={1200} height={680} />
      <figcaption className="shot__cap mono">
        <span className="shot__mark" aria-hidden>
          ▸
        </span>
        {image.caption}
      </figcaption>
    </figure>
  );
}

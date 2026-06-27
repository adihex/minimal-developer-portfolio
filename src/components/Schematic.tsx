import type { CSSProperties } from 'react';
import { usePrefersReducedMotion } from '../lib/hooks';

/** The AgentX agentic loop, drawn on the event loop. The page's decisive imagery. */
const LOOP_PATH =
  'M 118 70 H 282 A 28 28 0 0 1 310 98 V 222 A 28 28 0 0 1 282 250 H 118 A 28 28 0 0 1 90 222 V 98 A 28 28 0 0 1 118 70 Z';

const NODES = [
  { x: 200, y: 70, no: '01', label: 'timers', tx: 200, ty: 50, anchor: 'middle' as const },
  { x: 310, y: 160, no: '02', label: 'i/o', tx: 324, ty: 164, anchor: 'start' as const },
  { x: 200, y: 250, no: '03', label: 'inference', tx: 200, ty: 280, anchor: 'middle' as const },
  { x: 90, y: 160, no: '04', label: 'check', tx: 76, ty: 164, anchor: 'end' as const },
];

// small clockwise direction chevrons mid-side
const CHEVRONS = [
  'M 252 64 l 8 6 l -8 6', // top → right
  'M 316 200 l -6 8 l -6 -8', // right → bottom (pointing down-ish)
  'M 148 256 l -8 -6 l 8 -6', // bottom → left
  'M 84 120 l 6 -8 l 6 8', // left → top
];

export function Schematic() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="schematic">
      <figure>
        <svg viewBox="0 0 400 320" role="img" aria-label="Diagram of the AgentX agentic loop: timers, I/O callbacks, inference, and check, cycling on Node's event loop.">
          {/* corner crop marks */}
          <g className="stroke--dim">
            <path d="M 8 22 V 8 H 22" />
            <path d="M 378 8 H 392 V 22" />
            <path d="M 392 298 V 312 H 378" />
            <path d="M 22 312 H 8 V 298" />
          </g>

          {/* faint center crosshair */}
          <g className="stroke--dim" opacity="0.8">
            <path d="M 200 150 v 20 M 190 160 h 20" />
          </g>
          <text className="axislabel" x="200" y="184" textAnchor="middle">
            4-phase
          </text>

          {/* the loop */}
          <path
            id="loop-path"
            className="stroke draw"
            d={LOOP_PATH}
            pathLength={1000}
            style={{ '--len': 1000 } as CSSProperties}
          />

          {/* direction chevrons (so flow reads even without motion) */}
          <g className="stroke" strokeWidth={1.4}>
            {CHEVRONS.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>

          {/* nodes + labels */}
          {NODES.map((n) => (
            <g key={n.no}>
              <circle className="node" cx={n.x} cy={n.y} r={6} />
              <text className="nodelabel" x={n.tx} y={n.ty} textAnchor={n.anchor}>
                {n.label}
              </text>
              <text
                className="axislabel"
                x={n.tx}
                y={n.anchor === 'middle' ? n.ty + 13 : n.ty + 13}
                textAnchor={n.anchor}
              >
                {n.no}
              </text>
            </g>
          ))}

          {/* the travelling pulse */}
          <circle className="pulse" r={4.5} cx={reduced ? 200 : undefined} cy={reduced ? 70 : undefined}>
            {!reduced && (
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" calcMode="linear">
                <mpath href="#loop-path" />
              </animateMotion>
            )}
          </circle>
        </svg>
        <figcaption>
          <span>agentx · runtime</span>
          <span>fig.01</span>
        </figcaption>
      </figure>
    </div>
  );
}

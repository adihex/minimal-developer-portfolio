# Design

A technical-drawing system: graphite on drafting paper, one redline accent. The portfolio reads like a precise engineering sheet — hairline grid, titleblocks, dimension lines, mono annotations — because the person it describes builds precise systems.

## Theme

- **Aesthetic:** engineering blueprint / drafting sheet. Light ground (white paper), graphite linework and type, a single correction-pencil red.
- **Mood phrase:** *a drafting table under cool morning light — graphite on vellum, one red correction pencil.*
- **Strategy:** Restrained → one committed accent. ~95% monochrome graphite; redline reserved for what matters.
- **Light by intent.** Dark mode is not a goal; the paper ground is the brand. (We respect `prefers-color-scheme` only for minor refinements.)

## Color (OKLCH)

```css
:root {
  /* ground */
  --bg:        oklch(1 0 0);              /* pure white drafting paper */
  --surface:   oklch(0.985 0.003 240);   /* faint cool panel fill */
  --surface-2: oklch(0.965 0.004 240);   /* slightly deeper panel */

  /* ink */
  --ink:       oklch(0.22 0.012 250);    /* graphite body/heading — ~13:1 on white */
  --muted:     oklch(0.48 0.013 250);    /* secondary text — ~5.3:1 on white */
  --faint:     oklch(0.62 0.010 250);    /* tertiary / captions — large text only */

  /* structure */
  --line:      oklch(0.90 0.010 250);    /* hairline grid / rules */
  --line-2:    oklch(0.84 0.012 250);    /* stronger rule / borders */

  /* accent — redline (correction pencil) */
  --accent:        oklch(0.56 0.205 27);     /* vermilion — fills, markers, large text */
  --accent-ink:    oklch(0.50 0.205 27);     /* darker — for link/body-size text ≥4.5:1 */
  --accent-wash:   oklch(0.96 0.03 30);      /* faint red tint for active backgrounds */
}
```

Rules: text on a filled redline chip uses near-white (`--bg`). Redline never appears without an accompanying glyph/label. No second hue is introduced — blue is deliberately avoided to dodge the blueprint cliché.

## Typography

Two families on a contrast axis: a precise grotesque + a technical monospace. Neither is on the reflex-reject list; Inter (the old default) is gone.

- **Archivo** — display + body. Grotesque, engineered, wide weight range. Headings 600–800; body 400–500. Hero title tracked tight (`-0.02em`) and large.
- **Spline Sans Mono** — the annotation hand: titleblock labels, section/sheet numbers, coordinates, spec readouts, stack tags, dimension callouts. Uppercase, tracked `+0.08em` for labels. **Never body prose.**

Scale: fluid `clamp()`, ratio ≥1.25. Hero display max ≤ `clamp(2.5rem, 8vw, 5.5rem)` (never shouting past ~88px). Body 16–18px, line-length capped 65–72ch, `text-wrap: balance` on headings.

## Components

- **Titleblock / sheet header** — each major section opens like a drawing block: a mono sheet-number + name in a hairline-ruled bar (a deliberate, named system — not floating eyebrows). Consistent and meaningful, not decorative repetition.
- **Hero schematic** — a hand-built SVG of the AgentX 4-phase event loop (timers → io → infer → guards) drawn in blueprint linework, with a redline pulse traveling the loop. This is the page's decisive imagery. Reduced-motion → static drawn state.
- **Project sheet** — flagship work (AgentX, Zettelkasten) as asymmetric annotated panels: title + role/stack in mono, prose value-prop, annotated "how it works" callouts, outcome line, repo/live links. Not identical cards.
- **Dimension-line timeline** — experience as a vertical drafting dimension line; year ticks in mono, role + outcomes in Archivo.
- **Spec legend** — skills as a grouped specification table (mono keys, plain values), not badge clouds.
- **Earlier-work register** — student projects as a compact secondary list under a clear "earlier work" label, links only.

## Layout

- Centered measure, `max-width` ~ 72rem, generous fluid gutters via `clamp()`.
- A faint full-page blueprint grid sits behind everything (CSS background, very low contrast) — replaces the old particle background.
- Asymmetric where it earns emphasis (hero, AgentX sheet); tight and aligned elsewhere. Corner registration marks / coordinate ticks frame the page like a real sheet.
- Sticky thin top bar: monogram · section nav · "Résumé ↓" · `● open to roles` status (redline + label).
- Responsive: single column on mobile; the schematic scales and never overflows; titleblocks stack. Test copy at every breakpoint.

## Motion

- **First load:** hero schematic strokes draw in (`stroke-dashoffset`), title + value-prop settle (short, eased-out). One orchestrated entrance, not fade-on-scroll everywhere.
- **Ambient:** a slow redline pulse travels the event-loop path.
- **Scroll:** hairline section rules draw across as they enter; content is fully visible by default (reveal only enhances).
- **Easing:** ease-out (quart/expo), no bounce. **`prefers-reduced-motion`:** all of the above resolve instantly to end-state; no looping pulse.

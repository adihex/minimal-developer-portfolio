# Product

## Register

brand

## Users

Primary: **hiring managers, recruiters, and senior engineers** evaluating Aditya for roles — often scanning many candidates quickly, deciding in seconds whether to read on. They want to know, fast: what is this person, what have they actually built, is it senior-grade, and how do I reach them / get the resume.

Secondary: **engineering peers** (collaborators, open-source visitors, people who found AgentX) who want technical depth — how the systems work, the hard parts, links to code.

The site is reached from a resume link, a GitHub profile (`github.com/adihex`), LinkedIn, or a recruiter's search. Mobile and desktop both matter; recruiters often open links on phones.

## Product Purpose

A personal portfolio for **Aditya Balakrishnan — AI systems engineer**. It replaces a stale, forked "minimal developer" template (Inter + particle background + light/dark toggle) whose content was frozen at a 2023 student internship and listed only early coursework projects.

The revamp reflects current reality: R&D engineer at **BlinqIO** building a production multi-agent AI engine + eval harnesses; author of **AgentX** (an open-source event-driven AI agent runtime SDK) and **Zettelkasten** (a full-stack notes app on that runtime); IIT Bhubaneswar CSE.

Success: a recruiter grasps the positioning, sees the flagship work, and finds the resume + contact within ~20 seconds; an engineer can go deep on AgentX without leaving the page; nobody mistakes it for a template or an AI-generated page.

## Brand Personality

**Precise · engineered · quietly confident.** The voice is technical and specific — concrete systems and measurable outcomes, never adjective inflation or buzzword lists. It should feel like a well-drafted engineering document made by someone who builds the real thing: calm, exact, sure of itself without shouting.

Emotional goal: credibility and trust — "this person ships real systems" — landing in the first fold.

## Anti-references

- **What it is now:** generic dark + monospace + particle-background dev template, light/dark toggle, gradient "Work with me!" button. The single biggest thing to escape.
- **Saturated 2026 dev-portfolio defaults:** dark-mode terminal clones, "type a command to continue" gimmicks, neon-on-black with a gradient accent.
- The **hero-metric template** (big gradient number + label + supporting stats grid).
- **Identical icon-heading-text card grids** and bubbly skill-badge clouds.
- SaaS-cream / editorial-magazine restraint (display serif + italic + drop caps) — wrong register here.
- Anything that reads "AI made this" without doubt.

## Design Principles

1. **Show the system, don't say "I'm technical."** The page itself is an engineering artifact — a technical drawing. Work is demonstrated through annotated diagrams (the AgentX event loop), real structure, and shipped outcomes, not through claims.
2. **Scannable in 20 seconds, deep on demand.** Hiring-first hierarchy: positioning + flagship work + resume/contact reachable immediately; the how-it-works depth sits one scroll down for those who want it.
3. **Outcomes over adjectives.** Concrete numbers and what-shipped (release pipelines, eval gates, 99.83% search-time cut, 100% migration parity) beat generic "passionate about" prose.
4. **Color means something.** Mostly graphite monochrome at rest; the single redline accent is reserved — status, emphasis, live/active markers, key links. If everything is colored, nothing is.
5. **Earned distinctiveness, not costume.** The blueprint identity is carried by genuine structure — hairline grid, drawing titleblocks, dimension lines, mono annotation labels — not a themed gimmick. Monospace is the drawing's annotation hand (labels, specs, coordinates), never body prose.

## Accessibility & Inclusion

- WCAG **AA**: body text ≥4.5:1, large/bold text ≥3:1, placeholder text ≥4.5:1. Verified against the white ground, not assumed.
- The redline accent is **never the sole signal** — it always pairs with a glyph or label (colorblind-safe).
- Full **reduced-motion** alternative: the hero linework and loop animation resolve to their static end-state; scroll reveals become instant. Content is visible by default, never gated behind a transition.
- Keyboard-navigable, visible focus states, semantic landmarks (`header`/`main`/`nav`/`section`/`footer`), real alt text on imagery, respects `prefers-color-scheme` only as a refinement (the design is light-ground by intent).

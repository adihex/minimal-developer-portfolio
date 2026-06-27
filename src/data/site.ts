import type { SiteData } from '../types';

export const site: SiteData = {
  name: 'Aditya Balakrishnan',
  role: 'Software Engineer',
  roleNote: 'Full-stack generalist, currently building agentic systems',
  location: 'Bengaluru, India',
  coords: { lat: '12.97° N', lon: '77.59° E' },
  email: 'adibalak1925@gmail.com',
  resumeHref: '/Aditya_Balakrishnan_Resume.pdf',

  social: [
    {
      kind: 'github',
      label: 'GitHub',
      value: 'github.com/adihex',
      href: 'https://github.com/adihex',
    },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      value: 'in/aditya-balakrishnan',
      href: 'https://linkedin.com/in/aditya-balakrishnan',
    },
    {
      kind: 'email',
      label: 'Email',
      value: 'adibalak1925@gmail.com',
      href: 'mailto:adibalak1925@gmail.com',
    },
    {
      kind: 'resume',
      label: 'Résumé',
      value: 'PDF',
      href: '/Aditya_Balakrishnan_Resume.pdf',
    },
  ],

  nav: [
    { label: 'work', href: '#work' },
    { label: 'experience', href: '#experience' },
    { label: 'skills', href: '#skills' },
    { label: 'about', href: '#about' },
    { label: 'contact', href: '#contact' },
  ],

  projects: [
    {
      index: '01',
      name: 'AgentX',
      kicker: 'Open source · sole author',
      lede: "I built AgentX after every agent framework I tried stalled the whole run on one slow tool call. The fix: model the agentic loop on Node's own event loop, run tools on worker threads, and bolt on a DevTools-style debugger so I can pause and inspect a live agent mid-run.",
      callouts: [
        {
          key: 'LOOP',
          body: "A four-phase loop — timers → I/O callbacks → inference → check — mapped onto Node's event loop, under a 12-step run budget.",
        },
        {
          key: 'THREADS',
          body: 'Tools run on a worker-thread pool (4 by default), so one slow call never stalls the inference phase.',
        },
        {
          key: 'ADP',
          body: 'ADP — the Agent Debugger Protocol, a Chrome DevTools-style control plane: an out-of-band WebSocket speaking JSON-RPC 2.0 (Inference.halt, Metacognition.pause, Memory.compact) on :9222.',
        },
        {
          key: 'ORCH',
          body: 'A multi-agent orchestrator that walks a dependency DAG — cycles rejected up front — with a retry ledger, checked by property-based tests.',
        },
      ],
      outcome: 'Runs Zettelkasten in production.',
      stack: ['TypeScript', 'AI SDK', 'WebSocket / JSON-RPC', 'worker_threads'],
      links: [{ label: 'github.com/adihex/agentx', href: 'https://github.com/adihex/agentx' }],
      panel: 'terminal',
    },
    {
      index: '02',
      name: 'Zettelkasten',
      kicker: 'Built on the AgentX runtime',
      lede: "A note-taking app I built on top of AgentX — a React client over Turso/libSQL with auth, on Google Cloud. It's where I actually keep my notes; the agent searches and links them as I write.",
      callouts: [
        {
          key: 'RUNTIME',
          body: 'Runs on AgentX — the searchNotes / linkNotes calls in the screenshot are the runtime working.',
        },
        { key: 'DATA', body: 'Turso / libSQL persistence with token-based auth.' },
        { key: 'SHIP', body: 'Deployed on Google Cloud; live at adihex.github.io/zettel.' },
      ],
      stack: ['TypeScript', 'React', 'Turso / libSQL', 'GCP'],
      links: [
        { label: 'Live demo', href: 'https://adihex.github.io/zettel/' },
        { label: 'Source', href: 'https://github.com/adihex/agentx/tree/main/apps/zettel' },
      ],
      panel: 'screenshot',
      image: {
        src: '/assets/zettel-app.webp',
        alt: "The Zettelkasten client: a sidebar of linked notes (Apple Culinary Uses, Symbolism, Nutrition, Botany), a 'Capture a thought' bar, and the agent's searchNotes / linkNotes tool-calls running.",
        caption: 'zettelkattan · adihex.github.io/zettel',
      },
      flip: true,
    },
    {
      index: '03',
      name: 'simon',
      kicker: 'Terminal UI on the AgentX runtime',
      lede: "A system monitor that lives in a terminal pane: live CPU / memory / load telemetry beside an agent that can triage and act. Ask \"what's eating my memory?\" and it inspects processes, proposes a fix, and — only with your yes — kills the runaway. Built on AgentX, rendered with OpenTUI.",
      callouts: [
        {
          key: 'LIVE',
          body: 'Samples CPU, memory, load and uptime every 2s and draws them as sparklines and gauges — a monitor at rest should look at rest.',
        },
        {
          key: 'AGENT',
          body: 'The same AgentEventLoop streams answers and calls system tools (getTopProcesses, killProcess) on its own ADP port :9223.',
        },
        {
          key: 'SAFE',
          body: 'Read-only tools run freely; destructive ones (kill a PID, clean temp) are flagged amber and never fire without an explicit yes.',
        },
        {
          key: 'CALM',
          body: 'Color means severity, not decoration — healthy stays neutral, elevated goes amber, critical rose. Honors NO_COLOR end-to-end.',
        },
      ],
      stack: ['TypeScript', 'OpenTUI', 'React', 'AgentX core', 'Bun'],
      links: [
        { label: 'Source', href: 'https://github.com/adihex/agentx/tree/main/apps/simon-cli' },
      ],
      panel: 'simon',
    },
  ],

  experience: [
    {
      when: 'Oct 2024 — Present',
      current: true,
      role: 'Software Engineer, R&D',
      org: 'BlinqIO',
      orgNote: 'Bengaluru, IN',
      points: [
        "Founded BlinqIO's 20+ package TypeScript monorepo and the cloud platform under it — AWS EKS with Helm / ArgoCD and OpenTelemetry — the base every team now builds on.",
        "Scaffolded and led BlinqIO's cross-platform Electron desktop app as primary author — code-signed, notarized releases across macOS / Windows / Linux, three channels, and multi-channel auto-update.",
        'Engineered the core AI engine — a closed-loop, multi-agent planner–executor that turns natural-language intent into reliable browser automation, with observation-grounded verification that eliminates hallucinated checks.',
        'Architected sandboxed execution of untrusted user code (OS-level process isolation, capability-scoped APIs), unblocking a customer migration at 100% parity — and built the LLM eval suites (multimodal VLM judges plus property-based tests) that gate every model and prompt change in CI.',
      ],
    },
    {
      when: 'May — Jun 2023',
      role: 'Software Engineering Intern',
      org: 'Publicis Sapient',
      orgNote: 'Bengaluru, IN',
      points: [
        'Built ETL pipelines for a cloud Customer Data Platform (Azure, PySpark) and analytical dashboards for enterprise stakeholders. Offered a full-time SDE role on the strength of the work.',
      ],
    },
    {
      when: '2020 — 2024',
      role: 'B.Tech, Computer Science & Engineering',
      org: 'IIT Bhubaneswar',
      orgNote: 'Bhubaneswar, IN',
      points: [
        'Thesis: a searchable-encryption scheme over Ciphertext-Policy Attribute-Based Encryption (CP-ABE) that cuts average keyword-search time by 99.83% versus standard ABKS schemes.',
      ],
    },
  ],

  skills: [
    {
      key: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C / C++', 'Bash'],
    },
    {
      key: 'Frameworks',
      items: ['Node.js', 'Express', 'tRPC', 'Hono', 'React', 'Electron', 'OpenTUI', 'Playwright', 'Zod'],
    },
    {
      key: 'Cloud / data',
      items: [
        'AWS (EKS, S3)',
        'GCP',
        'Docker',
        'Kubernetes',
        'Helm',
        'ArgoCD',
        'Kafka',
        'OpenTelemetry',
        'PostgreSQL',
        'MongoDB',
        'Turso',
      ],
    },
    {
      key: 'AI / agents',
      items: [
        'AI agents',
        'Multi-agent orchestration',
        'Agentic loops',
        'LLM evaluation',
        'Prompt engineering',
        'MCP',
        'Vercel AI SDK',
        'Mastra',
        'Claude / OpenAI / Gemini',
      ],
    },
  ],

  archive: [
    {
      no: 'A1',
      name: 'Sorting Algorithm Visualizer',
      stack: 'HTML · CSS · JS',
      href: 'https://adihex.github.io/Sorting-Visualiser/',
      image: '/assets/sorting-visualizer.webp',
      alt: 'Sorting visualizer mid-sort: blue bars with one in red, sort-type buttons across the top.',
    },
    {
      no: 'A2',
      name: 'Chatty-Pete',
      stack: 'Next.js · MongoDB · GPT-3.5',
      href: 'https://github.com/adihex/chatty-pete',
      image: '/assets/chatty-pete.webp',
      alt: 'Chatty-Pete: a ChatGPT-style chat interface with a conversation sidebar.',
    },
    {
      no: 'A3',
      name: 'Food Ordering Website',
      stack: 'React · Express · MySQL',
      href: 'https://github.com/adihex/foodorderingwebsite',
      image: '/assets/food-ordering.webp',
      alt: 'Food ordering website storefront.',
    },
  ],

  notes: [
    {
      title: 'Why my agent runtime speaks a debugger protocol',
      date: 'Jun 2026',
      body: [
        'Most agent frameworks are black boxes: you hand them a prompt, they churn, and if something goes sideways mid-run your only recourse is a log file after the fact. I wanted to watch an agent think while it was still thinking.',
        "So AgentX exposes ADP — the Agent Debugger Protocol. It's a deliberate analog of the Chrome DevTools Protocol: an out-of-band WebSocket on :9222 speaking JSON-RPC 2.0, split into domains (Inference, Metacognition, Memory, Toolchain). You can Inference.halt a runaway generation, Metacognition.pause the loop and read its call frame, or Memory.compact the context — all against a live run.",
        "Keeping it out-of-band is the whole point. The agent's loop runs on Node's event loop; the debugger is just another client. Inspecting a run can't deadlock it. That separation is why pausing a live agent feels like setting a breakpoint, not pulling a plug.",
      ],
      href: 'https://github.com/adihex/agentx',
      hrefLabel: 'AgentX on GitHub',
    },
  ],
};

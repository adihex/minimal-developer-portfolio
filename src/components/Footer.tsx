const YEAR = 2026;

const CELLS: { k: string; v: string }[] = [
  { k: 'drawn by', v: 'Aditya Balakrishnan' },
  { k: 'sheet', v: '01 of 01' },
  { k: 'rev', v: `${YEAR}.06` },
  { k: 'set', v: 'portfolio' },
];

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot__inner">
        {CELLS.map((c) => (
          <div className="foot__cell" key={c.k}>
            <div className="foot__k">{c.k}</div>
            <div className="foot__v">{c.v}</div>
          </div>
        ))}
      </div>
      <div className="wrap foot__bar">
        <span>© {YEAR} Aditya Balakrishnan</span>
        <span>Hand-built in React + TypeScript — no UI kit, no template. The hero diagram is the real AgentX loop.</span>
      </div>
    </footer>
  );
}

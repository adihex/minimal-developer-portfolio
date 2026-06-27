import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import './styles/app.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element #root not found');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// for anyone who opens devtools — the hero really is the AgentX event loop.
console.log(
  '%c↳ hand-built, no template. the hero diagram is the real AgentX loop → github.com/adihex/agentx',
  'color:#b60010;font-family:monospace',
);

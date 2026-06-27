import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import { site } from './data/site';

afterEach(cleanup);

describe('<App />', () => {
  it('renders the name as the page h1 and shows the role', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.getAllByText(site.role).length).toBeGreaterThan(0);
  });

  it('renders a landmark section for every nav anchor', () => {
    const { container } = render(<App />);
    site.nav.forEach((n) => {
      const id = n.href.replace('#', '');
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    });
  });

  it('links to the résumé', () => {
    render(<App />);
    const links = screen.getAllByRole('link', { name: /résumé/i });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute('href', site.resumeHref);
  });

  it('lists every featured project', () => {
    render(<App />);
    site.projects.forEach((p) => {
      expect(screen.getByRole('heading', { name: p.name })).toBeInTheDocument();
    });
  });
});

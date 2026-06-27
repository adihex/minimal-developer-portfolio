import { describe, it, expect } from 'vitest';
import { site } from './site';

const isValidHref = (h: string): boolean =>
  h.startsWith('#') || h.startsWith('/') || h.startsWith('mailto:') || /^https?:\/\//.test(h);

describe('site data', () => {
  it('has core identity fields', () => {
    expect(site.name).toBeTruthy();
    expect(site.role).toMatch(/engineer/i);
    expect(site.email).toContain('@');
    expect(site.resumeHref).toMatch(/\.pdf$/);
  });

  it('exposes unique nav anchors', () => {
    const hrefs = site.nav.map((n) => n.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    hrefs.forEach((h) => expect(h.startsWith('#')).toBe(true));
  });

  it('has well-formed social links', () => {
    expect(site.social.length).toBeGreaterThan(0);
    site.social.forEach((s) => {
      expect(s.label).toBeTruthy();
      expect(s.value).toBeTruthy();
      expect(isValidHref(s.href)).toBe(true);
    });
  });

  it('has substantive featured projects with valid links', () => {
    expect(site.projects.length).toBeGreaterThanOrEqual(2);
    site.projects.forEach((p) => {
      expect(p.name).toBeTruthy();
      expect(p.lede.length).toBeGreaterThan(20);
      expect(p.callouts.length).toBeGreaterThan(0);
      expect(p.stack.length).toBeGreaterThan(0);
      expect(p.links.length).toBeGreaterThan(0);
      p.links.forEach((l) => expect(isValidHref(l.href)).toBe(true));
    });
  });

  it('has complete experience with exactly one current role', () => {
    expect(site.experience.length).toBeGreaterThan(0);
    site.experience.forEach((x) => {
      expect(x.role).toBeTruthy();
      expect(x.org).toBeTruthy();
      expect(x.points.length).toBeGreaterThan(0);
    });
    expect(site.experience.filter((x) => x.current).length).toBe(1);
  });

  it('populates skills, archive, and notes with valid links', () => {
    expect(site.skills.length).toBeGreaterThan(0);
    site.skills.forEach((g) => expect(g.items.length).toBeGreaterThan(0));
    site.archive.forEach((a) => expect(isValidHref(a.href)).toBe(true));
    site.notes.forEach((n) => expect(isValidHref(n.href)).toBe(true));
  });
});

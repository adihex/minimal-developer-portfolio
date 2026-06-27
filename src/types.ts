/** Shared content types for the portfolio. */

export interface NavLink {
  label: string;
  href: string;
}

export type SocialKind = 'github' | 'linkedin' | 'email' | 'resume' | 'site';

export interface SocialLink {
  kind: SocialKind;
  label: string;
  value: string;
  href: string;
}

export interface Callout {
  /** short mono key, e.g. "ADP" */
  key: string;
  body: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectPanel = 'terminal' | 'screenshot' | 'simon';

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  index: string;
  name: string;
  kicker: string;
  lede: string;
  callouts: Callout[];
  outcome?: string;
  stack: string[];
  links: ProjectLink[];
  panel: ProjectPanel;
  image?: ProjectImage;
  flip?: boolean;
}

export interface ExperienceItem {
  when: string;
  current?: boolean;
  role: string;
  org: string;
  orgNote?: string;
  points: string[];
}

export interface SpecGroup {
  key: string;
  items: string[];
}

export interface ArchiveItem {
  no: string;
  name: string;
  stack: string;
  href: string;
  image: string;
  alt: string;
}

export interface Note {
  title: string;
  date: string;
  body: string[];
  href: string;
  hrefLabel: string;
}

export interface SiteData {
  name: string;
  role: string;
  roleNote: string;
  location: string;
  coords: { lat: string; lon: string };
  email: string;
  resumeHref: string;
  social: SocialLink[];
  nav: NavLink[];
  projects: Project[];
  experience: ExperienceItem[];
  skills: SpecGroup[];
  archive: ArchiveItem[];
  notes: Note[];
}

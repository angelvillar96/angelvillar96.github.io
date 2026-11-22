export const projectGroups = ['research', 'other'] as const;

export type ProjectFile = {
  title: string;
  kicker: string;
  description: string;
  /** Optional link to the code or project page. */
  href?: string;
  group: (typeof projectGroups)[number];
  /** Optional figure in public/, e.g. "/images/publications/play-slot.webp" (research projects). */
  image?: string;
};

export type Project = ProjectFile & { slug: string };

export const publicationTypes = ['conference', 'journal', 'workshop', 'preprint', 'thesis'] as const;
export type PublicationType = (typeof publicationTypes)[number];

export const publicationLinkKeys = ['paper', 'arxiv', 'pdf', 'code', 'project', 'demo', 'video', 'poster', 'dataset', 'model'] as const;

export type PublicationLinks = {
  paper: string;
  arxiv?: string;
  pdf?: string;
  code?: string;
  project?: string;
  demo?: string;
  video?: string;
  poster?: string;
  dataset?: string;
  model?: string;
};

export type PublicationFile = {
  title: string;
  /** Full author names in order. Mark equal contribution with "*" and core contributors with "†". */
  authors: string[];
  /** Short venue label, e.g. "ICML 2025" or "arXiv 2026". */
  venue: string;
  /** Full venue name, e.g. "International Conference on Machine Learning (ICML)". */
  venueFull?: string;
  /** Used for the filters on the publications page. */
  type: PublicationType;
  /** Optional distinction such as "Oral" or "Best Paper Award". */
  highlight?: string;
  /** One or two plain sentences shown under the "TL;DR" button. */
  summary: string;
  image?: string;
  links: PublicationLinks;
  bibtex?: string;
  featured?: boolean;
};

export type Publication = PublicationFile & { slug: string; date: string; year: number };

export type NewsFile = {
  /** One-sentence update. Supports [links](https://…), **bold**, and *italic*. */
  text: string;
};

export type NewsItem = NewsFile & { slug: string; date: string; year: number };

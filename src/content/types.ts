export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  href: string;
  accent: 'blue' | 'green' | 'orange' | 'violet';
  group: 'research' | 'other';
};

export type BlogPostFile = {
  title: string;
  date: string;
  displayDate: string;
  description: string;
  tags: string[];
  body: string[];
  externalLink?: string;
  externalLabel?: string;
};

export type BlogPost = BlogPostFile & { slug: string; year: number };

export type PublicationFile = {
  title: string;
  authors: string;
  venue: string;
  tags: string[];
  paper: string;
  code?: string;
  project?: string;
  featured?: boolean;
};

export type Publication = PublicationFile & { year: number };

export type Experience = {
  period: string;
  role: string;
  place: string;
  location: string;
  description: string;
};

export type Education = {
  degree: string;
  place: string;
  detail: string;
};

export type Award = {
  year: string;
  title: string;
  detail: string;
};

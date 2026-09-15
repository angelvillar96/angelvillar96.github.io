export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  href: string;
  accent: 'blue' | 'green' | 'orange' | 'violet';
  group: 'research' | 'other';
  order: number;
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

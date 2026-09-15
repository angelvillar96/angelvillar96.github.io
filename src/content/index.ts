import type { Award, BlogPost, BlogPostFile, Education, Experience, Project, Publication, PublicationFile } from './types';

type JsonModule<T> = { default: T };

const projectFiles = import.meta.glob('./projects/*.json', { eager: true }) as Record<string, JsonModule<Project>>;
const blogFiles = import.meta.glob('./blog/*.json', { eager: true }) as Record<string, JsonModule<BlogPostFile>>;
const publicationFiles = import.meta.glob('./publications/*.json', { eager: true }) as Record<string, JsonModule<PublicationFile>>;
const experienceFiles = import.meta.glob('./experience/*.json', { eager: true }) as Record<string, JsonModule<Experience>>;
const educationFiles = import.meta.glob('./education/*.json', { eager: true }) as Record<string, JsonModule<Education>>;
const awardFiles = import.meta.glob('./awards/*.json', { eager: true }) as Record<string, JsonModule<Award>>;

const newestFirst = <T,>(files: Record<string, JsonModule<T>>) => Object.entries(files)
  .sort(([first], [second]) => second.localeCompare(first))
  .map(([, file]) => file.default);

const withoutDatePrefix = (path: string) => path
  .split('/')
  .pop()!
  .replace('.json', '')
  .replace(/^\d{4}-\d{2}-\d{2}-/, '');

export const projects = newestFirst(projectFiles);

export const posts: BlogPost[] = Object.entries(blogFiles)
  .map(([path, file]) => ({
    ...file.default,
    slug: withoutDatePrefix(path),
    year: Number(file.default.date.slice(0, 4)),
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const postCategories = ['All', 'Research', 'Projects', 'Tutorials', 'Life'] as const;

export const publications: Publication[] = Object.entries(publicationFiles)
  .sort(([first], [second]) => second.localeCompare(first))
  .map(([path, file]) => ({
    ...file.default,
    year: Number(path.split('/').pop()!.slice(0, 4)),
  }));

export const publicationYears = [...new Set(publications.map(({ year }) => year))];

export const experience = newestFirst(experienceFiles);
export const education = newestFirst(educationFiles);
export const awards = newestFirst(awardFiles);

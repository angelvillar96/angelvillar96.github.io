import type { BlogPost, BlogPostFile, Project } from './types';

type JsonModule<T> = { default: T };

const projectFiles = import.meta.glob('./projects/*.json', { eager: true }) as Record<string, JsonModule<Project>>;
const blogFiles = import.meta.glob('./blog/*.json', { eager: true }) as Record<string, JsonModule<BlogPostFile>>;

export const projects = Object.values(projectFiles)
  .map((file) => file.default)
  .sort((a, b) => a.order - b.order);

export const posts: BlogPost[] = Object.entries(blogFiles)
  .map(([path, file]) => ({
    ...file.default,
    slug: path.split('/').pop()!.replace('.json', ''),
    year: Number(file.default.date.slice(0, 4)),
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const postCategories = ['All', 'Research', 'Projects', 'Tutorials', 'Life'] as const;

import {
  projectGroups,
  publicationLinkKeys,
  publicationTypes,
  type NewsFile,
  type NewsItem,
  type Project,
  type ProjectFile,
  type Publication,
  type PublicationFile,
} from './types';

type JsonModule<T> = { default: T };
type Files<T> = Record<string, JsonModule<T>>;

const projectFiles = import.meta.glob('./projects/*.json', { eager: true }) as Files<ProjectFile>;
const publicationFiles = import.meta.glob('./publications/*.json', { eager: true }) as Files<PublicationFile>;
const newsFiles = import.meta.glob('./news/*.json', { eager: true }) as Files<NewsFile>;

const DATED_FILE = /^(\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01]))-([a-z0-9]+(?:-[a-z0-9]+)*)\.json$/;
const URL_OR_PATH = /^(https?:\/\/|\/)/;

/** Splits "2025-07-13-play-slot.json" into its date and slug, failing loudly on bad names. */
function parseFileName(path: string) {
  const name = path.split('/').pop()!;
  const match = name.match(DATED_FILE);
  if (!match) {
    throw new Error(`Content file "${path}" must be named YYYY-MM-DD-lowercase-words.json`);
  }
  return { date: match[1], slug: match[2], year: Number(match[1].slice(0, 4)) };
}

function fail(path: string, message: string): never {
  throw new Error(`Content file "${path}": ${message}`);
}

function requireText(path: string, value: unknown, field: string) {
  if (typeof value !== 'string' || value.trim() === '') fail(path, `"${field}" must be a non-empty string`);
}

const newestFirst = <T extends { date: string; slug: string }>(items: T[]) =>
  items.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

export const publications: Publication[] = newestFirst(
  Object.entries(publicationFiles).map(([path, file]) => {
    const data = file.default;
    requireText(path, data.title, 'title');
    requireText(path, data.venue, 'venue');
    requireText(path, data.summary, 'summary');
    requireText(path, data.links?.paper, 'links.paper');
    if (!publicationTypes.includes(data.type)) fail(path, `"type" must be one of: ${publicationTypes.join(', ')}`);
    if (!Array.isArray(data.authors) || data.authors.length === 0) fail(path, '"authors" must be a list of names');
    if (data.featured !== undefined && typeof data.featured !== 'boolean') fail(path, '"featured" must be true or false');
    for (const [key, value] of Object.entries(data.links)) {
      if (!(publicationLinkKeys as readonly string[]).includes(key)) {
        fail(path, `unknown link "${key}". Use: ${publicationLinkKeys.join(', ')}`);
      }
      if (typeof value !== 'string' || !URL_OR_PATH.test(value)) fail(path, `link "${key}" must start with https:// or /`);
    }
    return { ...data, ...parseFileName(path) };
  }),
);

export const news: NewsItem[] = newestFirst(
  Object.entries(newsFiles).map(([path, file]) => {
    const data = file.default;
    requireText(path, data.text, 'text');
    return { ...data, ...parseFileName(path) };
  }),
);

export const projects: Project[] = Object.entries(projectFiles)
  .map(([path, file]) => {
    const data = file.default;
    requireText(path, data.title, 'title');
    requireText(path, data.description, 'description');
    if (!projectGroups.includes(data.group)) fail(path, `"group" must be one of: ${projectGroups.join(', ')}`);
    if (data.href !== undefined && !URL_OR_PATH.test(data.href)) fail(path, '"href" must start with https:// or /');
    return { ...data, ...parseFileName(path) };
  })
  .sort((a, b) => b.date.localeCompare(a.date))
  .map(({ date: _date, year: _year, ...project }) => project);

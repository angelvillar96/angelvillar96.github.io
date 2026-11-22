import { site } from '../data/site';

const aliases = new Set<string>(site.authorAliases);
const markers = /[*†]+$/;

/** True if the author entry is one of your spellings (ignoring the * and † markers). */
export const isSelf = (author: string) => aliases.has(author.replace(markers, '').trim());

/** First author, equal contribution (*), or core contributor (†). */
export function isLeadAuthor(authors: string[]) {
  return authors.some((author, index) => isSelf(author) && (index === 0 || markers.test(author)));
}

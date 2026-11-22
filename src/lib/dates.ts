const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** "2026-10-31" → "Oct 2026" (or "October 2026"). Avoids Intl so server and browser output match. */
export function formatMonth(isoDate: string, style: 'short' | 'long' = 'short') {
  const [year, month] = isoDate.split('-').map(Number);
  return `${(style === 'long' ? MONTHS_LONG : MONTHS)[month - 1]} ${year}`;
}

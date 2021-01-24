/**
 * Capitalizes every word in a string.
 * @param {string} s
 */
export const capitalize = (s) =>
  s.trim().replace(/\w\S*/, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

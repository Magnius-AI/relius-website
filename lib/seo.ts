// SEO helpers.

/**
 * Trim a meta description to a sensible length on a word boundary.
 * Google typically displays ~155 chars; longer descriptions get truncated.
 */
export function clampDescription(input: string, max = 155): string {
  const s = input.trim().replace(/\s+/g, " ");
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…";
}

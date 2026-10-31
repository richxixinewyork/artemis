/**
 * Prefix an internal path with the deployment base path, so links work on
 * both https://user.github.io/ and https://user.github.io/repo/.
 *   url('/work/momo/') → '/repo/work/momo/'
 *   url('/#work')      → '/repo/#work'
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Render "*word*" as italic emphasis in headlines (content is trusted, from site.ts). */
export function emphasize(text: string): string {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/**
 * Font strategy: a premium system-native stack rather than a remote
 * Google Fonts fetch. This avoids an external network dependency (no
 * render-blocking third-party request, nothing to break if Google
 * Fonts is unreachable) and is the GDPR-safer default for an EU-facing
 * B2B site, since it fetches nothing from Google at request time.
 *
 * To switch to a licensed brand typeface later (e.g. self-hosted Inter
 * / Manrope woff2 files), drop the font files in `public/fonts/` and
 * declare them with `@font-face` in `globals.css`, then point the
 * `--font-sans` / `--font-display` variables there — no component code
 * needs to change, since every component reads the Tailwind
 * `font-sans` / `font-display` utility classes.
 */
export const FONT_SANS_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';

export const FONT_DISPLAY_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';

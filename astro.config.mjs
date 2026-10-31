// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * GitHub Pages URL handling
 * -------------------------
 * The site works in both GitHub Pages setups without editing this file:
 *
 *  1. User site    → repo named  USERNAME.github.io → https://USERNAME.github.io/
 *  2. Project site → any other repo name            → https://USERNAME.github.io/REPOSITORY/
 *
 * Inside GitHub Actions, GITHUB_REPOSITORY ("owner/repo") is read automatically.
 * To override (e.g. for a custom domain), set SITE_URL and BASE_PATH:
 *   SITE_URL=https://artemiswang.com BASE_PATH=/ npm run build
 */
function resolveDeployment() {
  if (process.env.SITE_URL) {
    return { site: process.env.SITE_URL, base: process.env.BASE_PATH ?? '/' };
  }
  const repo = process.env.GITHUB_REPOSITORY; // "owner/repo"
  if (repo) {
    const [owner, name] = repo.split('/');
    const userSite = name.toLowerCase() === `${owner.toLowerCase()}.github.io`;
    return {
      site: `https://${owner.toLowerCase()}.github.io`,
      base: process.env.BASE_PATH ?? (userSite ? '/' : `/${name}`),
    };
  }
  // Local development / preview
  return { site: 'http://localhost:4321', base: process.env.BASE_PATH ?? '/' };
}

const { site, base } = resolveDeployment();

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  image: {
    // Responsive images: generates srcset at sensible widths
    breakpoints: [480, 768, 1080, 1440, 1920],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

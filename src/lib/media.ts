import type { ImageMetadata } from 'astro';
import type { Project } from '../content/projects';

type Mod = { default: ImageMetadata };

// Picked up automatically at build time — just add files to these folders.
const portraitFiles = import.meta.glob<Mod>('/src/assets/portraits/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', { eager: true });
const projectFiles = import.meta.glob<Mod>('/src/assets/projects/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', { eager: true });
const logoFiles = import.meta.glob<Mod>('/src/assets/logos/*.{svg,png,webp,jpg,jpeg,SVG,PNG,JPG,JPEG}', { eager: true });

const baseName = (path: string) => path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase();

/** Portrait named e.g. hero.jpg or about.jpg in src/assets/portraits. */
export function getPortrait(name: 'hero' | 'about'): ImageMetadata | undefined {
  const entry = Object.entries(portraitFiles).find(([path]) => baseName(path) === name);
  return entry?.[1].default;
}

export type ProjectImage = { src: ImageMetadata; alt: string; caption?: string };

export function getProjectMedia(project: Project) {
  const files = Object.entries(projectFiles)
    .filter(([path]) => path.split('/').at(-2) === project.slug)
    .sort(([a], [b]) => a.localeCompare(b));

  const describe = ([path, mod]: [string, Mod]): ProjectImage => {
    const meta = project.images?.[baseName(path)];
    return { src: mod.default, alt: meta?.alt ?? `${project.org} — project image`, caption: meta?.caption };
  };

  const cover = files.find(([path]) => baseName(path) === 'cover');
  return {
    cover: cover ? describe(cover) : undefined,
    gallery: files.filter(([path]) => baseName(path) !== 'cover').map(describe),
  };
}

/** Optional authorized logo named after the project slug, e.g. src/assets/logos/momo.jpg */
export function getLogo(slug: string): ImageMetadata | undefined {
  return Object.entries(logoFiles).find(([path]) => baseName(path) === slug)?.[1].default;
}

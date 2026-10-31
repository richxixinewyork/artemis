import type { ImageMetadata } from 'astro';
import type { Project } from '../content/projects';

type Mod = { default: ImageMetadata };

// Picked up automatically at build time — just add files to these folders.
const portraitFiles = import.meta.glob<Mod>('/src/assets/portraits/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', { eager: true });
const projectFiles = import.meta.glob<Mod>('/src/assets/projects/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', { eager: true });
const logoFiles = import.meta.glob<Mod>('/src/assets/logos/*.{svg,png,webp,jpg,jpeg,SVG,PNG,JPG,JPEG}', { eager: true });
// Videos are copied as-is and served by URL (keep them short and compressed — under ~5 MB).
const videoFiles = import.meta.glob<string>('/src/assets/projects/*/*.{mp4,webm,MP4,WEBM}', { eager: true, query: '?url', import: 'default' });

const baseName = (path: string) => path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase();

/** Portrait named e.g. hero.jpg or about.jpg in src/assets/portraits. */
export function getPortrait(name: 'hero' | 'about'): ImageMetadata | undefined {
  const entry = Object.entries(portraitFiles).find(([path]) => baseName(path) === name);
  return entry?.[1].default;
}

export type ProjectImage = { src: ImageMetadata; alt: string; caption?: string };
export type ProjectMedia =
  | ({ type: 'image' } & ProjectImage)
  | { type: 'video'; src: string; poster?: ImageMetadata; alt: string; caption?: string };

/** Poster frames are named like the video plus ".poster", e.g. 02.mp4 + 02.poster.jpg */
const isPoster = (path: string) => baseName(path).endsWith('.poster');

export function getProjectMedia(project: Project) {
  const inProject = ([path]: [string, unknown]) => path.split('/').at(-2) === project.slug;
  const files = Object.entries(projectFiles)
    .filter(inProject)
    .filter(([path]) => !isPoster(path))
    .sort(([a], [b]) => a.localeCompare(b));
  const posters = Object.entries(projectFiles).filter(inProject).filter(([path]) => isPoster(path));
  const videos = Object.entries(videoFiles).filter(inProject);

  const describe = ([path, mod]: [string, Mod]): ProjectImage => {
    const meta = project.images?.[baseName(path)];
    return { src: mod.default, alt: meta?.alt ?? `${project.org} — project image`, caption: meta?.caption };
  };

  const cover = files.find(([path]) => baseName(path) === 'cover');
  const images = files
    .filter(([path]) => baseName(path) !== 'cover')
    .map((f): [string, ProjectMedia] => [baseName(f[0]), { type: 'image', ...describe(f) }]);
  const clips = videos.map(([path, src]): [string, ProjectMedia] => {
    const name = baseName(path);
    const meta = project.images?.[name];
    const poster = posters.find(([p]) => baseName(p) === `${name}.poster`)?.[1].default;
    return [name, { type: 'video', src, poster, alt: meta?.alt ?? `${project.org} — project video`, caption: meta?.caption }];
  });
  return {
    cover: cover ? describe(cover) : undefined,
    /** Images and videos together, ordered by file name (01, 02, …). */
    gallery: [...images, ...clips].sort(([a], [b]) => a.localeCompare(b)).map(([, m]) => m),
  };
}

/** Optional authorized logo named after the project slug, e.g. src/assets/logos/momo.jpg */
export function getLogo(slug: string): ImageMetadata | undefined {
  return Object.entries(logoFiles).find(([path]) => baseName(path) === slug)?.[1].default;
}

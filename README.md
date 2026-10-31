# Artemis Wang — Portfolio Website

A fast, static portfolio built with **Astro** and **Tailwind CSS**, hosted free on **GitHub Pages**.
Every piece of text, every link and every image can be changed without touching layout code.

```
src/
  content/site.ts        ← name, hero, about, timeline, education, contact, social links, impact numbers
  content/projects.ts    ← the five case studies (text, results, status)
  assets/portraits/      ← hero.jpg (required), about.jpg (optional)
  assets/projects/<slug>/← cover.jpg + 01.jpg, 02.jpg … for each project
  assets/logos/          ← project logos named by slug, e.g. momo.jpg
public/resume/           ← put the approved PDF résumé here
.github/workflows/deploy.yml ← automatic deployment to GitHub Pages
```

---

## 1. Run it on your computer

You need **Node.js 22 or newer** (24 LTS recommended) from <https://nodejs.org>. On an Apple-silicon Mac, install the **arm64** version.

```bash
npm install
```

```bash
npm run dev
```

Open <http://localhost:4321>. The page reloads as you edit files.

To test the final production version:

```bash
npm run build
```

```bash
npm run preview
```

---

## 2. Publish on GitHub Pages (free)

1. Create a GitHub account and a **new repository**. Choose the name:
   - `USERNAME.github.io` → site at `https://USERNAME.github.io/` (user site), **or**
   - any other name, e.g. `portfolio` → site at `https://USERNAME.github.io/portfolio/` (project site).

   You don't need to change any settings for either — `astro.config.mjs` detects which one you're using.
2. Upload this folder to the repository (GitHub Desktop is the easiest way, or):
   ```bash
   git init && git add . && git commit -m "Portfolio site" && git branch -M main
   ```
   ```bash
   git remote add origin https://github.com/USERNAME/REPOSITORY.git && git push -u origin main
   ```
   The raw résumés (`.docx`, the original PDF) and the original photo are excluded by `.gitignore` so they are **not** uploaded.
3. In the repository on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab. The "Deploy to GitHub Pages" workflow runs on every push to `main` (about 1–2 minutes). When it shows a green check, the site is live.

**Custom domain (optional):** add the domain under Settings → Pages, then in `.github/workflows/deploy.yml` uncomment the `env:` lines and set `SITE_URL` to your domain and `BASE_PATH` to `/`.

---

## 3. Updating content

| To change… | Edit |
| --- | --- |
| Hero name line, statement, intro; About lead & chapters; timeline; languages | `src/content/site.ts` |
| Email, LinkedIn, Instagram, RED, websites | `site.socials` and `site.contact` in `src/content/site.ts` |
| Impact numbers on the homepage | `impact` at the bottom of `src/content/site.ts` |
| Case studies | `src/content/projects.ts` |
| Hero headline emphasis | wrap a word in `*asterisks*` to set it in italic red |

**Social links:** a link appears on the site only when it has a real `url` **and** no `demo: true`. Paste the full profile address (e.g. `https://www.linkedin.com/in/…`) and delete `demo: true` to publish it. Never use a platform homepage as a placeholder.

**Résumé PDF:** copy the approved file to `public/resume/Artemis-Wang-Resume.pdf`, then in `site.ts` set
`resume.pdf: '/resume/Artemis-Wang-Resume.pdf'`. "Download PDF" buttons appear automatically.

**Project status:** each project has `status: 'completed' | 'ongoing' | 'in-development'`, shown as a label everywhere.

## 4. Adding photos

- **Portraits:** replace `src/assets/portraits/hero.jpg`. Add `about.jpg` to show a second portrait in About.
- **Project images:** drop files into `src/assets/projects/<slug>/` (`tantan`, `momo`, `missingcity`, `esoteric-studios`, `baoxiang`):
  - `cover.jpg` replaces the typographic cover on the homepage and case study.
  - `01.jpg`, `02.jpg`, … appear as a gallery on the case study.
  - Add alt text/captions in `projects.ts` → `images: { cover: { alt: '…' }, '01': { alt: '…', caption: '…' } }`.
- **Logos:** `src/assets/logos/<slug>.jpg` (or .png/.svg), e.g. `momo.jpg`, appears as a small tile on that project's cover and case-study header. Square images work best.

Use large JPGs (around 2000–2500px on the long side). The build automatically creates AVIF/WebP versions at several sizes and lazy-loads them. Only use real, authorized images; the site intentionally shows typographic covers until then.

---

## 5. Still needed before launch

**Confirm (site now follows the latest résumé, `Artemis_Wang Resume.pdf`)**
- [ ] **School name** for the Master in Art Business (New York, Aug 2026 – 2027) — not named in the résumé. Earlier drafts listed UIBE, Beijing. Set `education.school` in `site.ts`.
- [x] **Baoxiang** kept on the site as "In development" (it is not in the latest résumé PDF).
- [ ] **Phone number:** the downloadable PDF includes a phone number. Swap in a version without it if it shouldn't be public.
- [x] **Email** set to `Artemisnewyork@outlook.com`.
- [x] **Approved PDF résumé** published at `public/resume/Artemis-Wang-Resume.pdf`.

**Links (hidden on the site until real URLs are added)**
- [ ] LinkedIn profile URL
- [ ] Instagram profile URL
- [ ] Xiaohongshu / RED profile URL
- [ ] WeChat, Missingcity website/store, Esoteric Studios website — hidden until URLs are provided

**Media**
- [ ] Optional second portrait (`src/assets/portraits/about.jpg`) — appears beside the About story automatically
- [ ] Project covers and gallery images for each of the five projects. Until then each project shows a labelled "Project imagery forthcoming" placard. Suggested real materials: product screenshots or launch visuals (Momo / Tantan, if Hello Group permits), storefront and product photography (Missingcity, Esoteric Studios), concept sketches or candle prototypes (Baoxiang).
- [x] Logos for Tantan, Momo and Esoteric Studios (added)
- [ ] Optional logos for Missingcity and Baoxiang

**Optional**
- [ ] Custom domain

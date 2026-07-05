# Figure Skating Portfolio

A high-end static portfolio site for figure skater **Elise Vaurin**, built with the [taste-skill](https://github.com/leonxlnx/taste-skill) design principles and deployed via GitHub Pages.

## Live site

After enabling GitHub Pages (Settings → Pages → Source: **GitHub Actions**), the site publishes from the `docs/` folder on every push to `main`.

## Local preview

```bash
cd docs
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Structure

- `docs/index.html` - Main portfolio page
- `docs/css/styles.css` - Styles (cold luxury palette, scroll reveals)
- `docs/js/main.js` - Navigation, form validation, motion fallbacks
- `docs/assets/hero.mp4` - Hero background video
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Design notes

- **Design read:** Creative athlete portfolio for coaches and recruiters, cold luxury editorial language
- **Dials:** Variance 8 / Motion 7 / Density 3
- **Palette:** Off-black surface, silver typography, ice-blue accent
- **Hero:** Full-viewport video background with left-aligned copy

## Assets

Hero video sourced from [Pexels](https://www.pexels.com/video/man-practicing-figure-skating-6015961/) (free to use). Replace `docs/assets/hero.mp4` with your own footage when ready.

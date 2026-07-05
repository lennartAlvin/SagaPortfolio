# Figure Skating Portfolio

A high-end static portfolio site for figure skater **Elise Vaurin**, built with the [taste-skill](https://github.com/leonxlnx/taste-skill) design principles and ready for GitHub Pages.

## Live site

After enabling GitHub Pages (Settings > Pages > Source: **GitHub Actions**), the site publishes from the `docs/` folder on every push to `main`.

## Local preview

```bash
cd docs
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Structure

- `docs/index.html` - Main portfolio page
- `docs/css/styles.css` - Styles (cold luxury palette, responsive grids, reveal motion)
- `docs/js/main.js` - Navigation, form validation, motion fallbacks
- `docs/assets/hero.mp4` - Hero background video
- `docs/assets/hero-poster.jpg` - Hero poster and Open Graph image
- `docs/assets/*.svg` - Supporting portfolio visuals
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Design notes

- **Design read:** Athlete portfolio for coaches, media, and recruiters, cold luxury editorial language
- **Dials:** Variance 8 / Motion 6 / Density 4
- **Palette:** Off-black surface, silver typography, ice-blue accent
- **Hero:** Full-viewport video background with left-aligned copy and short calls to action

## Assets

Hero video and supporting visuals are local static assets under `docs/assets/`. Replace `docs/assets/hero.mp4` and `docs/assets/hero-poster.jpg` with production footage when ready.

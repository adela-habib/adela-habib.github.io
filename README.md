# Adela Habib — Personal Website (Jekyll + GitHub Pages)

This repository contains a Jekyll website designed for GitHub Pages hosting.

## Local development (view the site)

### Option A: Using GitHub Pages gem (recommended)
1. Install Ruby (and Bundler).
2. In the repo root:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
3. Open: http://localhost:4000

### Option B: Vanilla Jekyll
If you already have Jekyll installed:
```bash
jekyll serve
```

## Deploy (GitHub Pages)
- Push this repository to GitHub.
- In **Settings → Pages**, set the source to the `main` branch (root).
- GitHub Pages will build the Jekyll site automatically.

## Site structure
- `index.md`: landing page
- `projects.md`: project index
- `_projects/`: individual project pages (Markdown)
- `publications.md`: selected publications + scholar link
- `cv.md`: resume page (downloads `assets/AdelaHabib_Resume.pdf`)
- `_layouts/`, `_includes/`, `assets/css/style.css`: theme/layout

## Navigation
Use the top navigation bar:
- **Home**: overview + featured projects
- **Projects**: selected projects with technologies and links
- **Publications**: selected papers + Google Scholar
- **CV**: resume PDF + highlights

## Social icons
The home page includes icons linking to:
- LinkedIn: https://www.linkedin.com/in/adela-habib/
- GitHub: https://github.com/adela-habib
- Google Scholar: https://scholar.google.com/citations?user=yYTKXucAAAAJ&hl=en

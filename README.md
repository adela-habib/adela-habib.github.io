# Personal website (Jekyll)

This repository contains a Jekyll-based personal website for **Adela Habib**.

## How to view locally

### Option A (recommended): install Ruby + Bundler, then run Jekyll

1. Install **Ruby** and **Bundler** (see https://jekyllrb.com/docs/installation/).
2. From the repo root:

```bash
bundle install
bundle exec jekyll serve
```

Then open: http://localhost:4000

### Option B: view as static files

If you cannot run Jekyll locally, you can still browse the content by opening `_site/index.html` **after** running:

```bash
bundle exec jekyll build
```

## Site structure

- `index.md`: home page
- `about.md`: bio + links
- `projects.md`: projects index
- `publications.md`: selected publications
- `_projects/`: individual project pages (collection)
- `_layouts/`: HTML layouts
- `assets/css/site.css`: styling
- `assets/img/`: images (profile photo + project covers)

## Updating content

- Add/edit projects: create a new markdown file in `_projects/` with front matter fields like `title`, `subtitle`, `tech`, `links`, `cover`.
- Update social links in `_config.yml`.


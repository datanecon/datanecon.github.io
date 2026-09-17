# datanecon.org

Personal academic website of **David Angenendt** — [www.datanecon.org](https://www.datanecon.org).

Built with [al-folio](https://github.com/alshedivat/al-folio) (classic **v0.16.3**), a [Jekyll](https://jekyllrb.com/) theme, and deployed to **GitHub Pages** via GitHub Actions. Served over HTTPS on the custom domain.

---

## Editing the site

The source lives in this repo. You edit plain-text files (Markdown, YAML, BibTeX), optionally preview locally, then push — GitHub rebuilds and publishes automatically. Any editor works; [VS Code](https://code.visualstudio.com/) is a good choice (nice Markdown/YAML support + built-in Git buttons).

### 1. Edit
Change the relevant file — see [Which file for what](#which-file-for-what).

### 2. Preview locally (optional)
With [Docker Desktop](https://www.docker.com/products/docker-desktop/) running:

```bash
docker compose up
```

Open **http://localhost:8080/**. Content edits auto-refresh in the browser. Stop with `Ctrl+C`.

> ⚠️ Changes to `_config.yml` or `_data/*.yml` need a restart (`docker compose restart`) — they are **not** picked up by live-reload. Everything else reloads automatically.

### 3. Publish

```bash
git add -A
git commit -m "describe your change"
git push
```

The **Deploy site** GitHub Action rebuilds and publishes in ~2–3 minutes.

---

## Which file for what

| To change… | Edit… |
|---|---|
| Homepage bio / subtitle | `_pages/about.md` |
| News item (homepage) | add/edit `_news/announcement_N.md` (copy an existing one) |
| Blog post | add `_posts/YYYY-MM-DD-title.md` |
| A publication | the relevant file in `_bibliography/` — `papers.bib`, `working_papers.bib`, `other.bib` |
| CV PDF | overwrite `assets/pdf/cv-Angenendt.pdf` |
| Profile photo | `assets/img/prof_pic.png` |
| Social links / ORCID | `_data/socials.yml` |
| Co-author homepage links | `_data/coauthors.yml` |
| Colours / custom styling | `_sass/_custom.scss` |
| Site-wide settings (name, URL, etc.) | `_config.yml` |

---

## Conventions & notes

- **Publication order within a year** follows the order of entries in the `.bib` file — put a newer paper at the top of its year.
- In a `.bib` `author` field, include the **full** author list *including yourself* — the theme automatically omits your name and prefixes co-authors with "with". For crowd-sourced papers, use a `more_authors={N others}` field instead of listing everyone.
- Custom publication buttons supported by the theme override in `_layouts/bib.liquid` include: `doi`, `pdf`, `supp`, `slides`, `poster`, `code`, `blog`, `html`, `ssrn`, `nber`, `cepr`, `preprint`, `website`, plus a `summary` blurb (always shown) and `abstract` (behind the "Abs" toggle).
- For a quick one-off fix you can also edit a file directly on GitHub (open it → ✏️ → *Commit changes*); that triggers the same deploy, no local setup needed.

---

## Tech stack

- **Jekyll** + **al-folio** classic v0.16.3
- Local preview via **Docker** (`amirpourmand/al-folio` image, port `8080`)
- **Deploy:** GitHub Actions (`.github/workflows/deploy.yml`) builds the site and pushes it to the `gh-pages` branch, which GitHub Pages serves
- **Custom domain:** `www.datanecon.org` (root `CNAME` file + DNS at IONOS; apex `datanecon.org` redirects to `www`)

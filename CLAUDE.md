# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website of Jonas Petzke on GitHub Pages (jpetzke.github.io). Static HTML/CSS, no build step, no frameworks, no JS libraries.

- **Product truth** (audience, facts, privacy rules): `PRODUCT.md`
- **Visual system** (tokens, type, components): `DESIGN.md`

## Design

"Departure Timetable": the site reads like a printed station departure poster. Timetable yellow ground, one black ink, red only for interactive state and the clock colon. One self-hosted variable font (Archivo, width + weight axes). Facts are timetable rows: departure date, line code, destination, stops.

Do not reintroduce the old "Luxury Old Money" look, generic taglines, ornaments, icon-card grids or decorative motion.

## Files

```
.
├── index.html        # Home: departures (work, study, award, chess) + contact platforms
├── quicklinks.html   # "Connections: things I use"
├── 404.html          # GitHub Pages not-found page (absolute paths)
├── style.css         # All styles
├── clock.js          # Live CET clock in the top band (progressive enhancement)
├── fonts/archivo.woff2
├── favicon.svg / apple-touch-icon.png
└── google9fe705f59dff5a7b.html   # Search Console verification, keep
```

## Editing

- **New timetable row** (index.html): copy a `<tr class="print">` block, set `style="--i: n"` for the print-in order, use `<time class="dep">`, `<span class="line">`, `.dest`, `.stops > span`.
- **New quick link** (quicklinks.html): copy a row, increment the number in `.dep` and `--i`.
- Footer: `© <year> Jonas Petzke`. Update "Timetable valid from" when content changes.

## Privacy rules (hard)

No residence/town, no Instagram, no chess club link, no newspaper scans or photos of others. `.impeccable/` is gitignored because GitHub Pages publishes every committed file.

## Development

Open `index.html` directly or run `python3 -m http.server`. 404.html uses root-absolute paths and only renders correctly when served from the site root.

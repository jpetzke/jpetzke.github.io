---
name: jpetzke.github.io
description: A personal card set as a printed yellow departure timetable.
colors:
  yellow: "#f5ce1a"
  ink: "#111111"
  white: "#ffffff"
  red: "#d3231b"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "20cqi"
    fontWeight: 850
    lineHeight: 0.86
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 68"
  board-title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  clock:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 750
    lineHeight: 1
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 75"
  departure:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 70"
  destination:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 80"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.3
    fontVariation: "'wdth' 90"
  platform-label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 750
    lineHeight: 1.1
    fontVariation: "'wdth' 85"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "'tnum'"
  small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 750
    letterSpacing: "0.04em"
  line-code:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 110"
rounded:
  none: "0"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  line-code:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    typography: "{typography.line-code}"
    rounded: "{rounded.none}"
    padding: "5px 9px 4px"
  platform-row:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.platform-label}"
    rounded: "{rounded.none}"
    padding: "8px"
    height: "60px"
  platform-row-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  platform-number:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "44px"
  platform-number-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.red}"
  column-head:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "14px 16px 10px 0"
  timetable-cell:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "16px 16px 18px 0"
  text-link:
    textColor: "{colors.ink}"
  text-link-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  next-link:
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    height: "44px"
---

# Design System: jpetzke.github.io

## Overview

**Creative North Star: "The Printed Departure Timetable"**

The site is a station's printed departure sheet. Every fact about the person is a scheduled line: a departure date, a boxed line code, a destination in heavy condensed type, and its stops. The page title is the board header ("Departures", or "Connections" on the sub-page), a live clock sits opposite it, and the person's name is the station, set huge and condensed across the full sheet width. Ways to get in touch are numbered platforms.

The world is one sheet of yellow paper printed in one black ink. Columns are divided by black rules of three weights, never by boxes, cards or shadows. Red is the only other ink, and it appears only on things that move or respond: the blinking colon of the clock, the fill behind a hovered link, the focus outline. One self-hosted variable grotesk carries every word, using its width axis the way a sign painter uses condensed and extended cuts of one face. It refuses the centered hero with icon-card grid and tagline, and it refuses the dark developer-terminal look.

Density is low and rhythmic: few rows, each given generous vertical padding and closed by a hairline. On narrow screens the table does not shrink; it restacks into a single timetable column.

**Key Characteristics:**
- Total yellow: the sheet background is yellow edge to edge, on every page including 404.
- One black ink for type, rules and line-code chips; white only inside platform number boxes and as text on red.
- Red rationed to motion and interaction.
- One variable family (Archivo), weights 400 to 850, widths 68% to 125%, tabular numerals throughout.
- Structure by ruled columns: heavy rule under the board header, medium rules opening and closing blocks, hairlines between rows.
- Square corners everywhere; flat, no shadows.
- One orchestrated motion: rows print in left to right on load.

## Colors

A two-ink print palette: one strong yellow paper, one near-black ink, with white and red held back for small, specific jobs.

### Primary
- **Timetable Yellow** (`yellow`): the paper. Background of `html`, `body` and the whole sheet on every page, the browser `theme-color`, the favicon ground, and the text color inside black line-code chips. Nothing sits on a different surface color.

### Secondary
- **Signal Red** (`red`): the moving ink. Used only for the clock's blinking colon, the fill behind any hovered link (with white text), the numeral inside a hovered platform box, and the 3px focus outline. It reaches 5.2:1 against white but only 3.4:1 against yellow, so on yellow it is limited to large display type (the clock colon) and non-text indicators (the focus ring).

### Neutral
- **Board Ink** (`ink`): all text, every rule, the stop-separator squares, line-code chip fills, the platform box border, and the text selection fill (with yellow text). 12.3:1 on yellow.
- **Platform White** (`white`): the fill of the 44px platform number boxes, and the text and underline color on a red hover fill. Never a page, section or card surface.

### Named Rules
**The One Ink Rule.** Everything static is printed in Board Ink on Timetable Yellow. If a static element needs emphasis, use weight, width or a ruled line, not a new color or tint.

**The Red Moves Rule.** Red marks only what moves or responds: the clock colon, hover fills, focus. A red element that does neither is a defect.

**The No Paper Change Rule.** The page never switches surface color. No white cards, no grey panels, no dark sections, no dark mode (`color-scheme: light`).

## Typography

**Display Font:** Archivo variable (self-hosted `fonts/archivo.woff2`, weight 100–900, width 62–125%), falling back to Helvetica Neue, Arial, sans-serif
**Body Font:** the same Archivo file
**Label/Mono Font:** the same Archivo file, with tabular numerals set on `body`

**Character:** One grotesk stretched between extremes. Expanded heavy for the board header, condensed heavy for the station name and departure times, normal width for reading text: the contrast comes from the width axis, not from a second family.

### Hierarchy
- **Display** (850, `20cqi` of the station block, 0.86, width 68%): the station name only, the person's name on home, the page name on Connections and 404. Sized by container query so it always spans the sheet; `text-wrap: balance`.
- **Board title** (850, clamp 1.75–2.75rem, 1, width 125%): the band header word, "Departures" or "Connections".
- **Clock** (750, same size as board title, width 75%): live Berlin time, right of the board title, tabular.
- **Departure** (850, clamp 2–3.25rem, 0.95, width 70%): the date column of each timetable row (`09/2025`, `2014`); never wraps.
- **Destination** (800, clamp 1.5–2.25rem, 1.05, width 80%): the main line of each row; max 30ch, balanced.
- **Lead** (500, clamp 1.375–1.875rem, 1.3, width 90%): the one introductory sentence under the station name; max 34ch.
- **Platform label** (750, 1.25rem, 1.1, width 85%): the contact name in each platform row.
- **Body** (400–450, 1.0625rem, 1.45): stops under a destination (weight 450, max 68ch) and default text.
- **Small** (400, 0.9375rem): platform detail line, footer notes and the next/back link (which is set 750, width 90%).
- **Label** (750, 0.9375rem, letter-spacing 0.04em, uppercase): table column heads ("Dep.", "Line", "Destination") and the Platforms list heading.
- **Line code** (800, 0.875rem, 1, letter-spacing 0.08em, width 110%, uppercase): text inside the black line-code chip.

### Named Rules
**The One Family Rule.** Archivo is the only typeface. Hierarchy comes from width (68–125%) and weight (400–850), never from a second family, italics or a mono face.

**The Tabular Rule.** Numerals are tabular everywhere (`font-variant-numeric: tabular-nums` on `body`), so dates and the clock align like a printed schedule.

**The Caps Are Furniture Rule.** Uppercase tracked type is reserved for timetable furniture: column heads and line codes. It is never used for sentences or as a decorative label above a headline.

## Layout

A single sheet, max 1280px wide, centered, with a fluid side gutter (`gutter`) and 40px bottom padding. Three stacked blocks:

1. **Band**: flex row, board title left, clock right, baselines aligned; 28px top and 12px bottom padding (20px top on narrow screens), closed by the heavy rule.
2. **Station block**: a two-column grid, flexible main column plus a 260–340px platform column, gaps 16px vertical and 56px horizontal; 24px top, 28px bottom padding, closed by a medium rule. The station name spans both columns; the lead sentence sits under it on the left, the platform list on the right. It is a size container (`container-type: inline-size`) so the display type scales with it.
3. **Timetable**: a real `<table>`, full width, columns Dep. (11rem) / Line (9rem) / Destination (rest). Cells are top-aligned with 16px right padding and 16px/18px vertical padding. Connections drops the Dep. column.

A footer row of notes follows: flex, wrapping, space-between, 14px top padding.

**Responsive (≤760px):** the station grid collapses to one column (20px gap, 24/32px padding), placing platforms under the lead. The table header is visually hidden; each row becomes a two-column grid with departure and line code on one baseline (14px column gap) and the destination cell spanning below with 10px top margin. Rows keep their hairline divider; the last row keeps the medium closing rule.

Spacing is set by hand per block rather than from a strict scale; 8px, 16px and 24px are the steps that recur.

## Elevation & Depth

Completely flat. There are no shadows, gradients, blurs or overlapping layers anywhere. Depth and grouping come from ruled lines of three weights and from the black line-code chips, which read as printed blocks rather than raised objects. Hover changes fill color, not elevation; nothing lifts, scales or casts.

### Named Rules
**The Printed Sheet Rule.** If it could not be printed in one pass of black ink on yellow paper, it does not belong at rest. State changes may add red fills; they never add shadows or movement in z.

## Shapes

Every corner is square (`rounded.none`): chips, platform boxes, focus outlines, hover fills. Form is built from rules:

- **Heavy rule** (6px solid ink): only under the band header.
- **Medium rule** (2px solid ink): closes the station block, opens the platform list, sits under column heads, closes the last timetable row, and borders the platform number boxes.
- **Hairline** (1px solid ink): between timetable rows and between platform rows.

The stops separator is a small filled ink square (0.4em), not a bullet glyph or dot. The two footer arrows are inline SVG strokes (2.5 stroke width, `currentColor`). The favicon repeats the sheet: yellow ground, one heavy bar, three lighter lines.

## Components

### Line Code Chip
Boxed timetable line code, the world's signature mark.
- **Shape:** square, inline-block, padding 5px 9px 4px.
- **Color:** ink fill, yellow text, line-code type (uppercase, tracked 0.08em, width 110%).
- **Use:** one per row, naming the category of the line (Work, Study, Award, Chess on home; AI, Privacy on Connections). 6px top margin on desktop to sit on the departure's cap line; none on narrow screens.
- **States:** none; it is not interactive.

### Platform Row (contact links)
A numbered platform sign that is one large link.
- **Structure:** grid of a 44px number box plus a two-line label (platform label + small detail); min height 60px, 8px padding, bleeding 8px left and right so the hover fill extends past the text edge; 14px gap.
- **Number box:** 44×44px, white fill, 2px ink border, numeral 850 at 1.5rem, width 80%; `aria-hidden` (the label carries meaning).
- **List:** opened by a medium rule, each row closed by a hairline, headed by a Label ("Platforms").
- **Hover:** the row fills red with white text; the number box keeps its white fill, the numeral turns red and the border turns white.
- **Focus:** global 3px red outline, 3px offset.
- **Responsive:** right column on desktop, under the lead sentence on narrow screens.

### Timetable Row
- **Cells:** departure (Departure type, no wrap), line code chip, destination cell containing the destination line and an optional stops line.
- **Stops:** body text at weight 450, items separated by the ink square; max 68ch.
- **Dividers:** hairline under each row, medium rule under the last.
- **Links inside a destination:** standard text links; on Connections the whole destination line is the link.

### Text Links
- **Default:** ink text with a 2px underline at 0.2em offset.
- **Hover:** red fill behind the text, white text, white underline. Applies to inline links, destination links, platform rows and the next/back link alike.
- **Focus:** 3px red outline, 3px offset. Selection: ink fill, yellow text.

### Next / Back Link
Footer navigation between home and Connections (and from 404 back home).
- **Style:** inline-flex, 44px min height, 10px gap, 750 weight at width 90%, underlined, with a 1.1em inline SVG arrow (right-pointing after the text for "next", left-pointing before it for "back").

### Station Clock
- **Style:** Clock type, right end of the band, tabular. The colon is red and blinks on a 2s step cycle (off for half the cycle).
- **Behaviour:** rendered hidden and revealed by script; shows Europe/Berlin time in 24h format, refreshed every 10s. The page is complete without it. Under reduced motion the colon stops blinking. Not shown on 404.

### Row Print-In (motion)
The one orchestrated moment. Elements marked to print (station name, lead, platform list, each timetable row) reveal left to right: `clip-path` from fully clipped on the right to open, plus a 12px slide from the left, 700ms on the `ease-out` curve, staggered 120ms + 90ms per item index. Only under `prefers-reduced-motion: no-preference`; otherwise everything is simply present. Nothing else on the page animates on load or scroll.

## Do's and Don'ts

### Do:
- **Do** keep Timetable Yellow as the only surface on every page, including error pages.
- **Do** express every fact as a timetable row: departure, line code, destination, stops.
- **Do** separate blocks with the three rule weights (6px under the band only, 2px to open and close blocks, 1px between rows).
- **Do** get hierarchy from Archivo's width and weight axes; use condensed heavy for names and dates, extended heavy only for the board title.
- **Do** keep red to the clock colon, hover fills and the focus outline; put white text on red, never red text on yellow below display size.
- **Do** keep every new animated element inside the print-in grammar (left-to-right clip reveal, 90ms stagger) and behind `prefers-reduced-motion: no-preference`.
- **Do** restack, not shrink, below 760px: departure and line code on one line, destination below.
- **Do** keep tap targets at least 44px (platform rows 60px, next/back links 44px).

### Don't:
- **Don't** add a second typeface, an italic or a monospace face.
- **Don't** introduce rounded corners, shadows, gradients or blurred layers.
- **Don't** put content on white or grey cards or panels; white exists only in platform number boxes and as text on red.
- **Don't** use red for static decoration, body text or headings.
- **Don't** use uppercase tracked labels as kickers or eyebrows above headlines; caps belong to column heads and line codes.
- **Don't** use a centered hero, icon-card grids or taglines; the station name and the timetable are the page.
- **Don't** use icon fonts or glyph bullets; separators are ink squares and the only icons are inline SVG arrows.
- **Don't** add a dark mode or dark sections.

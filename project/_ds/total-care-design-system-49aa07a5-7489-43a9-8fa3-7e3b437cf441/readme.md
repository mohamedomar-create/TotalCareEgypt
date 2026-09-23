# Total Care Design System

**Total Care Egypt** (totalcareegypt.com) is an Egyptian healthcare / medical-supplies company. The brand identity — logo, colours, type, stationery, graphic element and advertising templates — was designed by the agency **BABEL**. This design system turns that identity into tokens, components, slide layouts and collateral recreations so agents can produce on-brand decks, documents, proposals and screens.

There is no software product in the sources: the brand lives on **presentations, letters/Word documents, stationery and social-media posts**. The kits here mirror those surfaces.

## Sources (attached folder `New TC Logo/`)
- `Total Care Brand Guidelines.pdf` — 25-page identity guide (logo construction, misuse, primary + secondary colours, typography, stationery, graphic element, social templates). All text is outlined, so values were read visually. Page renders: `source/guide/`.
- `Total Care Presentation Template.pptx` — 18-slide Google-Slides-origin template (Raleway + Lato embedded). Layout geometry, theme colours and all photography were extracted from it.
- `Word Template.docx`, `Letter Footer , Header.docx` — letter header (logo) + footer (grey pulse rule).
- `Logo Digital.png / .jpg`, `Logo Print.jpg`, `Total Care Logo Vector.ai`, `Business Card.psd`, `Envelope.psd`, `Letter Head.psd`, `Visa.docx` — logo files and stationery sources (PSD/AI not parsed).
Copies of the PDF, PPTX and DOCX are kept in `source/`.

---

## CONTENT FUNDAMENTALS
- **Language:** English first; Arabic is a first-class second script (Omar typeface). Egyptian market — use EGP, Egyptian place names, local institutions.
- **Voice:** calm, clinical, reassuring and competent. Short declarative sentences. Speak as **we** (Total Care) to **you** (hospital, clinic, procurement team).
- **Headlines:** slogan-like and values-led, often set in UPPERCASE display type — examples from the guideline ad templates: "HEALTH CARE IS A RIGHT NOT A PRIVILEGE", "HEALTH COMES FIRST".
- **Deck titles:** short Title-case nouns — "Overview", "Problems to solve", "Market trends", "Target audience", "Deliverables", "Vision", "Team", "Thank you."
- **Section openers:** number + one or two words in caps — "1 LOGO", "2 BRAND COLORS", "3 TYPOGRAPHY".
- **Numbers:** big and bare — "45K", "690K", "100K"; numbered items use "01 | …" with a blue number and a pipe.
- **Casing:** UPPERCASE for display headlines, labels, buttons and section titles; sentence/Title case for body and deck titles.
- **No emoji.** No exclamation-heavy marketing tone. No unicode pictograms.

## VISUAL FOUNDATIONS
- **Colour:** four primaries — Total Red `#EE2F35`, Total Blue `#438EAB`, Black `#171717`, White. Red is the loud colour: section grounds, CTAs, the pulse, contact text on stationery. Blue carries the logotype, numbers, stats, list numerals and the contents slide. Secondary colours come only as **gradient pairs**: warm `#ED722E → #EE2F35` (social posts, business card, stationery backdrop) and cool `#438EAB → #2F41AC`. Neutrals from the PPTX theme: ink `#1A1A1A`, body grey `#595959`, label grey `#666666`, mist `#E9EDEE` (header bands, chart panels, process tiles).
- **Type:** Circular Std (Book/Medium/Black) is the primary family; Code Pro (Regular/Bold LC/Black LC) is the geometric display face used in caps; Omar is the Arabic family. The official PPTX actually uses **Raleway Bold** titles + **Lato** body — the deck layouts follow that.
- **Graphic element — the pulse:** the heartbeat line from the logo's "A". Used solid red/blue as an accent above slide titles, as outline strokes, and oversized at ~14% white on red grounds as a watermark cropping off the edges. Grey version as a letter-footer rule.
- **Backgrounds:** flat white or mist for content; solid red for chapter dividers; solid blue for contents; black for statements; full-bleed photography for section/title/closing slides. No textures, no patterns, no illustrations. Gradients only the warm/cool brand pairs.
- **Imagery:** bright, high-key clinical photography — white coats, blue gloves, blue scrubs, masks, microscopes, cool white/pale-blue backgrounds, smiling clinicians. Cool colour temperature, no grain, no duotone.
- **Corners:** square. The logotype is slanted and hard-edged; slides, photos, tiles, buttons and cards all have 0 radius. Exceptions: numbered circles, radio dots, and pill filter tags.
- **Borders:** 1px hairlines (`#D5DBDD`) only when a surface needs separating; 1px grey vertical rules between stat columns; thin blue rule next to the logo on letterhead.
- **Shadows:** none on flat design. `--shadow-float` for dialogs/menus/toasts and hover-lift on clickable cards; `--shadow-paper` only for physical mock-ups (letterhead, cards).
- **Cards:** white with hairline, or mist with no border; photo on top; blue uppercase eyebrow; caps display title. No left-border accent cards.
- **Layout:** generous left margin (~8% / 102px @1280); header band 68px tall with "Total Care Egypt" left and logo right; pulse sits above the title; photos in tall portrait columns on the right half; slide number bottom-right.
- **Transparency/blur:** only as protection gradients on photos (dark bottom fade behind white names; white left fade behind a title). No glassmorphism.
- **Motion:** minimal. 120–200ms colour transitions with `cubic-bezier(.2,.7,.2,1)`; no bounce. Hover = darker fill (red → `#C9232A`, blue → `#357590`) or mist/tint background for ghost items; press = 1px downward nudge.
- **Logo rules (guidelines p.03–04):** colour logo on white/light; white logo on red, blue, black; do not stretch, recolour, outline, add shadow, rotate, or place on busy photos.

## ICONOGRAPHY
- The brand ships **no icon set**, icon font or pictograms; the only recurring symbol is the pulse graphic element (`assets/pulse-red.png`, `assets/pulse-rule-grey.png`).
- For UI needs we **substitute Lucide** (2px stroke line icons, loaded from CDN `lucide-static@0.456.0`) via the `Icon` component, tinted single-colour (blue or ink). Use sparingly — slides and collateral rely on photography and numbers, not icons.
- No emoji; no unicode symbols as icons (the "×" close glyph in Dialog/Toast/Tag is the one exception).

---

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`
- `assets/` — `logo-digital.png` (5000px colour), `logo-color.png`, `logo-white.png`, `logo-print.jpg`, `pulse-red.png`, `pulse-rule-grey.png`, `imagery/` (16 photos from the PPTX)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), one card per folder
- `slides/` — 15 slide layouts at 1280×720 (`slide.css` shared chrome) + `index.html` overview
- `ui_kits/stationery/` — letterhead, business cards, envelope, social posts (interactive)
- `source/` — original PDF / PPTX / DOCX and guideline page renders
- `SKILL.md` — agent-skill entry point

## Components
- **brand/** — Logo, PulseLine, SectionDivider, Icon
- **actions/** — Button, IconButton
- **forms/** — Input, Select, Checkbox, Radio, Switch
- **display/** — Card, Badge, Tag, StatBlock, ProgressBar, NumberBadge
- **navigation/** — Tabs
- **feedback/** — Dialog, Toast, Tooltip

No source defines a UI component library, so this is an authored standard set. **Intentional additions** drawn from the brand sources: PulseLine (graphic element), SectionDivider (guideline chapter pages), StatBlock (Deliverables slide), ProgressBar (skill-bar slides), NumberBadge (Problems slide). Icon wraps the Lucide substitute set.

## Fonts — substitutions (action needed)
Circular Std, Code Pro and Omar files were not supplied. Token stacks keep the brand names first and fall back to Google Fonts: **Figtree** (for Circular Std), **Questrial** (for Code Pro), **Tajawal** (for Omar). Raleway + Lato are the real fonts from the PPTX. Upload licensed font files to replace the substitutes.

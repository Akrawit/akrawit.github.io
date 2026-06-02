# Pokemon Portfolio Redesign — Design Spec
**Date:** 2026-06-01  
**Status:** Approved

---

## Overview

Redesign `akrawit.github.io` from its current modern blue/white aesthetic to a full Pokemon FireRed/LeafGreen 8-bit game UI. Every section maps to a Pokemon game screen. The goal is full immersion — consistent pixel language throughout, not a skin on top of the existing design.

---

## Design Decisions

| Decision | Choice |
|---|---|
| Style | Pokemon GBA — Trainer Card layout |
| Palette | FireRed/LeafGreen (cream `#f5e8d0`, red `#cc2200`, black borders) |
| Section mapping | Pokedex Approach |
| Profile photo | Real photo with CSS pixelation filter |
| Font | Press Start 2P (Google Fonts) |
| Approach | Full Immersion — rebuild all CSS from scratch |

---

## Color Palette

```
--poke-bg:        #f5e8d0   /* warm cream — page background */
--poke-white:     #ffffff   /* card/panel background */
--poke-red:       #cc2200   /* primary accent — headers, buttons, badges */
--poke-red-dark:  #aa1100   /* hover state */
--poke-green:     #336600   /* secondary accent — education, alt buttons */
--poke-blue:      #1a3a8c   /* tertiary — social buttons, education headers */
--poke-gold:      #b8860b   /* Hall of Fame — borders, stars */
--poke-gold-light:#ffd700   /* Hall of Fame — highlights */
--poke-black:     #000000   /* all borders */
--poke-dark:      #1a1a1a   /* Hall of Fame background */
--poke-text:      #000000   /* body text */
--poke-muted:     #666666   /* secondary text (periods, IDs) */

/* Stat bar colors (one per skill) */
--bar-csharp:     #cc2200
--bar-java:       #1a3a8c
--bar-js:         #b8860b
--bar-htmlcss:    #336600
--bar-sql:        #6a2a9e
--bar-ts:         #006080
```

---

## Typography

- **Font family:** `'Press Start 2P', 'Courier New', monospace`
- **Loaded via:** Google Fonts in `pages/_app.js` — replace the existing Inter `<link>` with Press Start 2P
- **No border-radius anywhere** — pixel art is square
- **All borders:** `2px solid #000` (UI elements) or `3px solid #000` (cards/panels)
- **Line height:** 1.8–2.0 for the small font to remain readable

---

## Section Designs

### 1. Hero — Trainer Card (`pages/header/header.js`)

Replaces the current particles + centered name layout.

**Structure:**
```
┌─ TRAINER CARD ──────────── ID NO. 00001 ─┐  ← red topbar
│ ┌──────────────────────────────────────┐  │
│ │ [PHOTO] │ AKRAWIT                    │  │  ← white card, 3px border
│ │ pixel   │ STAFF SOFTWARE ENGINEER    │  │
│ │ filter  │ [BACKEND] [FULLSTACK]      │  │
│ │         │ ID: AKRAWIT-S · LVL 99     │  │
│ └──────────────────────────────────────┘  │
│ ┌──────────┐ ┌────────────┐              │
│ │▶ SKILLS  │ │ WORK EXP   │              │  ← 2×2 nav menu
│ └──────────┘ └────────────┘              │
│ ┌──────────┐ ┌────────────┐              │
│ │  CERTS   │ │  CONTACT   │              │
│ └──────────┘ └────────────┘              │
│ ┌──────────────────────────────────────┐  │
│ │ Staff SWE passionate about building  │  │  ← dialogue box
│ │ innovative solutions.              ▼ │  │
│ └──────────────────────────────────────┘  │
│  [▶ LINKEDIN]  [▶ GITHUB]                │
└───────────────────────────────────────────┘
```

**Profile photo treatment:**
- Keep `<img src="/profile.jpg">` but apply CSS:
  ```css
  image-rendering: pixelated;
  filter: contrast(1.1) saturate(0.7);
  ```
- Overlay a pixel grid using `::after` pseudo-element with `background-image: linear-gradient` at 9×9px intervals

**Remove:** `particles-bg` package — replace with a CSS pixel scanline/dot pattern on the section background using `background-image: radial-gradient` at 4px intervals

**Nav buttons:** anchor links — SKILLS → `#skills`, WORK EXP → `#experience`, CERTS → `#certificates`, CONTACT → `#social` (scrolls to the LinkedIn/GitHub row at the bottom of the hero). No JS routing needed.

**Blinking cursor:** CSS `@keyframes blink` on a `▼` span inside the dialogue box

**Type badges:** BACKEND (red), FULLSTACK (green), RUNNER (blue) — derived from bio, not data-driven

---

### 2. Experience & Education — Pokedex Entries (`pages/experience/experience.js`)

Each job/education item becomes a Pokedex entry card.

**Work entry structure:**
```
┌─ #001 AGODAMON ──────────── 2024–NOW ──┐  ← red header
│ [LOGO] STAFF SOFTWARE ENG              │
│  48×48  AGODA SERVICES                 │
│  border MAR 2024 – PRESENT             │
│         A rare species found deep in   │
│         Agoda's distributed systems.   │
└─────────────────────────────────────────┘
```

**Numbering:** Work entries #001–#00N, education entries #E01–#E0N (derived from array index)

**Pokedex description:** A short fun flavour text line added to each `experienceData` entry as a new `flavor` field. Example: `"A rare species found deep in Agoda's distributed systems."` — flavour text for all 8 entries (6 work + 2 education) will be written during implementation.

**Education entries:** Same structure but blue header (`#1a3a8c`) instead of red

**Company logos:** Existing `/agoda.png`, `/wongnai.png`, etc. — apply same pixelation CSS as profile photo

**Section headers:**
```
┌─ EXPERIENCE ───────────── SEEN: 6 ─┐  ← red bar
┌─ EDUCATION ────────────── SEEN: 2 ─┐  ← blue bar
```

---

### 3. Skills — Base Stats (`pages/skill/skill.js`)

Replaces the current circular progress rings with Pokemon stat bars.

**Structure:**
```
┌─────────────────────────────────────────┐
│ 🧑‍💻  AKRAWIT                           │
│      [BACKEND] [FULLSTACK]              │
├─────────────────────────────────────────┤
│ C#     ████████████████░░░░  80         │
│ JAVA   ██████████████░░░░░░  70         │
│ JS     ████████████░░░░░░░░  60         │
│ HTML/  ████████████░░░░░░░░  60         │
│ CSS                                     │
│ SQL    ██████████░░░░░░░░░░  50         │
│ TS     ██████████░░░░░░░░░░  50         │
└─────────────────────────────────────────┘
```

**Bar colors:** Each skill has a distinct color (see palette above)  
**Value:** `skillValue * 100` displayed as integer to the right  
**Background:** light blue `#e8f0f8` (like the in-game stats screen)

---

### 4. Certificates — Hall of Fame (`pages/certificate/certificates.js`)

Dark background, gold borders — like the Pokemon Hall of Fame screen after beating the Elite Four.

**Structure:**
```
┌─ ★ HALL OF FAME ★ ──────────────────────┐  ← gold header on dark bg
│           ★ ★ ★ ★ ★                    │
│ ┌─────────────────────────────────────┐  │
│ │ [CERT IMG] CERTIFICATE NAME         │  │  ← gold-border entry
│ │            STATUS: COMPLETED        │  │
│ └─────────────────────────────────────┘  │
└───────────────────────────────────────────┘
```

**Background:** `#1a1a1a` (dark, contrasts rest of cream page)  
**Certificate image:** existing `/cer1.png` displayed in a `64×48` gold-bordered frame

---

## Global CSS Changes (`styles/globals.css`)

- Replace all CSS variables with the Pokemon palette above
- Change `body` font to Press Start 2P
- Remove all `border-radius` values (set to `0`)
- Remove smooth gradient shadows — replace with hard `box-shadow: 3px 3px 0 #000` (pixel shadow)
- Remove `@keyframes fadeInUp` and `float` animations — replace with `blink` only
- Add pixel scanline background pattern utility class

---

## Animations

Only one animation throughout:
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```
Used on `▼` cursor in the hero dialogue box. No other motion.

---

## Files Changed

| File | Change |
|---|---|
| `pages/_app.js` | Add Press Start 2P Google Font link |
| `styles/globals.css` | Full rewrite — new palette, font, reset |
| `styles/Header.module.css` | Full rewrite — Trainer Card layout |
| `styles/Experience.module.css` | Full rewrite — Pokedex entry layout |
| `styles/Skill.module.css` | Full rewrite — stat bar layout |
| `styles/Certificate.module.css` | Full rewrite — Hall of Fame layout |
| `pages/header/header.js` | Remove particles-bg, add nav menu, dialogue box |
| `pages/experience/experience.js` | Add `flavor` field to data, add Pokedex numbering |
| `pages/experience/experienceCard.js` | Rewrite JSX for Pokedex entry structure |
| `pages/skill/skillCircular.js` | Rewrite JSX in-place for stat bar structure (file keeps its name to avoid import churn) |
| `pages/skill/skill.js` | Update section layout to wrap stat bars |
| `pages/certificate/certificates.js` | Rewrite JSX for Hall of Fame layout |

**Not changed:** `pages/index.js`, `pages/api/hello.js`, routing, data (except adding `flavor` text)  
**Removed dependency:** `particles-bg` (and `proton-engine`) — uninstall after removing usage

---

## Out of Scope

- Sound effects or music
- Animated walking sprites
- Battle transition animations between sections
- Mobile-specific breakpoints beyond basic responsive (Pokemon UI is inherently narrow/portrait)
- Dark mode toggle

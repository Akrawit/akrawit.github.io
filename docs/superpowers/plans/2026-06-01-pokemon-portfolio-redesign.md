# Pokemon Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign akrawit.github.io as a full Pokemon FireRed/LeafGreen 8-bit UI — Trainer Card hero, Pokedex experience entries, Base Stats skills, Hall of Fame certificates.

**Architecture:** Full CSS rewrite across 5 module files + targeted JSX rewrites in 6 component files. No new dependencies. Remove `particles-bg`. All sections stay in the same Next.js single-page layout.

**Tech Stack:** Next.js, React, CSS Modules, Press Start 2P (Google Fonts)

**Dev server:** `npm run dev` → http://localhost:3000  
**Build check:** `npm run build`

---

## File Map

| File | Action |
|---|---|
| `pages/_app.js` | Swap Inter → Press Start 2P font link |
| `styles/globals.css` | Full rewrite — Pokemon CSS vars, font, blink animation |
| `styles/Header.module.css` | Full rewrite — Trainer Card layout |
| `pages/header/header.js` | Rewrite JSX — remove particles-bg, add Trainer Card markup |
| `styles/Experience.module.css` | Full rewrite — Pokedex entry layout |
| `pages/experience/experience.js` | Add `flavor` field to data arrays, pass `index` + `isEdu` to card |
| `pages/experience/experienceCard.js` | Rewrite JSX — Pokedex entry structure |
| `styles/Skill.module.css` | Full rewrite — stat bar layout |
| `pages/skill/skillCircular.js` | Rewrite JSX — stat bar row (drop useState animation) |
| `pages/skill/skill.js` | Add statsCard wrapper + header row |
| `styles/Certificate.module.css` | Full rewrite — Hall of Fame layout |
| `pages/certificate/certificates.js` | Rewrite JSX — Hall of Fame structure |

---

## Task 1: Foundation — Font + Global CSS

**Files:**
- Modify: `pages/_app.js`
- Modify: `styles/globals.css`

- [ ] **Step 1: Swap font in `_app.js`**

Replace the Inter font `<link>` with Press Start 2P:

```jsx
// pages/_app.js
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

- [ ] **Step 2: Rewrite `styles/globals.css`**

```css
/* styles/globals.css */
:root {
  --poke-bg:         #f5e8d0;
  --poke-white:      #ffffff;
  --poke-red:        #cc2200;
  --poke-red-dark:   #aa1100;
  --poke-green:      #336600;
  --poke-blue:       #1a3a8c;
  --poke-gold:       #b8860b;
  --poke-gold-light: #ffd700;
  --poke-black:      #000000;
  --poke-dark:       #1a1a1a;
  --poke-text:       #000000;
  --poke-muted:      #666666;
  --poke-stats-bg:   #e8f0f8;
  --bar-csharp:      #cc2200;
  --bar-java:        #1a3a8c;
  --bar-js:          #b8860b;
  --bar-htmlcss:     #336600;
  --bar-sql:         #6a2a9e;
  --bar-ts:          #006080;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Press Start 2P', 'Courier New', monospace;
  background: var(--poke-bg);
  color: var(--poke-text);
  line-height: 2;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  line-height: 1.6;
}

ul {
  list-style-type: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--poke-bg); }
::-webkit-scrollbar-thumb { background: var(--poke-red); border: 1px solid var(--poke-black); }
```

- [ ] **Step 3: Start dev server and verify font loads**

```bash
npm run dev
```

Open http://localhost:3000. The page should render in the blocky Press Start 2P font (even if layout looks broken — that's expected). If font is missing, check the Google Fonts link in `_app.js`.

- [ ] **Step 4: Commit**

```bash
git add pages/_app.js styles/globals.css
git commit -m "feat: set Pokemon palette and Press Start 2P font"
```

---

## Task 2: Hero — Trainer Card

**Files:**
- Modify: `pages/header/header.js`
- Modify: `styles/Header.module.css`

- [ ] **Step 1: Rewrite `styles/Header.module.css`**

```css
/* styles/Header.module.css */
.hero {
  background: var(--poke-bg);
  background-image: radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px);
  background-size: 4px 4px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
}

.topbar {
  background: var(--poke-red);
  color: var(--poke-white);
  font-size: 8px;
  padding: 6px 12px;
  border: 2px solid var(--poke-black);
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 480px;
  margin-bottom: 8px;
}

.trainerCard {
  background: var(--poke-white);
  border: 3px solid var(--poke-black);
  padding: 12px;
  display: flex;
  gap: 14px;
  width: 100%;
  max-width: 480px;
  margin-bottom: 8px;
  box-shadow: 4px 4px 0 var(--poke-black);
}

.trainerPhotoWrap {
  position: relative;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border: 2px solid var(--poke-black);
  overflow: hidden;
}

.trainerPhoto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: pixelated;
  filter: contrast(1.1) saturate(0.7);
}

.trainerPhotoWrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px);
  background-size: 9px 9px;
  pointer-events: none;
}

.trainerDetails {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.trainerName {
  font-size: 12px;
  color: var(--poke-black);
}

.trainerTitle {
  font-size: 7px;
  color: var(--poke-red);
  line-height: 1.8;
}

.typeBadges {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.typeBadge {
  font-size: 6px;
  padding: 2px 6px;
  border: 1.5px solid var(--poke-black);
  color: var(--poke-white);
}

.typeBackend  { background: var(--poke-red); }
.typeFullstack { background: var(--poke-green); }
.typeRunner   { background: var(--poke-blue); }

.trainerId {
  font-size: 6px;
  color: var(--poke-muted);
}

.navMenu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  width: 100%;
  max-width: 480px;
  margin-bottom: 8px;
}

.navBtn {
  background: var(--poke-red);
  color: var(--poke-white);
  font-size: 7px;
  padding: 8px 10px;
  border: 2px solid var(--poke-black);
  display: block;
  box-shadow: 2px 2px 0 var(--poke-black);
  font-family: 'Press Start 2P', monospace;
  cursor: pointer;
}

.navBtn:hover {
  background: var(--poke-red-dark);
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0 var(--poke-black);
}

.navBtnActive  { background: var(--poke-black); }
.navBtnGreen   { background: var(--poke-green); }
.navBtnGreen:hover { background: #264d00; }

.dialogue {
  background: var(--poke-white);
  border: 3px solid var(--poke-black);
  padding: 10px 14px;
  font-size: 7px;
  color: var(--poke-black);
  line-height: 2;
  width: 100%;
  max-width: 480px;
  margin-bottom: 8px;
  box-shadow: 4px 4px 0 var(--poke-black);
}

.cursor {
  display: inline;
  margin-left: 8px;
  animation: blink 1s infinite;
}

.socialRow {
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 480px;
}

.socialBtn {
  background: var(--poke-blue);
  color: var(--poke-white);
  font-size: 7px;
  padding: 8px 12px;
  border: 2px solid var(--poke-black);
  box-shadow: 2px 2px 0 var(--poke-black);
  font-family: 'Press Start 2P', monospace;
  cursor: pointer;
}

.socialBtn:hover {
  background: #132d6e;
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0 var(--poke-black);
}

@media (max-width: 520px) {
  .trainerName { font-size: 9px; }
}
```

- [ ] **Step 2: Rewrite `pages/header/header.js`**

```jsx
// pages/header/header.js
import Head from "../../node_modules/next/head";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header id="head" className={styles.hero}>
      <Head>
        <title>Akrawit Suwansantisuk - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="description" content="This is my resume website built for practicing my skills." />
        <meta property="og:title" content="Akrawit Suwansantisuk - Resume" />
        <meta property="og:description" content="This is my resume website built for practicing my skills." />
        <meta property="og:url" content="https://akrawit.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9EP6P4GQ5S"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9EP6P4GQ5S');`
        }}></script>
      </Head>

      <div className={styles.topbar}>
        <span>TRAINER CARD</span>
        <span>ID NO. 00001</span>
      </div>

      <div className={styles.trainerCard}>
        <div className={styles.trainerPhotoWrap}>
          <img src="/profile.jpg" alt="Akrawit Suwansantisuk" className={styles.trainerPhoto} />
        </div>
        <div className={styles.trainerDetails}>
          <div className={styles.trainerName}>AKRAWIT</div>
          <div className={styles.trainerTitle}>STAFF SOFTWARE<br />ENGINEER</div>
          <div className={styles.typeBadges}>
            <span className={`${styles.typeBadge} ${styles.typeBackend}`}>BACKEND</span>
            <span className={`${styles.typeBadge} ${styles.typeFullstack}`}>FULLSTACK</span>
            <span className={`${styles.typeBadge} ${styles.typeRunner}`}>RUNNER</span>
          </div>
          <div className={styles.trainerId}>ID: AKRAWIT-S · LVL 99</div>
        </div>
      </div>

      <nav className={styles.navMenu}>
        <a href="#skills"       className={`${styles.navBtn} ${styles.navBtnActive}`}>▶ SKILLS</a>
        <a href="#experience"   className={`${styles.navBtn} ${styles.navBtnGreen}`}>WORK EXP</a>
        <a href="#certificates" className={styles.navBtn}>CERTS</a>
        <a href="#social"       className={styles.navBtn}>CONTACT</a>
      </nav>

      <div className={styles.dialogue}>
        Staff SWE passionate about building innovative solutions. Marathon runner. World explorer.
        <span className={styles.cursor}>▼</span>
      </div>

      <div id="social" className={styles.socialRow}>
        <a href="https://www.linkedin.com/in/akrawit/" className={styles.socialBtn} target="_blank" rel="noreferrer">▶ LINKEDIN</a>
        <a href="https://github.com/Akrawit"           className={styles.socialBtn} target="_blank" rel="noreferrer">▶ GITHUB</a>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Verify hero section in browser**

Check http://localhost:3000 (dev server should still be running). Expect:
- Cream dotted background
- Red "TRAINER CARD" topbar
- White card with profile photo (pixelated) + name/badges
- 2×2 red nav menu
- White dialogue box with blinking ▼
- Blue LinkedIn/GitHub buttons

If profile photo is missing, check `/profile.jpg` exists in `public/`. The layout should fit ~480px centered.

- [ ] **Step 4: Commit**

```bash
git add pages/header/header.js styles/Header.module.css
git commit -m "feat: hero section as Pokemon Trainer Card"
```

---

## Task 3: Experience — Pokedex Entries

**Files:**
- Modify: `pages/experience/experience.js`
- Modify: `pages/experience/experienceCard.js`
- Modify: `styles/Experience.module.css`

- [ ] **Step 1: Rewrite `styles/Experience.module.css`**

```css
/* styles/Experience.module.css */
.second {
  background: var(--poke-bg);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sectionHeader {
  background: var(--poke-red);
  color: var(--poke-white);
  font-size: 8px;
  padding: 6px 12px;
  border: 2px solid var(--poke-black);
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 480px;
  margin-bottom: 8px;
  box-shadow: 3px 3px 0 var(--poke-black);
}

.sectionHeaderEdu {
  background: var(--poke-blue);
}

.experiencelist {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

.entry {
  background: var(--poke-white);
  border: 3px solid var(--poke-black);
  box-shadow: 4px 4px 0 var(--poke-black);
  overflow: hidden;
}

.entryHeader {
  background: var(--poke-red);
  color: var(--poke-white);
  font-size: 7px;
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
}

.entryHeaderEdu {
  background: var(--poke-blue);
}

.entryBody {
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: flex-start;
}

.logo {
  width: 48px;
  height: 48px;
  border: 2px solid var(--poke-black);
  object-fit: contain;
  flex-shrink: 0;
  image-rendering: pixelated;
  filter: contrast(1.1) saturate(0.7);
  background: #eee;
}

.entryText {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.entryTitle   { font-size: 7px; color: var(--poke-black); }
.entryCompany { font-size: 6px; color: var(--poke-red); }
.entryCompanyEdu { color: var(--poke-blue); }
.entryPeriod  { font-size: 6px; color: var(--poke-muted); }
.entryFlavor  { font-size: 6px; color: var(--poke-black); line-height: 1.9; margin-top: 2px; }
```

- [ ] **Step 2: Rewrite `pages/experience/experienceCard.js`**

```jsx
// pages/experience/experienceCard.js
import styles from "../../styles/Experience.module.css";

export default function ExperienceCard({ title, period, company, imageSource, alt, flavor, index, isEdu }) {
  const num = isEdu
    ? `#E${String(index + 1).padStart(2, '0')}`
    : `#${String(index + 1).padStart(3, '0')}`;

  const years = period.match(/\d{4}/g) || [];
  const yearDisplay = years.length <= 1
    ? (years[0] || period)
    : `${years[0]}-${years[years.length - 1].slice(2)}`;

  return (
    <li className={styles.entry}>
      <div className={`${styles.entryHeader} ${isEdu ? styles.entryHeaderEdu : ''}`}>
        <span>{num} {company.toUpperCase()}</span>
        <span>{yearDisplay}</span>
      </div>
      <div className={styles.entryBody}>
        <img src={imageSource} alt={alt} className={styles.logo} />
        <div className={styles.entryText}>
          <div className={styles.entryTitle}>{title.toUpperCase()}</div>
          <div className={`${styles.entryCompany} ${isEdu ? styles.entryCompanyEdu : ''}`}>
            {company.toUpperCase()}
          </div>
          <div className={styles.entryPeriod}>{period.toUpperCase()}</div>
          {flavor && <div className={styles.entryFlavor}>{flavor}</div>}
        </div>
      </div>
    </li>
  );
}
```

- [ ] **Step 3: Rewrite `pages/experience/experience.js`**

```jsx
// pages/experience/experience.js
import styles from "../../styles/Experience.module.css";
import ExperienceCard from "./experienceCard";

const experienceData = [
  {
    title: "Staff Software Engineer",
    period: "Mar 2024 - Present",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo",
    flavor: "Apex-tier species. Architects distributed systems and mentors junior Engineermon."
  },
  {
    title: "Senior Software Engineer",
    period: "Aug 2021 - Feb 2024",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo",
    flavor: "Evolved form. Known for building high-throughput backend solutions at speed."
  },
  {
    title: "Software Engineer",
    period: "Aug 2016 - Jul 2021",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo",
    flavor: "Base form. First encountered deep in Agoda's vast server caverns."
  },
  {
    title: "Full Stack Developer",
    period: "Feb 2015 - May 2016",
    company: "Wongnai.com",
    url: "https://www.linkedin.com/company/wongnai.com/",
    imageSource: "/wongnai.png",
    alt: "wongnai-logo",
    flavor: "A versatile species. Roams freely between frontend and backend territories."
  },
  {
    title: "Java Programmer",
    period: "May 2012 - Jul 2014",
    company: "CDG Systems",
    url: "https://www.linkedin.com/company/cdg-systems-cdgs-/",
    imageSource: "/cdgs.png",
    alt: "cdgs-logo",
    flavor: "Early encounter. Specializes in Java-type moves and enterprise patterns."
  },
  {
    title: "Practical Training Student",
    period: "Apr 2011 - May 2011",
    company: "Universiti Teknologi Malaysia",
    url: "https://www.linkedin.com/school/universiti-teknologi-malaysia/",
    imageSource: "/utm.png",
    alt: "utm-logo",
    flavor: "Rookie stage. Where skills were first put to the real-world test."
  }
];

const educationData = [
  {
    title: "Computer Engineering",
    period: "2008 - 2012",
    company: "KMUTT",
    url: "https://www.linkedin.com/school/kmutt/",
    imageSource: "/kmutt.png",
    alt: "kmutt-logo",
    flavor: "Origin story. The place where the Engineermon journey first began."
  },
  {
    title: "Student",
    period: "2002 - 2008",
    company: "MATHAYOMWATSING SCHOOL",
    url: "https://www.mws.ac.th/",
    imageSource: "/mws.jpg",
    alt: "mws-logo",
    flavor: "Pre-evolution era. Before the coding journey had even started."
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.second}>
      <div className={styles.sectionHeader}>
        <span>EXPERIENCE</span>
        <span>SEEN: {experienceData.length}</span>
      </div>
      <ul className={styles.experiencelist}>
        {experienceData.map((data, index) => (
          <ExperienceCard key={index} index={index} isEdu={false} {...data} />
        ))}
      </ul>

      <div className={`${styles.sectionHeader} ${styles.sectionHeaderEdu}`}>
        <span>EDUCATION</span>
        <span>SEEN: {educationData.length}</span>
      </div>
      <ul className={styles.experiencelist}>
        {educationData.map((data, index) => (
          <ExperienceCard key={index} index={index} isEdu={true} {...data} />
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 4: Verify experience section in browser**

Scroll past the hero. Expect:
- Red "EXPERIENCE SEEN: 6" header bar
- 6 white Pokedex entry cards (#001–#006), each with: red header, company logo, title, company, period, flavor text
- Blue "EDUCATION SEEN: 2" header bar  
- 2 blue-themed entry cards (#E01, #E02)

- [ ] **Step 5: Commit**

```bash
git add styles/Experience.module.css pages/experience/experience.js pages/experience/experienceCard.js
git commit -m "feat: experience section as Pokedex entries"
```

---

## Task 4: Skills — Base Stats

**Files:**
- Modify: `pages/skill/skillCircular.js`
- Modify: `pages/skill/skill.js`
- Modify: `styles/Skill.module.css`

- [ ] **Step 1: Rewrite `styles/Skill.module.css`**

```css
/* styles/Skill.module.css */
.skill {
  background: var(--poke-stats-bg);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.statsCard {
  background: var(--poke-white);
  border: 3px solid var(--poke-black);
  box-shadow: 4px 4px 0 var(--poke-black);
  padding: 12px;
  width: 100%;
  max-width: 480px;
}

.statsCardHeader {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--poke-black);
}

.statsSprite {
  font-size: 32px;
}

.statsMonName {
  font-size: 10px;
  color: var(--poke-black);
  margin-bottom: 6px;
}

.statsTypes {
  display: flex;
  gap: 4px;
}

.statsType {
  font-size: 6px;
  padding: 2px 6px;
  border: 1.5px solid var(--poke-black);
  color: var(--poke-white);
  font-family: 'Press Start 2P', monospace;
}

.typeBackend  { background: var(--poke-red); }
.typeFullstack { background: var(--poke-green); }

.ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.statRow {
  display: flex;
  align-items: center;
  gap: 8px;
}

.statLabel {
  font-size: 6px;
  color: var(--poke-black);
  width: 52px;
  flex-shrink: 0;
  line-height: 1.4;
}

.statBarBg {
  flex: 1;
  background: #ddd;
  border: 1.5px solid var(--poke-black);
  height: 10px;
}

.statBar { height: 100%; }

.barCsharp  { background: var(--bar-csharp); }
.barJava    { background: var(--bar-java); }
.barJs      { background: var(--bar-js); }
.barHtmlcss { background: var(--bar-htmlcss); }
.barSql     { background: var(--bar-sql); }
.barTs      { background: var(--bar-ts); }

.statVal {
  font-size: 6px;
  color: var(--poke-black);
  width: 24px;
  text-align: right;
  flex-shrink: 0;
}
```

- [ ] **Step 2: Rewrite `pages/skill/skillCircular.js`**

```jsx
// pages/skill/skillCircular.js
import styles from "../../styles/Skill.module.css";

const BAR_COLORS = {
  "C#":         styles.barCsharp,
  "Java":       styles.barJava,
  "JavaScript": styles.barJs,
  "HTML/CSS":   styles.barHtmlcss,
  "SQL":        styles.barSql,
  "TypeScript": styles.barTs,
};

export default function SkillItem({ skillValue, label }) {
  const pct = Math.round(skillValue * 100);
  const barClass = BAR_COLORS[label] || styles.barCsharp;

  return (
    <li className={styles.statRow}>
      <span className={styles.statLabel}>{label.toUpperCase()}</span>
      <div className={styles.statBarBg}>
        <div className={`${styles.statBar} ${barClass}`} style={{ width: `${pct}%` }} />
      </div>
      <span className={styles.statVal}>{pct}</span>
    </li>
  );
}
```

- [ ] **Step 3: Update `pages/skill/skill.js`**

```jsx
// pages/skill/skill.js
import styles from "../../styles/Skill.module.css";
import SkillItem from "./skillCircular";

export default function Skill() {
  return (
    <section id="skills" className={styles.skill}>
      <div className={styles.statsCard}>
        <div className={styles.statsCardHeader}>
          <span className={styles.statsSprite}>🧑‍💻</span>
          <div>
            <div className={styles.statsMonName}>AKRAWIT</div>
            <div className={styles.statsTypes}>
              <span className={`${styles.statsType} ${styles.typeBackend}`}>BACKEND</span>
              <span className={`${styles.statsType} ${styles.typeFullstack}`}>FULLSTACK</span>
            </div>
          </div>
        </div>
        <ul className={styles.ul}>
          <SkillItem skillValue={8 / 10} label="C#" />
          <SkillItem skillValue={7 / 10} label="Java" />
          <SkillItem skillValue={6 / 10} label="JavaScript" />
          <SkillItem skillValue={6 / 10} label="HTML/CSS" />
          <SkillItem skillValue={5 / 10} label="SQL" />
          <SkillItem skillValue={5 / 10} label="TypeScript" />
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify skills section in browser**

Scroll to Skills. Expect:
- Light blue background (`#e8f0f8`)
- White card with 🧑‍💻 sprite + AKRAWIT name + BACKEND/FULLSTACK badges
- 6 stat rows: label (fixed width) | colored bar | number
- C# = red bar, Java = blue, JS = gold, HTML/CSS = green, SQL = purple, TS = teal

- [ ] **Step 5: Commit**

```bash
git add styles/Skill.module.css pages/skill/skillCircular.js pages/skill/skill.js
git commit -m "feat: skills section as Pokemon base stats"
```

---

## Task 5: Certificates — Hall of Fame

**Files:**
- Modify: `pages/certificate/certificates.js`
- Modify: `styles/Certificate.module.css`

- [ ] **Step 1: Rewrite `styles/Certificate.module.css`**

```css
/* styles/Certificate.module.css */
.certificate {
  background: var(--poke-dark);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hofHeader {
  background: var(--poke-gold);
  color: var(--poke-white);
  font-size: 9px;
  padding: 8px 14px;
  border: 2px solid var(--poke-gold-light);
  text-align: center;
  width: 100%;
  max-width: 480px;
  margin-bottom: 8px;
  letter-spacing: 2px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
}

.hofStars {
  font-size: 14px;
  color: var(--poke-gold-light);
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: 4px;
}

.ul {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hofEntry {
  background: #2a2a2a;
  border: 3px solid var(--poke-gold-light);
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 4px 4px 0 var(--poke-gold);
}

.hofCertImg {
  width: 80px;
  height: 60px;
  border: 2px solid var(--poke-gold-light);
  object-fit: contain;
  flex-shrink: 0;
  background: #1a1a1a;
  image-rendering: pixelated;
}

.hofCertName {
  font-size: 7px;
  color: var(--poke-gold-light);
  margin-bottom: 6px;
}

.hofCertStatus {
  font-size: 6px;
  color: #aaa;
}
```

- [ ] **Step 2: Rewrite `pages/certificate/certificates.js`**

```jsx
// pages/certificate/certificates.js
import styles from "../../styles/Certificate.module.css";

const certificates = [
  { src: "/cer1.png", name: "CERTIFICATE #1", status: "COMPLETED" }
];

export default function Certificate() {
  return (
    <section id="certificates" className={styles.certificate}>
      <div className={styles.hofHeader}>★ HALL OF FAME ★</div>
      <div className={styles.hofStars}>★ ★ ★ ★ ★</div>
      <ul className={styles.ul}>
        {certificates.map((cert, i) => (
          <li key={i} className={styles.hofEntry}>
            <img src={cert.src} alt={cert.name} className={styles.hofCertImg} />
            <div>
              <div className={styles.hofCertName}>{cert.name}</div>
              <div className={styles.hofCertStatus}>STATUS: {cert.status}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Verify Hall of Fame in browser**

Scroll to the bottom. Expect:
- Dark (`#1a1a1a`) background
- Gold "★ HALL OF FAME ★" header
- Gold star row
- Dark card with gold border containing certificate image + name + status

- [ ] **Step 4: Commit**

```bash
git add styles/Certificate.module.css pages/certificate/certificates.js
git commit -m "feat: certificates section as Pokemon Hall of Fame"
```

---

## Task 6: Cleanup — Remove particles-bg

**Files:**
- Modify: `package.json` (via npm uninstall)

- [ ] **Step 1: Uninstall particles-bg**

The `particles-bg` import was removed from `header.js` in Task 2. Now remove the package:

```bash
npm uninstall particles-bg
```

Expected output: `removed N packages` — no errors.

- [ ] **Step 2: Verify build is clean**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no errors or warnings about missing modules. If `proton-engine` is listed as an unresolved peer dep warning, ignore it — it was a transitive dep of `particles-bg` and is gone too.

- [ ] **Step 3: Final browser check — full scroll**

Run `npm run dev` and scroll through the full page top to bottom:

| Section | Check |
|---|---|
| Hero | Trainer Card visible, photo pixelated, blinking ▼, nav buttons work |
| Experience | 6 red Pokedex entries + 2 blue education entries, flavor text visible |
| Skills | Stat bars colored correctly, values correct (80, 70, 60, 60, 50, 50) |
| Certificates | Dark Hall of Fame, gold borders, cert image loads |
| Nav links | Clicking each nav button scrolls to correct section |

- [ ] **Step 4: Final commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove particles-bg dependency"
```

---

## Done

All 6 tasks complete. The portfolio is now a full Pokemon FireRed/LeafGreen 8-bit UI.

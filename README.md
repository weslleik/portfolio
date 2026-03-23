# Portfolio — Next.js 14 + TypeScript

A futuristic developer portfolio built with Next.js 14, React 18, Tailwind CSS, and Framer Motion.

## Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Framework  | Next.js 14 (App Router)     |
| Language   | TypeScript                  |
| Styling    | Tailwind CSS                |
| Animation  | Framer Motion               |
| Fonts      | DM Mono + Outfit (Google)   |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Customisation

All editable content lives in **one file**:

```
src/lib/data.ts
```

Edit these exported constants:

| Constant   | What it controls                     |
|------------|--------------------------------------|
| `HERO`     | Name, roles typewriter, bio          |
| `ABOUT`    | Paragraphs, tag pills, stat cards    |
| `SKILLS`   | Name, level (0–100), category        |
| `PROJECTS` | Title, description, tags, link       |
| `CONTACT`  | Email, social links                  |
| `NAV_LINKS`| Navigation items                     |

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Page assembly
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── CustomCursor.tsx
│       ├── WaterCanvas.tsx
│       ├── SectionHeader.tsx
│       └── GlowOrb.tsx
├── hooks/
│   ├── useTypewriter.ts
│   ├── useWaterRipple.ts
│   └── useCounter.ts
├── lib/
│   ├── data.ts           # ← Edit your content here
│   └── utils.ts
└── types/
    └── index.ts
```

## Build for Production

```bash
npm run build
npm run start
```

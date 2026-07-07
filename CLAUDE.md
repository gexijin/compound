# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Compound — a story-driven, education-only web app teaching money and investing to teen girls (16–18). Pure client-side SPA (Vite + React 19 + TypeScript + Tailwind 4), no backend; deployed to GitHub Pages via `.github/workflows/deploy.yml`. See README.md for the full build brief (curriculum, characters, tone).

## Commands

- `npm run dev` — dev server
- `npm run build` — typecheck (`tsc -b`) + production build
- `npm run test` — run tests once (Vitest); single file: `npx vitest run src/lib/finance.test.ts`
- `npm run lint` — oxlint

## Architecture

Lessons are **data, not code**. A reusable lesson engine renders a fixed loop: story → decision → consequence → teaching → quiz.

- `src/content/schema.ts` — the content types (`Lesson`, `Beat` union: story/decision/teaching/quiz). Start here.
- `src/content/lessons/` — one file per lesson, registered in `index.ts`. Unauthored lessons are stubs with `status: 'coming-soon'` and empty `beats`.
- `src/content/characters.ts` — character registry (referenced by `CharacterId` for consistent portrayal).
- `src/engine/` — `LessonPlayer.tsx` steps through beats, delegating to one view component per beat type.
- `src/interactives/` — self-contained embeddable widgets, registered by `InteractiveId` in the schema and referenced from teaching beats.
- `src/lib/finance.ts` — all money math. **Guardrail:** any number a lesson presents as fact must be computed here from labeled constants (or clearly marked illustrative), and tested in `finance.test.ts`.
- `src/lib/progress.ts` — lesson progress in `localStorage`.

## GitHub Pages constraints

- `base: '/fined/'` in `vite.config.ts` must match the repo name.
- Uses `HashRouter` (Pages has no SPA fallback) — keep routes hash-based.

## Content rules

- Tone: smart, a little irreverent, never condescending or pink-washed; optimize for confidence over completeness.
- All content original — no copyrighted lyrics, quotes, or third-party curriculum text.

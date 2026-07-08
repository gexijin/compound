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

- User-facing copy calls the units **episodes** ("Episode 1", the `/episode/:slug` route) — code identifiers, file names, and storage keys keep their `lesson` naming.
- Tone: smart, a little irreverent, never condescending or pink-washed; optimize for confidence over completeness.
- All content original — no copyrighted lyrics, quotes, or third-party curriculum text.

## Story canon (season 1)

The season is modeled on the *Rich Dad Poor Dad* storytelling form — mentor parable, contrarian reframes, experience-before-explanation, a late wealth reveal — but never its substance (no get-rich promises, no contempt for jobs/school/savers; all numbers stay under the `finance.ts` guardrail).

- **Two-layer structure: the girls are the subject, Elena is the mystery.** The A-plot is the girls' summer — the $100 Challenge, weekly on the porch, each girl carrying her own live problem (Keisha's tuition gap, Emily's avoidance, Maya's earn-vs-keep, Sofi's cash-only household). The B-plot is Elena's life, discovered through artifacts, one per episode, each surfacing exactly when the curriculum needs the concept it embodies: pay envelope + $20 (Ep 1), the missing-fortune counterfactual (Ep 2), a planted object each for Eps 3–4 (e.g., an old stock certificate; a 1974 crash-scarred clipping or statement) so the thread stays taut in the episodes Elena sits out, the slip's payoff + divorce (Ep 5). The girls live her timeline at compressed speed — tin box → understanding → own-name accounts in one summer instead of eleven years — converging in Ep 6, where the final artifact is from the present: accounts with *their* names on them, the "never invisible" lesson handed forward. Her story ends one episode before theirs begins; the finale belongs to the girls. If the season tips into being *about* Elena, it loses the audience's self-recognition.
- **The Ep 5 reveal reframes, not impresses.** The point is not the ~$1.7M — it's that every strange thing Elena did all season (refusing the slip, making the $20 wait, "not for today") retroactively reads as a curriculum she'd been running since the garage: she was auditioning the heirs to the lesson.
- **Elena is both dads in one lifetime.** Young Elena (19, 1965) is the "Poor Dad": tin box under the bed, then the passbook — the safe, rule-following philosophy that quietly loses. Her conversion is the 1976 brokerage slip (First Index Investment Trust — Vanguard's first index fund, launched that year and mocked as "Bogle's folly"): index funds plus a few Buffett-studied stocks, held through every crash, ~$1.7M by 2026.
- **The 1976 conversion trigger (Episode 5's emotional payload):** divorce ~1975 forces Elena to look at the paperwork alone — and she discovers she was *financially invisible*: accounts, credit, house all in his name; her decade of passbook saving was the only thing that was hers, and 1974's ~11% inflation had been eating it in plain sight. The vow is "never invisible again," not "get rich." The Equal Credit Opportunity Act (1974) had just made it possible for her to open her own-name account without a husband's signature — something her mother literally couldn't have done — and she bought the mocked new fund in 1976, right after the 1973–74 crash halved the market. The ex stays off-screen and un-villained (the villain is the arrangement, not the man); the telling is a few dry Elena lines in Episode 5, not a flashback episode. Ep 1's line "her decision, nobody else's — rarer than it sounds" is the planted runway.
- **Elena never disowns the tin box.** Her authority with cash-only families comes from "I *was* your mom — the tin was step one." Each step of her arc (tin → passbook → index fund) was rational with the information she had.
- **The forgotten $20 is the control group.** The one deposit that made neither journey. By Episode 5 the same $20 gets priced along all three paths — envelope (~90% of buying power gone), passbook (roughly treads water), index fund (the big number) — computed in `finance.ts`.
- **Contrast without contempt.** Conventional "keep it safe" wisdom is voiced by a chorus of off-screen home voices (Sofi's mom foregrounded), quoted with love, never argued with directly, and occasionally right. The porch answers the idea, never the person. No parent or girl is ever the villain or the fool.
- **Maya carries the separate "earn a lot, keep nothing" thread** (peer-level, self-inflicted, funny) — her Ep 1 flex ("I make that in a weekend") gets audited in a later episode, and her genuinely getting it is the season's proof the porch works. She is never labeled the poor one.

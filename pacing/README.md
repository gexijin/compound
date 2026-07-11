# Pacing data for *Full Price*

The quantitative shadow of `../full-price-spine.md`. The prose spine stays the
creative document; these files are the measurable model of it, and keeping the
two reconciled is a deliberate, manual step — nothing here is auto-derived from
the prose.

## Files

| File | Role |
|---|---|
| `beats.csv` | **Source of truth.** The scene grid: one row per beat, in story order. |
| `cards.csv` | The irony ledger: every fact the reader holds before Keisha does. |
| `tension-map.html` | The interactive chart. Self-contained — just open it in a browser. The blocks between `DATA:BEGIN/END` and `CARDS:BEGIN/END` markers are generated; edit the CSVs instead. |
| `sync.mjs` | Regenerates the marked blocks in `tension-map.html` from the CSVs, then runs the pacing lint. |

## Workflow

1. Change the spine (or the chapter plan, once it exists).
2. Update `beats.csv` / `cards.csv` to match — add, delete, re-score, or re-order rows (keep `beat` numbering contiguous from 1).
3. Rebuild and lint:

   ```
   node pacing/sync.mjs
   ```

4. Open `tension-map.html` locally to see the new shape. (Ask Claude to
   republish the shared artifact when you want the hosted copy refreshed.)

For your own analysis the CSVs load directly:

```r
beats <- read.csv("pacing/beats.csv")
plot(beats$beat, beats$intensity, type = "l")
lines(beats$beat, beats$suspense, lty = 2)
```

## beats.csv columns

| Column | Meaning |
|---|---|
| `beat` | Sequential index, 1..N, contiguous. The observation unit of the whole model. |
| `act` | Act number. Display names live in `ACT_NAMES` in `sync.mjs` — extend it if the act structure changes. |
| `title` | One-line description of the beat (shows in tooltip and scene grid). |
| `intensity` | 0–10: how much is overtly at stake *on the page*. |
| `suspense` | 0–10: pressure of the cards the reader currently holds. |
| `hard_out` | `1` if a chapter ends here mid-crisis (the red dots). |
| `essie` | Year of the Essie detonation triggered here (`1965`, `1976`, …), else blank. |
| `denise` | Denise strand page (`D1`, `D2`, `D3`), else blank. |
| `near_miss` | Near-miss label (`#1`, `#2 #3`), else blank. |
| `card_dealt` | Exact card name from `cards.csv` if this beat deals it (the linter cross-checks the match). |
| `cards_cashed` | `1` if one or more cards reconcile here (must match some `cashed_beat` in `cards.csv`). |
| `notes` | Free text (`act out`, `climax`, `the model scene`, …). Not rendered; for the working record. |

## Scoring rubric (ordinal — the shape is the data, not the digits)

Both scales are one-rater expert ratings. Anchors:

- **Intensity** — 2 comedy/texture beat · 4 stakes acknowledged · 6 a lever moves (money, secret, relationship) · 8 act-level threat in motion · 9 crisis on the page · 10 the climax (exactly one).
- **Suspense** — track the held cards, not the events: how many are outstanding, how consequential, how close to premature disclosure. 10 is reserved for maximum pressure with zero on-page release (the supper table). It is a property of the *reader's* state — a quiet scene can score 10, a loud one can score 3 once everything is known.

When re-scoring after a spine change, re-read the two or three beats on either
side too; the scores only mean anything relative to their neighbors.

## What the linter checks (advisory, never blocking)

- **Back-to-back sirens** — adjacent beats both ≥ 8, or consecutive hard outs (design rule #1: every bang buys a breath). The climax beat is exempt.
- **Rising floor** — each act's quietest pre-climax beat, measured on *felt tension* `max(intensity, suspense)`, must not sit below the previous act's.
- **Irony gap dips** — suspense below intensity between the first card deal and the climax (excluding cash-in beats). A single-beat dip at a hard out is normal; a sustained run means the reader has run out of cards.
- **Card bookkeeping** — every `card_dealt` matches a `cards.csv` row and beat number; every `cashed_beat` lands on a `cards_cashed` beat; open cards and cards held under ~5 beats are reported.
- **Strand starvation** — the longest stretch with no strand event, card, or near-miss (flagged at ≥ 6 beats).

Hard errors (non-contiguous numbering, scores outside 0–10, unknown act,
missing markers in the HTML) stop the script before it writes anything.

## Current known findings (as of the July 2026 spine)

The linter intentionally flags three things in the current design — keep or fix
consciously: beats 30–31 stack two sirens/hard outs at the end of Act 4; Act 5's
pre-climax breath (beat 33) sits below Act 4's floor; and the "sell slip" card
has no cash-in beat yet (tracked in the spine's open items).

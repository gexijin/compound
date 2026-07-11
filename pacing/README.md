# Pacing data for *Full Price*

The quantitative shadow of `../full-price-spine.md`. The prose spine stays the
creative document; these files are the measurable model of it, and keeping the
two reconciled is a deliberate, manual step — nothing here is auto-derived from
the prose.

## Files

| File | Role |
|---|---|
| `beats.json` | **Source of truth.** The scene grid: one object per beat, in story order (array order = beat order). |
| `cards.json` | The irony ledger: every fact the reader holds before Keisha does. |
| `characters.json` | The lesson ledger: the cast, and which money lesson each embodies. |
| `tension-map.html` | The interactive chart. Self-contained — just open it in a browser. The blocks between the `DATA:BEGIN/END`, `CARDS:BEGIN/END`, and `CHARS:BEGIN/END` markers are generated; edit the JSON instead. |
| `sync.mjs` | Regenerates the marked blocks in `tension-map.html` from the JSON, then runs the pacing + cast lint. |

Each file is a JSON array of objects, one object per line. Named keys mean field
order doesn't matter and **empty fields are simply omitted** — a beat with no
strand event just leaves those keys out. Flags (`hard_out`, `cards_cashed`) are
`true` when present and omitted otherwise; scores and beat/act numbers are JSON
numbers.

## Workflow

1. Change the spine (or the chapter plan, once it exists).
2. Update `beats.json` / `cards.json` / `characters.json` to match — add, delete, re-score, or re-order objects (keep `beat` numbering contiguous from 1, matching array order).
3. Rebuild and lint:

   ```
   node pacing/sync.mjs
   ```

4. Open `tension-map.html` locally to see the new shape. (Ask Claude to
   republish the shared artifact when you want the hosted copy refreshed.)

For your own analysis the JSON loads directly (`jsonlite` fills omitted fields
with `NA`):

```r
library(jsonlite)
beats <- fromJSON("pacing/beats.json")
plot(beats$beat, beats$intensity, type = "l")
lines(beats$beat, beats$suspense, lty = 2)
```

## beats.json fields

Omit any optional field when it doesn't apply — don't set it to `""`, `0`, or `null`.

| Field | Meaning |
|---|---|
| `beat` | Sequential index, 1..N, contiguous (number). The observation unit of the whole model. |
| `act` | Act number (number). Display names live in `ACT_NAMES` in `sync.mjs` — extend it if the act structure changes. |
| `title` | One-line description of the beat (shows in tooltip and scene grid). |
| `intensity` | 0–10 (number): how much is overtly at stake *on the page*. |
| `suspense` | 0–10 (number): pressure of the cards the reader currently holds. |
| `hard_out` | `true` if a chapter ends here mid-crisis (the red dots); omit otherwise. |
| `essie` | Year of the Essie detonation triggered here (`"1965"`, `"1976"`, …); omit if none. |
| `denise` | Denise strand page (`"D1"`, `"D2"`, `"D3"`); omit if none. |
| `near_miss` | Near-miss label (`"#1"`, `"#2 #3"`); omit if none. |
| `card_dealt` | Exact card name from `cards.json` if this beat deals it (the linter cross-checks the match). |
| `cards_cashed` | `true` if one or more cards reconcile here (must match some `cashed_beat` in `cards.json`); omit otherwise. |
| `notes` | Free text (`act out`, `climax`, `the model scene`, …). Not rendered; for the working record. |

## cards.json fields

| Field | Meaning |
|---|---|
| `card` | The fact the reader holds. Must exactly match the `card_dealt` of one beat. |
| `detail` | Optional gloss shown after the card name in the ledger; omit if none. |
| `dealt_beat` | Beat number where the reader learns it (number). |
| `dealt_label` | Short label for the deal shown in the ledger. |
| `cashed_beat` | Beat number where it reconciles (number); omit for an open card. |
| `cashed_label` | Short label for the cash-in — or, for an open card, the note on what's still outstanding. |

## characters.json fields

The cast-to-curriculum map: who teaches which money lesson. Controlled-vocabulary
fields (`family`, `strand`, `rescue`, `teaches`) are what the lint reasons over;
free-text fields (`role`, `wound`, `arc`) carry the content. Omit any optional
field that doesn't apply.

| Field | Meaning |
|---|---|
| `short` | Display name used in the table and tooltips. |
| `name` | Full name. |
| `age` | Number; omit if unknown. Set `age_approx: true` when the spine only estimates it (renders as `~52`). |
| `family` | One of `Carter` / `Ortiz` / `Ellis` / `Larsen` / `outsider` (extend `FAMILIES` in `sync.mjs`). |
| `role` | One-line story role (e.g. "chaos engine", "the advisor"). |
| `background` | Ethnicity/heritage shorthand; optional. |
| `strand` | One of `narrator` / `essie` / `denise` / `none` — which narrative strand they own. |
| `rescue` | One of `keisha` / `estelle` / `denise` for the three parallel rescues; omit for everyone else. |
| `teaches` | Non-empty array of curriculum tags: the physics `wages` / `ownership` / `compounding` / `speed` (counterfeit), plus `budgeting` / `pricing` / `liquidity` / `spending` / `precision` / `predation` (extend `TEACHES` in `sync.mjs`). |
| `wound` | The character's money wound; optional, shown on row hover. |
| `arc` | One-line arc; optional, shown on row hover. |

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
- **Card bookkeeping** — every `card_dealt` matches a `cards.json` entry and beat number; every `cashed_beat` lands on a `cards_cashed` beat; open cards and cards held under ~5 beats are reported.
- **Strand starvation** — the longest stretch with no strand event, card, or near-miss (flagged at ≥ 6 beats).
- **Cast-to-curriculum** — every money physics (`wages`, `ownership`, `compounding`, `speed`) has an owner; exactly the three expected rescues are flagged; every strand the beats run has a character who owns it. Unowned supporting lessons and the counterfeit `speed` carrier are reported as notes.

Hard errors (non-contiguous numbering, scores outside 0–10, unknown act,
missing markers in the HTML) stop the script before it writes anything.

## Current known findings (as of the July 2026 spine)

The linter intentionally flags three things in the current design — keep or fix
consciously: beats 30–31 stack two sirens/hard outs at the end of Act 4; Act 5's
pre-climax breath (beat 33) sits below Act 4's floor; and the "sell slip" card
has no cash-in beat yet (tracked in the spine's open items).

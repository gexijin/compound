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
| `characters.json` | The cast-to-curriculum map: the cast, and which money lesson each embodies. |
| `lessons.json` | The lesson-delivery ledger: each design-rule #4 money lesson and the beats where it's taught (feeds the beat×lesson matrix). |
| `ledger.json` | The money ledger: the three rescues as cash flow — the canon bill bridge, the feared-$7,800 split, and the provisional trading detour. |
| `tension-map.html` | The interactive charts. Self-contained — just open it in a browser. The blocks between the `DATA:`, `CARDS:`, `CHARS:`, `LESSONS:`, and `LEDGER:` `BEGIN/END` markers are generated; edit the JSON instead. |
| `sync.mjs` | Regenerates the marked blocks in `tension-map.html` from the JSON, then runs the pacing + curriculum + money lint. |

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
| `comedy` | 0–2 (integer): comic weight on the page — `0` none (omit it), `1` comic texture/voice, `2` a comic set piece. The book's second release valve (design rules #1 and #3). |
| `hard_out` | `true` if a chapter ends here mid-crisis (the red dots); omit otherwise. |
| `essie` | Year of the Essie detonation triggered here (`"1965"`, `"1976"`, …); omit if none. |
| `denise` | Denise strand interlude (`"D1"`, `"D2"`, `"D3"`, `"D4"`); omit if none. |
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

## lessons.json fields

The design-rule #4 curriculum, one object per lesson, cross-referencing `beats.json` by number. Where `characters.json` says *who* owns a lesson, this says *where it's delivered* — the two reconcile in the lint.

| Field | Meaning |
|---|---|
| `id` | Unique kebab-case slug (e.g. `say-number`, `float-sacred`). |
| `label` | The lesson as stated in design rule #4; omit only when `tag` alone names it. |
| `tag` | Optional link to a `characters.json` `teaches` tag (`wages`, `liquidity`, …) when the lesson is one of the controlled-vocabulary lessons. Must be in `TEACHES`. |
| `carrier` | Optional character `short` who embodies it (cross-checked against `characters.json`). |
| `counterfeit` | `true` for `speed` — the trap that must never read as a lesson; omit otherwise. |
| `beats` | Non-empty array of beat numbers where the lesson is delivered (the matrix dots). |
| `note` | Optional gloss shown on cell hover. |

## ledger.json fields

The money as cash flow. One array, four `kind`s (a discriminator), so an entry only carries the fields its kind needs. Amounts are whole dollars; `canon: true` marks a figure regression-tested in `math/`, `provisional: true` marks one awaiting the fact-check pass. Any `beat` cross-references `beats.json`.

| `kind` | Fields | Role |
|---|---|---|
| `bridge` | `order`, `label`, `amount`, `op` (`start`/`minus`/`plus`/`subtotal`/`margin`) | The canon waterfall: $18,000 real cost → $2,800 net gap → closed. Rendered as the bill-bridge table; the lint re-runs the arithmetic. |
| `trade` | `beat`, `label`, `amount` | The trading-detour timeline; mostly `provisional` (unpriced). Rendered as the trading table. |
| `fear` | `seq`, `label`, `amount`, `actor` | The feared $7,800 (`seq:1`) and the parts it splits into (`seq>1`). Model-only — feeds the reconciliation lint and holds the $7,800 canon anchor; not charted. |
| `rescue` | `actor`, `label`, `amount`, `applied`, `source` | One row per rescue contribution; `applied:false` marks a redundant rescue such as Denise's intact chain proceeds. Model-only — feeds the redundant-rescue lint; not charted. |

## Scoring rubric (ordinal — the shape is the data, not the digits)

Both scales are one-rater expert ratings. Anchors:

- **Intensity** — 2 comedy/texture beat · 4 stakes acknowledged · 6 a lever moves (money, secret, relationship) · 8 act-level threat in motion · 9 crisis on the page · 10 the climax (exactly one).
- **Suspense** — track the held cards, not the events: how many are outstanding, how consequential, how close to premature disclosure. 10 is reserved for maximum pressure with zero on-page release (the supper table). It is a property of the *reader's* state — a quiet scene can score 10, a loud one can score 3 once everything is known.

When re-scoring after a spine change, re-read the two or three beats on either
side too; the scores only mean anything relative to their neighbors.

## What the linter checks (advisory, never blocking)

- **Every bang buys a release** — the reframed design rule #1. A *bang* is a crisis-level beat (intensity ≥ 8); it must be followed, in the same beat or the next two, by a *release* — a quieter beat (intensity ≤ 4), a laugh (comedy = 2), or a card cashing. This book breathes through comedy and resolution, not only lulls, so the check credits all three valves. The climax is exempt. Consecutive hard outs are reported as a note (fine when one of them releases).
- **Rising floor** — each act's quietest pre-climax beat, measured on *felt tension* `max(intensity, suspense)`, must not sit below the previous act's.
- **Irony gap dips** — suspense below intensity between the first card deal and the climax (excluding cash-in beats). A single-beat dip at a hard out is normal; a sustained run means the reader has run out of cards.
- **Card bookkeeping** — every `card_dealt` matches a `cards.json` entry and beat number; every `cashed_beat` lands on a `cards_cashed` beat; open cards and cards held under ~5 beats are reported.
- **Strand starvation** — the longest stretch with no strand event, card, or near-miss (flagged at ≥ 6 beats).
- **Comedy quota** — the longest laugh desert (consecutive beats with `comedy` 0) is flagged at ≥ 4 beats (design rule #3: funny is the delivery mechanism). Comedy set pieces (`comedy` 2) and per-act comedy weight are reported so the quota can be eyeballed act by act.
- **Cast-to-curriculum** — every money physics (`wages`, `ownership`, `compounding`, `speed`) has an owner; exactly the three expected rescues are flagged; every strand the beats run has a character who owns it. Unowned supporting lessons and the counterfeit `speed` carrier are reported as notes.
- **Lesson coverage** — every `teaches` tag a character owns is actually delivered by some lesson; every substantial beat (hard out or intensity ≥ 7) delivers at least one lesson (design rule #4: every set piece pays tuition); physics taught only once, and the counterfeit `speed`, are reported as notes, plus a per-act delivery count.
- **Money reconciliation** — the bill bridge re-computes ($18,000 → net gap → margin) and must match its stated subtotals/margin; the fixed figures ($7,800 / $5,000 / $2,800) must still appear; the feared number must split exactly into its parts; redundant rescues and provisional rows are reported, along with the standing spine-vs-`math/` note on how the $2,800 closes.

Hard errors (non-contiguous numbering, scores outside 0–10, unknown act,
unknown ledger `kind`/`op`/`actor`, a lesson beat out of range, an unknown
`carrier`, missing markers in the HTML) stop the script before it writes anything.

## Current known findings (as of the July 2026 spine, passes 4–7)

The linter intentionally flags several things in the current design — keep or fix
consciously:

- **Pacing:** the felt-tension floor rises act over act. Act 4 carries the lightest comedy weight (3); the longest laugh desert is now beats 37–40 — the freeze → chain sale → second question → 1987 recognition, the book's gravest run, comedy withheld by design. The crash (beat 35) satisfies the release rule by cashing a card; the beat-41 hard out releases by cashing cards; beat 46 is the climax. The longest cardless/strandless stretch is beats 17–21 (5, under the flag). The "garage sale was Gary's idea" card is short-held (dealt beat 43 in Friday's contract read, cashed beat 46 at the table) — three beats, driven by the spine's own timing; accepted, not fixable earlier without contradicting the spine. The former "sell slip" open card now cashes at the table (beat 46).
- **Curriculum:** beat 5 is the one substantial beat (hard out) that delivers no catalogued lesson — a turn/setup beat where the $7,800 lands. Confirm it earns its place under rule #4, or note it as a deliberate pure-plot beat. Act 1 remains front-loaded with setup, not teaching.
- **Money:** four ledger rows are provisional (the trading peak, advance, and trough, plus Denise's chain) — unpriced until the `math/` fact-check pass. Denise's chain is a *redundant* rescue by design: the proceeds are set aside untouched, but the object is lost (melted at beat 48 before it can be traced). And there is a standing spine-vs-`math/` discrepancy the lint surfaces every run: `tuition_gap.py` closes the $2,800 with stand share + circulation desk ($1,000 + $1,880 = $2,880), while the spine's Act 5 prose also names "the liquidated remainder" among the closers — decide whether the trading detour contributes to the close or nets out. (Separately, the `math/` scripts still reference a `story-bible.md`; the design doc is now `full-price-spine.md`. Max's investable stake also shrinks from ~6 basement years to ~3.5 after the fourth pass — a pending `math/` re-price, not a pacing change.)

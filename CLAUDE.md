# Full Price — design phase

*Full Price* is an adult book-club novel: Keisha Carter, 19, hides a $7,800 tuition gap over one Sioux Falls summer while her mother and grandmother, unknown to her and to each other, quietly solve the same problem. Funny, Sheldon-paced, and quietly educational about money. The project is currently in the **design phase** — structure and pacing, not prose.

## Files

- **`full-price-spine.md`** — the single source of truth right now: cast, five-act spine, design rules. Everything else defers to it during design.
- **`pacing/`** — the quantitative model of the spine. `beats.csv` (scene grid) and `cards.csv` (irony ledger) are the source of truth; `node pacing/sync.mjs` regenerates the interactive chart (`tension-map.html`) and runs an advisory pacing lint. See `pacing/README.md` for columns, rubric, and workflow. When the spine changes, update the CSVs and re-run sync.
- **`math/`** — scripts that derive and regression-test the money numbers; has its own CLAUDE.md. If a script and the design disagree, raise it — don't silently change either.
- **`story-bible.md`**, **`chapter-plan.md`**, **`pitch.md`** — from the pre-redesign iteration (25 chapters, three acts). Useful reference; where they conflict with the spine, the spine wins.
- **`CLAUDE_old.md`** — the full drafting instructions (register, prose rules, dialogue, canon discipline). **Not in force during design; do not delete.** It comes back into service when drafting starts.

## Working notes

- Money figures are canon-sensitive: the fixed ones are $7,800 / $5,000 / $2,800, $30 for 30%, and $900,000. Don't invent or alter money numbers casually.

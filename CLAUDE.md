# Full Price — design phase

*Full Price* is an adult book-club novel: Keisha Carter, 19, hides a $7,800 tuition gap over one Sioux Falls summer while her mother and grandmother, unknown to her and to each other, quietly solve the same problem. Funny, Sheldon-paced, and quietly educational about money. The project is currently in the **design phase** — structure and pacing, not prose.

## Files

- **`cast.md`** - a list of characters.
- **`full-price-spine.md`** — the single source of truth right now: cast, five-act spine, design rules. Everything else defers to it during design.
- **`design-rules-and-ideas.md`** - design rules and ideas for discussion and implementation. 
- **`pacing/`** — the quantitative model of the spine. `beats.json` (scene grid), `cards.json` (irony ledger), and `characters.json` (lesson ledger: who teaches which money lesson) are the source of truth; `node pacing/sync.mjs` regenerates the interactive chart (`tension-map.html`) and runs an advisory pacing + cast lint. See `pacing/README.md` for fields, rubric, and workflow. When the spine changes, update the JSON and re-run sync. Only update files in this folder when I ask you to.
- **`math/`** — scripts that derive and regression-test the money numbers; has its own CLAUDE.md. If a script and the design disagree, raise it — don't silently change either. Only update when asked. 

## Working notes

- Money figures are canon-sensitive: the fixed ones are $7,800 / $5,000 / $2,800, $30 for 30%, and $900,000. Don't invent or alter money numbers casually.

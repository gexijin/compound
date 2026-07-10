# math/ — derivation and regression tests for the money canon

This folder is the arithmetic behind the money numbers in `story-bible.md` ("The money architecture" and "Estelle's fortune" sections). The scripts are not story content; they exist so the canon can be re-derived and re-checked. Each prints its results and asserts the canonical values — run them all with:

```
python3 tuition_gap.py && python3 keisha_529.py && python3 fortune.py
```

No dependencies beyond the standard library.

## The standing rule

**The bible's numbers are load-bearing.** If a script and the bible disagree, that is a discrepancy to raise with the author — never silently "fix" either side. The assertions exist to catch exactly this.

## Scripts → canon

| Script | Reproduces | Canonical results |
|---|---|---|
| `tuition_gap.py` | The gap; the two maths; how the gap closes | $18,000 real cost → $5,500 gross → **$2,800 net**; perceived $2,800 vs feared $7,800; closes with $1,000 stand share + $1,880 circulation desk, $80 margin |
| `keisha_529.py` | The 529 | $400/yr × 16 → **$20,645**: $6,400 deposited, $14,245 growth (69%), IRR 12.8%; $5,000/yr × 4 disbursement |
| `fortune.py` | Estelle's fortune | $76,600 in → **$927k** (≈ $900k canon); no-mistakes counterfactual $1.28M; Oct 1987 cost $263k; load fund cost $144k; Deere: $1,000 (1985) → $230k |

## Data provenance

- **S&P 500 annual total returns (dividends included), 1976–2024:** actual history, hard-coded in each script.
- **2025 return:** a **+10% placeholder**, flagged in `fortune.py` — replace with the actual figure if precision past end-2024 ever matters. `keisha_529.py` doesn't use it (the 529 value is measured at start of 2025).
- **Deere & Co.:** modeled at a flat ~14%/yr long-run total return, sanity-checked against split-adjusted price anchors (~$4.50 in early 1985 → ~$460 in 2026, ~11% price-only, plus ~2% average reinvested dividend yield).
- **SDSU costs:** published 2026–27 cost of attendance $26,192 for a resident on campus (sdstate.edu, checked July 2026); average net price after grants/scholarships ≈ $18,000.
- **Loan figures:** federal Direct Loan caps for dependent students — $5,500 freshman, $6,500 sophomore, $7,500 junior/senior. The sophomore cap is why $6,500 is not adjustable.
- **Historical anchors used narratively:** IRAs opened to all workers in 1982 ($2,000 limit); 8.5% front loads were standard on sold funds in the late 1970s; Black Monday (Oct 19, 1987, −22.6% in a day, ~−34% peak to trough) fell five months into the real Sioux Falls John Morrell strike; the 1985 farm crisis is when Deere was cheapest and most despised.

## Modeling simplifications (deliberate)

- Deposits land at the start of each year and earn that full year's return.
- No taxes, no RMDs, no fund fees after the 1989 no-load re-entry, no withdrawals in retirement (Social Security plus frugality cover her life).
- The 1987 panic is modeled as a −20% year (rode it down, sold near the bottom) followed by +7% in CDs for 1988.
- Retirement (2013) allocation: 75% at a flat 4.5% safe rate, 25% still at S&P returns. The equity sliver's *narrative* face is the Deere certificate, modeled separately as a lump sum; the ~$230k results agree, which is the point, but they are two views, not additive.
- Keisha's 529 de-risks at the end of 2021 (4% thereafter) — Estelle's signature move, and it dodges the 2022 crash.

## Drafting boundary

None of these rates, percentages, or model details belong on the page. The bible's rule: money appears in the prose as deposits, dates, totals, objects, and paperwork — a $400 January habit, a $1,000 certificate in a deposit box, statements that show the drops but never a sale.

# Compound — Season 1 Redesign Plan

Story-driven, education-only web app teaching money and investing to teen girls (16–18).
This document is the self-contained design for the redesigned Season 1: characters, story,
episode map, teaching points, and guardrails. It supersedes the 7-episode structure currently
in `src/content/lessons/` (see "Delta from the current build" at the end).

---

## 1. The premise

Grandma Elena is having a garage sale. She hires her granddaughter and three friends to help
price fifty years of her life — and in the boxes they find the first of the artifacts that will
unspool her story all summer. To earn real money of their own, the girls launch an agua fresca
stand at the Saturday farmers market. Elena stakes them **$30 for 30% of the profit** — a deal
they sign fast and spend the season understanding.

By the end of the summer they have run a business, read its books, valued it, nearly lost it to
one rained-out Saturday, discovered what Elena has quietly owned since 1976, and — the finale —
put their own summer profits into accounts with **their own names on them**.

**Form model:** *Rich Dad Poor Dad* — mentor parable, contrarian reframes,
experience-before-explanation, a late wealth reveal — but never its substance: no get-rich
promises, no contempt for jobs, school, or savers, and every number computed under the
`finance.ts` guardrail (§8).

---

## 2. Two-layer structure

- **A-plot (the subject): the girls' summer.** The garage sale, the booth, the ledger, and each
  girl's live problem — Keisha's tuition gap, Emily's avoidance, Maya's earn-everything-keep-
  nothing, Sofi's cash-only household. The girls live Elena's eleven-year arc (tin box →
  understanding → own-name accounts) at compressed speed, in one summer.
- **B-plot (the mystery): Elena's life,** discovered through artifacts — one per episode, each
  surfacing exactly when the curriculum needs the concept it embodies. Her story ends one
  episode before theirs does; **the finale belongs to the girls.** If the season tips into being
  *about* Elena, it loses the audience's self-recognition.
- **The standing misdirection:** a grandmother selling her belongings reads as *needs the
  money*. The reader spends most of the season quietly worried Elena is broke — which makes the
  reveal land. The truth (paid off in the finale): she was never liquidating; she was
  *distributing*. The garage sale was the audition.

---

## 3. Characters

### The girls

- **Sofi — the blank slate.** Curious, direct, unembarrassed; asks what everyone else is afraid
  to. Cash-only household; her mom's "keep it safe" is the season's loving counter-voice. Booth
  role: the product — the agua de jamaica is her family's recipe — and cash handling, where her
  household's competence is a strength on screen from week one. Her arc closes when the
  forgotten $20 is finally deposited, her mother beside her.
- **Emily — the avoider, and the math brain.** Quiet, precise, says the scary thing softly.
  The girl who aces calculus and won't open her banking app: the math was never her problem —
  *looking* was. She talks out every computation the season needs (inflation, break-even,
  payback years) but goes silent when asked about her own money. Booth role: pricing,
  break-even, the unit math. Finale payoff: she slides over a printed account confirmation,
  already done, opened alone — precision finally pointed at herself.
- **Maya — the hustler + spender.** Fast, funny, a little loud; jokes first, listens second.
  Carries the "earn a lot, keep nothing" thread — peer-level, self-inflicted, funny, never
  shamed. Booth role: front of the stand, the seller; mid-season her thrift-flip rack joins the
  booth (born from the garage-sale leftovers). Her audit ("you made $84 — you *kept* $11") and
  her eventual Roth ("keeping has a container now") are the proof the porch works.
- **Keisha — one step ahead.** Grounded, practical, asks the follow-up question that matters.
  Real stakes: a tuition gap due in August. Keeper of the ledger — and of the pay envelope the
  porch rules get written on. Booth role: the books, alongside Emily. Her thread teaches
  horizon: tuition-in-August money is not investing money.

**Character math pattern — Emily computes, Elena means.** Emily produces the number in story
beats; Elena (or the artifact) tells you what the number did to a person. Sofi's blunt
questions license Emily to compute out loud; Maya demands the translation ("English, Em"),
keeping math conversational; Keisha converts it to action ("okay, but what do we *do*?").

### The adults

- **Nadia — the near-peer mentor.** Warm, wry, the cool older sister. Voices concepts that need
  an older voice, not a smarter one; covers teaching duty when Elena is off-stage.
- **Grandma Elena — the living proof.** Dry, unhurried, lands the line that stops the room. Her
  full canon is §5. On the booth she is a **silent partner**: audits the ledger, asks one
  question, never manages.
- **The home chorus (off-screen).** Conventional "keep it safe" wisdom, Sofi's mom foregrounded
  — quoted with love, never argued with directly, occasionally right. The porch answers the
  idea, never the person. No parent or girl is ever the villain or the fool. Sofi's mom appears
  lightly at the market (she knows this world) and on screen in the finale.

---

## 4. The business (A-plot spine)

- **The product: agua de jamaica** (hibiscus-lime, iced) — Sofi's family recipe. Chosen because
  it is a real, current teen business (youth vendor booths at farmers markets are documented),
  the unit economics are clean and cheap (a $10 bag of dried hibiscus brews gallons; Elena's
  $30 genuinely covers launch), it photographs like a product that would actually sell, and it
  is the lemonade stand aged up — same folding-table DNA, none of the eight-year-old
  connotations. (Kombucha was considered and rejected: home brews run 0.5–3% ABV, making it
  legally an alcoholic beverage minors can't sell.)
- **The deal: $30 for 30% of profit.** Signed fast because $30 sounds small. The season's
  pedagogical engine: equity, cost of capital, and read-before-you-sign, experienced before any
  of it is named. It retroactively joins the "everything strange Elena did was curriculum" list.
- **One product line, then two — and the second is a plot beat.** The booth launches with the
  drink alone. Mid-season a rained-out Saturday zeroes a weekend — one product, one corner, one
  weather system *is* one basket — and the fix is Maya's thrift-flip rack (sourced from
  garage-sale leftovers, tying the B-plot boxes back into the A-plot). Rain doesn't touch the
  rack; the rack doesn't sell out in heat waves: their own P&L demonstrates uncorrelated
  assets before anyone says the word. **Never more than these two lines.**
- **The 30% payoff (finale):** Elena never spent her cut. She invested it as it came in, and
  hands back brokerage confirmations **in the girls' names** — "your money was working while
  you were." This survives the rule that her gift is the ledger, not a check: it is their own
  money, grown.
- **Scale check (relatability):** real teen operations earn ~$30–80/mo casually, $150–350/mo
  stacking hustles, $500+/mo for a dedicated build. Season totals (Maya's ~$900 summer,
  Keisha's ~$2,400 with shifts elsewhere) stay inside that band. The booth is connective
  tissue, not the show — if an episode spends more pages on inventory than on the garage
  boxes, the stand has gotten too big.

---

## 5. Elena canon (B-plot spine)

- **Elena is both dads in one lifetime.** Young Elena (19, 1965) is the "Poor Dad": tin box
  under the bed, then the passbook — safe, rule-following, quietly losing. Her conversion is
  the 1976 brokerage slip: **First Index Investment Trust** (Vanguard's first index fund,
  launched late August 1976, mocked as "Bogle's folly" — don't put it on sale earlier). From
  1976 on: index core plus a few studied companies, held through every crash, **~$1.7M by
  2026**.
- **The conversion trigger (the reveal's emotional payload):** divorce ~1975 forces Elena to
  look at the paperwork alone — and she discovers she was *financially invisible*: accounts,
  credit, house, all in his name. Her decade of passbook saving was the only thing that was
  hers, and 1974's ~11% inflation had been eating it in plain sight. The vow is **"never
  invisible again"** — not "get rich." The Equal Credit Opportunity Act (1974) had just made an
  own-name account possible without a husband's signature — something her mother literally
  couldn't have done. The ex stays off-screen and un-villained (the villain is the arrangement,
  not the man); the telling is a few dry Elena lines, not a flashback.
- **The reveal reframes, not impresses.** The point is not the ~$1.7M — it's that every strange
  thing Elena did all season (the $30-for-30% deal, refusing to sell the necklace, making the
  $20 wait, keeping every receipt since 1975, keeping the dead certificate) retroactively reads
  as a curriculum she'd been running since the garage sale: she was auditioning the heirs to
  the lesson.
- **THE TWIST STAYS UNSPOILED EVERYWHERE.** No student-facing copy anywhere (home page, taglines,
  episode descriptions before the reveal) may confirm Elena is rich — raise the question, never
  answer it. A $1,050 necklace, a garage sale, and old certificates don't confirm wealth; only
  the ~$1.7M does. All artifact values before the reveal must stay well under numbers that
  would give it away.
- **Elena never disowns the tin box.** Her authority with cash-only families comes from "I *was*
  your mom — the tin was step one." Every step of her arc (tin → passbook → index fund) was
  rational with the information she had.
- **The forgotten $20 is the control group.** Found in the 1965 pay envelope in Episode 1; the
  one deposit that made neither journey. Before the season ends it gets priced along three
  paths — envelope (~90% of buying power gone), passbook (roughly treads water), index fund
  (the big number) — all computed in `finance.ts`. In the finale Sofi finally deposits it, her
  mother beside her.
- **Teaching voice.** The lesson arrives in Elena's mouth (teaching beats set `voicedBy`); when
  she is off-stage her voice arrives in *writing* on the artifact. Nadia may voice near-peer
  concepts. Narrator-voiced teaching is the exception, not the default.
- **Porch Rules.** One numbered maxim per episode, distilled by the girls at each close and
  written on the back of the 1965 pay envelope (Keisha keeps it — the Poor Dad artifact becomes
  the club's rulebook). Rules live in each lesson's `porchRule` field and render on the
  completion screen; episodes open by reciting the rules so far.

---

## 6. Exit profile (backward design — what a girl can do by the end)

**Terminal outcome, one sentence:** *she can take money she earned, open the right account with
a parent, put it in an index fund, and defend that choice out loud to a skeptical adult —
including why it isn't gambling and why her name on the account matters.*

**Can DO** (the finale is the assessment):
1. Keep a simple ledger — know what she earned, spent, and *kept*.
2. Compute profit for a real venture — revenue − costs, including the costs that hide.
3. Run the time math — compare "small now" vs. "big later" with compound growth and pick right.
4. Sort money by horizon — tuition-in-August money vs. decade money; only one may be invested.
5. Spot a one-basket setup in her own life (income, savings, or portfolio) and name the fix.
6. Ask a business the quality questions (do people come back? why can't it be copied?) and the
   price question (how many years of earnings am I paying?).
7. **Refuse the pitch** — meme stock, lottery, "my cousin says" — with two questions: *what do
   I own?* and *where does the return come from?* (Drilled ≥3 times across the season; a girl
   kills a bad pitch faster each time.)
8. Open the account — custodial vs. Roth, what each requires — and have the parent conversation.
9. Automate a small contribution and hold through a dip.

**Can EXPLAIN (no jargon):** why cash sitting still loses; why the compounding curve bends and
why time is the teen's lever; what a share literally is and why stock returns aren't someone
else's loss; why a crash is a price not a verdict (down 50% needs up 100%); what makes a
business compound and what "payback years" means; what an index fund holds and why most pros
lose to it; account vs. fund (container vs. contents); why the name on the account is the point.

**BELIEVES (the actual product):** "I was never bad at money — nobody had shown me the game,"
and now someone has; boring wins — early and consistent beats brilliant; money is talkable, out
loud, without shame.

---

## 7. Episode map (10 episodes)

Each episode: A-plot story · artifact (B-plot) · teaching points · decision · porch rule.
Structural rhythm: experience first, porch names it after; every episode ends on a hook.

### Ep 1 — The $20 in the Garage *(inflation)*
- **Story:** Elena hires the girls to price fifty years of stuff for her garage sale. Hook:
  *why is she selling everything?* In a coat pocket box: a 1965 pay envelope with $20 still in
  it. Sofi: "It's still $20, right?" Emily, almost to herself, talks out what $20 bought in
  1965 vs. now. Maya: "English, Em." Emily: "It got robbed. Slowly." Elena watches her do the
  math and says nothing — first entry in the audition list.
- **Artifact:** the 1965 pay envelope + the forgotten $20 (becomes the club rulebook and the
  season's control group).
- **Teaching:** inflation is the invisible pickpocket; "safe" isn't the same as static; buying
  power vs. face value.
- **Decision:** what to do with the found $20 — spend it / tin box / "make it wait" (Elena's
  strange insistence: not for today).
- **Porch Rule #1: Money sitting still is money shrinking.**

### Ep 2 — The Fifty-Dollar Necklace *(store of value)*
- **Story:** the sale itself. A buyer offers real money for a plain gold necklace; Elena: "not
  for sale." Its receipt — 1975, $50 — surfaces; the necklace is worth ~$1,050 now. "The first
  pretty thing I ever bought that nobody co-signed." (Planted runway for the reveal; note her
  receipts start in 1975.) The girls watch what holds value across a folding table all day and
  what goes for a dime. Close: watching money change hands all afternoon, the girls pitch the
  booth; Elena offers **$30 for 30% of the profit**; they sign fast. Hook: Keisha, later,
  re-reading the one-page deal.
- **Artifact:** the necklace + its 1975 receipt.
- **Teaching:** stores of value — real things hold what paper drops; why some objects survive
  fifty years of inflation and others don't; (seed, unnamed) read what you sign.
- **Decision:** pricing table — which garage-sale objects held value and why.
- **Porch Rule #2: Real things hold what paper drops.**

### Ep 3 — The First Saturday *(cost, revenue, profit)*
- **Story:** booth launch at the farmers market. Sofi's recipe, Maya selling, Keisha's ledger,
  Emily's unit math, Sofi's mom nearby, competent, cash-handling like a pro; the tin box under
  the table respected on screen. They count $84 and start spending it in their heads — then
  Elena, ledger open, walks them backward: hibiscus, sugar, cups, ice, the sign, her 30%. Maya:
  "I made $84!" Emily proves: "you *kept* $11." Hook: profit is a different number than money.
- **Artifact:** Elena's 1970s grocery ledger — every cent tracked; the habit that made
  everything after it possible.
- **Teaching:** revenue − costs = profit; hidden costs; whoever owns a slice owns a slice of
  the *profit*, not the revenue; margins kept to plain subtraction, no accounting vocabulary.
- **Decision:** price the cup — three price points with computed outcomes (sell out but earn
  little / balanced / high price low volume).
- **Porch Rule #3: Profit is what's left, not what comes in.**

### Ep 4 — Grandma's Missing Fortune *(compound interest)*
- **Story:** the reinvest-or-spend fight over the first profits: second cooler and bigger batch,
  or pocket it? Reinvested profit makes next Saturday's profit bigger — they *live* compounding
  at weekly speed before Emily runs the sixty-year version. Then the artifact: what if Elena's
  passbook decade had been invested instead?
- **Artifact:** the savings passbook (1965–1976) — a decade of deposits, insultingly small
  interest.
- **Teaching:** interest earning interest; the curve starts insultingly slow, then bends; time
  is the lever a 16-year-old owns most of; small + early beats big + late. Numbers (computed):
  $20/mo × 60y ≈ $222k vs $14,400 deposited; $100/mo from 16 ≈ $545k vs from 26 ≈ $262k; ten
  early years then stop beats forty late years.
- **Decision:** the booth's first profit split — reinvest all / take all / reinvest half.
- **Porch Rule #4: Small and early beats big and late.**
- **Interactive:** `snowball` — stacked contributions-vs-growth curve, start-age race,
  crossover marker where growth out-earns deposits.

### Ep 5 — A Slice, Not a Ticket *(what a stock is)*
- **Story:** Keisha's re-read lands: Elena owns 30% of *every* Saturday, forever? The porch
  names it: that's a **share** — legal part-ownership of a real business; a share of Apple is
  the girls' deal with more zeroes. Lottery contrast: every jackpot needs losers; profit
  doesn't. The girls realize they already fund these companies as customers.
- **Artifact:** a 1980s dividend check stub — "the bakery paid me for owning it. I never swept
  a floor."
- **Teaching:** share = ownership; returns come from profits/dividends, not from someone
  losing; price wiggles daily, the business changes slowly (ticker = mood ring). Powerball odds
  (~1 in 292M) as labeled fact. **Refuse-the-pitch rep #1:** a classmate's meme-stock tip dies
  on the two questions.
- **Decision:** Maya's $60 flip profit — meme-stock tip / slice of a brand she resells /
  lottery tickets.
- **Porch Rule #5: Buy the slice, not the ticket.**

### Ep 6 — The Two Certificates *(what makes a business worth holding)*
- **Story:** detective episode. Elena is away visiting Beto; boxing the garage-sale leftovers,
  the girls find **two paper stock certificates from the 1980s** — engraved, official, utterly
  dead as a format. They investigate: one company compounded for four decades; the other was
  *unstoppable* at purchase and is now gone. Elena's voice arrives in writing on the sleeve.
  On her return (or in the note): "I keep the dead one where I can see it. It's why I own
  everything now." Hook: the dead certificate's question hangs — how do you not be her?
- **Artifact:** the two certificates — the winner and the corpse.
- **Teaching:** the reinvestment flywheel — a business that reinvests profit into more capacity
  compounds like money in a fund, same bending curve, same reason; the quality questions: *do
  people come back without being asked? does it keep more of each dollar as it grows? why can't
  the shop across the street copy it?* (moats, never the word); why you hold — the curve bends
  late, and selling an exponential business in year five is leaving before the part it was for.
- **Decision:** the girls' own flywheel — which reinvestment actually compounds the booth
  (bigger batch / a second location Saturday / a sign and free samples)?
- **Porch Rule #6: Buy the machine, not the moment.**
- **Authoring flag:** company choices decided at writing time (winner: an Apple-scale 1980s
  compounder, position sized small so its value stays *well under* the reveal number; corpse:
  a Blockbuster/Kodak-type teens recognize). Historical facts labeled; all dollar outcomes
  computed in `finance.ts`.

### Ep 7 — What's the Booth Worth? *(valuing a business by earnings)*
- **Story:** a smug neighboring vendor offers to buy the booth — name, recipe, corner. Suddenly:
  what is a business *worth*? Emily builds the tool from scratch: **payback years** — price ÷
  what it earns per year. The booth clears ~$300 a summer; $600 is two summers; $15,000 is
  fifty. At the end she discovers grown-ups print this number next to every ticker (P/E, named
  once, at the close). Elena still away; her voice in writing — an old newspaper listings page
  with her pencil note: "12 years' earnings — too dear."
- **Artifact:** 1980s stock-listings page, Elena's pencil arithmetic in the margin.
- **Teaching:** price is what you pay, earnings are what the machine makes; payback years (P/E
  without jargon); a growing machine is worth more years — but **a great company can be a
  terrible price**; pay 200 summers for anything and you bought the hype, not the business.
- **Decision:** the offer — sell the booth at the offered price / keep it / counter (computed:
  what the booth earns vs. what's offered).
- **Porch Rule #7: Price is what you pay, years are what you count.**

### Ep 8 — The Rainout *(risk & diversification)*
- **Story:** a rained-out Saturday zeroes the weekend. One product, one corner, one weather
  system. Maya's audit lands here too: ~$900 earned this summer, almost nothing kept — a
  one-hustle income is itself one basket (funny, never shaming). The fix: her thrift rack joins
  the booth. The girls re-read the 1974 clipping and see it new. Keisha's tuition money forces
  the horizon question. **Refuse-the-pitch rep #2:** a hyped stock as the answer to her gap.
- **Artifact:** a 1974 crash clipping, Elena's margin note dated Oct '74: everyone selling;
  prices only look scary if you're leaving. (The reveal episode re-reads it: *she was
  shopping.*)
- **Teaching:** risk is the admission price of growth; one company can go to zero, the whole
  market never has; basket arithmetic (1 of 10 dies → −10%; one basket → −100%); down 50%
  needs up 100% (`gainToRecover`); a crash is a price, not a verdict — only selling or
  bankruptcy locks it in; horizon sorting: tuition-in-August money is not investing money.
  Numbers: S&P peak Jan 1973 (120.24) → trough Oct 1974 (62.28) ≈ −48%; trough → today,
  labeled price-only.
- **Decision:** Keisha's tuition-gap money vs. the hyped stock — all-in / diversified basket /
  savings. Savings is correct: horizon decides, not courage.
- **Porch Rule #8: All the eggs, never one basket.**
- **Cliffhanger:** how do you own everything without being an expert?

### Ep 9 — Own Everything, Quietly *(index funds + THE REVEAL)*
- **Story:** Elena answers the cliffhanger: an index fund — hundreds of companies in one
  purchase; every future flywheel owned automatically, without finding them first. Then the
  1976 slip resurfaces, and the dry lines land: the divorce, the paperwork in his name, the
  discovery she was invisible, the vow, the mocked new fund bought two years after a crash
  halved the market. The girls do the math; Elena is unsurprised. Guardrails inside the scene:
  "someone showed me the game; nobody showed your mom," and the check Keisha never asks for is
  refused before it's asked.
- **Artifact:** the 1976 brokerage slip — First Index Investment Trust.
- **Teaching:** index fund = the whole market in one purchase; instant diversification (answers
  Ep 8); most pros lose to the boring index — fees and wrong guesses compound too; you don't
  have to be smart, just consistent; the name on the account is the point. Numbers (computed):
  `elenaPortfolio2026()` — labeled contribution tiers rising with wages, at 10.5% nominal ⇒
  **≈ $1.68M from ~$84k contributed** (tested 1.6–1.75M). The $20 three ways: envelope (~$2 of
  1965 buying power) / passbook (~$210) / riding the 1976 buy (≈ $2,900).
- **Decision (set before the reveal):** 1976 Elena, divorce papers signed, everything in his
  name — tin box / passbook / the mocked new fund.
- **Porch Rule #9: Boring wins — own everything, hold on.**

### Ep 10 — Where the Money Lives *(accounts + the four jars + finale)*
- **Story:** the season's earnings are real; where do they live? Account = container, fund =
  contents (backpack ≠ books). Custodial brokerage (teen + adult, legally hers). Roth IRA needs
  **earned income** — and booth profit and reported resale profit qualify: the summer just made
  them eligible for the best container there is. Then Elena draws **the four jars** on the back
  of the envelope — her map, not medicine. Finale beats, one each: rules recited → the 30%
  payoff (Elena hands back brokerage confirmations in the girls' names — she invested their cut
  all season; "your money was working while you were") → Sofi deposits the 1965 $20, her mom
  beside her (the tin respected to the end) → Keisha's split → Maya's Roth ("keeping has a
  container now") → Emily slides her printed confirmation over, already done → confirmations
  taped opposite the 1976 slip → Rule #10 → Elena hands the envelope forward. Final image: old
  slip, new names, one page apart.
- **Artifact (from the present):** account confirmations with *their* names on them.
- **Teaching — accounts:** custodial vs. Roth; Roth mechanics (earned income; contribute up to
  min(earnings, limit) — `maxRothContribution`; `ROTH_LIMIT_2026 = 7500`, labeled
  check-current-year; tax-free growth at her horizon; contributions retrievable — patience
  rewarded, not jailed); the parent conversation; where-to-start close (app points, never
  executes).
- **Teaching — the four jars (Elena's map, no percentages given as advice):**
  1. **Cash** — money with a *date* on it (tuition in August). Answers Ep 8's horizon lesson.
  2. **TIPS ETF** — the pickpocket-proof jar: savings inflation can't eat. Closes the loop
     opened in minute one of Ep 1 — and redeems the safety instinct: Sofi's mom was right to
     keep it safe; the tin was just the wrong safe. Contrast without contempt, paid in full.
  3. **Index funds** — the everything jar; decade money; the core.
  4. **A few studied companies** — the learning jar: small, last, funded only after the others
     exist; tuition for understanding businesses (Eps 6–7), not the engine of wealth. Elena's
     own mix is the precedent.
- **Decision:** Keisha's ~$2,400 vs. the ~$3,000 gap — all at the gap / all Roth / **gap first
  + small Roth + cash buffer** (correct; the choice is hers; Elena's gift is the ledger, not a
  check). Numbers: `futureValueLump(1000, 49y, 7%)` ≈ $27.5k; the $20's future ≈ $550.
- **Porch Rule #10: Your name goes on your money.**

---

## 8. Guardrails (non-negotiable)

1. **The finance.ts guardrail:** any number a lesson presents as fact is computed in
   `src/lib/finance.ts` from labeled constants (or clearly marked illustrative) and tested in
   `finance.test.ts`. Booth math ($30 stake, 30% split, unit costs, payback years) becomes real
   tested functions — Ep 5 reuses the same profit-split math for shares.
2. **Number conventions:** forward-looking growth uses `ILLUSTRATIVE_RETURN = 0.07` (long-run
   US stocks ~10% nominal minus ~3% inflation ⇒ figures in today's buying power; also keeps the
   Ep 4 counterfactual ≈ $222k safely below Elena's ~$1.7M). Elena's historical math uses
   `INDEX_RETURN_1976_2026 = 0.105` nominal (conservative round-down of S&P 500 total return).
   All artifact values before Ep 9 stay well under reveal-confirming numbers.
3. **The twist stays unspoiled** in all student-facing copy before Ep 9 (see §5).
4. **Education, never advice.** The app points, never executes; the four jars are Elena's map,
   not a recommended allocation; no percentages prescribed; no "buy Apple" implication — the
   certificate episode ends on the honest turn (spotting the next flywheel ahead of time is so
   hard most professionals fail, which is why you own all of them).
5. **Tone:** smart, a little irreverent, never condescending or pink-washed; confidence over
   completeness. No parent or girl is ever the villain or the fool.
6. **All content original** — no copyrighted lyrics, quotes, or third-party curriculum text.
   Historical facts (Apple's IPO date, the 1976 fund launch, ECOA 1974, 1973–74 crash figures)
   are usable as labeled facts.
7. **User-facing units are "episodes"** ("Episode 1", `/episode/:slug`); code identifiers,
   file names, and storage keys keep `lesson` naming.

---

## 9. Delta from the current build

The repo currently ships 7 authored lessons (`lesson-01` … `lesson-07`). This plan:

- **Keeps** Eps 1–2 (inflation, necklace) with a new frame (garage sale inciting incident;
  booth deal struck at Ep 2's close) — revision, not rewrite.
- **Inserts** Ep 3 (profit), Ep 6 (two certificates), Ep 7 (valuation) as new lessons.
- **Reworks** compounding (adds reinvest-or-spend), stocks (Elena's 30% named), risk (rainout +
  thrift rack), index/reveal (moves from lesson-06), accounts/finale (adds the four jars and
  the 30% payoff) around the booth spine.
- **Renumbers** porch rules to the ten in §7 and re-orders artifacts per episode as above.
- Character registry: Emily's entry gains the math-brain role; Sofi's entry gains the recipe/
  cash-handling booth role; Maya's resale thread merges into the booth's second line.

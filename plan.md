# Compound — Season 1 Redesign Plan (v2)

Story-driven, education-only web app teaching money and investing to teen girls (16–18).
This document is the self-contained design for the redesigned Season 1: characters, story,
episode map, teaching points, and guardrails. It supersedes both the 7-episode structure in
`src/content/lessons/` and the prior 10-episode plan (see "Delta" at the end).

**What changed in v2, in one paragraph:** thirteen episodes in three acts. Keisha is Elena's
granddaughter and the emotional lead; her declined dream school (a public flagship, ~$20k/yr
all-in) runs under the whole season and pays off in a second reveal — a 529 Elena opened when
Keisha was two — placed at the very end, *after* the girls' self-made finale, so the rescue can
never contaminate the agency. Nadia and Beto are cut; Marcus (Maya's older brother, a busy,
losing day trader) joins as near-silent wallpaper. Two new episodes fix the old soft middle
(The Two Coolers, Payout Day), a Peter Lynch episode is added (The Shoebox), the girls get an
accounts-and-first-buys triumph episode of their own (Opening Day), and Act II gains a real
fracture (the ad fight) plus a second (Keisha's thumb on the confirm button). Each girl carries
one non-financial "civilian" want that collides with the money story. Porch rules are demoted
from liturgy to graffiti. Stocks and brokerages are named out loud under a three-tier policy.
Taxes enter as three short beats. Fees, the last mile of account-opening, and scam-vs-hype get
explicit coverage.

---

## 1. The premise

Grandma Elena is having a garage sale. She hires her granddaughter Keisha and three friends to
price fifty years of her life — and in the boxes they find the first of the artifacts that will
unspool her story all summer. To earn real money of their own, the girls launch an agua fresca
stand at the Saturday farmers market. Elena stakes them **$30 for 30% of the profit** — a deal
they sign fast and spend the season understanding.

By the end of the summer they have run a business, read its books, valued it, fought over it,
nearly lost it to one rained-out Saturday, discovered what Elena has quietly owned since 1976,
opened accounts with **their own names on them** — and, in the last scene, one of them learns
that someone has been quietly betting on her since she was two years old.

**Form model:** *Rich Dad Poor Dad* — mentor parable, contrarian reframes,
experience-before-explanation, a late wealth reveal — but never its substance: no get-rich
promises, no contempt for jobs, school, or savers, and every number computed under the
`finance.ts` guardrail (§12). **Method model:** Peter Lynch — invest in what you know, as a
*starting point* that the quality questions and payback math must still confirm.

---

## 2. Structure: two layers, three acts, two reveals

- **A-plot (the subject): the girls' summer.** The garage sale, the booth, the ledger, the
  fights, and each girl's live problem. The girls live Elena's eleven-year arc (tin box →
  understanding → own-name accounts) at compressed speed, in one summer.
- **B-plot (the mystery): Elena's life,** discovered through artifacts — one per episode where
  possible, each surfacing when the curriculum needs the concept it embodies. If the season
  tips into being *about* Elena, it loses the audience's self-recognition.
- **Three acts:** Act I *appetite* (Eps 1–5, money in and out), Act II *doubt* (Eps 6–10, the
  rules under fire), Act III *truth → agency → love* (Eps 11–13).
- **Two reveals, strictly ordered:**
  1. **Ep 11 — the Elena reveal** (~$1.7M, the 1976 vow). Reframes, never impresses.
  2. **Ep 13 — the 529 reveal** (Keisha's, ~$30k, opened at age two). Placed *after* Ep 12,
     where the girls execute everything alone — so the season's thesis ("she can do this
     herself") is proven on-page before any gift appears.
- **The standing misdirection:** a grandmother selling her belongings reads as *needs the
  money*. The reader spends most of the season quietly worried Elena is broke. The truth: she
  was never liquidating; she was *distributing*. The garage sale was the audition.
- **Structural rhythm:** experience first, the envelope names it after; every episode ends on
  a hook.

---

## 3. Characters (final cast)

### The girls

Each girl has a booth role, a money thread, **and one civilian want** planted in Act I that
collides with the money story later. Test for the whole cast: *a reader can describe each girl
without mentioning money.*

- **Keisha, 18 — the lead. One step ahead, and too proud to ask.** Grounded, practical, asks
  the follow-up that matters. Elena's granddaughter. Got into her dream school — the state
  flagship, four hours away, dorms, a life of her own — ran the number once (~$20k/yr all-in),
  closed the laptop, and told everyone the commuter college "makes more sense." Her real
  August problem is a ~$3,000 gap *for the settled-for school* — a detail meant to quietly
  break hearts. Civilian want: the admitted-students group chat she never left; the roommate
  questionnaire she never returned; a girl in that chat posting dorm hauls all summer. Booth
  role: the books (with Emily); keeper of the ledger and the envelope. Flaw: she never asks
  for help — which makes her Elena's mirror (Elena's whole life is hiding what she has).
  Payoffs: Ep 10 near-miss and audit; Ep 12 plan built and defended alone; Ep 13 the 529, the
  anger, the reconciliation.
- **Emily, 16 — the avoider, and the math brain.** Quiet, precise, says the scary thing
  softly. Aces calculus, won't open her banking app: the math was never her problem —
  *looking* was. Talks out every computation the season needs. Her wound gets exactly one
  on-page scene (Ep 5: dinner at her house, her dad's one question, the temperature drop;
  never explained — negative space, trusted). Booth role: pricing, break-even, unit math,
  attribution. Payoff: on Opening Day she slides over a printed confirmation — already done,
  opened alone, weeks ago — precision finally pointed at herself.
- **Maya, 17 — the hustler + spender.** Fast, funny, a little loud; jokes first, listens
  second. Earns ~$900 across the summer, keeps almost nothing — and the ledger eventually
  shows *where it went*: an off-page breakup (Ep 3, arriving as a mood; the boy stays
  off-screen and un-villained — this book never stages a bad man, only bad arrangements), a
  season of buying belonging. Civilian want: the concert — tickets bought for two, attended
  with the girls instead. Booth role: front of the stand; the ad push; mid-season her
  thrift-flip rack joins the booth. Arc: rages at Elena's 30% on Payout Day → demands a
  bigger cut for her ad in the fight → ends holding a Roth ("keeping has a container now" —
  no longer a joke about money; a line about self-worth). Drafting watch-out: she carries the
  most threads; they cohere because they are all one thing — *Maya seeks value outside
  herself* — but her comic voice must survive.
- **Sofi, 15 — the unembarrassed question-asker.** Curious, direct; asks what everyone else is
  afraid to. Cash-only household; her mom's "keep it safe" is the season's loving
  counter-voice. Booth role: the product (agua de jamaica is her family's recipe) and cash
  handling — her household's competence on screen from week one. Civilian want/pressure: her
  cousin's quinceañera — in her world money carries family claims, and her earnings are
  expected to contribute; family-money-with-a-date vs. her-money-for-later is the horizon
  lesson at kid scale. Her silent exit is the heartbreak beat of the ad fight (pricing
  contributions accidentally prices her recipe — the one thing given in love). Arc closes when
  the 1965 $20 goes into an account with *her* name, her mother beside her, after a summer of
  money that belonged to everyone.

**Character math pattern — Emily computes, Elena means.** Emily produces the number; Elena (or
the artifact) says what the number did to a person. Sofi's blunt questions license Emily to
compute out loud; Maya demands the translation ("English, Em"); Keisha converts it to action.

### The adults

- **Grandma Elena — the living proof.** Dry, unhurried, lands the line that stops the room.
  Full canon in §4. On the booth she is a **silent partner**: audits the ledger, asks one
  question, never manages. She never recites a rule — she says the crooked, dry version; the
  girls translate it into envelope language.
- **Sofi's mom — the loving counter-voice.** "Keep it safe," quoted with love, never argued
  with directly, occasionally right — the season redeems the instinct (the tin was the wrong
  *safe*, not the wrong impulse). Lightly at the market; on screen in Ep 12 (the parent
  conversation) and Ep 13 (beside Sofi at the deposit).
- **Marcus, 24 — Maya's older brother. Wallpaper with a ticker on it.** Lives at home, real
  job, treats trading as a second job: three screens, pre-market alarms, alerts at dinner.
  Genuinely hardworking — the book never mocks the effort, only audits the result. Signature
  behaviors, each a lesson wearing clothes: posts the wins, deletes the losses (survivorship
  bias); "up $400 today," never "this year" (time-frame cherry-picking); can't sit still
  through a dip; ten trades a week (churn — and short-term gains split with the IRS). **Maybe
  five spoken lines all season.** Arc entirely in the background: screenshots (3–5) → spike
  (6–7) → peak (10) → crater, off-screen (10) → scoffs at the finale and absorbs Keisha's
  defense (12) → quietly, to Emily: "how do you open the boring one?" (12–13). Never
  humiliated; still around after; a little quieter. His function in one phrase: **loud money
  vs. quiet money** — his money sleeps while he works; Elena's works while she sleeps.

### Margins (one scene or off-screen)

- **Keisha's mom** — one beat, Ep 13: she never knew about the 529 either. Plant in Ep 7
  (why does she never mention Elena's money?).
- **The smug vendor** — Ep 7's buyout offer; one scene.
- **The home chorus** — off-screen conventional wisdom, quoted with love; no parent or girl is
  ever the villain or the fool.
- **Elena's ex** — off-screen, un-villained; the villain is the arrangement, not the man.
- **The regulars** — the Saturday woman who always buys the jamaica; gossiped about, secretly
  loved. Ambient proof the product works (feeds Ep 8).

**Cut from v1:** Nadia (her one irreplaceable job — proof that year one looks like nothing —
moves to a single artifact beat in Ep 12: a first-year statement, small and unimpressive, is
shown as *normal*) and Beto (Elena's Act II absence is now "her sister in Tucson").

---

## 4. Elena canon (B-plot spine)

- **Elena is both dads in one lifetime.** Young Elena (19, 1965) is the "Poor Dad": tin box,
  then passbook — safe, rule-following, quietly losing. Her conversion is the 1976 brokerage
  slip: **First Index Investment Trust** (Vanguard's first index fund, launched late August
  1976, mocked as "Bogle's folly" — don't put it on sale earlier). From 1976 on: index core
  plus a few studied companies, held through every crash, **~$1.7M by 2026**.
- **The conversion trigger:** divorce ~1975 forces Elena to look at the paperwork alone — and
  she discovers she was *financially invisible*: accounts, credit, house, all in his name. Her
  decade of passbook saving was the only thing that was hers, and 1974's ~11% inflation had
  been eating it in plain sight. The vow is **"never invisible again"** — not "get rich." The
  Equal Credit Opportunity Act (1974) had just made an own-name account possible without a
  husband's signature — something her mother literally couldn't have done. The telling is a
  few dry lines, not a flashback.
- **The shoebox is her method, not a quirk.** "Keeps every receipt since 1975" sits on the
  audition list all season as an oddity; Ep 8 reveals it as her research files: she never
  bought a company she wasn't first a customer of — and the box also holds the receipts of
  chains she loved and *never* bought (too dear on the payback math), including a video store.
  Familiarity nominates; the math decides.
- **The 529 (new canon).** Opened the year Keisha turned two (~2010); broad index funds;
  modest automatic deposits (~$60/mo, tiered up slightly with years) she never paused — not
  through 2020, not through 2022. In the last few years the mix glided: index stepping down,
  cash/stable stepping up, so freshman year sits in "money with a date on it" by design —
  Elena's choice on the page, not a product feature. Value at reveal **~$30–35k on ~$12–14k
  contributed** — more than half growth. Against an ~$80k dream it is a load-bearing beam,
  not the building: it converts *impossible* into *a plan* (529 + the aid letter Keisha never
  compared + her own earnings + work-study + possibly a small, eyes-open loan). Nobody at all
  knows it exists — not Keisha, not Keisha's mother. That secrecy is Elena's flaw: a woman who
  was erased once learned to hide what she has *from everyone*. Ep 13 is her last conversion:
  "never invisible" finally turns inward — she becomes visible to her own family.
- **The reveal reframes, not impresses.** The point of Ep 11 is not the ~$1.7M — it's that
  every strange thing Elena did all season (the $30-for-30% deal, refusing to sell the
  necklace, making the $20 wait, the receipts, the dead certificate) retroactively reads as a
  curriculum: she was auditioning the heirs to the lesson.
- **BOTH TWISTS STAY UNSPOILED EVERYWHERE.** No student-facing copy (home page, taglines,
  episode descriptions) may confirm Elena is rich before Ep 11, or hint at the 529 before
  Ep 13 — raise the questions, never answer them. All artifact values before Ep 11 stay well
  under reveal-confirming numbers.
- **Elena never disowns the tin box.** "I *was* your mom — the tin was step one." Every step
  of her arc was rational with the information she had.
- **The forgotten $20 is the control group.** Found in the 1965 pay envelope in Ep 1; priced
  along three paths before the season ends — envelope (~90% of buying power gone), passbook
  (roughly treads water), index fund (the big number) — all computed in `finance.ts`. In
  Ep 13 Sofi finally deposits it, her mother beside her.
- **Teaching voice.** Lessons arrive in Elena's mouth (teaching beats set `voicedBy`); when
  she is off-stage her voice arrives *in writing* on the artifact. Narrator-voiced teaching is
  the exception.

---

## 5. The business (A-plot spine)

- **The product: agua de jamaica** (hibiscus-lime, iced) — Sofi's family recipe. Real, current
  teen business; clean unit economics (a $10 bag of dried hibiscus brews gallons; Elena's $30
  genuinely covers launch); lemonade-stand DNA with none of the eight-year-old connotations.
  (Kombucha rejected: home brews run 0.5–3% ABV — legally alcohol minors can't sell.)
- **The deal: $30 for 30% of profit.** Signed fast because $30 sounds small. The season's
  pedagogical engine: equity, cost of capital, read-before-you-sign — experienced before
  named. The one-page deal is silent on sweat, recipes, and ads — which is what makes Ep 7
  possible.
- **The two-cooler scoreboard (Ep 4 onward).** The reinvest-or-spend vote splits 2–2; Elena:
  "run both." Each girl sets her own reinvest rate; the ledger tracks two public curves —
  poured-back vs. pocketed — invisible at first, quietly widening every episode, dented by the
  rainout. Compounding as set dressing, not lecture.
- **The ad fight (Ep 7).** Maya spends her own ~$40 (and her follower audience) on an
  Instagram push; Saturday spikes; Monday she demands a bigger cut. Both sides are right —
  the only kind of fight worth staging. Emily's attribution test (ad or heat wave?) forces
  math to pick a side; the gut punch is Sofi's silent exit (her recipe was given, not
  priced); the resolution re-reads the signed page and renegotiates labor and contribution
  like grown-ups. The envelope takes its first amendment.
- **One product line, then two.** The rainout (Ep 9) zeroes a Saturday — one product, one
  corner, one weather system *is* one basket — and the fix is Maya's thrift rack (garage-sale
  leftovers; rack profits split per the Ep 7 amendment). Rain doesn't touch the rack; the rack
  doesn't sell out in heat waves: their own P&L demonstrates uncorrelated assets before anyone
  says the word. **Never more than these two lines.**
- **The 30% payoff (Ep 13):** Elena never spent her cut. She invested it as it came in and
  hands back confirmations **in the girls' names** — "your money was working while you were."
- **Scale check:** real teen operations earn ~$30–80/mo casually, $150–350/mo stacking
  hustles. Season totals (Maya's ~$900 summer; Keisha's ~$2,400 with shifts elsewhere) stay in
  band. The booth is connective tissue, not the show — if an episode spends more pages on
  inventory than on people, the stand has gotten too big.

---

## 6. Keisha & the 529 (the season's emotional spine)

- **The want:** not prestige — *going away*. The flagship four hours off, a dorm, a room of
  her own. All-in cost labeled illustrative at **~$20k/yr ⇒ ~$80k for four years**
  (in-state tuition + housing + food; real averages float around there but vary by state —
  keep the label).
- **The grief:** she got in, ran the number once, declined — including an $80 housing
  deposit — and armored the wound with practicality ("the commuter school makes more sense").
  Practical Keisha weaponizing practicality against her own wanting is her flaw and Elena's
  flaw in one gesture.
- **The gap:** her live ~$3,000 August problem is for the *settled-for* school.
- **The order of operations (non-negotiable):** Ep 12, Keisha builds and defends her own plan
  (gap first + small Roth + cash buffer) with zero rescue in sight — the exit exam, passed
  alone. Only then, Ep 13, the 529.
- **The reveal has a cost:** Keisha's anger is earned and stays on the page — "You watched me
  panic all summer. I declined the *housing deposit*, Grandma. It was eighty dollars." Elena's
  answer is imperfect and human: part audition logic ("if I'd handed it to you in June, what
  would this summer have made you?"), part her own wound (hiding what she has, from everyone,
  including her daughter). The reveal is Elena's arc completing, not a deus ex machina.
- **The statement is the final teaching artifact:** sixteen years of the Ep 4 curve with
  Keisha's name on it; the 2020 crater and 2022 down year visible, deposits unflinching
  through both; the glide in the last years (jar 3 becoming jar 1 as the date approached —
  "money with a date on it doesn't get to ride"); growth > contributions (Emily notices the
  crossover out loud). One dry disclaimer line in-scene: that was a *good* sixteen years;
  nobody is promised those — you're promised the boring average, and the boring average was
  enough.
- **The readers without an Elena:** Maya's quiet "must be nice," not resolved too fast. The
  other three girls get no 529; their payoffs stay self-made. That is the book's promise to
  the girl reading it on the bus.

---

## 7. Exit profile (backward design)

**Terminal outcome, one sentence:** *she can take money she earned, open the right account
with a parent, buy an index-fund core and a small studied stock position, and defend that
choice out loud to a skeptical adult — including why it isn't gambling and why her name on the
account matters.*

**Learning outcomes** (episode of primary coverage):

*Money mechanics*
1. Inflation — idle cash shrinks; buying power vs. face value (1–2)
2. Ledger — earned, spent, *kept* (3)
3. Profit = revenue − costs, including the hidden ones (3)
4. Compounding — small + early wins; time is the teen's edge (4)

*Investing*
5. Stock = ownership slice, not lottery ticket; returns come from profits, not losers (5)
6. Spot a quality business — the flywheel questions (6)
7. Value it — payback years (P/E); great company ≠ any price (7)
8. Invest in what you know — the shoebox nominates, the math decides (8)
9. Risk — never one basket; crash = price, not verdict (9)
10. Horizon sorting — dated money vs. decade money (10)
11. Index fund = own everything, quietly; most pros lose to it (11)
12. Fees — cheap boring beats expensive boring (`feesDrag`) (11)
13. Motion ≠ progress — whole-year audits; survivorship bias; churn (5–10, via Marcus)

*Action (Ep 12 is the test)*
14. Account vs. fund — container vs. contents (12)
15. Open the right account — custodial / Roth / (529 named in 13) (12)
16. The last mile — tickers decoded, fractional shares ("start with $10"), minimums, the
    parent conversation (12)
17. Build the mix — index core + a few studied companies, small and last (12)
18. Automate, then hold through dips (12)
19. Taxes — the teenager's ~0% Roth deal; churn splits wins with the IRS; 529 tax-free
    *because* education-locked (10, 12, 13)
20. Refuse the pitch — *what do I own? where does the return come from?* (drilled ≥3×);
    scam vs. hype — a scam won't let you ask the two questions (5, 10, 12)

*Confidence (the actual product)*
21. "I was never bad at money — nobody had shown me the game," and now someone has
22. Money is talkable, out loud, without shame
23. Defend her plan to a skeptical adult
24. Her name on the account — hers to run

**Deliberately excluded (Season 2, flagged so it reads as design):** debt, credit scores,
student loans, credit cards. Keisha's small, eyes-open loan consideration in Ep 13 is the
cliffhanger pointing there.

**Weave ratio (drafting discipline):** ~60% of outcomes are *lived* (booth events), ~25%
*shown* (artifacts and decision screens), ~15% irreducibly *told* — and every told fact must
be attached to an object in a girl's hands, voiced by a character with a reason to say it, in
under three lines, concentrated in Ep 12's account-opening stretch. If a fact can't earn an
object or a voice, it becomes an envelope line or it gets cut.

---

## 8. Episode map (13 episodes, three acts)

Each episode: A-plot story · artifact (B-plot) · teaching points · decision · envelope line ·
hook. Experience first; the envelope names it after — written, never recited (§9).

### ACT I — THE DEAL (appetite)

### Ep 1 — The $20 in the Garage *(inflation)*
- **Story:** Elena hires the girls to price fifty years of stuff. Hook: *why is she selling
  everything?* In a coat-pocket box: a 1965 pay envelope, $20 still inside. Sofi: "It's still
  $20, right?" Emily talks out 1965 vs. now, almost to herself. Maya: "English, Em." Emily:
  "It got robbed. Slowly." Elena watches her do the math and says nothing — first entry on
  the audition list.
- **Plants:** Keisha's declined dream-school letter (and the admitted-students chat she still
  lurks); the group chat as recurring texture; the shoebox of receipts glimpsed, unexplained.
- **Artifact:** the 1965 pay envelope + the forgotten $20 (becomes the rulebook and the
  season's control group).
- **Teaching:** inflation is the invisible pickpocket; "safe" ≠ static; buying power vs. face
  value.
- **Decision:** the found $20 — spend / tin box / "make it wait" (Elena's strange insistence).
- **Envelope: Money sitting still is money shrinking.**

### Ep 2 — The Fifty-Dollar Necklace *(store of value)*
- **Story:** the sale itself. A buyer offers real money for a plain gold necklace; Elena: "not
  for sale." Its receipt — 1975, $50 — surfaces; worth ~$1,050 now. "The first pretty thing I
  ever bought that nobody co-signed." (Runway for Ep 11; note her receipts start in 1975.)
  The girls watch what holds value across a folding table and what goes for a dime. Close:
  they pitch the booth; Elena offers **$30 for 30% of profit**; they sign fast.
- **Plant:** Sofi's cousin's quince — her earnings already carry family claims.
- **Artifact:** the necklace + its 1975 receipt.
- **Teaching:** stores of value; why some objects survive fifty years of inflation; (seed,
  unnamed) read what you sign.
- **Decision:** pricing table — which garage-sale objects held value and why.
- **Envelope: Real things hold what paper drops.** Hook: Keisha, later, re-reading the
  one-page deal.

### Ep 3 — The First Saturday *(cost, revenue, profit)*
- **Story:** booth launch. Sofi's recipe, Maya selling, Keisha's ledger, Emily's unit math;
  Sofi's mom nearby, cash-handling like a pro; the tin respected on screen. They count $84 and
  spend it in their heads — Elena, ledger open, walks them backward: hibiscus, sugar, cups,
  ice, the sign, her 30%. Maya: "I made $84!" Emily: "you *kept* $11."
- **Texture:** Marcus's green screenshots enter the group chat (plant only). Off-page,
  arriving as a mood: Maya's breakup — the boy stays off-screen, permanently.
- **Artifact:** Elena's 1970s grocery ledger — the habit that made everything after possible.
- **Teaching:** revenue − costs = profit; hidden costs; owning a slice means a slice of
  *profit*, not revenue; plain subtraction, no accounting vocabulary.
- **Decision:** price the cup — three price points with computed outcomes.
- **Envelope: Profit is what's left, not what comes in.**

### Ep 4 — The Two Coolers *(compounding — lived, not lectured)*
- **Story:** the first-profits vote splits 2–2 — Maya wants her cut now (the concert,
  tickets bought for two, attended with the girls instead), Keisha quietly needs hers, Emily
  and Sofi say grow it. Elena won't break the tie: "Run both." Each girl sets her own
  reinvest rate; the ledger opens **two public curves** — poured-back vs. pocketed. The gap is
  invisible this week (*the curve starts insultingly slow* — lived), then widens all season.
  The passbook artifact lands as Elena's version of the same vote. First envelope
  wording-fight: Maya's draft too long and profane, Emily's precise and dead; the compromise
  survives. The rules are graffiti from here on.
- **Artifact:** the savings passbook (1965–1976) — a decade of deposits, insulting interest.
- **Teaching:** interest earning interest; the curve bends late; time is the 16-year-old's
  lever. Numbers (computed): $20/mo × 60y ≈ $222k vs $14,400 deposited; $100/mo from 16 ≈
  $545k vs from 26 ≈ $262k; ten early years then stop beats forty late years.
- **Decision:** each girl's reinvest rate (the scoreboard is the consequence engine).
- **Envelope: Small and early beats big and late.**
- **Interactive:** `snowball` — contributions-vs-growth curve, start-age race, crossover
  marker.

### Ep 5 — Payout Day *(what a stock is — taught through envy)*
- **Story:** first profit distribution. Elena sits on the porch and collects her 30% — counted
  out in cash, in front of girls who hauled ice all day. Maya says it: "She didn't even *do*
  anything." The resentment breathes — then flips: that's not unfair, that's **ownership**.
  Slices don't sweat. Then the door opens: "You can be on my side of the table. Anyone can.
  That's all the stock market is — millions of little 30%s for sale." **Refuse-the-pitch
  rep #1:** Marcus's meme-stock tip, refused at cost — they love him. Lottery contrast: every
  jackpot needs losers; profit doesn't.
- **The Emily scene:** one dinner at Emily's house; her dad asks how much the booth is making;
  the temperature drops; nobody explains; the girls leave. Fifteen lines. Never revisited in
  dialogue — every Emily beat afterward is retroactively lit.
- **Artifact:** a 1980s dividend check stub — "the bakery paid me for owning it. I never swept
  a floor."
- **Teaching:** share = legal part-ownership; returns from profits/dividends, not from someone
  losing; ticker = mood ring (price wiggles daily, the business changes slowly). Powerball
  odds (~1 in 292M) as labeled fact.
- **Decision:** Maya's $60 flip profit — meme tip / slice of a brand she resells / lottery.
- **Envelope: Buy the slice, not the ticket.**

### ACT II — THE DOUBT (the rules under fire)

### Ep 6 — The Two Certificates *(what makes a business worth holding)*
- **Story:** detective episode. Elena away (her sister in Tucson); boxing leftovers, the girls
  find **two 1980s paper stock certificates** — engraved, official, dead as a format. One
  company compounded four decades; the other was *unstoppable* at purchase and is gone.
  Elena's voice arrives in writing on the sleeve: "I keep the dead one where I can see it.
  It's why I own everything now." Background: Marcus's bet starts spiking; heat wave; playlist
  fights.
- **Artifact:** the two certificates — the winner and the corpse.
- **Teaching:** the reinvestment flywheel; the quality questions (*do people come back
  unasked? does it keep more of each dollar as it grows? why can't the shop across the street
  copy it?* — moats, never the word); why you hold (selling an exponential business in year
  five is leaving before the part it was for).
- **Decision:** the booth's own flywheel — which reinvestment actually compounds?
- **Envelope: Buy the machine, not the moment.**
- **Authoring flag:** winner = an Apple-scale 1980s compounder, position sized so its value
  stays well under the reveal number; corpse = a Blockbuster/Kodak-type teens recognize.
  Historical facts labeled; all dollar outcomes computed.

### Ep 7 — The Ad Fight *(valuation + labor vs. capital)*
- **Story:** Maya spends her own ~$40 on an Instagram push; Saturday explodes; Monday she
  wants a bigger cut — "My post did that. Why am I splitting it five ways, counting *her*?"
  Keisha holds the line: the deal is the deal. **Emily's attribution test:** ad or heat wave?
  Math has to pick a side between best friends. The gut punch: if contributions get priced,
  someone finally says it — *the entire product is Sofi's recipe, given, never invoiced* —
  and Sofi leaves the porch without a word. The same week, the smug neighboring vendor offers
  to buy the booth — name, recipe, corner — and suddenly: what is this thing *worth*? Emily
  builds **payback years** from scratch — price ÷ what it earns per year; the booth clears
  ~$300/summer; $600 is two summers; $15,000 is fifty. Armed with the tool, the girls try to
  buy Elena's 30% back; her price is eye-watering and mathematically fair (cost of capital as
  a family negotiation); they decline. Resolution: they re-read the one-page deal — silent on
  sweat, recipes, ads — and renegotiate like grown-ups. The envelope takes its **first
  amendment**, crossed out and rewritten in different ink.
- **Plant:** why does Keisha's mom never mention Elena's money? The question hangs.
- **Artifact:** 1980s stock-listings page, Elena's pencil note: "12 years' earnings — too
  dear."
- **Teaching:** payback years (P/E named once, at the close); a great company at a terrible
  price; marketing as an investment with a measurable return; contracts are silent until
  they're read; a growing machine is worth more years — but never infinite years.
- **Decision:** the vendor's offer — sell / keep / counter (computed).
- **Envelope: Price is what you pay, years are what you count** *(+ the amendment on labor).*

### Ep 8 — The Shoebox *(invest in what you know — the Lynch episode)*
- **Story:** Elena back; porch, evening. She dumps fifty years of receipts on the table:
  "Wall Street flew analysts around the country. I had a shoebox and two eyes." The pattern:
  the same grocery chain for thirty years, the pharmacy, the bakery from the Ep 5 stub —
  **she never bought a stranger.** Then she turns it on them — taps the phone in Maya's hand:
  "You've done five hours of research on that company today. You just keep throwing the
  research away." The Amazon box on Sofi's porch, the shoes half the market wears, the app
  they all opened before breakfast: their week is a scouting report. From the seller's side:
  the booth's regulars — the girls *knew* the product worked before any outsider could,
  because they could see the line. **The honest turn:** the shoebox *nominates*; the Ep 6
  questions and Ep 7 payback math *decide*. Proof in the box: receipts from a chain she
  shopped for a decade and never bought — too dear. And one gut-punch: she loved a video
  store too. (The corpse certificate suddenly has a receipt trail.) Marcus as one narration
  line of contrast: he owns tickers he's never been a customer of, on the word of strangers.
- **Artifact:** the shoebox itself — the audition-list habit, paid off.
- **Teaching:** invest in what you know — as a lead, never a verdict; customers see change
  before analysts; familiarity starts the homework, never replaces it. Naming (Tier 2, §10):
  Apple / Nike / Costco as study exemplars — never the girls' actual picks.
- **Decision:** each girl nominates one company from her own week; it makes the porch
  watchlist only if it survives the quality questions and the payback check. (Continuity:
  the one studied share each girl buys in Ep 12 is the one she scouts here and watches all
  summer.)
- **Envelope: You can't know the whole market — but you can know a store.**

### Ep 9 — The Rainout *(risk & diversification)*
- **Story:** a rained-out Saturday zeroes the weekend. One product, one corner, one weather
  system. The two-cooler scoreboard takes its first visible dent. The fix: Maya's thrift rack
  joins the booth (garage-sale leftovers; profits split per the Ep 7 amendment — the fight's
  precedent immediately earns its keep). The girls re-read the 1974 clipping and see it new.
  Sofi's quince obligation comes due: family-money-with-a-date vs. her-money-for-later —
  horizon at kid scale, handled with respect (the obligation is love, not a leak).
- **Artifact:** a 1974 crash clipping, Elena's margin note dated Oct '74: everyone selling;
  prices only look scary if you're leaving. (Ep 11 re-reads it: *she was shopping.*)
- **Teaching:** risk is the admission price of growth; one company can go to zero, the whole
  market never has; basket arithmetic (1 of 10 dies → −10%; one basket → −100%); down 50%
  needs up 100% (`gainToRecover`); a crash is a price, not a verdict. Numbers: S&P peak
  Jan 1973 (120.24) → trough Oct 1974 (62.28) ≈ −48%; trough → today, labeled price-only.
- **Decision:** diversify the booth — rack / second corner / second drink (computed
  correlation logic in plain words).
- **Envelope: All the eggs, never one basket.** Hook: Marcus is still green. Are the rules
  just… slow?

### Ep 10 — The Hot Streak *(horizon + the fracture)*
- **Story:** Marcus peaks — the doubt episode the season has been building. "He made $900 in a
  day. We made $63 and I smell like hibiscus." Elena says nothing; let the reader genuinely
  wonder. Then **Keisha's dark night**: the roommate in the chat posts her move-in date; that
  night, a hyped stock could close the gap in a month; her thumb hovers over the confirm
  button — **with booth money in the account** — and *Maya catches her, and says so in front
  of everyone.* The reliable one nearly gambled the group's cash; the "irresponsible" one
  caught it. Both wounded; the season's second fracture, and the completion of the
  Maya↔Keisha friction thread (each catches the other's blind spot once). What saves Keisha
  isn't virtue — it's the ledger reflex: she runs Maya's audit skill *upward* on Marcus —
  "show me the whole year, not the good days" — and the whole-year number is red. One tax
  line: every quick win split with the IRS; holders pay later, less, or never. Horizon
  decides: August money doesn't ride. Same week, off-screen, his position craters. **Scam
  vs. hype beat** (one porch line): a pitch survives the two questions or it doesn't; a scam
  won't let you ask them.
- **Artifact:** Marcus's screenshots vs. the whole-year audit (the group chat as artifact —
  a first).
- **Teaching:** horizon sorting (dated money vs. decade money); survivorship bias;
  time-frame cherry-picking; churn and its tax leak (one line, labeled); most day traders
  lose money (labeled stat); **refuse-the-pitch rep #2**, now at maximum temptation.
- **Decision:** Keisha's ~$2,400 vs. the hyped stock — all-in / diversified basket / savings.
  Savings is correct: horizon decides, not courage.
- **Envelope: Money with a date on it doesn't get to gamble.** Hook: how do you own
  everything without being an expert?

### ACT III — THE TRUTH AND THE HANDS

### Ep 11 — Own Everything, Quietly *(index funds + THE ELENA REVEAL)*
- **Story:** Elena answers the cliffhanger: an index fund — hundreds of companies in one
  purchase; every future flywheel owned automatically. Then the 1976 slip resurfaces, and the
  dry lines land: the divorce, the paperwork in his name, the discovery she was invisible,
  the vow, the mocked new fund bought two years after a crash halved the market — **Vanguard's
  first; "you've heard of them now"** — held through every crash since: **~$1.7M**. The girls
  do the math; Elena is unsurprised. Every strange habit was curriculum; they were being
  auditioned. Guardrails in-scene: "someone showed me the game; nobody showed your mom," and
  the check Keisha never asks for is refused before it's asked. **Fees beat:** why boring
  wins, and *cheap* boring most of all — a 1% fee vs. 0.05% compounds into tens of thousands
  over a teen's horizon (`feesDrag`, computed). Elena's line to Maya, reading her
  ledger-diary: "I planned a whole life around someone once. Keep your own ledger, mija."
- **Artifact:** the 1976 brokerage slip — First Index Investment Trust.
- **Teaching:** index fund = the whole market in one purchase; instant diversification
  (answers Ep 10); most pros lose to the boring index — fees and wrong guesses compound too;
  consistent beats smart; the name on the account is the point. Numbers (computed):
  `elenaPortfolio2026()` — tiered contributions at 10.5% nominal ⇒ ≈ $1.68M from ~$84k
  contributed (tested 1.6–1.75M). The $20 three ways: envelope (~$2 of 1965 buying power) /
  passbook (~$210) / riding the 1976 buy (≈ $2,900).
- **Decision (set before the reveal):** 1976 Elena, divorce papers signed, everything in his
  name — tin box / passbook / the mocked new fund.
- **Envelope: Boring wins — own everything, hold on.**

### Ep 12 — Opening Day *(accounts, taxes, first buys — the girls' finale)*
- **Story:** the season's earnings are real; this episode is **the last mile, dramatized** —
  and it belongs entirely to the girls. Checking accounts first (boring, five minutes —
  "that's it? that's the whole scary part?"). Then the investing containers: account =
  container, fund = contents (backpack ≠ books); custodial brokerage (teen + adult, legally
  hers); Roth IRA needs **earned income** — booth profit and reported resale profit qualify.
  **The teenager's tax deal:** income under the standard deduction ⇒ Roth money taxed ~0%
  going in, never taxed again. Elena: "They're offering you a price on taxes you will never
  see again. Sixteen is the sale." Tickers decoded (alphabet soup, five minutes); fractional
  shares ("you can start with $10"); brokerages named in threes (§10): Fidelity / Schwab /
  Vanguard — including the fact that teen-specific accounts exist. The parent conversations —
  Sofi's mom's scene: the safety instinct honored, the tin redeemed as step one. A first-year
  statement shown as *normal*: small, unimpressive, fine (Nadia's old job, one beat). **The
  buys:** index core for everyone; plus each girl's one studied share from Ep 8 — small,
  last, funded only after the core exists (Elena's own mix as precedent); the learning jar,
  never the engine. Automation set: small, monthly, boring. **Emily's payoff:** as the others
  open their apps, she slides a printed confirmation across the table — already done, alone,
  weeks ago. **The exit exam:** Marcus wanders past — "index funds are for people who can't
  read charts" — and Keisha defends the plan to his face: gap first + small Roth + cash
  buffer, what she owns, where the return comes from, why her name matters. They walk home
  owning things. Later, quietly, Marcus to Emily: "hey. how do you actually open the boring
  one?" Younger teaches older; door open for Season 2; nobody converted, nobody condemned.
- **Artifact (from the present):** their own account confirmations.
- **Teaching:** containers (custodial / Roth); Roth mechanics (`maxRothContribution`;
  `ROTH_LIMIT_2026 = 7500`, labeled check-current-year; contributions retrievable — patience
  rewarded, not jailed); the ~0% teen tax window; last-mile mechanics; refuse-the-pitch
  **rep #3** (Keisha's defense is the rep); where-to-start close (the app points, never
  executes).
- **Decision:** Keisha's ~$2,400 vs. the ~$3,000 gap — all at the gap / all Roth / **gap
  first + small Roth + cash buffer** (correct; the choice is hers). Numbers:
  `futureValueLump(1000, 49y, 7%)` ≈ $27.5k; the $20's future ≈ $550.
- **Envelope: Your name goes on your money.**

### Ep 13 — The Last Saturday *(the 529 — the true end)*
- **Story:** market season closes; the wind-down. Finale beats, one each: **the 30% payoff**
  (Elena hands back confirmations in the girls' names — she invested their cut all season;
  "your money was working while you were") → **Sofi deposits the 1965 $20**, her mother
  beside her — her name, after a summer of everyone's claims; the tin respected to the end →
  **Maya's Roth** ("keeping has a container now") → the amended, crossed-out, coffee-stained
  **envelope handed forward**. Everything is resolved — *which is exactly when Elena asks
  Keisha to stay behind.* **The 529:** opened the year she turned two; broad index funds;
  ~$60/month that never flinched — the 2020 crater and the 2022 down year on the chart,
  deposits marching through both; the glide in the last years (index stepping down, cash
  stepping up — "money with a date on it doesn't get to ride"); **~$30–35k on ~$12–14k
  contributed** — more than half of it growth (Emily's crossover, made flesh). Tax-free for
  school *because* it's education-locked — the lock is the price of the perk. Against the
  ~$80k dream: a load-bearing beam, not the building — 529 + the aid letter she never
  compared (**the sticker price is not the price**; nobody declines a school without seeing
  the aid letter) + her own plan from Ep 12 + work-study + maybe a small, eyes-open loan
  (Season 2's door). **Keisha's anger — on the page:** "You watched me panic all summer. I
  declined the housing deposit. It was eighty dollars." **Elena's answer — imperfect,
  human:** part audition ("if I'd handed it to you in June, what would this summer have made
  you?"), part confession — a woman erased once learned to hide what she has from everyone;
  Keisha's mom never knew either (her one scene). Elena's last conversion: *never invisible*
  finally turns inward — visible to her own family. Maya's quiet "must be nice," not resolved
  too fast. One dry disclaimer in-scene: a good sixteen years is not the promise; the boring
  average was enough.
- **Artifact:** the 529 statement — dated the year Keisha turned two.
- **Teaching:** the 529 (container #3, education-locked, tax-free growth); glide = horizon
  applied automatically; a lucky decade vs. the promised average; sticker price vs. aid;
  small + early, demonstrated on the reader's proxy.
- **Decision:** none — this episode is the payment, not the test. (The test was Ep 12.)
- **Envelope (last line, different handwriting): The best time was years ago. The
  second-best time is now — for someone who's two.**
- **Final image:** the 1976 slip, the 2026 confirmations, one page apart — and between them,
  a statement dated the year Keisha turned two.

---

## 9. The envelope (porch rules, demoted from liturgy to graffiti)

- **Written, never recited.** No episode opens with rules recited — that convention is dead.
  The envelope comes out at episode's end, sometimes; someone scrawls the line; nobody
  performs it. Some rules are just *said* in scene by whoever earned them and written down
  later, off-page.
- **Drafted by committee, badly.** The girls fight about wording (Ep 4 stages the first
  fight: Maya too long and profane, Emily precise and dead, the compromise survives). The
  distillation *is* the pedagogy.
- **Amendable.** Ep 7 crosses out and rewrites a line in different ink. A constitution with
  amendments is alive; a list of maxims is embroidery.
- **Elena never says a rule.** She says the crooked, dry version; the girls translate.
- **Affectionate irreverence in prose.** The girls mock the ritual even as they keep it
  ("Rule four. Say it." / "You're not my bishop, Keisha."). Reverence is death; irreverence
  is how teens hold things sacred.
- **App note:** each lesson keeps its `porchRule` field and completion-screen render — this
  demotion is a prose-layer/story-beat change only.

---

## 10. Naming policy (stocks & brokerages out loud)

- **Tier 1 — historical facts, named freely:** Apple's IPO, First Index Investment Trust
  (Vanguard, late Aug 1976), ECOA 1974, the 1973–74 crash figures. The Ep 11 reveal may land
  the Vanguard name ("you've heard of them now").
- **Tier 2 — category exemplars, always in threes:** companies the girls *study* (e.g.
  Apple / Nike / Costco) and brokerages where teen/custodial accounts live (Fidelity /
  Schwab / Vanguard; teen-specific accounts exist and may be named as fact). Three is
  information; one is an endorsement. Convention: "as of this writing" labels; author's-note
  disclaimer; keep the book handable in 2032.
- **Tier 3 — the girls' actual buys: never named.** Watchlist picks and purchased shares stay
  fictionalized or off-page ("her pick," "the shoe company"). A printed ticker attached to a
  purchase is a stock tip with a plot — and it dates the book fatally.

---

## 11. Taxes (three beats, ~fifteen lines total, no new episode)

1. **The teenager's deal (Ep 12, the big one):** teen booth income under the standard
   deduction ⇒ ~0% tax now on Roth money, tax-free forever after. "Sixteen is the sale." The
   single most motivating true sentence in teen personal finance.
2. **Marcus's invisible leak (Ep 10, one line):** churn is taxed at ordinary rates; every
   quick win splits with the IRS; holders pay later, less, or never. One more red line he
   never screenshots.
3. **Why containers are shaped that way (Eps 12–13, one line each):** Roth = taxed ~0% in,
   never out (at her bracket); 529 = tax-free *because* education-locked — the lock is the
   price of the perk. Container logic finally has a why.

---

## 12. Guardrails (non-negotiable)

1. **The finance.ts guardrail:** any number a lesson presents as fact is computed in
   `src/lib/finance.ts` from labeled constants (or clearly marked illustrative) and tested in
   `finance.test.ts`. Booth math ($30 stake, 30% split, unit costs, payback years) is real
   tested functions; Ep 5 reuses profit-split math for shares; Ep 7's buyback price, Ep 11's
   `feesDrag`, and Ep 13's 529 use the same discipline.
2. **Number conventions:** forward-looking growth uses `ILLUSTRATIVE_RETURN = 0.07` (long-run
   US stocks ~10% nominal minus ~3% inflation ⇒ today's buying power; keeps the Ep 4
   counterfactual ≈ $222k safely below Elena's ~$1.7M). Elena's historical math uses
   `INDEX_RETURN_1976_2026 = 0.105` nominal (conservative round-down). **New:** the 529 uses
   `INDEX_RETURN_2010_2026 ≈ 0.12` nominal (labeled historical, conservative round-down),
   with deposits sized (~$60/mo, lightly tiered) so the statement lands **~$30–35k on
   ~$12–14k contributed** — a beam, never the building. Dream-school cost labeled
   illustrative: ~$20k/yr in-state + housing ⇒ ~$80k. All artifact values before Ep 11 stay
   well under reveal-confirming numbers; the 529 stays well under Elena-scale numbers.
3. **Both twists stay unspoiled** in all student-facing copy — Elena's wealth before Ep 11,
   the 529 before Ep 13 (see §4).
4. **No rescue before the assessment.** The exit exam (Ep 12) is completed by the girls alone.
   Gifts are education-locked (the 529) or the girls' own money grown (the 30% payoff), and
   are revealed only *after* the girls choose. Elena's gift is the ledger, not a check — the
   check Keisha never asks for is refused before it's asked (Ep 11). A lucky decade is
   disclaimed in-scene (Ep 13).
5. **Education, never advice.** The app points, never executes. The four-jar logic survives
   as Elena's map, not a recommended allocation; no percentages prescribed. Naming follows
   §10: method, never tip; the girls' buys are never named. The Lynch episode carries its own
   caveat in-scene (the shoebox nominates; the math decides; she loved a video store too).
6. **Tone:** smart, a little irreverent, never condescending or pink-washed; confidence over
   completeness. No parent or girl is ever the villain or the fool. Marcus is never
   humiliated — busy, hardworking, wrong, and human; the book audits results, not effort.
   Bad men stay off-screen; the villain is always the arrangement.
7. **Civilian-thread discipline:** every non-financial thread must collide with the money
   story or it doesn't get pages (Maya's breakup → the audit; Keisha's chat → the confirm
   button; Sofi's quince → horizon; Emily's dinner → her silence). Ambient texture (group
   chat, heat wave, regulars, playlist fights) costs a paragraph each, no more.
8. **All content original** — no copyrighted lyrics, quotes, or third-party curriculum text.
   Historical facts (Apple's IPO, the 1976 fund launch, ECOA 1974, 1973–74 crash figures,
   Powerball odds, day-trader loss rates) usable as labeled facts. Lynch is a named
   historical figure whose *method* is taught in Elena's voice — no quoted text.
9. **User-facing units are "episodes"** ("Episode 1", `/episode/:slug`); code identifiers,
   file names, and storage keys keep `lesson` naming.
10. **Season 2 exclusions are design, not oversight:** debt, credit scores, student loans,
    credit cards. Keisha's eyes-open loan consideration (Ep 13) is the pointer.

---

## 13. Delta from the current build (7 lessons) and the v1 plan (10 episodes)

**From the shipped 7 lessons:**
- Keeps Eps 1–2 (inflation, necklace) with the garage-sale frame and the booth deal at Ep 2's
  close — revision, not rewrite; adds the Keisha plants.
- Inserts as new lessons: Ep 3 (profit), Ep 4 (two coolers), Ep 5 (payout day), Ep 6
  (certificates), Ep 7 (ad fight + valuation), Ep 8 (shoebox), Ep 10 (hot streak), Ep 12
  (opening day), Ep 13 (last Saturday).
- Reworks: risk (rainout + rack + quince) as Ep 9; index/reveal moves to Ep 11 (from
  lesson-06); accounts split off from the finale into Ep 12.
- Renumbers envelope lines to the thirteen above.

**From the v1 (10-episode) plan:**
- 10 → 13 episodes; three named acts.
- Old Ep 4 (compounding counterfactual) → **The Two Coolers** (lived experiment +
  scoreboard). Old Ep 5 (talky realization) → **Payout Day** (envy → ownership).
- New: The Shoebox (Ep 8), The Hot Streak (Ep 10, un-cramming old Ep 8's four lessons),
  Opening Day (Ep 12), the ad fight (Ep 7).
- The 529 thread added end-to-end (Keisha as granddaughter; public flagship ~$20k/yr; reveal
  moved to the true end, after the girls' self-made finale).
- The four-jars set piece is retired as a finale beat; its logic is distributed (horizon in
  Eps 9–10, index core + learning jar in Ep 12, cash-with-a-date and the TIPS/safety
  redemption folded into Ep 12's parent conversation and Ep 13's glide). Recover it as an
  epilogue graphic if the app wants it.
- Porch rules demoted to graffiti (§9): no recitation; wording fights; one amendment.
- Character registry changes: **remove `nadia`**; **remove Beto** (sister in Tucson covers the
  absence); **add `marcus`** (Maya's brother, wallpaper, ~5 lines); **add Sofi's mom** as a
  registered speaking character (Eps 3, 12, 13); Keisha's entry gains granddaughter status,
  the dream-school thread, and the flaw (never asks); Emily's entry gains the one-scene wound
  convention; Maya's entry gains the breakup/ledger-diary thread, the ad push, and the rack;
  Sofi's entry gains the quince thread.
- `finance.ts` additions: `INDEX_RETURN_2010_2026`, `keisha529()`, `feesDrag()`,
  `boothBuyback()`, ad-attribution helper, whole-year-audit helper; constants for
  dream-school cost (illustrative) and teen standard-deduction framing (labeled
  check-current-year).

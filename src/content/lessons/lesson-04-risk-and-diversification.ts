import type { Lesson } from '../schema'

/** Episode 4 — Risk & diversification. Arc role: the catch (one bet is
 * dangerous). Elena still off-stage; her voice arrives in writing — a brittle
 * 1974 crash clipping tucked in the pay envelope, her margin note dated
 * October '74. The girls read it as nerve; Episode 5 re-reads it as shopping.
 * Payoffs this episode: Maya's Ep-1 flex ("I make that in a weekend") gets
 * audited, funny not shaming; DeShawn's hot stock from Ep 3 meets Keisha's
 * ten-week tuition clock in the decision. Cliffhanger: how do you own
 * everything without being an expert? Do not confirm anything about Elena.
 */
export const lesson04: Lesson = {
  id: 'lesson-04',
  slug: 'risk-and-diversification',
  number: 4,
  title: 'All the Eggs, One Basket',
  tagline: 'Risk is normal. Betting everything on one company is not.',
  arcRole: 'catch',
  minutes: 9,
  characters: ['keisha', 'maya', 'emily', 'nadia'],
  status: 'available',
  porchRule: 'All the eggs, never one basket.',
  beats: [
    {
      type: 'story',
      scene: 'The porch — week four, ledger night',
      lines: [
        {
          speaker: 'narrator',
          text: "Audit night. Keisha had declared it in the group chat with a spreadsheet emoji and no further explanation. Elena was still at Beto's; the envelope, the passbook, and three rules held the table without her.",
        },
        {
          speaker: 'keisha',
          text: "Four weeks of the $100 Challenge, so let's see the ledger. Sofi: $31 saved from the stand, first bank visit scheduled. Emily: looked at her balance eleven days straight, twelve dollars invested. Small numbers, real numbers. And then there's Maya's column.",
        },
        {
          speaker: 'maya',
          text: "My column is thriving. The shop did nine hundred dollars this summer. NINE hundred. Say it with respect.",
        },
        {
          speaker: 'keisha',
          text: "Earned: nine hundred. Present and accounted for: the $25 you invested after episode two, and... that's the column. Maya. You told Grandma you make her monthly paycheck in a weekend. So where are the weekends?",
        },
        {
          speaker: 'maya',
          text: "...Inventory. Boba. A jacket I was GOING to flip and then personally required. Okay. Wow. In my defense, I outearn everyone at this table, and apparently keep less than Sofi's little brother.",
        },
        {
          speaker: 'nadia',
          text: "Congratulations, hermanita — you just audited yourself. Earning and keeping are different sports. You're varsity at one. We'll get to the other. Tonight is Keisha's night, though, because her problem earns money AND keeps it — and is still about to do something risky with it.",
        },
        {
          speaker: 'keisha',
          text: "DeShawn again. His one stock is up 40% and he acts like he invented compound interest. My gap is $3,000. I've saved $1,850. And I did the math — one 40% pop and I'm within striking distance by August. I know how it sounds. I also know I'm out of boring options.",
        },
        {
          speaker: 'narrator',
          text: "Emily had gone quiet — quieter than usual. She'd flipped the pay envelope over to reread the rules, and something slid out from inside it: newsprint, brittle as a dead leaf, folded to the size of a playing card.",
        },
        {
          speaker: 'emily',
          text: "It's a newspaper page. From 1974. Stock tables and a headline — the market lost half its value. Half. And there's handwriting in the margin. Hers.",
        },
        {
          speaker: 'narrator',
          text: "The note, in blue ink gone gray, dated October '74: 'Everyone selling. Prices only look scary if you're leaving. — E.'",
        },
        {
          speaker: 'emily',
          text: "This is the part my family means when they say the market eats people. Nineteen seventy-four ate people. Why does she keep the scariest page of the newspaper like it's a recipe?",
        },
        {
          speaker: 'nadia',
          text: "Why was a passbook-and-tin-box grandma reading the stock tables in 1974 at all? Add it to the pile. But she left it in the rulebook, which means it IS the lesson this week. Half. Gone. That's real, that's the catch with everything we've learned — and Keisha's about to make her call in the middle of it. So let's make it properly.",
        },
      ],
    },
    {
      type: 'decision',
      context: [
        "Here's Keisha's whole board: $3,000 tuition gap, due with fall registration in ten weeks. $1,850 saved — every shift, every skipped thing, all summer. DeShawn's magic stock, up 40% and loud about it.",
        "She's done the fantasy math: one more pop like that and the gap nearly closes. She's also reread Rule #1 — that $1,850 is technically sitting still, shrinking.",
        "You're Keisha. Ten weeks.",
      ],
      prompt: 'Where does the $1,850 ride out the summer?',
      choices: [
        {
          id: 'all-in',
          label: "DeShawn's stock. It's up 40% — one good run and the gap is basically closed.",
          consequence: [
            "Run the honest version: hype cools, one bad quarter — say the stock gives back 60%. Illustrative numbers, real shape. Keisha's $1,850 is suddenly $740, in July, with registration in sight. A diversified dip recovers on its own schedule. A single stock offers no such promise — some never come back, and she'd need her money to roughly double just to get home. Down 60% needs up 150%; that's how losses work — the comeback is always steeper than the fall.",
            "Notice the trap's design: it needed her deadline. 'Up 40%' only felt like a plan because August was breathing on her. The stock doesn't know it's tuition. The market doesn't care that it's due.",
          ],
          coda: 'A hot stock plus a deadline isn’t a strategy — it’s a countdown strapped to a coin flip.',
        },
        {
          id: 'basket',
          label: 'Spread it across lots of companies — never one basket, like the rule says.',
          consequence: [
            "Right instinct, wrong clock. A basket of many companies fixes the DeShawn problem — no single company can sink her. But 1974 just taught the other lesson: the whole basket can drop by half in a bad year. Rarely, but 'rarely' is not a word you bet registration on.",
            "Say the market has an ordinary grumpy summer, dips 10% — her $1,850 is $1,665 in August, and she's selling at the bottom of somebody else's mood. Diversification cures the one-company disease. Only time cures the whole-market one, and ten weeks isn't time.",
          ],
          coda: 'Diversification spreads the risk across companies. It can’t spread it across weeks.',
        },
        {
          id: 'savings',
          label: 'Leave it in savings. Boring. Shrinking, even. But there in August, guaranteed.',
          consequence: [
            "The August money stays August money. The pickpocket takes his tiny cut, savings pays back a little interest, and in ten weeks every dollar shows up for registration wearing a name tag. Rule #1 said money sitting still is shrinking — it never said money on a deadline should be racing.",
            "This is the graduation exam of the whole season so far: knowing rule #1 AND knowing when it yields. Investing is for money with years to breathe. Tuition-in-August money doesn't breathe — it reports for duty.",
          ],
          coda: 'The market ignores deadlines. Money you need soon stays boring on purpose.',
        },
      ],
      reveal:
        "Keisha chose savings — out loud, on the porch, staring at the 1974 clipping the whole time. 'Half,' she kept saying. She texted DeShawn a photo of the headline. He left it on read. The gap stays open a few more weeks — and stays hers to close.",
    },
    {
      type: 'teaching',
      title: 'One egg, one funeral',
      voicedBy: 'nadia',
      body: [
        "First, respect the fear — it's pointing at something true. Stocks go down. Whole markets go down: 1973–74 cut the S&P nearly in half, down about 48%. Risk isn't a bug you can patch; it's the admission price of the growth we met in episode two. Anyone selling you growth without it is selling you a ticket.",
        "But risk comes in two completely different sizes, and the difference is the eggs. One company can go to zero — bad product, bad luck, fraud you couldn't have seen. Zero. Forever. The whole market — hundreds of companies at once — has crashed, halved, and cratered, and never once gone to zero, because it would take every major company in America dying simultaneously. So: ten equal holdings and one dies, you're down 10%. A bruise. One holding and it dies, you're down 100%. A funeral. Same bad news, opposite outcomes — the basket decided which.",
        "And one more piece of ugly arithmetic, because losses cheat: down 50% needs up 100% to get home — the climb back runs on a smaller base. That's why the first rule of risk isn't 'avoid it.' It's 'never take the kind that can be fatal.' Bruises heal. Funerals don't.",
      ],
      takeaway:
        'Risk is the price of growth — take the bruise-sized kind, never the fatal kind. One company can go to zero; hundreds at once never have.',
    },
    {
      type: 'teaching',
      title: 'What 1974 looks like from here',
      voicedBy: 'nadia',
      body: [
        "Now the clipping's other secret: what happened after. From that terrifying October 1974 bottom, the market is up about 96 times — and that's ignoring dividends, which make it dramatically more. The crash that ate the front page became a wiggle you'd need a magnifying glass to find on a fifty-year chart. Every crash so far has the same biography: front page, panic, recovery, footnote. The only people 1974 permanently hurt were the ones who sold in it — or never came back. 'Prices only look scary if you're leaving.'",
        "Which is why your age is armor. A crash is only a catastrophe on a deadline — and at sixteen, your money's deadline is decades out. You can hold through a 1974 without blinking, twice if needed. But armor only covers money with time on it: Keisha's August money gets none, which is why savings was right. Match the money to the clock. Years-away money can ride; soon-money sits out.",
        "So here's where we've landed: many companies, not one. Held long, not sold scared. Great. Now — which companies? Do you have to study hundreds of businesses like some kind of homework goblin? Next week, the season's best answer, and it fits in one purchase. Elena's back Sunday. Bring the passbook. Bring the receipt that 'isn't for today.' I have a feeling it's about to be today.",
      ],
      takeaway:
        "Every crash so far became a footnote — for diversified investors who stayed. Time is your armor, but it only covers money with years on the clock.",
    },
    {
      type: 'story',
      scene: 'The porch — night, moths on the bulb',
      lines: [
        {
          speaker: 'maya',
          text: "Audit follow-up, because it's been bugging me all night: my income is one basket too, isn't it. One shop, one app, one algorithm that could change its fees tomorrow. My eggs aren't even eggs. They're boba.",
        },
        {
          speaker: 'nadia',
          text: "Look at you, applying the rule to things I didn't even teach. Yes — one hustle is one basket. Keep the shop, love the shop... and let some of what it earns go live somewhere the shop can't break it. That's next week's episode, conveniently.",
        },
        {
          speaker: 'emily',
          text: "I keep staring at her handwriting. 'Prices only look scary if you're leaving.' She wrote that in the middle of the worst market in forty years. Everyone around her was running for the door, and she was... taking notes. Who does that?",
        },
        {
          speaker: 'keisha',
          text: "Someone who wasn't leaving. Ledger-keeper's official record: tin box, passbook, a receipt from 1976, a bakery in 1978, and the calmest sentence ever written about a catastrophe. I don't have a theory that fits all five. Yet.",
        },
        {
          speaker: 'narrator',
          text: "Emily picked up the pen before Keisha could offer it — which, for Emily, was the loudest thing that happened all night.",
        },
        {
          speaker: 'emily',
          text: "Rule #4: all the eggs, never one basket. I'm the scared one, so trust me on the phrasing — this is the rule that makes the other three survivable.",
        },
        {
          speaker: 'narrator',
          text: "Four rules on the envelope. The clipping went back inside it, scary headline down. And somewhere across town, a grandmother packed for home, carrying fifty years of answers to questions the porch was finally asking right.",
        },
      ],
    },
    {
      type: 'quiz',
      intro: "Porch check — three questions. Risk isn't the enemy; unexamined risk is.",
      questions: [
        {
          prompt:
            "A coworker's cousin has a stock that's up 40%, and you need that money for a car in six months. What's actually wrong with going all-in?",
          options: [
            {
              id: 'a',
              label: 'Nothing, if the stock is really that good — momentum like that tends to continue.',
              feedback:
                "Momentum is a mood, not a contract — 'up 40%' says nothing about the next six months, and single stocks can halve on one bad earnings call. But the deeper flaw is the deadline: even a genuinely great company can be down the exact month you need the money. Two mistakes are stacked here — one company, and no time.",
            },
            {
              id: 'b',
              label: 'Both risks at once: everything on one company, with no time to recover if it drops.',
              correct: true,
              feedback:
                "Right — it's the worst combination in the book. Concentration means one bad quarter can gut you; a short clock means no recovery window. Either alone is survivable: one stock held for decades, or a deadline parked safely in savings. Together they're a countdown on a coin flip — the market doesn't know your due date, and it has never once cared.",
            },
            {
              id: 'c',
              label: "The stock's already up 40% — the smart move is waiting for it to drop first.",
              feedback:
                "That's still the same trap, just with extra steps — you're still betting one company against one deadline, now with market-timing added, which nobody does reliably. The flaw was never the entry price. It's that soon-money can't take fatal-sized risk at any price.",
            },
          ],
        },
        {
          prompt:
            'You own ten companies, equal amounts. One goes bankrupt — actual zero. What happened to your portfolio?',
          options: [
            {
              id: 'a',
              label: "Down 10% — a bruise. The other nine didn't get the memo.",
              correct: true,
              feedback:
                "Right — one dead company out of ten equal slices is a 10% hit, and the other nine keep baking bread like nothing happened. Now rerun it with one basket: same news, down 100%, game over. The basket didn't prevent the bad thing — it demoted it from funeral to bruise. That's all diversification promises, and it's everything.",
            },
            {
              id: 'b',
              label: 'Down big — bankruptcies drag the rest of your stocks down with them.',
              feedback:
                "One company's bankruptcy doesn't infect the other nine — your slice of each business is a separate claim, and their bread sells either way. The math is plain division: one of ten equal holdings at zero is −10%. The whole point of the basket is that companies fail alone.",
            },
            {
              id: 'c',
              label: 'Down 10% now, but you should sell the rest before another one goes.',
              feedback:
                "The −10% is right; the panic is the part that costs you. One failure in ten isn't a signal the other nine are dying — it's the expected price of owning many real companies, already survived. Selling nine healthy businesses because one died is how a bruise gets upgraded to the funeral you just avoided.",
            },
          ],
        },
        {
          prompt:
            'The market halves, like 1973–74. Afterward, who actually lost money for good?',
          options: [
            {
              id: 'a',
              label: 'Everyone holding stocks — a 50% crash cuts every account in half, the end.',
              feedback:
                "It cuts every account's price in half — but a price isn't a verdict until you accept it. The diversified holders who stayed rode the same accounts up ~96× from that bottom. The 'loss' on a statement only becomes real through selling or bankruptcy; 1974's diversified holders experienced neither. The crash was a price. Leaving made it a verdict.",
            },
            {
              id: 'b',
              label: 'The ones who sold in the panic — and anyone whose single company never came back.',
              correct: true,
              feedback:
                "Right — two exits, both permanent: selling locks in the market's worst mood, and a bankrupt single stock has nothing left to recover. Diversified holders who stayed were made whole and then some — the market is up ~96× from that 1974 bottom, before counting dividends. Elena's margin note is the whole quiz: prices only look scary if you're leaving.",
            },
            {
              id: 'c',
              label: "Nobody, really — crashes always come back, so losses aren't possible.",
              feedback:
                "Too sunny — 1974 handed out plenty of permanent losses. Panic-sellers locked in the bottom, and single-stock holders whose companies died waited for a recovery that had no company left to happen to. The market as a whole has always come back so far; each company, and each seller's nerve, gets no such guarantee. That asymmetry is the entire case for baskets and patience.",
            },
          ],
        },
      ],
    },
  ],
}

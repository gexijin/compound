import type { Lesson } from '../schema'

/** Episode 2 — Store of value. Arc role: the clue (some things hold what
 * paper drops). Anchor: round two of the garage clear-out turns up a thin
 * gold necklace and its receipt — $50, 1975 — worth about $1,050 as metal
 * today (necklaceToday in finance.ts). Second witness: Elena's stubbornly
 * median house, 1985 $84k → ~$420k (~5×) while prices rose ~3× — homes keep
 * up because construction is labor and land isn't printed. The honest limit
 * sets up Episode 3: storing value is not growing it; the necklace kept
 * worth, it never made any. Season: Elena on-stage; the receipt habit and
 * "money nobody could sign for" are quiet runway for Episode 6 — raise the
 * question, never answer it. Sofi's mom's gold bangles get vindicated
 * (contrast without contempt: the cash-only world had this lesson first).
 */
export const lesson02: Lesson = {
  id: 'lesson-02',
  slug: 'store-of-value',
  number: 2,
  title: 'The Fifty-Dollar Necklace',
  tagline: "Why a necklace kept what the envelope lost — real things vs. paper.",
  arcRole: 'clue',
  minutes: 9,
  characters: ['elena', 'maya', 'sofi', 'keisha', 'emily', 'nadia'],
  status: 'available',
  porchRule: 'Real things hold what paper drops.',
  beats: [
    {
      type: 'story',
      scene: "Grandma Elena's garage — round two, one week later",
      lines: [
        {
          speaker: 'narrator',
          text: "Nadia arrived with a laptop and a speech prepared — the force she'd promised, the one that works like inflation but in your favor. The garage had other plans. Elena pointed at the boxes they hadn't finished, and the club discovered that in this family, curriculum waits for chores.",
        },
        {
          speaker: 'maya',
          text: "Box check: church candles, a radio that predates radio... and a little velvet box. Okay. Velvet boxes are never boring. Grandma, may I?",
        },
        {
          speaker: 'narrator',
          text: "Inside: a thin gold chain, still bright, coiled like it had all the time in the world. And underneath it, folded into quarters — because of course — a receipt. GOLD NECKLACE, $50.00, DECEMBER 1975.",
        },
        {
          speaker: 'keisha',
          text: "She kept the receipt. Fifty years. Of a necklace. Who keeps receipts for fifty years?",
        },
        {
          speaker: 'elena',
          text: "Someone who started keeping receipts in 1975, mija. It was a good year for learning what things cost. Now — the ledger-keeper has a calculator. Fifty dollars back then. Guess what the chain is worth today, just as metal.",
        },
        {
          speaker: 'maya',
          text: "Vintage markup, gold, drama... I say three hundred. Final answer.",
        },
        {
          speaker: 'keisha',
          text: "Gold price now against gold price then... that can't be right. Grandma, this fifty-dollar necklace is about a THOUSAND dollars of gold. The envelope twenty turned into pocket lint, and this thing turned into a month of rent?",
        },
        {
          speaker: 'sofi',
          text: "Wait. WAIT. My mom has gold bangles in her drawer — she never wears them, and she calls them 'the emergency.' I thought it was a superstition. Is my mom... doing a strategy?",
        },
        {
          speaker: 'elena',
          text: "Your mother and I went to the same school, mija — the one with no building. Half the world has banked in gold since before banks would let them in the door. The tin loses quietly, you learned that last week. This is the other half of what nobody taught your family or mine: some things hold.",
        },
        {
          speaker: 'emily',
          text: "So the twenty in the envelope shrank, and the necklace from the same era didn't. Same drawer. Same fifty years. Why does the pickpocket skip some pockets?",
        },
        {
          speaker: 'elena',
          text: "Emily just asked the week's question. Sit — Nadia, your force keeps one more week; it'll grow while it waits, it's good at that. First: December 1975, fifty dollars, and me. Your turn to choose.",
        },
      ],
    },
    {
      type: 'decision',
      context: [
        "December 1975. Elena has a $50 year-end bonus — and she'll tell you, in that tone that closes topics, that 1975 was the year it mattered that this money was hers alone. Prices have been climbing viciously — 11% the year before.",
        "The tin box is right there. The passbook is right there. And in the shop window on Mission Street: a thin gold chain, $50 exactly.",
        "You're Elena, again. Fifty dollars, December, decide.",
      ],
      prompt: 'Where does the bonus go?',
      choices: [
        {
          id: 'crisp-bill',
          label: "Keep the $50 bill in the tin — a bonus is for emergencies, and emergencies take cash.",
          consequence: [
            "Fifty years later the bill is still there, still crisp, still fifty. You know this story — it's the envelope twenty with better handwriting. Today it buys what about $8 bought in 1975. The pickpocket took the other five-sixths without opening the tin.",
            "And here's the sharpened version of last week's lesson: the tin didn't fail because cash is bad in emergencies — it failed because a decade is not an emergency. Cash is for the fire you can see. Fifty years is not a fire. It's weather.",
          ],
          coda: 'Cash is a sprinter. Asking it to run fifty years is how the pickpocket wins by a mile.',
        },
        {
          id: 'necklace',
          label: 'Buy the necklace. Pretty AND it’s gold — gold doesn’t care what a dollar thinks it’s worth.',
          consequence: [
            "Fifty years later the chain is worth about $1,050 as metal — gold ran to roughly 21 times its 1975 price while prices overall rose about six times. Just keeping up would have taken $299; the necklace laps that three times over. And unlike every other line in the ledger, she got to WEAR this one.",
            "Why did it hold? Because nobody can print gold. It's scarce, it's dug out of the ground by sweat, and every culture on earth has treated it as savings since before paper money existed. A dollar is a promise; the chain is a thing. Promises can be reissued. Things have to be found.",
          ],
          coda: 'The dollar is a number someone maintains. Gold is a thing nobody can print more of.',
        },
        {
          id: 'passbook',
          label: 'Deposit it. The passbook pays interest — that’s the responsible version of keeping it.',
          consequence: [
            "The stamped numbers do their polite climb: $50 at passbook rates becomes about $355 over fifty years. Breaking even with prices needed $299 — so it worked, technically. Fifty years of discipline, fifty-six dollars ahead.",
            "It's the respectable choice and Elena won't mock it — it beat the tin by a lot. But put it next to the necklace's thousand and you see the ceiling: the passbook shelters money from everything except the slow leak it's quietly racing.",
          ],
          coda: 'The passbook treads water beautifully. Treading water for fifty years is still swimming in place.',
        },
      ],
      reveal:
        "She bought the necklace — 'the first pretty thing I ever bought that nobody co-signed,' and that's all she'll say about 1975. She kept the receipt. She started keeping all the receipts that year, actually. Nobody at the table asked why, and Elena did not volunteer.",
    },
    {
      type: 'teaching',
      title: 'Things versus numbers',
      voicedBy: 'elena',
      body: [
        "Here's what the necklace knew that the envelope didn't. A dollar bill is a number wearing paper — and numbers on paper are easy to make more of. When more get made, each one buys less; that's the pickpocket's whole method. But gold is not a number. It's a thing: scarce, heavy, dug up an ounce at a time. Nobody can print it, so it can't be watered down. When the dollar shrinks, the price of the un-printable thing just climbs to match — my $50 chain is about $1,050 of metal today, and it didn't do anything to earn that except refuse to be paper. Sofi's mother's bangles, the same: not superstition. The oldest bank in the world, worn on the wrist.",
        "Now the honest fine print, because this porch doesn't sell fairy tales. Gold holds over lifetimes, but it swings hard along the way — there were whole decades it sat underwater, and anyone who needed to sell in the wrong one felt it. It pays no interest, no dividend — a chain in a drawer earns exactly nothing for fifty years; it only keeps. And it can be lost or stolen, which is why your mother hides the bangles, mija. Gold is a keeper, not a worker. Remember that word. It matters in a minute.",
      ],
      takeaway:
        "Paper money is a number that gets watered down; real, scarce things can't be printed, so they hold their worth across decades. Gold is the oldest example — a keeper, not a worker.",
    },
    {
      type: 'teaching',
      title: 'The house that kept up',
      voicedBy: 'elena',
      body: [
        "The necklace has a bigger cousin, and you're sitting on its porch. I bought this house in 1985 — $84,000, the most stubbornly average house in America; 'median,' the realtor kept saying, like an apology. Today the median is about $420,000. Five times. Prices overall only tripled since then — the house didn't just keep up with the pickpocket, it outwalked him, and it was raising a family inside itself the whole time.",
        "Why do houses hold? Two ingredients, neither printable. A house is frozen labor — thousands of hours of carpenters and plumbers and roofers, and you cannot hire 2025 hands at 1985 wages, so replacing a house costs more every year that wages climb. And under the house: land. They are not making more of it, and everyone needs somewhere to stand. Scarce thing plus expensive-to-remake thing — same recipe as the gold, poured into a foundation.",
        "But hear the whole truth, because your parents pay it monthly: a house charges rent to its owner — taxes, repairs, a roof that betrays you the year you can least afford it. The bank charged me twelve percent to borrow in 1985, which is a different lesson for a different summer. And notice what the house and the necklace have in common: they KEPT value. Neither one MADE any. The chain never paid me a dime; the house never mailed a check. Keeping is not growing — and the difference between those two words is about two hundred thousand dollars. Nadia. Next week. Show them the force.",
      ],
      takeaway:
        'Houses roughly keep up with inflation because they’re built from labor (wages rise with prices) and sit on land (nobody makes more). But storing value is not growing it — that’s next week.',
    },
    {
      type: 'story',
      scene: 'The porch — the chain out of its box',
      lines: [
        {
          speaker: 'sofi',
          text: "I called my mom. I said 'your bangles beat Grandma's envelope by a thousand to fifty.' She said — direct quote — 'I know, mija, why do you think I bought them?' My mom has been WINNING and never mentioned it.",
        },
        {
          speaker: 'elena',
          text: "Tell her the club says respect. Your family kept value the way people do when no one hands them the other tools. Nothing to fix there, mija — only things to add.",
        },
        {
          speaker: 'keisha',
          text: "Ledger updated. Same fifty years: envelope-twenty, worth two dollars of old stuff. Passbook-fifty would've been $355. Necklace-fifty, about a thousand. Everything holds better than paper. But nothing in this ledger actually GREW — the necklace just refused to shrink. That word you said — 'worker.' What's the worker?",
        },
        {
          speaker: 'nadia',
          text: "Next week. For real this time — I've been sitting on this lesson for two weeks and it compounds, so it's only gotten better. Bring the envelope, bring the twenty, and bring whatever Keisha's calculator is rated for.",
        },
        {
          speaker: 'maya',
          text: "Meanwhile the necklace goes back in the velvet box for another fifty years, right? For 'the emergency'?",
        },
        {
          speaker: 'narrator',
          text: "Elena lifted the chain, fastened it around her own neck, and looked at Maya the way a museum looks at a tourist.",
        },
        {
          speaker: 'elena',
          text: "Fifty years in a box is long enough — didn't we decide that already, with the twenty? Things that hold their worth get to be worn. Now: the rule. Emily asked the question, Emily gets the pen.",
        },
        {
          speaker: 'emily',
          text: "Rule #2: real things hold what paper drops. ...Keisha can fix the wording.",
        },
        {
          speaker: 'keisha',
          text: "The wording's already right. Written. Two rules down, and next week somebody finally explains how money makes money — because holding is clearly only half the game.",
        },
        {
          speaker: 'narrator',
          text: "The receipt went back in the velvet box, the box went in the ledger, and the necklace went home on the neck of the woman who'd waited fifty years to wear it. The club had learned what keeps. Next Saturday: what grows.",
        },
      ],
    },
    {
      type: 'quiz',
      intro: "Porch check — three questions. The necklace did the keeping; you do the explaining.",
      questions: [
        {
          prompt:
            "Same drawer, same fifty years: the $20 bill shriveled to pocket change, the $50 necklace is worth about $1,050. What's the actual difference?",
          options: [
            {
              id: 'a',
              label: 'Luck — gold happened to have a good half-century.',
              feedback:
                "Gold's exact multiple has luck in it — 21× outran inflation's 6×, and no one was promised that. But the direction wasn't luck: the bill is a printable number, and printable things get watered down; the chain is a scarce physical thing, and scarce things ride the price level up. Gold has held worth across centuries of different half-centuries. The pickpocket only picks paper pockets.",
            },
            {
              id: 'b',
              label: "The bill is a printable number; the necklace is a scarce thing nobody can make more of.",
              correct: true,
              feedback:
                "Right — that's the whole mechanism. Dollars can be issued by the trillion, so each one quietly buys less; gold has to be dug out of the ground, so when the dollar shrinks, gold's dollar price climbs to match. Real, scarce, hard-to-make things hold what paper drops — which is why Sofi's mom banks in bangles and half the world always has.",
            },
            {
              id: 'c',
              label: 'Jewelry appreciates because it becomes vintage and collectible.',
              feedback:
                "The velvet box is doing less work than you'd think — Keisha priced the chain as plain metal, no vintage markup, and it still came to ~$1,050. Fashion fades and collectibles are a lottery; the holding power is in the gold itself: scarce, unprintable, wanted everywhere. The necklace would've held melted down. The twenty wouldn't have held laminated.",
            },
          ],
        },
        {
          prompt:
            "Elena's median house went from $84,000 to about $420,000 — 5× — while prices overall tripled. Why do houses tend to keep up with inflation?",
          options: [
            {
              id: 'a',
              label: "They're built from labor and sit on land — wages rise with prices, and nobody makes more land.",
              correct: true,
              feedback:
                "Right — a house is frozen labor on un-printable ground. Rebuilding it means hiring this year's carpenters at this year's wages, so its replacement cost climbs with everything else; and the lot under it is a fixed supply that everyone needs. Same recipe as gold — scarce and costly to remake — plus you get to live inside this one.",
            },
            {
              id: 'b',
              label: 'Houses always go up — real estate is a guaranteed win.',
              feedback:
                "Elena would stop you right there — she watched neighbors learn otherwise in 2008. Houses track inflation over long stretches for structural reasons (labor in the walls, scarcity under them), but they swing, crash, and charge their owners rent the whole time: taxes, repairs, a 12% mortgage in her case. 'Tends to keep up over decades' and 'guaranteed win' are different sentences.",
            },
            {
              id: 'c',
              label: "Banks set home prices to rise with inflation so their loans stay safe.",
              feedback:
                "Banks price the loans, not the houses — no one sets home prices; they emerge from what buyers pay. The inflation-tracking comes from the ingredients: construction is labor, and wages ride the same escalator as all prices; land is fixed while people keep arriving. That's why the median house roughly kept pace for decades — no committee required.",
            },
          ],
        },
        {
          prompt:
            "After fifty years, the necklace 'won' — $50 became about $1,050. So why does Elena call gold a keeper, not a worker?",
          options: [
            {
              id: 'a',
              label: "Because gold's win is fragile — next time it might not hold at all.",
              feedback:
                "Gold does swing hard — whole decades underwater, no promises on the multiple — but that's not the distinction Elena's making. Even in a century where it holds perfectly, a chain in a drawer produces nothing: no interest, no dividend, no new value. It defends the money you made; it never makes more. The thing that makes more — the worker — is next week's whole episode.",
            },
            {
              id: 'b',
              label: 'Because it only preserved value — it never produced anything new while it sat.',
              correct: true,
              feedback:
                "Right — fifty years in the box and the chain never paid a dime of rent, interest, or dividend. Its 'win' is just the dollar's loss, mirrored: it refused to shrink, which beats paper but builds nothing. Keeping and growing are different jobs. The envelope failed at both, the necklace aced the first — and the second one is where fortunes actually come from. Next Saturday.",
            },
            {
              id: 'c',
              label: "Because it's too small — $1,050 in fifty years isn't worth the trouble.",
              feedback:
                "Careful — $1,050 versus the twenty's fate is a massive result; scale isn't the issue. The issue is the KIND of result: every dollar of it came from holding ground, none from producing anything. A necklace can't have a good quarter, hire anyone, or pay its owner to wait. Storing value protects the past. Growing value builds a future — and that takes something that works. Cue Nadia.",
            },
          ],
        },
      ],
    },
  ],
}

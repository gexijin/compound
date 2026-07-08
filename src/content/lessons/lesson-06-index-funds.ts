import type { Lesson } from '../schema'

/** Episode 6 — Index funds. Arc role: the fix (own everything, easily) — and
 * the season's reveal. The 1976 slip pays off: Elena bought First Index
 * Investment Trust ("Bogle's folly") after the divorce paperwork showed her
 * she was financially invisible — everything in his name. The vow is "never
 * invisible again," not "get rich." The reveal reframes, not impresses:
 * every strange thing she did all season was a curriculum. Guardrails: the
 * ex stays off-screen and un-villained; no shame for savers ("nobody showed
 * your mom the game"); the check Keisha never asks for is refused before
 * it's asked. All numbers: elenaPortfolio2026() ≈ $1,684,185 from $84,000;
 * the $20 three ways (envelope / passbook ~$210 / index ~$2,945).
 */
export const lesson06: Lesson = {
  id: 'lesson-06',
  slug: 'index-funds',
  number: 6,
  title: 'Own Everything, Quietly',
  tagline: 'Index funds: hundreds of companies in one purchase. Boring wins.',
  arcRole: 'fix',
  minutes: 10,
  characters: ['elena', 'keisha', 'emily', 'sofi', 'maya', 'nadia'],
  status: 'available',
  porchRule: 'Boring wins — own everything, hold on.',
  beats: [
    {
      type: 'story',
      scene: 'The porch — Elena is back, and so are the empanadas',
      lines: [
        {
          speaker: 'narrator',
          text: "Elena returned from Beto's to find her porch annexed by a financial society with four bylaws and a ledger. She read the back of her own 1965 pay envelope for a long moment — rules one through five in five different hands — and nodded once, like a judge accepting a plea.",
        },
        {
          speaker: 'keisha',
          text: "Before you sit down — ledger-keeper's report. Exhibit A: a tin-box, passbook grandma. Exhibit B: reading the stock tables during the worst crash in forty years, calmly. Exhibit C: a receipt from 1976 that 'isn't for today.' Exhibit D: a bakery, 1978. None of these people are the same person. Explain.",
        },
        {
          speaker: 'elena',
          text: "All of them are the same person, mija — you just have the order wrong. And yes. It's today. But you've learned everything backwards from how I did, so we do one last thing my way: before I tell you what I chose, you choose. 1976 was not a good year to be me. Let's see if you'd have done better.",
        },
        {
          speaker: 'narrator',
          text: "She set down the empanadas, poured the lemonade, and dealt the facts like cards — dry, unhurried, no self-pity anywhere in it.",
        },
        {
          speaker: 'elena',
          text: "Nineteen seventy-five. I'm twenty-nine. The divorce is final that spring — his idea, if the ledger wants everything. I go to move my life into my own name and discover my life isn't in my name. The checking account: his. The credit card that bought our groceries for ten years: his, I was the 'authorized user.' The house: his. Legally I was a rumor.",
        },
        {
          speaker: 'sofi',
          text: "That's not fair. You paid for things too. You worked.",
        },
        {
          speaker: 'elena',
          text: "Fair wasn't the arrangement, mija. The times were the times; he was just standing where they pointed. What was mine — the only thing with my name on it — was the passbook. Eleven years of my $20s, minus the one in this envelope. And you know what I'd just learned about money sitting politely in a passbook, because you wrote it. Rule one. In 1974, prices had jumped eleven percent in a single year. My decade of being careful was quietly on fire.",
        },
        {
          speaker: 'emily',
          text: "What did you do?",
        },
        {
          speaker: 'elena',
          text: "What I did comes after what you'd do. That's the deal. Two years earlier, a law — the Equal Credit Opportunity Act — had made it illegal for a bank to demand a husband's signature before a woman could have her own account. My mother couldn't have done what I was about to do. I could. First time in my family's history the door was even unlocked. So: choose.",
        },
      ],
    },
    {
      type: 'decision',
      context: [
        "Nineteen seventy-six. Everything you own fits in a passbook and a suitcase. The market crashed by half two years ago; prices are still far below the old highs, and the newspapers are still doing funerals for capitalism.",
        "And there's this: late that summer, a man named Bogle launches a strange new fund that doesn't try to pick winners at all — it just buys a slice of every big company in America at once, for almost no fee. Wall Street is calling it 'Bogle's folly.' Un-American, one poster says. Settling for average.",
        "You're Elena. Thirty, free, furious, and holding every dollar you have.",
      ],
      prompt: 'Your name, your money, your call. Where does it go?',
      choices: [
        {
          id: 'tin-box',
          label: 'The tin box. You just learned what happens when your money lives under someone else’s name — under your own bed, at least it’s YOURS.',
          consequence: [
            "Completely understandable — and she'd tell you so. After a decade of being a rumor on other people's paperwork, 'where I can see it' isn't foolishness, it's a trauma response with a lid. The tin is honest. Hers. Instant.",
            "But 1976's pickpocket isn't Episode 1's gentle 4% — inflation is running hot, eleven percent in '74 alone. In the tin, her eleven careful years lose half their buying power in under seven more. Visible isn't the same as safe. She'd have her name on a shrinking thing.",
          ],
          coda: 'The tin protects the paper from everyone except time. She’d already lost a decade to that trade.',
        },
        {
          id: 'passbook',
          label: 'The passbook, now in her own name. The habit that survived the marriage — keep it, just make it officially hers.',
          consequence: [
            "The dignified choice, and don't let anyone mock it: an account with HER name on it was the actual victory of 1976. The stamped numbers keep climbing; the interest arrives on schedule; no crash can touch it.",
            "But run the sixty-year tape on a $20 in a passbook: it grows to about $210 — and matching its original buying power needed about $204. Six decades of showing up, to tread water by six dollars. The passbook wins the battle her mother couldn't fight, and still loses the war her granddaughters would need her to win.",
          ],
          coda: 'A shelter, not an engine — and she’d just learned exactly how much shelter costs per decade.',
        },
        {
          id: 'folly',
          label: 'Bogle’s folly. Everything the porch has learned, in one purchase: every egg, hundreds of baskets, on sale after the crash.',
          consequence: [
            "Look at what this weird new thing actually is, through five rules the porch already owns. It's a slice, not a ticket — hundreds of real businesses that bake and ship and earn. It's every basket at once — no single bakery can sink her. Prices are still deep in the crater of '74, and 'prices only look scary if you're leaving' — she'd be arriving. And it asks for exactly what a 30-year-old with fifty years ahead has the most of: time.",
            "The whole world called it settling for average. But 'average' meant owning a sliver of American business entire — automatically holding whatever wins next, decade after decade, no genius required. The mockery was the discount.",
          ],
          coda: 'Four porch rules, one purchase. The folly was everyone else’s word for it.',
        },
      ],
      reveal:
        "She bought the folly. Fifty dollars a month, starting the first month the law and the paperwork allowed it, into the mocked little fund that bought everything — plus, later, a few stocks she chose by studying a certain Omaha investor's letters at the public library. The receipt from the first purchase is stapled into a passbook you've all held. She kept it the way other people keep a birth certificate.",
    },
    {
      type: 'teaching',
      title: 'The whole market in one purchase',
      voicedBy: 'elena',
      body: [
        "So now you know what an index fund is, because you reasoned your way to buying one in 1976: a single fund that owns a slice of every big company at once — hundreds of them — weighted by size, for a fee close to nothing. One purchase, and Rule #5 is simply finished: no company can hurt you alone, and you own whichever ones turn out to be the future without having to guess. In 1976 nobody knew which companies would run the next fifty years. I didn't have to know. I owned all of them the whole time.",
        "Here's the part they called un-American: not trying to win. The professionals pick and trade and charge for the picking — and over any long stretch, roughly nine in ten of them end up behind the boring fund that just bought everything and sat still. Partly it's the guessing. Partly it's the fee: their one percent compounds against you the way growth compounds for you — over fifty years it quietly eats more than a third of the pot. A fee is a pickpocket with a business card.",
        "So the folly asks almost nothing of you. Not brilliance, not timing, not stock-picking homework. Buy everything, keep buying, never sell scared. Any of you can do it. That was always the scandal — it doesn't need experts. It needs time and nerve, and I had both, because a courthouse had just taught me what waiting costs and a crash was holding the door open.",
      ],
      takeaway:
        'An index fund is the whole market in one cheap purchase — instant diversification, no guessing. Most professionals lose to it; consistency beats cleverness.',
    },
    {
      type: 'story',
      scene: 'The porch — the slip, at last',
      lines: [
        {
          speaker: 'keisha',
          text: "Then I'm asking. It's been five weeks since the garage. 'First Index Investment Trust, 1976.' Fifty dollars a month since before my mom was born, into the thing we just did the math on. Grandma. Is it still not for today?",
        },
        {
          speaker: 'elena',
          text: "Do the math and tell me. Fifty a month to start, more as my paychecks grew — one-fifty, three hundred, four hundred by the end. Thirty-five years of deposits, then fifteen of just holding on. Eighty-four thousand dollars in, over a lifetime. Never sold — not in '87, not in 2000, not in 2008, not in 2020. And the market's long-run pace, dividends folded back in, runs about ten and a half percent a year. Ledger-keeper, you have everything. I'll wait.",
        },
        {
          speaker: 'narrator',
          text: "Keisha's pen moved. Stopped. She turned the ledger ninety degrees, as if the number needed to be approached from the side. Maya looked over her shoulder and made a sound like a kettle.",
        },
        {
          speaker: 'keisha',
          text: "One million, six hundred eighty-four thousand, one hundred eighty-five dollars.",
        },
        {
          speaker: 'sofi',
          text: "You're rich?? You reuse ALUMINUM FOIL.",
        },
        {
          speaker: 'elena',
          text: "I'm not rich, mija. I'm free. There's a difference, and the difference is the whole point. Nobody decides anything for me — not a husband, not a landlord, not a bad year. That's what I bought. The foil is just good sense.",
        },
        {
          speaker: 'maya',
          text: "THAT'S why the missing fortune looked like a postcard to you. We showed you $201,432 like it was a magic trick and you'd been sitting on eight times that the whole— you let us do a GUESSING GAME.",
        },
        {
          speaker: 'elena',
          text: "You needed the game more than the answer. All summer you've been living my fifty years in fast-forward — tin, passbook, slices, baskets, crashes — every 'strange' thing I did was the next lesson waiting for you to be ready. The twenty had to wait so you'd price what waiting costs. The slip wasn't for today until you could read it.",
        },
        {
          speaker: 'emily',
          text: "The note in the margin. October '74. You weren't being brave about a crash — you were window-shopping. Two years before you had a dime free to spend.",
        },
        {
          speaker: 'elena',
          text: "Never invisible again — that was the vow, the whole vow. Not 'get rich.' A librarian helped me find the pamphlets; a professor's folly did the rest. Someone showed me the game, that's all. Nobody showed your mother, Sofi — so the tin was her best move, same as it was mine for eleven years. You tell her that, with respect, from me.",
        },
        {
          speaker: 'narrator',
          text: "Keisha was still looking at the number. Everyone knew what the number could do — the gap was $3,000, and the number wouldn't feel it. Elena watched her not ask, and answered anyway.",
        },
        {
          speaker: 'elena',
          text: "No, mija. Not because I don't love you — because it took me fifty years to buy a life where nobody signs for me, and I won't teach you that someone will always sign for you. Your climb stays yours. What I have is better than a check: fifty years of receipts saying your plan already works. And this porch, every week, until the gap is closed clean.",
        },
        {
          speaker: 'keisha',
          text: "...I wasn't going to ask. But thanks for answering. Write this down as a rule, somebody, before I get sentimental about it.",
        },
      ],
    },
    {
      type: 'teaching',
      title: 'The $20, three ways',
      voicedBy: 'elena',
      body: [
        "One last piece of arithmetic, and then the rule. This envelope's twenty — the one that missed the bus in 1965 — finally gets its verdict, because now you can price all three of its possible lives. Life one, the one it lived: sixty years of faithful sitting, still says twenty, buys about two dollars of what it could have bought. Nine-tenths of it pickpocketed in broad daylight. Life two, the passbook it was walking toward: about $210 today — almost exactly what it needed just to tread water. Sixty years of effort to stay even.",
        "Life three: suppose it had waited in the drawer eleven more years and ridden with me in 1976, into the folly. About $2,945 today — from twenty dollars, doing nothing but refusing to leave. Same bill, three lives: two dollars, two hundred, two thousand nine hundred. The only variable was what it was allowed to own. Boring won by a thousand to one — it always had the best numbers; it just had the worst marketing. Say the rule, and write it under the other five.",
      ],
      takeaway:
        'Boring wins: own everything, keep buying, hold through everything. Same $20 — ~$2 of buying power in the envelope, ~$210 in the passbook, ~$2,945 riding the index.',
    },
    {
      type: 'story',
      scene: 'The porch — six rules deep',
      lines: [
        {
          speaker: 'maya',
          text: "Rule #6: boring wins — own everything, hold on. Written. And I'm framing something else: the most interesting person I know got rich ON PURPOSE by being boring, and hid it under empanadas for fifty years.",
        },
        {
          speaker: 'elena',
          text: "Not hid, mija. Real wealth is quiet because it has nothing to prove — the loud kind is usually a costume. You've seen my whole show: same porch, same foil, same lemonade. Freedom doesn't photograph well.",
        },
        {
          speaker: 'nadia',
          text: "For the record, my $25 a month has been going into the great-granddaughter of Bogle's folly all along. I found the game on my own at nineteen — took me a credit card mess to go looking. Imagine getting the map at sixteen, on a porch, with snacks.",
        },
        {
          speaker: 'elena',
          text: "Which leaves one lesson, and it's the one the courthouse taught me, not the market: none of this counts until it's in your name. Not your boyfriend's, not your parent's sock drawer, not 'the family's.' Yours, on paper, where the law can read it. Next week, bring a parent. We're going to find out where money like yours gets to live.",
        },
        {
          speaker: 'narrator',
          text: "Keisha unpinned the $20 from the ledger and laid it in the passbook, beside the 1976 slip — the deposit that never made the journey and the one that made all of it, finally on the same page. Six rules down. One porch left.",
        },
      ],
    },
    {
      type: 'quiz',
      intro: 'Porch check — three questions, fifty years of proof behind each one.',
      questions: [
        {
          prompt: 'You buy one share of an index fund. What did you just buy?',
          options: [
            {
              id: 'a',
              label: "A bet on the fund manager's skill at picking this year's winners.",
              feedback:
                "That's the opposite of the folly — an index fund's entire trick is that nobody picks. It just holds a slice of every big company, by rule, for a fee close to nothing. The picking-skill funds are the ones that charge one percent and still trail the boring fund nine times out of ten. Bogle's scandal was firing the guesswork.",
            },
            {
              id: 'b',
              label: 'A tiny slice of hundreds of companies at once — the whole market, one purchase.',
              correct: true,
              feedback:
                "Right — Rule #4 and Rule #5 in a single object: a real ownership slice, spread across every basket at once. No single company can sink you, and whichever companies turn out to be the next fifty years' winners, you already own them. Elena never knew which businesses would win. She didn't have to.",
            },
            {
              id: 'c',
              label: 'A guaranteed savings product — like a passbook, but with a better rate.',
              feedback:
                "No — it's ownership, not a deposit, and it comes with the full 1974 experience: crashes, halvings, scary front pages. Nothing about it is guaranteed year to year. Its promise is different: hundreds of companies, decades of time, and the whole market has never gone to zero. The passbook shelters; the fund grows. Elena needed sixty years to price the difference at a hundred to one.",
            },
          ],
        },
        {
          prompt:
            'Professional stock-pickers study companies full-time. Over 15 years, how do most of them do against the boring index fund?',
          options: [
            {
              id: 'a',
              label: 'They beat it — that much full-time expertise has to win out.',
              feedback:
                "Feels obvious, isn't true: over long stretches roughly nine in ten trail the index they're paid to beat. Two anchors drag them down — guessing wrong about winners, and fees that compound against the client the way growth compounds for her: one percent a year quietly eats more than a third of the pot over fifty years. Expertise is real. The math is realer.",
            },
            {
              id: 'b',
              label: 'Roughly nine in ten lose to it — guessing costs, and their fees compound against you.',
              correct: true,
              feedback:
                "Right — and that's the scandal that made them call the folly un-American. The index doesn't out-smart the pros; it out-cheaps and out-sits them. No wrong guesses to recover from, and no one-percent fee compounding in reverse — which alone devours more than a third of a fifty-year pot. 'Settling for average' beat the experts. Quietly. For decades.",
            },
            {
              id: 'c',
              label: "It's a coin flip — some years the pros win, some years the index does.",
              feedback:
                "Any single year, sure — plenty of pros have a great year. But stretch to fifteen and the coin stops flipping: roughly nine in ten land behind the index, because every year's fee and every wrong guess compounds. Time is the index fund's home field. It's the pros who need to get lucky repeatedly; the folly just needs to keep owning everything.",
            },
          ],
        },
        {
          prompt:
            "The same $20, sixty years, three lives: the envelope it lived in, the passbook it was walking toward, and riding Elena's 1976 index purchase. Match the endings.",
          options: [
            {
              id: 'a',
              label: 'Envelope ~$210, passbook ~$2, index ~$2,945.',
              feedback:
                "Two of the three are swapped: the envelope is the one that still says $20 but buys about $2 of its old life — paper frozen, buying power pickpocketed. The passbook's interest is what got it to ~$210, almost exactly treading water. The index ending you got right, and it's the headline: ~$2,945, a thousand-to-one win for boring.",
            },
            {
              id: 'b',
              label: 'Envelope ~$2 of buying power, passbook ~$210, index ~$2,945.',
              correct: true,
              feedback:
                "Right — two dollars, two hundred, two thousand nine hundred. Same bill, same sixty years; the only variable was what the money was allowed to own. The envelope fed the pickpocket, the passbook outran him by six dollars, and the folly turned him into a rounding error. That's the season in one row of the ledger.",
            },
            {
              id: 'c',
              label: 'All three end up about the same — sixty years is sixty years.',
              feedback:
                "The years were identical; the vehicles weren't, and the gap runs a thousand to one — about $2 of surviving buying power in the envelope, ~$210 in the passbook, ~$2,945 riding the index. Time multiplies whatever it's given: nothing, a shelter, or an engine. That's why 'where does the money live' is next week's — and the season's — last question.",
            },
          ],
        },
      ],
    },
  ],
}

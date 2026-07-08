import type { Lesson } from '../schema'

/** Episode 3 — What a stock is. Arc role: the vehicle (what you actually buy).
 * Elena is off-stage (visiting Beto); her voice arrives in writing — an old
 * paper stock certificate tucked in the passbook, with a note in her hand on
 * the back. Nadia voices the teaching as the near-peer. Maya's resale shop is
 * the bridge: she already thinks like an owner and doesn't know it.
 * Season: the certificate tightens the mystery (why does Grandma own shares?)
 * without confirming anything; Keisha's classmate's hot stock is planted here
 * and pays off in Episode 4's decision.
 */
export const lesson03: Lesson = {
  id: 'lesson-03',
  slug: 'what-is-a-stock',
  number: 3,
  title: 'A Slice, Not a Ticket',
  tagline: 'What a share of stock actually is (hint: not a lottery ticket).',
  arcRole: 'vehicle',
  minutes: 9,
  characters: ['maya', 'sofi', 'nadia', 'keisha'],
  status: 'available',
  porchRule: 'Buy the slice, not the ticket.',
  beats: [
    {
      type: 'story',
      scene: 'The porch — week three, Elena away',
      lines: [
        {
          speaker: 'narrator',
          text: "No empanadas this week — Grandma Elena was off visiting her brother Beto, allegedly to 'check his arithmetic.' But she'd left the porch light on, and the passbook on the table, exactly as promised.",
        },
        {
          speaker: 'keisha',
          text: "Ledger's open. Rules so far: one, money sitting still is money shrinking. Two, small and early beats big and late. Which means we're all investing now — in what, exactly? Nobody's said what we're actually buying.",
        },
        {
          speaker: 'sofi',
          text: "Wait. There's something folded inside the passbook. It's... fancy? It has borders like a diploma. 'SUNRISE BAKING COMPANY — ONE HUNDRED SHARES.' It's dated 1978.",
        },
        {
          speaker: 'narrator',
          text: "The paper had the heft of a document that expected to be kept. Sofi turned it over. On the back, in handwriting they all knew from birthday cards, was one line — and beneath it, a neat pencil tally of dates, quarter after quarter, years of them.",
        },
        {
          speaker: 'sofi',
          text: "'Not a ticket. A slice of a bakery I never had to sweep. — E.' What does that mean? And who lets you own a piece of a bakery you don't work at?",
        },
        {
          speaker: 'nadia',
          text: "Anyone, Sofi. That's the whole secret. A share of stock is a slice of a real company — legal part-ownership. Own the slice and a sliver of everything the business earns is yours. The tally on the back? Dividend days. The bakery mailed her money for owning it. Quarter after quarter.",
        },
        {
          speaker: 'maya',
          text: "Hold on, people can just BUY pieces of companies? Like — could someone buy a piece of my shop? Because no. Absolutely not. My shop prints fifty a month. Why would I hand a stranger a slice of that forever?",
        },
        {
          speaker: 'nadia',
          text: "And there it is. Say it back to yourself, Maya, slowly. You just explained why a share of a good business is worth owning — you'd have to be paid a fortune to give one up. You've been an investor all summer. You just only invest in Maya.",
        },
        {
          speaker: 'keisha',
          text: "Okay, but my mom's cousin 'invests' too — scratch-offs, every Friday. He won fifty bucks once and we heard about it for a year. Is that... this?",
        },
        {
          speaker: 'nadia',
          text: "That's the exact opposite, and the certificate says so: not a ticket. A ticket is a bet — for you to win, everyone else has to lose, and the odds are printed in microscopic font for a reason. A slice pays you because the business baked bread and sold it. Nobody has to lose for a bakery to have a good year.",
        },
        {
          speaker: 'narrator',
          text: "Sofi set the certificate in the middle of the table, next to the envelope. Question one — what is this? — was settled. Question two — why does Grandma have one? — sat there, unclaimed, like the last empanada. Nobody touched it.",
        },
      ],
    },
    {
      type: 'decision',
      context: [
        "Maya's shop cleared $60 this week, and for once she's not spending it — Rule #2 got under her skin. But 'invest it' turns out to be a menu, and three items are winking at her.",
        "Her feed is hyping a stock called 'the next big thing' — up 40% this month, rocket emojis everywhere. The thrift app she sells through is a public company she knows inside out. And the gas station sells Powerball tickets, $2 a dream.",
        "You're Maya.",
      ],
      prompt: 'Sixty dollars. Which way does it go?',
      choices: [
        {
          id: 'meme-stock',
          label: "The rocket-emoji stock. It's up 40% in a month — that's the growth Nadia keeps talking about, right?",
          consequence: [
            "Say it keeps flying for a week — Maya screenshots her gains, unbearable at dinner. Then the crowd that hyped it finds a new toy, and it gives it all back in an afternoon. Nothing about the company changed either way. She wasn't holding a slice of a business; she was holding the crowd's mood, and moods don't pay dividends.",
            "Here's the tell she skipped: she can't say what the company sells, or whether it earns a dime. Price going up isn't proof of a business underneath — a ticket can get more expensive and still be a ticket.",
          ],
          coda: 'If you can’t explain how it makes money, you didn’t buy a slice. You bought a mood.',
        },
        {
          id: 'known-brand',
          label: 'Shares of the thrift app she sells on — the business she already knows by heart.',
          consequence: [
            "Nothing dramatic happens. That's the point. The app keeps taking its cut of a million closet-cleanouts a day — Maya knows exactly how, because she pays that cut every week and grumbles. Now a sliver of everyone's fees, including her own, lands on her side of the register.",
            "She checked the price twice the first week, then mostly forgot about it — the way Elena forgot a bakery for decades and got mailed money the whole time. The slice doesn't need her attention. The business does the working; she does the owning.",
          ],
          coda: 'Buy what you understand, and the stock stops being a mystery — it’s a business you can audit from your own receipts.',
        },
        {
          id: 'lottery',
          label: 'Thirty Powerball tickets. Someone has to win, and $60 of chances is a lot of chances.',
          consequence: [
            "Thirty tickets, thirty thrills, and the honest math: each one carries a 1-in-292,201,338 shot at the jackpot. Thirty of them together don't move that needle enough to see. Wednesday night, the numbers drop, and the $60 becomes what tickets almost always become — a story about almost.",
            "Notice what the ticket never offered: no slice, no business, no dividend, no next quarter. A share can sit for sixty years and still be a claim on something real. A losing ticket is done being anything by bedtime.",
          ],
          coda: 'A ticket needs a loser to make a winner. A slice just needs the bakery to sell bread.',
        },
      ],
      reveal:
        "For the record, the porch took a vote and Maya bought the slice she could explain. The rocket stock? Keisha's classmate DeShawn is all-in on one just like it, and won't stop talking about it. Hold that thought exactly one week.",
    },
    {
      type: 'teaching',
      title: 'The other side of the register',
      voicedBy: 'nadia',
      body: [
        "Here's what you actually own when you own a share: a slice of a real company — its stores, its app, its recipes, its next quarter. Companies get split into millions of slices, and anyone with a few dollars can own some. If Maya cut her shop into 100 slices and it cleared $40 in a month, one slice's share of that is 40 cents. Tiny — but it's real money that recurs, and no one had to lose it for you to get it. That's Sofi's question answered: who pays the rent from Episode 2? Businesses do. Growth comes from companies earning money, and owners collecting their sliver.",
        "And you already know these companies — that's your unfair advantage. Your phone, your sneakers, your snacks, the app Maya sells on: every one has an owner's side, and you've only ever stood on the customer's side, paying in. Flip the register once and money starts flowing the other way. Elena's bakery note is the whole idea in nine words: a slice of a business she never had to sweep.",
      ],
      takeaway:
        'A share is legal ownership of a slice of a real business. Its profits are partly yours — you earn from the owner’s side of the register, not against other players.',
    },
    {
      type: 'teaching',
      title: 'The ticker is a mood ring',
      voicedBy: 'nadia',
      body: [
        "Now the trap that makes people call this gambling: the price. It updates every second the market's open, wiggling like a heart monitor, and staring at it will convince you stocks are a casino. But the price is just what buyers and sellers are feeling today — the mood. The business underneath changes slowly: it bakes, it ships, it earns, quarter by quarter. When you own a slice, the wiggle is noise; the bread is signal. Elena's tally went quarter after quarter for years — you think she checked a ticker? She checked the mailbox.",
        "A lottery ticket has no bread. It's a bet where the winners are paid out of the losers' pockets, at 1-in-292-million odds — printed small, felt smaller. A share isn't a bet against anybody: the bakery has a good year, and every single owner does too. That's why 'the stock market is gambling' gets it backwards. Gambling shuffles money between players. Ownership grows it — someone bakes something new, and there's more to split than there was.",
      ],
      takeaway:
        'The price is the mood; the business is the thing. Tickets shuffle money between players — slices grow because the company actually makes something.',
    },
    {
      type: 'story',
      scene: 'The porch — later, certificate back in the passbook',
      lines: [
        {
          speaker: 'sofi',
          text: "So when my family buys flour and sugar for the stand every week — somebody owns slices of the flour company. We've been paying tiny dividends to strangers. Forever.",
        },
        {
          speaker: 'nadia',
          text: "Every receipt in your shoebox has an owner's side, Sofi. The whole game is getting on it.",
        },
        {
          speaker: 'maya',
          text: "I can't stop thinking about the bakery. Grandma owned a hundred slices of somebody's bakery in 1978. Grandma. Who makes me split a churro because 'money doesn't grow on trees.'",
        },
        {
          speaker: 'keisha',
          text: "Add it to the pile, right? Her words. The receipt from 1976 'isn't for today,' the certificate's from 1978... I keep the ledger, and I'm telling you the entries don't add up to the grandma we know.",
        },
        {
          speaker: 'narrator',
          text: "Nobody said the next sentence out loud. Sofi slid the certificate back where she found it, careful as a librarian, and the passbook kept its secrets one more week.",
        },
        {
          speaker: 'keisha',
          text: "Meanwhile, in things that ARE for today — DeShawn cornered me at work again. His one magic stock, up 40%. He knows about my tuition gap and keeps saying I'm one smart bet from closing it. And I keep doing the math on what 40% of my savings would mean...",
        },
        {
          speaker: 'nadia',
          text: "That sentence is next week's whole episode, Keisha. Bring your savings number. We're going to talk about eggs, baskets, and what happened to the market the year after Grandma's twenty missed the bus.",
        },
        {
          speaker: 'narrator',
          text: "Keisha flipped the envelope and clicked the pen. Sofi — who a month ago had never held a bank card — got the honors this time, and didn't hesitate.",
        },
        {
          speaker: 'sofi',
          text: "Rule #3: buy the slice, not the ticket. My tío buys tickets. Grandma bought a bakery. I've decided which one I am.",
        },
        {
          speaker: 'narrator',
          text: "Three rules on a sixty-year-old envelope, a certificate sleeping in a passbook, and one question getting louder every week: what else did Grandma buy?",
        },
      ],
    },
    {
      type: 'quiz',
      intro: 'Porch check — three questions. The certificate did most of the teaching; prove it stuck.',
      questions: [
        {
          prompt: 'Maya buys one share of the thrift app. What does she actually own now?',
          options: [
            {
              id: 'a',
              label: 'A bet that the price goes up — cash out when it does, lose it if it drops.',
              feedback:
                "That's ticket-thinking wearing a stock costume. The price can wiggle all it wants — what Maya holds is a slice of the company itself, and it keeps being a claim on real profits whether today's mood is up, down, or sideways. People who own bets watch tickers; people who own slices watch the business.",
            },
            {
              id: 'b',
              label: 'A tiny legal slice of the company — its business, profits and all.',
              correct: true,
              feedback:
                "Right — part-ownership, same as Elena's hundred slices of bakery. Every fee the app collects, a sliver belongs to its owners now, Maya included. The price on the screen is just what other people would pay for her slice today; the slice itself is the thing.",
            },
            {
              id: 'c',
              label: "An IOU — the company owes her the money back, plus interest.",
              feedback:
                "That's a loan, and loans are a different deal — lenders get paid back first but never own anything. A shareholder isn't owed her money back; she owns a piece of the machine that makes money. More risk than an IOU, and the whole upside in exchange.",
            },
          ],
        },
        {
          prompt: "Long-run, where does a stock's return actually come from?",
          options: [
            {
              id: 'a',
              label: 'Finding someone later who will pay more than you did.',
              feedback:
                "That's how tickets and fads work — and it's why they collapse: the game ends the moment no one shows up behind you. A business doesn't need a next buyer to pay you. It sells bread, keeps profit, and mails dividends — Elena's pencil tally didn't require finding a single sucker.",
            },
            {
              id: 'b',
              label: 'Luck — the market is a big randomizer and someone has to win.',
              feedback:
                "Day to day, prices are moody enough to look random. But zoom out and the engine is boring and visible: companies earn money, and owners get their share of it. Elena's bakery paid her quarter after quarter for years — luck doesn't keep a schedule.",
            },
            {
              id: 'c',
              label: 'The business itself — it grows and earns profit, and owners get their cut.',
              correct: true,
              feedback:
                "Right. The company sells things, keeps profit, pays dividends, gets more valuable as it grows — and every slice-holder rides along. Nobody had to lose for Elena's bakery to have a good year. That's the line between investing and gambling, drawn in bread.",
            },
          ],
        },
        {
          prompt:
            "Two friends buy stock the same day. Amara can't name what her company sells but 'it's up 40% this month.' Tasha owns the store brand she shops at and can explain exactly how it earns. Who bought a ticket?",
          options: [
            {
              id: 'a',
              label: 'Amara — she bought a price going up, not a business she understands.',
              correct: true,
              feedback:
                "Right — the object in her account says 'stock,' but she's holding it like a scratch-off: no idea what's underneath, just a number she hopes gets bigger. The test isn't what you bought; it's whether you could explain how it makes money. Tasha can audit her company from her own receipts.",
            },
            {
              id: 'b',
              label: "Tasha — boring companies you shop at can't be real investments.",
              feedback:
                "Backwards — boring-and-understood is exactly what a slice looks like. Elena's pick was a bakery, the least glamorous business on earth, and it mailed her money for years. Amara's the ticket-holder: 'up 40%' is a mood, not a business model.",
            },
            {
              id: 'c',
              label: "Neither — they both bought stocks, so they're both investing.",
              feedback:
                "The receipt says stock either way — but Amara is holding hers like a lottery ticket: she can't say what the company does, only that the number went up. Same object, opposite games. The slice-or-ticket line runs through the buyer's head, not the product.",
            },
          ],
        },
      ],
    },
  ],
}

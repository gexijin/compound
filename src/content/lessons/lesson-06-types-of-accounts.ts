import type { Lesson } from '../schema'

/** Episode 6 — Types of accounts. Arc role: the action (where to press go) —
 * and the finale, which belongs to the girls, not Elena. The final artifact
 * is from the present: account confirmations with THEIR names on them, taped
 * into the passbook opposite the 1976 slip. Every arc lands: Sofi deposits
 * the 1965 $20 with her mother beside her; Emily has already quietly done the
 * thing; Maya's earn-vs-keep thread resolves (her choice from Ep 2 revealed);
 * Keisha closes the gap her way — Elena's gift is the ledger, never a check.
 * Education-only: the episode points at real-world steps, executes nothing.
 */
export const lesson06: Lesson = {
  id: 'lesson-06',
  slug: 'types-of-accounts',
  number: 6,
  title: 'Where the Money Lives',
  tagline: 'Custodial accounts and the Roth IRA — where to actually press go.',
  arcRole: 'action',
  minutes: 11,
  characters: ['keisha', 'maya', 'nadia', 'elena', 'sofi', 'emily'],
  status: 'available',
  porchRule: 'Your name goes on your money.',
  beats: [
    {
      type: 'story',
      scene: 'The porch — last Saturday of summer, extra chairs out',
      lines: [
        {
          speaker: 'narrator',
          text: "The porch had never been this crowded. Elena had said bring a parent, and the yard was full of them — including, at the good table, drinking Elena's lemonade and holding her own tin box like a passport, Sofi's mother.",
        },
        {
          speaker: 'elena',
          text: "Five rules on my old envelope. Money sitting still is shrinking. Small and early beats big and late. Buy the slice, not the ticket. All the eggs, never one basket. Boring wins. All true — and all useless, every one, until the money has an address. Today is addresses.",
        },
        {
          speaker: 'sofi',
          text: "Okay, confession. I thought the index fund WAS the account. Like the fund is the... place? You're all looking at me. Somebody else didn't know either, be honest.",
        },
        {
          speaker: 'nadia',
          text: "Half the adults in this yard didn't know, Sofi — it's the number one mix-up in the game. The account is the backpack; the fund is the books. The backpack decides whose name is on it and what the rules are. The books are what you learned to pick last week. First you get a backpack.",
        },
        {
          speaker: 'maya',
          text: "And this is the week I finally say it out loud: episode two, the $200 decision? I picked the $25-a-month thing. Nadia-core. It's been running since June, quietly, like a nerd. Eighty bucks in there now. The problem is it's technically been going through mom's account, because I'm seventeen and apparently a legal rumor.",
        },
        {
          speaker: 'elena',
          text: "A rumor. Her word, ladies, and the exact right one. I spent ten years as a rumor on a man's paperwork — so the last lesson of this porch is the one the courthouse taught me: there are containers built to hold YOUR money with YOUR name on them, even at fifteen. We're going to name them, and then the yard full of parents is going to be very useful.",
        },
        {
          speaker: 'keisha',
          text: "Ledger's ready. And I've got my own announcement after — summer totals are in. But containers first. I leave for campus in nine days; if my money needs an address, it's getting one this week.",
        },
      ],
    },
    {
      type: 'decision',
      context: [
        "Keisha's final numbers, drumroll: $2,400 saved — every shift at the pharmacy, all summer, parked safely in savings like she decided in week four. The tuition gap: $3,000. Nadia's been walking her through the Roth IRA thing all week; her pharmacy W-2 makes her eligible.",
        "Nine days to allocate a summer. The gap is due at registration; the Roth only counts if it starts; and campus life will want a cushion for the thousand small emergencies of freshman year.",
        "You're Keisha, one more time.",
      ],
      prompt: 'The whole $2,400. How does it land?',
      choices: [
        {
          id: 'all-gap',
          label: 'Every dollar at the tuition gap. $600 short is close enough — deal with the rest later.',
          consequence: [
            "The responsible-sounding choice, and it mostly is: the gap shrinks to $600, work-study covers that by October, registration clears. Nobody could call it a mistake.",
            "But look at what's missing: after a whole summer on this porch, Keisha leaves for college with five rules memorized and nothing anywhere with her name on it. No container, no habit, no first $50 quietly compounding while she studies. 'I'll start after college' — she knows that sentence. It cost Elena's twin self about half a fortune in episode two.",
          ],
          coda: 'Closing the gap is the job. Leaving with zero in your own name — that part was optional.',
        },
        {
          id: 'all-roth',
          label: 'All of it into the Roth IRA. Sixty-six-year-old Keisha will be RICH. Present Keisha will figure something out.',
          consequence: [
            "Run it forward and the number sings: $2,400 at index-style growth for five decades is future money nobody can ignore — that's the whole Rule #2 religion. Future Keisha: thrilled.",
            "September Keisha: $3,000 short at the registrar with her savings locked behind a vow. She'd have to borrow the entire gap at whatever interest says yes quickly, or un-do the Roth she just swore by. It's Episode 4's lesson wearing a halo: money with a deadline was never allowed to chase a horizon. August money isn't Roth money, no matter how holy the container.",
          ],
          coda: 'A perfect future built by torching September isn’t discipline — it’s the hot stock again, in church clothes.',
        },
        {
          id: 'split',
          label: 'Gap first — $2,100 at tuition. Then $200 opens the Roth, $100 stays cash for move-in chaos.',
          consequence: [
            "The gap drops to $900, and here's the part that makes it Keisha's: she's already lined up campus work-study — her hours, her plan, chosen instead of panicked into. The remainder is a payment schedule, not a crisis.",
            "And the $200? It's not about the $200. It's that on move-in day there's an account with KEISHA on it, seeded, real, aimed at a horizon no tuition bill can touch — and a $25-a-month habit that started before the first lecture. The amounts are small. The addresses are perfect: deadline money at the deadline, forever money in the forever container, chaos money in her pocket.",
          ],
          coda: 'Right money, right container, right clock — all five rules, one allocation.',
        },
      ],
      reveal:
        "Keisha split it — her exact words: 'the gap gets the bulk, the future gets a foothold, and I get a cushion.' Elena watched her write it in the ledger and then slid something across the table: not a check. The ledger itself, and the envelope with it. 'Keeper graduates,' she said. 'It goes to campus with you.'",
    },
    {
      type: 'teaching',
      title: 'The name on the door',
      voicedBy: 'elena',
      body: [
        "The account is the container; the fund is the contents. Get that straight and the rest is paperwork. A brokerage account is just a door with a name on it — behind the door you keep whatever you've learned to buy: index funds, slices, boring everything. Same folly inside, different door, different rules. The door decides who owns it, who can open it, and what the tax collector sees. Choose the contents with rules three, four, five. Choose the door with rule six.",
        "Under eighteen, the law wants an adult's signature next to yours — so your door is a custodial account: a parent or guardian opens it WITH you, but the money is legally, permanently yours. Not theirs, not 'the family's' — yours, handed to your full control at adulthood. That signature is a formality of age. What I was on paper for ten years — nothing — is not what you'll be at fifteen. That's the entire distance between my 1966 and your 2026, and a law or two paid for the trip.",
        "So here's what pressing go actually looks like, and it's smaller than you think: one conversation with a parent — bring them THIS, the rules, the math, the story, everything; one custodial account at any big brokerage; one boring index fund inside it; one automatic deposit, sized to survive. Ten dollars a month that never stops beats fifty that quits in October. The paperwork takes an evening. You've spent a whole summer becoming someone who knows exactly what to put behind the door.",
      ],
      takeaway:
        'Account = container, fund = contents. A custodial account puts a minor’s money legally in her own name — the door adults sign, but never own.',
    },
    {
      type: 'teaching',
      title: 'The container with the superpower',
      voicedBy: 'nadia',
      body: [
        "Now the best door in the building: the Roth IRA. Same idea — a container, index funds inside — with one superpower: money goes in after taxes, and then grows and comes out at retirement completely tax-free. The government never touches the growth. Ever. And growth is exactly what you have the most of: one summer's $1,000, parked at sixteen and left alone, is about $27,500 of today's buying power at sixty-five — and every dollar of that growth, tax-free. Do that a few summers in a row and you've built something most adults with salaries never got around to.",
        "The catch — and it's the fairest catch in finance — is the key: EARNED income. Only money you worked for unlocks a Roth. Keisha's pharmacy W-2, yes. Maya's resale profit — reported, thank you very much — yes. Birthday money, allowance, whatever Venmo says: no. You can put in up to what you earned this year or the annual limit, whichever is smaller — the limit's around $7,500 now; check the current year's number. Under eighteen it's opened custodially, like the other door. The law's message, decoded: the moment you earn your first dollar, you're old enough to own a retirement account. Sixteen with a summer job beats twenty-six with a salary, again, forever.",
        "And Emily's question — the one everyone's family asks: 'doesn't that lock your money in prison until you're old?' Softer than the rumor: what you CONTRIBUTED you can take back out if life demands it — no tax, no penalty. It's the growth that has to stay for the magic. So the Roth isn't a cage; it's a greenhouse with an exit door you'll hopefully never use. The rules don't jail your money. They just pay you extravagantly for patience — and patience, per this entire summer, is the one thing you're all rich in.",
      ],
      takeaway:
        'The Roth IRA grows tax-free forever, but only earned income unlocks it — up to min(what you earned, the yearly limit). Contributions can come back out; the growth stays and compounds.',
    },
    {
      type: 'story',
      scene: 'First National, Saturday morning — then the porch, one last time',
      lines: [
        {
          speaker: 'narrator',
          text: "The deposit slip read twenty dollars even. Sofi filled it out in her best handwriting, her mother beside her at the counter — two account applications side by side, one for each of them, because somewhere between the flour receipts and Rule #5, the tin had voted to diversify.",
        },
        {
          speaker: 'sofi',
          text: "Sixty years late, one bus stop over. Grandma said the twenty was done waiting — so it's the first thing into my account. Mami kept the tin, by the way. 'Step one stays home,' she said. Elena said her mother raised a genius.",
        },
        {
          speaker: 'narrator',
          text: "That evening, the porch. Keisha had ruled the ledger's last page into a grid, and one by one the printouts landed on it like cards in a winning hand.",
        },
        {
          speaker: 'maya',
          text: "Custodial account, MAYA on the door, eighty transferred in, twenty-five a month on autopilot — and a second column in my own books now, called KEEP. Earning was never my problem. My money just kept dying young. Now it has somewhere to live that isn't boba.",
        },
        {
          speaker: 'emily',
          text: "...Mine's dated Tuesday. Custodial, my name, fifteen a month. I did it before I could think about it too hard, and then I slept fine, which was the actual surprise. That's the update. That's the whole speech.",
        },
        {
          speaker: 'keisha',
          text: "Roth IRA, opened this morning, two hundred seeded, gap officially on a payment plan I chose. And for the record, Emily just did the bravest one — the rest of us invested money. She invested looking.",
        },
        {
          speaker: 'narrator',
          text: "Keisha taped the four confirmations into the passbook — the same soft-cornered passbook from the garage — on the page facing the 1976 brokerage slip. Fifty years apart, one page apart: Elena's first deposit in her own name, and theirs.",
        },
        {
          speaker: 'elena',
          text: "Look at that page, ladies. That is the only inheritance I ever planned to leave — and you just gave it to yourselves. Rule six, someone. It's been carved on my heart since a courthouse in 1976; I'd like to see it in ink.",
        },
        {
          speaker: 'keisha',
          text: "Rule #6: your name goes on your money. — And that's the envelope full. Six rules, no room left. Feels deliberate, Grandma.",
        },
        {
          speaker: 'elena',
          text: "Everything on this porch is deliberate, mija. Sixty years ago that envelope held a month of my life and a twenty that missed its bus. Now it holds the whole game, in your six handwritings. Never invisible — none of you, not for one day of your lives. That's the lesson. Class dismissed. Porch stays open.",
        },
        {
          speaker: 'narrator',
          text: "The $100 Challenge ended the way real ones do: not with a winner, but with four accounts, six rules, one deposited twenty, and a standing Saturday. Keisha packed the ledger for campus. The passbook stayed on the porch — first artifact of somebody else's someday-garage, already growing.",
        },
      ],
    },
    {
      type: 'quiz',
      intro: "Last porch check of the season — three questions, and then it's your move.",
      questions: [
        {
          prompt: 'Maya says she "bought a Roth IRA." What did she get slightly wrong?',
          options: [
            {
              id: 'a',
              label: "Nothing — a Roth IRA is a thing you buy, like a fund with tax perks attached.",
              feedback:
                "Close to how everyone talks, but it's the season's number one mix-up: the Roth is the backpack, not the books. You open a Roth — the container — and then buy things inside it, like an index fund. The distinction matters the day you open one: an account holding uninvested cash grows at zero, tax-free. Container first, then contents.",
            },
            {
              id: 'b',
              label: "A Roth is an account you open, not a thing you buy — the fund goes inside it.",
              correct: true,
              feedback:
                "Right — container versus contents, the backpack versus the books. The account decides whose name is on the door and how taxes treat what's inside; the fund inside does the actual growing. Same index fund, different container, very different rules. Get the door right, then furnish it.",
            },
            {
              id: 'c',
              label: "Roths are for retirees — Maya's too young to have one at all.",
              feedback:
                "Backwards on both counts: age was never the requirement — earned income is — and young is precisely when the Roth is strongest, because tax-free growth compounds for five extra decades. Maya's reported resale profit unlocks it at seventeen (opened custodially). Her only error was grammar: you open a Roth, then buy the fund inside it.",
            },
          ],
        },
        {
          prompt:
            'Three teens want to fund a Roth IRA this year. Whose money actually unlocks the door?',
          options: [
            {
              id: 'a',
              label: 'Amara: $900 of birthday and holiday cash, saved diligently for two years.',
              feedback:
                "Diligent, impressive — and not earned income, so the Roth door stays shut. Gifts, allowance, and found money don't count no matter how responsibly they're saved; the container runs on work. Her $900 isn't useless — it can live in a custodial brokerage account today. It just can't wear the Roth's tax-free crown.",
            },
            {
              id: 'b',
              label: 'Priya: $1,400 from a lifeguarding paycheck, W-2 and everything.',
              correct: true,
              feedback:
                "Right — wages are the key, and the W-2 is the proof. Priya can put in up to $1,400 — her earned income, since it's under the yearly limit — even if she actually deposits money her grandma gave her; the rule checks what she EARNED, not which bills she uses. The law's deal is simple: work a summer, unlock the best container in finance.",
            },
            {
              id: 'c',
              label: 'Jade: $2,000 of allowance for chores around the house.',
              feedback:
                "Painfully close — chores feel like work because they are — but the IRS doesn't count family allowance as earned income; there's no wage, no W-2, no reported self-employment. A real job, or genuinely reported gig income like Maya's resale profit, would flip the answer. Rule of thumb: if nobody reported paying you, the Roth can't hear you knocking.",
            },
          ],
        },
        {
          prompt:
            'Emily hesitates: "If I put $500 in a Roth at sixteen and my family hits an emergency, that money is locked up for fifty years... right?"',
          options: [
            {
              id: 'a',
              label: "Right — that's the deal. Retirement accounts seal the vault until you're old.",
              feedback:
                "That's the rumor that keeps teens out, and it's wrong on the half that matters: the $500 Emily CONTRIBUTED can come back out any time — no tax, no penalty. It's only the GROWTH that must stay to keep its tax-free magic. The Roth is a greenhouse with an exit door, not a vault — worst case, she retrieves her deposits; best case, she never needs to and they compound for five decades.",
            },
            {
              id: 'b',
              label: 'Mostly wrong — her $500 contribution can come back out anytime; only the growth has to stay.',
              correct: true,
              feedback:
                "Right — contributions are always retrievable, tax-free and penalty-free; it's the growth that has to stay planted for the magic to finish. So the honest worst case is 'get your deposits back,' and the likely case is decades of tax-free compounding. For an avoider-in-recovery, that's the perfect trade: the fear has an exit door, and the money has a horizon.",
            },
            {
              id: 'c',
              label: "Wrong — everything in a Roth can be pulled out whenever, no strings at all.",
              feedback:
                "Too far the other way — the growth does have strings, and they're the whole point: pull earnings out early and you owe taxes plus a penalty, because the tax-free deal is a reward for patience. The clean version: contributions come back free anytime; growth stays for the long game. Emily's $500 was never in prison — but its future earnings did sign a lease.",
            },
          ],
        },
      ],
    },
  ],
}

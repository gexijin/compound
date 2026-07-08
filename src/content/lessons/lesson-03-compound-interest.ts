import type { Lesson } from '../schema'

/** Episode 3 — Compound interest. Arc role: the hope (growth beats inflation).
 * Anchor: the missing-fortune counterfactual — what Grandma's $20/month would
 * have become had every deposit gotten a job (~$200k in today's buying power,
 * computed in finance.ts at 7% ≈ long-run stocks after inflation). Keisha's
 * honest bus math ($14,400 of adding) versus the curve (growing) is the
 * episode's engine; the snowball interactive is the showstopper.
 * Season beat: Elena sees the big number and is unsurprised — raise the
 * question of why, never answer it. The $100 Challenge gets its first
 * check-in; Emily opens her banking app (avoidance arc, step one).
 */
export const lesson03: Lesson = {
  id: 'lesson-03',
  slug: 'compound-interest',
  number: 3,
  title: "Grandma's Missing Fortune",
  tagline: 'Compound interest: the force that works like inflation, but for you.',
  arcRole: 'hope',
  minutes: 10,
  characters: ['elena', 'nadia', 'maya', 'emily', 'keisha', 'sofi'],
  status: 'available',
  porchRule: 'Small and early beats big and late.',
  beats: [
    {
      type: 'story',
      scene: "Grandma Elena's porch — week three",
      lines: [
        {
          speaker: 'narrator',
          text: "Week three of the $100 Challenge, and Nadia finally got her night. The pay envelope sat in the middle of the table, PORCH RULES up, the forgotten $20 pinned inside Keisha's ledger like evidence.",
        },
        {
          speaker: 'sofi',
          text: "Rules so far, because I've been practicing: money sitting still is money shrinking, and real things hold what paper drops. I recited both to my mom. She tapped her bangles and said, 'We wrote rule two first.' My mom thinks she founded this club.",
        },
        {
          speaker: 'elena',
          text: "She's not wrong, mija. Tell the founder we say hello — and that tonight we finally get to the part her bangles can't do.",
        },
        {
          speaker: 'keisha',
          text: "Okay, before anything else — I did your math on the bus. Back in the garage you said the $20 'could have become more than you'd believe.' Twenty dollars a month for sixty years is $14,400. That's real money. It is not believe-money.",
        },
        {
          speaker: 'elena',
          text: "Because you added, mija. Adding is what a shoebox does. Twelve, twenty-four, thirty-six — the pile only knows how to stack. Money that's growing doesn't stack. It snowballs.",
        },
        {
          speaker: 'sofi',
          text: "How does money grow, though? It's paper. Paper doesn't do anything.",
        },
        {
          speaker: 'nadia',
          text: "It gets paid rent. Remember Beto's $124? Waiting has a price — so anyone who borrows your money owes you for the wait. That rent is called interest. And here's the whole trick: the rent doesn't get spent. It moves in, and next year it earns rent too.",
        },
        {
          speaker: 'maya',
          text: "I've heard this pitch. 'Seven percent!' Seven percent of twenty dollars is a dollar forty. I tip more than that on a bad smoothie.",
        },
        {
          speaker: 'elena',
          text: "So did I, at your age — which is exactly why the fortune is missing. A dollar forty looks like nothing. But it never clocks out, never takes a summer off, and it hires everything it earns. Nothing you tip can say that.",
        },
        {
          speaker: 'narrator',
          text: "Elena slid the ledger to the middle of the table, next to the envelope. Sixty years of missing fortune on one side. Four girls with a full sixty years ahead of them on the other.",
        },
        {
          speaker: 'elena',
          text: "You laughed at my hundred dollars. Fine. Today we price the laugh. But first — Maya. You made money this weekend, no? Then this next part is yours.",
        },
      ],
    },
    {
      type: 'decision',
      context: [
        "Maya cleared $200 flipping two vintage jackets — a good weekend, even by her standards. Nadia's been needling her for a year about the $25 a month she invests ('boring,' per Maya).",
        "Three instincts are arguing in Maya's head, and honestly, all three sound like her.",
        "You're Maya.",
      ],
      prompt: "The $200 is in hand. What's the move?",
      choices: [
        {
          id: 'wait-big',
          label: "Hold off. At 26 I'll have a real paycheck — I'll start big and catch up fast.",
          consequence: [
            "Waiting feels free. It is the single most expensive thing on this porch.",
            "Say future-Maya starts at 26, strong: $100 a month, every month, until 66. She ends near $247,000 — genuinely great. But the Maya who'd started the same habit at 16 lands over $500,000. Ten missed years cost half the fortune — and the deposits she skipped in those years? Only $12,000 of it. The rest is time she can't buy back at any price.",
          ],
          coda: 'Nobody catches up. The head start isn’t a lead — it’s a different race.',
        },
        {
          id: 'monthly-habit',
          label: '$25 a month, starting this week. Boring. Nadia-core. Whatever.',
          consequence: [
            "Here's the part nobody warns you about: year one is insulting. Twelve deposits, $300 in — and the growing added about nine dollars. Nine. You will be tempted to quit, because it looks like it isn't working.",
            "It's working. Fifty years of that 'boring' habit — $15,000 out of pocket — compounds past $125,000. The early years aren't the payoff; they're the ignition. The last ten years of the curve earn more than the first thirty combined.",
          ],
          coda: 'The boring years aren’t the price of the fortune. They’re the fuse.',
        },
        {
          id: 'one-drop',
          label: 'Drop the whole $200 in right now, once. Grand gesture, done, never think about it again.',
          consequence: [
            "Respect — it's the only choice where money actually gets a job today. That $200, left alone for fifty years, grows to about $5,900. One pizza night's profit becomes a used car. Real magic, no touching.",
            "But watch what it can't do. One snowball, rolled once, stays one snowball. The $25-a-month kid — smaller money, zero glamour — rolls a new one every month and buries your $5,900 twenty times over. Compounding rewards showing up more than showing off.",
          ],
          coda: 'The gesture grows. The habit builds. They are not the same verb.',
        },
      ],
      reveal:
        "What did the real Maya pick? She'll tell you at the end of the summer — it's her story to finish. Nadia's pick is no secret: $25 a month since she was 19, balance currently 'unimpressive,' her word. She's seen the curve. She isn't nervous.",
    },
    {
      type: 'teaching',
      title: 'Rent that earns rent',
      voicedBy: 'elena',
      body: [
        "Interest is rent paid on money — you learned that the expensive way, through Beto. Now run it forward instead of backward. The first year's rent on $20 is small enough to insult you. But it doesn't leave. It moves in, and next year the rent earns rent, and the year after, the rent's rent earns rent. Stacking makes a staircase. This makes a curve — and the curve is the same shape as the pickpocket's, pointed the other way.",
        "Keisha did the honest math on the bus: sixty years of adding my $20s makes $14,400. Now let the machine do the other math — every $20 gets a job and never quits. Guess before you look. Everyone guesses low. That's not an accident; your brain stacks, it doesn't curve.",
      ],
      interactives: ['snowball'],
      takeaway:
        'Adding stacks; compounding curves. Interest earning interest starts insultingly small and ends unbelievably big — the shape only shows up if you give it years.',
    },
    {
      type: 'teaching',
      title: 'The dial only you can turn',
      voicedBy: 'nadia',
      body: [
        "The machine has three dials: how much you put in, how fast it grows, and how long it runs. Adults fixate on the first two — bigger deposits, hotter returns. But the time dial is welded in place for them, and it's wide open for you. You own more of it than almost anyone with money to invest.",
        "Run the numbers on my age gap: $100 a month from 16 to 66 is about half a million; the same habit started at 26, about $247,000 — ten years, half the fortune. It gets weirder — start at 16, stop completely at 26, never add another dollar: your $12,000 still beats the person who started at 26 and paid in $48,000. And $25 a month for fifty years beats $100 a month for thirty. Small and early doesn't just compete with big and late. It wins.",
        "One honest thing before the quiz, because this porch doesn't do fine print. That 7% isn't a savings account — savings roughly keeps pace with the pickpocket, remember? It's the long-run average of owning the stock market, after inflation, and no single year is average — some are ugly. What you're actually buying when you buy 'the market' — that's next week. What the ugly years feel like — that's the week after. The curve is real. It just isn't smooth.",
      ],
      takeaway:
        "Amount, rate, time — and time is the only dial a 16-year-old owns outright. Small and early beats big and late; the head start does the heavy lifting.",
    },
    {
      type: 'story',
      scene: 'The porch — streetlight hour',
      lines: [
        {
          speaker: 'narrator',
          text: "Maya turned the laptop around so Elena could see the missing fortune at full size: $201,432. She was visibly waiting for a gasp.",
        },
        {
          speaker: 'narrator',
          text: "Elena looked at the number the way you look at a photograph of a place you've lived. Then she went back to her lemonade.",
        },
        {
          speaker: 'maya',
          text: "That's it? Grandma. That's two hundred thousand dollars you don't have. I lose my mind over a parking ticket.",
        },
        {
          speaker: 'elena',
          text: "'Could have been' is the cheapest number there is, mija — everyone owns millions of it. Put it on the pile with the rest. The question that costs something is what your twenties will be. You're holding yours right now.",
        },
        {
          speaker: 'keisha',
          text: "Okay, but real talk. The curve needs decades. I need August. Sixty years is romantic; my tuition gap is not.",
        },
        {
          speaker: 'nadia',
          text: "Then hear the tool honestly: compounding is the wrong wrench for a ten-week problem. We'll get your August money right — jobs, aid, every ugly option on the table. Just don't let August rob age 66. The $25 version of you can run in the background the whole time.",
        },
        {
          speaker: 'emily',
          text: "...I opened my banking app last night. First time since March. The number was smaller than the fear was. That's all. That's my whole update.",
        },
        {
          speaker: 'elena',
          text: "That's not a small update, mija. Looking is the first deposit.",
        },
        {
          speaker: 'sofi',
          text: "I still have a question. The seven percent rent — who's paying it? Paper can't. Somebody's on the other end, no?",
        },
        {
          speaker: 'nadia',
          text: "Sofi just asked the exact right question. Next week: when you own a piece of a company, the company works and you get paid. There's a thing in Grandma's passbook that's older than all of us that explains it better than I can.",
        },
        {
          speaker: 'narrator',
          text: "Keisha flipped the envelope over and clicked the pen. Beneath the first two rules she wrote #3 — and looked at Maya, who'd been quiet since the laptop.",
        },
        {
          speaker: 'maya',
          text: "Small and early beats big and late. I hate it. Write it down.",
        },
        {
          speaker: 'narrator',
          text: "The $20 stayed pinned in the ledger — sixty years of late, watching four girls who were still early. Elena collected the lemonade glasses and said, to nobody in particular, that next week they should leave the passbook on the table.",
        },
      ],
    },
    {
      type: 'quiz',
      intro: "Porch check — three questions, no grades. The curve should be in your bones by now.",
      questions: [
        {
          prompt:
            'Sofi runs the machine: $100 invested grows about $97 in its first ten years. "So twenty years grows about $194," she says. Does it?',
          options: [
            {
              id: 'a',
              label: "Yes — twice the years, twice the growth.",
              feedback:
                "That's stacking logic, and compounding doesn't stack. In the second decade the growth itself is growing: $100 becomes about $197 by year ten, but about $387 by year twenty — the second decade alone adds ~$190, nearly double the first. Straight lines are for shoeboxes.",
            },
            {
              id: 'b',
              label: 'No — closer to $287 of growth, because the growth starts growing.',
              correct: true,
              feedback:
                "Right. $197 by year ten, about $387 by year twenty — the gains nearly triple while the years merely double, because year eleven earns on $197, not on $100. That bend is the entire lesson: every year the snowball is bigger than the year before.",
            },
            {
              id: 'c',
              label: 'No — less than $194, because growth slows down as it goes.',
              feedback:
                "Other direction — compounding speeds up as it goes. Each year's growth lands on top of all the growth before it, so the curve gets steeper, never flatter. By year twenty the $100 is at about $387, and the fattest years are still ahead of it.",
            },
          ],
        },
        {
          prompt:
            'Twin one invests $100 a month from 16 to 26, then stops forever — $12,000 in. Twin two starts at 26 and goes all the way to 66 — $48,000 in. Who has more at 66?',
          options: [
            {
              id: 'a',
              label: 'Twin two, easily — she invested four times the money.',
              feedback:
                "She invested four times the money and still loses: about $247,000 to twin one's $256,000. Twin one's deposits spent fifty years growing; twin two's spent forty at most. Money can be matched, doubled, quadrupled — the missing decade can't.",
            },
            {
              id: 'b',
              label: 'Twin one — the ten-year head start outworks the extra $36,000.',
              correct: true,
              feedback:
                "Right — about $256,000 versus $247,000, and twin one never deposited a dollar past age 26. Her first decade of deposits compounds for the whole fifty years, and that head start does more work than $36,000 of extra contributions. Small and early beats big and late — this is the rule, in twins.",
            },
            {
              id: 'c',
              label: "It's basically a tie — same habit, same rate, comes out even.",
              feedback:
                "Startlingly close to a tie, actually — $256,000 vs $247,000 — but look at the price tags: twin one paid $12,000 for her pile, twin two paid $48,000 for a slightly smaller one. 'Even' that costs four times as much isn't even. The head start was the whole difference.",
            },
          ],
        },
        {
          prompt:
            'Three dials control the machine: monthly amount, growth rate, and years. Which one is the 16-year-old superpower?',
          options: [
            {
              id: 'a',
              label: 'Growth rate — find the investments that grow fastest.',
              feedback:
                "Chasing a hotter rate is the one dial that bites back — the 'guaranteed 20%' pitch is how young investors get hurt, and it's a whole episode later this season. The 7% average needs no genius to earn. What it needs is years, and that's the dial you own.",
            },
            {
              id: 'b',
              label: 'Monthly amount — the more you put in, the more comes out.',
              feedback:
                "Amount matters, but it's the dial a teenager owns least — babysitting money loses that contest to any adult salary. The twins just proved the workaround: $12,000 early beat $48,000 late. Your edge isn't the size of your deposits. It's their birthday.",
            },
            {
              id: 'c',
              label: 'Years — nobody with money to invest has more time than you.',
              correct: true,
              feedback:
                "Right. Adults can out-deposit you forever, and nobody can out-wait you — the time dial is welded shut for them and wide open for you. A 40-year-old with ten times the salary cannot buy back the decades you're standing on. Spending them is the one financial move you're rich enough for right now.",
            },
          ],
        },
      ],
    },
  ],
}

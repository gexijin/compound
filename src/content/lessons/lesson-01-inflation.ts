import type { Lesson } from '../schema'

/** Lesson 1 — Inflation. Arc role: the problem (doing nothing loses money).
 * Anchor: Grandma Elena's 1965 pay envelope — a stub showing $100 a month —
 * and the $20 bill still inside it: one month's savings she meant to take to
 * the bank and forgot. The paycheck seeds the season's $100 Challenge; the
 * forgotten $20 is the accidental time capsule that teaches inflation.
 * Season plant: the 1976 brokerage slip in the passbook, which nobody reads
 * twice — it pays off in Lesson 5 when Elena is revealed as the club's quiet
 * millionaire (see characters.ts). The $20 is her control group: the one
 * deposit that never got made. Nothing in this lesson may confirm or deny
 * what she did with the rest.
 */
export const lesson01: Lesson = {
  id: 'lesson-01',
  slug: 'inflation',
  number: 1,
  title: 'The $100 in the Garage',
  tagline: 'Inflation, or: why doing nothing with money is not actually doing nothing.',
  arcRole: 'problem',
  minutes: 9,
  characters: ['maya', 'keisha', 'emily', 'sofi', 'nadia', 'elena'],
  status: 'available',
  beats: [
    {
      type: 'story',
      scene: "Grandma Elena's garage — the first Saturday of summer",
      lines: [
        {
          speaker: 'narrator',
          text: "The deal was simple: help Grandma Elena clear out the garage, get paid in lemonade and her famous empanadas. Four girls, one hot morning, forty years of boxes.",
        },
        {
          speaker: 'maya',
          text: "Okay, this tin is either full of buttons or a human skull. In this garage it's honestly fifty-fifty.",
        },
        {
          speaker: 'narrator',
          text: "It was neither. Inside: a small bank passbook, soft at the corners, and a yellowed pay envelope. Typed across the front — JUNE 1965. WAGES: $100.00. Inside, a pay stub itemizing a month of somebody's life in typewriter columns. And when Maya tipped the envelope, something else slid out into her palm: a $20 bill. A real one. 60 years old and crisp as Sunday.",
        },
        {
          speaker: 'maya',
          text: "A hundred dollars? For a MONTH? Grandma, I make that in a weekend flipping vintage jackets. No offense. Full offense to 1965.",
        },
        {
          speaker: 'keisha',
          text: "That's twelve hundred a year. I've been staring at numbers all spring — that's not a salary, that's a rounding error.",
        },
        {
          speaker: 'narrator',
          text: "The bill went around the circle. Maya smelled it. Keisha held it up to the light like a bank teller. Emily passed it along quickly, without quite looking at it. Nobody noticed. Somebody would remember it later.",
        },
        {
          speaker: 'keisha',
          text: "There's something else stuck in the passbook. A receipt? 'First Index Investment Trust — 1976.' Sounds fake. Like a bank from a board game.",
        },
        {
          speaker: 'elena',
          text: "Old paper. Leave it where you found it, mija — that one is not for today.",
        },
        {
          speaker: 'sofi',
          text: "Why is everyone acting weird? My mom keeps cash in a tin too. Everyone does, no?",
        },
        {
          speaker: 'elena',
          text: "Laugh at the hundred, go ahead. It's the $20 that stings. That was supposed to go to the bank the Monday after payday. I missed the bus — and then I missed 60 years. It was worth more than you think back then, and it could have become more than you'd ever believe.",
        },
        {
          speaker: 'sofi',
          text: "But nothing happened to it, no? It's still $20. It says so right on it.",
        },
        {
          speaker: 'elena',
          text: "'Still $20.' That, mija, is exactly the belief we're about to ruin. Sit. The boxes can wait.",
        },
      ],
    },
    {
      type: 'decision',
      context: [
        "Grandma Elena tells it like this: it's June 1965. She's nineteen, first real job, and this envelope — $100 — is a whole month's pay. Rent to her parents, bus fare, food, and a little for the Saturday movies take $80.",
        "That leaves $20. Every month. Her decision, nobody else's — which, in 1965, for a young woman, was rarer than it sounds.",
        "You're Elena. What do you do with the $20?",
      ],
      prompt: 'Choose for her — every month, for years. Where does the $20 go?',
      choices: [
        {
          id: 'tin-box',
          label: 'The tin box under the bed. Banks charge fees; the box never has.',
          consequence: [
            "The box never lied to her. 60 years later, every bill she put in is still there — crisp, safe, faithful. Not one dollar lost to a fee, a crash, or a scam.",
            "But run the tape forward. The $20 that bought a week of groceries in 1965 buys about two bags of chips and a sad apple today. The box protected the paper perfectly — and the invisible pickpocket took about nine-tenths of what the paper could buy.",
          ],
          coda: 'Nothing was stolen. Everything was lost slowly. That’s the trick.',
        },
        {
          id: 'passbook',
          label: 'The savings passbook at the bank. It pays a little interest.',
          consequence: [
            "Smarter than the box — the bank pays her a few percent, and the passbook fills up with tidy stamped numbers that feel like winning.",
            "But here's the quiet catch: most years, prices rose about as fast as the interest came in — some years faster. The money grew in numbers and mostly treaded water in what it could buy. Better than shrinking. Still not the 'become more than you'd believe' Grandma hinted at.",
          ],
          coda: 'A savings account is a shelter, not an engine. (What the engine is — that’s Lesson 2.)',
        },
        {
          id: 'spend-it',
          label: "Spend it now. Prices only go up — enjoy it while it's worth something.",
          consequence: [
            "Honestly? She'd have had some great Saturdays. Records, dresses, road trips. Money is for living, and 1965 Elena living her life is not a tragedy.",
            "But 60 years of $20s is $14,400 that never got a chance to become anything. The spending logic — 'prices only go up, so buy now' — is inflation whispering in your ear. It's not wrong about prices. It's wrong about what money could do instead.",
          ],
          coda: 'Spending isn’t the villain. Spending everything, always, means your money never gets a job.',
        },
      ],
      reveal:
        "What did the real Elena do with those $20s? The tin box, at first, then the passbook. And after that — well. She'll tell that story when she's ready. What's certain is that one June, the $20 never made it anywhere at all: it's the one Maya is holding right now.",
    },
    {
      type: 'teaching',
      title: 'The invisible pickpocket',
      body: [
        "Time to find out what 60 years in an envelope actually did to the $20 in Maya's hand. ",
      ],
      interactives: ['then-vs-now'],
      takeaway:
        "The buying power of cash shrinks over time. The number on the bill stays loyal — what it buys does not.",
    },
    {
      type: 'teaching',
      title: 'The pickpocket is still working',
      body: [
        "So what happened to the $20? Nothing dramatic — that's the trick. Prices creep up almost every year: groceries, movie tickets, rent, everything. That creep has a name: inflation. It usually runs quiet, around 2–3% a year. Grandma's 60 years actually averaged closer to 4%.",
        "A few percent sounds like nothing. It is not nothing. It compounds — each year's increase stacks on the last — and at 3% a year, prices roughly double every 24 years. A dollar that just sits there loses about half its buying power every 24 years. Same bill. Half the stuff. And this isn't a history lesson: it's happening, right now, to any money of yours that's sitting still.",
      ],
      interactives: ['future-worth'],
      takeaway:
        "Doing nothing with money isn't neutral — it's a slow loss. Your money is either outgrowing prices or falling behind them. There is no pause button.",
    },
    {
      type: 'story',
      scene: "Grandma Elena's porch — that evening",
      lines: [
        {
          speaker: 'emily',
          text: "So the safest thing you could do... loses. That doesn't seem fair. You didn't do anything wrong.",
        },
        {
          speaker: 'elena',
          text: "The box felt safe. And it was — safe and shrinking. Both things were true the whole time.",
        },
        {
          speaker: 'sofi',
          text: "My parents keep everything in cash. Everything. Is that... bad?",
        },
        {
          speaker: 'elena',
          text: "It's not stupid, mija — cash you can see has saved more families than banks like to admit. It's just paying a quiet rent nobody mentions. Your family isn't behind. They were never told the whole game.",
        },
        {
          speaker: 'keisha',
          text: "Okay, but then what beats it? If a box loses slowly and savings loses slowly, what actually wins? Asking for me. Literally for me — you've seen my fall tuition numbers.",
        },
        {
          speaker: 'nadia',
          text: "That's next week. There's a force that works exactly like inflation — quiet, compounding, unstoppable — except pointed in your direction. Same porch. Bring the envelope.",
        },
        {
          speaker: 'narrator',
          text: "Grandma Elena said nothing at all. She just smiled at her lemonade, like it had told her a very old joke.",
        },
        {
          speaker: 'narrator',
          text: "Then she did something nobody expected. She took the $20 bill from Maya, smoothed it flat, and laid it in the middle of the table.",
        },
        {
          speaker: 'elena',
          text: "This bill missed its bus to the bank 60 years ago, and it's been getting smaller ever since. It's done waiting. So — it's yours now, all of you. The question is what you'll do with it.",
        },
        {
          speaker: 'maya',
          text: "Easy. Pizza. Tonight. For one glorious evening, the bill finally does what money is for.",
        },
        {
          speaker: 'elena',
          text: "Ha — there it is. 'Enjoy it while it's worth something.' The exact whisper from 1965, wearing new clothes. That bill waited 60 years, mija. It can wait one more week.",
        },
        {
          speaker: 'nadia',
          text: "Then here's the pact. Each of us takes a symbolic hundred — one month of Grandma's 1965 pay — and spends the summer learning what a hundred dollars can actually become. Weekly. This porch. Empanadas mandatory.",
        },
        {
          speaker: 'narrator',
          text: "The bill stayed on the table. The bill that sat out the whole game had just become the reason they got in it — and the club had a name before the streetlights came on. The $100 Challenge starts next week, with the force Nadia promised.",
        },
      ],
    },
    {
      type: 'quiz',
      intro:
        "Porch check — five minutes, no grades, no trick questions. Just proof you've got it.",
      questions: [
        {
          prompt:
            "In 1965, the $20 in Grandma's envelope bought 133 McDonald's hamburgers — they were 15¢ each. Today, that exact same bill buys about...",
          options: [
            {
              id: 'a',
              label: '133 burgers — $20 is $20.',
              feedback:
                "The number on the bill is loyal — it still says 20 and still spends as 20. But at today's prices it buys about 10 burgers. The other hundred-plus lunches got picked off a few percent at a time, while the bill sat there looking exactly the same.",
            },
            {
              id: 'b',
              label: 'About 60 burgers.',
              feedback:
                "Closer than most guesses, but still too generous. It's about 10. Burger math is brutal like that: same paper, same number, a tenth of the lunch.",
            },
            {
              id: 'c',
              label: 'About 10 burgers.',
              correct: true,
              feedback:
                "Right — from 133 lunches to 10. The bill didn't change; every price around it did. That gap is inflation's whole trick, and 'measure money in burgers, not numbers' will serve you for life.",
            },
          ],
        },
        {
          prompt:
            'In the U.S., prices creep up about 3% a year, so they double roughly every 24 years. In Argentina, inflation recently ran around 30% a year. How fast do prices double there?',
          options: [
            {
              id: 'a',
              label: 'Still about every 24 years — doubling is doubling.',
              feedback:
                "Doubling speed depends entirely on the rate. At 30% a year, prices double in under 3 years. It's the same invisible pickpocket that got Grandma's envelope — just sprinting instead of strolling.",
            },
            {
              id: 'b',
              label: 'About every 10 years.',
              feedback:
                "Faster — compounding at 30% doubles prices in under 3 years. A teen in Buenos Aires watches prices double between starting high school and finishing it.",
            },
            {
              id: 'c',
              label: 'About every 2–3 years.',
              correct: true,
              feedback:
                "Right — under 3 years. That's why people in high-inflation countries spend paychecks the day they arrive or swap them for stabler money: a drawer costs too much there to be an option. Same rule as Grandma's tin box, at ten times the speed — the U.S. version just strolls instead of sprints. It never stops, either way.",
            },
          ],
        },
        {
          prompt:
            'Emily keeps her babysitting cash in a drawer "until she figures things out." The kind, true way to describe what\'s happening:',
          options: [
            {
              id: 'a',
              label: "Nothing's happening — it's on pause.",
              feedback:
                "That's what the drawer wants you to think. There's no pause button: prices keep moving whether or not the money does. Waiting has a price tag — small, but it never stops running.",
            },
            {
              id: 'b',
              label: "It's quietly losing a little buying power every year.",
              correct: true,
              feedback:
                "Right — and saying it kindly matters, because the drawer isn't a failure, it's a starting line. Emily's money isn't wrong. It's just unemployed.",
            },
            {
              id: 'c',
              label: "It's growing, since she keeps adding to it.",
              feedback:
                "The pile grows because she adds to it — each dollar inside is still slowly shrinking in what it can buy. Adding water to a leaky bucket is effort, not growth.",
            },
          ],
        },
      ],
    },
  ],
}

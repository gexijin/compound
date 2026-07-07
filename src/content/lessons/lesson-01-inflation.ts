import type { Lesson } from '../schema'

/** Lesson 1 — Inflation. Arc role: the problem (doing nothing loses money).
 * Anchor: Grandma Elena's 1965 pay envelope — $100 a month — and the actual
 * $100 bill still inside it. The bill seeds the season's $100 Challenge.
 * Season plant: the 1976 brokerage slip in the passbook, which nobody reads
 * twice — it pays off in Lesson 5 when Elena is revealed as the club's quiet
 * millionaire (see characters.ts). The keepsake bill is her control group:
 * the one month's pay she never invested, kept to show what sitting still
 * costs. Nothing in this lesson may confirm or deny what she did with the
 * rest.
 */
export const lesson01: Lesson = {
  id: 'lesson-01',
  slug: 'inflation',
  number: 1,
  title: 'The $100 in the Garage',
  tagline: 'Inflation, or: why doing nothing with money is not actually doing nothing.',
  arcRole: 'problem',
  minutes: 11,
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
          text: "It was neither. Inside: a small bank passbook, soft at the corners, and a yellowed pay envelope. Typed across the front — JUNE 1965. WAGES: $100.00. And when Maya tipped the envelope, something slid out into her palm: a hundred-dollar bill. A real one. Sixty years old and crisp as Sunday.",
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
          text: "Laugh, go ahead. But that bill was worth more than you think when I sealed it in there — and it could have become more than you'd ever believe.",
        },
        {
          speaker: 'sofi',
          text: "Wait — how can it be worth more than a hundred dollars? It says a hundred dollars on it.",
        },
        {
          speaker: 'elena',
          text: "That, mija, is exactly the right question. Sit. The boxes can wait.",
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
            "The box never lied to her. Sixty years later, every bill she put in is still there — crisp, safe, faithful. Not one dollar lost to a fee, a crash, or a scam.",
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
            "But sixty years of $20s is $14,400 that never got a chance to become anything. The spending logic — 'prices only go up, so buy now' — is inflation whispering in your ear. It's not wrong about prices. It's wrong about what money could do instead.",
          ],
          coda: 'Spending isn’t the villain. Spending everything, always, means your money never gets a job.',
        },
      ],
      reveal:
        "What did the real Elena do with those first envelopes? The tin box, at first. And after that — well. She'll tell that story when she's ready. What's certain is that one bill from the first summer never left the envelope at all: the one Maya is holding right now.",
    },
    {
      type: 'teaching',
      title: 'The invisible pickpocket',
      body: [
        "Here's the thing nobody tells you straight: money sitting still is not standing still. Prices creep up almost every year — groceries, movie tickets, rent, everything. That creep has a name: inflation. It usually runs quiet, around 2–3% a year. Grandma's sixty years actually averaged closer to 4%.",
        "A few percent sounds like nothing. It is not nothing. It compounds — each year's increase stacks on the last — and at 3% a year, prices roughly double every 24 years. A dollar that just sits there loses about half its buying power every 24 years. Same bill. Half the stuff.",
        "Which brings us to the bill in Maya's hand. In 1965 it paid the rent — or bought 666 McDonald's hamburgers, back when a burger cost 15 cents. Today the same piece of paper buys about 50. Same bill, same number, six hundred fewer lunches. Don't take our word for it: guess first, then check.",
      ],
      interactives: ['then-vs-now', 'future-worth'],
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
          text: "Then she did something nobody expected. She took the hundred-dollar bill from Maya, smoothed it flat, and laid it in the middle of the table.",
        },
        {
          speaker: 'elena',
          text: "This bill sat in a box for sixty years and became less. I'm done keeping it safe. So — it's yours now, all of you. The question is what you'll do with it.",
        },
      ],
    },
    {
      type: 'decision',
      context: [
        "The bill sits in the middle of the table. Sixty years old, still spendable, worth a tenth of what it was the day Grandma sealed the envelope.",
        "Four girls, one bill, and Grandma watching with that look she has. What should they do with it?",
      ],
      prompt: "Choose for the club. The bill is theirs now — what happens to it?",
      choices: [
        {
          id: 'pizza',
          label: "Spend it tonight — pizza on the porch, celebrate the find.",
          consequence: [
            "It's a great night. For one evening the bill finally does what money is for.",
            "But notice whose logic that is: 'enjoy it while it's worth something' — the exact whisper from 1965, wearing new clothes. Grandma laughs harder than anyone. Then she points out that the bill waited sixty years, and it can wait one more week.",
          ],
          coda: "No shame in pizza. Just clock the pattern: that's the spend-it-now voice, and now you can hear it.",
        },
        {
          id: 'back-in-box',
          label: "Put it back in the envelope. It's Grandma's history — it feels wrong to touch.",
          consequence: [
            "The respectful choice. Also — look closely — the tin box choice, round two. Another sixty years of shrinking, but politely.",
            "Grandma shakes her head slowly. 'I kept it safe for sixty years, mija. Safe is how it got small. Don't you dare put it back.'",
          ],
          coda: "Honoring the past doesn't mean repeating it. She kept the bill so you wouldn't have to keep it.",
        },
        {
          id: 'stake',
          label: "Make it the stake. The bill becomes the seed of a summer challenge.",
          consequence: [
            "Nadia grins like she's been waiting all day for someone to say it.",
            "The pact: every girl takes a symbolic $100 — like Grandma's — and spends the summer learning what a hundred dollars can actually become. Weekly, on this porch. The bill that lost sixty years gets a second chance, through them.",
          ],
          coda: "The money that sat out the whole game becomes the reason they get in it.",
        },
      ],
      reveal:
        "However the vote goes, Grandma settles it the same way: the bill stays on the table, the challenge is on, and the club has a name before the streetlights come on. The $100 Challenge starts next week — with the force Nadia promised.",
    },
    {
      type: 'quiz',
      intro:
        "Porch check — five minutes, no grades, no trick questions. Just proof you've got it.",
      questions: [
        {
          prompt:
            "In 1965, Grandma's $100 bill bought 666 McDonald's hamburgers — they were 15¢ each. Today, that exact same bill buys about...",
          options: [
            {
              id: 'a',
              label: '666 burgers — a hundred dollars is a hundred dollars.',
              feedback:
                "The number on the bill is loyal — it still says 100 and still spends as 100. But at today's prices it buys about 50 burgers. The other six hundred lunches got picked off a few percent at a time, while the bill sat there looking exactly the same.",
            },
            {
              id: 'b',
              label: 'About 250 burgers.',
              feedback:
                "Closer than most guesses, but still too generous. It's about 50. Burger math is brutal like that: same paper, same number, a tenth of the lunch.",
            },
            {
              id: 'c',
              label: 'About 50 burgers.',
              correct: true,
              feedback:
                "Right — from 666 lunches to 50. The bill didn't change; every price around it did. That gap is inflation's whole trick, and 'measure money in burgers, not numbers' will serve you for life.",
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

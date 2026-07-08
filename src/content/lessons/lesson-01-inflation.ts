import type { Lesson } from '../schema'

/** Episode 1 — Inflation. Arc role: the problem (doing nothing loses money).
 * Anchor: Grandma Elena's 1965 pay envelope — a stub showing $100 a month —
 * and the $20 bill still inside it: one month's savings she meant to take to
 * the bank and forgot. The paycheck seeds the season's $100 Challenge; the
 * forgotten $20 is the accidental time capsule that teaches inflation.
 * Season plant: the 1976 brokerage slip in the passbook, which nobody reads
 * twice — it pays off in Episode 5 when Elena is revealed as the club's quiet
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
  porchRule: 'Money sitting still is money shrinking.',
  beats: [
    {
      type: 'story',
      scene: "Grandma Elena's garage — the first Saturday of summer",
      lines: [
        {
          speaker: 'narrator',
          text: "The deal was simple: help Grandma Elena clear out the garage, get paid in lemonade and her famous empanadas. Four girls, one hot morning, sixty years of boxes.",
        },
        {
          speaker: 'maya',
          text: "Okay, this tin is either full of buttons or a human skull. In this garage it's honestly fifty-fifty.",
        },
        {
          speaker: 'narrator',
          text: "It was neither. Inside: a small bank passbook, soft at the corners, and a yellowed pay envelope. Typed across the front — JUNE 1965. WAGES: $100.00. And when Maya tipped it, something else slid out into her palm: a $20 bill. A real one. 60 years old and crisp as Sunday.",
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
          text: "The bill went around the circle. Maya smelled it. Keisha held it up to the light like a bank teller. Emily passed it along without quite looking at it. Nobody noticed. Somebody would remember it later.",
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
          text: "Laugh at the hundred, go ahead. It's the $20 that stings. That was supposed to go to the bank the Monday after payday. I missed the bus — and then I missed 60 years. It was worth more than you think — and it could have become more than you'd believe.",
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
        "You're Elena.",
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
            "But here's the quiet catch: most years, prices rose about as fast as the interest came in — some years faster. The numbers grew; the buying power treaded water. Better than shrinking. Still not the 'become more than you'd believe' Grandma hinted at.",
          ],
          coda: 'A savings account is a shelter, not an engine. (What the engine is — that’s Episode 2.)',
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
        "What did the real Elena do with those $20s? The tin box, at first, then the passbook. And after that — well. She'll tell that story when she's ready. But one June, the $20 never made it anywhere at all — it's the one Maya is holding right now.",
    },
    {
      type: 'teaching',
      title: 'The invisible pickpocket',
      voicedBy: 'elena',
      body: [
        "Go ahead — ask the machine what 60 years in that envelope did to my twenty. I had to live it one grocery run at a time. You get to watch it happen all at once. Lucky you.",
      ],
      interactives: ['then-vs-now'],
      takeaway:
        "The buying power of cash shrinks over time. The number on the bill stays loyal — what it buys does not.",
    },
    {
      type: 'teaching',
      title: 'The pickpocket is still working',
      voicedBy: 'elena',
      body: [
        "So what happened to my $20? Nothing dramatic. That is the trick, mija — nothing dramatic ever happens. Prices creep up almost every year: groceries, movie tickets, rent, everything. The creep has a name — inflation — and it runs quiet, around 2–3% a year. My 60 years averaged closer to 4%. I never once saw it move.",
        "A few percent sounds like nothing. It is not nothing. It compounds — each year's increase stacks on the last — and at 3% a year, prices roughly double every 24 years — so a dollar that just sits there loses half its buying power in that time. Same bill. Half the stuff.",
        "And this is not ancient history. My little brother Beto — seventy-six, still my little brother — borrowed $100 from me in 2020. Five years later he paid it back. Every dollar, proud as a rooster. Big hug. He says we're even. Are we? Don't answer for him, mija — answer for yourselves.",
      ],
      interactives: ['future-worth'],
      takeaway:
        "Doing nothing with money isn't neutral — it's a slow loss. A repaid $100 is not the $100 that was lent: time sides with the borrower. There is no pause button.",
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
          text: "She took the $20 bill from Maya, smoothed it flat, and laid it in the middle of the table.",
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
          text: "Ha — there it is. 'Enjoy it while it's worth something.' The exact whisper from 1965, wearing new clothes. That bill waited 60 years. It can wait one more week.",
        },
        {
          speaker: 'nadia',
          text: "Then here's the pact. Each of us takes a symbolic hundred — one month of Grandma's 1965 pay — and spends the summer learning what a hundred dollars can actually become. Weekly. This porch. Empanadas mandatory.",
        },
        {
          speaker: 'keisha',
          text: "If we're doing this, we're writing it down. I don't trust lessons that only live in feelings.",
        },
        {
          speaker: 'narrator',
          text: "She flipped the 1965 pay envelope over and wrote across the back in block letters: PORCH RULES. Then, underneath: #1 — and looked up, pen waiting.",
        },
        {
          speaker: 'emily',
          text: "Money sitting still... is money shrinking.",
        },
        {
          speaker: 'elena',
          text: "Sixty years, and it fits on the back of the envelope it happened to. Write it down, Keisha.",
        },
        {
          speaker: 'narrator',
          text: "The bill stayed on the table. The bill that sat out the whole game had just become the reason they got in it — and the club had a name, a ledger, and a rule before the streetlights came on. The $100 Challenge starts next week, with the force Nadia promised.",
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
            "Back in the garage, Sofi said: 'It's still $20 — it says so right on it.' So: a $20 bill is always worth the same. True?",
          options: [
            {
              id: 'a',
              label: 'True — the number never changes, so the value never changes.',
              feedback:
                "The number is the one thing that never changes — that's exactly the trap. A bill's real worth is what it can buy, and Grandma's $20 went from 133 burgers to 10 while the paper stayed identical. Same number, a fraction of the stuff.",
            },
            {
              id: 'b',
              label: "False — a bill's real worth is what it buys, and that shrinks as prices rise.",
              correct: true,
              feedback:
                "Right. Money has two faces: the number, which is loyal forever, and the buying power, which quietly shrinks as prices creep. That's why Grandma's $20 bought 133 burgers then and about 10 now — and why 'it says $20 on it' proves nothing.",
            },
            {
              id: 'c',
              label: "True, as long as it stays safe in a drawer and never gets spent.",
              feedback:
                "Backwards, actually — the drawer is where the shrinking happens. Prices rise whether or not the bill moves, so sitting still just means losing quietly. Grandma's envelope was the safest place on earth, and it still lost nine-tenths of the stuff.",
            },
          ],
        },
        {
          prompt:
            'In the U.S., prices creep up about 3% a year and take roughly 24 years to double. In Argentina, inflation lately runs around 30% a year. How fast do prices double there?',
          options: [
            {
              id: 'a',
              label: 'Still about every 24 years — doubling is doubling.',
              feedback:
                "Doubling speed depends entirely on the rate. At 30% a year, prices double in under 3 years.",
            },
            {
              id: 'b',
              label: 'About every 10 years.',
              feedback:
                "Faster than that. Compounding at 30% doubles prices in under 3 years — a teen in Buenos Aires watches prices double between starting high school and finishing it.",
            },
            {
              id: 'c',
              label: 'About every 2–3 years.',
              correct: true,
              feedback:
                "Right — under 3 years. That's why people in high-inflation countries spend paychecks the day they arrive or swap them for stabler money: a drawer is too expensive there to be an option. Same pickpocket as Grandma's envelope, just sprinting instead of strolling.",
            },
          ],
        },
        {
          prompt:
            'Emily keeps her babysitting cash in a drawer "until she figures things out." What\'s the kind, true way to describe what\'s happening?',
          options: [
            {
              id: 'a',
              label: "Nothing — the money's on pause until she's ready.",
              feedback:
                "That's what the drawer wants you to think. There's no pause button: prices keep moving whether or not the money does. Waiting has a price tag — small, but it never stops running.",
            },
            {
              id: 'b',
              label: "It's quietly losing a little buying power every year.",
              correct: true,
              feedback:
                "Right — and saying it kindly matters, because the drawer isn't a failure, it's a starting line. Emily's money isn't wrong. It's just unemployed. Getting it a job — that's next week on the porch.",
            },
            {
              id: 'c',
              label: "It's growing — she keeps adding to it.",
              feedback:
                "The pile grows because she adds to it — but each dollar inside is still slowly shrinking in what it can buy. Adding water to a leaky bucket is effort, not growth.",
            },
          ],
        },
      ],
    },
  ],
}

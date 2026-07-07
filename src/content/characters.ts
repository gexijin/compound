import type { Character, CharacterId, Speaker } from './schema'

export const characters: Record<CharacterId, Character> = {
  sofi: {
    id: 'sofi',
    name: 'Sofi',
    age: 15,
    role: 'The blank slate',
    background:
      'Never had a bank account or a paycheck. Her family runs a cash-only small business and distrusts fees and paperwork. She asks the beautifully basic questions with zero embarrassment.',
    voice: 'Curious, direct, unembarrassed. Asks what everyone else is afraid to.',
    color: 'bg-sky',
  },
  emily: {
    id: 'emily',
    name: 'Emily',
    age: 16,
    role: 'The avoider',
    background:
      'Sharp, good grades, frozen around money. A recent shock at home made money the subject that ends dinners in silence. Copes by not looking.',
    voice: 'Quiet, precise, says the scary thing softly.',
    color: 'bg-coral',
  },
  maya: {
    id: 'maya',
    name: 'Maya',
    age: 17,
    role: 'The hustler + spender',
    background:
      'Runs a thriving online resale shop. Earns real money and spends it just as fast. Confident to the point of impulsive; allergic to boring advice.',
    voice: 'Fast, funny, a little loud. Jokes first, listens second.',
    color: 'bg-gold',
  },
  keisha: {
    id: 'keisha',
    name: 'Keisha',
    age: 18,
    role: 'One step ahead',
    background:
      'College-bound, first-gen, facing a real tuition gap this summer. Models competence and struggle at the same time.',
    voice: 'Grounded, practical, asks the follow-up question that matters.',
    color: 'bg-grove',
  },
  nadia: {
    id: 'nadia',
    name: 'Nadia',
    age: 22,
    role: 'The near-peer mentor',
    background:
      "Maya's older sister, home from college for the summer, already investing $25/month. Credible because she made the mistakes recently.",
    voice: 'Warm, wry, tells the truth. The cool older sister.',
    color: 'bg-mint',
  },
  elena: {
    id: 'elena',
    name: 'Grandma Elena',
    age: null,
    role: 'The living proof',
    background:
      'Earned $100 a month in the 1960s and kept it safe in cash. Her thrift is real wisdom — and a lesson in what playing it too safe costs.',
    voice: 'Dry, unhurried, lands the line that stops the room.',
    color: 'bg-ink',
  },
}

export function speakerName(speaker: Speaker): string {
  return speaker === 'narrator' ? '' : characters[speaker].name
}

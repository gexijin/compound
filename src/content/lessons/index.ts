import type { Lesson } from '../schema'
import { lesson01 } from './lesson-01-inflation'
import { lesson02 } from './lesson-02-compound-interest'

/** The investing module — six episodes, one story arc:
 * problem → hope → vehicle → catch → fix → action.
 */
export const lessons: Lesson[] = [
  lesson01,
  lesson02,
  {
    id: 'lesson-03',
    slug: 'what-is-a-stock',
    number: 3,
    title: 'A Slice, Not a Ticket',
    tagline: 'What a share of stock actually is (hint: not a lottery ticket).',
    arcRole: 'vehicle',
    minutes: 9,
    // B-plot artifact: an old paper stock certificate tucked in the passbook
    // from the Ep 1 box — what a share physically *was*: a printed slice of
    // a company. Elena stays off-stage; Nadia voices the teaching (voicedBy).
    characters: ['maya', 'sofi', 'nadia'],
    status: 'coming-soon',
    porchRule: 'Buy the slice, not the ticket.',
    beats: [],
  },
  {
    id: 'lesson-04',
    slug: 'risk-and-diversification',
    number: 4,
    title: 'All the Eggs, One Basket',
    tagline: 'Risk is normal. Betting everything on one company is not.',
    arcRole: 'catch',
    minutes: 9,
    // B-plot artifact: a 1974 brokerage statement (or newspaper clipping)
    // showing the crash halving the market, with Elena's handwriting in the
    // margin — her voice arrives in writing while she's off-stage. She held
    // through this; Ep 5 reveals why that mattered.
    characters: ['maya', 'keisha', 'emily'],
    status: 'coming-soon',
    porchRule: 'All the eggs, never one basket.',
    beats: [],
  },
  {
    id: 'lesson-05',
    slug: 'index-funds',
    number: 5,
    title: 'Own Everything, Quietly',
    tagline: 'Index funds: hundreds of companies in one purchase. Boring wins.',
    arcRole: 'fix',
    minutes: 10,
    // Elena's lesson: the 1976 brokerage slip from Episode 1 pays off here —
    // she's revealed as the club's quiet millionaire (see characters.ts).
    characters: ['nadia', 'emily', 'sofi', 'elena'],
    status: 'coming-soon',
    porchRule: 'Boring wins — own everything, hold on.',
    beats: [],
  },
  {
    id: 'lesson-06',
    slug: 'types-of-accounts',
    number: 6,
    title: 'Where the Money Lives',
    tagline: 'Custodial accounts and the Roth IRA — where to actually press go.',
    arcRole: 'action',
    minutes: 11,
    characters: ['keisha', 'maya', 'nadia', 'elena'],
    status: 'coming-soon',
    porchRule: 'Your name goes on your money.',
    beats: [],
  },
]

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug)
}

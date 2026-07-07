import type { Lesson } from '../schema'
import { lesson01 } from './lesson-01-inflation'

/** The investing module — six lessons, one story arc:
 * problem → hope → vehicle → catch → fix → action.
 * Lesson 1 is fully playable; the rest are authored next.
 */
export const lessons: Lesson[] = [
  lesson01,
  {
    id: 'lesson-02',
    slug: 'compound-interest',
    number: 2,
    title: "Grandma's Missing Fortune",
    tagline: 'Compound interest: the force that works like inflation, but for you.',
    arcRole: 'hope',
    minutes: 10,
    characters: ['elena', 'nadia', 'maya', 'emily'],
    status: 'coming-soon',
    beats: [],
  },
  {
    id: 'lesson-03',
    slug: 'what-is-a-stock',
    number: 3,
    title: 'A Slice, Not a Ticket',
    tagline: 'What a share of stock actually is (hint: not a lottery ticket).',
    arcRole: 'vehicle',
    minutes: 9,
    characters: ['maya', 'sofi', 'nadia'],
    status: 'coming-soon',
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
    characters: ['maya', 'keisha', 'emily'],
    status: 'coming-soon',
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
    // Elena's lesson: the 1976 brokerage slip from Lesson 1 pays off here —
    // she's revealed as the club's quiet millionaire (see characters.ts).
    characters: ['nadia', 'emily', 'sofi', 'elena'],
    status: 'coming-soon',
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
    beats: [],
  },
]

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug)
}

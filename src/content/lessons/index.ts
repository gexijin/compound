import type { Lesson } from '../schema'
import { lesson01 } from './lesson-01-inflation'
import { lesson02 } from './lesson-02-compound-interest'
import { lesson03 } from './lesson-03-what-is-a-stock'
import { lesson04 } from './lesson-04-risk-and-diversification'

/** The investing module — six episodes, one story arc:
 * problem → hope → vehicle → catch → fix → action.
 */
export const lessons: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
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

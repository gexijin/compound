import type { Lesson } from '../schema'
import { lesson01 } from './lesson-01-inflation'
import { lesson02 } from './lesson-02-compound-interest'
import { lesson03 } from './lesson-03-what-is-a-stock'
import { lesson04 } from './lesson-04-risk-and-diversification'
import { lesson05 } from './lesson-05-index-funds'

/** The investing module — six episodes, one story arc:
 * problem → hope → vehicle → catch → fix → action.
 */
export const lessons: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
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

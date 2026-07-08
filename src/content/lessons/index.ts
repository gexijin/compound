import type { Lesson } from '../schema'
import { lesson01 } from './lesson-01-inflation'
import { lesson02 } from './lesson-02-compound-interest'
import { lesson03 } from './lesson-03-what-is-a-stock'
import { lesson04 } from './lesson-04-risk-and-diversification'
import { lesson05 } from './lesson-05-index-funds'
import { lesson06 } from './lesson-06-types-of-accounts'

/** The investing module — six episodes, one story arc:
 * problem → hope → vehicle → catch → fix → action.
 */
export const lessons: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
]

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug)
}

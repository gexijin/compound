import type { Lesson } from '../schema'
import { lesson01 } from './lesson-01-inflation'
import { lesson02 } from './lesson-02-store-of-value'
import { lesson03 } from './lesson-03-compound-interest'
import { lesson04 } from './lesson-04-what-is-a-stock'
import { lesson05 } from './lesson-05-risk-and-diversification'
import { lesson06 } from './lesson-06-index-funds'
import { lesson07 } from './lesson-07-types-of-accounts'

/** The investing module — seven episodes, one story arc:
 * problem → clue → hope → vehicle → catch → fix → action.
 */
export const lessons: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
]

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug)
}

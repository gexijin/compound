/** Lesson progress persisted in localStorage. Keep all storage access behind
 * this module so persistence stays swappable (e.g. synced accounts later).
 */

export interface LessonProgress {
  completed: boolean
  /** Correct-on-first-try count for the lesson quiz. */
  quizScore?: number
  quizTotal?: number
  /** Choice the student made at each decision beat, keyed by beat index. */
  choices?: Record<number, string>
}

export type ProgressMap = Record<string, LessonProgress>

const KEY = 'compound:progress:v1'

export function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as ProgressMap) : {}
  } catch {
    return {}
  }
}

export function saveLessonProgress(
  lessonId: string,
  progress: LessonProgress,
): void {
  try {
    const all = loadProgress()
    all[lessonId] = progress
    localStorage.setItem(KEY, JSON.stringify(all))
  } catch {
    // Storage unavailable (private mode, blocked cookies): the lesson still
    // plays; progress just won't survive the session.
  }
}

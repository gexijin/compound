/** Shared content types for Compound lessons.
 *
 * Lessons are authored as data (one file per lesson) so story and quiz copy
 * can be edited without touching engine code.
 */

export type CharacterId =
  | 'sofi'
  | 'emily'
  | 'maya'
  | 'keisha'
  | 'nadia'
  | 'elena'

export interface Character {
  id: CharacterId
  name: string
  age: number | null
  role: string
  background: string
  voice: string
  /** Tailwind-safe accent color token used for dialogue chips. */
  color: string
}

export type Speaker = CharacterId | 'narrator'

export interface DialogueLine {
  speaker: Speaker
  text: string
}

export interface StoryBeat {
  type: 'story'
  /** Short scene-setting label, e.g. "Grandma Elena's garage — June". */
  scene?: string
  lines: DialogueLine[]
}

export interface Choice {
  id: string
  label: string
  /** What plays out after the student picks this, paragraph by paragraph. */
  consequence: string[]
  /** One-line coda shown under the consequence, e.g. what it means. */
  coda?: string
}

export interface DecisionBeat {
  type: 'decision'
  /** Framing that puts the student in a character's shoes. */
  context: string[]
  prompt: string
  choices: Choice[]
  /** Revealed after any choice: what actually happened in the story. */
  reveal?: string
}

export type InteractiveId = 'then-vs-now' | 'future-worth'

export interface TeachingBeat {
  type: 'teaching'
  title: string
  body: string[]
  /** Registered interactive components to embed, rendered in order. */
  interactives?: InteractiveId[]
  takeaway: string
}

export interface QuizOption {
  id: string
  label: string
  correct?: boolean
  feedback: string
}

export interface QuizQuestion {
  prompt: string
  options: QuizOption[]
}

export interface QuizBeat {
  type: 'quiz'
  intro?: string
  questions: QuizQuestion[]
}

export type Beat = StoryBeat | DecisionBeat | TeachingBeat | QuizBeat

export type ArcRole =
  | 'problem'
  | 'hope'
  | 'vehicle'
  | 'catch'
  | 'fix'
  | 'action'

export interface Lesson {
  id: string
  slug: string
  number: number
  title: string
  tagline: string
  arcRole: ArcRole
  /** Rough time to complete, in minutes. */
  minutes: number
  characters: CharacterId[]
  status: 'available' | 'coming-soon'
  beats: Beat[]
}

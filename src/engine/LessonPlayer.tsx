import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson } from '../content/schema'
import { lessons } from '../content/lessons'
import { saveLessonProgress } from '../lib/progress'
import { StoryView } from './StoryView'
import { DecisionView } from './DecisionView'
import { TeachingView } from './TeachingView'
import { QuizView } from './QuizView'

const beatLabels = {
  story: 'Story',
  decision: 'Decision',
  teaching: 'The why',
  quiz: 'Quiz',
} as const

export function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState<{ score: number; total: number } | null>(
    null,
  )

  const beat = lesson.beats[index]
  const isLast = index === lesson.beats.length - 1
  const advance = () => setIndex((i) => Math.min(i + 1, lesson.beats.length - 1))
  const next = lessons.find((l) => l.number === lesson.number + 1)

  function finish(score: number, total: number) {
    setResult({ score, total })
    saveLessonProgress(lesson.id, { completed: true })
  }

  if (result) {
    return (
      <div className="rounded-3xl border-2 border-ink bg-paper p-6 text-center sm:p-10">
        <p className="text-4xl">🎉</p>
        <h2 className="mt-3 font-display text-2xl font-bold">
          Episode {lesson.number} done.
        </h2>
        <p className="mt-2 text-ink-soft">
          {result.score} of {result.total} on the first try —{' '}
          {result.score === result.total
            ? 'Grandma would slide you the empanadas.'
            : 'and the ones you missed are the ones that stick.'}
        </p>
        {lesson.porchRule && (
          <div className="mx-auto mt-6 max-w-md rounded-2xl border-2 border-dashed border-ink/30 bg-cream p-5 text-left">
            <p className="font-mono text-sm tracking-wide text-ink-soft uppercase">
              Porch Rule #{lesson.number}
            </p>
            <p className="mt-2 font-display text-lg font-bold">
              {lesson.porchRule}
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              Written on the back of the 1965 pay envelope.
            </p>
          </div>
        )}
        {next && (
          <div className="mx-auto mt-6 max-w-md rounded-2xl bg-cream p-5 text-left">
            <p className="font-display text-sm tracking-wide text-ink-soft uppercase">
              Next on the porch
            </p>
            <p className="mt-2 font-display font-bold">{next.title}</p>
            <p className="mt-1 text-sm text-ink-soft">{next.tagline}</p>
          </div>
        )}
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-ink px-6 py-2.5 font-semibold text-paper hover:bg-grove"
        >
          Back to the porch
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-2" aria-label="Episode progress">
        {lesson.beats.map((b, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < index ? 'bg-mint' : i === index ? 'bg-grove' : 'bg-ink/15'
            }`}
            title={beatLabels[b.type]}
          />
        ))}
      </div>

      <div className="relative rounded-3xl border-2 border-ink bg-paper p-6 sm:p-8">
        {beat.type === 'story' && <StoryView beat={beat} />}
        {beat.type === 'decision' && (
          <DecisionView beat={beat} onContinue={advance} />
        )}
        {beat.type === 'teaching' && <TeachingView beat={beat} />}
        {beat.type === 'quiz' && <QuizView beat={beat} onComplete={finish} />}

        {(beat.type === 'story' || beat.type === 'teaching') && !isLast && (
          <button
            onClick={advance}
            className="mt-8 rounded-full bg-ink px-6 py-2.5 font-semibold text-paper hover:bg-grove"
          >
            Continue →
          </button>
        )}

        {/* Page ref for quick feedback, e.g. "1b" = lesson 1, second beat. */}
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-2 font-mono text-[10px] text-ink/30 select-none"
        >
          {lesson.number}
          {String.fromCharCode(97 + index)}
        </span>
      </div>
    </div>
  )
}

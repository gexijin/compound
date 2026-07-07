import { useState } from 'react'
import type { QuizBeat, QuizOption } from '../content/schema'

interface Props {
  beat: QuizBeat
  onComplete: (score: number, total: number) => void
}

export function QuizView({ beat, onComplete }: Props) {
  const [qIndex, setQIndex] = useState(0)
  const [picked, setPicked] = useState<QuizOption | null>(null)
  const [firstTry, setFirstTry] = useState(true)
  const [score, setScore] = useState(0)

  const question = beat.questions[qIndex]
  const isLast = qIndex === beat.questions.length - 1

  function pick(option: QuizOption) {
    if (picked?.correct) return
    setPicked(option)
    if (option.correct && firstTry) setScore((s) => s + 1)
    if (!option.correct) setFirstTry(false)
  }

  function next() {
    if (isLast) {
      onComplete(score, beat.questions.length)
    } else {
      setQIndex((i) => i + 1)
      setPicked(null)
      setFirstTry(true)
    }
  }

  return (
    <div>
      <p className="font-display text-sm tracking-wide text-gold uppercase">
        Quick check · {qIndex + 1} of {beat.questions.length}
      </p>
      {qIndex === 0 && beat.intro && (
        <p className="mt-2 text-ink-soft italic">{beat.intro}</p>
      )}
      <h2 className="mt-3 font-display text-xl font-bold">{question.prompt}</h2>

      <div className="mt-4 space-y-3">
        {question.options.map((option) => {
          const isPicked = picked?.id === option.id
          const showState = isPicked
          return (
            <button
              key={option.id}
              onClick={() => pick(option)}
              disabled={picked?.correct === true}
              className={`w-full rounded-xl border-2 p-4 text-left transition-colors ${
                showState && option.correct
                  ? 'border-mint bg-mint/15'
                  : showState
                    ? 'border-coral bg-coral/10'
                    : 'border-ink/20 bg-paper hover:border-grove hover:bg-cream'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>

      {picked && (
        <div
          className={`mt-5 rounded-2xl p-5 ${
            picked.correct ? 'bg-mint/15 ring-2 ring-mint' : 'bg-cream ring-1 ring-ink/15'
          }`}
        >
          <p className="font-display font-bold">
            {picked.correct ? 'Yes. ✓' : 'Not quite —'}
          </p>
          <p className="mt-1">{picked.feedback}</p>
          {picked.correct ? (
            <button
              onClick={next}
              className="mt-4 rounded-full bg-ink px-6 py-2.5 font-semibold text-paper hover:bg-grove"
            >
              {isLast ? 'Finish lesson →' : 'Next question →'}
            </button>
          ) : (
            <p className="mt-3 text-sm text-ink-soft">
              No points lost for thinking out loud. Try another answer.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

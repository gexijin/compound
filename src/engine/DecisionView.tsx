import { useState } from 'react'
import type { Choice, DecisionBeat } from '../content/schema'

interface Props {
  beat: DecisionBeat
  onContinue: () => void
}

export function DecisionView({ beat, onContinue }: Props) {
  const [chosen, setChosen] = useState<Choice | null>(null)

  return (
    <div>
      <p className="font-display text-sm tracking-wide text-coral uppercase">
        Your call
      </p>
      <div className="mt-4 space-y-3">
        {beat.context.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p className="mt-6 font-display text-lg font-bold">{beat.prompt}</p>

      <div className="mt-4 space-y-3">
        {beat.choices.map((choice) => {
          const isChosen = chosen?.id === choice.id
          return (
            <button
              key={choice.id}
              disabled={chosen !== null}
              onClick={() => setChosen(choice)}
              className={`w-full rounded-xl border-2 p-4 text-left transition-colors ${
                isChosen
                  ? 'border-grove bg-grove text-paper'
                  : chosen
                    ? 'border-ink/10 bg-paper text-ink-soft'
                    : 'border-ink/20 bg-paper hover:border-grove hover:bg-cream'
              }`}
            >
              {choice.label}
            </button>
          )
        })}
      </div>

      {chosen && (
        <>
          <div className="mt-6 rounded-2xl border-2 border-ink bg-cream p-5">
            <p className="font-display text-sm tracking-wide text-ink-soft uppercase">
              How it plays out
            </p>
            <div className="mt-3 space-y-3">
              {chosen.consequence.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {chosen.coda && (
              <p className="mt-4 font-display font-bold text-grove">
                {chosen.coda}
              </p>
            )}
            {beat.reveal && (
              <p className="mt-4 border-t border-ink/10 pt-4 text-sm text-ink-soft">
                {beat.reveal}
              </p>
            )}
          </div>
          <button
            onClick={onContinue}
            className="mt-6 rounded-full bg-ink px-6 py-2.5 font-semibold text-paper hover:bg-grove"
          >
            Continue →
          </button>
        </>
      )}
    </div>
  )
}

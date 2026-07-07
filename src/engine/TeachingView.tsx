import type { TeachingBeat } from '../content/schema'
import { ThenVsNow } from '../interactives/ThenVsNow'
import { FutureWorth } from '../interactives/FutureWorth'

const interactives = {
  'then-vs-now': ThenVsNow,
  'future-worth': FutureWorth,
} as const

export function TeachingView({ beat }: { beat: TeachingBeat }) {
  return (
    <div>
      <p className="font-display text-sm tracking-wide text-grove uppercase">
        The why
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold">{beat.title}</h2>
      <div className="mt-4 space-y-4">
        {beat.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {beat.interactives?.map((id) => {
        const Interactive = interactives[id]
        return (
          <div key={id} className="mt-6">
            <Interactive />
          </div>
        )
      })}
      <div className="mt-6 rounded-2xl bg-grove p-5 text-paper">
        <p className="font-display text-sm tracking-wide text-lime uppercase">
          Keep this
        </p>
        <p className="mt-2 font-display text-lg font-bold">{beat.takeaway}</p>
      </div>
    </div>
  )
}

import type { TeachingBeat } from '../content/schema'
import { characters } from '../content/characters'
import { CharacterChip } from './CharacterChip'
import { ThenVsNow } from '../interactives/ThenVsNow'
import { FutureWorth } from '../interactives/FutureWorth'

const interactives = {
  'then-vs-now': ThenVsNow,
  'future-worth': FutureWorth,
} as const

export function TeachingView({ beat }: { beat: TeachingBeat }) {
  const voice = beat.voicedBy ? characters[beat.voicedBy] : null
  return (
    <div>
      <p className="font-display text-sm tracking-wide text-grove uppercase">
        The why
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold">{beat.title}</h2>
      {voice ? (
        <div className="mt-4 flex gap-3">
          <CharacterChip id={beat.voicedBy!} />
          <div>
            <span className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
              {voice.name}
            </span>
            <div className="mt-0.5 space-y-4">
              {beat.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {beat.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
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
        {voice && (
          <p className="mt-2 text-right text-sm text-paper/80">— {voice.name}</p>
        )}
      </div>
    </div>
  )
}

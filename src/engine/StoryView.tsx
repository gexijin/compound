import type { StoryBeat } from '../content/schema'
import { characters } from '../content/characters'
import { CharacterChip } from './CharacterChip'

export function StoryView({ beat }: { beat: StoryBeat }) {
  return (
    <div>
      {beat.scene && (
        <p className="font-display text-sm tracking-wide text-ink-soft uppercase">
          {beat.scene}
        </p>
      )}
      <div className="mt-4 space-y-4">
        {beat.lines.map((line, i) =>
          line.speaker === 'narrator' ? (
            <p key={i} className="font-display text-ink-soft italic">
              {line.text}
            </p>
          ) : (
            <div key={i} className="flex gap-3">
              <CharacterChip id={line.speaker} />
              <div>
                <span className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
                  {characters[line.speaker].name}
                </span>
                <p className="mt-0.5">{line.text}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

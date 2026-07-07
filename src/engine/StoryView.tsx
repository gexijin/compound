import type { StoryBeat } from '../content/schema'
import { characters } from '../content/characters'

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
              <span
                className={`${characters[line.speaker].color} mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-paper`}
                title={characters[line.speaker].name}
              >
                {characters[line.speaker].name[0]}
              </span>
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

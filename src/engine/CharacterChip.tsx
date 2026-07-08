import type { CharacterId } from '../content/schema'
import { characters } from '../content/characters'

/** Colored avatar circle + name label for a speaking character. */
export function CharacterChip({ id }: { id: CharacterId }) {
  const character = characters[id]
  return (
    <span
      className={`${character.color} mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-paper`}
      title={character.name}
    >
      {character.name[0]}
    </span>
  )
}

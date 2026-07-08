import { Link } from 'react-router-dom'
import { lessons } from '../content/lessons'
import { characters } from '../content/characters'
import { loadProgress } from '../lib/progress'

const arcLabels: Record<string, string> = {
  problem: 'The problem',
  clue: 'The clue',
  hope: 'The hope',
  vehicle: 'The vehicle',
  catch: 'The catch',
  fix: 'The fix',
  action: 'The action',
}

export function Home() {
  const progress = loadProgress()
  const available = lessons.filter((l) => l.status === 'available')
  const next = available.find((l) => !progress[l.id]?.completed)
  const anyDone = available.some((l) => progress[l.id]?.completed)
  const cta = next ?? available[0]
  const ctaLabel = next
    ? anyDone
      ? `Continue: Episode ${next.number} →`
      : `Start Episode ${next.number} →`
    : `Replay Episode ${cta?.number} →`

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <header className="pt-10 sm:pt-16">
        <p className="font-display text-sm tracking-widest text-grove uppercase">
          Compound · a summer of money, told as a story
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight font-bold sm:text-5xl">
          Four girls. One porch.
          <span className="text-grove"> A grandma with secrets.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">
          It starts with a forgotten $20 bill and one question: what does the
          most frugal woman they know understand that nobody ever taught
          them? Sofi, Emily, Maya, and Keisha spend a summer finding out —
          you make their choices and watch them play out.
        </p>
        <p className="mt-3 text-sm text-ink-soft">
          No lectures. No accounts. No real money — just the part school skips.
        </p>
        {cta && (
          <Link
            to={`/episode/${cta.slug}`}
            className="mt-6 inline-block rounded-full bg-grove px-7 py-3 font-semibold text-paper hover:bg-ink"
          >
            {ctaLabel}
          </Link>
        )}
      </header>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          The investing module
        </h2>
        <p className="mt-1 text-sm text-ink-soft">
          Seven episodes in one arc: problem → clue → hope → vehicle → catch →
          fix → action. Each ~10 minutes.
        </p>
        <ol className="mt-5 space-y-3">
          {lessons.map((lesson) => {
            const done = progress[lesson.id]?.completed
            const available = lesson.status === 'available'
            const card = (
              <div
                className={`flex items-start gap-4 rounded-2xl border-2 p-5 transition-colors ${
                  available
                    ? 'border-ink bg-paper hover:bg-cream'
                    : 'border-ink/15 bg-paper/60'
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold ${
                    done
                      ? 'bg-mint text-ink'
                      : available
                        ? 'bg-grove text-paper'
                        : 'bg-ink/10 text-ink-soft'
                  }`}
                >
                  {done ? '✓' : lesson.number}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3
                      className={`font-display text-lg font-bold ${available ? '' : 'text-ink-soft'}`}
                    >
                      {lesson.title}
                    </h3>
                    <span className="text-xs tracking-wide text-coral uppercase">
                      {arcLabels[lesson.arcRole]}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{lesson.tagline}</p>
                  {!available && (
                    <p className="mt-1 text-xs font-semibold tracking-wide text-ink-soft uppercase">
                      Coming soon
                    </p>
                  )}
                </div>
              </div>
            )
            return (
              <li key={lesson.id}>
                {available ? (
                  <Link to={`/episode/${lesson.slug}`} className="block">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </li>
            )
          })}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold">The porch crew</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Four girls from four money worlds — plus the two who've seen more of
          the game.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {Object.values(characters).map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border border-ink/15 bg-paper p-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`${c.color} flex h-9 w-9 items-center justify-center rounded-full font-display font-bold text-paper`}
                >
                  {c.name[0]}
                </span>
                <div>
                  <span className="font-display font-bold">
                    {c.name}
                    {c.age ? `, ${c.age}` : ''}
                  </span>
                  <span className="block text-xs tracking-wide text-ink-soft uppercase">
                    {c.role}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink-soft">{c.background}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-ink/15 pt-6 text-xs text-ink-soft">
        Compound is education only — no banking, no accounts, no real-money
        movement. Historical figures are computed from labeled data or marked
        illustrative. Your progress lives in your browser, on your device.
      </footer>
    </div>
  )
}

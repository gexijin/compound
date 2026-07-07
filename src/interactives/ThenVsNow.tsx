import { useState } from 'react'
import {
  BURGER_1965,
  BURGER_2025,
  REALIZED_INFLATION_1965_2025,
  burgersFor,
  formatDollars,
  inflate1965ToToday,
  todayIn1965Dollars,
} from '../lib/finance'

const START_YEAR = 1965
const END_YEAR = 2025

/** Everyday prices, then vs. now — illustrative, rounded for storytelling. */
const ITEMS = [
  { name: 'McDonald’s hamburger', emoji: '🍔', then: BURGER_1965, now: BURGER_2025 },
  { name: 'Movie ticket', emoji: '🎬', then: 1.0, now: 13.0 },
  { name: 'Gallon of gas', emoji: '⛽', then: 0.31, now: 3.2 },
  { name: 'Pair of jeans', emoji: '👖', then: 5.0, now: 50.0 },
]

/** Average U.S. monthly rent in 1965 (~$88) — the hero comparison. */
const RENT_1965 = 88

const GUESSES = [
  { id: 'g200', label: 'About $200' },
  { id: 'g500', label: 'About $500' },
  { id: 'g1000', label: '$1,000 or more' },
]

export function ThenVsNow() {
  const [year, setYear] = useState(END_YEAR)
  const [guessed, setGuessed] = useState<string | null>(null)
  const years = year - START_YEAR
  const burgers = burgersFor(100, year)
  const burgers1965 = burgersFor(100, START_YEAR)
  const pct = burgers / burgers1965
  const todayEquivalent = inflate1965ToToday(100)
  const rightGuess = 'g1000'

  return (
    <div className="rounded-2xl border-2 border-ink bg-cream p-5 sm:p-6">
      <h3 className="font-display text-lg font-bold">
        First, a guess — no math allowed
      </h3>
      <p className="mt-1 text-sm text-ink-soft">
        How much would you need <em>today</em> to buy what Grandma's $100 bought
        in 1965?
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {GUESSES.map((g) => (
          <button
            key={g.id}
            disabled={guessed !== null}
            onClick={() => setGuessed(g.id)}
            className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
              guessed === g.id
                ? 'border-grove bg-grove text-paper'
                : guessed
                  ? 'border-ink/10 text-ink-soft'
                  : 'border-ink/25 bg-paper hover:border-grove'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {guessed && (
        <div className="mt-5 border-t border-ink/10 pt-5">
          <p className="text-sm">
            {guessed === rightGuess
              ? 'Good instincts: '
              : 'Almost everyone guesses low. '}
            It takes about{' '}
            <strong className="text-grove">
              {formatDollars(todayEquivalent)}
            </strong>{' '}
            today to buy what Grandma's $100 bought in 1965. In 1965, average
            rent was about {formatDollars(RENT_1965)} a month —{' '}
            <strong>this bill paid the rent, with change.</strong> Today it
            covers about one dinner out.
          </p>

          <div className="mt-5">
            <div className="flex items-baseline justify-between font-display">
              <span className="text-3xl font-bold">{year}</span>
              <span className="text-sm text-ink-soft">
                {years === 0 ? 'payday' : `${years} years in the box`}
              </span>
            </div>
            <input
              type="range"
              min={START_YEAR}
              max={END_YEAR}
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="mt-2 w-full accent-grove"
              aria-label="Year"
            />
          </div>

          <div className="mt-4">
            <div className="h-14 w-full overflow-hidden rounded-lg bg-paper ring-1 ring-ink/15">
              <div
                className="flex h-full items-center justify-end rounded-lg bg-grove pr-3 transition-all duration-300"
                style={{ width: `${Math.max(pct * 100, 12)}%` }}
              >
                <span className="font-display text-sm font-bold whitespace-nowrap text-lime">
                  {burgers} 🍔
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm">
              In {year}, the bill still says $100 — but at the burger counter
              it buys{' '}
              <strong className="text-grove">{burgers} hamburgers</strong>
              {years === 0
                ? ' — a 15¢ burger, 666 lunches. That’s the full-strength bill.'
                : `, down from ${burgers1965} in 1965.`}
              {year === END_YEAR && (
                <>
                  {' '}
                  Same paper, {burgers1965 - burgers} fewer lunches — a{' '}
                  <strong>
                    {formatDollars(todayIn1965Dollars(100))} bill wearing a $100
                    costume.
                  </strong>
                </>
              )}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ITEMS.map((item) => (
              <div
                key={item.name}
                className="rounded-xl bg-paper p-3 text-center ring-1 ring-ink/10"
              >
                <div className="text-2xl">{item.emoji}</div>
                <div className="mt-1 text-xs font-semibold">{item.name}</div>
                <div className="mt-1 text-xs text-ink-soft">
                  <span className="line-through">
                    {formatDollars(item.then, 2)}
                  </span>{' '}
                  → <strong>{formatDollars(item.now, 2)}</strong>
                </div>
                <div className="mt-1 text-[11px] text-ink-soft">
                  $100 bought <strong>{Math.floor(100 / item.then)}</strong>,
                  now <strong>{Math.floor(100 / item.now)}</strong>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-ink-soft">
            Rent, burger, and item prices are typical/illustrative (a
            McDonald's hamburger was 15¢ in 1965; figure about $2 today); the
            dollar conversions use U.S. CPI data (1965 → 2025), which works
            out to about {(REALIZED_INFLATION_1965_2025 * 100).toFixed(1)}% a
            year.
          </p>
        </div>
      )}
    </div>
  )
}

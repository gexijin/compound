import { useState } from 'react'
import {
  BURGER_1965,
  BURGER_2025,
  REALIZED_INFLATION_1965_2025,
  burgersFor,
  formatDollars,
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

const BURGER_GUESSES = [
  { id: 'g130', label: 'About 130 — a twenty is a twenty' },
  { id: 'g60', label: 'About 60' },
  { id: 'g10', label: 'About 10' },
]
const RIGHT_BURGER_GUESS = 'g10'

const VALUE_GUESSES = [
  { id: 'v15', label: 'About $15' },
  { id: 'v5', label: 'About $5' },
  { id: 'v150', label: 'About $1.50' },
]
const RIGHT_VALUE_GUESS = 'v150'

function GuessButtons({
  guesses,
  picked,
  onPick,
}: {
  guesses: { id: string; label: string }[]
  picked: string | null
  onPick: (id: string) => void
}) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {guesses.map((g) => (
        <button
          key={g.id}
          disabled={picked !== null}
          onClick={() => onPick(g.id)}
          className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
            picked === g.id
              ? 'border-grove bg-grove text-paper'
              : picked
                ? 'border-ink/10 text-ink-soft'
                : 'border-ink/25 bg-paper hover:border-grove'
          }`}
        >
          {g.label}
        </button>
      ))}
    </div>
  )
}

export function ThenVsNow() {
  const [burgerGuess, setBurgerGuess] = useState<string | null>(null)
  const [valueGuess, setValueGuess] = useState<string | null>(null)

  const burgersThen = burgersFor(20, START_YEAR)
  const burgersNow = burgersFor(20, END_YEAR)
  // What today's ten-burger twenty cost at the 1965 counter: 10 × 15¢.
  const nowInThenMoney = burgersNow * BURGER_1965

  return (
    <div className="rounded-2xl border-2 border-ink bg-cream p-5 sm:p-6">
      <h3 className="font-display text-lg font-bold">
        First, a guess — no math allowed
      </h3>
      <p className="mt-1 text-sm text-ink-soft">
        In {START_YEAR}, a McDonald's hamburger cost{' '}
        {formatDollars(BURGER_1965, 2)}, so the twenty in Maya's hand bought{' '}
        <strong>{burgersThen} of them</strong>. How many hamburgers does that
        exact same bill buy today?
      </p>
      <GuessButtons
        guesses={BURGER_GUESSES}
        picked={burgerGuess}
        onPick={setBurgerGuess}
      />

      {burgerGuess && (
        <div className="mt-5 border-t border-ink/10 pt-5">
          <p className="text-sm">
            {burgerGuess === RIGHT_BURGER_GUESS
              ? 'Good instincts: '
              : 'Almost everyone guesses high. '}
            about <strong className="text-grove">{burgersNow} hamburgers</strong>.
            Same paper, same number on it — {burgersThen - burgersNow} fewer
            lunches.
          </p>

          <div className="mt-4 space-y-3">
            {[
              { year: START_YEAR, count: burgersThen },
              { year: END_YEAR, count: burgersNow },
            ].map(({ year, count }) => (
              <div key={year}>
                <div className="flex items-baseline justify-between font-display">
                  <span className="text-xl font-bold">{year}</span>
                  <span className="text-sm text-ink-soft">
                    $20 at the burger counter
                  </span>
                </div>
                <div className="mt-1 h-10 w-full overflow-hidden rounded-lg bg-paper ring-1 ring-ink/15">
                  <div
                    className="flex h-full items-center justify-end rounded-lg bg-grove pr-3"
                    style={{
                      width: `${Math.max((count / burgersThen) * 100, 11)}%`,
                    }}
                  >
                    <span className="font-display text-sm font-bold whitespace-nowrap text-lime">
                      {count} 🍔
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-display text-base font-bold">
              Now flip it — calculator allowed
            </h4>
            <p className="mt-1 text-sm text-ink-soft">
              Today's $20 buys {burgersNow} burgers. At {START_YEAR} prices,
              those same {burgersNow} burgers cost {burgersNow} ×{' '}
              {formatDollars(BURGER_1965, 2)}. Punch it into a calculator: in{' '}
              {START_YEAR} money, today's twenty is really worth...
            </p>
            <GuessButtons
              guesses={VALUE_GUESSES}
              picked={valueGuess}
              onPick={setValueGuess}
            />
          </div>

          {valueGuess && (
            <div className="mt-5 border-t border-ink/10 pt-5">
              <p className="text-sm">
                {valueGuess === RIGHT_VALUE_GUESS
                  ? 'You did the math: '
                  : `It's ${burgersNow} × ${formatDollars(BURGER_1965, 2)} = `}
                <strong className="text-grove">
                  {formatDollars(nowInThenMoney, 2)}
                </strong>
                . Hand a {START_YEAR} lunch counter a dollar-fifty and you've
                matched everything today's twenty can do. Sixty years in an
                envelope quietly turned a $20 into a{' '}
                <strong>
                  {formatDollars(nowInThenMoney, 2)} bill wearing a $20 costume
                </strong>
                . (Official CPI math puts it near{' '}
                {formatDollars(todayIn1965Dollars(20), 2)} — burgers rose a
                little faster than prices overall.)
              </p>

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
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-ink-soft">
                Burger and item prices are typical/illustrative (a McDonald's
                hamburger was 15¢ in 1965; figure about $2 today); the dollar
                conversions use U.S. CPI data (1965 → 2025), which works out
                to about {(REALIZED_INFLATION_1965_2025 * 100).toFixed(1)}% a
                year.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

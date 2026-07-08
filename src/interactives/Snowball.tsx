import { useState } from 'react'
import {
  ILLUSTRATIVE_RETURN,
  formatDollars,
  futureValueMonthly,
  totalDeposited,
} from '../lib/finance'

/** Episode 2's flagship: the compound-growth snowball. Guess first (Grandma's
 * missing fortune), then drive the machine — amount and start age — and race
 * a twin who waits ten years. All values via finance.ts at 7% (long-run
 * stocks after inflation), so everything reads in today's buying power. */

const GRANDMA_MONTHLY = 20
const GRANDMA_YEARS = 60

const GUESSES = [
  { id: 'g30', label: 'About $30,000' },
  { id: 'g75', label: 'About $75,000' },
  { id: 'g200', label: 'About $200,000' },
]
const RIGHT_GUESS = 'g200'

const AGE_MIN = 16
const AGE_END = 66
const MONTHLY_CHOICES = [10, 25, 50, 100]
const RIVAL_DELAY = 10

// Chart geometry (viewBox units)
const W = 560
const H = 300
const M = { top: 26, right: 20, bottom: 36, left: 56 }

function valueAt(age: number, startAge: number, monthly: number): number {
  return age <= startAge ? 0 : futureValueMonthly(monthly, age - startAge)
}

export function Snowball() {
  const [guess, setGuess] = useState<string | null>(null)
  const [monthly, setMonthly] = useState(25)
  const [startAge, setStartAge] = useState(17)
  const [rival, setRival] = useState(true)

  const fortune = futureValueMonthly(GRANDMA_MONTHLY, GRANDMA_YEARS)
  const deposited = totalDeposited(GRANDMA_MONTHLY, GRANDMA_YEARS)

  const rivalStart = Math.min(startAge + RIVAL_DELAY, AGE_END)
  const endYou = valueAt(AGE_END, startAge, monthly)
  const endRival = valueAt(AGE_END, rivalStart, monthly)
  const endDeposits = totalDeposited(monthly, AGE_END - startAge)

  const yMax = Math.max(endYou, 1) * 1.08
  const x = (age: number) =>
    M.left + ((age - AGE_MIN) / (AGE_END - AGE_MIN)) * (W - M.left - M.right)
  const y = (v: number) => M.top + (1 - v / yMax) * (H - M.top - M.bottom)

  const ages = Array.from(
    { length: AGE_END - AGE_MIN + 1 },
    (_, i) => AGE_MIN + i,
  )
  const linePath = (f: (age: number) => number) =>
    ages
      .map((a, i) => `${i === 0 ? 'M' : 'L'}${x(a).toFixed(1)},${y(f(a)).toFixed(1)}`)
      .join(' ')

  const youPath = linePath((a) => valueAt(a, startAge, monthly))
  const rivalPath = linePath((a) => valueAt(a, rivalStart, monthly))
  const depositPath = linePath((a) =>
    totalDeposited(monthly, Math.max(0, a - startAge)),
  )
  // Shade the gap between the curve and the deposits line: pure growth.
  const growthFill = `${youPath} L${x(AGE_END).toFixed(1)},${y(endDeposits).toFixed(1)} ${ages
    .slice()
    .reverse()
    .slice(1)
    .map(
      (a) =>
        `L${x(a).toFixed(1)},${y(totalDeposited(monthly, Math.max(0, a - startAge))).toFixed(1)}`,
    )
    .join(' ')} Z`

  // First age where the snowball out-earns you: yearly growth > yearly deposits.
  const crossover = ages.find((a) => {
    if (a <= startAge || a >= AGE_END) return false
    const growth =
      valueAt(a + 1, startAge, monthly) - valueAt(a, startAge, monthly) - monthly * 12
    return growth > monthly * 12
  })

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => t * yMax)
  const fmtK = (v: number) =>
    v >= 1000 ? `$${Math.round(v / 1000)}k` : formatDollars(v)

  return (
    <div className="rounded-2xl border-2 border-ink bg-cream p-5 sm:p-6">
      <h3 className="font-display text-lg font-bold">The missing fortune</h3>
      <p className="mt-1 text-sm text-ink-soft">
        Grandma's $20 a month, every month, for 60 years. Total that would
        have left her pocket: <strong>{formatDollars(deposited)}</strong>.
        Growing the way this season's investments grow long-run — about{' '}
        {Math.round(ILLUSTRATIVE_RETURN * 100)}% a year after inflation —
        what does it become, in today's buying power?
      </p>

      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Your guess">
        {GUESSES.map((g) => (
          <button
            key={g.id}
            disabled={guess !== null}
            onClick={() => setGuess(g.id)}
            className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
              guess === g.id
                ? 'border-grove bg-grove text-paper'
                : guess
                  ? 'border-ink/10 text-ink-soft'
                  : 'border-ink/25 bg-paper hover:border-grove'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {guess && (
        <div className="mt-5 border-t border-ink/10 pt-5">
          <p className="text-sm">
            {guess === RIGHT_GUESS
              ? 'You believed the unbelievable one: '
              : 'Higher than almost everyone guesses: '}
            <strong className="text-grove">{formatDollars(fortune)}</strong>.
            About {formatDollars(deposited)} of that is deposits — the other{' '}
            {formatDollars(fortune - deposited)} is money the money made.
            That's the fortune that never happened. Now build your own
            version — you have the one ingredient Grandma can't buy back.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
                Every month you invest
              </p>
              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Monthly amount">
                {MONTHLY_CHOICES.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMonthly(m)}
                    className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-colors ${
                      monthly === m
                        ? 'border-ink bg-ink text-paper'
                        : 'border-ink/25 bg-paper hover:border-ink'
                    }`}
                  >
                    ${m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="snowball-start"
                className="text-xs font-semibold tracking-wide text-ink-soft uppercase"
              >
                Starting at age <strong className="text-ink">{startAge}</strong>
              </label>
              <input
                id="snowball-start"
                type="range"
                min={AGE_MIN}
                max={40}
                value={startAge}
                onChange={(e) => setStartAge(Number(e.target.value))}
                className="mt-2 w-full accent-grove"
              />
            </div>
          </div>

          <label className="mt-3 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={rival}
              onChange={(e) => setRival(e.target.checked)}
              className="accent-coral"
            />
            Race a twin who does everything the same, {RIVAL_DELAY} years later
          </label>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mt-3 w-full select-none"
            role="img"
            aria-label={`Value of $${monthly} a month from age ${startAge} to ${AGE_END}: ${formatDollars(endYou)}, versus deposits of ${formatDollars(endDeposits)}`}
          >
            {yTicks.map((v) => (
              <g key={v}>
                <line
                  x1={M.left}
                  x2={W - M.right}
                  y1={y(v)}
                  y2={y(v)}
                  stroke="#1d1b16"
                  strokeOpacity={0.08}
                />
                <text x={M.left - 8} y={y(v) + 4} textAnchor="end" fontSize={11} fill="#5c5850">
                  {fmtK(v)}
                </text>
              </g>
            ))}
            {[16, 26, 36, 46, 56, 66].map((a) => (
              <text key={a} x={x(a)} y={H - 12} textAnchor="middle" fontSize={11} fill="#5c5850">
                {a === AGE_MIN ? `age ${a}` : a}
              </text>
            ))}

            <path d={growthFill} fill="#178a4c" fillOpacity={0.14} />
            <path d={depositPath} fill="none" stroke="#1d1b16" strokeWidth={1.5} strokeDasharray="5 4" strokeOpacity={0.5} />
            {rival && <path d={rivalPath} fill="none" stroke="#ff6b5b" strokeWidth={2} />}
            <path d={youPath} fill="none" stroke="#178a4c" strokeWidth={2.5} />

            {crossover && (
              <g>
                <circle cx={x(crossover)} cy={y(valueAt(crossover, startAge, monthly))} r={5} fill="#fbf7ee" stroke="#178a4c" strokeWidth={2.5} />
                <text
                  x={Math.min(x(crossover), W - 190)}
                  y={y(valueAt(crossover, startAge, monthly)) - 12}
                  fontSize={11}
                  fontWeight={700}
                  fill="#1d1b16"
                >
                  age {crossover}: the snowball out-earns you
                </text>
              </g>
            )}

            <text x={W - M.right} y={y(endYou) - 8} textAnchor="end" fontSize={13} fontWeight={700} fill="#178a4c">
              {formatDollars(endYou)}
            </text>
            {rival && endRival > 0 && (
              <text x={W - M.right} y={y(endRival) + 16} textAnchor="end" fontSize={12} fontWeight={700} fill="#ff6b5b">
                twin: {formatDollars(endRival)}
              </text>
            )}
            <text x={W - M.right} y={y(endDeposits) + 16} textAnchor="end" fontSize={11} fill="#5c5850">
              you put in {formatDollars(endDeposits)}
            </text>
          </svg>

          <p className="mt-2 text-sm text-ink-soft">
            The dashed line is your deposits — a straight staircase. The green
            area is money your money made. Notice where the twin ends up:
            same habit, same amount, ten years late —{' '}
            {endRival > 0 && endYou > 0 ? (
              <strong>
                {formatDollars(endYou - endRival)} behind, having skipped only{' '}
                {formatDollars(totalDeposited(monthly, Math.min(RIVAL_DELAY, AGE_END - startAge)))} of deposits
              </strong>
            ) : (
              <strong>the missing years cost more than the missing deposits</strong>
            )}
            . The late years do the heavy lifting — which is exactly why the
            early ones can't be skipped.
          </p>

          <p className="mt-4 border-t border-ink/10 pt-4 text-xs text-ink-soft">
            {Math.round(ILLUSTRATIVE_RETURN * 100)}% is the long-run U.S.
            stock market average after inflation — some years way up, some
            way down (Episode 4 is about the down ones). It is a planning
            number, not a promise — and nothing like it lives in a drawer.
          </p>
        </div>
      )}
    </div>
  )
}

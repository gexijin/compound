import { useState } from 'react'
import {
  BURGER_2025,
  CPI_2020,
  CPI_2025,
  ILLUSTRATIVE_INFLATION,
  REALIZED_INFLATION_2020_2025,
  YEARS_2020_TO_2025,
  formatDollars,
  purchasingPower,
} from '../lib/finance'

const MAX_YEARS = 20
const AMOUNT = 100

const RATES = [
  { id: 'mid', rate: ILLUSTRATIVE_INFLATION, label: '3% — typical' },
  {
    id: 'recent',
    rate: REALIZED_INFLATION_2020_2025,
    label: '4.5% — real 2020–2025',
  },
  { id: 'argentina', rate: 0.3, label: '~30% — Argentina, lately' },
]

const GUESSES = [
  { id: 'g100', value: 100, label: 'Still about $100 worth' },
  { id: 'g95', value: 95, label: 'About $95 worth' },
  { id: 'g80', value: 80, label: 'About $80 worth' },
  { id: 'g65', value: 65, label: 'About $65 worth' },
]

// Chart geometry (viewBox units)
const W = 560
const H = 280
const M = { top: 24, right: 20, bottom: 36, left: 44 }
const x = (yr: number) => M.left + (yr / MAX_YEARS) * (W - M.left - M.right)
const y = (v: number) => M.top + (1 - v / AMOUNT) * (H - M.top - M.bottom)

export function FutureWorth() {
  const [guess, setGuess] = useState<(typeof GUESSES)[number] | null>(null)
  const [rateId, setRateId] = useState('recent')
  const [hoverYear, setHoverYear] = useState<number | null>(null)

  const rate = RATES.find((r) => r.id === rateId)!.rate
  const at = (yr: number) => purchasingPower(AMOUNT, yr, rate)
  // Show cents once values get small, so "$1.95 buys 0 burgers" doesn't
  // render as the paradoxical "$2 buys 0 burgers" (Argentina-rate tail).
  const fmt = (v: number) => formatDollars(v, v < 10 ? 2 : 0)
  // The real 2020→2025 answer: what the drawer's $100 buys in 2020 stuff.
  const truth5 = purchasingPower(
    AMOUNT,
    YEARS_2020_TO_2025,
    REALIZED_INFLATION_2020_2025,
  )
  const risePct = Math.round((CPI_2025 / CPI_2020 - 1) * 100)

  const path = Array.from({ length: MAX_YEARS + 1 }, (_, yr) =>
    `${yr === 0 ? 'M' : 'L'}${x(yr).toFixed(1)},${y(at(yr)).toFixed(1)}`,
  ).join(' ')

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    const yr = Math.round(((px - M.left) / (W - M.left - M.right)) * MAX_YEARS)
    setHoverYear(yr >= 0 && yr <= MAX_YEARS ? yr : null)
  }

  return (
    <div className="rounded-2xl border-2 border-ink bg-cream p-5 sm:p-6">
      <h3 className="font-display text-lg font-bold">
        Now it's your bill: the drawer test
      </h3>
      <p className="mt-1 text-sm text-ink-soft">
        This one really happened. In 2020, you stash $100 in a drawer and
        forget it. Five years later, in 2025, how much of 2020's stuff does
        it still buy? Guess first — the real numbers come after.
      </p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {GUESSES.map((g) => (
          <button
            key={g.id}
            disabled={guess !== null}
            onClick={() => setGuess(g)}
            className={`rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-colors ${
              guess?.id === g.id
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
            {Math.abs(guess.value - truth5) < 8 ? (
              <>
                <strong>Right</strong> — real U.S. CPI data says prices rose
                about {risePct}% from 2020 to 2025 (≈
                {(REALIZED_INFLATION_2020_2025 * 100).toFixed(1)}% a year), so
                the drawer's $100 buys about{' '}
                <strong>{formatDollars(truth5)}</strong> of 2020's stuff.
              </>
            ) : (
              <>
                You guessed {formatDollars(guess.value)} worth. Real U.S. CPI
                data says prices rose about {risePct}% from 2020 to 2025 (≈
                {(REALIZED_INFLATION_2020_2025 * 100).toFixed(1)}% a year), so
                it's about{' '}
                <strong className="text-grove">{formatDollars(truth5)}</strong>{' '}
                — the drawer kept the bill and lost a fifth of the stuff.
              </>
            )}{' '}
            You didn't need a lesson to feel that one — groceries, gas,
            concert tickets. Here's what more years in the drawer do — try
            Argentina's rate.
          </p>

          <div
            className="mt-4 flex flex-wrap gap-2"
            role="group"
            aria-label="Inflation rate"
          >
            {RATES.map((r) => (
              <button
                key={r.id}
                onClick={() => setRateId(r.id)}
                className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-colors ${
                  rateId === r.id
                    ? 'border-ink bg-ink text-paper'
                    : 'border-ink/25 bg-paper hover:border-ink'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mt-3 w-full touch-none select-none"
            role="img"
            aria-label={`Purchasing power of $100 over ${MAX_YEARS} years at ${(rate * 100).toFixed(1)}% inflation`}
            onPointerMove={onMove}
            onPointerLeave={() => setHoverYear(null)}
          >
            {/* grid + y axis */}
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line
                  x1={M.left}
                  x2={W - M.right}
                  y1={y(v)}
                  y2={y(v)}
                  stroke="#1d1b16"
                  strokeOpacity={0.08}
                />
                <text
                  x={M.left - 8}
                  y={y(v) + 4}
                  textAnchor="end"
                  fontSize={11}
                  fill="#5c5850"
                >
                  ${v}
                </text>
              </g>
            ))}
            {/* x axis ticks */}
            {[0, 5, 10, 15, 20].map((yr) => (
              <text
                key={yr}
                x={x(yr)}
                y={H - 12}
                textAnchor="middle"
                fontSize={11}
                fill="#5c5850"
              >
                {yr === 0 ? 'year 0' : `${yr} yrs`}
              </text>
            ))}

            {/* the curve */}
            <path d={path} fill="none" stroke="#178a4c" strokeWidth={2} />

            {/* year markers with direct labels */}
            {[5, 10, 20].map((yr) => (
              <g key={yr}>
                <circle cx={x(yr)} cy={y(at(yr))} r={4.5} fill="#178a4c" />
                <text
                  x={x(yr)}
                  y={y(at(yr)) - 10}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={700}
                  fill="#1d1b16"
                >
                  {fmt(at(yr))}
                </text>
              </g>
            ))}

            {/* the student's guess at year 5 */}
            <g>
              <circle
                cx={x(5)}
                cy={y(guess.value)}
                r={5}
                fill="none"
                stroke="#ff6b5b"
                strokeWidth={2}
              />
              <text
                x={x(5) + 10}
                y={y(guess.value) + 4}
                fontSize={11}
                fill="#5c5850"
              >
                your guess
              </text>
            </g>

            {/* hover crosshair + tooltip */}
            {hoverYear !== null && (
              <g pointerEvents="none">
                <line
                  x1={x(hoverYear)}
                  x2={x(hoverYear)}
                  y1={M.top}
                  y2={H - M.bottom}
                  stroke="#1d1b16"
                  strokeOpacity={0.25}
                  strokeDasharray="3 3"
                />
                <circle
                  cx={x(hoverYear)}
                  cy={y(at(hoverYear))}
                  r={5}
                  fill="#178a4c"
                  stroke="#fbf7ee"
                  strokeWidth={2}
                />
                <g
                  transform={`translate(${Math.min(x(hoverYear) + 8, W - 150)}, ${Math.max(y(at(hoverYear)) - 40, 4)})`}
                >
                  <rect
                    width={142}
                    height={34}
                    rx={6}
                    fill="#fbf7ee"
                    stroke="#1d1b16"
                    strokeOpacity={0.25}
                  />
                  <text x={8} y={14} fontSize={10} fill="#5c5850">
                    {hoverYear === 0 ? 'Year 0' : `After ${hoverYear} years`}
                  </text>
                  <text x={8} y={28} fontSize={12} fontWeight={700} fill="#1d1b16">
                    buys {fmt(at(hoverYear))} of year-0 stuff
                  </text>
                </g>
              </g>
            )}
          </svg>

          <details className="mt-2 text-sm">
            <summary className="cursor-pointer text-ink-soft">
              See the numbers as a table
            </summary>
            <table className="mt-2 w-full max-w-xs text-left">
              <thead>
                <tr className="text-xs text-ink-soft uppercase">
                  <th className="py-1 font-semibold">Years</th>
                  <th className="py-1 font-semibold">$100 buys</th>
                  <th className="py-1 font-semibold">≈ burgers 🍔</th>
                </tr>
              </thead>
              <tbody>
                {[0, 5, 10, 15, 20].map((yr) => (
                  <tr key={yr} className="border-t border-ink/10">
                    <td className="py-1">{yr}</td>
                    <td className="py-1">{fmt(at(yr))}</td>
                    <td className="py-1">{Math.floor(at(yr) / BURGER_2025)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </div>
      )}
    </div>
  )
}

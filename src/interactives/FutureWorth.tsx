import { useState } from 'react'
import {
  BURGER_2020,
  CPI_2020,
  CPI_2025,
  ILLUSTRATIVE_INFLATION,
  REALIZED_INFLATION_2020_2025,
  YEARS_2020_TO_2025,
  fairRepayment2020,
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

// The verdicts on Beto's repayment. `value` is where the call sits on the
// buying-power chart: what the returned $100 is "really" worth in 2020 stuff.
const VERDICTS = [
  { id: 'even', value: 100, label: 'Even — $100 is $100' },
  { id: 'ahead', value: 105, label: 'Elena came out ahead' },
  { id: 'short-little', value: 95, label: 'Elena is short ~$5' },
  { id: 'short-20', value: 80, label: 'Elena is short ~$20' },
]

// "Make it fair" choices: the fair one is computed, the rest are decoys.
const FAIR = fairRepayment2020(AMOUNT)
const FAIR_CHOICES = [100, 110, FAIR, 150]

// Chart geometry (viewBox units)
const W = 560
const H = 280
const M = { top: 24, right: 20, bottom: 36, left: 44 }
const x = (yr: number) => M.left + (yr / MAX_YEARS) * (W - M.left - M.right)
const y = (v: number) => M.top + (1 - v / AMOUNT) * (H - M.top - M.bottom)

export function FutureWorth() {
  const [verdict, setVerdict] = useState<(typeof VERDICTS)[number] | null>(null)
  const [fairPick, setFairPick] = useState<number | null>(null)
  const [rateId, setRateId] = useState('recent')
  const [hoverYear, setHoverYear] = useState<number | null>(null)

  const rate = RATES.find((r) => r.id === rateId)!.rate
  const at = (yr: number) => purchasingPower(AMOUNT, yr, rate)
  // Show cents once values get small, so "$1.95 buys 0 burgers" doesn't
  // render as the paradoxical "$2 buys 0 burgers" (Argentina-rate tail).
  const fmt = (v: number) => formatDollars(v, v < 10 ? 2 : 0)
  // The real answer: what Beto's returned $100 buys in 2020 stuff (~$80).
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
        The $100 that came back
      </h3>
      <p className="mt-1 text-sm text-ink-soft">
        Beto borrowed $100 in 2020 and paid back $100 in 2025. Every dollar.
        So — is the debt settled? Make the call. Real numbers after.
      </p>

      <div
        className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2"
        role="group"
        aria-label="Your verdict on the repayment"
      >
        {VERDICTS.map((v) => (
          <button
            key={v.id}
            disabled={verdict !== null}
            onClick={() => setVerdict(v)}
            className={`rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-colors ${
              verdict?.id === v.id
                ? 'border-grove bg-grove text-paper'
                : verdict
                  ? 'border-ink/10 text-ink-soft'
                  : 'border-ink/25 bg-paper hover:border-grove'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {verdict && (
        <div className="mt-5 border-t border-ink/10 pt-5">
          <p className="text-sm">
            {verdict.id === 'short-20' ? (
              <>
                <strong>Right</strong> — and nobody cheated. Prices rose about{' '}
                {risePct}% from 2020 to 2025, so his $100 now buys about{' '}
                <strong>{formatDollars(truth5)}</strong> of 2020's stuff. The
                dollars came home; {formatDollars(AMOUNT - truth5)} of the
                stuff didn't. Another twenty, gone — without leaving anybody's
                pocket.
              </>
            ) : (
              <>
                Not quite. Prices rose about {risePct}% from 2020 to 2025, so
                his $100 now buys about{' '}
                <strong className="text-grove">{formatDollars(truth5)}</strong>{' '}
                of 2020's stuff. Elena is short about{' '}
                {formatDollars(AMOUNT - truth5)} — and nobody cheated. Time
                did it.
              </>
            )}{' '}
            What if he'd waited longer? Trace the curve — and try Argentina's
            rate, where three years turns $100 into a sandwich.
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
            aria-label={`Buying power of a $100 repayment after up to ${MAX_YEARS} years at ${(rate * 100).toFixed(1)}% inflation`}
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

            {/* the student's call at year 5 */}
            <g>
              <circle
                cx={x(5)}
                cy={y(verdict.value)}
                r={5}
                fill="none"
                stroke="#ff6b5b"
                strokeWidth={2}
              />
              <text
                x={x(5) + 10}
                y={y(verdict.value) + 4}
                fontSize={11}
                fill="#5c5850"
              >
                your call
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
                    {hoverYear === 0 ? 'Repaid same year' : `Repaid after ${hoverYear} yrs`}
                  </text>
                  <text x={8} y={28} fontSize={12} fontWeight={700} fill="#1d1b16">
                    buys {fmt(at(hoverYear))} of year-0 stuff
                  </text>
                </g>
              </g>
            )}
          </svg>

          <table className="mt-3 w-full max-w-xs text-left text-sm">
            <thead>
              <tr className="text-xs text-ink-soft uppercase">
                <th className="py-1 font-semibold">Repaid after</th>
                <th className="py-1 font-semibold">$100 buys</th>
                <th className="py-1 font-semibold">≈ burgers 🍔</th>
              </tr>
            </thead>
            <tbody>
              {[0, 5, 10, 15, 20].map((yr) => (
                <tr key={yr} className="border-t border-ink/10">
                  <td className="py-1">{yr === 0 ? 'same year' : `${yr} yrs`}</td>
                  <td className="py-1">{fmt(at(yr))}</td>
                  <td className="py-1">{Math.floor(at(yr) / BURGER_2020)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-5 border-t border-ink/10 pt-5">
            <p className="text-sm font-semibold">
              Make it fair: what should he have paid back in 2025?
            </p>
            <div
              className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"
              role="group"
              aria-label="Fair repayment amount"
            >
              {FAIR_CHOICES.map((v) => (
                <button
                  key={v}
                  disabled={fairPick !== null}
                  onClick={() => setFairPick(v)}
                  className={`rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-colors ${
                    fairPick === v
                      ? 'border-grove bg-grove text-paper'
                      : fairPick !== null
                        ? 'border-ink/10 text-ink-soft'
                        : 'border-ink/25 bg-paper hover:border-grove'
                  }`}
                >
                  {formatDollars(v)}
                </button>
              ))}
            </div>
            {fairPick !== null && (
              <p className="mt-3 text-sm">
                {fairPick === FAIR ? (
                  <>
                    <strong>Right</strong> — about {formatDollars(FAIR)},
                    matching the rise in prices.
                  </>
                ) : (
                  <>
                    Closer to{' '}
                    <strong className="text-grove">{formatDollars(FAIR)}</strong>{' '}
                    — the payback has to grow as much as prices did.
                  </>
                )}{' '}
                The extra {formatDollars(FAIR - AMOUNT)} isn't profit — it's
                the same buying power coming home. Charging for the wait has a
                name — <strong>interest</strong>. That's next week on the
                porch.
              </p>
            )}
          </div>

          <p className="mt-5 border-t border-ink/10 pt-4 text-sm">
            Bottom line: in 2020, that $100 bought{' '}
            <strong>{Math.floor(AMOUNT / BURGER_2020)} burgers</strong> 🍔. The
            $100 that came back buys{' '}
            <strong>{Math.floor(truth5 / BURGER_2020)}</strong>. And your
            drawer runs the no-brother version every day: same math, no hug.
          </p>
        </div>
      )}
    </div>
  )
}

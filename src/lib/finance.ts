/** Money math used by lessons. Every number a lesson presents as fact is
 * computed here from labeled constants, per the project guardrail: transparent
 * in-code, or clearly illustrative.
 */

/** U.S. CPI-U annual averages (1982–84 = 100), Bureau of Labor Statistics.
 * 2025 value is approximate; treat cross-era conversions as "roughly". */
export const CPI_1965 = 31.5
export const CPI_2020 = 258.8
export const CPI_2025 = 322
export const YEARS_1965_TO_2025 = 60
export const YEARS_2020_TO_2025 = 5

/** The inflation rate actually realized 1965→2025, derived from the CPI
 * endpoints (≈3.9%/yr). Used for the historical story so the slider, the
 * "$100 ≈ $1,022" conversion, and the "worth ~$10 now" figure all agree. */
export const REALIZED_INFLATION_1965_2025 =
  Math.pow(CPI_2025 / CPI_1965, 1 / YEARS_1965_TO_2025) - 1

/** The inflation rate actually realized 2020→2025, derived from the CPI
 * endpoints (≈4.5%/yr) — the recent surge students lived through. Drives the
 * drawer test's "you stashed $100 in 2020" example. */
export const REALIZED_INFLATION_2020_2025 =
  Math.pow(CPI_2025 / CPI_2020, 1 / YEARS_2020_TO_2025) - 1

/** Typical going-forward figure quoted in lessons ("prices creep ~2–3%/yr");
 * default for forward-looking illustrations. */
export const ILLUSTRATIVE_INFLATION = 0.03

/** What `amount` from the CPI_1965 era is equivalent to in today's dollars. */
export function inflate1965ToToday(amount: number): number {
  return amount * (CPI_2025 / CPI_1965)
}

/** What `amount` of today's money would have bought in 1965 — e.g. a $100
 * bill today buys what roughly $10 bought then. */
export function todayIn1965Dollars(amount: number): number {
  return amount * (CPI_1965 / CPI_2025)
}

/** Purchasing power of `amount` after `years` of inflation at `rate`,
 * expressed in start-year dollars. E.g. $100 after 60 years at ~3.9% buys
 * what ~$10 bought at the start. */
export function purchasingPower(
  amount: number,
  years: number,
  rate: number = ILLUSTRATIVE_INFLATION,
): number {
  return amount / Math.pow(1 + rate, years)
}

/** McDonald's hamburger price — the lesson's concrete unit of purchasing
 * power. 15¢ is the well-documented 1960s menu price; the 2025 figure is
 * typical/illustrative (varies by location). */
export const BURGER_1965 = 0.15
export const BURGER_2025 = 2.0

/** Illustrative burger price in a given year, interpolated between the two
 * documented endpoints at a constant rate (≈4.4%/yr — burgers outran CPI). */
export function burgerPrice(year: number): number {
  const t = (year - 1965) / YEARS_1965_TO_2025
  return BURGER_1965 * Math.pow(BURGER_2025 / BURGER_1965, t)
}

/** How many hamburgers `amount` buys in a given year. */
export function burgersFor(amount: number, year: number): number {
  return Math.floor(amount / burgerPrice(year))
}

/** Years for prices to double at a given inflation rate (rule-of-72, exact).
 * ~3% → ~23.4 years; 30% (recent Argentina) → ~2.6 years. */
export function doublingYears(rate: number): number {
  return Math.log(2) / Math.log(1 + rate)
}

export function formatDollars(n: number, decimals = 0): string {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

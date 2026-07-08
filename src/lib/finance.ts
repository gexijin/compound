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
 * loan test's "Beto borrowed $100 in 2020" example. */
export const REALIZED_INFLATION_2020_2025 =
  Math.pow(CPI_2025 / CPI_2020, 1 / YEARS_2020_TO_2025) - 1

/** The CPI-matched 2025 repayment of `amount` lent in 2020 — what it takes to
 * hand back the same buying power, not just the same number. Episode 1's loan
 * test: $100 lent in 2020 needs ~$124 back in 2025 to be truly even. The ~$24
 * gap is the price of waiting — the seed of Episode 2's interest lesson. */
export function fairRepayment2020(amount: number): number {
  return amount * (CPI_2025 / CPI_2020)
}

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

/** A typical fast-food hamburger ran about $2 in 2020 (illustrative, varies
 * by location) — the loan test's concrete unit. Beto borrowed 50 burgers'
 * worth of money; the $100 he returned buys about 40 (its 2020-dollar
 * purchasing power ÷ the 2020 burger price). */
export const BURGER_2020 = 2.0

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

/** Long-run growth rate for forward-looking "what could it become" figures:
 * ~10% nominal long-run U.S. stock returns minus ~3% inflation ≈ 7%, so
 * results read in today's buying power. A planning number, not a promise. */
export const ILLUSTRATIVE_RETURN = 0.07

/** Monthly rate that compounds to `annualRate` over a year, so lump-sum and
 * monthly-deposit math share one effective annual rate. */
function monthlyRate(annualRate: number): number {
  return Math.pow(1 + annualRate, 1 / 12) - 1
}

/** Future value of a single amount left to grow for `years`. */
export function futureValueLump(
  amount: number,
  years: number,
  rate: number = ILLUSTRATIVE_RETURN,
): number {
  return amount * Math.pow(1 + rate, years)
}

/** Future value of `payment` deposited at the end of every month for `years`.
 * Episode 2's counterfactual: $20/month for 60 years ≈ $200k (deposits:
 * $14,400) — Grandma's missing fortune, in today's buying power. */
export function futureValueMonthly(
  payment: number,
  years: number,
  rate: number = ILLUSTRATIVE_RETURN,
): number {
  const m = monthlyRate(rate)
  const months = Math.round(years * 12)
  return payment * ((Math.pow(1 + m, months) - 1) / m)
}

/** Deposit monthly for `contribYears`, then stop and let it coast for
 * `coastYears`. The head-start proof: $100/mo ages 16–26 then nothing
 * (deposits $12k) still beats $100/mo ages 26–66 (deposits $48k). */
export function futureValueCoast(
  payment: number,
  contribYears: number,
  coastYears: number,
  rate: number = ILLUSTRATIVE_RETURN,
): number {
  return futureValueLump(
    futureValueMonthly(payment, contribYears, rate),
    coastYears,
    rate,
  )
}

/** What actually left your pocket over `years` of monthly deposits. */
export function totalDeposited(payment: number, years: number): number {
  return payment * years * 12
}

/** Powerball jackpot odds, as documented by the lottery itself:
 * 1 in 292,201,338. Episode 3's contrast — a ticket is a bet that needs
 * losers; a share is ownership that doesn't. */
export const POWERBALL_JACKPOT_ODDS_DENOM = 292_201_338

/** Your cut when a business's profit is split across `totalShares` and you
 * own `sharesOwned` — Episode 3's shop math (dollar amounts illustrative). */
export function sliceOfProfit(
  profit: number,
  totalShares: number,
  sharesOwned: number,
): number {
  return (profit / totalShares) * sharesOwned
}

/** The 1973–74 crash, S&P 500 closing levels: the January 1973 peak and the
 * October 1974 trough — the market roughly halved. Episode 4's artifact. */
export const SP500_PEAK_JAN_1973 = 120.24
export const SP500_TROUGH_OCT_1974 = 62.28

/** Approximate S&P 500 level, mid-2025 — price only, excludes dividends
 * (with dividends reinvested the multiple is far larger). */
export const SP500_2025 = 6000

/** The 1973–74 peak-to-trough drop (≈ −48%): "the market halved". */
export function drawdown1973to74(): number {
  return SP500_TROUGH_OCT_1974 / SP500_PEAK_JAN_1973 - 1
}

/** How far the market has come since the 1974 bottom (price-only, ≈96×). */
export function troughToTodayMultiple(): number {
  return SP500_2025 / SP500_TROUGH_OCT_1974
}

/** Gain needed to climb out of a fractional loss: down 50% needs up 100%,
 * because the comeback runs on a smaller base. Losses are lopsided. */
export function gainToRecover(loss: number): number {
  return loss / (1 - loss)
}

/** Portfolio hit when one of `n` equal-sized holdings goes to zero:
 * 10 baskets, one breaks → −10%. One basket → −100%. */
export function basketLossOneZero(n: number): number {
  return 1 / n
}

/** S&P 500 total return (dividends reinvested), annualized over 1976–2026 —
 * the span of Elena's investing life. The realized figure is ~11–12%/yr;
 * 10.5% is a conservative round-down so her number under-promises. */
export const INDEX_RETURN_1976_2026 = 0.105

/** U.S. CPI inflation in 1974 (annual average ≈ 11%) — the year that was
 * quietly eating Elena's passbook decade in plain sight. */
export const INFLATION_1974 = 0.11

/** Share of U.S. large-cap stock-picking funds that trailed the S&P 500
 * over 15 years — roughly nine in ten (SPIVA scorecards, approximate). */
export const PROS_TRAILING_INDEX_15Y = 0.9

/** Elena's contribution history, rising with her wages — the labeled,
 * realistic schedule behind the Episode 5 reveal. Flat $20/month never gets
 * to $1.7M; fifty years of rising deposits at index returns does. She stops
 * adding at retirement (2010) and just holds. */
export const ELENA_CONTRIBUTION_TIERS = [
  { from: 1976, to: 1985, monthly: 50 },
  { from: 1986, to: 1995, monthly: 150 },
  { from: 1996, to: 2005, monthly: 300 },
  { from: 2006, to: 2010, monthly: 400 },
] as const

export const ELENA_START_YEAR = 1976
export const ELENA_END_YEAR = 2026

/** Everything Elena ever deposited: $84,000 over 35 contribution years. */
export function elenaContributionsTotal(): number {
  return ELENA_CONTRIBUTION_TIERS.reduce(
    (sum, t) => sum + t.monthly * 12 * (t.to - t.from + 1),
    0,
  )
}

/** Elena's portfolio at the 2026 reveal: contributions credited at each
 * year's end, grown at INDEX_RETURN_1976_2026, never sold. ≈ $1.68M. */
export function elenaPortfolio2026(): number {
  let value = 0
  for (let year = ELENA_START_YEAR; year < ELENA_END_YEAR; year++) {
    value *= 1 + INDEX_RETURN_1976_2026
    const tier = ELENA_CONTRIBUTION_TIERS.find(
      (t) => year >= t.from && year <= t.to,
    )
    if (tier) value += tier.monthly * 12
  }
  return value
}

/** Illustrative passbook savings rate for the $20's three-paths comparison —
 * a blend of the ~5% regulated era and the near-zero recent decades. */
export const PASSBOOK_RATE = 0.04

/** Path two for the forgotten $20: deposited in 1965, left 60 years ≈ $210 —
 * barely ahead of the ~$204 needed to match its 1965 buying power. */
export function twentyInPassbook(): number {
  return futureValueLump(20, YEARS_1965_TO_2025, PASSBOOK_RATE)
}

/** Path three: the $20 rides Elena's 1976 purchase for 50 years ≈ $2,945. */
export function twentyInIndexFrom1976(): number {
  return futureValueLump(20, ELENA_END_YEAR - ELENA_START_YEAR, INDEX_RETURN_1976_2026)
}

/** Fraction of the final pot a yearly fee devours over time: at index-like
 * returns, a 1% fee costs ~37% of the end value over 50 years. Fees
 * compound too — in reverse. */
export function feeDrag(fee: number, years: number, rate: number = INDEX_RETURN_1976_2026): number {
  return 1 - Math.pow((1 + rate - fee) / (1 + rate), years)
}

export function formatDollars(n: number, decimals = 0): string {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

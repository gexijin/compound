import { describe, expect, it } from 'vitest'
import {
  BURGER_2020,
  CPI_1965,
  CPI_2020,
  CPI_2025,
  REALIZED_INFLATION_1965_2025,
  REALIZED_INFLATION_2020_2025,
  YEARS_1965_TO_2025,
  YEARS_2020_TO_2025,
  basketLossOneZero,
  burgersFor,
  doublingYears,
  drawdown1973to74,
  elenaContributionsTotal,
  elenaPortfolio2026,
  fairRepayment2020,
  feeDrag,
  gainToRecover,
  troughToTodayMultiple,
  twentyInIndexFrom1976,
  twentyInPassbook,
  futureValueCoast,
  futureValueLump,
  futureValueMonthly,
  inflate1965ToToday,
  POWERBALL_JACKPOT_ODDS_DENOM,
  purchasingPower,
  sliceOfProfit,
  todayIn1965Dollars,
  totalDeposited,
} from './finance'

describe('burgersFor', () => {
  it("Grandma's $100 paycheck bought 666 hamburgers in 1965", () => {
    expect(burgersFor(100, 1965)).toBe(666)
  })

  it('the same $100 buys about 50 today', () => {
    expect(burgersFor(100, 2025)).toBe(50)
  })

  it('the forgotten $20 in the envelope bought 133 hamburgers in 1965', () => {
    expect(burgersFor(20, 1965)).toBe(133)
  })

  it('the same $20 buys about 10 today (Lesson 1 quiz)', () => {
    expect(burgersFor(20, 2025)).toBe(10)
  })
})

describe('doublingYears', () => {
  it('at ~3%, prices double roughly every 24 years', () => {
    expect(doublingYears(0.03)).toBeGreaterThan(23)
    expect(doublingYears(0.03)).toBeLessThan(24)
  })

  it("at 30% (recent Argentina), prices double in under 3 years", () => {
    expect(doublingYears(0.3)).toBeGreaterThan(2)
    expect(doublingYears(0.3)).toBeLessThan(3)
  })
})

describe('inflate1965ToToday', () => {
  it("converts Grandma's $100 to roughly $1,000 today", () => {
    const today = inflate1965ToToday(100)
    expect(today).toBeCloseTo((100 * CPI_2025) / CPI_1965, 6)
    expect(today).toBeGreaterThan(900)
    expect(today).toBeLessThan(1150)
  })
})

describe('todayIn1965Dollars', () => {
  it('says a $100 bill today buys what roughly $10 bought in 1965', () => {
    const then = todayIn1965Dollars(100)
    expect(then).toBeGreaterThan(9)
    expect(then).toBeLessThan(11)
  })

  it('is the inverse of inflate1965ToToday', () => {
    expect(todayIn1965Dollars(inflate1965ToToday(100))).toBeCloseTo(100, 6)
  })
})

describe('REALIZED_INFLATION_1965_2025', () => {
  it('is roughly 3.9% per year', () => {
    expect(REALIZED_INFLATION_1965_2025).toBeGreaterThan(0.037)
    expect(REALIZED_INFLATION_1965_2025).toBeLessThan(0.042)
  })

  it('makes the slider agree with the CPI conversion at 60 years', () => {
    const viaRate = purchasingPower(
      100,
      YEARS_1965_TO_2025,
      REALIZED_INFLATION_1965_2025,
    )
    expect(viaRate).toBeCloseTo(todayIn1965Dollars(100), 6)
  })
})

describe('REALIZED_INFLATION_2020_2025', () => {
  it('is roughly 4.5% per year', () => {
    expect(REALIZED_INFLATION_2020_2025).toBeGreaterThan(0.04)
    expect(REALIZED_INFLATION_2020_2025).toBeLessThan(0.05)
  })

  it("the $100 Beto repaid after five years buys about $80 of 2020's stuff", () => {
    const left = purchasingPower(
      100,
      YEARS_2020_TO_2025,
      REALIZED_INFLATION_2020_2025,
    )
    expect(left).toBeCloseTo((100 * CPI_2020) / CPI_2025, 6)
    expect(left).toBeGreaterThan(78)
    expect(left).toBeLessThan(82)
  })
})

describe('the loan in burgers (BURGER_2020)', () => {
  it("Beto's $100 was about 50 burgers in 2020", () => {
    expect(Math.floor(100 / BURGER_2020)).toBe(50)
  })

  it('the $100 he returned in 2025 buys only about 40 of them', () => {
    const left = purchasingPower(
      100,
      YEARS_2020_TO_2025,
      REALIZED_INFLATION_2020_2025,
    )
    expect(Math.floor(left / BURGER_2020)).toBe(40)
  })
})

describe('fairRepayment2020', () => {
  it('a $100 loan from 2020 needs about $124 back in 2025 to break even', () => {
    expect(fairRepayment2020(100)).toBeCloseTo((100 * CPI_2025) / CPI_2020, 6)
    expect(fairRepayment2020(100)).toBeGreaterThan(120)
    expect(fairRepayment2020(100)).toBeLessThan(128)
  })

  it('repaying the fair amount restores the buying power that was lent', () => {
    const repaid = fairRepayment2020(100)
    expect(
      purchasingPower(repaid, YEARS_2020_TO_2025, REALIZED_INFLATION_2020_2025),
    ).toBeCloseTo(100, 6)
  })
})

describe('Episode 2 — compound growth (7% ≈ long-run stocks after inflation)', () => {
  it("Grandma's missing fortune: $20/mo for 60 years ≈ $200k on $14,400 deposited", () => {
    expect(futureValueMonthly(20, 60)).toBeGreaterThan(195_000)
    expect(futureValueMonthly(20, 60)).toBeLessThan(210_000)
    expect(totalDeposited(20, 60)).toBe(14_400)
    // The exact figure quoted in Episode 2's closing scene ("$201,432").
    expect(Math.round(futureValueMonthly(20, 60))).toBe(201_432)
  })

  it('the single forgotten $20, had it grown 60 years, ≈ $1,150', () => {
    expect(futureValueLump(20, 60)).toBeGreaterThan(1_100)
    expect(futureValueLump(20, 60)).toBeLessThan(1_200)
  })

  it('$100/mo from 16 to 66 ≈ $503k; from 26 it is roughly half (~$247k)', () => {
    expect(futureValueMonthly(100, 50)).toBeGreaterThan(495_000)
    expect(futureValueMonthly(100, 50)).toBeLessThan(510_000)
    expect(futureValueMonthly(100, 40)).toBeGreaterThan(240_000)
    expect(futureValueMonthly(100, 40)).toBeLessThan(255_000)
  })

  it('head start wins: $100/mo ages 16–26 then coasting beats $100/mo ages 26–66', () => {
    const headStart = futureValueCoast(100, 10, 40) // $12k deposited
    const catchUp = futureValueMonthly(100, 40) // $48k deposited
    expect(headStart).toBeGreaterThan(catchUp)
    expect(totalDeposited(100, 10)).toBe(12_000)
    expect(totalDeposited(100, 40)).toBe(48_000)
  })

  it('small and early beats big and late: $25/mo × 50y > $100/mo × 30y', () => {
    const smallEarly = futureValueMonthly(25, 50) // $15k deposited
    const bigLate = futureValueMonthly(100, 30) // $36k deposited
    expect(smallEarly).toBeGreaterThan(bigLate)
    expect(smallEarly).toBeGreaterThan(120_000)
    expect(smallEarly).toBeLessThan(130_000)
    expect(bigLate).toBeGreaterThan(110_000)
    expect(bigLate).toBeLessThan(120_000)
  })

  it("Maya's one-time $200, left 50 years, ≈ $5,900 — the gesture vs the habit", () => {
    expect(futureValueLump(200, 50)).toBeGreaterThan(5_700)
    expect(futureValueLump(200, 50)).toBeLessThan(6_100)
  })

  it('the quiz curve: $100 grows ~$97 in the first 10 years, ~$287 over 20 (not 2×$97)', () => {
    expect(futureValueLump(100, 10)).toBeCloseTo(196.7, 0)
    expect(futureValueLump(100, 20)).toBeCloseTo(387, 0)
  })

  it("a boring first year: $25/mo is up only ~$9 after year one — and that's it working", () => {
    const gain = futureValueMonthly(25, 1) - totalDeposited(25, 1)
    expect(gain).toBeGreaterThan(8)
    expect(gain).toBeLessThan(11)
  })
})

describe('Episode 3 — slices and tickets', () => {
  it("one slice of Maya's 100-slice shop gets 40¢ of a $40 profit month", () => {
    expect(sliceOfProfit(40, 100, 1)).toBeCloseTo(0.4, 6)
    expect(sliceOfProfit(40, 100, 10)).toBeCloseTo(4, 6)
  })

  it('owning all the slices is just the whole profit', () => {
    expect(sliceOfProfit(40, 100, 100)).toBe(40)
  })

  it('the Powerball jackpot odds quoted in the lesson: 1 in ~292 million', () => {
    expect(POWERBALL_JACKPOT_ODDS_DENOM).toBe(292_201_338)
  })
})

describe('Episode 4 — risk and diversification', () => {
  it('the 1973–74 crash cut the market roughly in half (≈ −48%)', () => {
    expect(drawdown1973to74()).toBeLessThan(-0.47)
    expect(drawdown1973to74()).toBeGreaterThan(-0.49)
  })

  it('from the 1974 bottom, the market is up ~96× (price only, no dividends)', () => {
    expect(troughToTodayMultiple()).toBeGreaterThan(90)
    expect(troughToTodayMultiple()).toBeLessThan(100)
  })

  it('losses are lopsided: down 50% needs up 100%; down 20% needs up 25%', () => {
    expect(gainToRecover(0.5)).toBeCloseTo(1.0, 6)
    expect(gainToRecover(0.2)).toBeCloseTo(0.25, 6)
  })

  it('one of ten holdings going to zero is a −10% bruise, not a −100% verdict', () => {
    expect(basketLossOneZero(10)).toBeCloseTo(0.1, 6)
    expect(basketLossOneZero(1)).toBe(1)
  })
})

describe('Episode 5 — Elena\'s portfolio and the $20 three ways', () => {
  it('her lifetime deposits total exactly $84,000', () => {
    expect(elenaContributionsTotal()).toBe(84_000)
  })

  it('rising contributions at index returns land near $1.7M by 2026', () => {
    const v = elenaPortfolio2026()
    expect(v).toBeGreaterThan(1_600_000)
    expect(v).toBeLessThan(1_750_000)
    // The exact figure the porch computes in Episode 5 ("$1,684,185").
    expect(Math.round(v)).toBe(1_684_185)
  })

  it('the pot is about 20× what she put in — time did the rest', () => {
    expect(elenaPortfolio2026() / elenaContributionsTotal()).toBeGreaterThan(15)
  })

  it('the $20 in a passbook for 60 years ≈ $210 — roughly treading water', () => {
    expect(twentyInPassbook()).toBeGreaterThan(200)
    expect(twentyInPassbook()).toBeLessThan(220)
    // Matching its 1965 buying power would take ~$204.
    expect(inflate1965ToToday(20)).toBeGreaterThan(195)
    expect(inflate1965ToToday(20)).toBeLessThan(215)
  })

  it("the $20 riding Elena's 1976 buy for 50 years ≈ $2,945", () => {
    expect(twentyInIndexFrom1976()).toBeGreaterThan(2_850)
    expect(twentyInIndexFrom1976()).toBeLessThan(3_050)
  })

  it('a 1% yearly fee devours about 37% of the pot over 50 years', () => {
    expect(feeDrag(0.01, 50)).toBeGreaterThan(0.35)
    expect(feeDrag(0.01, 50)).toBeLessThan(0.38)
    expect(feeDrag(0, 50)).toBe(0)
  })
})

describe('purchasingPower', () => {
  it('is identity at zero years', () => {
    expect(purchasingPower(100, 0)).toBe(100)
  })

  it('halves roughly every 24 years at 3%', () => {
    expect(purchasingPower(100, 24, 0.03)).toBeGreaterThan(45)
    expect(purchasingPower(100, 24, 0.03)).toBeLessThan(55)
  })

  it('at 3%: $100 buys ~$74 / ~$55 / ~$41 of power at 10 / 20 / 30 years', () => {
    expect(purchasingPower(100, 10)).toBeCloseTo(74.4, 0)
    expect(purchasingPower(100, 20)).toBeCloseTo(55.4, 0)
    expect(purchasingPower(100, 30)).toBeCloseTo(41.2, 0)
  })
})

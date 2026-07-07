import { describe, expect, it } from 'vitest'
import {
  CPI_1965,
  CPI_2025,
  REALIZED_INFLATION_1965_2025,
  YEARS_1965_TO_2025,
  burgersFor,
  doublingYears,
  inflate1965ToToday,
  purchasingPower,
  todayIn1965Dollars,
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

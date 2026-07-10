"""Keisha's 529: $400 every January, 2009-2024, against actual S&P 500 returns.

Reproduces "The 529: $20,000, built from $400 a year" in story-bible.md.
Estelle opens the account in 2009 (Keisha is two), deposits $400 each January
into low-cost index funds, and shifts to safety at the end of 2021 - dodging
the 2022 crash. Freshman fall is 2025; value is measured at start of 2025.

Verified two independent ways; also reports the money-weighted return (IRR).
"""

# S&P 500 total returns (including dividends), actual history
SP500 = {
    2009: 0.265, 2010: 0.151, 2011: 0.021, 2012: 0.160, 2013: 0.324,
    2014: 0.137, 2015: 0.014, 2016: 0.120, 2017: 0.218, 2018: -0.044,
    2019: 0.315, 2020: 0.184, 2021: 0.287, 2022: -0.181, 2023: 0.263,
    2024: 0.250,
}

DEPOSIT = 400
YEARS = range(2009, 2025)        # sixteen January deposits
SAFE_FROM = 2022                 # shifted to safety at the END of 2021
SAFE_RATE = 0.04                 # CDs / short bonds


def rate(year):
    return SAFE_RATE if year >= SAFE_FROM else SP500[year]


def final_running_balance():
    bal = 0.0
    for yr in YEARS:
        bal = (bal + DEPOSIT) * (1 + rate(yr))
    return bal


def final_per_deposit():
    """Each deposit compounded independently - must match the running balance."""
    total = 0.0
    for d_yr in YEARS:
        v = float(DEPOSIT)
        for yr in range(d_yr, 2025):
            v *= 1 + rate(yr)
        total += v
    return total


def irr(final):
    """Constant annual rate turning the deposit stream into `final`."""
    def npv(r):
        flows = sum(-DEPOSIT / (1 + r) ** (yr - 2009) for yr in YEARS)
        return flows + final / (1 + r) ** 16
    lo, hi = 0.0, 0.5
    for _ in range(80):
        mid = (lo + hi) / 2
        lo, hi = (mid, hi) if npv(mid) > 0 else (lo, mid)
    return (lo + hi) / 2


if __name__ == "__main__":
    v1, v2 = final_running_balance(), final_per_deposit()
    deposited = DEPOSIT * len(list(YEARS))
    growth = v1 - deposited

    print(f"Final value (start of 2025):   ${v1:,.2f}")
    print(f"Cross-check (per-deposit sum): ${v2:,.2f}")
    print(f"Deposited: ${deposited:,}   Growth: ${growth:,.2f} ({growth / v1:.0%} of fund)")
    print(f"Money-weighted return (IRR):   {irr(v1):.2%}/yr")
    print(f"Disbursement: $5,000/yr x 4 years, paid directly to the bursar")

    assert abs(v1 - v2) < 0.01                    # two methods agree
    assert abs(v1 - 20_645) < 1                   # ~$20,600 in the bible
    assert deposited == 6_400
    assert abs(growth - 14_245) < 1               # market put in >2x what Estelle did
    assert growth > 2 * deposited
    print("All canon checks pass.")

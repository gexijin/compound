"""Estelle's fortune: ~$900,000 by the summer of the book (2026).

Reproduces "Estelle's fortune: $900,000, earned the slow way" in story-bible.md.

The life, in cash flows:
  1976-1981  $600/yr into the fund account (a salesman's load fund)
  1982-2001  $2,000/yr - the IRA maximum, opened to all workers in 1982
  2002-2012  $3,000/yr; retires 2013, contributions stop
  Never a missed year - the 1987 Morrell strike deposits came from fill-in work.

The two mistakes (era-shaped: fees and fear, never a stock pick):
  The tuition:      8.5% front load on every deposit through 1987, plus ~1.5%/yr
                    expense drag until she finds no-load funds (re-entry, 1989).
  The capitulation: October 1987 - Black Monday, five months into the strike.
                    Sells near the bottom (about a third below the peak locked in,
                    modeled as a -20% year), sits 1988 in CDs (+7%), re-enters
                    1989, never sells again.

Retirement 2013: shifts mostly to safety (4.5%), keeps ~25% in equities - the
sleeve whose narrative face is the Deere certificate (modeled separately below).
"""

# S&P 500 total returns (including dividends), actual history 1976-2024
SP500 = {
    1976: 0.238, 1977: -0.072, 1978: 0.066, 1979: 0.184, 1980: 0.324,
    1981: -0.049, 1982: 0.215, 1983: 0.226, 1984: 0.063, 1985: 0.317,
    1986: 0.187, 1987: 0.053, 1988: 0.166, 1989: 0.317, 1990: -0.031,
    1991: 0.305, 1992: 0.076, 1993: 0.101, 1994: 0.013, 1995: 0.376,
    1996: 0.230, 1997: 0.334, 1998: 0.286, 1999: 0.210, 2000: -0.091,
    2001: -0.119, 2002: -0.221, 2003: 0.287, 2004: 0.109, 2005: 0.049,
    2006: 0.158, 2007: 0.055, 2008: -0.370, 2009: 0.265, 2010: 0.151,
    2011: 0.021, 2012: 0.160, 2013: 0.324, 2014: 0.137, 2015: 0.014,
    2016: 0.120, 2017: 0.218, 2018: -0.044, 2019: 0.315, 2020: 0.184,
    2021: 0.287, 2022: -0.181, 2023: 0.263, 2024: 0.250,
    2025: 0.100,  # PLACEHOLDER - not actual history; see math/CLAUDE.md
}

RETIRE = 2013
SAFE_RATE = 0.045
EQUITY_KEPT = 0.25       # the sliver never de-risked; its narrative face is Deere
FRONT_LOAD = 0.085       # standard load-fund skim of the era
EXPENSE_DRAG = 0.015     # fat-fund expenses until the 1989 no-load re-entry


def contribution(year):
    if year <= 1981:
        return 600
    if year <= 2001:
        return 2_000
    if year <= 2012:
        return 3_000
    return 0


def run(panic87=True, loadfund=True, end=2025):
    """Balance at the end of `end` (start of `end`+1). end=2025 ~ book summer 2026."""
    bal = 0.0
    for yr in range(1976, end + 1):
        c = contribution(yr)
        if loadfund and yr <= 1987:
            c *= 1 - FRONT_LOAD
        bal += c
        if panic87 and yr == 1987:
            r = -0.20                     # rode it down, sold near the bottom
        elif panic87 and yr == 1988:
            r = 0.07                      # the year in CDs, watching it recover
        elif yr >= RETIRE:
            r = EQUITY_KEPT * SP500[yr] + (1 - EQUITY_KEPT) * SAFE_RATE
        else:
            r = SP500[yr]
            if loadfund and yr <= 1988:
                r -= EXPENSE_DRAG
        bal *= 1 + r
    return bal


def deere_certificate(lump=1_000, cagr=0.14, years=41.5):
    """One transaction, early 1985: $1,000 reallocated into Deere at the bottom
    of the farm crisis. Paper certificate, dividends reinvested, never sold.
    ~14%/yr is Deere's long-run total return (checked against split-adjusted
    price anchors: ~$4.50 then, ~$460 in 2026, plus ~2% average dividend)."""
    return lump * (1 + cagr) ** years


if __name__ == "__main__":
    total_in = sum(contribution(y) for y in range(1976, 2013))
    fortune = run()
    clean = run(panic87=False, loadfund=False)
    cost_panic = clean - run(panic87=True, loadfund=False)
    cost_load = clean - run(panic87=False, loadfund=True)
    deere = deere_certificate()

    print(f"Contributed 1976-2012 (never a missed year): ${total_in:,}")
    print(f"Fortune, summer 2026:                        ${fortune:,.0f}")
    print(f"  ... of which the Deere sleeve (~25%):      ${deere:,.0f}")
    print(f"Without the mistakes:                        ${clean:,.0f}")
    print(f"  cost of October 1987 (in 2026 dollars):    ${cost_panic:,.0f}")
    print(f"  cost of the load-fund years:               ${cost_load:,.0f}")
    print(f"End-2024 value (actual history only):        ${run(end=2024):,.0f}")

    assert total_in == 76_600
    assert 850_000 < fortune < 1_000_000              # "make it $900,000" holds
    assert 1_200_000 < clean < 1_350_000              # ~$1.25M counterfactual
    assert 250_000 < cost_panic < 280_000             # ~$263k
    assert 130_000 < cost_load < 160_000              # ~$144k
    assert 220_000 < deere < 240_000                  # ~$230k, from one $1,000 buy
    assert fortune > 10 * total_in                    # the growth is the story
    print("All canon checks pass.")

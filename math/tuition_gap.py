"""Keisha's tuition gap: the sophomore-year ledger and the two maths.

Reproduces "The gap" and "What Keisha knows: the two maths" in story-bible.md.
Pure arithmetic; asserts the canonical numbers.
"""

# --- The real ledger (sophomore year) ---
STICKER = 26_000          # SDSU published cost of attendance, resident on campus
RENEWING_AID = 8_000      # partial Pell + state/institutional; renews every year
REAL_COST = STICKER - RENEWING_AID   # 18,000

LOAN = 6_500              # federal Direct Loan cap, dependent sophomore (freshman: 5,500)
SLICE_529 = 5_000         # paid by the plan directly to the bursar
DENISE = 1_000            # the SCHOOL envelope, ~$85/month

GROSS_GAP = REAL_COST - LOAN - SLICE_529 - DENISE

WAGES = 2_700             # 12 summer weeks x 20 hrs at Sioux Falls fast-food wages, net
NET_GAP = GROSS_GAP - WAGES   # the hidden number

# --- The two maths (what Keisha can see in April) ---
# She knows: real cost, loan, Denise. She does NOT know the 529 exists;
# she saw its unlabeled credit freshman year and filed it as one-time help.
PERCEIVED_IF_CREDIT_RETURNS = REAL_COST - LOAN - DENISE - SLICE_529 - WAGES
PERCEIVED_IF_IT_DOESNT = REAL_COST - LOAN - DENISE - WAGES

# --- How the net gap closes (no rescue) ---
STAND_SHARE = 1_000       # a season of market Saturdays and Levitt nights
CIRCULATION_DESK = 1_880  # fall shifts against a bursar payment plan
MARGIN = STAND_SHARE + CIRCULATION_DESK - NET_GAP   # ~$80, no triumphant surplus

if __name__ == "__main__":
    print(f"Real annual cost:            ${REAL_COST:,}")
    print(f"Gross gap:                   ${GROSS_GAP:,}")
    print(f"Net gap (the hidden number): ${NET_GAP:,}")
    print(f"Two maths: ${PERCEIVED_IF_CREDIT_RETURNS:,} if the credit returns, "
          f"${PERCEIVED_IF_IT_DOESNT:,} if it doesn't")
    print(f"Closes: stand share ${STAND_SHARE:,} + circulation desk "
          f"${CIRCULATION_DESK:,} -> margin ${MARGIN}")

    assert REAL_COST == 18_000
    assert GROSS_GAP == 5_500
    assert NET_GAP == 2_800
    assert PERCEIVED_IF_CREDIT_RETURNS == 2_800
    assert PERCEIVED_IF_IT_DOESNT == 7_800
    assert MARGIN == 80, MARGIN
    print("All canon checks pass.")

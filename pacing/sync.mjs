#!/usr/bin/env node
// Regenerates tension-map.html from beats.json + cards.json, then lints the
// spine against the pacing design rules. Run from anywhere:
//   node pacing/sync.mjs
// The JSON files are the source of truth; the marked blocks in tension-map.html
// are overwritten on every run.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = dirname(fileURLToPath(import.meta.url));

// Act display names — extend when the act structure changes.
const ACT_NAMES = {
  1: 'Act 1 · The Garage',
  2: 'Act 2 · The Stand',
  3: 'Act 3 · The Boom',
  4: 'Act 4 · The Bust',
  5: 'Act 5 · The Table',
};

// Character controlled vocabularies — extend when the cast or curriculum changes.
const FAMILIES = ['Carter', 'Ortiz', 'Ellis', 'Larsen', 'outsider'];
const STRANDS = ['narrator', 'essie', 'denise', 'none'];
const RESCUES = ['keisha', 'estelle', 'denise']; // the three parallel rescues
// The money curriculum (design rule #4). The first four are the "physics";
// `speed` is the counterfeit fourth. The rest are the supporting lessons.
const PHYSICS = ['wages', 'ownership', 'compounding', 'speed'];
const COUNTERFEIT = 'speed';
const TEACHES = [...PHYSICS, 'budgeting', 'pricing', 'liquidity', 'spending', 'precision', 'predation'];

// Money-ledger controlled vocabularies — extend when the ledger schema changes.
const LEDGER_KINDS = ['bridge', 'fear', 'rescue', 'trade'];
const BRIDGE_OPS = ['start', 'minus', 'plus', 'subtotal', 'margin'];
const LEDGER_ACTORS = ['keisha', 'denise', 'estelle', 'loan', 'aid'];
// The fixed money figures (spine "Open items"): don't let the ledger drift off these.
const FIXED_MONEY = [7800, 5000, 2800];

// ---------- load ----------
function loadJSON(name) {
  try {
    const data = JSON.parse(readFileSync(join(DIR, name), 'utf8'));
    if (!Array.isArray(data)) throw new Error('top level is not an array');
    return data;
  } catch (e) {
    console.error(`✗ ${name}: ${e.message} — fix the JSON before running sync`);
    process.exit(1);
  }
}

const beats = loadJSON('beats.json');
const cards = loadJSON('cards.json');
const characters = loadJSON('characters.json');
const lessons = loadJSON('lessons.json');
const ledger = loadJSON('ledger.json');

// ---------- validation (hard errors) ----------
const errors = [];
beats.forEach((b, k) => {
  if (+b.beat !== k + 1) errors.push(`beats.json entry ${k + 1}: beat "${b.beat}" — numbering must be contiguous from 1 (expected ${k + 1})`);
  for (const col of ['intensity', 'suspense']) {
    const v = Number(b[col]);
    if (!Number.isFinite(v) || v < 0 || v > 10) errors.push(`beat ${b.beat}: ${col} "${b[col]}" is not a number in 0–10`);
  }
  if ('comedy' in b && (!Number.isInteger(b.comedy) || b.comedy < 0 || b.comedy > 2)) errors.push(`beat ${b.beat}: comedy "${b.comedy}" must be an integer 0–2 (omit it for 0)`);
  if (!ACT_NAMES[+b.act]) errors.push(`beat ${b.beat}: act "${b.act}" has no name — add it to ACT_NAMES in sync.mjs`);
  if (k > 0 && +b.act < +beats[k - 1].act) errors.push(`beat ${b.beat}: act number decreases`);
});
cards.forEach(c => {
  if (!c.card) errors.push('cards.json: an entry has an empty card name');
  if (!c.dealt_beat) errors.push(`card "${c.card}": missing dealt_beat`);
});
characters.forEach((p, k) => {
  const who = p.short || p.name || `entry ${k + 1}`;
  if (!p.short) errors.push(`characters.json entry ${k + 1}: missing "short" (display name)`);
  if (!p.name) errors.push(`character "${who}": missing "name"`);
  if ('age' in p && !Number.isFinite(Number(p.age))) errors.push(`character "${who}": age "${p.age}" is not a number (omit it if unknown)`);
  if (!FAMILIES.includes(p.family)) errors.push(`character "${who}": family "${p.family}" unknown — add it to FAMILIES in sync.mjs`);
  if (!STRANDS.includes(p.strand)) errors.push(`character "${who}": strand "${p.strand}" unknown — one of ${STRANDS.join(', ')}`);
  if ('rescue' in p && !RESCUES.includes(p.rescue)) errors.push(`character "${who}": rescue "${p.rescue}" unknown — one of ${RESCUES.join(', ')}`);
  if (!Array.isArray(p.teaches) || !p.teaches.length) errors.push(`character "${who}": teaches must be a non-empty array`);
  else for (const t of p.teaches) if (!TEACHES.includes(t)) errors.push(`character "${who}": teaches "${t}" is not in the curriculum — add it to TEACHES in sync.mjs`);
});
const N = beats.length;
const charShorts = new Set(characters.map(p => p.short));
const seenLessonIds = new Set();
lessons.forEach((L, k) => {
  const who = L.id || `entry ${k + 1}`;
  if (!L.id) errors.push(`lessons.json entry ${k + 1}: missing "id"`);
  else if (seenLessonIds.has(L.id)) errors.push(`lessons.json: duplicate id "${L.id}"`);
  else seenLessonIds.add(L.id);
  if (!L.label && !L.tag) errors.push(`lesson "${who}": needs a "label" or a "tag"`);
  if ('tag' in L && !TEACHES.includes(L.tag)) errors.push(`lesson "${who}": tag "${L.tag}" is not in the curriculum — add it to TEACHES in sync.mjs`);
  if ('carrier' in L && !charShorts.has(L.carrier)) errors.push(`lesson "${who}": carrier "${L.carrier}" is not a character in characters.json`);
  if (!Array.isArray(L.beats) || !L.beats.length) errors.push(`lesson "${who}": beats must be a non-empty array`);
  else for (const b of L.beats) if (!Number.isInteger(b) || b < 1 || b > N) errors.push(`lesson "${who}": beat ${b} is out of range 1–${N}`);
});
ledger.forEach((e, k) => {
  const who = e.label || `entry ${k + 1}`;
  if (!LEDGER_KINDS.includes(e.kind)) errors.push(`ledger "${who}": kind "${e.kind}" unknown — one of ${LEDGER_KINDS.join(', ')}`);
  if (e.kind === 'bridge' && !BRIDGE_OPS.includes(e.op)) errors.push(`ledger "${who}": bridge op "${e.op}" unknown — one of ${BRIDGE_OPS.join(', ')}`);
  if ('actor' in e && !LEDGER_ACTORS.includes(e.actor)) errors.push(`ledger "${who}": actor "${e.actor}" unknown — one of ${LEDGER_ACTORS.join(', ')}`);
  if ('amount' in e && !Number.isFinite(Number(e.amount))) errors.push(`ledger "${who}": amount "${e.amount}" is not a number`);
  if ('beat' in e && (!Number.isInteger(e.beat) || e.beat < 1 || e.beat > N)) errors.push(`ledger "${who}": beat ${e.beat} is out of range 1–${N}`);
  if ((e.kind === 'bridge' || e.kind === 'fear') && !('amount' in e)) errors.push(`ledger "${who}": ${e.kind} entries need an amount`);
});
if (errors.length) {
  console.error('✗ data errors — nothing regenerated:\n  ' + errors.join('\n  '));
  process.exit(1);
}

// ---------- build the data block ----------
const B = beats.map(b => {
  const o = { t: b.title, a: +b.act, i: +b.intensity, s: +b.suspense };
  if (b.comedy) o.m = +b.comedy;
  if (b.hard_out) o.out = 1;
  if (b.essie) o.e = b.essie;
  if (b.denise) o.d = b.denise;
  if (b.near_miss) o.n = b.near_miss;
  if (b.card_dealt) o.c = b.card_dealt;
  if (b.cards_cashed) o.x = 1;
  return o;
});
const ACTS = Object.keys(ACT_NAMES).map(Number)
  .filter(a => B.some(b => b.a === a))
  .map(a => ({
    n: ACT_NAMES[a],
    from: B.findIndex(b => b.a === a),
    to: B.length - 1 - [...B].reverse().findIndex(b => b.a === a),
  }));

const dataBlock =
`// DATA:BEGIN (generated by sync.mjs from beats.json + cards.json — edit the JSON, not this block)
  // beat fields: t title, a act, i intensity, s suspense, m comedy, out hard-out,
  // e Essie year, d Denise page, n near-miss, c card dealt, x cards cashed
  const B = [
${B.map(o => '    ' + JSON.stringify(o)).join(',\n')}
  ];
  const ACTS = [
${ACTS.map(o => '    ' + JSON.stringify(o)).join(',\n')}
  ];
  // DATA:END`;

const esc = s => (s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const cardRows = cards.map(c => {
  const dealt = `${c.dealt_beat} · ${esc(c.dealt_label)}`;
  const cashed = c.cashed_beat ? `${c.cashed_beat} · ${esc(c.cashed_label)}` : esc(c.cashed_label);
  const held = c.cashed_beat ? String(+c.cashed_beat - +c.dealt_beat) : '—';
  const detail = c.detail ? ` — ${esc(c.detail)}` : '';
  return `        <tr><td><span class="b">${esc(c.card)}</span>${detail}</td><td>${dealt}</td><td>${cashed}</td><td class="num">${held}</td></tr>`;
}).join('\n');
const cardsBlock =
`<!-- CARDS:BEGIN (generated by sync.mjs from cards.json) -->
${cardRows}
        <!-- CARDS:END -->`;

// the cast passes through verbatim — the page script renders the table and hovers
const charsBlock =
`// CHARS:BEGIN (generated by sync.mjs from characters.json — edit the JSON, not this block)
  const CH = [
${characters.map(o => '    ' + JSON.stringify(o)).join(',\n')}
  ];
  // CHARS:END`;

// lessons + ledger pass through verbatim — the page script renders the matrix + tables
const lessonsBlock =
`// LESSONS:BEGIN (generated by sync.mjs from lessons.json — edit the JSON, not this block)
  const LSN = [
${lessons.map(o => '    ' + JSON.stringify(o)).join(',\n')}
  ];
  // LESSONS:END`;
const ledgerBlock =
`// LEDGER:BEGIN (generated by sync.mjs from ledger.json — edit the JSON, not this block)
  const LDG = [
${ledger.map(o => '    ' + JSON.stringify(o)).join(',\n')}
  ];
  // LEDGER:END`;

// ---------- rewrite the HTML ----------
const htmlPath = join(DIR, 'tension-map.html');
const before = readFileSync(htmlPath, 'utf8');
const markers = [
  [/\/\/ DATA:BEGIN[\s\S]*?\/\/ DATA:END/, dataBlock, 'DATA'],
  [/<!-- CARDS:BEGIN[\s\S]*?<!-- CARDS:END -->/, cardsBlock, 'CARDS'],
  [/\/\/ CHARS:BEGIN[\s\S]*?\/\/ CHARS:END/, charsBlock, 'CHARS'],
  [/\/\/ LESSONS:BEGIN[\s\S]*?\/\/ LESSONS:END/, lessonsBlock, 'LESSONS'],
  [/\/\/ LEDGER:BEGIN[\s\S]*?\/\/ LEDGER:END/, ledgerBlock, 'LEDGER'],
];
const missing = markers.filter(([re]) => !re.test(before)).map(([, , name]) => name);
if (missing.length) {
  console.error(`✗ tension-map.html is missing its ${missing.join('/')} marker(s) — restore them before running sync`);
  process.exit(1);
}
const html = markers.reduce((acc, [re, block]) => acc.replace(re, () => block), before);
if (html !== before) writeFileSync(htmlPath, html);
console.log(`✓ tension-map.html: ${B.length} beats, ${ACTS.length} acts, ${cards.length} cards, ${characters.length} characters, ${lessons.length} lessons, ${ledger.length} ledger rows${html === before ? ' (already up to date)' : ' regenerated'}`);

// ---------- pacing lint (advisory — judgment stays with the author) ----------
const warn = [], info = [], ok = [];
const beatNo = i => i + 1;

// climax = highest-intensity beat (latest wins a tie)
let climax = 0;
B.forEach((b, i) => { if (b.i >= B[climax].i) climax = i; });

// 1. every bang buys a release ("every bang buys a breath", widened per the
//    reframed rule #1: a release is a quieter beat, a real laugh, or a card
//    cashing — this book breathes through comedy and resolution, not only lulls).
//    A "bang" is a crisis-level beat (intensity ≥ 8); the release must land in the
//    same beat or the next two.
const isRelease = b => b.i <= 4 || (b.m || 0) >= 2 || b.x;
const unreleased = [];
B.forEach((b, k) => {
  if (b.i < 8 || k === climax) return; // only bangs; the climax may crowd
  const win = [B[k], B[k + 1], B[k + 2]].filter(Boolean);
  if (!win.some(isRelease)) unreleased.push(k);
});
if (unreleased.length) unreleased.forEach(k => warn.push(`unreleased bang — beat ${beatNo(k)} (intensity ${B[k].i}) buys no release within two beats: no quieter beat (intensity ≤ 4), no laugh (comedy = 2), no card cashing`));
else ok.push('every bang buys a release within two beats (quieter, funnier, or a card cashing)');
// consecutive hard outs are fine when the second releases; surface them so the
// author can eyeball the ones that don't (informational, not a violation)
for (let k = 1; k < B.length; k++) {
  if (k !== climax && B[k].out && B[k - 1].out) info.push(`consecutive hard outs — beats ${beatNo(k - 1)}–${beatNo(k)} (two chapter cliffs in a row; fine if one releases)`);
}

// 2. rising floor, measured on felt tension max(i, s) so a quiet-but-suspenseful
//    scene (the supper table) doesn't read as a leak
const felt = b => Math.max(b.i, b.s);
let prevFloor = -1, prevName = '';
let floorClean = true;
for (const a of ACTS) {
  const idx = [];
  for (let i = a.from; i <= Math.min(a.to, climax); i++) idx.push(i);
  if (!idx.length) continue; // act entirely post-climax
  const minIdx = idx.reduce((m, i) => (felt(B[i]) < felt(B[m]) ? i : m), idx[0]);
  const floor = felt(B[minIdx]);
  if (prevFloor >= 0 && floor < prevFloor) {
    warn.push(`falling floor — ${a.n}'s quietest pre-climax beat (${beatNo(minIdx)}: felt tension ${floor}) sits below ${prevName}'s floor (${prevFloor})`);
    floorClean = false;
  }
  prevFloor = floor; prevName = a.n;
}
if (floorClean) ok.push('the felt-tension floor rises act over act');

// 3. gap closure — suspense below intensity between the first card deal and the
//    climax (excluding cash-in beats, where the collapse is the point)
const firstDeal = B.findIndex(b => b.c);
const dips = [];
for (let i = firstDeal + 1; i < climax; i++) {
  if (!B[i].x && B[i].s < B[i].i) dips.push(i);
}
if (dips.length) {
  // group consecutive runs
  const runs = [];
  for (const i of dips) {
    const r = runs[runs.length - 1];
    if (r && i === r.to + 1) r.to = i; else runs.push({ from: i, to: i });
  }
  for (const r of runs) {
    const span = r.from === r.to ? `beat ${beatNo(r.from)}` : `beats ${beatNo(r.from)}–${beatNo(r.to)}`;
    const sev = r.to - r.from >= 1 ? warn : info;
    sev.push(`irony gap dips — ${span}: suspense below intensity (${r.from === r.to ? `${B[r.from].s} < ${B[r.from].i}` : 'sustained'})${r.to - r.from >= 1 ? ' — the reader has run out of cards here' : ' (single beat; normal at a hard out)'}`);
  }
} else ok.push('suspense never falls below intensity between the first deal and the climax');

// 4. card bookkeeping — cross-check cards.json against beats.json
const cardErrs = [];
const dealtInBeats = new Map(); // card name -> beat number
beats.forEach(b => { if (b.card_dealt) dealtInBeats.set(b.card_dealt, +b.beat); });
for (const c of cards) {
  const at = dealtInBeats.get(c.card);
  if (at === undefined) cardErrs.push(`"${c.card}" is in cards.json but no beat deals it (card_dealt must match the card name exactly)`);
  else if (at !== +c.dealt_beat) cardErrs.push(`"${c.card}": cards.json says dealt at ${c.dealt_beat}, beats.json deals it at ${at}`);
  if (c.cashed_beat) {
    const bb = beats[+c.cashed_beat - 1];
    if (!bb || !bb.cards_cashed) cardErrs.push(`"${c.card}": cashes at beat ${c.cashed_beat}, but that beat is not flagged cards_cashed in beats.json`);
    const held = +c.cashed_beat - +c.dealt_beat;
    if (held < 5) warn.push(`short-held card — "${c.card}" held only ${held} beats (dealt ${c.dealt_beat}, cashed ${c.cashed_beat}); a card needs time to generate pressure`);
  } else {
    info.push(`open card — "${c.card}" (dealt ${c.dealt_beat}) has no cash-in beat yet: ${c.cashed_label || 'unresolved'}`);
  }
}
for (const [name, at] of dealtInBeats) {
  if (!cards.some(c => c.card === name)) cardErrs.push(`beat ${at} deals "${name}" but it has no entry in cards.json`);
}
if (cardErrs.length) cardErrs.forEach(e => warn.push(`card mismatch — ${e}`));
else ok.push('cards.json and beats.json agree on every deal and cash-in');

// 5. strand starvation — longest stretch with no strand event, card, or near-miss
const hasEvent = b => b.e || b.d || b.n || b.c || b.x;
let runStart = -1, longest = { len: 0, from: 0, to: 0 };
B.forEach((b, i) => {
  if (hasEvent(b)) { runStart = -1; return; }
  if (runStart < 0) runStart = i;
  const len = i - runStart + 1;
  if (len > longest.len) longest = { len, from: runStart, to: i };
});
if (longest.len >= 6) warn.push(`strand starvation — beats ${beatNo(longest.from)}–${beatNo(longest.to)} (${longest.len} beats) pass with no strand event, card, or near-miss`);
else info.push(`longest quiet stretch (no strand event, card, or near-miss): beats ${beatNo(longest.from)}–${beatNo(longest.to)} (${longest.len} beats)`);

// 5b. comedy quota (design rule #3) — funny is the delivery mechanism, and it's
//     the book's second release valve; a long laugh desert (no comic texture at
//     all) is a pacing risk in its own right, especially in the darkest act.
let cRun = -1, cDesert = { len: 0, from: 0, to: 0 };
B.forEach((b, i) => {
  if (b.m) { cRun = -1; return; }
  if (cRun < 0) cRun = i;
  const len = i - cRun + 1;
  if (len > cDesert.len) cDesert = { len, from: cRun, to: i };
});
if (cDesert.len >= 4) warn.push(`laugh desert — beats ${beatNo(cDesert.from)}–${beatNo(cDesert.to)} (${cDesert.len} beats) carry no comedy at all (rule #3: the reader finishes because she was laughing)`);
else info.push(`longest laugh desert (no comedy): beats ${beatNo(cDesert.from)}–${beatNo(cDesert.to)} (${cDesert.len} beats)`);
const setPieces = B.map((b, i) => (b.m || 0) >= 2 ? beatNo(i) : null).filter(Boolean);
info.push(`comedy set pieces (comedy = 2): beats ${setPieces.join(', ') || 'none'}`);
const comedyByAct = ACTS.map((a, ai) => {
  let c = 0;
  for (let i = a.from; i <= a.to; i++) c += (B[i].m || 0);
  return `Act ${ai + 1}: ${c}`;
}).join(' · ');
info.push(`comedy weight by act — ${comedyByAct}`);

// 6. cast-to-curriculum — does every money lesson have an owner, and do the
//    three rescues and the strands line up with the beat grid?
const owners = new Map(); // teach tag -> [names]
for (const p of characters) for (const t of p.teaches) {
  if (!owners.has(t)) owners.set(t, []);
  owners.get(t).push(p.short);
}
const orphanPhysics = PHYSICS.filter(t => !owners.has(t));
if (orphanPhysics.length) warn.push(`orphaned physics — no character teaches ${orphanPhysics.join(', ')} (design rule #4 wants each of ${PHYSICS.join(', ')} embodied)`);
else ok.push(`every money physics has an owner (${PHYSICS.map(t => `${t}: ${owners.get(t).join('/')}`).join(', ')})`);
const orphanLessons = TEACHES.filter(t => !PHYSICS.includes(t) && !owners.has(t));
if (orphanLessons.length) info.push(`unowned supporting lessons: ${orphanLessons.join(', ')} (in the curriculum but no character carries them)`);
if (owners.has(COUNTERFEIT)) info.push(`the counterfeit fourth physics (${COUNTERFEIT}) is carried by ${owners.get(COUNTERFEIT).join('/')} — should read as a trap, not a lesson`);

const rescuers = characters.filter(p => p.rescue);
const rescueTags = new Set(rescuers.map(p => p.rescue));
if (rescuers.length !== 3 || RESCUES.some(r => !rescueTags.has(r))) {
  warn.push(`rescue count off — the spine is "three rescues, one number"; found ${rescuers.length} flagged (${rescuers.map(p => `${p.short}:${p.rescue}`).join(', ') || 'none'})`);
} else ok.push(`three parallel rescues flagged — ${rescuers.map(p => p.short).join(', ')}`);

// strands used by characters must cover the strands the beats actually run
const beatStrands = new Set();
if (beats.some(b => b.essie)) beatStrands.add('essie');
if (beats.some(b => b.denise)) beatStrands.add('denise');
const charStrands = new Set(characters.map(p => p.strand));
const strandGaps = [...beatStrands].filter(s => !charStrands.has(s));
if (strandGaps.length) warn.push(`strand owner missing — beats run the ${strandGaps.join(', ')} strand but no character is tagged with it`);
else ok.push('every strand the beats run has a character who owns it');

// 7. lesson coverage — does the curriculum (design rule #4) get delivered on the
//    page, does every set piece pay tuition, and do the physics recur?
const beatLessons = new Map(); // beat number -> [lesson ids]
for (const L of lessons) for (const b of L.beats) {
  if (!beatLessons.has(b)) beatLessons.set(b, []);
  beatLessons.get(b).push(L.id);
}
// every teach tag a character owns must actually be delivered by some lesson
const charTeach = new Set(characters.flatMap(p => p.teaches));
const lessonTags = new Set(lessons.filter(L => L.tag).map(L => L.tag));
const undeliveredTags = [...charTeach].filter(t => !lessonTags.has(t));
if (undeliveredTags.length) warn.push(`curriculum gap — ${undeliveredTags.join(', ')} is taught by a character but no lesson delivers it on the page (add a lesson to lessons.json)`);
else ok.push('every money lesson a character owns is delivered by a catalogued lesson beat');
// physics should recur, not fire once
const thinPhysics = lessons.filter(L => PHYSICS.includes(L.tag) && L.beats.length < 2);
if (thinPhysics.length) info.push(`one-and-done physics — ${thinPhysics.map(L => `${L.tag} (beat ${L.beats[0]})`).join(', ')}: a physics taught once and never reinforced is easy to miss`);
const cf = lessons.find(L => L.counterfeit);
if (cf) info.push(`the counterfeit physics (${cf.tag || cf.id}) is delivered at beats ${cf.beats.join(', ')} — must read as a trap, not a lesson`);
// every set piece pays tuition (rule #4): no drama-only substantial beats
const substantial = beats.filter(b => b.hard_out || +b.intensity >= 7);
const dryPieces = substantial.filter(b => !beatLessons.has(+b.beat)).map(b => +b.beat);
if (dryPieces.length) info.push(`set pieces with no catalogued lesson — beats ${dryPieces.join(', ')} (hard out or intensity ≥ 7); rule #4 wants every set piece to pay tuition — confirm each earns its place`);
else ok.push('every substantial beat (hard out or intensity ≥ 7) delivers at least one lesson');
// coverage summary per act
const perAct = ACTS.map((a, ai) => {
  let d = 0;
  for (let i = a.from; i <= a.to; i++) d += (beatLessons.get(i + 1) || []).length;
  return `Act ${ai + 1}: ${d}`;
}).join(' · ');
info.push(`lesson deliveries by act — ${perAct} (${lessons.length} lessons, ${[...beatLessons.values()].reduce((s, v) => s + v.length, 0)} deliveries across ${beatLessons.size} beats)`);

// 8. money reconciliation — the ledger must close on the canon arithmetic
const bridge = ledger.filter(e => e.kind === 'bridge').sort((a, b) => (a.order || 0) - (b.order || 0));
const moneyErrs = [];
let run = 0, netGap = null, raised = 0, inPhaseB = false;
for (const e of bridge) {
  if (e.op === 'start') run = +e.amount;
  else if (e.op === 'minus' && !inPhaseB) run -= +e.amount;
  else if (e.op === 'subtotal') { if (run !== +e.amount) moneyErrs.push(`"${e.label}": running total ${run} ≠ stated ${e.amount}`); netGap = +e.amount; }
  else if (e.op === 'plus') { inPhaseB = true; raised += +e.amount; }
  else if (e.op === 'margin') { const m = raised - netGap; if (m !== +e.amount) moneyErrs.push(`margin: raised ${raised} − gap ${netGap} = ${m}, but stated ${e.amount}`); }
}
if (moneyErrs.length) moneyErrs.forEach(m => warn.push(`ledger arithmetic — ${m}`));
else ok.push(`the bill bridge closes: real cost → net gap $${netGap} → raised $${raised}, margin $${raised - netGap}`);
// the fixed canon figures must still be present
const amounts = new Set(ledger.map(e => e.amount).filter(Number.isFinite));
const missingFixed = FIXED_MONEY.filter(a => !amounts.has(a));
if (missingFixed.length) warn.push(`canon drift — the fixed figures ${missingFixed.map(a => '$' + a.toLocaleString()).join(', ')} no longer appear in the ledger`);
else ok.push(`the fixed canon figures (${FIXED_MONEY.map(a => '$' + a.toLocaleString()).join(' / ')}) all appear in the ledger`);
// the feared number must split exactly into its parts
const fear = ledger.filter(e => e.kind === 'fear');
const feared = fear.find(e => e.seq === 1), parts = fear.filter(e => e.seq > 1);
if (feared && parts.length) {
  const sum = parts.reduce((s, e) => s + +e.amount, 0);
  if (sum !== +feared.amount) warn.push(`fear split — the feared $${feared.amount} ≠ $${sum} (${parts.map(p => '$' + p.amount).join(' + ')})`);
  else ok.push(`the feared $${feared.amount.toLocaleString()} splits exactly into ${parts.map(p => '$' + p.amount.toLocaleString() + (p.actor ? ' ' + p.actor : '')).join(' + ')}`);
}
// redundant rescues (the "bought nothing" beat) and provisional (unpriced) rows
ledger.filter(e => e.kind === 'rescue' && e.applied === false)
  .forEach(e => info.push(`redundant rescue — ${e.actor}'s "${e.label}" raises money that doesn't reduce the bill (the "season of silence that bought nothing"); keep intentional`));
const prov = ledger.filter(e => e.provisional).length;
if (prov) info.push(`${prov} ledger rows are provisional (the unpriced trading detour + the watch) — amounts await the math/ fact-check pass`);
// standing discrepancy between the spine prose and the math/ scripts
info.push('spine vs math/ — the bridge closes the $2,800 with stand share + circulation desk ($1,000 + $1,880); the spine also names "the liquidated remainder" among the closers. Confirm whether the trading detour contributes to the close or nets out.');

// ---------- report ----------
console.log(`\nPacing lint — climax at beat ${beatNo(climax)} ("${B[climax].t}")`);
for (const s of warn) console.log('  ⚠ ' + s);
for (const s of info) console.log('  · ' + s);
for (const s of ok) console.log('  ✓ ' + s);
if (!warn.length) console.log('  ✓ no rule violations');

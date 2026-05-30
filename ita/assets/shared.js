/* jshint esversion: 11 */
'use strict';

/* ================================================================
   STORE  — localStorage-backed progress, version-safe
   ================================================================ */
const Store = (() => {
  const KEY = 'grammaticaviva_v1';
  const DEFAULT = () => ({
    schema: 1,
    modules: {},
    streak: { count: 0, lastDay: null },
    settings: { accentHelp: true },
    meta: { totalAnswered: 0, created: Date.now() }
  });

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return DEFAULT();
      const data = JSON.parse(raw);
      return data.schema === 1 ? data : _migrate(data);
    } catch (e) {
      console.warn('GrammaticaViva: localStorage unavailable, using in-memory state.');
      return DEFAULT();
    }
  }

  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* quota exceeded */ }
  }

  function _migrate(old) {
    // Schema 1 is the first version; extend here for future upgrades
    const fresh = DEFAULT();
    if (old.meta) fresh.meta = old.meta;
    return fresh;
  }

  function _getOrCreate(state, mId) {
    if (!state.modules[mId]) {
      state.modules[mId] = { bestScore: 0, attempts: 0, done: false, lastIndex: 0, exercises: {}, updated: 0 };
    }
    return state.modules[mId];
  }

  // Status rank: higher = better result
  const STATUS_RANK = { correct: 5, 'self-ok': 4, 'self-mid': 3, revealed: 2, 'self-no': 1, wrong: 0 };

  function recordAnswer(mId, exId, status) {
    const state = load();
    const m = _getOrCreate(state, mId);
    const prev = m.exercises[exId] || { status: null, tries: 0 };
    prev.tries += 1;
    const prevRank = STATUS_RANK[prev.status] ?? -1;
    const newRank  = STATUS_RANK[status] ?? -1;
    if (newRank > prevRank) prev.status = status;
    m.exercises[exId] = prev;
    state.meta.totalAnswered = (state.meta.totalAnswered || 0) + 1;
    save(state);
  }

  function recordRun(mId, score) {
    const state = load();
    const m = _getOrCreate(state, mId);
    m.attempts += 1;
    if (score > m.bestScore) m.bestScore = score;
    if (score >= 0.6) m.done = true;
    m.updated = Date.now();
    save(state);
  }

  function setLastIndex(mId, idx) {
    const state = load();
    _getOrCreate(state, mId).lastIndex = idx;
    save(state);
  }

  function updateStreak() {
    const state = load();
    const today = new Date().toISOString().slice(0, 10);
    if (state.streak.lastDay === today) { save(state); return; }
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak.count = (state.streak.lastDay === yesterday) ? state.streak.count + 1 : 1;
    state.streak.lastDay = today;
    save(state);
  }

  function moduleProgress(mId) {
    const state = load();
    return state.modules[mId]?.bestScore || 0;
  }

  function findWeakest(moduleIds) {
    const state = load();
    let worst = null, worstScore = Infinity;
    for (const id of moduleIds) {
      const m = state.modules[id];
      if (!m || m.attempts === 0) continue;
      if (m.bestScore < worstScore) { worstScore = m.bestScore; worst = id; }
    }
    return worst;
  }

  function exportData()   { return JSON.stringify(load(), null, 2); }
  function importData(json) {
    try {
      const data = JSON.parse(json);
      if (!data.schema) throw new Error('bad format');
      localStorage.setItem(KEY, JSON.stringify(data));
      return true;
    } catch { return false; }
  }
  function resetModule(mId) { const s = load(); delete s.modules[mId]; save(s); }
  function resetAll()       { save(DEFAULT()); }
  function getModule(state, mId) { return _getOrCreate(state, mId); }

  return { load, save, recordAnswer, recordRun, setLastIndex, updateStreak, moduleProgress, findWeakest, exportData, importData, resetModule, resetAll, getModule };
})();


/* ================================================================
   UTILITIES
   ================================================================ */

/**
 * Normalise a string for tolerant comparison.
 * strictAccents=false folds all diacritics (è→e), good for typing tolerance.
 * strictAccents=true leaves accents intact (use when accent IS the tested point).
 */
function normalize(str, strictAccents = false) {
  if (str == null) return '';
  let s = str.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?,;:]+$/, '').trim();
  if (!strictAccents) s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return s;
}

function compareAnswer(input, acceptArr, opts = {}) {
  const ni = normalize(input, opts.strictAccents || false);
  return acceptArr.some(a => normalize(a, opts.strictAccents || false) === ni);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/** CSS-animation confetti — no external library needed */
function confetti(n = 50) {
  const colors = ['#C0553A','#4E7A35','#2A6CB0','#F5C842','#8B7BC4','#E8855C'];
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div');
    const size = 6 + Math.random() * 9;
    el.style.cssText = `position:fixed;width:${size}px;height:${size}px;background:${colors[i % colors.length]};border-radius:${Math.random() > .5 ? '50%' : '3px'};pointer-events:none;z-index:9999;`;
    document.body.appendChild(el);
    const sx = Math.random() * window.innerWidth;
    const dx = (Math.random() - 0.5) * 220;
    const delay = Math.random() * 500;
    const dur   = 1300 + Math.random() * 1000;
    let t0 = null;
    (function frame(ts) {
      if (!t0) t0 = ts + delay;
      if (ts < t0) { requestAnimationFrame(frame); return; }
      const t = Math.min((ts - t0) / dur, 1);
      el.style.left = (sx + dx * t) + 'px';
      el.style.top  = (t * (window.innerHeight + 20) - 12) + 'px';
      el.style.transform = `rotate(${t * 680}deg)`;
      el.style.opacity = t > .8 ? String(1 - (t - .8) / .2) : '1';
      if (t < 1) requestAnimationFrame(frame);
      else el.remove();
    })(performance.now());
  }
}

/**
 * Build a shared accent-helper bar.
 * Tracks the last focused INPUT/TEXTAREA inside `container` and inserts the
 * character at the cursor. mousedown+preventDefault keeps focus on the input.
 */
function buildAccentHelper(container) {
  let lastFocused = null;
  container.addEventListener('focusin', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') lastFocused = e.target;
  });
  const bar = document.createElement('div');
  bar.className = 'accent-helper';
  ['à','è','é','ì','ò','ù'].forEach(ch => {
    const btn = document.createElement('button');
    btn.className = 'accent-btn'; btn.type = 'button'; btn.textContent = ch;
    btn.addEventListener('mousedown', e => e.preventDefault());
    btn.addEventListener('click', () => {
      if (!lastFocused) return;
      const s = lastFocused.selectionStart, e2 = lastFocused.selectionEnd;
      lastFocused.value = lastFocused.value.slice(0, s) + ch + lastFocused.value.slice(e2);
      lastFocused.setSelectionRange(s + 1, s + 1);
      lastFocused.focus();
    });
    bar.appendChild(btn);
  });
  return bar;
}

function addFeedbackArea(box) {
  const div = document.createElement('div');
  div.className = 'feedback-area';
  box.appendChild(div);
}

function showFeedback(box, ok, explain) {
  const fa = box.querySelector('.feedback-area');
  if (!fa) return;
  fa.className = 'feedback-area show ' + (ok ? 'ok' : 'bad');
  fa.innerHTML = (ok ? '✅ <strong>Richtig!</strong>' : '❌ <strong>Nicht ganz.</strong>') +
    (explain ? ' — ' + escHtml(explain) : '');
}


/* ================================================================
   THEORY RENDERER
   ================================================================ */

function renderTheory(sections, container) {
  const wrap = document.createElement('div');
  wrap.className = 'theory-wrap';

  const btn = document.createElement('button');
  btn.className = 'theory-toggle';
  btn.setAttribute('aria-expanded', 'true');
  btn.innerHTML = '<span>📖 Grammatik-Erklärung</span><span class="toggle-chevron">▼</span>';

  const body = document.createElement('div');
  body.className = 'theory-body open';
  sections.forEach(sec => body.appendChild(_renderSection(sec)));

  btn.addEventListener('click', () => {
    const open = body.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  wrap.appendChild(btn); wrap.appendChild(body);
  container.appendChild(wrap);
}

function _renderSection(sec) {
  const div = document.createElement('div');
  switch (sec.type) {
    case 'text':
      div.innerHTML = `<div class="theory-text">${sec.html}</div>`;
      break;
    case 'table': {
      const head = sec.head.map(h => `<th>${h}</th>`).join('');
      const rows = sec.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
      div.innerHTML = `<table class="theory-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
      break;
    }
    case 'compare':
      div.innerHTML = `
        <div class="theory-compare">
          <div class="theory-compare-col">
            <div class="theory-compare-label">${escHtml(sec.left.title)}</div>
            <div class="theory-compare-body">${sec.left.body}</div>
          </div>
          <div class="theory-compare-col">
            <div class="theory-compare-label">${escHtml(sec.right.title)}</div>
            <div class="theory-compare-body">${sec.right.body}</div>
          </div>
        </div>`;
      break;
    case 'example':
      div.innerHTML = `<div class="theory-example"><div class="it">🇮🇹 ${escHtml(sec.it)}</div><div class="de">🇩🇪 ${escHtml(sec.de)}</div></div>`;
      break;
    case 'tip':
      div.innerHTML = `<div class="theory-tip">${sec.body}</div>`;
      break;
    case 'divider':
      div.innerHTML = `<div class="theory-divider"></div>`;
      break;
    default:
      div.innerHTML = `<div class="theory-text">${sec.html || ''}</div>`;
  }
  return div;
}


/* ================================================================
   EXERCISE RENDERERS
   Contract: renderXX(ex, box, onDone)
   onDone(status: string, isAutoGraded: boolean)
   ================================================================ */

const TYPE_LABELS = {
  MC:'Multiple Choice', LT:'Lückentext', FT:'Formtabelle',
  SO:'Sortieraufgabe', FK:'Fehlerkorrektur', DE:'Deutsch \u2192 Italienisch',
  IT:'Italienisch \u2192 Deutsch', KA:'Kategorisieren', KO:'Kontrast',
  ZO:'Zuordnung'
};

function renderExercise(ex, box, onDone) {
  box.innerHTML = '';
  const badge = document.createElement('div');
  badge.className = 'ex-type-badge';
  badge.textContent = TYPE_LABELS[ex.type] || ex.type;
  box.appendChild(badge);

  const fn = { MC:_renderMC, LT:_renderLT, FT:_renderFT, SO:_renderSO, FK:_renderFK, DE:_renderDE, IT:_renderIT, KA:_renderKA, KO:_renderKO, ZO:_renderZO };
  if (fn[ex.type]) fn[ex.type](ex, box, onDone);
  else { const p = document.createElement('p'); p.textContent = 'Unbekannter Typ: ' + ex.type; box.appendChild(p); }

  // Optional: Übersetzungsbutton für Aufgaben mit italienischen Sätzen
  if (ex.translation) {
    const tw = document.createElement('div');
    tw.style.marginTop = '0.8rem';
    const tb = document.createElement('button');
    tb.className = 'btn btn-ghost btn-sm';
    tb.textContent = '\ud83c\udde9\ud83c\uddea Deutschen Satz einblenden';
    const td = document.createElement('div');
    td.style.cssText = 'display:none;margin-top:0.4rem;padding:0.55rem 0.9rem;background:var(--paper-2);border:1.5px solid var(--line);border-radius:var(--r-sm);font-size:0.87rem;color:var(--ink-soft);font-style:italic;';
    td.textContent = ex.translation;
    tb.addEventListener('click', () => { td.style.display = 'block'; tb.disabled = true; });
    tw.appendChild(tb); tw.appendChild(td); box.appendChild(tw);
  }
} /* end renderExercise */

/* --- MC --- */
function _renderMC(ex, box, onDone) {
  _prompt(box, ex.prompt);
  const shuffled = shuffle(ex.options);
  const grid = document.createElement('div'); grid.className = 'mc-grid';
  shuffled.forEach(opt => {
    const btn = document.createElement('button'); btn.className = 'mc-btn'; btn.textContent = opt;
    btn.addEventListener('click', () => {
      const ok = opt === ex.correctValue;
      grid.querySelectorAll('.mc-btn').forEach(b => {
        b.disabled = true;
        if (b.textContent === ex.correctValue) b.classList.add('correct');
        else if (b === btn && !ok) b.classList.add('wrong');
      });
      showFeedback(box, ok, ex.explain || '');
      onDone(ok ? 'correct' : 'wrong', true);
    });
    grid.appendChild(btn);
  });
  box.appendChild(grid);
  addFeedbackArea(box);
}

/* --- LT --- */
function _renderLT(ex, box, onDone) {
  _prompt(box, ex.prompt || 'Fülle die Lücken aus:');
  const wrap = document.createElement('div'); wrap.className = 'lt-text';
  let html = escHtml(ex.text);
  ex.blanks.forEach((_, i) => {
    html = html.replace(`{${i}}`, `<input class="lt-input" data-idx="${i}" autocomplete="off" spellcheck="false">`);
  });
  wrap.innerHTML = html;
  box.appendChild(wrap);
  box.appendChild(buildAccentHelper(box));

  const inputs = ex.blanks.map((_, i) => wrap.querySelector(`[data-idx="${i}"]`));

  const checkBtn = document.createElement('button');
  checkBtn.className = 'btn btn-primary'; checkBtn.style.marginTop = '1rem'; checkBtn.textContent = 'Prüfen';
  checkBtn.addEventListener('click', () => {
    let allOk = true;
    ex.blanks.forEach((blank, i) => {
      const ok = compareAnswer(inputs[i]?.value || '', blank.accept, { strictAccents: ex.strictAccents });
      inputs[i]?.classList.add(ok ? 'correct' : 'wrong');
      if (!ok) { allOk = false; if (inputs[i]) inputs[i].title = 'Lösung: ' + blank.accept[0]; }
      if (inputs[i]) inputs[i].readOnly = true;
    });
    checkBtn.disabled = true;
    const explain = ex.explain || (!allOk ? 'Lösung: ' + ex.blanks.map(b => b.accept[0]).join(', ') : '');
    showFeedback(box, allOk, explain);
    onDone(allOk ? 'correct' : 'wrong', true);
  });
  box.appendChild(checkBtn);
  addFeedbackArea(box);
}

/* --- FT --- */
function _renderFT(ex, box, onDone) {
  _prompt(box, ex.prompt);
  const tbl = document.createElement('table'); tbl.className = 'ft-table';
  const inputs = ex.rows.map(row => {
    const tr = document.createElement('tr');
    const tdL = document.createElement('td'); tdL.className = 'ft-label'; tdL.textContent = row.label;
    const tdR = document.createElement('td');
    const inp = document.createElement('input');
    inp.className = 'ft-input'; inp.autocomplete = 'off'; inp.spellcheck = false;
    tdR.appendChild(inp); tr.appendChild(tdL); tr.appendChild(tdR); tbl.appendChild(tr);
    return inp;
  });
  box.appendChild(tbl);
  box.appendChild(buildAccentHelper(box));

  const checkBtn = document.createElement('button');
  checkBtn.className = 'btn btn-primary'; checkBtn.style.marginTop = '0.8rem'; checkBtn.textContent = 'Prüfen';
  checkBtn.addEventListener('click', () => {
    let allOk = true;
    ex.rows.forEach((row, i) => {
      const ok = compareAnswer(inputs[i].value, row.accept);
      inputs[i].classList.add(ok ? 'correct' : 'wrong');
      if (!ok) { allOk = false; inputs[i].title = row.accept[0]; }
      inputs[i].readOnly = true;
    });
    checkBtn.disabled = true;
    showFeedback(box, allOk, ex.explain || (!allOk ? 'Sieh dir die Tabelle noch einmal an.' : ''));
    onDone(allOk ? 'correct' : 'wrong', true);
  });
  box.appendChild(checkBtn);
  addFeedbackArea(box);
}

/* --- SO --- */
function _renderSO(ex, box, onDone) {
  _prompt(box, ex.prompt || 'Bringe die Wörter in die richtige Reihenfolge:');
  let shuffled = shuffle(ex.tokens);
  if (JSON.stringify(shuffled) === JSON.stringify(ex.solution)) {
    // accidentally in correct order — swap first two
    if (shuffled.length > 1) [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
  }
  const state = { src: [...shuffled], tgt: [] };

  const srcLabel = document.createElement('div'); srcLabel.className = 'so-zone-label'; srcLabel.textContent = 'Verfügbare Wörter — klicken zum Hinzufügen';
  const tgtLabel = document.createElement('div'); tgtLabel.className = 'so-zone-label'; tgtLabel.textContent = 'Deine Reihenfolge — klicken zum Entfernen';
  const srcZone = document.createElement('div'); srcZone.className = 'so-source';
  const tgtZone = document.createElement('div'); tgtZone.className = 'so-target';

  const checkBtn = document.createElement('button');
  checkBtn.className = 'btn btn-primary btn-sm'; checkBtn.style.marginTop = '0.8rem';
  checkBtn.textContent = 'Prüfen'; checkBtn.style.display = 'none';

  function renderChips() {
    srcZone.innerHTML = ''; tgtZone.innerHTML = '';
    state.src.forEach((w, i) => {
      const c = _chip(w, () => { state.src.splice(i,1); state.tgt.push(w); renderChips(); });
      srcZone.appendChild(c);
    });
    state.tgt.forEach((w, i) => {
      const c = _chip(w, () => { state.tgt.splice(i,1); state.src.push(w); renderChips(); });
      c.style.background = 'var(--paper-2)';
      tgtZone.appendChild(c);
    });
    checkBtn.style.display = state.src.length === 0 ? 'inline-flex' : 'none';
  }

  checkBtn.addEventListener('click', () => {
    const ok = JSON.stringify(state.tgt) === JSON.stringify(ex.solution) ||
      (ex.altSolutions || []).some(alt => JSON.stringify(state.tgt) === JSON.stringify(alt));
    tgtZone.classList.add(ok ? 'correct' : 'wrong');
    tgtZone.querySelectorAll('.so-chip').forEach(c => c.style.pointerEvents = 'none');
    srcZone.querySelectorAll('.so-chip').forEach(c => c.style.pointerEvents = 'none');
    checkBtn.disabled = true;
    showFeedback(box, ok, ex.explain || (!ok ? 'Richtig: ' + ex.solution.join(' ') : ''));
    onDone(ok ? 'correct' : 'wrong', true);
  });

  const zones = document.createElement('div'); zones.className = 'so-zones';
  const sw = document.createElement('div'); sw.appendChild(srcLabel); sw.appendChild(srcZone);
  const tw = document.createElement('div'); tw.appendChild(tgtLabel); tw.appendChild(tgtZone);
  zones.appendChild(sw); zones.appendChild(tw);
  box.appendChild(zones); box.appendChild(checkBtn);
  renderChips();
  addFeedbackArea(box);
}

/* --- FK --- */
function _renderFK(ex, box, onDone) {
  _prompt(box, ex.prompt || 'Finde und korrigiere den Fehler:');
  const p = document.createElement('p'); p.className = 'fk-sentence';
  let html = escHtml(ex.sentence);
  if (ex.errorToken) html = html.replace(escHtml(ex.errorToken), `<span class="fk-error">${escHtml(ex.errorToken)}</span>`);
  p.innerHTML = html;
  box.appendChild(p);

  const row = document.createElement('div'); row.className = 'fk-row';
  const inp = document.createElement('input');
  inp.className = 'fk-input'; inp.placeholder = 'Schreibe den korrekten Satz…'; inp.spellcheck = false; inp.autocomplete = 'off';
  const btn = document.createElement('button'); btn.className = 'btn btn-primary btn-sm'; btn.textContent = 'Prüfen';
  row.appendChild(inp); row.appendChild(btn); box.appendChild(row);
  box.appendChild(buildAccentHelper(box));

  btn.addEventListener('click', () => {
    const ok = compareAnswer(inp.value, [ex.solution]);
    inp.readOnly = true; btn.disabled = true;
    showFeedback(box, ok, ex.explain || (!ok ? 'Richtig: ' + ex.solution : ''));
    onDone(ok ? 'correct' : 'wrong', true);
  });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') btn.click(); });
  addFeedbackArea(box);
}

/* --- DE / IT (self-check) --- */
function _renderSelfCheck(ex, box, onDone, dir) {
  _prompt(box, ex.prompt);
  const lbl = document.createElement('div'); lbl.className = 'self-dir-label';
  lbl.textContent = dir === 'DE' ? '🇩🇪 → 🇮🇹  Übersetze ins Italienische:' : '🇮🇹 → 🇩🇪  Übersetze ins Deutsche:';
  box.appendChild(lbl);

  const ta = document.createElement('textarea'); ta.className = 'self-textarea';
  ta.placeholder = dir === 'DE' ? 'Deine Übersetzung auf Italienisch…' : 'Deine Übersetzung auf Deutsch…';
  box.appendChild(ta);
  box.appendChild(buildAccentHelper(box));

  const revBtn = document.createElement('button'); revBtn.className = 'btn btn-cielo btn-sm'; revBtn.style.marginTop = '0.8rem'; revBtn.textContent = 'Musterlösung anzeigen';

  const revDiv = document.createElement('div'); revDiv.className = 'self-reveal';
  revDiv.innerHTML = `<div class="self-reveal-label">Musterlösung</div>
    <div class="self-solution">${ex.solutions.map(s => escHtml(s)).join('<br>')}</div>` +
    (ex.note ? `<div class="self-note">${escHtml(ex.note)}</div>` : '');

  const rateRow = document.createElement('div'); rateRow.className = 'self-rate-row'; rateRow.style.display = 'none';
  [['✅ Richtig','self-ok','btn-oliva'], ['〜 Fast','self-mid','btn-sun'], ['✗ Falsch','self-no','btn-ghost']].forEach(([label, status, cls]) => {
    const b = document.createElement('button'); b.className = `btn ${cls} btn-sm`; b.textContent = label;
    b.addEventListener('click', () => {
      ta.readOnly = true; revBtn.disabled = true;
      rateRow.querySelectorAll('button').forEach(x => x.disabled = true);
      onDone(status, false);
    });
    rateRow.appendChild(b);
  });

  revBtn.addEventListener('click', () => {
    revDiv.classList.add('open'); rateRow.style.display = 'flex'; revBtn.disabled = true;
  });

  box.appendChild(revBtn); box.appendChild(revDiv); box.appendChild(rateRow);
}
function _renderDE(ex, box, onDone) { _renderSelfCheck(ex, box, onDone, 'DE'); }
function _renderIT(ex, box, onDone) { _renderSelfCheck(ex, box, onDone, 'IT'); }

/* --- KA --- */
function _renderKA(ex, box, onDone) {
  _prompt(box, ex.prompt);
  const userPicks = new Array(ex.items.length).fill(null);
  let graded = false;

  const list = document.createElement('div'); list.className = 'ka-list';
  ex.items.forEach((item, idx) => {
    const row = document.createElement('div'); row.className = 'ka-row';
    const txt = document.createElement('span'); txt.className = 'ka-text'; txt.textContent = item.text;
    const catBtns = document.createElement('div'); catBtns.className = 'ka-cat-btns';
    ex.categories.forEach((cat, ci) => {
      const b = document.createElement('button'); b.className = 'ka-cat-btn'; b.textContent = cat; b.dataset.ci = ci;
      b.addEventListener('click', () => {
        if (graded) return;
        catBtns.querySelectorAll('.ka-cat-btn').forEach(x => x.classList.remove('sel'));
        b.classList.add('sel');
        userPicks[idx] = ci;
        if (!userPicks.includes(null)) _gradeKA();
      });
      catBtns.appendChild(b);
    });
    row.appendChild(txt); row.appendChild(catBtns); list.appendChild(row);
  });
  box.appendChild(list);

  function _gradeKA() {
    graded = true;
    let allOk = true;
    ex.items.forEach((item, idx) => {
      const ok = userPicks[idx] === item.cat;
      if (!ok) allOk = false;
      const catBtns = list.children[idx].querySelector('.ka-cat-btns');
      catBtns.querySelectorAll('.ka-cat-btn').forEach(b => {
        const ci = parseInt(b.dataset.ci);
        if (ci === item.cat) b.classList.add('correct');
        else if (ci === userPicks[idx] && !ok) b.classList.add('wrong');
        else b.disabled = true;
      });
    });
    showFeedback(box, allOk, ex.explain || '');
    onDone(allOk ? 'correct' : 'wrong', true);
  }
  addFeedbackArea(box);
}

/* --- KO --- */
function _renderKO(ex, box, onDone) {
  _prompt(box, ex.prompt);
  const pair = document.createElement('div'); pair.className = 'ko-pair';
  [ex.a, ex.b].forEach(v => {
    const card = document.createElement('div'); card.className = 'ko-card';
    card.innerHTML = `<div class="ko-tag">${escHtml(v.tag)}</div><div class="ko-sentence">${escHtml(v.sentence)}</div>`;
    pair.appendChild(card);
  });
  box.appendChild(pair);

  const revDiv = document.createElement('div'); revDiv.className = 'ko-reveal'; revDiv.innerHTML = ex.reveal;
  const revBtn = document.createElement('button'); revBtn.className = 'btn btn-oliva btn-sm'; revBtn.textContent = 'Erkl\u00e4rung anzeigen';
  revBtn.addEventListener('click', () => { revDiv.classList.add('open'); revBtn.disabled = true; onDone('revealed', false); });
  box.appendChild(revBtn); box.appendChild(revDiv);
}

/* --- ZO (Zuordnung / Matching) --- */
function _renderZO(ex, box, onDone) {
  _prompt(box, ex.prompt || 'Klicke erst das deutsche Wort, dann die passende Italiano-Vergangenheitsform:');

  const hint = document.createElement('p');
  hint.style.cssText = 'font-size:0.8rem;color:var(--ink-soft);margin-bottom:0.8rem;';
  hint.textContent = 'Zuerst links klicken, dann rechts zuordnen. Falsche Versuche werden gez\u00e4hlt.';
  box.appendChild(hint);

  const shuffled = shuffle(ex.pairs.map((p, i) => ({ it: p.it, origIdx: i })));
  let selectedLeft = null;
  let mistakes = 0;
  const matched = new Set();

  const grid = document.createElement('div'); grid.className = 'zo-grid';
  const leftCol  = document.createElement('div'); leftCol.className  = 'zo-col';
  const rightCol = document.createElement('div'); rightCol.className = 'zo-col';
  const arrow    = document.createElement('div'); arrow.className    = 'zo-arrow'; arrow.textContent = '\u2194';

  const leftBtns  = [];
  const rightBtns = [];

  ex.pairs.forEach((pair, idx) => {
    const btn = document.createElement('button');
    btn.className = 'zo-item';
    btn.textContent = pair.de;
    btn.dataset.idx = idx;
    btn.addEventListener('click', () => {
      if (matched.has(idx) || btn.disabled) return;
      leftBtns.forEach(b => b.classList.remove('zo-sel'));
      btn.classList.add('zo-sel');
      selectedLeft = idx;
    });
    leftCol.appendChild(btn);
    leftBtns.push(btn);
  });

  shuffled.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'zo-item';
    btn.textContent = item.it;
    btn.dataset.origidx = item.origIdx;
    btn.addEventListener('click', () => {
      if (selectedLeft === null || btn.disabled) return;
      const origIdx = parseInt(btn.dataset.origidx);

      if (origIdx === selectedLeft) {
        // Richtig
        matched.add(origIdx);
        const lBtn = leftBtns[selectedLeft];
        lBtn.classList.remove('zo-sel');
        lBtn.classList.add('zo-matched');
        lBtn.disabled = true;
        btn.classList.add('zo-matched');
        btn.disabled = true;
        selectedLeft = null;

        if (matched.size === ex.pairs.length) {
          const ok = mistakes === 0;
          showFeedback(box, ok, ok ? 'Alle Paare korrekt zugeordnet!' : mistakes + ' Fehlversuch' + (mistakes > 1 ? 'e' : '') + ' gemacht.');
          onDone(ok ? 'correct' : 'wrong', true);
        }
      } else {
        // Falsch
        mistakes++;
        const lBtn = leftBtns[selectedLeft];
        btn.classList.add('zo-wrong'); lBtn.classList.add('zo-wrong');
        selectedLeft = null;
        setTimeout(() => {
          btn.classList.remove('zo-wrong');
          lBtn.classList.remove('zo-wrong', 'zo-sel');
        }, 700);
      }
    });
    rightCol.appendChild(btn);
    rightBtns.push(btn);
  });

  grid.appendChild(leftCol); grid.appendChild(arrow); grid.appendChild(rightCol);
  box.appendChild(grid);
  addFeedbackArea(box);
}

/* --- helpers --- */
function _prompt(box, text) {
  const p = document.createElement('p'); p.className = 'ex-prompt'; p.textContent = text; box.appendChild(p);
}
function _chip(word, onClick) {
  const c = document.createElement('span'); c.className = 'so-chip'; c.textContent = word;
  c.addEventListener('click', onClick); return c;
}


/* ================================================================
   EXERCISE SESSION
   Controls a module page: renders exercises in sequence,
   tracks scores, persists progress.
   ================================================================ */

class ExerciseSession {
  /**
   * @param {object} moduleData  - MODULE constant from the module file
   * @param {HTMLElement} fillEl - the progress bar fill div
   * @param {HTMLElement} textEl - "Aufgabe X von Y" span
   * @param {HTMLElement} boxEl  - the exercise-box div
   * @param {HTMLElement} navEl  - the exercise-nav div
   */
  constructor(moduleData, fillEl, textEl, boxEl, navEl) {
    this.mod    = moduleData;
    this.fillEl = fillEl;
    this.textEl = textEl;
    this.boxEl  = boxEl;
    this.navEl  = navEl;
    this.index  = 0;
    this.runCorrect   = 0; // auto-graded correct
    this.runGraded    = 0; // auto-graded total
    this.selfScoreSum = 0; // weighted self-ratings
    this.selfCount    = 0;
    this.counted      = new Set(); // exercise indices already scored in this run (no double-count on back-nav)
    this._buildNav();
  }

  _buildNav() {
    this.navEl.innerHTML = '';

    this.zurueckBtn = document.createElement('button');
    this.zurueckBtn.className = 'btn btn-ghost';
    this.zurueckBtn.textContent = '\u2190 Zur\u00fcck';
    this.zurueckBtn.disabled = true;
    this.zurueckBtn.addEventListener('click', () => this.prev());
    this.navEl.appendChild(this.zurueckBtn);

    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.className = 'btn btn-ghost btn-sm';
    homeLink.textContent = '\ud83c\udfe0 \u00dcbersicht';
    this.navEl.appendChild(homeLink);

    this.weiterBtn = document.createElement('button');
    this.weiterBtn.className = 'btn btn-primary';
    this.weiterBtn.textContent = 'Weiter \u2192';
    this.weiterBtn.disabled = true;
    this.weiterBtn.style.marginLeft = 'auto';
    this.weiterBtn.addEventListener('click', () => this.next());
    this.navEl.appendChild(this.weiterBtn);
  }

  start() {
    Store.updateStreak();
    const state = Store.load();
    const mState = Store.getModule(state, this.mod.id);
    this.index = Math.min(mState.lastIndex || 0, this.mod.exercises.length - 1);
    this._render();
  }

  _render() {
    if (this.index >= this.mod.exercises.length) { this.finish(); return; }
    const ex    = this.mod.exercises[this.index];
    const total = this.mod.exercises.length;

    this.textEl.textContent = `Aufgabe ${this.index + 1} von ${total}`;
    this.fillEl.style.width = `${(this.index / total) * 100}%`;
    this.weiterBtn.disabled = true;
    this.weiterBtn.textContent = this.index === total - 1 ? 'Ergebnis \u2192' : 'Weiter \u2192';
    this.zurueckBtn.disabled = this.index === 0;

    renderExercise(ex, this.boxEl, (status, isAutoGraded) => {
      Store.recordAnswer(this.mod.id, ex.id, status);
      Store.setLastIndex(this.mod.id, this.index);
      if (!this.counted.has(this.index)) {
        this.counted.add(this.index);
        if (isAutoGraded) {
          this.runGraded++;
          if (status === 'correct') this.runCorrect++;
        } else {
          this.selfCount++;
          const selfVals = { 'self-ok': 1, 'self-mid': 0.5, 'self-no': 0, 'revealed': 0.4 };
          this.selfScoreSum += selfVals[status] ?? 0;
        }
      }
      this.weiterBtn.disabled = false;
    });

    this.boxEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  next() {
    this.index++;
    this._render();
  }

  prev() {
    if (this.index > 0) {
      this.index--;
      this._render();
    }
  }

  finish() {
    // Blended score: auto-graded is primary, self-assessed secondary (weight 0.8)
    let score;
    const a = this.runGraded, b = this.selfCount;
    if (a > 0 && b > 0) {
      score = (this.runCorrect + this.selfScoreSum * 0.8) / (a + b * 0.8);
    } else if (a > 0) {
      score = this.runCorrect / a;
    } else if (b > 0) {
      score = this.selfScoreSum / b;
    } else {
      score = 0;
    }

    Store.recordRun(this.mod.id, score);
    Store.setLastIndex(this.mod.id, 0);

    const passed = score >= (this.mod.passThreshold || 0.6);
    const pct    = Math.round(score * 100);

    this.fillEl.style.width = '100%';
    this.textEl.textContent = 'Abgeschlossen!';
    this.navEl.style.display = 'none';

    this.boxEl.innerHTML = `
      <div class="summary-box">
        <div class="summary-emoji">${passed ? '🏆' : '📚'}</div>
        <div class="summary-score">${pct}%</div>
        <p class="summary-sub">
          ${this.runGraded} automatisch bewertet &middot; ${this.selfCount} selbst bewertet<br>
          ${passed ? 'Modul bestanden! Sehr gut.' : 'Noch etwas üben — du schaffst das!'}
        </p>
        <div class="summary-btns">
          <a href="index.html" class="btn btn-ghost">← Zur Übersicht</a>
          <button class="btn btn-primary" onclick="location.reload()">Nochmal üben</button>
        </div>
      </div>`;

    if (passed) confetti(70);
  }
}

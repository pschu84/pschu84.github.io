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
    meta: { totalAnswered: 0, totalCorrect: 0, lastAnswered: null, created: Date.now() },
    daily: {}
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

    const _today = new Date().toISOString().slice(0, 10);
    if (!state.daily) state.daily = {};
    if (!state.daily[_today]) state.daily[_today] = { correct: 0, total: 0 };
    state.daily[_today].total += 1;
    const _isGood = (status === 'correct' || status === 'self-ok');
    if (_isGood) {
      state.daily[_today].correct += 1;
      state.meta.totalCorrect = (state.meta.totalCorrect || 0) + 1;
    }
    state.meta.lastAnswered = Date.now();
    const _cutoff = new Date(Date.now() - 90 * 86400000).toISOString().slice(0, 10);
    Object.keys(state.daily).forEach(d => { if (d < _cutoff) delete state.daily[d]; });

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

  function moduleExerciseStats(mId) {
    const state = load();
    const exs = state.modules[mId]?.exercises || {};
    let correct = 0, wrong = 0;
    const GOOD = new Set(['correct', 'self-ok']);
    for (const ex of Object.values(exs)) {
      if (!ex.status) continue;
      if (GOOD.has(ex.status)) correct++;
      else wrong++;
    }
    return { correct, wrong, total: correct + wrong };
  }

  function findWeakest(moduleIds) {
    const state = load();
    const attempted = moduleIds
      .map(id => ({ id, m: state.modules[id] }))
      .filter(({ m }) => m && m.attempts > 0);
    if (attempted.length === 0) return null;

    const failed = attempted.filter(({ m }) => m.bestScore < 0.6);
    if (failed.length > 0) {
      return failed.reduce((a, b) => a.m.bestScore <= b.m.bestScore ? a : b).id;
    }
    return attempted.reduce((a, b) => a.m.bestScore <= b.m.bestScore ? a : b).id;
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

  function getActivityStats() {
    const state = load();
    const today = new Date().toISOString().slice(0, 10);
    const daily = state.daily || {};

    const sortedDays = Object.keys(daily).sort().reverse();
    const lastDay    = sortedDays[0] || null;

    let daysSinceLast = null;
    if (lastDay) {
      const msPerDay = 86400000;
      const todayMs  = new Date(today + 'T00:00:00').getTime();
      const lastMs   = new Date(lastDay + 'T00:00:00').getTime();
      daysSinceLast  = Math.round((todayMs - lastMs) / msPerDay);
    }

    let bestCorrect = 0;
    for (const s of Object.values(daily)) {
      if (s.correct > bestCorrect) bestCorrect = s.correct;
    }

    let totalCorrect = state.meta.totalCorrect || 0;
    if (totalCorrect === 0) {
      const GOOD = new Set(['correct', 'self-ok']);
      for (const m of Object.values(state.modules)) {
        for (const ex of Object.values(m.exercises || {})) {
          if (ex.status && GOOD.has(ex.status)) totalCorrect++;
        }
      }
      if (totalCorrect > 0) {
        state.meta.totalCorrect = totalCorrect;
        save(state);
      }
    }

    return {
      todayCorrect:   daily[today]?.correct || 0,
      todayTotal:     daily[today]?.total   || 0,
      lastDay,
      lastDayCorrect: lastDay ? (daily[lastDay]?.correct || 0) : 0,
      daysSinceLast,
      bestCorrect,
      totalCorrect,
    };
  }

  return { load, save, recordAnswer, recordRun, setLastIndex, updateStreak, moduleProgress, moduleExerciseStats, getActivityStats, findWeakest, exportData, importData, resetModule, resetAll, getModule };
})();


/* ================================================================
   UTILITIES
   ================================================================ */

/**
 * Normalisiert einen String für toleranten Vergleich.
 * NEU: Apostrophe (', `, ') werden entfernt, danach Leerzeichen kollabiert.
 * Damit sind "l'amica", "l amica" und "lamica" alle äquivalent.
 */
function normalize(str, strictAccents = false) {
  if (str == null) return '';
  let s = str.trim().toLowerCase()
    // Alle Apostroph-Varianten entfernen
    .replace(/[''`\u2018\u2019\u0060\u00B4]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[.!?,;:]+$/, '')
    .trim();
  if (!strictAccents) s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return s;
}

function compareAnswer(input, acceptArr, opts = {}) {
  const ni = normalize(input, opts.strictAccents || false);
  return acceptArr.some(a => normalize(a, opts.strictAccents || false) === ni);
}

/* ── Web Speech API ─────────────────────────────────────────── */
function createSpeechRecognizer(lang) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const rec = new SR();
  rec.lang = lang;
  rec.interimResults = true;
  rec.continuous = false;
  rec.maxAlternatives = 1;
  return rec;
}

function _tokenizeSpeech(str) {
  return String(str).trim()
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ').trim()
    .split(' ').filter(Boolean);
}

function _levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m + 1}, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] :
        1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

function _alignTokens(expected, spoken) {
  const result = new Array(expected.length).fill('missing');
  const used   = new Array(spoken.length).fill(false);
  for (let ei = 0; ei < expected.length; ei++) {
    let bestMatch = -1, bestDist = Infinity;
    const threshold = Math.max(1, Math.floor(expected[ei].length * 0.3));
    for (let si = 0; si < spoken.length; si++) {
      if (used[si]) continue;
      const d = _levenshtein(expected[ei], spoken[si]);
      if (d <= threshold && d < bestDist) { bestDist = d; bestMatch = si; }
    }
    if (bestMatch >= 0) { result[ei] = 'ok'; used[bestMatch] = true; }
  }
  return result;
}

function _speechFallbackSelfCheck(box, onDone) {
  const hint = document.createElement('div');
  hint.className = 'mic-hint';
  hint.textContent =
    'ℹ️ Spracherkennung in diesem Browser nicht verfügbar. ' +
    'Lies den Satz laut vor und bewerte dich selbst.';
  box.appendChild(hint);
  const rateRow = document.createElement('div');
  rateRow.className = 'self-rate-row';
  [['✅ Konnte ich','self-ok','btn-oliva'],
   ['〜 Teilweise','self-mid','btn-sun'],
   ['✗ Noch nicht','self-no','btn-ghost']]
    .forEach(([label, status, cls]) => {
      const b = document.createElement('button');
      b.className = `btn ${cls} btn-sm`; b.textContent = label;
      b.addEventListener('click', () => {
        rateRow.querySelectorAll('button').forEach(x => x.disabled = true);
        onDone(status, false);
      });
      rateRow.appendChild(b);
    });
  box.appendChild(rateRow);
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
 * Sterne-Regen Effekt (für Meilenstein 20)
 */
function starBurst(n = 30) {
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div');
    el.textContent = ['⭐','🌟','✨'][i % 3];
    el.style.cssText = `position:fixed;font-size:${20 + Math.random()*20}px;pointer-events:none;z-index:9999;`;
    document.body.appendChild(el);
    const sx = Math.random() * window.innerWidth;
    const sy = Math.random() * window.innerHeight * 0.6;
    const delay = Math.random() * 600;
    const dur   = 1500 + Math.random() * 800;
    let t0 = null;
    (function frame(ts) {
      if (!t0) t0 = ts + delay;
      if (ts < t0) { requestAnimationFrame(frame); return; }
      const t = Math.min((ts - t0) / dur, 1);
      const bounce = Math.sin(t * Math.PI * 2) * 30;
      el.style.left = sx + 'px';
      el.style.top  = (sy + bounce - t * 200) + 'px';
      el.style.transform = `scale(${1 - t * 0.5}) rotate(${t * 360}deg)`;
      el.style.opacity = t > .7 ? String(1 - (t - .7) / .3) : '1';
      if (t < 1) requestAnimationFrame(frame);
      else el.remove();
    })(performance.now());
  }
}

/**
 * Epic Feuerwerk Effekt (für Meilenstein 50)
 */
function fireworks(n = 80) {
  const colors = ['#FFD700','#FF4500','#00CED1','#FF69B4','#7CFC00','#FF1493','#00BFFF'];
  const emojis = ['🎆','🎇','✨','🌟','💥','🎉','🏆'];
  // Konfetti
  confetti(n);
  // Emoji-Burst
  for (let i = 0; i < 15; i++) {
    const el = document.createElement('div');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `position:fixed;font-size:${24 + Math.random()*24}px;pointer-events:none;z-index:9999;`;
    document.body.appendChild(el);
    const sx = 0.2 * window.innerWidth + Math.random() * 0.6 * window.innerWidth;
    const sy = 0.2 * window.innerHeight + Math.random() * 0.5 * window.innerHeight;
    const delay = i * 120;
    const dur = 2000;
    let t0 = null;
    (function frame(ts) {
      if (!t0) t0 = ts + delay;
      if (ts < t0) { requestAnimationFrame(frame); return; }
      const t = Math.min((ts - t0) / dur, 1);
      el.style.left = sx + 'px';
      el.style.top  = (sy - t * 150) + 'px';
      el.style.transform = `scale(${1 + Math.sin(t * Math.PI) * 0.5}) rotate(${t * 720}deg)`;
      el.style.opacity = t > .7 ? String(1 - (t - .7) / .3) : '1';
      if (t < 1) requestAnimationFrame(frame);
      else el.remove();
    })(performance.now());
  }
}

/**
 * Toast-Notification anzeigen
 * @param {string} emoji
 * @param {string} title
 * @param {string} sub
 * @param {string} color CSS-Farbe (var-Name oder Hex)
 * @param {number} duration ms
 */
function showToast(emoji, title, sub, color = 'var(--terra)', duration = 3500) {
  // Existing toast entfernen
  document.querySelectorAll('.milestone-toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = 'milestone-toast';
  toast.innerHTML = `
    <span class="milestone-toast-emoji">${emoji}</span>
    <div class="milestone-toast-text">
      <strong>${escHtml(title)}</strong>
      ${sub ? `<span>${escHtml(sub)}</span>` : ''}
    </div>`;
  toast.style.setProperty('--toast-color', color);
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add('milestone-toast--in');
  });

  setTimeout(() => {
    toast.classList.remove('milestone-toast--in');
    toast.classList.add('milestone-toast--out');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/**
 * Optionaler kurzer Ton (AudioContext)
 * @param {'chime'|'fanfare'|'epic'} type
 */
function playMilestoneSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = type === 'chime'   ? [523, 659, 784]
                : type === 'fanfare' ? [523, 659, 784, 1047]
                :                     [392, 523, 659, 784, 1047, 1319];
    let t = ctx.currentTime;
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = type === 'epic' ? 'square' : 'sine';
      osc.frequency.setValueAtTime(freq, t + i * 0.12);
      gain.gain.setValueAtTime(0.18, t + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.35);
      osc.start(t + i * 0.12);
      osc.stop(t + i * 0.12 + 0.4);
    });
  } catch (e) { /* AudioContext nicht verfügbar */ }
}

/**
 * Prüft Meilensteine und löst Effekte aus.
 * sessionCount: Anzahl beantworteter Aufgaben in dieser Session
 * todayTotal: Gesamtanzahl heute (aus Store)
 * todayCorrect: Korrekte heute (aus Store)
 */
function checkMilestones(sessionCount, todayTotal, todayCorrect) {
  // Session-Meilensteine (pro Seitenaufruf)
  if (sessionCount === 5) {
    confetti(40);
    playMilestoneSound('chime');
    showToast('🎉', '5 Aufgaben geschafft!', 'Weiter so — du wächst!', 'var(--oliva)');
  } else if (sessionCount === 10) {
    confetti(60);
    starBurst(15);
    playMilestoneSound('fanfare');
    showToast('⭐', '10 Aufgaben in einer Runde!', 'Straordinario!', 'var(--cielo)');
  } else if (sessionCount === 20) {
    confetti(80);
    starBurst(25);
    playMilestoneSound('fanfare');
    showToast('🌟', '20 Aufgaben — Fuoco!', 'Das Italiano brennt in dir!', 'var(--sun-deep)', 4500);
  } else if (sessionCount === 50) {
    fireworks(80);
    playMilestoneSound('epic');
    showToast('🏆', 'LEGGENDA! 50 Aufgaben!', 'Don Due zieht den Hut.', '#8B7BC4', 5000);
  }

  // Tagesziel: 5 korrekte Aufgaben
  const DAILY_GOAL = 5;
  if (todayCorrect === DAILY_GOAL) {
    // Kleiner Verzögerung damit nicht gleichzeitig mit Session-Toast
    setTimeout(() => {
      confetti(50);
      playMilestoneSound('fanfare');
      showToast('🎯', 'Tagesziel erreicht!', `${DAILY_GOAL} korrekte Aufgaben heute — Bravissimo!`, 'var(--terra)', 4500);
    }, 600);
  }
}


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
   TAGESZIEL-BANNER
   ================================================================ */

/**
 * Renders the daily goal progress bar at the top of exercise pages.
 * @param {HTMLElement} container — where to inject it (before the exercise-progress div)
 */
function renderDailyGoalBanner(container) {
  const GOAL = 5;
  const act = Store.getActivityStats();
  const done = act.todayCorrect;
  const pct  = Math.min(Math.round(done / GOAL * 100), 100);
  const finished = done >= GOAL;

  const banner = document.createElement('div');
  banner.className = 'daily-goal-banner' + (finished ? ' daily-goal-banner--done' : '');
  banner.innerHTML = `
    <div class="daily-goal-header">
      <span class="daily-goal-label">
        ${finished ? '🎯 Tagesziel erreicht!' : `🎯 Tagesziel: ${done} / ${GOAL} korrekte Aufgaben`}
      </span>
      <span class="daily-goal-pct">${pct} %</span>
    </div>
    <div class="daily-goal-track">
      <div class="daily-goal-fill" style="width:${pct}%"></div>
    </div>`;

  container.appendChild(banner);

  // Expose update function globally so ExerciseSession can update it
  window._updateDailyGoalBanner = (newDone) => {
    const newPct = Math.min(Math.round(newDone / GOAL * 100), 100);
    const nowFinished = newDone >= GOAL;
    banner.className = 'daily-goal-banner' + (nowFinished ? ' daily-goal-banner--done' : '');
    banner.querySelector('.daily-goal-label').textContent =
      nowFinished ? '🎯 Tagesziel erreicht!' : `🎯 Tagesziel: ${newDone} / ${GOAL} korrekte Aufgaben`;
    banner.querySelector('.daily-goal-pct').textContent = newPct + ' %';
    banner.querySelector('.daily-goal-fill').style.width = newPct + '%';
  };
}


/* ================================================================
   EXERCISE RENDERERS
   ================================================================ */

const TYPE_LABELS = {
  MC:'Multiple Choice', LT:'Lückentext', FT:'Formtabelle',
  SO:'Sortieraufgabe', FK:'Fehlerkorrektur', DE:'Deutsch \u2192 Italienisch',
  IT:'Italienisch \u2192 Deutsch', KA:'Kategorisieren', KO:'Kontrast',
  ZO:'Zuordnung', EL:'Lückenwahl',
  SR:'Nachsprechen', ST:'Frei sprechen'
};

function renderExercise(ex, box, onDone) {
  box.innerHTML = '';
  const badge = document.createElement('div');
  badge.className = 'ex-type-badge';
  badge.textContent = TYPE_LABELS[ex.type] || ex.type;
  box.appendChild(badge);

  const fn = { MC:_renderMC, LT:_renderLT, FT:_renderFT, SO:_renderSO, FK:_renderFK, DE:_renderDE, IT:_renderIT, KA:_renderKA, KO:_renderKO, ZO:_renderZO, EL:_renderEL, SR:_renderSR, ST:_renderST };
  if (fn[ex.type]) fn[ex.type](ex, box, onDone);
  else { const p = document.createElement('p'); p.textContent = 'Unbekannter Typ: ' + ex.type; box.appendChild(p); }

  // Übersetzungsbutton — bei SO: sofort anzeigen (oben), sonst per Button
  if (ex.translation) {
    const tw = document.createElement('div');
    tw.style.marginTop = '0.8rem';
    const td = document.createElement('div');
    td.style.cssText = 'margin-top:0.4rem;padding:0.55rem 0.9rem;background:var(--paper-2);border:1.5px solid var(--line);border-radius:var(--r-sm);font-size:0.87rem;color:var(--ink-soft);font-style:italic;';
    td.textContent = ex.translation;
    if (ex.type !== 'SO') {
      const tb = document.createElement('button');
      tb.className = 'btn btn-ghost btn-sm';
      tb.textContent = '\ud83c\udde9\ud83c\uddea Deutschen Satz einblenden';
      td.style.display = 'none';
      tb.addEventListener('click', () => { td.style.display = 'block'; tb.disabled = true; });
      tw.appendChild(tb); tw.appendChild(td);
      box.appendChild(tw);
    }
    // SO: wird direkt in _renderSO behandelt (oben, hervorgehoben)
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

/* --- SO --- NEU: Übersetzung oben, hervorgehoben --- */
function _renderSO(ex, box, onDone) {
  _prompt(box, ex.prompt || 'Bringe die Wörter in die richtige Reihenfolge:');

  // Übersetzung sofort und hervorgehoben OBEN anzeigen
  if (ex.translation) {
    const transBox = document.createElement('div');
    transBox.className = 'so-translation-box';
    transBox.innerHTML = `<span class="so-translation-flag">🇩🇪</span><span class="so-translation-text">${escHtml(ex.translation)}</span>`;
    box.appendChild(transBox);
  }

  let shuffled = shuffle(ex.tokens);
  if (JSON.stringify(shuffled) === JSON.stringify(ex.solution)) {
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
    checkBtn.style.display = state.tgt.length > 0 ? 'inline-flex' : 'none';
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
      const correctText = ex.pairs[selectedLeft].it;
      const isCorrect = btn.textContent.trim() === correctText.trim();

      if (isCorrect) {
        matched.add(selectedLeft);
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

/* --- EL (Lückenwahl) --- */
function _renderEL(ex, box, onDone) {
  _prompt(box, ex.prompt || 'Wähle die richtigen Wörter für die Lücken:');

  const poolTokens = shuffle([
    ...ex.blanks.map(b => b.accept),
    ...ex.blanks.flatMap(b => b.distractors || [])
  ]);

  const slots = new Array(ex.blanks.length).fill(null);
  const available = new Array(poolTokens.length).fill(true);

  const sentenceDiv = document.createElement('div');
  sentenceDiv.className = 'el-sentence';

  const parts = [];
  let remaining = ex.sentence;
  const re = /\{(\d+)\}/g;
  let lastIdx = 0, m;
  while ((m = re.exec(ex.sentence)) !== null) {
    if (m.index > lastIdx) parts.push({ text: ex.sentence.slice(lastIdx, m.index) });
    parts.push({ slot: parseInt(m[1]) });
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < ex.sentence.length) parts.push({ text: ex.sentence.slice(lastIdx) });

  const slotEls = {};

  function buildSentenceDOM() {
    sentenceDiv.innerHTML = '';
    parts.forEach(part => {
      if (part.text !== undefined) {
        sentenceDiv.appendChild(document.createTextNode(part.text));
      } else {
        const slotEl = document.createElement('span');
        slotEl.className = 'el-slot' + (slots[part.slot] !== null ? ' el-slot-filled' : '');
        slotEl.dataset.slot = part.slot;
        if (slots[part.slot] !== null) {
          slotEl.textContent = slots[part.slot];
          slotEl.title = 'Klicken zum Entfernen';
          slotEl.addEventListener('click', () => {
            if (slotEl.classList.contains('el-locked')) return;
            const word = slots[part.slot];
            slots[part.slot] = null;
            for (let i = 0; i < poolTokens.length; i++) {
              if (!available[i] && poolTokens[i] === word) { available[i] = true; break; }
            }
            refreshAll();
          });
        } else {
          slotEl.textContent = '________';
          slotEl.title = 'Wähle ein Wort aus dem Pool';
        }
        slotEls[part.slot] = slotEl;
        sentenceDiv.appendChild(slotEl);
      }
    });
  }

  const poolDiv = document.createElement('div');
  poolDiv.className = 'el-pool';

  const poolLabel = document.createElement('div');
  poolLabel.className = 'so-zone-label';
  poolLabel.textContent = 'Verfügbare Wörter — klicken zum Einsetzen';

  const chipsDiv = document.createElement('div');
  chipsDiv.className = 'el-chips';

  function buildPoolDOM() {
    chipsDiv.innerHTML = '';
    poolTokens.forEach((word, i) => {
      if (!available[i]) return;
      const chip = document.createElement('span');
      chip.className = 'so-chip el-chip';
      chip.textContent = word;
      chip.addEventListener('click', () => {
        if (chip.classList.contains('el-locked')) return;
        const emptySlot = slots.indexOf(null);
        if (emptySlot === -1) return;
        slots[emptySlot] = word;
        available[i] = false;
        refreshAll();
      });
      chipsDiv.appendChild(chip);
    });
  }

  const checkBtn = document.createElement('button');
  checkBtn.className = 'btn btn-primary btn-sm';
  checkBtn.style.marginTop = '0.8rem';
  checkBtn.textContent = 'Prüfen';
  checkBtn.style.display = 'none';

  checkBtn.addEventListener('click', () => {
    const ok = ex.blanks.every((blank, i) => {
      const userVal = slots[i];
      if (!userVal) return false;
      return normalize(userVal) === normalize(blank.accept);
    });
    document.querySelectorAll('.el-slot, .el-chip').forEach(el => el.classList.add('el-locked'));
    ex.blanks.forEach((blank, i) => {
      const slotEl = slotEls[i];
      if (!slotEl) return;
      const correct = normalize(slots[i]) === normalize(blank.accept);
      slotEl.classList.add(correct ? 'el-slot-correct' : 'el-slot-wrong');
      if (!correct) slotEl.title = 'Richtig: ' + blank.accept;
    });
    checkBtn.disabled = true;
    showFeedback(box, ok, ex.explain || (!ok ? 'Richtig: ' + ex.blanks.map(b => b.accept).join(', ') : ''));
    onDone(ok ? 'correct' : 'wrong', true);
  });

  function refreshAll() {
    buildSentenceDOM();
    buildPoolDOM();
    const allFilled = slots.every(s => s !== null);
    checkBtn.style.display = allFilled ? 'inline-flex' : 'none';
  }

  poolDiv.appendChild(poolLabel);
  poolDiv.appendChild(chipsDiv);
  box.appendChild(sentenceDiv);
  box.appendChild(poolDiv);
  box.appendChild(checkBtn);
  addFeedbackArea(box);
  refreshAll();
}

/* --- helpers --- */
function _prompt(box, text) {
  const p = document.createElement('p'); p.className = 'ex-prompt'; p.textContent = text; box.appendChild(p);
}
function _chip(word, onClick) {
  const c = document.createElement('span'); c.className = 'so-chip'; c.textContent = word;
  c.addEventListener('click', onClick); return c;
}


/* --- SR (Speech Repeat) --- */
function _renderSR(ex, box, onDone) {
  _prompt(box, ex.prompt || 'Sprich diesen Satz laut nach:');

  const wrap = document.createElement('div'); wrap.className = 'speech-task';
  const itLine = document.createElement('div');
  itLine.className = 'speech-it'; itLine.textContent = ex.it;
  const deLine = document.createElement('div');
  deLine.className = 'speech-de'; deLine.textContent = ex.de;
  wrap.appendChild(itLine); wrap.appendChild(deLine); box.appendChild(wrap);

  const rec = createSpeechRecognizer('it-IT');
  if (!rec) { _speechFallbackSelfCheck(box, onDone); return; }

  const hint     = document.createElement('div'); hint.className = 'mic-hint';
  hint.textContent = '🎤 Tippe auf das Mikrofon und sprich den Satz.';
  const micBtn   = document.createElement('button');
  micBtn.className = 'mic-btn'; micBtn.type = 'button'; micBtn.innerHTML = '🎤';
  const transEl  = document.createElement('div'); transEl.className = 'speech-transcript';
  const checkBtn = document.createElement('button');
  checkBtn.className = 'btn btn-primary btn-sm'; checkBtn.textContent = 'Auswerten';
  checkBtn.style.cssText = 'margin-top:0.6rem;display:none;';
  const tokEl    = document.createElement('div'); tokEl.className = 'speech-tokens';

  box.appendChild(hint); box.appendChild(micBtn); box.appendChild(transEl);
  box.appendChild(checkBtn); box.appendChild(tokEl);
  addFeedbackArea(box);

  let finalT = '', recording = false;

  micBtn.addEventListener('click', () => {
    if (recording) { rec.stop(); return; }
    finalT = ''; transEl.textContent = ''; tokEl.innerHTML = '';
    checkBtn.style.display = 'none';
    try { rec.start(); } catch (e) { }
  });

  rec.addEventListener('start', () => {
    recording = true; micBtn.classList.add('recording');
    hint.textContent = '🔴 Aufnahme läuft … nochmal tippen zum Stoppen.';
  });

  rec.addEventListener('result', e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) finalT += t; else interim += t;
    }
    transEl.textContent = (finalT + ' ' + interim).trim();
  });

  rec.addEventListener('error', e => {
    recording = false; micBtn.classList.remove('recording');
    const msgs = {
      'not-allowed': '⚠️ Mikrofon-Zugriff verweigert. Bitte Erlaubnis erteilen.',
      'no-speech':   '🎤 Kein Geräusch erkannt. Nochmal versuchen?'
    };
    hint.textContent = msgs[e.error] || '⚠️ Fehler (' + e.error + '). Bitte erneut versuchen.';
  });

  rec.addEventListener('end', () => {
    recording = false; micBtn.classList.remove('recording');
    if (finalT.trim()) {
      hint.textContent = '🎤 Aufnahme beendet. Tippe auf "Auswerten".';
      checkBtn.style.display = 'inline-flex';
    } else {
      hint.textContent = '🎤 Nichts erkannt. Tippe erneut und sprich deutlich.';
    }
  });

  checkBtn.addEventListener('click', () => {
    const expected  = _tokenizeSpeech(ex.it);
    const spoken    = _tokenizeSpeech(finalT);
    const statuses  = _alignTokens(expected, spoken);
    const origWords = ex.it.split(/\s+/);

    tokEl.innerHTML = '';
    statuses.forEach((st, i) => {
      const s = document.createElement('span');
      s.className = 'speech-tok ' + (st === 'ok' ? 'tok-ok' : 'tok-bad');
      s.textContent = origWords[i] || expected[i] || '';
      tokEl.appendChild(s);
    });

    const hits  = statuses.filter(s => s === 'ok').length;
    const ratio = expected.length ? hits / expected.length : 0;
    const ok    = ratio >= 0.75;

    micBtn.disabled = true; checkBtn.style.display = 'none';
    hint.textContent =
      `Erkannt: ${hits} von ${expected.length} Wörtern (${Math.round(ratio * 100)} %).`;
    showFeedback(box, ok,
      ok ? 'Gut gesprochen!'
         : 'Sieh dir die rot markierten Wörter an und versuche es noch einmal.');
    onDone(ok ? 'correct' : 'wrong', true);
  });
}

/* --- ST (Speech Translate) --- */
function _renderST(ex, box, onDone) {
  _prompt(box, ex.prompt || 'Sprich diesen Satz auf Italienisch:');

  const wrap = document.createElement('div'); wrap.className = 'speech-task';
  const deLine = document.createElement('div');
  deLine.className = 'speech-de-prompt'; deLine.textContent = ex.de;
  wrap.appendChild(deLine); box.appendChild(wrap);

  const rec  = createSpeechRecognizer('it-IT');
  const hint = document.createElement('div'); hint.className = 'mic-hint';
  box.appendChild(hint);

  let micBtn = null, transEl = null, finalT = '', recording = false;

  if (rec) {
    hint.textContent = '🎤 Tippe auf das Mikrofon und sprich auf Italienisch.';
    micBtn  = document.createElement('button');
    micBtn.className = 'mic-btn'; micBtn.type = 'button'; micBtn.innerHTML = '🎤';
    transEl = document.createElement('div'); transEl.className = 'speech-transcript';
    box.appendChild(micBtn); box.appendChild(transEl);
  } else {
    hint.textContent =
      'ℹ️ Spracherkennung nicht verfügbar. Sprich laut, ' +
      'blende dann die Musterlösung ein und bewerte dich.';
  }

  const helpBtn = document.createElement('button');
  helpBtn.className = 'btn btn-cielo btn-sm'; helpBtn.style.marginTop = '0.8rem';
  helpBtn.textContent = '💡 Hilfe: Musterlösung anzeigen';

  const revDiv = document.createElement('div'); revDiv.className = 'self-reveal';
  revDiv.innerHTML =
    '<div class="self-reveal-label">Mögliche Lösung</div>' +
    '<div class="self-solution">' +
      ex.solutions.map(s => escHtml(s)).join('<br>') +
    '</div>' +
    (ex.note ? '<div class="self-note">' + escHtml(ex.note) + '</div>' : '');

  const rateRow = document.createElement('div');
  rateRow.className = 'self-rate-row'; rateRow.style.display = 'none';
  [['✅ Richtig','self-ok','btn-oliva'],
   ['〜 Fast','self-mid','btn-sun'],
   ['✗ Falsch','self-no','btn-ghost']]
    .forEach(([label, status, cls]) => {
      const b = document.createElement('button');
      b.className = `btn ${cls} btn-sm`; b.textContent = label;
      b.addEventListener('click', () => {
        if (micBtn) micBtn.disabled = true;
        helpBtn.disabled = true;
        rateRow.querySelectorAll('button').forEach(x => x.disabled = true);
        onDone(status, false);
      });
      rateRow.appendChild(b);
    });

  box.appendChild(helpBtn); box.appendChild(revDiv); box.appendChild(rateRow);

  const showRating = () => { rateRow.style.display = 'flex'; };
  helpBtn.addEventListener('click', () => { revDiv.classList.add('open'); showRating(); });

  if (rec) {
    micBtn.addEventListener('click', () => {
      if (recording) { rec.stop(); return; }
      finalT = ''; transEl.textContent = '';
      try { rec.start(); } catch (e) { }
    });
    rec.addEventListener('start', () => {
      recording = true; micBtn.classList.add('recording');
      hint.textContent = '🔴 Aufnahme läuft … nochmal tippen zum Stoppen.';
    });
    rec.addEventListener('result', e => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalT += t; else interim += t;
      }
      transEl.textContent = (finalT + ' ' + interim).trim();
    });
    rec.addEventListener('error', e => {
      recording = false; micBtn.classList.remove('recording');
      const msgs = {
        'not-allowed': '⚠️ Mikrofon-Zugriff verweigert.',
        'no-speech':   '🎤 Kein Geräusch erkannt. Nochmal versuchen?'
      };
      hint.textContent =
        msgs[e.error] || '⚠️ Fehler (' + e.error + '). Erneut versuchen oder Hilfe nutzen.';
    });
    rec.addEventListener('end', () => {
      recording = false; micBtn.classList.remove('recording');
      if (finalT.trim()) {
        hint.textContent = 'Erkannt. Vergleiche mit der Musterlösung und bewerte dich.';
        showRating();
      } else {
        hint.textContent = '🎤 Nichts erkannt. Versuche es erneut.';
      }
    });
  }
}


/* ================================================================
   EXERCISE SESSION
   ================================================================ */

class ExerciseSession {
  constructor(moduleData, fillEl, textEl, boxEl, navEl) {
    this.mod    = moduleData;
    this.fillEl = fillEl;
    this.textEl = textEl;
    this.boxEl  = boxEl;
    this.navEl  = navEl;
    this.index  = 0;
    this.runCorrect   = 0;
    this.runGraded    = 0;
    this.selfScoreSum = 0;
    this.selfCount    = 0;
    this.counted      = new Set();
    // Milestone-Tracking: wie viele Aufgaben in dieser Session beantwortet
    this.sessionAnswered = 0;
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

    if (!this._sequenceBuilt) {
      this._sequenceBuilt = true;
      const exs = this.mod.exercises;

      const DIFFICULTY = {
        SO: 0, ZO: 0, EL: 0, SR: 0,
        MC: 1, MCL: 1, LT: 1, FT: 1, ST: 1,
        FK: 2, KA: 2, KO: 2, DE: 2, IT: 2,
      };

      function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }

      const pools = [[], [], []];
      exs.forEach(ex => pools[DIFFICULTY[ex.type] ?? 1].push(ex));
      pools.forEach(p => shuffle(p));

      const MIN_GAP = 4;
      const result = [];
      const lastSeen = {};

      const remaining = [...pools[0], ...pools[1], ...pools[2]];
      const diffOf = ex => DIFFICULTY[ex.type] ?? 1;

      while (remaining.length > 0) {
        const pos = result.length;

        const eligible = remaining.filter(ex => {
          const last = lastSeen[ex.type];
          return last === undefined || (pos - last) >= MIN_GAP;
        });

        let pool;
        if (eligible.length > 0) {
          pool = eligible;
        } else {
          const maxGap = Math.max(...remaining.map(ex => {
            const last = lastSeen[ex.type];
            return last === undefined ? Infinity : pos - last;
          }));
          pool = remaining.filter(ex => {
            const last = lastSeen[ex.type];
            const gap = last === undefined ? Infinity : pos - last;
            return gap === maxGap;
          });
        }
        const minDiff = Math.min(...pool.map(diffOf));
        const best = pool.filter(ex => diffOf(ex) === minDiff);
        const chosen = best[Math.floor(Math.random() * best.length)];

        result.push(chosen);
        lastSeen[chosen.type] = pos;
        remaining.splice(remaining.indexOf(chosen), 1);
      }

      this._exercises = result;
    }

    this.mod.exercises = this._exercises || this.mod.exercises;
    this.index = Math.min(mState.lastIndex || 0, this.mod.exercises.length - 1);
    this._render();
  }

  _updateProgressText() {
    const act = Store.getActivityStats();
    const n = act.todayCorrect;
    this.textEl.textContent = n === 1
      ? '1 Aufgabe heute gelöst'
      : `${n} Aufgaben heute gelöst`;
  }

  _render() {
    if (this.index >= this.mod.exercises.length) { this.finish(); return; }
    const ex    = this.mod.exercises[this.index];
    const total = this.mod.exercises.length;

    this._updateProgressText();
    this.fillEl.style.width = `${(this.index / total) * 100}%`;
    this.weiterBtn.disabled = true;
    this.weiterBtn.textContent = this.index === total - 1 ? 'Ergebnis \u2192' : 'Weiter \u2192';
    this.zurueckBtn.disabled = this.index === 0;

    renderExercise(ex, this.boxEl, (status, isAutoGraded) => {
      Store.recordAnswer(this.mod.id, ex.id, status);
      Store.setLastIndex(this.mod.id, this.index);

      if (!this.counted.has(this.index)) {
        this.counted.add(this.index);
        this.sessionAnswered++;

        if (isAutoGraded) {
          this.runGraded++;
          if (status === 'correct') this.runCorrect++;
        } else {
          this.selfCount++;
          const selfVals = { 'self-ok': 1, 'self-mid': 0.5, 'self-no': 0, 'revealed': 0.4 };
          this.selfScoreSum += selfVals[status] ?? 0;
        }

        // Anzeige sofort aktualisieren (nach Store.recordAnswer bereits gespeichert)
        this._updateProgressText();

        // Milestone-Check
        const act = Store.getActivityStats();
        checkMilestones(this.sessionAnswered, act.todayTotal, act.todayCorrect);

        // Daily goal banner aktualisieren
        if (window._updateDailyGoalBanner) {
          window._updateDailyGoalBanner(act.todayCorrect);
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
    this._updateProgressText();
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

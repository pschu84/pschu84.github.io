/* jshint esversion: 11 */
'use strict';
/* ================================================================
   GRUNDTRAINING-GENERATOREN
   Jeder Generator erzeugt unbegrenzt Aufgaben aus Wortlisten.
   Rückgabe eines Generators (ein "Spec"):
     { key, prompt, text, accept:[...], distractors:[...], explain,
       mode?: 'mc'|'lt' }   text enthält genau eine Lücke: ___
   Die Engine in shared.js macht daraus MC- oder Tipp-Aufgaben.
   ================================================================ */
const GEN = (() => {
  const R = {
    pick: a => a[Math.floor(Math.random() * a.length)],
    chance: p => Math.random() < p,
  };
  const reg = {};

  /* ---------- Personen & Subjekte ---------- */
  const PRON = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
  const PRON_DE = ['ich', 'du', 'er/sie', 'wir', 'ihr', 'sie (Pl.)'];
  // [Anzeige, Person 0-5, Genus/Numerus für Partizip-Angleichung]
  const SUBJ = [
    ['io', 0], ['tu', 1], ['Marco', 2, 'ms'], ['Anna', 2, 'fs'], ['lui', 2, 'ms'], ['lei', 2, 'fs'],
    ['noi', 3], ['Anna e io', 3], ['voi', 4], ['tu e Luca', 4],
    ['loro', 5], ['i ragazzi', 5, 'mp'], ['Marco e Sara', 5, 'mp'], ['le ragazze', 5, 'fp'],
  ];
  // Subjekte mit eindeutigem Genus (für essere-Angleichung)
  const SUBJ_G = [
    ['io (Marco)', 0, 'ms'], ['io (Giulia)', 0, 'fs'], ['tu (Luca)', 1, 'ms'], ['tu (Sara)', 1, 'fs'],
    ['Marco', 2, 'ms'], ['Anna', 2, 'fs'], ['mio padre', 2, 'ms'], ['mia sorella', 2, 'fs'],
    ['noi (Paolo e Luca)', 3, 'mp'], ['noi (Anna e Giulia)', 3, 'fp'],
    ['voi (ragazzi)', 4, 'mp'], ['voi (ragazze)', 4, 'fp'],
    ['i bambini', 5, 'mp'], ['le mie amiche', 5, 'fp'], ['Marco e Sara', 5, 'mp'],
  ];
  const GN_END = { ms: 'o', fs: 'a', mp: 'i', fp: 'e' };

  /* ---------- Verben ---------- */
  // c = Ergänzungen, pp = Partizip (falls unregelmäßig), aux 'e' = essere
  const V = {
    are: [
      ['parlare', 'sprechen', ['italiano', 'con Marco', 'al telefono']],
      ['abitare', 'wohnen', ['a Roma', 'in centro', 'vicino alla scuola']],
      ['lavorare', 'arbeiten', ['in un ufficio', 'in banca', 'molto']],
      ['ascoltare', 'hören', ['la radio', 'la musica']],
      ['guardare', 'anschauen', ['la TV', 'un film']],
      ['comprare', 'kaufen', ['il pane', 'una giacca nuova']],
      ['cantare', 'singen', ['una canzone', 'nel coro']],
      ['ballare', 'tanzen', ['la salsa', 'in discoteca']],
      ['aspettare', 'warten (auf)', ["l'autobus", 'gli amici']],
      ['chiamare', 'anrufen', ['la nonna', 'un taxi']],
      ['portare', 'bringen', ['un regalo', 'il vino']],
      ['trovare', 'finden', ['le chiavi', 'un lavoro']],
      ['imparare', 'lernen', ['il tedesco', 'una poesia']],
      ['preparare', 'zubereiten', ['la cena', 'una torta']],
      ['cucinare', 'kochen', ['la pasta', 'per gli amici']],
      ['nuotare', 'schwimmen', ['in piscina', 'nel lago']],
      ['visitare', 'besichtigen', ['un museo', 'Firenze']],
      ['prenotare', 'reservieren', ['un tavolo', 'una camera']],
      ['lavare', 'waschen', ['la macchina', 'i piatti']],
      ['arrivare', 'ankommen', ['alle otto', 'in ritardo'], null, 'e'],
      ['tornare', 'zurückkommen', ['a casa', 'tardi'], null, 'e'],
      ['entrare', 'hineingehen', ['in classe', 'nel negozio'], null, 'e'],
    ],
    ere: [
      ['vedere', 'sehen', ['un film', 'gli amici'], 'visto'],
      ['prendere', 'nehmen', ['il treno', 'un caffè'], 'preso'],
      ['leggere', 'lesen', ['un libro', 'il giornale'], 'letto'],
      ['scrivere', 'schreiben', ['una mail', 'una lettera'], 'scritto'],
      ['vivere', 'leben', ['a Milano', 'in campagna'], 'vissuto'],
      ['vendere', 'verkaufen', ['la bici', 'la macchina vecchia']],
      ['chiedere', 'fragen (nach)', ["un'informazione", 'il conto'], 'chiesto'],
      ['ripetere', 'wiederholen', ['la frase', 'la domanda']],
      ['rispondere', 'antworten', ['alla mail', 'al telefono'], 'risposto'],
      ['mettere', 'legen, stellen', ['il latte nel frigo', 'la giacca'], 'messo'],
      ['chiudere', 'schließen', ['la porta', 'la finestra'], 'chiuso'],
      ['ricevere', 'bekommen', ['una lettera', 'un pacco']],
      ['perdere', 'verlieren', ['le chiavi', 'il treno'], 'perso'],
      ['conoscere', 'kennen', ['Anna', 'la città'], 'conosciuto'],
    ],
    ire: [
      ['dormire', 'schlafen', ['otto ore', 'fino a tardi']],
      ['partire', 'abfahren', ['per Roma', 'alle sei'], null, 'e'],
      ['aprire', 'öffnen', ['la finestra', 'la porta'], 'aperto'],
      ['sentire', 'hören', ['un rumore', 'la musica']],
      ['offrire', 'spendieren', ['un caffè', 'da bere'], 'offerto'],
      ['seguire', 'folgen, besuchen', ['la lezione', 'un corso']],
      ['servire', 'servieren', ['la cena', 'il caffè']],
    ],
    isc: [
      ['finire', 'beenden', ['i compiti', 'il lavoro']],
      ['capire', 'verstehen', ['la domanda', 'tutto']],
      ['preferire', 'vorziehen', ['il tè', 'la montagna']],
      ['pulire', 'putzen', ['la cucina', 'la casa']],
      ['spedire', 'schicken', ['un pacco', 'una cartolina']],
    ],
    // -care/-gare, -ciare/-giare, -iare (Schreibbesonderheiten)
    spell: [
      ['cercare', 'suchen', ['le chiavi', 'un lavoro']],
      ['pagare', 'bezahlen', ['il conto', 'con la carta']],
      ['giocare', 'spielen', ['a calcio', 'a carte']],
      ['dimenticare', 'vergessen', ["l'ombrello", 'il nome']],
      ['spiegare', 'erklären', ['la regola', 'il problema']],
      ['studiare', 'lernen', ['matematica', 'in biblioteca']],
      ['mangiare', 'essen', ['la pizza', 'in mensa']],
      ['cominciare', 'anfangen', ['il corso', 'a lavorare']],
      ['viaggiare', 'reisen', ['in treno', 'molto']],
      ['lasciare', 'lassen', ['un messaggio', 'la borsa in macchina']],
    ],
  };
  const mk = (row, cls) => ({ inf: row[0], de: row[1], c: row[2], pp: row[3] || null, aux: row[4] || 'a', cls });
  const VERBS = {};
  Object.keys(V).forEach(k => { VERBS[k] = V[k].map(r => mk(r, k)); });
  const ALL_REG = [...VERBS.are, ...VERBS.ere, ...VERBS.ire];

  // Stamm ohne -are/-ere/-ire
  const stem = v => v.inf.slice(0, -3);
  const conj = v => v.inf.slice(-3);          // 'are' | 'ere' | 'ire'
  // i-Stamm: studi-, mangi-, cominci- → vor Endung mit i ein i weniger
  const joinI = (st, end) => (st.endsWith('i') && end.startsWith('i')) ? st + end.slice(1) : st + end;
  // -care/-gare: h vor i und e
  const hard = (st, end) => (/[cg]$/.test(st) && /^[ie]/.test(end)) ? st + 'h' + end : st + end;

  function presente(v, p) {
    const st = stem(v);
    if (v.cls === 'isc') return st + ['isco', 'isci', 'isce', 'iamo', 'ite', 'iscono'][p];
    const E = { are: ['o', 'i', 'a', 'iamo', 'ate', 'ano'], ere: ['o', 'i', 'e', 'iamo', 'ete', 'ono'], ire: ['o', 'i', 'e', 'iamo', 'ite', 'ono'] }[conj(v)];
    const end = E[p];
    if (conj(v) === 'are') return hard(st, '') === st && /[cg]$/.test(st) ? hard(st, end) : joinI(st, end);
    return st + end;
  }
  const FUT_E = ['ò', 'ai', 'à', 'emo', 'ete', 'anno'];
  const FUT_IRR = {
    essere: 'sar', avere: 'avr', andare: 'andr', fare: 'far', venire: 'verr', potere: 'potr', dovere: 'dovr',
    vedere: 'vedr', volere: 'vorr', stare: 'star', dare: 'dar', bere: 'berr', sapere: 'sapr', vivere: 'vivr',
    rimanere: 'rimarr', tenere: 'terr',
  };
  function futuroStem(v) {
    if (FUT_IRR[v.inf]) return FUT_IRR[v.inf];
    const st = stem(v), c = conj(v);
    if (c === 'ire') return st + 'ir';
    if (c === 'ere') return st + 'er';
    if (/[cg]i$/.test(st)) return st.slice(0, -1) + 'er';   // comincerò, mangerò
    if (/[cg]$/.test(st)) return st + 'her';                 // cercherò, pagherò
    return st + 'er';                                          // parlerò
  }
  const futuro = (v, p) => futuroStem(v) + FUT_E[p];
  const IMPF_IRR = { essere: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'], fare: 'face', bere: 'beve', dire: 'dice' };
  function imperfetto(v, p) {
    const irr = IMPF_IRR[v.inf];
    if (Array.isArray(irr)) return irr[p];
    const base = irr || v.inf.slice(0, -2);
    return base + ['vo', 'vi', 'va', 'vamo', 'vate', 'vano'][p];
  }
  const GER_IRR = { fare: 'facendo', bere: 'bevendo', dire: 'dicendo' };
  const gerundio = v => GER_IRR[v.inf] || stem(v) + (conj(v) === 'are' ? 'ando' : 'endo');
  const partReg = v => stem(v) + { are: 'ato', ere: 'uto', ire: 'ito' }[conj(v)];
  const part = v => v.pp || partReg(v);

  const AVERE = ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'];
  const ESSERE = ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'];
  const STARE = ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'];

  const others = (fn, p) => [0, 1, 2, 3, 4, 5].filter(i => i !== p).map(i => fn(i));
  const uniq = arr => [...new Set(arr)];
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  /* ---------- Substantive ---------- */
  // [it, Genus, Plural, Deutsch, Anlaut: c=Konsonant, v=Vokal, s=s+Kons./z/ps/gn]
  const N = [
    ['libro', 'm', 'libri', 'Buch', 'c'], ['tavolo', 'm', 'tavoli', 'Tisch', 'c'], ['treno', 'm', 'treni', 'Zug', 'c'],
    ['gatto', 'm', 'gatti', 'Katze', 'c'], ['cane', 'm', 'cani', 'Hund', 'c'], ['fiore', 'm', 'fiori', 'Blume', 'c'],
    ['giornale', 'm', 'giornali', 'Zeitung', 'c'], ['ristorante', 'm', 'ristoranti', 'Restaurant', 'c'],
    ['telefono', 'm', 'telefoni', 'Telefon', 'c'], ['vino', 'm', 'vini', 'Wein', 'c'], ['bicchiere', 'm', 'bicchieri', 'Glas', 'c'],
    ['piatto', 'm', 'piatti', 'Teller', 'c'], ['ragazzo', 'm', 'ragazzi', 'Junge', 'c'], ['letto', 'm', 'letti', 'Bett', 'c'],
    ['giardino', 'm', 'giardini', 'Garten', 'c'], ['fratello', 'm', 'fratelli', 'Bruder', 'c'], ['panino', 'm', 'panini', 'Brötchen', 'c'],
    ['mese', 'm', 'mesi', 'Monat', 'c'], ['quaderno', 'm', 'quaderni', 'Heft', 'c'], ['cappello', 'm', 'cappelli', 'Hut', 'c'],
    ['casa', 'f', 'case', 'Haus', 'c'], ['ragazza', 'f', 'ragazze', 'Mädchen', 'c'], ['penna', 'f', 'penne', 'Stift', 'c'],
    ['finestra', 'f', 'finestre', 'Fenster', 'c'], ['macchina', 'f', 'macchine', 'Auto', 'c'], ['porta', 'f', 'porte', 'Tür', 'c'],
    ['sedia', 'f', 'sedie', 'Stuhl', 'c'], ['mela', 'f', 'mele', 'Apfel', 'c'], ['chiave', 'f', 'chiavi', 'Schlüssel', 'c'],
    ['notte', 'f', 'notti', 'Nacht', 'c'], ['lezione', 'f', 'lezioni', 'Unterrichtsstunde', 'c'], ['stazione', 'f', 'stazioni', 'Bahnhof', 'c'],
    ['borsa', 'f', 'borse', 'Tasche', 'c'], ['camera', 'f', 'camere', 'Zimmer', 'c'], ['scuola', 'f', 'scuole', 'Schule', 'c'],
    ['sorella', 'f', 'sorelle', 'Schwester', 'c'], ['pizza', 'f', 'pizze', 'Pizza', 'c'], ['strada', 'f', 'strade', 'Straße', 'c'],
    ['albero', 'm', 'alberi', 'Baum', 'v'], ['aereo', 'm', 'aerei', 'Flugzeug', 'v'], ['ospedale', 'm', 'ospedali', 'Krankenhaus', 'v'],
    ['anno', 'm', 'anni', 'Jahr', 'v'], ['indirizzo', 'm', 'indirizzi', 'Adresse', 'v'], ['ombrello', 'm', 'ombrelli', 'Regenschirm', 'v'],
    ['ufficio', 'm', 'uffici', 'Büro', 'v'], ['amico', 'm', 'amici', 'Freund', 'v'], ['orologio', 'm', 'orologi', 'Uhr', 'v'],
    ['isola', 'f', 'isole', 'Insel', 'v'], ['ora', 'f', 'ore', 'Stunde', 'v'], ['arancia', 'f', 'arance', 'Orange', 'v'],
    ['aula', 'f', 'aule', 'Klassenraum', 'v'], ['estate', 'f', 'estati', 'Sommer', 'v'], ['idea', 'f', 'idee', 'Idee', 'v'],
    ['amica', 'f', 'amiche', 'Freundin', 'v'],
    ['studente', 'm', 'studenti', 'Student', 's'], ['zaino', 'm', 'zaini', 'Rucksack', 's'], ['specchio', 'm', 'specchi', 'Spiegel', 's'],
    ['spettacolo', 'm', 'spettacoli', 'Vorstellung', 's'], ['zio', 'm', 'zii', 'Onkel', 's'], ['psicologo', 'm', 'psicologi', 'Psychologe', 's'],
    ['stivale', 'm', 'stivali', 'Stiefel', 's'], ['sbaglio', 'm', 'sbagli', 'Fehler', 's'], ['scontrino', 'm', 'scontrini', 'Kassenbon', 's'],
  ].map(r => ({ it: r[0], g: r[1], pl: r[2], de: r[3], a: r[4] }));
  // regelmäßig im Plural: -o→-i, -a→-e, -e→-i (ohne -co/-go/-ca/-ga/-io/-cia/-gia)
  const regPlural = n => /(o|a|e)$/.test(n.it) && !/(co|go|ca|ga|io|cia|gia)$/.test(n.it) &&
    n.pl === n.it.slice(0, -1) + (n.it.endsWith('a') ? 'e' : 'i');

  function artDet(n, plural) {
    if (n.g === 'f') return plural ? 'le' : (n.a === 'v' ? "l'" : 'la');
    if (n.a === 'c') return plural ? 'i' : 'il';
    if (n.a === 'v') return plural ? 'gli' : "l'";
    return plural ? 'gli' : 'lo';
  }
  function artInd(n) {
    if (n.g === 'f') return n.a === 'v' ? "un'" : 'una';
    return n.a === 's' ? 'uno' : 'un';
  }
  const withArt = (art, word) => art.endsWith("'") ? art + word : art + ' ' + word;

  /* ---------- Spec-Bausteine ---------- */
  // MC-Ablenker: aus Kandidaten, ohne die richtige(n) Antwort(en)
  function spec(o) {
    const acc = Array.isArray(o.accept) ? o.accept : [o.accept];
    const low = acc.map(a => a.toLowerCase());
    o.accept = acc;
    o.distractors = uniq((o.distractors || []).filter(d => d && !low.includes(d.toLowerCase())));
    return o;
  }

  // Satzbau-Daten für Sortier-Aufgaben: lead = fester Satzanfang, words = Reihenfolge, '@' = Lösung
  const SO = (lead, pre, post) => ({ lead: lead || null,
    words: [...(pre ? pre.split(' ') : []), '@', ...(post ? post.replace(/[.!?]$/, '').split(' ') : [])].filter(Boolean) });
  // Formtabelle
  const TAB = (prompt, rows) => ({ prompt, rows: rows.map(([label, acc]) => ({ label, accept: Array.isArray(acc) ? acc : [acc] })) });

  const shuf = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  // Zuordnung mit EINEM Verb: man muss die Person erkennen, nicht den Wortstamm
  const zoConj = (title, fn) => ({ prompt: `Ordne zu: ${title}`, pairs: shuf([0, 1, 2, 3, 4, 5]).slice(0, 5).map(p => ({ de: PRON[p] + ' …', it: fn(p) })) });

  function register(id, def) { reg[id] = def; }
  function get(id) { return reg[id] || null; }

  /* ================================================================
     M20  Präsens regelmäßig
     ================================================================ */
  function presTask(pool) {
    const v = R.pick(pool), s = R.pick(SUBJ), p = s[1];
    const form = presente(v, p);
    const wrong = others(i => presente(v, i), p);
    if (v.cls === 'isc') wrong.push(stem(v) + ['o', 'i', 'e', 'iamo', 'ite', 'ono'][p]);
    const c = R.pick(v.c);
    return spec({
      key: 'pres-' + v.inf + p, cue: v.inf,
      prompt: `Setze ${v.inf} (${v.de}) ins Präsens:`,
      text: `${cap(s[0])} ___ ${c}.`, so: SO(null, s[0], c),
      accept: form, distractors: wrong,
      explain: `${v.inf} → ${PRON[p]}: ${form}` + (v.cls === 'isc' ? ' (Verb mit -isc-)' : ''),
    });
  }
  const presPool = level => level === 0 ? ALL_REG : [...VERBS.isc, ...VERBS.spell];
  const conjTable = (v, fn, title) => TAB(`${title}: ${v.inf} (${v.de})`, [0, 1, 2, 3, 4, 5].map(p => [PRON[p], fn(v, p)]));
  register('m20', {
    levels: ['Grundregel: -are, -ere, -ire', '+ -isc- und -care/-gare/-iare'],
    table(level) { return conjTable(R.pick(presPool(level)), presente, 'Konjugiere im Präsens'); },
    zo(level) { const v = R.pick(presPool(level)); return zoConj(`${v.inf} (${v.de}) im Präsens`, p => presente(v, p)); },
    make(level) {
      if (level === 0) return presTask(ALL_REG);
      return presTask(R.chance(0.5) ? VERBS.isc : VERBS.spell);
    },
  });

  /* ================================================================
     M01  Passato prossimo
     ================================================================ */
  const TIME_PAST = ['Ieri', 'Ieri sera', 'Sabato scorso', 'Stamattina', "L'anno scorso", 'Due giorni fa'];
  const PP_IRR_AVERE = [
    ['fare', 'machen', 'fatto', ['i compiti', 'una torta']], ['prendere', 'nehmen', 'preso', ['il treno', 'un caffè']],
    ['vedere', 'sehen', 'visto', ['un film', 'Marco']], ['scrivere', 'schreiben', 'scritto', ['una mail', 'una lettera']],
    ['leggere', 'lesen', 'letto', ['un libro', 'il giornale']], ['bere', 'trinken', 'bevuto', ['un caffè', "dell'acqua"]],
    ['aprire', 'öffnen', 'aperto', ['la finestra', 'la porta']], ['chiudere', 'schließen', 'chiuso', ['la porta', 'il negozio']],
    ['dire', 'sagen', 'detto', ['la verità', 'una bugia']], ['mettere', 'legen', 'messo', ['la giacca', 'il latte nel frigo']],
    ['perdere', 'verlieren', 'perso', ['le chiavi', 'il treno']], ['chiedere', 'fragen', 'chiesto', ['il conto', "un'informazione"]],
  ];
  const PP_ESS = [
    ['andare', 'gehen', 'andat', ['al cinema', 'a Roma', 'in Italia']], ['arrivare', 'ankommen', 'arrivat', ['in ritardo', 'alle otto']],
    ['partire', 'abfahren', 'partit', ['per Milano', 'alle sei']], ['tornare', 'zurückkommen', 'tornat', ['a casa', 'tardi']],
    ['entrare', 'hineingehen', 'entrat', ['in classe', 'nel negozio']], ['uscire', 'ausgehen', 'uscit', ['con gli amici', 'presto']],
    ['restare', 'bleiben', 'restat', ['a casa', 'in ufficio']], ['cadere', 'fallen', 'cadut', ['dalla bici', 'per strada']],
  ];
  const PP_ESS_IRR = [
    ['venire', 'kommen', 'venut', ['alla festa', 'in treno']], ['stare', 'sein, bleiben', 'stat', ['a Roma', 'male']],
    ['rimanere', 'bleiben', 'rimast', ['a casa', 'a Napoli']],
  ];
  function ppAvere(v, p, compl, inf, de) {
    const pt = typeof v === 'string' ? v : part(v);
    const form = AVERE[p] + ' ' + pt;
    const wrong = [ESSERE[p] + ' ' + pt, AVERE[(p + 1) % 6] + ' ' + pt];
    if (typeof v !== 'string' && v.pp) wrong.push(AVERE[p] + ' ' + partReg(v));
    if (typeof v === 'string') wrong.push(AVERE[p] + ' ' + inf.slice(0, -3) + (inf.endsWith('are') ? 'ato' : inf.endsWith('ire') ? 'ito' : 'uto'));
    else wrong.push(AVERE[p] + ' ' + stem(v) + 'ito');
    return { form, wrong };
  }
  register('m01', {
    levels: ['Grundregel: avere + -ato/-uto/-ito', '+ Verben mit essere', '+ unregelmäßige Partizipien'],
    table(level) {
      if (level >= 1 && R.chance(0.5)) {
        const e = R.pick(level >= 2 ? [...PP_ESS, ...PP_ESS_IRR] : PP_ESS);
        return TAB(`Passato prossimo: ${e[0]} (${e[1]}). Bei io/tu/lui passt -o oder -a, im Plural -i oder -e.`,
          [0, 1, 2, 3, 4, 5].map(p => [PRON[p], p < 3 ? [ESSERE[p] + ' ' + e[2] + 'o', ESSERE[p] + ' ' + e[2] + 'a'] : [ESSERE[p] + ' ' + e[2] + 'i', ESSERE[p] + ' ' + e[2] + 'e']]));
      }
      if (level >= 2 && R.chance(0.5)) {
        const e = R.pick(PP_IRR_AVERE);
        return TAB(`Passato prossimo: ${e[0]} (${e[1]})`, [0, 1, 2, 3, 4, 5].map(p => [PRON[p], AVERE[p] + ' ' + e[2]]));
      }
      const v = R.pick([...VERBS.are, ...VERBS.ere, ...VERBS.ire, ...VERBS.isc].filter(x => !x.pp && x.aux === 'a'));
      return TAB(`Passato prossimo: ${v.inf} (${v.de})`, [0, 1, 2, 3, 4, 5].map(p => [PRON[p], AVERE[p] + ' ' + part(v)]));
    },
    zo(level) {
      if (level >= 2 && R.chance(0.5)) { const e = R.pick(PP_IRR_AVERE); return zoConj(`${e[0]} (${e[1]}) im Passato prossimo`, p => AVERE[p] + ' ' + e[2]); }
      const v = R.pick([...VERBS.are, ...VERBS.ere, ...VERBS.ire, ...VERBS.isc].filter(x => !x.pp && x.aux === 'a'));
      return zoConj(`${v.inf} (${v.de}) im Passato prossimo`, p => AVERE[p] + ' ' + part(v));
    },
    make(level) {
      const t = R.pick(TIME_PAST);
      const r = Math.random();
      if (level >= 2 && r < 0.4) {
        if (R.chance(0.3)) {
          const e = R.pick(PP_ESS_IRR), s = R.pick(SUBJ_G), p = s[1];
          const form = ESSERE[p] + ' ' + e[2] + GN_END[s[2]];
          return spec({ key: 'ppei-' + e[0] + s[0], prompt: `Passato prossimo von ${e[0]} (${e[1]}):`,
            ...(() => { const c = R.pick(e[3]); return { text: `${t} ${s[0]} ___ ${c}.`, so: SO(t, s[0].replace(/ \(.*\)/, ''), c) }; })(), accept: form,
            distractors: [AVERE[p] + ' ' + e[2] + 'o', ESSERE[p] + ' ' + e[0].slice(0, -3) + (e[0].endsWith('ere') ? 'ut' : 'at') + GN_END[s[2]], ESSERE[p] + ' ' + e[2] + (GN_END[s[2]] === 'o' ? 'a' : 'o')],
            explain: `${e[0]} bildet das Passato mit essere, Partizip unregelmäßig: ${e[2]}o. Angleichung an das Subjekt: ${form}.` });
        }
        const e = R.pick(PP_IRR_AVERE), s = R.pick(SUBJ), p = s[1];
        const { form, wrong } = ppAvere(e[2], p, null, e[0]);
        return spec({ key: 'ppi-' + e[0] + p, prompt: `Passato prossimo von ${e[0]} (${e[1]}):`,
          ...(() => { const c = R.pick(e[3]); return { text: `${t} ${s[0]} ___ ${c}.`, so: SO(t, s[0].replace(/ \(.*\)/, ''), c) }; })(), accept: form, distractors: wrong,
          explain: `${e[0]} hat ein unregelmäßiges Partizip: ${e[2]}. → ${form}` });
      }
      if (level >= 1 && r < 0.75) {
        const e = R.pick(PP_ESS), s = R.pick(SUBJ_G), p = s[1];
        const end = GN_END[s[2]];
        const form = ESSERE[p] + ' ' + e[2] + end;
        const wrongEnd = ['o', 'a', 'i', 'e'].filter(x => x !== end);
        return spec({ key: 'ppe-' + e[0] + s[0], prompt: `Passato prossimo von ${e[0]} (${e[1]}), achte auf die Endung:`,
          ...(() => { const c = R.pick(e[3]); return { text: `${t} ${s[0]} ___ ${c}.`, so: SO(t, s[0].replace(/ \(.*\)/, ''), c) }; })(), accept: form,
          distractors: [AVERE[p] + ' ' + e[2] + 'o', ...wrongEnd.map(x => ESSERE[p] + ' ' + e[2] + x)],
          explain: `${e[0]} → Hilfsverb essere. Das Partizip passt sich dem Subjekt an (${s[2] === 'ms' ? 'm. Sg. -o' : s[2] === 'fs' ? 'f. Sg. -a' : s[2] === 'mp' ? 'm. Pl. -i' : 'f. Pl. -e'}): ${form}.` });
      }
      const pool = [...VERBS.are, ...VERBS.ere, ...VERBS.ire, ...VERBS.isc, ...VERBS.spell].filter(v => !v.pp && v.aux === 'a');
      const v = R.pick(pool), s = R.pick(SUBJ), p = s[1];
      const { form, wrong } = ppAvere(v, p);
      return spec({ key: 'ppa-' + v.inf + p, prompt: `Passato prossimo von ${v.inf} (${v.de}):`,
        ...(() => { const c = R.pick(v.c); return { text: `${t} ${s[0]} ___ ${c}.`, so: SO(t, s[0].replace(/ \(.*\)/, ''), c) }; })(), accept: form, distractors: wrong,
        explain: `avere (${PRON[p]}: ${AVERE[p]}) + Partizip: -are → -ato, -ere → -uto, -ire → -ito. ${v.inf} → ${part(v)}.` });
    },
  });

  /* ================================================================
     M02  Futuro semplice
     ================================================================ */
  const TIME_FUT = ['Domani', "L'anno prossimo", 'Sabato prossimo', 'Fra una settimana', 'Stasera', 'In estate'];
  const FUT_IRR_V = [
    ['essere', 'sein', ['a casa', 'in vacanza']], ['avere', 'haben', ['più tempo', 'una macchina nuova']],
    ['andare', 'gehen/fahren', ['al mare', 'in Italia']], ['fare', 'machen', ['una festa', 'sport']],
    ['venire', 'kommen', ['alla festa', 'con noi']], ['potere', 'können', ['venire', 'aiutarti']],
    ['dovere', 'müssen', ['lavorare', 'studiare']], ['vedere', 'sehen', ['gli amici', 'il mare']],
    ['volere', 'wollen', ['partire', 'riposare']], ['bere', 'trinken', ['uno spritz', 'un caffè']],
    ['sapere', 'wissen', ['la risposta', 'tutto']], ['vivere', 'leben', ['a Roma', 'in campagna']],
    ['rimanere', 'bleiben', ['a casa', 'a Milano']], ['stare', 'sein, bleiben', ['meglio', 'a casa']],
  ].map(r => ({ inf: r[0], de: r[1], c: r[2], cls: 'irr' }));
  function futTask(pool, note) {
    const v = R.pick(pool), s = R.pick(SUBJ), p = s[1];
    const form = futuro(v, p);
    const st = futuroStem(v);
    const wrong = [...others(i => futuro(v, i), p).slice(0, 3)];
    if (v.cls === 'are' || v.cls === 'spell') wrong.push(v.inf.slice(0, -1) + FUT_E[p].replace(/^[eò]/, m => m)); // parlarò-Fehler
    if (v.cls === 'irr') wrong.push(v.inf.slice(0, -1) + FUT_E[p]);
    if (v.cls === 'spell') wrong.push(stem(v) + 'er' + FUT_E[p]);
    const t = R.pick(TIME_FUT), c = R.pick(v.c);
    return spec({ key: 'fut-' + v.inf + p, cue: v.inf, prompt: `Futuro von ${v.inf} (${v.de}):`,
      text: `${t} ${s[0]} ___ ${c}.`, so: SO(t, s[0], c), accept: form, distractors: wrong,
      explain: `${v.inf} → Stamm ${st}- + Endung ${FUT_E[p]} = ${form}.` + (note ? ' ' + note(v) : '') });
  }
  register('m02', {
    levels: ['Grundregel: -erò / -irò', '+ -care/-gare/-ciare/-giare', '+ unregelmäßige Stämme'],
    table(level) {
      const pool = level >= 2 && R.chance(0.5) ? FUT_IRR_V : level >= 1 && R.chance(0.5) ? VERBS.spell.filter(v => v.inf !== 'studiare')
        : [...VERBS.are, ...VERBS.ere, ...VERBS.ire, ...VERBS.isc].filter(v => !FUT_IRR[v.inf]);
      return conjTable(R.pick(pool), futuro, 'Konjugiere im Futuro');
    },
    zo(level) {
      const pool = level >= 2 && R.chance(0.5) ? FUT_IRR_V : level >= 1 && R.chance(0.5) ? VERBS.spell.filter(v => v.inf !== 'studiare')
        : [...VERBS.are, ...VERBS.ere, ...VERBS.ire, ...VERBS.isc].filter(v => !FUT_IRR[v.inf]);
      const v = R.pick(pool); return zoConj(`${v.inf} (${v.de}) im Futuro`, p => futuro(v, p));
    },
    make(level) {
      if (level >= 2 && R.chance(0.5)) return futTask(FUT_IRR_V, () => 'Unregelmäßiger Stamm.');
      if (level >= 1 && R.chance(0.5)) return futTask(VERBS.spell.filter(v => v.inf !== 'studiare'),
        v => /[cg]iare$/.test(v.inf) ? 'Bei -ciare/-giare fällt das i weg.' : 'Bei -care/-gare kommt ein h dazu, damit der Laut hart bleibt.');
      return futTask([...VERBS.are, ...VERBS.ere, ...VERBS.ire, ...VERBS.isc].filter(v => !FUT_IRR[v.inf]),
        v => v.inf.endsWith('are') ? 'Bei -are wird das a zu e.' : '');
    },
  });

  /* ================================================================
     M22  Imperfetto
     ================================================================ */
  const TIME_IMPF = ['Ogni estate', 'Prima', 'Ogni domenica', 'Di solito', 'Anni fa', 'Ogni mattina'];
  const IMPF_IRR_V = [
    ['essere', 'sein', ['a casa', 'sempre in ritardo', 'in vacanza al mare']], ['fare', 'machen', ['sport', 'i compiti']],
    ['bere', 'trinken', ['molto latte', 'il tè']], ['dire', 'sagen', ['sempre la verità', 'poche parole']],
  ].map(r => ({ inf: r[0], de: r[1], c: r[2], cls: 'irr' }));
  register('m22', {
    levels: ['Grundregel: -avo / -evo / -ivo', '+ essere, fare, bere, dire'],
    table(level) { return conjTable(R.pick(level >= 1 && R.chance(0.5) ? IMPF_IRR_V : [...ALL_REG, ...VERBS.isc, ...VERBS.spell]), imperfetto, 'Konjugiere im Imperfetto'); },
    zo(level) { const v = R.pick(level >= 1 && R.chance(0.5) ? IMPF_IRR_V : [...ALL_REG, ...VERBS.isc, ...VERBS.spell]); return zoConj(`${v.inf} (${v.de}) im Imperfetto`, p => imperfetto(v, p)); },
    make(level) {
      const irr = level >= 1 && R.chance(0.5);
      const pool = irr ? IMPF_IRR_V : [...ALL_REG, ...VERBS.isc, ...VERBS.spell];
      const v = R.pick(pool), s = R.pick(SUBJ), p = s[1];
      const form = imperfetto(v, p);
      const wrong = others(i => imperfetto(v, i), p).slice(0, 3);
      if (!irr) wrong.push(stem(v) + 'avo'.slice(0, 0) + (conj(v) === 'are' ? 'evo' : 'avo').slice(0, -1) + ['o', 'i', 'a', 'amo', 'ate', 'ano'][p]);
      if (v.inf === 'fare') wrong.push('fa' + ['vo', 'vi', 'va', 'vamo', 'vate', 'vano'][p]);
      if (v.inf === 'bere') wrong.push('be' + ['vo', 'vi', 'va', 'vamo', 'vate', 'vano'][p]);
      if (v.inf === 'dire') wrong.push('di' + ['vo', 'vi', 'va', 'vamo', 'vate', 'vano'][p]);
      const t = R.pick(TIME_IMPF), c = R.pick(v.c);
      return spec({ key: 'impf-' + v.inf + p, cue: v.inf, prompt: `Imperfetto von ${v.inf} (${v.de}):`,
        text: `${t} ${s[0]} ___ ${c}.`, so: SO(t, s[0], c), accept: form, distractors: wrong,
        explain: irr ? `${v.inf} ist im Imperfetto unregelmäßig: ${PRON[p]} ${form}.` :
          `Infinitiv ohne -re + -vo, -vi, -va, -vamo, -vate, -vano: ${v.inf.slice(0, -2)} + ${form.slice(v.inf.length - 2)} = ${form}.` });
    },
  });

  /* ================================================================
     M13  stare + gerundio
     ================================================================ */
  register('m13', {
    levels: ['Grundregel: sto + -ando/-endo', '+ facendo, bevendo, dicendo'],
    table(level) {
      const v = R.pick(level >= 1 && R.chance(0.5) ? IMPF_IRR_V.filter(x => x.inf !== 'essere') : [...ALL_REG.filter(x => x.aux === 'a'), ...VERBS.isc]);
      return conjTable(v, (vv, p) => STARE[p] + ' ' + gerundio(vv), 'Verlaufsform (gerade)');
    },
    zo(level) {
      const v = R.pick(level >= 1 && R.chance(0.5) ? IMPF_IRR_V.filter(x => x.inf !== 'essere') : [...ALL_REG.filter(x => x.aux === 'a'), ...VERBS.isc]);
      return zoConj(`stare + Gerundio von ${v.inf} (${v.de})`, p => STARE[p] + ' ' + gerundio(v));
    },
    make(level) {
      const irr = level >= 1 && R.chance(0.45);
      const pool = irr ? IMPF_IRR_V.filter(v => v.inf !== 'essere') : [...ALL_REG.filter(v => v.aux === 'a'), ...VERBS.isc, ...VERBS.spell];
      const v = R.pick(pool), s = R.pick(SUBJ), p = s[1];
      const g = gerundio(v);
      const form = STARE[p] + ' ' + g;
      const wrongG = irr ? { fare: 'farendo', bere: 'berendo', dire: 'direndo' }[v.inf] : (conj(v) === 'are' ? stem(v) + 'endo' : stem(v) + 'ando');
      const wrong = [STARE[p] + ' ' + wrongG, STARE[(p + 2) % 6] + ' ' + g, ESSERE[p] + ' ' + g];
      const c = R.pick(v.c);
      return spec({ key: 'ger-' + v.inf + p, prompt: `Was passiert gerade? stare + Gerundio von ${v.inf} (${v.de}):`,
        text: `In questo momento ${s[0]} ___ ${c}.`, so: SO('In questo momento', s[0], c), accept: form, distractors: wrong,
        explain: `stare (${PRON[p]}: ${STARE[p]}) + Gerundio ${g}` + (irr ? ' (unregelmäßig, vom alten Stamm).' : '. -are → -ando, -ere/-ire → -endo.') });
    },
  });

  /* ================================================================
     M21  essere & avere
     ================================================================ */
  const AV_EXPR = ['fame', 'sete', 'freddo', 'caldo', 'paura del buio', 'fretta', 'sonno', 'ragione', 'bisogno di una pausa', 'una macchina nuova', 'un fratello', 'due gatti'];
  const ES_EXPR = ['a casa', 'in ritardo', 'di Berlino', 'in vacanza', 'in Italia', 'in ufficio', 'qui'];
  const CE_SG = ['un bel museo', 'una farmacia', 'un parco', 'molto traffico', 'un supermercato'];
  const CE_PL = ['molti turisti', 'due bar', 'tante chiese', 'molti negozi', 'pochi parcheggi'];
  register('m21', {
    levels: ['Grundregel: Formen von essere und avere', '+ essere oder avere? (ho fame …)', "+ c'è / ci sono"],
    ka: true,
    table() { const e = R.chance(0.5); return TAB(`Konjugiere ${e ? 'essere (sein)' : 'avere (haben)'}`, [0, 1, 2, 3, 4, 5].map(p => [PRON[p], (e ? ESSERE : AVERE)[p]])); },
    zo() { const e = R.chance(0.5); return zoConj(e ? 'essere (sein)' : 'avere (haben)', p => (e ? ESSERE : AVERE)[p]); },
    make(level) {
      const r = Math.random();
      if (level >= 2 && r < 0.33) {
        const pl = R.chance(0.5), thing = R.pick(pl ? CE_PL : CE_SG);
        return spec({ key: 'ce-' + thing, prompt: "c'è oder ci sono?", text: `In centro ___ ${thing}.`,
          accept: pl ? 'ci sono' : "c'è", distractors: pl ? ["c'è", 'sono', 'ci è'] : ['ci sono', 'è', 'ha'],
          explain: pl ? 'Plural → ci sono (es gibt + Mehrzahl).' : "Singular → c'è (es gibt + Einzahl)." });
      }
      const s = R.pick(SUBJ), p = s[1];
      if (level >= 1 && r < 0.7) {
        const av = R.chance(0.5), compl = R.pick(av ? AV_EXPR : ES_EXPR);
        const form = av ? AVERE[p] : ESSERE[p];
        return spec({ key: 'ea-' + compl + p, prompt: 'essere oder avere? Setze die richtige Form ein:', text: `${cap(s[0])} ___ ${compl}.`, so: SO(null, s[0], compl),
          accept: form, distractors: [av ? ESSERE[p] : AVERE[p], ...(av ? others(i => AVERE[i], p) : others(i => ESSERE[i], p)).slice(0, 2)],
          explain: av ? (AV_EXPR.indexOf(compl) < 9 ? `Feste Wendung mit avere: avere ${compl.split(' ')[0]} (im Deutschen oft „sein“: Hunger haben / ich habe Angst …). ${PRON[p]} → ${form}` : `Besitz → avere. ${PRON[p]} → ${form}`) : `Ort, Herkunft, Zustand → essere. ${PRON[p]} → ${form}` });
      }
      const ess = R.chance(0.5), tab = ess ? ESSERE : AVERE;
      return spec({ key: 'eaf-' + ess + p, prompt: `Welche Form von ${ess ? 'essere' : 'avere'} passt?`, text: `${cap(s[0])} ___ (${ess ? 'essere' : 'avere'})`,
        accept: tab[p], distractors: [...others(i => tab[i], p), (ess ? AVERE : ESSERE)[p]],
        explain: `${ess ? 'essere' : 'avere'}: ${tab.join(', ')}.` });
    },
  });

  /* ================================================================
     M12  Modalverben
     ================================================================ */
  const MOD = {
    dovere: ['müssen', ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono']],
    potere: ['können', ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono']],
    volere: ['wollen', ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono']],
  };
  const MOD_INF = ['studiare per il test', 'lavorare domani', 'uscire stasera', 'andare al cinema', 'parlare con Marco', 'comprare il pane', 'venire alla festa', 'pagare il conto', 'restare a casa', 'prendere il treno'];
  register('m12', {
    levels: ['Grundregel: Formen von dovere, potere, volere', '+ im Satz mit Infinitiv'],
    table() { const m = R.pick(Object.keys(MOD)); return TAB(`Konjugiere ${m} (${MOD[m][0]})`, [0, 1, 2, 3, 4, 5].map(p => [PRON[p], MOD[m][1][p]])); },
    zo() { const m = R.pick(Object.keys(MOD)); return zoConj(`${m} (${MOD[m][0]})`, p => MOD[m][1][p]); },
    make(level) {
      const m = R.pick(Object.keys(MOD)), [de, f] = MOD[m];
      const s = R.pick(SUBJ), p = s[1];
      const wrongExtra = { dovere: ['dovo', 'dobbono'], potere: ['poto', 'possete'], volere: ['volo', 'volgono'] }[m];
      if (level >= 1 && R.chance(0.6)) {
        const neg = R.chance(0.25);
        return spec({ key: 'modS-' + m + p, prompt: `Setze ${m} (${de}) ein:`, ...(() => { const mi = R.pick(MOD_INF); return { text: `${cap(s[0])} ${neg ? 'non ' : ''}___ ${mi}.`, so: SO(null, s[0] + (neg ? ' non' : ''), mi) }; })(),
          accept: f[p], distractors: [...others(i => f[i], p).slice(0, 2), ...wrongExtra],
          explain: `${m} + Infinitiv. ${PRON[p]}: ${f[p]}.` + (neg ? ' non steht vor dem Modalverb.' : '') });
      }
      return spec({ key: 'modF-' + m + p, prompt: `Form von ${m} (${de}):`, text: `${cap(PRON[p])} ___`,
        accept: f[p], distractors: [...others(i => f[i], p), ...wrongExtra], explain: `${m}: ${f.join(', ')}.` });
    },
  });

  /* ================================================================
     M17  Plural
     ================================================================ */
  const PL2 = [
    ['amica', 'amiche', 'Bei -ca → -che (h hält den Laut hart).'], ['banca', 'banche', 'Bei -ca → -che.'], ['barca', 'barche', 'Bei -ca → -che.'],
    ['riga', 'righe', 'Bei -ga → -ghe.'], ['collega', 'colleghe', 'Bei -ga → -ghe (f.).'],
    ['negozio', 'negozi', 'Unbetontes -io → -i (kein Doppel-i).'], ['ufficio', 'uffici', 'Unbetontes -io → -i.'], ['figlio', 'figli', 'Unbetontes -io → -i.'],
    ['viaggio', 'viaggi', 'Unbetontes -io → -i.'], ['orologio', 'orologi', 'Unbetontes -io → -i.'],
    ['città', 'città', 'Wörter mit Akzent auf der letzten Silbe bleiben gleich.'], ['caffè', 'caffè', 'Endbetont → unverändert.'],
    ['università', 'università', 'Endbetont → unverändert.'], ['film', 'film', 'Wörter auf Konsonant (meist aus anderen Sprachen) bleiben gleich.'],
    ['bar', 'bar', 'Endet auf Konsonant → unverändert.'], ['sport', 'sport', 'Endet auf Konsonant → unverändert.'],
    ['foto', 'foto', 'Kurzwort (fotografia) → unverändert.'], ['auto', 'auto', 'Kurzwort (automobile) → unverändert.'],
  ];
  const PL3 = [
    ['amico', 'amici', 'amico → amici (Ausnahme bei -co).'], ['medico', 'medici', 'medico → medici.'], ['gioco', 'giochi', 'gioco → giochi.'],
    ['parco', 'parchi', 'parco → parchi.'], ['lago', 'laghi', 'lago → laghi.'], ['albergo', 'alberghi', 'albergo → alberghi.'],
    ['uomo', 'uomini', 'Unregelmäßig: uomo → uomini.'], ['uovo', 'uova', 'Unregelmäßig: uovo → le uova (feminin im Plural!).'],
    ['mano', 'mani', 'la mano → le mani (feminin trotz -o).'], ['dito', 'dita', 'il dito → le dita.'], ['problema', 'problemi', 'Maskulin auf -a: il problema → i problemi.'],
  ];
  function plWrong(sg, pl) {
    const st = sg.replace(/[aeoàèù]$/, '');
    const c = [sg, st + 'i', st + 'e', sg + 's', st + 'a', st + 'o'];
    if (/[cg]$/.test(st)) c.push(st + 'hi', st + 'he');
    if (/i$/.test(st)) c.push(st + 'e');
    return c.filter(x => x !== pl);
  }
  register('m17', {
    levels: ['Grundregel: -o → -i, -a → -e, -e → -i', '+ -ca/-ga, -io und unveränderliche', '+ -co/-go und Ausnahmen'],
    table(level) {
      const pool = N.filter(regPlural).map(n => [n.it, n.pl]);
      const extra = level >= 2 ? [...PL2, ...PL3] : level >= 1 ? PL2 : [];
      const picks = uniq(Array.from({ length: 30 }, () => (extra.length && R.chance(0.5) ? R.pick(extra) : R.pick(pool)).slice(0, 2).join('|'))).slice(0, 6);
      return TAB('Bilde den Plural', picks.map(x => x.split('|')));
    },
    make(level) {
      let sg, pl, ex, key;
      const r = Math.random();
      if (level >= 2 && r < 0.35) { const x = R.pick(PL3); [sg, pl, ex] = x; }
      else if (level >= 1 && r < 0.7) { const x = R.pick(PL2); [sg, pl, ex] = x; }
      else {
        const n = R.pick(N.filter(regPlural));
        sg = n.it; pl = n.pl;
        ex = sg.endsWith('o') ? '-o → -i' : sg.endsWith('a') ? '-a → -e' : '-e → -i (m. und f.)';
        ex = `${n.de}: ${ex}`;
      }
      key = 'pl-' + sg;
      if (R.chance(0.25)) {
        return spec({ key: key + '-sg', prompt: 'Wie heißt die Einzahl?', text: `due ${pl} → un(a) ___`, accept: sg,
          distractors: [], explain: ex, mode: 'lt' });
      }
      const w = plWrong(sg, pl);
      return spec({ key, prompt: 'Bilde den Plural:', text: `${sg} → due ___`, accept: pl, distractors: w, explain: ex });
    },
  });

  /* ================================================================
     M18  Bestimmter Artikel
     ================================================================ */
  const ART_ALL = ['il', 'lo', 'la', "l'", 'i', 'gli', 'le'];
  function artExplain(n, pl) {
    if (n.g === 'f') return pl ? 'Feminin Plural → immer le.' : n.a === 'v' ? "Feminin vor Vokal → l'." : 'Feminin vor Konsonant → la.';
    if (n.a === 'c') return pl ? 'Maskulin Plural vor Konsonant → i.' : 'Maskulin vor Konsonant → il.';
    if (n.a === 'v') return pl ? 'Maskulin Plural vor Vokal → gli.' : "Maskulin vor Vokal → l'.";
    return pl ? 'Maskulin Plural vor s+Konsonant, z, ps, gn → gli.' : 'Maskulin vor s+Konsonant, z, ps, gn → lo.';
  }
  const nounPick = (level, k) => uniq(Array.from({ length: 40 }, () => R.pick(level === 0 ? N.filter(n => n.a === 'c') : N))).slice(0, k);
  register('m18', {
    levels: ['Grundregel: il, la, i, le', "+ l', lo, gli"],
    ka: true,
    table(level) { return TAB('Schreibe den bestimmten Artikel', nounPick(level, 6).map(n => { const pl = R.chance(0.4); return [pl ? n.pl : n.it, artDet(n, pl)]; })); },
    make(level) {
      const pool = level === 0 ? N.filter(n => n.a === 'c') : N.filter(n => n.a !== 'c' || R.chance(0.3));
      const n = R.pick(pool), pl = R.chance(0.45);
      const word = pl ? n.pl : n.it, art = artDet(n, pl);
      const opts = level === 0 ? ['il', 'la', 'i', 'le'] : ART_ALL;
      return spec({ key: 'art-' + word, prompt: `Welcher bestimmte Artikel? (${n.de}${pl ? ', Plural' : ''})`,
        text: art.endsWith("'") ? `___${word}` : `___ ${word}`, accept: art, distractors: opts,
        explain: artExplain(n, pl) + ` → ${withArt(art, word)}` });
    },
  });

  /* ================================================================
     M19  Unbestimmter Artikel
     ================================================================ */
  register('m19', {
    levels: ['Grundregel: un, una', "+ uno und un'"],
    ka: true,
    table(level) { return TAB('Schreibe den unbestimmten Artikel', nounPick(level, 6).map(n => [n.it, artInd(n)])); },
    make(level) {
      const pool = level === 0 ? N.filter(n => n.a === 'c') : N.filter(n => n.a !== 'c' || R.chance(0.25));
      const n = R.pick(pool), art = artInd(n);
      const ex = n.g === 'f' ? (n.a === 'v' ? "Feminin vor Vokal → un' (mit Apostroph)." : 'Feminin → una.')
        : (n.a === 's' ? 'Maskulin vor s+Konsonant, z, ps, gn → uno.' : n.a === 'v' ? 'Maskulin vor Vokal → un (ohne Apostroph!).' : 'Maskulin → un.');
      return spec({ key: 'ai-' + n.it, prompt: `Welcher unbestimmte Artikel? (${n.de})`, text: art.endsWith("'") ? `___${n.it}` : `___ ${n.it}`,
        accept: art, distractors: level === 0 ? ['un', 'una', 'uno'] : ['un', 'uno', 'una', "un'"], explain: ex + ` → ${withArt(art, n.it)}` });
    },
  });

  /* ================================================================
     M05–M09  Präpositionen mit Artikel
     ================================================================ */
  const PA = {
    di: ['del', 'dello', 'della', "dell'", 'dei', 'degli', 'delle'],
    a: ['al', 'allo', 'alla', "all'", 'ai', 'agli', 'alle'],
    da: ['dal', 'dallo', 'dalla', "dall'", 'dai', 'dagli', 'dalle'],
    in: ['nel', 'nello', 'nella', "nell'", 'nei', 'negli', 'nelle'],
    su: ['sul', 'sullo', 'sulla', "sull'", 'sui', 'sugli', 'sulle'],
  };
  const artIdx = a => ART_ALL.indexOf(a);
  function prepGen(prep) {
    return {
      levels: [`Grundregel: ${prep} + il, la, i, le`, `+ ${prep} + lo, l', gli`, '+ Artikel selbst bestimmen'],
      ka: true,
      table(level) {
        const arts = level === 0 ? ['il', 'la', 'i', 'le'] : ART_ALL;
        return TAB(`Verschmelze ${prep} mit dem Artikel`, arts.map(a => [`${prep} + ${a}`, PA[prep][artIdx(a)]]));
      },
      make(level) {
        if (level >= 2 && R.chance(0.6)) {
          const n = R.pick(N), pl = R.chance(0.4), word = pl ? n.pl : n.it, art = artDet(n, pl);
          const form = PA[prep][artIdx(art)];
          return spec({ key: 'pa2-' + prep + word, prompt: `${prep} + Artikel: Welcher Artikel gehört zu „${word}“?`,
            text: form.endsWith("'") ? `${prep} + ${word} → ___${word}` : `${prep} + ${word} → ___ ${word}`, accept: form,
            distractors: PA[prep], explain: `${artExplain(n, pl)} ${prep} + ${art} = ${form}` });
        }
        const arts = level === 0 ? ['il', 'la', 'i', 'le'] : (R.chance(0.6) ? ['lo', "l'", 'gli'] : ART_ALL);
        const art = R.pick(arts), form = PA[prep][artIdx(art)];
        const n = R.pick(N.filter(x => artDet(x, false) === art || artDet(x, true) === art));
        const word = artDet(n, false) === art ? n.it : n.pl;
        return spec({ key: 'pa-' + prep + art + word, prompt: `Verschmelze ${prep} mit dem Artikel:`,
          text: form.endsWith("'") ? `${prep} + ${withArt(art, word)} → ___${word}` : `${prep} + ${withArt(art, word)} → ___ ${word}`,
          accept: form, distractors: PA[prep].concat(prep === 'in' ? ['inil', 'ina'] : []),
          explain: `${prep} + ${art} = ${form}. ${prep === 'in' ? 'in wird zu ne-: ' : prep === 'di' ? 'di wird zu de-: ' : ''}${PA[prep].join(', ')}` });
      },
    };
  }
  register('m05', prepGen('di')); register('m06', prepGen('in')); register('m07', prepGen('su'));
  register('m08', prepGen('a')); register('m09', prepGen('da'));

  /* ================================================================
     M10  Welche Präposition?
     ================================================================ */
  const CITY = ['Roma', 'Milano', 'Napoli', 'Berlino', 'Parigi', 'Londra', 'Vienna', 'Firenze', 'Monaco'];
  const COUNTRY = ['Italia', 'Francia', 'Spagna', 'Germania', 'Austria', 'Svizzera', 'Grecia', 'Inghilterra'];
  const P10 = [
    () => { const c = R.pick(CITY); return ['Abito ___ ' + c + '.', 'a', 'Städte → a.']; },
    () => { const c = R.pick(CITY); return ['Domani vado ___ ' + c + '.', 'a', 'Städte (Ort und Richtung) → a.']; },
    () => { const c = R.pick(COUNTRY); return ['Vivo ___ ' + c + '.', 'in', 'Länder → in (ohne Artikel).']; },
    () => { const c = R.pick(COUNTRY); return ["Quest'estate andiamo ___ " + c + '.', 'in', 'Länder → in.']; },
    () => { const c = R.pick(CITY); return ['Sono ___ ' + c + ', ma adesso vivo qui.', 'di', 'Herkunft (essere + Stadt) → di.']; },
    () => { const m = R.pick(['treno', 'macchina', 'aereo', 'bici', 'autobus', 'metro']); return ['Vado al lavoro ___ ' + m + '.', 'in', 'Verkehrsmittel → in (in treno, in macchina …).']; },
    () => ['Vado al lavoro ___ piedi.', 'a', 'Ausnahme: a piedi (zu Fuß).'],
    () => { const p = R.pick(['Marco', 'Giulia', 'mia nonna', 'Luca']); return ['Stasera vado ___ ' + p + '.', 'da', 'Zu einer Person → da (da Marco = zu Marco).']; },
    () => ['Vado ___ casa.', 'a', 'Nach Hause → a casa.'],
    () => { const r = R.pick(['ufficio', 'banca', 'farmacia', 'biblioteca', 'piscina', 'pizzeria']); return ['Lavoro ___ ' + r + '.', 'in', 'Viele Orte/Läden ohne Artikel → in (in ufficio, in banca …).']; },
    () => { const n = R.pick(['due anni', 'tre mesi', 'una settimana', 'molto tempo']); return ['Studio italiano ___ ' + n + '.', 'da', 'seit + Zeitdauer → da (mit Präsens).']; },
    () => { const n = R.pick(['due ore', 'una settimana', 'tre giorni']); return ['Ho lavorato ___ ' + n + '.', 'per', 'Abgeschlossene Dauer (für) → per.']; },
    () => { const x = R.pick(['un caffè', 'il latte', 'lo zucchero']); return ['Prendo il tè ___ ' + x + '.', 'con', 'mit → con.']; },
    () => { const x = R.pick(['legno', 'vetro', 'carta', 'lana']); return ['È una scatola ___ ' + x + '.', 'di', 'Material → di.']; },
    () => { const v = R.pick(['studiare', 'comprare il pane', 'vedere un film']); return ['Esco ___ ' + v + '.', 'per', 'um … zu (Zweck) → per + Infinitiv.']; },
    () => ['Il treno parte ___ cinque.', 'alle', 'Uhrzeit → a + Artikel (alle cinque).'],
    () => ['Vado ___ cinema stasera.', 'al', 'al cinema (a + il).'],
  ];
  register('m10', {
    levels: ['Grundregel: a, in, di, da, per, con'],
    ka: true,
    make() {
      const [text, ans, ex] = R.pick(P10)();
      const [pre, post] = text.split('___').map(x => x.trim());
      return spec({ key: 'p10-' + text, prompt: 'Welche Präposition passt?', text, accept: ans, so: SO(null, pre, post),
        distractors: ['a', 'in', 'di', 'da', 'per', 'con', 'su', 'al', 'nel'], explain: ex });
    },
  });

  /* ================================================================
     M03  Direkte Objektpronomen
     ================================================================ */
  // [Frage-Verb (tu), Antwort-Verb (io), Objekt, gn, Partizip]
  const DO = [
    ['Compri', 'compro', 'il pane', 'ms', 'comprato'], ['Mangi', 'mangio', 'la pizza', 'fs', 'mangiato'],
    ['Leggi', 'leggo', 'il giornale', 'ms', null], ['Prendi', 'prendo', 'le chiavi', 'fp', null],
    ['Guardi', 'guardo', 'la partita', 'fs', 'guardato'], ['Ascolti', 'ascolto', 'i podcast', 'mp', 'ascoltato'],
    ['Cerchi', 'cerco', 'gli occhiali', 'mp', 'cercato'], ['Porti', 'porto', 'il vino', 'ms', 'portato'],
    ['Inviti', 'invito', 'Marco', 'ms', 'invitato'], ['Chiami', 'chiamo', 'Anna', 'fs', 'chiamato'],
    ['Prepari', 'preparo', 'la cena', 'fs', 'preparato'], ['Lavi', 'lavo', 'i piatti', 'mp', 'lavato'],
    ['Paghi', 'pago', 'il conto', 'ms', 'pagato'], ['Finisci', 'finisco', 'i compiti', 'mp', 'finito'],
    ['Pulisci', 'pulisco', 'la cucina', 'fs', 'pulito'], ['Compri', 'compro', 'le mele', 'fp', 'comprato'],
    ['Aspetti', 'aspetto', 'le tue amiche', 'fp', 'aspettato'], ['Vendi', 'vendo', 'la bici', 'fs', 'venduto'],
    ['Studi', 'studio', 'le regole', 'fp', 'studiato'], ['Usi', 'uso', 'il computer', 'ms', 'usato'],
  ];
  const DOP = { ms: 'lo', fs: 'la', mp: 'li', fp: 'le' };
  const DO_DE = [['mich', 'mi'], ['dich', 'ti'], ['uns', 'ci'], ['euch', 'vi'], ['ihn', 'lo'], ['sie (eine Frau)', 'la'], ['sie (mehrere Männer)', 'li'], ['sie (mehrere Frauen)', 'le']];
  const DO_V = ['chiama', 'aiuta', 'invita', 'aspetta', 'ascolta', 'saluta', 'capisce', 'conosce'];
  register('m03', {
    levels: ['Grundregel: lo, la, li, le', '+ mi, ti, ci, vi', "+ im Passato: l'ho comprata …"],
    ka: true,
    table(level) {
      if (level >= 1 && R.chance(0.5)) return TAB('Welches Pronomen? (Akkusativ)', DO_DE.slice(0, 6).map(([d, p]) => [d, p]));
      const objs = uniq(Array.from({ length: 40 }, () => R.pick(DO))).slice(0, 6);
      return TAB('Ersetze durch lo, la, li oder le', objs.map(d => [d[2], DOP[d[3]]]));
    },
    make(level) {
      const r = Math.random();
      if (level >= 2 && r < 0.4) {
        const d = R.pick(DO.filter(x => x[4])), pron = DOP[d[3]];
        const ptc = d[4].slice(0, -1) + GN_END[d[3]];
        const form = (pron === 'lo' || pron === 'la' ? "l'" : pron + ' ') + 'ho ' + ptc;
        const plain = d[4];
        return spec({ key: 'dop-' + d[2], prompt: 'Antworte mit Pronomen im Passato prossimo:', text: `Hai ${plain} ${d[2]}? Sì, ___.`,
          accept: form, distractors: [(pron === 'lo' || pron === 'la' ? "l'" : pron + ' ') + 'ho ' + plain, pron + ' ho ' + ptc, "l'ho " + d[4].slice(0, -1) + (GN_END[d[3]] === 'a' ? 'o' : 'a')],
          explain: `${d[2]} → ${pron}. lo/la werden vor ho zu l'. Das Partizip passt sich an das Pronomen an: ${form}.` });
      }
      if (level >= 1 && r < 0.75) {
        const [de, pr] = R.pick(DO_DE), v = R.pick(DO_V);
        return spec({ key: 'dod-' + de + v, prompt: `Setze das Pronomen für „${de}“ ein:`, text: `Marco ___ ${v}.`, so: SO(null, 'Marco', v), accept: pr,
          distractors: ['mi', 'ti', 'ci', 'vi', 'lo', 'la', 'li', 'le', 'gli'], explain: `${de} = ${pr}. Das Pronomen steht vor dem Verb.` });
      }
      const d = R.pick(DO), pron = DOP[d[3]];
      return spec({ key: 'do-' + d[2], prompt: 'Ersetze das Objekt durch ein Pronomen:', text: `${d[0]} ${d[2]}? Sì, ___ ${d[1]}.`,
        accept: pron, distractors: ['lo', 'la', 'li', 'le'],
        explain: `${d[2]} ist ${{ ms: 'maskulin Singular → lo', fs: 'feminin Singular → la', mp: 'maskulin Plural → li', fp: 'feminin Plural → le' }[d[3]]}.` });
    },
  });

  /* ================================================================
     M04  Indirekte Objektpronomen
     ================================================================ */
  const IO_T = [['a Marco', 'gli'], ['a mio padre', 'gli'], ['al signor Rossi', 'gli'], ['a Luca', 'gli'],
    ['ad Anna', 'le'], ['a mia madre', 'le'], ['alla professoressa', 'le'], ['a Giulia', 'le']];
  const IO_V = [['Telefono', 'telefono'], ['Scrivo', 'scrivo'], ['Rispondo', 'rispondo'], ['Regalo un libro', 'regalo un libro'],
    ['Mando un messaggio', 'mando un messaggio'], ['Do il mio numero', 'do il mio numero'], ['Spiego la regola', 'spiego la regola'],
    ['Offro un caffè', 'offro un caffè'], ['Presto la bici', 'presto la bici']];
  const IO_DE = [['mir', 'mi'], ['dir', 'ti'], ['ihm', 'gli'], ['ihr', 'le'], ['uns', 'ci'], ['euch', 'vi']];
  const PIAC_SG = ['la pizza', 'il calcio', 'la musica italiana', 'questo film', 'il caffè', 'viaggiare', 'cucinare', 'leggere'];
  const PIAC_PL = ['i gatti', 'gli spaghetti', 'le lingue', 'i film gialli', 'le mele', 'i libri di storia'];
  register('m04', {
    levels: ['Grundregel: gli, le', '+ mi, ti, ci, vi', '+ piacere: mi piace / mi piacciono'],
    ka: true,
    table(level) {
      if (level >= 1 && R.chance(0.6)) return TAB('Welches Pronomen? (Dativ)', IO_DE.map(([d, p]) => [d, p]));
      const ts = uniq(Array.from({ length: 30 }, () => R.pick(IO_T))).slice(0, 6);
      return TAB('Ersetze durch gli oder le', ts.map(([t, p]) => [t, p]));
    },
    make(level) {
      const r = Math.random();
      if (level >= 2 && r < 0.4) {
        const pl = R.chance(0.5), thing = R.pick(pl ? PIAC_PL : PIAC_SG), [de, pr] = R.pick(IO_DE);
        const form = pr + ' ' + (pl ? 'piacciono' : 'piace');
        return spec({ key: 'piac-' + thing + pr, prompt: `„${cap(de)} gefällt/gefallen …“: Pronomen + piacere`, text: `___ ${thing}.`, so: SO(null, '', thing),
          accept: form, distractors: [pr + ' ' + (pl ? 'piace' : 'piacciono'), (pr === 'gli' ? 'lo' : pr === 'le' ? 'la' : 'io') + ' piace', pr + ' piaccio'],
          explain: `${de} = ${pr}. ${pl ? 'Mehrzahl → piacciono' : 'Einzahl oder Infinitiv → piace'}.` });
      }
      if (level >= 1 && r < 0.75) {
        const [de, pr] = R.pick(IO_DE), v = R.pick(['scrive una lettera', 'regala un libro', 'telefona stasera', 'spiega la regola', 'manda una foto', 'offre un caffè']);
        return spec({ key: 'iod-' + de + v, prompt: `Setze das Pronomen für „${de}“ ein:`, text: `Marco ___ ${v}.`, so: SO(null, 'Marco', v), accept: pr,
          distractors: ['mi', 'ti', 'gli', 'le', 'ci', 'vi', 'lo', 'la'], explain: `${de} (Dativ) = ${pr}.` });
      }
      const [t, pr] = R.pick(IO_T), [V1, v2] = R.pick(IO_V);
      return spec({ key: 'io-' + t + v2, prompt: 'Ersetze „a + Person“ durch ein Pronomen:', text: `${V1} ${t}. → ___ ${v2}.`, accept: pr,
        distractors: ['gli', 'le', 'lo', 'la', 'li'], explain: `${t}: ${pr === 'gli' ? 'männlich → gli (ihm)' : 'weiblich → le (ihr)'}.` });
    },
  });

  /* ================================================================
     M11  Reflexive Verben
     ================================================================ */
  const RIF = [
    ['alzarsi', 'aufstehen', ['alle sette', 'presto']], ['svegliarsi', 'aufwachen', ['tardi', 'alle sei']],
    ['lavarsi', 'sich waschen', ['la mattina', 'con acqua fredda']], ['chiamarsi', 'heißen', ['Marco', 'Giulia']],
    ['riposarsi', 'sich ausruhen', ['dopo pranzo', 'nel weekend']], ['prepararsi', 'sich fertig machen', ['per la festa', 'in fretta']],
    ['fermarsi', 'anhalten', ['al bar', 'un momento']], ['vestirsi', 'sich anziehen', ['in fretta', 'per uscire']],
    ['divertirsi', 'Spaß haben', ['alla festa', 'molto']], ['sentirsi', 'sich fühlen', ['bene', 'meglio']],
    ['annoiarsi', 'sich langweilen', ['a lezione', 'a casa']], ['pettinarsi', 'sich kämmen', ['davanti allo specchio', 'la mattina']],
  ];
  const RP = ['mi', 'ti', 'si', 'ci', 'vi', 'si'];
  register('m11', {
    levels: ['Grundregel: mi alzo, ti alzi …', '+ im Passato: mi sono alzato/a'],
    table(level) {
      const rv = R.pick(RIF.filter(r => r[0] !== 'chiamarsi')), inf = rv[0].slice(0, -2) + 'e';
      const v = { inf, cls: 'x' };
      if (level >= 1 && R.chance(0.5)) {
        const st = partReg(v).slice(0, -1);
        return TAB(`Passato prossimo: ${rv[0]} (${rv[1]}). Bei io/tu/lui passt -o oder -a, im Plural -i oder -e.`,
          [0, 1, 2, 3, 4, 5].map(p => [PRON[p], (p < 3 ? ['o', 'a'] : ['i', 'e']).map(e => RP[p] + ' ' + ESSERE[p] + ' ' + st + e)]));
      }
      return TAB(`Konjugiere im Präsens: ${rv[0]} (${rv[1]})`, [0, 1, 2, 3, 4, 5].map(p => [PRON[p], RP[p] + ' ' + presente(v, p)]));
    },
    zo() {
      const rv = R.pick(RIF.filter(r => r[0] !== 'chiamarsi')), v = { inf: rv[0].slice(0, -2) + 'e', cls: 'x' };
      return zoConj(`${rv[0]} (${rv[1]}) im Präsens`, p => RP[p] + ' ' + presente(v, p));
    },
    make(level) {
      const rv = R.pick(RIF), inf = rv[0].slice(0, -2) + 'e';   // alzarsi → alzare
      const v = { inf, cls: inf.endsWith('ire') ? 'ire' : inf.endsWith('ere') ? 'ere' : 'are' };
      if (level >= 1 && R.chance(0.55) && rv[0] !== 'chiamarsi') {
        const s = R.pick(SUBJ_G), p = s[1];
        const form = RP[p] + ' ' + ESSERE[p] + ' ' + partReg(v).slice(0, -1) + GN_END[s[2]];
        return spec({ key: 'rifp-' + rv[0] + s[0], prompt: `Passato prossimo von ${rv[0]} (${rv[1]}):`, ...(() => { const c = R.pick(rv[2]); return { text: `Ieri ${s[0]} ___ ${c}.`, so: SO('Ieri', s[0].replace(/ \(.*\)/, ''), c) }; })(),
          accept: form, distractors: [RP[p] + ' ' + AVERE[p] + ' ' + partReg(v), RP[p] + ' ' + ESSERE[p] + ' ' + partReg(v).slice(0, -1) + (GN_END[s[2]] === 'o' ? 'a' : 'o'), ESSERE[p] + ' ' + partReg(v).slice(0, -1) + GN_END[s[2]]],
          explain: `Reflexive Verben bilden das Passato mit essere, das Partizip passt sich an: ${form}.` });
      }
      const s = R.pick(SUBJ), p = s[1];
      const form = RP[p] + ' ' + presente(v, p);
      return spec({ key: 'rif-' + rv[0] + p, prompt: `Setze ${rv[0]} (${rv[1]}) ins Präsens:`, ...(() => { const c = R.pick(rv[2]); return { text: `${cap(s[0])} ___ ${c}.`, so: SO(null, s[0], c) }; })(),
        accept: form, distractors: [RP[(p + 1) % 6] + ' ' + presente(v, p), 'si ' + presente(v, p), RP[p] + ' ' + presente(v, (p + 2) % 6)],
        explain: `Reflexivpronomen (${RP.join(', ')}) vor dem Verb: ${PRON[p]} ${form}.` });
    },
  });

  /* ================================================================
     M14  Verneinung
     ================================================================ */
  const NEG2 = [
    ...['bevo il caffè', 'guardo la TV', 'leggo il giornale', 'vado in palestra', 'mangio la carne', 'prendo il treno'].map(x =>
      ['Ich … nie', `${cap(x.split(' ')[0])} sempre ${x.split(' ').slice(1).join(' ')}.`, `Non ${x.split(' ')[0]} mai ${x.split(' ').slice(1).join(' ')}.`, 'nie = non … mai']),
    ...['compro', 'mangio', 'vedo', 'capisco', 'sento'].map(x => ['nichts', `${cap(x)} qualcosa.`, `Non ${x} niente.`, 'nichts = non … niente (auch: nulla)']),
    ...['vedo', 'conosco', 'chiamo', 'aspetto', 'invito'].map(x => ['niemanden', `${cap(x)} qualcuno.`, `Non ${x} nessuno.`, 'niemanden = non … nessuno']),
    ...['mangiato', 'finito', 'pagato', 'deciso', 'chiamato'].map(x => ['noch nicht', `Ho già ${x}.`, `Non ho ancora ${x}.`, 'noch nicht = non … ancora']),
    ...['abito ancora a Roma', 'gioco ancora a calcio', 'lavoro ancora in banca', 'studio ancora il tedesco'].map(x => {
      const w = x.split(' '); return ['nicht mehr', `${cap(x)}.`, `Non ${w[0]} più ${w.slice(2).join(' ')}.`, 'nicht mehr = non … più'];
    }),
  ];
  register('m14', {
    levels: ['Grundregel: non vor das Verb', '+ non … mai / niente / nessuno / ancora / più'],
    make(level) {
      if (level >= 1 && R.chance(0.6)) {
        const [cue, aff, neg, ex] = R.pick(NEG2);
        const w = neg.replace(/^Non /, '').replace('.', '');
        return spec({ key: 'neg2-' + aff, prompt: `Verneine mit „${cue.replace('Ich … ', '')}“:`, text: `${aff} → ___`,
          accept: [neg, neg.replace('niente', 'nulla')], distractors: ['No ' + w + '.', cap(w.replace(/ (mai|niente|nessuno|ancora|più)/, ' non $1')) + '.', 'Non ' + w.replace(/ (mai|niente|nessuno|ancora|più)/, '') + '.'],
          explain: ex + '. non steht vor dem Verb, das zweite Wort danach.' });
      }
      const v = R.pick(ALL_REG.concat(VERBS.isc)), p = R.pick([0, 1, 2, 3, 4, 5]);
      const f = presente(v, p), c = R.pick(v.c);
      const aff = `${cap(f)} ${c}.`, neg = `Non ${f} ${c}.`;
      return spec({ key: 'neg-' + v.inf + p, prompt: 'Verneine den Satz:', text: `${aff} → ___`, accept: neg,
        distractors: [`No ${f} ${c}.`, `${cap(f)} non ${c}.`, `${cap(f)} no ${c}.`], explain: 'non steht direkt vor dem Verb (nicht „no“).' });
    },
  });

  /* ================================================================
     M28  Präsens: unregelmäßige Verben
     ================================================================ */
  const IRR = {
    andare: ['gehen', ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'], ['al cinema', 'a scuola', 'in centro'], ['ando', 'andano', 'vadiamo']],
    fare: ['machen', ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'], ['colazione', 'la spesa', 'i compiti'], ['faco', 'faciamo', 'fano']],
    stare: ['sein, sich fühlen', ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'], ['bene', 'a casa'], ['stano', 'stao', 'stamo']],
    dare: ['geben', ['do', 'dai', 'dà', 'diamo', 'date', 'danno'], ['una mano alla nonna', 'il libro a Luca'], ['dano', 'daiamo', 'dao']],
    venire: ['kommen', ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'], ['alla festa', 'da Milano'], ['veno', 'venono', 'vieno']],
    dire: ['sagen', ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'], ['la verità', 'ciao'], ['dio', 'dicete', 'diro']],
    bere: ['trinken', ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'], ['un caffè', 'molta acqua'], ['bero', 'berete', 'beono']],
    uscire: ['ausgehen', ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'], ['stasera', 'con gli amici'], ['usco', 'uscio', 'uscono']],
    sapere: ['wissen, können', ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'], ['la risposta', 'nuotare'], ['sapo', 'sapiamo', 'sano']],
    rimanere: ['bleiben', ['rimango', 'rimani', 'rimane', 'rimaniamo', 'rimanete', 'rimangono'], ['a casa', 'in ufficio'], ['rimano', 'rimanono']],
    tenere: ['halten', ['tengo', 'tieni', 'tiene', 'teniamo', 'tenete', 'tengono'], ['la porta aperta', 'un diario'], ['teno', 'tenono', 'tieno']],
    salire: ['einsteigen', ['salgo', 'sali', 'sale', 'saliamo', 'salite', 'salgono'], ['sul treno', 'sul bus'], ['salo', 'salono']],
    scegliere: ['wählen', ['scelgo', 'scegli', 'sceglie', 'scegliamo', 'scegliete', 'scelgono'], ['il gelato al limone', 'un libro'], ['sceglio', 'sceglono']],
  };
  const IRR_LV = [['andare', 'fare', 'stare', 'dare'], ['venire', 'dire', 'bere', 'uscire', 'sapere'], ['rimanere', 'tenere', 'salire', 'scegliere']];
  const irrPool = level => IRR_LV.slice(0, level + 1).flat();
  register('m28', {
    levels: ['Grundregel: andare, fare, stare, dare', '+ venire, dire, bere, uscire, sapere', '+ rimanere, tenere, salire, scegliere'],
    table(level) {
      const v = level > 0 && R.chance(0.6) ? R.pick(IRR_LV[level]) : R.pick(irrPool(level));
      return TAB(`Konjugiere ${v} (${IRR[v][0]})`, [0, 1, 2, 3, 4, 5].map(p => [PRON[p], IRR[v][1][p]]));
    },
    zo(level) { const v = level > 0 && R.chance(0.6) ? R.pick(IRR_LV[level]) : R.pick(irrPool(level)); return zoConj(`${v} (${IRR[v][0]})`, p => IRR[v][1][p]); },
    make(level) {
      const v = level > 0 && R.chance(0.6) ? R.pick(IRR_LV[level]) : R.pick(irrPool(level));
      const [de, f, cs, wrong] = IRR[v];
      const s = R.pick(SUBJ), p = s[1], c = R.pick(cs);
      return spec({ key: 'irr-' + v + p, cue: v, prompt: `Setze ${v} (${de}) ins Präsens:`, text: `${cap(s[0])} ___ ${c}.`, so: SO(null, s[0], c),
        accept: f[p], distractors: [...others(i => f[i], p).slice(0, 3), R.pick(wrong)],
        explain: `${v}: ${f.join(', ')}.` });
    },
  });

  /* ================================================================
     M29  Adjektive
     ================================================================ */
  // Nomen für Adjektive: [it, Genus, Plural, Anlaut]
  const NX = {};
  N.forEach(n => { NX[n.it] = n; });
  [['torta', 'f', 'torte', 'c'], ['domanda', 'f', 'domande', 'c'], ['esercizio', 'm', 'esercizi', 'v'], ['film', 'm', 'film', 'c'],
    ['caffè', 'm', 'caffè', 'c'], ['cucina', 'f', 'cucine', 'c'], ['bambino', 'm', 'bambini', 'c'], ['regola', 'f', 'regole', 'c'], ['vestito', 'm', 'vestiti', 'c']]
    .forEach(r => { NX[r[0]] = { it: r[0], g: r[1], pl: r[2], a: r[3] }; });
  const PERS = ['ragazzo', 'ragazza', 'studente', 'fratello', 'sorella', 'amico', 'amica', 'bambino'];
  const OBJ = ['libro', 'tavolo', 'letto', 'casa', 'macchina', 'borsa', 'sedia', 'zaino', 'cappello', 'quaderno', 'orologio', 'ombrello', 'porta', 'finestra', 'camera', 'telefono', 'vestito'];
  // [Adjektiv, Deutsch, Klasse, passende Nomen]
  const ADJ = [
    ['rosso', 'rot', 'o', ['macchina', 'borsa', 'porta', 'cappello', 'vestito', 'mela']], ['nero', 'schwarz', 'o', ['gatto', 'cane', 'borsa', 'zaino', 'cappello', 'vestito']],
    ['nuovo', 'neu', 'o', OBJ], ['vecchio', 'alt', 'o', OBJ.concat(['albero'])], ['piccolo', 'klein', 'o', OBJ.concat(['gatto', 'cane', 'giardino'])],
    ['caro', 'teuer', 'o', ['macchina', 'borsa', 'orologio', 'vestito', 'ristorante', 'vino']], ['pieno', 'voll', 'o', ['bicchiere', 'piatto', 'borsa', 'zaino', 'treno']],
    ['vuoto', 'leer', 'o', ['bicchiere', 'piatto', 'borsa', 'zaino', 'treno', 'camera']], ['freddo', 'kalt', 'o', ['pizza', 'caffè', 'camera', 'notte', 'panino']],
    ['moderno', 'modern', 'o', ['casa', 'macchina', 'telefono', 'stazione', 'ospedale', 'scuola']], ['comodo', 'bequem', 'o', ['letto', 'sedia', 'stivale', 'treno', 'camera']],
    ['pulito', 'sauber', 'o', ['camera', 'piatto', 'bicchiere', 'cucina', 'casa', 'vestito']], ['alto', 'groß (Person), hoch', 'o', PERS.concat(['albero'])],
    ['bravo', 'gut, tüchtig', 'o', PERS], ['contento', 'zufrieden, froh', 'o', PERS],
    ['grande', 'groß', 'e', OBJ.concat(['giardino', 'città', 'albero'])], ['verde', 'grün', 'e', ['mela', 'albero', 'porta', 'borsa', 'giardino', 'vestito']],
    ['facile', 'leicht', 'e', ['lezione', 'domanda', 'esercizio', 'regola']], ['difficile', 'schwierig', 'e', ['lezione', 'domanda', 'esercizio', 'regola']],
    ['veloce', 'schnell', 'e', ['treno', 'macchina', 'aereo']], ['interessante', 'interessant', 'e', ['libro', 'lezione', 'film', 'giornale', 'spettacolo']],
    ['gentile', 'nett', 'e', PERS], ['dolce', 'süß', 'e', ['torta', 'mela', 'arancia', 'caffè']], ['triste', 'traurig', 'e', PERS.concat(['film'])],
    ['bianco', 'weiß', 'co', ['casa', 'porta', 'macchina', 'letto', 'sedia', 'vestito'], 'bianchi', 'bianche'], ['lungo', 'lang', 'co', ['strada', 'lezione', 'notte', 'film', 'vestito'], 'lunghi', 'lunghe'],
    ['stanco', 'müde', 'co', PERS, 'stanchi', 'stanche'], ['antico', 'antik, alt', 'co', ['casa', 'orologio', 'tavolo', 'specchio'], 'antichi', 'antiche'],
    ['simpatico', 'sympathisch', 'co', PERS, 'simpatici', 'simpatiche'], ['tedesco', 'deutsch', 'co', PERS.concat(['macchina']), 'tedeschi', 'tedesche'],
    ['blu', 'blau', 'inv', ['macchina', 'borsa', 'porta', 'vestito', 'zaino']], ['rosa', 'rosa', 'inv', ['borsa', 'vestito', 'fiore', 'camera']], ['viola', 'lila', 'inv', ['borsa', 'vestito', 'fiore']],
  ];
  const adjForms = a => a[2] === 'o' ? ['o', 'a', 'i', 'e'].map(e => a[0].slice(0, -1) + e)
    : a[2] === 'e' ? [a[0], a[0], a[0].slice(0, -1) + 'i', a[0].slice(0, -1) + 'i']
      : a[2] === 'co' ? [a[0], a[0].slice(0, -1) + 'a', a[4], a[5]] : [a[0], a[0], a[0], a[0]];
  const MIXED = [['Marco e Anna', 'mp'], ['Luca e Sara', 'mp'], ['mio fratello e mia sorella', 'mp'], ['Anna e Giulia', 'fp'], ['le mie amiche', 'fp']];
  const BELLO = n => n.g === 'f' ? (n.a === 'v' ? "bell'" : 'bella') : n.a === 'c' ? 'bel' : n.a === 'v' ? "bell'" : 'bello';
  const BELLI = n => n.g === 'f' ? 'belle' : n.a === 'c' ? 'bei' : 'begli';
  const adjPool = level => level === 0 ? ADJ.filter(a => a[2] === 'o') : level === 1 ? ADJ.filter(a => a[2] === 'o' || a[2] === 'e') : ADJ.filter(a => a[2] === 'co' || a[2] === 'inv');
  register('m29', {
    levels: ['Grundregel: -o / -a / -i / -e', '+ Adjektive auf -e und gemischte Gruppen', '+ -co/-go, bello, unveränderliche'],
    ka: true,
    table(level) {
      const a = R.pick(adjPool(level).filter(x => x[2] !== 'inv')), f = adjForms(a);
      return TAB(`Bilde die Formen von ${a[0]} (${a[1]})`, [['m Sg.', f[0]], ['f Sg.', f[1]], ['m Pl.', f[2]], ['f Pl.', f[3]]]);
    },
    zo(level) {
      const a = R.pick(adjPool(level).filter(x => x[2] === 'o' || x[2] === 'co')), f = adjForms(a);
      const ns = a[3].map(k => NX[k]).filter(Boolean);
      const pairs = [];
      [[false, 'm'], [false, 'f'], [true, 'm'], [true, 'f']].forEach(([pl, g]) => {
        const c = shuf(ns.filter(n => n.g === g));
        if (c.length) pairs.push({ de: withArt(artDet(c[0], pl), pl ? c[0].pl : c[0].it) + ' …', it: f[(pl ? 2 : 0) + (g === 'f' ? 1 : 0)] });
      });
      return pairs.length >= 4 ? { prompt: `Ordne die passende Form von ${a[0]} (${a[1]}) zu:`, pairs } : null;
    },
    make(level) {
      if (level >= 2 && R.chance(0.3)) {
        const n = R.pick(N), pl = R.chance(0.4), word = pl ? n.pl : n.it, form = pl ? BELLI(n) : BELLO(n);
        return spec({ key: 'bello-' + word, prompt: `bello vor dem Nomen (${n.de}${pl ? ', Plural' : ''}):`, text: form.endsWith("'") ? `Che ___${word}!` : `Che ___ ${word}!`,
          accept: form, distractors: ['bel', 'bello', "bell'", 'bella', 'bei', 'begli', 'belle'],
          explain: `bello vor dem Nomen verhält sich wie der Artikel: ${withArt(artDet(n, pl), word)} → ${withArt(form, word)}.` });
      }
      const pool = level >= 2 && R.chance(0.3) ? ADJ.filter(x => x[2] === 'o' || x[2] === 'e') : adjPool(level);
      const a = R.pick(pool), f = adjForms(a), base = a[0];
      let subj, idx, verb, mixed = false;
      const isPers = a[3] === PERS || a[3].includes('ragazzo');
      if (level >= 1 && isPers && R.chance(0.35)) {
        const [mx, gn] = R.pick(MIXED); subj = cap(mx); idx = gn === 'mp' ? 2 : 3; verb = 'sono'; mixed = gn === 'mp';
      } else {
        const n = NX[R.pick(a[3])] || NX.libro, pl = R.chance(0.5);
        subj = cap(withArt(artDet(n, pl), pl ? n.pl : n.it)); idx = (pl ? 2 : 0) + (n.g === 'f' ? 1 : 0); verb = pl ? 'sono' : 'è';
      }
      const wrong = uniq([...f, base.slice(0, -1) + 'a', base.slice(0, -1) + 'i', base.slice(0, -1) + 'e', base + 's']);
      const exp = a[2] === 'inv' ? `${base} ist unveränderlich.` : a[2] === 'e' ? `Adjektive auf -e: Singular -e, Plural -i → ${f[idx]}.`
        : a[2] === 'co' ? `${base}: ${f.join(', ')}.` : `${['m Sg. -o', 'f Sg. -a', 'm Pl. -i', 'f Pl. -e'][idx]} → ${f[idx]}.`;
      return spec({ key: 'adj-' + base + subj, cue: base, prompt: `Setze ${base} (${a[1]}) in der richtigen Form ein:`, text: `${subj} ${verb} ___.`, so: SO(null, subj + ' ' + verb, ''),
        accept: f[idx], distractors: wrong, explain: exp + (mixed ? ' Gemischte Gruppe → maskulin Plural.' : '') });
    },
  });

  /* ================================================================
     M30  Possessivbegleiter
     ================================================================ */
  const POSS = [
    ['mein', ['mio', 'mia', 'miei', 'mie']], ['dein', ['tuo', 'tua', 'tuoi', 'tue']], ['sein/ihr', ['suo', 'sua', 'suoi', 'sue']],
    ['unser', ['nostro', 'nostra', 'nostri', 'nostre']], ['euer', ['vostro', 'vostra', 'vostri', 'vostre']], ['ihr (Pl.)', ['loro', 'loro', 'loro', 'loro']],
  ];
  const ART4 = ['il', 'la', 'i', 'le'];
  const FAM = [['padre', 'm', 'Vater', 'genitori'], ['madre', 'f', 'Mutter', null], ['fratello', 'm', 'Bruder', 'fratelli'], ['sorella', 'f', 'Schwester', 'sorelle'],
    ['zio', 'm', 'Onkel', 'zii'], ['zia', 'f', 'Tante', 'zie'], ['nonno', 'm', 'Opa', 'nonni'], ['nonna', 'f', 'Oma', 'nonne'], ['cugino', 'm', 'Cousin', 'cugini'], ['cugina', 'f', 'Cousine', 'cugine']];
  const possForm = (p, idx) => ART4[idx] + ' ' + POSS[p][1][idx];
  register('m30', {
    levels: ['Grundregel: il mio, la tua …', '+ suo, nostro, vostro, loro', '+ Familie ohne Artikel'],
    ka: true,
    table(level) {
      const p = level === 0 ? R.pick([0, 1]) : R.pick([2, 3, 4, 5]);
      return TAB(`Setze „${POSS[p][0]}“ mit Artikel ein`, [['… libro', possForm(p, 0)], ['… casa', possForm(p, 1)], ['… libri', possForm(p, 2)], ['… case', possForm(p, 3)]]);
    },
    zo(level) {
      const p = level === 0 ? R.pick([0, 1]) : R.pick([2, 3, 4]);
      const m = shuf(N.filter(n => n.g === 'm')), f = shuf(N.filter(n => n.g === 'f'));
      const pairs = [[m[0], false, 0], [f[0], false, 1], [m[1], true, 2], [f[1], true, 3], [m[2], R.chance(0.5), -1]].map(([n, pl, idx]) => {
        const i = idx < 0 ? (pl ? 2 : 0) : idx; return { de: `… ${pl || i >= 2 ? n.pl : n.it}`, it: possForm(p, i) };
      });
      return { prompt: `Ordne zu: „${POSS[p][0]}“`, pairs };
    },
    make(level) {
      if (level >= 2 && R.chance(0.5)) {
        const fm = R.pick(FAM), p = R.pick([0, 1, 2, 3, 4, 5]), pl = fm[3] && R.chance(0.35);
        const idx = (pl ? 2 : 0) + (fm[1] === 'f' ? 1 : 0), word = pl ? fm[3] : fm[0];
        const pos = POSS[p][1][idx];
        const withA = ART4[idx] + ' ' + pos;
        const form = (pl || p === 5) ? withA : pos;
        const de = `${POSS[p][0]} ${fm[2]}${pl ? ' (Pl.)' : ''}`;
        return spec({ key: 'fam-' + word + p, prompt: `Familie: „${de}“ (mit oder ohne Artikel?)`, text: `___ ${word} abita a Roma.`.replace(' abita', pl ? ' abitano' : ' abita'),
          so: SO(null, '', `${word} ${pl ? 'abitano' : 'abita'} a Roma`), accept: cap(form),
          distractors: [cap(form === withA ? pos : withA), cap(ART4[idx ^ 1] + ' ' + POSS[p][1][idx ^ 1]), cap(POSS[p][1][idx ^ 1])],
          explain: pl ? 'Verwandte im Plural mit Artikel.' : p === 5 ? 'loro steht immer mit Artikel.' : 'Verwandte im Singular ohne Artikel.' });
      }
      const p = level === 0 ? R.pick([0, 1]) : R.pick([2, 3, 4, 5, 2, 5]);
      const n = R.pick(N), pl = R.chance(0.45), idx = (pl ? 2 : 0) + (n.g === 'f' ? 1 : 0);
      const word = pl ? n.pl : n.it, form = possForm(p, idx);
      const dis = uniq([0, 1, 2, 3].filter(i => i !== idx).map(i => possForm(p, i)).concat([possForm(p === 2 ? 5 : 2, idx), POSS[p][1][idx]]));
      return spec({ key: 'poss-' + word + p, prompt: `„${POSS[p][0]} …“ (${n.de}${pl ? ', Plural' : ''}):`, text: `Ecco ___ ${word}.`, so: SO(null, 'Ecco', word),
        accept: form, distractors: dis,
        explain: `${word} ist ${n.g === 'f' ? 'feminin' : 'maskulin'} ${pl ? 'Plural' : 'Singular'} → ${form}.` + (p === 2 ? ' suo/sua richtet sich nach dem Besitz, nicht nach dem Besitzer.' : p === 5 ? ' loro bleibt immer gleich.' : '') });
    },
  });

  /* ================================================================
     M31  Fragen stellen
     ================================================================ */
  const QW = ['Chi', 'Che cosa', 'Dove', 'Quando', 'Come', 'Perché', 'Quanto', 'Quanti', 'Quanta', 'Quante', 'Quale', 'Quali', 'Di dove'];
  const Q = [
    // [Rest der Frage, Antwort, Fragewort, Stufe]
    ['abiti?', 'A Milano.', 'Dove', 0], ['lavora Marco?', 'In banca.', 'Dove', 0], ['è la stazione?', 'Vicino al centro.', 'Dove', 0], ['vai stasera?', 'Al cinema.', 'Dove', 0],
    ['ti chiami?', 'Mi chiamo Sara.', 'Come', 0], ['stai?', 'Bene, grazie.', 'Come', 0], ['vai a scuola?', 'In autobus.', 'Come', 0], ['si dice „Danke“ in italiano?', 'Grazie.', 'Come', 0],
    ['arrivi?', 'Domani sera.', 'Quando', 0], ['è il tuo compleanno?', 'Il tre maggio.', 'Quando', 0], ['finisce la lezione?', 'Tra dieci minuti.', 'Quando', 0], ['parti per le vacanze?', 'Ad agosto.', 'Quando', 0],
    ['è quel ragazzo?', 'È mio fratello.', 'Chi', 0], ['viene alla festa?', 'Viene Giulia.', 'Chi', 0], ['ha telefonato?', 'Tua madre.', 'Chi', 0], ['paga il conto?', 'Pago io.', 'Chi', 0],
    ['mangi a pranzo?', 'Un panino.', 'Che cosa', 0], ['fai stasera?', 'Guardo un film.', 'Che cosa', 0], ['bevi?', 'Un caffè.', 'Che cosa', 0], ['studi?', 'Medicina.', 'Che cosa', 0],
    ['non vieni?', 'Perché sono stanco.', 'Perché', 1], ["studi l'italiano?", 'Perché mi piace.', 'Perché', 1], ['ridi?', 'Perché sono felice.', 'Perché', 1],
    ['costa il biglietto?', 'Dieci euro.', 'Quanto', 1], ['anni hai?', 'Ventidue.', 'Quanti', 1], ['persone vengono?', 'Sei.', 'Quante', 1], ['acqua bevi al giorno?', 'Due litri.', 'Quanta', 1],
    ['tempo hai?', "Un'ora.", 'Quanto', 1], ['fratelli hai?', 'Due.', 'Quanti', 1], ['sorelle hai?', 'Una.', 'Quante', 1],
    ['sei?', 'Sono di Napoli.', 'Di dove', 1], ['è Marco?', 'È di Torino.', 'Di dove', 1],
    ['colore preferisci?', 'Il blu.', 'Quale', 1], ['libri ti piacciono?', 'I gialli.', 'Quali', 1], ['lingua parli a casa?', 'Il tedesco.', 'Quale', 1],
    ['ora parte il treno?', 'Alle otto.', 'A che', 2], ['vai al cinema?', 'Con Sara.', 'Con chi', 2], ['è questo regalo?', 'Per te!', 'Per chi', 2],
    ['quanto tempo studi italiano?', 'Da due anni.', 'Da', 2], ['è il tuo numero di telefono?', 'È 333 4567.', 'Qual', 2], ['dove vieni adesso?', 'Dalla palestra.', 'Da', 2],
  ];
  const QW_ALT = { 'Che cosa': ['Che cosa', 'Cosa', 'Che'] };
  register('m31', {
    levels: ['Grundregel: chi, che cosa, dove, quando, come', '+ perché, quanto, quale, di dove', '+ Präposition + Fragewort, Qual è'],
    ka: true,
    table(level) {
      if (level >= 1 && R.chance(0.5)) return TAB('Übersetze mit quanto', [['Wie viel Zeit?', 'quanto tempo'], ['Wie viel Wasser?', 'quanta acqua'], ['Wie viele Bücher?', 'quanti libri'], ['Wie viele Leute? (le persone)', 'quante persone']]);
      return TAB('Welches Fragewort?', [['wer?', 'chi'], ['was?', ['che cosa', 'cosa', 'che']], ['wo?', 'dove'], ['wann?', 'quando'], ['wie?', 'come'], ['warum?', 'perché']]);
    },
    make(level) {
      const pool = Q.filter(q => q[3] <= level && (level === 0 || q[3] === level || R.chance(0.4)));
      const [rest, ans, qw] = R.pick(pool.length ? pool : Q.filter(q => q[3] <= level));
      const acc = QW_ALT[qw] || [qw];
      const dis = qw === 'A che' ? ['A quale', 'Che', 'A quando'] : qw === 'Con chi' ? ['Con che', 'Chi', 'Con come'] : qw === 'Per chi' ? ['Per che', 'Chi', 'Per cosa']
        : qw === 'Da' ? ['Di', 'A', 'In'] : qw === 'Qual' ? ["Qual'", 'Come', 'Che'] : QW.filter(w => !acc.includes(w));
      return spec({ key: 'q-' + rest, prompt: `Welches Fragewort passt? Antwort: „${ans}“`, text: `___ ${rest}`, zl: `___ ${rest} – ${ans}`, so: SO(null, '', rest),
        accept: acc, distractors: dis, explain: `${acc[0]} ${rest} – ${ans}` });
    },
  });

  return { get, register, _int: { presente, futuro, imperfetto, gerundio, part, artDet, artInd, VERBS, N, PA } };
})();

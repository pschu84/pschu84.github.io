/* Bebilderte Schritt-für-Schritt-Anleitungen (eigene SVG-Zeichnungen)
   data-s="n": erscheint ab Schritt n · data-x="n": verblasst ab Schritt n · data-h="n,m": wird in diesen Schritten hervorgehoben */
const GUIDES = {};
function GD(id, title, plants, intro, steps, svg, tip) { GUIDES[id] = { id, title, plants, intro, steps, svg, tip }; }
const GC = { old: "#5a3a22", mid: "#9a6b3c", young: "#78a84a", leaf: "#6f9e45", cut: "#e53935" };
function V(inner) { return `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" class="gsv">${inner}</svg>`; }
function ground(y) { y = y || 212; return `<path d="M8 ${y} Q180 ${y - 6} 352 ${y} L352 ${y + 20} L8 ${y + 20}Z" fill="#cfae84"/><path d="M8 ${y} Q180 ${y - 6} 352 ${y}" fill="none" stroke="#9c7a52" stroke-width="2"/>`; }
function br(d, c, w, a) { return `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${a || ""}/>`; }
function g(a, inner) { return `<g ${a}>${inner}</g>`; }
function cut(x, y, ang, s, len, xs) { len = len || 18; return `<g class="cut" data-s="${s}" ${xs != null ? `data-x="${xs}"` : ""} transform="translate(${x} ${y}) rotate(${ang || 0})"><line x1="${-len / 2}" x2="${len / 2}" y1="0" y2="0" stroke="${GC.cut}" stroke-width="4.5" stroke-linecap="round"/></g>`; }
function lab(x, y, t, s, o) { o = o || {}; return `<text x="${x}" y="${y}" class="gl ${o.c || ""}" text-anchor="${o.a || "middle"}" ${s != null ? `data-s="${s}"` : ""} ${o.x != null ? `data-x="${o.x}"` : ""}>${t}</text>`; }
function bad(x, y, s, x2) { return `<g data-s="${s}" ${x2 != null ? `data-x="${x2}"` : ""} class="mk"><circle cx="${x}" cy="${y}" r="9" fill="#e53935"/><path d="M${x - 4} ${y - 4} L${x + 4} ${y + 4} M${x + 4} ${y - 4} L${x - 4} ${y + 4}" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></g>`; }
function good(x, y, s) { return `<g data-s="${s}" class="mk"><circle cx="${x}" cy="${y}" r="9" fill="#3f8f3a"/><path d="M${x - 4.5} ${y} L${x - 1} ${y + 4} L${x + 5} ${y - 4}" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></g>`; }
function buds(pts, c) { return pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="${c || "#4f7a2e"}"/>`).join(""); }
function leafAt(x, y, ang, len, c) { len = len || 12; return `<ellipse cx="${x}" cy="${y}" rx="${len / 2}" ry="${len / 4.5}" fill="${c || GC.leaf}" transform="rotate(${ang} ${x} ${y})"/>`; }

/* 1 Richtig schneiden */
GD("schnitt", "Richtig schneiden: Knospe und Astring", "*holz",
"Die Grundlage für jeden Schnitt an Sträuchern, Rosen und Bäumen. Scharfe, saubere Schere verwenden.",
["Ein Trieb mit einer Knospe (Auge), die nach außen zeigt. Aus dieser Knospe wächst später der neue Trieb.",
 "Falsch: zu weit über der Knospe geschnitten. Der Stummel trocknet ein und kann faulen.",
 "Falsch: zu dicht oder durch die Knospe geschnitten. Die Knospe trocknet aus.",
 "Richtig: etwa 5 mm über der Knospe, leicht schräg, so dass Wasser von der Knospe weg abläuft.",
 "Ergebnis: Der neue Trieb wächst in die Richtung, in die die Knospe zeigt, also nach außen. So bleibt die Mitte licht.",
 "Ganze Äste entfernen: am Stamm sitzt ein leicht verdickter Ring, der Astring. Falsch ist ein Schnitt bündig am Stamm, die Wunde wird zu groß.",
 "Falsch ist auch ein langer Stummel. Er stirbt ab und ist eine Eintrittspforte für Pilze.",
 "Richtig: direkt außen am Astring schneiden. Von dort wächst die Wunde von selbst zu. Dicke Äste vorher von unten ansägen, damit die Rinde nicht einreißt."],
V(`
<line x1="180" y1="16" x2="180" y2="226" stroke="#e7dfcc" stroke-width="1.5" stroke-dasharray="4 4"/>
${lab(90, 22, "An der Knospe", null, { c: "h" })}${lab(272, 22, "Am Astring", null, { c: "h" })}
${[40, 90, 140].map((x, i) => { const cy = [78, 120, 106][i]; return `
  ${br(`M${x} 210 L${x} ${cy}`, GC.mid, 6)}
  ${g(`data-x="${i + 1}"`, br(`M${x} ${cy} L${x} 50`, GC.mid, 6))}
  <path d="M${x + 3} 122 q8 -4 8 -12 q-7 1 -8 6z" fill="#6f9e45"/>`; }).join("")}
${cut(40, 80, 0, 1)}${bad(40, 64, 1)}${lab(40, 232, "zu hoch", 1)}
${cut(90, 120, 0, 2)}${bad(90, 104, 2)}${lab(90, 232, "zu tief", 2)}
${cut(140, 106, -14, 3)}${good(140, 88, 3)}${lab(146, 232, "richtig", 3)}
${g('data-s="4"', br("M146 114 Q160 92 170 60", GC.young, 4) + leafAt(165, 80, -60, 12) + leafAt(160, 96, 30, 10))}
${br("M262 226 L262 40", GC.old, 16)}
${g('data-x="7"', br("M266 128 Q300 110 340 78", GC.mid, 9))}
<ellipse cx="270" cy="127" rx="6" ry="9" fill="#7a5233" data-h="5,6,7"/>
${lab(300, 150, "Astring", 5, { a: "start" })}
${cut(266, 128, -55, 5, 22, 6)}${bad(246, 128, 5, 6)}${lab(232, 108, "bündig", 5, { x: 6 })}
${cut(292, 113, -55, 6, 22, 7)}${bad(306, 128, 6, 7)}${lab(318, 96, "Stummel", 6, { x: 7 })}
${cut(275, 124, -55, 7, 22)}${good(300, 98, 7)}
`), "Werkzeug nach dem Schnitt an kranken Pflanzen mit Spiritus reinigen. Wundverschlussmittel sind bei normalen Schnitten nicht nötig.");

/* 2 Beerensträucher auslichten */
GD("beeren", "Beerensträucher und Ziersträucher auslichten", ["johannisbeere", "johannisbeere-schwarz", "stachelbeere", "jostabeere", "heidelbeere", "forsythie", "berberitze", "holunder", "sanddorn"],
"Sträucher erneuern sich von unten. Statt oben zu stutzen, nimmt man jedes Jahr die ältesten Triebe ganz heraus.",
["Vorher: Der Strauch hat Triebe unterschiedlichen Alters. Alte Triebe sind dunkel und rissig, junge hell und glatt.",
 "Die 2 bis 3 ältesten, dunklen Triebe direkt über dem Boden abschneiden. Sie tragen kaum noch.",
 "Dann schwache, am Boden liegende und nach innen wachsende Triebe entfernen.",
 "Ergebnis: 8 bis 10 kräftige Triebe in verschiedenen Altersstufen. Die jungen Bodentriebe sind der Ersatz für die nächsten Jahre."],
V(`${ground()}
${g('data-x="2" data-h="1"', br("M175 212 Q150 150 112 66", GC.old, 8) + br("M140 128 Q118 112 96 112", GC.old, 4) + br("M186 212 Q220 140 258 72", GC.old, 8) + br("M226 128 Q250 118 270 124", GC.old, 4))}
${br("M172 212 Q122 164 78 116", GC.mid, 5)}${br("M188 212 Q242 164 290 118", GC.mid, 5)}${br("M178 212 Q160 132 146 54", GC.mid, 5)}
${g('data-h="3"', br("M181 212 Q194 130 204 46", GC.young, 4) + br("M184 212 Q226 186 268 168", GC.young, 3.5) + br("M177 212 Q140 186 104 172", GC.young, 3.5))}
${g('data-x="3" data-h="2"', br("M178 212 Q128 208 84 204", GC.young, 2) + br("M183 212 Q178 160 212 112", GC.young, 2))}
${cut(172, 200, 0, 1)}${cut(189, 200, 0, 1)}
${cut(150, 207, 90, 2, 14)}${cut(183, 196, -10, 2, 14)}
${lab(92, 60, "alt, dunkel", 0, { x: 1 })}${lab(300, 108, "2 bis 3 Jahre", 0, { x: 1 })}${lab(220, 40, "jung", 0, { x: 1 })}
${lab(88, 225, "abschneiden", 1, { x: 2 })}${lab(80, 196, "liegt am Boden", 2, { x: 3 })}
${lab(222, 40, "neue Bodentriebe", 3)}
`), "Rote Johannisbeere, Stachelbeere, Jostabeere: am besten direkt nach der Ernte. Forsythie: direkt nach der Blüte. Radikal verjüngen nur vom 1.10. bis 28.2.");

/* 3 Halbsträucher */
GD("halbstrauch", "Lavendel, Salbei, Rosmarin und andere Halbsträucher", ["lavendel", "salbei", "rosmarin", "thymian", "wermut", "colakraut", "kraeuter-mix"],
"Halbsträucher verholzen von unten. Aus altem, blattlosem Holz treiben sie nicht wieder aus. Darum jedes Jahr schneiden, aber immer im grünen Bereich.",
["Aufbau: unten verholzt, darüber der beblätterte Teil, oben die Blüten.",
 "Sommer, nach der Blüte: verblühte Stiele unterhalb der Blüte über dem ersten Blattpaar abschneiden.",
 "Frühjahr (März bis April): die Pflanze um ein Drittel bis die Hälfte kugelig zurückschneiden.",
 "Wichtig: nie bis ins alte, braune Holz schneiden. An jedem Trieb müssen grüne Blätter bleiben.",
 "Ergebnis: Die Pflanze treibt kompakt und dicht wieder aus und verkahlt nicht."],
V(`${ground()}
${[120, 145, 170, 195, 220, 245].map((x, i) => br(`M180 212 Q${x} 200 ${x - 6 + (i % 2) * 4} 176`, "#8a6a45", 5)).join("")}
<path d="M88 182 Q90 140 130 122 Q180 106 230 122 Q272 140 274 182 Z" fill="#8fb06b"/>
${g('data-x="3"', `<path d="M104 142 Q130 112 180 108 Q232 112 258 142 Q232 128 180 126 Q128 128 104 142Z" fill="#a6c482"/>`)}
${g('data-s="4"', `<path d="M104 142 Q130 116 180 112 Q232 116 258 142 Q232 132 180 130 Q128 132 104 142Z" fill="#9bc26f"/>` + leafAt(140, 122, -20, 10, "#7fae4f") + leafAt(220, 122, 20, 10, "#7fae4f"))}
${g('data-x="2"', [118, 140, 162, 184, 206, 228, 248].map((x, i) => br(`M${x} ${126 - (i % 2) * 6} L${x + (i - 3) * 3} ${66 - (i % 3) * 6}`, "#7d9b5c", 2) + `<ellipse cx="${x + (i - 3) * 3}" cy="${62 - (i % 3) * 6}" rx="4" ry="11" fill="#8a6cc4"/>`).join(""))}
<path d="M100 150 Q180 120 262 150" fill="none" stroke="#5c7a3e" stroke-width="1" stroke-dasharray="3 3"/>
${g('data-s="1" data-x="2" class="cut"', `<path d="M104 116 Q180 92 256 116" fill="none" stroke="${GC.cut}" stroke-width="4" stroke-dasharray="10 6" stroke-linecap="round"/>`)}
${g('data-s="2" class="cut"', `<path d="M100 146 Q180 116 262 146" fill="none" stroke="${GC.cut}" stroke-width="4" stroke-dasharray="10 6" stroke-linecap="round"/>`)}
${g('data-s="3"', `<rect x="96" y="182" width="170" height="28" rx="6" fill="#e53935" fill-opacity="0.18" stroke="#e53935" stroke-dasharray="4 3"/>`)}${bad(282, 196, 3)}
${lab(290, 214, "altes Holz", 0, { a: "start", x: 3 })}${lab(300, 150, "beblättert", 0, { a: "start" })}${lab(290, 70, "Blüten", 0, { a: "start", x: 2 })}
${lab(300, 108, "Sommer", 1, { a: "start", x: 2 })}${lab(300, 128, "Frühjahr", 2, { a: "start" })}
${lab(180, 232, "hier treibt nichts mehr aus", 3)}
`), "Rosmarin nur leicht nach der Blüte formen. Thymian nur leicht einkürzen. Bei Salbei erst schneiden, wenn keine starken Fröste mehr kommen.");

/* 4 Obstbaum */
GD("obstbaum", "Obstbaum: Erhaltungsschnitt", ["apfel", "birne", "pflaume", "mirabelle", "reneklode", "suesskirsche", "sauerkirsche", "quitte", "aprikose", "maulbeere", "feige"],
"Ziel ist eine lichte Krone mit einer Mitte und 3 bis 4 Leitästen. Kernobst (Apfel, Birne) im Spätwinter, Steinobst (Kirsche, Pflaume) besser im Sommer nach der Ernte.",
["Vorher: eine dichte Krone mit typischen Problemen.",
 "Wasserschosse entfernen: dünne Triebe, die steil nach oben wachsen. Im Sommer am besten ausreißen.",
 "Konkurrenztriebe zur Mitte entfernen, damit der Baum nur eine Spitze hat.",
 "Nach innen wachsende und sich kreuzende Äste herausnehmen.",
 "Abgetragenes, hängendes Holz auf einen jüngeren, nach außen wachsenden Trieb ableiten.",
 "Ergebnis: Licht kommt in die Krone. Die Leitäste enden etwa auf einer Höhe, die Mitte etwas höher. Höchstens ein Drittel des Holzes pro Jahr entfernen, Höhe laut GO bis 3,50 m."],
V(`${ground(222)}
${br("M180 222 L180 140", GC.old, 14)}${br("M180 150 L180 36", GC.mid, 8)}
${br("M180 150 Q130 116 76 84", GC.mid, 8)}${br("M180 150 Q230 116 284 84", GC.mid, 8)}
${br("M128 116 Q110 92 96 88", GC.mid, 3)}${br("M232 116 Q254 96 262 92", GC.mid, 3)}
${g('data-x="2" data-h="1"', br("M118 108 L114 42", GC.young, 3) + br("M244 106 L247 40", GC.young, 3))}
${cut(118, 106, 0, 1)}${cut(244, 104, 0, 1)}
${g('data-x="3" data-h="2"', br("M182 124 Q192 80 200 42", GC.mid, 5))}${cut(183, 122, 10, 2)}
${g('data-x="4" data-h="3"', br("M236 114 Q212 96 186 76", GC.mid, 4) + br("M130 118 Q160 96 178 86", GC.mid, 3))}${cut(234, 112, 50, 3)}${cut(133, 116, -40, 3)}
${g('data-x="5" data-h="4"', br("M84 90 Q58 118 50 150", GC.old, 5))}
${br("M92 94 Q74 72 62 52", GC.young, 3.5)}${cut(88, 92, 40, 4)}
${g('data-s="5"', `<path d="M70 80 L290 80" stroke="#3f8f3a" stroke-width="2" stroke-dasharray="6 4"/>` + lab(300, 76, "Saftwaage", null, { a: "start" }))}
${lab(70, 30, "Wasserschosse", 1, { x: 2 })}${lab(230, 30, "Konkurrenztrieb", 2, { x: 3 })}${lab(300, 128, "nach innen", 3, { x: 4 })}${lab(40, 166, "hängt, abgetragen", 4, { x: 5, a: "start" })}
`), "Steinobst (Kirsche, Pflaume, Aprikose) möglichst im Sommer nach der Ernte schneiden. Große Wunden im Winter fördern Gummifluss. Verwilderte Bäume über 2 bis 3 Jahre zurückführen.");

/* 5 Pfirsich */
GD("pfirsich", "Pfirsich: Fruchtschnitt zur Blüte", ["pfirsich"],
"Pfirsiche tragen nur an Trieben aus dem Vorjahr. Deshalb wird jedes Jahr kräftig geschnitten, am besten zur Blüte, wenn man die Knospen gut erkennt.",
["Legende: runde Knospen sind Blütenknospen, spitze sind Blattknospen. Wahre Fruchttriebe haben beides nebeneinander.",
 "Triebe, die im letzten Jahr getragen haben, entfernen. Sie bringen keine Früchte mehr.",
 "Etwa jeden zweiten Fruchttrieb auf 2 Knospen kürzen. Daraus wachsen die Fruchttriebe für das nächste Jahr.",
 "Die übrigen Fruchttriebe bleiben und tragen in diesem Jahr.",
 "Ergebnis im Sommer: aus den kurzen Zapfen wachsen neue Triebe, an den langen hängen die Früchte."],
V(`${ground(226)}
${br("M14 190 Q180 160 350 120", GC.old, 10)}
${g('data-x="2" data-h="1"', br("M70 178 Q62 140 58 96", "#8a7a6a", 4) + `<circle cx="60" cy="120" r="3" fill="#6b5a4a"/><circle cx="58" cy="104" r="3" fill="#6b5a4a"/>`)}${cut(69, 172, 0, 1)}
${[[130, 168], [200, 156], [270, 141], [330, 126]].map(([x, y], i) => {
  const top = y - 92, dx = (i - 1.5) * 6;
  const pts = [0.25, 0.42, 0.58, 0.74, 0.88].map(t => [x + dx * t, y - (y - top) * t]);
  const body = br(`M${x} ${y} L${x + dx} ${top}`, "#b5523a", 4) + pts.map(([px, py], k) => `<circle cx="${px - 5}" cy="${py}" r="3.3" fill="#f3a3c2"/><circle cx="${px + 5}" cy="${py}" r="3.3" fill="#f3a3c2"/><path d="M${px - 1.6} ${py + 3} L${px} ${py - 4} L${px + 1.6} ${py + 3}Z" fill="#4f8a2e"/>`).join("");
  if (i % 2 === 0) return g('data-x="3" data-h="2"', `<g>${body}</g>`) + br(`M${x} ${y} L${x + dx * 0.32} ${y - (y - top) * 0.32}`, "#b5523a", 4) + cut(x + dx * 0.34, y - (y - top) * 0.34, 0, 2) + g('data-s="4"', br(`M${x + dx * 0.25} ${y - (y - top) * 0.25} Q${x + 14} ${y - 50} ${x + 18} ${y - 70}`, GC.young, 3) + leafAt(x + 16, y - 60, -40, 10));
  return g('data-h="3"', body) + g('data-s="4"', `<circle cx="${x + dx * 0.5 + 9}" cy="${y - (y - top) * 0.5 + 8}" r="7" fill="#f2a65a"/>`);
}).join("")}
${g('data-x="1"', `<circle cx="30" cy="40" r="4" fill="#f3a3c2"/>` + lab(40, 44, "Blütenknospe", null, { a: "start" }) + `<path d="M28 60 L30 52 L32 60Z" fill="#4f8a2e"/>` + lab(40, 60, "Blattknospe", null, { a: "start" }))}
${lab(58, 86, "trug letztes Jahr", 1, { x: 2 })}${lab(160, 40, "auf 2 Knospen", 2, { x: 4 })}
`), "Gegen die Kräuselkrankheit den Baum von Dezember bis zum Austrieb vor Regen schützen.");

/* 6 Himbeeren */
GD("himbeere", "Himbeeren und Brombeeren schneiden", ["himbeere", "himbeere-herbst", "brombeere"],
"Sommerhimbeeren tragen an den Ruten vom Vorjahr, Herbsthimbeeren an den diesjährigen. Daraus ergibt sich der Schnitt.",
["Sommerhimbeeren nach der Ernte: braune, abgetragene Ruten und grüne Jungruten stehen nebeneinander.",
 "Alle abgetragenen Ruten direkt über dem Boden abschneiden.",
 "Von den Jungruten nur 8 bis 10 kräftige pro Meter stehen lassen, schwache entfernen.",
 "Im März die Spitzen knapp über dem obersten Draht einkürzen.",
 "Herbsthimbeeren: im Winter alle Ruten bodennah abschneiden. Im Frühjahr wachsen neue, die im Herbst tragen."],
V(`${ground()}
<line x1="186" y1="20" x2="186" y2="230" stroke="#e7dfcc" stroke-width="1.5" stroke-dasharray="4 4"/>
${lab(96, 18, "Sommerhimbeere", null, { c: "h" })}${lab(272, 18, "Herbsthimbeere", null, { c: "h" })}
<rect x="18" y="60" width="5" height="152" fill="#8a6a45"/><rect x="168" y="60" width="5" height="152" fill="#8a6a45"/>
<line x1="20" y1="72" x2="170" y2="72" stroke="#888" stroke-width="1.5"/><line x1="20" y1="132" x2="170" y2="132" stroke="#888" stroke-width="1.5"/>
${g('data-x="2" data-h="1"', [44, 86, 128].map(x => br(`M${x} 212 Q${x - 4} 140 ${x + 6} 62`, "#8a6040", 4) + br(`M${x - 2} 130 l-12 -10 M${x} 100 l12 -8`, "#8a6040", 2)).join(""))}
${[44, 86, 128].map(x => cut(x, 204, 0, 1, 14)).join("")}
${[60, 104, 146].map(x => g('data-x="4"', br(`M${x} 74 L${x + 2} 50`, GC.young, 3.5)) + br(`M${x} 212 Q${x - 3} 140 ${x} 74`, GC.young, 3.5)).join("")}
${g('data-x="3" data-h="2"', br("M72 212 Q70 170 76 130", GC.young, 1.8) + br("M116 212 Q114 180 120 150", GC.young, 1.8))}${cut(72, 206, 0, 2, 12)}${cut(116, 206, 0, 2, 12)}
${[60, 104, 146].map(x => cut(x + 1, 66, 0, 3, 12)).join("")}
${g('data-x="4" data-h="4"', [214, 240, 266, 292, 318].map((x, i) => br(`M${x} 212 Q${x - 4} 140 ${x + 4} ${70 + (i % 2) * 14}`, "#8a6040", 3.5)).join(""))}
${[214, 240, 266, 292, 318].map(x => cut(x, 206, 0, 4, 12)).join("")}
${lab(96, 228, "abgetragen weg", 1, { x: 2 })}${lab(96, 46, "Spitzen kürzen", 3)}${lab(270, 228, "alles bodennah", 4)}
`), "Brombeeren werden wie Sommerhimbeeren behandelt: abgetragene Ruten im März bodennah weg, 4 bis 6 junge Ruten anbinden.");

/* 7 Weinrebe */
GD("weinrebe", "Weinrebe: Zapfenschnitt und Sommerschnitt", ["weinrebe"],
"Die Rebe trägt an grünen Trieben, die aus dem Holz vom Vorjahr wachsen. Im Winter wird jede Rute auf einen kurzen Zapfen zurückgenommen.",
["Winter: am waagerechten Arm stehen die Ruten des letzten Jahres.",
 "Jede Rute auf 2 Augen (Knospen) zurückschneiden. Bis Ende Februar erledigen, später bluten die Reben.",
 "Ergebnis: kurze Zapfen mit je 2 Augen.",
 "Sommer: aus den Augen wachsen grüne Triebe mit Trauben. Kleine Geiztriebe in den Blattachseln ausbrechen.",
 "Triebe 2 bis 3 Blätter nach der letzten Traube kappen. So geht die Kraft in die Trauben."],
V(`${ground()}
<rect x="30" y="90" width="6" height="122" fill="#8a6a45"/><line x1="30" y1="112" x2="340" y2="112" stroke="#888" stroke-width="1.5"/>
${br("M60 212 L60 116 Q64 110 90 110 L330 110", GC.old, 8)}
${[100, 150, 200, 250, 300].map(x => g('data-x="2" data-h="1"', br(`M${x} 108 Q${x - 6} 70 ${x + 8} 30`, GC.mid, 3.5) + buds([[x - 2, 80], [x, 60], [x + 4, 42]], "#6b4a2a"))
  + br(`M${x} 110 L${x - 1} 92`, GC.mid, 4.5) + buds([[x - 3, 101], [x + 2, 94]], "#6b4a2a") + cut(x, 89, 0, 1, 14)
  + g('data-s="3"', br(`M${x} 92 Q${x + 4} 60 ${x - 2} 30`, GC.young, 3) + leafAt(x - 10, 70, -20, 14) + leafAt(x + 10, 52, 20, 14) + leafAt(x - 9, 38, -20, 12)
    + `<g fill="#6a3f8a">${[[0, 0], [5, 2], [-5, 2], [0, 6], [4, 9], [-4, 9], [0, 13]].map(([dx, dy]) => `<circle cx="${x + 9 + dx}" cy="${76 + dy}" r="3"/>`).join("")}</g>`)
  + g('data-s="3" data-x="4" data-h="3"', br(`M${x + 2} 64 l-9 -8`, GC.young, 2))
  + g('data-x="4"', g('data-s="3"', br(`M${x - 2} 30 L${x - 4} 14`, GC.young, 3))) + cut(x - 2, 32, 0, 4, 12)
).join("")}
${lab(330, 60, "Ruten", 0, { a: "end", x: 1 })}${lab(330, 136, "2 Augen", 2, { a: "end", x: 3 })}
`), "Pilzwiderstandsfähige Sorten (PiWi) brauchen kaum Pflanzenschutz und passen gut in den Kleingarten.");

/* 8 Rosen */
GD("rosen", "Rosen schneiden", ["strauchrose", "kletterrose"],
"Hauptschnitt im Frühjahr, wenn die Forsythien blühen. Im Sommer wird Verblühtes entfernt.",
["Frühjahr: tote, kranke und dünne Triebe erkennen.",
 "Diese Triebe bodennah oder bis ins gesunde Holz entfernen.",
 "Kräftige Triebe um etwa ein Drittel kürzen, jeweils über einer nach außen zeigenden Knospe.",
 "Sommer: Verblühtes abschneiden, und zwar über dem ersten voll entwickelten, fünfteiligen Blatt.",
 "Ergebnis: Aus der Knospe darunter kommt ein neuer Blütentrieb."],
V(`${ground()}
${g('data-x="2" data-h="1"', br("M120 212 Q100 160 92 110", "#8a8a7a", 2.5) + br("M134 212 Q150 170 168 150", "#7a6a5a", 2))}${cut(120, 204, 0, 1, 12)}${cut(134, 205, 0, 1, 12)}
${[[110, 50], [128, 40], [146, 52], [92, 70]].map(([x, y], i) => {
  const yc = 120 - i * 6;
  return g('data-x="3"', br(`M${x + (i - 1.5) * 4} ${yc} L${x} ${y}`, "#4f7a3a", 4)) + br(`M127 212 Q${(127 + x) / 2} 170 ${x + (i - 1.5) * 4} ${yc}`, "#4f7a3a", 4) + cut(x + (i - 1.5) * 4, yc - 2, -12, 2, 14) + `<path d="M${x + (i - 1.5) * 4 + (i < 2 ? -3 : 3)} ${yc + 8} l${i < 2 ? -6 : 6} -4 l0 7z" fill="#c85a3a"/>`;
}).join("")}
${lab(90, 228, "dünn, tot", 1, { x: 2 })}${lab(60, 120, "über Außenknospe", 2, { a: "start", x: 3 })}
${g('data-s="3"', `<rect x="196" y="20" width="156" height="196" rx="12" fill="#fffdf6" stroke="#e3dccb"/>` + br("M274 206 L274 40", "#4f7a3a", 3.5)
  + [[52, 3], [96, 3], [138, 5], [176, 5]].map(([y, n], k) => { const side = k % 2 ? 1 : -1; let h = br(`M274 ${y} l${side * 18} -6`, "#4f7a3a", 1.5); for (let j = 0; j < n; j++) h += leafAt(274 + side * (8 + j * 6), y - 3 - j * 1.5 + (j % 2 ? 4 : -4), side * 30, 9, "#5c8f3e"); return h; }).join("")
  + g('data-x="3"', br("M274 40 L274 28", "#4f7a3a", 3) + `<circle cx="274" cy="26" r="9" fill="#9b6b6b"/>`) + lab(300, 100, "3-teilig", null, { a: "start" }) + lab(220, 142, "5-teilig", null, { a: "start" }))}
${cut(274, 128, -12, 3, 16)}
${g('data-s="4"', br("M278 132 Q296 110 300 84", GC.young, 3) + `<circle cx="300" cy="80" r="6" fill="#e86a8a"/>`)}
`), "Kletterrosen: Hauptranken waagerecht binden, Seitentriebe auf 2 bis 3 Augen kürzen. Ungefüllte Sorten sind gut für Insekten.");

/* 9 Tomaten */
GD("tomate", "Tomaten ausgeizen", ["tomate"],
"Stabtomaten werden eintriebig gezogen. Die Seitentriebe (Geiztriebe) kosten Kraft und machen die Pflanze dicht und feucht.",
["Aufbau: Haupttrieb, Blätter und Blütenstände. In der Achsel zwischen Blatt und Stamm wächst der Geiztrieb.",
 "Geiztriebe wöchentlich ausbrechen, solange sie klein sind. Mit den Fingern seitlich wegdrücken.",
 "Untere Blätter bis zur ersten Fruchttraube entfernen. Das schützt vor Spritzwasser und Braunfäule.",
 "Ende August die Spitze über der obersten Traube kappen. Neue Blüten würden nicht mehr reif."],
V(`${ground(222)}
<rect x="220" y="20" width="4" height="202" fill="#a07a4a"/>
${br("M200 222 L200 30", "#5f8f3a", 6)}
${[[190, -1], [150, 1], [110, -1], [70, 1]].map(([y, s], i) => {
  const leaf = br(`M200 ${y} q${s * 30} -8 ${s * 62} 4`, "#5f8f3a", 2.5) + [14, 30, 46, 60].map(d => leafAt(200 + s * d, y - 4 + (d / 15), s * 20, 13, "#6f9e45")).join("");
  const geiz = g(`data-x="2" data-h="1"`, br(`M200 ${y - 3} q${s * 10} -10 ${s * 16} -26`, "#7fae4f", 2.5) + leafAt(200 + s * 16, y - 26, s * 50, 8, "#7fae4f"));
  return (i === 0 ? g('data-x="3" data-h="2"', leaf) + cut(200 + s * 6, y - 1, 90, 2, 12) : leaf) + geiz + cut(200 + s * 6, y - 8, 45 * s, 1, 10);
}).join("")}
${[[130, 1], [90, -1]].map(([y, s]) => br(`M200 ${y} q${s * 14} 2 ${s * 26} 14`, "#5f8f3a", 1.5) + `<g fill="#f4c430">${[0, 8, 16].map(d => `<circle cx="${200 + s * (14 + d * 0.6)}" cy="${y + 6 + d * 0.5}" r="3.3"/>`).join("")}</g>` + g('data-s="2"', `<g fill="#e04a2a">${[0, 8, 16].map(d => `<circle cx="${200 + s * (16 + d * 0.6)}" cy="${y + 12 + d * 0.5}" r="5"/>`).join("")}</g>`)).join("")}
${g('data-x="3"', br("M200 32 L200 14", "#5f8f3a", 5))}${cut(200, 40, 0, 3, 16)}
${lab(116, 160, "Geiztrieb", 0, { x: 2 })}${lab(300, 186, "Blatt", 0, { x: 3 })}${lab(270, 128, "Blütenstand", 0, { a: "start" })}
${lab(110, 232, "untere Blätter weg", 2)}${lab(240, 30, "Spitze kappen", 3, { a: "start" })}
`), "Buschtomaten und viele Cocktailtomaten werden nicht ausgegeizt. Immer nur von unten gießen.");

/* 10 Stauden */
GD("stauden", "Stauden zurückschneiden", ["sonnenhut", "fetthenne", "herbstaster", "katzenminze", "pfingstrose", "oregano", "minze", "beifuss", "funkie"],
"Die meisten Stauden ziehen im Herbst oberirdisch ein und treiben im Frühjahr aus der Wurzel neu aus.",
["Herbst und Winter: trockene Stängel und Samenstände stehen lassen. Sie sind Futter für Vögel, Winterquartier für Insekten und schützen den Wurzelstock.",
 "Spätwinter (Februar bis März), bevor der Neuaustrieb kommt: alle Stängel etwa eine Handbreit über dem Boden abschneiden.",
 "Ergebnis: Der Neuaustrieb hat Licht und Platz. Das Schnittgut kommt auf den Kompost."],
V(`${ground()}
${g('data-x="2"', [90, 110, 128, 146, 164, 182, 200, 218, 236, 254, 272].map((x, i) => br(`M${180 + (x - 180) * 0.4} 210 Q${x - 4} 140 ${x + (i % 3 - 1) * 6} ${70 + (i % 4) * 10}`, "#9a7a52", 2.5) + `<circle cx="${x + (i % 3 - 1) * 6}" cy="${66 + (i % 4) * 10}" r="${5 + (i % 2) * 2}" fill="#5a4030"/>`).join(""))}
${g('data-s="1" class="cut"', `<line x1="100" y1="194" x2="260" y2="194" stroke="${GC.cut}" stroke-width="4" stroke-dasharray="10 6" stroke-linecap="round"/>`)}
${[150, 165, 180, 195, 210].map((x, i) => br(`M${x} 210 L${x} 196`, "#9a7a52", 2.5)).join("")}
${g('data-s="2"', [140, 158, 176, 194, 212].map((x, i) => leafAt(x, 202, (i - 2) * 25, 16, "#7fae4f")).join(""))}
${g('data-x="1"', `<text x="270" y="60" font-size="22">🐦</text><text x="96" y="110" font-size="16">🐞</text>`)}
${lab(180, 30, "über Winter stehen lassen", 0, { x: 1 })}${lab(300, 198, "Handbreit", 1, { a: "start" })}${lab(180, 232, "Neuaustrieb", 2)}
`), "Ausnahmen: Pfingstrosen-Laub im Herbst abschneiden (Pilzkrankheiten). Gräser erst im März zusammenbinden und schneiden. Katzenminze zusätzlich nach der ersten Blüte halbieren.");

/* 11 Blumenzwiebeln */
GD("zwiebeln", "Pflanztiefe von Zwiebeln und Knollen", ["zwiebelblumen", "lilie", "knoblauch", "zwiebel", "dahlie"],
"Faustregel: Zwiebeln etwa zwei- bis dreimal so tief pflanzen, wie sie hoch sind. Spitze nach oben. In schweren Boden etwas Sand ins Pflanzloch.",
["Die Tiefe wird von der Erdoberfläche bis zur Unterseite der Zwiebel gemessen.",
 "Krokus: etwa 5 bis 8 cm tief, Abstand 5 cm. Pflanzzeit September bis Oktober.",
 "Tulpe: etwa 10 bis 15 cm tief, Abstand 10 cm. Pflanzzeit Oktober bis November.",
 "Narzisse: etwa 15 cm tief, Abstand 10 bis 15 cm. Pflanzzeit September bis Oktober.",
 "Lilie: etwa 15 bis 20 cm tief, auf eine Drainage aus Sand. Pflanzzeit Herbst oder Frühjahr.",
 "Knoblauch: Zehen etwa 5 cm tief, Spitze nach oben. Steckzwiebeln nur so tief, dass die Spitze noch herausschaut.",
 "Dahlien: Knolle nach den Eisheiligen nur 5 bis 10 cm tief, der alte Stängelrest zeigt nach oben."],
V(`<rect x="8" y="44" width="344" height="190" fill="#b8915f"/><rect x="8" y="44" width="344" height="190" fill="url(#gsoil)"/>
<defs><pattern id="gsoil" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r="1" fill="#9a7748"/><circle cx="10" cy="10" r="1.2" fill="#9a7748"/></pattern></defs>
<line x1="8" y1="44" x2="352" y2="44" stroke="#6b8f3a" stroke-width="4"/>
${[0, 5, 10, 15, 20].map(cm => `<line x1="8" y1="${44 + cm * 9}" x2="20" y2="${44 + cm * 9}" stroke="#fff" stroke-width="1.5"/><text x="23" y="${48 + cm * 9}" class="gl sm" text-anchor="start">${cm} cm</text>`).join("")}
${[[78, 7, 1, "Krokus", 14], [134, 12, 2, "Tulpe", 24], [190, 15, 3, "Narzisse", 28], [246, 18, 4, "Lilie", 30], [288, 5, 5, "Knobl.", 14], [334, 1, 5, "Steckz.", 14]].map(([x, d, s, n, h]) => {
  const yb = 44 + d * 9, w = h * 0.8;
  return g(`data-s="${s}"`, `<line x1="${x}" y1="44" x2="${x}" y2="${yb}" stroke="#fff" stroke-width="1.2" stroke-dasharray="3 3"/>`
    + `<path d="M${x - w / 2} ${yb - 2} Q${x - w / 2} ${yb - h * 0.9} ${x} ${yb - h * 1.3} Q${x + w / 2} ${yb - h * 0.9} ${x + w / 2} ${yb - 2} Z" fill="${n === "Knobl." ? "#f2ece0" : "#d9b48a"}" stroke="#7a5a35" stroke-width="1"/>`
    + br(`M${x - 4} ${yb} l-3 7 M${x} ${yb} l0 8 M${x + 4} ${yb} l3 7`, "#f5efe0", 1)
    + br(`M${x} 44 L${x} 26`, "#6f9e45", 3) + lab(x, 20, n, null) + lab(x, Math.min(228, yb + 18), d > 1 ? d + " cm" : "Spitze raus", null, { c: "sm w" }));
}).join("")}
${lab(180, 230, "Tiefe bis zur Unterseite der Zwiebel", 0, { c: "w", x: 1 })}
`), "Wühlmäuse fressen Tulpen und Lilien gern: Pflanzkorb aus Draht hilft. Narzissen werden nicht gefressen.");

/* 12 Hecke */
GD("hecke", "Hecken schneiden", ["hainbuche", "liguster", "kirschlorbeer", "buchs"],
"Eine Hecke bleibt nur dicht, wenn auch die unteren Zweige Licht bekommen. Darum wird sie trapezförmig geschnitten. Achtung: Hecken zu Nachbargärten sind laut GO 5.4 nicht erlaubt.",
["Die Hecke ist ausgewachsen und unförmig.",
 "Richtig: im Querschnitt ein Trapez, unten breiter als oben. Vor dem Schnitt auf Vogelnester prüfen!",
 "So bekommt jede Seite Licht und die Hecke bleibt bis unten grün.",
 "Falsch: oben breiter als unten. Die oberen Zweige beschatten die unteren, die Hecke verkahlt von unten.",
 "Wann: März bis September nur Form- und Pflegeschnitt (am besten Ende Juni). Radikaler Rückschnitt nur vom 1. Oktober bis 28. Februar."],
V(`${ground(176)}
${g('data-x="2"', `<path d="M42 176 Q30 120 44 76 Q70 40 100 52 Q140 38 150 82 Q164 130 148 176Z" fill="#7aa64d" opacity="0.75"/>`)}
<path d="M56 176 L76 62 L124 62 L144 176Z" fill="#5f8f3a"/>
${g('data-s="1" class="cut"', `<path d="M56 176 L76 62 L124 62 L144 176" fill="none" stroke="${GC.cut}" stroke-width="3.5" stroke-dasharray="9 6" stroke-linejoin="round"/>`)}
${good(100, 40, 2)}${g('data-s="2"', `<path d="M14 40 L60 100" stroke="#f4c430" stroke-width="2" stroke-dasharray="4 4"/><path d="M186 40 L140 100" stroke="#f4c430" stroke-width="2" stroke-dasharray="4 4"/><text x="8" y="36" font-size="16">☀️</text>`)}
${g('data-s="3"', `<path d="M214 176 L238 62 L320 62 L300 176Z" fill="none"/><path d="M226 62 L326 62 L300 140 L250 140Z" fill="#5f8f3a"/>` + br("M256 176 L254 140 M270 176 L272 140 M286 176 L290 140", "#7a5a35", 3) + lab(276, 196, "unten kahl", null))}${bad(276, 40, 3)}
${g('data-s="4"', `<g transform="translate(20 204)">${["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => `<rect x="${i * 27}" y="0" width="25" height="16" rx="3" fill="${i >= 2 && i <= 8 ? "#f5c66a" : "#7cb860"}"/><text x="${i * 27 + 12.5}" y="12" class="gl sm">${m}</text>`).join("")}</g>`)}
${lab(100, 196, "Trapez", 1)}
`), "Ende Juni (nach der Hauptbrutzeit) ist der beste Termin für den Formschnitt. Kirschlorbeer mit der Handschere schneiden.");

/* 13 Erdbeeren */
GD("erdbeere", "Erdbeeren nach der Ernte", ["erdbeere"],
"Nach der Ernte bereitet man die Pflanzen auf das nächste Jahr vor. Das beugt Krankheiten vor und stärkt das Herz der Pflanze.",
["Nach der Ernte: viele alte, oft fleckige Blätter und lange Ausläufer.",
 "Alte Blätter etwa 5 cm über dem Boden abschneiden. Das Herz in der Mitte nicht verletzen.",
 "Ausläufer abschneiden. Wer neue Pflanzen möchte, lässt den ersten Ableger an einem Ausläufer anwurzeln.",
 "Etwas Kompost um die Pflanzen geben. Im Herbst treibt frisches Laub aus."],
V(`${ground(206)}
${g('data-x="2"', [-70, -45, -20, 5, 30, 55, 80].map((a, i) => br(`M120 202 l${Math.sin(a * Math.PI / 180) * 70} ${-Math.cos(a * Math.PI / 180) * 70}`, "#6b8a3a", 2) + [0, 1, 2].map(k => leafAt(120 + Math.sin((a + (k - 1) * 14) * Math.PI / 180) * 78, 202 - Math.cos((a + (k - 1) * 14) * Math.PI / 180) * 78, a + (k - 1) * 14 + 90, 18, i % 2 ? "#8a8a3a" : "#5f8f3a")).join("")).join(""))}
${g('data-s="1" class="cut"', `<line x1="60" y1="190" x2="180" y2="190" stroke="${GC.cut}" stroke-width="4" stroke-dasharray="9 6" stroke-linecap="round"/>`)}
${[-40, -15, 15, 40].map(a => br(`M120 202 l${Math.sin(a * Math.PI / 180) * 14} ${-Math.cos(a * Math.PI / 180) * 14}`, "#6b8a3a", 2)).join("")}
<ellipse cx="120" cy="200" rx="9" ry="5" fill="#5f8f3a"/>
${g('data-s="3"', [0, 1, 2, 3].map(i => leafAt(110 + i * 7, 186 - (i % 2) * 6, (i - 1.5) * 30 + 90, 11, "#8fc260")).join(""))}
${g('data-x="3"', br("M132 204 Q200 196 250 204", "#9a6a4a", 2) + `<g transform="translate(256 200)">${leafAt(-6, -10, 60, 12, "#5f8f3a")}${leafAt(6, -10, 120, 12, "#5f8f3a")}</g>` + br("M262 204 Q300 198 336 205", "#9a6a4a", 2) + `<g transform="translate(338 202)">${leafAt(-4, -7, 70, 9, "#5f8f3a")}${leafAt(4, -7, 110, 9, "#5f8f3a")}</g>`)}
${cut(142, 203, 90, 2, 12)}
${g('data-s="3"', [70, 90, 150, 170, 190].map(x => `<ellipse cx="${x}" cy="210" rx="9" ry="3" fill="#5a3d24"/>`).join(""))}
${lab(120, 100, "alte Blätter", 0, { x: 2 })}${lab(196, 186, "5 cm", 1, { a: "start", x: 3 })}${lab(270, 180, "Ausläufer", 0, { x: 3 })}${lab(120, 162, "Herz schonen", 1)}${lab(170, 230, "Kompost", 3)}
`), "Beete nach 3 bis 4 Jahren an anderer Stelle neu anlegen. Im Mai Stroh unterlegen, dann bleiben die Früchte sauber.");

/* 14 Obstbaum pflanzen */
GD("pflanzen", "Obstbaum, Strauch oder Rebe richtig pflanzen", ["apfel", "birne", "pflaume", "mirabelle", "reneklode", "suesskirsche", "sauerkirsche", "saeulenobst", "pfirsich", "aprikose", "quitte", "feige", "maulbeere", "weinrebe"],
"Beste Pflanzzeit ist Oktober bis November oder März bis April. Laut Wertermittlung sind Reneklode und Weinreben zu tief gepflanzt, genau das zeigt Schritt 4.",
["Pflanzgrube etwa doppelt so breit und tief wie das Wurzelwerk ausheben, den Boden unten lockern. Reifen Kompost unter die Erde mischen.",
 "Den Pfahl zuerst einschlagen, auf der Seite, aus der meist der Wind kommt (meist Westen).",
 "Baum so einsetzen, dass die Veredlungsstelle (der Knick über der Wurzel) eine Handbreit über der Erde bleibt. Erde einfüllen und leicht antreten.",
 "Falsch: zu tief gepflanzt. Das Edelreis bildet eigene Wurzeln, die schwach wachsende Unterlage verliert ihre Wirkung, der Baum wird zu groß oder kränkelt.",
 "Mit Kokosstrick in Achterschlinge am Pfahl anbinden, Gießrand formen, kräftig angießen und mulchen."],
V(`<rect x="8" y="126" width="344" height="108" fill="#cfae84"/><line x1="8" y1="126" x2="352" y2="126" stroke="#6b8f3a" stroke-width="4"/>
<path d="M60 126 Q64 196 130 204 Q196 196 200 126Z" fill="#a7814f"/>
${lab(130, 220, "doppelt so breit", 0, { c: "sm" })}
${g('data-s="1"', `<rect x="92" y="34" width="6" height="150" fill="#8a6a45"/>` + lab(95, 28, "Pfahl (Westen)", null))}
${g('data-s="2"', br("M130 186 Q118 196 100 196 M130 186 Q142 198 160 196 M130 186 L128 200", "#7a5a35", 2.5) + br("M130 186 L130 110", GC.old, 8) + `<ellipse cx="131" cy="110" rx="6" ry="4.5" fill="#6b4a2a"/>` + br("M131 110 Q134 70 132 40", GC.mid, 6) + br("M132 66 Q150 54 160 44 M132 76 Q114 62 104 52", GC.mid, 3)
  + `<path d="M150 110 L150 126" stroke="#3f8f3a" stroke-width="2"/><path d="M146 110 L154 110 M146 126 L154 126" stroke="#3f8f3a" stroke-width="2"/>` + lab(158, 120, "Handbreit", null, { a: "start" }) + lab(158, 106, "Veredlung", null, { a: "start" }))}${good(186, 90, 2)}
${g('data-s="4"', `<path d="M96 70 q-6 4 0 8 q6 4 0 8" stroke="#c8a060" stroke-width="2.5" fill="none"/>` + `<path d="M62 124 Q70 116 82 124 M178 124 Q190 116 198 124" stroke="#7a5a35" stroke-width="5" fill="none"/>` + `<ellipse cx="130" cy="127" rx="40" ry="3" fill="#5a3d24"/>`)}
${g('data-s="3"', `<rect x="222" y="40" width="130" height="164" rx="10" fill="#fffdf6" stroke="#e3dccb"/><rect x="226" y="128" width="122" height="72" fill="#cfae84"/><line x1="226" y1="128" x2="348" y2="128" stroke="#6b8f3a" stroke-width="3"/>`
  + br("M286 190 L286 70", GC.old, 7) + `<ellipse cx="287" cy="150" rx="6" ry="4.5" fill="#6b4a2a"/>` + br("M287 150 Q300 160 314 158 M287 154 Q272 166 262 162", "#7a5a35", 2) + lab(287, 60, "zu tief", null) + lab(300, 146, "Veredlung", null, { a: "start", c: "sm" }))}${bad(330, 80, 3)}
`), "Veredlungsstelle nie mit Erde oder Mulch bedecken. Kleingarten-Obstbäume auf schwach wachsender Unterlage brauchen dauerhaft einen Pfahl.");

/* Zuordnung Pflanze -> Anleitungen */
function guidesFor(libId) {
  const L = LIBM[libId]; if (!L) return [];
  return Object.values(GUIDES).filter(G => G.plants === "*holz" ? (["obst", "beeren", "gehoelz"].includes(L.cat) && !L.verboten) : G.plants.includes(libId))
    .sort((a, b) => (a.plants === "*holz") - (b.plants === "*holz"));
}

if (typeof window !== "undefined" && window.EXTRA_GUIDE_LINKS) Object.entries(window.EXTRA_GUIDE_LINKS).forEach(([g, ids]) => { if (GUIDES[g] && Array.isArray(GUIDES[g].plants)) ids.forEach(id => { if (!GUIDES[g].plants.includes(id)) GUIDES[g].plants.push(id); }); });

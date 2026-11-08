"use strict";
/* ============ Grunddaten ============ */
const MON = ["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];
const MONL = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const TT = {
  S:{n:"Schneiden",i:"✂️",c:"#d14b3d"}, E:{n:"Ernten",i:"🧺",c:"#e38b1f"},
  D:{n:"Düngen",i:"🌱",c:"#8a6a3b"}, P:{n:"Säen & Pflanzen",i:"🌰",c:"#4b9a3c"},
  W:{n:"Winterschutz",i:"❄️",c:"#3b82c4"}, K:{n:"Pflege & Kontrolle",i:"🔍",c:"#8a5cb8"},
  A:{n:"Arbeiten & Pflichten",i:"🛠️",c:"#55606b"}
};
const TORDER = ["S","E","A","D","P","W","K"];
const STRENGTH = ["","leicht","mittel","stark"];
const TYPES = {
  rasen:{n:"Rasen",f:"#b5d68a",g:"erh",lib:"rasen"},
  wiese:{n:"Blumenwiese",f:"#d6e39a",g:"erh",lib:"blumenwiese"},
  steingarten:{n:"Steingarten / Trockenmauer",f:"#cfc8bb",g:"erh",lib:"steingarten"},
  zier:{n:"Zierbeet / Blumen",f:"#efc6d8",g:"erh"},
  teich:{n:"Feuchtbiotop",f:"#86bde6",g:"erh"},
  nutz:{n:"Gemüsebeet",f:"#c29a6b",g:"anb"},
  kraeuter:{n:"Kräuterbeet",f:"#a9bf83",g:"anb"},
  beeren:{n:"Obst- / Beerenfläche",f:"#9db878",g:"anb"},
  weg:{n:"Weg (Platten)",f:"#d8d2c6",g:"bau"},
  terrasse:{n:"Terrasse / Sitzplatz",f:"#e6d2b2",g:"bau"},
  laube:{n:"Laube",f:"#8d939b",g:"bau",bau:1},
  anbau:{n:"Anbau",f:"#a9bdd2",g:"bau",bau:1},
  ueberdacht:{n:"Überdachte Terrasse",f:"#b88f6e",g:"bau",bau:1},
  schuppen:{n:"Geräteschuppen",f:"#4f7d5c",g:"bau",bau:1},
  gewaechshaus:{n:"Gewächshaus",f:"#dcf0f2",g:"bau",bau:1},
  tunnel:{n:"Folientunnel",f:"#c3e6d2",g:"bau",bau:1},
  hochbeet:{n:"Hochbeet",f:"#a5784b",g:"anb",bau:1},
  pergola:{n:"Pergola",f:"#c9a77c",g:"none",bau:1},
  pavillon:{n:"Pavillon",f:"#efe9db",g:"none",bau:1},
  kompost:{n:"Kompost",f:"#6b4f33",g:"anb",bau:1},
  wasser:{n:"Wasser (Schacht, Speicher)",f:"#7fb3e6",g:"none",bau:1},
  tor:{n:"Gartentor / Zaun",f:"#5f9566",g:"none",bau:1},
  sonst:{n:"Sonstiges",f:"#dddddd",g:"none",bau:1}
};
const AREA_TYPES = Object.keys(TYPES).filter(k => !TYPES[k].bau);
const BAU_TYPES = Object.keys(TYPES).filter(k => TYPES[k].bau);

/* ============ Aufgaben parsen ============ */
function parseMonths(str) {
  const set = new Set();
  String(str).split(",").forEach(part => {
    const [a, b] = part.split("-").map(Number);
    if (!b) { set.add(a); return; }
    let m = a;
    for (let k = 0; k < 12; k++) { set.add(m); if (m === b) break; m = m % 12 + 1; }
  });
  return set;
}
function parseTask(s, id) {
  const [t, m, st, x, rep] = s.split("|");
  const parts = m.split(",");
  const first = +parts[0].split("-")[0];
  const lp = parts[parts.length - 1].split("-");
  const last = +(lp[1] || lp[0]);
  return { id, t, m, ms: parseMonths(m), s: +st || 0, x, rep: rep || "", wrap: parts.length === 1 && first > last, last, raw: s };
}
const LIBM = {};
LIB.forEach(p => { LIBM[p.id] = p; p.T = p.tasks.map((s, i) => parseTask(s, "L" + i)); });

/* Aufgaben für den ganzen Garten (aus GO, Satzung, Übergabe) */
const GT = [];
function G(id, icon, m, x, at, rep, src) { const t = parseTask("A|" + m + "||" + x + "|" + (rep || ""), "G:" + id); t.icon = icon; t.at = at; t.src = src; GT.push(t); }
G("wasser-aus","💧","10-11","Winterfest machen: Die Wasseruhr wird von November bis März abgestellt. Zählerstand notieren, Leitungen, Standrohr und Wasserschacht entleeren, Hähne offen lassen (GO 4.2).","wasserschacht");
G("speicher-leer","💧","11","Regentonnen und Speicher entleeren oder nur halb füllen, damit Frost sie nicht sprengt. Pumpen und Schläuche frostfrei lagern.","speicher1000");
G("wasser-an","💧","3-4","Wasser wieder an: Leitung, Schacht und Uhr auf Undichtigkeiten prüfen. Wasserverluste werden auf alle Pächter umgelegt (GO 4.4).","wasserschacht");
G("regenwasser","💧","5-9","Sparsam gießen, bevorzugt Regenwasser, am besten morgens. Leitungswasser ist sparsam zu verbrauchen (GO 4.1).","speicher1000","m");
G("laube-fruehjahr","🏠","3-4","Laube Frühjahrscheck: Schweißbahndach und First auf Risse und Blasen prüfen, Dachrinne und Fallrohr frei machen, innen auf Feuchtigkeit kontrollieren. Die Unterhaltung der Laube ist Pflicht (GO 7.2).","laube");
G("laube-herbst","🏠","10-11","Vor dem Winter: Laub aus Dachrinne und Fallrohr entfernen, Dach prüfen, Fenster und Türen dicht, Lebensmittel raus (Mäuse), gelegentlich lüften.","laube");
G("holz-streichen","🖌️","5-9","Holzteile prüfen und bei trockenem Wetter streichen: Türen, Terrassenüberdachung, Pergola, Gerätehaus.","terrasse-dach");
G("versicherung","📄","1","Laubenversicherung (Feuer, Einbruch, Aufräum- und Abbruchkosten) dem Vorstand nachweisen, falls du nicht die Kollektivversicherung nutzt. Sonst droht die Kündigung (Satzung § 28).","laube");

G("laub","🍂","10-11","Laub rechen: auf den Kompost, als Mulch unter Sträucher oder als Laubhaufen für Igel. Verbrennen ist verboten (GO 9.6).",null);
G("weg-vorm-garten","🧹","3-11","Weg und Anpflanzungen vor dem Garten sauber halten, überhängende Zweige zurückschneiden (GO 2.1, GO 8).","hauptweg","m");
G("gh-fruehjahr","🪴","2-3","Gewächshaus und Folientunnel reinigen, Folie auf Risse prüfen, Boden lockern und mit Kompost versorgen.","gewaechshaus");
G("tunnel-winter","🌬️","11","Folientunnel sturm- und schneesicher machen (Verankerung prüfen, Folie bei Bedarf abnehmen).","tunnel");
G("nistkasten","🐦","10-2","Nistkästen reinigen und Insektenhotel prüfen. Biotope sollen sich ins Gesamtbild einfügen (GO 9.7).",null);
G("planung","📝","1-2","Beetplan und Fruchtfolge fürs neue Jahr festlegen (Starkzehrer nicht zweimal an dieselbe Stelle). Saatgut und Erde torffrei kaufen (GO Präambel). Mischkultur nutzen (GO 8).",null);
G("gemeinschaft","👥","3-10","Gemeinschaftsstunden einplanen: Termine kommen vom Vorstand mit mindestens 14 Tagen Vorlauf (GO 3.2). Geleistete Stunden unter „Regeln“ eintragen.",null);
G("kuendigungsfrist","📄","5","Erinnerung: Wer den Garten abgeben möchte, muss bis zum 3. Werktag im Juni schriftlich kündigen (zum 30. November, Satzung § 17).",null);
G("schnittfenster","📅","10","Ab 1. Oktober beginnt das Zeitfenster für Roden, Umpflanzen und radikalen Rückschnitt (bis 28./29.2., BNatSchG § 39, GO 9.4). Größere Schnittarbeiten jetzt einplanen.",null);
G("obst-reduzieren","🌳","11-2","Obstbaumbestand mit der Fachberatung durchgehen: Laut GO 8 sind auf 512 m² etwa 5 Buschbäume und 2 Halbstämme erlaubt. Festlegen, welche Bäume weichen oder durch Säulen- oder Spalierobst ersetzt werden. Roden nur bis 28.2.",null,"e");
G("uebergabe","📄","11-12","Übergabe klären: Unzulässige Einrichtungen und Pflanzen muss laut Niederschrift der scheidende Pächter entfernen oder die Kosten tragen. Vor dem Kaufvertrag mit dem Vorstand abstimmen, was bleibt.",null,"e");
G("go-2009","📄","11-12","Mit dem Vorstand klären, welche Abweichungen nach der alten Gartenordnung (2009) noch bis Ende 2027 gelten und was danach angepasst werden muss.",null,"e");

/* ============ Startdaten ============ */
function o(id, type, x, y, w, h, label, ex) { return Object.assign({ id, type, x, y, w, h, label }, ex || {}); }
function p(id, lib, x, y, ex) { return Object.assign({ id, lib, x, y }, ex || {}); }
function defaultState() {
  return {
    v: 1, name: "Mein Kleingarten", size: 512, W: 19, H: 26.2,
    objs: [
      o("tor","tor",2.0,0,1.4,0.35,"Gartentor (grünes Maschendrahttor)",{note:"Tor steht schief, Pfosten rostig. Oben grenzt der Garten mit Maschendrahtzaun an den Anlagenweg.",tasks:["A|4-9||Auflage aus der Übergabe: Gartentor überholen und streichen (Rost entfernen, grundieren, lackieren). Schiefes Tor richten, Scharniere und Pfosten prüfen.|e"]}),
      o("hauptweg","weg",1.95,0.37,1.0,18.65,"Hauptweg (Platten)",{tasks:["S|11-2|2|Auflage aus der Übergabe: Anpflanzungen am Hauptweg dringend zurückschneiden, damit der Weg frei begehbar ist (GO 8).|e"]}),
      o("kraeuterbeet","kraeuter",0.28,0.37,1.67,19.55,"Kräuterbeet (links vom Hauptweg)"),
      o("beet-tor","zier",3.1,1.95,3.9,0.9,"Blumenbeet am Gartentor"),
      o("beerenreihe","beeren",3.1,0.12,4.9,0.85,"Johannisbeer-Beet (an der nördlichen Grenze)"),
      o("gemuese1","nutz",10.6,0.6,3.9,4.6,"Gemüsebeet oben (Blattsenf, Möhren)"),
      o("pergola","pergola",8.5,9.6,1.8,6.0,"Pergola (6 Holzbögen über dem Rasenweg)",{note:"Laubengang aus Holzbögen mit Rankgittern, unten Rasenweg. Daran Weinreben (links) und Kletterrosen (rechts). Holz teils vergraut und schwarz: auf Fäulnis an den Pfostenfüßen prüfen.",tasks:["A|4-5||Pergola prüfen: Pfostenfüße und Verbindungen auf Fäulnis und Festigkeit kontrollieren, lockere Teile nachschrauben, bei Bedarf mit Holzschutz streichen.|e"]}),
      o("kompost","kompost",16.9,20.15,0.9,0.9,"Komposter (Drahtgestell, 90 × 90 × 75 cm)",{note:"Drahtkomposter am Plattenweg zur Außentür, oben mit Stroh abgedeckt.",tasks:["K|3-11||Kompost befüllen: Grünes (Rasenschnitt, Küchenreste) und Braunes (Laub, Stroh, Häcksel) im Wechsel schichten, bei Trockenheit leicht anfeuchten. Keine kranken Pflanzen, Samenunkräuter oder Wurzelunkräuter wie Giersch hinein (GO 9.5).|m","K|11||Kompost für den Winter mit Laub oder Stroh abdecken, damit er nicht auskühlt und nicht ausgewaschen wird.","K|3-4,9-10||Kompost umsetzen: Gitter abheben, daneben wieder aufstellen und das Material umgeschichtet einfüllen. Unten liegt nach etwa einem Jahr reifer Kompost: sieben und auf Beete und Baumscheiben verteilen."]}),
      o("wasserschacht","wasser",3.06,20.02,1.0,0.9,"Wasserschacht mit Uhr"),
      o("standrohr","wasser",3.06,0.47,0.4,0.4,"Standrohr mit Absperrhahn"),
      o("rasen1","rasen",8.2,7.7,2.4,7.6,"Rasenweg durch die Pergola"),
      o("rasen2","rasen",10.6,15.2,7.9,6.2,"Rasen unten rechts (Obstbäume)"),
      o("gewaechshaus","gewaechshaus",4.63,7.81,1.85,1.85,"Glas-Gewächshaus (1,85 × 1,85 m)"),
      o("tunnel","tunnel",4.63,10.38,3.0,2.0,"Folientunnel (3 × 2 m)",{tasks:["A|11-12||Mit dem Vorstand klären: Laut GO 7.4 ist nur ein Gewächshaus pro Garten zulässig (max. 6 m², max. 2,20 m hoch). Hier stehen zwei.|e"]}),
      o("beet-sicht","zier",0.28,19.91,2.13,4.82,"Beet am Sichtschutz (Rhododendren)"),
      o("weg-tank","weg",2.41,19.91,0.6,4.5,"Kleiner Weg zu den Regentonnen (Klinker)"),
      o("sichtschutz","tor",0.14,19.91,0.14,6.29,"Sichtschutzzaun zum Nachbarn"),
      o("speicher1000","wasser",1.9,24.75,1.1,1.1,"Wasserspeicher 1000 l (IBC, blaue Holzverkleidung)",{note:"IBC-Tank in blauer Holzverkleidung am Ende des kleinen Wegs, gespeist über das Fallrohr vom Wintergarten-Dach. Oben ist eine große Öffnung ausgeschnitten.",tasks:["A|3-4||Öffnung oben im Tank mit Deckel oder engmaschigem Netz abdecken: verhindert Mückenbrut, Laubeintrag und schützt Kinder und Kleintiere. Laubsieb am Fallrohr einsetzen.|e","S|11-2|2|Wilde Brombeerranken über dem Tank und in der Hecke dahinter mit Wurzeln entfernen.|e"]}),
      o("speicher400","wasser",0.35,24.85,1.45,0.85,"Grüne Kübel (Speicher 400 l?)",{note:"Zwei grüne Kübel neben dem IBC-Tank. Laut Wertermittlung ist der 400-l-Speicher defekt (Seitenwand gerissen), auf dem Foto ist der vordere Kübel am Rand gerissen.",tasks:["A|3-4||Gerissenen Kübel (Speicher 400 l) ersetzen oder entsorgen.|e"]}),
      o("terrasse-dach","ueberdacht",3.06,21.38,3.2,4.4,"Wintergarten (überdachte Terrasse, Polycarbonat)",{note:"Polycarbonat-Wände, Fallrohr zum IBC-Tank. Maße von der überdachten Terrasse aus der Wertermittlung (4,40 × 3,20 m) übernommen: bitte prüfen."}),
      o("laube","laube",6.26,21.6,5.2,4.38,"Laube",{tasks:["A|11-12||Mit dem Vorstand klären: Laube, Wintergarten und Anbau zusammen liegen deutlich über 24 m² (GO 7.2, § 3 Abs. 2 BKleingG). Klären, ob die Anbauten genehmigt sind (GO 7.14).|e"]}),
      o("anbau","anbau",11.46,24.4,1.22,1.58,"Toilette (Anbau an der Laube)",{note:"Laut Wertermittlung 1,22 × 1,58 m. Von der Laube aus erreichbar, auf dem Luftbild an der unteren rechten Laubenecke.",tasks:["A|10-11||Toilette winterfest machen: bei Wasserspülung Zulauf absperren, Spülkasten und Leitung entleeren, etwas Frostschutz-Salzwasser ins Becken. Bei Trocken- oder Campingtoilette Behälter leeren und reinigen.","A|3-4||Toilette nach dem Winter prüfen: Dichtungen, Zulauf und Abfluss kontrollieren."]}),
      o("zaehler","sonst",6.3,21.8,0.6,0.4,"Zählerkasten mit FI"),
      o("speicher300","wasser",9.82,19.81,0.7,0.6,"Speicher 300 l (eingegraben, grüner Deckel)",{note:"Grüner Deckel am Rasenrand östlich der Terrasse."}),
      o("pavillon","pavillon",4.26,18.65,3.0,2.4,"Pavillon (Metallgestell)"),
      o("geraetehaus","schuppen",12.88,23.48,3.0,2.5,"Holzgerätehaus"),
      o("schuppen2","schuppen",15.94,23.48,3.0,2.5,"Geräteschuppen (überdacht)"),
      o("querweg","weg",2.87,6.86,6.12,0.79,"Plattenweg nördlich vom Gewächshaus"),
      o("beet-gh","nutz",3.06,7.7,4.82,4.82,"Beet um Gewächshaus und Folientunnel"),
      o("platten-gh","weg",4.12,7.76,0.46,4.72,"Plattenstreifen vor Gewächshaus und Tunnel"),
      o("beet-phacelia","nutz",3.06,12.58,4.91,4.51,"Beet mit Phacelia (Gründüngung)"),
      o("beet-heidel","beeren",3.06,17.13,4.54,1.15,"Beet am Flechtzaun (Heidelbeeren)"),
      o("flechtzaun","tor",2.97,18.29,5.2,0.13,"Holzzaun (Staketen) mit Durchgang"),
      o("terrasse","terrasse",3.06,18.44,7.88,2.93,"Terrasse vor Laube und Wintergarten (Platten)"),
      o("weg-laube-rechts","weg",11.5,21.6,1.3,2.0,"Platten neben der Laube"),
      o("weg-oben-rechts","weg",12.2,0.6,0.45,9.8,"Plattenweg durch die rechte Hälfte"),
      o("himbeerfeld","beeren",14.6,0.6,3.9,7.4,"Himbeerfeld an der rechten Hecke"),
      o("gemuese-mitte","nutz",10.6,5.3,7.9,5.1,"Gemüsefeld Mitte (Blattsenf, Mais, Amarant, Lauch, Kohl)",{note:"Auf den Fotos viel roter und grüner Blattsenf, Fenchel oder Dill, Möhren, Lauch und dazwischen viele Brennnesseln.",tasks:["K|11-3||Brennnesseln mit Wurzeln aus dem Gemüsefeld ziehen (Handschuhe). Tipp: nicht wegwerfen, sondern als Brennnesseljauche ansetzen, das ist ein guter Dünger für Tomaten.|e","K|11||Abgeerntetes Mais- und Amarantstroh abschneiden und kompostieren, Samenstände vom Amarant vorher entsorgen."]}),
      o("beet-kante","nutz",11.3,10.6,6.5,4.4,"Beet mit Kantensteinen (Mangold, Rote Bete)"),
      o("hecke-rechts","tor",18.55,0.3,0.4,21.0,"Hecke an der rechten Grenze (zur Straße)",{note:"Dichte, kleinblättrige Hecke, dahinter Häuser. Brombeeren ranken hinein. GO 5.4 verbietet Hecken als Abgrenzung zu Nachbargärten. Klären, ob die Hecke zum Garten gehört oder eine Außengrenze der Anlage ist.",tasks:["S|6-7|1|Hecke an der Gartenseite in Form schneiden, vorher auf Vogelnester prüfen.","S|11-2|2|Wilde Brombeeren aus der Hecke mit Wurzeln entfernen.|e"]}),
      o("aussentuer","tor",18.55,22.3,0.4,1.1,"Außentür (grünes Tor)",{tasks:["A|4-9||Außentür prüfen: Scharniere ölen, Schloss gängig halten, Efeu am Rahmen zurückschneiden."]}),
      o("reisig","sonst",10.7,4.3,1.2,0.9,"Reisighaufen (Biotop)",{note:"Unterschlupf für Igel und Insekten (GO 9.7). Nicht verbrennen (GO 9.6)."}),
      o("vogeltraenke","sonst",13.7,15.8,0.5,0.5,"Vogeltränke",{tasks:["K|4-10||Vogeltränke alle 2 bis 3 Tage reinigen und frisch füllen.|m"]}),
      o("pfosten","sonst",13.0,8.4,2.6,0.3,"Holzpfosten (Rankgerüst?)",{note:"Mehrere Holzpfähle im Gemüsefeld, vermutlich für Bohnen oder als Rankhilfe."}),
      o("weg-tuer","weg",13.0,22.3,5.55,1.15,"Plattenweg zur Außentür"),
      o("beet-kompost","zier",14.2,21.4,2.6,0.9,"Beet am Komposter (Ringelblumen)"),
      o("rasen-terrasse","rasen",8.2,15.3,2.4,3.1,"Rasen zwischen Terrasse und Pergola"),
      o("schachtdeckel","wasser",7.4,7.0,0.6,0.7,"Dunkle Platte im Plattenweg (Schacht?)",{note:"Große dunkle Platte am Übergang zum Nordweg. Vielleicht ein Schachtdeckel (Wasserleitung, Absperrung) oder nur eine Ersatzplatte: bitte klären."}),
      o("zaun-oben","tor",0.3,0,18.5,0.12,"Maschendrahtzaun zum Anlagenweg"),
      o("zapfstelle","wasser",12.4,19.6,0.5,0.5,"Wasserzapfstelle (Säule mit Hahn)",{note:"Rote Betonsäule mit Wasserhahn auf dem Rasen vor der Laube.",tasks:["A|10-11||Zapfstelle winterfest machen: Hahn öffnen und offen lassen, nachdem die Leitung entleert ist (GO 4.2). Hahn bei Bedarf mit Dämmung umwickeln.|e","A|3-4||Zapfstelle beim Wasser-Anstellen auf Dichtheit prüfen."]}),
      o("beet-lavendel","zier",10.7,15.25,2.5,1.2,"Beet am Pergola-Ende (Lavendel, Wolfsmilch)"),
      o("weg-nord","weg",7.4,0.35,0.6,7.3,"Plattenweg Nord (Pergola-Ende bis Gartentor-Weg)"),
      o("beet-nord","nutz",3.1,2.9,4.3,3.95,"Beet nördlich vom Querweg (Pfirsich, Solarleuchten)"),
      o("beet-ost-nord","rasen",8.0,1.4,2.5,5.45,"Rasen östlich vom Nordweg"),
      o("weg-oben","weg",3.1,0.97,4.9,0.85,"Weg oben (Gartentor bis Nordweg)")
    ],
    plants: [
      p("p3","birne",1.3,21.27,{label:"Birne (Viertelstamm, jung)",form:"busch",r:0.7,note:"Junger Baum mit zwei Pfählen im Beet am Sichtschutz. Zuordnung zur Birne aus der Wertermittlung bitte prüfen."}),
      p("p4","suesskirsche",14.3,18.4,{label:"Kirsche (groß)",form:"halb",r:1.5,note:"Große Kirsche direkt vor der Reneklode. Süßkirschen nach der Ernte im Sommer schneiden, Höhe laut GO 8 möglichst bis 3,50 m."}),
      p("p5","saeulenobst",2.04,21.9,{label:"Säulensüßkirsche 'Helene'",form:"saeule",note:"Sorte laut Etikett: Starline Säulensüßkirsche 'Helene'. Selbstfruchtbar, Ernte etwa Mitte bis Ende Juni."}),
      p("p14","maulbeere",6.95,17.61,{label:"Weiße Maulbeere",form:"busch",r:0.9,note:"Weiße Maulbeere (Morus alba). Süße, weiße bis rosa Früchte, sehr robust und winterhart. In der Wertermittlung ist die Bemerkung „Maulbeerbaum“ vermutlich versehentlich in die Zeile „Feige Busch“ gerutscht: Feige und Maulbeere sind zwei Pflanzen. Steht am Holzzaun vor der Terrasse."}),
      p("z1","rhododendron",0.83,23.48,{label:"Rhododendron großblumig",r:1.1}),
      p("z1b","rhododendron",1.67,24.31,{label:"Rhododendron (klein)",r:0.45}),
      p("z2","azalee",1.85,22.95,{label:"Azalee (sommergrün)",r:0.75,note:"Auf dem Foto kahl mit orangem Herbstlaub, deshalb sommergrüne Azalee."}),
      p("z4","strauchrose",5.56,21.12,{label:"Rosen am Wintergarten (weiße Stäbe)",qty:"2"}),
      p("z6","forsythie",0.93,20.33,{r:0.8,note:"Vermutlich der Strauch vorne im Beet am Sichtschutz (lanzettliche Blätter). Bitte prüfen."}),
      p("z7","kletterhortensie",3.34,21.27,{r:0.9,label:"Kletterpflanze an der Wintergarten-Ecke",note:"Großer Busch mit herzförmigen, im Herbst gelb-orangen Blättern und schwarzen Beerendolden. Das passt am ehesten zur Kletterhortensie aus der Wertermittlung, kann aber auch eine andere Kletterpflanze sein. Von Dach und Polycarbonat fernhalten."}),
      p("z8","pfingstrose",0,0,{unplaced:1,note:""}),
      p("z9","lilie",0,0,{unplaced:1,note:""}),
      p("z11","loewenmaeulchen",5.47,17.71),
      p("z13","steinkraut",6.3,16.35,{label:"Steinkraut (weiße Polster)"}),
      p("z16","kaukasus-vergissmeinnicht",0.56,22.43),
      p("z17","lungenkraut",0.56,21.59),
      p("v1","walnuss",1.58,22.32,{label:"Verdacht: Walnuss (Sämling)",r:0.4,flag:"verdacht",note:"Gefiederte Blätter mit braunen Flecken neben der Säulenkirsche, typisch für eine junge Walnuss mit Blattfleckenkrankheit. Walnuss ist laut GO 9.1 nicht erlaubt. Ein Sämling lässt sich jetzt leicht mit Wurzel entfernen (bis 28.2.)."}),
      p("p1","apfel",0.93,11.74,{label:"Apfel (alt, 26 Standjahre)",form:"halb",r:2.4,note:"Laut Fotos im Kräuterbeet links vom Hauptweg, Stamm geweißelt und schräg.",tasks:["S|12-2|2|Auflage aus der Übergabe: Der Apfel muss dringend geschnitten werden (Schnittmängel, Pflegerückstand). Verwilderte Krone über 2 bis 3 Winter zurückführen.|e"]}),
      p("p2","apfel",17.3,16.6,{label:"Apfel 'Weißer Klarapfel'",form:"halb",r:1.3,note:"Laut Etikett: Weißer Klarapfel. Sehr früher Sommerapfel, reif ab Ende Juli. Erntereif, wenn die Schale von grün nach hellgelb wechselt. Nicht lagerfähig und schnell mehlig: rasch essen oder zu Apfelmus verarbeiten. Neigt zu Ertragswechsel, deshalb bei starkem Behang ausdünnen."}),
      p("p6","pflaume",0,0,{unplaced:1,label:"Pflaume (Halbstamm)",form:"halb",note:""}),
      p("p7","pflaume",0,0,{unplaced:1,label:"Pflaume (Halbstamm)",form:"halb",note:""}),
      p("p8","pflaume",7.15,7.7,{label:"Pflaume 'Bleue'",form:"halb",r:0.8,note:"Laut Etikett: Prunus domestica 'Bleue', vermutlich 'Bleue de Belgique' (blaue Pflaume, gilt als selbstfruchtbar, Ernte etwa August bis September). Junger Baum mit weißem Stamm direkt östlich vom Gewächshaus am Plattenweg. In der Wertermittlung stand vermutlich „Kirsche-Halbstamm, Mirabelle“: bitte mit dem Vorstand abgleichen."}),
      p("p10","pflaume",1.1,2.6,{label:"Zwergpflaume 'Nano'",form:"busch",r:1.0,note:"Laut Etikett: Prunus domestica 'Nano', eine Zwergpflaume. Bleibt klein (etwa 1,5 bis 2 m), gilt als selbstfruchtbar, Ernte etwa August bis September. Mehrstämmig mit Pfählen, Stamm geweißelt. Steht im Beet links vom Hauptweg direkt am Gartentor. Anbindestrick prüfen, damit er nicht einschneidet."}),
      p("p11","reneklode",14.3,16.4,{label:"Reneklode",form:"busch",note:"In der Wertermittlung die Zeile „Pflaume Busch“ mit Bemerkung „Reneklode, zu tief gepflanzt, Pflegerückstand“ (Renekloden gehören zu den Pflaumen). Zu tief gepflanzt heißt: Veredlungsstelle unter der Erde (siehe Anleitung „Obstbaum richtig pflanzen“). Wurzelausläufer konsequent entfernen."}),
      p("p12","pfirsich",11.3,16.2,{label:"Pfirsich 'Rubira'",form:"busch",r:1.3,note:"Rotfleischige Sorte (Weinbergpfirsich-Typ), reif etwa Ende August bis September. Gilt als vergleichsweise robust gegen die Kräuselkrankheit, trotzdem im Winter vor Regen schützen, wenn möglich. Steht oben links auf der Baumfläche unten rechts. In der Wertermittlung vermutlich der Eintrag „Pfirsich Busch“."}),
      p("p13","feige",3.61,12.05,{label:"Feige",form:"busch",r:1.6,note:"Großer, mehrstämmiger Busch zwischen Hauptweg und Folientunnel. Im November wurde mit dem Rückschnitt begonnen. Dabei sind einige lange Stummel stehen geblieben: diese bis 28.2. am Astring nachschneiden (siehe Anleitung „Richtig schneiden“).",tasks:["S|2|3|Auflage aus der Übergabe: Die Feige muss dringend zurückgeschnitten werden. Kräftigen Rückschnitt bis spätestens 28.2. erledigen, danach ist nur noch ein Pflegeschnitt erlaubt.|e","S|12-2|1|Stummel vom Herbstschnitt am Astring sauber nachschneiden, sonst trocknen sie ein und faulen.|e"]}),
      p("b1","jostabeere",0,0,{unplaced:1,note:""}),
      p("b2","johannisbeere",5.5,0.55,{label:"Johannisbeeren (Reihe an der nördlichen Grenze)",qty:"8 Sträucher",r:0.45,tasks:["S|11-2|2|Hinweis aus der Übergabe: Die Johannisbeeren stehen zu dicht. Auslichten oder einzelne Sträucher versetzen (Umpflanzen nur bis 28.2.).|e"]}),
      p("b3","stachelbeere",0,0,{unplaced:1,note:""}),
      p("b4","himbeere-herbst",16.5,2.8,{label:"Himbeeren (großes Feld)",r:1.8,note:"Großes Himbeerfeld oben rechts, dazwischen Tomaten-Spiralstäbe und Amarant. Weil im November noch Früchte hängen, sind es vermutlich Herbsthimbeeren: dann im Winter alle Ruten bodennah abschneiden. Falls es Sommerhimbeeren sind, die Art im Bearbeiten-Menü ändern."}),
      p("b5","heidelbeere",4.26,17.71,{label:"Kulturheidelbeeren (Drilling)",qty:"5",note:"Laut Etikett „Heidelbeer-Drilling“: drei Sorten in einem Topf, das verbessert die Befruchtung. Saurer Boden nötig, nur mit Regenwasser gießen."}),
      p("b6","weinrebe",8.55,12.4,{label:"Weinreben an der Pergola (linke Seite)",qty:"7",note:"Laut Wertermittlung zu tief gepflanzt, Pflegerückstand. Ranken an den Gittern der linken Pergolaseite, jetzt mit Herbstlaub. Winterschnitt bis Ende Februar (siehe Anleitung „Weinrebe“)."}),
      p("b7","sanddorn",0.83,8.7,{note:"Auf den Fotos im Kräuterbeet vor dem Maschendrahtzaun, hinter dem das Gewächshaus des Nachbarn steht."}),
      p("g1","rhabarber",0,0,{unplaced:1,note:""}),
      p("g2","tomate",6.02,11.42,{label:"Tomaten (im Folientunnel)",qty:"2"}),
      p("g3","salbei",1.11,17.4,{label:"Salbei (großer Busch)",r:0.7}),
      p("g3b","salbei",1.2,5.87,{label:"Salbei (großer Busch)",r:0.7}),
      p("g4","rosmarin",1.39,13.94),
      p("g4b","rosmarin",1.39,10.06),
      p("g4c","rosmarin",1.3,7.34),
      p("g5","lavendel",1.11,19.07,{r:0.7}),
      p("g7","beifuss",1.5,18.2,{qty:"ca. 8 m²"}),
      p("g8","minze",1.3,12.68,{note:"Laut Wertermittlung an mehreren Stellen gepflanzt."}),
      p("g9","oregano",1.2,4.6),
      p("g10","wermut",0.74,14.67),
      p("g11","lorbeer",0.83,15.93,{label:"Lorbeer (ausgepflanzt)",r:0.6,note:"Steht laut Fotos im Beet, nicht im Kübel. Kann nicht eingeräumt werden: bei starkem Frost (unter -8 °C) mit Vlies schützen, Wurzelbereich mulchen."}),
      p("g12","colakraut",1.0,9.3),
      p("g13","schnittlauch",1.76,16.66,{label:"Schnittlauch (Topf)"}),
      p("g14","thymian",1.58,15.2),
      p("g14b","thymian",1.58,6.6),
      p("z3","kletterrose",10.25,12.0,{label:"Kletterrosen an der Pergola (rechte Seite)",qty:"mehrere",note:"Blühen teils noch im November (rot, pink). Lange Triebe im März waagerecht an die Gitter binden (siehe Anleitung „Rosen schneiden“)."}),
      p("z5","berberitze",0,0,{unplaced:1,qty:"4",note:""}),
      p("z10","amarant",14.2,7.0,{qty:"viele",r:0.8,note:"Roter Amarant im ganzen Gemüsefeld. Sät sich stark aus: Samenstände jetzt abschneiden."}),
      p("z12","ringelblume",6.86,14.88),
      p("z14","wilder-wein",0,0,{unplaced:1,label:"Wilder Wein (am Zaun)",note:""}),
      p("z15","phacelia",5.0,14.57,{label:"Phacelia (Gründüngung)",r:1.6}),
      p("z19","rotbuche-hecke",0.14,13.1,{label:"Grenzhecke (Buche oder Hainbuche)",r:0.3,note:"Hecke an der linken Grenze, laut Fotos etwa vom Sichtschutz bis zum Maschendrahtzaun. GO 5.4: Hecken als Abgrenzung zu Nachbargärten sind nicht gestattet. Klären, wem die Hecke gehört und ob die Übergangsregel bis Ende 2027 greift."}),
      p("z20","liebstoeckel",1.58,3.56,{label:"Liebstöckel oder Giersch?",flag:"verdacht",note:"Vorne am Weg. Riecht das Blatt beim Zerreiben nach Maggi, ist es Liebstöckel. Sonst vermutlich Giersch, ein stark wucherndes Wildkraut: dann im Bearbeiten-Menü die Pflanzenart auf „Giersch“ ändern und mit Wurzeln ausgraben."}),
      p("p15","pfirsich",3.7,5.9,{label:"Pfirsich 'Red Haven'",form:"busch",r:0.8,note:"Laut Etikett (Naturtalent by toom): Bio-Pfirsich 'Red Haven', selbstfruchtbar, süß-säuerlich, Ernte August, sonniger Standort. Junger Baum mit Pfahl am Hauptweg im Beet nördlich vom Gewächshaus. Anbindestrick prüfen, damit er nicht einschneidet."}),
      p("g15","erdbeere",3.52,17.92,{label:"Erdbeeren (am Flechtzaun)"}),
      p("g16","blattsenf",7.04,8.7,{label:"Roter Blattsenf",note:"Dunkelrote, gekrauste Blätter, z. B. Sorte 'Red Giant'."}),
      p("b8","heidelbeere",17.2,14.5,{label:"Heidelbeere 'Goldtraube'",note:"Laut Etikett: Heidelbeere 'Goldtraube', ertragreiche, robuste Sorte. Braucht sauren Boden (pH 4 bis 5): Im normalen Gemüsebeet kümmert sie meist. Besser in ein Beet mit torffreiem Rhododendron-Substrat oder in einen großen Kübel umsetzen (Umpflanzen bis 28.2.)."}),
      p("b9","brombeere",18.1,8.5,{label:"Wilde Brombeere (an der Hecke)",r:1.0,note:"Rankt entlang der rechten Hecke."}),
      p("g17","blattsenf",11.6,3.4,{label:"Roter Blattsenf (oben)"}),
      p("g18","moehre",13.4,4.8,{label:"Möhren"}),
      p("g19","mais",15.6,6.6,{label:"Mais (abgeerntet)",note:"Trockene Stängel: abschneiden und gehäckselt kompostieren."}),
      p("g20","lauch",12.6,9.4,{label:"Lauch"}),
      p("g21","gruenkohl",11.6,8.2,{label:"Kohl (Grünkohl o. ä.)",r:0.5}),
      p("g22","gruenkohl",16.6,8.6,{label:"Kohl (Grünkohl o. ä.)",r:0.5}),
      p("g23","mangold",14.0,11.8,{label:"Mangold / Rote Bete",r:0.6}),
      p("g24","rotebete",16.0,12.4),
      p("g25","beinwell",16.4,14.6,{label:"Beinwell?",flag:"verdacht",note:"Große, raue, gewellte Blätter neben der Heidelbeere. Sieht nach Beinwell aus, Borretsch ist auch möglich."}),
      p("z21","steinkraut",15.4,5.6,{label:"Steinkraut (weiß)"}),
      p("z22","flieder",14.3,20.2,{label:"Flieder (klein)",r:0.6}),
      p("v3","haselnuss",18.0,20.3,{label:"Verdacht: Haselnuss (oder Zaubernuss)",r:1.3,flag:"verdacht",note:"Großer Strauch hinter dem Komposter an der Hecke mit breiten, gesägten, im Herbst gelben Blättern. Das passt zu Haselnuss (laut GO 9.1 nicht erlaubt) oder zu Zaubernuss (Hamamelis, erlaubt). Unterscheidung: Haselnuss hat viele Bodentriebe, im Februar gelbe Würstchen-Kätzchen und im Herbst Nüsse. Zaubernuss blüht im Winter mit gelben oder roten, fädigen Blüten."}),
      p("z23","strauchrose",8.4,15.6,{label:"Rose im Kübel (links am Pergola-Eingang)",note:"Weißer Kübel. Im Winter Kübel mit Vlies oder Jute einpacken und auf Holzfüße stellen."}),
      p("z24","strauchrose",10.4,15.6,{label:"Rose im Kübel (rechts am Pergola-Eingang)",note:"Weißer Kübel mit Stäben. Im Winter Kübel einpacken."}),
      p("g26","tomate",9.6,8.6,{label:"Tomaten am Kegel (Freiland)",note:"Abgestorbene Pflanze mit kleinen orangen Früchten an einem Rankkegel am Ende der Pergola. Kraut abräumen und in den Restmüll (nicht kompostieren, falls Braunfäule). Nächstes Jahr Tomaten nicht wieder an dieselbe Stelle."}),
      p("z25","dahlie",7.9,7.9,{label:"Dahlie",note:"Blühte im November noch. Nach dem ersten Frost Knolle ausgraben, trocknen und frostfrei lagern."}),
      p("z26","sommerflieder",7.4,8.4,{label:"Strauch mit vielen dünnen Ruten (neben Gewächshaus)",r:0.8,flag:"verdacht",note:"Horst aus vielen langen, dünnen braunen Ruten, teils umgekippt, neben dem Gewächshaus. Könnte ein Schmetterlingsflieder, ein Spierstrauch oder eine hohe Staude sein. Bei Schmetterlingsflieder im März auf 30 bis 50 cm zurückschneiden. Bitte im Frühjahr beim Austrieb bestimmen."}),
      p("g27","beinwell",5.8,7.4,{label:"Beinwell oder Borretsch (am Plattenweg)",flag:"verdacht",note:"Viele raue, längliche Blattrosetten am Plattenweg nördlich vom Gewächshaus."}),
      p("z27","bartblume",1.1,1.1,{label:"Bartblume (3 Stück am Gartentor)",qty:"3",r:0.8,note:"Laut Etiketten: Caryopteris. Drei Büsche vorne im Beet am Zaun, direkt neben dem Gartentor. Im April kräftig zurückschneiden."}),
      p("z28","rhaphiolepis",10.75,15.1,{label:"Indischer Weißdorn 'Springtime' (Kübel)",note:"Laut Etikett: Rhaphiolepis indica 'Springtime'. Steht im weißen Kübel am Pergola-Ende Richtung Laube. Nur bedingt winterhart: Kübel einpacken, bei Dauerfrost in den Wintergarten stellen."}),
      p("p16","nashi",12.7,15.6,{label:"Nashi-Birne",form:"busch",r:0.9,note:"Laut Etikett „Nashi“. Junger Baum mit Pfahl auf dem Rasen unten rechts, Lage geschätzt. Möglicherweise ist das die „Birne (Viertelstamm)“ aus der Wertermittlung: bitte prüfen."}),
      p("g28","lavendel",11.4,15.8,{label:"Lavendel (Beet am Pergola-Ende)"}),
      p("z29","strauchrose",10.35,14.2,{label:"Rose mit Hagebutten (Pergola-Ende)",note:"Ungefüllte Blüten und viele Hagebutten: Hagebutten über den Winter für die Vögel hängen lassen."}),
,
      p("p17","feige",15.6,20.6,{label:"Feige (klein, jung)",form:"busch",r:0.4,note:"Kleine Feigenpflanze mitten auf dem Rasen mit den Obstbäumen, etwa auf Höhe des Komposters. Die zweite Feige aus der Wertermittlung. Junge Feigen im Winter am Fuß mit Laub mulchen und bei starkem Frost mit Vlies schützen."})
    ],
    done: {}, notes: "", hours: { target: 0, log: [] }, bgOpacity: 0.5, uid: 100, mapv: MAPV
  };
}

/* ============ Speicher ============ */
const KEY = "kleingarten-v1";
const MAPV = 18;
let S;
let STORAGE_OK = true;
function load() {
  try { const t = localStorage.getItem(KEY); if (t) return JSON.parse(t); } catch (e) { STORAGE_OK = false; }
  return defaultState();
}
let UNDO = [], LAST = null;
function save() {
  const cur = JSON.stringify(S);
  if (LAST !== null && cur !== LAST) { UNDO.push(LAST); if (UNDO.length > 60) UNDO.shift(); }
  LAST = cur;
  try { localStorage.setItem(KEY, cur); STORAGE_OK = true; }
  catch (e) { STORAGE_OK = false; toast("Speichern im Browser nicht möglich. Bitte regelmäßig exportieren."); }
}
function uid(pre) { S.uid = (S.uid || 100) + 1; return pre + S.uid; }

/* IndexedDB für Fotos und Luftbild */
let IDB = null;
function idb() {
  if (IDB) return IDB;
  IDB = new Promise((res, rej) => {
    try {
      const r = indexedDB.open("kleingarten-app", 1);
      r.onupgradeneeded = () => { r.result.createObjectStore("files"); };
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    } catch (e) { rej(e); }
  });
  return IDB;
}
async function idbGet(k) { try { const db = await idb(); return await new Promise(res => { const q = db.transaction("files").objectStore("files").get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(undefined); }); } catch (e) { return undefined; } }
async function idbSet(k, v) { const db = await idb(); return new Promise((res, rej) => { const tx = db.transaction("files", "readwrite"); tx.objectStore("files").put(v, k); tx.oncomplete = res; tx.onerror = () => rej(tx.error); }); }
async function idbDel(k) { try { const db = await idb(); return new Promise(res => { const tx = db.transaction("files", "readwrite"); tx.objectStore("files").delete(k); tx.oncomplete = res; tx.onerror = res; }); } catch (e) {} }

/* ============ Hilfen ============ */
const $ = s => document.querySelector(s);
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }
function now() { return new Date(); }
function curM() { return now().getMonth() + 1; }
function nextM(m) { return m % 12 + 1; }
function monthsText(t) {
  return t.m.split(",").map(part => { const [a, b] = part.split("-").map(Number); return b ? MON[a-1] + " bis " + MON[b-1] : MONL[a-1]; }).join(", ");
}
function fmt(n) { return (Math.round(n * 10) / 10).toLocaleString("de-DE"); }
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 3200); }
function lib(pl) { return LIBM[pl.lib] || { name: pl.lib, emoji: "🌱", cat: "sonst", T: [], info: "", latin: "" }; }
function pname(pl) { return pl.label || lib(pl).name; }
function crownR(pl) { const L = lib(pl); return pl.r != null ? pl.r : (L.r != null ? L.r : 0.4); }

/* ============ Aufgaben-Logik ============ */
function period(task, d) {
  d = d || now(); let y = d.getFullYear(); const mo = d.getMonth() + 1;
  if (task.rep === "m") return y + "-" + mo;
  if (task.rep === "e") return "x";
  if (task.wrap && mo <= task.last) y--;
  return "" + y;
}
function isDone(ok, task) { return S.done[ok + "#" + task.id] === period(task); }
function status(ok, task, m) {
  const cm = curM(); m = m || cm;
  if (m === cm && isDone(ok, task)) return "done";
  if (task.rep === "e" && isDone(ok, task)) return "done";
  if (task.ms.has(m)) return "now";
  if (task.ms.has(nextM(m))) return "soon";
  return task.rep === "e" ? "open" : "off";
}
function ownerTasks(kind, item) {
  if (kind === "p") return lib(item).T.concat((item.tasks || []).map((s, i) => parseTask(s, "C" + i)));
  if (kind === "o") {
    const T = TYPES[item.type] || {};
    let arr = T.lib && LIBM[T.lib] ? LIBM[T.lib].T.slice() : [];
    arr = arr.concat((item.tasks || []).map((s, i) => parseTask(s, "C" + i)));
    return arr.concat(GT.filter(g => g.at === item.id));
  }
  return GT.filter(g => !g.at || !S.objs.find(x => x.id === g.at));
}
function allItems() {
  const out = [];
  S.plants.forEach(pl => ownerTasks("p", pl).forEach(t => out.push({ ok: "p:" + pl.id, kind: "p", ref: pl, name: pname(pl), icon: lib(pl).emoji, t })));
  S.objs.forEach(ob => ownerTasks("o", ob).forEach(t => out.push({ ok: "o:" + ob.id, kind: "o", ref: ob, name: ob.label || TYPES[ob.type].n, icon: t.icon || objIcon(ob), t })));
  ownerTasks("g").forEach(t => out.push({ ok: "g", kind: "g", ref: null, name: "Ganzer Garten", icon: t.icon || "🏡", t }));
  return out;
}
function objIcon(ob) { return ({ laube:"🏠", anbau:"🏠", ueberdacht:"⛱️", schuppen:"🛖", gewaechshaus:"🪴", tunnel:"🪴", wasser:"💧", kompost:"♻️", tor:"🚪", weg:"🧱", terrasse:"🪑", rasen:"🟩", pergola:"🌿", pavillon:"⛺", hochbeet:"📦", nutz:"🥕", kraeuter:"🌿", zier:"🌸", beeren:"🍓", wiese:"🌼", steingarten:"🪨", teich:"🐸", sonst:"🔧" })[ob.type] || "📍"; }
function dueOf(kind, item) {
  const ok = kind + ":" + item.id; let best = null;
  ownerTasks(kind, item).forEach(t => { if (status(ok, t) === "now") { if (!best || TORDER.indexOf(t.t) < TORDER.indexOf(best.t)) best = t; } });
  return best;
}
function toggleDone(ok, tid) {
  const t = findTask(ok, tid); if (!t) return;
  const k = ok + "#" + tid;
  if (S.done[k] === period(t)) delete S.done[k]; else S.done[k] = period(t);
  save();
}
function findTask(ok, tid) {
  if (ok === "g") return GT.find(g => g.id === tid);
  const [kind, id] = ok.split(":");
  const item = kind === "p" ? S.plants.find(x => x.id === id) : S.objs.find(x => x.id === id);
  return item ? ownerTasks(kind, item).find(t => t.id === tid) : null;
}

/* ============ Ruhezeiten, Feiertage, Schutzzeit ============ */
function easter(y) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3),
    h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
    mo = Math.floor((h + l - 7 * m + 114) / 31), da = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(y, mo - 1, da);
}
function holidayName(d) {
  const y = d.getFullYear(), key = (d.getMonth() + 1) + "-" + d.getDate();
  const fixed = { "1-1":"Neujahr","5-1":"Tag der Arbeit","10-3":"Tag der Deutschen Einheit","11-1":"Allerheiligen","12-25":"1. Weihnachtstag","12-26":"2. Weihnachtstag" };
  if (fixed[key]) return fixed[key];
  const E = easter(y), diff = Math.round((new Date(y, d.getMonth(), d.getDate()) - E) / 864e5);
  return ({ "-2":"Karfreitag","1":"Ostermontag","39":"Christi Himmelfahrt","50":"Pfingstmontag","60":"Fronleichnam" })[diff] || null;
}
function quietInfo() {
  const d = now(), h = d.getHours() + d.getMinutes() / 60, hol = holidayName(d);
  if (d.getDay() === 0 || hol) return { ok: false, t: "Heute ganztägig Ruhe" + (hol ? " (" + hol + ")" : " (Sonntag)") + ": keine lauten Arbeiten (GO 6.3)." };
  if (h >= 8 && h < 13) return { ok: true, t: "Laute Arbeiten erlaubt bis 13 Uhr, dann wieder 15 bis 20 Uhr (GO 6.3)." };
  if (h >= 15 && h < 20) return { ok: true, t: "Laute Arbeiten erlaubt bis 20 Uhr (GO 6.3)." };
  if (h >= 13 && h < 15) return { ok: false, t: "Mittagsruhe: laute Arbeiten wieder ab 15 Uhr (GO 6.3)." };
  return { ok: false, t: "Ruhezeit: laute Arbeiten werktags 8 bis 13 und 15 bis 20 Uhr (GO 6.3)." };
}
function cutWindow() {
  const m = curM();
  if (m >= 3 && m <= 9) return { ok: false, t: "Schutzzeit 1.3. bis 30.9.: nur Form- und Pflegeschnitt. Roden, Umpflanzen und radikaler Rückschnitt sind verboten (BNatSchG § 39, GO 9.4)." };
  return { ok: true, t: "Zeitfenster bis 28.2.: Roden, Umpflanzen, Auf-den-Stock-Setzen und radikaler Heckenschnitt sind erlaubt (BNatSchG § 39, GO 9.4)." };
}

/* ============ Navigation ============ */
const VIEWS = ["heute","karte","kalender","pflanzen","regeln"];
const UI = { fq: "", rtab: "faq", ps: "", pf: "alle", view: "heute", edit: false, tool: "sel", newType: "nutz", newBau: "hochbeet", placeLib: null, zoom: 1, hi: false, labels: false, calM: curM(), calMode: "monat", plTab: "garten", q: "", cat: "", bgURL: null };
function go(v) { if (!VIEWS.includes(v)) v = "heute"; UI.view = v; if (location.hash !== "#" + v) history.replaceState(null, "", "#" + v); render(); window.scrollTo(0, 0); }
window.addEventListener("hashchange", () => { const v = location.hash.slice(1); if (v !== UI.view && VIEWS.includes(v)) go(v); });
function render() {
  document.querySelectorAll("nav button").forEach(b => b.classList.toggle("on", b.dataset.v === UI.view));
  const V = $("#view");
  if (UI.view === "heute") V.innerHTML = vHeute();
  else if (UI.view === "karte") { const w0 = $("#mapwrap"), sl = w0 ? w0.scrollLeft : 0, st = w0 ? w0.scrollTop : 0, wy = window.scrollY; V.innerHTML = vKarte(); bindMap(); const w1 = $("#mapwrap"); if (w0 && w1) { w1.scrollLeft = sl; w1.scrollTop = st; window.scrollTo(0, wy); } }
  else if (UI.view === "kalender") V.innerHTML = vKalender();
  else if (UI.view === "pflanzen") { V.innerHTML = vPflanzen(); fillThumbs(); }
  else if (UI.view === "regeln") V.innerHTML = vRegeln();
}

/* ============ Bausteine ============ */
function strengthHTML(s) { if (!s) return ""; return `<span class="str" title="Schnittstärke">${"●".repeat(s)}${"○".repeat(3 - s)} ${STRENGTH[s]}</span>`; }
function taskRow(it, withBtn) {
  const t = it.t, tt = TT[t.t] || TT.A, st = status(it.ok, t);
  const open = it.ok === "g" ? "" : `onclick="A.openOwner('${it.ok}')"`;
  return `<div class="trow ${st === "done" ? "isdone" : ""}" style="--c:${tt.c}">
    <div class="ticon">${tt.i}</div>
    <div class="tbody" ${open}>
      <div class="tname">${esc(it.icon)} ${esc(it.name)} ${t.rep === "e" ? '<span class="pill warn">einmalig</span>' : ""}</div>
      <div class="ttext">${esc(t.x)}</div>
      <div class="tmeta">${t.ms.has(curM()) && monthsLeft(t) === 1 && st !== "done" ? '<span class="pill now">⏰ letzter Monat</span> ' : ""}${tt.n} · ${monthsText(t)} ${strengthHTML(t.s)}</div>
    </div>
    ${withBtn ? `<button class="chk ${st === "done" ? "on" : ""}" onclick="A.done('${it.ok}','${t.id}')" aria-label="erledigt">${st === "done" ? "✓" : ""}</button>` : ""}
  </div>`;
}
function yearBand(tasks, ok) {
  const cm = curM();
  let h = `<div class="band"><div class="bhead"><span></span>${MON.map((m, i) => `<span class="${i + 1 === cm ? "cur" : ""}">${m[0]}</span>`).join("")}</div>`;
  tasks.forEach(t => {
    const tt = TT[t.t] || TT.A;
    h += `<div class="brow"><span title="${esc(tt.n)}">${tt.i}</span>${MON.map((m, i) => `<i class="${t.ms.has(i + 1) ? "a" : ""} ${i + 1 === cm ? "cur" : ""}" style="--c:${tt.c}"></i>`).join("")}</div>`;
  });
  return h + "</div>";
}
function monthsLeft(t, m) { m = m || curM(); if (!t.ms.has(m)) return 99; let n = 0, x = m; while (t.ms.has(x) && n < 12) { n++; x = nextM(x); } return n; }
function urg(it) { const t = it.t, done = isDone(it.ok, t) ? 100 : 0, legal = /28\.2|bis spätestens|BNatSchG|Auflage|Vorstand|winterfest|Wasseruhr/i.test(t.x) ? -0.5 : 0; return done + monthsLeft(t) + legal; }
function sortItems(a, b) { return urg(a) - urg(b) || TORDER.indexOf(a.t.t) - TORDER.indexOf(b.t.t) || a.name.localeCompare(b.name, "de"); }

function mapBanner() {
  if (S.mapv === MAPV || UI.hideMap) return "";
  return `<div class="card warnbox">🗺️ <b>Es gibt eine überarbeitete Karte.</b> Übernehmen ersetzt Karte und Pflanzen durch die neue Fassung. Häkchen, Stunden und Notizen zu Aufgaben bleiben erhalten, eigene Änderungen an der Karte gehen verloren.<div class="row wrap"><button class="btn primary" onclick="A.takeMap()">Neue Karte übernehmen</button><button class="btn" onclick="UI.hideMap=1;render()">Später</button></div></div>`;
}
/* ============ HEUTE ============ */
function vHeute() {
  const d = now(), m = curM(), q = quietInfo(), cw = cutWindow();
  const items = allItems();
  const nowI = items.filter(i => i.t.ms.has(m) && i.t.rep !== "e").sort(sortItems);
  const open = items.filter(i => i.t.rep === "e" && !isDone(i.ok, i.t)).sort(sortItems);
  const soon = items.filter(i => !i.t.ms.has(m) && i.t.ms.has(nextM(m)) && i.t.rep !== "e").sort(sortItems);
  const left = nowI.filter(i => !isDone(i.ok, i.t)).length;
  const hrs = S.hours.log.reduce((a, b) => a + (+b.h || 0), 0);
  return `
  <header class="hero">
    <div class="date">${d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</div>
    <h1>${esc(S.name)}</h1>
    <div class="chips">
      <div class="info ${q.ok ? "ok" : "no"}">🔊 ${esc(q.t)}</div>
      <div class="info ${cw.ok ? "ok" : "no"}">🐦 ${esc(cw.t)}</div>
    </div>
  </header>
  ${mapBanner()}
  ${!STORAGE_OK ? `<div class="card warnbox">Dieser Browser speichert gerade nichts dauerhaft. Bitte unter „Regeln“ regelmäßig exportieren.</div>` : ""}
  ${open.length ? `<section><h2>Offene Punkte aus Übergabe und Regeln <span class="cnt">${open.length}</span></h2>
    <p class="hint">Einmalige Aufgaben. Abhaken, sobald erledigt oder geklärt.</p>
    ${open.map(i => taskRow(i, true)).join("")}</section>` : ""}
  <section><h2>Im ${MONL[m - 1]} dran <span class="cnt">${left} offen</span></h2>
    <p class="hint">Sortiert nach Dringlichkeit: zuerst, was diesen Monat endet (⏰), dann Fristen und Auflagen, dann Aufgaben mit längerem Zeitfenster. Erledigtes rutscht nach unten.</p>
    ${nowI.length ? nowI.map(i => taskRow(i, true)).join("") : `<p class="hint">Diesen Monat steht nichts an.</p>`}
  </section>
  <details class="sec"><summary><h2>Demnächst: ${MONL[nextM(m) - 1]} <span class="cnt">${soon.length}</span></h2></summary>
    ${soon.map(i => taskRow(i, false)).join("") || `<p class="hint">Nichts Neues.</p>`}
  </details>
  <section class="card">
    <h3>👥 Gemeinschaftsstunden ${d.getFullYear()}</h3>
    <p>${fmt(hrsYear())} von ${S.hours.target ? fmt(S.hours.target) : "?"} Stunden geleistet. <a href="#regeln" onclick="A.goStunden(event)">Eintragen</a></p>
  </section>`;
}
function hrsYear() { const y = "" + now().getFullYear(); return S.hours.log.filter(e => (e.d || "").startsWith(y)).reduce((a, b) => a + (+b.h || 0), 0); }

/* ============ KARTE ============ */
function vKarte() {
  const edit = UI.edit;
  const nowCount = {};
  S.plants.forEach(pl => { const t = dueOf("p", pl); if (t) nowCount[t.t] = (nowCount[t.t] || 0) + 1; });
  S.objs.forEach(ob => { const t = dueOf("o", ob); if (t) nowCount[t.t] = (nowCount[t.t] || 0) + 1; });
  const legend = TORDER.filter(k => nowCount[k]).map(k => `<span class="lg" style="--c:${TT[k].c}">${TT[k].i} ${TT[k].n} ${nowCount[k]}</span>`).join("") || `<span class="hint">Gerade nichts fällig.</span>`;
  const tools = edit ? `
    <div class="tools">
      <div class="seg">
        ${[["sel","✋ Verschieben"],["area","▭ Fläche"],["bau","🏠 Bauwerk"],["plant","🌱 Pflanze"]].map(([k, l]) => `<button class="${UI.tool === k ? "on" : ""}" onclick="A.tool('${k}')">${l}</button>`).join("")}
      </div>
      <div class="toolopt">
        ${UI.tool === "sel" ? `<span class="hint">Element antippen zum Bearbeiten, ziehen zum Verschieben. Leere Fläche ziehen scrollt die Karte.</span>` : ""}
        ${UI.tool === "area" ? `<select onchange="UI.newType=this.value">${AREA_TYPES.map(k => `<option value="${k}" ${UI.newType === k ? "selected" : ""}>${TYPES[k].n}</option>`).join("")}</select><span class="hint">Auf der Karte ein Rechteck aufziehen.</span>` : ""}
        ${UI.tool === "bau" ? `<select onchange="UI.newBau=this.value">${BAU_TYPES.map(k => `<option value="${k}" ${UI.newBau === k ? "selected" : ""}>${TYPES[k].n}</option>`).join("")}</select><span class="hint">Auf der Karte ein Rechteck aufziehen.</span>` : ""}
        ${UI.tool === "plant" && UI.placeId ? `<span class="hint">📍 Auf die Karte tippen, um „${esc(pname(S.plants.find(x => x.id === UI.placeId) || {}))}“ zu setzen.</span>` : ""}${UI.tool === "plant" && !UI.placeId ? `<button class="btn sm" onclick="A.pickLib()">${UI.placeLib ? esc(LIBM[UI.placeLib].emoji + " " + LIBM[UI.placeLib].name) : "Pflanze wählen"}</button><span class="hint">${UI.placeLib ? "Auf die Karte tippen, um sie zu setzen." : ""}</span>` : ""}
      </div>
    </div>` : "";
  return `${mapBanner()}
  <div class="maphead">
    <button class="btn ${edit ? "primary" : ""}" onclick="A.edit()">${edit ? "✓ Fertig" : "✏️ Bearbeiten"}</button>
    ${edit ? `<button class="btn" onclick="A.undo()" ${UNDO.length ? "" : "disabled"}>↩️ Zurück${UNDO.length ? ` (${UNDO.length})` : ""}</button><button class="btn ${UI.lockObj ? "primary" : ""}" onclick="A.lockObj()">${UI.lockObj ? "🔒 Flächen gesperrt" : "🔓 Flächen sperren"}</button>` : ""}
    ${!edit ? `<button class="btn ${UI.hi ? "primary" : ""}" onclick="A.hi()">✨ Fälliges</button>` : ""}
    <button class="btn ${UI.labels ? "primary" : ""}" onclick="A.labels()">🏷️ Namen</button>
    <span class="grow"></span>
    <button class="btn sq" onclick="A.zoom(-1)" aria-label="kleiner">−</button><button class="btn sq" onclick="A.zoom(1)" aria-label="größer">+</button>
  </div>
  ${tools}
  <div class="row"><input class="search" type="search" placeholder="🔍 Pflanze auf der Karte suchen…" value="${esc(UI.ps)}" oninput="A.ps(this.value)"></div>
  <div id="psinfo">${psInfo()}</div>
  <div class="chips scroll">${PF.map(([k, n]) => `<button class="chip ${UI.pf === k ? "on" : ""}" onclick="A.pf('${k}')">${n}${k !== "alle" && k !== "keine" ? ` <small>${S.plants.filter(pl => { const o = UI.pf; UI.pf = k; const v = pVisible(pl); UI.pf = o; return v; }).length}</small>` : ""}</button>`).join("")}</div>
  ${!edit && UI.pf !== "keine" ? `<div class="legend">${legend}</div>` : ""}
  <div id="mapwrap" class="${edit ? "edit" : ""} ${edit && (UI.tool === "area" || UI.tool === "bau") ? "draw" : ""}">${mapSVG()}</div>
  ${unplacedHTML()}
  <p class="hint small">Maßstab ungefähr: Garten ${fmt(S.W)} × ${fmt(S.H)} m. Laube unten, Gartentor oben links. Linke Seite nach Fotos, Rest geschätzt: im Bearbeiten-Modus anpassen.</p>`;
}
function mapSVG() {
  const W = S.W, H = S.H, pad = 0.6;
  const cls = UI.hi ? "hi" : "";
  let s = `<svg id="msvg" class="${cls}" viewBox="${-pad} ${-pad} ${W + 2 * pad} ${H + 2 * pad}" style="width:${Math.round(UI.zoom * 100)}%" xmlns="http://www.w3.org/2000/svg">`;
  s += `<defs><pattern id="grass" width="0.6" height="0.6" patternUnits="userSpaceOnUse"><path d="M0.1 0.5 l0.05 -0.2 M0.35 0.3 l0.05 -0.2" stroke="#7fa65a" stroke-width="0.03" opacity="0.5"/></pattern>
    <pattern id="tiles" width="0.4" height="0.4" patternUnits="userSpaceOnUse"><rect width="0.4" height="0.4" fill="none" stroke="#b5ad9c" stroke-width="0.02"/></pattern></defs>`;
  s += `<rect x="0" y="0" width="${W}" height="${H}" fill="#efe7d3" stroke="#6a5a3a" stroke-width="0.08" rx="0.1"/>`;
  if (UI.bgURL) s += `<image href="${UI.bgURL}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="none" opacity="${S.bgOpacity}"/>`;
  const layer = ob => ob.type === "wasser" || ob.type === "kompost" || ob.type === "sonst" ? 2 : TYPES[ob.type].bau ? 1 : 0;
  const sorted = S.objs.slice().sort((a, b) => layer(a) - layer(b));
  sorted.forEach(ob => {
    const T = TYPES[ob.type] || TYPES.sonst, due = !UI.edit && UI.pf !== "keine" && dueOf("o", ob);
    const pat = ob.type === "rasen" ? `<rect x="${ob.x}" y="${ob.y}" width="${ob.w}" height="${ob.h}" fill="url(#grass)" pointer-events="none"/>` : (ob.type === "weg" || ob.type === "terrasse") ? `<rect x="${ob.x}" y="${ob.y}" width="${ob.w}" height="${ob.h}" fill="url(#tiles)" pointer-events="none"/>` : "";
    const vert = ob.h > ob.w * 2.2, txt = shortLabel(ob.label || T.n), span = vert ? ob.h : ob.w;
    const fs = Math.max(0.22, Math.min(0.5, Math.min(ob.w, ob.h) / 3, span * 0.92 / (txt.length * 0.56)));
    const lbl = (Math.max(ob.w, ob.h) >= 1.6 && (UI.labels || T.bau || ob.w * ob.h > 6)) ? `<text x="${ob.x + ob.w / 2}" y="${ob.y + ob.h / 2}" font-size="${fs}" class="olab" ${vert ? `transform="rotate(-90 ${ob.x + ob.w / 2} ${ob.y + ob.h / 2})"` : ""}>${esc(txt)}</text>` : "";
    s += `<g data-k="o" data-id="${ob.id}" class="obj ${due ? "due" : ""} t-${ob.type}" style="--c:${due ? TT[due.t].c : "transparent"}">
      <rect x="${ob.x}" y="${ob.y}" width="${ob.w}" height="${ob.h}" fill="${T.f}" ${T.bau ? `stroke="#4a4a4a" stroke-width="0.05"` : `stroke="#00000022" stroke-width="0.03"`} rx="${T.bau ? 0.05 : 0.15}"/>${pat}${lbl}
      ${!lbl && T.bau ? `<text x="${ob.x + ob.w / 2}" y="${ob.y + ob.h / 2 + Math.min(ob.w, ob.h) * 0.22}" font-size="${Math.max(0.3, Math.min(0.8, Math.min(ob.w, ob.h) * 0.62))}" text-anchor="middle" pointer-events="none">${objIcon(ob)}</text>` : ""}
      ${due ? `<rect class="dueframe" x="${ob.x}" y="${ob.y}" width="${ob.w}" height="${ob.h}" fill="none" rx="0.1"/><text x="${ob.x + ob.w - 0.05}" y="${ob.y + 0.45}" font-size="0.45" text-anchor="end">${TT[due.t].i}</text>` : ""}
    </g>`;
  });
  const pls = S.plants.slice().sort((a, b) => crownR(b) - crownR(a));
  pls.filter(pl => !pl.unplaced && pVisible(pl)).forEach(pl => {
    const L = lib(pl), r = crownR(pl), due = !UI.edit && dueOf("p", pl);
    const bad = L.verboten || pl.flag === "verdacht";
    const col = { obst: "#6aa04f", beeren: "#a0548a", gemuese: "#c98a3a", kraeuter: "#7fa35b", zier: "#d677a0", gehoelz: "#4f8a5f", sonst: "#9bbd6a" }[L.cat] || "#7a7";
    const er = Math.max(0.28, r), fs = Math.min(1.0, Math.max(0.42, er * 0.95));
    s += `<g data-k="p" data-id="${pl.id}" class="pl ${due ? "due" : ""} ${bad ? "bad" : ""}" transform="translate(${pl.x} ${pl.y})" style="--c:${due ? TT[due.t].c : col}">
      ${r > 0.35 ? `<circle r="${r}" fill="${col}" fill-opacity="0.28" stroke="${col}" stroke-opacity="0.7" stroke-width="0.04"/>` : ""}
      ${due ? `<circle class="pulse" r="${er + 0.12}" fill="none"/>` : ""}
      <circle r="${Math.min(er, 0.55)}" fill="#fffdf6" fill-opacity="0.85" stroke="${bad ? "#c62828" : col}" stroke-width="${bad ? 0.09 : 0.05}" ${bad ? `stroke-dasharray="0.15 0.1"` : ""}/>
      <text y="${fs * 0.36}" font-size="${fs}" text-anchor="middle">${L.emoji}</text>
      ${due ? `<g transform="translate(${Math.min(er, 0.55) * 0.8} ${-Math.min(er, 0.55) * 0.85})"><circle r="0.3" fill="${TT[due.t].c}"/><text y="0.11" font-size="0.3" text-anchor="middle">${TT[due.t].i}</text></g>` : ""}
      ${UI.labels ? `<text y="${Math.min(er, 0.55) + 0.42}" font-size="0.34" class="plab">${esc(shortLabel(pname(pl), 18))}</text>` : ""}
    </g>`;
  });
  // Maßstab
  s += `<g transform="translate(0.2 ${H + 0.35})"><rect width="5" height="0.12" fill="#6a5a3a"/><rect width="1" height="0.12" fill="#fff"/><text x="5.15" y="0.13" font-size="0.32" fill="#6a5a3a">5 m</text></g>`;
  return s + `</svg>`;
}
const PF = [["alle","Alle"],["keine","Nur Flächen"],["baum","🌳 Bäume"],["strauch","🫐 Sträucher & Beeren"],["zier","🌸 Blumen & Stauden"],["gemuese","🥕 Gemüse"],["kraeuter","🌿 Kräuter"],["pruefen","❓ Prüfen"]];
function pgroup(pl) { const L = lib(pl); if (L.baum) return "baum"; if (L.cat === "beeren" || L.cat === "gehoelz") return "strauch"; if (L.cat === "gemuese") return "gemuese"; if (L.cat === "kraeuter") return "kraeuter"; return "zier"; }
function pMatch(pl, q) { q = q.toLowerCase(); const L = lib(pl); return (pname(pl) + " " + L.name + " " + (L.latin || "")).toLowerCase().includes(q); }
function pVisible(pl) { if (UI.ps) return pMatch(pl, UI.ps); const f = UI.pf; if (f === "alle") return true; if (f === "keine") return false; if (f === "pruefen") return !!(pl.unplaced || pl.flag || lib(pl).verboten || /bitte (prüfen|verschieben)|Lage (geschätzt|unbekannt)|nicht gefunden|noch nicht gefunden/i.test(pl.note || "")); return pgroup(pl) === f; }
function psInfo() {
  if (!UI.ps) return "";
  const hit = S.plants.filter(pl => pMatch(pl, UI.ps)), on = hit.filter(pl => !pl.unplaced), off = hit.filter(pl => pl.unplaced);
  if (!hit.length) return `<p class="hint">Keine Pflanze gefunden. <a href="#pflanzen" onclick="A.ps('');UI.plTab='bib'">In der Bibliothek suchen</a></p>`;
  return `<p class="hint">${on.length} auf der Karte${off.length ? `, ${off.length} noch nicht verortet` : ""}: ${hit.map(pl => `<a href="#" onclick="event.preventDefault();A.openOwner('p:${pl.id}')">${esc(pname(pl))}</a>`).join(", ")}</p>`;
}
function unplacedHTML() {
  const u = S.plants.filter(pl => pl.unplaced); if (!u.length) return "";
  return `<details class="sec card" ${UI.pf === "pruefen" ? "open" : ""}><summary><h2>📋 Noch nicht verortet <span class="cnt">${u.length}</span></h2></summary>
  <p class="hint">Aus der Wertermittlung, aber auf den Fotos noch nicht gefunden. Pflegeaufgaben laufen trotzdem im Kalender mit. Gefunden? „Setzen“ antippen und dann auf die Karte tippen. Gibt es die Pflanze nicht mehr: öffnen und löschen.</p>
  ${u.map(pl => `<div class="li"><span class="thumb" onclick="A.openOwner('p:${pl.id}')">${lib(pl).emoji}</span><div class="lit" onclick="A.openOwner('p:${pl.id}')"><b>${esc(pname(pl))}</b>${pl.qty ? ` <span class="muted">(${esc(pl.qty)})</span>` : ""}<small>${esc(lib(pl).name)}</small></div><button class="btn sm" onclick="A.placeExisting('${pl.id}')">📍 Setzen</button></div>`).join("")}</details>`;
}
function shortLabel(t, n) { n = n || 26; t = String(t); return t.length > n ? t.slice(0, n - 1) + "…" : t; }

let DRAG = null;
function svgPt(svg, e) { const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; const r = p.matrixTransform(svg.getScreenCTM().inverse()); return { x: r.x, y: r.y }; }
function snap(v) { return Math.round(v * 10) / 10; }
function bindMap() {
  const svg = $("#msvg"); if (!svg) return;
  svg.addEventListener("click", e => {
    if (UI.edit) return;
    const g = e.target.closest("[data-id]"); if (!g) return;
    A.openOwner(g.dataset.k + ":" + g.dataset.id);
  });
  svg.addEventListener("pointerdown", e => {
    if (!UI.edit) return;
    const pt = svgPt(svg, e), g = e.target.closest("[data-id]");
    if (UI.tool === "sel" && g && !(UI.lockObj && g.dataset.k === "o")) {
      e.preventDefault(); svg.setPointerCapture(e.pointerId);
      const item = g.dataset.k === "p" ? S.plants.find(x => x.id === g.dataset.id) : S.objs.find(x => x.id === g.dataset.id);
      DRAG = { mode: "move", g, item, kind: g.dataset.k, sx: pt.x, sy: pt.y, ox: item.x, oy: item.y, moved: false };
    } else if (UI.tool === "area" || UI.tool === "bau") {
      e.preventDefault(); svg.setPointerCapture(e.pointerId);
      const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      r.setAttribute("class", "drawrect"); svg.appendChild(r);
      DRAG = { mode: "draw", r, sx: pt.x, sy: pt.y };
    } else if (UI.tool === "plant") {
      DRAG = { mode: "place", sx: pt.x, sy: pt.y };
    }
  });
  svg.addEventListener("pointermove", e => {
    if (!DRAG) return; const pt = svgPt(svg, e);
    if (DRAG.mode === "move") {
      const dx = pt.x - DRAG.sx, dy = pt.y - DRAG.sy;
      if (Math.abs(dx) + Math.abs(dy) > 0.15) DRAG.moved = true;
      if (DRAG.kind === "p") DRAG.g.setAttribute("transform", `translate(${DRAG.ox + dx} ${DRAG.oy + dy})`);
      else DRAG.g.setAttribute("transform", `translate(${dx} ${dy})`);
      DRAG.dx = dx; DRAG.dy = dy;
    } else if (DRAG.mode === "draw") {
      const x = Math.min(pt.x, DRAG.sx), y = Math.min(pt.y, DRAG.sy);
      DRAG.r.setAttribute("x", x); DRAG.r.setAttribute("y", y);
      DRAG.r.setAttribute("width", Math.abs(pt.x - DRAG.sx)); DRAG.r.setAttribute("height", Math.abs(pt.y - DRAG.sy));
      DRAG.ex = pt.x; DRAG.ey = pt.y;
    }
  });
  const end = e => {
    if (!DRAG) return; const D = DRAG; DRAG = null; const pt = svgPt(svg, e);
    if (D.mode === "move") {
      if (!D.moved) { A.openOwner(D.kind + ":" + D.item.id); return; }
      D.item.x = snap(D.ox + D.dx); D.item.y = snap(D.oy + D.dy); save(); render();
    } else if (D.mode === "draw") {
      const x = snap(Math.min(pt.x, D.sx)), y = snap(Math.min(pt.y, D.sy)), w = snap(Math.abs(pt.x - D.sx)), h = snap(Math.abs(pt.y - D.sy));
      D.r.remove();
      if (w < 0.3 || h < 0.3) { toast("Zum Zeichnen ein Rechteck aufziehen."); return; }
      const type = UI.tool === "area" ? UI.newType : UI.newBau;
      const ob = { id: uid("o"), type, x, y, w, h, label: TYPES[type].n };
      S.objs.push(ob); save(); refreshMap(); A.openOwner("o:" + ob.id);
    } else if (D.mode === "place") {
      if (Math.abs(pt.x - D.sx) + Math.abs(pt.y - D.sy) > 0.4) return;
      if (UI.placeId) { const pl = S.plants.find(x => x.id === UI.placeId); UI.placeId = null; if (pl) { pl.x = snap(pt.x); pl.y = snap(pt.y); delete pl.unplaced; save(); UI.tool = "sel"; render(); toast(pname(pl) + " gesetzt"); } return; }
      if (!UI.placeLib) { A.pickLib(); return; }
      const pl = { id: uid("p"), lib: UI.placeLib, x: snap(pt.x), y: snap(pt.y) };
      S.plants.push(pl); save(); render(); toast(LIBM[pl.lib].name + " gesetzt");
    }
  };
  svg.addEventListener("pointerup", end);
  svg.addEventListener("pointercancel", () => { if (DRAG && DRAG.r) DRAG.r.remove(); DRAG = null; refreshMap(); });
}
function refreshMap() { const w = $("#mapwrap"); if (!w) return; const sl = w.scrollLeft, st = w.scrollTop; w.innerHTML = mapSVG(); w.scrollLeft = sl; w.scrollTop = st; bindMap(); }

/* ============ KALENDER ============ */
function vKalender() {
  const m = UI.calM, cm = curM();
  const head = `<div class="seg wide"><button class="${UI.calMode === "monat" ? "on" : ""}" onclick="A.calMode('monat')">Monat</button><button class="${UI.calMode === "jahr" ? "on" : ""}" onclick="A.calMode('jahr')">Jahresplan</button></div>`;
  if (UI.calMode === "jahr") return head + yearPlan();
  const items = allItems().filter(i => i.t.ms.has(m)).sort(sortItems);
  let h = head + `<div class="months">${MON.map((n, i) => `<button class="${i + 1 === m ? "on" : ""} ${i + 1 === cm ? "cur" : ""}" onclick="A.calM(${i + 1})">${n}</button>`).join("")}</div>`;
  h += `<h1 class="mt">${MONL[m - 1]}</h1>`;
  if (m !== cm) h += `<p class="hint">Abhaken geht nur im aktuellen Monat.</p>`;
  TORDER.forEach(k => {
    const list = items.filter(i => i.t.t === k); if (!list.length) return;
    h += `<details class="sec" ${list.length < 9 || k === "S" ? "open" : ""}><summary><h2 style="color:${TT[k].c}">${TT[k].i} ${TT[k].n} <span class="cnt">${list.length}</span></h2></summary>${list.map(i => taskRow(i, m === cm)).join("")}</details>`;
  });
  return h;
}
function yearPlan() {
  const cm = curM();
  const rows = [];
  S.plants.forEach(pl => rows.push({ ok: "p:" + pl.id, icon: lib(pl).emoji, name: pname(pl), T: ownerTasks("p", pl), cat: lib(pl).cat }));
  S.objs.forEach(ob => { const T = ownerTasks("o", ob); if (T.length) rows.push({ ok: "o:" + ob.id, icon: objIcon(ob), name: ob.label, T, cat: "zz" }); });
  rows.sort((a, b) => a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name, "de"));
  let h = `<p class="hint">Jede Zeile zeigt, in welchen Monaten etwas ansteht. Antippen für Details.</p><div class="yp"><div class="yph"><span></span>${MON.map((n, i) => `<span class="${i + 1 === cm ? "cur" : ""}">${n[0]}</span>`).join("")}</div>`;
  rows.forEach(r => {
    h += `<div class="ypr" onclick="A.openOwner('${r.ok}')"><span class="ypn">${r.icon} ${esc(shortLabel(r.name, 22))}</span>${MON.map((n, i) => {
      const ts = TORDER.filter(k => r.T.some(t => t.t === k && t.ms.has(i + 1)));
      return `<span class="ypc ${i + 1 === cm ? "cur" : ""}">${ts.map(k => `<i style="background:${TT[k].c}"></i>`).join("")}</span>`;
    }).join("")}</div>`;
  });
  h += `</div><div class="legend">${TORDER.map(k => `<span class="lg" style="--c:${TT[k].c}">${TT[k].i} ${TT[k].n}</span>`).join("")}</div>`;
  return h;
}

/* ============ PFLANZEN ============ */
function vPflanzen() {
  const tab = UI.plTab, q = UI.q.toLowerCase();
  let h = `<div class="seg wide"><button class="${tab === "garten" ? "on" : ""}" onclick="A.plTab('garten')">Im Garten (${S.plants.length})</button><button class="${tab === "bib" ? "on" : ""}" onclick="A.plTab('bib')">Bibliothek (${LIB.length})</button><button class="${tab === "anl" ? "on" : ""}" onclick="A.plTab('anl')">Anleitungen</button></div>`;
  if (tab === "anl") return h + `<p class="hint">Bebilderte Schritt-für-Schritt-Anleitungen. Antippen und mit ▶ durchblättern.</p>` + Object.values(GUIDES).map(G => `<div class="li" onclick="A.openGuide('${G.id}')"><span class="thumb gth">${G.svg}</span><div class="lit"><b>${esc(G.title)}</b><small>${G.steps.length} Schritte</small></div></div>`).join("");
  if (SAMPLE) h += `<div class="card ai">
    <h3>📷 Pflanze bestimmen</h3>
    <p class="hint">Foto aufnehmen oder auswählen. Claude bestimmt die Pflanze und prüft sie gegen die Gartenordnung. Das Foto wird dafür an Claude gesendet.</p>
    <label class="btn primary">Foto wählen<input type="file" accept="image/*" hidden onchange="A.identify(this)"></label>
    <div id="airesult"></div>
    <details><summary>💬 Frage an Claude stellen</summary>
      <textarea id="askq" rows="3" placeholder="z. B. Wie schneide ich meinen alten Apfelbaum am besten über drei Winter zurück?"></textarea>
      <button class="btn" onclick="A.ask()">Fragen</button><div id="askres" class="answer"></div>
    </details></div>`;
  h += `<input class="search" type="search" placeholder="Suchen…" value="${esc(UI.q)}" oninput="A.search(this.value)">`;
  h += `<div class="chips scroll">${[["", "Alle"]].concat(Object.entries(CATS)).map(([k, n]) => `<button class="chip ${UI.cat === k ? "on" : ""}" onclick="A.cat('${k}')">${n}</button>`).join("")}</div>`;
  h += `<div id="pllist">${plList()}</div>`;
  return h;
}
function plList() {
  const q = UI.q.toLowerCase(), cat = UI.cat;
  let h = "";
  if (UI.plTab === "garten") {
    const list = S.plants.filter(pl => { const L = lib(pl); return (!cat || L.cat === cat) && (!q || (pname(pl) + " " + L.name + " " + L.latin).toLowerCase().includes(q)); });
    Object.keys(CATS).forEach(c => {
      const l = list.filter(pl => lib(pl).cat === c).sort((a, b) => pname(a).localeCompare(pname(b), "de")); if (!l.length) return;
      h += `<h2>${CATS[c]}</h2>` + l.map(pl => {
        const L = lib(pl), ok = "p:" + pl.id, T = ownerTasks("p", pl), nowT = T.filter(t => status(ok, t) === "now");
        return `<div class="li" onclick="A.openOwner('${ok}')"><span class="thumb" data-thumb="${ok}">${L.emoji}</span>
          <div class="lit"><b>${esc(pname(pl))}</b>${pl.qty ? ` <span class="muted">(${esc(pl.qty)})</span>` : ""}<small>${esc(L.name)}${pl.unplaced ? ' · <span class="bad">📋 nicht verortet</span>' : ""}${L.verboten || pl.flag ? ' · <span class="bad">⚠ prüfen</span>' : ""}</small></div>
          <div class="badges">${nowT.map(t => `<span title="${TT[t.t].n}">${TT[t.t].i}</span>`).join("")}</div></div>`;
      }).join("");
    });
    if (!h) h = `<p class="hint">Keine Treffer.</p>`;
  } else {
    const list = LIB.filter(L => (!cat || L.cat === cat) && (!q || (L.name + " " + L.latin).toLowerCase().includes(q)));
    Object.keys(CATS).forEach(c => {
      const l = list.filter(L => L.cat === c).sort((a, b) => a.name.localeCompare(b.name, "de")); if (!l.length) return;
      h += `<h2>${CATS[c]}</h2>` + l.map(L => {
        const n = S.plants.filter(pl => pl.lib === L.id).length;
        return `<div class="li" onclick="A.openLib('${L.id}')"><span class="thumb" data-thumb="lib:${L.id}">${L.emoji}</span>
          <div class="lit"><b>${esc(L.name)}</b><small><i>${esc(L.latin)}</i>${L.verboten ? ' · <span class="bad">nicht erlaubt</span>' : ""}${L.warn ? ' · <span class="bad">nicht empfohlen</span>' : ""}</small></div>
          <div class="badges">${n ? `<span class="pill">${n}× im Garten</span>` : ""}</div></div>`;
      }).join("");
    });
    if (!h) h = `<p class="hint">Keine Treffer.</p>`;
  }
  return h;
}
async function fillThumbs() {
  const els = document.querySelectorAll("[data-thumb]");
  for (const el of els) {
    const arr = await idbGet("photos:" + el.dataset.thumb);
    if (arr && arr.length) { const u = URL.createObjectURL(arr[0].blob); el.innerHTML = `<img src="${u}" alt="">`; }
  }
}

/* ============ REGELN ============ */
function checks() {
  const out = [], size = S.size || 512;
  const trees = S.plants.filter(pl => lib(pl).baum);
  const busch = trees.filter(pl => pl.form === "busch").length, halb = trees.filter(pl => pl.form === "halb" || pl.form === "hoch").length;
  const maxB = Math.floor(size / 200 * 2), maxH = Math.floor(size / 200);
  out.push({ st: busch <= maxB && halb <= maxH ? "ok" : "bad", t: "Obstbäume", x: `${busch} Buschbäume (erlaubt ca. ${maxB}) und ${halb} Halbstämme (erlaubt ca. ${maxH}) auf ${size} m². Je 200 m² höchstens 2 Buschbäume und 1 Halbstamm, Höhe bis 3,50 m. Säulen- und Spalierobst ist als Alternative erlaubt.`, s: "GO 8" });
  const bad = S.plants.filter(pl => lib(pl).verboten);
  out.push({ st: bad.length ? "bad" : "ok", t: "Nicht erlaubte Gehölze", x: bad.length ? bad.map(pl => pname(pl)).join(", ") + ". Nadelgehölze, Koniferen, Haselnuss und Walnuss sind nicht erlaubt. Entfernen nur 1.10. bis 28.2." : "Keine eingetragen.", s: "GO 9.1" });
  const kl = S.plants.filter(pl => lib(pl).warn);
  if (kl.length) out.push({ st: "warn", t: "Kirschlorbeer", x: "Auf Kirschlorbeer soll künftig verzichtet werden.", s: "GO 8" });
  const hk = S.plants.filter(pl => lib(pl).hecke);
  if (hk.length) out.push({ st: "warn", t: "Hecken", x: "Abgrenzungen zu Nachbargärten mit Hecken sind nicht gestattet. Erlaubt ist engmaschiger Draht bis 1 m.", s: "GO 5.3, 5.4" });
  const sum = types => S.objs.filter(ob => types.includes(ob.type)).reduce((a, ob) => a + ob.w * ob.h, 0);
  const laube = sum(["laube", "anbau", "ueberdacht"]);
  out.push({ st: laube <= 24.05 ? "ok" : "bad", t: "Laube mit überdachtem Freisitz", x: `${fmt(laube)} m² (Laube, Anbau, überdachte Terrasse). Erlaubt sind 24 m² einschließlich überdachtem Freisitz. Laut Wertermittlung geht die überbaute Fläche über § 3 Abs. 2 BKleingG hinaus.`, s: "GO 7.2" });
  const gh = S.objs.filter(ob => ob.type === "gewaechshaus" || ob.type === "tunnel");
  const ghBig = gh.filter(ob => ob.w * ob.h > 6.05);
  out.push({ st: gh.length <= 1 && !ghBig.length ? "ok" : "bad", t: "Gewächshaus", x: `${gh.length} eingetragen (${gh.map(ob => esc(ob.label) + " " + fmt(ob.w * ob.h) + " m²").join(", ")}). Erlaubt ist eines pro Garten, max. 6 m², max. 2,20 m hoch, ohne gegossenen Boden, nicht als Abstellraum. Die Satzung erlaubt ab 400 m² bis 8 m², überlässt das Nähere aber den Gartenordnungen der Bezirksverbände. Hier gilt also die strengere GO.`, s: "GO 7.4" });
  const sch = S.objs.filter(ob => ob.type === "schuppen");
  const schBad = sch.filter(ob => ob.w * ob.h > 6.05 || ob.x < 1 || ob.x + ob.w > S.W - 1);
  if (sch.length) out.push({ st: schBad.length ? "warn" : "ok", t: "Gerätehäuser", x: sch.map(ob => `${esc(ob.label)}: ${fmt(ob.w * ob.h)} m²${ob.x < 1 || ob.x + ob.w > S.W - 1 ? ", Abstand zur Grenze unter 1 m" : ""}`).join("; ") + ". Erlaubt bis 6 m² Grundfläche, Grenzabstand mindestens 1 m.", s: "GO 7.3" });
  const sitz = sum(["terrasse"]);
  out.push({ st: sitz <= 20 ? "ok" : "warn", t: "Sitzplätze", x: `${fmt(sitz)} m² Terrassen und Sitzplätze. Sitzplätze dürfen 20 m² nicht überschreiten und nicht betoniert sein.`, s: "GO 7.10" });
  const hb = S.objs.filter(ob => ob.type === "hochbeet");
  if (hb.length) { const a = hb.reduce((x, ob) => x + ob.w * ob.h, 0); out.push({ st: hb.length <= 5 && a <= 10 ? "ok" : "bad", t: "Hochbeete", x: `${hb.length} Hochbeete mit ${fmt(a)} m². Erlaubt: max. 5, zusammen max. 10 m², max. 1 m hoch, ohne Fundament, mit Erdkontakt.`, s: "GO 7.7" }); }
  const perg = S.objs.filter(ob => ob.type === "pergola").reduce((a, ob) => a + Math.max(ob.w, ob.h), 0);
  if (perg) out.push({ st: perg <= 12 ? "ok" : "bad", t: "Pergola", x: `ca. ${fmt(perg)} laufende Meter, erlaubt bis 12 lfm.`, s: "GO 7.6" });
  const pond = S.objs.filter(ob => ob.type === "teich").reduce((a, ob) => a + ob.w * ob.h, 0);
  if (pond) out.push({ st: pond <= 6 ? "ok" : "bad", t: "Feuchtbiotop", x: `${fmt(pond)} m² Wasserfläche, erlaubt bis 6 m².`, s: "GO 7.11" });
  out.push({ st: S.objs.some(ob => ob.type === "kompost") ? "ok" : "bad", t: "Kompost", x: "In jedem Garten muss eine Kompostiereinrichtung vorhanden sein.", s: "GO 9.5" });
  return out;
}
function thirds() {
  const a = { anb: 0, erh: 0, bau: 0 };
  S.objs.forEach(ob => { const g = TYPES[ob.type] && TYPES[ob.type].g; if (a[g] != null) a[g] += ob.w * ob.h; });
  return a;
}
function faqHTML() {
  const q = UI.fq.trim().toLowerCase(), words = q.split(/\s+/).filter(Boolean);
  const amp = { j: ["✅", "Ja"], b: ["⚠️", "Ja, mit Bedingungen"], n: ["⛔", "Nein"], i: ["ℹ️", "Info"] };
  const hit = FAQ.filter(f => !words.length || words.every(w => (f[1] + " " + f[2] + " " + f[4]).toLowerCase().includes(w)));
  if (!hit.length) return `<p class="hint">Keine Frage gefunden. Probier ein anderes Wort, z. B. „Teich“ statt „Wasserbecken“.${SAMPLE ? " Oder frag Claude unter „Pflanzen“." : ""}</p>`;
  const one = f => `<details class="rule faq" ${words.length && hit.length <= 3 ? "open" : ""}><summary>${amp[f[5]][0]} ${esc(f[1])}</summary><p><b>${amp[f[5]][1]}.</b> ${esc(f[2])}</p><span class="src">${esc(f[3])}</span></details>`;
  if (words.length) return `<p class="hint">${hit.length} Treffer</p>` + hit.map(one).join("");
  return Object.entries(FAQ_CATS).map(([k, n]) => { const l = hit.filter(f => f[0] === k); return l.length ? `<h3>${n}</h3>` + l.map(one).join("") : ""; }).join("");
}
function vRegeln() {
  const C = checks(), th = thirds(), tot = S.size || 512, rest = Math.max(0, tot - th.anb - th.erh - th.bau);
  const pct = v => Math.round(v / tot * 100);
  const ic = { ok: "✅", warn: "⚠️", bad: "❌" };
  const y = "" + now().getFullYear();
  const tabs = `<h1>Regeln & Daten</h1><div class="seg wide">${[["faq","❓ Darf ich …?"],["pruef","✅ Prüfung"],["daten","💾 Stunden & Daten"]].map(([k, n]) => `<button class="${UI.rtab === k ? "on" : ""}" onclick="A.rtab('${k}')">${n}</button>`).join("")}</div>`;
  if (UI.rtab === "faq") return tabs + `<input class="search" type="search" placeholder="🔍 Suchen, z. B. Pool, Grill, Hecke, Hund, Ruhezeit…" value="${esc(UI.fq)}" oninput="A.fq(this.value)"><div class="chips scroll">${["Pool","Grill","Feuer","Hecke","Gewächshaus","Laube","Hund","Ruhezeit","Zaun","Teich","Kündigung","Wasser"].map(w => `<button class="chip" onclick="A.fq('${w}',1)">${w}</button>`).join("")}</div><div id="faqlist">${faqHTML()}</div><p class="hint small">Kurzfassung ohne Gewähr, maßgeblich sind GO, Satzung, Pachtvertrag und der Vorstand. Keine Rechtsberatung.</p>`;
  let h = tabs + `
  <section><h2>Prüfung deines Gartens</h2><p class="hint">Automatisch aus der Karte berechnet. Maße sind Schätzungen, maßgeblich sind Vorstand und Fachberatung.</p>
  ${C.map(c => `<div class="check ${c.st}"><span>${ic[c.st]}</span><div><b>${esc(c.t)}</b> <span class="src">${c.s}</span><p>${c.x}</p></div></div>`).join("")}
  </section>
  <section class="card"><h3>Drittelregel (GO 8, § 1 BKleingG)</h3>
    <div class="bar"><i style="width:${pct(th.anb)}%;background:#c29a6b"></i><i style="width:${pct(th.erh)}%;background:#9fcf74"></i><i style="width:${pct(th.bau)}%;background:#9a9ea5"></i></div>
    <p class="small">🥕 Anbau (Obst, Gemüse, Kräuter) <b>${pct(th.anb)} %</b> · 🌸 Erholung (Rasen, Zierbeete) <b>${pct(th.erh)} %</b> · 🏠 Laube, Wege, Terrasse <b>${pct(th.bau)} %</b>${rest > 1 ? ` · nicht zugeordnet ${pct(rest)} %` : ""}</p>
    <p class="hint">Ziel: je etwa ein Drittel, Anbau mindestens ein Drittel (Satzung § 27). Obstbäume im Rasen zählen hier nicht mit, Fachberater rechnen sie oft zur Anbaufläche.</p></section>
  ${UI.rtab === "pruef" ? "" : "<!--"}`;
  if (UI.rtab === "pruef") h = h.replace(/<!--$/, ""); else h = tabs;
  h += UI.rtab === "pruef" ? "" : `
  <section class="card" id="stunden"><h3>👥 Gemeinschaftsstunden ${y}</h3>
    <p>Geleistet: <b>${fmt(hrsYear())}</b> Std. · Soll: <input type="number" step="0.5" min="0" value="${S.hours.target || ""}" style="width:5em" onchange="A.setTarget(this.value)"> Std.</p>
    <p class="hint">Nicht geleistete Stunden werden mit einem Geldbetrag abgegolten (GO 3.3). Mehrstunden verfallen am Jahresende (GO 3.6). Ehrenamt im Verein wird angerechnet (GO 3.5).</p>
    <div class="row"><input type="date" id="hd" value="${new Date().toISOString().slice(0, 10)}"><input type="number" id="hh" step="0.5" min="0" placeholder="Std." style="width:5em"><input id="ht" placeholder="Was?"><button class="btn" onclick="A.addHours()">+</button></div>
    ${S.hours.log.slice().reverse().slice(0, 12).map((e, i) => `<div class="hl">${esc(e.d)} · ${fmt(e.h)} Std. · ${esc(e.t || "")} <button class="x" onclick="A.delHours(${S.hours.log.length - 1 - i})">✕</button></div>`).join("")}
  </section>
  <section><h2>Die wichtigsten Regeln</h2>${RULES.map(r => `<details class="rule"><summary>${r[0]}</summary><p>${r[1]}</p><span class="src">${r[2]}</span></details>`).join("")}</section>
  <section class="card"><h3>💾 Daten</h3>
    <p class="hint">Alles wird nur in diesem Browser auf diesem Gerät gespeichert. Für ein zweites Gerät oder als Sicherung: exportieren und dort importieren. Fotos sind im Export nicht enthalten.</p>
    <div class="row wrap"><button class="btn primary" onclick="A.exportData()">Exportieren</button>
    <label class="btn">Datei importieren<input type="file" accept="application/json,.json" hidden onchange="A.importFile(this)"></label>
    <button class="btn" onclick="A.importPaste()">Text einfügen</button></div>
    <div id="expbox"></div>
    <h3>Garten</h3>
    <div class="form"><label>Name <input value="${esc(S.name)}" onchange="A.setS('name',this.value)"></label>
    <label>Größe (m²) <input type="number" value="${S.size}" onchange="A.setS('size',+this.value)"></label>
    <label>Breite (m) <input type="number" step="0.1" value="${S.W}" onchange="A.setS('W',+this.value)"></label>
    <label>Länge (m) <input type="number" step="0.1" value="${S.H}" onchange="A.setS('H',+this.value)"></label></div>
    <h3>Luftbild als Hintergrund</h3>
    <p class="hint">Eigenes Foto von oben (z. B. Drohne oder Screenshot) unter die Karte legen. Bleibt nur auf diesem Gerät. Bei Kartendiensten bitte die Nutzungsbedingungen beachten, für den privaten Gebrauch als Vorlage ist das üblich.</p>
    <div class="row wrap"><label class="btn">Bild wählen<input type="file" accept="image/*" hidden onchange="A.setBg(this)"></label>
    ${UI.bgURL ? `<label class="small">Deckkraft <input type="range" min="0.1" max="1" step="0.05" value="${S.bgOpacity}" onchange="A.setS('bgOpacity',+this.value)"></label><button class="btn" onclick="A.delBg()">Entfernen</button>` : ""}</div>
    <h3>Zurücksetzen</h3>
    <button class="btn danger" onclick="A.reset()">Alles auf Startzustand</button>
  </section>
  <p class="hint small">Grundlagen: Gartenordnung des Bezirksverbands der Kleingärtner (in Kraft ab 14.03.2026), Satzung Landesverband Westfalen und Lippe der Kleingärtner e.V., Niederschrift der Wertermittlung vom 26.09.2026. Wo sich GO und Satzung widersprechen (z. B. Planschbecken, Hunde und Katzen), entscheidet im Zweifel der Vorstand. Die Satzung hier ist die Mustersatzung des Landesverbands, die Vereinssatzung kann abweichen. Keine Rechtsberatung.</p>`;
  return h;
}
const RULES = [
  ["🔊 Ruhezeiten","Lärmende Arbeiten nur werktags 8 bis 13 und 15 bis 20 Uhr. Sonn- und feiertags ganztägig Ruhe. Auch Gäste müssen sich daran halten.","GO 6"],
  ["🧪 Pflanzenschutz","Chemische Pflanzenschutzmittel (Herbizide, Fungizide, Insektizide) sind nicht gestattet, auch kein Salz oder Essig gegen Unkraut. Nur in gravierenden Fällen für Haus- und Kleingarten zugelassene Mittel. Die GO ist hier strenger als die Satzung.","GO 9.3, Satzung § 27"],
  ["🔥 Feuer","Verbrennen von Gartenabfällen und offenes Feuer sind generell verboten. Ein Grillplatz ist zulässig, ein Grillkamin muss genehmigt werden.","GO 9.6, 7.9"],
  ["🌳 Gehölze","Nicht erlaubt: Nadelgehölze, Koniferen, Haselnuss, Walnuss. Holunder nur kleinwüchsig. Ziergehölze bis 2 m. Auf Kirschlorbeer verzichten. Großwüchsige Laubbäume nur auf Gemeinschaftsflächen. Je 200 m² max. 2 Buschbäume und 1 Halbstamm, Höhe bis 3,50 m. Grenzabstände nach Nachbarrecht NRW.","GO 8, 9.1, 9.2"],
  ["✂️ Schnittzeiten","1.10. bis 28.2.: radikaler Heckenschnitt, Roden, Umpflanzen, Auf-den-Stock-Setzen erlaubt. 1.3. bis 30.9.: nur Form- und Pflegeschnitt.","GO 9.4, BNatSchG § 39"],
  ["🏠 Bauen","Vor jedem Bau oder Umbau (Laube, Gerätehaus, Gewächshaus, Pergola, Feuchtbiotop, Grillkamin, Solaranlage) Antrag beim Vorstand. Nicht genehmigte Anbauten müssen nach Aufforderung entfernt werden. Laube max. 24 m² inkl. überdachtem Freisitz.","GO 7.1, 7.2, 7.12, 7.14"],
  ["🪴 Gewächshaus, Frühbeet, Hochbeet","Ein Gewächshaus pro Garten, max. 6 m², max. 2,20 m, kein Betonboden, nur zur kleingärtnerischen Nutzung. Frühbeete in Leichtbauweise. Max. 5 Hochbeete, zusammen 10 m², 1 m hoch, ohne Fundament, mit Erdkontakt, zusätzlich Bodenbeete.","GO 7.4, 7.5, 7.7"],
  ["🪨 Steingarten","Ein bepflanzter Steingarten oder eine Trockenmauer ohne Mörtel gilt als Biotop und ist erwünscht. Großflächige Steinflächen ohne Bepflanzung sowie Folien darunter gelten als Versiegelung und sind nicht erlaubt. Vor dem Anlegen am besten mit dem Vorstand sprechen.","GO Präambel, 7.1, 9.7"],
  ["💦 Planschbecken","Feste Schwimmbecken verboten. Planschbecken nur im Sommerhalbjahr, max. 1000 Liter, ohne Umwälzpumpe, ohne Chemie. Achtung Widerspruch: Die Satzung (§ 29) erlaubt nur Kinderplanschbecken bis 300 Liter. Im Zweifel den Vorstand fragen.","GO 7.8, Satzung § 29"],
  ["🧱 Boden & Wege","Keine Versiegelung: keine Folien, Steinflächen oder großflächiger Rindenmulch. Sitzplätze und Wege nicht betoniert, Platten lose verlegt. Torffrei gärtnern.","GO Präambel, 7.10, Satzung § 29"],
  ["🚧 Zäune","Keine massiven Einfriedungen, Betonpfähle, Gabionen oder Stacheldraht. Sichtschutz an der Terrasse bis 1,60 m. Zum Nachbarn Maschendraht bis 1 m, keine Hecke.","GO 5"],
  ["💧 Wasser","Sparsam verbrauchen, Regenwasser sammeln. Wasseruhr November bis März abgestellt, Leitungen entleeren. Verbrauch zahlt der Pächter, Verluste alle anteilig.","GO 4, Satzung § 32, 33"],
  ["🐕 Tiere","Hunde und Katzen in der Anlage an der Leine, vom Spielplatz fernhalten, im Garten unter Aufsicht, Verunreinigungen sofort beseitigen. Über Tierhaltung entscheidet der Vorstand. Achtung Widerspruch: Die Satzung (§ 34) verbietet Hunde und Katzen in den Parzellen ganz, Kleintierhaltung ebenso. Bienenhaltung soll gefördert werden.","GO 11, Satzung § 34"],
  ["👥 Gemeinschaftsarbeit","Vom Vorstand festgelegt und verbindlich, Termine mindestens 14 Tage vorher. Nicht geleistete Stunden kosten Geld (max. das Dreifache des Mindestlohns je Stunde). Vertretung nur in Ausnahmefällen mit Genehmigung.","GO 3, Satzung § 26"],
  ["🔎 Besichtigung","Der Vorstand darf den Garten einmal im Jahr nach Anmeldung mit mindestens 7 Tagen Frist besichtigen.","Satzung § 14"],
  ["🛏️ Nutzung","Kein Dauerwohnen, gelegentliches Übernachten erlaubt. Keine Untervermietung, keine gewerbliche Nutzung.","Satzung § 15"],
  ["📄 Kündigung & Übergabe","Kündigung durch den Pächter schriftlich bis 3. Werktag im Juni zum 30. November. Bei Abgabe Wertermittlung, Weitergabe nur über den Verein, kein höherer Preis als der Schätzwert.","Satzung § 17, 18"],
  ["⚖️ Verstöße","Wer Verstöße nach schriftlicher Abmahnung mit Frist nicht behebt, riskiert die Kündigung von Pachtvertrag und Mitgliedschaft.","GO 12, Satzung § 35"]
];

/* ============ Sheets ============ */
function openSheet(html) { $("#sheetbody").innerHTML = html; $("#sheet").classList.add("open"); $("#sheetbody").scrollTop = 0; document.body.classList.add("noscroll"); }
function closeSheet() { if (typeof A !== "undefined") A.gStop(); $("#sheet").classList.remove("open"); document.body.classList.remove("noscroll"); }
function commonsLink(L) { const q = (L.latin || L.name).split("/")[0].split("(")[0].trim(); return `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(q)}&title=Special:MediaSearch&type=image`; }
function taskList(ok, T, btn) {
  return T.map(t => { const tt = TT[t.t] || TT.A, st = ok ? status(ok, t) : "off";
    return `<div class="trow ${st === "done" ? "isdone" : ""} ${st === "now" ? "isnow" : ""}" style="--c:${tt.c}"><div class="ticon">${tt.i}</div><div class="tbody"><div class="tmeta"><b>${tt.n}</b> · ${monthsText(t)} ${strengthHTML(t.s)} ${t.rep === "e" ? '<span class="pill warn">einmalig</span>' : ""} ${st === "now" ? '<span class="pill now">jetzt</span>' : ""}</div><div class="ttext full">${esc(t.x)}</div></div>
    ${btn && ok && (st === "now" || st === "done" || t.rep === "e") ? `<button class="chk ${st === "done" ? "on" : ""}" onclick="A.done('${ok}','${t.id}',1)">${st === "done" ? "✓" : ""}</button>` : ""}</div>`; }).join("");
}
function photoBlock(key) { return `<div class="photos" id="ph-${cssId(key)}" data-key="${key}"></div><label class="btn sm">📷 Foto hinzufügen<input type="file" accept="image/*" hidden onchange="A.addPhoto('${key}',this)"></label>`; }
function cssId(k) { return k.replace(/[^a-z0-9]/gi, "_"); }
async function loadPhotos(key) {
  const box = document.getElementById("ph-" + cssId(key)); if (!box) return;
  const arr = (await idbGet("photos:" + key)) || [];
  box.innerHTML = arr.map((ph, i) => `<figure><img src="${URL.createObjectURL(ph.blob)}" alt="" onclick="A.bigPhoto(this.src)"><figcaption>${esc(ph.d)} <button class="x" onclick="A.delPhoto('${key}',${i})">✕</button></figcaption></figure>`).join("");
}
function plantSheet(pl) {
  const L = lib(pl), ok = "p:" + pl.id, T = ownerTasks("p", pl);
  const forms = [["", "-"], ["busch", "Busch / Viertelstamm"], ["halb", "Halbstamm"], ["hoch", "Hochstamm"], ["saeule", "Säule"], ["spalier", "Spalier"]];
  return `<div class="shead"><span class="big">${L.emoji}</span><div><h2>${esc(pname(pl))}</h2><div class="muted">${esc(L.name)} · <i>${esc(L.latin)}</i>${pl.qty ? " · " + esc(pl.qty) : ""}</div></div></div>
  ${L.verboten ? `<div class="warnbox bad">⛔ ${esc(L.verboten)}</div>` : ""}${L.warn ? `<div class="warnbox">⚠️ ${esc(L.warn)}</div>` : ""}
  ${pl.unplaced ? `<div class="warnbox">📋 Steht in der Wertermittlung, wurde aber noch nicht im Garten gefunden. <button class="btn sm" onclick="A.placeExisting('${pl.id}')">📍 Auf Karte setzen</button></div>` : ""}
  ${pl.flag === "verdacht" ? `<div class="warnbox">🔎 Nur ein Verdacht aus den Fotos. Bitte vor Ort prüfen.</div>` : ""}
  ${pl.note ? `<p class="note">📝 ${esc(pl.note)}</p>` : ""}
  ${yearBand(T)}
  ${guideButtons(pl.lib, ok)}
  <h3>Aufgaben</h3>${taskList(ok, T, true)}
  <h3>Steckbrief</h3><p>${esc(L.info)}</p>
  <p><a href="${commonsLink(L)}" target="_blank" rel="noopener">🖼️ Bilder auf Wikimedia Commons ansehen</a></p>
  <h3>Meine Fotos</h3>${photoBlock(ok)}
  <h3>Notiz</h3><textarea rows="3" onchange="A.setP('${pl.id}','note',this.value)">${esc(pl.note || "")}</textarea>
  ${SAMPLE ? `<details><summary>💬 Claude fragen zu dieser Pflanze</summary><textarea id="askq" rows="2" placeholder="z. B. Wie stark darf ich diesen Baum jetzt schneiden?"></textarea><button class="btn" onclick="A.ask('${ok}')">Fragen</button><div id="askres" class="answer"></div></details>` : ""}
  <details class="editbox"><summary>✏️ Bearbeiten</summary><div class="form">
    <label>Name <input value="${esc(pl.label || "")}" placeholder="${esc(L.name)}" onchange="A.setP('${pl.id}','label',this.value)"></label>
    <label>Menge <input value="${esc(pl.qty || "")}" placeholder="z. B. 3 oder 4 lfm" onchange="A.setP('${pl.id}','qty',this.value)"></label>
    <label>Pflanzenart <select onchange="A.setP('${pl.id}','lib',this.value)">${LIB.slice().sort((a, b) => a.name.localeCompare(b.name, "de")).map(x => `<option value="${x.id}" ${x.id === pl.lib ? "selected" : ""}>${x.name}</option>`).join("")}</select></label>
    ${L.baum ? `<label>Wuchsform <select onchange="A.setP('${pl.id}','form',this.value)">${forms.map(([k, n]) => `<option value="${k}" ${(pl.form || "") === k ? "selected" : ""}>${n}</option>`).join("")}</select></label>` : ""}
    <label>Kronenradius (m) <input type="number" step="0.1" min="0" value="${crownR(pl)}" onchange="A.setP('${pl.id}','r',+this.value)"></label>
    <label>Position x / y (m) <span class="row"><input type="number" step="0.1" value="${pl.x}" onchange="A.setP('${pl.id}','x',+this.value)"><input type="number" step="0.1" value="${pl.y}" onchange="A.setP('${pl.id}','y',+this.value)"></span></label>
  </div>${ownTaskForm("p", pl)}
  <div class="row wrap">${pl.unplaced ? `<button class="btn primary" onclick="A.placeExisting('${pl.id}')">📍 Auf Karte setzen</button>` : `<button class="btn" onclick="A.mapTo('${pl.id}')">🗺️ Auf Karte zeigen</button>`}${pl.flag ? `<button class="btn" onclick="A.setP('${pl.id}','flag','')">Verdacht bestätigt</button>` : ""}<button class="btn danger" onclick="A.delP('${pl.id}')">Löschen</button></div></details>`;
}
function ownTaskForm(kind, item) {
  const own = (item.tasks || []);
  return `<h3>Eigene Aufgaben</h3>${own.map((s, i) => { const t = parseTask(s, "C" + i); return `<div class="hl">${TT[t.t].i} ${monthsText(t)}: ${esc(t.x)} <button class="x" onclick="A.delTask('${kind}','${item.id}',${i})">✕</button></div>`; }).join("") || `<p class="hint">Noch keine.</p>`}
  <div class="form own"><label>Art <select id="nt-t">${Object.entries(TT).map(([k, v]) => `<option value="${k}">${v.i} ${v.n}</option>`).join("")}</select></label>
  <label>Von <select id="nt-a">${MONL.map((m, i) => `<option value="${i + 1}" ${i + 1 === curM() ? "selected" : ""}>${m}</option>`).join("")}</select></label>
  <label>Bis <select id="nt-b">${MONL.map((m, i) => `<option value="${i + 1}" ${i + 1 === curM() ? "selected" : ""}>${m}</option>`).join("")}</select></label>
  <label class="full">Was ist zu tun? <input id="nt-x"></label>
  <label class="cb"><input type="checkbox" id="nt-e"> nur einmal</label>
  <button class="btn" onclick="A.addTask('${kind}','${item.id}')">Hinzufügen</button></div>`;
}
function objSheet(ob) {
  const T0 = TYPES[ob.type] || TYPES.sonst, ok = "o:" + ob.id, T = ownerTasks("o", ob);
  return `<div class="shead"><span class="big">${objIcon(ob)}</span><div><h2>${esc(ob.label || T0.n)}</h2><div class="muted">${T0.n} · ${fmt(ob.w)} × ${fmt(ob.h)} m = ${fmt(ob.w * ob.h)} m²</div></div></div>
  ${ob.note ? `<p class="note">📝 ${esc(ob.note)}</p>` : ""}
  ${T.length ? yearBand(T) + `<h3>Aufgaben</h3>` + taskList(ok, T, true) : `<p class="hint">Keine Aufgaben hinterlegt.</p>`}
  <h3>Meine Fotos</h3>${photoBlock(ok)}
  <h3>Notiz</h3><textarea rows="3" onchange="A.setO('${ob.id}','note',this.value)">${esc(ob.note || "")}</textarea>
  <details class="editbox" ${UI.edit ? "open" : ""}><summary>✏️ Bearbeiten</summary><div class="form">
    <label>Name <input value="${esc(ob.label || "")}" onchange="A.setO('${ob.id}','label',this.value)"></label>
    <label>Art <select onchange="A.setO('${ob.id}','type',this.value)">${Object.keys(TYPES).map(k => `<option value="${k}" ${k === ob.type ? "selected" : ""}>${TYPES[k].n}</option>`).join("")}</select></label>
    <label>Breite / Länge (m) <span class="row"><input type="number" step="0.1" min="0.1" value="${ob.w}" onchange="A.setO('${ob.id}','w',+this.value)"><input type="number" step="0.1" min="0.1" value="${ob.h}" onchange="A.setO('${ob.id}','h',+this.value)"></span></label>
    <label>Position x / y (m) <span class="row"><input type="number" step="0.1" value="${ob.x}" onchange="A.setO('${ob.id}','x',+this.value)"><input type="number" step="0.1" value="${ob.y}" onchange="A.setO('${ob.id}','y',+this.value)"></span></label>
  </div>${ownTaskForm("o", ob)}<div class="row wrap"><button class="btn" onclick="A.dupO('${ob.id}')">Duplizieren</button><button class="btn danger" onclick="A.delO('${ob.id}')">Löschen</button></div></details>`;
}
function libSheet(L) {
  const n = S.plants.filter(pl => pl.lib === L.id);
  return `<div class="shead"><span class="big">${L.emoji}</span><div><h2>${esc(L.name)}</h2><div class="muted"><i>${esc(L.latin)}</i> · ${CATS[L.cat]}</div></div></div>
  ${L.verboten ? `<div class="warnbox bad">⛔ ${esc(L.verboten)}</div>` : ""}${L.warn ? `<div class="warnbox">⚠️ ${esc(L.warn)}</div>` : ""}
  <p>${esc(L.info)}</p>
  <p><a href="${commonsLink(L)}" target="_blank" rel="noopener">🖼️ Bilder auf Wikimedia Commons ansehen</a></p>
  ${yearBand(L.T)}${guideButtons(L.id, "lib:" + L.id)}<h3>Pflegekalender</h3>${taskList(null, L.T, false)}
  <h3>Fotos</h3>${photoBlock("lib:" + L.id)}
  ${n.length ? `<h3>In deinem Garten</h3>${n.map(pl => `<div class="li" onclick="A.openOwner('p:${pl.id}')"><span class="thumb">${L.emoji}</span><div class="lit"><b>${esc(pname(pl))}</b></div></div>`).join("")}` : ""}
  ${!L.verboten ? `<button class="btn primary" onclick="A.placeFromLib('${L.id}')">🌱 In den Garten setzen</button>` : ""}`;
}


function guideButtons(libId, back) {
  const gs = typeof guidesFor === "function" ? guidesFor(libId) : [];
  if (!gs.length) return "";
  return `<h3>🎬 So geht's</h3><div class="gbtns">${gs.map(G => `<button class="gbtn" onclick="A.openGuide('${G.id}','${back}')">${esc(G.title)}</button>`).join("")}</div>`;
}
function guideSheet(G, back) {
  return `${back ? `<button class="btn sm" onclick="A.guideBack()">‹ Zurück</button>` : ""}
  <h2>🎬 ${esc(G.title)}</h2><p class="hint">${esc(G.intro)}</p>
  <div class="gsvg" id="gsvg">${G.svg}</div>
  <div class="gstep" id="gtext"></div>
  <div class="gctl"><button class="btn sq" onclick="A.gStep(-1)" aria-label="zurück">◀</button><div class="gdots" id="gdots"></div><button class="btn sq" onclick="A.gStep(1)" aria-label="weiter">▶</button><button class="btn" id="gplay" onclick="A.gPlay()">▶ Abspielen</button></div>
  ${G.tip ? `<p class="note">💡 ${esc(G.tip)}</p>` : ""}
  ${G.plants !== "*holz" ? `<p class="hint small">Gilt für: ${G.plants.map(id => LIBM[id] ? LIBM[id].name : id).join(", ")}</p>` : `<p class="hint small">Gilt für alle Gehölze: Obst, Beeren, Ziersträucher, Rosen.</p>`}`;
}
function guideRender() {
  const G = GUIDES[UI.gid], n = UI.gStep, box = $("#gsvg"); if (!G || !box) return;
  box.querySelectorAll("[data-s]").forEach(el => el.classList.toggle("on", n >= +el.dataset.s));
  box.querySelectorAll("[data-x]").forEach(el => el.classList.toggle("gone", n >= +el.dataset.x));
  box.querySelectorAll("[data-h]").forEach(el => el.classList.toggle("hlt", el.dataset.h.split(",").includes("" + n)));
  $("#gtext").innerHTML = `<b>Schritt ${n + 1} von ${G.steps.length}</b><br>${esc(G.steps[n])}`;
  $("#gdots").innerHTML = G.steps.map((_, i) => `<i class="${i === n ? "on" : ""}" onclick="A.gGo(${i})"></i>`).join("");
}

/* ============ Claude (Foto-Bestimmung, Fragen) ============ */
let SAMPLE = null, DL = null;
function gardenContext() {
  return `Kleingarten mit ${S.size} m² in Nordrhein-Westfalen, Landesverband Westfalen und Lippe. Heute: ${now().toLocaleDateString("de-DE")}.
Pflanzen im Garten: ${S.plants.map(pl => pname(pl) + (pl.qty ? " (" + pl.qty + ")" : "")).join("; ")}.
Wichtige Regeln der Gartenordnung des Bezirksverbands: keine chemischen Pflanzenschutzmittel, kein Salz/Essig; nicht erlaubt sind Nadelgehölze, Koniferen, Haselnuss, Walnuss, Holunder nur kleinwüchsig; auf Kirschlorbeer verzichten; Ziergehölze bis 2 m; je 200 m² max. 2 Buschbäume und 1 Halbstamm, bis 3,50 m; radikaler Schnitt, Roden, Umpflanzen nur 1.10. bis 28.2., sonst nur Form- und Pflegeschnitt; torffrei; kein Verbrennen; ein Gewächshaus bis 6 m²; Ruhezeiten werktags 8-13 und 15-20 Uhr.`;
}
async function downscale(file, max) {
  max = max || 1280;
  const bmp = await createImageBitmap(file);
  const sc = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas"); c.width = Math.round(bmp.width * sc); c.height = Math.round(bmp.height * sc);
  c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
  return new Promise(res => c.toBlob(b => res(b), "image/jpeg", 0.85));
}
function parseJSON(t) { const a = t.indexOf("{"), b = t.lastIndexOf("}"); if (a < 0 || b < a) return null; try { return JSON.parse(t.slice(a, b + 1)); } catch (e) { return null; } }
function aiError(e) {
  if (e && e.code === "not_granted") { SAMPLE = null; return "Die Claude-Funktion ist hier nicht freigegeben."; }
  if (e && e.code === "rate_limited") return "Gerade zu viele Anfragen. Bitte in ein paar Minuten noch einmal.";
  return "Das hat nicht geklappt" + (e && e.message ? ": " + e.message : ".");
}

/* ============ Aktionen ============ */
const A = {
  openGuide(id, back) { UI.gid = id; UI.gStep = 0; UI.gBack = back || ""; A.gStop(); openSheet(guideSheet(GUIDES[id], UI.gBack)); requestAnimationFrame(guideRender); },
  guideBack() { A.gStop(); const b = UI.gBack; if (b.startsWith("lib:")) A.openLib(b.slice(4)); else if (b) A.openOwner(b); },
  gStep(d) { A.gStop(); A.gGo(UI.gStep + d); },
  gGo(n) { const G = GUIDES[UI.gid]; UI.gStep = Math.max(0, Math.min(G.steps.length - 1, n)); guideRender(); },
  gPlay() {
    if (UI.gTimer) { A.gStop(); return; }
    const G = GUIDES[UI.gid]; if (UI.gStep >= G.steps.length - 1) A.gGo(0);
    $("#gplay").textContent = "⏸ Pause";
    UI.gTimer = setInterval(() => { if (!$("#gsvg") || UI.gStep >= GUIDES[UI.gid].steps.length - 1) { A.gStop(); return; } A.gGo(UI.gStep + 1); }, 3800);
  },
  gStop() { clearInterval(UI.gTimer); UI.gTimer = null; const b = $("#gplay"); if (b) b.textContent = "▶ Abspielen"; },
  done(ok, tid, inSheet) { toggleDone(ok, tid); if (inSheet) A.openOwner(ok); render(); },
  openOwner(ok) {
    const [kind, id] = ok.split(":");
    if (kind === "p") { const pl = S.plants.find(x => x.id === id); if (pl) { openSheet(plantSheet(pl)); loadPhotos(ok); } }
    else if (kind === "o") { const ob = S.objs.find(x => x.id === id); if (ob) { openSheet(objSheet(ob)); loadPhotos(ok); } }
  },
  openLib(id) { const L = LIBM[id]; if (L) { openSheet(libSheet(L)); loadPhotos("lib:" + id); } },
  placeFromLib(id) { closeSheet(); UI.edit = true; UI.tool = "plant"; UI.placeLib = id; go("karte"); toast("Jetzt auf die Karte tippen, um " + LIBM[id].name + " zu setzen."); },
  pickLib() {
    openSheet(`<h2>Pflanze wählen</h2><input class="search" type="search" placeholder="Suchen…" oninput="A.pickFilter(this.value)" autofocus><div id="picklist">${pickList("")}</div>`);
  },
  pickFilter(q) { $("#picklist").innerHTML = pickList(q); },
  pick(id) { UI.placeLib = id; closeSheet(); render(); toast("Auf die Karte tippen, um zu setzen."); },
  edit() { UI.edit = !UI.edit; if (!UI.edit) { UI.tool = "sel"; } render(); },
  tool(t) { UI.tool = t; UI.placeId = null; render(); if (t === "plant" && !UI.placeLib) A.pickLib(); },
  hi() { UI.hi = !UI.hi; render(); },
  undo() { if (!UNDO.length) return; S = JSON.parse(UNDO.pop()); LAST = JSON.stringify(S); try { localStorage.setItem(KEY, LAST); } catch (e) {} closeSheet(); render(); toast("Letzte Änderung rückgängig gemacht"); },
  lockObj() { UI.lockObj = !UI.lockObj; render(); toast(UI.lockObj ? "Flächen und Bauwerke sind gesperrt, nur Pflanzen lassen sich verschieben." : "Flächen sind wieder verschiebbar."); },
  rtab(k) { UI.rtab = k; render(); },
  fq(q, set) { UI.fq = q; if (set) { const i = document.querySelector('#view input.search'); if (i) i.value = q; } $("#faqlist").innerHTML = faqHTML(); },
  pf(k) { UI.pf = k; UI.ps = ""; render(); },
  ps(q) { UI.ps = q.trim(); refreshMap(); const i = $("#psinfo"); if (i) i.innerHTML = psInfo(); },
  placeExisting(id) { closeSheet(); UI.edit = true; UI.tool = "plant"; UI.placeId = id; UI.pf = "alle"; go("karte"); toast("Jetzt auf die Karte tippen, wo die Pflanze steht."); },
  labels() { UI.labels = !UI.labels; render(); },
  zoom(d) { UI.zoom = Math.max(1, Math.min(4, UI.zoom + d * 0.5)); refreshMap(); },
  mapTo(id) { closeSheet(); UI.hi = false; go("karte"); setTimeout(() => { const g = document.querySelector(`[data-id="${id}"]`); if (g) { g.classList.add("flash"); g.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" }); } }, 60); },
  calM(m) { UI.calM = m; render(); },
  calMode(m) { UI.calMode = m; render(); },
  plTab(t) { UI.plTab = t; render(); },
  search(q) { UI.q = q; $("#pllist").innerHTML = plList(); fillThumbs(); },
  cat(c) { UI.cat = c; render(); },
  setP(id, k, v) { const pl = S.plants.find(x => x.id === id); if (!pl) return; if (v === "" && k !== "note") delete pl[k]; else pl[k] = v; save(); if (["lib", "form", "flag"].includes(k)) A.openOwner("p:" + id); if (UI.view === "karte") refreshMap(); },
  setO(id, k, v) { const ob = S.objs.find(x => x.id === id); if (!ob) return; ob[k] = v; save(); if (UI.view === "karte") refreshMap(); if (k === "type") A.openOwner("o:" + id); },
  delP(id) { const pl = S.plants.find(x => x.id === id); if (!pl) return; confirmBox(`„${pname(pl)}“ löschen?`, () => { S.plants = S.plants.filter(x => x.id !== id); save(); closeSheet(); render(); }); },
  delO(id) { const ob = S.objs.find(x => x.id === id); if (!ob) return; confirmBox(`„${ob.label}“ löschen?`, () => { S.objs = S.objs.filter(x => x.id !== id); save(); closeSheet(); render(); }); },
  dupO(id) { const ob = S.objs.find(x => x.id === id); const n = Object.assign({}, ob, { id: uid("o"), x: ob.x + 0.5, y: ob.y + 0.5, tasks: (ob.tasks || []).slice() }); S.objs.push(n); save(); render(); A.openOwner("o:" + n.id); },
  addTask(kind, id) {
    const x = $("#nt-x").value.trim(); if (!x) { toast("Bitte beschreiben, was zu tun ist."); return; }
    const t = $("#nt-t").value, a = $("#nt-a").value, b = $("#nt-b").value, e = $("#nt-e").checked;
    const item = kind === "p" ? S.plants.find(q => q.id === id) : S.objs.find(q => q.id === id);
    item.tasks = item.tasks || []; item.tasks.push(`${t}|${a === b ? a : a + "-" + b}||${x.replace(/\|/g, "/")}|${e ? "e" : ""}`);
    save(); A.openOwner(kind + ":" + id); render(); toast("Aufgabe hinzugefügt");
  },
  delTask(kind, id, i) {
    const item = kind === "p" ? S.plants.find(q => q.id === id) : S.objs.find(q => q.id === id);
    item.tasks.splice(i, 1);
    Object.keys(S.done).filter(k => k.startsWith(kind + ":" + id + "#C")).forEach(k => delete S.done[k]);
    save(); A.openOwner(kind + ":" + id); render();
  },
  setS(k, v) { S[k] = v; save(); render(); },
  setTarget(v) { S.hours.target = +v || 0; save(); },
  addHours() { const d = $("#hd").value, h = +$("#hh").value, t = $("#ht").value; if (!h) { toast("Bitte Stunden eintragen."); return; } S.hours.log.push({ d, h, t }); S.hours.log.sort((a, b) => (a.d || "").localeCompare(b.d || "")); save(); render(); },
  delHours(i) { S.hours.log.splice(i, 1); save(); render(); },
  goStunden(e) { e.preventDefault(); UI.rtab = "daten"; go("regeln"); setTimeout(() => { const s = $("#stunden"); if (s) s.scrollIntoView({ behavior: "smooth" }); }, 50); },
  async addPhoto(key, input) {
    const f = input.files && input.files[0]; if (!f) return;
    try { const blob = await downscale(f, 1600); const arr = (await idbGet("photos:" + key)) || []; arr.unshift({ blob, d: new Date().toLocaleDateString("de-DE") }); await idbSet("photos:" + key, arr); loadPhotos(key); toast("Foto gespeichert"); }
    catch (e) { toast("Foto konnte nicht gespeichert werden."); }
  },
  async delPhoto(key, i) { const arr = (await idbGet("photos:" + key)) || []; arr.splice(i, 1); await idbSet("photos:" + key, arr); loadPhotos(key); },
  bigPhoto(src) { $("#lightbox img").src = src; $("#lightbox").classList.add("open"); },
  async setBg(input) { const f = input.files && input.files[0]; if (!f) return; try { const b = await downscale(f, 2000); await idbSet("bg", b); UI.bgURL = URL.createObjectURL(b); toast("Luftbild gesetzt. Auf der Karte ausrichten: Gartenbreite und -länge anpassen."); render(); } catch (e) { toast("Bild konnte nicht gespeichert werden."); } },
  async delBg() { await idbDel("bg"); UI.bgURL = null; render(); },
  async exportData() {
    const data = JSON.stringify(S);
    const name = "kleingarten-" + new Date().toISOString().slice(0, 10) + ".json";
    if (DL) { try { await DL.save({ filename: name, data }); toast("Export gespeichert"); return; } catch (e) { if (e && e.code && /declin|cancel|abort/i.test(e.code)) { toast("Abgebrochen"); return; } } }
    if (!(window.claude && window.claude.use)) { try { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([data], { type: "application/json" })); a.download = name; document.body.appendChild(a); a.click(); a.remove(); toast("Export heruntergeladen"); return; } catch (e) {} }
    $("#expbox").innerHTML = `<p class="hint">Download ist hier nicht möglich. Text kopieren und als Datei sichern:</p><textarea rows="4" readonly id="exptxt">${esc(data)}</textarea><button class="btn" onclick="A.copyExp()">Kopieren</button>`;
  },
  copyExp() { const t = $("#exptxt"); navigator.clipboard.writeText(t.value).then(() => toast("Kopiert"), () => { t.select(); toast("Bitte manuell kopieren"); }); },
  importFile(input) { const f = input.files && input.files[0]; if (!f) return; f.text().then(importText); },
  importPaste() { $("#expbox").innerHTML = `<textarea rows="4" id="imptxt" placeholder="Exportierten Text hier einfügen"></textarea><button class="btn primary" onclick="importText($('#imptxt').value)">Importieren</button>`; },
  takeMap() { confirmBox("Neue Karte übernehmen? Deine eigenen Änderungen an Karte und Pflanzen werden ersetzt.", () => { const d = defaultState(); S.objs = d.objs; S.plants = d.plants; S.W = d.W; S.H = d.H; S.mapv = MAPV; S.uid = Math.max(S.uid || 100, d.uid); save(); render(); toast("Neue Karte übernommen"); }); },
  reset() { confirmBox("Alle Änderungen, Häkchen und Notizen verwerfen und den Startzustand laden? Vorher am besten exportieren.", () => { S = defaultState(); save(); render(); toast("Zurückgesetzt"); }); },
  async identify(input) {
    const f = input.files && input.files[0]; if (!f || !SAMPLE) return;
    const box = $("#airesult"); box.innerHTML = `<p class="hint">⏳ Claude schaut sich das Foto an…</p>`;
    try {
      const lim = SAMPLE.limits ? await SAMPLE.limits().catch(() => ({})) : {};
      if (lim && lim.images === false) { box.innerHTML = `<p class="hint">Bilder werden in dieser Ansicht nicht unterstützt.</p>`; return; }
      const blob = await downscale(f, 1280);
      const ids = LIB.map(L => L.id + "=" + L.name).join(", ");
      const prompt = `Du bist erfahrener Kleingarten-Fachberater in NRW. Bestimme die Pflanze auf dem Foto so genau wie möglich (Herbst-/Winterzustand berücksichtigen).
${gardenContext()}
Antworte NUR mit JSON in diesem Format, auf Deutsch, ohne weiteren Text:
{"name":"deutscher Name","latin":"botanischer Name","sicherheit":"hoch|mittel|niedrig","merkmale":"woran erkennbar, 1-2 Sätze","alternativen":"mögliche Verwechslungen","pflege":"was jetzt im ${MONL[curM() - 1]} zu tun ist, 2-3 Sätze","go_hinweis":"Hinweis zur Gartenordnung oder leer","lib_id":"passende id aus dieser Liste oder null"}
Liste: ${ids}`;
      const res = await SAMPLE(prompt, { images: [blob], modelTier: "default" });
      const j = parseJSON(res.text || "");
      if (!j) { box.innerHTML = `<div class="answer">${esc(res.text || "Keine Antwort.")}</div>`; return; }
      const L = j.lib_id && LIBM[j.lib_id];
      box.innerHTML = `<div class="idres"><h3>${L ? L.emoji + " " : ""}${esc(j.name)} <span class="pill">${esc(j.sicherheit || "")}</span></h3><p class="muted"><i>${esc(j.latin)}</i></p>
        <p><b>Merkmale:</b> ${esc(j.merkmale)}</p>${j.alternativen ? `<p><b>Verwechslung möglich mit:</b> ${esc(j.alternativen)}</p>` : ""}
        <p><b>Jetzt zu tun:</b> ${esc(j.pflege)}</p>${j.go_hinweis ? `<div class="warnbox">⚖️ ${esc(j.go_hinweis)}</div>` : ""}
        <p class="hint">KI-Einschätzung, kann irren. Im Zweifel die Fachberatung fragen.</p>
        ${L ? `<div class="row wrap"><button class="btn" onclick="A.openLib('${L.id}')">Steckbrief</button>${!L.verboten ? `<button class="btn primary" onclick="A.placeFromLib('${L.id}')">In den Garten setzen</button>` : ""}</div>` : ""}</div>`;
    } catch (e) { box.innerHTML = `<p class="hint">${esc(aiError(e))}</p>`; }
    input.value = "";
  },
  async ask(ok) {
    const q = ($("#askq").value || "").trim(); if (!q || !SAMPLE) return;
    const out = $("#askres"); out.textContent = "⏳ …";
    let extra = "";
    if (ok) { const [k, id] = ok.split(":"); const pl = S.plants.find(x => x.id === id); if (pl) { const L = lib(pl); extra = `\nDie Frage bezieht sich auf: ${pname(pl)} (${L.name}, ${L.latin})${pl.note ? ". Notiz: " + pl.note : ""}.`; } }
    const prompt = `Du bist erfahrener Kleingarten-Fachberater. Antworte auf Deutsch, praxisnah, freundlich und knapp (höchstens 150 Wörter), ohne Gedankenstriche. Berücksichtige die Regeln.\n${gardenContext()}${extra}\n\nFrage: ${q}`;
    try { await SAMPLE(prompt, { onText: ({ text }) => { out.textContent = text; }, cache: false }); }
    catch (e) { out.textContent = aiError(e); }
  }
};
function pickList(q) {
  q = (q || "").toLowerCase();
  return Object.keys(CATS).map(c => { const l = LIB.filter(L => L.cat === c && !L.verboten && (!q || (L.name + " " + L.latin).toLowerCase().includes(q))).sort((a, b) => a.name.localeCompare(b.name, "de")); if (!l.length) return "";
    return `<h3>${CATS[c]}</h3>` + l.map(L => `<div class="li" onclick="A.pick('${L.id}')"><span class="thumb">${L.emoji}</span><div class="lit"><b>${esc(L.name)}</b><small><i>${esc(L.latin)}</i></small></div></div>`).join(""); }).join("");
}
function importText(t) {
  try { const j = JSON.parse(t); if (!j || !Array.isArray(j.objs) || !Array.isArray(j.plants)) throw 0; S = j; save(); render(); toast("Importiert"); }
  catch (e) { toast("Das ist keine gültige Export-Datei."); }
}
function confirmBox(msg, yes) {
  openSheet(`<h2>Sicher?</h2><p>${esc(msg)}</p><div class="row"><button class="btn danger" id="cyes">Ja</button><button class="btn" onclick="closeSheet()">Abbrechen</button></div>`);
  $("#cyes").onclick = () => { closeSheet(); yes(); };
}

/* ============ Start ============ */
function init() {
  S = load();
  LAST = JSON.stringify(S);
  if (!S.hours) S.hours = { target: 0, log: [] };
  if (!S.done) S.done = {};
  document.querySelectorAll("nav button").forEach(b => b.onclick = () => go(b.dataset.v));
  $("#sheet").addEventListener("click", e => { if (e.target.id === "sheet") closeSheet(); });
  $("#lightbox").onclick = () => $("#lightbox").classList.remove("open");
  go(location.hash.slice(1) || "heute");
  idbGet("bg").then(b => { if (b) { UI.bgURL = URL.createObjectURL(b); if (UI.view === "karte") refreshMap(); } });
  if (window.claude && window.claude.use) {
    window.claude.use("sample").then(s => { SAMPLE = s || null; if (SAMPLE && UI.view === "pflanzen") render(); }).catch(() => {});
    window.claude.use("downloads").then(d => { DL = d || null; }).catch(() => {});
  }
  setInterval(() => { if (UI.view === "heute" && !$("#sheet").classList.contains("open")) render(); }, 5 * 60 * 1000);
}
document.addEventListener("DOMContentLoaded", init);

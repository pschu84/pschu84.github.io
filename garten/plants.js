/* Pflanzenbibliothek Kleingarten
   Aufgaben-Format: "TYP|Monate|Schnittstärke|Text|Wiederholung"
   TYP: S Schneiden, E Ernten, D Düngen, P Säen/Pflanzen, W Winterschutz, K Pflege/Kontrolle
   Monate: "3-4" oder "11-2" oder "3,8-9"; Stärke 1 leicht, 2 mittel, 3 stark
   Wiederholung: leer = einmal pro Saison, m = monatlich */
const LIB = [];
function P(id, name, latin, cat, emoji, info, tasks, extra) {
  LIB.push(Object.assign({ id, name, latin, cat, emoji, info, tasks }, extra || {}));
}
const CATS = {
  obst: "Baumobst", beeren: "Beeren & Reben", gemuese: "Gemüse", kraeuter: "Kräuter",
  zier: "Stauden & Blumen", gehoelz: "Ziergehölze & Hecken", sonst: "Rasen & Gründüngung"
};

/* ---------------- BAUMOBST ---------------- */
P("apfel","Apfel","Malus domestica","obst","🍎",
"Sonnig, tiefgründiger und nährstoffreicher Boden. Im Kleingarten nur schwach wachsende Unterlagen (z. B. M9, M26) als Busch, Spindel oder Säule, Höhe möglichst unter 3,50 m (GO 8). Stamm im Winter weißeln gegen Frostrisse. Baumscheibe frei von Rasen halten.",
["S|1-3|2|Winterschnitt an frostfreien Tagen: Konkurrenztriebe zur Mitte, steil nach oben wachsende Wasserschosse und nach innen wachsende Äste entfernen. Krone licht halten, so dass ein Hut hindurchfallen könnte. Höchstens ein Drittel des Holzes pro Jahr wegnehmen, bei stark verwilderten Bäumen über 2 bis 3 Jahre verteilen.",
 "S|6-7|1|Sommerschnitt: junge Wasserschosse ausreißen statt schneiden. Nach dem Junifruchtfall bei Überbehang auf 1 bis 2 Früchte je Büschel ausdünnen (bessere Qualität, kein Ertragswechsel).",
 "D|3-4||Reifen Kompost (2 bis 3 Liter je m²) auf die Baumscheibe geben, anschließend mulchen. Kein Mineraldünger nötig.",
 "E|8-10||Ernte je nach Sorte: reif, wenn sich der Apfel mit leichter Drehung nach oben vom Zweig löst und die Kerne braun sind. Lageräpfel vorsichtig pflücken, nicht schütteln.",
 "W|10||Leimringe gegen Frostspanner um den Stamm legen und bis März kontrollieren.",
 "K|11-12||Fallobst und Fruchtmumien entfernen (Monilia), Stamm weißeln, Rinde auf Krebsstellen prüfen."],
{baum:1,r:1.8});

P("birne","Birne","Pyrus communis","obst","🍐",
"Warmer, geschützter Platz. Birnen wachsen steil nach oben: Seitenäste früh flach binden, dann tragen sie früher. Auf Quitten-Unterlage bleibt der Baum klein.",
["S|2-3|2|Winterschnitt: steile Konkurrenztriebe entfernen, 3 bis 4 Leitäste fördern, nach innen wachsende Triebe raus. Fruchtspieße (kurze Triebe mit dicken Knospen) stehen lassen.",
 "S|6-7|1|Sommerschnitt: Wasserschosse ausbrechen, zu dichte Neutriebe entfernen.",
 "D|3||Kompost auf die Baumscheibe, mulchen.",
 "E|8-10||Frühbirnen kurz vor der Vollreife pflücken und nachreifen lassen. Lagerbirnen ernten, wenn sich der Stiel bei leichtem Anheben löst.",
 "K|5-8||Birnengitterrost (orange Flecken auf den Blättern) beobachten: Zwischenwirt ist Wacholder in der Nähe. Befallene Blätter entsorgen, nicht kompostieren."],
{baum:1,r:1.6});

P("suesskirsche","Süßkirsche","Prunus avium","obst","🍒",
"Wächst sehr stark. Im Kleingarten nur auf schwacher Unterlage (z. B. Gisela 5) oder als Säule. Kirschen werden nach der Ernte geschnitten, weil die Wunden im Sommer besser heilen. Viele Sorten brauchen eine Befruchtersorte in der Nähe.",
["S|7-8|2|Sommerschnitt direkt nach der Ernte: abgetragene, zu dichte und nach innen wachsende Äste entfernen, Höhe begrenzen (auf einen tiefer stehenden Seitenast ableiten). Große Schnitte im Winter vermeiden.",
 "E|6-7||Ernten, wenn die Kirschen vollfarbig und süß sind. Mit Stiel pflücken, dann halten sie länger. Vogelschutznetz rechtzeitig auflegen.",
 "K|5-6||Kirschfruchtfliege: gelbe Leimtafeln aufhängen, sobald die Früchte von grün nach gelb wechseln.",
 "D|3||Kompost dünn ausbringen. Kirschen brauchen wenig Dünger."],
{baum:1,r:1.8});

P("sauerkirsche","Sauerkirsche (Morelle)","Prunus cerasus","obst","🍒",
"Selbstfruchtbar, verträgt auch Halbschatten. Trägt vor allem am einjährigen Holz: ohne Schnitt verkahlen die Triebe zu langen „Peitschen“.",
["S|7-8|2|Nach der Ernte: abgetragene Triebe auf einen jungen Seitentrieb zurückschneiden, so bleibt die Krone jung und fruchtbar. Etwa ein Viertel des Holzes darf weg.",
 "K|4-5||Monilia-Spitzendürre (welke Triebspitzen nach der Blüte): befallene Triebe sofort bis 15 cm ins gesunde Holz zurückschneiden.",
 "E|7||Reif, wenn die Früchte dunkelrot und weich sind. Mit der Schere am Stiel abschneiden.",
 "D|3||Kompost auf die Baumscheibe."],
{baum:1,r:1.5});

P("saeulenobst","Säulen- oder Spalierobst","Malus, Prunus, Pyrus (schmale Formen)","obst","🌳",
"Säulen- und Spalierobst ist laut GO 8 als Alternative zu Busch- und Halbstämmen erlaubt und zählt nicht zu deren Höchstzahl. Wenig Platzbedarf, auch im großen Kübel möglich.",
["S|6-7|1|Seitentriebe auf 10 bis 15 cm einkürzen, damit die schlanke Form bleibt. Den Mitteltrieb erst kappen, wenn die gewünschte Endhöhe erreicht ist.",
 "D|3-4||Kompost geben. Im Kübel von April bis Juli alle 3 Wochen organischen Flüssigdünger.",
 "E|6-10||Ernte je nach Obstart (Kirsche Juni/Juli, Apfel August bis Oktober).",
 "W|11-2||Im Kübel: Topf mit Vlies oder Jute einpacken und auf Holz stellen, damit die Wurzeln nicht durchfrieren."],
{baum:1,r:0.6});

P("pflaume","Pflaume / Zwetschge","Prunus domestica","obst","🫐",
"Mag frischen, nährstoffreichen Boden. Bildet oft Wurzelausläufer, die konsequent entfernt werden müssen. Schnitt im Sommer beugt Gummifluss vor.",
["S|7-9|2|Nach der Ernte: Konkurrenztriebe, zu dichte und abgetragene, hängende Äste entfernen. Krone luftig halten.",
 "S|3-4|1|Leichter Auslichtungsschnitt im Frühjahr möglich, nur dünnes Holz.",
 "E|8-9||Reif, wenn die Frucht am Stiel weich wird und sich leicht löst. Für Kuchen kurz vor der Vollreife ernten.",
 "D|3||Kompost auf die Baumscheibe.",
 "K|5-9||Wurzelausläufer direkt an der Wurzel ausreißen (nicht abschneiden, sonst kommen mehr)."],
{baum:1,r:1.7});

P("mirabelle","Mirabelle","Prunus domestica subsp. syriaca","obst","🟡",
"Kleine gelbe, sehr süße Früchte. Pflege wie Pflaume, wächst etwas schwächer.",
["S|7-9|2|Nach der Ernte auslichten: zu dichte und nach innen wachsende Triebe entfernen.",
 "E|8||Reif, wenn die Früchte goldgelb mit roten Bäckchen sind und fast von selbst fallen.",
 "D|3||Kompost auf die Baumscheibe.",
 "K|5-9||Wurzelausläufer ausreißen."],
{baum:1,r:1.5});

P("reneklode","Reneklode (Ringlo)","Prunus domestica subsp. italica","obst","🟢",
"Grüne bis gelbe, besonders aromatische Pflaumenart. Pflege wie Pflaume. Wichtig: Veredlungsstelle muss über der Erde liegen, sonst bildet die Unterlage Ausläufer.",
["S|7-9|2|Nach der Ernte auslichten, Konkurrenztriebe entfernen.",
 "E|8-9||Reif, wenn die Haut gelblich wird und die Frucht leicht nachgibt.",
 "D|3||Kompost auf die Baumscheibe.",
 "K|5-9||Wurzelausläufer ausreißen, Baumscheibe frei halten."],
{baum:1,r:1.4});

P("pfirsich","Pfirsich","Prunus persica","obst","🍑",
"Braucht Wärme und einen geschützten Platz. Trägt nur am einjährigen Holz, darum jedes Jahr kräftig schneiden. Hauptproblem ist die Kräuselkrankheit.",
["S|3-4|3|Fruchtschnitt zur Blütezeit: abgetragene Triebe ganz entfernen. Von den neuen Fruchttrieben etwa die Hälfte auf 2 bis 3 Knospen einkürzen. „Wahre“ Fruchttriebe erkennt man an runden Blütenknospen neben spitzen Blattknospen.",
 "K|12-2||Kräuselkrankheit vorbeugen: Baum von Dezember bis zum Austrieb vor Regen schützen (Folie oder Dach), denn der Pilz infiziert bei Nässe.",
 "K|4-5||Gekräuselte, rötliche Blätter sofort abzupfen und im Hausmüll entsorgen.",
 "E|7-9||Reif, wenn der Pfirsich duftet und bei leichtem Druck nachgibt.",
 "D|3-5||Kompost und etwas Hornspäne."],
{baum:1,r:1.3});

P("aprikose","Aprikose","Prunus armeniaca","obst","🟠",
"Blüht sehr früh und ist deshalb spätfrostgefährdet. Am besten vor einer warmen Südwand.",
["S|7-8|2|Nach der Ernte schneiden: zu dichte Triebe und abgestorbenes Holz entfernen. Große Schnitte im Winter vermeiden (Gummifluss).",
 "W|2-3||Bei Frost während der Blüte über Nacht mit Vlies abdecken.",
 "E|7-8||Reif, wenn die Frucht duftet und sich leicht löst.",
 "D|3||Kompost auf die Baumscheibe."],
{baum:1,r:1.3});

P("feige","Feige","Ficus carica","obst","🟣",
"Wärmeliebend, Triebspitzen erfrieren in kalten Wintern. Schnitt erst nach den starken Frösten. Wichtig: ein starker Verjüngungsschnitt (auf den Stock setzen) ist laut BNatSchG § 39 und GO 9.4 nur bis 28. Februar erlaubt. Ab März nur noch Form- und Pflegeschnitt.",
["S|2|3|Verjüngung (falls nötig) bis spätestens 28.2. an einem frostfreien Tag: zu alte und zu lange Äste kräftig zurücknehmen, Krone stark auslichten.",
 "S|3-4|2|Frühjahrsschnitt nach den Frösten: erfrorene Triebe bis ins grüne Holz, nach innen wachsende und sich kreuzende Triebe entfernen.",
 "S|6-7|1|Triebspitzen nach 5 bis 6 Blättern abkneifen (pinzieren), das fördert den Fruchtansatz für das nächste Jahr.",
 "E|8-10||Reif, wenn die Feige weich ist, leicht nach unten hängt und die Haut feine Risse bekommt.",
 "W|11-3||Wurzelbereich dick mit Laub mulchen. Junge Pflanzen bei starkem Frost mit Vlies schützen."],
{baum:1,r:1.4});

P("quitte","Quitte","Cydonia oblonga","obst","🍋",
"Robust, selbstfruchtbar, wenig Schnitt nötig. Früchte nur gekocht essbar (Gelee).",
["S|2-3|1|Nur auslichten: abgestorbene, kreuzende und zu dichte Triebe entfernen.",
 "E|10||Vor dem ersten Frost ernten, wenn sich der Flaum leicht abreiben lässt und die Farbe gelb wird.",
 "D|3||Kompost auf die Baumscheibe."],
{baum:1,r:1.5});

P("maulbeere","Maulbeere","Morus alba / nigra","obst","🫐",
"Herzförmige, gesägte Blätter. Sehr schnittverträglich, kann aber groß werden: Höhe begrenzen. Blutet stark, daher im Sommer (belaubt) schneiden.",
["S|7-8|2|Krone und Höhe begrenzen, Konkurrenztriebe und zu lange Äste zurücknehmen.",
 "E|6-8||Reife Früchte fallen leicht ab: Tuch unterlegen und schütteln. Färben stark.",
 "D|3||Kompost auf die Baumscheibe."],
{baum:1,r:1.6});

P("walnuss","Walnuss","Juglans regia","obst","🌰",
"NICHT ERLAUBT laut GO 9.1 (großwüchsig). Bei Fund: Entfernung mit Vorstand und Fachberatung abstimmen. Roden nur vom 1.10. bis 28.2. (BNatSchG § 39).",
["K|10-2||Nicht erlaubtes Gehölz: Entfernung im erlaubten Zeitfenster planen und durchführen."],
{baum:1,verboten:"GO 9.1: Walnuss ist im Kleingarten nicht erlaubt",r:2.5});

P("haselnuss","Haselnuss","Corylus avellana","obst","🌰",
"NICHT ERLAUBT laut GO 9.1. Erkennbar an rundlichen, doppelt gesägten, weich behaarten Blättern und vielen Bodentrieben. Roden nur vom 1.10. bis 28.2. (BNatSchG § 39). Wurzelstock gründlich ausgraben, sonst treibt sie neu aus.",
["K|10-2||Nicht erlaubtes Gehölz: im erlaubten Zeitfenster roden, Wurzelstock entfernen. Vorher mit der Fachberatung klären."],
{verboten:"GO 9.1: Haselnuss ist im Kleingarten nicht erlaubt",r:1.4});

/* ---------------- BEEREN & REBEN ---------------- */
P("johannisbeere","Rote Johannisbeere","Ribes rubrum","beeren","🔴",
"Sonne bis Halbschatten, flach wurzelnd: mulchen statt hacken. Trägt am zwei- bis dreijährigen Holz. Pro Strauch etwa 1,5 m Platz einplanen.",
["S|8-9|2|Nach der Ernte: die ältesten, dunklen Triebe bodennah abschneiden. 8 bis 10 kräftige Triebe unterschiedlichen Alters stehen lassen, jedes Jahr 2 bis 3 junge Bodentriebe als Ersatz nachziehen.",
 "S|11-2|2|Alternativ Winterschnitt nach demselben Prinzip.",
 "E|6-7||Ernten, wenn die ganze Rispe gefärbt ist. Mit der Rispe pflücken und zu Hause abstreifen.",
 "D|3||Kompost und etwas Hornspäne, danach mulchen."],
{r:0.8});

P("johannisbeere-schwarz","Schwarze Johannisbeere","Ribes nigrum","beeren","⚫",
"Trägt am einjährigen Holz, darum kräftiger schneiden als die rote. Sehr vitaminreich.",
["S|8|3|Direkt nach der Ernte: abgetragene Triebe kräftig auf junge Seitentriebe oder bodennah zurückschneiden.",
 "K|3||Johannisbeer-Gallmilbe: auffällig dicke, runde Knospen ausbrechen und entsorgen.",
 "E|7||Ernten, wenn die Beeren glänzend schwarz sind.",
 "D|3||Kompost, danach mulchen."],
{r:0.8});

P("stachelbeere","Stachelbeere","Ribes uva-crispa","beeren","🟢",
"Sonne bis Halbschatten. Luftig halten, sonst droht Mehltau. Mehltauresistente Sorten wählen.",
["S|7-8|2|Nach der Ernte auslichten: alte Triebe bodennah raus, 6 bis 8 Triebe stehen lassen. Von Mehltau befallene Triebspitzen abschneiden.",
 "K|5-6||Stachelbeerblattwespe: grüne Larven, die Blätter kahl fressen, absammeln.",
 "E|6-7||Grün und hart zum Einkochen, weich und gefärbt zum Naschen.",
 "D|3||Kompost, mulchen."],
{r:0.7});

P("jostabeere","Jostabeere","Ribes × nidigrolaria","beeren","🟤",
"Kreuzung aus Schwarzer Johannisbeere und Stachelbeere, ohne Stacheln, robust und starkwüchsig.",
["S|11-2|2|Alle 2 bis 3 Jahre auslichten: die ältesten Triebe bodennah entfernen.",
 "E|7||Reif, wenn die Beeren tiefschwarz sind. Reifen nacheinander, mehrmals pflücken.",
 "D|3||Kompost, mulchen."],
{r:1.0});

P("himbeere","Himbeere (Sommer)","Rubus idaeus","beeren","🍓",
"Flach wurzelnd, keine Staunässe, gerne mulchen. Sommersorten tragen an den Ruten des Vorjahres. Gerüst aus Pfählen und Draht verwenden.",
["S|8|3|Nach der Ernte: alle abgetragenen Ruten bodennah abschneiden. Pro laufendem Meter 8 bis 10 kräftige Jungruten stehen lassen, den Rest entfernen.",
 "S|3|1|Im Frühjahr die Spitzen der Ruten knapp über dem obersten Draht einkürzen.",
 "E|6-7||Alle 2 bis 3 Tage durchpflücken, reife Beeren lösen sich leicht vom Zapfen.",
 "D|3-4||Kompost, kein Kalk. Mulch aus Laub oder Rasenschnitt.",
 "K|5-9||Ausläufer außerhalb der Reihe ausstechen, damit die Himbeeren nicht zum Nachbarn wandern (GO 8)."],
{r:0.6});

P("himbeere-herbst","Herbsthimbeere","Rubus idaeus (Herbstsorten)","beeren","🍓",
"Trägt an den diesjährigen Ruten, einfachster Schnitt. Kaum Madenbefall.",
["S|11-2|3|Alle Ruten bodennah abschneiden. Im Frühjahr treiben neue Ruten aus, die im Spätsommer tragen.",
 "E|8-10||Regelmäßig durchpflücken bis zum Frost.",
 "D|3-4||Kompost, mulchen.",
 "K|5-9||Ausläufer außerhalb der Reihe ausstechen."],
{r:0.6});

P("brombeere","Brombeere","Rubus fruticosus","beeren","⚫",
"Sehr wüchsig, an Spalier oder Draht ziehen. Dornenlose Sorten wählen. Muss konsequent begrenzt werden, damit sie nicht zu Nachbarn oder auf den Weg wächst (GO 8).",
["S|3|3|Abgetragene Ruten vom Vorjahr bodennah entfernen, 4 bis 6 junge Ruten anbinden.",
 "S|7|1|Seitentriebe der Jungruten auf 2 bis 3 Augen einkürzen.",
 "E|8-9||Reif, wenn die Beeren glänzend schwarz sind und sich leicht lösen.",
 "K|5-9||Neue Triebe am Boden und Ausläufer entfernen."],
{r:0.8});

P("heidelbeere","Kulturheidelbeere","Vaccinium corymbosum","beeren","🫐",
"Braucht sauren Boden (pH 4 bis 5). Pflanzerde ohne Torf verwenden (GO Präambel), z. B. Rindenhumus mit Nadelholzhäcksel. Nur mit Regenwasser gießen. Zwei Sorten verbessern den Ertrag.",
["S|2-3|1|Ab dem 4. Standjahr: die ältesten, grauen Triebe bodennah entfernen, schwache Triebe raus.",
 "E|7-8||Mehrmals durchpflücken, reif sind die Beeren, wenn sie rundum blau sind und sich leicht lösen.",
 "D|4-5||Organischen Rhododendron- oder Beerendünger (ohne Kalk).",
 "K|4-9||Mulchschicht aus Rindenhumus erneuern, bei Trockenheit mit Regenwasser gießen."],
{r:0.7});

P("weinrebe","Weinrebe","Vitis vinifera","beeren","🍇",
"Sonnige Wand, Pergola oder Spalier. Trägt an den diesjährigen Trieben, die aus dem Vorjahresholz wachsen. Pilzwiderstandsfähige Sorten (PiWi) sind im Kleingarten ideal.",
["S|1-2|3|Winterschnitt bis Ende Februar (später „bluten“ die Reben): Seitentriebe am Stamm auf 2 Augen zurückschneiden (Zapfenschnitt). Altes Holz am Gerüst lassen.",
 "S|6-8|1|Sommerschnitt: Geiztriebe ausbrechen, Fruchttriebe 2 bis 3 Blätter nach der letzten Traube kappen, Trauben teilweise entblättern für Sonne und Luft.",
 "E|9-10||Reif, wenn die Kerne braun sind und die Beeren süß schmecken. Mit der Schere schneiden.",
 "K|6-8||Echten und Falschen Mehltau beobachten, Laub luftig halten."],
{r:0.6});

P("erdbeere","Erdbeere","Fragaria × ananassa","beeren","🍓",
"Sonnig, humoser Boden. Beete nach 3 bis 4 Jahren neu anlegen, nicht an derselben Stelle.",
["K|5||Stroh oder Holzwolle unterlegen, damit die Früchte sauber bleiben und nicht faulen.",
 "E|6-7||Morgens ernten, mit Kelch pflücken.",
 "S|8|2|Nach der Ernte: alte Blätter abschneiden (Herz schonen), Ausläufer entfernen, außer zur Vermehrung.",
 "P|7-8||Neue Pflanzen setzen oder kräftige Ausläufer bewurzeln lassen.",
 "D|8||Nach der Ernte etwas Kompost."],
{r:0.3});

P("sanddorn","Sanddorn","Hippophae rhamnoides","beeren","🟠",
"Zweihäusig: Früchte nur an weiblichen Pflanzen und nur mit einer männlichen Pflanze in der Nähe. Sehr dornig, bildet Ausläufer. Liebt Sonne und mageren Boden.",
["S|3|1|Auslichten: abgestorbene und alte Fruchttriebe entfernen.",
 "E|8-10||Beerenzweige abschneiden, einfrieren und die gefrorenen Beeren abschütteln.",
 "K|5-9||Ausläufer abstechen."],
{r:1.0});

/* ---------------- GEMÜSE ---------------- */
P("tomate","Tomate","Solanum lycopersicum","gemuese","🍅",
"Starkzehrer. Im Gewächshaus oder unter Regendach, damit die Blätter trocken bleiben (Kraut- und Braunfäule). Jedes Jahr an einen anderen Platz oder Erde tauschen.",
["P|3-4||Ab Mitte März auf der Fensterbank vorziehen, nach 3 Wochen pikieren.",
 "P|5||Ins Gewächshaus ab Ende April, ins Freiland erst nach den Eisheiligen (Mitte Mai). Tief pflanzen, Stütze setzen.",
 "K|6-9||Wöchentlich ausgeizen (Seitentriebe in den Blattachseln ausbrechen), anbinden, nur von unten gießen. Untere Blätter entfernen.|m",
 "D|6-8||Alle 2 Wochen organisch düngen, z. B. Brennnesseljauche 1:10 verdünnt oder Tomatendünger.",
 "E|7-10||Ernten, wenn die Früchte vollfarbig sind. Vor dem Frost grüne Früchte zum Nachreifen ins Haus."],
{r:0.4});

P("gurke","Gurke","Cucumis sativus","gemuese","🥒",
"Wärmebedürftig, gleichmäßige Feuchte mit lauwarmem Wasser. Schlangengurken im Gewächshaus, Einlegegurken auch im Freiland.",
["P|4-5||Im April vorziehen, ab Mitte Mai ins Freiland oder Gewächshaus.",
 "K|6-8||Im Gewächshaus an Schnur hochleiten, Seitentriebe nach 1 bis 2 Früchten einkürzen.",
 "E|7-9||Jung und regelmäßig ernten, das fördert neuen Ansatz.",
 "D|6-8||Alle 2 Wochen organischer Flüssigdünger."],
{r:0.4});

P("zucchini","Zucchini","Cucurbita pepo","gemuese","🥒",
"Starkzehrer mit großem Platzbedarf (ca. 1 m²). Eine bis zwei Pflanzen reichen für einen Haushalt.",
["P|5||Nach den Eisheiligen pflanzen oder direkt säen, viel Kompost ins Pflanzloch.",
 "E|7-9||Bei 15 bis 20 cm Länge ernten, alle 2 bis 3 Tage nachsehen.",
 "K|7-9||Mehltau: stark befallene Blätter entfernen. Am Morgen gießen, nicht über die Blätter.",
 "D|6-8||Kompost nachlegen oder organischer Flüssigdünger."],
{r:0.5});

P("kuerbis","Kürbis","Cucurbita maxima / moschata","gemuese","🎃",
"Starkzehrer, wächst gern auf dem Kompostrand. Viel Platz einplanen.",
["P|5||Nach den Eisheiligen auspflanzen oder säen.",
 "K|7-8||Früchte auf ein Brett legen, Ranken nach 3 bis 4 Früchten einkürzen.",
 "E|9-10||Ernten, wenn der Stiel verholzt ist und die Frucht beim Klopfen hohl klingt. Vor dem ersten Frost.",
 "D|6-7||Kompost oder Brennnesseljauche."],
{r:0.6});

P("paprika","Paprika / Chili","Capsicum annuum","gemuese","🫑",
"Braucht viel Wärme, am besten im Gewächshaus. Lange Anzucht.",
["P|2-3||Ab Februar warm vorziehen (über 22 °C).",
 "P|5||Ins Gewächshaus oder an eine warme Wand nach den Eisheiligen.",
 "E|7-10||Grün oder ausgefärbt ernten, mit der Schere abschneiden.",
 "D|6-8||Alle 2 bis 3 Wochen organischer Flüssigdünger."],
{r:0.3});

P("buschbohne","Buschbohne","Phaseolus vulgaris var. nanus","gemuese","🫛",
"Schwachzehrer, frostempfindlich. Ideal für Nachkulturen. Roh giftig, nur gekocht essen.",
["P|5-7||Ab Mitte Mai säen, Folgesaaten alle 3 Wochen bis Mitte Juli.",
 "K|6||Pflanzen leicht anhäufeln, dann stehen sie stabiler.",
 "E|7-9||Jung und zart ernten, bevor sich die Kerne abzeichnen."],
{r:0.3});

P("stangenbohne","Stangenbohne","Phaseolus vulgaris","gemuese","🫛",
"Braucht Stangen von 2 bis 2,5 m. Sehr ertragreich auf kleiner Fläche. Nur gekocht essen.",
["P|5-6||Stangen stecken und 6 bis 8 Bohnen rund um jede Stange säen.",
 "E|7-9||Regelmäßig jung ernten."],
{r:0.3});

P("erbse","Erbse","Pisum sativum","gemuese","🫛",
"Verträgt Kühle, früh säen. Bindet Stickstoff: Wurzeln nach der Ernte im Boden lassen.",
["P|3-5||Ab März in Reihen säen, Rankhilfe (Reisig oder Netz) setzen.",
 "E|6-7||Zuckererbsen flach ernten, Markerbsen wenn die Hülsen prall sind.",
 "K|7||Nach der Ernte Kraut abschneiden, Wurzeln im Boden lassen."],
{r:0.3});

P("moehre","Möhre","Daucus carota","gemuese","🥕",
"Lockerer, steinfreier Boden, keine frische Düngung. Mischkultur mit Zwiebeln schützt vor Möhrenfliege.",
["P|3-6||In Reihen säen, Saat 3 Wochen feucht halten. Mit Radieschen als Markiersaat.",
 "K|5-6||Auf 3 bis 5 cm Abstand vereinzeln, Kulturschutznetz gegen Möhrenfliege.",
 "E|6-10||Je nach Sorte ernten, Lagermöhren vor dem Frost."],
{r:0.3});

P("radieschen","Radieschen","Raphanus sativus var. sativus","gemuese","🔴",
"Schnell, nach 4 bis 6 Wochen erntereif. Ideal als Lückenfüller.",
["P|3-9||Alle 2 bis 3 Wochen eine kleine Reihe nachsäen.|m",
 "E|4-10||Ernten, sobald die Knollen Daumengröße haben, sonst werden sie holzig."],
{r:0.2});

P("salat","Salat (Pflück- und Kopfsalat)","Lactuca sativa","gemuese","🥬",
"Mittelzehrer, kurze Kulturzeit. Schnecken sind der Hauptfeind.",
["P|3-8||Folgesaaten oder Jungpflanzen alle 3 bis 4 Wochen. Im Hochsommer hitzefeste Sorten.|m",
 "K|4-9||Schnecken morgens und abends absammeln, Schneckenzaun.",
 "E|5-10||Pflücksalat laufend von außen ernten, Kopfsalat wenn der Kopf fest ist."],
{r:0.25});

P("spinat","Spinat","Spinacia oleracea","gemuese","🥬",
"Kühle Jahreszeit, schießt im Hochsommer. Gute Vor- und Nachkultur.",
["P|3-4,8-9||Frühjahrs- und Herbstaussaat in Reihen.",
 "E|4-6,9-11||Blätter oder ganze Pflanzen ernten, bevor sie schießen."],
{r:0.25});

P("mangold","Mangold","Beta vulgaris subsp. vulgaris","gemuese","🥬",
"Robust, lange Ernte, bunte Stiele sind auch Zierde. Übersteht milde Winter.",
["P|4-6||Säen oder pflanzen, 30 cm Abstand.",
 "E|6-11||Immer nur äußere Blätter ernten, das Herz stehen lassen.|m",
 "W|11||Mit Laub abdecken, dann treibt er im Frühjahr wieder aus."],
{r:0.3});

P("rotebete","Rote Bete","Beta vulgaris subsp. vulgaris var. conditiva","gemuese","🟣",
"Mittelzehrer, unkompliziert. Lagerfähig.",
["P|4-6||In Reihen säen, später auf 10 cm vereinzeln.",
 "E|7-10||Ernten bei 5 bis 8 cm Durchmesser, Blätter abdrehen statt abschneiden."],
{r:0.25});

P("kohlrabi","Kohlrabi","Brassica oleracea var. gongylodes","gemuese","🥬",
"Schnell wachsender Kohl. Gleichmäßig gießen, sonst platzt er.",
["P|3-7||Jungpflanzen setzen, nicht zu tief.",
 "K|4-9||Kulturschutznetz gegen Kohlweißling und Kohlfliege.",
 "E|5-10||Ernten bei Tennisballgröße."],
{r:0.25});

P("gruenkohl","Grünkohl","Brassica oleracea var. sabellica","gemuese","🥬",
"Wintergemüse, nach dem ersten Frost süßer. Starkzehrer.",
["P|5-6||Jungpflanzen setzen, 50 cm Abstand.",
 "D|7||Kompost oder Brennnesseljauche.",
 "E|11-2||Blätter von unten nach oben ernten, den ganzen Winter über."],
{r:0.4});

P("lauch","Lauch / Porree","Allium porrum","gemuese","🧅",
"Lange Kultur, winterhart je nach Sorte.",
["P|5-7||Pflanzen tief in Rillen setzen.",
 "K|7-9||Mehrmals anhäufeln für lange weiße Schäfte.",
 "E|9-3||Nach Bedarf ernten, Wintersorten bleiben im Beet."],
{r:0.2});

P("zwiebel","Zwiebel","Allium cepa","gemuese","🧅",
"Schwachzehrer, sonnig. Gute Nachbarn: Möhren.",
["P|3-4||Steckzwiebeln setzen, Spitze schaut heraus.",
 "E|7-8||Ernten, wenn das Laub umknickt und vergilbt. Einige Tage an der Luft trocknen."],
{r:0.2});

P("knoblauch","Knoblauch","Allium sativum","gemuese","🧄",
"Herbstpflanzung bringt die größten Knollen.",
["P|10-11||Einzelzehen 5 cm tief stecken (auch Februar bis März möglich).",
 "E|7||Ernten, wenn zwei Drittel des Laubs gelb sind. Luftig trocknen."],
{r:0.15});

P("kartoffel","Kartoffel","Solanum tuberosum","gemuese","🥔",
"Starkzehrer, braucht Platz. Nicht neben Tomaten (Krautfäule).",
["P|4||Vorgekeimte Knollen ab Mitte April legen.",
 "K|5-6||Zweimal anhäufeln, Kartoffelkäfer und Larven absammeln.",
 "E|6-9||Frühkartoffeln ab Juni, Lagerkartoffeln wenn das Kraut abgestorben ist."],
{r:0.35});

P("feldsalat","Feldsalat","Valerianella locusta","gemuese","🥬",
"Winterhart, ideale Nachkultur im Herbst.",
["P|8-9||Breitwürfig oder in Reihen säen.",
 "E|10-3||Rosetten knapp über dem Boden abschneiden."],
{r:0.2});

P("rhabarber","Rhabarber","Rheum rhabarbarum","gemuese","🌿",
"Mehrjährig, Starkzehrer, sonnig bis halbschattig. Blätter sind giftig, nur Stiele essen.",
["E|4-6||Ernte bis zum 24. Juni (Johanni): Stiele abdrehen, nie mehr als ein Drittel der Stiele auf einmal.",
 "K|5-6||Blütenstände früh ausbrechen, sie kosten Kraft.",
 "D|3,7||Im Frühjahr und nach der Ernte reichlich Kompost.",
 "P|10-11||Alle 8 bis 10 Jahre teilen und neu pflanzen."],
{r:0.6});

/* ---------------- KRÄUTER ---------------- */
P("kraeuter-mix","Küchenkräuter (gemischt)","verschiedene","kraeuter","🌿",
"Sammelbeet für mehrjährige Küchenkräuter. Mediterrane Kräuter (Thymian, Salbei, Oregano) mögen mageren, durchlässigen Boden, Schnittlauch und Petersilie feuchteren.",
["S|3-4|2|Frühjahrsschnitt der Halbsträucher um etwa ein Drittel, nicht ins alte Holz.",
 "E|5-10||Laufend ernten, zum Trocknen kurz vor der Blüte.",
 "K|4-9||Wuchernde Arten (Minze, Zitronenmelisse) begrenzen."],
{r:0.5});

P("salbei","Salbei","Salvia officinalis","kraeuter","🌿",
"Halbstrauch, sonnig und durchlässig. Verholzt und fällt auseinander, wenn er nicht geschnitten wird.",
["S|4|2|Nach den starken Frösten um ein Drittel zurückschneiden, nicht ins blattlose alte Holz.",
 "S|7|1|Nach der Blüte Blütenstände entfernen.",
 "E|5-9||Blätter laufend ernten, vor der Blüte am aromatischsten.",
 "W|12-2||Bei Kahlfrost mit Reisig abdecken."],
{r:0.4});

P("rosmarin","Rosmarin","Salvia rosmarinus","kraeuter","🌿",
"Bedingt winterhart, verträgt keine Nässe im Winter. Nicht ins alte Holz schneiden.",
["S|4-5|1|Nach der Blüte leicht in Form schneiden, nur grüne Triebe einkürzen.",
 "E|1-12||Triebspitzen ganzjährig nach Bedarf ernten.",
 "W|11-3||Bei starkem Frost Vlies überlegen. Im Kübel hell und kühl (5 bis 10 °C) überwintern."],
{r:0.4});

P("lavendel","Lavendel","Lavandula angustifolia","kraeuter","💜",
"Sonnig, mager, kalkhaltig. Wichtige Bienenweide. Ohne Schnitt verkahlt er von unten.",
["S|3-4|2|Frühjahrsschnitt um ein Drittel bis die Hälfte, an jedem Trieb grüne Blätter stehen lassen.",
 "S|8|1|Nach der Blüte verblühte Stände um ein Drittel einkürzen.",
 "E|6-7||Blüten zum Trocknen schneiden, wenn sich die ersten Knospen öffnen."],
{r:0.4});

P("thymian","Thymian","Thymus vulgaris","kraeuter","🌿",
"Sonnig, trocken, mager. Bienenweide.",
["S|4|1|Leicht einkürzen, nicht ins alte Holz.",
 "E|5-9||Triebspitzen laufend ernten, zum Trocknen kurz vor der Blüte."],
{r:0.25});

P("oregano","Oregano","Origanum vulgare","kraeuter","🌿",
"Sonnig, durchlässig, Bienenmagnet.",
["S|3|2|Alte Stängel bodennah abschneiden.",
 "E|7-8||Zur Blüte ernten und bündelweise trocknen."],
{r:0.3});

P("minze","Minze","Mentha × piperita u. a.","kraeuter","🌱",
"Wuchert stark über Ausläufer: mit Wurzelsperre oder im versenkten Topf pflanzen, damit nichts zum Nachbarn wandert (GO 8).",
["E|5-9||Triebspitzen laufend ernten.",
 "S|6|1|Vor der Blüte einmal zurückschneiden, dann bildet sie frische Triebe.",
 "S|10-11|3|Im Herbst bodennah abschneiden.",
 "K|5-9||Ausläufer außerhalb der Fläche abstechen."],
{r:0.4});

P("schnittlauch","Schnittlauch","Allium schoenoprasum","kraeuter","🌱",
"Halbschatten bis Sonne, feuchter Boden. Alle 3 Jahre im Frühjahr teilen.",
["S|5-9|2|Regelmäßig bis 3 cm über dem Boden schneiden, dann wächst er zart nach.|m",
 "E|3-10||Laufend ernten, Blüten sind essbar.",
 "P|3||Alle 3 Jahre Horst teilen."],
{r:0.2});

P("petersilie","Petersilie","Petroselinum crispum","kraeuter","🌿",
"Zweijährig. Nicht jedes Jahr an dieselbe Stelle säen. Keimt langsam (3 bis 4 Wochen).",
["P|3-7||Säen, Boden feucht halten.",
 "E|5-11||Äußere Stängel laufend ernten."],
{r:0.2});

P("basilikum","Basilikum","Ocimum basilicum","kraeuter","🌿",
"Kälteempfindlich, am besten im Gewächshaus oder Topf. Mit warmem Wasser morgens gießen.",
["P|4-5||Warm vorziehen, nach den Eisheiligen nach draußen.",
 "E|6-9||Triebspitzen über einem Blattpaar abknipsen, so verzweigt er sich."],
{r:0.2});

P("dill","Dill","Anethum graveolens","kraeuter","🌿",
"Einjährig, direkt säen. Guter Nachbar für Gurken.",
["P|4-7||Alle 3 Wochen nachsäen.",
 "E|6-9||Spitzen laufend ernten, Dolden zum Einlegen."],
{r:0.2});

P("beifuss","Beifuß","Artemisia vulgaris","kraeuter","🌿",
"Bis 1,5 m hoch, sät sich stark aus. Gewürz für fette Speisen. Pollen sind ein starkes Allergen.",
["E|7-8||Rispen kurz vor dem Aufblühen schneiden und trocknen.",
 "K|8-9||Samenstände rechtzeitig entfernen, sonst breitet er sich im Garten aus.",
 "S|10-11|3|Bodennah abschneiden."],
{r:0.5});

P("wermut","Wermut","Artemisia absinthium","kraeuter","🌿",
"Silbriger Halbstrauch, sonnig und trocken. Hemmt Nachbarpflanzen, daher allein stellen.",
["S|3-4|2|Um die Hälfte zurückschneiden.",
 "E|7-8||Blühende Triebspitzen zum Trocknen."],
{r:0.4});

P("lorbeer","Lorbeer","Laurus nobilis","kraeuter","🌿",
"Nicht winterhart, im Kübel halten. Frostfrei und hell bei 0 bis 10 °C überwintern.",
["P|4-5||Nach den starken Frösten wieder nach draußen stellen.",
 "S|5-6|1|In Form schneiden.",
 "D|4-8||Alle 4 Wochen organischer Flüssigdünger.",
 "W|10-11||Spätestens bei -5 °C einräumen."],
{r:0.4});

P("colakraut","Colakraut (Eberraute)","Artemisia abrotanum","kraeuter","🌿",
"Halbstrauch mit Cola-Duft, winterhart, sonnig.",
["S|4|2|Um ein Drittel bis die Hälfte zurückschneiden.",
 "E|6-9||Triebspitzen für Tee oder Limonade."],
{r:0.4});

/* ---------------- STAUDEN & BLUMEN ---------------- */
P("pfingstrose","Pfingstrose","Paeonia lactiflora","zier","🌸",
"Langlebige Staude, nicht zu tief pflanzen (Knospen höchstens 3 cm unter der Erde), sonst blüht sie nicht. Verträgt kein Umpflanzen.",
["K|5||Stütze setzen, bevor die schweren Blüten umkippen.",
 "S|6|1|Verblühtes abschneiden.",
 "S|10-11|3|Laub bodennah abschneiden, wenn es vergilbt ist.",
 "D|3||Kompost."],
{r:0.5});

P("lilie","Lilie","Lilium","zier","🌺",
"Zwiebelpflanze, Fuß im Schatten, Kopf in der Sonne. Für Katzen giftig.",
["K|4-6||Lilienhähnchen (leuchtend rote Käfer) und ihre Larven absammeln.",
 "S|9-10|2|Stängel abschneiden, wenn er eingezogen ist.",
 "P|9-10||Neue Zwiebeln pflanzen."],
{r:0.3});

P("amarant","Amarant (Fuchsschwanz)","Amaranthus caudatus / hypochondriacus","zier","🟥",
"Einjährig, rote Blätter und hängende Blütenstände. Blätter und Samen von Gemüseamarant sind essbar. Sät sich stark selbst aus.",
["P|5||Nach den Eisheiligen säen oder pflanzen.",
 "E|8-10||Blätter jung ernten, Samenstände trocknen.",
 "K|9-10||Samenstände vor dem Ausfallen abschneiden, sonst Selbstaussaat im ganzen Beet."],
{r:0.4});

P("loewenmaeulchen","Löwenmäulchen","Antirrhinum majus","zier","🌸",
"Ein- bis zweijährig, lange Blüte, beliebt bei Hummeln.",
["P|3-5||Vorziehen oder Jungpflanzen setzen.",
 "S|6-9|1|Verblühtes regelmäßig abschneiden, das verlängert die Blüte.|m"],
{r:0.25});

P("ringelblume","Ringelblume","Calendula officinalis","zier","🌼",
"Einjährig, sät sich selbst aus. Heilpflanze, lockt Nützlinge an, gute Mischkulturpartnerin.",
["P|3-5||Direkt säen.",
 "E|6-10||Blüten für Salbe oder Tee ernten.",
 "S|6-9|1|Verblühtes ausputzen für Nachblüte."],
{r:0.25});

P("steinkraut","Steinkraut (Duftsteinrich)","Lobularia maritima","zier","⚪",
"Niedriger weißer Blütenteppich mit Honigduft, Insektenmagnet.",
["P|4-5||Direkt säen oder Pflanzen setzen.",
 "S|7|2|Nach der ersten Blüte um die Hälfte zurückschneiden, dann blüht es bis zum Frost."],
{r:0.3});

P("zwiebelblumen","Zwiebelblumen gemischt","Tulipa, Narcissus, Crocus","zier","🌷",
"Frühjahrsblüher, wichtige erste Nahrung für Insekten.",
["P|9-11||Zwiebeln pflanzen, etwa doppelt so tief wie die Zwiebel hoch ist.",
 "S|6|1|Laub erst abschneiden, wenn es vergilbt ist."],
{r:0.3});

P("dahlie","Dahlie","Dahlia","zier","🌼",
"Knollenpflanze, nicht winterhart. Ungefüllte Sorten sind wertvoll für Insekten.",
["P|5||Knollen nach den Eisheiligen pflanzen.",
 "S|7-10|1|Verblühtes abschneiden.|m",
 "W|10-11||Nach dem ersten Frost Knollen ausgraben, trocknen und frostfrei lagern."],
{r:0.4});

P("sonnenhut","Sonnenhut","Echinacea / Rudbeckia","zier","🌼",
"Robuste Staude, Bienen- und Schmetterlingsweide.",
["S|2-3|3|Bodennah zurückschneiden. Samenstände über den Winter für Vögel stehen lassen.",
 "D|3||Kompost."],
{r:0.4});

P("katzenminze","Katzenminze","Nepeta × faassenii","zier","💜",
"Lange Blüte, Bienenweide, trockenheitsverträglich.",
["S|7|2|Nach der ersten Blüte um die Hälfte zurückschneiden.",
 "S|3|3|Bodennah zurückschneiden."],
{r:0.35});

P("funkie","Funkie","Hosta","zier","🍃",
"Schattenstaude mit großen Blättern. Schnecken lieben sie.",
["K|4-9||Schnecken absammeln.",
 "S|11|2|Welkes Laub entfernen.",
 "P|3-4||Bei Bedarf teilen."],
{r:0.4});

P("fetthenne","Fetthenne","Hylotelephium spectabile","zier","🌸",
"Spätblüher für Insekten, trockenheitsverträglich.",
["S|3|3|Stängel bodennah abschneiden. Über den Winter stehen lassen, das sieht schön aus und schützt Insekten."],
{r:0.3});

P("herbstaster","Herbstaster","Symphyotrichum","zier","💜",
"Späte Bienenweide. Neigt zu Mehltau, luftig pflanzen.",
["S|3|3|Bodennah zurückschneiden.",
 "K|8-9||Mehltau beobachten, bei Trockenheit gießen."],
{r:0.4});

P("sonnenblume","Sonnenblume","Helianthus annuus","zier","🌻",
"Einjährig, Vogelfutter im Herbst.",
["P|4-5||Direkt säen.",
 "E|9||Köpfe ernten, wenn die Rückseite gelb wird, oder für Vögel stehen lassen."],
{r:0.3});

/* ---------------- ZIERGEHÖLZE & HECKEN ---------------- */
P("rhododendron","Rhododendron / Azalee","Rhododendron","gehoelz","🌺",
"Saurer, humoser Boden, Halbschatten. Pflanzerde ohne Torf verwenden (GO Präambel). Flach wurzelnd: nicht hacken, mulchen. Laut GO 8 Höhe bis 2 m.",
["S|5-6|1|Verblühte Blütenstände vorsichtig ausbrechen, die Knospen darunter schonen.",
 "S|2|2|Verjüngung nur bei Bedarf und nur bis 28.2., schrittweise über 2 bis 3 Jahre.",
 "D|3-4||Organischer Rhododendrondünger.",
 "K|4-9||Bei Trockenheit mit Regenwasser gießen (kalkarm)."],
{r:1.0});

P("strauchrose","Strauch- und Beetrose","Rosa","gehoelz","🌹",
"Sonnig, luftig. Ungefüllte Sorten bieten Insekten Nahrung und Hagebutten für Vögel.",
["S|3-4|2|Zur Forsythienblüte: tote, kranke und schwache Triebe raus, kräftige um ein Drittel kürzen. Beetrosen kräftiger auf 3 bis 5 Augen.",
 "S|6-9|1|Verblühtes bis zum nächsten voll entwickelten Blatt abschneiden.|m",
 "D|3-4,6||Organischer Rosendünger im Frühjahr und nach der ersten Blüte, nicht mehr nach Juli.",
 "W|11||Veredlungsstelle mit Erde anhäufeln."],
{r:0.6});

P("kletterrose","Kletterrose","Rosa (Kletterrosen)","gehoelz","🌹",
"An Pergola, Rankgerüst oder Bogen. Triebe waagerecht binden, dann blühen sie reicher.",
["S|3|2|Hauptranken anbinden, Seitentriebe auf 2 bis 3 Augen einkürzen. Alle paar Jahre einen alten Haupttrieb bodennah ersetzen.",
 "S|6-9|1|Verblühtes entfernen (bei öfter blühenden Sorten).",
 "D|3-4,6||Organischer Rosendünger.",
 "W|11||Fuß anhäufeln."],
{r:0.5});

P("forsythie","Forsythie (Goldglöckchen)","Forsythia × intermedia","gehoelz","💛",
"Robust, aber für Insekten wenig wertvoll. Laut GO 8 Ziergehölze höchstens 2 m. Bei Neupflanzung lieber Vogel- und Insektengehölze wählen (Kornelkirsche, Felsenbirne).",
["S|4-5|2|Direkt nach der Blüte auslichten: ein Drittel der ältesten Triebe bodennah entfernen. Nie oben „einkürzen“, sonst wird sie besenartig.",
 "S|11-2|3|Radikale Verjüngung nur in diesem Zeitraum (BNatSchG)."],
{r:0.9});

P("berberitze","Berberitze","Berberis","gehoelz","🟥",
"Dornig, schnittverträglich, Beeren für Vögel.",
["S|6-7|1|Leichter Formschnitt nach der Brutzeit.",
 "S|11-2|2|Auslichten, alte Triebe bodennah."],
{r:0.6});

P("kletterhortensie","Kletterhortensie","Hydrangea anomala subsp. petiolaris","gehoelz","🤍",
"Selbstklimmer für schattige Wände. Blüht erst nach einigen Jahren.",
["S|7-8|1|Nach der Blüte zu lange Ranken begrenzen, von Dach und Dachrinne fernhalten.",
 "K|4-9||Bei Trockenheit gießen."],
{r:0.6});

P("hortensie","Bauernhortensie","Hydrangea macrophylla","gehoelz","💠",
"Blüht am Vorjahresholz: nicht stark schneiden. Viel Wasser, Halbschatten.",
["S|3-4|1|Nur alte Blütenstände bis zum ersten kräftigen Knospenpaar abschneiden, erfrorene Triebe entfernen.",
 "K|6-8||Bei Trockenheit kräftig gießen (Regenwasser).",
 "W|11||Wurzelbereich mulchen."],
{r:0.6});

P("wilder-wein","Wilder Wein","Parthenocissus quinquefolia / tricuspidata","gehoelz","🍁",
"Sehr wüchsiger Selbstklimmer mit leuchtend roter Herbstfärbung, Beeren für Vögel (für Menschen giftig). Klettert auf Lauben, unter Dachpappe, in Dachrinnen und zu Nachbarn: regelmäßig begrenzen.",
["S|6-8|2|Triebe von Dach, Dachrinne, Fenstern, Wegen und der Nachbargrenze zurückschneiden.",
 "S|11-2|3|Stärkerer Rückschnitt nur in diesem Zeitraum.",
 "K|10-11||Laub aus der Dachrinne entfernen."],
{r:0.8});

P("kirschlorbeer","Kirschlorbeer","Prunus laurocerasus","gehoelz","🌿",
"Laut GO 8 soll in Zukunft auf die Pflanzung verzichtet werden. Giftig, für Insekten und Vögel wenig wertvoll. Als Ersatz eignen sich heimische Gehölze.",
["S|6|2|Formschnitt Ende Juni mit der Handschere (zerschnittene Blätter werden braun).",
 "S|11-2|3|Stärkerer Rückschnitt oder Entfernen nur in diesem Zeitraum."],
{r:0.8,warn:"GO 8: auf Kirschlorbeer soll verzichtet werden"});

P("eibe","Eibe","Taxus baccata","gehoelz","🌲",
"NICHT ERLAUBT laut GO 9.1 (Nadelgehölz). Alle Teile außer dem roten Fruchtmantel sind stark giftig. Entfernung nur vom 1.10. bis 28.2.",
["K|10-2||Nicht erlaubtes Gehölz: im erlaubten Zeitfenster entfernen. Vorher mit der Fachberatung klären."],
{verboten:"GO 9.1: Nadelgehölze sind nicht erlaubt",r:0.7});

P("konifere","Konifere (Thuja, Fichte, Wacholder)","Coniferae","gehoelz","🌲",
"NICHT ERLAUBT laut GO 9.1 (Nadelgehölze und Koniferen). Wacholder ist außerdem Zwischenwirt des Birnengitterrosts.",
["K|10-2||Nicht erlaubtes Gehölz: im erlaubten Zeitfenster entfernen."],
{verboten:"GO 9.1: Nadelgehölze und Koniferen sind nicht erlaubt",r:0.8});

P("buchs","Buchsbaum","Buxus sempervirens","gehoelz","🟩",
"Stark vom Buchsbaumzünsler bedroht. Als Ersatz eignen sich Ilex crenata oder Bergilex.",
["S|5-6|2|Formschnitt an einem bedeckten Tag (Sonnenbrand an Schnittflächen).",
 "K|4-9||Alle 2 Wochen innen auf Zünslerraupen und Gespinste kontrollieren, absammeln.|m"],
{r:0.4});

P("hainbuche","Hainbuchenhecke","Carpinus betulus","gehoelz","🟩",
"Heimisch, schnittverträglich, Vogelschutz. Achtung GO 5.4: Abgrenzungen zu Nachbargärten mit Hecken sind nicht gestattet. Ab März bis September nur Form- und Pflegeschnitt (GO 9.4).",
["S|6-7|1|Formschnitt nach der Hauptbrutzeit. Vorher auf Vogelnester prüfen!",
 "S|10-2|3|Radikaler Rückschnitt nur in diesem Zeitraum (GO 9.4)."],
{r:0.5,hecke:1});

P("liguster","Ligusterhecke","Ligustrum vulgare","gehoelz","🟩",
"Heimisch, blüht weiß, Beeren für Vögel. Achtung GO 5.4: keine Hecken als Abgrenzung zu Nachbargärten.",
["S|6-7|1|Formschnitt nach der Hauptbrutzeit, vorher auf Nester prüfen.",
 "S|10-2|3|Radikaler Rückschnitt nur in diesem Zeitraum (GO 9.4)."],
{r:0.5,hecke:1});

P("holunder","Holunder (kleinwüchsig)","Sambucus nigra (Zwergsorten)","gehoelz","⚫",
"Laut GO 9.1 sind nur kleinwüchsige Holunderarten gestattet. Blüten und gekochte Beeren essbar, roh giftig.",
["S|11-2|2|Alte Triebe bodennah entfernen, Höhe begrenzen.",
 "E|6||Blütendolden für Sirup an einem sonnigen Vormittag.",
 "E|8-9||Dunkle Beerendolden ernten, nur gekocht verwenden."],
{r:0.8});

P("sommerflieder","Schmetterlingsflieder","Buddleja davidii","gehoelz","💜",
"Magnet für Schmetterlinge, sät sich aber stark aus.",
["S|3-4|3|Kräftig auf 30 bis 50 cm zurückschneiden.",
 "S|7-9|1|Verblühte Rispen abschneiden gegen Selbstaussaat.|m"],
{r:0.8});

/* ---------------- RASEN & GRÜNDÜNGUNG ---------------- */
P("rasen","Rasen","Gräsermischung","sonst","🟩",
"Gehört zum Erholungsdrittel. Ruhezeiten beim Mähen beachten (GO 6.3: werktags 8 bis 13 und 15 bis 20 Uhr, sonn- und feiertags gar nicht).",
["S|4-10|1|Mähen alle 1 bis 2 Wochen auf 4 bis 5 cm. Rasenschnitt dünn als Mulch oder auf den Kompost.|m",
 "D|4,8||Organischer Rasendünger.",
 "K|9-10||Lücken nachsäen, bei Bedarf vertikutieren.",
 "K|10-11||Laub abrechen, auf Kompost oder als Mulch unter Sträucher."],
{r:0});

P("blumenwiese","Blumenwiese","heimische Wildblumen","sonst","🌼",
"Biotop im Sinne von GO 9.7. Wird nur zweimal im Jahr gemäht.",
["S|6-7|3|Erster Schnitt nach der Hauptblüte, Schnittgut einige Tage liegen lassen (Samen fallen aus), dann abräumen.",
 "S|9-10|3|Zweiter Schnitt, Schnittgut abräumen."],
{r:0});

P("phacelia","Phacelia (Bienenfreund)","Phacelia tanacetifolia","sonst","💠",
"Gründüngung und Bienenweide, mit keinem Gemüse verwandt, passt also in jede Fruchtfolge. Lockert den Boden.",
["P|4-9||Auf freie Beete breitwürfig säen, leicht einharken.",
 "K|10-11||Vor der Samenreife abmähen und als Mulch liegen lassen oder flach einarbeiten. Frostet im Winter ab."],
{r:0.6});

/* ---------------- Ergänzungen (Zierahorn u. a.) ---------------- */
P("zierahorn","Zierahorn / Fächerahorn","Acer palmatum, Acer japonicum","gehoelz","🍁",
"Langsam wachsend, leuchtende Herbstfarbe. Halbschattig und windgeschützt, humoser, durchlässiger Boden ohne Staunässe. Erlaubt als Ziergehölz, Höhe laut GO 8 bis 2 m halten. Feld-, Spitz- oder Bergahorn wären großwüchsig und gehören nur auf Gemeinschaftsflächen (GO 9.2).",
["S|7-8|1|Nur wenig schneiden: im Spätsommer tote, sich kreuzende oder störende Zweige direkt an der Abzweigung entfernen. Im Frühjahr nicht schneiden, Ahorn „blutet“ stark.",
 "D|4||Etwas reifen Kompost, sonst kaum Dünger.",
 "K|5-9||Bei Trockenheit gießen, Wurzelbereich mulchen. Blattrand-Verbrennungen deuten auf zu viel Sonne oder Wind.",
 "W|11-3||Junge Pflanzen und Kübel bei Kahlfrost mit Vlies schützen."],
{r:0.8});
P("azalee","Azalee (sommergrün)","Rhododendron luteum u. Hybriden","gehoelz","🌼",
"Wirft im Herbst das Laub ab, färbt sich vorher leuchtend orange bis rot. Duftende Blüten im Mai. Saurer, humoser Boden, Pflanzerde ohne Torf (GO Präambel). Flach wurzelnd: nicht hacken, mulchen.",
["S|5-6|1|Verblühtes ausbrechen, sonst kaum schneiden. Zu lange Triebe nach der Blüte einkürzen.",
 "D|3-4||Organischer Rhododendrondünger.",
 "K|5-9||Bei Trockenheit mit Regenwasser gießen."],
{r:0.8});
P("hibiskus","Garteneibisch (Hibiskus)","Hibiscus syriacus","gehoelz","🌺",
"Winterharter Strauch, blüht spät (Juli bis September) am diesjährigen Holz. Treibt sehr spät aus, oft erst im Mai: nicht vorschnell für tot halten. Sonnig und warm.",
["S|3|2|Vorjahrestriebe um etwa ein Drittel einkürzen, nach innen wachsende und tote Triebe entfernen. Fördert die Blüte.",
 "D|4-6||Kompost oder organischer Blühdünger.",
 "W|11-2||Junge Pflanzen im Wurzelbereich mit Laub mulchen."],
{r:0.7});
P("flieder","Flieder","Syringa vulgaris","gehoelz","💜",
"Duftende Blüten im Mai, bildet Ausläufer. Laut GO 8 als Ziergehölz bis 2 m halten.",
["S|5-6|1|Direkt nach der Blüte Verblühtes bis zum nächsten Knospenpaar abschneiden.",
 "S|11-2|2|Alle paar Jahre einen alten Trieb bodennah entfernen, Ausläufer abstechen."],
{r:0.8});
P("weigelie","Weigelie","Weigela florida","gehoelz","🌸",
"Robuster Blütenstrauch, blüht Mai bis Juni an vorjährigen Trieben.",
["S|6-7|2|Nach der Blüte ein Drittel der ältesten Triebe bodennah entfernen."],
{r:0.7});
P("spierstrauch","Spierstrauch","Spiraea","gehoelz","🤍",
"Anspruchslos, gute Bienenweide. Frühblühende Arten nach der Blüte, sommerblühende im Frühjahr schneiden.",
["S|3|2|Sommerblühende Arten (z. B. Spiraea japonica) um die Hälfte zurückschneiden.",
 "S|5-6|1|Frühblühende Arten nach der Blüte auslichten."],
{r:0.6});
P("felsenbirne","Felsenbirne","Amelanchier lamarckii","gehoelz","🫐",
"Heimisch wirkender Großstrauch mit weißen Blüten, essbaren Beeren und roter Herbstfärbung. Wertvoll für Vögel und Insekten. Höhe laut GO 8 auf 2 m begrenzen.",
["S|11-2|2|Alle 2 bis 3 Jahre auslichten: die ältesten Triebe bodennah.",
 "E|6-7||Dunkelblaue Beeren pflücken, bevor die Vögel sie holen."],
{r:0.9});
P("kornelkirsche","Kornelkirsche","Cornus mas","gehoelz","🔴",
"Heimisch, blüht schon im Februar gelb und ist eine der ersten Bienenweiden. Rote, säuerliche Früchte für Marmelade. Gut als Ersatz für Forsythie.",
["S|3-4|1|Nach der Blüte nur auslichten, sehr schnittverträglich.",
 "E|8-9||Ernten, wenn die Früchte dunkelrot und weich sind und fast von selbst fallen."],
{r:0.9});
P("schneeball","Schneeball","Viburnum opulus / × burkwoodii","gehoelz","⚪",
"Gemeiner Schneeball ist heimisch mit roten Beeren für Vögel (für Menschen roh giftig). Duftschneeball blüht früh.",
["S|6|1|Nach der Blüte leicht auslichten.",
 "K|5-6||Schneeballblattkäfer: angefressene Blätter mit Larven entfernen."],
{r:0.8});
P("deutzie","Deutzie (Maiblumenstrauch)","Deutzia","gehoelz","🤍",
"Reich blühender Kleinstrauch, blüht am Vorjahresholz.",
["S|6-7|2|Nach der Blüte alte Triebe bodennah entfernen."],
{r:0.6});
P("clematis","Clematis (Waldrebe)","Clematis","gehoelz","💮",
"Kletterpflanze für Rankgitter und Pergola. Fuß beschatten, Kopf in die Sonne. Schnitt nach Gruppe: frühblühend kaum, großblumig leicht, spät blühend kräftig.",
["S|2-3|2|Spätblühende Sorten (ab Juni, z. B. Clematis viticella) auf 30 bis 50 cm zurückschneiden. Großblumige um ein Drittel einkürzen.",
 "S|5-6|1|Frühblühende Arten (Clematis alpina, montana) nur nach der Blüte auslichten.",
 "K|4-6||Junge Triebe am Rankgerüst anbinden."],
{r:0.4});
P("magnolie","Magnolie (kleinwüchsig)","Magnolia stellata","gehoelz","🌸",
"Sternmagnolie bleibt klein und passt in den Kleingarten. Kaum Schnitt nötig, Schnitte heilen schlecht.",
["S|6-7|1|Nur bei Bedarf nach der Blüte störende Zweige ganz entfernen.",
 "W|3-4||Bei Spätfrost während der Blüte über Nacht Vlies auflegen."],
{r:0.8});
P("fingerstrauch","Fingerstrauch","Potentilla fruticosa","gehoelz","🌼",
"Kleiner, sehr langer Blüher von Juni bis Oktober, robust und trockenheitsverträglich.",
["S|3|2|Um ein Drittel zurückschneiden, alte Triebe auslichten."],
{r:0.4});
P("aronia","Apfelbeere (Aronia)","Aronia melanocarpa","beeren","🫐",
"Robuster Beerenstrauch mit sehr vitaminreichen, herben Beeren und roter Herbstfärbung.",
["S|11-2|2|Ab dem 4. Jahr die ältesten Triebe bodennah entfernen.",
 "E|8-9||Ernten, wenn die Beeren schwarz sind. Roh herb, besser als Saft oder gemischt mit anderem Obst."],
{r:0.6});
P("rotbuche-hecke","Rotbuchenhecke","Fagus sylvatica","gehoelz","🟫",
"Heimisch, behält das braune Laub oft bis zum Frühjahr (Vogelschutz). Achtung GO 5.4: Abgrenzungen zu Nachbargärten mit Hecken sind nicht gestattet. Ab März bis September nur Form- und Pflegeschnitt (GO 9.4).",
["S|6-7|1|Formschnitt nach der Hauptbrutzeit, vorher auf Vogelnester prüfen.",
 "S|10-2|3|Radikaler Rückschnitt nur in diesem Zeitraum (GO 9.4)."],
{r:0.5,hecke:1});
P("efeu","Efeu","Hedera helix","gehoelz","🍃",
"Heimisch, wichtige späte Bienenweide und Vogelfutter im Winter. Klettert auf Zäune, Bäume und Lauben: begrenzen, damit er nicht in Dach, Fugen oder zum Nachbarn wächst. Beeren giftig.",
["S|3-4,8-9|2|Von Laube, Dach, Obstbaumstämmen und der Nachbargrenze zurückschneiden."],
{r:0.4});
P("taglilie","Taglilie","Hemerocallis","zier","🌺",
"Sehr robuste Staude, jede Blüte hält nur einen Tag. Sonnig bis halbschattig.",
["S|10-11|3|Eingezogenes Laub bodennah abschneiden.",
 "P|3-4,8-9||Große Horste teilen."],
{r:0.4});
P("storchschnabel","Storchschnabel","Geranium","zier","💜",
"Robuster Bodendecker und Dauerblüher, beliebt bei Insekten.",
["S|7|2|Nach der ersten Blüte bodennah zurückschneiden, dann blüht er nach.",
 "S|3|3|Altes Laub entfernen."],
{r:0.4});
P("frauenmantel","Frauenmantel","Alchemilla mollis","zier","🟢",
"Bodendecker für Beetränder, sät sich stark aus.",
["S|7|3|Nach der Blüte bodennah abschneiden, verhindert Aussaat und bringt frisches Laub."],
{r:0.35});
P("akelei","Akelei","Aquilegia","zier","💙",
"Kurzlebige Staude, sät sich selbst aus. Halbschatten.",
["S|6-7|2|Samenstände abschneiden, wenn sie sich nicht aussäen soll."],
{r:0.25});
P("phlox","Flammenblume (Phlox)","Phlox paniculata","zier","🌸",
"Duftende Sommerstaude. Neigt zu Mehltau: luftig pflanzen, bei Trockenheit gießen.",
["S|8|1|Verblühtes abschneiden für Nachblüte.",
 "S|2-3|3|Stängel bodennah abschneiden."],
{r:0.35});
P("rittersporn","Rittersporn","Delphinium","zier","💙",
"Hohe Sommerstaude, braucht Stütze. Schnecken lieben den Austrieb. Alle Teile giftig.",
["K|5||Stäbe setzen.",
 "S|7|2|Nach der ersten Blüte handbreit über dem Boden abschneiden, dann blüht er im Herbst nochmal."],
{r:0.35});
P("christrose","Christrose / Lenzrose","Helleborus","zier","🤍",
"Blüht im Winter oder zeitigen Frühjahr, erste Insektennahrung. Halbschatten, kalkhaltig. Giftig.",
["S|1-2|2|Alte, fleckige Blätter abschneiden, bevor die Blüten erscheinen."],
{r:0.3});
P("purpurgloeckchen","Purpurglöckchen","Heuchera","zier","🟣",
"Blattschmuckstaude für Halbschatten.",
["S|3|1|Braune Blätter auszupfen.",
 "P|4||Alle 3 bis 4 Jahre teilen und tiefer setzen."],
{r:0.25});
P("kaukasus-vergissmeinnicht","Kaukasus-Vergissmeinnicht","Brunnera macrophylla","zier","💙",
"Große, herzförmige Blätter, oft silbrig gezeichnet. Blaue Blüten im April und Mai. Halbschatten, feuchter Boden.",
["S|3|3|Altes Laub im Frühjahr entfernen.",
 "K|6-8||Bei Trockenheit gießen."],
{r:0.35});
P("lungenkraut","Lungenkraut","Pulmonaria","zier","💗",
"Gefleckte Blätter, blüht schon ab März rosa und blau. Wichtige Frühlingsnahrung für Hummeln. Halbschatten.",
["S|6|2|Nach der Blüte alte Blätter entfernen, frische wachsen nach."],
{r:0.3});
P("ziergras","Ziergras (allgemein)","Miscanthus, Pennisetum, Stipa u. a.","zier","🌾",
"Gräser geben dem Beet im Winter Struktur und Insekten ein Quartier. Nicht im Herbst schneiden.",
["S|3|3|Erst im März bodennah abschneiden, bevor der neue Austrieb kommt. Vorher zusammenbinden.",
 "P|4||Große Horste im Frühjahr teilen."],
{r:0.4});
P("kapuzinerkresse","Kapuzinerkresse","Tropaeolum majus","zier","🧡",
"Einjährig, Blüten und Blätter sind essbar und scharf. Lockt Blattläuse von anderen Pflanzen weg.",
["P|5||Nach den Eisheiligen direkt säen.",
 "E|7-10||Blüten und junge Blätter für Salat."],
{r:0.4});
P("tagetes","Studentenblume (Tagetes)","Tagetes","zier","🟠",
"Einjährig. Wurzeln halten Bodenälchen (Nematoden) fern, gute Begleitpflanze für Tomaten und Kartoffeln.",
["P|5||Nach den Eisheiligen pflanzen.",
 "S|7-9|1|Verblühtes entfernen."],
{r:0.2});
P("liebstoeckel","Liebstöckel (Maggikraut)","Levisticum officinale","kraeuter","🌿",
"Mehrjährig, wird bis 2 m hoch. Riecht beim Zerreiben stark nach Maggi. Eine Pflanze reicht.",
["E|5-9||Junge Blätter laufend ernten.",
 "S|7|2|Blütenstände entfernen, dann bleiben die Blätter zart.",
 "S|10-11|3|Im Herbst bodennah abschneiden."],
{r:0.5});
P("giersch","Giersch (Wildkraut)","Aegopodium podagraria","kraeuter","🌱",
"Wuchert stark über unterirdische Ausläufer und ist schwer loszuwerden. Junge Blätter sind essbar (wie Petersilie). Bekämpfung nur mechanisch, chemische Mittel sind laut GO 9.3 verboten.",
["K|4-9||Regelmäßig mit Wurzeln ausgraben, jedes Wurzelstück treibt neu aus. Nicht auf den Kompost.|m",
 "K|4||Hartnäckige Flächen mit Pappe abdecken und mulchen (eine Saison)."],
{r:0.5});
P("zitronenmelisse","Zitronenmelisse","Melissa officinalis","kraeuter","🍋",
"Zitronenduft, Bienenweide, sät sich stark aus.",
["E|5-9||Vor der Blüte ernten.",
 "S|6|2|Nach der ersten Ernte um die Hälfte zurückschneiden."],
{r:0.4});
P("borretsch","Borretsch (Gurkenkraut)","Borago officinalis","kraeuter","💙",
"Einjährig, blaue essbare Blüten, Bienenmagnet. Sät sich selbst aus.",
["P|4-6||Direkt säen.",
 "E|6-9||Junge Blätter und Blüten ernten."],
{r:0.3});
P("estragon","Estragon","Artemisia dracunculus","kraeuter","🌿",
"Mehrjährig, für Saucen und Essig. Französischer Estragon ist aromatischer als russischer.",
["E|6-9||Triebspitzen laufend ernten.",
 "S|10-11|3|Im Herbst bodennah zurückschneiden."],
{r:0.3});
P("rucola","Rucola","Eruca sativa","gemuese","🥬",
"Schnell, würzig. Im Hochsommer schießt er.",
["P|3-5,8-9||Alle 3 Wochen nachsäen.",
 "E|4-10||Blätter jung schneiden."],
{r:0.2});
P("pastinake","Pastinake","Pastinaca sativa","gemuese","🥕",
"Wintergemüse, nach Frost süßer. Lange Keimzeit.",
["P|3-5||In Reihen säen.",
 "E|10-3||Nach Bedarf ernten, verträgt Frost im Boden."],
{r:0.25});
P("topinambur","Topinambur","Helianthus tuberosus","gemuese","🌻",
"Bis 3 m hoch, wuchert stark über Knollen: nur mit Wurzelsperre pflanzen. Knollen schmecken nussig.",
["P|3-4||Knollen 10 cm tief legen, Wurzelsperre setzen.",
 "E|10-3||Knollen nach Bedarf ausgraben, alle Reste entfernen."],
{r:0.5});

/* Anleitungen den neuen Pflanzen zuordnen (läuft nach guides.js) */
window.EXTRA_GUIDE_LINKS = {
  beeren: ["bartblume", "weigelie", "deutzie", "felsenbirne", "kornelkirsche", "schneeball", "flieder", "spierstrauch", "aronia", "fingerstrauch", "hibiskus"],
  stauden: ["taglilie", "storchschnabel", "frauenmantel", "akelei", "phlox", "rittersporn", "christrose", "kaukasus-vergissmeinnicht", "lungenkraut", "ziergras", "liebstoeckel", "zitronenmelisse", "estragon", "purpurgloeckchen"],
  hecke: ["rotbuche-hecke"]
};
P("blattsenf","Blattsenf","Brassica juncea","gemuese","🥬",
"Schnell wachsendes, scharf-würziges Blattgemüse, rote Sorten auch als Zierde. Winterhart bis etwa -10 °C, ideal für Herbst und Winter.",
["P|3-4,8-9||Direkt säen oder pflanzen, 25 cm Abstand.",
 "E|4-6,9-3||Äußere Blätter laufend ernten. Jung im Salat, ältere gedünstet.",
 "K|5-7||Schießt im Sommer schnell, dann Blüten entfernen oder als Bienenweide stehen lassen."],
{r:0.25});
P("mais","Mais (Zuckermais)","Zea mays","gemuese","🌽",
"Starkzehrer und Wärmeliebhaber. In Blöcken statt in einer Reihe pflanzen, weil Mais vom Wind bestäubt wird. Klassische Mischkultur: Mais, Stangenbohnen und Kürbis („Drei Schwestern“).",
["P|5||Nach den Eisheiligen in Blöcken säen oder vorgezogene Pflanzen setzen, Abstand etwa 40 cm.",
 "K|6||Anhäufeln, das gibt Halt.",
 "E|8-9||Reif, wenn die Fäden braun sind und beim Eindrücken eines Korns milchiger Saft austritt. Sofort essen, der Zucker baut schnell ab.",
 "K|10-11||Abgestorbene Stängel abschneiden und gehäckselt kompostieren."],
{r:0.3});
P("beinwell","Beinwell","Symphytum officinale","kraeuter","🌿",
"Mehrjährig, große raue Blätter. Bienenweide und wertvoller Dünger: Blätter als Mulch oder Jauche (kaliumreich, gut für Tomaten). Wurzelt tief und ist schwer wieder zu entfernen.",
["S|5-9|3|Blätter 2 bis 4 Mal im Jahr bodennah abschneiden, als Mulch unter Tomaten oder Beeren legen.|m",
 "D|6-8||Beinwelljauche ansetzen: 1 kg Blätter auf 10 Liter Wasser, 2 Wochen gären lassen, 1:10 verdünnt gießen.",
 "K|6-9||Selbstaussaat begrenzen, Blüten nach dem Abblühen abschneiden."],
{r:0.5});
P("bartblume","Bartblume","Caryopteris × clandonensis","gehoelz","💙",
"Kleiner Halbstrauch (60 bis 100 cm) mit blauen Blüten im August und September, eine wichtige späte Bienenweide. Sonnig, durchlässiger Boden, verträgt Trockenheit. Blüht am diesjährigen Holz.",
["S|4|3|Kräftig auf 15 bis 30 cm zurückschneiden, sobald keine starken Fröste mehr kommen. Das fördert die Blüte. Über Winter stehen lassen, die Triebe schützen die Knospen.",
 "K|8-9||Blütezeit: viele Bienen und Hummeln. Bei langer Trockenheit gießen.",
 "W|11-2||Im ersten Winter Wurzelbereich mit Laub abdecken."],
{r:0.45});
P("rhaphiolepis","Indischer Weißdorn (Rhaphiolepis)","Rhaphiolepis indica","gehoelz","🤍",
"Immergrüner Kleinstrauch mit ledrigen, im Austrieb rötlichen Blättern und weißen bis rosa Blüten im Frühjahr. Nur bedingt winterhart (etwa bis -10 °C), im Kübel noch empfindlicher.",
["W|11-3||Kübel mit Vlies oder Jute einpacken, auf Holzfüße stellen, an eine geschützte Hauswand rücken. Bei Dauerfrost unter -5 °C hell und frostfrei unterstellen (z. B. in den Wintergarten).",
 "S|5-6|1|Nach der Blüte nur leicht in Form schneiden.",
 "D|4-7||Alle 4 Wochen organischer Flüssigdünger, im Kübel regelmäßig gießen."],
{r:0.45});
P("nashi","Nashi-Birne","Pyrus pyrifolia","obst","🍐",
"Asiatische Birne mit runden, knackig-saftigen Früchten wie ein Apfel. Pflege und Schnitt wie Birne, blüht früh (spätfrostgefährdet). Viele Sorten brauchen eine Befruchtersorte, oft hilft eine Europäische Birne in der Nähe.",
["S|2-3|2|Winterschnitt wie bei der Birne: Konkurrenztriebe zur Mitte und steile Triebe entfernen, Seitenäste flacher binden.",
 "S|6|1|Bei starkem Fruchtansatz auf eine Frucht je Büschel ausdünnen, sonst bleiben sie klein.",
 "E|8-10||Am Baum vollreif ernten (anders als Europäische Birnen): wenn die Schale gelb-bräunlich wird und sich die Frucht leicht löst. Kühl einige Wochen lagerfähig.",
 "D|3||Kompost auf die Baumscheibe."],
{baum:1,r:1.0});

/* ---------------- Zwiebel- und Knollenblumen einzeln ---------------- */
P("tulpe","Tulpe","Tulipa","zier","🌷",
"Frühjahrsblüher April bis Mai. Sonnig, durchlässiger Boden, keine Staunässe. Viele Gartentulpen blühen nach 2 bis 3 Jahren schwächer, Wildtulpen (z. B. Tulipa tarda) verwildern dauerhaft. Wühlmäuse fressen die Zwiebeln: Pflanzkorb aus Draht hilft.",
["P|10-11||Zwiebeln 10 bis 15 cm tief pflanzen, Abstand 10 cm, Spitze nach oben.",
 "S|5-6|1|Verblühte Köpfe abknipsen, damit keine Kraft in die Samen geht. Laub erst entfernen, wenn es gelb ist.",
 "K|6-7||Edeltulpen nach dem Einziehen ausgraben, trocken und luftig lagern, im Herbst neu pflanzen (optional)."],{r:0.15});
P("narzisse","Narzisse (Osterglocke)","Narcissus","zier","🌼",
"Robust, verwildert gut und wird von Wühlmäusen nicht gefressen. Blüht März bis April. Giftig.",
["P|9-10||Zwiebeln etwa 15 cm tief pflanzen, Abstand 10 bis 15 cm. In Gruppen von 5 bis 10 wirken sie am schönsten.",
 "S|4-5|1|Verblühtes abknipsen, Laub stehen lassen bis es vergilbt (mindestens 6 Wochen).",
 "P|7-8||Zu dichte Horste nach dem Einziehen teilen."],{r:0.15});
P("traubenhyazinthe","Traubenhyazinthe (Perlhyazinthe)","Muscari armeniacum","zier","💙",
"Kleine blaue Blütentrauben im April, wichtige Frühlingsnahrung für Wildbienen. Verwildert stark, ideal unter Sträuchern und im Rasenrand.",
["P|9-10||Zwiebeln 7 bis 8 cm tief in Gruppen pflanzen.",
 "K|5-6||Laub einziehen lassen. Wo sie sich zu stark ausbreitet, Horste ausstechen."],{r:0.15});
P("hyazinthe","Hyazinthe","Hyacinthus orientalis","zier","🪻",
"Stark duftende Blütenstände im April. Sonnig, durchlässig. Blüten werden im Garten nach einigen Jahren lockerer. Zwiebeln können die Haut reizen: Handschuhe tragen.",
["P|9-10||Zwiebeln etwa 15 cm tief pflanzen, Abstand 15 cm.",
 "S|5|1|Verblühten Blütenstand abschneiden, Laub stehen lassen."],{r:0.15});
P("krokus","Krokus","Crocus","zier","💜",
"Einer der ersten Blüher (Februar bis März) und sehr wichtig für Bienen. Verwildert im Rasen: Rasen erst mähen, wenn das Laub eingezogen ist.",
["P|9-10||Knollen 5 bis 8 cm tief pflanzen, im Rasen in kleinen Tuffs.",
 "K|4-5||Rasen mit Krokussen erst mähen, wenn die Blätter gelb sind."],{r:0.1});
P("schneegloeckchen","Schneeglöckchen","Galanthus nivalis","zier","🤍",
"Blüht schon ab Februar, halbschattig unter Gehölzen. Lässt sich am besten „im Grünen“ (direkt nach der Blüte mit Laub) teilen und versetzen. Giftig.",
["P|3||Horste nach der Blüte mit Laub teilen und versetzen.",
 "P|9||Trockene Zwiebeln möglichst früh pflanzen, 5 bis 8 cm tief."],{r:0.1});
P("blaustern","Blaustern","Scilla siberica","zier","💙",
"Kleiner, leuchtend blauer Frühblüher im März, verwildert unter Gehölzen.",
["P|9-10||Zwiebeln 5 bis 8 cm tief pflanzen."],{r:0.1});
P("winterling","Winterling","Eranthis hyemalis","zier","💛",
"Gelbe Schalenblüten ab Februar, erste Bienennahrung. Halbschatten unter Gehölzen, kalkhaltiger Boden.",
["P|9||Knollen vor dem Pflanzen über Nacht in Wasser einweichen, 5 cm tief setzen."],{r:0.1});
P("zierlauch","Zierlauch","Allium giganteum, A. aflatunense","zier","🟣",
"Große violette Kugelblüten im Mai und Juni, Bienenmagnet. Die trockenen Kugeln sind auch im Herbst noch schön.",
["P|9-10||Zwiebeln 15 bis 20 cm tief pflanzen.",
 "K|5||Laub vergilbt schon zur Blüte: niedrige Stauden davor pflanzen, die es verdecken."],{r:0.2});
P("kaiserkrone","Kaiserkrone","Fritillaria imperialis","zier","🧡",
"Imposanter Frühjahrsblüher (bis 1 m). Der Geruch soll Wühlmäuse vertreiben. Giftig.",
["P|8-9||Große Zwiebeln 20 cm tief und leicht schräg auf Sand pflanzen, damit sich kein Wasser in der Mulde sammelt.",
 "S|6|2|Stängel nach dem Vergilben abschneiden."],{r:0.25});

/* ---------------- Ziergräser einzeln ---------------- */
P("blutgras","Japanisches Blutgras","Imperata cylindrica 'Red Baron'","zier","🟥",
"Blätter mit leuchtend roten Spitzen, im Herbst ganz rot. Bleibt niedrig (30 bis 40 cm). Sonnig, nicht zu nass. In rauen Lagen nur bedingt winterhart. Die rote Sorte wuchert kaum, die grüne Wildform aber stark.",
["S|3-4|3|Erst im Frühjahr handbreit über dem Boden abschneiden.",
 "W|11-2||Mit Laub oder Reisig abdecken, vor Winternässe schützen."],{r:0.25});
P("pfeifenputzergras","Lampenputzergras (Pfeifenputzergras)","Pennisetum alopecuroides","zier","🌾",
"Flaschenbürsten-artige Blütenähren von August bis Oktober. Horstbildend, 60 bis 100 cm. Sonnig, warm.",
["S|3-4|3|Erst im Frühjahr handbreit über dem Boden zurückschneiden. Über den Winter zusammenbinden, das schützt das Herz vor Nässe.",
 "P|4-5||Ältere Horste im Frühjahr teilen."],{r:0.45});
P("zebragras","Zebragras","Miscanthus sinensis 'Zebrinus'","zier","🦓",
"Chinaschilf mit gelben Querstreifen auf den Blättern, 1,5 bis 2 m hoch. Horstbildend, sonnig. Braucht Platz.",
["S|3|3|Im März bodennah abschneiden, vorher zusammenbinden.",
 "P|4||Große Horste mit dem Spaten teilen."],{r:0.6});
P("chinaschilf","Chinaschilf","Miscanthus sinensis","zier","🌾",
"Großes, horstbildendes Gras mit silbrigen Federblüten im Herbst. Viele Sorten von 1 bis 2,5 m. Für den Kleingarten kleinere Sorten wählen (z. B. 'Kleine Fontäne'). Nicht mit dem wuchernden Miscanthus sacchariflorus verwechseln.",
["S|3|3|Im März bodennah abschneiden.",
 "P|4||Horste teilen, wenn sie in der Mitte verkahlen."],{r:0.6});
P("federgras","Federgras (Engelshaar)","Stipa tenuissima","zier","🌾",
"Feines, im Wind wogendes Gras, 40 bis 60 cm. Sonnig, mager, trocken, ideal für den Steingarten. Kurzlebig, sät sich aber selbst aus.",
["S|3|1|Nicht abschneiden, sondern alte Halme mit den Fingern auskämmen."],{r:0.25});
P("blauschwingel","Blauschwingel","Festuca glauca","zier","🔵",
"Kleine, stahlblaue Grashorste (20 bis 30 cm), immergrün. Sonnig und trocken, gut im Steingarten.",
["S|3|1|Abgestorbene Halme auskämmen, nicht tief schneiden.",
 "P|4||Alle 3 bis 4 Jahre teilen, sonst verkahlt die Mitte."],{r:0.2});
P("rutenhirse","Rutenhirse","Panicum virgatum","zier","🌾",
"Aufrecht, 1 bis 1,5 m, luftige Blütenrispen, oft rote bis goldene Herbstfärbung. Horstbildend.",
["S|3|3|Im März bodennah abschneiden."],{r:0.4});
P("reitgras","Garten-Reitgras","Calamagrostis × acutiflora 'Karl Foerster'","zier","🌾",
"Streng aufrechtes Gras (1,5 m), blüht schon ab Juni, steht den ganzen Winter. Sehr robust, horstbildend.",
["S|3|3|Im März handbreit über dem Boden abschneiden."],{r:0.35});
P("japanwaldgras","Japanwaldgras","Hakonechloa macra","zier","🌿",
"Überhängende, oft goldgelbe Blätter, 30 bis 40 cm. Für Halbschatten, gleichmäßig feucht.",
["S|3|3|Im Frühjahr bodennah abschneiden."],{r:0.3});
P("segge","Segge","Carex (z. B. C. morrowii, C. oshimensis)","zier","🌿",
"Immergrüne, oft panaschierte Gräser für Halbschatten und Schatten, 20 bis 40 cm.",
["S|3-4|1|Nicht zurückschneiden, nur abgestorbene Blätter auszupfen."],{r:0.25});
P("pampasgras","Pampasgras","Cortaderia selloana","zier","🌾",
"Sehr groß (2 bis 3 m) mit weißen Blütenwedeln, scharfkantige Blätter. Für den Kleingarten meist zu groß. Kompaktere Sorten wie 'Pumila' gibt es.",
["W|10-11||Horst zusammenbinden, damit kein Wasser ins Herz läuft.",
 "S|4|3|Im April mit Handschuhen auf 20 bis 30 cm zurückschneiden."],{r:0.8});

/* ---------------- Bambus ---------------- */
P("schirmbambus","Schirmbambus (horstbildend)","Fargesia murielae, F. nitida","gehoelz","🎋",
"Horstbildender Bambus ohne Ausläufer, deshalb im Kleingarten die beste Wahl. 2 bis 3 m, schnittverträglich, immergrün. Laut GO 8 Ziergehölze bis 2 m halten. Braucht gleichmäßige Feuchte. Eingerollte Blätter im Winter sind ein Schutz vor Austrocknung, kein Schaden.",
["S|4|2|Höhe begrenzen: zu hohe Halme über einem Knoten kürzen, alte und abgestorbene Halme bodennah entfernen.",
 "K|5-9||Bei Trockenheit kräftig gießen, Laub als Mulch liegen lassen.",
 "W|12-2||Bei Kahlfrost an frostfreien Tagen gießen."],{r:0.6});
P("flachrohrbambus","Flachrohrbambus (Ausläuferbambus)","Phyllostachys","gehoelz","🎍",
"Bildet lange, sehr kräftige Ausläufer und durchwächst Rasen, Beete und Nachbargärten. Im Kleingarten NICHT empfehlenswert. Wenn vorhanden: nur mit einer mindestens 70 cm tiefen HDPE-Rhizomsperre (2 mm stark, Enden verschweißt). Wird 3 bis 8 m hoch, was die 2 m aus GO 8 überschreitet. Mit dem Vorstand klären.",
["K|8-10||Rand der Rhizomsperre kontrollieren: Ausläufer, die darüber wachsen, mit dem Spaten abstechen.|m",
 "S|4|2|Alte Halme bodennah entfernen, Höhe begrenzen."],{r:0.8,warn:"Wuchert stark über Ausläufer, nur mit Rhizomsperre. GO 8: Ziergehölze bis 2 m."});
P("zwergbambus","Zwergbambus","Sasa, Pleioblastus","gehoelz","🎋",
"Niedriger Bambus (0,5 bis 1,5 m) als Bodendecker. Bildet starke Ausläufer: nur mit Rhizomsperre oder im Kübel.",
["S|3|3|Alle 2 bis 3 Jahre im März bodennah abmähen, dann treibt er frisch und dicht aus.",
 "K|6-9||Ausläufer außerhalb der Sperre abstechen."],{r:0.5,warn:"Wuchert über Ausläufer, nur mit Rhizomsperre."});

/* ---------------- Weitere Blumen und Stauden ---------------- */
P("kornblume","Kornblume","Centaurea cyanus","zier","💙",
"Einjährig, leuchtend blau, Bienenweide. Mag mageren Boden. Gut in Blumenwiese und zwischen Gemüse.",
["P|3-5,9||Direkt säen (Herbstsaat blüht früher).",
 "S|6-8|1|Verblühtes abschneiden verlängert die Blüte. Einige Köpfe für die Selbstaussaat stehen lassen."],{r:0.2});
P("blaukissen","Blaukissen","Aubrieta","zier","💜",
"Polsterstaude für Mauerkronen und Steingarten, blüht violett im April und Mai. Sonnig, durchlässig, kalkliebend.",
["S|5-6|2|Direkt nach der Blüte um etwa die Hälfte zurückschneiden, dann bleibt das Polster dicht."],{r:0.3});
P("margerite","Margerite","Leucanthemum vulgare / × superbum","zier","🌼",
"Wiesen-Margerite heimisch und insektenfreundlich, Garten-Margerite größer. Sonnig.",
["S|7|2|Nach der ersten Blüte zurückschneiden, oft folgt eine zweite.",
 "P|3-4||Alle 3 Jahre teilen, sonst wird sie kurzlebig."],{r:0.3});
P("hopfen","Hopfen","Humulus lupulus","gehoelz","🌿",
"Mehrjährige Schlingpflanze, wächst im Jahr 4 bis 6 m. Für Rankgitter, Pergola oder Zaun. Weibliche Pflanzen bilden die Dolden. Zieht im Winter oberirdisch ein. Kann die raue Ranke Hautreizungen auslösen.",
["S|11-2|3|Abgestorbene Ranken bodennah abschneiden.",
 "K|4-5||Neue Triebe im Uhrzeigersinn an die Rankhilfe leiten, nur 3 bis 4 kräftige stehen lassen.",
 "E|8-9||Dolden ernten, wenn sie trocken rascheln und gelbes Pulver (Lupulin) enthalten. Für Tee oder Duftkissen."],{r:0.4});
P("schopflavendel","Schopflavendel","Lavandula stoechas","kraeuter","💜",
"Lavendel mit auffälligen „Hasenohren“ auf den Blüten, blüht früh und lang. Nur bedingt winterhart: im Kübel kühl und hell überwintern, ausgepflanzt nur in milden, geschützten Lagen.",
["S|6|1|Nach der ersten Blüte die Blütenstände abschneiden, oft folgt eine zweite Blüte.",
 "S|3-4|2|Leicht in Form schneiden, nicht ins alte Holz.",
 "W|10-4||Kübel hell und frostfrei bei 5 bis 10 °C überwintern, wenig gießen."],{r:0.35});
P("stockrose","Stockrose","Alcea rosea","zier","🌺",
"Zwei- bis kurzlebig mehrjährig, bis 2 m hoch, klassische Bauerngartenpflanze an Zäunen und Lauben. Häufig von Malvenrost befallen.",
["P|6-7||Aussaat für die Blüte im nächsten Jahr.",
 "K|5-8||Blätter mit orangen Rostpusteln entfernen und in den Restmüll.",
 "S|9-10|3|Nach der Blüte bodennah abschneiden, das verlängert die Lebensdauer."],{r:0.35});
P("klatschmohn","Klatschmohn","Papaver rhoeas","zier","🔴",
"Einjährig, sät sich selbst aus, wichtige Pollenquelle. Nur direkt säen, verträgt kein Umpflanzen.",
["P|3-4,9||Lichtkeimer: Samen nur andrücken, nicht bedecken."],{r:0.2});
P("schafgarbe","Schafgarbe","Achillea millefolium","zier","🤍",
"Robuste, heimische Staude, Insektenmagnet, trockenheitsverträglich. Auch als Heilkraut.",
["S|7|2|Nach der ersten Blüte zurückschneiden für eine Nachblüte.",
 "S|2-3|3|Alte Stängel bodennah abschneiden."],{r:0.3});
P("glockenblume","Glockenblume","Campanula","zier","🔔",
"Viele Arten von Polster bis hoch. Wichtig für spezialisierte Wildbienen.",
["S|7|2|Verblühtes abschneiden fördert die Nachblüte.",
 "S|3|3|Alte Stängel entfernen."],{r:0.25});
P("vergissmeinnicht","Vergissmeinnicht","Myosotis sylvatica","zier","💙",
"Zweijährig, blüht im April und Mai, ideal zu Tulpen. Sät sich selbst aus.",
["P|6-7||Für die Blüte im nächsten Jahr säen.",
 "S|6|3|Nach der Blüte ausreißen (Mehltau), einige Samenstände vorher ausschütteln."],{r:0.2});
P("hornveilchen","Hornveilchen und Stiefmütterchen","Viola cornuta, V. × wittrockiana","zier","💜",
"Blühen im Frühjahr und oft schon im Herbst, winterhart. Essbare Blüten.",
["P|3-4,9-10||Pflanzen setzen.",
 "S|6|2|Nach der Hauptblüte zurückschneiden, dann blühen sie im Herbst erneut."],{r:0.15});
P("bartiris","Bart-Iris (Schwertlilie)","Iris barbata","zier","💠",
"Sonnig, trocken. Das Rhizom muss oben aus der Erde schauen, sonst blüht sie nicht.",
["S|6|1|Verblühte Stängel abschneiden.",
 "P|7-8||Alle 3 bis 4 Jahre teilen: Rhizomstücke mit Blattfächer flach neu setzen, Blätter auf 15 cm einkürzen."],{r:0.3});
P("sonnenbraut","Sonnenbraut","Helenium","zier","🧡",
"Sommer- bis Herbstblüher in Gelb, Orange und Rot, beliebt bei Insekten.",
["S|8|1|Verblühtes abschneiden.",
 "S|3|3|Stängel bodennah abschneiden."],{r:0.35});
P("ziersalbei","Steppen-Salbei (Ziersalbei)","Salvia nemorosa","zier","💜",
"Sehr lange violette Blüte, Bienenmagnet, trockenheitsverträglich.",
["S|7|3|Nach der ersten Blüte auf eine Handbreit zurückschneiden, dann blüht er im Spätsommer erneut.",
 "S|3|3|Alte Stängel entfernen."],{r:0.3});
P("lupine","Lupine","Lupinus polyphyllus","zier","💐",
"Hohe Blütenkerzen im Juni. Sammelt Stickstoff. Samen giftig.",
["S|7|2|Verblühte Kerzen vor der Samenreife abschneiden, sonst sät sie sich stark aus."],{r:0.35});
P("fingerhut","Fingerhut","Digitalis purpurea","zier","💗",
"Zweijährig, hohe Blütenkerzen im Halbschatten, sät sich aus. Alle Teile sehr giftig: Vorsicht, wenn Kinder im Garten sind.",
["P|6-7||Für das nächste Jahr säen (Lichtkeimer).",
 "S|7-8|2|Hauptkerze nach der Blüte abschneiden, dann folgen Seitentriebe."],{r:0.25});
P("kugeldistel","Kugeldistel","Echinops ritro","zier","🔵",
"Stahlblaue Kugeln, eine der besten Bienen- und Hummelweiden. Sonnig, trocken.",
["S|3|3|Erst im Frühjahr abschneiden, die Samenstände sind Vogelfutter."],{r:0.35});
P("wolfsmilch","Wolfsmilch","Euphorbia (z. B. E. polychroma, E. characias)","zier","💚",
"Gelbgrüne Hochblätter im Frühjahr, robust und trockenheitsverträglich. Der Milchsaft reizt Haut und Augen: beim Schneiden Handschuhe tragen.",
["S|6|2|Verblühte Triebe bodennah abschneiden (bei immergrünen Arten nur die geblühten Triebe)."],{r:0.35});
P("bergenie","Bergenie","Bergenia cordifolia","zier","🌸",
"Große, ledrige, immergrüne Blätter, rosa Blüten schon im März. Robust, Sonne bis Schatten.",
["S|3|1|Braune und zerfressene Blätter entfernen.",
 "P|8-9||Große Horste teilen."],{r:0.3});
P("astilbe","Prachtspiere (Astilbe)","Astilbe","zier","🌸",
"Fedrige Blütenrispen im Halbschatten, braucht feuchten Boden.",
["S|3|3|Trockene Blütenstände erst im Frühjahr abschneiden.",
 "K|6-8||Bei Trockenheit gießen."],{r:0.3});
P("cosmea","Schmuckkörbchen (Cosmea)","Cosmos bipinnatus","zier","🌸",
"Einjährig, blüht bis zum Frost, sehr insektenfreundlich.",
["P|4-5||Ab April vorziehen oder ab Mitte Mai direkt säen.",
 "S|7-10|1|Verblühtes laufend abschneiden.|m"],{r:0.3});
P("zinnie","Zinnie","Zinnia elegans","zier","🌺",
"Einjährig, kräftige Farben, gute Schnittblume, wärmeliebend.",
["P|4-5||Vorziehen, nach den Eisheiligen pflanzen.",
 "E|7-9||Für die Vase schneiden, das fördert neue Blüten."],{r:0.2});
P("duftwicke","Duftwicke","Lathyrus odoratus","zier","💐",
"Einjährige Kletterpflanze mit intensivem Duft, für Zaun oder Rankgitter.",
["P|3-4||Samen über Nacht einweichen, direkt säen.",
 "E|6-9||Blüten regelmäßig für die Vase schneiden, sonst stellt sie die Blüte ein."],{r:0.2});

/* ---------------- Steingarten ---------------- */
P("steingarten","Steingarten (Fläche)","Alpinum, Trockenmauer, Kiesbeet","sonst","🪨",
"Ein bepflanzter Steingarten oder eine Trockenmauer ist ein wertvolles Biotop (GO 9.7) für Eidechsen, Wildbienen und Käfer. Nicht zu verwechseln mit einem Schottergarten: großflächige Steinschüttungen ohne Bepflanzung, Folien oder Vlies darunter gelten als Versiegelung und sind laut GO-Präambel unzulässig. Im Zweifel vor dem Anlegen mit dem Vorstand sprechen (GO 7.1). Aufbau: durchlässige Drainage aus Schotter, darauf mageres Substrat aus Sand, Splitt und etwas Erde, Steine schräg nach hinten geneigt und zu einem Drittel eingegraben. Ohne Mörtel.",
["K|3-4||Frühjahrsputz: Laub zwischen den Polstern entfernen, damit nichts fault. Unkraut und Baumsämlinge jäten.",
 "S|5-6|2|Polsterstauden (Blaukissen, Polsterphlox, Schleifenblume) nach der Blüte zurückschneiden.",
 "K|6-8||Wenig gießen, nur bei langer Trockenheit. Kein Dünger, die Pflanzen brauchen mageren Boden.",
 "K|10-11||Laub abräumen, empfindliche Polster vor Winternässe mit Reisig schützen."],{r:0});
P("hauswurz","Hauswurz","Sempervivum","zier","🪴",
"Rosetten-Sukkulente für Mauerritzen, Töpfe und Steingarten, winterhart. Verträgt Hitze und Trockenheit, aber keine Nässe. Die Mutterrosette stirbt nach der Blüte ab.",
["S|8-9|1|Abgeblühte Rosetten entfernen, Kindel in die Lücke setzen.",
 "P|4-9||Kindel abnehmen und in Sand oder Splitt einsetzen."],{r:0.1});
P("steinbrech","Moos-Steinbrech","Saxifraga × arendsii","zier","🌸",
"Dichte, moosartige Polster mit Blüten im April und Mai. Halbschattiger Steingarten, nicht zu trocken.",
["S|6|1|Verblühtes abscheren.",
 "P|8-9||Ältere Polster teilen."],{r:0.15});
P("polsterphlox","Polsterphlox","Phlox subulata","zier","💗",
"Blütenteppich in Rosa, Weiß oder Blau im April und Mai, immergrün. Sonnig, durchlässig.",
["S|6|2|Nach der Blüte um ein Drittel zurückschneiden, dann bleibt er kompakt."],{r:0.3});
P("mauerpfeffer","Mauerpfeffer","Sedum acre, S. album","zier","💛",
"Sehr genügsamer Bodendecker für Mauern, Fugen und Dachbegrünung, Insektenweide.",
["K|4-9||Wo er zu stark wandert, Stücke auszupfen und an anderer Stelle einsetzen."],{r:0.15});
P("grasnelke","Grasnelke","Armeria maritima","zier","💗",
"Kleine Horste mit rosa Kugelblüten von Mai bis Juli, salz- und trockenheitsverträglich.",
["S|7|1|Verblühtes abschneiden fördert die Nachblüte."],{r:0.15});
P("schleifenblume","Immergrüne Schleifenblume","Iberis sempervirens","zier","🤍",
"Immergrüner Halbstrauch mit weißen Blütenkissen im April und Mai, für Mauerkronen und Steingarten.",
["S|5-6|2|Nach der Blüte um ein Drittel zurückschneiden, nicht ins alte Holz."],{r:0.25});

P("sonnwend-wolfsmilch","Sonnwend-Wolfsmilch","Euphorbia helioscopia","zier","💛",
"Einjähriges Wildkraut, das vor allem auf Äckern und in Gärten mit nährstoffreichem, lehmigem Boden wächst. Bis etwa 30 cm hoch, gelbgrüne Blütenstände von April bis Oktober, die sich nach der Sonne ausrichten. Stirbt spätestens mit dem ersten Bodenfrost ab und sät sich reichlich selbst aus.",
["K|5-9||Selbstaussaat im Blick behalten: Pflanzen, die stören, vor der Samenreife mit Wurzel ausziehen. Dabei Handschuhe tragen.",
 "K|11||Abgestorbene Pflanzen nach dem Frost aus dem Beet nehmen."],
{r:0.2, warn:"Wie alle Wolfsmilcharten sehr giftig: Der Milchsaft reizt Haut und Augen. Vorsicht, wenn Kinder oder Haustiere im Garten sind."});
P("goldmohn","Kalifornischer Mohn (Goldmohn)","Eschscholzia californica","zier","🧡",
"Meist einjährig gezogen, seidige orange bis gelbe Schalenblüten von Juni bis in den Herbst, die sich nur bei Sonne öffnen. Liebt volle Sonne und mageren, durchlässigen Boden und passt gut zu Lavendel. Sät sich selbst aus. Bildet eine Pfahlwurzel und verträgt deshalb kein Umpflanzen.",
["P|3-5||Direkt an Ort und Stelle säen, Samen nur dünn bedecken. Zu dicht stehende Sämlinge ausdünnen.",
 "S|7-9|1|Verblühtes regelmäßig abzupfen, das verlängert die Blüte. Einige Samenkapseln für die Selbstaussaat stehen lassen."],{r:0.2});

P("prunus","Steinobst (Prunus, Art unbekannt)","Prunus spec.","obst","🍒",
"Platzhalter für Steinobst, dessen Art noch nicht bestimmt ist (Kirsche, Pflaume, Mirabelle, Kirschpflaume, Zierkirsche). Steinobst schneidet man bevorzugt im Sommer nach der Ernte, weil die Wunden dann schneller heilen und weniger Gummifluss entsteht.",
["K|4-5||Art bestimmen: Blüte, Blätter und später die Früchte ansehen und fotografieren.",
 "S|7-8|1|Nach der Ernte auslichten: nach innen wachsende, sich kreuzende und abgestorbene Triebe entfernen.",
 "K|5-8||Auf Monilia achten: welke Triebspitzen und Fruchtmumien entfernen und in den Restmüll geben."],
{r:0.6, baum:1});

P("weissdorn","Weißdorn","Crataegus monogyna / laevigata","gehoelz","🤍",
"Heimischer, dorniger Strauch für Hecken. Weiße Blüten im Mai, rote Früchte im Herbst, wertvoll für Insekten und Vögel. Weißdorn ist Wirtspflanze des Feuerbrands, der auch Apfel, Birne und Quitte befällt.",
["S|6-7|1|Formschnitt nach der Brutzeit, vorher auf Nester prüfen.",
 "K|5-7||Auf Feuerbrand achten: Triebspitzen, die wie verbrannt aussehen und sich hakenförmig krümmen, großzügig ins gesunde Holz zurückschneiden, Schnittgut in den Restmüll, Schere desinfizieren. Bei Verdacht die Fachberatung informieren."],
{r:0.6,hecke:1});
P("zaubernuss","Zaubernuss","Hamamelis × intermedia / mollis","gehoelz","💛",
"Ziergehölz, das mitten im Winter blüht: gelbe bis rote, fadenförmige, duftende Blüten von Dezember bis März. Langsam wachsend, sonnig bis halbschattig, humoser Boden. Erlaubt als Ziergehölz, Höhe laut GO 8 bis 2 m halten.",
["S|3-4|1|Kaum schneiden: nur nach der Blüte störende oder abgestorbene Zweige entfernen. Wildtriebe aus der Unterlage am Boden abreißen."],
{r:0.8});
P("strandflieder","Strandflieder (Meerlavendel)","Limonium latifolium","zier","💜",
"Mehrjährige Staude mit großen, luftigen Rispen aus kleinen lavendelblauen Blüten von Juli bis September. Volle Sonne, durchlässiger, eher trockener Boden, gut im Kübel. Die Blüten lassen sich gut trocknen.",
["E|7-8||Blütenrispen zum Trocknen schneiden, wenn die meisten Blüten offen sind, und kopfüber aufhängen.",
 "S|3|2|Alte Blütenstände und braune Blätter im Frühjahr entfernen.",
 "W|11-3||Im Kübel: an eine geschützte Wand stellen, auf Holzfüße setzen und vor Winternässe schützen."],
{r:0.3});

P("maibeere","Maibeere (Kamtschatka-Heckenkirsche)","Lonicera kamtschatica (L. caerulea)","beeren","🫐",
"Sehr frostharter Beerenstrauch, etwa 1 bis 1,5 m hoch. Die länglichen, blauen Beeren reifen schon im Mai und Juni, als erstes Beerenobst im Jahr, und schmecken süß-säuerlich wie Heidelbeeren. Sonnig bis halbschattig, frischer Boden. Für guten Fruchtansatz braucht sie eine zweite, gleichzeitig blühende Sorte in der Nähe.",
["E|5-6||Ernten, wenn die Beeren innen ganz dunkel sind und nicht mehr bitter schmecken. Vor Amseln schützen (Netz).",
 "S|7-8,11-2|1|Nach der Ernte oder im Winter auslichten: einige der ältesten Triebe bodennah entfernen, sonst wenig schneiden.",
 "K|4||Prüfen, ob eine zweite Maibeeren-Sorte als Befruchter in der Nähe steht, sonst eine nachpflanzen."],
{r:0.6});

if (window.EXTRA_GUIDE_LINKS) {
  const X = window.EXTRA_GUIDE_LINKS;
  X.zwiebeln = (X.zwiebeln || []).concat(["tulpe", "narzisse", "traubenhyazinthe", "hyazinthe", "krokus", "schneegloeckchen", "blaustern", "winterling", "zierlauch", "kaiserkrone"]);
  X.halbstrauch = (X.halbstrauch || []).concat(["schopflavendel", "schleifenblume"]);
  X.stauden = (X.stauden || []).concat(["blutgras", "pfeifenputzergras", "zebragras", "chinaschilf", "rutenhirse", "reitgras", "japanwaldgras", "pampasgras", "margerite", "stockrose", "schafgarbe", "glockenblume", "sonnenbraut", "ziersalbei", "lupine", "kugeldistel", "wolfsmilch", "bergenie", "astilbe", "bartiris", "hopfen"]);
}

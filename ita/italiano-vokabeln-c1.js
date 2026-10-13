/* Zusätzliche C1-Vokabeln für italiano.html
   Format pro Zeile: italienisch | Artikel | deutsch | Beispielsatz
   Eigene Beispielsätze, keine Übernahme aus Lehrwerken. */
(function(){
function add(L){
  var out = window.IT_EXTRA = window.IT_EXTRA || {};
  Object.keys(L).forEach(function(name){
    out[name] = L[name].trim().split("\n").map(function(line){
      var p = line.split("|");
      var w = {it:p[0].trim(), de:p[2].trim(), ex:p[3].trim()};
      if (p[1].trim()) w.art = p[1].trim();
      return w;
    });
  });
}
add({
"C1 – Verben mit Nuance": `
accennare||andeuten / erwähnen|Ha accennato a un possibile cambiamento.
alludere||anspielen|A cosa alludi?
ammonire||ermahnen|Il giudice ha ammonito il testimone.
appagare||befriedigen / erfüllen|Il lavoro non lo appaga più.
attenuare||abschwächen / mildern|Il farmaco attenua il dolore.
avvalorare||bekräftigen / stützen|I dati avvalorano la tesi.
azzardare||wagen / riskieren|Non azzardo previsioni.
barcamenarsi||sich durchlavieren|Si barcamena tra lavoro e famiglia.
celare||verbergen|Cela le sue emozioni.
cimentarsi||sich versuchen|Si è cimentato nella cucina giapponese.
circoscrivere||eingrenzen|Bisogna circoscrivere il problema.
compiacersi||sich freuen / Gefallen finden|Mi compiaccio del vostro successo.
congedarsi||sich verabschieden|Si è congedato dagli ospiti.
deplorare||bedauern / missbilligen|Il governo deplora la violenza.
destreggiarsi||geschickt manövrieren|Si destreggia bene tra mille impegni.
dissuadere||abraten / abbringen|Ho cercato di dissuaderlo dal partire.
divagare||abschweifen|Scusate, sto divagando.
esortare||auffordern / ermutigen|Il preside esorta gli studenti a leggere.
fomentare||schüren|Le sue parole fomentano l'odio.
fronteggiare||entgegentreten / bewältigen|Il paese fronteggia una crisi.
illudersi||sich Illusionen machen|Non illuderti, non cambierà.
indugiare||zögern / verweilen|Non indugiare, decidi!
insinuare||unterstellen / andeuten|Cosa vuoi insinuare?
lusingare||schmeicheln|Le tue parole mi lusingano.
millantare||prahlen mit|Millanta conoscenze importanti.
oscillare||schwanken|I prezzi oscillano molto.
ostentare||zur Schau stellen|Ostenta la sua ricchezza.
palesare||offenbaren|Ha palesato il suo disappunto.
paventare||befürchten|Si paventa un aumento delle tasse.
prefiggersi||sich vornehmen|Si è prefisso un obiettivo ambizioso.
prodigarsi||sich einsetzen / aufopfern|Si prodiga per gli altri.
protrarsi||sich hinziehen|La riunione si è protratta fino a sera.
reprimere||unterdrücken|Ha represso la rabbia.
scongiurare||abwenden / beschwören|Abbiamo scongiurato il pericolo.
sfociare||münden|La discussione è sfociata in una lite.
smentire||dementieren / widerlegen|Il ministro smentisce la notizia.
sminuire||herabsetzen / kleinreden|Non sminuire il tuo lavoro.
soffermarsi||verweilen / eingehen auf|Vorrei soffermarmi su questo punto.
temporeggiare||Zeit gewinnen|Il governo temporeggia.
tergiversare||ausweichen / herumdrucksen|Smettila di tergiversare e rispondi!
`,
"C1 – Formelle Verben": `
adempiere||erfüllen (Pflicht)|Ha adempiuto ai suoi doveri.
afferire||gehören zu / betreffen|Il caso afferisce all'ufficio legale.
annoverare||zählen zu|Lo annoverano tra i migliori autori.
attenersi||sich halten an|Si prega di attenersi alle istruzioni.
avvicendarsi||sich abwechseln|I turni si avvicendano ogni otto ore.
collocarsi||sich einordnen|Il libro si colloca nel filone storico.
conferire||verleihen / übertragen|Gli hanno conferito un premio.
constatare||feststellen|Constatiamo un miglioramento.
corroborare||untermauern|Le prove corroborano l'accusa.
decorrere||laufen ab (Frist)|Il termine decorre da oggi.
delineare||umreißen|Il rapporto delinea la situazione.
demandare||übertragen / delegieren|La decisione è demandata al consiglio.
designare||ernennen / bezeichnen|È stato designato come successore.
differire||sich unterscheiden / verschieben|Le opinioni differiscono molto.
disattendere||missachten|Il governo ha disatteso le promesse.
emanare||erlassen|Il ministero emana un decreto.
esimersi||sich drücken vor|Non posso esimermi dal rispondere.
espletare||ausführen / erledigen|Bisogna espletare le pratiche.
evadere una pratica||einen Vorgang erledigen|L'ufficio evade le pratiche in ordine.
formalizzare||formell festhalten|Formalizziamo l'accordo per iscritto.
inoltrare una domanda||einen Antrag einreichen|Ho inoltrato la domanda al comune.
intercorrere||bestehen / vergehen (zwischen)|Tra i due eventi sono intercorsi tre anni.
munirsi||sich versehen mit|Munirsi di un documento valido.
ottemperare||nachkommen (Vorschrift)|L'azienda deve ottemperare alla legge.
pervenire a una conclusione||zu einem Schluss kommen|Siamo pervenuti a una conclusione.
predisporre||vorbereiten / einrichten|Abbiamo predisposto un piano di emergenza.
prescindere||absehen von|Non si può prescindere dai costi.
procrastinare||aufschieben|Non procrastinare le decisioni importanti.
recepire||übernehmen / aufnehmen|L'Italia ha recepito la direttiva europea.
redigere||verfassen|Ha redatto il verbale della riunione.
revocare||widerrufen|Hanno revocato la licenza.
riscontrare||feststellen / vorfinden|Abbiamo riscontrato alcuni errori.
sottoscrivere||unterzeichnen|Le parti sottoscrivono il contratto.
subentrare||nachfolgen / eintreten|Il nuovo direttore subentra a gennaio.
usufruire||in Anspruch nehmen|I soci possono usufruire dello sconto.
vertere su||sich drehen um|La discussione verte sul bilancio.
vigere||gelten (Gesetz)|La norma vige da dieci anni.
attestare||bescheinigen|Il certificato attesta la frequenza.
inficiare||ungültig machen / beeinträchtigen|L'errore inficia il risultato.
sollecitare||anmahnen / drängen|Ho sollecitato una risposta.
`,
"C1 – Charakter & Verhalten": `
accondiscendente||nachgiebig|È troppo accondiscendente con i figli.
altezzoso||hochnäsig|Ha un modo di fare altezzoso.
ambizioso||ehrgeizig|È una donna molto ambiziosa.
arrogante||arrogant|Un atteggiamento arrogante.
astuto||listig / klug|Una mossa astuta.
avveduto||umsichtig|Un amministratore avveduto.
borioso||aufgeblasen|Un uomo borioso e vanitoso.
cocciuto||dickköpfig|È cocciuto come un mulo.
diffidente||misstrauisch|È diffidente con gli sconosciuti.
disinvolto||ungezwungen / locker|Parla in pubblico con disinvoltura, è molto disinvolto.
eclettico||vielseitig|È un artista eclettico.
estroso||einfallsreich / launisch|Un cuoco estroso.
frivolo||oberflächlich / leichtfertig|Una conversazione frivola.
garbato||höflich / taktvoll|Ha risposto in modo garbato.
impulsivo||impulsiv|È troppo impulsivo.
intraprendente||unternehmungslustig|Una ragazza intraprendente.
irascibile||jähzornig|Il capo è irascibile.
lungimirante||weitsichtig|Una politica lungimirante.
mansueto||sanftmütig|Un cane mansueto.
meschino||kleinlich / gemein|Un comportamento meschino.
modesto||bescheiden|È rimasto modesto nonostante il successo.
pignolo||pingelig|Il professore è molto pignolo.
premuroso||fürsorglich|Un marito premuroso.
presuntuoso||anmaßend|Non essere presuntuoso.
riflessivo||nachdenklich|È un ragazzo riflessivo.
scaltro||gerissen|Un venditore scaltro.
schietto||offen / geradeheraus|Una persona schietta.
schivo||scheu / zurückhaltend|È schivo e parla poco.
spavaldo||großspurig|Un atteggiamento spavaldo.
spontaneo||spontan|Una reazione spontanea.
suscettibile||empfindlich|È suscettibile alle critiche.
taciturno||schweigsam|Un uomo taciturno.
tenero||zärtlich / weich|Un cuore tenero.
tirchio||geizig|È troppo tirchio per offrire un caffè.
umile||demütig / bescheiden|È rimasto umile.
vanitoso||eitel|È vanitoso, si guarda sempre allo specchio.
versatile||vielseitig|Un attore versatile.
vivace di carattere||lebhaft (Charakter)|È una bambina vivace di carattere.
zelante||eifrig|Un impiegato zelante.
spregiudicato||skrupellos / unvoreingenommen|Un affarista spregiudicato.
`,
"C1 – Abstrakte Nomen": `
accezione|l'|Bedeutung (eines Wortes)|In questa accezione la parola è negativa.
ambito|l'|Bereich|Nell'ambito della ricerca.
ammontare|l'|Betrag / Gesamtsumme|L'ammontare dei danni è alto.
arbitrio|l'|Willkür / Ermessen|Il libero arbitrio.
assetto|l'|Ordnung / Struktur|Il nuovo assetto dell'azienda.
attinenza|l'|Bezug|Non ha attinenza con il tema.
caratura|la|Format / Kaliber|Un politico di grande caratura.
consapevolezza di sé|la|Selbstbewusstsein (Bewusstheit)|La consapevolezza di sé si sviluppa con l'età.
connubio|il|Verbindung / Ehe|Un connubio tra tradizione e innovazione.
contesa|la|Streit / Auseinandersetzung|Una contesa tra eredi.
decoro|il|Anstand / Würde|Il decoro urbano.
disagio sociale|il|soziale Not|Il disagio sociale nelle periferie.
divario|il|Kluft / Gefälle|Il divario tra nord e sud.
esigenza|l'|Bedürfnis / Erfordernis|Le esigenze dei clienti.
espediente|l'|Kniff / Notlösung|Un espediente narrativo.
fattispecie|la|Sachverhalt / Tatbestand|In questa fattispecie non si applica la norma.
fulcro|il|Dreh- und Angelpunkt|Il fulcro del discorso.
impronta|l'|Prägung / Abdruck|Un'opera con un'impronta personale.
indole|l'|Wesen / Naturell|È di indole pacifica.
insidia|l'|Tücke / Gefahr|Le insidie della rete.
lungimiranza|la|Weitsicht|Ci vuole lungimiranza politica.
movente|il|Motiv (Tat)|Il movente del delitto.
nocività|la|Schädlichkeit|La nocività del fumo.
parvenza|la|Anschein|Una parvenza di normalità.
perplessità|la|Bedenken / Ratlosigkeit|Ho qualche perplessità.
peculiarità|la|Besonderheit|La peculiarità di questo dialetto.
premessa|la|Voraussetzung / Vorbemerkung|Una premessa necessaria.
presa di coscienza|la|Bewusstwerdung|Una presa di coscienza collettiva.
remora|la|Hemmung / Bedenken|Non ha avuto remore a dirlo.
retaggio|il|Erbe / Überbleibsel|Un retaggio del passato.
risvolto|il|Kehrseite / Aspekt|Un risvolto inaspettato.
sfumatura|la|Nuance|Una sfumatura di significato.
spunto|lo|Anregung / Anstoß|Il film offre spunti di riflessione.
sussistenza|la|Lebensunterhalt / Bestehen|L'agricoltura di sussistenza.
tenore di vita|il|Lebensstandard|Il tenore di vita è aumentato.
travaglio|il|Qual / Wehen|Un periodo di travaglio interiore.
vaglio|il|Prüfung / Sieb|Le proposte sono al vaglio della commissione.
veemenza|la|Heftigkeit|Ha protestato con veemenza.
vincolo|il|Bindung / Auflage|Un vincolo contrattuale.
`,
"C1 – Gesellschaft & Politik": `
assistenzialismo|l'|Versorgungsmentalität|Critica l'assistenzialismo dello stato.
astensionismo|l'|Wahlenthaltung|L'astensionismo è in crescita.
ballottaggio|il|Stichwahl|Al ballottaggio vince il candidato di centro.
ceto medio|il|Mittelschicht|Il ceto medio si impoverisce.
clientelismo|il|Vetternwirtschaft|Il clientelismo frena lo sviluppo.
consenso elettorale|il|Wählerzustimmung|Il partito perde consenso elettorale.
crisi di governo|la|Regierungskrise|È scoppiata una crisi di governo.
decentramento|il|Dezentralisierung|Il decentramento amministrativo.
demagogia|la|Demagogie|Un discorso pieno di demagogia.
divario generazionale|il|Generationenkluft|Il divario generazionale nel lavoro.
emendamento|l'|Änderungsantrag|L'opposizione presenta un emendamento.
esecutivo|l'|Exekutive / Regierung|L'esecutivo ha approvato il piano.
legislatura|la|Legislaturperiode|Alla fine della legislatura.
lobby|la|Lobby|Le lobby influenzano le decisioni.
malcontento|il|Unzufriedenheit|Cresce il malcontento popolare.
mozione di sfiducia|la|Misstrauensantrag|È stata presentata una mozione di sfiducia.
ordinamento|l'|Ordnung / Rechtssystem|L'ordinamento giuridico italiano.
populismo|il|Populismus|Il populismo è diffuso in Europa.
potere legislativo|il|Legislative|Il parlamento esercita il potere legislativo.
precariato|il|prekäre Arbeitsverhältnisse|Il precariato giovanile.
previdenza sociale|la|Sozialversicherung|Il sistema di previdenza sociale.
rimpasto|il|Kabinettsumbildung|Il premier annuncia un rimpasto.
schieramento|lo|politisches Lager|Lo schieramento di centrodestra.
sovranità|la|Souveränität|La sovranità popolare.
stato sociale|lo|Sozialstaat|Difendere lo stato sociale.
tornata elettorale|la|Wahlgang|La prossima tornata elettorale.
welfare|il|Sozialsystem|Un welfare efficiente.
ceto politico|il|politische Klasse|La sfiducia verso il ceto politico.
cuneo fiscale|il|Steuer- und Abgabenkeil|Il governo vuole ridurre il cuneo fiscale.
diritto di voto|il|Wahlrecht|Il diritto di voto è fondamentale.
manovra finanziaria|la|Haushaltsgesetz|La manovra finanziaria è stata approvata.
militanza|la|Aktivismus / Parteiarbeit|Anni di militanza politica.
polarizzazione|la|Polarisierung|La polarizzazione del dibattito pubblico.
quorum|il|Quorum|Il referendum non ha raggiunto il quorum.
rappresentanza|la|Vertretung|La rappresentanza delle donne in parlamento.
scrutinio|lo|Stimmauszählung|Lo scrutinio è in corso.
società civile|la|Zivilgesellschaft|Il ruolo della società civile.
tutela delle minoranze|la|Minderheitenschutz|La tutela delle minoranze linguistiche.
veto|il|Veto|Il paese ha posto il veto.
voto di fiducia|il|Vertrauensabstimmung|Il governo chiede il voto di fiducia.
`,
"C1 – Wirtschaft & Finanzen": `
ammortamento|l'|Abschreibung / Tilgung|Il piano di ammortamento del mutuo.
appalto|l'|Ausschreibung / Auftrag|Ha vinto l'appalto per il ponte.
asta|l'|Auktion / Versteigerung|La casa è andata all'asta.
azionista|l'|Aktionär|Gli azionisti approvano il bilancio.
bancarotta|la|Bankrott|L'azienda è in bancarotta.
capitale sociale|il|Stammkapital|Il capitale sociale è di diecimila euro.
congiuntura|la|Konjunktur|Una congiuntura sfavorevole.
consiglio di amministrazione|il|Vorstand / Verwaltungsrat|Il consiglio di amministrazione si riunisce.
delocalizzare||verlagern (Produktion)|L'azienda ha delocalizzato all'estero.
dividendo|il|Dividende|Gli azionisti ricevono un dividendo.
domanda e offerta||Angebot und Nachfrage|La legge della domanda e dell'offerta.
entrate|le|Einnahmen|Le entrate fiscali sono aumentate.
fatturato|il|Umsatz|Il fatturato annuo è di due milioni.
filiale|la|Filiale / Niederlassung|Una filiale in Germania.
fusione|la|Fusion|La fusione tra due banche.
gettito fiscale|il|Steueraufkommen|Il gettito fiscale cresce.
imponibile|l'|steuerpflichtiges Einkommen|Il reddito imponibile.
indebitamento|l'|Verschuldung|L'indebitamento delle famiglie.
insolvenza|l'|Zahlungsunfähigkeit|L'azienda dichiara l'insolvenza.
liquidazione|la|Abfindung / Liquidation|Ha ricevuto la liquidazione.
margine di guadagno|il|Gewinnspanne|Il margine di guadagno è basso.
monopolio|il|Monopol|Lo stato aveva il monopolio.
oneri|gli|Kosten / Lasten|Gli oneri a carico del cliente.
plusvalenza|la|Wertzuwachs|Una plusvalenza sulla vendita.
potere d'acquisto|il|Kaufkraft|Il potere d'acquisto diminuisce.
quotazione in borsa|la|Börsengang / Notierung|La quotazione in borsa della società.
rincaro|il|Teuerung|Il rincaro dell'energia.
ristagno|il|Stagnation|Il ristagno dell'economia.
sgravio fiscale|lo|Steuererleichterung|Uno sgravio fiscale per le famiglie.
speculazione|la|Spekulation|La speculazione edilizia.
spread|lo|Zinsabstand|Lo spread sale.
start-up|la|Start-up|Ha fondato una start-up.
tassazione|la|Besteuerung|Una tassazione equa.
titolo di stato|il|Staatsanleihe|Investe in titoli di stato.
utile|l'|Gewinn|L'utile netto dell'anno.
volume d'affari|il|Geschäftsvolumen|Il volume d'affari è raddoppiato.
crescita economica sostenibile|la|nachhaltiges Wachstum|Puntiamo su una crescita economica sostenibile.
filiera|la|Lieferkette / Produktionskette|La filiera del latte.
indotto|l'|Zulieferindustrie|La fabbrica crea un grande indotto.
concorrenza sleale|la|unlauterer Wettbewerb|Accusano l'azienda di concorrenza sleale.
`,
"C1 – Wissenschaft & Forschung": `
ricerca scientifica|la|wissenschaftliche Forschung|Investire nella ricerca scientifica.
scoperta|la|Entdeckung|Una scoperta rivoluzionaria.
indagine statistica|l'|statistische Erhebung|Un'indagine statistica sul lavoro.
campione rappresentativo|il|repräsentative Stichprobe|Un campione rappresentativo della popolazione.
attendibilità|l'|Zuverlässigkeit|L'attendibilità dei dati.
rilevazione|la|Erhebung / Messung|La rilevazione dei prezzi.
riscontro empirico|il|empirischer Beleg|Manca un riscontro empirico.
sperimentazione|la|Erprobung / Versuch|La sperimentazione clinica.
laboratorio|il|Labor|Lavora in un laboratorio di chimica.
ipotesi di lavoro|l'|Arbeitshypothese|Partiamo da un'ipotesi di lavoro.
dimostrazione|la|Beweis / Vorführung|La dimostrazione del teorema.
margine di errore|il|Fehlerspanne|Il margine di errore è del tre per cento.
rivista scientifica|la|Fachzeitschrift|Pubblica su una rivista scientifica.
revisione paritaria|la|Peer-Review|L'articolo passa la revisione paritaria.
bibliografia|la|Literaturverzeichnis|Controlla la bibliografia.
citazione|la|Zitat|Una citazione di Galileo.
plagio|il|Plagiat|Lo studente è accusato di plagio.
borsa di ricerca|la|Forschungsstipendium|Ha ottenuto una borsa di ricerca.
finanziamento|il|Finanzierung|Il progetto ha ricevuto un finanziamento.
divulgazione|la|Vermittlung (Wissenschaft)|La divulgazione scientifica in TV.
scienziato|lo|Wissenschaftler|Una scienziata premiata.
fisico|il|Physiker|Il fisico studia le particelle.
microrganismo|il|Mikroorganismus|I microrganismi del suolo.
cellula|la|Zelle|La cellula è l'unità della vita.
gene|il|Gen|Un gene responsabile della malattia.
mutazione|la|Mutation|Una mutazione genetica.
molecola|la|Molekül|La molecola d'acqua.
atomo|l'|Atom|L'atomo di carbonio.
reazione chimica|la|chemische Reaktion|Una reazione chimica rapida.
sostanza|la|Substanz / Stoff|Una sostanza tossica.
microscopio|il|Mikroskop|Osservo le cellule al microscopio.
telescopio|il|Teleskop|Guardiamo le stelle con il telescopio.
galassia|la|Galaxie|La nostra galassia è la Via Lattea.
pianeta|il|Planet|Marte è un pianeta rosso.
fenomeno naturale|il|Naturphänomen|L'aurora è un fenomeno naturale.
misurazione|la|Messung|Una misurazione precisa.
unità di misura|l'|Maßeinheit|Il metro è un'unità di misura.
progresso tecnologico|il|technischer Fortschritt|Il progresso tecnologico accelera.
brevettare||patentieren|Ha brevettato la sua invenzione.
invenzione|l'|Erfindung|L'invenzione del telefono.
`,
"C1 – Sprache & Argumentation": `
argomentare||argumentieren|Sa argomentare bene le sue idee.
argomentazione|l'|Argumentation|Un'argomentazione solida.
confutabile||widerlegbar|Una tesi facilmente confutabile.
contraddire||widersprechen|Non contraddirmi sempre!
controargomento|il|Gegenargument|Ho un controargomento.
digressione|la|Abschweifung|Scusate la digressione.
discutibile||fragwürdig|Una scelta discutibile.
eloquente||beredt / vielsagend|Un silenzio eloquente.
enfasi|l'|Nachdruck|Ha parlato con enfasi.
eufemismo|l'|Euphemismus|"Diversamente giovane" è un eufemismo.
fraintendere||missverstehen|Mi hai frainteso.
fraintendimento|il|Missverständnis|Un fraintendimento linguistico.
ironia|l'|Ironie|Lo diceva con ironia.
ironico||ironisch|Un commento ironico.
iperbole|l'|Übertreibung (Hyperbel)|"Te l'ho detto mille volte" è un'iperbole.
metafora|la|Metapher|Una metafora poetica.
obiezione|l'|Einwand|Ci sono obiezioni?
paradosso|il|Paradox|È un paradosso.
persuadere||überreden / überzeugen|Mi ha persuaso a restare.
persuasivo||überzeugend|Un discorso persuasivo.
polemica|la|Kontroverse / Streit|La decisione ha suscitato polemiche.
polemico||streitlustig|Non essere polemico!
premettere||vorausschicken|Premetto che non sono un esperto.
presupporre||voraussetzen|Questo presuppone una buona preparazione.
puntualizzare||präzisieren / klarstellen|Vorrei puntualizzare una cosa.
retorica|la|Rhetorik|Un discorso pieno di retorica.
sarcasmo|il|Sarkasmus|Rispondeva con sarcasmo.
sintesi|la|Zusammenfassung / Synthese|Una sintesi efficace.
sostenibile (tesi)||haltbar (These)|Questa tesi non è sostenibile.
sottolineatura|la|Betonung / Hervorhebung|Una sottolineatura importante.
stringato||knapp|Una risposta stringata.
tesi di fondo|la|Grundthese|La tesi di fondo del saggio.
ambiguità|l'|Mehrdeutigkeit|L'ambiguità del messaggio.
chiarezza espositiva|la|Klarheit der Darstellung|Apprezzo la chiarezza espositiva.
lessico|il|Wortschatz|Un lessico ricco.
registro linguistico|il|Sprachregister|Usa un registro linguistico formale.
sinonimo|il|Synonym|Un sinonimo di "bello".
contrario|il|Gegenteil|Il contrario di "alto".
modo di dire|il|Redewendung|È un modo di dire toscano.
proverbio|il|Sprichwort|Un vecchio proverbio.
`,
"C1 – Gefühle & Nuancen": `
amarezza|l'|Bitterkeit|Ha accolto la notizia con amarezza.
angoscia|l'|Beklemmung / Angst|Un senso di angoscia.
apprensione|l'|Besorgnis|Aspettiamo con apprensione.
astio|l'|Groll|Prova astio verso il fratello.
beatitudine|la|Glückseligkeit|Uno stato di beatitudine.
compiacimento|il|Genugtuung / Selbstgefälligkeit|Un sorriso di compiacimento.
costernazione|la|Bestürzung|La notizia ha suscitato costernazione.
disappunto|il|Verdruss / Enttäuschung|Ha mostrato il suo disappunto.
disprezzo|il|Verachtung|Lo guarda con disprezzo.
euforia|l'|Euphorie|L'euforia della vittoria.
fastidio|il|Ärger / Belästigung|Mi dà fastidio il rumore.
gratitudine|la|Dankbarkeit|Provo una profonda gratitudine.
inquietudine|l'|Unruhe|Un'inquietudine interiore.
logorio|il|Zermürbung|Il logorio della vita moderna.
malumore|il|Missmut|C'è malumore in ufficio.
nostalgia di casa|la|Heimweh|Ha nostalgia di casa.
rancore|il|Groll / Ressentiment|Non serbo rancore.
rassegnazione|la|Resignation|Accetta tutto con rassegnazione.
rimorso|il|Gewissensbisse|Ha il rimorso di non averla aiutata.
rimpianto|il|Bedauern (Verpasstes)|Non ho rimpianti.
sconforto|lo|Mutlosigkeit|Un momento di sconforto.
smarrimento|lo|Verwirrung / Verlorenheit|Un senso di smarrimento.
sollievo|il|Erleichterung|Che sollievo!
spensieratezza|la|Unbeschwertheit|La spensieratezza dell'infanzia.
stupore|lo|Erstaunen|Mi guarda con stupore.
struggente||herzzerreißend|Una canzone struggente.
sgomento|lo|Entsetzen|Lo sgomento davanti alla tragedia.
trepidazione|la|bange Erwartung|Aspettava i risultati con trepidazione.
uggioso||trübsinnig / trüb|Una giornata uggiosa.
vergognarsi||sich schämen|Mi vergogno di quello che ho detto.
commuoversi||gerührt sein|Mi commuovo sempre a questo film.
commovente||rührend|Una storia commovente.
crucciarsi||sich grämen|Non crucciarti per così poco.
esasperato||entnervt|Sono esasperato dai ritardi.
sbigottito||fassungslos|Sono rimasto sbigottito.
stizzito||verärgert|Ha risposto stizzito.
rasserenarsi||sich aufheitern|Dopo la telefonata si è rasserenato.
sopraffatto||überwältigt|Sopraffatto dall'emozione.
afflitto||betrübt|È afflitto dalla perdita.
appagato||erfüllt / zufrieden|Si sente appagato.
`,
"C1 – Umgangssprache": `
fregarsene||darauf pfeifen|Me ne frego delle critiche.
sbattersene||sich nicht darum scheren|Se ne sbatte delle regole.
rompere le scatole||auf die Nerven gehen|Smettila di rompere le scatole!
scocciare||nerven|Mi scoccia aspettare.
scocciatura|la|lästige Sache|Che scocciatura!
casino|il|Chaos / Durcheinander|Che casino in camera tua!
figuraccia|la|Blamage|Ho fatto una figuraccia.
fare una figura||einen (guten) Eindruck machen|Ho fatto una bella figura all'esame.
mollare||aufgeben / sitzen lassen|Non mollare!
beccare||erwischen|Mi hanno beccato a copiare.
sgamare||durchschauen / erwischen|Mi ha sgamato subito.
abbuffarsi||sich vollstopfen|A Natale ci abbuffiamo.
spaccarsi||sich zerreißen (vor Arbeit)|Mi spacco la schiena tutto il giorno.
sbronza|la|Rausch / Besäufnis|Ieri ha preso una sbronza.
fregatura colossale|la|riesiger Reinfall|Quel viaggio è stato una fregatura colossale.
gasato||aufgedreht|È tutto gasato per la partita.
in gamba||tüchtig / fit|Tua nonna è proprio in gamba.
mitico||genial / legendär|Sei mitico!
pazzesco||irre / unglaublich|Un concerto pazzesco!
schifezza|la|Mist / Schund|Questo film è una schifezza.
sfigato||Pechvogel / uncool|Che sfigato, ha perso di nuovo.
tosto||hart / taff|Un esame tosto.
un sacco||sehr viel|Mi piace un sacco.
una cifra||jede Menge|Ho studiato una cifra.
mica||(gar) nicht / etwa|Non è mica facile!
magari sì||vielleicht ja|Vieni? Magari sì.
dai, su!||komm schon!|Dai, su, non piangere!
ma va'!||ach was!|Ma va', non ci credo!
che palle!||wie nervig!|Che palle, piove ancora!
non ci sto||ich mache nicht mit|A queste condizioni non ci sto.
ci sta||passt schon / ist in Ordnung|Una pizza stasera? Ci sta!
alla grande||super|È andata alla grande!
fuori di testa||verrückt|Sei fuori di testa?
a tutta birra||mit Vollgas|Correva a tutta birra.
fare il furbo||sich schlau anstellen / tricksen|Non fare il furbo!
tirare tardi||spät ins Bett gehen|Ieri sera abbiamo tirato tardi.
fare il ponte||einen Brückentag nehmen|Venerdì faccio il ponte.
avere la luna storta||schlechte Laune haben|Oggi ha la luna storta.
essere al verde||pleite sein|Non posso uscire, sono al verde.
stare sulle scatole||auf den Keks gehen|Quel tipo mi sta sulle scatole.
`,
"C1 – Redewendungen": `
in bocca al lupo||viel Glück (Hals- und Beinbruch)|In bocca al lupo per l'esame!
crepi il lupo||danke (Antwort auf in bocca al lupo)|In bocca al lupo! Crepi!
prendere due piccioni con una fava||zwei Fliegen mit einer Klappe schlagen|Così prendiamo due piccioni con una fava.
non vedere l'ora||es kaum erwarten können|Non vedo l'ora di partire.
avere le mani bucate||das Geld nicht halten können|Ha le mani bucate, spende tutto.
costare un occhio||sündhaft teuer sein|Questa giacca costa un occhio.
essere al settimo cielo||im siebten Himmel sein|È al settimo cielo per la notizia.
acqua in bocca||kein Wort darüber|Acqua in bocca, è un segreto!
tagliare la corda||sich aus dem Staub machen|Quando è arrivato il capo, ha tagliato la corda.
rimanere di stucco||sprachlos sein|Sono rimasto di stucco.
avere un diavolo per capello||fuchsteufelswild sein|Oggi ha un diavolo per capello.
fare orecchie da mercante||sich taub stellen|Gli chiedo aiuto ma fa orecchie da mercante.
ogni morte di papa||alle Jubeljahre|Ci vediamo ogni morte di papa.
piove sul bagnato||ein Unglück kommt selten allein|Dopo l'incidente ha perso il lavoro: piove sul bagnato.
non tutte le ciambelle riescono col buco||es klappt nicht immer alles|Pazienza, non tutte le ciambelle riescono col buco.
essere in alto mare||noch weit vom Ziel entfernt sein|Con la tesi sono ancora in alto mare.
gettare la spugna||das Handtuch werfen|Non gettare la spugna proprio ora!
avere la testa fra le nuvole||mit den Gedanken woanders sein|Oggi hai la testa fra le nuvole.
andare a gonfie vele||bestens laufen|Gli affari vanno a gonfie vele.
fare il passo più lungo della gamba||sich übernehmen|Non fare il passo più lungo della gamba.
mettere il carro davanti ai buoi||das Pferd von hinten aufzäumen|Non mettere il carro davanti ai buoi.
cadere a fagiolo||wie gerufen kommen|La tua telefonata cade a fagiolo.
essere una buona forchetta||gern und viel essen|Mio zio è una buona forchetta.
avere le spalle larghe||viel aushalten können|Non preoccuparti, ho le spalle larghe.
chi dorme non piglia pesci||Morgenstund hat Gold im Mund|Alzati presto: chi dorme non piglia pesci.
tra il dire e il fare c'è di mezzo il mare||leichter gesagt als getan|Tra il dire e il fare c'è di mezzo il mare.
l'abito non fa il monaco||der Schein trügt|Non giudicarlo così, l'abito non fa il monaco.
meglio tardi che mai||besser spät als nie|Sei arrivato! Meglio tardi che mai.
chi va piano va sano e va lontano||langsam, aber sicher|Non correre: chi va piano va sano e va lontano.
non è tutto oro quello che luccica||es ist nicht alles Gold, was glänzt|Attento, non è tutto oro quello che luccica.
fare la gavetta||sich hocharbeiten|Ha fatto la gavetta prima di diventare chef.
avere il pollice verde||einen grünen Daumen haben|Mia madre ha il pollice verde.
essere come il prezzemolo||überall auftauchen|È come il prezzemolo, è sempre ovunque.
stare con le mani in mano||Däumchen drehen|Non stare con le mani in mano, aiutami!
dormire sugli allori||sich auf seinen Lorbeeren ausruhen|Hai vinto, ma non dormire sugli allori.
prendere fischi per fiaschi||etwas völlig missverstehen|Hai preso fischi per fiaschi!
vuotare il sacco||auspacken / gestehen|Alla fine ha vuotato il sacco.
farsi in quattro||sich zerreißen (für jemanden)|Si fa in quattro per i figli.
essere al corrente||auf dem Laufenden sein|Sei al corrente delle novità?
salvare capra e cavoli||es allen recht machen|Con questa soluzione salviamo capra e cavoli.
`,
"C1 – Konnektoren & Adverbien": `
ciononostante||trotzdem|Pioveva, ciononostante siamo usciti.
nonostante ciò||dennoch|È caro, nonostante ciò lo compro.
in compenso||dafür / als Ausgleich|È piccolo, in compenso è luminoso.
al contrario||im Gegenteil|Non è noioso, al contrario!
viceversa||umgekehrt|Lui aiuta lei e viceversa.
altrimenti||sonst|Sbrigati, altrimenti perdiamo il treno.
dopotutto||schließlich / letztlich|Dopotutto ha ragione lui.
d'altronde||andererseits / übrigens|D'altronde non avevamo scelta.
del resto||im Übrigen / ohnehin|Del resto lo sapevamo già.
in sostanza||im Wesentlichen|In sostanza, siamo d'accordo.
per l'appunto||genau / eben|Per l'appunto, è quello che dicevo.
anzitutto||zuallererst|Anzitutto, grazie per essere qui.
in primo luogo||erstens|In primo luogo, analizziamo i costi.
in secondo luogo||zweitens|In secondo luogo, consideriamo i tempi.
infine||schließlich / zuletzt|Infine, le conclusioni.
a sua volta||seinerseits|Il problema, a sua volta, ne crea altri.
a seconda di||je nach|A seconda del tempo, andiamo al mare.
a scapito di||auf Kosten von|Lavora troppo a scapito della salute.
a vantaggio di||zugunsten von|Una legge a vantaggio dei giovani.
in seguito a||infolge|In seguito all'incidente, la strada è chiusa.
in vista di||im Hinblick auf|In vista dell'esame studio di più.
onde evitare||um zu vermeiden|Onde evitare equivoci, ripeto.
qualora||falls|Qualora piovesse, rinviamo la gita.
purché||vorausgesetzt dass|Vengo, purché tu guidi.
benché||obwohl|Benché sia stanco, continuo.
cosicché||sodass|Ha parlato piano, cosicché tutti capissero.
dal momento che||da / weil|Dal momento che sei qui, aiutami.
giacché||da ja|Giacché ci sei, chiudi la porta.
visto che||da / angesichts|Visto che piove, restiamo a casa.
indubbiamente||zweifellos|È indubbiamente il migliore.
per lo più||meistens|Per lo più lavoro da casa.
pressoché||nahezu|Il lavoro è pressoché finito.
tuttora||noch immer|La questione è tuttora aperta.
tutt'altro||ganz im Gegenteil|È facile? Tutt'altro!
peraltro||übrigens / zudem|Una scelta, peraltro, molto costosa.
alquanto||ziemlich|È alquanto strano.
a malapena||kaum|Ci vedo a malapena.
man mano||nach und nach|Man mano che leggo, capisco meglio.
di gran lunga||bei Weitem|È di gran lunga il più bravo.
`
});
})();

/* Zusätzliche A2-Vokabeln für italiano.html
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
"A2 – Reisen & Unterkunft": `
bagaglio|il|Gepäck|Il bagaglio è troppo pesante.
bagaglio a mano|il|Handgepäck|Posso portare un bagaglio a mano.
turista|il|Tourist|Roma è piena di turisti.
guida|la|Reiseführer(in)|La guida spiega la storia della città.
visita guidata|la|Führung|Facciamo una visita guidata del museo.
ufficio turistico|l'|Touristeninformation|Chiediamo all'ufficio turistico.
reception|la|Rezeption|Lascio la chiave alla reception.
ostello|l'|Jugendherberge|Dormiamo in un ostello economico.
pensione|la|Pension|La pensione è a due passi dal mare.
mezza pensione|la|Halbpension|Abbiamo prenotato la mezza pensione.
pensione completa|la|Vollpension|Con la pensione completa non paghiamo i pasti.
camera con vista|la|Zimmer mit Aussicht|Vorrei una camera con vista sul mare.
disponibile||verfügbar / frei|Avete una camera disponibile?
al completo||ausgebucht|Mi dispiace, siamo al completo.
prenotare||buchen / reservieren|Ho prenotato due notti.
disdire||absagen / stornieren|Devo disdire la prenotazione.
confermare||bestätigen|Può confermare la prenotazione?
fare il check-in||einchecken|Possiamo fare il check-in alle due.
volo|il|Flug|Il volo parte alle sei.
compagnia aerea|la|Fluggesellschaft|Con quale compagnia aerea viaggi?
carta d'imbarco|la|Bordkarte|Ecco la mia carta d'imbarco.
uscita|l'|Ausgang / Gate|Il volo parte dall'uscita 12.
atterrare||landen|L'aereo atterra a Napoli.
decollare||starten (Flugzeug)|L'aereo decolla in orario.
dogana|la|Zoll|Passiamo la dogana.
frontiera|la|Grenze|Alla frontiera controllano i documenti.
estero|l'|Ausland|Lavoro all'estero.
straniero||ausländisch|Parlo una lingua straniera.
cartolina|la|Postkarte|Ti mando una cartolina da Venezia.
souvenir|il|Andenken|Compro un souvenir per mia madre.
noleggiare||mieten (Auto, Rad)|Noleggiamo una macchina per tre giorni.
noleggio|il|Verleih|Il noleggio delle bici costa poco.
orario di apertura|l'|Öffnungszeit|Qual è l'orario di apertura del museo?
ingresso libero|l'|freier Eintritt|Oggi l'ingresso è libero.
visitare||besichtigen|Vogliamo visitare il Colosseo.
panorama|il|Aussicht / Panorama|Che panorama meraviglioso!
fare le valigie||Koffer packen|Domani parto, stasera faccio le valigie.
perdere il treno||den Zug verpassen|Corri, o perdiamo il treno!
in viaggio||unterwegs|Sono in viaggio da sei ore.
fuso orario|il|Zeitzone|In Giappone c'è un altro fuso orario.
`,
"A2 – Strand & Berge": `
ombrellone|l'|Sonnenschirm|Affittiamo un ombrellone in spiaggia.
sdraio|la|Liegestuhl|Mi riposo sulla sdraio.
crema solare|la|Sonnencreme|Metti la crema solare!
costume da bagno|il|Badeanzug / Badehose|Ho dimenticato il costume da bagno.
abbronzarsi||braun werden|Mi abbronzo facilmente.
scottarsi||einen Sonnenbrand bekommen|Attenzione, ti scotti!
onda|l'|Welle|Oggi le onde sono alte.
riva|la|Ufer|Camminiamo lungo la riva.
conchiglia|la|Muschel|Il bambino raccoglie le conchiglie.
bagnino|il|Rettungsschwimmer|Il bagnino controlla la spiaggia.
fare il bagno||baden|Facciamo il bagno nel mare.
tuffarsi||ins Wasser springen|Mi tuffo dalla barca.
barca|la|Boot|Facciamo un giro in barca.
porto|il|Hafen|La nave arriva al porto.
traghetto|il|Fähre|Prendiamo il traghetto per la Sardegna.
costa|la|Küste|La costa ligure è bellissima.
golfo|il|Golf / Bucht|Il golfo di Napoli.
sentiero|il|Pfad / Wanderweg|Seguiamo il sentiero nel bosco.
rifugio|il|Berghütte|Dormiamo in un rifugio.
cima|la|Gipfel|Arriviamo in cima alla montagna.
collina|la|Hügel|La casa è sulla collina.
valle|la|Tal|Il paese si trova in una valle.
funivia|la|Seilbahn|Saliamo con la funivia.
sciare||Ski fahren|D'inverno andiamo a sciare.
sci|lo|Ski / Skifahren|Lo sci è il mio sport preferito.
pista|la|Piste|La pista è piena di neve.
fare un'escursione||eine Wanderung machen|Domenica facciamo un'escursione.
camminata|la|Wanderung / Spaziergang|Una camminata di tre ore.
scarponi|gli|Wanderschuhe|Metti gli scarponi per la montagna.
tenda|la|Zelt|Montiamo la tenda.
sacco a pelo|il|Schlafsack|Il sacco a pelo è caldo.
lago di montagna|il|Bergsee|L'acqua del lago di montagna è fredda.
panchina|la|Bank (zum Sitzen)|Ci sediamo su una panchina.
alba|l'|Sonnenaufgang|Ci alziamo per vedere l'alba.
tramonto|il|Sonnenuntergang|Il tramonto sul mare è romantico.
paesaggio|il|Landschaft|Il paesaggio è incantevole.
vista|la|Aussicht / Sicht|Dalla terrazza c'è una bella vista.
fresco||frisch / kühl|In montagna l'aria è fresca.
profondo||tief|Qui l'acqua è profonda.
stagione|la|Jahreszeit / Saison|L'estate è la stagione delle vacanze.
`,
"A2 – Verkehr & Auto": `
patente|la|Führerschein|Ho preso la patente l'anno scorso.
benzina|la|Benzin|Devo fare benzina.
distributore|il|Tankstelle|C'è un distributore vicino?
parcheggiare||parken|Dove posso parcheggiare?
multa|la|Strafzettel / Bußgeld|Ho preso una multa.
incidente|l'|Unfall|C'è stato un incidente in autostrada.
autostrada|l'|Autobahn|Prendiamo l'autostrada per Milano.
casello|il|Mautstelle|Paghiamo al casello.
pedaggio|il|Maut|Il pedaggio costa dieci euro.
coda|la|Stau / Schlange|C'è una lunga coda.
ingorgo|l'|Stau|Siamo bloccati in un ingorgo.
gomma|la|Reifen / Gummi|Ho una gomma bucata.
volante|il|Lenkrad|Tieni le mani sul volante.
freno|il|Bremse|I freni non funzionano bene.
frenare||bremsen|Frena, c'è un pedone!
sorpassare||überholen|Qui è vietato sorpassare.
cintura di sicurezza|la|Sicherheitsgurt|Allacciate la cintura di sicurezza!
casco|il|Helm|In moto metto sempre il casco.
moto|la|Motorrad|Mio fratello ha una moto rossa.
motorino|il|Motorroller|Vado a scuola in motorino.
pedone|il|Fußgänger|I pedoni attraversano sulle strisce.
strisce pedonali|le|Zebrastreifen|Attraversa sulle strisce pedonali.
segnale|il|Schild / Signal|Non ho visto il segnale.
senso unico|il|Einbahnstraße|Questa via è a senso unico.
velocità|la|Geschwindigkeit|Rispetta i limiti di velocità.
rotonda|la|Kreisverkehr|Alla rotonda prendi la seconda uscita.
officina|l'|Werkstatt|La macchina è in officina.
guasto|il|Panne / Defekt|Abbiamo avuto un guasto al motore.
motore|il|Motor|Il motore fa un rumore strano.
autista|l'|Fahrer|L'autista del pullman è gentile.
pullman|il|Reisebus|Andiamo in gita in pullman.
abbonamento|l'|Abo / Monatskarte|Ho l'abbonamento dell'autobus.
timbrare||entwerten (Fahrschein)|Ricordati di timbrare il biglietto!
controllore|il|Kontrolleur|Il controllore chiede i biglietti.
corsia|la|Fahrspur|Resta nella corsia di destra.
noleggiare un'auto||ein Auto mieten|All'aeroporto noleggiamo un'auto.
lavori in corso||Baustelle|Rallentare, lavori in corso.
pieno|il|volltanken (Tank)|Il pieno, per favore.
navigatore|il|Navi|Il navigatore dice di girare a destra.
targa|la|Nummernschild|Ho annotato la targa della macchina.
`,
"A2 – Arbeit & Berufe": `
cuoco|il|Koch|Il cuoco prepara la pasta.
cameriere|il|Kellner|Il cameriere porta il menu.
commesso|il|Verkäufer|La commessa è molto gentile.
operaio|l'|Arbeiter|L'operaio lavora in fabbrica.
impiegato|l'|Angestellter|Mia madre è impiegata in banca.
ingegnere|l'|Ingenieur|Mio zio fa l'ingegnere.
avvocato|l'|Rechtsanwalt|L'avvocato difende il cliente.
infermiere|l'|Krankenpfleger|L'infermiera misura la febbre.
meccanico|il|Mechaniker|Il meccanico ripara la macchina.
idraulico|l'|Klempner|Chiamiamo l'idraulico, il rubinetto perde.
elettricista|l'|Elektriker|L'elettricista ripara la luce.
contadino|il|Bauer|Il contadino lavora nei campi.
giornalista|il|Journalist|La giornalista scrive un articolo.
parrucchiere|il|Friseur|Vado dal parrucchiere sabato.
farmacista|il|Apotheker|Il farmacista mi dà la medicina.
poliziotto|il|Polizist|Il poliziotto dirige il traffico.
pompiere|il|Feuerwehrmann|I pompieri spengono l'incendio.
postino|il|Briefträger|Il postino porta le lettere.
autista di autobus|l'|Busfahrer|L'autista di autobus si ferma.
segretaria|la|Sekretärin|La segretaria risponde al telefono.
architetto|l'|Architekt|L'architetto disegna la casa.
attore|l'|Schauspieler|È un attore famoso.
cantante|il|Sänger|La cantante ha una bella voce.
fabbrica|la|Fabrik|La fabbrica produce scarpe.
ditta|la|Firma|Lavoro in una piccola ditta.
azienda|l'|Unternehmen|È un'azienda internazionale.
capo|il|Chef / Vorgesetzter|Il mio capo è simpatico.
stipendio|lo|Gehalt|Lo stipendio arriva a fine mese.
colloquio di lavoro|il|Vorstellungsgespräch|Domani ho un colloquio di lavoro.
curriculum|il|Lebenslauf|Mando il curriculum all'azienda.
ferie|le|Urlaub (Arbeit)|Ad agosto sono in ferie.
orario di lavoro|l'|Arbeitszeit|Il mio orario di lavoro è dalle nove alle cinque.
riunione|la|Besprechung|Alle dieci ho una riunione.
cliente|il|Kunde|Il cliente ha sempre ragione.
mestiere|il|Handwerk / Beruf|Il falegname è un bel mestiere.
professione|la|Beruf|Qual è la tua professione?
disoccupato||arbeitslos|Mio cugino è disoccupato.
cercare lavoro||Arbeit suchen|Sto cercando lavoro.
guadagnare||verdienen|Guadagna bene.
tempo pieno|il|Vollzeit|Lavoro a tempo pieno.
part-time||Teilzeit|Lavoro part-time in un bar.
`,
"A2 – Einkaufen & Geld": `
carrello|il|Einkaufswagen|Prendo un carrello.
sacchetto|il|Tüte|Vuole un sacchetto?
reparto|il|Abteilung|Il reparto frutta è a sinistra.
saldi|i|Schlussverkauf|A gennaio ci sono i saldi.
camerino|il|Umkleidekabine|Posso provare la giacca in camerino?
provare||anprobieren / probieren|Posso provare questi pantaloni?
resto|il|Wechselgeld|Ecco il resto.
moneta|la|Münze|Non ho monete per il parcheggio.
banconota|la|Geldschein|Una banconota da venti euro.
contanti|i|Bargeld|Pago in contanti.
prelevare||abheben|Devo prelevare al bancomat.
risparmiare||sparen|Risparmio per le vacanze.
spendere||ausgeben|Ho speso troppo.
prestare||leihen (geben)|Mi presti dieci euro?
restituire||zurückgeben|Ti restituisco il libro domani.
cambiare||umtauschen / wechseln|Posso cambiare questa maglietta?
scontato||reduziert|Questa borsa è scontata del trenta per cento.
caro||teuer|Questo ristorante è caro.
conveniente||günstig / preiswert|Il mercato è più conveniente.
qualità|la|Qualität|Questa borsa è di buona qualità.
marca|la|Marke|Che marca è?
etichetta|l'|Etikett|Leggi l'etichetta.
cassiere|il|Kassierer|Il cassiere mi dà lo scontrino.
fila|la|Schlange (Warteschlange)|C'è una lunga fila alla cassa.
pagare con la carta||mit Karte zahlen|Posso pagare con la carta?
costoso||teuer|È un regalo costoso.
negozio di abbigliamento|il|Bekleidungsgeschäft|C'è un negozio di abbigliamento in centro.
libreria|la|Buchhandlung / Bücherregal|Compro un libro in libreria.
macelleria|la|Metzgerei|Compro la carne in macelleria.
fruttivendolo|il|Obsthändler|Il fruttivendolo ha frutta fresca.
alimentari|gli|Lebensmittelgeschäft|Vado al negozio di alimentari.
profumeria|la|Parfümerie|Compro un profumo in profumeria.
gioielleria|la|Juwelier|In gioielleria vendono anelli.
vetrina|la|Schaufenster|Guardo le vetrine.
chiuso per ferie||wegen Urlaub geschlossen|Il negozio è chiuso per ferie.
aperto tutto il giorno||durchgehend geöffnet|Il supermercato è aperto tutto il giorno.
lista della spesa|la|Einkaufsliste|Ho scritto la lista della spesa.
quanto costa||wie viel kostet|Quanto costa questo vestito?
quanto viene||was macht das (zusammen)|Quanto viene in tutto?
ricevere un regalo||ein Geschenk bekommen|Ho ricevuto un regalo bellissimo.
`,
"A2 – Kleidung & Aussehen": `
calzini|i|Socken|Metto i calzini caldi.
mutande|le|Unterhose|Compro un pacco di mutande.
pigiama|il|Schlafanzug|Metto il pigiama e vado a letto.
stivali|gli|Stiefel|D'inverno porto gli stivali.
sandali|i|Sandalen|D'estate porto i sandali.
scarpe da ginnastica|le|Turnschuhe|Le scarpe da ginnastica sono comode.
felpa|la|Sweatshirt|Metto la felpa, fa fresco.
jeans|i|Jeans|Porto sempre i jeans.
tuta|la|Trainingsanzug|Per la ginnastica metto la tuta.
cravatta|la|Krawatte|Al matrimonio porto la cravatta.
giubbotto|il|Jacke (kurz)|Il giubbotto di pelle è nuovo.
canottiera|la|Unterhemd / Top|Fa caldo, metto una canottiera.
calze|le|Strümpfe|Le calze sono rotte.
tasca|la|Tasche (an Kleidung)|Ho le chiavi in tasca.
bottone|il|Knopf|Manca un bottone alla camicia.
cerniera|la|Reißverschluss|La cerniera è rotta.
cotone|il|Baumwolle|Una maglietta di cotone.
lana|la|Wolle|Un maglione di lana.
pelle|la|Leder / Haut|Una borsa di pelle.
a righe||gestreift|Una camicia a righe.
a quadri||kariert|Una gonna a quadri.
a fiori||geblümt|Un vestito a fiori.
scuro||dunkel|Preferisco i colori scuri.
elegante||elegant|Sei molto elegante stasera.
comodo||bequem|Queste scarpe sono comode.
stare bene||passen / stehen (Kleidung)|Questo colore ti sta bene.
mettersi||anziehen|Mi metto il cappotto.
togliersi||ausziehen|Togliti le scarpe!
spogliarsi||sich ausziehen|Il bambino si spoglia per il bagno.
biondo||blond|Ha i capelli biondi.
bruno||braunhaarig / dunkel|Mio fratello è bruno.
castano||(kastanien)braun (Haare)|Ho gli occhi castani.
riccio||lockig|Ha i capelli ricci.
liscio||glatt|I capelli lisci.
barba|la|Bart|Mio padre porta la barba.
baffi|i|Schnurrbart|Il nonno ha i baffi bianchi.
alto di statura||groß gewachsen|È alto di statura.
aspetto|l'|Aussehen|Ha un aspetto sano.
assomigliare||ähneln|Assomigli a tua madre.
moda|la|Mode|Lei segue la moda.
`,
"A2 – Körper & Arztbesuch": `
collo|il|Hals|Ho mal di collo.
spalla|la|Schulter|Mi fa male la spalla.
gomito|il|Ellbogen|Ho battuto il gomito.
polso|il|Handgelenk|Porto l'orologio al polso.
dito|il|Finger|Mi sono tagliato un dito.
unghia|l'|Fingernagel|Ho le unghie lunghe.
ginocchio|il|Knie|Mi fa male il ginocchio.
caviglia|la|Knöchel|Mi sono storto la caviglia.
osso|l'|Knochen|Il cane mangia un osso.
labbro|il|Lippe|Ho le labbra secche.
lingua|la|Zunge|Mostri la lingua, per favore.
gola|la|Hals / Kehle|Ho mal di gola.
petto|il|Brust|Ho un dolore al petto.
pancia|la|Bauch|Ho mal di pancia.
viso|il|Gesicht|Lavati il viso!
fronte|la|Stirn|Hai la fronte calda.
guancia|la|Wange|Un bacio sulla guancia.
mento|il|Kinn|Si è fatto male al mento.
pelle|la|Haut|Ho la pelle sensibile.
muscolo|il|Muskel|Dopo lo sport mi fanno male i muscoli.
mal di testa|il|Kopfschmerzen|Ho un forte mal di testa.
mal di denti|il|Zahnschmerzen|Ho mal di denti, vado dal dentista.
fare male||wehtun|Mi fa male la gamba.
ferita|la|Wunde|La ferita guarisce.
ferirsi||sich verletzen|Mi sono ferito giocando a calcio.
rompersi||sich brechen|Si è rotto il braccio.
gesso|il|Gips|Ho la gamba nel gesso.
nausea|la|Übelkeit|Ho la nausea.
vomitare||sich übergeben|Il bambino ha vomitato.
starnutire||niesen|Starnutisco per l'allergia.
tossire||husten|Tossisco tutta la notte.
sciroppo|lo|Sirup / Hustensaft|Prendi lo sciroppo per la tosse.
compressa|la|Tablette|Prenda una compressa dopo i pasti.
gocce|le|Tropfen|Metti le gocce negli occhi.
termometro|il|Thermometer|Il termometro segna trentotto.
ambulatorio|l'|Arztpraxis|L'ambulatorio apre alle otto.
medico di famiglia|il|Hausarzt|Chiamo il medico di famiglia.
sala d'attesa|la|Wartezimmer|Aspetto nella sala d'attesa.
paziente|il|Patient|Il paziente aspetta il dottore.
certificato medico|il|ärztliches Attest|Mi serve un certificato medico per la scuola.
`,
"A2 – Gefühle & Charakter": `
gioia|la|Freude|Che gioia vederti!
felicità|la|Glück|La felicità è nelle piccole cose.
rabbia|la|Wut|Ho tanta rabbia.
tristezza|la|Traurigkeit|Sento un po' di tristezza.
paura|la|Angst|Ho paura dei ragni.
sorpresa|la|Überraschung|Che bella sorpresa!
noia|la|Langeweile|Che noia questa lezione!
vergogna|la|Scham|Arrossisco per la vergogna.
fiducia|la|Vertrauen|Ho fiducia in te.
nervoso||nervös|Prima dell'esame sono nervoso.
preoccupato||besorgt|Sono preoccupato per il nonno.
calmo||ruhig / gelassen|Resta calmo!
sorpreso||überrascht|Sono sorpreso della notizia.
deluso||enttäuscht|Sono deluso dal film.
emozionato||aufgeregt / gerührt|Sono emozionato per il viaggio.
innamorato||verliebt|È innamorato di Giulia.
geloso||eifersüchtig|Il mio cane è geloso del gatto.
orgoglioso||stolz|Sono orgoglioso di te.
serio||ernst|Perché sei così serio?
pigro||faul|Il mio gatto è pigro.
curioso||neugierig|I bambini sono curiosi.
onesto||ehrlich|È una persona onesta.
generoso||großzügig|Mia nonna è generosa.
egoista||egoistisch|Non essere egoista!
paziente||geduldig|L'insegnante è molto paziente.
sincero||aufrichtig|Voglio una risposta sincera.
divertito||amüsiert|Ci guarda divertito.
coraggioso||mutig|Il pompiere è coraggioso.
sensibile||sensibel|È una ragazza molto sensibile.
socievole||gesellig|Marco è socievole, ha tanti amici.
ottimista||optimistisch|Sono ottimista per il futuro.
pessimista||pessimistisch|Non essere pessimista!
arrabbiarsi||sich ärgern|Mi arrabbio quando perdo.
preoccuparsi||sich Sorgen machen|Non ti preoccupare!
innamorarsi||sich verlieben|Si sono innamorati in vacanza.
spaventarsi||erschrecken|Mi sono spaventato al buio.
calmarsi||sich beruhigen|Calmati, va tutto bene.
avere nostalgia||Heimweh / Sehnsucht haben|Ho nostalgia di casa.
di buon umore||gut gelaunt|Oggi sono di buon umore.
di cattivo umore||schlecht gelaunt|Il capo è di cattivo umore.
`,
"A2 – Sport": `
pallavolo|la|Volleyball|Gioco a pallavolo a scuola.
pallacanestro|la|Basketball|La pallacanestro è veloce.
tennis|il|Tennis|Giochiamo a tennis domenica?
nuoto|il|Schwimmen (Sport)|Faccio nuoto due volte a settimana.
ciclismo|il|Radsport|Il Giro d'Italia è una gara di ciclismo.
atletica|l'|Leichtathletik|Mio fratello fa atletica.
corsa|la|Laufen / Rennen|Faccio corsa nel parco.
allenamento|l'|Training|L'allenamento è alle cinque.
allenarsi||trainieren|Mi alleno ogni giorno.
allenatore|l'|Trainer|L'allenatore è severo.
giocatore|il|Spieler|È il miglior giocatore della squadra.
gara|la|Wettkampf|Ho vinto la gara.
campionato|il|Meisterschaft|La squadra vince il campionato.
stadio|lo|Stadion|Andiamo allo stadio.
tifoso|il|Fan|Sono tifoso della Juventus.
arbitro|l'|Schiedsrichter|L'arbitro fischia.
gol|il|Tor (Treffer)|Che bel gol!
segnare||ein Tor schießen|Ha segnato due gol.
pareggiare||unentschieden spielen|Le squadre hanno pareggiato.
perdere una partita||ein Spiel verlieren|Abbiamo perso la partita.
pallone|il|Ball (Fußball)|Passa il pallone!
palla|la|Ball|La palla è nel campo.
campo|il|Feld / Platz|Il campo da calcio è bagnato.
porta|la|Tor (Fußballtor)|Il portiere sta in porta.
portiere|il|Torwart|Il portiere para il rigore.
squadra avversaria|la|gegnerische Mannschaft|La squadra avversaria è forte.
vittoria|la|Sieg|Festeggiamo la vittoria!
sconfitta|la|Niederlage|Una sconfitta amara.
medaglia|la|Medaille|Ha vinto una medaglia d'oro.
fischiare||pfeifen|L'arbitro fischia la fine.
tirare||schießen / ziehen|Tira in porta!
lanciare||werfen|Lancia la palla!
prendere||fangen / nehmen|Prendi la palla!
fare ginnastica||turnen / Gymnastik machen|Faccio ginnastica la mattina.
yoga|lo|Yoga|Lo yoga mi rilassa.
equitazione|l'|Reiten|Faccio equitazione il sabato.
pattinare||Schlittschuh / Rollschuh laufen|D'inverno pattiniamo sul ghiaccio.
sportivo||sportlich|Mia sorella è molto sportiva.
in forma||fit|Sono in forma.
stanco morto||todmüde|Dopo la partita sono stanco morto.
`,
"A2 – Medien & Technik": `
cellulare|il|Handy|Il cellulare è scarico.
messaggio|il|Nachricht|Ti mando un messaggio.
email|l'|E-Mail|Ho ricevuto un'email.
internet|l'|Internet|Cerco su internet.
sito|il|Webseite|Il sito della scuola è nuovo.
schermo|lo|Bildschirm|Lo schermo è rotto.
tastiera|la|Tastatur|La tastiera è nuova.
stampante|la|Drucker|La stampante non funziona.
password|la|Passwort|Non dire a nessuno la tua password!
scaricare||herunterladen|Scarico un'app.
caricare||hochladen / laden|Carico il telefono.
cliccare||klicken|Clicca qui!
inviare||senden|Invia il messaggio.
video|il|Video|Guarda questo video!
giornale|il|Zeitung|Leggo il giornale.
rivista|la|Zeitschrift|Compro una rivista.
notizia|la|Nachricht / Neuigkeit|Ho una bella notizia!
telegiornale|il|Fernsehnachrichten|Guardo il telegiornale alle otto.
programma|il|Programm / Sendung|Il programma comincia alle nove.
canale|il|Sender / Kanal|Cambia canale!
pubblicità|la|Werbung|Quanta pubblicità in TV!
batteria|la|Akku / Batterie|La batteria è quasi scarica.
caricabatterie|il|Ladegerät|Hai un caricabatterie?
scarico||leer (Akku)|Il telefono è scarico.
accendere il computer||den Computer einschalten|Accendo il computer.
connessione|la|Verbindung|La connessione è lenta.
wifi|il|WLAN|Qual è la password del wifi?
chiamata|la|Anruf|Ho una chiamata persa.
videochiamata|la|Videoanruf|Facciamo una videochiamata.
cuffie|le|Kopfhörer|Ascolto musica con le cuffie.
telecomando|il|Fernbedienung|Dov'è il telecomando?
social|i|soziale Netzwerke|Passa troppo tempo sui social.
pubblicare||veröffentlichen / posten|Pubblico una foto.
condividere||teilen|Condividi il link!
salvare||speichern / retten|Salva il file!
cancellare||löschen|Ho cancellato la foto.
stampare||drucken|Devo stampare il biglietto.
file|il|Datei|Apri il file.
cartella|la|Ordner|Metto il file nella cartella.
aggiornare||aktualisieren|Aggiorna l'app.
`,
"A2 – Natur & Umwelt": `
foresta|la|Wald (groß)|La foresta è enorme.
prato|il|Wiese|Facciamo un picnic sul prato.
foglia|la|Blatt|In autunno cadono le foglie.
ramo|il|Ast|L'uccello è sul ramo.
radice|la|Wurzel|Le radici dell'albero sono profonde.
roccia|la|Fels|Saliamo sulle rocce.
deserto|il|Wüste|Il deserto è caldo.
vulcano|il|Vulkan|L'Etna è un vulcano.
grotta|la|Höhle|Visitiamo una grotta.
cascata|la|Wasserfall|Che bella cascata!
oceano|l'|Ozean|L'oceano Atlantico.
clima|il|Klima|Il clima è mite.
ambiente|l'|Umwelt|Proteggiamo l'ambiente.
inquinamento|l'|Verschmutzung|L'inquinamento è un problema.
riciclare||recyceln|Ricicliamo la plastica.
rifiuti|i|Abfall|Separiamo i rifiuti.
plastica|la|Plastik|Usa meno plastica.
vetro|il|Glas (Material)|Una bottiglia di vetro.
carta|la|Papier|Ricicla la carta.
energia|l'|Energie|Risparmiamo energia.
risparmiare acqua||Wasser sparen|Chiudi il rubinetto per risparmiare acqua.
proteggere||schützen|Dobbiamo proteggere gli animali.
terremoto|il|Erdbeben|C'è stato un terremoto.
alluvione|l'|Überschwemmung|L'alluvione ha distrutto le case.
siccità|la|Dürre|Quest'estate c'è siccità.
caldo afoso|il|schwüle Hitze|Che caldo afoso oggi!
fulmine|il|Blitz|Il fulmine ha colpito l'albero.
tuono|il|Donner|Senti il tuono?
grandine|la|Hagel|La grandine ha rovinato l'orto.
tempesta|la|Sturm|Stanotte c'è una tempesta.
previsioni del tempo|le|Wettervorhersage|Le previsioni del tempo dicono sole.
orto|l'|Gemüsegarten|Il nonno ha un orto.
seme|il|Samen|Pianto i semi.
raccogliere||ernten / sammeln|Raccogliamo le mele.
innaffiare||gießen|Innaffio i fiori.
selvatico||wild|Un animale selvatico.
inquinato||verschmutzt|Il fiume è inquinato.
pulire la spiaggia||den Strand säubern|Puliamo la spiaggia insieme.
cambiamento climatico|il|Klimawandel|Il cambiamento climatico è un problema globale.
pannello solare|il|Solarmodul|Sul tetto ci sono pannelli solari.
`,
"A2 – Tiere": `
pecora|la|Schaf|La pecora dà la lana.
capra|la|Ziege|La capra mangia l'erba.
gallina|la|Huhn|La gallina fa le uova.
gallo|il|Hahn|Il gallo canta la mattina.
coniglio|il|Kaninchen|Ho un coniglio bianco.
topo|il|Maus|Il gatto insegue il topo.
lupo|il|Wolf|Il lupo vive nel bosco.
volpe|la|Fuchs|La volpe è furba.
orso|l'|Bär|L'orso dorme in inverno.
leone|il|Löwe|Il leone è il re degli animali.
tigre|la|Tiger|La tigre è a strisce.
elefante|l'|Elefant|L'elefante è grande.
scimmia|la|Affe|La scimmia mangia una banana.
giraffa|la|Giraffe|La giraffa ha il collo lungo.
serpente|il|Schlange|Ho paura dei serpenti.
farfalla|la|Schmetterling|Una farfalla colorata.
ape|l'|Biene|L'ape fa il miele.
mosca|la|Fliege|C'è una mosca in cucina.
zanzara|la|Mücke|Una zanzara mi ha punto.
ragno|il|Spinne|Il ragno fa la ragnatela.
formica|la|Ameise|Le formiche lavorano insieme.
asino|l'|Esel|L'asino porta il carico.
anatra|l'|Ente|Le anatre nuotano nel lago.
tartaruga|la|Schildkröte|La tartaruga è lenta.
delfino|il|Delfin|I delfini sono intelligenti.
balena|la|Wal|La balena è enorme.
squalo|lo|Hai|Lo squalo vive nel mare.
pappagallo|il|Papagei|Il pappagallo parla!
criceto|il|Hamster|Il mio criceto si chiama Pallino.
cucciolo|il|Welpe / Jungtier|Che cucciolo carino!
zoo|lo|Zoo|Andiamo allo zoo.
coda|la|Schwanz|Il cane muove la coda.
zampa|la|Pfote|Il gatto ha una zampa ferita.
ala|l'|Flügel|L'uccello apre le ali.
piuma|la|Feder|Una piuma bianca.
nido|il|Nest|Gli uccelli fanno il nido.
abbaiare||bellen|Il cane abbaia.
miagolare||miauen|Il gatto miagola.
dare da mangiare||füttern|Do da mangiare al gatto.
portare a spasso il cane||mit dem Hund Gassi gehen|Porto a spasso il cane.
`
});

add({
"A2 – Feste & Traditionen": `
Carnevale|il|Karneval|A Carnevale ci mascheriamo.
Ferragosto|il|Mariä Himmelfahrt (15. August)|A Ferragosto tutti vanno al mare.
Epifania|l'|Dreikönigstag|L'Epifania tutte le feste porta via.
vigilia|la|Vorabend|La vigilia di Natale ceniamo con la famiglia.
matrimonio|il|Hochzeit|Il matrimonio è a giugno.
sposarsi||heiraten|Si sposano in chiesa.
sposo|lo|Bräutigam|Lo sposo è emozionato.
sposa|la|Braut|La sposa è bellissima.
battesimo|il|Taufe|Il battesimo del bambino è domenica.
anniversario|l'|Jahrestag|Oggi è il nostro anniversario.
invito|l'|Einladung|Ho ricevuto un invito.
invitato|l'|Gast (eingeladen)|Gli invitati arrivano alle otto.
ospite|l'|Gast|Abbiamo ospiti a cena.
candela|la|Kerze|Soffia sulle candeline!
fuochi d'artificio|i|Feuerwerk|A mezzanotte ci sono i fuochi d'artificio.
brindare||anstoßen|Brindiamo agli sposi!
cin cin||prost|Cin cin, alla salute!
alla salute||zum Wohl|Alla salute!
albero di Natale|l'|Weihnachtsbaum|Facciamo l'albero di Natale.
presepe|il|Krippe|Il presepe è sotto l'albero.
Babbo Natale|il|Weihnachtsmann|Babbo Natale porta i regali.
uovo di Pasqua|l'|Osterei|C'è una sorpresa nell'uovo di Pasqua.
maschera|la|Maske|Una maschera veneziana.
costume|il|Kostüm|Che costume metti a Carnevale?
tradizione|la|Tradition|È una vecchia tradizione.
festa nazionale|la|Nationalfeiertag|Il 2 giugno è festa nazionale.
giorno festivo|il|Feiertag|Domenica è un giorno festivo.
processione|la|Prozession|La processione passa in piazza.
sagra|la|Dorffest (mit Essen)|Andiamo alla sagra della castagna.
fiera|la|Messe / Jahrmarkt|C'è una fiera in città.
tanti auguri||herzlichen Glückwunsch|Tanti auguri di buon compleanno!
buone feste||schöne Feiertage|Buone feste a tutti!
fare gli auguri||gratulieren|Faccio gli auguri alla nonna.
fare una sorpresa||eine Überraschung machen|Facciamo una sorpresa a papà.
spegnere le candeline||die Kerzen ausblasen|Spegni le candeline ed esprimi un desiderio!
torta di compleanno|la|Geburtstagskuchen|La torta di compleanno è al cioccolato.
celebrare||feiern|Celebriamo la vittoria.
religioso||religiös|È una festa religiosa.
pellegrinaggio|il|Wallfahrt|Il pellegrinaggio a Roma.
desiderio|il|Wunsch|Esprimi un desiderio!
`,
"A2 – Restaurant & Café": `
tavolo per due||Tisch für zwei|Un tavolo per due, per favore.
ordinazione|l'|Bestellung|Prendo l'ordinazione.
coperto|il|Gedeck(gebühr)|Il coperto costa due euro.
mancia|la|Trinkgeld|Lasciamo la mancia.
porzione|la|Portion|Una porzione abbondante.
primo piatto|il|erster Gang (Pasta)|Come primo piatto prendo le lasagne.
secondo piatto|il|Hauptgang|Per secondo piatto prendo il pesce.
dessert|il|Nachtisch|Per dessert il tiramisù.
bistecca|la|Steak|Una bistecca ai ferri.
ai ferri||gegrillt|Pesce ai ferri.
al forno||überbacken / aus dem Ofen|Lasagne al forno.
cotto||gekocht / gar|La carne è ben cotta.
crudo||roh|Prosciutto crudo.
al sangue||blutig (Steak)|La bistecca al sangue.
piccante||scharf|Questo sugo è piccante.
saporito||schmackhaft|Un piatto saporito.
vegetariano||vegetarisch|Avete un piatto vegetariano?
vegano||vegan|Sono vegano.
specialità|la|Spezialität|Qual è la specialità della casa?
piatto del giorno|il|Tagesgericht|Il piatto del giorno è la zuppa.
vino della casa|il|Hauswein|Un quarto di vino della casa.
acqua frizzante|l'|Sprudelwasser|Una bottiglia di acqua frizzante.
acqua naturale|l'|stilles Wasser|Preferisco l'acqua naturale.
caffè macchiato|il|Espresso mit Milchschaum|Un caffè macchiato, per favore.
cappuccino|il|Cappuccino|Un cappuccino e un cornetto.
spremuta|la|frisch gepresster Saft|Una spremuta d'arancia.
aperitivo|l'|Aperitif|Prendiamo un aperitivo?
tramezzino|il|Sandwich (dreieckig)|Un tramezzino al tonno.
panino|il|Brötchen / belegtes Brötchen|Un panino al prosciutto.
gnocchi|gli|Gnocchi|Gli gnocchi al pomodoro.
lasagne|le|Lasagne|Le lasagne della nonna.
tiramisù|il|Tiramisu|Il tiramisù è buonissimo.
frutti di mare|i|Meeresfrüchte|Spaghetti ai frutti di mare.
cameriera|la|Kellnerin|La cameriera porta il conto.
prenotare un tavolo||einen Tisch reservieren|Ho prenotato un tavolo per le otto.
Buon appetito!||Guten Appetit!|Buon appetito a tutti!
è tutto ok?||ist alles in Ordnung?|È tutto ok? Sì, buonissimo!
da portare via||zum Mitnehmen|Una pizza da portare via.
self-service|il|Selbstbedienung|È un ristorante self-service.
sazio||satt|Grazie, sono sazio.
`,
"A2 – Küche & Kochen": `
ricetta di cucina|la|Kochrezept|È la ricetta di cucina della nonna.
ingrediente|l'|Zutat|Quali sono gli ingredienti?
tagliare||schneiden|Taglio le verdure.
mescolare||umrühren / mischen|Mescola bene!
friggere||frittieren|Friggo le patatine.
bollire||kochen (sieden)|L'acqua bolle.
cuocere||kochen / garen|Cuocere la pasta per dieci minuti.
arrostire||braten / rösten|Arrostiamo la carne.
versare||gießen / einschenken|Versa l'acqua nel bicchiere.
assaggiare||probieren / kosten|Assaggia il sugo!
aggiungere||hinzufügen|Aggiungi un po' di sale.
sbucciare||schälen|Sbuccio le patate.
grattugiare||reiben|Grattugia il parmigiano.
riscaldare||aufwärmen|Riscaldo la minestra.
cucchiaino|il|Teelöffel|Un cucchiaino di zucchero.
ciotola|la|Schüssel|Metti la farina nella ciotola.
vassoio|il|Tablett|Porta il vassoio in sala.
tagliere|il|Schneidebrett|Taglia il pane sul tagliere.
mestolo|il|Schöpfkelle|Prendi il mestolo per la zuppa.
grattugia|la|Reibe|La grattugia è nel cassetto.
coperchio|il|Deckel|Metti il coperchio sulla pentola.
fornello|il|Herdplatte|Accendi il fornello.
microonde|il|Mikrowelle|Scaldo il latte nel microonde.
farina|la|Mehl|Un chilo di farina.
lievito|il|Hefe|Il lievito fa crescere l'impasto.
sugo|il|Soße|Il sugo al pomodoro.
brodo|il|Brühe|Un brodo di pollo.
basilico|il|Basilikum|Pasta con il basilico.
prezzemolo|il|Petersilie|Un po' di prezzemolo.
rosmarino|il|Rosmarin|Patate al rosmarino.
peperoncino|il|Chili|Aglio, olio e peperoncino.
parmigiano|il|Parmesan|Una spolverata di parmigiano.
mozzarella|la|Mozzarella|Pizza con la mozzarella.
tonno|il|Thunfisch|Insalata con il tonno.
riso|il|Reis|Il riso per il risotto.
melanzana|la|Aubergine|Parmigiana di melanzane.
peperone|il|Paprika (Gemüse)|Peperoni ripieni.
fungo|il|Pilz|Risotto ai funghi.
pesca|la|Pfirsich|Una pesca matura.
ciliegia|la|Kirsche|Le ciliegie sono rosse.
`,
"A2 – Haushalt & Wohnen": `
stirare||bügeln|Stiro le camicie.
spolverare||Staub wischen|Spolvero i mobili.
passare l'aspirapolvere||staubsaugen|Passo l'aspirapolvere in salotto.
rifare il letto||das Bett machen|Rifai il letto ogni mattina!
apparecchiare||den Tisch decken|Apparecchia la tavola, per favore.
sparecchiare||den Tisch abräumen|Dopo cena sparecchio io.
lavare i piatti||abwaschen|Chi lava i piatti stasera?
buttare la spazzatura||den Müll rausbringen|Butta la spazzatura, per favore!
stendere i panni||Wäsche aufhängen|Stendo i panni in terrazzo.
riparare||reparieren|Papà ripara la sedia.
trasloco|il|Umzug|Il trasloco è sabato.
traslocare||umziehen|Traslochiamo a Milano.
arredare||einrichten|Arrediamo la nuova casa.
mobile|il|Möbelstück|Un mobile antico.
comodino|il|Nachttisch|Il libro è sul comodino.
scrivania|la|Schreibtisch|Studio alla scrivania.
poltrona|la|Sessel|Mi siedo in poltrona.
mensola|la|Regalbrett|Metti i libri sulla mensola.
stanza|la|Zimmer|La casa ha quattro stanze.
camera da letto|la|Schlafzimmer|La camera da letto è grande.
cameretta|la|Kinderzimmer|La cameretta dei bambini è colorata.
balcone|il|Balkon|Prendo il sole sul balcone.
finestrino|il|Fenster (Auto, Zug)|Apri il finestrino!
presa|la|Steckdose|Dov'è la presa?
interruttore|l'|Lichtschalter|L'interruttore è vicino alla porta.
lampadina|la|Glühbirne|Cambia la lampadina.
cestino|il|Papierkorb / Korb|Butta la carta nel cestino.
ferro da stiro|il|Bügeleisen|Il ferro da stiro è caldo.
asciugatrice|l'|Wäschetrockner|Metto i vestiti nell'asciugatrice.
bucato|il|Wäsche (zu waschen)|Oggi faccio il bucato.
disordine|il|Unordnung|Che disordine in camera!
ordinato||ordentlich|La tua stanza è ordinata.
disordinato||unordentlich|Mio fratello è disordinato.
casalinga|la|Hausfrau|Mia nonna era casalinga.
faccende di casa|le|Hausarbeit|Facciamo le faccende di casa insieme.
piano terra|il|Erdgeschoss|Abito al piano terra.
primo piano|il|erster Stock|L'ufficio è al primo piano.
in affitto||zur Miete|Vivo in affitto.
villetta|la|Einfamilienhaus|Abitano in una villetta con giardino.
monolocale|il|Einzimmerwohnung|Affitto un monolocale in centro.
`,
"A2 – Ämter & Post": `
ufficio postale|l'|Postamt|L'ufficio postale chiude alle due.
francobollo|il|Briefmarke|Un francobollo per la Germania.
busta|la|Umschlag|Metto la lettera nella busta.
pacchetto|il|Päckchen|Spedisco un pacchetto.
raccomandata|la|Einschreiben|Mando la lettera per raccomandata.
mittente|il|Absender|Scrivi il mittente sulla busta.
destinatario|il|Empfänger|Il destinatario non è a casa.
codice postale|il|Postleitzahl|Qual è il codice postale?
modulo|il|Formular|Compila il modulo.
compilare||ausfüllen|Compilo il modulo con i miei dati.
firmare||unterschreiben|Firmi qui, per favore.
firma|la|Unterschrift|Manca la firma.
documento|il|Dokument / Ausweis|Ha un documento?
carta d'identità|la|Personalausweis|Ecco la mia carta d'identità.
permesso|il|Erlaubnis / Genehmigung|Ho il permesso dei genitori.
comune|il|Gemeinde / Rathaus|Vado in comune per un documento.
municipio|il|Rathaus|Il municipio è in piazza.
sportello|lo|Schalter|Vada allo sportello numero tre.
fare la fila||Schlange stehen|Facciamo la fila allo sportello.
numero di telefono|il|Telefonnummer|Mi dai il tuo numero di telefono?
data di nascita|la|Geburtsdatum|Qual è la tua data di nascita?
luogo di nascita|il|Geburtsort|Luogo di nascita: Roma.
stato civile|lo|Familienstand|Stato civile: sposato.
celibe||ledig (Mann)|Mio cugino è celibe.
nubile||ledig (Frau)|Mia zia è nubile.
scadere||ablaufen (Frist)|Il passaporto scade a maggio.
scadenza|la|Ablaufdatum / Frist|Controlla la data di scadenza.
rinnovare||erneuern / verlängern|Devo rinnovare il passaporto.
ufficio oggetti smarriti|l'|Fundbüro|Chiedi all'ufficio oggetti smarriti.
denuncia|la|Anzeige|Faccio denuncia alla polizia.
perdere il portafoglio||das Portemonnaie verlieren|Ho perso il portafoglio sul treno.
consegnare||abgeben / liefern|Consegno i documenti.
spedizione|la|Versand|La spedizione è gratuita.
corriere|il|Kurier / Paketdienst|Il corriere arriva domani.
ritirare||abholen|Ritiro il pacco in posta.
modulo d'iscrizione|il|Anmeldeformular|Compila il modulo d'iscrizione.
iscriversi||sich anmelden|Mi iscrivo al corso di italiano.
appuntamento in comune|l'|Termin im Rathaus|Ho un appuntamento in comune alle dieci.
codice fiscale|il|Steuernummer (Italien)|In Italia serve il codice fiscale.
tessera sanitaria|la|Krankenversicherungskarte|Porta la tessera sanitaria dal medico.
`,
"A2 – Familie & Beziehungen": `
suocero|il|Schwiegervater|Il suocero è simpatico.
suocera|la|Schwiegermutter|La suocera cucina benissimo.
cognato|il|Schwager|Mio cognato lavora a Torino.
cognata|la|Schwägerin|Mia cognata è dottoressa.
genero|il|Schwiegersohn|Il genero aiuta in casa.
nuora|la|Schwiegertochter|La nuora è molto gentile.
gemello|il|Zwilling|Ho un fratello gemello.
parenti|i|Verwandte|A Natale vengono tutti i parenti.
genitori|i|Eltern|I miei genitori sono in vacanza.
coppia|la|Paar|Sono una bella coppia.
divorzio|il|Scheidung|Hanno chiesto il divorzio.
divorziato||geschieden|Mio zio è divorziato.
separato||getrennt|I suoi genitori sono separati.
sposato||verheiratet|Sono sposato da dieci anni.
single||Single|Sono single.
vedovo||verwitwet|Il nonno è vedovo.
conoscente|il|Bekannter|È solo un conoscente.
amicizia|l'|Freundschaft|La nostra amicizia è importante.
amore|l'|Liebe|L'amore non ha età.
rapporto|il|Beziehung / Verhältnis|Ho un buon rapporto con mia sorella.
litigare||streiten|I fratelli litigano spesso.
fare pace||sich versöhnen|Dopo la lite facciamo pace.
lite|la|Streit|Una lite tra vicini.
fidarsi||vertrauen|Mi fido di te.
mancare||fehlen / vermissen|Mi manchi tanto.
crescere||aufwachsen / wachsen|Sono cresciuto in campagna.
educare||erziehen|Educare i figli non è facile.
neonato|il|Neugeborenes|Il neonato dorme.
gravidanza|la|Schwangerschaft|La gravidanza dura nove mesi.
incinta||schwanger|Mia sorella è incinta.
infanzia|l'|Kindheit|Ho avuto un'infanzia felice.
gioventù|la|Jugend|In gioventù viaggiavo molto.
pensionato|il|Rentner|Il nonno è pensionato.
andare in pensione||in Rente gehen|Mio padre va in pensione l'anno prossimo.
fidanzarsi||sich verloben|Si sono fidanzati a Natale.
uscire insieme||miteinander gehen / ausgehen|Escono insieme da un mese.
lasciarsi||sich trennen|Si sono lasciati.
andare d'accordo||sich verstehen|Vado d'accordo con i miei genitori.
assomigliarsi||sich ähneln|I due fratelli si assomigliano.
prendersi cura di||sich kümmern um|Mi prendo cura del nonno.
`,
"A2 – Verben 1": `
accompagnare||begleiten|Ti accompagno alla stazione.
affittare||mieten / vermieten|Affittiamo un appartamento al mare.
raccontare||erzählen|Raccontami una storia!
regalare||schenken|Ti regalo un libro.
ringraziare||danken|Ti ringrazio per l'aiuto.
scherzare||scherzen|Non arrabbiarti, scherzavo!
sbagliare||sich irren / falsch machen|Scusa, ho sbagliato numero.
sognare||träumen|Stanotte ho sognato il mare.
spostare||verschieben / verstellen|Spostiamo il tavolo.
succedere||passieren|Cosa è successo?
offrire||anbieten / spendieren|Ti offro un caffè.
permettere||erlauben|I genitori non mi permettono di uscire.
promettere||versprechen|Ti prometto che vengo.
nascondere||verstecken|Il bambino nasconde il giocattolo.
lamentarsi||sich beschweren|Si lamenta sempre del tempo.
trasferirsi||umziehen (Wohnort)|Mi trasferisco a Roma.
abituarsi||sich gewöhnen|Mi abituo alla nuova scuola.
accorgersi||bemerken|Non mi sono accorto dell'errore.
ammettere||zugeben|Ammetto di aver sbagliato.
annunciare||ankündigen|Annunciano il ritardo del treno.
attaccare||befestigen / angreifen|Attacca il poster al muro.
avvisare||benachrichtigen / warnen|Avvisami quando arrivi.
cadere dalle nuvole||aus allen Wolken fallen|Quando l'ho saputo sono caduto dalle nuvole.
chiedere scusa||sich entschuldigen|Ti chiedo scusa.
consigliare||raten / empfehlen|Ti consiglio questo ristorante.
controllare||kontrollieren|Controllo i compiti.
correggere||korrigieren|L'insegnante corregge il tema.
costruire||bauen|Costruiamo una casa sull'albero.
dipendere||abhängen|Dipende dal tempo.
discutere||diskutieren|Discutiamo del problema.
distruggere||zerstören|Il terremoto ha distrutto il paese.
divertire||unterhalten / Spaß machen|Il film mi ha divertito.
evitare||vermeiden|Evita lo zucchero.
fermare||anhalten (etwas)|Ferma la macchina!
funzionare||funktionieren|La lavatrice non funziona.
immaginare||sich vorstellen|Immagina una spiaggia deserta.
indossare||tragen (Kleidung)|Indossa un vestito rosso.
invitare a cena||zum Abendessen einladen|Vi invito a cena sabato.
lavorare sodo||hart arbeiten|Per l'esame lavoro sodo.
`,
"A2 – Verben 2": `
pesare||wiegen|Quanto pesa la valigia?
piegare||falten / biegen|Piego i vestiti.
pregare||beten / bitten|La nonna prega in chiesa.
prestare attenzione||aufpassen|Presta attenzione alla lezione!
prevedere||vorhersehen|Il meteo prevede pioggia.
proporre||vorschlagen|Propongo di andare al mare.
proteggersi||sich schützen|Proteggiti dal sole!
raggiungere||erreichen|Raggiungiamo la cima in due ore.
realizzare||verwirklichen|Ha realizzato il suo sogno.
rilassarsi||sich entspannen|In vacanza mi rilasso.
riempire||füllen|Riempio la bottiglia d'acqua.
rimandare||verschieben (zeitlich)|Rimandiamo la gita a domenica.
rispettare||respektieren|Rispetta le regole!
rompere||zerbrechen / kaputt machen|Ho rotto un bicchiere.
salvare la vita||das Leben retten|Il medico gli ha salvato la vita.
sembrare||scheinen|Sembra stanco.
servire||dienen / brauchen|A cosa serve questo?
sistemare||ordnen / unterbringen|Sistemo i libri sullo scaffale.
soffrire||leiden|Soffre di mal di testa.
sorprendere||überraschen|Il regalo mi ha sorpreso.
sperare||hoffen|Spero di vederti presto.
spingere||schieben / drücken|Spingi la porta!
suggerire||vorschlagen / vorsagen|Non suggerire al compagno!
superare||bestehen / überholen|Ho superato l'esame!
svegliare||wecken|Svegliami alle sette.
tirare fuori||herausholen|Tira fuori il quaderno.
trascorrere||verbringen|Trascorriamo le vacanze in Puglia.
uccidere||töten|Il gatto ha ucciso un topo.
unire||verbinden / vereinen|Unisci i due pezzi.
vietare||verbieten|È vietato fumare.
volerci||brauchen (Zeit)|Ci vuole un'ora per arrivare.
fare finta||so tun als ob|Fa finta di dormire.
fare attenzione||aufpassen|Fai attenzione alla strada!
fare una domanda||eine Frage stellen|Posso fare una domanda?
fare un favore||einen Gefallen tun|Mi fai un favore?
dare fastidio||stören|La musica ti dà fastidio?
avere intenzione di||vorhaben|Ho intenzione di studiare medicina.
`,
"A2 – Adjektive & Adverbien": `
scomodo||unbequem|Il letto è scomodo.
rumoroso||laut|La strada è rumorosa.
silenzioso||leise / still|Una biblioteca silenziosa.
moderno||modern|Un appartamento moderno.
antico||antik / alt|Una città antica.
pericoloso||gefährlich|Questa strada è pericolosa.
sicuro||sicher|Qui sei al sicuro.
utile||nützlich|Un consiglio utile.
inutile||nutzlos|È inutile piangere.
gratuito||kostenlos|Il corso è gratuito.
morbido||weich|Un cuscino morbido.
duro||hart|Il pane è duro.
amaro||bitter|Il caffè senza zucchero è amaro.
insipido||fade|La minestra è insipida.
maturo||reif|Le banane sono mature.
perfetto||perfekt|È perfetto!
strano||seltsam|Che rumore strano!
normale||normal|È normale.
speciale||besonders|Oggi è un giorno speciale.
necessario||notwendig|Non è necessario.
pubblico||öffentlich|Un parco pubblico.
privato||privat|Questa è una spiaggia privata.
quindi||also / deshalb|Piove, quindi resto a casa.
però||aber / jedoch|È caro, però è buono.
invece||stattdessen / dagegen|Io bevo tè, lui invece caffè.
mentre||während|Mentre cucino, ascolto la radio.
se||wenn / ob|Se piove, restiamo a casa.
appena||sobald / gerade erst|Appena arrivo, ti chiamo.
finalmente||endlich|Finalmente sei arrivato!
purtroppo||leider|Purtroppo non posso venire.
forse||vielleicht|Forse domani piove.
davvero||wirklich|Davvero? Non ci credo!
abbastanza||ziemlich / genug|Sono abbastanza stanco.
quasi||fast|È quasi mezzanotte.
soltanto||nur|Ho soltanto cinque euro.
insieme||zusammen|Studiamo insieme.
da solo||allein|Vivo da solo.
velocemente||schnell (Adverb)|Parla velocemente.
lentamente||langsam (Adverb)|Parli lentamente, per favore.
`
});
add({
"A2 – Lebensmittel": `
melone|il|Melone|Prosciutto e melone.
anguria|l'|Wassermelone|D'estate mangiamo l'anguria.
albicocca|l'|Aprikose|Marmellata di albicocche.
prugna|la|Pflaume|Le prugne sono dolci.
ananas|l'|Ananas|Un succo di ananas.
kiwi|il|Kiwi|Il kiwi ha tanta vitamina C.
noce|la|Walnuss|Una torta con le noci.
mandorla|la|Mandel|Biscotti alle mandorle.
nocciola|la|Haselnuss|Gelato alla nocciola.
lattuga|la|Kopfsalat|Lavo la lattuga.
cetriolo|il|Gurke|Insalata di cetrioli.
zucca|la|Kürbis|Risotto alla zucca.
cavolo|il|Kohl|Il cavolo è buono in inverno.
broccoli|i|Brokkoli|Pasta con i broccoli.
sedano|il|Sellerie|Il sedano per il brodo.
lenticchie|le|Linsen|A Capodanno si mangiano le lenticchie.
ceci|i|Kichererbsen|Pasta e ceci.
mais|il|Mais|Insalata con il mais.
oliva|l'|Olive|Olive verdi e nere.
salsiccia|la|Bratwurst|Salsiccia alla griglia.
vitello|il|Kalb(fleisch)|Una cotoletta di vitello.
agnello|l'|Lamm|A Pasqua mangiamo l'agnello.
tacchino|il|Truthahn / Pute|Petto di tacchino.
gamberi|i|Garnelen|Risotto ai gamberi.
salmone|il|Lachs|Salmone affumicato.
yogurt|lo|Joghurt|Uno yogurt alla fragola.
ricotta|la|Ricotta|Ravioli di ricotta.
grissini|i|Grissini|Grissini con il prosciutto.
crackers|i|Cracker|Un pacchetto di crackers.
cereali|i|Müsli / Getreide|A colazione mangio i cereali.
farina integrale|la|Vollkornmehl|Pane di farina integrale.
surgelati|i|Tiefkühlkost|I surgelati sono nel freezer.
scatoletta|la|Konserve(ndose)|Una scatoletta di tonno.
spezie|le|Gewürze|Le spezie danno sapore.
cannella|la|Zimt|Una torta alla cannella.
vaniglia|la|Vanille|Gelato alla vaniglia.
caramella|la|Bonbon|Vuoi una caramella?
patatine|le|Pommes / Chips|Hamburger e patatine.
merenda|la|Zwischenmahlzeit|Per merenda mangio una mela.
pasto|il|Mahlzeit|Tre pasti al giorno.
`,
"A2 – Stadt & Dienstleistungen": `
lavanderia|la|Wäscherei|Porto la giacca in lavanderia.
tintoria|la|Reinigung|Ritiro il cappotto in tintoria.
ferramenta|la|Eisenwarenladen|Compro le viti in ferramenta.
cartoleria|la|Schreibwarenladen|Compro un quaderno in cartoleria.
tabaccheria|la|Tabakladen|I biglietti dell'autobus si comprano in tabaccheria.
fioraio|il|Blumenhändler|Compro le rose dal fioraio.
ottico|l'|Optiker|Vado dall'ottico per gli occhiali.
calzolaio|il|Schuhmacher|Il calzolaio ripara le scarpe.
barbiere|il|Herrenfriseur|Mio padre va dal barbiere.
estetista|l'|Kosmetikerin|Ho un appuntamento dall'estetista.
veterinario|il|Tierarzt|Porto il cane dal veterinario.
asilo|l'|Kindergarten|Il bambino va all'asilo.
cimitero|il|Friedhof|Il cimitero è fuori città.
caserma|la|Kaserne / Wache|La caserma dei pompieri.
questura|la|Polizeipräsidium|Vado in questura per il passaporto.
tribunale|il|Gericht|Il tribunale è in centro.
carcere|il|Gefängnis|Il carcere è fuori città.
periferia|la|Stadtrand|Abito in periferia.
borgo|il|kleiner Ort / Altstadtviertel|Un borgo medievale.
paesino|il|Dörfchen|Mia nonna vive in un paesino.
abitante|l'|Einwohner|La città ha centomila abitanti.
cittadino|il|Bürger|I cittadini votano.
grattacielo|il|Hochhaus|A Milano ci sono grattacieli.
cantiere|il|Baustelle|C'è un cantiere davanti a casa.
lampione|il|Straßenlaterne|Il lampione è spento.
cestino dei rifiuti|il|Mülleimer|Butta la carta nel cestino dei rifiuti.
bidone|il|Tonne|Il bidone della plastica è giallo.
rumore|il|Lärm / Geräusch|C'è troppo rumore in città.
illuminato||beleuchtet|La piazza è illuminata di sera.
affollato||überfüllt|L'autobus è affollato.
deserto||menschenleer|Ad agosto la città è deserta.
vivace||lebhaft|È una città vivace.
servizio|il|Dienstleistung / Service|Il servizio è ottimo.
orario continuato|l'|durchgehende Öffnungszeit|La banca ha l'orario continuato.
chiuso per pranzo||mittags geschlossen|Il negozio è chiuso per pranzo.
prendere un appuntamento||einen Termin vereinbaren|Prendo un appuntamento dal dentista.
fare una commissione||eine Besorgung machen|Esco a fare una commissione.
indicazione|l'|Wegbeschreibung / Hinweis|Mi dà un'indicazione per la stazione?
perdersi||sich verlaufen|Mi sono perso in centro.
mappa della città|la|Stadtplan|Hai una mappa della città?
`,
"A2 – Kultur & Ausgehen": `
mostra|la|Ausstellung|Visitiamo una mostra di Picasso.
spettacolo|lo|Vorstellung / Show|Lo spettacolo inizia alle nove.
biglietteria|la|Kasse (Tickets)|Compro i biglietti in biglietteria.
posto a sedere|il|Sitzplatz|Non ci sono più posti a sedere.
fila (al cinema)|la|Reihe|Siamo in quinta fila.
palco|il|Bühne / Loge|L'attore sale sul palco.
pubblico|il|Publikum|Il pubblico applaude.
applaudire||klatschen|Applaudiamo alla fine.
opera|l'|Oper / Werk|Andiamo all'opera all'Arena di Verona.
balletto|il|Ballett|Il balletto è elegante.
orchestra|l'|Orchester|L'orchestra suona Verdi.
regista|il|Regisseur|Il regista ha vinto un premio.
attrice|l'|Schauspielerin|Un'attrice molto brava.
trama|la|Handlung|La trama del film è complicata.
sottotitoli|i|Untertitel|Guardo il film con i sottotitoli.
scrittore|lo|Schriftsteller|È uno scrittore famoso.
poesia|la|Gedicht / Poesie|Leggo una poesia.
pittore|il|Maler|Un pittore del Rinascimento.
quadro famoso|il|berühmtes Gemälde|Il museo ha un quadro famoso.
scultura|la|Skulptur|Una scultura di marmo.
discoteca|la|Disko|Il sabato andiamo in discoteca.
locale|il|Lokal|Un locale con musica dal vivo.
musica dal vivo|la|Livemusik|Stasera c'è musica dal vivo.
uscire la sera||abends ausgehen|Esci stasera?
fare tardi||spät nach Hause kommen|Non fare tardi!
appuntamento|l'|Verabredung|Ho un appuntamento con Sara.
darsi appuntamento||sich verabreden|Ci diamo appuntamento in piazza.
divertimento|il|Spaß / Vergnügen|Buon divertimento!
ingresso|l'|Eintritt|L'ingresso costa otto euro.
gratuito per i bambini||kostenlos für Kinder|L'ingresso è gratuito per i bambini.
festival|il|Festival|Il festival del cinema di Venezia.
spettatore|lo|Zuschauer|Ci sono mille spettatori.
recensione|la|Kritik / Rezension|Ho letto una buona recensione.
consigliare un film||einen Film empfehlen|Mi consigli un film?
noleggiare un film||einen Film ausleihen|Noleggiamo un film per stasera.
circo|il|Zirkus|I bambini vanno al circo.
parco divertimenti|il|Freizeitpark|Andiamo al parco divertimenti!
giostra|la|Karussell|Il bambino sale sulla giostra.
karaoke|il|Karaoke|Facciamo karaoke!
annoiarsi a morte||sich zu Tode langweilen|Al concerto mi sono annoiato a morte.
`,
"A2 – Zeit & Häufigkeit": `
ogni tanto||ab und zu|Ogni tanto vado al cinema.
qualche volta||manchmal|Qualche volta mangio fuori.
quasi mai||fast nie|Non bevo quasi mai caffè.
tutti i giorni||jeden Tag|Studio tutti i giorni.
una volta alla settimana||einmal pro Woche|Vado in piscina una volta alla settimana.
due volte al mese||zweimal im Monat|Vedo i nonni due volte al mese.
di giorno||tagsüber|Di giorno lavoro.
di notte||nachts|Di notte dormo.
di mattina||morgens|Di mattina bevo un caffè.
nel frattempo||inzwischen|Nel frattempo preparo la tavola.
all'inizio||am Anfang|All'inizio era difficile.
alla fine||am Ende / schließlich|Alla fine abbiamo vinto.
fino a||bis|Lavoro fino alle sei.
da quando||seit wann|Da quando abiti qui?
da molto tempo||seit langem|Ti aspetto da molto tempo.
recentemente||kürzlich|Recentemente ho cambiato lavoro.
attualmente||zurzeit|Attualmente vivo a Milano.
in futuro||in Zukunft|In futuro voglio viaggiare.
passato|il|Vergangenheit|Nel passato era diverso.
presente|il|Gegenwart|Vivi nel presente!
futuro|il|Zukunft|Il futuro è nelle tue mani.
epoca|l'|Epoche / Zeit|Nell'epoca romana.
decennio|il|Jahrzehnt|Nell'ultimo decennio.
momento|il|Moment|Un momento, per favore!
istante|l'|Augenblick|In un istante.
periodo|il|Zeitraum|Un periodo difficile.
scorso||vergangen / letzte(r, s)|La settimana scorsa.
precedente||vorherig|Il giorno precedente.
seguente||folgend|Il giorno seguente.
a lungo||lange|Abbiamo parlato a lungo.
per poco||kurz|Resto solo per poco.
in tempo||rechtzeitig|Sono arrivato in tempo.
da un momento all'altro||jeden Moment|Arriva da un momento all'altro.
prima o poi||früher oder später|Prima o poi lo capirai.
d'ora in poi||von jetzt an|D'ora in poi studio di più.
fra poco||gleich / bald|Fra poco comincia il film.
poco fa||vor kurzem|È uscito poco fa.
a mezzogiorno in punto||Punkt zwölf Uhr|Ci vediamo a mezzogiorno in punto.
ritardare||sich verspäten|Il volo ritarda di un'ora.
durare||dauern|Il film dura due ore.
`,
"A2 – Kommunikation & Meinung": `
secondo me||meiner Meinung nach|Secondo me hai ragione.
penso di sì||ich glaube ja|Viene anche Marco? Penso di sì.
penso di no||ich glaube nicht|Piove domani? Penso di no.
non sono d'accordo||ich bin nicht einverstanden|Non sono d'accordo con te.
opinione|l'|Meinung|Qual è la tua opinione?
idea|l'|Idee|Che bella idea!
consiglio|il|Rat(schlag)|Mi dai un consiglio?
domanda|la|Frage|Ho una domanda.
risposta|la|Antwort|La risposta è giusta.
conversazione|la|Gespräch|Una conversazione in italiano.
discorso|il|Rede / Gespräch|Ha fatto un bel discorso.
chiacchierare||plaudern|Chiacchieriamo al bar.
gridare||schreien|Non gridare!
sussurrare||flüstern|Sussurra un segreto.
segreto|il|Geheimnis|Ti dico un segreto.
bugia|la|Lüge|Non dire bugie!
mentire||lügen|Non mentire!
verità|la|Wahrheit|Dimmi la verità.
convincere||überzeugen|Mi hai convinto.
lamentela|la|Beschwerde|Ho una lamentela.
proposta|la|Vorschlag|Che ne dici della mia proposta?
che ne dici||was hältst du davon|Che ne dici di andare al mare?
non importa||macht nichts|Non importa, sarà per la prossima volta.
non fa niente||macht nichts|Scusa! Non fa niente.
dipende||es kommt darauf an|Vieni? Dipende.
magari||vielleicht / schön wär's|Magari domani!
meno male||zum Glück|Meno male che sei arrivato!
per fortuna||zum Glück|Per fortuna non piove.
che peccato||wie schade|Non vieni? Che peccato!
che schifo||wie eklig|Che schifo questo caffè!
che bello||wie schön|Che bello vederti!
accidenti||verflixt|Accidenti, ho perso il treno!
boh||keine Ahnung|Dov'è Marco? Boh!
mi dispiace||es tut mir leid|Mi dispiace per il ritardo.
volentieri||gern|Vieni con noi? Volentieri!
figurati||keine Ursache|Grazie! Figurati!
sul serio||im Ernst|Sul serio? Non ci credo.
per esempio||zum Beispiel|Per esempio, la pizza.
cioè||das heißt|Domani, cioè sabato.
insomma||kurz gesagt / also|Insomma, cosa vuoi?
`,
"A2 – Gesundheit & Lebensstil": `
alimentazione|l'|Ernährung|Una alimentazione sana è importante.
vitamina|la|Vitamin|La frutta ha tante vitamine.
peso|il|Gewicht|Controllo il mio peso.
dimagrire||abnehmen|Voglio dimagrire un po'.
ingrassare||zunehmen|D'inverno ingrasso.
fare movimento||sich bewegen|Fai più movimento!
sonno|il|Schlaf|Ho bisogno di sonno.
avere sonno||müde sein|Ho sonno, vado a letto.
sveglio||wach|Sei ancora sveglio?
abitudine|l'|Gewohnheit|È una brutta abitudine.
smettere di fumare||mit dem Rauchen aufhören|Mio padre ha smesso di fumare.
sigaretta|la|Zigarette|Spegni la sigaretta!
alcol|l'|Alkohol|Non bevo alcol.
benessere|il|Wohlbefinden|Lo yoga è per il benessere.
rilassante||entspannend|Un bagno rilassante.
stressante||stressig|Il lavoro è stressante.
salutare||gesund (Lebensweise)|La dieta mediterranea è salutare.
dannoso||schädlich|Il fumo è dannoso.
igiene|l'|Hygiene|L'igiene delle mani è importante.
lavarsi i denti||Zähne putzen|Lavati i denti prima di dormire.
crema|la|Creme|Una crema per le mani.
occhiali da sole|gli|Sonnenbrille|Metti gli occhiali da sole.
lenti a contatto|le|Kontaktlinsen|Porto le lenti a contatto.
vista|la|Sehkraft|Ho problemi di vista.
udito|l'|Gehör|Il nonno ha problemi di udito.
respirare||atmen|Respira profondamente.
sudare||schwitzen|Corro e sudo tanto.
energia|l'|Kraft / Energie|Oggi ho tanta energia.
debolezza|la|Schwäche|Sento un po' di debolezza.
controllo|il|Kontrolle / Check-up|Faccio un controllo dal medico.
pressione alta|la|Bluthochdruck|Il nonno ha la pressione alta.
prevenzione|la|Vorbeugung|La prevenzione è importante.
in salute||gesund|Il nonno è in buona salute.
guarito||geheilt / gesund|Sono guarito dall'influenza.
tenersi in forma||sich fit halten|Corro per tenermi in forma.
dormire bene||gut schlafen|Stanotte ho dormito bene.
mangiare sano||gesund essen|Cerco di mangiare sano.
bere molta acqua||viel Wasser trinken|D'estate bevo molta acqua.
pausa|la|Pause|Facciamo una pausa.
passo|il|Schritt|Faccio diecimila passi al giorno.
`
});
})();

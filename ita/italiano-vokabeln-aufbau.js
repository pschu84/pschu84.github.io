/* Aufbauwortschatz für vokabeln.html (Stufe 2: sehr häufige Wörter, B1/B2)
   Format pro Zeile: italienisch | Artikel | deutsch | Beispielsatz
   Eigene Übersetzungen und Beispielsätze, keine Übernahme aus Lehrwerken.
   Wörter, die es in einer früheren Lektion schon gibt, filtert vokabeln.html automatisch heraus. */
(function(){
function add(L){
  var out = window.IT_EXTRA = window.IT_EXTRA || {};
  Object.keys(L).forEach(function(name){
    var list = L[name].trim().split("\n").map(function(line){
      var p = line.split("|");
      var w = {it:p[0].trim(), de:p[2].trim(), ex:p[3].trim()};
      if (p[1].trim()) w.art = p[1].trim();
      return w;
    });
    out[name] = (out[name] || []).concat(list);
  });
}

/* ---------- Teil 1 (a bis e), B1 ---------- */
add({
"B1 – Menschen & Rollen 2": `
allievo|l'|Schüler / Lehrling|Il maestro ha venti allievi.
alleato|l'|Verbündeter|Italia e Germania sono alleati nella NATO.
artigiano|l'|Handwerker|L'artigiano lavora il legno a mano.
assassino|l'|Mörder|Nel giallo l'assassino è il maggiordomo.
assistente|l'|Assistent(in)|L'assistente fissa gli appuntamenti.
atleta|l'|Athlet(in) / Sportler|L'atleta si allena ogni mattina.
bimbo|il|Kind / Kleinkind|Il bimbo dorme nella culla.
bionda|la|Blondine / helles Bier|Una bionda alta entra nel bar.
cacciatore|il|Jäger|Il cacciatore cammina nel bosco con il cane.
calciatore|il|Fußballspieler|Il calciatore segna un gol.
collaboratore|il|Mitarbeiter|Ho un nuovo collaboratore in ufficio.
comandante|il|Kommandant / Kapitän|Il comandante parla ai passeggeri.
commerciante|il|Händler / Kaufmann|I commercianti del centro sono preoccupati.
complice|il|Komplize|La polizia cerca il complice del ladro.
concorrente|il|Konkurrent / Kandidat|Il concorrente risponde a tutte le domande.
conduttore|il|Moderator / Schaffner|Il conduttore del quiz è simpatico.
coniuge|il|Ehepartner|Il modulo va firmato da entrambi i coniugi.
consigliere|il|Berater / Ratsmitglied|È consigliere comunale da due anni.
consulente|il|Berater|Ho chiesto aiuto a un consulente fiscale.
credente|il|Gläubiger / gläubig|È una persona molto credente.
custode|il|Hausmeister / Wächter|Il custode apre la scuola alle sette.
defunto|il|Verstorbener|Preghiamo per i defunti.
delegato|il|Delegierter|Ogni classe elegge un delegato.
dottoressa|la|Ärztin / Doktorin|La dottoressa mi visita domani.
erede|l'|Erbe / Erbin|È l'unico erede dello zio.
economista|l'|Wirtschaftswissenschaftler|L'economista prevede una crisi.
creatura|la|Geschöpf / Wesen|Che creatura dolce, questo cagnolino!
alieno|l'|Außerirdischer|Nel film arrivano gli alieni.
bestia|la|Tier / Bestie|Che bestia enorme!
branco|il|Rudel / Herde|Un branco di lupi vive sulle montagne.
colomba|la|Taube|La colomba bianca è un simbolo di pace.
drago|il|Drache|Il cavaliere combatte contro il drago.
africano||afrikanisch / Afrikaner|Ascolto musica africana.
albanese||albanisch / Albaner|Il mio vicino è albanese.
argentino||argentinisch / Argentinier|Il tango è un ballo argentino.
asiatico||asiatisch / Asiat|Mi piace la cucina asiatica.
brasiliano||brasilianisch / Brasilianer|Il caffè brasiliano è forte.
britannico||britisch / Brite|Il parlamento britannico vota oggi.
borghese||bürgerlich / Bürger|È cresciuto in una famiglia borghese.
bugiardo||lügnerisch / Lügner|Sei un bugiardo, non ti credo!
`,
"B1 – Körper & Medizin 2": `
arteria|l'|Arterie / Hauptverkehrsader|Il sangue scorre nelle arterie.
articolazione|l'|Gelenk|Mi fanno male le articolazioni.
cancro|il|Krebs|Il fumo può causare il cancro.
cardiaco||Herz-|Ha avuto un attacco cardiaco.
cerebrale||Gehirn-|Il cervello ha un'attività cerebrale continua.
chirurgia|la|Chirurgie|Lavora nel reparto di chirurgia.
chirurgico||chirurgisch|Serve un intervento chirurgico.
cicatrice|la|Narbe|Ha una cicatrice sul ginocchio.
ciglio|il|Wimper / Rand|Mi è entrato un ciglio nell'occhio.
clinica|la|Klinik|È ricoverato in una clinica privata.
clinico||klinisch|Il quadro clinico è stabile.
coscia|la|Oberschenkel / Keule|Mangio una coscia di pollo.
cranio|il|Schädel|Il casco protegge il cranio.
cieco||blind / Blinder|Il cane guida aiuta l'uomo cieco.
dorso|il|Rücken / Rückenschwimmen|Nuoto a dorso.
ammalarsi||krank werden|D'inverno mi ammalo spesso.
addormentarsi||einschlafen|Mi addormento sempre davanti alla TV.
ansioso||ängstlich / besorgt|È ansioso prima degli esami.
delirio|il|Wahn / Delirium|Con la febbre alta era in delirio.
doloroso||schmerzhaft|È stata un'operazione dolorosa.
asciugare||abtrocknen / trocknen|Asciugati i capelli prima di uscire.
bagnare||nass machen / gießen|Bagna le piante la sera.
`,
"B1 – Dinge & Materialien": `
acciaio|l'|Stahl|Le pentole sono di acciaio.
argento|l'|Silber|Ha un braccialetto d'argento.
bronzo|il|Bronze|Ha vinto la medaglia di bronzo.
carbone|il|Kohle|Una volta si scaldava la casa con il carbone.
cemento|il|Zement / Beton|Il muro è di cemento.
ceramica|la|Keramik|Compro un piatto di ceramica a Faenza.
cristallo|il|Kristall|I bicchieri sono di cristallo.
cartone|il|Karton / Pappe|Metti i libri in una scatola di cartone.
cavo|il|Kabel|Dov'è il cavo del caricabatterie?
chiodo|il|Nagel|Pianta un chiodo nel muro.
attrezzo|l'|Werkzeug / Gerät|Gli attrezzi sono in garage.
attrezzatura|l'|Ausrüstung|Noleggiamo l'attrezzatura da sci.
antenna|l'|Antenne|L'antenna è sul tetto.
apparecchio|l'|Gerät / Zahnspange / Flugzeug|Mia figlia porta l'apparecchio ai denti.
arredamento|l'|Einrichtung / Möbel|L'arredamento è moderno.
bambola|la|Puppe|La bambina gioca con la bambola.
bastone|il|Stock|Il nonno cammina con il bastone.
bilancia|la|Waage|La bilancia dice che ho preso due chili.
bancone|il|Theke / Tresen|Prendiamo il caffè al bancone.
bolla|la|Blase|Il bambino fa le bolle di sapone.
buca|la|Loch / Grube|Attento alla buca nella strada!
cancello|il|Tor / Gittertor|Chiudi il cancello del giardino.
capanna|la|Hütte|Dormiamo in una capanna in montagna.
capannone|il|Lagerhalle|L'azienda ha un capannone in periferia.
chiosco|il|Kiosk / Bude|Compro il giornale al chiosco.
contenitore|il|Behälter|Metti gli avanzi in un contenitore.
confezione|la|Packung / Verpackung|Una confezione da sei uova, per favore.
copertina|la|Umschlag / Cover|La copertina del libro è rossa.
cortile|il|Hof|I bambini giocano in cortile.
bottega|la|Werkstatt / kleiner Laden|Il falegname ha una bottega in centro.
campana|la|Glocke|Suonano le campane della chiesa.
canna|la|Rohr / Angel|Il nonno prende la canna da pesca.
cerchio|il|Kreis|Disegna un cerchio sulla lavagna.
cubo|il|Würfel|Il dado ha la forma di un cubo.
curva|la|Kurve|Rallenta prima della curva!
diametro|il|Durchmesser|La pizza ha un diametro di trenta centimetri.
centimetro|il|Zentimeter|Il tavolo è lungo novanta centimetri.
elastico|l'|Gummiband / elastisch|Lega i capelli con un elastico.
cespuglio|il|Busch / Strauch|Il gatto si nasconde nel cespuglio.
cenere|la|Asche|Sul tavolo c'è cenere di sigaretta.
catalogo|il|Katalog|Sfoglio il catalogo dei mobili.
diario|il|Tagebuch|Scrivo il diario ogni sera.
bevanda|la|Getränk|Le bevande sono comprese nel prezzo.
alimento|l'|Nahrungsmittel|Il latte è un alimento completo.
dozzina|la|Dutzend|Compro una dozzina di uova.
bandiera|la|Fahne / Flagge|La bandiera italiana è verde, bianca e rossa.
coppa|la|Pokal / Becher|La squadra alza la coppa.
corona|la|Krone / Kranz|Il re porta la corona.
divisa|la|Uniform|I poliziotti indossano la divisa.
`,
"B1 – Verben 6": `
abbinare||kombinieren / zuordnen|Abbina la borsa alle scarpe.
accarezzare||streicheln|Il bambino accarezza il gatto.
accomodarsi||Platz nehmen|Prego, si accomodi!
accontentare||zufriedenstellen|È difficile accontentare tutti.
accostare||heranfahren / anlehnen|Accosta la macchina a destra.
adattare||anpassen|Devo adattare il vestito.
affacciarsi||sich hinauslehnen / hinausgehen auf|La camera si affaccia sul mare.
afferrare||packen / begreifen|Afferra la corda e tira!
aggiustare||reparieren|Il nonno aggiusta la bici.
aggrapparsi||sich festklammern|Il bambino si aggrappa alla mamma.
agitare||schütteln / aufregen|Agitare prima dell'uso.
allargare||erweitern / weiter machen|Allargano la strada davanti a casa.
allevare||aufziehen / züchten|Allevano mucche in montagna.
appendere||aufhängen|Appendo il cappotto all'attaccapanni.
arrampicarsi||klettern|Il gatto si arrampica sull'albero.
augurare||wünschen|Ti auguro buona fortuna!
badare||aufpassen auf|Chi bada ai bambini stasera?
bucare||durchlöchern / einen Platten haben|Ho bucato una gomma.
bussare||klopfen|Qualcuno bussa alla porta.
calare||sinken / herablassen|Di notte la temperatura cala.
campare||leben / durchkommen|Si campa bene in campagna.
cascare||fallen (umgangssprachlich)|Attento, caschi dalla sedia!
cavalcare||reiten|Mia sorella cavalca da quando era piccola.
cavare||herausziehen|Il dentista mi ha cavato un dente.
cenare||zu Abend essen|Ceniamo alle otto.
chinarsi||sich bücken|Si china per raccogliere la penna.
colare||tropfen / abgießen|Cola la pasta e aggiungi il sugo.
colorare||ausmalen / färben|I bambini colorano i disegni.
coltivare||anbauen / pflegen|Coltiviamo pomodori nell'orto.
congelare||einfrieren|Congelo il pane avanzato.
consolare||trösten|La mamma consola il bambino.
curiosare||herumstöbern|Mi piace curiosare nei mercatini.
decorare||schmücken / dekorieren|Decoriamo l'albero di Natale.
disturbare||stören|Scusi se la disturbo.
divorare||verschlingen|Ha divorato il libro in due giorni.
distrarre||ablenken|Non distrarmi, sto guidando!
distendersi||sich hinlegen / ausstrecken|Mi distendo un po' sul divano.
catturare||fangen|Il gatto ha catturato un topo.
centrare||treffen (ins Ziel)|Ha centrato il bersaglio al primo colpo.
combinare||kombinieren / anstellen|Che cosa hai combinato?
completare||vervollständigen / ausfüllen|Completa le frasi con il verbo giusto.
`,
"B1 – Verben 7": `
bombardare||bombardieren|Durante la guerra hanno bombardato la città.
avvelenare||vergiften|Il fumo avvelena l'aria.
avvolgere||einwickeln|Avvolgo il regalo nella carta.
danneggiare||beschädigen|La grandine ha danneggiato le macchine.
devastare||verwüsten|L'alluvione ha devastato il paese.
crollare||einstürzen|Il vecchio ponte è crollato.
criticare||kritisieren|Critica sempre tutto.
consultare||nachschlagen / konsultieren|Consulta il dizionario.
contattare||kontaktieren|La contatteremo al più presto.
connettere||verbinden|Connetti il computer al Wi-Fi.
attivare||aktivieren|Attiva il Bluetooth.
archiviare||archivieren / ablegen|Archivio le e-mail vecchie.
accelerare||beschleunigen|Non accelerare, c'è il limite.
affascinare||faszinieren|La storia di Roma mi affascina.
appassionarsi||sich begeistern|Mi sono appassionato alla fotografia.
ambientare||(Handlung) ansiedeln|Il film è ambientato a Napoli.
annotare||notieren|Annoto il numero sul quaderno.
anticipare||vorziehen / vorschießen|Anticipiamo la riunione alle nove.
apprendere||lernen / erfahren|Ho appreso la notizia dal giornale.
arrendersi||aufgeben / sich ergeben|Non arrenderti mai!
abbattere||niederreißen / fällen|Hanno abbattuto il vecchio albero.
affondare||versenken / sinken|La nave è affondata vicino alla costa.
agganciare||einhaken / anbaggern|Aggancia il rimorchio alla macchina.
aggredire||angreifen|Un cane ha aggredito un passante.
collaborare||zusammenarbeiten|Collaboriamo con una scuola di Firenze.
comandare||befehlen / steuern|Qui comando io!
confessare||gestehen / beichten|Confessa: hai mangiato tu la torta?
contentarsi||sich begnügen|Mi contento di poco.
dettare||diktieren|La maestra detta una frase.
dialogare||sich unterhalten / Dialog führen|È importante dialogare con i figli.
disperare||verzweifeln|Non disperare, troveremo una soluzione.
documentare||dokumentieren|Documenta il viaggio con le foto.
drogarsi||Drogen nehmen|Purtroppo suo cugino si droga.
elencare||aufzählen|Elenca i giorni della settimana.
emozionare||bewegen / rühren|Il film mi ha emozionato.
esagerare||übertreiben|Non esagerare con il sale!
esaminare||untersuchen / prüfen|Il medico esamina la ferita.
esclamare||ausrufen|"Che bello!" esclama la bambina.
esitare||zögern|Non esitare a chiamarmi.
espellere||ausweisen / verweisen|Lo hanno espulso dalla scuola.
`,
"B1 – Adjektive 3": `
abbondante||reichlich|La porzione è abbondante.
abile||geschickt|È molto abile con le mani.
abituale||gewohnt / üblich|È il mio bar abituale.
acceso||eingeschaltet / angezündet / lebhaft|La luce è ancora accesa.
acido||sauer|Il latte è diventato acido.
acuto||spitz / akut / hoch (Ton)|Ho un dolore acuto alla schiena.
affettuoso||liebevoll|È un gatto molto affettuoso.
aggressivo||aggressiv|Il cane del vicino è aggressivo.
amato||geliebt|È il mio libro più amato.
anonimo||anonym|Ho ricevuto una lettera anonima.
asciutto||trocken|Il bucato è già asciutto.
aspro||herb / sauer / rau|Questo vino è un po' aspro.
assente||abwesend|Oggi Marco è assente.
automatico||automatisch|La porta è automatica.
banale||banal|È una domanda banale.
bizzarro||seltsam / bizarr|Ha un modo di vestire bizzarro.
brillante||glänzend / brillant|È una studentessa brillante.
bruciato||verbrannt|La torta è bruciata!
buffo||komisch / lustig|Ha un cappello buffo.
celebre||berühmt|È un celebre pittore italiano.
celeste||himmelblau / himmlisch|Indossa una camicia celeste.
colorato||bunt|Le case di Burano sono colorate.
comico||komisch / Komiker|È un film comico.
comprensibile||verständlich|La spiegazione è comprensibile.
confuso||verwirrt / unklar|Sono un po' confuso.
convinto||überzeugt|Sono convinto che hai ragione.
creativo||kreativ|È una persona molto creativa.
crudele||grausam|È stato crudele con lei.
cupo||dunkel / düster|Ha una faccia cupa oggi.
curvo||gebogen / krumm|Il nonno cammina curvo.
deciso||entschlossen / entschieden|È una donna decisa.
delicato||zart / heikel|È una situazione delicata.
delizioso||köstlich|Questa torta è deliziosa!
denso||dicht / dickflüssig|Il sugo è troppo denso.
disperato||verzweifelt|È disperato perché ha perso il lavoro.
distante||entfernt|La stazione è distante due chilometri.
domestico||häuslich / Haus-|Il gatto è un animale domestico.
dorato||golden / vergoldet|Ha una cornice dorata.
dotato||begabt / ausgestattet|È un ragazzo molto dotato per la musica.
drammatico||dramatisch|È stato un momento drammatico.
eccellente||ausgezeichnet|Il vino è eccellente.
eccezionale||außergewöhnlich|È stata una giornata eccezionale.
entusiasta||begeistert|Sono entusiasta del nuovo lavoro.
esagerato||übertrieben|Il prezzo è esagerato.
`,
"B1 – Nomen 3": `
abitazione|l'|Wohnung / Wohnsitz|La sua abitazione è in via Garibaldi.
accoglienza|l'|Empfang / Aufnahme|L'accoglienza in albergo è stata calorosa.
adolescenza|l'|Jugend (Pubertät)|Ricordo bene la mia adolescenza.
agricoltura|l'|Landwirtschaft|L'agricoltura è importante in Puglia.
allegria|l'|Fröhlichkeit|C'è tanta allegria alla festa.
applauso|l'|Applaus|Un grande applauso per i musicisti!
ascolto|l'|Zuhören|Grazie per l'ascolto.
ballo|il|Tanz / Ball|Andiamo al ballo di fine anno.
biografia|la|Biografie|Leggo la biografia di Leonardo.
blocco|il|Block / Sperre|C'è un blocco del traffico in centro.
bontà|la|Güte|Grazie per la tua bontà.
botta|la|Schlag / Stoß|Ho preso una botta alla testa.
brivido|il|Schauer / Gänsehaut|Ho i brividi di freddo.
calcolo|il|Rechnung / Berechnung|Ho fatto un calcolo veloce.
calma|la|Ruhe|Calma, non c'è fretta!
calo|il|Rückgang|C'è un calo dei prezzi.
cammino|il|Weg|Il cammino è lungo, ma bello.
caos|il|Chaos|In città c'è il caos.
capolavoro|il|Meisterwerk|La Gioconda è un capolavoro.
capriccio|il|Laune / Trotzanfall|Il bambino fa i capricci.
catastrofe|la|Katastrophe|Il terremoto è stato una catastrofe.
cenno|il|Wink / Andeutung|Mi ha fatto un cenno con la mano.
chiacchiera|la|Plauderei / Gerede|Facciamo due chiacchiere?
chiusura|la|Schließung / Verschluss|Orario di chiusura: ore venti.
classifica|la|Rangliste / Tabelle|La squadra è prima in classifica.
collegamento|il|Verbindung / Link|Il collegamento internet è lento.
combinazione|la|Kombination / Zufall|Che combinazione, anche tu qui!
concorso|il|Wettbewerb / Auswahlverfahren|Ha vinto un concorso di poesia.
conferenza|la|Konferenz / Vortrag|Domani c'è una conferenza sul clima.
conferma|la|Bestätigung|Ho ricevuto la conferma della prenotazione.
confusione|la|Durcheinander / Verwirrung|Che confusione in questa stanza!
continente|il|Kontinent|L'Africa è un continente enorme.
cortesia|la|Höflichkeit / Gefallen|Mi fa una cortesia?
danza|la|Tanz|Mia figlia fa danza classica.
decorazione|la|Dekoration|Le decorazioni di Natale sono bellissime.
dipinto|il|Gemälde|Il dipinto è del Seicento.
diretta|la|Live-Übertragung|La partita è in diretta TV.
disastro|il|Katastrophe / Desaster|La cucina è un disastro!
discesa|la|Abfahrt / Gefälle|La discesa è ripida.
disgrazia|la|Unglück|È successa una disgrazia.
dispetto|il|Gemeinheit / Trotz|Lo fa per dispetto.
dolcezza|la|Süße / Sanftheit|Parla ai bambini con dolcezza.
dono|il|Geschenk / Gabe|Ha il dono della pazienza.
duello|il|Duell|Nel western c'è un duello finale.
eco|l'|Echo|In montagna si sente l'eco.
eleganza|l'|Eleganz|Si veste con grande eleganza.
addio|l'|Abschied / Lebwohl|È stato un addio difficile.
affresco|l'|Fresko|Gli affreschi di Giotto sono a Padova.
apparizione|l'|Erscheinen / Auftritt|È la sua prima apparizione in TV.
appoggio|l'|Unterstützung / Stütze|Grazie per il tuo appoggio.
`,
"B1 – Umgangssprache derb": `
cazzata|la|(vulgär) Blödsinn / Mist|Non dire cazzate!
cesso|il|(vulgär) Klo / hässliche Person|Il cesso è in fondo al corridoio.
cagare||(vulgär) kacken|Il cane ha cagato sul marciapiede.
cacca|la|Kacka (Kindersprache)|Il bambino deve fare la cacca.
deficiente||(abwertend) schwachsinnig / Depp|Non fare il deficiente!
`
});

/* ---------- Teil 1 (a bis e), B2 ---------- */
add({
"B2 – Verben 2": `
abolire||abschaffen|Hanno abolito la tassa sui rifiuti.
accertare||feststellen / überprüfen|La polizia deve accertare i fatti.
accordare||gewähren / stimmen (Instrument)|Il musicista accorda la chitarra.
accumulare||ansammeln|Ho accumulato molte ore di straordinario.
acquisire||erwerben|Ha acquisito molta esperienza all'estero.
aderire||beitreten / haften|Molti lavoratori aderiscono allo sciopero.
affiancare||zur Seite stellen / unterstützen|Un collega esperto mi affianca nei primi giorni.
aggirare||umgehen|Hanno aggirato il problema con un trucco.
alterare||verändern / verfälschen|Il caldo può alterare il sapore del vino.
alternare||abwechseln|Alterno lo studio con lo sport.
ancorare||verankern|La barca è ancorata nel porto.
annuire||nicken|Il professore annuisce in silenzio.
architettare||aushecken|Che cosa stanno architettando quei due?
armare||bewaffnen|Hanno armato le guardie.
aspirare||anstreben / einatmen / saugen|Aspira a diventare medico.
assassinare||ermorden|Giulio Cesare fu assassinato nel 44 a.C.
assegnare||zuweisen / vergeben|Il premio viene assegnato a giugno.
assolvere||freisprechen / erfüllen|Il giudice ha assolto l'imputato.
assorbire||aufsaugen / aufnehmen|La spugna assorbe l'acqua.
attrarre||anziehen|La città attrae molti turisti.
attrezzare||ausrüsten / ausstatten|Abbiamo attrezzato la cantina come palestra.
certificare||bescheinigen|Il medico certifica la malattia.
cessare||aufhören / einstellen|La pioggia è cessata verso sera.
classificare||einordnen / klassifizieren|Classifica le piante per famiglia.
coincidere||übereinstimmen / zusammenfallen|Le due date coincidono.
compensare||ausgleichen|Il sole compensa il freddo.
competere||konkurrieren|Le due aziende competono sullo stesso mercato.
compromettere||gefährden / kompromittieren|Un errore può compromettere tutto il lavoro.
concedere||gewähren / erlauben|Mi concedo una pausa.
concepire||begreifen / konzipieren|Non riesco a concepire tanta cattiveria.
concordare||vereinbaren / übereinstimmen|Abbiamo concordato il prezzo.
concorrere||teilnehmen (Wettbewerb) / beitragen|Concorre per un posto di insegnante.
conseguire||erlangen / erreichen|Ha conseguito la laurea con il massimo dei voti.
consistere||bestehen (in, aus)|In che cosa consiste il lavoro?
`,
"B2 – Verben 3": `
contaminare||verseuchen / verunreinigen|Le fabbriche hanno contaminato il fiume.
contestare||anfechten / beanstanden|Il cliente contesta la fattura.
contrarre||zusammenziehen / sich zuziehen|Ha contratto un virus in viaggio.
contrastare||bekämpfen / sich widersetzen|Bisogna contrastare la violenza.
convenire||sich lohnen / übereinkommen|Conviene prendere il treno.
convertire||umwandeln / bekehren|Converti i dollari in euro.
convocare||einberufen / vorladen|Il preside convoca i genitori.
coordinare||koordinieren|Chi coordina il progetto?
custodire||bewahren / hüten|Custodisco le lettere della nonna.
degradare||herabwürdigen / verfallen|L'inquinamento degrada l'ambiente.
denominare||benennen|La piazza è stata denominata in suo onore.
deporre||ablegen / aussagen|Il testimone depone davanti al giudice.
depositare||hinterlegen / einzahlen|Ho depositato i soldi in banca.
deprimere||deprimieren|Questo tempo grigio mi deprime.
detenere||besitzen / innehaben|Detiene il record dei cento metri.
discendere||abstammen / hinabsteigen|Discende da una famiglia nobile.
disperdere||zerstreuen / auflösen|La polizia disperde la folla.
dominare||beherrschen|Il castello domina la valle.
dotare||ausstatten|La scuola è dotata di una palestra.
eleggere||wählen|Hanno eletto un nuovo sindaco.
elevare||erhöhen / erheben|Hanno elevato il limite di velocità.
emettere||ausstoßen / ausstellen|La macchina emette troppo CO2.
equivalere||entsprechen / gleichkommen|Un chilo equivale a mille grammi.
ereditare||erben|Ha ereditato la casa dalla nonna.
ergersi||sich erheben|Sulla collina si erge un castello.
errare||irren / umherirren|Errare è umano.
esaltare||rühmen / begeistern|Il giornale esalta la vittoria della squadra.
esaurire||erschöpfen / ausverkaufen|I biglietti sono esauriti.
esercitare||ausüben / üben|Esercita la professione di avvocato.
esigere||verlangen / fordern|Il capo esige puntualità.
`,
"B2 – Adjektive 2": `
accademico||akademisch|L'anno accademico inizia a ottobre.
accettabile||akzeptabel|Il prezzo è accettabile.
accurato||sorgfältig / genau|È un lavoro molto accurato.
agricolo||landwirtschaftlich|La regione ha molti prodotti agricoli.
altrui||fremd / anderer Leute|Rispetta le opinioni altrui.
amministrativo||Verwaltungs-|È un problema amministrativo.
amoroso||Liebes- / liebevoll|Ha avuto una delusione amorosa.
analitico||analytisch|Ha una mente analitica.
analogo||ähnlich / analog|È un caso analogo al precedente.
angolare||Eck- / eckig|Abbiamo comprato un divano angolare.
animato||belebt / Zeichentrick-|Guardiamo un film animato.
annuale||jährlich|L'abbonamento annuale costa meno.
anteriore||vorderer / früher|La ruota anteriore è bucata.
apparente||scheinbar|La calma è solo apparente.
apposito||eigens dafür vorgesehen|Getta la carta nell'apposito contenitore.
armato||bewaffnet|Una rapina a mano armata.
astratto||abstrakt|È un concetto troppo astratto.
ateo||atheistisch / Atheist|Mio fratello è ateo.
atomico||Atom-|L'energia atomica è un tema delicato.
atroce||grausam / grässlich|Ho un mal di denti atroce.
autentico||echt / authentisch|È un quadro autentico.
avanzato||fortgeschritten|Frequento un corso di livello avanzato.
aziendale||betrieblich / Firmen-|Abbiamo una festa aziendale.
bancario||Bank-|Il conto bancario è in rosso.
barbaro||barbarisch / Barbar|È stato un gesto barbaro.
beato||selig / glücklich|Beato te che vai in vacanza!
benedetto||gesegnet / verflixt|Benedetta pioggia, finalmente!
candido||schneeweiß / naiv|Ha una camicia candida.
cartaceo||Papier-|Preferisco il libro cartaceo all'e-book.
casuale||zufällig|È stato un incontro casuale.
cinematografico||Film-|Il festival cinematografico di Venezia è famoso.
circolare||kreisförmig / Rundschreiben|La sala ha una forma circolare.
clandestino||heimlich / illegal|Ha viaggiato come clandestino su una nave.
collettivo||kollektiv / gemeinsam|È stato un successo collettivo.
`,
"B2 – Adjektive 3": `
colto||gebildet|È una persona molto colta.
compatto||kompakt / dicht|La macchina è piccola e compatta.
competente||kompetent / zuständig|Rivolgiti all'ufficio competente.
complessivo||gesamt|La spesa complessiva è di mille euro.
composto||zusammengesetzt / gefasst|Il gruppo è composto da dieci persone.
comunale||Gemeinde- / städtisch|La biblioteca comunale è gratuita.
conseguente||folgerichtig / daraus folgend|Ha perso il treno e il conseguente ritardo è stato lungo.
consistente||beträchtlich / fest|Ha ricevuto un aumento consistente.
costante||ständig / konstant|Fa progressi costanti.
costituzionale||Verfassungs-|È un diritto costituzionale.
costruttivo||konstruktiv|Grazie per la critica costruttiva.
credibile||glaubwürdig|La sua scusa non è credibile.
crescente||wachsend|C'è un interesse crescente per l'italiano.
criminale||kriminell / Verbrecher|È un'organizzazione criminale.
dannato||verdammt|Questo dannato computer non funziona!
degno||würdig / wert|Non è degno della tua fiducia.
democratico||demokratisch|L'Italia è una repubblica democratica.
dettagliato||ausführlich|Mi serve una descrizione dettagliata.
dinamico||dynamisch|Cerchiamo una persona giovane e dinamica.
diplomatico||diplomatisch / Diplomat|Dai una risposta diplomatica.
discreto||diskret / ordentlich|Ha un discreto successo.
discusso||umstritten|È un politico molto discusso.
distinto||verschieden / vornehm|È un signore molto distinto.
divino||göttlich|La pizza di questa trattoria è divina!
dominante||vorherrschend|Il colore dominante è il blu.
dovuto||geschuldet / gebührend|Il ritardo è dovuto al traffico.
ebraico||jüdisch / hebräisch|Studia la lingua ebraica.
educativo||erzieherisch / Bildungs-|È un gioco educativo.
effettivo||tatsächlich / effektiv|Il costo effettivo è più alto.
elevato||hoch / erhaben|Il prezzo è troppo elevato.
erotico||erotisch|È un romanzo erotico.
esclusivo||exklusiv|È un locale molto esclusivo.
escluso||ausgeschlossen / außer|Aperto tutti i giorni, escluso il lunedì.
esistente||bestehend|Miglioriamo il sistema esistente.
`,
"B2 – Adverbien, Konnektoren & Pronomen": `
altamente||höchst|È un lavoro altamente qualificato.
altrove||woanders|Cerchiamo parcheggio altrove.
ampiamente||weitgehend / ausführlich|Il tema è stato ampiamente discusso.
anziché||anstatt|Prendo il treno anziché la macchina.
apposta||absichtlich / eigens|L'hai fatto apposta!
attentamente||aufmerksam|Leggi attentamente le istruzioni.
automaticamente||automatisch|La luce si accende automaticamente.
bensì||sondern (vielmehr)|Non è stupido, bensì pigro.
contemporaneamente||gleichzeitig|Non posso fare due cose contemporaneamente.
continuamente||ständig|Il telefono squilla continuamente.
correttamente||richtig / korrekt|Hai risposto correttamente.
costantemente||ständig / beständig|I prezzi aumentano costantemente.
dappertutto||überall|Ho cercato le chiavi dappertutto.
decisamente||entschieden / eindeutig|È decisamente meglio così.
definitivamente||endgültig|Si è trasferito definitivamente a Roma.
difficilmente||kaum / schwerlich|Difficilmente arriveremo in tempo.
diversamente||anders / sonst|Diversamente da te, io amo il freddo.
ebbene||nun / also gut|Ebbene sì, ho sbagliato.
eccetera||und so weiter|Compra pane, latte, frutta eccetera.
esclusivamente||ausschließlich|Il parcheggio è esclusivamente per i clienti.
colui||derjenige|Colui che trova il tesoro vince.
`,
"B2 – Staat, Recht & Gesellschaft": `
abuso|l'|Missbrauch|L'abuso di alcol è pericoloso.
accertamento|l'|Feststellung / Überprüfung|Sono in corso accertamenti.
alleanza|l'|Bündnis|I due partiti hanno formato un'alleanza.
arresto|l'|Festnahme / Stillstand|La polizia ha eseguito tre arresti.
assalto|l'|Überfall / Angriff|C'è stato un assalto a un furgone.
attentato|l'|Anschlag / Attentat|L'attentato ha fatto molte vittime.
bomba|la|Bombe|Hanno trovato una vecchia bomba della guerra.
camorra|la|Camorra (Mafia in Kampanien)|Il film parla della camorra a Napoli.
clan|il|Clan|Il clan controlla il quartiere.
cella|la|Zelle|Il detenuto passa il giorno in cella.
crimine|il|Verbrechen|Il crimine è in calo in città.
combattimento|il|Kampf / Gefecht|I soldati sono pronti al combattimento.
assemblea|l'|Versammlung|L'assemblea dei genitori è giovedì.
comitato|il|Komitee / Ausschuss|Il comitato organizza la festa del paese.
comma|il|Absatz (Gesetz)|Leggi l'articolo 3, comma 2.
commissariato|il|Polizeirevier|Ho denunciato il furto al commissariato.
congresso|il|Kongress|Il congresso del partito si tiene a Roma.
consorzio|il|Konsortium / Verband|Il consorzio tutela il Parmigiano.
convenzione|la|Abkommen / Konvention|L'ospedale ha una convenzione con l'assicurazione.
dipartimento|il|Abteilung / Fachbereich|Lavora nel dipartimento di fisica.
distretto|il|Bezirk|Il distretto scolastico comprende dieci scuole.
divieto|il|Verbot|Divieto di sosta!
dominio|il|Herrschaft / Domain|Ho registrato un dominio per il mio sito.
esecuzione|l'|Ausführung / Hinrichtung|L'esecuzione del progetto dura un anno.
appello|l'|Aufruf / Berufung|Il sindaco fa un appello alla calma.
assegno|l'|Scheck / Zulage|Pago con un assegno.
assunzione|l'|Einstellung / Einnahme|L'azienda ha bloccato le assunzioni.
adozione|l'|Adoption / Einführung|Hanno scelto l'adozione di un bambino.
affidamento|l'|Sorgerecht / Vertrauen|Il padre ha l'affidamento dei figli.
ammissione|l'|Zulassung / Eingeständnis|Ho superato l'esame di ammissione.
assistenza|l'|Hilfe / Kundendienst|Chiama l'assistenza clienti.
consulenza|la|Beratung|Offriamo una consulenza gratuita.
convegno|il|Tagung|Partecipo a un convegno di medicina.
comunismo|il|Kommunismus|Il comunismo è un'ideologia del Novecento.
coordinamento|il|Koordination|Serve un migliore coordinamento.
condotta|la|Verhalten / Leitung|Ha un voto basso in condotta.
deposizione|la|Aussage (vor Gericht)|La deposizione del testimone è importante.
custodia|la|Aufbewahrung / Hülle / Haft|Metti gli occhiali nella custodia.
colonnello|il|Oberst|Il colonnello dà gli ordini.
caporale|il|Gefreiter|Il caporale controlla i soldati.
accademia|l'|Akademie|Studia all'Accademia di Belle Arti.
`,
"B2 – Religion & Kultur": `
altare|l'|Altar|I fiori sono sull'altare.
basilica|la|Basilika|La basilica di San Pietro è enorme.
bibbia|la|Bibel|La Bibbia è tradotta in molte lingue.
biblico||biblisch|È una storia biblica.
cattedrale|la|Kathedrale / Dom|La cattedrale è in piazza Duomo.
comunione|la|Kommunion / Gemeinschaft|Domenica mio nipote fa la prima comunione.
croce|la|Kreuz|Sulla montagna c'è una grande croce.
divinità|la|Gottheit|Giove era la divinità più importante dei Romani.
dottrina|la|Lehre / Doktrin|Studia la dottrina cristiana.
carità|la|Nächstenliebe / Almosen|Fa la carità ai poveri.
cerimonia|la|Zeremonie / Feier|La cerimonia inizia alle undici.
cristianesimo|il|Christentum|Il cristianesimo arrivò a Roma nel primo secolo.
culto|il|Kult / Gottesdienst|Il culto dei santi è molto vivo in Italia.
comandamento|il|Gebot|Conosci i dieci comandamenti?
cardinale|il|Kardinal / Haupt-|I cardinali eleggono il papa.
discepolo|il|Jünger / Schüler|Gesù aveva dodici discepoli.
bara|la|Sarg|La bara viene portata in chiesa.
balia|la|Amme / Kindermädchen|Una volta le famiglie ricche avevano la balia.
avanguardia|l'|Avantgarde / Vorhut|Il Futurismo era un movimento d'avanguardia.
copione|il|Drehbuch / Skript|Gli attori leggono il copione.
comparsa|la|Statist / Erscheinen|Ho fatto la comparsa in un film.
Cinquecento|il|16. Jahrhundert|Michelangelo è un artista del Cinquecento.
armonia|l'|Harmonie|In questa casa regna l'armonia.
corno|il|Horn|Il toro ha due corna.
`,
"B2 – Wissenschaft & Technik 2": `
accelerazione|l'|Beschleunigung|L'accelerazione di questa auto è impressionante.
elettrone|l'|Elektron|L'elettrone ha carica negativa.
elettromagnetico||elektromagnetisch|La luce è un'onda elettromagnetica.
circuito|il|Stromkreis / Rennstrecke|Il circuito di Monza è famoso.
cavità|la|Hohlraum / Höhle|La grotta ha molte cavità.
cono|il|Kegel / Waffel|Un gelato nel cono, per favore.
costellazione|la|Sternbild|L'Orsa Maggiore è una costellazione.
antropologia|l'|Anthropologie|Studia antropologia a Bologna.
bacino|il|Becken|Il bacino del Po è molto fertile.
ciclo|il|Zyklus / Kreislauf|Il ciclo dell'acqua è un tema di scienze.
asse|l'|Achse / Brett|La Terra gira intorno al proprio asse.
dinamica|la|Dynamik / Ablauf|Non è chiara la dinamica dell'incidente.
circolazione|la|Kreislauf / Verkehr|Ho problemi di circolazione.
archivio|l'|Archiv|I documenti sono nell'archivio comunale.
apparato|l'|Apparat / System|L'apparato digerente comprende lo stomaco.
elaborazione|l'|Verarbeitung / Ausarbeitung|L'elaborazione dei dati richiede tempo.
componente|il|Bestandteil / Mitglied|Il motore ha molti componenti.
`,
"B2 – Abstrakte Nomen 1": `
abilità|l'|Geschick / Fähigkeit|Ha una grande abilità nel disegno.
abisso|l'|Abgrund|Tra noi c'è un abisso.
acquisizione|l'|Erwerb / Übernahme|L'acquisizione dell'azienda è stata annunciata.
adesione|l'|Beitritt / Zustimmung|L'adesione allo sciopero è alta.
affermazione|l'|Behauptung / Erfolg|La sua affermazione non è vera.
agitazione|l'|Aufregung / Unruhe|C'è agitazione tra i lavoratori.
andamento|l'|Verlauf / Entwicklung|L'andamento delle vendite è positivo.
anteprima|l'|Vorpremiere / Vorschau|Abbiamo visto il film in anteprima.
approvazione|l'|Zustimmung / Genehmigung|Serve l'approvazione del direttore.
ascesa|l'|Aufstieg|L'ascesa al potere è stata rapida.
aspirazione|l'|Bestreben / Ziel|La sua aspirazione è diventare pilota.
attrazione|l'|Attraktion / Anziehung|Il Colosseo è la principale attrazione di Roma.
attualità|l'|Aktualität / aktuelles Geschehen|Leggo le notizie di attualità.
avvenimento|l'|Ereignis|È stato un avvenimento storico.
avvio|l'|Start / Beginn|L'avvio del progetto è previsto a marzo.
beneficio|il|Nutzen / Vorteil|Lo sport porta molti benefici.
bersaglio|il|Ziel / Zielscheibe|Ha colpito il bersaglio.
carenza|la|Mangel|C'è carenza di medici in campagna.
circolo|il|Kreis / Verein|Mio padre va al circolo del tennis.
civiltà|la|Zivilisation / Kultur|La civiltà etrusca è molto antica.
coinvolgimento|il|Beteiligung / Engagement|Il coinvolgimento dei genitori è importante.
collaborazione|la|Zusammenarbeit|Grazie per la collaborazione.
collegio|il|Internat / Kollegium|Ha studiato in un collegio svizzero.
comando|il|Befehl / Steuerung|Il comando della nave è nelle sue mani.
competizione|la|Wettbewerb|La competizione è molto forte.
concentrazione|la|Konzentration|Questo lavoro richiede concentrazione.
concessione|la|Zugeständnis / Konzession|Ha fatto una concessione importante.
concezione|la|Auffassung / Konzeption|Abbiamo una concezione diversa della famiglia.
confessione|la|Geständnis / Beichte|La confessione è arrivata dopo ore.
confidenza|la|Vertraulichkeit / Vertrautheit|Ti faccio una confidenza.
conquista|la|Eroberung / Errungenschaft|Il voto alle donne è stata una grande conquista.
conservazione|la|Erhaltung / Aufbewahrung|La conservazione del cibo è importante.
consistenza|la|Konsistenz / Festigkeit|La crema ha una consistenza morbida.
contestazione|la|Protest / Beanstandung|Ci sono state contestazioni durante il discorso.
continuazione|la|Fortsetzung|Aspetto la continuazione della serie.
continuità|la|Kontinuität|Serve continuità nello studio.
contrasto|il|Gegensatz / Kontrast|C'è un forte contrasto tra i colori.
`,
"B2 – Abstrakte Nomen 2": `
conversione|la|Umwandlung / Bekehrung|La conversione da euro a dollari.
convinzione|la|Überzeugung|Parla con grande convinzione.
copertura|la|Abdeckung / Deckung|Qui non c'è copertura di rete.
corrispondenza|la|Briefwechsel / Entsprechung|Controllo la corrispondenza ogni mattina.
creazione|la|Schöpfung / Erstellung|La creazione del sito ha richiesto un mese.
diffusione|la|Verbreitung|La diffusione del virus è rapida.
dignità|la|Würde|Ogni persona ha la sua dignità.
distacco|il|Trennung / Abstand|Il distacco dalla famiglia è stato difficile.
distinzione|la|Unterscheidung|Bisogna fare una distinzione chiara.
distribuzione|la|Verteilung / Vertrieb|La distribuzione dei pacchi avviene di mattina.
distruzione|la|Zerstörung|La guerra ha portato distruzione.
diversità|la|Vielfalt / Verschiedenheit|La diversità è una ricchezza.
divisione|la|Teilung / Division|Facciamo una divisione con il resto.
documentazione|la|Unterlagen / Dokumentation|Porta tutta la documentazione necessaria.
dote|la|Mitgift / Begabung|La pazienza è la sua dote migliore.
eccellenza|l'|Exzellenz / Spitzenleistung|Questa scuola è un'eccellenza della regione.
eccesso|l'|Übermaß|L'eccesso di zucchero fa male.
eccezione|l'|Ausnahme|L'eccezione conferma la regola.
efficacia|l'|Wirksamkeit|L'efficacia del farmaco è dimostrata.
eliminazione|l'|Beseitigung / Ausscheiden|L'eliminazione della squadra è stata una sorpresa.
entità|l'|Ausmaß / Größe / Einheit|Non conosciamo ancora l'entità dei danni.
eredità|l'|Erbe / Erbschaft|Ha ricevuto una piccola eredità.
esclusione|l'|Ausschluss|Per esclusione, la risposta giusta è la C.
esito|l'|Ergebnis / Ausgang|Aspetto l'esito dell'esame.
esordio|l'|Debüt / Anfang|Il suo esordio in serie A è stato perfetto.
espansione|l'|Expansion / Ausdehnung|L'azienda è in piena espansione.
`
});
/* Nachträge Teil 1 */
add({
"B1 – Dinge & Materialien": `
accessorio|l'|Zubehör / Accessoire|Vende accessori per il telefono.
automobile|l'|Automobil / Auto|Torino è la città dell'automobile.
`,
"B1 – Menschen & Rollen 2": `
addetto|l'|Angestellter / zuständig|Chiedi all'addetto alla biglietteria.
corrispondente|il|Korrespondent / entsprechend|È corrispondente da Berlino per un giornale.
`,
"B1 – Verben 7": `
associare||verbinden / assoziieren|Associo questo profumo all'estate.
brillare||glänzen / funkeln|Le stelle brillano nel cielo.
eccitare||erregen / aufregen|La partita eccita i tifosi.
`,
"B1 – Adjektive 3": `
ennesimo||x-te / zum wiederholten Mal|È l'ennesima volta che te lo dico!
`,
"B2 – Abstrakte Nomen 2": `
disperazione|la|Verzweiflung|Piange per la disperazione.
`,
"B2 – Staat, Recht & Gesellschaft": `
cocaina|la|Kokain|La polizia ha sequestrato un chilo di cocaina.
`
});

/* ---------- Teil 2 (e bis p), B1 ---------- */
add({
"B1 – Himmelsrichtungen & Herkunft": `
est|l'|Osten|Il sole sorge a est.
ovest|l'|Westen|Il vento soffia da ovest.
occidente|l'|Westen / Abendland|Il sole tramonta a occidente.
oriente|l'|Osten / Orient|Marco Polo viaggiò in Oriente.
orientale||östlich / orientalisch|Abito nella parte orientale della città.
mediterraneo||mediterran / Mittelmeer|La dieta mediterranea è molto sana.
fiorentino||florentinisch / Florentiner|La bistecca fiorentina è famosa.
milanese||mailändisch / Mailänder|Il risotto alla milanese è giallo.
napoletano||neapolitanisch / Neapolitaner|La pizza napoletana ha il bordo alto.
lombardo||lombardisch|Il lago di Como è lombardo.
piemontese||piemontesisch|Il Barolo è un vino piemontese.
irlandese||irisch / Ire|Beviamo una birra in un pub irlandese.
olandese||niederländisch / Niederländer|I tulipani olandesi sono famosi.
libanese||libanesisch / Libanese|Il ristorante libanese è ottimo.
persiano||persisch / Perser|Il gatto persiano ha il pelo lungo.
indiano||indisch / Inder|Stasera mangiamo indiano.
latino||lateinisch / Latein|A scuola studio il latino.
islamico||islamisch|L'arte islamica è molto ricca.
musulmano||muslimisch / Muslim|Il mio collega è musulmano.
moro||dunkelhaarig / Mohr (veraltet)|Ha i capelli mori e gli occhi verdi.
`,
"B1 – Menschen & Rollen 3": `
maestra|la|Lehrerin (Grundschule)|La maestra legge una favola.
marinaio|il|Seemann|Il marinaio vive sulla nave.
musicista|il|Musiker|Il musicista suona il violino.
fotografo|il|Fotograf|Il fotografo fa le foto del matrimonio.
pescatore|il|Fischer|I pescatori tornano all'alba.
pastore|il|Hirte / Pastor|Il pastore porta le pecore in montagna.
modella|la|Model|La modella sfila a Milano.
fanciulla|la|Mädchen / junge Frau (gehoben)|Nella fiaba c'è una bella fanciulla.
guerriero|il|Krieger|Il guerriero porta la spada.
gigante|il|Riese / riesig|Nella storia vive un gigante buono.
nano|il|Zwerg|Biancaneve e i sette nani.
mago|il|Zauberer|Il mago fa sparire una moneta.
orco|l'|Oger / Menschenfresser|L'orco vive nel bosco.
pilota|il|Pilot / Rennfahrer|Il pilota annuncia l'atterraggio.
pirata|il|Pirat|I pirati cercano il tesoro.
genio|il|Genie|Sei un genio!
immigrato|l'|Einwanderer|Molti immigrati lavorano nell'agricoltura.
laureato|il|Akademiker / mit Hochschulabschluss|È laureato in ingegneria.
interlocutore|l'|Gesprächspartner|Guarda negli occhi il tuo interlocutore.
narratore|il|Erzähler|Il narratore racconta in prima persona.
operatore|l'|Mitarbeiter / Operator|Un operatore risponderà a breve.
partecipante|il|Teilnehmer|Ogni partecipante riceve un attestato.
passeggero|il|Fahrgast / vorübergehend|I passeggeri scendono dal treno.
portatore|il|Träger / Überbringer|È portatore di occhiali.
interprete|l'|Dolmetscher / Interpret|Serve un interprete per la riunione.
ispettore|l'|Inspektor|L'ispettore controlla i biglietti.
moderatore|il|Moderator|Il moderatore presenta gli ospiti.
`,
"B1 – Verben 8": `
esplodere||explodieren|È esplosa una bombola del gas.
esplorare||erkunden|Esploriamo il centro storico a piedi.
fabbricare||herstellen|Questa ditta fabbrica scarpe.
faticare||sich abmühen|Fatico a capire il dialetto.
ficcare||stecken / hineinstopfen|Ha ficcato tutto nello zaino.
filare||spinnen / laufen (gut)|Tutto fila liscio.
filtrare||filtern|Filtra l'acqua prima di berla.
forare||durchbohren / einen Platten haben|Ho forato una gomma.
forzare||zwingen / aufbrechen|Hanno forzato la porta.
fotografare||fotografieren|Vietato fotografare nel museo.
frugare||durchwühlen|Frugo nella borsa per trovare le chiavi.
gonfiare||aufblasen / anschwellen|Gonfiamo i palloncini per la festa.
grattare||kratzen / reiben|Gratta il formaggio sulla pasta.
gustare||kosten / genießen|Gustate il vino con calma.
gradire||mögen / schätzen|Gradisce un caffè?
illuminare||beleuchten|Le luci illuminano la piazza.
imitare||nachahmen|Il bambino imita il papà.
immergere||eintauchen|Immergi il biscotto nel latte.
improvvisare||improvisieren|Non ho preparato niente, improvviso.
incollare||kleben|Incolla la foto sul quaderno.
incominciare||anfangen|Incominciamo la lezione.
incrociare||kreuzen / begegnen|Ho incrociato Luca per strada.
indovinare||erraten|Indovina chi ho visto ieri!
ingoiare||schlucken|Ingoia la pillola con un po' d'acqua.
inseguire||verfolgen|Il cane insegue il gatto.
insultare||beleidigen|Non insultare l'arbitro!
invecchiare||altern|Il vino migliora invecchiando.
invidiare||beneiden|Ti invidio, vai al mare!
irritare||reizen / ärgern|Il fumo mi irrita gli occhi.
isolare||isolieren|Hanno isolato la casa dal freddo.
`,
"B1 – Verben 9": `
leccare||lecken|Il cane mi lecca la mano.
masticare||kauen|Mastica bene prima di ingoiare.
mischiare||mischen|Mischia le carte.
mordere||beißen|Il cane non morde.
montare||montieren / aufschlagen (Sahne) / steigen|Monta la panna per il dolce.
numerare||nummerieren|Numera le pagine del quaderno.
nutrire||ernähren|La mamma nutre il neonato.
obbedire||gehorchen|Il cane obbedisce al padrone.
onorare||ehren|Onoriamo la memoria dei caduti.
passeggiare||spazieren gehen|Passeggiamo lungo il fiume.
pescare||fischen / angeln / ziehen (Karte)|Domenica andiamo a pescare.
piantare||pflanzen / stehen lassen|Piantiamo un albero in giardino.
picchiare||schlagen / verprügeln|Non picchiare tuo fratello!
pigliare||nehmen / fangen (umgangssprachlich)|Piglia l'ombrello, piove!
porgere||reichen|Mi porge la mano.
posare||ablegen / posieren|Posa la valigia qui.
postare||posten|Ha postato una foto su Instagram.
partorire||gebären|Ha partorito una bambina.
mirare||zielen|Mira al centro del bersaglio.
moltiplicare||multiplizieren / vermehren|Moltiplica tre per quattro.
maturare||reifen|Le pesche maturano al sole.
parare||abwehren / halten (Ball)|Il portiere para il rigore.
pendere||hängen / sich neigen|La torre di Pisa pende.
piazzare||platzieren|Piazza la tenda vicino al lago.
marcare||markieren / decken (Sport)|Marca bene l'attaccante!
mascherare||maskieren / verbergen|Maschera la delusione con un sorriso.
massacrare||niedermetzeln / fertigmachen|La critica ha massacrato il film.
`,
"B1 – Adjektive 4": `
estivo||Sommer-|Ho comprato un vestito estivo.
invernale||Winter-|I saldi invernali iniziano a gennaio.
fastidioso||lästig|Che rumore fastidioso!
faticoso||anstrengend|È stata una giornata faticosa.
favoloso||fabelhaft|Abbiamo fatto un viaggio favoloso.
fedele||treu|Il cane è un amico fedele.
feroce||wild / grausam|Il leone è un animale feroce.
fitto||dicht|C'è una nebbia fitta.
folle||verrückt / wahnsinnig|È un'idea folle!
fortunato||glücklich / Glücks-|Sei fortunato, hai vinto!
fragile||zerbrechlich|Attenzione, il pacco è fragile.
frenetico||hektisch|Milano ha un ritmo frenetico.
furioso||wütend|È furioso con il vicino.
gelido||eiskalt|Soffia un vento gelido.
geniale||genial|Che idea geniale!
gigantesco||riesig|C'è un albero gigantesco nel parco.
ignorante||unwissend / ungebildet|Non sono ignorante, ho solo dimenticato.
imbarazzante||peinlich|È una situazione imbarazzante.
imbarazzato||verlegen|Era imbarazzato e rosso in viso.
immenso||unermesslich / riesig|Il deserto è immenso.
impressionante||beeindruckend|La vista è impressionante.
inaspettato||unerwartet|È stata una visita inaspettata.
incapace||unfähig|È incapace di dire di no.
incerto||unsicher / ungewiss|Il tempo è incerto oggi.
incomprensibile||unverständlich|La sua grafia è incomprensibile.
indifferente||gleichgültig|Per me è indifferente.
indispensabile||unentbehrlich|Il passaporto è indispensabile.
infelice||unglücklich|Si sente infelice da settimane.
ingiusto||ungerecht|È una decisione ingiusta.
innocuo||harmlos|Il ragno è innocuo.
inquietante||beunruhigend / unheimlich|È un film inquietante.
insolito||ungewöhnlich|Fa un caldo insolito per ottobre.
insopportabile||unerträglich|Il rumore è insopportabile.
intatto||unversehrt|Il vaso è arrivato intatto.
interessato||interessiert|Sono interessato al corso.
invisibile||unsichtbar|Vorrei essere invisibile!
`,
"B1 – Adjektive 5": `
lieto||froh / erfreut|Lieto di conoscerla!
lieve||leicht / gering|Ha una lieve febbre.
lucido||glänzend / klar (Kopf)|Il pavimento è lucido.
luminoso||hell / leuchtend|L'appartamento è molto luminoso.
magnifico||großartig|È una giornata magnifica.
maledetto||verflucht / verdammt|Questo maledetto traffico!
malvagio||böse|La strega malvagia vive nel castello.
marcio||faul / verdorben|La mela è marcia.
minuscolo||winzig / klein geschrieben|Abita in un appartamento minuscolo.
misterioso||geheimnisvoll|Ha un sorriso misterioso.
misto||gemischt|Prendo un'insalata mista.
mortale||tödlich / sterblich|È stato un incidente mortale.
muto||stumm|È rimasto muto per la sorpresa.
notturno||nächtlich / Nacht-|Prendo l'autobus notturno.
orribile||schrecklich|Che tempo orribile!
pallido||blass|Sei pallido, stai bene?
patetico||erbärmlich / pathetisch|È una scusa patetica.
perplesso||ratlos / verwirrt|Mi guarda perplesso.
pessimo||sehr schlecht|Il servizio è stato pessimo.
piacevole||angenehm|È stata una serata piacevole.
peggiore||schlechter / schlechteste|È il film peggiore dell'anno.
nobile||edel / adelig|Ha un animo nobile.
materno||mütterlich|Il nonno materno vive a Bari.
infantile||kindlich / kindisch|Non essere infantile!
favorevole||günstig / dafür|Sono favorevole alla proposta.
fallito||gescheitert / pleite|È stato un tentativo fallito.
eterno||ewig|L'amore eterno esiste?
estraneo||fremd / Fremder|Vietato l'ingresso agli estranei.
immediato||sofortig / unmittelbar|Serve un intervento immediato.
identico||identisch|Le due borse sono identiche.
`,
"B1 – Nomen 4": `
facciata|la|Fassade|La facciata della chiesa è di marmo.
fango|il|Schlamm|Le scarpe sono piene di fango.
fantasma|il|Gespenst|Nel castello c'è un fantasma.
fattoria|la|Bauernhof|I bambini visitano una fattoria.
favola|la|Fabel / Märchen|Raccontami una favola!
fiaba|la|Märchen|Cappuccetto Rosso è una fiaba famosa.
fazzoletto|il|Taschentuch|Hai un fazzoletto?
fegato|il|Leber / Mut|Ci vuole fegato per farlo!
ferrovia|la|Eisenbahn|La ferrovia attraversa le Alpi.
fiamma|la|Flamme|Abbassa la fiamma del gas.
fiato|il|Atem|Sono senza fiato dopo la corsa.
filtro|il|Filter|Cambia il filtro della macchinetta.
folla|la|Menschenmenge|Una folla aspetta il cantante.
foro|il|Loch / Forum|Il Foro Romano è pieno di turisti.
fossa|la|Grube / Graben|Hanno scavato una fossa per l'albero.
freccia|la|Pfeil / Blinker|Metti la freccia prima di girare!
frigo|il|Kühlschrank (kurz)|Il latte è in frigo.
fucile|il|Gewehr|Il cacciatore carica il fucile.
funerale|il|Beerdigung|Il funerale è domani mattina.
furgone|il|Lieferwagen|Il furgone porta i mobili.
gabbia|la|Käfig|L'uccellino è nella gabbia.
galera|la|Knast|È finito in galera.
giglio|il|Lilie|Il giglio è il simbolo di Firenze.
giocattolo|il|Spielzeug|Il bambino ha tanti giocattoli.
goccia|la|Tropfen|Cade qualche goccia di pioggia.
gradino|il|Stufe|Attento al gradino!
grano|il|Weizen / Korn|I campi di grano sono gialli d'estate.
grido|il|Schrei|Ho sentito un grido nella notte.
guaio|il|Schwierigkeit / Schlamassel|Siamo nei guai!
icona|l'|Symbol / Ikone|Clicca sull'icona verde.
insetto|l'|Insekt|C'è un insetto sulla finestra.
insegna|l'|Schild / Ladenschild|L'insegna del negozio è rossa.
lama|la|Klinge|La lama del coltello è affilata.
lampo|il|Blitz|Un lampo illumina il cielo.
lastra|la|Platte / Scheibe|Una lastra di ghiaccio copre il lago.
leva|la|Hebel|Tira la leva per aprire.
libretto|il|Heftchen / Libretto|Mostra il libretto delle istruzioni.
magazzino|il|Lager|La merce è in magazzino.
manica|la|Ärmel|Ho una macchia sulla manica.
mantello|il|Umhang / Mantel|Il mago indossa un mantello nero.
`,
"B1 – Nomen 5": `
marmo|il|Marmor|Il pavimento è di marmo di Carrara.
materasso|il|Matratze|Il materasso è troppo duro.
mattone|il|Ziegel|La casa è fatta di mattoni rossi.
mazzo|il|Strauß / Bund / Kartenspiel|Le ho regalato un mazzo di rose.
microfono|il|Mikrofon|Parla nel microfono, per favore.
metallo|il|Metall|La sedia è di metallo.
miniera|la|Bergwerk|Il nonno lavorava in miniera.
mucchio|il|Haufen|C'è un mucchio di vestiti sul letto.
muso|il|Schnauze / Schmollmund|Il gatto ha il muso bianco.
nervo|il|Nerv|Mi dai sui nervi!
nodo|il|Knoten|Fai un nodo alla corda.
nozze|le|Hochzeit|Le nozze sono a giugno.
nube|la|Wolke (gehoben)|Una nube nera copre il sole.
occhiata|l'|Blick|Dai un'occhiata alla pentola!
orlo|l'|Rand / Saum|Il bicchiere è pieno fino all'orlo.
paglia|la|Stroh|Il cappello è di paglia.
palcoscenico|il|Bühne|Gli attori salgono sul palcoscenico.
pallina|la|Kügelchen / kleiner Ball|Il gatto gioca con la pallina.
pezzetto|il|Stückchen|Vuoi un pezzetto di cioccolata?
pianerottolo|il|Treppenabsatz|Il vicino aspetta sul pianerottolo.
pianura|la|Ebene|La pianura padana è molto grande.
piazzale|il|großer Platz / Vorplatz|Parcheggiamo nel piazzale della stazione.
piega|la|Falte|La camicia ha una piega.
pila|la|Batterie / Stapel|Il telecomando ha bisogno di pile nuove.
piombo|il|Blei|Benzina senza piombo, per favore.
polmone|il|Lunge|Il fumo danneggia i polmoni.
pompa|la|Pumpe|Dov'è la pompa della bici?
portone|il|Haustor|Il portone del palazzo è chiuso.
pozzo|il|Brunnen / Schacht|Nel cortile c'è un vecchio pozzo.
perla|la|Perle|Ha una collana di perle.
petrolio|il|Erdöl|Il prezzo del petrolio è salito.
marea|la|Gezeiten / Flut|Con la bassa marea si vede la sabbia.
mattinata|la|Vormittag|Ci vediamo in mattinata.
infarto|l'|Herzinfarkt|Il nonno ha avuto un infarto.
infezione|l'|Infektion|Ha un'infezione all'orecchio.
incubo|l'|Albtraum|Stanotte ho avuto un incubo.
lusso|il|Luxus|Abitano in una villa di lusso.
lutto|il|Trauer|La famiglia è in lutto.
merce|la|Ware|La merce arriva lunedì.
millimetro|il|Millimeter|Manca un millimetro.
`,
"B1 – Adverbien & Ausrufe 2": `
finora||bisher|Finora va tutto bene.
laggiù||dort unten / da hinten|Vedi la casa laggiù?
lassù||dort oben|Lassù in montagna fa freddo.
generalmente||allgemein / normalerweise|Generalmente ceno alle otto.
giustamente||zu Recht|Si è lamentato, giustamente.
improvvisamente||plötzlich|Improvvisamente è andata via la luce.
inizialmente||anfangs|Inizialmente non mi piaceva.
innanzitutto||zuallererst|Innanzitutto, grazie a tutti.
leggermente||leicht / etwas|Sono leggermente in ritardo.
normalmente||normalerweise|Normalmente vado al lavoro in bici.
nuovamente||erneut|Ti ringrazio nuovamente.
oramai||mittlerweile / nun schon|Oramai è troppo tardi.
oltretutto||außerdem / obendrein|È caro e oltretutto brutto.
pochino||ein bisschen|Aspetta un pochino.
mah||tja / na ja|Mah, non so cosa dirti.
oddio||oh Gott!|Oddio, ho dimenticato il forno acceso!
nonché||sowie|Parla inglese e francese, nonché un po' di cinese.
eventualmente||gegebenenfalls|Eventualmente ti chiamo domani.
fortemente||stark / sehr|Sono fortemente contrario.
`,
"B1 – Umgangssprache derb": `
fottere||(vulgär) ficken / reinlegen|Non farti fottere da quel venditore!
fottersene||(vulgär) scheißegal sein|Me ne fotto delle sue opinioni.
minchia||(vulgär, sizilianisch) Schwanz / verdammt!|Minchia, che caldo!
imbecille||Schwachkopf|Quell'imbecille mi ha tagliato la strada!
menare||(umgangssprachlich) verprügeln|Se lo trovo, lo meno!
negro||(rassistisch, schwer beleidigend: NICHT verwenden) N-Wort|Questa parola è un insulto razzista: si dice "nero".
`
});

/* ---------- Teil 2 (e bis p), B2 ---------- */
add({
"B2 – Verben 4": `
estendere||ausdehnen / erweitern|Hanno esteso l'orario di apertura.
estrarre||herausziehen / fördern|Il dentista estrae il dente.
evocare||heraufbeschwören / wachrufen|Questa musica evoca ricordi d'infanzia.
facilitare||erleichtern|La tecnologia facilita il lavoro.
fallire||scheitern / pleitegehen|L'azienda è fallita.
finanziare||finanzieren|La regione finanzia il progetto.
fondere||schmelzen / verschmelzen|Il sole fonde la neve.
governare||regieren|Chi governa il paese?
giacere||liegen (gehoben)|Il libro giace sul tavolo da mesi.
ideare||ausdenken / entwerfen|Ha ideato un nuovo gioco.
imbattersi||stoßen auf|Mi sono imbattuto in un vecchio amico.
imperare||herrschen|In ufficio impera il caos.
implicare||mit sich bringen / verwickeln|Questo lavoro implica molti viaggi.
impostare||einstellen / anlegen|Imposta la sveglia alle sei.
impressionare||beeindrucken / erschrecken|Il film mi ha impressionato.
inaugurare||eröffnen / einweihen|Oggi inaugurano il nuovo museo.
incaricare||beauftragen|Mi hanno incaricato di organizzare la gita.
incassare||einnehmen / einstecken|Il film ha incassato molti soldi.
incastrare||einpassen / hereinlegen|Lo hanno incastrato con prove false.
includere||einschließen|Il prezzo include la colazione.
incuriosire||neugierig machen|Il titolo mi incuriosisce.
indirizzare||richten / adressieren|Indirizza la lettera al direttore.
indurre||veranlassen / verleiten|Cosa ti ha indotto a cambiare lavoro?
infuriare||wüten / wütend machen|La tempesta infuria sulla costa.
ingannare||täuschen|Le apparenze ingannano.
inquadrare||einordnen / ins Bild nehmen|Bisogna inquadrare il problema.
interagire||interagieren|I bambini interagiscono con il robot.
intercettare||abfangen / abhören|La polizia intercetta le telefonate.
intestare||ausstellen auf (Namen)|La macchina è intestata a mio padre.
intitolare||betiteln / benennen|La scuola è intitolata a un poeta.
`,
"B2 – Verben 5": `
intraprendere||unternehmen / einschlagen|Ha intrapreso la carriera di medico.
intravedere||erahnen / flüchtig sehen|Intravedo una soluzione.
intrecciare||flechten / verflechten|Intreccia i capelli della figlia.
intuire||ahnen / erahnen|Ho intuito subito che c'era un problema.
invadere||einfallen / überschwemmen|I turisti invadono la spiaggia.
invocare||anrufen / berufen auf|Invoca l'aiuto dei santi.
meditare||meditieren / nachdenken|Medito ogni mattina dieci minuti.
mutare||verändern / wechseln|Il tempo muta rapidamente in montagna.
narrare||erzählen|Il libro narra la storia di una famiglia.
necessitare||benötigen|La casa necessita di lavori.
orientare||ausrichten / orientieren|Orienta l'antenna verso sud.
oscurare||verdunkeln / sperren|Le nuvole oscurano il sole.
ostacolare||behindern|Il traffico ostacola i soccorsi.
ovviare||abhelfen|Per ovviare al problema, cambiamo orario.
paragonare||vergleichen|Non paragonarmi a mio fratello!
penetrare||eindringen|L'acqua penetra nel muro.
percorrere||zurücklegen / durchfahren|Percorriamo venti chilometri al giorno.
perseguire||verfolgen (Ziel)|Persegue il suo sogno con passione.
posizionare||positionieren|Posiziona il cursore qui.
estrarre a sorte||auslosen|Estraiamo a sorte il vincitore.
`,
"B2 – Adjektive 4": `
esplosivo||explosiv / Sprengstoff|Ha un carattere esplosivo.
estetico||ästhetisch / Schönheits-|Ha fatto un intervento estetico.
federale||Bundes-|La Germania è una repubblica federale.
ferroviario||Eisenbahn-|La stazione ferroviaria è vicina.
filosofico||philosophisch|È una domanda filosofica.
fluido||flüssig|Parla un italiano fluido.
formale||formell|È una cena formale.
funzionale||funktional / zweckmäßig|La cucina è piccola ma funzionale.
generico||allgemein / unspezifisch|È una risposta troppo generica.
genetico||genetisch|È una malattia genetica.
giovanile||jugendlich / Jugend-|C'è molta disoccupazione giovanile.
giudiziario||gerichtlich / Justiz-|È iniziato il processo giudiziario.
giuridico||juristisch|È una questione giuridica.
grandioso||großartig / grandios|È un progetto grandioso.
ideologico||ideologisch|È un conflitto ideologico.
idrico||Wasser-|C'è una crisi idrica al sud.
ignoto||unbekannt|Il ladro è ancora ignoto.
illecito||unerlaubt / rechtswidrig|È un guadagno illecito.
illustre||berühmt / angesehen|È un illustre scienziato.
immaginario||imaginär / eingebildet|Il bambino ha un amico immaginario.
impegnativo||anspruchsvoll|È un lavoro impegnativo.
imperiale||kaiserlich|Roma imperiale era enorme.
individuale||individuell / Einzel-|Faccio lezioni individuali.
indiretto||indirekt|È un discorso indiretto.
inedito||unveröffentlicht / neu|È un testo inedito di Pasolini.
inesistente||nicht vorhanden|Il problema è inesistente.
informativo||informativ|È un opuscolo informativo.
innovativo||innovativ|È un'azienda innovativa.
interiore||innerlich|Cerca la pace interiore.
intimo||intim / vertraut|È un amico intimo.
istituzionale||institutionell|È una visita istituzionale.
laico||weltlich / laizistisch|L'Italia è uno Stato laico.
laterale||seitlich / Seiten-|Entra dalla porta laterale.
lecito||erlaubt|È lecito chiedere?
letterario||literarisch|Ha vinto un premio letterario.
`,
"B2 – Adjektive 5": `
liberale||liberal|È un partito liberale.
lineare||linear / geradlinig|La trama è semplice e lineare.
lirico||lyrisch / Opern-|Amo la musica lirica.
logico||logisch|È logico, no?
massiccio||massiv / umfangreich|C'è stata una partecipazione massiccia.
matrimoniale||Ehe- / Doppel-|Una camera matrimoniale, per favore.
medesimo||derselbe|Abbiamo la medesima opinione.
medievale||mittelalterlich|È un borgo medievale.
metallico||metallisch|Sento un rumore metallico.
metropolitano||großstädtisch / U-Bahn-|La rete metropolitana è efficiente.
mero||bloß / rein|È stata una mera coincidenza.
moderato||gemäßigt / mäßig|Ha opinioni moderate.
monetario||Währungs-|È una crisi monetaria.
multinazionale||multinational / Konzern|Lavora per una multinazionale.
multiplo||mehrfach / Vielfaches|Dieci è un multiplo di cinque.
muscolare||Muskel-|Ho un dolore muscolare.
nasale||Nasen-|Uso uno spray nasale.
natalizio||weihnachtlich|Il mercatino natalizio apre domani.
neutro||neutral / sächlich|Scegli un colore neutro.
obbligatorio||verpflichtend|Il casco è obbligatorio.
oggettivo||objektiv|Cerca di essere oggettivo.
olimpico||olympisch|Ha vinto la medaglia olimpica.
omonimo||gleichnamig|Il film è tratto dal romanzo omonimo.
operativo||operativ / einsatzbereit|Il sistema è operativo.
opportuno||angebracht / passend|Non è il momento opportuno.
ordinario||gewöhnlich / ordentlich|È una giornata ordinaria.
originario||ursprünglich / stammend|È originario della Sicilia.
orizzontale||waagerecht|Disegna una linea orizzontale.
ostile||feindlich|L'ambiente è ostile.
parallelo||parallel|Le due strade sono parallele.
parlamentare||parlamentarisch / Abgeordneter|È un sistema parlamentare.
parziale||teilweise / parteiisch|Il risultato è parziale.
pasquale||Oster-|Mangiamo la colomba pasquale.
passivo||passiv|Non essere così passivo!
penale||Straf-|Ha un processo penale in corso.
periodico||periodisch / Zeitschrift|Fa controlli periodici dal medico.
permanente||ständig / Dauerwelle|È una mostra permanente.
poetico||poetisch|È un paesaggio poetico.
potenziale||potenziell / Potenzial|È un potenziale cliente.
misero||elend / kümmerlich|Guadagna uno stipendio misero.
marino||Meeres-|L'acqua marina è salata.
iscritto||eingeschrieben / Mitglied|Sono iscritto all'università.
isolato||isoliert / Häuserblock|Abita due isolati più avanti.
perduto||verloren|Il paradiso perduto.
mancato||verpasst / gescheitert|È stata un'occasione mancata.
`,
"B2 – Adverbien 2": `
essenzialmente||im Wesentlichen|È essenzialmente una questione di soldi.
estremamente||äußerst|È estremamente difficile.
fisicamente||körperlich|Sono fisicamente stanco.
fondamentalmente||grundsätzlich|Fondamentalmente sono d'accordo.
indipendentemente||unabhängig|Vengo indipendentemente dal tempo.
inevitabilmente||unvermeidlich|Inevitabilmente siamo arrivati tardi.
interamente||vollständig|La casa è interamente ristrutturata.
letteralmente||buchstäblich|Sono letteralmente morto di fame.
liberamente||frei|Puoi parlare liberamente.
maggiormente||mehr / stärker|Sono maggiormente interessato alla storia.
necessariamente||notwendigerweise|Non è necessariamente vero.
mediante||mittels|Si paga mediante bonifico.
ove||wo / falls (gehoben)|Ove necessario, chiamate il medico.
`,
"B2 – Staat, Recht & Gesellschaft 2": `
fascismo|il|Faschismus|Il fascismo è durato vent'anni.
fascista||faschistisch / Faschist|Il regime fascista cadde nel 1943.
nazista||nationalsozialistisch / Nazi|La Germania nazista invase la Polonia.
partigiano|il|Partisan|Il nonno era partigiano.
mafia|la|Mafia|La lotta alla mafia continua.
mafioso||mafiös / Mafioso|Il mafioso è stato arrestato.
magistratura|la|Justiz / Richterschaft|La magistratura è indipendente.
mandato|il|Mandat / Haftbefehl|Hanno emesso un mandato d'arresto.
maresciallo|il|Hauptfeldwebel / Polizeimeister|Il maresciallo dei carabinieri interroga i testimoni.
inchiesta|l'|Untersuchung / Ermittlung|È stata aperta un'inchiesta.
indizio|l'|Indiz / Hinweis|La polizia ha trovato un indizio.
interrogatorio|l'|Verhör|L'interrogatorio è durato ore.
intercettazione|l'|Abhören|Le intercettazioni sono finite sui giornali.
perquisizione|la|Durchsuchung|La polizia ha fatto una perquisizione.
ordinanza|l'|Verordnung|Il sindaco ha firmato un'ordinanza.
licenza|la|Lizenz / Genehmigung|Il negozio ha la licenza per gli alcolici.
locazione|la|Vermietung|Il contratto di locazione dura quattro anni.
notaio|il|Notar|Firmiamo dal notaio.
perito|il|Gutachter|Il perito valuta i danni.
funzionario|il|Beamter|Un funzionario del comune risponde.
governatore|il|Gouverneur|Il governatore della banca centrale parla oggi.
imperatore|l'|Kaiser|Augusto fu il primo imperatore romano.
impero|l'|Reich / Imperium|L'impero romano era immenso.
ideologia|l'|Ideologie|Ogni partito ha la sua ideologia.
istanza|l'|Antrag / Instanz|Ho presentato un'istanza al comune.
liberazione|la|Befreiung|Il 25 aprile è la Festa della Liberazione.
indipendenza|l'|Unabhängigkeit|Il paese ha ottenuto l'indipendenza.
occupazione|l'|Besetzung / Beschäftigung|L'occupazione giovanile è in crescita.
nomina|la|Ernennung|È arrivata la nomina del nuovo ministro.
invasione|l'|Invasion|È stata un'invasione di turisti.
minaccia|la|Drohung / Bedrohung|È una minaccia per l'ambiente.
lega|la|Liga / Bund / Legierung|La squadra gioca in una lega minore.
patria|la|Heimat / Vaterland|Torna in patria dopo anni.
fondazione|la|Stiftung / Gründung|La fondazione finanzia la ricerca.
fondatore|il|Gründer|Il fondatore dell'azienda è mio nonno.
finanza|la|Finanz(en)|Lavora nel mondo della finanza.
fascicolo|il|Akte / Heft|Il giudice legge il fascicolo.
giuramento|il|Eid / Schwur|Il presidente presta giuramento.
inviato|l'|Gesandter / Korrespondent|L'inviato del giornale è a Kiev.
esponente|l'|Vertreter / Exponent|È un esponente del partito.
patrimonio|il|Vermögen / Erbe|Venezia è patrimonio dell'umanità.
offesa|l'|Beleidigung|Non era un'offesa, solo una battuta.
esposizione|l'|Ausstellung / Belichtung|Visitiamo l'esposizione di Picasso.
`,
"B2 – Wissenschaft & Technik 3": `
fibra|la|Faser / Glasfaser|Abbiamo internet in fibra ottica.
idrogeno|l'|Wasserstoff|L'acqua contiene idrogeno e ossigeno.
ossigeno|l'|Sauerstoff|In alta montagna c'è meno ossigeno.
ormone|l'|Hormon|Gli ormoni influenzano l'umore.
membrana|la|Membran|La cellula ha una membrana.
particella|la|Teilchen|L'atomo contiene particelle più piccole.
linfa|la|Lymphe / Pflanzensaft|La linfa scorre nelle piante.
ingegneria|l'|Ingenieurwesen|Studia ingegneria a Torino.
linguistica|la|Sprachwissenschaft|La linguistica studia le lingue.
infrastruttura|l'|Infrastruktur|Servono nuove infrastrutture.
patologia|la|Krankheitsbild / Pathologie|È una patologia rara.
polo|il|Pol|Al polo nord fa freddissimo.
picco|il|Gipfel / Spitze|Il traffico ha un picco alle otto.
navigazione|la|Navigation / Schifffahrt|Il sistema di navigazione indica la strada.
montaggio|il|Montage / Schnitt (Film)|Il montaggio del film dura mesi.
manutenzione|la|Wartung|L'ascensore è in manutenzione.
lavorazione|la|Verarbeitung|La lavorazione del vetro a Murano è famosa.
funzionamento|il|Funktionsweise|Spiegami il funzionamento della macchina.
estrazione|l'|Förderung / Ziehung|L'estrazione del lotto è stasera.
esplosione|l'|Explosion|C'è stata un'esplosione in fabbrica.
frequenza|la|Häufigkeit / Frequenz|Con che frequenza vai in palestra?
frazione|la|Bruch / Ortsteil|Un mezzo è una frazione.
modifica|la|Änderung|Ho fatto una modifica al testo.
modificazione|la|Veränderung|Ci sono state modificazioni genetiche.
impostazione|l'|Einstellung / Ansatz|Cambia le impostazioni del telefono.
inserimento|l'|Eingabe / Eingliederung|L'inserimento dei dati è lento.
matricola|la|Matrikelnummer / Erstsemester|Qual è il tuo numero di matricola?
`,
"B2 – Abstrakte Nomen 3": `
essenza|l'|Wesen / Essenz|Questa è l'essenza del problema.
estensione|l'|Ausdehnung / Erweiterung|Il parco ha un'estensione enorme.
estremità|l'|Ende / Spitze|Siamo all'estremità della spiaggia.
facilità|la|Leichtigkeit|Impara le lingue con facilità.
fascino|il|Reiz / Charme|Roma ha un fascino unico.
fedeltà|la|Treue|La fedeltà del cane è commovente.
finalità|la|Zweck / Ziel|Qual è la finalità del progetto?
flusso|il|Fluss / Strom|C'è un flusso continuo di turisti.
follia|la|Wahnsinn|È una follia uscire con questa tempesta!
formato|il|Format|Il file è in formato PDF.
frammento|il|Bruchstück|Ho trovato un frammento di vaso antico.
furia|la|Wut / Raserei|Esce di casa in tutta furia.
giovinezza|la|Jugend|Ricorda la sua giovinezza a Roma.
gloria|la|Ruhm|Ha raggiunto la gloria con un solo film.
grandezza|la|Größe|Non capisco la grandezza dell'universo.
identificazione|l'|Identifizierung|Serve un documento di identificazione.
illusione|l'|Illusion / Täuschung|È solo un'illusione ottica.
impulso|l'|Impuls / Antrieb|Ho comprato le scarpe d'impulso.
incapacità|l'|Unfähigkeit|Ammette la sua incapacità di decidere.
incarico|l'|Auftrag / Amt|Ha ricevuto un incarico importante.
incremento|l'|Zuwachs|C'è stato un incremento delle vendite.
inferno|l'|Hölle|In agosto la città è un inferno.
inganno|l'|Täuschung / Betrug|È stato vittima di un inganno.
insegnamento|l'|Unterricht / Lehre|L'insegnamento è la mia passione.
intensità|l'|Intensität|L'intensità della pioggia aumenta.
intento|l'|Absicht|Il suo intento era aiutare.
interazione|l'|Wechselwirkung|L'interazione con gli utenti è importante.
interpretazione|l'|Interpretation / Darstellung|L'interpretazione dell'attore è magnifica.
interruzione|l'|Unterbrechung|C'è un'interruzione della corrente.
intesa|l'|Einverständnis / Abkommen|Hanno raggiunto un'intesa.
intimità|l'|Privatsphäre / Vertrautheit|Rispetta la sua intimità.
introduzione|l'|Einleitung / Einführung|Leggi l'introduzione del libro.
intuizione|l'|Intuition / Einfall|Ho avuto un'intuizione geniale.
ira|l'|Zorn|In un momento d'ira ha rotto il piatto.
istinto|l'|Instinkt|Segui il tuo istinto.
`,
"B2 – Abstrakte Nomen 4": `
lancio|il|Wurf / Start / Markteinführung|Il lancio del nuovo telefono è a settembre.
leggenda|la|Legende / Sage|Secondo la leggenda, la città fu fondata da due gemelli.
lesione|la|Verletzung|Ha una lesione al ginocchio.
logica|la|Logik|Non c'è logica in questa decisione.
lontananza|la|Ferne / Entfernung|La lontananza dalla famiglia è dura.
lunghezza|la|Länge|Qual è la lunghezza della piscina?
maceria|la|Trümmer (meist Mehrzahl)|Dopo il terremoto restano solo macerie.
magia|la|Magie / Zauber|Il Natale ha una sua magia.
maledizione|la|Fluch|Nella leggenda c'è una maledizione.
mania|la|Manie / Tick|Ha la mania dell'ordine.
manifesto|il|Plakat / Manifest|Hanno appeso un manifesto del concerto.
manoscritto|il|Manuskript / Handschrift|La biblioteca conserva manoscritti antichi.
manuale|il|Handbuch / manuell|Leggi il manuale d'istruzioni.
marchio|il|Marke / Markenzeichen|È un marchio famoso di moda.
marcia|la|Marsch / Gang (Auto)|Metti la prima marcia.
maternità|la|Mutterschaft|È in maternità fino a marzo.
maturità|la|Reife / Abitur|Quest'anno faccio l'esame di maturità.
menzogna|la|Lüge|È tutta una menzogna.
millennio|il|Jahrtausend|Siamo nel terzo millennio.
mentalità|la|Mentalität / Denkweise|Ha una mentalità aperta.
miglioramento|il|Verbesserung|C'è un miglioramento visibile.
mito|il|Mythos / Idol|È un mito del calcio.
modalità|la|Modus / Art und Weise|Attiva la modalità aereo.
modernità|la|Modernität|Il palazzo unisce storia e modernità.
monologo|il|Monolog|L'attore recita un lungo monologo.
mossa|la|Zug / Bewegung|È stata una mossa intelligente.
mutamento|il|Wandel|È un periodo di grandi mutamenti.
narrazione|la|Erzählung|La narrazione è in terza persona.
normalità|la|Normalität|Dopo la festa torniamo alla normalità.
nozione|la|Begriff / Kenntnis|Ho perso la nozione del tempo.
nucleo|il|Kern|Il nucleo familiare è di quattro persone.
omaggio|l'|Huldigung / Gratisgabe|In omaggio c'è una borsa.
ondata|l'|Welle|È arrivata un'ondata di caldo.
opzione|l'|Option|Abbiamo due opzioni.
ossessione|l'|Besessenheit|Il calcio è la sua ossessione.
orrore|l'|Grauen / Horror|Guardiamo un film dell'orrore.
osservazione|l'|Beobachtung / Bemerkung|Ho un'osservazione da fare.
`,
"B2 – Abstrakte Nomen 5": `
panico|il|Panik|Niente panico!
paradiso|il|Paradies|Questa spiaggia è un paradiso.
parentesi|la|Klammer|Scrivi la risposta tra parentesi.
partecipazione|la|Teilnahme|Grazie per la partecipazione.
perdono|il|Vergebung|Ti chiedo perdono.
percezione|la|Wahrnehmung|La percezione del rischio è diversa.
perfezione|la|Perfektion|Il dolce è cotto alla perfezione.
pietà|la|Mitleid / Erbarmen|Abbi pietà di me!
posa|la|Pose / Verlegung|Fai una posa per la foto.
possesso|il|Besitz|È in possesso di un regolare biglietto.
potenza|la|Macht / Leistung|La potenza del motore è notevole.
`
});
/* Nachträge Teil 2 */
add({
"B1 – Nomen 5": `
filmato|il|Video / Filmaufnahme|Ho girato un filmato della festa.
grammatica|la|Grammatik|La grammatica italiana non è facile.
insulto|l'|Beleidigung|Non accetto insulti.
oroscopo|l'|Horoskop|Leggi l'oroscopo ogni mattina?
pellicola|la|Film (Material) / Frischhaltefolie|Copri la ciotola con la pellicola.
ottavo||achter|Abito all'ottavo piano.
nono||neunter|È il nono giorno di pioggia.
mora|la|Brombeere / Säumniszuschlag|Raccogliamo le more nel bosco.
`,
"B1 – Menschen & Rollen 3": `
filosofo|il|Philosoph|Socrate era un filosofo greco.
gestore|il|Betreiber / Anbieter|Ho cambiato gestore telefonico.
`,
"B2 – Religion & Kultur": `
madonna|la|Madonna / Gottesmutter|In chiesa c'è una statua della Madonna.
messa|la|Messe|La messa inizia alle undici.
medioevo|il|Mittelalter|Il castello risale al Medioevo.
poema|il|(langes) Gedicht / Epos|La Divina Commedia è un poema.
`,
"B2 – Abstrakte Nomen 5": `
ignoranza|l'|Unwissenheit|L'ignoranza è il nemico peggiore.
interrogativo|l'|Frage / fragend|Resta un grande interrogativo.
portale|il|Portal|Prenota sul portale del comune.
`
});

/* ---------- Teil 3 (p bis z), B1 ---------- */
add({
"B1 – Menschen & Rollen 4": `
prigioniero|il|Gefangener|Il prigioniero è riuscito a fuggire.
principessa|la|Prinzessin|La principessa vive nella torre.
produttore|il|Produzent / Hersteller|È un produttore di vino.
prof|il|Lehrer (Schülersprache)|Il prof di matematica è severo.
professoressa|la|Lehrerin / Professorin|La professoressa corregge i compiti.
profeta|il|Prophet|Nessuno è profeta in patria.
psichiatra|lo|Psychiater|Lo psichiatra lavora in ospedale.
ragioniere|il|Buchhalter|Il ragioniere controlla i conti.
residente|il|Einwohner / ansässig|Il parcheggio è riservato ai residenti.
rivale|il|Rivale / Gegner|La squadra batte la sua rivale storica.
sacerdote|il|Priester|Il sacerdote benedice gli sposi.
salvatore|il|Retter|Sei il mio salvatore!
schiavo|lo|Sklave|Non sono il tuo schiavo!
secchione|il|Streber|In classe lo chiamano il secchione.
senatore|il|Senator|Il senatore ha votato contro.
sergente|il|Feldwebel|Il sergente grida gli ordini.
socio|il|Mitglied / Teilhaber|È socio di un club sportivo.
sostenitore|il|Unterstützer / Anhänger|I sostenitori applaudono il candidato.
spia|la|Spion / Kontrollleuchte|Si è accesa la spia della benzina.
studioso|lo|Gelehrter / fleißig|È uno studioso di Dante.
suddito|il|Untertan|Il re parla ai suoi sudditi.
tenente|il|Leutnant|Il tenente guida la pattuglia.
teologo|il|Theologe|Il teologo spiega il testo biblico.
terrorista|il|Terrorist|Hanno arrestato un terrorista.
titolare|il|Inhaber / Stammspieler|Il titolare del bar è gentile.
tizio|il|Typ / Kerl|Un tizio mi ha chiesto l'ora.
vedova|la|Witwe|La vedova vive da sola.
venditore|il|Verkäufer|Il venditore mi ha fatto uno sconto.
vincitore|il|Sieger|Il vincitore riceve una coppa.
visitatore|il|Besucher|Il museo ha molti visitatori.
volontario|il|Freiwilliger / freiwillig|Fa il volontario alla Croce Rossa.
vampiro|il|Vampir|Ha paura dei vampiri.
sovrano|il|Herrscher / souverän|Il sovrano governa da trent'anni.
procuratore|il|Staatsanwalt / Bevollmächtigter|Il procuratore chiede la condanna.
premier|il|Premierminister|Il premier parla in TV stasera.
prostituta|la|Prostituierte|Il film racconta la vita di una prostituta.
`,
"B1 – Verben 10": `
praticare||ausüben / betreiben|Pratico sport tre volte a settimana.
premere||drücken|Premi il tasto verde.
profumare||duften|Il pane appena fatto profuma.
proibire||verbieten|È proibito fumare qui.
raddoppiare||verdoppeln|Il prezzo è raddoppiato.
rallentare||verlangsamen / bremsen|Rallenta, c'è una scuola!
rapire||entführen|Nel film rapiscono una bambina.
rassicurare||beruhigen|Il medico ci rassicura.
riaprire||wieder öffnen|Il museo riapre domani.
ricambiare||erwidern|Ricambio volentieri gli auguri.
richiudere||wieder schließen|Richiudi il barattolo!
rileggere||nochmals lesen|Rileggi il testo prima di consegnarlo.
rimproverare||tadeln / schimpfen|La mamma rimprovera il figlio.
ripartire||wieder abfahren / aufteilen|Il treno riparte tra cinque minuti.
ripensare||nochmals überlegen|Ci ho ripensato: vengo anch'io.
riprovare||es nochmal versuchen|Non ci sono riuscito, riprovo.
ripulire||sauber machen|Ripulisci la cucina, per favore.
risvegliare||aufwecken|Il rumore mi ha risvegliato.
ritagliare||ausschneiden|Ritaglia le figure dal giornale.
rovesciare||umkippen / verschütten|Ho rovesciato il caffè sul tavolo.
ruotare||drehen / rotieren|La Terra ruota intorno al Sole.
scaldare||wärmen / aufwärmen|Scaldo il latte per la colazione.
scalare||besteigen / klettern|Vogliono scalare il Monte Rosa.
scavare||graben|Il cane scava una buca.
schiacciare||zerdrücken / drücken|Schiaccia l'aglio con la forchetta.
scivolare||ausrutschen / gleiten|Sono scivolato sul ghiaccio.
scommettere||wetten|Scommetto che arriva in ritardo.
scordare||vergessen|Ho scordato il portafoglio a casa.
scuotere||schütteln|Scuote la testa.
sdraiarsi||sich hinlegen|Mi sdraio sul divano.
seccare||trocknen / nerven|Mi secca aspettare.
seminare||säen|Il contadino semina il grano.
sfogliare||durchblättern|Sfoglio una rivista dal parrucchiere.
soffiare||blasen / pusten|Soffia sulle candeline!
somigliare||ähneln|Somigli molto a tua madre.
sommare||addieren|Somma tutti i numeri.
sospirare||seufzen|Sospira e guarda fuori dalla finestra.
sporcare||schmutzig machen|Non sporcare il tappeto!
sputare||spucken|È vietato sputare per terra.
squillare||klingeln|Il telefono squilla.
stancare||ermüden|Il viaggio mi ha stancato.
`,
"B1 – Verben 11": `
strappare||zerreißen / herausreißen|Ha strappato la lettera.
strillare||kreischen|I bambini strillano in cortile.
succhiare||lutschen / saugen|Il bambino succhia il pollice.
svuotare||ausleeren|Svuota la lavastoviglie, per favore.
tifare||(Fan sein) halten zu|Per che squadra tifi?
tremare||zittern|Tremo dal freddo.
urtare||anstoßen|Ho urtato il tavolo con il ginocchio.
tappare||verstopfen / zustöpseln|Tappa la bottiglia.
puzzare||stinken|Il pesce puzza.
spalancare||weit aufreißen|Spalanca la finestra, fa caldo!
spazzare||fegen|Spazza il pavimento.
spezzare||zerbrechen|Ha spezzato il pane in due.
splendere||scheinen / strahlen|Oggi splende il sole.
sfiorare||streifen / leicht berühren|La palla sfiora il palo.
sbarcare||an Land gehen|I turisti sbarcano a Capri.
sfilare||vorbeiziehen / herausziehen|I modelli sfilano in passerella.
smontare||abbauen / zerlegen|Smontiamo la tenda.
sforzarsi||sich anstrengen|Mi sforzo di parlare solo italiano.
spuntare||auftauchen / sprießen|Sono spuntati i primi fiori.
scatenare||auslösen / entfesseln|La notizia ha scatenato una polemica.
sprofondare||versinken|Volevo sprofondare dalla vergogna.
strisciare||kriechen|Il serpente striscia nell'erba.
torcere||verdrehen / auswringen|Torci bene l'asciugamano.
vagare||umherirren|Vaghiamo per le strade di Venezia.
vibrare||vibrieren|Il telefono vibra in tasca.
testare||testen|Testiamo il nuovo programma.
tracciare||ziehen / nachverfolgen|Traccia una linea dritta.
trasportare||transportieren|Il camion trasporta frutta.
sfidare||herausfordern|Ti sfido a una partita a scacchi.
spaventare||erschrecken|Il tuono spaventa il cane.
spassarsela||sich amüsieren|Al mare ce la spassiamo.
scontrarsi||zusammenstoßen|Due macchine si sono scontrate.
sorgere||aufgehen (Sonne) / entstehen|Il sole sorge alle sei.
spiare||ausspionieren|Il vicino ci spia dalla finestra.
`,
"B1 – Adjektive 6": `
prevedibile||vorhersehbar|Il finale del film è prevedibile.
privo||ohne / frei von|La bevanda è priva di zucchero.
raffinato||raffiniert / fein|Ha un gusto raffinato.
ragionevole||vernünftig|È un prezzo ragionevole.
realistico||realistisch|Il tuo piano non è realistico.
resistente||widerstandsfähig / robust|Questo zaino è molto resistente.
ridicolo||lächerlich|Che cappello ridicolo!
rigido||starr / streng|L'inverno è stato rigido.
rischioso||riskant|È un investimento rischioso.
robusto||kräftig / robust|È un ragazzo robusto.
rotto||kaputt / gebrochen|Il telefono è rotto.
scarso||gering / schlecht|La visibilità è scarsa.
sciocco||dumm / albern|Che domanda sciocca!
selvaggio||wild|È una spiaggia selvaggia.
sentimentale||sentimental|È un film sentimentale.
sentito||herzlich / gehört|Sentite condoglianze.
solido||fest / solide|È una casa solida.
sordo||taub|Il nonno è un po' sordo.
spaventato||erschrocken|Il gatto è spaventato dai fuochi d'artificio.
spaventoso||furchtbar|C'è un traffico spaventoso.
spento||ausgeschaltet / erloschen|Il telefono è spento.
spettacolare||spektakulär|Il panorama è spettacolare.
splendido||herrlich|È una giornata splendida.
stabile||stabil / fest|Il tempo è stabile.
stampato||gedruckt / Ausdruck|Porta il biglietto stampato.
stupendo||wunderschön|Il tramonto è stupendo.
stupito||erstaunt|Sono stupito dal risultato.
tondo||rund|Il tavolo è tondo.
tragico||tragisch|È stato un incidente tragico.
trasparente||durchsichtig / transparent|Il sacchetto è trasparente.
tremendo||furchtbar|Ho un mal di testa tremendo.
ubriaco||betrunken|È tornato a casa ubriaco.
vago||vage / ungenau|Ho un ricordo vago.
vano||vergeblich / Raum|Tutti i tentativi sono stati vani.
verticale||senkrecht|Disegna una linea verticale.
visibile||sichtbar|La montagna è visibile da qui.
vivente||lebend|È il più grande artista vivente.
volgare||vulgär / ordinär|Non usare parole volgari.
quadrato||quadratisch / Quadrat|La stanza è quadrata.
regolare||regelmäßig / regulär|Fa sport in modo regolare.
`,
"B1 – Adjektive 7": `
sparso||verstreut|I vestiti sono sparsi per la stanza.
ristretto||eng / eingeschränkt|Un caffè ristretto, per favore.
sospeso||aufgehoben / hängend / ausgesetzt|Il volo è sospeso per sciopero.
sotterraneo||unterirdisch|C'è un parcheggio sotterraneo.
spietato||erbarmungslos|È un killer spietato.
tossico||giftig|Questo prodotto è tossico.
toscano||toskanisch|Mangiamo pane toscano senza sale.
sardo||sardisch / Sarde|Il pecorino sardo è buonissimo.
siciliano||sizilianisch / Sizilianer|I cannoli siciliani sono famosi.
veneto||venezianisch (Region Venetien)|Il prosecco è un vino veneto.
provinciale||Provinz- / provinziell|Prendiamo la strada provinciale.
regionale||regional|Prendo il treno regionale.
statunitense||US-amerikanisch|Il presidente statunitense visita Roma.
sovietico||sowjetisch|L'Unione Sovietica finì nel 1991.
vincente||siegreich / Gewinn-|Ha comprato il biglietto vincente.
sesto||sechster|È arrivato sesto nella gara.
pubblicitario||Werbe-|Ho visto un cartellone pubblicitario.
settimanale||wöchentlich / Wochenzeitschrift|Compro un settimanale di cucina.
stradale||Straßen-|È stato un incidente stradale.
terrestre||irdisch / Land-|La crosta terrestre è sottile.
vegetale||pflanzlich|Uso il latte vegetale.
virtuale||virtuell|Facciamo una visita virtuale del museo.
`,
"B1 – Nomen 6": `
preda|la|Beute|Il leone insegue la preda.
proiettile|il|Geschoss / Kugel|Hanno trovato un proiettile.
pulsante|il|Knopf / Taste|Premi il pulsante rosso.
puntata|la|Folge (Serie)|Stasera c'è l'ultima puntata.
puzza|la|Gestank|Che puzza di fumo!
rame|il|Kupfer|Le pentole di rame sono belle.
reggiseno|il|BH|Ha comprato un reggiseno nuovo.
rene|il|Niere|Ha un problema ai reni.
retro|il|Rückseite|Scrivi il nome sul retro.
risata|la|Gelächter / Lachen|Che risate ieri sera!
rissa|la|Schlägerei|C'è stata una rissa davanti al bar.
rubrica|la|Adressbuch / Rubrik|Salva il numero in rubrica.
ruota|la|Rad|Bisogna cambiare la ruota.
salita|la|Anstieg / Steigung|La salita è faticosa.
salone|il|Salon / Halle / Messe|Il salone del mobile è a Milano.
salsa|la|Soße|Mi piace la salsa di pomodoro.
salto|il|Sprung|Faccio un salto in panetteria.
sasso|il|Stein|Lancia un sasso nel fiume.
scheda|la|Karte / Formular / Datenblatt|Inserisci la scheda nel telefono.
scherzo|lo|Scherz|Era solo uno scherzo!
schiaffo|lo|Ohrfeige|Gli ha dato uno schiaffo.
scritta|la|Aufschrift|Sul muro c'è una scritta.
secchio|il|Eimer|Riempi il secchio d'acqua.
sedile|il|Sitz|Il sedile posteriore è libero.
sfondo|lo|Hintergrund|Cambia lo sfondo del computer.
sigla|la|Abkürzung / Titelmelodie|Qual è la sigla della provincia?
solco|il|Furche / Rille|Il trattore lascia solchi nel campo.
sorgente|la|Quelle|L'acqua di sorgente è fresca.
sosta|la|Halt / Rast / Parken|Divieto di sosta!
spada|la|Schwert|Il cavaliere estrae la spada.
spina|la|Dorn / Gräte / Stecker|Attento alle spine del pesce!
sponda|la|Ufer|Ci sediamo sulla sponda del lago.
stalla|la|Stall|Le mucche dormono nella stalla.
statua|la|Statue|La statua del David è a Firenze.
stoffa|la|Stoff|La tenda è di stoffa leggera.
straccio|lo|Lappen|Pulisci con uno straccio umido.
striscia|la|Streifen|La maglia ha strisce blu.
sudore|il|Schweiß|Dopo la corsa sono pieno di sudore.
tabella|la|Tabelle|Guarda la tabella degli orari.
tacco|il|Absatz (Schuh)|Porta scarpe con il tacco alto.
`,
"B1 – Nomen 7": `
tasto|il|Taste|Premi un tasto qualsiasi.
tatuaggio|il|Tattoo|Ha un tatuaggio sul braccio.
tavolino|il|Tischchen|Ci sediamo a un tavolino all'aperto.
tela|la|Leinwand / Leinen|Il quadro è dipinto su tela.
telecamera|la|Kamera|C'è una telecamera all'ingresso.
telefonino|il|Handy|Spegni il telefonino in classe!
televisore|il|Fernseher|Abbiamo un televisore nuovo.
teschio|il|Totenkopf / Schädel|La bandiera dei pirati ha un teschio.
tessuto|il|Gewebe / Stoff|È un tessuto morbido.
tomba|la|Grab|Portiamo fiori sulla tomba dei nonni.
toro|il|Stier|Il toro corre nel campo.
trappola|la|Falle|Il topo è finito in trappola.
triangolo|il|Dreieck|Disegna un triangolo.
tronco|il|Baumstamm / Rumpf|Ci sediamo su un tronco.
trono|il|Thron|Il re siede sul trono.
trucco|il|Trick / Schminke|Si toglie il trucco prima di dormire.
tubo|il|Rohr / Schlauch|Il tubo dell'acqua perde.
urlo|l'|Schrei|Ho sentito un urlo.
vacca|la|Kuh|La vacca dà il latte.
vaso|il|Vase / Topf|Metti i fiori nel vaso.
vapore|il|Dampf|Cuocio le verdure al vapore.
veicolo|il|Fahrzeug|Il veicolo è parcheggiato male.
veleno|il|Gift|Il serpente ha un veleno pericoloso.
vena|la|Vene / Ader|L'infermiera cerca la vena.
ventre|il|Bauch / Leib|Ha un dolore al basso ventre.
verme|il|Wurm|Nella mela c'è un verme.
vernice|la|Farbe / Lack|Attenzione, vernice fresca!
vettura|la|Wagen / Fahrzeug|La vettura numero cinque è in testa.
viale|il|Allee|Passeggiamo lungo il viale.
vicolo|il|Gasse|Il ristorante è in un vicolo.
virgola|la|Komma|Metti una virgola dopo "ciao".
vocabolario|il|Wörterbuch / Wortschatz|Cerca la parola sul vocabolario.
scintilla|la|Funke|Tra loro è scoccata la scintilla.
scia|la|Spur / Kielwasser|L'aereo lascia una scia bianca.
scudo|lo|Schild|Il guerriero porta uno scudo.
sfera|la|Kugel / Sphäre|La Terra è quasi una sfera.
schizzo|lo|Skizze / Spritzer|Fai uno schizzo della casa.
satellite|il|Satellit|La Luna è un satellite della Terra.
sottofondo|il|Hintergrund (Musik)|C'è musica di sottofondo.
scommessa|la|Wette|Ho vinto la scommessa!
sciocchezza|la|Dummheit / Kleinigkeit|Non dire sciocchezze!
ventina|la|etwa zwanzig|C'erano una ventina di invitati.
tonnellata|la|Tonne|Il camion pesa dieci tonnellate.
sfilata|la|Modenschau / Umzug|Andiamo a vedere la sfilata di Carnevale.
`,
"B1 – Adverbien 3": `
precisamente||genau|Che cosa vuoi dire, precisamente?
rapidamente||schnell|Il tempo passa rapidamente.
realmente||wirklich|È realmente successo.
regolarmente||regelmäßig|Vado regolarmente dal dentista.
seriamente||ernsthaft|Parliamo seriamente.
semmai||falls überhaupt / eher|Semmai ti chiamo io.
sennò||sonst (umgangssprachlich)|Sbrigati, sennò perdiamo il treno!
solitamente||gewöhnlich|Solitamente pranzo a casa.
specialmente||besonders|Mi piace l'Italia, specialmente il sud.
stanotte||heute Nacht / letzte Nacht|Stanotte ho dormito male.
stavolta||diesmal|Stavolta pago io.
strettamente||streng / eng|È strettamente vietato.
successivamente||anschließend|Successivamente siamo andati a cena.
talvolta||manchmal|Talvolta prendo l'autobus.
tranquillamente||ruhig / ohne weiteres|Puoi tranquillamente arrivare dopo.
ufficialmente||offiziell|Il museo apre ufficialmente domani.
ugualmente||trotzdem / gleichermaßen|Piove, ma usciamo ugualmente.
ulteriormente||weiter / zusätzlich|Il prezzo è sceso ulteriormente.
ultimamente||in letzter Zeit|Ultimamente dormo poco.
prevalentemente||überwiegend|Il clima è prevalentemente secco.
`,
"B1 – Umgangssprache derb": `
puttana||(vulgär) Hure / Nutte|È un insulto molto pesante: puttana.
stronzata|la|(vulgär) Bullshit / Mist|Che stronzata di film!
scopare||fegen / (vulgär) vögeln|Scopa la cucina, per favore. (Achtung: auch vulgär!)
tetta|la|(umgangssprachlich) Titte|È una parola volgare per "seno".
pupa|la|(umgangssprachlich) Puppe / Mädchen|Ciao, pupa!
`
});

/* ---------- Teil 3 (p bis z), B2 ---------- */
add({
"B2 – Verben 6": `
precedere||vorausgehen|Una cena precede il concerto.
precipitare||abstürzen / überstürzen|L'aereo è precipitato in mare.
prescrivere||verschreiben / vorschreiben|Il medico prescrive un antibiotico.
prevalere||überwiegen|Alla fine prevale il buon senso.
privare||berauben / entziehen|Lo hanno privato della patente.
proclamare||verkünden / ausrufen|Hanno proclamato lo stato di emergenza.
procurare||beschaffen / verursachen|Mi puoi procurare due biglietti?
progettare||planen / entwerfen|Progettano una nuova scuola.
promuovere||fördern / versetzen|Lo hanno promosso a direttore.
provvedere||sorgen für|Provvedo io alla cena.
qualificare||qualifizieren|La squadra si è qualificata per la finale.
racchiudere||umschließen / enthalten|Questa frase racchiude tutto.
raccomandare||empfehlen / ans Herz legen|Ti raccomando questo ristorante.
raffigurare||darstellen|Il quadro raffigura una battaglia.
rafforzare||verstärken|Lo sport rafforza i muscoli.
rassegnarsi||sich abfinden|Mi sono rassegnato a lavorare sabato.
regnare||herrschen / regieren|Il silenzio regna nella casa.
respingere||zurückweisen|Hanno respinto la proposta.
restringere||verengen / einlaufen|Il maglione si è ristretto in lavatrice.
rialzare||wieder aufheben / erhöhen|Rialzati, non è niente!
ribadire||bekräftigen|Il ministro ribadisce la sua posizione.
ribellarsi||sich auflehnen|Gli studenti si ribellano alle regole.
ricadere||zurückfallen / fallen auf|La responsabilità ricade su di lui.
ricercare||suchen / erforschen|La polizia ricerca il fuggitivo.
ricoprire||bedecken / bekleiden (Amt)|La neve ricopre i tetti.
ricorrere||zurückgreifen / sich wiederholen|Ricorriamo a un avvocato.
ricostruire||wieder aufbauen / rekonstruieren|Hanno ricostruito il ponte.
ridare||zurückgeben|Ridammi il mio libro!
rifugiarsi||Zuflucht suchen|Ci rifugiamo sotto un portico.
rilasciare||ausstellen / freilassen|Il comune rilascia la carta d'identità.
rilevare||feststellen / übernehmen|Il sensore rileva la temperatura.
rimpiangere||nachtrauern / bereuen|Rimpiango i tempi della scuola.
`,
"B2 – Verben 7": `
rimuovere||entfernen|Rimuovi la macchia con l'aceto.
rinascere||wiedergeboren werden / aufblühen|Dopo la vacanza mi sento rinato.
rinchiudere||einsperren|Hanno rinchiuso il cane in cantina.
rintracciare||ausfindig machen|Non riesco a rintracciare il pacco.
rinvenire||auffinden / zu sich kommen|Hanno rinvenuto un'auto rubata.
riprodurre||wiedergeben / nachbilden|Il disegno riproduce il Colosseo.
riproporre||erneut vorschlagen|Ripropongo la mia idea.
riscuotere||einziehen / ernten (Erfolg)|Il film riscuote un grande successo.
risentire||wieder hören / spüren|La pianta risente del freddo.
risiedere||wohnen / ansässig sein|Risiede a Dortmund da dieci anni.
ritrarre||porträtieren / zurückziehen|Il pittore ritrae la moglie.
rivendicare||beanspruchen / sich bekennen zu|I lavoratori rivendicano i loro diritti.
rivestire||verkleiden / bekleiden (Amt)|Riveste un ruolo importante.
sacrificare||opfern|Ha sacrificato tutto per i figli.
scandire||betonen / deutlich aussprechen|Scandisci bene le parole.
scartare||auspacken / verwerfen|Scartiamo i regali!
schierare||aufstellen|L'allenatore schiera tre attaccanti.
schizzare||spritzen / flitzen|L'olio schizza dalla padella.
sconfiggere||besiegen|Hanno sconfitto la squadra favorita.
sconvolgere||erschüttern / durcheinanderbringen|La notizia mi ha sconvolto.
scorgere||erblicken|Scorgo una luce in lontananza.
sedurre||verführen|La città seduce i visitatori.
selezionare||auswählen|Seleziona il file e clicca su "apri".
seppellire||begraben|Il cane seppellisce l'osso.
sequestrare||beschlagnahmen / entführen|La polizia ha sequestrato la droga.
simulare||vortäuschen / simulieren|Il calciatore simula un fallo.
situare||ansiedeln / gelegen sein|L'hotel è situato in centro.
soffocare||ersticken|Fa così caldo che si soffoca.
sorvegliare||überwachen|Le telecamere sorvegliano il parcheggio.
sospendere||aussetzen / suspendieren|Hanno sospeso la partita per pioggia.
sospettare||verdächtigen / ahnen|Sospetto che stia mentendo.
`,
"B2 – Verben 8": `
sottrarre||abziehen / entziehen|Sottrai cinque da venti.
sovrapporre||übereinanderlegen|Non sovrapporre gli appuntamenti!
spacciare||dealen / ausgeben als|Si spaccia per medico.
spargere||verstreuen / verbreiten|Spargi il sale sulla strada.
spettare||zustehen|Questa decisione spetta a te.
spiccare||hervorstechen|Il campanile spicca sopra i tetti.
stregare||verzaubern|La Sicilia mi ha stregato.
suddividere||unterteilen|Suddividiamo il lavoro in tre parti.
supporre||annehmen / vermuten|Suppongo che sia stanco.
supportare||unterstützen|Il programma supporta molte lingue.
suscitare||hervorrufen|Il film ha suscitato polemiche.
svanire||verschwinden|Il dolore è svanito.
svelare||enthüllen|Il mago non svela i suoi trucchi.
tollerare||dulden / vertragen|Non tollero le bugie.
tormentare||quälen|Il mal di denti mi tormenta.
terrorizzare||in Schrecken versetzen|Il film horror mi ha terrorizzato.
travolgere||mitreißen / überrollen|L'onda ha travolto la barca.
turbare||beunruhigen / stören|La notizia mi ha turbato.
tutelare||schützen|La legge tutela i consumatori.
udire||hören (gehoben)|Ho udito dei passi.
umiliare||demütigen|Non umiliare i tuoi compagni.
valorizzare||aufwerten / zur Geltung bringen|Bisogna valorizzare il territorio.
vantare||sich rühmen / aufweisen|La città vanta un museo famoso.
variare||variieren / sich ändern|I prezzi variano a seconda della stagione.
vendicare||rächen|Vuole vendicare il fratello.
spiacere||leidtun|Mi spiace, non posso venire.
segnalare||melden / hinweisen|Segnala il problema all'assistenza.
`,
"B2 – Adjektive 6": `
preliminare||vorläufig / Vor-|È solo una fase preliminare.
prestigioso||angesehen|Ha studiato in un'università prestigiosa.
presunto||mutmaßlich|Il presunto colpevole è stato arrestato.
preventivo||vorbeugend / Kostenvoranschlag|Chiedi un preventivo all'idraulico.
primario||primär / Chefarzt|È una questione di primaria importanza.
problematico||problematisch|È una situazione problematica.
produttivo||produktiv|È stata una giornata produttiva.
progressivo||fortschreitend|C'è un aumento progressivo dei prezzi.
provvisorio||vorläufig|È una soluzione provvisoria.
psichico||psychisch|Lo stress causa problemi psichici.
quantitativo||mengenmäßig / Menge|È un'analisi quantitativa.
razionale||rational / vernünftig|È una scelta razionale.
reciproco||gegenseitig|C'è un rispetto reciproco.
regale||königlich|Ha un portamento regale.
repubblicano||republikanisch|Il partito repubblicano ha vinto le elezioni.
residuo||restlich / Rückstand|Paga il debito residuo.
retto||gerade / rechtschaffen|Disegna una linea retta.
rispettivo||jeweilig|Tornano alle rispettive case.
rivoluzionario||revolutionär|È un'invenzione rivoluzionaria.
sacro||heilig|È un luogo sacro.
saggio||weise / Essay|Il nonno è un uomo saggio.
secondario||sekundär / Neben-|Prendiamo una strada secondaria.
semantico||semantisch|È una differenza semantica.
sensuale||sinnlich|Ha una voce sensuale.
simbolico||symbolisch|Il prezzo è simbolico.
sindacale||gewerkschaftlich|È una riunione sindacale.
singolare||einzigartig / Singular|È un caso singolare.
sintetico||synthetisch / kurz gefasst|Il maglione è di fibra sintetica.
socialista||sozialistisch / Sozialist|È un partito socialista.
sofisticato||raffiniert / ausgeklügelt|È un sistema molto sofisticato.
`,
"B2 – Adjektive 7": `
solenne||feierlich|È una cerimonia solenne.
spaziale||Raum- / Weltraum-|La stazione spaziale orbita intorno alla Terra.
spirituale||geistig / spirituell|È una persona molto spirituale.
statale||staatlich|Frequenta una scuola statale.
stellare||Stern- / astronomisch|I prezzi sono stellari!
strategico||strategisch|È una posizione strategica.
strutturale||strukturell|È un problema strutturale.
stupefacente||erstaunlich / Rauschmittel|È un risultato stupefacente.
suggestivo||eindrucksvoll / stimmungsvoll|È un paesaggio suggestivo.
supremo||oberster|La Corte Suprema ha deciso.
territoriale||territorial / Gebiets-|È un problema territoriale.
uniforme||einheitlich / gleichmäßig|Il colore è uniforme.
universale||universell / allgemein|È un linguaggio universale.
visivo||visuell / Seh-|Ha una buona memoria visiva.
vitale||lebenswichtig / vital|L'acqua è vitale.
terminale||End- / Terminal|È un malato terminale.
`,
"B2 – Abstrakte Nomen 6": `
prassi|la|Praxis / übliches Verfahren|È la prassi in questi casi.
precedenza|la|Vorfahrt / Vorrang|Dai la precedenza a destra.
precisione|la|Genauigkeit|Lavora con grande precisione.
preferenza|la|Vorliebe|Hai una preferenza?
preoccupazione|la|Sorge|Non è una grande preoccupazione.
prescrizione|la|Verschreibung / Verjährung|Il farmaco è venduto su prescrizione.
presentazione|la|Präsentation / Vorstellung|Domani ho una presentazione.
presidenza|la|Vorsitz / Präsidentschaft|La presidenza del consiglio è a Roma.
prestazione|la|Leistung|È stata un'ottima prestazione.
prestigio|il|Ansehen / Prestige|Questo lavoro dà prestigio.
pretesa|la|Anspruch / Forderung|Ha troppe pretese.
pretesto|il|Vorwand|Era solo un pretesto per uscire.
privilegio|il|Privileg|È un privilegio lavorare con voi.
probabilità|la|Wahrscheinlichkeit|Ci sono poche probabilità di pioggia.
procedimento|il|Verfahren|È un procedimento complicato.
procura|la|Staatsanwaltschaft / Vollmacht|La procura ha aperto un'indagine.
profondità|la|Tiefe|La profondità del lago è di trenta metri.
progettazione|la|Planung|La progettazione del ponte dura un anno.
programmazione|la|Programmierung / Programm|Studio programmazione informatica.
promessa|la|Versprechen|Mantieni la promessa!
proporzione|la|Verhältnis / Proportion|Le proporzioni del disegno sono giuste.
prosa|la|Prosa|Scrive in prosa, non in versi.
protesta|la|Protest|C'è una protesta davanti al municipio.
protezione|la|Schutz|Usa una crema di protezione solare.
protocollo|il|Protokoll|Seguiamo il protocollo.
provenienza|la|Herkunft|Qual è la provenienza di questo vino?
provvedimento|il|Maßnahme|Il governo prende nuovi provvedimenti.
ragionamento|il|Überlegung / Gedankengang|Il tuo ragionamento è corretto.
rappresentazione|la|Darstellung / Aufführung|La rappresentazione teatrale è alle nove.
rassegna|la|Übersicht / Festival|Leggo la rassegna stampa.
razza|la|Rasse / Art|Di che razza è il tuo cane?
realizzazione|la|Umsetzung / Verwirklichung|La realizzazione del progetto è lenta.
redazione|la|Redaktion|La redazione del giornale è a Milano.
repertorio|il|Repertoire|Il cantante ha un vasto repertorio.
replica|la|Wiederholung / Erwiderung|Stasera c'è la replica del film.
resa|la|Kapitulation / Ertrag|La resa del nemico arrivò dopo mesi.
residenza|la|Wohnsitz / Residenz|Ha la residenza in Italia.
resistenza|la|Widerstand / Ausdauer|La Resistenza combatté contro il fascismo.
`,
"B2 – Abstrakte Nomen 7": `
riconoscimento|il|Anerkennung / Erkennung|Ha ricevuto un riconoscimento per il suo lavoro.
ricorso|il|Einspruch / Rückgriff|Faccio ricorso contro la multa.
ricostruzione|la|Wiederaufbau / Rekonstruktion|La ricostruzione dopo il terremoto è lenta.
riduzione|la|Ermäßigung / Reduzierung|C'è una riduzione per studenti.
rientro|il|Rückkehr|Il rientro dalle vacanze è difficile.
riflesso|il|Spiegelbild / Reflex|Vedo il mio riflesso nel vetro.
rigore|il|Strenge / Elfmeter|L'arbitro fischia un rigore.
rilievo|il|Bedeutung / Relief|È un dettaglio di poco rilievo.
rima|la|Reim|La poesia è in rima.
Rinascimento|il|Renaissance|Firenze è la culla del Rinascimento.
riparo|il|Schutz / Unterschlupf|Cerchiamo riparo dalla pioggia.
ripresa|la|Wiederaufnahme / Aufschwung / Halbzeit|C'è una ripresa dell'economia.
risarcimento|il|Schadensersatz|Ha chiesto un risarcimento.
risoluzione|la|Auflösung / Beschluss|Lo schermo ha un'alta risoluzione.
risonanza|la|Resonanz / Kernspin|Devo fare una risonanza magnetica.
risveglio|il|Erwachen|Il risveglio è stato difficile.
ritiro|il|Rückzug / Abholung|Il ritiro dei pacchi è al piano terra.
rito|il|Ritus / Ritual|Il caffè del mattino è un rito.
ritratto|il|Porträt|Il pittore fa il ritratto della regina.
rituale|il|Ritual / rituell|È un rituale antico.
rivelazione|la|Enthüllung / Offenbarung|Il nuovo cantante è la rivelazione dell'anno.
rivolta|la|Aufstand|Il popolo è in rivolta.
rottura|la|Bruch|C'è stata una rottura tra i due.
rotta|la|Kurs / Route|La nave cambia rotta.
rovescio|il|Rückseite / Platzregen / Rückhand|Ha un ottimo rovescio a tennis.
rovina|la|Ruine / Ruin|Il gioco d'azzardo è la sua rovina.
sacrificio|il|Opfer|Ha fatto molti sacrifici per studiare.
saga|la|Saga|Ho letto tutta la saga.
saggezza|la|Weisheit|La saggezza viene con l'età.
salario|il|Lohn|Il salario minimo è aumentato.
salvezza|la|Rettung / Heil|Il bagnino è stata la nostra salvezza.
sanità|la|Gesundheitswesen|La sanità pubblica è gratuita.
sanzione|la|Sanktion / Strafe|Ha ricevuto una sanzione.
sapore|il|Geschmack|Questo gelato ha un sapore di fragola.
scandalo|lo|Skandal|È scoppiato uno scandalo.
scatto|lo|Ruck / Aufnahme / Sprint|Ha fatto uno scatto improvviso.
scenario|lo|Szenario / Kulisse|È uno scenario preoccupante.
scomparsa|la|Verschwinden / Tod|La scomparsa del cantante ha colpito tutti.
scontro|lo|Zusammenstoß|C'è stato uno scontro tra due auto.
scorta|la|Vorrat / Eskorte|Teniamo una scorta d'acqua.
`,
"B2 – Abstrakte Nomen 8": `
segmento|il|Segment / Abschnitt|Disegna un segmento di cinque centimetri.
segnalazione|la|Meldung / Hinweis|Grazie per la segnalazione.
segreteria|la|Sekretariat / Anrufbeantworter|Lascia un messaggio in segreteria.
semplicità|la|Einfachheit|Mi piace la semplicità di questa casa.
sensibilità|la|Empfindlichkeit / Feingefühl|Ha una grande sensibilità.
separazione|la|Trennung|La separazione è stata dolorosa.
sequenza|la|Abfolge / Sequenz|Metti le immagini nella giusta sequenza.
sequestro|il|Beschlagnahme / Entführung|Il sequestro è durato un mese.
serenità|la|Gelassenheit / Heiterkeit|Vive con serenità.
simpatia|la|Sympathie|Ho molta simpatia per lui.
sindrome|la|Syndrom|Soffre di una sindrome rara.
sopravvivenza|la|Überleben|È una questione di sopravvivenza.
sospensione|la|Aussetzung / Federung / Suspendierung|Hanno dato tre giorni di sospensione allo studente.
sospiro|il|Seufzer|Ha tirato un sospiro di sollievo.
sostituzione|la|Ersatz / Auswechslung|L'allenatore fa una sostituzione.
spessore|lo|Dicke / Tiefgang|Il muro ha uno spessore di trenta centimetri.
spettro|lo|Gespenst / Spektrum|Lo spettro della crisi preoccupa tutti.
spinta|la|Stoß / Antrieb|Mi serve una spinta per cominciare.
splendore|lo|Glanz|Roma nel suo splendore.
spostamento|lo|Verschiebung / Fahrt|Lo spostamento dell'appuntamento è confermato.
stabilità|la|Stabilität|Cerchiamo stabilità economica.
stima|la|Wertschätzung / Schätzung|Ho grande stima di te.
stimolo|lo|Anreiz / Reiz|Ho bisogno di nuovi stimoli.
strage|la|Massaker / Blutbad|La strage ha sconvolto il paese.
strato|lo|Schicht|C'è uno strato di polvere sul tavolo.
stretta|la|Händedruck / Verschärfung|Una stretta di mano e l'accordo è fatto.
successione|la|Nachfolge / Abfolge|La successione al trono è complicata.
suggerimento|il|Vorschlag / Tipp|Hai qualche suggerimento?
suicidio|il|Suizid / Selbstmord|È un film sul tema del suicidio.
suolo|il|Boden|Il pacco è caduto al suolo.
svolta|la|Wende / Abzweigung|È stata una svolta nella mia vita.
talento|il|Talent|Ha un grande talento per la musica.
tangente|la|Schmiergeld / Tangente|Il politico ha preso una tangente.
tariffa|la|Tarif / Gebühr|Qual è la tariffa per una notte?
tentazione|la|Versuchung|Non resisto alla tentazione.
tenuta|la|Landgut / Kleidung / Ausdauer|Hanno una tenuta in Toscana.
`,
"B2 – Abstrakte Nomen 9": `
teologia|la|Theologie|Studia teologia a Roma.
terrore|il|Schrecken / Terror|Ha il terrore dei ragni.
terrorismo|il|Terrorismus|La lotta al terrorismo è internazionale.
testamento|il|Testament|Ha lasciato tutto nel testamento.
testimonianza|la|Zeugenaussage / Zeugnis|La sua testimonianza è decisiva.
timore|il|Furcht|Ho il timore di disturbare.
tipologia|la|Typ / Typologie|Che tipologia di camera desidera?
tiro|il|Schuss / Wurf|Un tiro in porta!
tradimento|il|Verrat / Untreue|Il tradimento è difficile da perdonare.
trascrizione|la|Abschrift|Leggi la trascrizione del dialogo.
trasferimento|il|Umzug / Versetzung / Überweisung|Il trasferimento a Roma è previsto a settembre.
trasformazione|la|Umwandlung|La città è in piena trasformazione.
trauma|il|Trauma|L'incidente gli ha causato un trauma.
trionfo|il|Triumph|La squadra torna in trionfo.
truppa|la|Truppe|Le truppe entrano in città.
turismo|il|Tourismus|Il turismo è importante per Venezia.
udienza|l'|Anhörung / Audienz|L'udienza in tribunale è rinviata.
urgenza|l'|Dringlichkeit|In caso di urgenza chiama questo numero.
utilità|l'|Nutzen|Qual è l'utilità di questo attrezzo?
utilizzo|l'|Nutzung|L'utilizzo del telefono è vietato in classe.
variante|la|Variante|È una variante della ricetta.
variazione|la|Änderung / Abweichung|C'è una variazione dell'orario.
varietà|la|Vielfalt / Sorte|C'è una grande varietà di formaggi.
vendetta|la|Rache|Vuole vendetta.
vertice|il|Gipfel / Spitze|C'è un vertice dei ministri a Bruxelles.
vicinanza|la|Nähe|Grazie per la vostra vicinanza.
vigore|il|Kraft / Geltung|La legge entra in vigore domani.
violazione|la|Verletzung / Verstoß|È una violazione della privacy.
vizio|il|Laster / Angewohnheit|Il fumo è il suo unico vizio.
vocazione|la|Berufung|Insegnare è la sua vocazione.
radiazione|la|Strahlung|Le radiazioni sono pericolose.
proteina|la|Protein / Eiweiß|Le uova sono ricche di proteine.
tumore|il|Tumor|Il tumore è stato operato in tempo.
sfogo|lo|Ventil / Ausschlag|Lo sport è il mio sfogo.
seduta|la|Sitzung|La seduta del consiglio è alle cinque.
psicologia|la|Psychologie|Studia psicologia a Padova.
vangelo|il|Evangelium|Il prete legge il Vangelo.
vergine||Jungfrau / unberührt|Uso olio extravergine d'oliva.
vescovo|il|Bischof|Il vescovo visita la parrocchia.
verbo|il|Verb|"Mangiare" è un verbo regolare.
`
});
/* Nachträge Teil 3 */
add({
"B1 – Nomen 7": `
pulizia|la|Sauberkeit / Putzen|Sabato facciamo le pulizie di casa.
torneo|il|Turnier|Partecipiamo a un torneo di calcetto.
sparo|lo|Schuss|Ho sentito uno sparo nella notte.
sterlina|la|Pfund (Währung)|A Londra si paga in sterline.
soglia|la|Schwelle|Il gatto aspetta sulla soglia.
veste|la|Gewand / Eigenschaft|Parla in veste di presidente.
`,
"B1 – Menschen & Rollen 4": `
ribelle|il|Rebell / rebellisch|È sempre stato un ribelle.
vice|il|Stellvertreter|Parla con il vice, il capo non c'è.
`,
"B1 – Verben 11": `
sfondare||einschlagen / durchbrechen|I ladri hanno sfondato la porta.
`,
"B2 – Abstrakte Nomen 9": `
preghiera|la|Gebet / Bitte|Recita una preghiera prima di dormire.
proiezione|la|Vorführung / Projektion|La proiezione del film inizia alle nove.
pseudonimo|lo|Pseudonym|Lo scrittore pubblica con uno pseudonimo.
retta|la|Gerade / Gebühr|Disegna una retta sul foglio.
`
});
})();

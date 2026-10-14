/* Grundwortschatz-Ergänzung für vokabeln.html (Stufe 1: häufigste Wörter)
   Format pro Zeile: italienisch | Artikel | deutsch | Beispielsatz
   Eigene Übersetzungen und Beispielsätze, keine Übernahme aus Lehrwerken.
   Wörter, die es in einer früheren Lektion schon gibt, filtert vokabeln.html automatisch heraus. */
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
"A1 – Pronomen & Possessiva": `
lei||sie (Einzahl) / Sie (Höflichkeitsform)|Lei abita a Milano da due anni.
voi||ihr|Voi venite alla festa stasera?
loro||sie (Mehrzahl) / ihr (Possessiv)|Loro sono i nostri nuovi vicini.
suo||sein / ihr (Possessiv)|Marco cerca il suo telefono.
nostro||unser|Il nostro appartamento è al terzo piano.
vostro||euer|È vostra questa bicicletta?
li||sie (Mehrzahl, Akkusativ männlich)|Dove sono i biglietti? Li ho io.
vi||euch|Vi aspetto davanti al cinema.
ve||euch (vor lo, la, li, le, ne)|Il segreto? Ve lo dico domani.
glielo||es ihm / es ihr|Il libro? Glielo porto domani.
egli||er (Schriftsprache)|Egli scrisse molte lettere alla madre.
esso||er / es (für Sachen, schriftlich)|Il castello è antico: esso risale al Trecento.
essa||sie (Einzahl, schriftlich)|La regione è piccola, ma essa ha una lunga storia.
essi||sie (Mehrzahl, schriftlich)|Gli ospiti arrivarono tardi; essi erano stanchi.
ognuno||jeder (Einzelne)|Ognuno porta qualcosa da mangiare.
ciascuno||jeder einzelne|Ciascuno di voi riceve un foglio.
entrambi||beide|Entrambi i miei fratelli vivono a Roma.
alcuno||irgendein / kein (bei Verneinung)|Non c'è alcun problema.
qualsiasi||jeder beliebige / irgendein|Puoi chiamarmi a qualsiasi ora.
nulla||nichts|Non è successo nulla di grave.
coloro||diejenigen|Coloro che arrivano tardi aspettano fuori.
proprio||eigen / gerade, wirklich|Ognuno ha la propria opinione.
`,
"A1 – Grundwörter 3": `
mamma|la|Mama|La mamma prepara la cena.
papà|il|Papa|Il papà di Luca fa il cuoco.
signorina|la|Fräulein / junge Frau|Scusi, signorina, è libero questo posto?
dottore|il|Doktor / Arzt|Il dottore arriva alle dieci.
maestro|il|Lehrer (Grundschule) / Meister|Il maestro legge una storia ai bambini.
ragazzino|il|kleiner Junge|Un ragazzino gioca a pallone nel cortile.
corpo|il|Körper|Lo sport fa bene al corpo.
faccia|la|Gesicht|Lavati la faccia prima di colazione.
bacio|il|Kuss|Un bacio e buonanotte!
sorriso|il|Lächeln|Ha un sorriso molto simpatico.
telefonata|la|Anruf / Telefonat|Aspetto una telefonata importante.
frase|la|Satz|Leggi ad alta voce la prima frase.
tavola|la|(gedeckter) Tisch / Tafel|A tavola! La cena è pronta.
villa|la|Villa / Landhaus|La villa ha un grande giardino.
nord|il|Norden|Milano si trova nel nord dell'Italia.
sud|il|Süden|D'estate andiamo sempre al sud.
forza|la|Kraft / Stärke|Dopo la corsa non ho più forza.
gusto|il|Geschmack|Questo gelato ha un gusto strano.
iniziare||anfangen / beginnen|Il film inizia alle otto.
bastare||reichen / genügen|Basta così, grazie.
desiderare||wünschen|Desidera qualcos'altro, signora?
dentro||drinnen / hinein|Fa freddo, andiamo dentro.
indietro||zurück / nach hinten|Fai un passo indietro, per favore.
avanti||vorwärts / herein!|Avanti, la porta è aperta!
oppure||oder (auch)|Prendi il tè oppure il caffè?
ecco||hier ist / da ist|Ecco il tuo caffè!
circa||ungefähr / etwa|Ci vogliono circa dieci minuti a piedi.
soprattutto||vor allem|Mi piace la frutta, soprattutto le fragole.
migliore||besser / der, die, das beste|Sara è la mia migliore amica.
azzurro||himmelblau|Oggi il cielo è azzurro.
attento||aufmerksam / vorsichtig|Stai attento, la strada è bagnata!
zitto||still / ruhig|Stai zitto un momento, per favore!
enorme||riesig|Il cane del vicino è enorme.
fantastico||fantastisch|Che giornata fantastica!
terribile||schrecklich|Ho un mal di testa terribile.
meraviglioso||wunderbar|La vista dal balcone è meravigliosa.
rapido||schnell|Facciamo un pranzo rapido.
pazzo||verrückt|Sei pazzo? Fuori ci sono due gradi!
matto||verrückt / närrisch|Quel gatto è un po' matto.
okay||okay|Okay, allora ci vediamo dopo.
beh||na ja / also|Beh, forse hai ragione tu.
allora||also / dann / damals|Allora, che cosa facciamo stasera?
e-mail|l'|E-Mail|Ti mando un'e-mail stasera.
`,
"A1 – Länder & Sprachen": `
francese||französisch / Franzose|Mia cognata è francese.
spagnolo||spanisch / Spanier|Studio lo spagnolo da un anno.
inglese||englisch / Engländer|Parli inglese?
cinese||chinesisch / Chinese|Stasera mangiamo cinese.
giapponese||japanisch / Japaner|Il giapponese è una lingua difficile.
americano||amerikanisch / Amerikaner|Ha un'amica americana a Boston.
russo||russisch / Russe|Il suo nonno parlava russo.
greco||griechisch / Grieche|D'estate andiamo su un'isola greca.
arabo||arabisch / Araber|L'arabo si scrive da destra a sinistra.
portoghese||portugiesisch / Portugiese|Il portoghese somiglia allo spagnolo.
turco||türkisch / Türke|Nel quartiere c'è un ristorante turco.
polacco||polnisch / Pole|Il mio collega è polacco.
svizzero||schweizerisch / Schweizer|Il formaggio svizzero ha i buchi.
austriaco||österreichisch / Österreicher|Vienna è la capitale austriaca.
europeo||europäisch / Europäer|L'euro è la moneta europea.
romano||römisch / Römer|Il Colosseo è un monumento romano.
Francia|la|Frankreich|Parigi è la capitale della Francia.
Spagna|la|Spanien|In Spagna fa molto caldo d'estate.
Svizzera|la|Schweiz|La Svizzera ha quattro lingue ufficiali.
Austria|l'|Österreich|L'Austria confina con l'Italia.
Europa|l'|Europa|L'Italia è nel sud dell'Europa.
`
});

add({
"A2 – Menschen & Rollen": `
adolescente|l'|Jugendlicher|Mio figlio è un adolescente e dorme tanto.
agente|l'|Polizist / Vertreter|L'agente ferma la macchina.
amante|l'|Liebhaber(in)|È un grande amante della musica.
artista|l'|Künstler(in)|L'artista espone i suoi quadri in centro.
capitano|il|Kapitän|Il capitano saluta i passeggeri.
cavaliere|il|Ritter / Reiter|Il cavaliere salta giù dal cavallo.
commissario|il|Kommissar|Il commissario fa molte domande.
direttore|il|Direktor / Leiter|Il direttore della scuola è gentile.
eroe|l'|Held|Il pompiere è l'eroe della giornata.
esperto|l'|Experte / erfahren|Chiedi a Luca, è un esperto di computer.
femmina|la|Weibchen / Mädchen|Il gatto è maschio o femmina?
maschio|il|Männchen / Junge|Hanno avuto un maschio, si chiama Leo.
lavoratore|il|Arbeiter / Arbeitnehmer|Il lavoratore ha diritto alle ferie.
lettore|il|Leser|Il giornale ha molti lettori giovani.
membro|il|Mitglied|Sono membro di un club di tennis.
nemico|il|Feind|Il cane e il gatto non sono sempre nemici.
padrone|il|Besitzer / Herr|Il cane aspetta il suo padrone.
poeta|il|Dichter|Dante è il poeta più famoso d'Italia.
prete|il|Priester|Il prete celebra la messa alle dieci.
don|il|Don (Anrede für Priester)|Don Paolo apre l'oratorio.
suora|la|Nonne|Una suora lavora all'ospedale.
santo||heilig / Heiliger|San Marco è il santo di Venezia.
angelo|l'|Engel|Sei un angelo, grazie dell'aiuto!
dio|il|Gott|Gli antichi romani avevano molti dei.
principe|il|Prinz|Il principe vive nel castello.
re|il|König|Il re e la regina salutano la folla.
regina|la|Königin|La regina indossa una corona d'oro.
soldato|il|Soldat|Il soldato torna a casa dopo un anno.
strega|la|Hexe|Nella fiaba c'è una strega cattiva.
individuo|l'|Individuum / Typ|Un individuo strano gira davanti al negozio.
popolo|il|Volk|Il popolo festeggia in piazza.
idiota|l'|Idiot|Che idiota, ho dimenticato le chiavi!
`,
"A2 – Verben 3": `
abbassare||senken / leiser stellen|Abbassa la musica, per favore.
allungare||verlängern / ausstrecken|Allunga le gambe e rilassati.
appoggiare||anlehnen / abstellen|Appoggia la borsa sulla sedia.
bruciare||brennen / verbrennen|Attento, il forno brucia!
cacciare||jagen / verjagen|Il gatto caccia le mosche.
capitare||passieren / vorkommen|Sono cose che capitano.
coprire||bedecken / zudecken|Copri la pentola con il coperchio.
dividere||teilen|Dividiamo la pizza in quattro.
domandare||fragen|Domanda al cameriere dov'è il bagno.
fuggire||fliehen|Il ladro fugge dalla finestra.
giurare||schwören|Ti giuro che non l'ho fatto io.
godere||genießen|Godiamoci il sole!
importare||wichtig sein / einführen|Non importa, lo facciamo domani.
infilare||einfädeln / hineinstecken|Infila la chiave nella serratura.
inventare||erfinden|Mio nonno inventa sempre storie divertenti.
levare||wegnehmen / ausziehen|Leva le scarpe prima di entrare.
muovere||bewegen|Non riesco a muovere il braccio.
notare||bemerken|Hai notato il nuovo taglio di capelli?
ritornare||zurückkehren|Ritorno a casa alle sei.
ritrovare||wiederfinden|Ho ritrovato il mio vecchio diario.
rivedere||wiedersehen|Spero di rivederti presto.
ricominciare||wieder anfangen|Domani ricomincia la scuola.
rientrare||zurückkommen / wieder hineingehen|A che ora rientri stasera?
rimettere||zurücklegen / wieder anziehen|Rimetti il latte in frigo.
riportare||zurückbringen|Devo riportare i libri in biblioteca.
riprendere||wieder aufnehmen / weitermachen|Riprendiamo la lezione dopo la pausa.
rubare||stehlen|Mi hanno rubato la bici.
scappare||weglaufen / abhauen|Scusate, devo scappare!
sparire||verschwinden|Il mio ombrello è sparito.
sbattere||zuschlagen / stoßen|Non sbattere la porta!
scoppiare||platzen / ausbrechen|Il palloncino è scoppiato.
stringere||drücken / festziehen|Stringi bene la cintura.
tacere||schweigen|Taci e ascolta!
urlare||schreien|Non urlare, ti sento benissimo.
voltare||wenden / abbiegen|Al semaforo volta a destra.
rovinare||ruinieren / kaputt machen|La pioggia ha rovinato il picnic.
sparare||schießen|Nel film i cattivi sparano molto.
tentare||versuchen|Tento di nuovo domani.
terminare||beenden / enden|La lezione termina alle undici.
recitare||spielen (Theater) / aufsagen|Mia figlia recita nello spettacolo di Natale.
ammazzare||töten / umbringen|Questo caldo mi ammazza!
adorare||anbeten / sehr lieben|Adoro la pizza napoletana.
battere||schlagen / tippen|Il cuore mi batte forte.
dispiacere||leidtun / etwas ausmachen|Ti dispiace se apro la finestra?
`,
"A2 – Verben 4": `
abbandonare||verlassen / aufgeben|Non abbandonare il cane in autostrada!
accogliere||empfangen / aufnehmen|La famiglia ci accoglie con un pranzo.
assistere||beiwohnen / betreuen|Ho assistito a un concerto bellissimo.
attendere||warten / erwarten|Attenda in linea, per favore.
colpire||treffen / schlagen|La palla ha colpito la finestra.
combattere||kämpfen|Il medico combatte contro l'influenza.
comprendere||verstehen / umfassen|Non comprendo questa parola.
comunicare||mitteilen / kommunizieren|Comunichiamo spesso via chat.
conservare||aufbewahren|Conservare in un luogo fresco.
consumare||verbrauchen / verzehren|Questa macchina consuma poca benzina.
contenere||enthalten|La scatola contiene vecchie foto.
collegare||verbinden|Collega il telefono al computer.
confondere||verwechseln / verwirren|Confondo sempre i due gemelli.
difendere||verteidigen|Il fratello grande difende la sorella.
dichiarare||erklären / verzollen|Ha qualcosa da dichiarare?
eliminare||entfernen / ausscheiden|Elimina le foto vecchie dal telefono.
esistere||existieren / geben|Esiste un treno diretto per Bari?
fingere||so tun als ob|Finge di dormire, ma ci sente.
liberare||befreien / freimachen|Libera il tavolo, dobbiamo mangiare.
meritare||verdienen|Hai lavorato tanto, meriti una pausa.
nominare||erwähnen / ernennen|Non nominare il suo ex, per favore.
ospitare||beherbergen / zu Gast haben|Ospitiamo degli amici per il weekend.
pronunciare||aussprechen|Come si pronuncia questa parola?
recuperare||zurückholen / nachholen|Devo recuperare le ore perse.
scambiare||tauschen / verwechseln|Scambiamo i posti?
separare||trennen|Separa la carta dalla plastica.
sostituire||ersetzen|Bisogna sostituire la lampadina.
trasmettere||übertragen / senden|La TV trasmette la partita stasera.
utilizzare||benutzen / verwenden|Puoi utilizzare la mia penna.
valere||wert sein / gelten|Il biglietto vale due giorni.
inserire||einfügen / einstecken|Inserisci la carta e digita il codice.
scattare||auslösen / losgehen|Scatta una foto di noi due!
accusare||beschuldigen / anklagen|Mi accusa di aver mangiato la torta.
animare||beleben / animieren|La musica anima la festa.
legare||binden / festbinden|Lega il cane fuori dal negozio.
sopravvivere||überleben|La pianta è sopravvissuta all'inverno.
`,
"A2 – Wichtige Nomen 1": `
base|la|Basis / Grundlage|La base della pizza è sottile.
bordo|il|Rand / Bord|Siamo a bordo della nave.
calore|il|Wärme|Il calore del sole mi fa bene.
camion|il|Lastwagen|Un camion blocca la strada.
castello|il|Burg / Schloss|Visitiamo un castello medievale.
catena|la|Kette|La catena della bici è rotta.
copia|la|Kopie / Exemplar|Fammi una copia del documento.
danno|il|Schaden|La grandine ha fatto molti danni.
denaro|il|Geld|Non ho denaro contante con me.
dettaglio|il|Detail / Einzelheit|Raccontami tutto nei dettagli.
dialogo|il|Dialog / Gespräch|Leggete il dialogo a coppie.
disco|il|Schallplatte / Scheibe|Mio padre colleziona dischi in vinile.
disegno|il|Zeichnung|Il bambino mi regala un disegno.
distanza|la|Entfernung / Abstand|La distanza da casa è di due chilometri.
durata|la|Dauer|Qual è la durata del corso?
elenco|l'|Liste / Verzeichnis|Scrivo l'elenco della spesa.
emozione|l'|Gefühl / Aufregung|Che emozione rivederti!
episodio|l'|Folge / Episode|Stasera guardo l'ultimo episodio.
fumo|il|Rauch|C'è fumo in cucina, apri la finestra!
gas|il|Gas|Spegni il gas prima di uscire.
gesto|il|Geste|Gli italiani parlano anche con i gesti.
incontro|l'|Treffen / Begegnung|Ho un incontro con il direttore.
lacrima|la|Träne|Ha le lacrime agli occhi.
legno|il|Holz|Il tavolo è di legno.
macchia|la|Fleck|Ho una macchia di caffè sulla camicia.
materiale|il|Material|Di che materiale è questa borsa?
mente|la|Geist / Verstand|Mi è venuta in mente un'idea.
nastro|il|Band / Klebeband|Chiudi il pacco con il nastro.
odore|l'|Geruch|Che buon odore di pane!
ombra|l'|Schatten|Sediamoci all'ombra.
parete|la|Wand|Appendo il quadro alla parete.
passaggio|il|Durchgang / Mitfahrgelegenheit|Mi dai un passaggio in centro?
pericolo|il|Gefahr|Attenzione, pericolo!
premio|il|Preis / Belohnung|Ha vinto il primo premio.
pugno|il|Faust / Faustschlag|Ha battuto il pugno sul tavolo.
raggio|il|Strahl|Un raggio di sole entra nella stanza.
ritmo|il|Rhythmus|Questa canzone ha un bel ritmo.
roba|la|Zeug / Sachen|Metti la tua roba nell'armadio.
scena|la|Szene / Bühne|La scena finale del film è triste.
segno|il|Zeichen|È un buon segno.
sguardo|lo|Blick|Mi ha lanciato uno sguardo strano.
simbolo|il|Symbol|La colomba è un simbolo di pace.
somma|la|Summe|Calcola la somma dei numeri.
tesoro|il|Schatz|Ciao, tesoro, com'è andata?
tono|il|Ton / Tonfall|Non usare quel tono con me!
traccia|la|Spur|Il ladro non ha lasciato tracce.
uso|l'|Gebrauch / Benutzung|Leggi le istruzioni per l'uso.
versione|la|Version / Fassung|Preferisco il film in versione originale.
`,
"A2 – Wichtige Nomen 2": `
altezza|l'|Höhe / Größe|Qual è la tua altezza?
colpa|la|Schuld|Non è colpa mia!
battuta|la|Witz / Pointe|Fa sempre battute divertenti.
arco|l'|Bogen|L'arco di pietra è molto antico.
brano|il|Stück / Textabschnitt|Ascoltiamo un brano di musica classica.
monte|il|Berg|Il Monte Bianco è la montagna più alta delle Alpi.
diamante|il|Diamant|L'anello ha un piccolo diamante.
liquido|il|Flüssigkeit / flüssig|Non portare liquidi in aereo.
caccia|la|Jagd|Il nonno va a caccia in autunno.
carica|la|Ladung / Akku-Stand / Amt|Il telefono è sotto carica.
fianco|il|Seite / Hüfte|Siediti al mio fianco.
corte|la|Hof|Il re vive a corte con i suoi ministri.
villaggio|il|Dorf|Il villaggio ha solo trecento abitanti.
traduzione|la|Übersetzung|La traduzione di questo libro è ottima.
album|l'|Album|Guardiamo l'album delle foto di nozze.
blog|il|Blog|Scrive un blog di cucina.
web|il|Web / Internet|Ho trovato la ricetta sul web.
quiz|il|Quiz|Guardiamo un quiz in TV.
test|il|Test|Domani abbiamo un test di matematica.
tivù|la|Fernsehen (umgangssprachlich)|Che cosa c'è in tivù stasera?
decina|la|etwa zehn|C'erano una decina di persone.
centinaio|il|etwa hundert|Al concerto c'erano centinaia di persone.
migliaio|il|etwa tausend|Migliaia di turisti visitano Venezia ogni giorno.
mila||tausend (Mehrzahl, z. B. duemila)|La macchina costa diecimila euro.
miliardo|il|Milliarde|Nel mondo vivono più di otto miliardi di persone.
dollaro|il|Dollar|Quanto costa in dollari?
lira|la|Lira (frühere Währung)|Prima dell'euro in Italia c'era la lira.
sesso|il|Geschlecht / Sex|Indicare il sesso: maschile o femminile.
`,
"A2 – Adjektive & Adverbien 2": `
ampio||weit / geräumig|La stanza è ampia e luminosa.
capace||fähig|Sei capace di nuotare?
classico||klassisch|Ascolto musica classica per studiare.
differente||unterschiedlich / anders|Abbiamo gusti differenti.
diretto||direkt|C'è un volo diretto per Palermo?
direttamente||direkt|Vengo direttamente dal lavoro.
elementare||elementar / Grund-|Mio figlio va alla scuola elementare.
esterno||äußerer / Außen-|La parte esterna della casa è gialla.
interno||innerer / Innen-|La piscina interna è aperta tutto l'anno.
intero||ganz|Ho mangiato una pizza intera.
facilmente||leicht / einfach|Lo trovi facilmente, è vicino alla stazione.
immediatamente||sofort|Vieni qui immediatamente!
magico||magisch / zauberhaft|È stata una serata magica.
minimo||minimal / kleinster|Non ho la minima idea.
minore||kleiner / jünger|Mio fratello minore ha dieci anni.
negativo||negativ|Il test è negativo, per fortuna.
nascosto||versteckt|Il regalo è nascosto nell'armadio.
nudo||nackt|I bambini corrono nudi sulla spiaggia.
perfettamente||perfekt / vollkommen|Hai perfettamente ragione.
potente||mächtig / stark|Questo computer è molto potente.
preciso||genau / pünktlich|Alle otto precise, va bene?
prezioso||wertvoll|Il tuo aiuto è prezioso.
recente||neu / kürzlich|È un film recente.
reale||wirklich / echt / königlich|È una storia reale, non inventata.
semplicemente||einfach|È semplicemente perfetto!
simile||ähnlich|Le due sorelle sono molto simili.
sconosciuto||unbekannt / Unbekannter|Non aprire la porta agli sconosciuti.
solamente||nur|Ho solamente cinque euro.
talmente||so (sehr)|Ero talmente stanco che mi sono addormentato.
unito||vereint / zusammen|È una famiglia molto unita.
vario||verschieden / mehrere|Abbiamo vari tipi di pane.
veramente||wirklich|Sei veramente gentile.
violento||gewalttätig / heftig|C'è stato un temporale violento.
immobile||unbeweglich / Immobilie|Il gatto resta immobile davanti al buco.
femminile||weiblich / Frauen-|La squadra femminile ha vinto.
maschile||männlich / Männer-|Il bagno maschile è a destra.
musicale||musikalisch / Musik-|Suoni uno strumento musicale?
telefonico||telefonisch / Telefon-|Qual è il tuo numero telefonico?
televisivo||Fernseh-|È un programma televisivo molto seguito.
`
});

add({
"B1 – Konnektoren & Adverbien": `
addirittura||sogar / geradezu|Ha fatto addirittura tre torte!
affatto||überhaupt (nicht)|Non sono affatto stanco.
assai||sehr / ziemlich|È un libro assai interessante.
assieme||zusammen|Facciamo i compiti assieme.
attorno||herum / um ... herum|Ci sediamo attorno al fuoco.
attraverso||durch / quer über|Passiamo attraverso il parco.
chissà||wer weiß|Chissà dove ho messo gli occhiali.
effettivamente||tatsächlich|Effettivamente hai ragione tu.
entro||innerhalb / bis (spätestens)|Devo finire entro venerdì.
evidentemente||offensichtlich|Evidentemente non ha letto il messaggio.
oltre||über ... hinaus / außer|Oltre al pane, compra il latte.
ovvero||das heißt / beziehungsweise|Arrivo dopodomani, ovvero mercoledì.
parecchio||ziemlich viel|Ho aspettato parecchio.
particolarmente||besonders|Oggi fa particolarmente caldo.
persino||sogar|Persino il nonno balla alla festa.
poiché||da / weil|Poiché piove, restiamo a casa.
presso||bei|Lavora presso una banca.
siccome||da (am Satzanfang)|Siccome sei arrivato tardi, abbiamo già mangiato.
sino||bis (schriftlich, = fino)|Il negozio resta aperto sino alle venti.
tramite||mittels / über|Ti mando i documenti tramite e-mail.
verso||gegen / in Richtung|Arrivo verso le otto.
altrettanto||ebenso / gleichfalls|Buon appetito! Grazie, altrettanto!
cosiddetto||so genannt|È il cosiddetto "smart working".
`,
"B1 – Adjektive 2": `
assoluto||absolut / völlig|Ho bisogno di silenzio assoluto.
concreto||konkret|Mi serve un esempio concreto.
contemporaneo||zeitgenössisch / gleichzeitig|Mi piace l'arte contemporanea.
specifico||spezifisch / bestimmt|Hai una domanda specifica?
numeroso||zahlreich|Ha una famiglia numerosa.
infinito||unendlich / Infinitiv|La lista delle cose da fare è infinita.
intenso||intensiv / stark|È stata una settimana intensa.
inferiore||unterer / geringer|Il prezzo è inferiore a cento euro.
eventuale||eventuell / möglich|Scrivimi per eventuali domande.
relativo||relativ / bezüglich|Leggi le informazioni relative al corso.
ulteriore||weiter / zusätzlich|Per ulteriori informazioni chiami questo numero.
successivo||folgend / nächster|Il giorno successivo siamo partiti.
previsto||vorgesehen / erwartet|L'arrivo è previsto per le dieci.
compreso||inbegriffen / verstanden|La colazione è compresa nel prezzo.
legato||gebunden / verbunden|Sono molto legato alla mia città.
iniziale||anfänglich / Anfangs-|La parte iniziale del film è lenta.
ideale||ideal / Ideal|È il posto ideale per una vacanza.
originale||originell / Original-|È un'idea molto originale.
totale||gesamt / völlig / Summe|Il totale è di quaranta euro.
estremo||äußerster / extrem|Fa un freddo estremo.
opposto||entgegengesetzt / gegenüber|Abita sul lato opposto della strada.
ambientale||Umwelt-|È un problema ambientale grave.
internazionale||international|Lavora in un'azienda internazionale.
mondiale||Welt- / weltweit|Il campionato mondiale di calcio si gioca ogni quattro anni.
occidentale||westlich|Viviamo nella parte occidentale della città.
meridionale||südlich / Süd-|La cucina meridionale usa molto olio d'oliva.
tradizionale||traditionell|Mangiamo un piatto tradizionale.
ufficiale||offiziell / Offizier|È la lingua ufficiale del paese.
sessuale||sexuell|L'educazione sessuale si fa anche a scuola.
verbale||mündlich / Protokoll|Scrivo il verbale della riunione.
`,
"B1 – Verben 4": `
affermare||behaupten / erklären|Il testimone afferma di aver visto tutto.
affidare||anvertrauen|Affido le chiavi alla vicina.
agire||handeln|Bisogna agire subito.
apparire||erscheinen|Sullo schermo appare un messaggio.
appartenere||gehören|Questa borsa appartiene a mia madre.
assicurare||versichern / sicherstellen|Ti assicuro che è vero.
autorizzare||genehmigen / erlauben|Il preside autorizza la gita.
avvenire||geschehen / Zukunft|L'incidente è avvenuto ieri sera.
avviare||starten / in Gang setzen|Avvia il programma e aspetta.
basare||stützen / basieren|Il film si basa su una storia vera.
bisognare||nötig sein (bisogna ...)|Bisogna prenotare in anticipo.
causare||verursachen|La nebbia causa molti incidenti.
caratterizzare||kennzeichnen / prägen|Il buon cibo caratterizza questa regione.
circondare||umgeben|Il paese è circondato dalle montagne.
commettere||begehen (Fehler, Tat)|Ho commesso un errore.
comparire||erscheinen / auftauchen|Il suo nome compare nella lista.
comporre||zusammensetzen / komponieren|Il gruppo è composto da sei persone.
condannare||verurteilen|Il giudice lo ha condannato a due anni.
condurre||führen / leiten|Chi conduce il programma?
conquistare||erobern|Ha conquistato tutti con il suo sorriso.
corrispondere||entsprechen|Il colore non corrisponde alla foto.
costituire||bilden / darstellen|Il turismo costituisce una grande risorsa.
costringere||zwingen|La pioggia ci costringe a restare a casa.
derivare||abstammen / herkommen|Questa parola deriva dal latino.
destinare||bestimmen / vorsehen|Il denaro è destinato alla scuola.
dirigere||leiten / dirigieren|Mia zia dirige un piccolo albergo.
disporre||verfügen / anordnen|Disponiamo di poco tempo.
divenire||werden (schriftlich)|Il piccolo paese divenne una città.
effettuare||durchführen|Il treno effettua tutte le fermate.
emergere||auftauchen / hervortreten|Dalle indagini emerge una verità diversa.
escludere||ausschließen|Non escludo niente.
esporre||ausstellen / darlegen|Il museo espone quadri moderni.
figurare||erscheinen / vorkommen|Il suo nome non figura nell'elenco.
fondare||gründen|Secondo la leggenda, Roma è stata fondata nel 753 a.C.
formare||bilden / formen|Formate gruppi di tre persone.
generare||erzeugen|Il vento genera energia.
giudicare||beurteilen / richten|Non giudicare le persone dall'aspetto.
giungere||ankommen / gelangen|Siamo giunti a una conclusione.
identificare||identifizieren|La polizia ha identificato il ladro.
impiegare||brauchen (Zeit) / einsetzen|Impiego mezz'ora per andare al lavoro.
`,
"B1 – Verben 5": `
imporre||auferlegen / durchsetzen|Il medico mi impone una dieta.
individuare||ausfindig machen / erkennen|Abbiamo individuato il problema.
intendere||meinen / beabsichtigen|Che cosa intendi dire?
intervenire||eingreifen / sich zu Wort melden|La polizia è intervenuta subito.
investire||investieren / überfahren|Ha investito i suoi risparmi in una casa.
ispirare||inspirieren|Il viaggio mi ha ispirato un racconto.
obbligare||verpflichten / zwingen|Nessuno ti obbliga a venire.
occorrere||nötig sein|Occorrono due ore di treno.
operare||operieren / tätig sein|Il chirurgo opera domani mattina.
opporre||entgegensetzen|Il sindaco si oppone al progetto.
percepire||wahrnehmen / beziehen (Gehalt)|Percepisco una certa tensione.
possedere||besitzen|La famiglia possiede due case.
procedere||vorgehen / weitergehen|Procediamo con ordine.
produrre||herstellen / produzieren|Questa zona produce un ottimo vino.
proseguire||fortsetzen / weiterfahren|Proseguite dritto fino alla piazza.
provenire||stammen / herkommen|Il caffè proviene dal Brasile.
puntare||zielen / setzen auf|Puntiamo sulla qualità.
recare||bringen / tragen (schriftlich)|La lettera reca la data di ieri.
reggere||halten / aushalten|Non reggo più questo caldo.
richiedere||verlangen / beantragen|Ho richiesto un nuovo passaporto.
riferire||berichten / ausrichten|Riferisci a tua madre che ho chiamato.
riguardare||betreffen|Questa regola riguarda tutti.
risalire||zurückgehen (zeitlich) / wieder hinaufgehen|La chiesa risale al Duecento.
riservare||reservieren / vorbehalten|Il tavolo è riservato.
risultare||sich ergeben / sich herausstellen|Dalle analisi risulta tutto normale.
ritenere||halten für / meinen|Ritengo che sia la scelta giusta.
riunire||versammeln|Il pranzo di Natale riunisce tutta la famiglia.
rivolgere||richten (an)|Per informazioni rivolgersi alla reception.
scomparire||verschwinden|Il sole è scomparso dietro le nuvole.
scorrere||fließen / scrollen|Il fiume scorre lento.
sfuggire||entkommen / entgehen|Mi è sfuggito il suo nome.
significare||bedeuten|Che cosa significa questa parola?
soddisfare||zufriedenstellen|Il risultato mi soddisfa.
sottoporre||unterziehen / vorlegen|Mi sono sottoposto a un esame del sangue.
subire||erleiden|La squadra ha subito una brutta sconfitta.
svolgere||ausüben / durchführen|Che lavoro svolgi?
tendere||neigen zu / spannen|Tendo a dimenticare le date.
trascinare||schleppen / mitreißen|Trascino la valigia fino alla stazione.
trattenere||zurückhalten|Non riesco a trattenere le risate.
addossare||aufbürden / anlehnen|Non addossare a me tutta la colpa.
`,
"B1 – Abstrakte Nomen 1": `
anima|l'|Seele|Canta con tutta l'anima.
atmosfera|l'|Atmosphäre / Stimmung|Il locale ha un'atmosfera accogliente.
attività|l'|Tätigkeit / Aktivität|Quali attività fai nel tempo libero?
bellezza|la|Schönheit|La bellezza del paesaggio mi colpisce.
capacità|la|Fähigkeit|Ha una grande capacità di ascoltare.
caratteristica|la|Merkmal / Eigenschaft|Qual è la caratteristica principale del prodotto?
categoria|la|Kategorie|Questo hotel è di prima categoria.
comunicazione|la|Kommunikation / Mitteilung|La comunicazione nel gruppo funziona bene.
comunità|la|Gemeinschaft|La comunità del paese organizza la festa.
concetto|il|Begriff / Konzept|Non capisco bene questo concetto.
confine|il|Grenze|Il confine con la Svizzera è vicino.
costruzione|la|Bau / Gebäude|La costruzione del ponte dura due anni.
definizione|la|Definition|Cerca la definizione sul dizionario.
descrizione|la|Beschreibung|Fai una breve descrizione della foto.
dichiarazione|la|Erklärung|Il ministro ha rilasciato una dichiarazione.
direzione|la|Richtung / Leitung|In che direzione è il centro?
edizione|l'|Ausgabe / Auflage|Ho comprato l'ultima edizione del libro.
elemento|l'|Element / Bestandteil|L'acqua è un elemento essenziale.
espressione|l'|Ausdruck|È un'espressione tipica romana.
esistenza|l'|Existenz / Dasein|Non sapevo dell'esistenza di questo museo.
evento|l'|Ereignis / Veranstaltung|L'evento si svolge in piazza.
fantasia|la|Fantasie|I bambini hanno tanta fantasia.
fase|la|Phase|Il progetto è nella fase finale.
fattore|il|Faktor|Il tempo è un fattore importante.
funzione|la|Funktion|A che cosa serve questa funzione del telefono?
gestione|la|Verwaltung / Management|La gestione dell'albergo è cambiata.
giudizio|il|Urteil|Non voglio dare un giudizio affrettato.
importanza|l'|Wichtigkeit / Bedeutung|Non dare troppa importanza alle critiche.
impressione|l'|Eindruck|Ho l'impressione che stia per piovere.
impresa|l'|Unternehmen / Unterfangen|Lavora in un'impresa edile.
impianto|l'|Anlage|L'impianto elettrico è vecchio.
indice|l'|Index / Zeigefinger / Inhaltsverzeichnis|Guarda l'indice del libro.
industria|l'|Industrie|L'industria della moda è importante a Milano.
linguaggio|il|Sprache / Ausdrucksweise|Usa un linguaggio semplice.
maniera|la|Art / Weise|Lo fa alla sua maniera.
massa|la|Masse|Una massa di gente aspetta il treno.
missione|la|Mission / Auftrag|La missione è compiuta!
mistero|il|Geheimnis / Rätsel|Per me la matematica è un mistero.
miracolo|il|Wunder|È un miracolo che sia arrivato in tempo.
morale|la|Moral / Stimmung|Il morale della squadra è alto.
`,
"B1 – Abstrakte Nomen 2": `
necessità|la|Notwendigkeit / Bedürfnis|Il telefono è ormai una necessità.
norma|la|Norm / Regel|Di norma pranzo all'una.
novità|la|Neuheit / Neuigkeit|Ci sono novità?
onore|l'|Ehre|È un onore conoscerla.
ordine|l'|Ordnung / Befehl / Bestellung|Metti in ordine la tua camera!
organismo|l'|Organismus|Il corpo umano è un organismo complesso.
organizzazione|l'|Organisation|L'organizzazione della festa è perfetta.
organo|l'|Organ / Orgel|Il cuore è un organo vitale.
origine|l'|Ursprung / Herkunft|Qual è l'origine di questa tradizione?
presenza|la|Anwesenheit|Grazie della vostra presenza.
prodotto|il|Produkt / Erzeugnis|Compro prodotti locali.
produzione|la|Produktion / Herstellung|La produzione di olio è aumentata.
questione|la|Frage / Angelegenheit|È una questione di tempo.
quota|la|Anteil / Höhe (über dem Meer) / Beitrag|La quota d'iscrizione è di venti euro.
regime|il|Regime / Ordnung|Il paese ha vissuto vent'anni di regime.
registrazione|la|Aufnahme / Registrierung|Ascolta la registrazione due volte.
regno|il|Königreich / Reich|Il Regno Unito ha lasciato l'Unione europea.
riproduzione|la|Wiedergabe / Nachbildung|È una riproduzione del quadro originale.
ruolo|il|Rolle|Che ruolo ha nel film?
scambio|lo|Austausch|Partecipo a uno scambio con una scuola italiana.
scrittura|la|Schrift / Schreiben|Ha una scrittura difficile da leggere.
sede|la|Sitz / Zentrale|La sede dell'azienda è a Torino.
sensazione|la|Gefühl / Empfindung|Ho la sensazione di averlo già visto.
sentimento|il|Gefühl|Non nasconde i suoi sentimenti.
sezione|la|Abschnitt / Abteilung|Cerca nella sezione "sport".
significato|il|Bedeutung|Qual è il significato di questa parola?
soggetto|il|Subjekt / Thema|Il soggetto del quadro è un paesaggio.
sofferenza|la|Leiden|La malattia gli ha causato molta sofferenza.
sorta|la|Art / Sorte|È una sorta di torta salata.
sospetto|il|Verdacht / verdächtig|Ho un sospetto: è stato lui.
superficie|la|Oberfläche / Fläche|La superficie del tavolo è liscia.
supporto|il|Unterstützung / Halterung|Grazie per il tuo supporto.
tecnica|la|Technik|Ha una buona tecnica di nuoto.
tensione|la|Spannung|C'è tensione tra i due colleghi.
terreno|il|Boden / Grundstück|Hanno comprato un terreno in campagna.
territorio|il|Gebiet|Il territorio della regione è montuoso.
trattamento|il|Behandlung|Il trattamento in quell'hotel è ottimo.
tratto|il|Abschnitt / Strich / Zug|Questo tratto di strada è chiuso.
umanità|l'|Menschheit / Menschlichkeit|È una persona di grande umanità.
universo|l'|Universum|L'universo è infinito?
vicenda|la|Geschichte / Ereignis|Tutti parlano di questa vicenda.
visione|la|Vision / Sicht|Abbiamo una visione diversa del problema.
volontà|la|Wille|Ci vuole forza di volontà.
filosofia|la|Philosophie|Studia filosofia all'università.
`,
"B1 – Staat, Militär & Religion": `
arma|l'|Waffe|È vietato portare armi.
attacco|l'|Angriff / Anfall|Ha avuto un attacco di tosse.
battaglia|la|Schlacht / Kampf|Il film racconta una famosa battaglia.
esercito|l'|Armee / Heer|Mio nonno era nell'esercito.
militare||militärisch / Soldat|Ha fatto il servizio militare.
ministero|il|Ministerium|Lavora al ministero degli esteri.
nazione|la|Nation|Le Nazioni Unite hanno sede a New York.
omicidio|l'|Mord|La polizia indaga su un omicidio.
imputato|l'|Angeklagter|L'imputato si dichiara innocente.
cadavere|il|Leiche|Nel giallo trovano un cadavere nel lago.
pistola|la|Pistole|Il poliziotto porta la pistola.
droga|la|Droge|La droga rovina la vita.
lotta|la|Kampf|La lotta contro l'inquinamento è importante.
rivoluzione|la|Revolution|La rivoluzione francese è del 1789.
ente|l'|Behörde / Einrichtung|L'ente del turismo organizza visite guidate.
vendita|la|Verkauf|La casa è in vendita.
comunista||kommunistisch / Kommunist|Il nonno votava per il partito comunista.
cristiano||christlich / Christ|Il Natale è una festa cristiana.
cattolico||katholisch / Katholik|L'Italia è un paese di tradizione cattolica.
ebreo||jüdisch / Jude|Il quartiere ebraico di Roma si chiama il Ghetto.
`,
"B1 – Umgangssprache derb": `
cazzo||(vulgär) Mist! / verdammt|Cazzo, ho perso il treno!
culo|il|(vulgär) Hintern / Glück|Che culo, ho trovato parcheggio subito!
merda|la|(vulgär) Scheiße|Che tempo di merda!
stronzo|lo|(vulgär) Arschloch|Non fare lo stronzo con tua sorella.
coglione|il|(vulgär) Idiot / Depp|Che coglione, ha dimenticato il passaporto!
fregare||(umgangssprachlich) reinlegen / klauen|Mi hanno fregato il portafoglio.
fregarsene||(umgangssprachlich) scheißegal sein|Me ne frego di quello che dice.
cavolo||Kohl / (mild) Mist!|Cavolo, è già mezzanotte!
accidenti||verflixt! / Mist!|Accidenti, ho dimenticato l'ombrello!
casino|il|(umgangssprachlich) Chaos / Durcheinander|Che casino in questa stanza!
incazzarsi||(vulgär) sich aufregen / sauer werden|Non incazzarti, era uno scherzo.
incazzato||(vulgär) stinksauer|È incazzato nero con il capo.
palle|le|(vulgär) Eier / Nerven|Che palle, piove di nuovo!
rompere le scatole||(umgangssprachlich) nerven|Smettila di rompere le scatole!
rompiscatole|il|(umgangssprachlich) Nervensäge|Il mio vicino è un rompiscatole.
vaffanculo||(vulgär) verpiss dich|Si sono mandati a vaffanculo per un parcheggio.
porca miseria||verdammt noch mal!|Porca miseria, la macchina non parte!
figo||(umgangssprachlich) cool / geil|Che figo questo zaino!
sfigato||(umgangssprachlich) Pechvogel / uncool|Che sfigato, ha preso la multa!
scemo||doof / Dummkopf|Non fare lo scemo!
cretino||Idiot / blöd|Che domanda cretina!
fesso||blöd / Trottel|Non sono mica fesso!
schifo|lo|Ekel / Mist|Questo panino fa schifo.
bastardo||(vulgär) Mistkerl|Quel bastardo mi ha rigato la macchina.
`
});
})();

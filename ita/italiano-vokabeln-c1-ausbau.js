/* C1-Ausbau für vokabeln.html (Stufe 4: gehobener Wortschatz)
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

add({
"C1 – Gehobene Verben 1": `
acclarare||klären / feststellen|La commissione deve acclarare i fatti.
addurre||anführen (Gründe)|Ha addotto mille scuse.
adempiere||erfüllen (Pflicht)|Ha adempiuto a tutti i suoi obblighi.
adoperarsi||sich einsetzen|Si è adoperato per trovare una soluzione.
appurare||ermitteln / klären|Bisogna appurare chi ha ragione.
arginare||eindämmen|Il governo cerca di arginare la crisi.
avallare||gutheißen / bürgen|Il direttore ha avallato la proposta.
avvalersi||sich bedienen / in Anspruch nehmen|L'azienda si avvale di consulenti esterni.
cagionare||verursachen (juristisch)|L'incidente ha cagionato gravi danni.
comprovare||belegen / nachweisen|Serve un documento che comprovi la residenza.
confutare||widerlegen|Ha confutato la tesi dell'avversario.
constatare||feststellen|Constato con piacere che sei puntuale.
corroborare||untermauern|I dati corroborano la nostra ipotesi.
deliberare||beschließen|Il consiglio ha deliberato all'unanimità.
delineare||umreißen / skizzieren|Il ministro ha delineato il piano.
demandare||übertragen / delegieren|La decisione è demandata al giudice.
derogare||abweichen (von einer Regel)|Non si può derogare alla legge.
desumere||entnehmen / schließen|Dai dati si desume un calo delle vendite.
dirimere||schlichten / klären|Un arbitro dirimerà la controversia.
disattendere||missachten / enttäuschen|Ha disatteso le aspettative di tutti.
discostarsi||abweichen|Il risultato si discosta poco dalle previsioni.
divulgare||verbreiten|La notizia è stata divulgata dai giornali.
eludere||umgehen / ausweichen|Ha eluso la domanda.
emanare||erlassen / ausströmen|Il governo emana un nuovo decreto.
esautorare||entmachten|Il consiglio ha esautorato il presidente.
esimere||befreien (von einer Pflicht)|Questo non ti esime dalle tue responsabilità.
esplicare||ausüben / erläutern|L'ente esplica funzioni di controllo.
esulare||hinausgehen über|Questa domanda esula dal tema.
evincere||entnehmen / schließen|Dal testo si evince l'opinione dell'autore.
fregiarsi||sich schmücken mit|Si fregia del titolo di cavaliere.
imperversare||wüten|Il maltempo imperversa sul nord.
impugnare||anfechten / ergreifen|L'avvocato impugna la sentenza.
incombere||drohen / obliegen|Incombe una grave minaccia.
inficiare||beeinträchtigen / ungültig machen|Un errore può inficiare l'intero esame.
intercedere||sich verwenden für|Ha interceduto per suo figlio.
ottemperare||nachkommen (Vorschrift)|È obbligatorio ottemperare alle norme.
perpetrare||verüben|Il crimine è stato perpetrato di notte.
pervenire||gelangen / eingehen|La sua domanda ci è pervenuta ieri.
plasmare||formen / prägen|La scuola plasma il carattere dei ragazzi.
ponderare||abwägen|Bisogna ponderare bene ogni scelta.
`,
"C1 – Gehobene Verben 2": `
precludere||verbauen / ausschließen|Questo errore gli preclude la carriera.
presagire||vorausahnen|Nessuno poteva presagire la crisi.
prevaricare||seine Macht missbrauchen|Il capo tende a prevaricare.
procrastinare||aufschieben|Smetti di procrastinare e inizia!
propugnare||verfechten|Propugna idee ecologiste.
recepire||aufnehmen / umsetzen|L'Italia ha recepito la direttiva europea.
redimere||erlösen / tilgen|Vuole redimersi dai suoi errori.
reiterare||wiederholen|Ha reiterato la richiesta più volte.
sottendere||implizieren / zugrunde liegen|Il discorso sottende una critica.
sopperire||ausgleichen / abhelfen|Sopperisce alla mancanza di esperienza con l'impegno.
stigmatizzare||brandmarken|Il giornale stigmatizza la violenza.
suffragare||stützen / bekräftigen|Le prove suffragano la sua versione.
travalicare||überschreiten|Le sue parole travalicano i limiti.
vagliare||prüfen / sieben|Stiamo vagliando tutte le candidature.
vanificare||zunichtemachen|La pioggia ha vanificato i nostri sforzi.
vertere||sich drehen um (Thema)|La discussione verte sul clima.
avvicendarsi||sich abwechseln|Diversi allenatori si sono avvicendati.
accingersi||sich anschicken|Mi accingo a partire.
ravvisare||erkennen / feststellen|Non ravviso alcun problema.
riscontrare||feststellen / vorfinden|Abbiamo riscontrato alcuni errori.
soprassedere||zurückstellen / absehen von|Per ora soprassediamo su questo punto.
accorpare||zusammenlegen|Hanno accorpato due scuole.
ammortizzare||abfedern / abschreiben|Il governo ammortizza gli effetti della crisi.
annoverare||zählen (zu)|Lo si annovera tra i migliori autori.
attenersi||sich halten an|Attenersi alle istruzioni.
convalidare||bestätigen / entwerten (Fahrkarte)|Convalida il biglietto prima di salire.
corrispondere (un importo)||zahlen / entrichten|L'azienda corrisponde lo stipendio il 27.
decadere||verfallen / ablaufen|Il diritto decade dopo un anno.
devolvere||spenden / überweisen|L'incasso sarà devoluto in beneficenza.
esperire||ausschöpfen (Rechtsmittel)|Ha esperito tutte le vie legali.
espletare||erledigen|L'ufficio espleta le pratiche in un mese.
indire||ausschreiben / anberaumen|Il comune indice un concorso.
inoltrare||weiterleiten / einreichen|Ti inoltro l'e-mail.
predisporre||vorbereiten / einrichten|Abbiamo predisposto tutto per la riunione.
protrarre||hinziehen / verlängern|La riunione si è protratta fino a sera.
rescindere||auflösen (Vertrag)|Hanno rescisso il contratto.
revocare||widerrufen|Il comune ha revocato il permesso.
sancire||festlegen / besiegeln|La Costituzione sancisce l'uguaglianza.
subentrare||nachfolgen / eintreten|Il nuovo inquilino subentra a marzo.
`,
"C1 – Verben: gehen, sehen, sprechen": `
avviarsi||sich auf den Weg machen|Ci avviamo verso casa.
recarsi||sich begeben|Mi reco in ufficio alle otto.
dirigersi||sich wenden / ansteuern|Si dirige verso l'uscita.
inoltrarsi||vordringen|Ci inoltriamo nel bosco.
addentrarsi||eindringen / sich vertiefen|Non voglio addentrarmi nei dettagli.
aggirarsi||umherstreifen / sich belaufen auf|Il costo si aggira sui mille euro.
girovagare||herumstreifen|Abbiamo girovagato per Roma tutto il giorno.
barcollare||taumeln|Esce dal bar barcollando.
ciondolare||herumlungern / baumeln|I ragazzi ciondolano in piazza.
sfrecciare||vorbeisausen|Una moto sfreccia sulla strada.
precipitarsi||davonstürzen / herbeieilen|Si precipita alla porta.
arrancare||sich mühsam vorwärtsschleppen|Arranco sulla salita.
brancolare||tappen / tasten|Brancoliamo nel buio.
sgattaiolare||davonschleichen|Il gatto sgattaiola fuori.
intrufolarsi||sich einschleichen|Si è intrufolato alla festa.
sbirciare||spähen / schielen|Sbircia il compito del compagno.
scrutare||mustern / erforschen|Scruta l'orizzonte.
adocchiare||ins Auge fassen|Ho adocchiato un bel vestito.
avvistare||sichten|Hanno avvistato una balena.
contemplare||betrachten / vorsehen|Contempla il tramonto in silenzio.
puntualizzare||präzisieren|Vorrei puntualizzare una cosa.
obiettare||einwenden|Nessuno ha obiettato.
ribattere||erwidern / kontern|Ha ribattuto con calma.
controbattere||widersprechen / dagegenhalten|L'avvocato controbatte punto per punto.
asserire||behaupten|Asserisce di essere innocente.
balbettare||stottern|Per l'emozione balbetta.
farfugliare||nuscheln|Farfuglia qualcosa e se ne va.
borbottare||brummeln|Il nonno borbotta contro la TV.
bofonchiare||murmeln (unwillig)|Bofonchia una scusa.
mugugnare||murren|I lavoratori mugugnano.
sussurrare||flüstern|Mi sussurra all'orecchio.
sghignazzare||hämisch lachen|Sghignazzano alle sue spalle.
sogghignare||grinsen (spöttisch)|Sogghigna soddisfatto.
ridacchiare||kichern|Le ragazze ridacchiano in fondo all'aula.
singhiozzare||schluchzen|Il bambino singhiozza.
piagnucolare||quengeln / jammern|Smettila di piagnucolare!
sbraitare||herumbrüllen|Il capo sbraita in ufficio.
inveire||schimpfen / wettern|Inveisce contro il governo.
tracannare||hinunterkippen|Tracanna la birra in un sorso.
trangugiare||hinunterschlingen|Trangugia il pranzo in cinque minuti.
sorseggiare||nippen|Sorseggio un caffè al bar.
sgranocchiare||knabbern|Sgranocchiamo patatine davanti al film.
`,
"C1 – Gefühle & Verhalten (Verben)": `
arrovellarsi||sich den Kopf zerbrechen|Mi arrovello su questo problema.
crogiolarsi||sich sonnen / genießen|Si crogiola al sole.
dileguarsi||verschwinden / sich auflösen|La nebbia si dilegua.
gongolare||frohlocken|Gongola per la vittoria.
impelagarsi||sich verstricken|Non impelagarti in queste discussioni.
rabbrividire||erschauern|Rabbrividisco al pensiero.
rimuginare||grübeln|Rimugina su quello che ha detto.
struggersi||sich verzehren|Si strugge di nostalgia.
tentennare||schwanken / zögern|Tentenna prima di rispondere.
trasalire||zusammenzucken|Trasale al suono del telefono.
indispettire||verärgern|Il suo ritardo mi indispettisce.
infervorarsi||sich ereifern|Si infervora quando parla di politica.
intestardirsi||sich versteifen|Si è intestardito a fare da solo.
mortificare||kränken / demütigen|Non volevo mortificarti.
rammaricarsi||bedauern|Mi rammarico di non essere venuto.
risentirsi||gekränkt sein|Si è risentito per la critica.
sconcertare||verblüffen|La sua risposta mi ha sconcertato.
spazientirsi||die Geduld verlieren|Il professore si spazientisce.
stizzirsi||sich ärgern|Si stizzisce per niente.
avvilire||entmutigen|Non lasciarti avvilire.
corrucciarsi||verdrießlich werden|Si corruccia quando perde.
compiacere||gefällig sein|Cerca sempre di compiacere tutti.
lusingarsi||sich schmeicheln|Non lusingarti troppo.
ingraziarsi||sich einschmeicheln|Cerca di ingraziarsi il capo.
adulare||schmeicheln|Adula il direttore per avere una promozione.
schernire||verspotten|Lo scherniscono per il suo accento.
deridere||verlachen|Non deridere chi sbaglia.
umiliarsi||sich erniedrigen|Non voglio umiliarmi a chiedere.
pavoneggiarsi||sich aufplustern|Si pavoneggia con la macchina nuova.
vanagloriarsi||prahlen|Si vanagloria dei suoi successi.
`,
"C1 – Gehobene Adjektive 1": `
arguto||geistreich / scharfsinnig|Ha fatto una battuta arguta.
astruso||verworren / abstrus|È un ragionamento astruso.
avveduto||umsichtig|È un amministratore avveduto.
bieco||finster / scheel|Mi lancia uno sguardo bieco.
caparbio||starrköpfig|È caparbio e non molla mai.
capzioso||verfänglich|È una domanda capziosa.
circospetto||vorsichtig / umsichtig|Si muove in modo circospetto.
cospicuo||beträchtlich|Ha ereditato una somma cospicua.
encomiabile||lobenswert|Il suo impegno è encomiabile.
effimero||vergänglich|La fama è effimera.
esiguo||gering / knapp|Il margine è esiguo.
esimio||hochverehrt|Esimio professore, la ringrazio.
fatuo||eitel / albern|È un discorso fatuo.
fazioso||parteiisch|È un giornalista fazioso.
ineccepibile||einwandfrei|Il suo comportamento è ineccepibile.
inequivocabile||unmissverständlich|Il messaggio è inequivocabile.
ingente||erheblich / gewaltig|I danni sono ingenti.
inopportuno||unpassend|È un commento inopportuno.
irrisorio||lächerlich gering|Il prezzo è irrisorio.
laconico||lakonisch / wortkarg|Ha dato una risposta laconica.
lapalissiano||selbstverständlich / banal|È una verità lapalissiana.
lungimirante||weitsichtig|È una scelta lungimirante.
meticoloso||akribisch|È un lavoro meticoloso.
mellifluo||honigsüß / schmeichlerisch|Parla con tono mellifluo.
oculato||umsichtig / wohlüberlegt|È una gestione oculata del denaro.
opinabile||strittig|È una tesi opinabile.
pedante||pedantisch|Non essere pedante!
perentorio||kategorisch / zwingend|Ha dato un ordine perentorio.
pletorico||übermäßig / aufgebläht|È un apparato burocratico pletorico.
precario||prekär / befristet|Ha un lavoro precario.
pregnante||bedeutungsschwer|È un'immagine pregnante.
prolisso||weitschweifig|Il discorso è stato prolisso.
pusillanime||kleinmütig / feige|È un comportamento pusillanime.
recondito||verborgen|Ha un desiderio recondito.
reticente||zurückhaltend / verschwiegen|Il testimone è reticente.
saccente||besserwisserisch|Non sopporto i saccenti.
solerte||eifrig / gewissenhaft|È un impiegato solerte.
sommario||summarisch / knapp|È un giudizio sommario.
spregiudicato||skrupellos / vorurteilsfrei|È un imprenditore spregiudicato.
subdolo||hinterhältig|È stato un attacco subdolo.
`,
"C1 – Gehobene Adjektive 2": `
tangibile||greifbar|Ci sono risultati tangibili.
tenace||zäh / hartnäckig|È una donna tenace.
tracotante||überheblich|Ha un atteggiamento tracotante.
velleitario||illusorisch|È un progetto velleitario.
veemente||heftig|Ha protestato in modo veemente.
vetusto||uralt|È un edificio vetusto.
zelante||eifrig / übereifrig|È un funzionario zelante.
aleatorio||ungewiss / zufallsabhängig|Il guadagno è aleatorio.
ameno||lieblich / amüsant|È un luogo ameno.
attinente||zugehörig / einschlägig|La domanda non è attinente.
avulso||losgelöst|È un discorso avulso dalla realtà.
cavilloso||spitzfindig|È un avvocato cavilloso.
consono||angemessen|Indossa un abito consono all'occasione.
contiguo||angrenzend|Le due stanze sono contigue.
desueto||ungebräuchlich|È una parola desueta.
eclatante||aufsehenerregend|È un caso eclatante.
efferato||grausam / brutal|È un delitto efferato.
emblematico||sinnbildlich|È un esempio emblematico.
esorbitante||horrend|Il prezzo è esorbitante.
fallace||trügerisch|È un ragionamento fallace.
fortuito||zufällig|È stato un incontro fortuito.
impellente||dringend|Ho un bisogno impellente.
inderogabile||unaufschiebbar|È un termine inderogabile.
indomito||unbezähmbar|Ha uno spirito indomito.
inesorabile||unerbittlich|Il tempo passa inesorabile.
inoppugnabile||unanfechtbar|È una prova inoppugnabile.
intrinseco||innewohnend|Il valore intrinseco dell'opera.
irreprensibile||untadelig|È una persona irreprensibile.
latente||latent / verborgen|C'è un conflitto latente.
lezioso||geziert|Ha un modo di parlare lezioso.
macchinoso||umständlich|La procedura è macchinosa.
magnanimo||großmütig|È stato magnanimo con i vinti.
mendace||verlogen|È una dichiarazione mendace.
obsoleto||veraltet|Questo software è obsoleto.
palese||offenkundig|È palese che mente.
peculiare||eigentümlich|Ha un accento peculiare.
pernicioso||verderblich|È un'abitudine perniciosa.
precipuo||hauptsächlich|Il compito precipuo della scuola è educare.
proficuo||nutzbringend|È stato un incontro proficuo.
prolifico||produktiv / fruchtbar|È uno scrittore prolifico.
`,
"C1 – Gehobene Adjektive 3": `
propizio||günstig|È il momento propizio.
pretestuoso||vorgeschoben|È una scusa pretestuosa.
raccapricciante||grauenhaft|È una scena raccapricciante.
ridondante||redundant / überladen|Lo stile è ridondante.
salace||pikant / bissig|Ha fatto un commento salace.
sbrigativo||kurz angebunden|È stato sbrigativo al telefono.
scaltro||gerissen|È un commerciante scaltro.
schivo||scheu / zurückhaltend|È un artista schivo.
sciatto||schlampig|Ha un aspetto sciatto.
sobrio||schlicht / nüchtern|Ha uno stile sobrio.
sornione||verschmitzt|Ha un sorriso sornione.
specioso||scheinbar richtig|È un argomento specioso.
strenuo||unermüdlich|È uno strenuo difensore dei diritti.
tassativo||strikt / zwingend|È un divieto tassativo.
temerario||tollkühn|È stato un gesto temerario.
tetro||düster|È un castello tetro.
torvo||finster (Blick)|Mi guarda con occhio torvo.
tronfio||aufgeblasen|È tronfio dei suoi successi.
uggioso||trüb / langweilig|È una giornata uggiosa.
vacuo||leer / nichtssagend|È un discorso vacuo.
vessatorio||schikanös|È una clausola vessatoria.
viscerale||tief / leidenschaftlich|Ha un amore viscerale per Napoli.
arcigno||mürrisch|Ha un'espressione arcigna.
ostico||schwierig / unzugänglich|La fisica mi è ostica.
pacato||gelassen|Parla con tono pacato.
pacchiano||kitschig / protzig|È un arredamento pacchiano.
posticcio||künstlich / falsch|Ha una barba posticcia.
ruvido||rau|La carta è ruvida.
spocchioso||hochnäsig|È un ragazzo spocchioso.
sguaiato||ungehobelt / laut|Ha una risata sguaiata.
tedioso||langweilig|È un film tedioso.
trasandato||ungepflegt|È vestito in modo trasandato.
avere in uggia||(jemanden) nicht ausstehen können|Ho in uggia le riunioni infinite.
inveterato||eingefleischt|È un fumatore inveterato.
incallito||eingefleischt / abgehärtet|È un giocatore incallito.
indefesso||unermüdlich|È un lavoratore indefesso.
`,
"C1 – Behörden- & Briefsprache": `
ai sensi di||gemäß / im Sinne von|Ai sensi dell'articolo 3, la domanda è valida.
in merito a||bezüglich|In merito alla sua richiesta, le comunichiamo...
in ottemperanza a||in Befolgung von|In ottemperanza alla legge, il negozio chiude.
si prega di||es wird gebeten|Si prega di non fumare.
la presente||das vorliegende Schreiben|Con la presente le comunico le mie dimissioni.
in allegato||als Anlage|In allegato trova il curriculum.
distinti saluti||mit freundlichen Grüßen (förmlich)|Distinti saluti, Mario Rossi.
a norma di legge||gesetzeskonform|L'impianto è a norma di legge.
previo appuntamento||nach Vereinbarung|Si riceve previo appuntamento.
entro e non oltre||spätestens bis|Inviare entro e non oltre il 30 giugno.
salvo imprevisti||sofern nichts dazwischenkommt|Salvo imprevisti, arrivo domani.
in calce||unten (am Seitenende)|Firmare in calce al documento.
autocertificazione|l'|Eigenerklärung|Basta un'autocertificazione.
modulistica|la|Formulare|La modulistica è sul sito del comune.
marca da bollo|la|Stempelmarke|Serve una marca da bollo da sedici euro.
codice fiscale|il|Steuernummer|Indichi il suo codice fiscale.
pratica|la|Vorgang / Akte|La pratica è in lavorazione.
sportello|lo|Schalter|Si rivolga allo sportello numero tre.
delega|la|Vollmacht|Può ritirare il pacco con una delega.
anagrafe|l'|Meldeamt|Mi sono registrato all'anagrafe.
domicilio|il|Wohnsitz / Aufenthaltsort|Indichi il domicilio, se diverso dalla residenza.
nulla osta|il|Unbedenklichkeitsbescheinigung|Serve il nulla osta della scuola.
proroga|la|Verlängerung (Frist)|Abbiamo ottenuto una proroga di un mese.
scadenza|la|Ablauf / Frist|La scadenza è il 15 marzo.
sollecito|il|Mahnung|Ho ricevuto un sollecito di pagamento.
raccomandata|la|Einschreiben|Ho spedito la disdetta con raccomandata.
disdetta|la|Kündigung (Vertrag)|Ho inviato la disdetta dell'abbonamento.
adempimento|l'|Erfüllung (Pflicht)|Gli adempimenti fiscali sono complicati.
inadempienza|l'|Nichterfüllung|L'inadempienza comporta una multa.
decorrenza|la|Wirksamkeit (ab)|Con decorrenza dal primo gennaio.
ai fini di||zwecks|Ai fini della domanda, allegare la carta d'identità.
suddetto||oben genannt|Il suddetto signore è pregato di presentarsi.
sottoscritto|il|Unterzeichneter|Il sottoscritto dichiara di...
codesto||dieser (dort, förmlich)|Si chiede a codesto ufficio di...
all'uopo||zu diesem Zweck|Si allega all'uopo il modulo.
ivi||dort / daselbst|Ivi compreso il trasporto.
`,
"C1 – Gehobene Konnektoren": `
qualora||falls|Qualora non fosse possibile, avvisateci.
laddove||wo hingegen / falls|Laddove necessario, interveniamo.
altresì||ebenfalls|Si comunica altresì che l'ufficio è chiuso.
pertanto||daher|Pertanto la riunione è rinviata.
onde||damit / um zu|Vi scrivo onde evitare malintesi.
purché||sofern|Vengo, purché tu guidi.
nondimeno||dennoch|È stanco, nondimeno continua.
peraltro||übrigens / zudem|È caro e, peraltro, brutto.
benché||obwohl|Benché piova, usciamo.
sebbene||obwohl|Sebbene sia tardi, resto.
qualsivoglia||jeglicher|Non ammette qualsivoglia eccezione.
alcunché||irgendetwas|Non ha detto alcunché.
alquanto||ziemlich|È alquanto strano.
oltremodo||überaus|È oltremodo gentile.
viepiù||immer mehr|Il problema diventa viepiù grave.
giacché||da ja|Giacché sei qui, aiutami.
dacché||seit / da|Dacché è arrivato, è cambiato tutto.
nella misura in cui||insofern|Ti aiuto nella misura in cui posso.
a prescindere da||abgesehen von|A prescindere dal costo, è un buon progetto.
in virtù di||kraft / aufgrund|In virtù dell'accordo, i prezzi scendono.
a fronte di||angesichts / gegenüber|A fronte di un aumento dei costi, alziamo i prezzi.
in seno a||innerhalb|Ci sono tensioni in seno al partito.
in ordine a||hinsichtlich|In ordine alla sua richiesta...
in luogo di||anstelle von|In luogo del direttore parla il vice.
stante||angesichts (förmlich)|Stante la situazione, rinviamo.
fermo restando che||vorausgesetzt / unbeschadet dessen, dass|Fermo restando che il prezzo non cambia.
dal momento che||da / weil|Dal momento che sei qui, resta a cena.
ciononostante||trotzdem|Ha piovuto; ciononostante, la festa è riuscita.
per l'appunto||genau / eben|È per l'appunto quello che volevo dire.
tant'è vero che||was dadurch belegt wird, dass|Era stanco, tant'è vero che si è addormentato.
`,
"C1 – Nachrichtensprache 1": `
varare||verabschieden / vom Stapel lassen|Il governo vara la riforma.
stanziare||bereitstellen (Mittel)|Lo Stato stanzia due miliardi.
sventare||vereiteln|La polizia sventa un attentato.
sgominare||zerschlagen|Sgominata una banda di ladri.
indagato|l'|Beschuldigter|L'indagato si dichiara innocente.
inquirente|l'|Ermittler|Gli inquirenti seguono una pista.
arresti domiciliari|gli|Hausarrest|È agli arresti domiciliari.
latitante|il|Flüchtiger|Il latitante è stato catturato dopo anni.
ostruzionismo|l'|Obstruktion / Blockade|L'opposizione fa ostruzionismo.
manovra finanziaria|la|Haushaltspaket|La manovra finanziaria prevede tagli.
rimpasto|il|Kabinettsumbildung|Si parla di un rimpasto di governo.
dimissioni|le|Rücktritt|Il ministro ha dato le dimissioni.
ballottaggio|il|Stichwahl|Il sindaco sarà eletto al ballottaggio.
quorum|il|Quorum|Il referendum non ha raggiunto il quorum.
emendamento|l'|Änderungsantrag|Il Parlamento approva un emendamento.
decreto legge|il|Gesetzesdekret|Il governo approva un decreto legge.
sondaggio|il|Umfrage|Secondo il sondaggio, il partito cresce.
astensionismo|l'|Wahlenthaltung|L'astensionismo è in aumento.
cassa integrazione|la|Kurzarbeitergeld|Gli operai sono in cassa integrazione.
sciopero generale|lo|Generalstreik|Venerdì c'è lo sciopero generale.
ammortizzatori sociali|gli|soziale Sicherungssysteme|Servono nuovi ammortizzatori sociali.
cronaca nera|la|Kriminalberichterstattung|Leggo la cronaca nera del giornale locale.
cronaca rosa|la|Klatschnachrichten|La cronaca rosa parla del matrimonio del cantante.
femminicidio|il|Femizid|Il femminicidio è un'emergenza sociale.
omertà|l'|Schweigegebot (Mafia)|L'omertà protegge i criminali.
faida|la|Fehde|Una faida tra clan.
pizzo|il|Schutzgeld|I negozianti si rifiutano di pagare il pizzo.
condono|il|Straferlass / Amnestie (Steuer, Bau)|Il governo prepara un condono edilizio.
evasione fiscale|l'|Steuerhinterziehung|L'evasione fiscale costa miliardi.
appalto|l'|Ausschreibung / Auftrag|L'appalto è stato vinto da un'impresa locale.
`,
"C1 – Nachrichtensprache 2": `
smentita|la|Dementi|Il ministero ha diffuso una smentita.
indiscrezione|l'|Indiskretion / durchgesickerte Information|Secondo alcune indiscrezioni, il ministro si dimetterà.
vertenza|la|Arbeitskonflikt|La vertenza dei lavoratori continua.
presidio|il|Mahnwache / Stützpunkt|I lavoratori fanno un presidio davanti alla fabbrica.
blitz|il|Razzia / Blitzaktion|Un blitz della polizia all'alba.
retata|la|Razzia|Una retata contro lo spaccio.
fermo|il|vorläufige Festnahme|Il giudice convalida il fermo.
esposto|l'|Anzeige / Eingabe|I cittadini presentano un esposto.
patteggiamento|il|Strafvereinbarung (Deal)|Ha scelto il patteggiamento.
rinvio a giudizio|il|Anklageerhebung|Il giudice dispone il rinvio a giudizio.
tagli|i|Kürzungen|Ci sono tagli alla sanità.
gettito|il|Steueraufkommen|Il gettito fiscale è aumentato.
disavanzo|il|Defizit|Il disavanzo pubblico preoccupa Bruxelles.
debito pubblico|il|Staatsverschuldung|Il debito pubblico è molto alto.
PIL|il|BIP (Bruttoinlandsprodukt)|Il PIL cresce dell'uno per cento.
precariato|il|prekäre Beschäftigung|Il precariato colpisce i giovani.
esodo|l'|Reisewelle / Exodus|Inizia l'esodo estivo verso il mare.
bollino nero|il|Tag mit Rekordverkehr|Sabato è giornata da bollino nero sulle autostrade.
allerta meteo|l'|Wetterwarnung|C'è allerta meteo arancione in Liguria.
sbarco|lo|Landung / Ankunft (Migranten)|Nuovi sbarchi a Lampedusa.
richiedente asilo|il|Asylbewerber|I richiedenti asilo aspettano una risposta.
esponente politico|l'|Politiker / Vertreter|Un esponente politico ha commentato la notizia.
schieramento|lo|Lager / Bündnis|I due schieramenti si sfidano.
coalizione|la|Koalition|La coalizione di governo è divisa.
legislatura|la|Legislaturperiode|È l'ultima legge della legislatura.
mozione di sfiducia|la|Misstrauensantrag|L'opposizione presenta una mozione di sfiducia.
porta a porta||von Tür zu Tür|La raccolta differenziata porta a porta.
`,
"C1 – Abstrakte Nomen 2": `
arbitrio|l'|Willkür / Ermessen|È lasciato al libero arbitrio.
assunto|l'|Annahme / Prämisse|Partiamo da questo assunto.
avvento|l'|Aufkommen / Advent|Con l'avvento di internet tutto è cambiato.
baluardo|il|Bollwerk|La scuola è un baluardo della democrazia.
caposaldo|il|Eckpfeiler|È un caposaldo della nostra cultura.
cardine|il|Angelpunkt / Türangel|È il cardine della riforma.
connubio|il|Verbindung|Un connubio perfetto tra tradizione e innovazione.
corollario|il|Folgerung / Begleiterscheinung|È il corollario naturale della crisi.
crocevia|il|Kreuzung / Knotenpunkt|La città è un crocevia di culture.
dicotomia|la|Zweiteilung|C'è una dicotomia tra teoria e pratica.
dissidio|il|Zwist|C'è un dissidio tra i due soci.
divario|il|Kluft / Gefälle|Il divario tra nord e sud è grande.
egida|l'|Schirmherrschaft|Il festival si svolge sotto l'egida del comune.
emblema|l'|Sinnbild|La lupa è l'emblema di Roma.
epilogo|l'|Ausgang / Epilog|La storia ha un epilogo triste.
fervore|il|Eifer / Inbrunst|Lavora con fervore.
frangente|il|Situation / Brandung|In quel frangente non sapevo cosa fare.
fulcro|il|Dreh- und Angelpunkt|Il fulcro della questione è il denaro.
iato|lo|Kluft / Hiatus|C'è uno iato tra parole e fatti.
impasse|l'|Sackgasse|Le trattative sono in un'impasse.
incognita|l'|Unbekannte|Il tempo è l'unica incognita.
indole|l'|Wesensart|È di indole tranquilla.
iter|l'|Verfahrensweg|L'iter burocratico è lungo.
lacuna|la|Lücke|Ha qualche lacuna in grammatica.
malcontento|il|Unmut|C'è malcontento tra i cittadini.
malinteso|il|Missverständnis|È stato solo un malinteso.
marasma|il|Chaos|Il paese è nel marasma.
nesso|il|Zusammenhang|Non vedo il nesso.
orpello|l'|Flitter / Zierrat|Uno stile senza orpelli.
paradigma|il|Paradigma|È un cambio di paradigma.
parvenza|la|Anschein|C'è solo una parvenza di ordine.
pecca|la|Makel|L'unica pecca è il prezzo.
preambolo|il|Vorrede|Senza tanti preamboli, ti dico la verità.
presupposto|il|Voraussetzung|Mancano i presupposti per un accordo.
primato|il|Vorrang / Rekord|Detiene il primato mondiale.
remora|la|Bedenken / Hemmung|Non ha remore a dire la verità.
retaggio|il|Erbe / Überbleibsel|È un retaggio del passato.
sfumatura|la|Nuance|C'è una sfumatura di ironia.
sopruso|il|Übergriff / Willkürakt|Non tollero i soprusi.
spartiacque|lo|Wasserscheide / Wendepunkt|Quell'anno è stato uno spartiacque.
stallo|lo|Patt / Stillstand|Le trattative sono in stallo.
strascico|lo|Nachwirkung / Schleppe|La crisi lascia strascichi.
svista|la|Versehen|È stata una svista, scusa.
tenore|il|Niveau / Wortlaut / Tenor|Il tenore di vita è alto.
utopia|l'|Utopie|La pace nel mondo sembra un'utopia.
vaglio|il|Prüfung / Sieb|La proposta è al vaglio della commissione.
velleità|la|Anwandlung / unrealistischer Wunsch|Ha velleità artistiche.
zizzania|la|Zwietracht|Mette zizzania tra gli amici.
`,
"C1 – Umgangssprache 2": `
abbuffata|l'|Fressgelage|A Natale facciamo un'abbuffata.
bidone|il|Tonne / Versetzen (nicht kommen)|Mi ha fatto un bidone, non è venuto.
dare buca||versetzen|Mi ha dato buca all'ultimo momento.
fifa|la|Schiss / Angst|Ho una fifa terribile.
imbranato||ungeschickt / Tollpatsch|Sono imbranato con il computer.
magone|il|Kloß im Hals|Ho il magone, mi mancano tutti.
mattone|il|Wälzer / langweiliges Ding|Questo libro è un mattone.
pallone gonfiato|il|Wichtigtuer|È un pallone gonfiato.
pignolo||pingelig|Il mio capo è pignolo.
sgobbare||schuften / büffeln|Sgobbo tutto il giorno per l'esame.
spaparanzarsi||sich lümmeln|Mi spaparanzo sul divano.
svignarsela||sich verdrücken|Se l'è svignata prima della fine.
tirchio||geizig|È troppo tirchio per offrire.
tamarro|il|Prolet / Proll|Guida come un tamarro.
tirare il pacco||versetzen|Mi ha tirato il pacco di nuovo.
sballo|lo|Riesenspaß / Rausch|La festa è stata uno sballo!
menefreghista||gleichgültig / Ignorant|È un menefreghista totale.
buttarsi giù||sich hängen lassen|Non buttarti giù, andrà meglio.
beccarsi||sich einfangen / sich zanken|Mi sono beccato un raffreddore.
ciucciare||nuckeln / lutschen|Il bambino ciuccia il ciuccio.
filarsela||abhauen|Me la filo prima che arrivi il capo.
fregarsene||egal sein|Me ne frego delle critiche.
gufare||Unglück herbeireden|Non gufare, vinceremo!
paccare||versetzen|Mi ha paccato all'ultimo.
rosicare||neidisch sein / sich ärgern|Rosica perché ho vinto io.
sclerare||ausrasten|Sto sclerando con questo esame!
secchiare||büffeln|Secchio per la verifica di domani.
spoilerare||spoilern|Non spoilerarmi il finale!
stra-||mega- / super-|È strabello! Sono stracontento!
tipo||so wie / quasi|Era tipo mezzanotte quando è arrivato.
cioè||also / ich meine|Cioè, non so cosa dire.
boh||keine Ahnung|— Dov'è Marco? — Boh!
mannaggia||verflixt!|Mannaggia, ho perso il treno!
uffa||menno! / puh!|Uffa, che noia!
figurati||keine Ursache / ach was|— Grazie! — Figurati!
magari!||schön wär's!|— Vinci la lotteria? — Magari!
`,
"C1 – Idiome & Redewendungen 2": `
prendere un granchio||sich irren|Ho preso un granchio, scusa.
cadere dalle nuvole||aus allen Wolken fallen|Quando gliel'ho detto, è caduto dalle nuvole.
avere grilli per la testa||Flausen im Kopf haben|Quel ragazzo ha troppi grilli per la testa.
menare il can per l'aia||um den heißen Brei herumreden|Smettila di menare il can per l'aia!
alzare il gomito||zu tief ins Glas schauen|Ieri sera ha alzato il gomito.
rompere il ghiaccio||das Eis brechen|Una battuta per rompere il ghiaccio.
avere la coda di paglia||ein schlechtes Gewissen haben|Si arrabbia perché ha la coda di paglia.
sputare il rospo||mit der Sprache herausrücken|Dai, sputa il rospo!
prendere lucciole per lanterne||etwas völlig missverstehen|Hai preso lucciole per lanterne.
non avere peli sulla lingua||kein Blatt vor den Mund nehmen|Mia nonna non ha peli sulla lingua.
vendere fumo||leere Versprechungen machen|Quel politico vende fumo.
rimanere di sasso||wie versteinert sein|Sono rimasto di sasso.
tirare l'acqua al proprio mulino||auf den eigenen Vorteil bedacht sein|Ognuno tira l'acqua al suo mulino.
essere al verde||pleite sein|A fine mese sono sempre al verde.
fare un buco nell'acqua||einen Schlag ins Wasser machen|Abbiamo fatto un buco nell'acqua.
avere le mani in pasta||überall mitmischen|Ha le mani in pasta in tutto il paese.
essere un pesce fuor d'acqua||sich fehl am Platz fühlen|Alla festa ero un pesce fuor d'acqua.
toccare ferro||auf Holz klopfen|Finora tutto bene, tocchiamo ferro!
farsi le ossa||Erfahrungen sammeln|Si è fatto le ossa in una piccola azienda.
non stare né in cielo né in terra||weder Hand noch Fuß haben|Questa scusa non sta né in cielo né in terra.
piantare in asso||im Stich lassen|Mi ha piantato in asso.
fare la scarpetta||die Soße mit Brot auftunken|Il sugo è così buono che faccio la scarpetta.
avere il dente avvelenato||einen Groll haben|Ha il dente avvelenato con il suo ex capo.
mettere le mani avanti||sich absichern|Metto le mani avanti: potrei arrivare tardi.
gatta ci cova||da ist etwas faul|È troppo gentile, qui gatta ci cova.
a caval donato non si guarda in bocca||einem geschenkten Gaul schaut man nicht ins Maul|Il regalo è brutto, ma a caval donato non si guarda in bocca.
chi la fa l'aspetti||wie du mir, so ich dir|Mi hai fatto uno scherzo: chi la fa l'aspetti!
non tutto il male vien per nuocere||kein Unglück ohne Glück|Ho perso il treno, ma ho conosciuto Luca: non tutto il male vien per nuocere.
fare il bello e il cattivo tempo||das Sagen haben|In ufficio fa il bello e il cattivo tempo.
essere tra l'incudine e il martello||zwischen Hammer und Amboss stehen|Sono tra l'incudine e il martello.
`
});

add({
"C1 – Gehobene Konnektoren": `
anzitutto||zuallererst|Anzitutto, grazie per l'invito.
dopodiché||danach|Ho cenato, dopodiché sono uscito.
frattanto||inzwischen|Frattanto la situazione è peggiorata.
invero||wahrlich / in der Tat|È invero un caso singolare.
ossia||das heißt|Arrivo dopodomani, ossia giovedì.
ovverosia||beziehungsweise / das heißt|Il capoluogo, ovverosia la città principale.
perlopiù||meistens|La sera resto perlopiù a casa.
perlomeno||wenigstens|Perlomeno avvisami!
per giunta||obendrein|È in ritardo e per giunta senza scuse.
per di più||noch dazu|Piove e per di più fa freddo.
d'altronde||übrigens / im Übrigen|D'altronde, nessuno è perfetto.
d'altro canto||andererseits|D'altro canto, il prezzo è buono.
in compenso||dafür / als Ausgleich|È piccolo, in compenso è luminoso.
in sostanza||im Wesentlichen|In sostanza, siamo d'accordo.
in definitiva||letztendlich|In definitiva, è stata una buona idea.
tutt'al più||höchstens|Tutt'al più arriviamo un'ora dopo.
seppure||wenn auch|Ha accettato, seppure a malincuore.
ancorché||obgleich (gehoben)|Ancorché stanco, continuò a lavorare.
malgrado||trotz / obwohl|Malgrado la pioggia, siamo usciti.
sennonché||nur dass / jedoch|Volevo uscire, sennonché è arrivato Paolo.
salvo che||außer wenn|Vengo, salvo che non piova.
a meno che||es sei denn|Vengo, a meno che tu non preferisca restare solo.
fintantoché||solange|Fintantoché ci sei tu, sono tranquillo.
allorché||als / sobald (gehoben)|Allorché giunse la notizia, tutti tacquero.
ogniqualvolta||jedes Mal wenn|Ogniqualvolta lo vedo, sorride.
cosicché||sodass|Ha piovuto, cosicché siamo rimasti a casa.
sicché||sodass / also|Era tardi, sicché siamo andati via.
`,
"C1 – Gehobene Verben 3": `
abdicare||abdanken|Il re abdicò in favore del figlio.
accaparrare||horten / an sich reißen|Accaparrano la farina al supermercato.
acuire||verschärfen|La crisi acuisce le tensioni.
adombrare||andeuten / verdunkeln|Il romanzo adombra una critica alla società.
aizzare||aufhetzen|Aizza i cani contro i passanti.
amalgamare||vermischen / verschmelzen|Amalgama bene gli ingredienti.
arrogarsi||sich anmaßen|Si arroga il diritto di decidere per tutti.
assurgere||aufsteigen (zu)|È assurto a simbolo della città.
bistrattare||schlecht behandeln|Il personale è bistrattato.
blandire||umschmeicheln|Cerca di blandire gli elettori.
carpire||erschleichen|Ha carpito la sua fiducia.
circuire||umgarnen|Ha circuito un'anziana signora.
collimare||übereinstimmen|Le due versioni non collimano.
defilarsi||sich drücken|Al momento di pagare si è defilato.
depauperare||verarmen lassen|La guerra ha depauperato il paese.
desistere||ablassen / aufgeben|Non desiste dal suo proposito.
destituire||absetzen|Il direttore è stato destituito.
dilapidare||verschleudern|Ha dilapidato l'eredità.
dirottare||umleiten / entführen|Hanno dirottato il volo su Bologna.
dissipare||zerstreuen / verschwenden|Le sue parole dissipano ogni dubbio.
elargire||spenden / gewähren|La fondazione elargisce borse di studio.
enfatizzare||hervorheben|Enfatizza i lati positivi.
estromettere||ausschließen / verdrängen|L'hanno estromesso dal consiglio.
fagocitare||verschlingen / schlucken|La grande azienda fagocita le piccole.
fuorviare||irreführen|Il titolo può fuorviare il lettore.
imbastire||heften / vorbereiten|Abbiamo imbastito un piano.
incalzare||bedrängen|Il giornalista incalza il ministro.
incentivare||fördern / Anreize schaffen|Il governo incentiva l'uso della bici.
indulgere||nachgeben / sich hingeben|Non indulgere nei vizi.
infierire||wüten / nachtreten|Non infierire, ha già capito.
insabbiare||vertuschen|Hanno cercato di insabbiare lo scandalo.
intralciare||behindern|Le auto parcheggiate intralciano il traffico.
lambire||streifen / umspülen|Le onde lambiscono la spiaggia.
lesinare||knausern|Non lesina i complimenti.
lievitare||aufgehen / steigen|I prezzi lievitano.
mitigare||mildern|Il mare mitiga il clima.
osteggiare||bekämpfen / sich widersetzen|Molti osteggiano il progetto.
perorare||verfechten / plädieren|Perora la causa dei più deboli.
propinare||auftischen / verabreichen|Ci propina sempre le stesse scuse.
raffazzonare||zusammenschustern|Ha raffazzonato una relazione.
rimarcare||hervorheben|Vorrei rimarcare questo punto.
scardinare||aus den Angeln heben|La riforma scardina il vecchio sistema.
sciorinare||herunterrasseln|Sciorina dati a memoria.
sgretolare||zerbröckeln|Il muro si sgretola.
sobillare||aufwiegeln|Sobilla i compagni contro il professore.
soppiantare||verdrängen|Lo smartphone ha soppiantato la macchina fotografica.
sottacere||verschweigen|Ha sottaciuto un dettaglio importante.
sovvertire||umstürzen|Vogliono sovvertire l'ordine.
stravolgere||völlig verändern / entstellen|Il film stravolge il romanzo.
surclassare||klar übertreffen|Ha surclassato tutti gli avversari.
ventilare||in Erwägung ziehen / lüften|Si ventila l'ipotesi di elezioni anticipate.
vessare||schikanieren|Il capo vessa i dipendenti.
`,
"C1 – Charakter (Nomen)": `
acrimonia|l'|Verbitterung|Ne parla con acrimonia.
alterigia|l'|Hochmut|Ci tratta con alterigia.
astio|l'|Groll|Prova astio verso il vecchio socio.
bonomia|la|Gutmütigkeit|Ha una bonomia contagiosa.
cupidigia|la|Gier|La cupidigia lo ha rovinato.
dedizione|la|Hingabe|Lavora con grande dedizione.
disinvoltura|la|Ungezwungenheit|Parla in pubblico con disinvoltura.
faciloneria|la|Leichtfertigkeit|Ha affrontato il problema con faciloneria.
fierezza|la|Stolz|Racconta con fierezza le sue origini.
grettezza|la|Engstirnigkeit / Kleinlichkeit|Mi stupisce la sua grettezza.
ignavia|l'|Trägheit / Feigheit|Dante condanna l'ignavia.
indolenza|l'|Trägheit|L'indolenza è il suo difetto.
ingordigia|l'|Gefräßigkeit / Gier|L'ingordigia dei banchieri.
livore|il|Hass / Groll|Parla con livore del suo ex capo.
mansuetudine|la|Sanftmut|Il cane ha una grande mansuetudine.
perspicacia|la|Scharfsinn|Ha risolto il caso con perspicacia.
protervia|la|Dreistigkeit|Risponde con protervia.
riluttanza|la|Widerwille|Ha accettato con riluttanza.
sagacia|la|Klugheit|Ha agito con sagacia.
schiettezza|la|Offenheit|Apprezzo la tua schiettezza.
scaltrezza|la|Gerissenheit|Ha vinto con scaltrezza.
sfrontatezza|la|Unverschämtheit|Che sfrontatezza!
spavalderia|la|Großspurigkeit|La sua spavalderia è irritante.
supponenza|la|Überheblichkeit|Parla con supponenza.
tracotanza|la|Anmaßung|La tracotanza del potere.
veemenza|la|Heftigkeit|Ha protestato con veemenza.
zelo|lo|Eifer|Svolge il suo lavoro con zelo.
ritrosia|la|Zurückhaltung / Scheu|Superata la ritrosia, ha parlato.
sollecitudine|la|Fürsorge / Eile|Grazie per la sollecitudine.
arrendevolezza|l'|Nachgiebigkeit|La sua arrendevolezza è un limite.
`
});
})();

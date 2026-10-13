/* Zusätzliche B1-Vokabeln für italiano.html
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
"B1 – Alltag & Erledigungen": `
impegno|l'|Verpflichtung / Termin|Domani ho molti impegni.
impegnato||beschäftigt|Questa settimana sono molto impegnato.
organizzarsi||sich organisieren|Devo organizzarmi meglio.
programmare||planen|Programmiamo le vacanze in anticipo.
imprevisto|l'|unvorhergesehenes Ereignis|Scusa, ho avuto un imprevisto.
contrattempo|il|Zwischenfall|Un piccolo contrattempo mi ha fatto tardare.
sbrigarsi||sich beeilen|Sbrigati, il treno parte!
sbrigare||erledigen|Devo sbrigare alcune pratiche.
pratica|la|Vorgang / Akte|La pratica è ancora in ufficio.
attesa|l'|Warten / Wartezeit|L'attesa è stata lunga.
rinviare||verschieben|Hanno rinviato la riunione.
annullare||absagen / annullieren|Il volo è stato annullato.
rimborso|il|Rückerstattung|Ho chiesto il rimborso del biglietto.
garanzia|la|Garantie|Il telefono è ancora in garanzia.
reclamo|il|Reklamation|Ho fatto un reclamo al negozio.
guasto||kaputt / defekt|L'ascensore è guasto.
ripararsi||sich schützen / unterstellen|Ci ripariamo dalla pioggia sotto il portico.
bolletta della luce|la|Stromrechnung|La bolletta della luce è arrivata.
utenze|le|Nebenkosten (Strom, Gas, Wasser)|Le utenze non sono incluse nell'affitto.
spese|le|Ausgaben / Kosten|Le spese di casa sono alte.
risparmio|il|Ersparnis|Ho fatto un buon risparmio.
condividere l'appartamento||eine WG haben|Condivido l'appartamento con due studenti.
coinquilino|il|Mitbewohner|Il mio coinquilino cucina benissimo.
vicinato|il|Nachbarschaft|Il vicinato è molto tranquillo.
lamentarsi del rumore||sich über Lärm beschweren|I vicini si lamentano del rumore.
dare una mano||helfen|Mi dai una mano a portare la spesa?
fare a meno di||verzichten auf|Non posso fare a meno del caffè.
fare caso a||achten auf|Non ho fatto caso all'ora.
fare in tempo||es rechtzeitig schaffen|Non faccio in tempo a passare in banca.
metterci||brauchen (Zeit)|Ci metto venti minuti per arrivare.
cavarsela||zurechtkommen|Con l'italiano me la cavo.
arrangiarsi||sich behelfen|Non c'è il cuoco, ci arrangiamo.
abbonarsi||abonnieren|Mi sono abbonato a una rivista.
consegna|la|Lieferung|La consegna è prevista per domani.
ordinare online||online bestellen|Ho ordinato le scarpe online.
pacco in ritardo|il|verspätetes Paket|Il mio pacco è in ritardo.
scadenza della bolletta|la|Zahlungsfrist|La scadenza della bolletta è il 20.
promemoria|il|Erinnerung / Notiz|Mi scrivo un promemoria.
agenda|l'|Terminkalender|Segno tutto in agenda.
routine|la|Routine|La mia routine quotidiana è semplice.
quotidiano||täglich / alltäglich|La vita quotidiana in Italia.
`,
"B1 – Ausbildung & Studium": `
istruzione|l'|Bildung|L'istruzione è un diritto.
formazione|la|Ausbildung / Bildung|Ha una formazione tecnica.
apprendista|l'|Auszubildender|Lavora come apprendista in officina.
tirocinio|il|Praktikum|Faccio un tirocinio in un'azienda.
stage|lo|Praktikum|Durante l'estate ho fatto uno stage.
borsa di studio|la|Stipendium|Ha vinto una borsa di studio.
facoltà|la|Fakultät|Studio alla facoltà di lettere.
corso di laurea|il|Studiengang|Il corso di laurea dura tre anni.
iscrizione|l'|Einschreibung / Anmeldung|L'iscrizione costa cento euro.
tasse universitarie|le|Studiengebühren|Le tasse universitarie sono care.
esame orale|l'|mündliche Prüfung|Domani ho un esame orale.
esame scritto|l'|schriftliche Prüfung|L'esame scritto dura tre ore.
bocciare||durchfallen lassen|Il professore lo ha bocciato.
essere bocciato||sitzen bleiben / durchfallen|È stato bocciato in matematica.
promosso||versetzt / bestanden|Sono stato promosso!
ripassare||wiederholen (Stoff)|Stasera ripasso la lezione.
appunti|gli|Notizen / Mitschrift|Mi presti i tuoi appunti?
prendere appunti||mitschreiben|Prendo appunti durante la lezione.
riassunto|il|Zusammenfassung|Scrivo un riassunto del libro.
tesina|la|Hausarbeit|Devo consegnare la tesina venerdì.
tesi di laurea|la|Abschlussarbeit|Sto scrivendo la tesi di laurea.
relatore|il|Betreuer (Abschlussarbeit)|Il mio relatore è molto disponibile.
docente|il|Dozent / Lehrkraft|Il docente spiega bene.
preside|il|Schulleiter|Il preside ha parlato agli studenti.
scuola media|la|Mittelstufe (Sekundarstufe I)|Mio fratello va alla scuola media.
scuola superiore|la|Oberstufe / weiterführende Schule|Frequento la scuola superiore.
liceo|il|Gymnasium|Frequento il liceo scientifico.
istituto tecnico|l'|Fachoberschule|Studia in un istituto tecnico.
pagella|la|Zeugnis|La pagella è buona quest'anno.
media|la|Durchschnitt|Ho la media dell'otto.
frequentare||besuchen (Schule, Kurs)|Frequento un corso di inglese.
assenza|l'|Abwesenheit / Fehlzeit|Ho troppe assenze.
copiare||abschreiben|Non si copia durante il compito!
imparare a memoria||auswendig lernen|Impariamo la poesia a memoria.
preparazione|la|Vorbereitung|La preparazione all'esame è lunga.
conoscenza|la|Kenntnis / Wissen|Ha una buona conoscenza dell'inglese.
competenza|la|Kompetenz|Le competenze digitali sono importanti.
laurearsi||den Abschluss machen|Mi sono laureato in economia.
diplomarsi||das Abitur / den Abschluss machen|Mi diplomo l'anno prossimo.
corso serale|il|Abendkurs|Frequento un corso serale di italiano.
`,
"B1 – Notfall & Medizin": `
emergenza|l'|Notfall|In caso di emergenza chiamate il 112.
soccorso|il|Hilfe / Rettung|Il soccorso è arrivato subito.
aiuto!||Hilfe!|Aiuto! Qualcuno mi aiuti!
infortunio|l'|Unfall (Verletzung)|Ha avuto un infortunio sul lavoro.
ferito|il|Verletzter|I feriti sono in ospedale.
svenire||ohnmächtig werden|Per il caldo è svenuta.
perdere sangue||bluten|Il ginocchio perde sangue.
bruciatura|la|Verbrennung|Ho una bruciatura sulla mano.
puntura|la|Stich|Una puntura di zanzara.
slogatura|la|Verstauchung|È solo una slogatura.
frattura|la|Bruch (Knochen)|La radiografia mostra una frattura.
ricovero|il|Krankenhausaufenthalt|Il ricovero dura tre giorni.
ricoverare||ins Krankenhaus einweisen|Lo hanno ricoverato d'urgenza.
dimettere||entlassen (Krankenhaus)|Domani lo dimettono.
reparto ospedaliero|il|Krankenhausstation|È nel reparto di cardiologia.
infermeria|l'|Krankenzimmer (Schule)|Il ragazzo è in infermeria.
guardia medica|la|ärztlicher Notdienst|Di notte chiamiamo la guardia medica.
pediatra|il|Kinderarzt|Porto mia figlia dal pediatra.
specialista|lo|Facharzt|Il medico mi manda da uno specialista.
analisi|le|Untersuchung / Laborwerte|Devo fare le analisi del sangue.
risultati|i|Ergebnisse|I risultati sono buoni.
effetto collaterale|l'|Nebenwirkung|Questo farmaco ha effetti collaterali.
dose|la|Dosis|Non superare la dose consigliata.
antibiotico|l'|Antibiotikum|Il medico mi ha dato un antibiotico.
antidolorifico|l'|Schmerzmittel|Prendo un antidolorifico.
disinfettare||desinfizieren|Disinfetta la ferita.
benda|la|Verband / Binde|Metti una benda sulla ferita.
punti|i|Stiche (Naht)|Mi hanno dato tre punti.
convalescenza|la|Genesung|Dopo l'operazione serve la convalescenza.
prognosi|la|Prognose|La prognosi è buona.
cronico||chronisch|Ha una malattia cronica.
contagioso||ansteckend|L'influenza è contagiosa.
contagiare||anstecken|Non voglio contagiare nessuno.
sintomi influenzali|i|Grippesymptome|Ho tutti i sintomi influenzali.
mal di mare|il|Seekrankheit|In barca ho il mal di mare.
intolleranza|l'|Unverträglichkeit|Ho un'intolleranza al lattosio.
assicurazione sanitaria|l'|Krankenversicherung|L'assicurazione sanitaria copre le spese.
pronto intervento|il|Notdienst|Chiama il pronto intervento!
estintore|l'|Feuerlöscher|L'estintore è nel corridoio.
uscita di sicurezza|l'|Notausgang|L'uscita di sicurezza è a destra.
incendio|l'|Brand|I pompieri spengono l'incendio.
`,
"B1 – Medien & Internet": `
rete|la|Netz|Ho trovato l'informazione in rete.
navigare||surfen|Navigo su internet ogni sera.
motore di ricerca|il|Suchmaschine|Cerco con un motore di ricerca.
utente|l'|Nutzer|Gli utenti del sito sono molti.
profilo|il|Profil|Aggiorno il mio profilo.
account|l'|Konto (online)|Ho creato un nuovo account.
accedere||sich anmelden / zugreifen|Non riesco ad accedere al mio account.
registrarsi||sich registrieren|Mi registro sul sito.
privacy|la|Privatsphäre / Datenschutz|Proteggi la tua privacy online.
dati personali|i|persönliche Daten|Non condividere i dati personali.
sicurezza informatica|la|IT-Sicherheit|La sicurezza informatica è importante.
virus|il|Virus|Il computer ha un virus.
truffa|la|Betrug|Attenzione alle truffe online.
messaggio vocale|il|Sprachnachricht|Ti ho mandato un messaggio vocale.
chat|la|Chat|Scriviamo nella chat di classe.
gruppo|il|Gruppe|Ti aggiungo al gruppo.
commentare||kommentieren|Molti hanno commentato la foto.
commento|il|Kommentar|Ho letto i commenti.
mi piace|il|Like|La foto ha cento mi piace.
seguire||folgen|Seguo molti artisti.
follower|il|Follower|Ha migliaia di follower.
notifica|la|Benachrichtigung|Ho ricevuto una notifica.
allegato|l'|Anhang|Trovi il documento in allegato.
inoltrare||weiterleiten|Ti inoltro l'email.
dispositivo|il|Gerät|Spegni tutti i dispositivi.
tablet|il|Tablet|Leggo il giornale sul tablet.
applicazione|l'|Anwendung / App|Ho scaricato un'applicazione nuova.
schermata|la|Bildschirmseite / Screenshot|Fai una schermata del messaggio.
digitare||eintippen|Digita la password.
installare||installieren|Installo il programma.
bloccarsi||abstürzen / hängen|Il computer si è bloccato.
riavviare||neu starten|Riavvia il telefono.
giornale online|il|Online-Zeitung|Leggo un giornale online.
cronaca|la|Lokalnachrichten / Chronik|Ho letto la notizia nella cronaca locale.
prima pagina|la|Titelseite|La notizia è in prima pagina.
giornalismo online|il|Onlinejournalismus|Il giornalismo online è veloce.
notizia falsa|la|Falschmeldung|Questa è una notizia falsa.
fonte|la|Quelle|Controlla sempre la fonte.
attendibile||glaubwürdig / verlässlich|È una fonte attendibile.
abbonamento digitale|l'|Digitalabo|Ho un abbonamento digitale al giornale.
`,
"B1 – Reisen & Erlebnisse": `
esperienza|l'|Erfahrung / Erlebnis|È stata un'esperienza bellissima.
avventura|l'|Abenteuer|Il viaggio è stata una vera avventura.
meta|la|Reiseziel|Qual è la meta delle vacanze?
destinazione|la|Ziel(ort)|Siamo arrivati a destinazione.
itinerario|l'|Reiseroute|Abbiamo preparato l'itinerario.
tappa|la|Etappe|La prima tappa è Firenze.
viaggio organizzato|il|Pauschalreise|Abbiamo fatto un viaggio organizzato.
agenzia di viaggi|l'|Reisebüro|Prenoto all'agenzia di viaggi.
viaggiatore|il|Reisender|È un viaggiatore esperto.
zaino in spalla||als Rucksacktourist|Ho girato l'Europa zaino in spalla.
alloggio|l'|Unterkunft|Cerchiamo un alloggio economico.
affittacamere|l'|Zimmervermietung|Dormiamo in un affittacamere.
agriturismo|l'|Ferienhof|Passiamo una settimana in agriturismo.
località|la|Ort / Ortschaft|Una località di mare.
dintorni|i|Umgebung|Visitiamo i dintorni della città.
scoprire una città||eine Stadt entdecken|Mi piace scoprire una città a piedi.
perdersi in centro||sich in der Altstadt verlaufen|Ci siamo persi in centro.
smarrire||verlieren / verlegen|Ho smarrito il passaporto.
cancellazione|la|Stornierung|La cancellazione è gratuita.
sciopero dei treni|lo|Bahnstreik|C'è lo sciopero dei treni.
cambio|il|Wechselkurs / Umtausch|Il cambio è favorevole.
valuta|la|Währung|Qual è la valuta locale?
assicurazione di viaggio|l'|Reiseversicherung|Hai fatto l'assicurazione di viaggio?
vaccinazione|la|Impfung|Serve una vaccinazione per questo paese?
visto|il|Visum|Per gli Stati Uniti serve il visto?
jet lag|il|Jetlag|Dopo il volo ho il jet lag.
ricordo|il|Erinnerung / Andenken|Ho un bel ricordo di quella vacanza.
ricordarsi di||sich erinnern an|Ti ricordi di quel viaggio?
raccontare un viaggio||von einer Reise erzählen|Ci racconti il tuo viaggio?
emozionante||aufregend / bewegend|È stato un momento emozionante.
indimenticabile||unvergesslich|Una vacanza indimenticabile.
deludente||enttäuschend|L'albergo era deludente.
affascinante||faszinierend|Venezia è affascinante.
caotico||chaotisch|Napoli è caotica ma bella.
pittoresco||malerisch|Un villaggio pittoresco.
abitudini locali|le|örtliche Gepflogenheiten|Rispetto le abitudini locali.
gastronomia|la|Gastronomie|La gastronomia locale è ottima.
piatto tipico|il|typisches Gericht|Assaggia un piatto tipico.
viaggiare da soli||allein reisen|Mi piace viaggiare da soli.
fare l'autostop||trampen|Da giovane facevo l'autostop.
`,
"B1 – Zwischenmenschliches": `
rapporto di amicizia|il|freundschaftliche Beziehung|Abbiamo un bel rapporto di amicizia.
compagnia|la|Gesellschaft / Clique|Esco con la mia compagnia.
legame|il|Bindung|C'è un legame forte tra loro.
sostegno|il|Unterstützung|Grazie per il tuo sostegno.
sostenere qualcuno||jemanden unterstützen|Ti sostengo sempre.
incoraggiare||ermutigen|I genitori mi incoraggiano.
deludere||enttäuschen|Non voglio deluderti.
offendere||beleidigen|Scusa, non volevo offenderti.
offeso||beleidigt|È offeso con me.
perdonare||verzeihen|Ti perdono.
scuse|le|Entschuldigung|Accetto le tue scuse.
tradire||betrügen / verraten|Non tradire la mia fiducia.
fidarsi di||vertrauen|Puoi fidarti di me.
litigio|il|Streit|Abbiamo avuto un litigio.
malinteso|il|Missverständnis|È stato solo un malinteso.
chiarire un malinteso||ein Missverständnis klären|Dobbiamo chiarire il malinteso.
andare d'amore e d'accordo||ein Herz und eine Seele sein|Le sorelle vanno d'amore e d'accordo.
stare simpatico||sympathisch finden|Mi sta simpatico tuo cugino.
stare antipatico||unsympathisch finden|Quel ragazzo mi sta antipatico.
voler bene||lieb haben|Ti voglio bene.
corteggiare||umwerben|La corteggia da mesi.
appuntamento romantico|l'|romantisches Date|Abbiamo un appuntamento romantico.
convivere||zusammenleben|Convivono da due anni.
convivenza|la|Zusammenleben|La convivenza non è sempre facile.
comprensione|la|Verständnis|Grazie per la comprensione.
rispettoso||respektvoll|È un ragazzo rispettoso.
maleducato||unhöflich|Non essere maleducato!
invadente||aufdringlich|La vicina è un po' invadente.
affidabile||zuverlässig|È una persona affidabile.
altruista||selbstlos|Fa volontariato, è molto altruista.
permaloso||empfindlich / leicht beleidigt|Non scherzare con lui, è permaloso.
testardo||stur|Sei proprio testardo!
chiacchierone||geschwätzig|Il mio vicino è un chiacchierone.
riservato||zurückhaltend|È una persona riservata.
spiritoso||witzig|Il tuo amico è molto spiritoso.
complimento|il|Kompliment|Mi ha fatto un complimento.
pettegolezzo|il|Klatsch / Tratsch|Non credere ai pettegolezzi.
solitario||einsam / Einzelgänger|È un tipo solitario.
sentirsi solo||sich einsam fühlen|A volte mi sento solo.
fare amicizia||Freundschaft schließen|In vacanza ho fatto amicizia con due ragazzi.
`,
"B1 – Freizeit & Kultur": `
volontariato|il|Ehrenamt|Faccio volontariato in un canile.
associazione sportiva|l'|Sportverein|Sono iscritto a un'associazione sportiva.
coro|il|Chor|Canto in un coro.
banda|la|Musikkapelle / Band|Suono la tromba nella banda.
strumento|lo|Instrument|Che strumento suoni?
batteria (strumento)|la|Schlagzeug|Mio fratello suona la batteria.
violino|il|Geige|Il violino ha un suono dolce.
tromba|la|Trompete|Suona la tromba da cinque anni.
mostra fotografica|la|Fotoausstellung|C'è una mostra fotografica in città.
galleria d'arte|la|Kunstgalerie|Visitiamo una galleria d'arte.
artigianato|l'|Kunsthandwerk|L'artigianato locale è famoso.
fai da te|il|Heimwerken|Mi piace il fai da te.
giardinaggio|il|Gartenarbeit|Il giardinaggio mi rilassa.
lavoro a maglia|il|Stricken|La nonna fa lavori a maglia.
cucire||nähen|Ho imparato a cucire.
scacchi|gli|Schach|Giochiamo a scacchi?
gioco da tavolo|il|Brettspiel|Stasera facciamo un gioco da tavolo.
carte|le|(Spiel-)Karten|Giochiamo a carte.
collezionare||sammeln|Colleziono francobolli.
collezione|la|Sammlung|Ha una collezione di dischi.
lettura|la|Lesen / Lektüre|La lettura è la mia passione.
giallo|il|Krimi|Leggo un giallo di Camilleri.
fantascienza|la|Science-Fiction|Mi piacciono i film di fantascienza.
commedia romantica|la|Liebeskomödie|Guardiamo una commedia romantica.
film d'animazione|il|Animationsfilm|I bambini amano i film d'animazione.
documentario|il|Dokumentarfilm|Ho visto un documentario sugli oceani.
trilogia|la|Trilogie|Ho letto tutta la trilogia.
capitolo|il|Kapitel|Leggo un capitolo ogni sera.
protagonista|il|Hauptfigur|Il protagonista è un detective.
personaggio|il|Figur / Persönlichkeit|È il mio personaggio preferito.
finale|il|Ende (Film, Buch)|Il finale è a sorpresa.
uscire (un film)||erscheinen (Film)|Il film esce al cinema venerdì.
abbonamento a teatro|l'|Theaterabo|Ho un abbonamento a teatro.
stagione teatrale|la|Theatersaison|La stagione teatrale inizia a ottobre.
prova generale|la|Generalprobe|Domani c'è la prova generale.
esibirsi||auftreten|La band si esibisce in piazza.
dilettante|il|Amateur|È un fotografo dilettante.
appassionato di||begeistert von|Sono appassionato di cinema.
passatempo|il|Zeitvertreib|Il mio passatempo preferito è leggere.
rilassarsi al parco||sich im Park entspannen|La domenica mi rilasso al parco.
`,
"B1 – Geld & Konsum": `
conto corrente|il|Girokonto|Apro un conto corrente.
bonifico|il|Überweisung|Pago con un bonifico.
estratto conto|l'|Kontoauszug|Controllo l'estratto conto.
saldo|il|Kontostand|Il saldo è positivo.
carta prepagata|la|Prepaidkarte|Uso una carta prepagata online.
rata|la|Rate|Pago la macchina a rate.
interesse|l'|Zins / Interesse|La banca paga pochi interessi.
risparmi|i|Ersparnisse|Ho messo da parte dei risparmi.
mettere da parte||zurücklegen|Metto da parte un po' di soldi ogni mese.
fare economia||sparsam sein|Questo mese dobbiamo fare economia.
spreco|lo|Verschwendung|Che spreco di cibo!
sprecare||verschwenden|Non sprecare l'acqua.
consumatore|il|Verbraucher|I consumatori vogliono prezzi bassi.
consumo|il|Verbrauch / Konsum|Il consumo di energia aumenta.
acquisto|l'|Kauf|Un acquisto online.
acquistare||kaufen / erwerben|Ho acquistato un nuovo computer.
rivenditore|il|Händler|Il rivenditore offre uno sconto.
prezzo fisso|il|Festpreis|Il menu ha un prezzo fisso.
trattare sul prezzo||um den Preis handeln|Al mercato si può trattare sul prezzo.
affare|l'|Geschäft / Schnäppchen|Che affare!
fregatura|la|Reinfall / Abzocke|Questo telefono è stata una fregatura.
di seconda mano||gebraucht|Ho comprato una bici di seconda mano.
usato||gebraucht|Un'auto usata.
nuovo di zecca||nagelneu|Il telefono è nuovo di zecca.
pubblicità ingannevole|la|irreführende Werbung|È pubblicità ingannevole.
spesa mensile|la|monatliche Ausgabe|L'affitto è la spesa più grande.
budget familiare|il|Haushaltsbudget|Gestiamo il budget familiare.
mancia al cameriere|la|Trinkgeld für den Kellner|Lasciamo la mancia al cameriere.
caparra|la|Anzahlung / Kaution|Abbiamo lasciato una caparra.
ricevuta fiscale|la|Steuerquittung|Mi dà la ricevuta fiscale?
fattura elettronica|la|elektronische Rechnung|La ditta manda la fattura elettronica.
reddito|il|Einkommen|Il reddito familiare è basso.
benestante||wohlhabend|Viene da una famiglia benestante.
al verde||pleite|A fine mese sono sempre al verde.
costare un occhio della testa||ein Vermögen kosten|Questa borsa costa un occhio della testa.
a buon mercato||preiswert|Al mercato si compra a buon mercato.
pagamento|il|Zahlung|Il pagamento è stato accettato.
pagare a rate||in Raten zahlen|Pago il divano a rate.
contante|il|Bargeld|Accettate solo contante?
commercio equo|il|fairer Handel|Compro prodotti del commercio equo.
`,
"B1 – Nomen des Alltags": `
occasione|l'|Gelegenheit / Anlass|È un'occasione unica.
situazione|la|Situation|La situazione è difficile.
motivo|il|Grund|Per quale motivo?
scopo|lo|Zweck / Ziel|Qual è lo scopo del progetto?
causa|la|Ursache / Grund|La causa del ritardo è il traffico.
effetto|l'|Wirkung|Il farmaco fa effetto.
differenza|la|Unterschied|Qual è la differenza?
somiglianza|la|Ähnlichkeit|C'è una somiglianza tra i due fratelli.
vantaggio|il|Vorteil|Ha molti vantaggi.
svantaggio|lo|Nachteil|L'unico svantaggio è il prezzo.
possibilità|la|Möglichkeit|Non ho la possibilità di venire.
difficoltà|la|Schwierigkeit|Ho avuto qualche difficoltà.
successo|il|Erfolg|Il concerto è stato un successo.
fallimento|il|Misserfolg / Pleite|Il progetto è stato un fallimento.
errore|l'|Fehler|Ho fatto un errore.
sbaglio|lo|Fehler / Versehen|È stato uno sbaglio.
scelta|la|Wahl|È stata una buona scelta.
decisione|la|Entscheidung|Ho preso una decisione.
cambiamento|il|Veränderung|Un grande cambiamento.
sviluppo|lo|Entwicklung|Lo sviluppo della città.
aumento dei prezzi|l'|Preissteigerung|L'aumento dei prezzi preoccupa tutti.
diminuzione|la|Abnahme / Rückgang|Una diminuzione delle vendite.
quantità|la|Menge|Una grande quantità di neve.
mancanza|la|Mangel|La mancanza di tempo.
abitudine quotidiana|l'|tägliche Gewohnheit|Correre è un'abitudine quotidiana.
regola|la|Regel|Rispetta le regole.
esempio|l'|Beispiel|Fammi un esempio.
argomento|l'|Thema / Argument|Cambiamo argomento.
tema di discussione|il|Diskussionsthema|È un tema di discussione importante.
informazione|l'|Information|Mi serve un'informazione.
spiegazione|la|Erklärung|Grazie per la spiegazione.
richiesta|la|Anfrage / Bitte|Ho una richiesta.
permesso di soggiorno|il|Aufenthaltsgenehmigung|Ha rinnovato il permesso di soggiorno.
paragone|il|Vergleich|Non c'è paragone!
ambizione personale|l'|persönlicher Ehrgeiz|Ha una grande ambizione personale.
sogno|il|Traum|Il mio sogno è viaggiare.
desiderio di viaggiare|il|Reiselust|Ho un grande desiderio di viaggiare.
progresso|il|Fortschritt|Faccio progressi in italiano.
sforzo|lo|Anstrengung|Ha fatto uno sforzo enorme.
fatica|la|Mühe / Anstrengung|Che fatica salire le scale!
`,
"B1 – Verben 3": `
accettare un invito||eine Einladung annehmen|Accetto volentieri il tuo invito.
accorgersi di||bemerken|Non mi sono accorto di niente.
affrontare un problema||ein Problem angehen|Dobbiamo affrontare il problema insieme.
aggiungersi||sich anschließen|Posso aggiungermi al gruppo?
arricchire||bereichern|Viaggiare arricchisce.
assumere||einstellen (Personal)|L'azienda assume nuovi operai.
licenziare||entlassen|Lo hanno licenziato.
licenziarsi||kündigen|Mi sono licenziato.
attirare||anziehen / anlocken|La città attira molti turisti.
avvicinarsi||sich nähern|Il treno si avvicina.
allontanarsi||sich entfernen|Non allontanarti troppo!
cogliere||ergreifen / pflücken|Cogli l'occasione!
comportarsi||sich verhalten|Si è comportato male.
concentrarsi||sich konzentrieren|Non riesco a concentrarmi.
dedicarsi||sich widmen|Si dedica alla famiglia.
dimostrare||zeigen / beweisen|Ha dimostrato di essere bravo.
esagerare||übertreiben|Non esagerare!
esprimere un'opinione||eine Meinung äußern|Tutti possono esprimere un'opinione.
fidarsi ciecamente||blind vertrauen|Mi fido ciecamente di lei.
impegnarsi||sich einsetzen / anstrengen|Mi impegno molto a scuola.
informarsi||sich informieren|Mi informo sugli orari.
interessarsi di||sich interessieren für|Mi interesso di politica.
lamentare||beklagen|Lamenta la mancanza di tempo.
meravigliarsi||sich wundern|Mi meraviglio della sua reazione.
occuparsi di||sich kümmern um|Mi occupo dei bambini.
ottenere un risultato||ein Ergebnis erzielen|Abbiamo ottenuto un buon risultato.
partecipare a||teilnehmen an|Partecipo a un concorso.
pentirsi||bereuen|Mi sono pentito di averlo detto.
preoccuparsi per||sich Sorgen machen um|Mi preoccupo per te.
rendersi conto||sich bewusst werden|Mi rendo conto che è tardi.
riconoscere un errore||einen Fehler einsehen|Riconosco il mio errore.
rinunciare a||verzichten auf|Rinuncio al dolce.
risolvere un problema||ein Problem lösen|Abbiamo risolto il problema.
scusarsi||sich entschuldigen|Mi scuso per il ritardo.
sentirsela||sich trauen / Lust haben|Non me la sento di uscire.
sopportare||ertragen|Non sopporto il rumore.
spaventare||erschrecken (jemanden)|Il tuono spaventa il cane.
stupirsi||staunen|Mi stupisco ogni volta.
temere||fürchten|Temo di non farcela.
farcela||es schaffen|Ce l'ho fatta!
`,
"B1 – Adjektive": `
adatto||geeignet|Il film è adatto ai bambini.
attuale||aktuell|È un tema attuale.
complicato||kompliziert|Le istruzioni sono complicate.
semplice||einfach|È una ricetta semplice.
evidente||offensichtlich|L'errore è evidente.
frequente||häufig|È un errore frequente.
raro||selten|È un fiore raro.
generale||allgemein|Una regola generale.
particolare||besonders / speziell|Ha un gusto particolare.
principale||Haupt-|La strada principale.
grave||schwer / ernst|Un incidente grave.
leggero (malattia)||leicht (Krankheit)|Ho un raffreddore leggero.
interessante||interessant|Un libro interessante.
noioso a morte||todlangweilig|La conferenza era noiosa a morte.
efficace||wirksam|Un rimedio efficace.
utile per||nützlich für|Questo corso è utile per il lavoro.
disponibile ad aiutare||hilfsbereit|È sempre disponibile ad aiutare.
responsabile||verantwortlich / verantwortungsvoll|È un ragazzo responsabile.
indipendente||unabhängig|Vuole essere indipendente.
maturo (persona)||reif (Person)|È molto maturo per la sua età.
ingenuo||naiv|Non essere ingenuo!
furbo||schlau / gerissen|La volpe è furba.
goloso||naschhaft|Sono goloso di cioccolato.
sensato||vernünftig|È una decisione sensata.
assurdo||absurd|È una situazione assurda.
incredibile||unglaublich|È una storia incredibile.
ovvio||offensichtlich / selbstverständlich|La risposta è ovvia.
probabile||wahrscheinlich|È probabile che piova.
improbabile||unwahrscheinlich|È improbabile che venga.
certo (aggettivo)||sicher / gewiss|Non sono certo della risposta.
contento di||zufrieden mit|Sono contento del risultato.
soddisfatto||zufrieden|Il cliente è soddisfatto.
insoddisfatto||unzufrieden|Sono insoddisfatto del servizio.
sorprendente||überraschend|Un risultato sorprendente.
preoccupante||besorgniserregend|La situazione è preoccupante.
rilassato||entspannt|In vacanza sono rilassato.
stressato||gestresst|Prima degli esami sono stressato.
esausto||erschöpft|Dopo la gita sono esausto.
puntuale come un orologio||pünktlich wie die Maurer|Il treno era puntuale come un orologio.
straordinario||außergewöhnlich|È stata una serata straordinaria.
`
});
})();

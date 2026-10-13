/* Zusätzliche B2-Vokabeln für italiano.html
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
"B2 – Politik & Staat": `
stato|lo|Staat|Lo stato garantisce i servizi pubblici.
repubblica|la|Republik|L'Italia è una repubblica.
parlamento|il|Parlament|Il parlamento approva la legge.
senato|il|Senat|Il senato si riunisce oggi.
deputato|il|Abgeordneter|Il deputato ha presentato una proposta.
ministro|il|Minister|Il ministro dell'istruzione.
presidente del consiglio|il|Ministerpräsident (Italien)|Il presidente del consiglio parla in TV.
sindaco|il|Bürgermeister|Il sindaco inaugura il nuovo parco.
regione|la|Region|La Toscana è una regione italiana.
provincia|la|Provinz|La provincia di Firenze.
cittadinanza|la|Staatsbürgerschaft|Ha ottenuto la cittadinanza italiana.
elettore|l'|Wähler|Gli elettori vanno alle urne.
votare||wählen / abstimmen|Domenica si vota.
candidato|il|Kandidat|Il candidato presenta il programma.
campagna elettorale|la|Wahlkampf|La campagna elettorale è iniziata.
sondaggio|il|Umfrage|Secondo il sondaggio vince la sinistra.
maggioranza|la|Mehrheit|La maggioranza ha votato sì.
minoranza|la|Minderheit|I diritti delle minoranze.
opposizione|l'|Opposition|L'opposizione critica il governo.
coalizione|la|Koalition|Una coalizione di tre partiti.
referendum|il|Volksabstimmung|Si vota per il referendum.
riforma|la|Reform|Una riforma della scuola.
approvare||verabschieden / billigen|Il governo approva il bilancio.
dibattito|il|Debatte|Un dibattito televisivo.
manifestazione|la|Demonstration|Migliaia di persone alla manifestazione.
protestare||protestieren|Gli studenti protestano.
diritti umani|i|Menschenrechte|Difendiamo i diritti umani.
democrazia|la|Demokratie|La democrazia si basa sul voto.
dittatura|la|Diktatur|Il paese è uscito dalla dittatura.
guerra|la|Krieg|La guerra è finita.
conflitto|il|Konflikt|Un conflitto internazionale.
trattato|il|Vertrag (Staaten)|Hanno firmato un trattato di pace.
Unione Europea|l'|Europäische Union|L'Italia fa parte dell'Unione Europea.
istituzione|l'|Institution|Le istituzioni europee.
pubblica amministrazione|la|öffentliche Verwaltung|Lavora nella pubblica amministrazione.
burocrazia|la|Bürokratie|La burocrazia è lenta.
corruzione|la|Korruption|La lotta alla corruzione.
trasparenza|la|Transparenz|Chiediamo più trasparenza.
cittadino attivo|il|engagierter Bürger|Essere un cittadino attivo è importante.
`,
"B2 – Umwelt & Energie": `
riscaldamento globale|il|Erderwärmung|Il riscaldamento globale è un problema serio.
effetto serra|l'|Treibhauseffekt|I gas causano l'effetto serra.
emissioni|le|Emissionen|Bisogna ridurre le emissioni.
anidride carbonica|l'|Kohlendioxid|Le auto producono anidride carbonica.
combustibili fossili|i|fossile Brennstoffe|Usiamo meno combustibili fossili.
fonti rinnovabili|le|erneuerbare Quellen|Puntiamo sulle fonti rinnovabili.
energia eolica|l'|Windenergie|L'energia eolica cresce.
energia solare|l'|Solarenergie|Il sud ha molta energia solare.
pala eolica|la|Windrad|Sulla collina ci sono pale eoliche.
centrale elettrica|la|Kraftwerk|La centrale elettrica è vecchia.
consumo energetico|il|Energieverbrauch|Riduciamo il consumo energetico.
efficienza|l'|Effizienz|L'efficienza energetica degli edifici.
isolamento termico|l'|Wärmedämmung|L'isolamento termico fa risparmiare.
raccolta differenziata|la|Mülltrennung|In città c'è la raccolta differenziata.
compostaggio|il|Kompostierung|Il compostaggio riduce i rifiuti.
discarica|la|Mülldeponie|La discarica è piena.
smaltimento|lo|Entsorgung|Lo smaltimento dei rifiuti costa.
imballaggio|l'|Verpackung|Troppi imballaggi di plastica.
monouso||Einweg-|Vietati i piatti monouso.
riutilizzabile||wiederverwendbar|Una borsa riutilizzabile.
deforestazione|la|Abholzung|La deforestazione minaccia la foresta.
estinzione|l'|Aussterben|Specie a rischio di estinzione.
specie protetta|la|geschützte Art|Il lupo è una specie protetta.
habitat|l'|Lebensraum|Proteggiamo l'habitat naturale.
inquinamento atmosferico|l'|Luftverschmutzung|L'inquinamento atmosferico nelle città.
smog|lo|Smog|Oggi c'è tanto smog.
polveri sottili|le|Feinstaub|Le polveri sottili sono pericolose.
mobilità sostenibile|la|nachhaltige Mobilität|La città promuove la mobilità sostenibile.
auto elettrica|l'|Elektroauto|Ho comprato un'auto elettrica.
pista ciclabile|la|Radweg|Una nuova pista ciclabile.
impronta ecologica|l'|ökologischer Fußabdruck|Riduciamo la nostra impronta ecologica.
ecosostenibile||umweltverträglich|Un prodotto ecosostenibile.
a chilometro zero||regional|Compro frutta a chilometro zero.
biologico||biologisch / Bio-|Mangio prodotti biologici.
spreco alimentare|lo|Lebensmittelverschwendung|Lo spreco alimentare è enorme.
risorse naturali|le|natürliche Ressourcen|Le risorse naturali sono limitate.
scarsità d'acqua|la|Wasserknappheit|In estate c'è scarsità d'acqua.
ghiacciaio|il|Gletscher|I ghiacciai si sciolgono.
sciogliersi||schmelzen|Il ghiaccio si scioglie.
tutela dell'ambiente|la|Umweltschutz|La tutela dell'ambiente è un dovere.
`,
"B2 – Arbeitswelt": `
mercato del lavoro|il|Arbeitsmarkt|Il mercato del lavoro è cambiato.
posto di lavoro|il|Arbeitsplatz|Ha perso il posto di lavoro.
contratto a tempo determinato|il|befristeter Vertrag|Ho un contratto a tempo determinato.
contratto a tempo indeterminato|il|unbefristeter Vertrag|Finalmente un contratto a tempo indeterminato.
precario||prekär / befristet beschäftigt|Molti giovani sono precari.
lavoro autonomo|il|Selbstständigkeit|Preferisco il lavoro autonomo.
libero professionista|il|Freiberufler|È un libero professionista.
lavoro da remoto|il|Homeoffice / Fernarbeit|Faccio lavoro da remoto due giorni a settimana.
smart working|lo|mobiles Arbeiten|Con lo smart working risparmio tempo.
candidatura|la|Bewerbung|Ho inviato la mia candidatura.
candidarsi||sich bewerben|Mi candido per il posto.
annuncio di lavoro|l'|Stellenanzeige|Ho letto un annuncio di lavoro.
requisito|il|Voraussetzung|Quali sono i requisiti?
esperienza lavorativa|l'|Berufserfahrung|Ha molta esperienza lavorativa.
periodo di prova|il|Probezeit|Il periodo di prova dura tre mesi.
colleghi di lavoro|i|Arbeitskollegen|I colleghi di lavoro sono simpatici.
squadra di lavoro|la|Arbeitsteam|Lavoriamo bene in squadra.
lavoro di squadra|il|Teamarbeit|Il lavoro di squadra è fondamentale.
scadenza di consegna|la|Abgabetermin|La scadenza di consegna è venerdì.
carico di lavoro|il|Arbeitsbelastung|Il carico di lavoro è eccessivo.
straordinari|gli|Überstunden|Questa settimana ho fatto gli straordinari.
stipendio netto|lo|Nettogehalt|Lo stipendio netto è più basso.
stipendio lordo|lo|Bruttogehalt|Lo stipendio lordo comprende le tasse.
tredicesima|la|Weihnachtsgeld|A dicembre arriva la tredicesima.
contributi|i|Sozialabgaben|L'azienda paga i contributi.
aumento di stipendio|l'|Gehaltserhöhung|Ho chiesto un aumento di stipendio.
avanzamento di carriera|l'|beruflicher Aufstieg|Spera in un avanzamento di carriera.
dimettersi||kündigen / zurücktreten|Il direttore si è dimesso.
mobbing|il|Mobbing|È vittima di mobbing.
sicurezza sul lavoro|la|Arbeitssicherheit|Le regole sulla sicurezza sul lavoro.
orario flessibile|l'|Gleitzeit|Abbiamo un orario flessibile.
conciliare lavoro e famiglia||Beruf und Familie vereinbaren|È difficile conciliare lavoro e famiglia.
congedo parentale|il|Elternzeit|È in congedo parentale.
ufficio del personale|l'|Personalabteilung|Parla con l'ufficio del personale.
formazione continua|la|Weiterbildung|L'azienda offre formazione continua.
aggiornamento professionale|l'|berufliche Fortbildung|Faccio un corso di aggiornamento professionale.
produttività|la|Produktivität|La produttività è aumentata.
gestire un progetto||ein Projekt leiten|Gestisco un progetto internazionale.
delegare||delegieren|Un buon capo sa delegare.
negoziare||verhandeln|Negoziamo le condizioni del contratto.
`,
"B2 – Psyche & Wohlbefinden": `
benessere psicologico|il|psychisches Wohlbefinden|Il benessere psicologico è importante.
salute mentale|la|psychische Gesundheit|Parliamo di salute mentale.
autostima|l'|Selbstwertgefühl|Ha poca autostima.
fiducia in se stessi|la|Selbstvertrauen|Lo sport aumenta la fiducia in se stessi.
emotivo||emotional|È una persona molto emotiva.
consapevolezza|la|Bewusstsein / Achtsamkeit|La consapevolezza aiuta a vivere meglio.
equilibrio|l'|Gleichgewicht|Cerco un equilibrio tra lavoro e vita privata.
esaurimento|l'|Erschöpfung / Burnout|Ha avuto un esaurimento nervoso.
burnout|il|Burnout|Il burnout colpisce molti lavoratori.
pressione psicologica|la|psychischer Druck|Sente troppa pressione psicologica.
affrontare lo stress||mit Stress umgehen|Lo yoga aiuta ad affrontare lo stress.
sfogarsi||sich Luft machen|Ho bisogno di sfogarmi con qualcuno.
confidarsi||sich anvertrauen|Mi confido con mia sorella.
reagire||reagieren|Come hai reagito alla notizia?
reazione|la|Reaktion|Una reazione esagerata.
comportamento|il|Verhalten|Il suo comportamento è strano.
carattere forte|il|starker Charakter|Ha un carattere forte.
personalità|la|Persönlichkeit|Ha una personalità forte.
introverso||introvertiert|È un ragazzo introverso.
estroverso||extrovertiert|Mia sorella è molto estroversa.
umore|l'|Stimmung / Laune|Il suo umore cambia spesso.
sbalzo d'umore|lo|Stimmungsschwankung|Ha frequenti sbalzi d'umore.
frustrazione|la|Frustration|Sento una grande frustrazione.
frustrato||frustriert|Sono frustrato dal lavoro.
motivazione|la|Motivation|Mi manca la motivazione.
motivato||motiviert|Sono molto motivato.
sentirsi a proprio agio||sich wohlfühlen|Qui mi sento a mio agio.
a disagio||unwohl / verlegen|Mi sento a disagio tra sconosciuti.
paura di sbagliare|la|Angst, Fehler zu machen|Ho sempre paura di sbagliare.
superare una crisi||eine Krise überwinden|Insieme abbiamo superato la crisi.
psicologo|lo|Psychologe|Ha parlato con uno psicologo.
terapeuta|il|Therapeut|Il terapeuta lo aiuta molto.
dipendenza|la|Abhängigkeit / Sucht|La dipendenza dal telefono.
dipendente da||abhängig von|È dipendente dai videogiochi.
rimedio naturale|il|Hausmittel|Un rimedio naturale contro il mal di testa.
meditazione|la|Meditation|La meditazione mi calma.
rilassamento|il|Entspannung|Esercizi di rilassamento.
alimentazione equilibrata|l'|ausgewogene Ernährung|Segue un'alimentazione equilibrata.
sedentario||bewegungsarm|Uno stile di vita sedentario.
stile di vita|lo|Lebensstil|Uno stile di vita sano.
`,
"B2 – Bildung & Erziehung": `
sistema scolastico|il|Schulsystem|Il sistema scolastico italiano.
scuola dell'obbligo|la|Schulpflicht|La scuola dell'obbligo dura dieci anni.
abbandono scolastico|l'|Schulabbruch|L'abbandono scolastico è un problema.
pari opportunità|le|Chancengleichheit|La scuola deve garantire pari opportunità.
inclusione|l'|Inklusion|L'inclusione degli studenti disabili.
sostegno scolastico|il|Förderunterricht|Ha diritto al sostegno scolastico.
insegnante di sostegno|l'|Förderlehrer|L'insegnante di sostegno lo aiuta.
programma scolastico|il|Lehrplan|Il programma scolastico è pieno.
valutazione|la|Bewertung|La valutazione finale è positiva.
verifica|la|Klassenarbeit / Test|Domani c'è la verifica di storia.
interrogare||abfragen (mündlich)|Oggi il professore interroga.
debito formativo|il|Nachprüfung (Fach)|Ha un debito formativo in latino.
recupero|il|Nachhilfe / Aufholen|Corso di recupero in matematica.
ripetizioni|le|Nachhilfestunden|Prendo ripetizioni di fisica.
gita scolastica|la|Klassenfahrt|La gita scolastica è a Roma.
consiglio di classe|il|Klassenkonferenz|Il consiglio di classe si riunisce.
colloquio con i genitori|il|Elterngespräch|Domani c'è il colloquio con i genitori.
rappresentante di classe|il|Klassensprecher|Sono rappresentante di classe.
educazione civica|l'|Gemeinschaftskunde|Studiamo educazione civica.
disciplina|la|Disziplin / Fach|La disciplina in classe è importante.
comportamento scorretto|il|Fehlverhalten|Una nota per comportamento scorretto.
nota disciplinare|la|Tadel / Eintrag|Ha preso una nota disciplinare.
bullismo|il|Mobbing (Schule)|La scuola combatte il bullismo.
cyberbullismo|il|Cybermobbing|Il cyberbullismo è un reato.
educare al rispetto||zu Respekt erziehen|Bisogna educare al rispetto.
genitore severo|il|strenger Elternteil|Mio padre è un genitore severo.
permissivo||nachgiebig|Sono genitori molto permissivi.
autorità|l'|Autorität|L'autorità dell'insegnante.
limiti|i|Grenzen|I bambini hanno bisogno di limiti.
premiare||belohnen|Premiamo l'impegno.
punire||bestrafen|Non serve punire, serve spiegare.
punizione|la|Strafe|Una punizione giusta.
apprendimento|l'|Lernen|L'apprendimento delle lingue.
metodo di studio|il|Lernmethode|Ognuno ha il suo metodo di studio.
autonomia|l'|Selbstständigkeit|I ragazzi devono sviluppare autonomia.
orientamento|l'|Berufsorientierung|Giornata di orientamento per le superiori.
ateneo|l'|Universität|L'ateneo di Bologna è antichissimo.
ricercatore|il|Forscher|Lavora come ricercatore.
dottorato|il|Promotion|Sta facendo il dottorato.
accesso all'istruzione|l'|Zugang zu Bildung|Tutti devono avere accesso all'istruzione.
`,
"B2 – Justiz & Sicherheit": `
legale||legal|È tutto legale.
illegale||illegal|Scaricare film è illegale.
vietato||verboten|È vietato parcheggiare qui.
reato grave|il|schweres Verbrechen|È un reato grave.
delitto|il|Verbrechen|Un delitto misterioso.
criminalità|la|Kriminalität|La criminalità è diminuita.
furto|il|Diebstahl|Ho denunciato il furto.
ladro|il|Dieb|Il ladro è scappato.
rapina|la|Raub / Überfall|Una rapina in banca.
borseggiatore|il|Taschendieb|Attenzione ai borseggiatori!
truffatore|il|Betrüger|Il truffatore è stato arrestato.
arrestare||verhaften|La polizia ha arrestato due persone.
indagine|l'|Ermittlung|L'indagine continua.
indagare||ermitteln|La polizia indaga sul caso.
testimone|il|Zeuge|Il testimone ha visto tutto.
testimoniare||aussagen|Deve testimoniare in tribunale.
vittima|la|Opfer|La vittima è in ospedale.
colpevole||schuldig|È stato dichiarato colpevole.
innocente||unschuldig|L'uomo è innocente.
processo|il|Prozess|Il processo dura da mesi.
multa salata|la|hohe Strafe|Ha pagato una multa salata.
pena|la|Strafe|Una pena di due anni.
prigione|la|Gefängnis|È finito in prigione.
carabinieri|i|Carabinieri (Militärpolizei)|Chiamiamo i carabinieri.
vigile urbano|il|Stadtpolizist|Il vigile urbano dà una multa.
denunciare||anzeigen|Ho denunciato il furto della bici.
sporgere denuncia||Anzeige erstatten|Vado a sporgere denuncia.
sicurezza pubblica|la|öffentliche Sicherheit|La sicurezza pubblica è garantita.
videosorveglianza|la|Videoüberwachung|La piazza ha la videosorveglianza.
allarme|l'|Alarm(anlage)|È scattato l'allarme.
serratura di sicurezza|la|Sicherheitsschloss|Abbiamo messo una serratura di sicurezza.
diritto d'autore|il|Urheberrecht|Rispetta il diritto d'autore.
privacy dei dati|la|Datenschutz|La legge tutela la privacy dei dati.
rispettare la legge||das Gesetz achten|Tutti devono rispettare la legge.
violare||verletzen / verstoßen|Ha violato le regole.
violenza|la|Gewalt|No alla violenza!
aggressione|l'|Angriff / Überfall|Un'aggressione in strada.
minacciare||bedrohen|Lo hanno minacciato.
proteggere i cittadini||die Bürger schützen|La polizia protegge i cittadini.
avvocato difensore|l'|Verteidiger|L'avvocato difensore parla al giudice.
`,
"B2 – Medien & Gesellschaft": `
opinione pubblica|l'|öffentliche Meinung|L'opinione pubblica è divisa.
mass media|i|Massenmedien|I mass media influenzano le persone.
informazione corretta|l'|korrekte Information|Il diritto a un'informazione corretta.
manipolare||manipulieren|I social possono manipolare le opinioni.
manipolazione|la|Manipulation|La manipolazione delle notizie.
propaganda|la|Propaganda|È solo propaganda.
bufala|la|Falschmeldung / Ente|Questa notizia è una bufala.
verificare le fonti||Quellen überprüfen|Bisogna sempre verificare le fonti.
spirito critico|lo|kritisches Denken|Usa lo spirito critico!
pubblico giovane|il|junges Publikum|Il programma è per un pubblico giovane.
dipendenza dai social|la|Social-Media-Sucht|La dipendenza dai social è diffusa.
tempo davanti allo schermo|il|Bildschirmzeit|Riduciamo il tempo davanti allo schermo.
contenuto|il|Inhalt|Un contenuto interessante.
creatore di contenuti|il|Content Creator|Fa il creatore di contenuti.
virale||viral|Il video è diventato virale.
tendenza attuale|la|aktueller Trend|È una tendenza attuale.
pubblicità mirata|la|zielgerichtete Werbung|Vediamo pubblicità mirata online.
generazione|la|Generation|La nuova generazione è digitale.
divario digitale|il|digitale Kluft|Il divario digitale tra città e campagna.
anziani soli|gli|alleinlebende Senioren|Molti anziani soli usano poco internet.
invecchiamento|l'|Alterung|L'invecchiamento della popolazione.
popolazione|la|Bevölkerung|La popolazione italiana diminuisce.
natalità|la|Geburtenrate|La natalità è molto bassa.
emigrare||auswandern|Molti giovani emigrano all'estero.
fuga dei cervelli|la|Abwanderung von Fachkräften|La fuga dei cervelli preoccupa il paese.
multiculturale||multikulturell|Una società multiculturale.
convivenza civile|la|friedliches Zusammenleben|La convivenza civile è un valore.
tolleranza|la|Toleranz|Più tolleranza e meno odio.
parità di genere|la|Gleichberechtigung|La parità di genere sul lavoro.
diritti delle donne|i|Frauenrechte|Lottiamo per i diritti delle donne.
disabilità|la|Behinderung|Accesso per persone con disabilità.
barriere architettoniche|le|bauliche Barrieren|Eliminiamo le barriere architettoniche.
senzatetto|il|Obdachloser|Il comune aiuta i senzatetto.
emarginazione|l'|Ausgrenzung|Lottiamo contro l'emarginazione.
beneficenza|la|Wohltätigkeit|Una cena di beneficenza.
donare||spenden|Ho donato dei vestiti.
donazione|la|Spende|Una donazione all'ospedale.
impegno sociale|l'|soziales Engagement|Il suo impegno sociale è ammirevole.
cittadinanza attiva|la|bürgerschaftliches Engagement|La scuola promuove la cittadinanza attiva.
qualità della vita|la|Lebensqualität|La qualità della vita in città.
`,
"B2 – Stadt & Wohnen": `
urbanistica|l'|Stadtplanung|L'urbanistica della città è caotica.
centro storico|il|Altstadt|Il centro storico è chiuso al traffico.
zona residenziale|la|Wohngebiet|Abitiamo in una zona residenziale.
zona industriale|la|Industriegebiet|La fabbrica è nella zona industriale.
quartiere popolare|il|Arbeiterviertel|Sono cresciuto in un quartiere popolare.
degrado|il|Verfall|Il degrado delle periferie.
riqualificazione|la|Sanierung (Stadtteil)|Un progetto di riqualificazione urbana.
ristrutturare||renovieren|Ristrutturiamo la cucina.
ristrutturazione|la|Renovierung|La ristrutturazione dura sei mesi.
edilizia|l'|Bauwesen|L'edilizia è in crescita.
mutuo per la casa|il|Hypothek|Abbiamo acceso un mutuo per la casa.
acquistare casa||ein Haus kaufen|È difficile acquistare casa in città.
agenzia immobiliare|l'|Immobilienbüro|Ci rivolgiamo a un'agenzia immobiliare.
proprietà|la|Eigentum|La casa è di sua proprietà.
canone d'affitto|il|Miete (Betrag)|Il canone d'affitto è aumentato.
spese condominiali|le|Hausgeld / Nebenkosten|Le spese condominiali sono alte.
amministratore di condominio|l'|Hausverwalter|Chiama l'amministratore di condominio.
sfratto|lo|Zwangsräumung|Hanno ricevuto lo sfratto.
trasporto pubblico|il|öffentlicher Nahverkehr|Il trasporto pubblico funziona bene.
pendolare|il|Pendler|Sono pendolare, prendo il treno ogni giorno.
ora di punta|l'|Hauptverkehrszeit|All'ora di punta i bus sono pieni.
zona a traffico limitato|la|verkehrsberuhigte Zone|Il centro è zona a traffico limitato.
area verde|l'|Grünfläche|La città ha poche aree verdi.
spazio pubblico|lo|öffentlicher Raum|Rispettiamo lo spazio pubblico.
inquilino moroso|l'|säumiger Mieter|L'inquilino moroso non paga da mesi.
coabitazione|la|Zusammenwohnen|La coabitazione tra studenti.
vivere in campagna||auf dem Land leben|Sogno di vivere in campagna.
spopolamento|lo|Entvölkerung|Lo spopolamento dei piccoli paesi.
borgo abbandonato|il|verlassenes Dorf|Un borgo abbandonato in montagna.
abusivo||illegal (gebaut)|Una costruzione abusiva.
cementificazione|la|Zubetonierung|La cementificazione delle coste.
smart city|la|Smart City|Il progetto di smart city.
illuminazione pubblica|l'|Straßenbeleuchtung|L'illuminazione pubblica è a LED.
rete fognaria|la|Kanalisation|Rinnovano la rete fognaria.
servizi pubblici|i|öffentliche Dienste|I servizi pubblici sono efficienti.
vivibile||lebenswert|È una città molto vivibile.
sovraffollato||überfüllt|Il quartiere è sovraffollato.
inquinamento acustico|l'|Lärmbelastung|L'inquinamento acustico vicino all'aeroporto.
caro affitti|il|hohe Mieten|Gli studenti protestano contro il caro affitti.
sostenibilità urbana|la|städtische Nachhaltigkeit|Un piano per la sostenibilità urbana.
`,
"B2 – Abstrakte Begriffe": `
aspetto positivo|l'|positiver Aspekt|L'aspetto positivo è il prezzo.
punto di vista|il|Standpunkt|Dal mio punto di vista hai torto.
atteggiamento|l'|Haltung / Einstellung|Ha un atteggiamento positivo.
approfondimento|l'|Vertiefung|Un approfondimento sul tema.
condizione|la|Bedingung / Zustand|Le condizioni sono chiare.
circostanza|la|Umstand|Date le circostanze, va bene così.
fenomeno|il|Phänomen|Un fenomeno sociale.
principio|il|Prinzip / Anfang|È una questione di principio.
valore|il|Wert|I valori della famiglia.
obbligo|l'|Pflicht|Non è un obbligo.
responsabilità|la|Verantwortung|Ti prendi la responsabilità?
identità|l'|Identität|L'identità culturale.
appartenenza|l'|Zugehörigkeit|Un senso di appartenenza.
benessere economico|il|Wohlstand|Il benessere economico del paese.
crescita|la|Wachstum|La crescita economica rallenta.
crisi economica|la|Wirtschaftskrise|La crisi economica ha colpito tutti.
concorrenza|la|Konkurrenz / Wettbewerb|La concorrenza è forte.
priorità|la|Priorität|La salute è la priorità.
pregio|il|Vorzug|Il pregio di questo lavoro è la libertà.
difetto|il|Fehler / Mangel|Ognuno ha i suoi difetti.
rischio calcolato|il|kalkuliertes Risiko|È un rischio calcolato.
sfida|la|Herausforderung|È una bella sfida.
ostacolo|l'|Hindernis|Abbiamo superato ogni ostacolo.
tentativo|il|Versuch|Al primo tentativo ce l'ho fatta.
iniziativa|l'|Initiative|Ha preso l'iniziativa.
intenzione|l'|Absicht|Non era mia intenzione.
aspettativa|l'|Erwartung|Le aspettative erano alte.
pregiudizio diffuso|il|verbreitetes Vorurteil|È un pregiudizio diffuso.
luogo comune|il|Klischee|È solo un luogo comune.
contraddizione|la|Widerspruch|C'è una contraddizione nel testo.
equivoco|l'|Missverständnis|C'è stato un equivoco.
dubbio legittimo|il|berechtigter Zweifel|Ho un dubbio legittimo.
certezza|la|Gewissheit|Non abbiamo certezze.
realtà|la|Wirklichkeit|La realtà è diversa.
apparenza|l'|Schein|L'apparenza inganna.
memoria|la|Gedächtnis / Erinnerung|Ho una buona memoria.
immaginazione|l'|Vorstellungskraft|I bambini hanno tanta immaginazione.
creatività artistica|la|künstlerische Kreativität|La creatività artistica va coltivata.
libertà di scelta|la|Wahlfreiheit|Ognuno ha libertà di scelta.
destino|il|Schicksal|È stato il destino.
`,
"B2 – Verben": `
adeguarsi||sich anpassen|Bisogna adeguarsi ai cambiamenti.
ammirare||bewundern|Ammiro il tuo coraggio.
apprezzare||schätzen|Apprezzo molto il tuo aiuto.
attribuire||zuschreiben|Attribuisce la colpa agli altri.
avvertire||warnen / spüren|Ti avverto: è pericoloso.
coinvolgere i cittadini||die Bürger einbeziehen|Il comune vuole coinvolgere i cittadini.
compiere||vollbringen / vollenden|Ha compiuto diciotto anni.
comprovare||belegen|Documenti che comprovano l'identità.
condizionare||beeinflussen|La pubblicità condiziona le scelte.
consentire||ermöglichen / erlauben|Il biglietto consente l'ingresso.
convincersi||sich überzeugen|Alla fine si è convinto.
dedurre||schließen / ableiten|Ne deduco che hai ragione.
denunciare un problema||ein Problem anprangern|Il giornale denuncia il problema.
diffidare||misstrauen|Diffida degli sconosciuti.
dubitare||zweifeln|Dubito che arrivi in tempo.
elaborare un piano||einen Plan ausarbeiten|Elaboriamo un piano insieme.
favorire||fördern / begünstigen|Il clima favorisce il turismo.
giustificare||rechtfertigen|Non puoi giustificare tutto.
ignorare||ignorieren / nicht wissen|Ignoro il motivo.
impedire l'accesso||den Zugang verhindern|Il cancello impedisce l'accesso.
incidere||sich auswirken|Il prezzo incide sulla scelta.
ipotizzare||vermuten|Possiamo ipotizzare diverse cause.
lottare||kämpfen|Lottiamo per i nostri diritti.
mettere in discussione||infrage stellen|Mette in discussione ogni regola.
migliorarsi||sich verbessern|Cerco sempre di migliorarmi.
nuocere||schaden|Il fumo nuoce alla salute.
opporsi||sich widersetzen|Mi oppongo a questa decisione.
prevenire||vorbeugen|Prevenire è meglio che curare.
pretendere troppo||zu viel verlangen|Non puoi pretendere troppo.
provocare||verursachen / provozieren|La pioggia ha provocato danni.
rendere||machen (zu) / zurückgeben|La musica mi rende felice.
rimediare||wiedergutmachen|Come posso rimediare?
riflettere||nachdenken|Rifletti prima di parlare.
rischiare||riskieren|Non voglio rischiare.
risparmiarsi||sich schonen|Non si risparmia mai.
sottovalutare||unterschätzen|Non sottovalutare il problema.
sopravvalutare||überschätzen|Lo hanno sopravvalutato.
tenere conto di||berücksichtigen|Bisogna tenere conto dei costi.
trarre vantaggio||Nutzen ziehen|Trae vantaggio dalla situazione.
volgere al termine||zu Ende gehen|L'estate volge al termine.
`,
"B2 – Adjektive & Adverbien": `
accessibile||zugänglich / erschwinglich|Un prezzo accessibile.
adeguato||angemessen|Una risposta adeguata.
ambiguo||zweideutig|Una frase ambigua.
approfondito||gründlich|Uno studio approfondito.
compatibile||vereinbar|Non è compatibile con il mio computer.
considerevole||beträchtlich|Una somma considerevole.
controverso||umstritten|Un tema controverso.
convincente||überzeugend|Un argomento convincente.
coerente||konsequent / schlüssig|Sii coerente con le tue idee.
decisivo||entscheidend|Un momento decisivo.
diffuso||verbreitet|Un'opinione molto diffusa.
efficiente||effizient|Un sistema efficiente.
eccessivo||übermäßig|Un prezzo eccessivo.
essenziale||wesentlich|È essenziale arrivare in orario.
fondamentale||grundlegend|Un diritto fondamentale.
imprevedibile||unvorhersehbar|Il tempo è imprevedibile.
inevitabile||unvermeidlich|Un cambiamento inevitabile.
inaccettabile||inakzeptabel|È un comportamento inaccettabile.
notevole||bemerkenswert|Un miglioramento notevole.
obiettivo||objektiv|Cerca di essere obiettivo.
soggettivo||subjektiv|È un giudizio soggettivo.
precedentemente||vorher|Come detto precedentemente.
progressivamente||allmählich|La situazione migliora progressivamente.
radicale||radikal|Un cambiamento radicale.
sostanziale||wesentlich|Una differenza sostanziale.
superficiale||oberflächlich|Un'analisi superficiale.
temporaneo||vorübergehend|Un lavoro temporaneo.
definitivo||endgültig|La decisione è definitiva.
valido||gültig / gut|Il biglietto non è più valido.
vasto||weit / umfangreich|Una vasta scelta di prodotti.
esattamente||genau|È esattamente quello che volevo.
gradualmente||schrittweise|Gradualmente si abitua.
inoltre||außerdem|Inoltre, il prezzo è basso.
rispettivamente||beziehungsweise|Hanno dieci e dodici anni rispettivamente.
tutt'al più||höchstens|Costerà tutt'al più venti euro.
volutamente||absichtlich|L'ha fatto volutamente.
`
});
})();

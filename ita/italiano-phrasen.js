/* Zusätzliche Phrasen für italiano.html
   Format pro Zeile: italienisch | (leer) | deutsch | Beispiel / Situation
   Eigene Formulierungen, keine Übernahme aus Lehrwerken. */
(function(){
function add(L){
  var out = window.IT_EXTRA = window.IT_EXTRA || {};
  Object.keys(L).forEach(function(name){
    out[name] = L[name].trim().split("\n").map(function(line){
      var p = line.split("|");
      return {it:p[0].trim(), de:p[2].trim(), ex:p[3].trim(), phrase:true};
    });
  });
}
add({
"Phrasen – Kennenlernen & Smalltalk": `
Come ti chiami?||Wie heißt du?|— Come ti chiami? — Mi chiamo Sara.
Di dove sei?||Woher kommst du?|— Di dove sei? — Sono di Dortmund.
Quanti anni hai?||Wie alt bist du?|— Quanti anni hai? — Ho trentadue anni.
Che lavoro fai?||Was machst du beruflich?|— Che lavoro fai? — Faccio l'insegnante.
Dove abiti?||Wo wohnst du?|— Dove abiti? — Abito in centro.
Parli italiano?||Sprichst du Italienisch?|— Parli italiano? — Sì, un po'.
Lo sto imparando.||Ich lerne es gerade.|Parlo poco italiano, lo sto imparando.
Da quanto tempo sei qui?||Seit wann bist du hier?|— Da quanto tempo sei qui? — Da una settimana.
Sei qui in vacanza?||Bist du hier im Urlaub?|— Sei qui in vacanza? — No, per lavoro.
Che bella sorpresa!||Was für eine schöne Überraschung!|Che bella sorpresa vederti qui!
Quanto tempo!||Lange nicht gesehen!|Ciao Luca, quanto tempo!
Come va?||Wie geht's?|— Ciao, come va? — Tutto bene, e tu?
Tutto bene, grazie.||Alles gut, danke.|— Come stai? — Tutto bene, grazie.
E tu?||Und du?|Sto bene, e tu?
Anche a te!||Dir auch!|— Buona giornata! — Anche a te!
Cosa fai di bello?||Was machst du so Schönes?|Ciao! Cosa fai di bello oggi?
Hai programmi per il weekend?||Hast du Pläne fürs Wochenende?|Hai programmi per il weekend?
Che tempo fa da te?||Wie ist das Wetter bei dir?|Qui piove. Che tempo fa da te?
Ti va di prendere un caffè?||Hast du Lust auf einen Kaffee?|Ti va di prendere un caffè dopo la lezione?
Ci diamo del tu?||Wollen wir uns duzen?|Siamo colleghi, ci diamo del tu?
Ti presento mio marito.||Ich stelle dir meinen Mann vor.|Ti presento mio marito, Paolo.
È stato un piacere.||Es war mir ein Vergnügen.|È stato un piacere conoscerti.
Ci teniamo in contatto.||Wir bleiben in Kontakt.|Ci teniamo in contatto, va bene?
Mi lasci il tuo numero?||Gibst du mir deine Nummer?|Mi lasci il tuo numero di telefono?
Salutami tua sorella!||Grüß deine Schwester von mir!|Ciao, salutami tua sorella!
Alla prossima!||Bis zum nächsten Mal!|Grazie di tutto, alla prossima!
Buon fine settimana!||Schönes Wochenende!|Buon fine settimana a tutti!
Buon proseguimento!||Weiterhin viel Spaß / schönen Tag noch!|Buon proseguimento di serata!
Fai buon viaggio!||Gute Reise!|Fai buon viaggio e scrivimi!
Benvenuti!||Herzlich willkommen!|Benvenuti nella nostra scuola!
`,
"Phrasen – Restaurant & Bar": `
Avete un tavolo libero?||Haben Sie einen Tisch frei?|Buonasera, avete un tavolo libero per tre?
Ho prenotato a nome Rossi.||Ich habe auf den Namen Rossi reserviert.|Buonasera, ho prenotato a nome Rossi.
Possiamo sederci fuori?||Können wir draußen sitzen?|Che bel tempo! Possiamo sederci fuori?
Cosa ci consiglia?||Was empfehlen Sie uns?|È la prima volta qui, cosa ci consiglia?
Per me una pizza margherita.||Für mich eine Pizza Margherita.|Per me una pizza margherita, per favore.
Vorrei ordinare.||Ich würde gern bestellen.|Scusi, vorrei ordinare.
Siamo pronti per ordinare.||Wir sind bereit zu bestellen.|Siamo pronti per ordinare.
Senza glutine, per favore.||Glutenfrei, bitte.|Avete la pasta senza glutine?
Che cosa c'è di dolce?||Was gibt es als Nachtisch?|Che cosa c'è di dolce oggi?
Un caffè e il conto, per favore.||Einen Espresso und die Rechnung, bitte.|Grazie, era tutto buonissimo. Un caffè e il conto, per favore.
Possiamo pagare separatamente?||Können wir getrennt zahlen?|Scusi, possiamo pagare separatamente?
Offro io.||Ich lade ein.|No, no, stasera offro io!
Tocca a me.||Ich bin dran.|L'altra volta hai pagato tu, oggi tocca a me.
Tenga il resto.||Behalten Sie den Rest.|Ecco cinquanta euro, tenga il resto.
È tutto ok?||Ist alles in Ordnung?|— È tutto ok? — Sì, perfetto, grazie.
Era buonissimo!||Es war sehr lecker!|Complimenti al cuoco, era buonissimo!
Posso avere un altro bicchiere?||Kann ich noch ein Glas haben?|Scusi, posso avere un altro bicchiere?
Manca una forchetta.||Es fehlt eine Gabel.|Scusi, qui manca una forchetta.
Non ho ordinato questo.||Das habe ich nicht bestellt.|Mi scusi, non ho ordinato questo.
Al banco o al tavolo?||An der Theke oder am Tisch?|Il caffè lo prendiamo al banco o al tavolo?
Un caffè al volo.||Schnell einen Kaffee.|Ho cinque minuti, prendo un caffè al volo.
Cosa prendi?||Was nimmst du?|Io prendo uno spritz. Tu cosa prendi?
Facciamo un brindisi!||Lass uns anstoßen!|Facciamo un brindisi alla nostra amicizia!
Salute!||Prost! / Gesundheit!|Salute a tutti!
Sono vegetariano/a.||Ich bin Vegetarier/in.|Sono vegetariana, avete piatti senza carne?
È piccante?||Ist das scharf?|Questo sugo è piccante?
Ne vorrei ancora un po'.||Ich hätte gern noch etwas davon.|Che buono, ne vorrei ancora un po'.
Si mangia bene qui.||Hier isst man gut.|Torniamo qui, si mangia bene.
È da asporto?||Ist das zum Mitnehmen?|Posso avere la pizza da asporto?
Il servizio è incluso?||Ist das Trinkgeld/die Bedienung inbegriffen?|Scusi, il servizio è incluso nel conto?
`,
"Phrasen – Einkaufen": `
Sto solo guardando.||Ich schaue nur.|Grazie, sto solo guardando.
Posso provarlo?||Kann ich es anprobieren?|Che bella giacca! Posso provarla?
Dove sono i camerini?||Wo sind die Umkleiden?|Scusi, dove sono i camerini?
Avete una taglia più grande?||Haben Sie eine Nummer größer?|È stretta, avete una taglia più grande?
Ce l'avete in un altro colore?||Haben Sie das in einer anderen Farbe?|Ce l'avete in blu?
Quanto viene in tutto?||Was macht das zusammen?|Prendo questi due. Quanto viene in tutto?
È in saldo?||Ist das reduziert?|Questa borsa è in saldo?
Mi fa uno sconto?||Geben Sie mir einen Rabatt?|Ne prendo tre, mi fa uno sconto?
Lo prendo.||Ich nehme es.|Mi piace molto, lo prendo.
Ci devo pensare.||Ich muss darüber nachdenken.|Grazie, ci devo pensare.
È troppo caro per me.||Das ist mir zu teuer.|È bello, ma è troppo caro per me.
Posso pagare in contanti?||Kann ich bar zahlen?|Posso pagare in contanti o solo con la carta?
Mi serve un sacchetto.||Ich brauche eine Tüte.|Scusi, mi serve un sacchetto.
Posso cambiarlo?||Kann ich es umtauschen?|Se non va bene, posso cambiarlo?
Vorrei restituirlo.||Ich möchte es zurückgeben.|È difettoso, vorrei restituirlo.
Mi può fare un pacchetto regalo?||Können Sie es als Geschenk einpacken?|È per mia madre, mi può fare un pacchetto regalo?
Mezzo chilo di pomodori, per favore.||Ein halbes Kilo Tomaten, bitte.|Buongiorno, mezzo chilo di pomodori, per favore.
Un etto di prosciutto.||Hundert Gramm Schinken.|Mi dà un etto di prosciutto crudo?
Altro?||Sonst noch etwas?|— Altro? — No, basta così, grazie.
Basta così, grazie.||Das ist alles, danke.|— Altro? — Basta così, grazie.
Me ne dia due.||Geben Sie mir zwei davon.|Sono belle queste pesche, me ne dia due.
Fino a che ora siete aperti?||Bis wann haben Sie geöffnet?|Scusi, fino a che ora siete aperti?
È fresco?||Ist das frisch?|Il pesce è fresco di oggi?
Si può assaggiare?||Darf man probieren?|Questo formaggio si può assaggiare?
Non ho spiccioli.||Ich habe kein Kleingeld.|Mi dispiace, non ho spiccioli.
Ha da cambiare?||Können Sie wechseln?|Ho solo cinquanta euro, ha da cambiare?
Lo scontrino, per favore.||Den Kassenzettel, bitte.|Mi dà lo scontrino, per favore?
Che affare!||Was für ein Schnäppchen!|Solo dieci euro? Che affare!
Mi sta bene?||Steht mir das?|Questo colore mi sta bene?
È esaurito.||Das ist ausverkauft.|Mi dispiace, quel modello è esaurito.
`,
"Phrasen – Telefon & Termine": `
Pronto?||Hallo? (am Telefon)|Pronto? Chi parla?
Chi parla?||Wer ist am Apparat?|Pronto, chi parla?
Sono Paolo.||Hier ist Paolo.|Ciao, sono Paolo, ti disturbo?
Ti disturbo?||Störe ich?|Ciao, ti disturbo? Hai un minuto?
Posso parlare con il signor Bianchi?||Kann ich mit Herrn Bianchi sprechen?|Buongiorno, posso parlare con il signor Bianchi?
Un attimo, glielo passo.||Einen Moment, ich verbinde.|Un attimo, glielo passo subito.
Vuole lasciare un messaggio?||Möchten Sie eine Nachricht hinterlassen?|Non c'è, vuole lasciare un messaggio?
La richiamo più tardi.||Ich rufe Sie später zurück.|Ora sono occupato, la richiamo più tardi.
Mi può richiamare?||Können Sie mich zurückrufen?|Mi può richiamare dopo le tre?
Non ti sento bene.||Ich höre dich schlecht.|Non ti sento bene, c'è poco campo.
È caduta la linea.||Die Verbindung ist abgebrochen.|Scusa, è caduta la linea.
Ho sbagliato numero.||Ich habe mich verwählt.|Mi scusi, ho sbagliato numero.
Vorrei fissare un appuntamento.||Ich möchte einen Termin vereinbaren.|Buongiorno, vorrei fissare un appuntamento.
Quando le va bene?||Wann passt es Ihnen?|Possiamo vederci la prossima settimana. Quando le va bene?
Le va bene giovedì?||Passt Ihnen Donnerstag?|Le va bene giovedì alle dieci?
Per me va bene.||Für mich passt das.|Giovedì alle dieci? Per me va bene.
Devo spostare l'appuntamento.||Ich muss den Termin verschieben.|Mi dispiace, devo spostare l'appuntamento.
Devo disdire.||Ich muss absagen.|Purtroppo sono malato, devo disdire.
Arrivo con qualche minuto di ritardo.||Ich komme ein paar Minuten zu spät.|Scusa, arrivo con qualche minuto di ritardo.
Ci vediamo alle otto davanti al cinema.||Wir treffen uns um acht vor dem Kino.|Allora ci vediamo alle otto davanti al cinema.
Ti scrivo un messaggio.||Ich schreibe dir eine Nachricht.|Non posso parlare, ti scrivo un messaggio.
Mandami la posizione.||Schick mir den Standort.|Non trovo la casa, mandami la posizione.
Ho il telefono scarico.||Mein Akku ist leer.|Scusa, ho il telefono scarico.
Ti chiamo appena arrivo.||Ich rufe dich an, sobald ich ankomme.|Parto adesso, ti chiamo appena arrivo.
Mi senti?||Hörst du mich?|Pronto? Mi senti?
Parla più forte, per favore.||Sprich bitte lauter.|C'è rumore, parla più forte, per favore.
Rimaniamo d'accordo così.||Dann machen wir es so.|Alle sei in piazza. Rimaniamo d'accordo così.
Ti faccio sapere.||Ich sage dir Bescheid.|Non so ancora, ti faccio sapere domani.
Fammi sapere!||Sag mir Bescheid!|Se vieni, fammi sapere!
A dopo!||Bis später!|Ciao, a dopo!
`,
"Phrasen – Arzt & Apotheke": `
Non mi sento bene.||Mir geht es nicht gut.|Dottore, non mi sento bene da ieri.
Mi fa male qui.||Es tut mir hier weh.|Mi fa male qui, sotto le costole.
Ho la febbre alta.||Ich habe hohes Fieber.|Ho la febbre alta da due giorni.
Ho mal di gola.||Ich habe Halsschmerzen.|Ho mal di gola e non riesco a parlare.
Mi gira la testa.||Mir ist schwindelig.|Mi gira la testa quando mi alzo.
Ho la nausea.||Mir ist übel.|Ho la nausea dopo aver mangiato.
Sono allergico alla penicillina.||Ich bin allergisch gegen Penicillin.|Attenzione, sono allergico alla penicillina.
Da quanto tempo ha questi sintomi?||Seit wann haben Sie diese Symptome?|— Da quanto tempo ha questi sintomi? — Da una settimana.
Prendo già dei farmaci.||Ich nehme bereits Medikamente.|Prendo già dei farmaci per la pressione.
Ho bisogno di un medico.||Ich brauche einen Arzt.|Mi aiuti, ho bisogno di un medico.
Chiamate un'ambulanza!||Rufen Sie einen Krankenwagen!|C'è un ferito, chiamate un'ambulanza!
Dov'è il pronto soccorso?||Wo ist die Notaufnahme?|Scusi, dov'è il pronto soccorso?
Avete qualcosa per il mal di testa?||Haben Sie etwas gegen Kopfschmerzen?|Buongiorno, avete qualcosa per il mal di testa?
Serve la ricetta?||Braucht man ein Rezept?|Questo farmaco serve la ricetta?
Quante volte al giorno?||Wie oft am Tag?|Queste compresse, quante volte al giorno?
Prima o dopo i pasti?||Vor oder nach dem Essen?|Le prendo prima o dopo i pasti?
Mi sono fatto male alla caviglia.||Ich habe mir den Knöchel verletzt.|Sono caduto e mi sono fatto male alla caviglia.
Mi sono tagliato.||Ich habe mich geschnitten.|Mi sono tagliato con il coltello.
Ho preso un raffreddore.||Ich habe mich erkältet.|Ho preso un raffreddore con questo freddo.
Non riesco a dormire.||Ich kann nicht schlafen.|Da giorni non riesco a dormire.
Devo stare a riposo?||Muss ich mich schonen?|Dottore, devo stare a riposo?
Mi può fare un certificato?||Können Sie mir ein Attest ausstellen?|Mi può fare un certificato per il lavoro?
Guarisci presto!||Gute Besserung!|Mi dispiace che stai male, guarisci presto!
Auguri di pronta guarigione!||Baldige Genesung!|Tanti auguri di pronta guarigione!
Respiri profondamente.||Atmen Sie tief ein.|Respiri profondamente e tossisca.
Si sdrai qui.||Legen Sie sich hier hin.|Si sdrai qui, per favore.
È grave?||Ist es schlimm?|Dottore, è grave?
Niente di grave.||Nichts Schlimmes.|Stia tranquillo, niente di grave.
Ha l'assicurazione?||Sind Sie versichert?|Ha l'assicurazione sanitaria europea?
Mi serve qualcosa per la tosse.||Ich brauche etwas gegen Husten.|Mi serve qualcosa per la tosse secca.
`,
"Phrasen – Schule & Unterricht": `
Posso andare in bagno?||Darf ich auf die Toilette gehen?|Professore, posso andare in bagno?
Posso fare una domanda?||Darf ich eine Frage stellen?|Scusi, posso fare una domanda?
Non ho capito l'esercizio.||Ich habe die Aufgabe nicht verstanden.|Professoressa, non ho capito l'esercizio.
Può ripetere, per favore?||Können Sie das bitte wiederholen?|Può ripetere l'ultima frase, per favore?
Come si scrive?||Wie schreibt man das?|"Grazie", come si scrive?
Come si pronuncia?||Wie spricht man das aus?|Questa parola, come si pronuncia?
Cosa vuol dire...?||Was bedeutet ...?|Cosa vuol dire "allegro"?
A che pagina siamo?||Auf welcher Seite sind wir?|Scusi, a che pagina siamo?
Ho dimenticato il quaderno.||Ich habe mein Heft vergessen.|Mi dispiace, ho dimenticato il quaderno.
Ho finito!||Ich bin fertig!|Professore, ho finito l'esercizio!
Mi presti una penna?||Leihst du mir einen Stift?|Ho perso la mia, mi presti una penna?
Possiamo lavorare in coppia?||Dürfen wir zu zweit arbeiten?|Possiamo lavorare in coppia?
Tocca a te.||Du bist dran.|Ora tocca a te leggere.
Aprite il libro.||Öffnet das Buch.|Ragazzi, aprite il libro.
Chiudete i quaderni.||Schließt die Hefte.|Chiudete i quaderni, facciamo un gioco.
Ascoltate bene.||Hört gut zu.|Ascoltate bene il dialogo.
Lavorate in gruppo.||Arbeitet in Gruppen.|Ora lavorate in gruppo di quattro.
Avete capito?||Habt ihr verstanden?|Avete capito tutto?
Per domani studiate questo.||Für morgen lernt ihr das hier.|Per domani studiate questo vocabolario.
Fate silenzio, per favore.||Seid bitte leise.|Fate silenzio, per favore, la lezione comincia.
Alza la mano.||Heb die Hand.|Se sai la risposta, alza la mano.
Bravissimo!||Sehr gut!|Bravissimo, risposta giusta!
Quasi giusto.||Fast richtig.|Quasi giusto, prova ancora.
Prova ancora.||Versuch es noch einmal.|Non è giusto, prova ancora.
Scusi il ritardo.||Entschuldigen Sie die Verspätung.|Scusi il ritardo, ho perso l'autobus.
Quando è la verifica?||Wann ist die Klassenarbeit?|Professore, quando è la verifica?
Che voto ho preso?||Welche Note habe ich bekommen?|Che voto ho preso nel compito?
Non ho fatto i compiti.||Ich habe die Hausaufgaben nicht gemacht.|Mi dispiace, non ho fatto i compiti.
Buone vacanze!||Schöne Ferien!|Ragazzi, buone vacanze!
Ci vediamo lunedì.||Wir sehen uns am Montag.|Buon weekend, ci vediamo lunedì.
`,
"Phrasen – Arbeit & Büro": `
Piacere, sono la nuova collega.||Hallo, ich bin die neue Kollegin.|Buongiorno, piacere, sono la nuova collega.
Di cosa ti occupi?||Womit beschäftigst du dich (beruflich)?|Di cosa ti occupi in azienda?
Sono in riunione.||Ich bin in einer Besprechung.|Non posso rispondere, sono in riunione.
Ho una scadenza.||Ich habe eine Deadline.|Oggi non posso, ho una scadenza.
Possiamo rimandare a domani?||Können wir das auf morgen verschieben?|Sono stanco, possiamo rimandare a domani?
Ti mando una mail.||Ich schicke dir eine Mail.|Ti mando una mail con i dettagli.
Ti tengo aggiornato.||Ich halte dich auf dem Laufenden.|Ci sono novità, ti tengo aggiornato.
Ci sentiamo dopo la pausa.||Wir sprechen uns nach der Pause.|Ci sentiamo dopo la pausa pranzo.
Facciamo il punto della situazione.||Lass uns eine Zwischenbilanz ziehen.|Prima di continuare, facciamo il punto della situazione.
Me ne occupo io.||Ich kümmere mich darum.|Non preoccuparti, me ne occupo io.
Chi se ne occupa?||Wer kümmert sich darum?|Il progetto è urgente. Chi se ne occupa?
Ho bisogno di una mano.||Ich brauche Hilfe.|Ho bisogno di una mano con questo file.
Sono sommerso di lavoro.||Ich ersticke in Arbeit.|Scusa, sono sommerso di lavoro.
Oggi lavoro da casa.||Heute arbeite ich von zu Hause.|Oggi lavoro da casa, chiamami sul cellulare.
Sono in ferie fino a lunedì.||Ich bin bis Montag im Urlaub.|Sono in ferie fino a lunedì, rispondo al rientro.
Rispondo appena posso.||Ich antworte, sobald ich kann.|Sono fuori ufficio, rispondo appena posso.
In allegato trova il documento.||Im Anhang finden Sie das Dokument.|Gentile dottore, in allegato trova il documento.
Resto a disposizione.||Ich stehe zur Verfügung.|Per qualsiasi domanda resto a disposizione.
Cordiali saluti||Mit freundlichen Grüßen|Cordiali saluti, Paolo Bianchi
Gentile signora Rossi,||Sehr geehrte Frau Rossi,|Gentile signora Rossi, le scrivo per...
In attesa di una sua risposta||In Erwartung Ihrer Antwort|In attesa di una sua risposta, porgo cordiali saluti.
La ringrazio per la sua disponibilità.||Danke für Ihre Hilfsbereitschaft.|La ringrazio per la sua disponibilità.
Non ho ancora ricevuto risposta.||Ich habe noch keine Antwort bekommen.|Le scrivo perché non ho ancora ricevuto risposta.
Mi scusi per il disagio.||Entschuldigen Sie die Unannehmlichkeiten.|Mi scusi per il disagio causato.
È urgente.||Es ist dringend.|Mi chiami subito, è urgente.
Buon lavoro!||Frohes Schaffen!|Ciao a tutti e buon lavoro!
Che ne dite di...?||Was haltet ihr von ...?|Che ne dite di fare una pausa?
Sono d'accordo con te.||Ich stimme dir zu.|Sono d'accordo con te, è la soluzione migliore.
Vediamo come va.||Mal sehen, wie es läuft.|Proviamo il nuovo sistema e vediamo come va.
Ottimo lavoro!||Sehr gute Arbeit!|Ottimo lavoro, ragazzi!
`,
"Phrasen – Unterwegs & Orientierung": `
Mi scusi, sa dov'è...?||Entschuldigung, wissen Sie, wo ... ist?|Mi scusi, sa dov'è la stazione?
È lontano da qui?||Ist es weit von hier?|Il museo è lontano da qui?
Ci si arriva a piedi?||Kann man zu Fuß hingehen?|Ci si arriva a piedi o devo prendere il bus?
Vada sempre dritto.||Gehen Sie immer geradeaus.|Vada sempre dritto fino alla piazza.
Giri a destra al semaforo.||Biegen Sie an der Ampel rechts ab.|Poi giri a destra al semaforo.
È la seconda a sinistra.||Es ist die zweite links.|La via che cerca è la seconda a sinistra.
Non può sbagliare.||Sie können es nicht verfehlen.|È proprio di fronte alla chiesa, non può sbagliare.
Quale autobus va in centro?||Welcher Bus fährt ins Zentrum?|Scusi, quale autobus va in centro?
Dove si comprano i biglietti?||Wo kauft man die Fahrkarten?|Dove si comprano i biglietti dell'autobus?
Un biglietto per Firenze, per favore.||Eine Fahrkarte nach Florenz, bitte.|Un biglietto di sola andata per Firenze, per favore.
Da che binario parte?||Von welchem Gleis fährt er ab?|Il treno per Roma, da che binario parte?
È questo il treno per Napoli?||Ist das der Zug nach Neapel?|Scusi, è questo il treno per Napoli?
Questo posto è libero?||Ist dieser Platz frei?|Scusi, questo posto è libero?
A che fermata devo scendere?||An welcher Haltestelle muss ich aussteigen?|Per il museo, a che fermata devo scendere?
Mi può avvisare quando arriviamo?||Können Sie mir Bescheid sagen, wenn wir ankommen?|Non conosco la zona, mi può avvisare quando arriviamo?
Quanto ci vuole a piedi?||Wie lange braucht man zu Fuß?|Quanto ci vuole a piedi fino al mare?
Mi può chiamare un taxi?||Können Sie mir ein Taxi rufen?|Scusi, mi può chiamare un taxi?
Mi porti a questo indirizzo.||Bringen Sie mich zu dieser Adresse.|Buongiorno, mi porti a questo indirizzo, per favore.
Si ferma qui, per favore.||Halten Sie bitte hier.|Si ferma qui, per favore, grazie.
Mi può indicare sulla mappa?||Können Sie es mir auf der Karte zeigen?|Non capisco, mi può indicare sulla mappa?
Non sono di qui.||Ich bin nicht von hier.|Mi dispiace, non sono di qui.
Ho perso l'ultimo autobus.||Ich habe den letzten Bus verpasst.|Aiuto, ho perso l'ultimo autobus!
Il treno è soppresso.||Der Zug fällt aus.|Attenzione, il treno delle otto è soppresso.
C'è sciopero oggi.||Heute wird gestreikt.|Niente metro, c'è sciopero oggi.
Dove posso noleggiare una bici?||Wo kann ich ein Fahrrad mieten?|Dove posso noleggiare una bici in città?
Dov'è il parcheggio più vicino?||Wo ist der nächste Parkplatz?|Scusi, dov'è il parcheggio più vicino?
Il pieno, per favore.||Volltanken, bitte.|Il pieno di benzina, per favore.
Mi si è bucata una gomma.||Ich habe einen Platten.|Mi si è bucata una gomma, c'è un meccanico qui vicino?
Sono in coda in autostrada.||Ich stehe auf der Autobahn im Stau.|Arrivo tardi, sono in coda in autostrada.
Siamo quasi arrivati.||Wir sind fast da.|Pazienza, siamo quasi arrivati!
`,
"Phrasen – Gratulieren & Wünsche": `
Buon compleanno!||Alles Gute zum Geburtstag!|Buon compleanno, Anna!
Cento di questi giorni!||Auf viele weitere Jahre!|Buon compleanno e cento di questi giorni!
Congratulazioni!||Herzlichen Glückwunsch!|Congratulazioni per la laurea!
Te lo meriti!||Du hast es verdient!|Hai vinto il premio? Te lo meriti!
Sono fiero di te.||Ich bin stolz auf dich.|Hai superato l'esame, sono fiero di te.
Buon Natale e felice anno nuovo!||Frohe Weihnachten und ein glückliches neues Jahr!|Buon Natale e felice anno nuovo a tutta la famiglia!
Buone feste!||Frohe Feiertage!|Buone feste e a presto!
Buona Pasqua!||Frohe Ostern!|Buona Pasqua a te e ai tuoi!
Felicitazioni agli sposi!||Glückwünsche an das Brautpaar!|Felicitazioni agli sposi, viva gli sposi!
Viva gli sposi!||Hoch lebe das Brautpaar!|Alziamo i bicchieri: viva gli sposi!
Ti auguro tanta felicità.||Ich wünsche dir viel Glück.|Ti auguro tanta felicità nella nuova casa.
Buona fortuna!||Viel Glück!|Domani hai il colloquio? Buona fortuna!
Incrocio le dita.||Ich drücke die Daumen.|Per l'esame incrocio le dita per te.
Buon appetito!||Guten Appetit!|La cena è pronta, buon appetito!
Buon divertimento!||Viel Spaß!|Andate al concerto? Buon divertimento!
Buone vacanze!||Schönen Urlaub!|Partite domani? Buone vacanze!
Buona serata!||Schönen Abend!|Grazie e buona serata!
Sogni d'oro!||Träum süß!|Buonanotte, sogni d'oro!
Condoglianze.||Mein Beileid.|Ho saputo di tuo nonno, sentite condoglianze.
Ti sono vicino.||Ich bin in Gedanken bei dir.|In questo momento difficile ti sono vicino.
Grazie di cuore.||Von Herzen danke.|Grazie di cuore per il regalo.
Non dovevi!||Das wäre nicht nötig gewesen!|Un regalo per me? Non dovevi!
È un pensiero gentile.||Das ist eine nette Geste.|Grazie dei fiori, è un pensiero gentile.
Che bel regalo!||Was für ein schönes Geschenk!|Che bel regalo, grazie mille!
Benvenuto al mondo!||Willkommen auf der Welt!|Benvenuto al mondo, piccolo Leo!
Auguri per il nuovo lavoro!||Viel Erfolg im neuen Job!|Tanti auguri per il nuovo lavoro!
Buon anniversario!||Alles Gute zum Jahrestag!|Buon anniversario, amore mio!
Brindiamo a noi!||Auf uns!|Brindiamo a noi e al futuro!
Tanti cari saluti.||Viele liebe Grüße.|Tanti cari saluti da Roma!
Un abbraccio forte.||Eine feste Umarmung (liebe Grüße).|A presto, un abbraccio forte!
`,
"Phrasen – Meinung & Reaktionen": `
Secondo me hai ragione.||Meiner Meinung nach hast du recht.|Secondo me hai ragione, è meglio aspettare.
Non sono sicuro.||Ich bin nicht sicher.|Forse sì, ma non sono sicuro.
Hai ragione da vendere.||Du hast völlig recht.|Hai ragione da vendere, è un'ingiustizia.
Non è vero!||Das stimmt nicht!|Non è vero, io non l'ho detto!
Ma dai!||Ach komm! / Echt jetzt?|Ma dai, davvero ti sposi?
Davvero?||Wirklich?|— Ho vinto la lotteria. — Davvero?
Non ci credo!||Ich glaube es nicht!|Non ci credo, che coincidenza!
Che fortuna!||Was für ein Glück!|Hai trovato parcheggio subito? Che fortuna!
Che sfortuna!||So ein Pech!|È piovuto tutta la vacanza, che sfortuna!
Che peccato!||Wie schade!|Non puoi venire? Che peccato!
Che schifo!||Wie eklig!|C'è un capello nella zuppa, che schifo!
Che noia!||Wie langweilig!|Ancora questo film? Che noia!
Che figata!||Wie cool!|Andiamo al concerto? Che figata!
Mi sembra giusto.||Das scheint mir richtig.|Dividiamo il conto? Mi sembra giusto.
Non mi convince.||Das überzeugt mich nicht.|L'idea non è male, ma non mi convince.
Non ne ho idea.||Ich habe keine Ahnung.|— Dov'è Marco? — Non ne ho idea.
Non è il caso.||Das ist nicht nötig / angebracht.|Non è il caso di arrabbiarsi.
Ci mancherebbe!||Aber selbstverständlich! / Das fehlte noch!|— Grazie dell'aiuto! — Ci mancherebbe!
Ne vale la pena.||Es lohnt sich.|È lontano, ma ne vale la pena.
Non ne vale la pena.||Es lohnt sich nicht.|Non litigare, non ne vale la pena.
Peggio per lui.||Pech für ihn.|Non è venuto? Peggio per lui.
Fa lo stesso.||Ist egal.|Rosso o blu? Fa lo stesso.
Per me è uguale.||Mir ist es gleich.|Pizza o pasta, per me è uguale.
Non fa per me.||Das ist nichts für mich.|Il calcio non fa per me.
Hai fatto bene.||Du hast richtig gehandelt.|Hai detto la verità? Hai fatto bene.
Hai fatto male.||Das war falsch von dir.|Non dovevi urlare, hai fatto male.
Lascia stare.||Lass gut sein.|Lascia stare, ci penso io.
Sono senza parole.||Mir fehlen die Worte.|Che regalo, sono senza parole!
Esatto!||Genau!|— Quindi partiamo domani? — Esatto!
Appunto!||Eben! / Genau das!|— Costa troppo. — Appunto, non lo compriamo.
`
});
})();

/* Alltagswortschatz für vokabeln.html (Stufe 3: konkrete Alltagswörter, A2/B1)
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

/* ---------- Teil 1 (a bis e) ---------- */
add({
"A2 – Essen & Küche 2": `
acciuga|l'|Sardelle|Sulla pizza metto le acciughe.
affettato|l'|Aufschnitt|Prendiamo un piatto di affettati misti.
agrume|l'|Zitrusfrucht|La Sicilia produce molti agrumi.
arachide|l'|Erdnuss|Ho comprato le arachidi salate.
aragosta|l'|Hummer / Languste|Per Capodanno mangiamo l'aragosta.
aranciata|l'|Orangenlimonade|Un'aranciata fresca, per favore.
arrosto|l'|Braten|La domenica la nonna fa l'arrosto.
asparago|l'|Spargel|Gli asparagi bianchi sono di stagione.
assaggio|l'|Kostprobe|Posso avere un assaggio del formaggio?
avanzo|l'|Rest / Essensrest|Mangiamo gli avanzi di ieri.
baccalà|il|Stockfisch|Il baccalà alla vicentina è un piatto tipico.
barbabietola|la|Rote Bete|L'insalata di barbabietola è dolce.
besciamella|la|Béchamelsoße|Per le lasagne serve la besciamella.
bollito|il|Siedfleisch / gekocht|Il bollito misto è un piatto piemontese.
bollitore|il|Wasserkocher|Accendi il bollitore per il tè.
bresaola|la|Bresaola (Trockenfleisch)|La bresaola con rucola è leggera.
briciola|la|Krümel|Ci sono briciole sul tavolo.
budino|il|Pudding|Per dolce c'è il budino al cioccolato.
cacao|il|Kakao|Aggiungi un cucchiaio di cacao.
caffellatte|il|Milchkaffee|A colazione bevo un caffellatte.
caffettiera|la|Espressokanne|Metti la caffettiera sul fuoco.
calamaro|il|Tintenfisch (Kalmar)|I calamari fritti sono buonissimi.
camomilla|la|Kamille / Kamillentee|Prima di dormire bevo una camomilla.
cappero|il|Kaper|La salsa ha i capperi e le olive.
carciofo|il|Artischocke|I carciofi alla romana sono famosi.
casseruola|la|Kasserolle / Topf|Scalda il sugo in una casseruola.
castagna|la|Kastanie / Marone|In autunno mangiamo le castagne.
cicoria|la|Zichorie / Wegwarte|La cicoria ripassata è un contorno romano.
cioccolatino|il|Praline|Ti ho portato una scatola di cioccolatini.
cocco|il|Kokosnuss|Il gelato al cocco è il mio preferito.
cocomero|il|Wassermelone|D'estate mangiamo il cocomero.
colino|il|Sieb|Passa il brodo con il colino.
condimento|il|Würze / Dressing|Che condimento metti sull'insalata?
confetto|il|Dragee / Zuckermandel|Ai matrimoni si regalano i confetti.
confettura|la|Konfitüre|Spalmo la confettura sul pane.
cotoletta|la|Schnitzel|La cotoletta alla milanese è impanata.
cottura|la|Garen / Garzeit|La cottura della pasta è di dieci minuti.
cozza|la|Miesmuschel|Facciamo la pasta con le cozze.
crostino|il|geröstetes Brot / Crostino|Per antipasto ci sono i crostini.
dattero|il|Dattel|I datteri sono molto dolci.
`,
"A2 – Essen & Küche 3": `
digestivo|il|Verdauungsschnaps / verdauungsfördernd|Dopo cena beviamo un digestivo.
dolcificante|il|Süßstoff|Uso il dolcificante al posto dello zucchero.
dolciume|il|Süßigkeit|I bambini amano i dolciumi.
espresso|l'|Espresso|Un espresso al banco, per favore.
analcolico||alkoholfrei / alkoholfreies Getränk|Hai qualcosa di analcolico?
acquolina|l'|(Appetit) Wasser im Mund|Ho l'acquolina in bocca.
annacquare||verwässern|Non annacquare il vino!
affettare||aufschneiden|Affetta il salame sottile.
affumicare||räuchern|Il salmone è affumicato.
cavatappi|il|Korkenzieher|Dov'è il cavatappi?
apriscatole|l'|Dosenöffner|Mi passi l'apriscatole?
boccone|il|Bissen / Happen|Mangia un boccone con noi!
bevuta|la|Trinkgelage / Umtrunk|Dopo la partita facciamo una bevuta.
bustina|la|Tütchen / Teebeutel|Metti una bustina di tè nella tazza.
consumazione|la|Verzehr / Getränk|L'ingresso include una consumazione.
bistecchiera|la|Grillpfanne|Cuoci la carne sulla bistecchiera.
carciofino|il|kleine Artischocke (eingelegt)|Sulla pizza ci sono i carciofini.
chinotto|il|Chinotto (bittere Limonade)|Il chinotto è una bibita italiana.
calzone|il|Calzone (gefüllte Pizza)|Prendo un calzone con ricotta.
crostaceo|il|Krebstier|Gamberi e aragoste sono crostacei.
brioche|la|Brioche / Hörnchen|Cappuccino e brioche, grazie!
astemio||abstinent (trinkt keinen Alkohol)|No grazie, sono astemio.
digiunare||fasten|Prima delle analisi bisogna digiunare.
dietetico||Diät-|Compro prodotti dietetici.
dimagrante||Abnehm-|Segue una dieta dimagrante.
assaporare||auskosten / genießen|Assapora ogni boccone.
cibare||ernähren / füttern|Il passero si ciba di semi.
`,
"A2 – Tiere 2": `
aquila|l'|Adler|L'aquila vola sopra le montagne.
alveare|l'|Bienenstock|Le api tornano all'alveare.
baco|il|Raupe (Seidenraupe)|Il baco da seta produce la seta.
biscia|la|Natter|Una biscia attraversa il sentiero.
bruco|il|Raupe|Il bruco diventa una farfalla.
calabrone|il|Hornisse|Attento, c'è un calabrone!
cammello|il|Kamel|Il cammello vive nel deserto.
canarino|il|Kanarienvogel|Il canarino canta in gabbia.
canguro|il|Känguru|Il canguro vive in Australia.
cardellino|il|Stieglitz|Il cardellino ha le ali gialle.
castoro|il|Biber|Il castoro costruisce dighe.
cavalletta|la|Heuschrecke|Una cavalletta salta nell'erba.
cervo|il|Hirsch|Nel bosco abbiamo visto un cervo.
cicogna|la|Storch|La cicogna porta i bambini, dicono.
cigno|il|Schwan|Sul lago nuotano due cigni.
cimice|la|Wanze|Ci sono cimici sui pomodori.
cinghiale|il|Wildschwein|In Toscana si mangia il cinghiale.
cobra|il|Kobra|Il cobra è un serpente velenoso.
coccinella|la|Marienkäfer|Una coccinella porta fortuna.
coccodrillo|il|Krokodil|Il coccodrillo ha denti enormi.
cornacchia|la|Krähe|Una cornacchia gracchia sul tetto.
corvo|il|Rabe|Il corvo è tutto nero.
criniera|la|Mähne|Il leone ha una grande criniera.
artiglio|l'|Kralle|Il gatto tira fuori gli artigli.
cuccia|la|Hundekorb / Hundehütte|Il cane dorme nella sua cuccia.
collare|il|Halsband|Il cane ha un collare rosso.
belare||blöken|Le pecore belano.
cinguettare||zwitschern|Gli uccelli cinguettano al mattino.
covare||brüten|La gallina cova le uova.
covo|il|Bau / Versteck|La volpe torna nel suo covo.
dinosauro|il|Dinosaurier|I bambini amano i dinosauri.
carnivoro||fleischfressend|Il leone è un animale carnivoro.
bovino||Rind- / Rind|La carne bovina è cara.
equino||Pferde-|L'allevamento equino è antico in Maremma.
annusare||schnuppern|Il cane annusa tutto.
abbeverare||tränken|Il pastore abbevera le pecore.
addomesticare||zähmen|Il gatto è stato addomesticato migliaia di anni fa.
acquario|l'|Aquarium|A Genova c'è un grande acquario.
`,
"B1 – Pflanzen & Landwirtschaft": `
abete|l'|Tanne|A Natale compriamo un abete.
alga|l'|Alge|Sulla spiaggia ci sono molte alghe.
avena|l'|Hafer|A colazione mangio fiocchi d'avena.
bacca|la|Beere|Non mangiare quelle bacche!
bocciolo|il|Knospe|La rosa ha tanti boccioli.
castagno|il|Kastanienbaum|Nel bosco ci sono molti castagni.
cipresso|il|Zypresse|In Toscana ci sono tanti cipressi.
crisantemo|il|Chrysantheme|Il crisantemo è il fiore dei morti in Italia.
corteccia|la|Rinde|La corteccia dell'albero è ruvida.
aiuola|l'|Blumenbeet|Non calpestare le aiuole!
annaffiare||gießen|Annaffia i fiori la sera.
concime|il|Dünger|Metti un po' di concime nei vasi.
coltivazione|la|Anbau|La coltivazione del riso è tipica del Piemonte.
arare||pflügen|Il contadino ara il campo.
aratro|l'|Pflug|Una volta l'aratro era tirato dai buoi.
agricoltore|l'|Landwirt|L'agricoltore raccoglie le olive.
bracciante|il|Landarbeiter / Tagelöhner|I braccianti raccolgono i pomodori.
corallo|il|Koralle|Ha una collana di corallo rosso.
canapa|la|Hanf|La corda è di canapa.
acerbo||unreif|La frutta è ancora acerba.
carnoso||fleischig|I pomodori sono grandi e carnosi.
ammuffire||schimmeln|Il pane è ammuffito.
`,
"A2 – Haushalt & Bad 2": `
accappatoio|l'|Bademantel|Dopo la doccia metto l'accappatoio.
accendino|l'|Feuerzeug|Hai un accendino?
adattatore|l'|Adapter|In Inghilterra serve un adattatore per la spina.
altalena|l'|Schaukel|I bambini giocano sull'altalena.
ammorbidente|l'|Weichspüler|Metti l'ammorbidente in lavatrice.
anticalcare|l'|Entkalker|Pulisci il bagno con l'anticalcare.
attaccapanni|l'|Garderobe / Kleiderhaken|Appendi la giacca all'attaccapanni.
astuccio|l'|Federmäppchen / Etui|Ho dimenticato l'astuccio a scuola.
bacinella|la|Schüssel / Waschschüssel|Metti la bacinella sotto il rubinetto.
bagnoschiuma|il|Schaumbad / Duschgel|Il bagnoschiuma profuma di lavanda.
balsamo|il|Haarspülung / Balsam|Dopo lo shampoo metto il balsamo.
battipanni|il|Teppichklopfer|La nonna usa ancora il battipanni.
baule|il|Truhe / Kofferraum|In soffitta c'è un vecchio baule.
bombola|la|Gasflasche|La bombola del gas è vuota.
cacciavite|il|Schraubenzieher|Passami il cacciavite!
caminetto|il|Kamin|D'inverno accendiamo il caminetto.
candeliere|il|Kerzenleuchter|Sul tavolo c'è un candeliere d'argento.
cannuccia|la|Strohhalm|Bevo il succo con la cannuccia.
cassaforte|la|Tresor|Metti i gioielli in cassaforte.
cassapanca|la|Truhenbank|Le coperte sono nella cassapanca.
cassettiera|la|Kommode|La cassettiera ha quattro cassetti.
catino|il|Waschbecken / Schüssel|Lava i piatti nel catino.
cerino|il|Streichholz (Wachs)|Accendi la candela con un cerino.
citofono|il|Gegensprechanlage|Suona al citofono quando arrivi.
colla|la|Klebstoff|Mi serve la colla per riparare il vaso.
congelatore|il|Gefrierschrank|Il gelato è nel congelatore.
contatore|il|Zähler|Leggi il contatore della luce.
copriletto|il|Tagesdecke|Il copriletto è bianco.
credenza|la|Anrichte / Glaube|I piatti sono nella credenza.
davanzale|il|Fensterbank|Il gatto dorme sul davanzale.
deodorante|il|Deo|Hai messo il deodorante?
dentiera|la|Gebiss (Prothese)|Il nonno toglie la dentiera di notte.
divano-letto|il|Schlafsofa|Gli ospiti dormono sul divano-letto.
docciaschiuma|il|Duschgel|Il docciaschiuma è finito.
dopobarba|il|Aftershave|Usa un dopobarba fresco.
elettrodomestico|l'|Haushaltsgerät|Il frigo è l'elettrodomestico più importante.
assorbente|l'|Binde / saugfähig|Compro assorbenti in farmacia.
borotalco|il|Babypuder|Il borotalco ha un profumo delicato.
colluttorio|il|Mundwasser|Dopo i denti uso il colluttorio.
cesto|il|Korb|Metti la biancheria nel cesto.
`,
"A2 – Dinge, Spiel & Kleidung": `
biglia|la|Murmel|I bambini giocano a biglie.
birillo|il|Kegel|Ha buttato giù tutti i birilli.
burattino|il|Marionette / Handpuppe|Pinocchio è un burattino di legno.
boccia|la|Boccia-Kugel|I nonni giocano a bocce al parco.
aquilone|l'|Drachen (Spielzeug)|Facciamo volare l'aquilone in spiaggia.
biliardo|il|Billard|Giochiamo a biliardo al bar.
autoscontro|l'|Autoscooter|Al luna park andiamo sull'autoscontro.
borsetta|la|Handtasche|Ha una borsetta rossa.
braccialetto|il|Armband|Mi ha regalato un braccialetto d'oro.
bretella|la|Hosenträger / Träger|Il vestito ha le bretelle sottili.
berretto|il|Mütze|D'inverno porto il berretto di lana.
camicetta|la|Bluse|Indossa una camicetta bianca.
calzatura|la|Schuhwerk|È un negozio di calzature.
calzoleria|la|Schuhgeschäft / Schusterei|Ho portato le scarpe in calzoleria.
cappuccio|il|Kapuze|Metti il cappuccio, piove!
cinghia|la|Gürtel / Riemen|La cinghia della borsa è rotta.
cinturino|il|Armband (Uhr)|Il cinturino dell'orologio è di pelle.
ciabatta|la|Hausschuh / Ciabatta-Brot|Metto le ciabatte in casa.
copricostume|il|Strandkleid|Sopra il bikini metto un copricostume.
cucito|il|Nähen|Mia nonna era brava nel cucito.
cucitura|la|Naht|La cucitura dei pantaloni si è aperta.
brocca|la|Krug|Porta una brocca d'acqua.
botte|la|Fass|Il vino invecchia nelle botti.
barile|il|Fass / Barrel|Il prezzo del petrolio al barile sale.
dado|il|Würfel / Brühwürfel|Tira il dado!
canotto|il|Schlauchboot|Al mare giochiamo con il canotto.
cilindro|il|Zylinder|Il mago tira fuori un coniglio dal cilindro.
abbottonare||zuknöpfen|Abbottona il cappotto, fa freddo!
allacciare||zubinden / anschnallen|Allacciate le cinture!
`,
"B1 – Körper & Gesundheit 3": `
alito|l'|Atem|Ha l'alito che sa di aglio.
alluce|l'|großer Zeh|Ho sbattuto l'alluce contro il tavolo.
anulare|l'|Ringfinger|Porta la fede all'anulare.
ascella|l'|Achselhöhle|Il deodorante si mette sotto le ascelle.
avambraccio|l'|Unterarm|Ha un tatuaggio sull'avambraccio.
basetta|la|Koteletten|Ha le basette lunghe.
bava|la|Sabber / Schleim|Il cane ha la bava alla bocca.
calcagno|il|Ferse|Mi fa male il calcagno.
callo|il|Hornhaut / Hühnerauge|Ho un callo sul piede.
carnagione|la|Teint / Hautfarbe|Ha la carnagione chiara.
ciocca|la|Strähne|Una ciocca di capelli le cade sul viso.
ciuffo|il|Haarbüschel / Tolle|Ha un ciuffo ribelle.
corporatura|la|Körperbau|È un uomo di corporatura robusta.
acciacco|l'|Wehwehchen / Altersbeschwerde|Il nonno ha i suoi acciacchi.
appendicite|l'|Blinddarmentzündung|L'hanno operato di appendicite.
ascesso|l'|Abszess|Ho un ascesso al dente.
asma|l'|Asthma|Soffre di asma da bambino.
bronchite|la|Bronchitis|Ha la bronchite e tossisce.
catarro|il|Schleim (Husten)|Ho la tosse con catarro.
colica|la|Kolik|Il neonato ha le coliche.
collasso|il|Kollaps|Ha avuto un collasso per il caldo.
congestione|la|Stauung / Magenverstimmung|Non fare il bagno subito dopo pranzo: rischi una congestione.
contagio|il|Ansteckung|Il rischio di contagio è alto.
convulsione|la|Krampf|Il bambino ha avuto delle convulsioni per la febbre.
digestione|la|Verdauung|Una passeggiata aiuta la digestione.
ernia|l'|Bruch (Hernie)|Ha un'ernia al disco.
contagocce|il|Pipette|Prendi dieci gocce con il contagocce.
ammalato||krank / Kranker|L'ammalato deve riposare.
affanno|l'|Atemnot / Sorge|Dopo le scale ho l'affanno.
battito|il|Schlag (Herz)|Il medico controlla il battito.
batticuore|il|Herzklopfen|Prima dell'esame ho il batticuore.
capogiro|il|Schwindel|Mi è venuto un capogiro.
agonia|l'|Todeskampf / Qual|L'attesa è stata un'agonia.
aborto|l'|Abtreibung / Fehlgeburt|La legge sull'aborto è del 1978.
allattare||stillen|La mamma allatta il bambino.
depilazione|la|Enthaarung|Ha fatto la depilazione alle gambe.
delirare||fantasieren / irrereden|Con la febbre alta delira.
dolere||schmerzen (gehoben)|Mi duole la testa.
disinfettante|il|Desinfektionsmittel|Metti il disinfettante sulla ferita.
`,
"B1 – Verkehr & Technik 2": `
acceleratore|l'|Gaspedal|Premi l'acceleratore piano.
aeroplano|l'|Flugzeug|Il bambino gioca con l'aeroplano.
atterraggio|l'|Landung|L'atterraggio è stato perfetto.
autoambulanza|l'|Krankenwagen|Chiamate un'autoambulanza!
autobotte|l'|Tankwagen|L'autobotte porta l'acqua al paese.
automobilista|l'|Autofahrer|Gli automobilisti sono in coda.
autoscuola|l'|Fahrschule|Mi sono iscritto all'autoscuola.
autotreno|l'|Lastzug|Un autotreno blocca la strada.
bagagliaio|il|Kofferraum|Metti le valigie nel bagagliaio.
battello|il|Boot / Fähre|Prendiamo il battello sul lago.
benzinaio|il|Tankstelle / Tankwart|Fermiamoci dal benzinaio.
camionista|il|Lkw-Fahrer|Il camionista guida tutta la notte.
carburante|il|Kraftstoff|Il carburante costa sempre di più.
carrozzeria|la|Karosserie / Werkstatt|La carrozzeria è ammaccata.
clacson|il|Hupe|Non suonare il clacson!
cofano|il|Motorhaube|Apri il cofano, controllo l'olio.
contachilometri|il|Kilometerzähler|Il contachilometri segna centomila.
elica|l'|Propeller|L'elica della barca si è rotta.
elicottero|l'|Hubschrauber|L'elicottero atterra sull'ospedale.
aviazione|l'|Luftfahrt|Mio zio lavorava nell'aviazione.
astronave|l'|Raumschiff|L'astronave parte per Marte.
abbagliante|l'|Fernlicht / blendend|Spegni gli abbaglianti!
asfalto|l'|Asphalt|L'asfalto è bagnato.
asfaltare||asphaltieren|Hanno asfaltato la strada.
bussola|la|Kompass|Senza bussola ci perdiamo.
ciclista|il|Radfahrer|Attento al ciclista!
corridore|il|Läufer / Rennfahrer|Il corridore taglia il traguardo.
centralino|il|Telefonzentrale|Chiama il centralino dell'ospedale.
amplificatore|l'|Verstärker|Collega la chitarra all'amplificatore.
apparecchiatura|l'|Geräte / Ausrüstung|L'apparecchiatura medica è moderna.
calcolatore|il|Rechner|Il primo calcolatore era enorme.
accumulatore|l'|Akku / Akkumulator|L'accumulatore è scarico.
depuratore|il|Kläranlage / Wasserfilter|Il depuratore pulisce l'acqua.
diga|la|Staudamm|La diga trattiene l'acqua del lago.
ciminiera|la|Schornstein (Fabrik)|La ciminiera della fabbrica fuma.
conduttura|la|Leitung|La conduttura dell'acqua è rotta.
catrame|il|Teer|Le sigarette contengono catrame.
alluminio|l'|Aluminium|La lattina è di alluminio.
ammoniaca|l'|Ammoniak|L'ammoniaca ha un odore forte.
cloro|il|Chlor|In piscina c'è troppo cloro.
deviazione|la|Umleitung|C'è una deviazione per lavori.
deviare||umleiten / abweichen|Hanno deviato il traffico.
`,
"B1 – Menschen & Charakter": `
accattone|l'|Bettler|Un accattone chiede l'elemosina.
acrobata|l'|Akrobat|L'acrobata cammina sulla corda.
analfabeta|l'|Analphabet|Il nonno era analfabeta.
anarchico|l'|Anarchist / anarchisch|Era un anarchico convinto.
apostolo|l'|Apostel|Gli apostoli erano dodici.
archeologo|l'|Archäologe|L'archeologo scava a Pompei.
aristocratico|l'|Adeliger / aristokratisch|Viene da una famiglia aristocratica.
attaccante|l'|Stürmer|L'attaccante segna di testa.
autografo|l'|Autogramm|Ho chiesto un autografo al cantante.
ballerina|la|Tänzerin / Ballerina|La ballerina danza alla Scala.
ballerino|il|Tänzer|Il ballerino salta altissimo.
bambinaia|la|Kindermädchen|La bambinaia porta i bimbi al parco.
barista|il|Barkeeper|Il barista prepara un cappuccino.
bevitore|il|Trinker|È un forte bevitore di caffè.
bidello|il|Hausmeister (Schule)|Il bidello apre le aule.
bisnonno|il|Urgroßvater|Il mio bisnonno era contadino.
boia|il|Henker|Il boia aspetta sul patibolo.
bottegaio|il|Ladenbesitzer|Il bottegaio conosce tutti.
brigante|il|Räuber / Bandit|I briganti vivevano nei boschi.
buonuomo|il|guter Mann|Senta, buonuomo, dov'è la posta?
camerata|il|Kamerad / Schlafsaal|Dormiamo in una camerata da sei.
cannibale|il|Kannibale|Nel romanzo ci sono i cannibali.
cantautore|il|Liedermacher|De André è un famoso cantautore.
caposquadra|il|Vorarbeiter / Teamleiter|Il caposquadra dà le istruzioni.
capoufficio|il|Bürochef|Il capoufficio è in ferie.
carcerato|il|Häftling|Il carcerato riceve visite il sabato.
combattente|il|Kämpfer|I combattenti si ritirano.
compatriota|il|Landsmann|Ho incontrato un compatriota a Parigi.
confessore|il|Beichtvater|Il confessore ascolta in silenzio.
contrabbandiere|il|Schmuggler|I contrabbandieri passano la frontiera di notte.
cronista|il|Reporter|Il cronista racconta la partita.
delinquente|il|Krimineller|La polizia ha preso il delinquente.
detenuto|il|Häftling|I detenuti lavorano in carcere.
direttrice|la|Direktorin|La direttrice della scuola è severa.
domestica|la|Haushaltshilfe|La domestica viene due volte a settimana.
dormiglione|il|Langschläfer|Alzati, dormiglione!
drogato|il|Drogensüchtiger|Il film racconta la vita di un drogato.
cornuto||gehörnt / (vulgär) Gehörnter|Il toro è cornuto. (Als Schimpfwort beleidigend!)
`,
"B1 – Charakter & Eigenschaften": `
agiato||wohlhabend|È cresciuto in una famiglia agiata.
avaro||geizig|È troppo avaro per offrire un caffè.
birichino||frech / schelmisch|Che bambino birichino!
cinico||zynisch|Non essere così cinico.
disattento||unaufmerksam|Oggi sei disattento.
disonesto||unehrlich|È un commerciante disonesto.
dispettoso||gemein / frech|Il fratellino è dispettoso.
disubbidiente||ungehorsam|Il cane è disubbidiente.
distratto||zerstreut|Sono distratto, scusa.
docile||sanft / gefügig|È un cavallo docile.
comprensivo||verständnisvoll|È un padre comprensivo.
cosciente||bewusst / bei Bewusstsein|È rimasto cosciente dopo l'incidente.
affezionato||anhänglich / zugetan|Sono molto affezionato a mia nonna.
agile||flink / wendig|Il gatto è agile.
autorevole||maßgeblich / angesehen|È un giornale autorevole.
brutale||brutal|È stato un attacco brutale.
bestiale||tierisch / fürchterlich|Fa un caldo bestiale.
decoroso||anständig / würdig|Ha uno stipendio decoroso.
deforme||missgebildet / verformt|L'albero ha un tronco deforme.
aderente||eng anliegend|Porta una maglietta aderente.
accogliente||gemütlich / gastfreundlich|La casa è piccola ma accogliente.
addormentato||eingeschlafen / verschlafen|Il bambino è addormentato.
affamato||hungrig|Sono affamato!
affannato||atemlos / aufgeregt|Arriva affannato alla stazione.
affilato||scharf (Klinge)|Il coltello è affilato.
aguzzo||spitz|Il gatto ha denti aguzzi.
appeso||aufgehängt|Il quadro è appeso al muro.
alterno||abwechselnd|Il tempo è alterno.
coniugato||verheiratet / konjugiert|Stato civile: coniugato.
decorato||geschmückt / dekoriert|L'albero è decorato con luci.
disteso||ausgestreckt / entspannt|È disteso sul divano.
distrutto||zerstört / fix und fertig|Dopo il lavoro sono distrutto.
avvelenato||vergiftet|L'acqua del pozzo è avvelenata.
artigianale||handwerklich / hausgemacht|È un gelato artigianale.
`,
"B1 – Verben 12": `
abbondare||reichlich vorhanden sein|In autunno abbondano i funghi.
abbreviare||abkürzen|Abbrevia il tuo nome.
abusare||missbrauchen / übertreiben|Non abusare della mia pazienza!
accavallare||übereinanderschlagen|Accavalla le gambe.
accecare||blenden|Il sole mi acceca.
accentare||betonen / Akzent setzen|Come si accenta questa parola?
acchiappare||fangen / schnappen|Acchiappa la palla!
accoltellare||erstechen|Un uomo è stato accoltellato.
acconsentire||einwilligen|Il padre acconsente al matrimonio.
accorciare||kürzen|Devo accorciare i pantaloni.
accorrere||herbeieilen|I vicini accorrono per aiutare.
accudire||versorgen / betreuen|Accudisce la madre anziana.
addobbare||schmücken|Addobbiamo la sala per la festa.
addolcire||süßen / mildern|Addolcisci il tè con il miele.
addrizzare||geraderichten|Addrizza il quadro, è storto.
affamare||aushungern|La guerra ha affamato il paese.
affannarsi||sich abhetzen|Non affannarti, c'è tempo.
affaticare||ermüden / anstrengen|Non affaticare gli occhi.
affogare||ertrinken / ertränken|Ha rischiato di affogare.
affollare||überfüllen|I turisti affollano la piazza.
aggravare||verschlimmern|La pioggia ha aggravato la situazione.
aguzzare||spitzen / schärfen|Aguzza la vista!
allagare||überschwemmen|La pioggia ha allagato la cantina.
allarmare||alarmieren / beunruhigen|La notizia mi allarma.
allearsi||sich verbünden|I due paesi si alleano.
alleggerire||erleichtern|Alleggerisci lo zaino.
allentare||lockern|Allenta la cravatta.
allineare||ausrichten|Allinea le sedie.
ammaccare||verbeulen / quetschen|Ho ammaccato la macchina.
ammanettare||Handschellen anlegen|La polizia ammanetta il ladro.
ammassare||anhäufen|Ammassano la legna per l'inverno.
ammucchiare||aufhäufen|Ammucchia i vestiti sul letto.
annebbiare||vernebeln / trüben|Il vino annebbia la mente.
annodare||verknoten|Annoda la cravatta.
appannare||beschlagen|Il vapore appanna lo specchio.
appiccicare||kleben|Il chewing gum si è appiccicato alla scarpa.
appuntire||spitzen|Appuntisci la matita.
arrugginire||rosten|Il cancello è arrugginito.
`,
"B1 – Verben 13": `
assalire||überfallen / befallen|Mi assale un dubbio.
assaltare||stürmen / überfallen|Hanno assaltato un portavalori.
assediare||belagern|I giornalisti assediano la casa.
assordare||betäuben (Lärm)|La musica ci assorda.
attentare||einen Anschlag verüben|Hanno attentato alla vita del giudice.
atteggiarsi||sich aufspielen|Si atteggia a esperto.
avvantaggiare||begünstigen|La pioggia avvantaggia la squadra di casa.
avverare||wahr werden|Il mio sogno si è avverato.
avvitare||festschrauben|Avvita la lampadina.
bastonare||verprügeln|Lo hanno bastonato.
bisbigliare||flüstern|Mi bisbiglia un segreto.
bisticciare||zanken|I fratelli bisticciano sempre.
brontolare||murren / knurren|Il nonno brontola sempre.
calciare||treten / kicken|Calcia la palla in porta.
calpestare||zertreten / betreten|Non calpestare l'erba!
calzare||passen / anziehen (Schuh)|La scarpa calza bene.
coccolare||verhätscheln / kuscheln|La nonna coccola i nipoti.
combaciare||zusammenpassen|I pezzi combaciano perfettamente.
compiangere||bemitleiden|Non voglio essere compianto.
conficcare||hineinschlagen|Conficca il paletto nel terreno.
confortare||trösten|Le parole dell'amico lo confortano.
contraccambiare||erwidern|Contraccambio il favore.
coricarsi||sich hinlegen|Mi corico presto stasera.
crocifiggere||kreuzigen|Gesù fu crocifisso.
cullare||wiegen (Baby)|La mamma culla il bambino.
deformare||verformen|Il caldo ha deformato la plastica.
demoralizzare||entmutigen|La sconfitta ci ha demoralizzato.
derubare||bestehlen|Mi hanno derubato sul tram.
diseredare||enterben|Il padre lo ha diseredato.
dimezzare||halbieren|Hanno dimezzato il prezzo.
divorziare||sich scheiden lassen|Hanno divorziato dopo vent'anni.
dondolare||schaukeln|Il bambino dondola sulla sedia.
drizzare||aufrichten / spitzen (Ohren)|Il cane drizza le orecchie.
disubbidire||nicht gehorchen|Il bambino disubbidisce spesso.
cinguettio|il|Gezwitscher|Mi sveglia il cinguettio degli uccelli.
`,
"B1 – Alltag & Welt 1": `
abbasso||nieder mit!|Abbasso la scuola! gridano i ragazzi.
accampamento|l'|Lager / Zeltlager|L'accampamento è vicino al fiume.
accenno|l'|Andeutung|Ha fatto un accenno al problema.
accetta|l'|Beil|Taglia la legna con l'accetta.
addizione|l'|Addition|Fai questa addizione a mente.
addosso||am Leib / auf|Ho addosso solo una maglietta.
afa|l'|Schwüle|Che afa oggi!
alfabeto|l'|Alphabet|L'alfabeto italiano ha ventuno lettere.
altopiano|l'|Hochebene|L'altopiano di Asiago è verde.
ambasciata|l'|Botschaft|Vado all'ambasciata per il visto.
antichità|l'|Altertum / Antiquität|Vende antichità al mercato.
appiglio|l'|Halt / Vorwand|Lo scalatore cerca un appiglio.
aritmetica|l'|Arithmetik|L'aritmetica è la base della matematica.
armamento|l'|Bewaffnung / Rüstung|Le spese per l'armamento crescono.
aroma|l'|Aroma|Che aroma di caffè!
artiglieria|l'|Artillerie|L'artiglieria spara dalla collina.
assassinio|l'|Mord|L'assassinio del presidente scioccò il mondo.
astuzia|l'|List|Ha vinto con l'astuzia.
atomica|l'|Atombombe|L'atomica fu sganciata nel 1945.
atrio|l'|Eingangshalle|Ci vediamo nell'atrio della stazione.
azzardo|l'|Wagnis / Glücksspiel|Il gioco d'azzardo crea dipendenza.
beffa|la|Spott / Hohn|Oltre al danno, la beffa!
Befana|la|Befana (Hexe am 6. Januar)|La Befana porta dolci ai bambini buoni.
bestemmia|la|Fluch / Gotteslästerung|In chiesa non si dicono bestemmie.
bocciatura|la|Durchfallen (Prüfung)|La bocciatura è stata una delusione.
borgata|la|Vorort / Siedlung|Abita in una borgata di Roma.
borghesia|la|Bürgertum|La borghesia crebbe nell'Ottocento.
botanica|la|Botanik|Studia botanica all'università.
brandello|il|Fetzen|La bandiera è ridotta a brandelli.
brigantaggio|il|Räuberwesen|Dopo l'Unità d'Italia ci fu il brigantaggio.
brina|la|Raureif|Al mattino c'è la brina sui campi.
bufera|la|Sturm / Schneesturm|Una bufera di neve blocca le strade.
buonafede|la|guter Glaube|L'ha fatto in buonafede.
buongusto|il|guter Geschmack|Si veste con buongusto.
burrasca|la|Sturm (auf See)|Il mare è in burrasca.
burrone|il|Schlucht|La macchina è caduta nel burrone.
`,
"B1 – Alltag & Welt 2": `
calligrafia|la|Handschrift / Schönschrift|Ha una bella calligrafia.
calunnia|la|Verleumdung|È una calunnia!
calvario|il|Leidensweg|Il viaggio è stato un calvario.
campanile|il|Glockenturm|Il campanile di Giotto è a Firenze.
camposanto|il|Friedhof|Il camposanto è dietro la chiesa.
capoluogo|il|Hauptstadt (Provinz / Region)|Bologna è il capoluogo dell'Emilia-Romagna.
capotavola|il|Kopfende (Tisch)|Il nonno siede a capotavola.
capriola|la|Purzelbaum|Il bambino fa le capriole sul prato.
carosello|il|Karussell|I bambini salgono sul carosello.
carovana|la|Karawane|Una carovana attraversa il deserto.
cartuccia|la|Patrone|Cambia la cartuccia della stampante.
catechismo|il|Katechismus / Religionsunterricht|Il sabato i bambini vanno a catechismo.
catenaccio|il|Riegel / Abwehrriegel (Fußball)|La squadra gioca in catenaccio.
caverna|la|Höhle|Gli uomini primitivi vivevano nelle caverne.
chiasso|il|Lärm|Che chiasso fanno i vicini!
chiazza|la|Fleck|C'è una chiazza d'olio sulla strada.
chilogrammo|il|Kilogramm|Un chilogrammo di pane, per favore.
china|la|Abhang / Tusche|Disegna con la china.
clero|il|Klerus|Il clero ha un ruolo importante.
coccio|il|Scherbe / Ton|Attento ai cocci del vaso!
colata|la|(Lava-)Strom / Guss|Una colata di lava scende dall'Etna.
colle|il|Hügel|Il paese è su un colle.
collera|la|Zorn|È andato in collera.
colletta|la|Sammlung (Geld)|Facciamo una colletta per il regalo.
colmo|il|Gipfel / randvoll|Questo è il colmo!
colorante|il|Farbstoff|Il succo non contiene coloranti.
colosso|il|Koloss / Riese|È un colosso dell'industria.
coltellata|la|Messerstich|È stato ferito da una coltellata.
cometa|la|Komet|La stella cometa guida i Magi.
comodità|la|Bequemlichkeit / Komfort|La casa ha tutte le comodità.
complotto|il|Verschwörung|Crede che sia un complotto.
conca|la|Mulde / Becken|Il paese si trova in una conca.
congiura|la|Verschwörung|La congiura contro Cesare.
consonante|la|Konsonant|La "b" è una consonante.
contentezza|la|Zufriedenheit / Freude|Salta dalla contentezza.
contrabbando|il|Schmuggel|Le sigarette di contrabbando costano meno.
coriandolo|il|Konfetti / Koriander|A Carnevale si lanciano i coriandoli.
`,
"B1 – Alltag & Welt 3": `
correzione|la|Korrektur|La professoressa fa le correzioni in rosso.
crepaccio|il|Gletscherspalte|Attenzione ai crepacci sul ghiacciaio.
crocifisso|il|Kruzifix|In classe c'è un crocifisso.
cumulo|il|Haufen|Un cumulo di neve blocca la porta.
dedica|la|Widmung|Il libro ha una dedica per te.
delegazione|la|Delegation|Arriva una delegazione cinese.
delicatezza|la|Zartheit / Feingefühl|Tratta l'argomento con delicatezza.
delizia|la|Köstlichkeit / Wonne|Questa torta è una delizia!
dettato|il|Diktat|Domani facciamo il dettato.
diffidenza|la|Misstrauen|Mi guarda con diffidenza.
diluvio|il|Sintflut / Wolkenbruch|Fuori c'è il diluvio!
discordia|la|Zwietracht|Il denaro porta discordia.
disinteresse|il|Desinteresse|Mostra disinteresse per la politica.
dispari||ungerade|Tre è un numero dispari.
dispensa|la|Vorratskammer / Skript|La pasta è in dispensa.
dissenso|il|Widerspruch / Dissens|C'è dissenso nel partito.
distintivo|il|Abzeichen|Il poliziotto mostra il distintivo.
distrazione|la|Unachtsamkeit / Ablenkung|Un attimo di distrazione e ho sbagliato.
disubbidienza|la|Ungehorsam|La disubbidienza ha le sue conseguenze.
doppione|il|Duplikat|Ho un doppione di questa figurina.
elemosina|l'|Almosen|Dà l'elemosina al mendicante.
emigrazione|l'|Auswanderung|L'emigrazione italiana in Germania iniziò negli anni Cinquanta.
enciclopedia|l'|Enzyklopädie|Cerca la parola nell'enciclopedia.
equipaggio|l'|Besatzung|L'equipaggio saluta i passeggeri.
ergastolo|l'|lebenslange Haft|È stato condannato all'ergastolo.
eroina|l'|Heldin / Heroin|È l'eroina del romanzo.
esagerazione|l'|Übertreibung|Non è un'esagerazione!
esagono|l'|Sechseck|Le celle dell'alveare sono esagoni.
esaltazione|l'|Begeisterung / Verherrlichung|C'è esaltazione tra i tifosi.
esca|l'|Köder|Il pescatore mette l'esca sull'amo.
esclamazione|l'|Ausruf|"Che bello!" è un'esclamazione.
esilio|l'|Exil|Dante morì in esilio.
Ferragosto|il|Mariä Himmelfahrt (15. August)|A Ferragosto le città sono vuote.
acquarello|l'|Aquarell|Dipinge acquarelli di paesaggi.
acquasanta|l'|Weihwasser|All'ingresso della chiesa c'è l'acquasanta.
corazza|la|Panzer / Rüstung|La tartaruga ha una corazza.
elmo|l'|Helm (Ritter)|Il cavaliere indossa l'elmo.
cappa|la|Dunstabzugshaube / Umhang|Accendi la cappa quando cucini.
`,
"B1 – Länder & Regionen 2": `
abruzzese||aus den Abruzzen|Gli arrosticini sono un piatto abruzzese.
calabrese||kalabrisch|Il peperoncino calabrese è piccante.
emiliano||emilianisch|La cucina emiliana è ricca.
altoatesino||Südtiroler|Lo speck è un prodotto altoatesino.
adriatico||adriatisch|Rimini è sul mare Adriatico.
atlantico||atlantisch|L'oceano Atlantico separa Europa e America.
antartico||antarktisch|Il ghiaccio antartico si scioglie.
artico||arktisch|L'orso polare vive nell'Artico.
appenninico||Apenninen-|È un paesino appenninico.
algerino||algerisch / Algerier|Il mio vicino è algerino.
australiano||australisch / Australier|Il canguro è un animale australiano.
belga||belgisch / Belgier|Le patatine belghe sono famose.
bosniaco||bosnisch / Bosnier|Ha una collega bosniaca.
bulgaro||bulgarisch / Bulgare|Lo yogurt bulgaro è denso.
canadese||kanadisch / Kanadier / Zweimannzelt|Dormiamo in una canadese.
cileno||chilenisch / Chilene|Il vino cileno è buono.
cipriota||zypriotisch / Zypriot|Il mio amico è cipriota.
croato||kroatisch / Kroate|La costa croata è bellissima.
danese||dänisch / Däne|Il biscotto danese è al burro.
egiziano||ägyptisch / Ägypter|Le piramidi egiziane sono antichissime.
estone||estnisch / Este|Tallinn è la capitale estone.
eschimese||Eskimo / Inuit|L'eschimese vive nell'igloo.
centroamericano||mittelamerikanisch|Il caffè centroamericano è dolce.
democristiano||christdemokratisch|Il partito democristiano governò a lungo.
`
});
/* Nachträge Teil 1 */
add({
"A2 – Haushalt & Bad 2": `
bidè|il|Bidet|In Italia quasi ogni bagno ha il bidè.
batuffolo|il|Wattebausch|Togli il trucco con un batuffolo di cotone.
calamita|la|Magnet|Ho attaccato la foto al frigo con una calamita.
cappelliera|la|Hutschachtel|In soffitta c'è una vecchia cappelliera.
brillantina|la|Pomade / Glitzer|Si mette la brillantina nei capelli.
antirughe||Anti-Falten-|Usa una crema antirughe.
ammobiliare||möblieren|Hanno ammobiliato la casa in stile moderno.
`,
"A2 – Dinge, Spiel & Kleidung": `
bavaglio|il|Lätzchen / Knebel|Metti il bavaglio al bambino.
bomboniera|la|Gastgeschenk (Hochzeit)|Gli sposi regalano una bomboniera.
canestro|il|Korb (Basketball)|Ha fatto canestro da lontano.
campanella|la|Schulglocke / Klingel|Suona la campanella, la lezione è finita.
bocchino|il|Mundstück / Zigarettenspitze|Il bocchino della tromba è d'ottone.
`,
"A2 – Essen & Küche 3": `
buccia|la|Schale|Togli la buccia alla mela.
bancarella|la|Marktstand|Al mercato ci sono tante bancarelle.
`,
"B1 – Körper & Gesundheit 3": `
barella|la|Trage|Portano il ferito in barella.
clistere|il|Einlauf|Il medico consiglia un clistere.
colera|il|Cholera|Nell'Ottocento il colera uccise molte persone.
abortire||abtreiben / eine Fehlgeburt haben|Purtroppo ha abortito al terzo mese.
`,
"B1 – Alltag & Welt 3": `
ascia|l'|Axt|Il boscaiolo usa l'ascia.
avviamento|l'|Start / Einführung|L'avviamento della macchina è difficile col freddo.
ammasso|l'|Haufen / Masse|Un ammasso di rottami.
baracca|la|Baracke / Bude|Vivono in una baracca di legno.
bossolo|il|Patronenhülse|La polizia trova un bossolo per terra.
calcinaccio|il|Bauschutt|Ci sono calcinacci dappertutto.
cancellatura|la|Durchstreichung|Il compito è pieno di cancellature.
cantilena|la|Singsang / Leier|È sempre la stessa cantilena.
carcassa|la|Gerippe / Wrack|La carcassa della macchina è in un campo.
catasta|la|Stapel|C'è una catasta di legna in cortile.
coccola|la|Streicheleinheit / Kuscheln|Il gatto vuole le coccole.
corazzata|la|Panzerschiff|La corazzata entra nel porto.
corazziere|il|Kürassier (Präsidentengarde)|I corazzieri sono le guardie del Presidente.
canaglia|la|Schurke / Gesindel|Quella canaglia mi ha imbrogliato!
`
});
})();

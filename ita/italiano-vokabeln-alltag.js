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

/* ---------- Teil 2 (e bis p) ---------- */
add({
"A2 – Essen & Küche 4": `
focaccia|la|Focaccia (Fladenbrot)|La focaccia genovese è unta e salata.
filetto|il|Filet|Prendo un filetto al pepe verde.
finocchio|il|Fenchel|L'insalata di finocchi e arance è fresca.
formaggino|il|Schmelzkäse|Il bambino mangia un formaggino.
frittata|la|Omelett|Facciamo una frittata con le zucchine.
fritto|il|Frittiertes / frittiert|Prendiamo un fritto misto di pesce.
galletta|la|Zwieback / Reiswaffel|Mangio una galletta di riso.
gassosa|la|Zitronenlimonade|Nonno beve il vino con la gassosa.
gelatina|la|Gelee / Gelatine|La gelatina di frutta piace ai bambini.
ghiacciolo|il|Wassereis|D'estate compro un ghiacciolo al limone.
giardiniera|la|eingelegtes Gemüse|Serviamo il bollito con la giardiniera.
gorgonzola|il|Gorgonzola|Gli gnocchi al gorgonzola sono cremosi.
grana|il|Grana (Hartkäse)|Grattugia un po' di grana sulla pasta.
grappa|la|Grappa|Dopo cena beviamo una grappa.
grattugiato||gerieben|Vuoi il formaggio grattugiato?
granturco|il|Mais|Il granturco serve per la polenta.
guanciale|il|Backenspeck / Kopfkissen|La carbonara si fa con il guanciale.
gustoso||schmackhaft|È un piatto semplice ma gustoso.
infuso|l'|Aufguss / Kräutertee|Bevo un infuso di menta.
lardo|il|Speck (fett)|Il lardo di Colonnata è famoso.
legume|il|Hülsenfrucht|Ceci e lenticchie sono legumi.
lessare||kochen (in Wasser)|Lessa le patate per venti minuti.
limonata|la|Zitronenlimonade|Una limonata fresca, per favore.
liquore|il|Likör|Il limoncello è un liquore al limone.
lonza|la|Lende (Schwein)|Cuociamo la lonza al forno.
maccherone|il|Makkaroni|I maccheroni al ragù sono un classico.
macedonia|la|Obstsalat|Per dessert c'è la macedonia.
macinare||mahlen|Macina il caffè fresco.
maionese|la|Mayonnaise|Le patatine con la maionese.
mandarino|il|Mandarine|A Natale mangiamo i mandarini.
mascarpone|il|Mascarpone|Il tiramisù si fa con il mascarpone.
melagrana|la|Granatapfel|La melagrana ha tanti chicchi rossi.
merendina|la|Snack (Gebäck)|A scuola porto una merendina.
merluzzo|il|Kabeljau|Il merluzzo fritto è buono.
minestrone|il|Gemüsesuppe|D'inverno mangio il minestrone.
mortadella|la|Mortadella|Un panino con la mortadella!
mostarda|la|Senffrüchte|La mostarda di Cremona è piccante e dolce.
nocciolina|la|Erdnuss|Al bar ci danno le noccioline.
oliera|l'|Öl- und Essigständer|Passami l'oliera, per favore.
origano|l'|Oregano|Metti l'origano sulla pizza.
`,
"A2 – Essen & Küche 5": `
ortaggio|l'|Gemüse(sorte)|Al mercato compro ortaggi freschi.
orzo|l'|Gerste / Malzkaffee|Bevo un caffè d'orzo.
ostrica|l'|Auster|Le ostriche si mangiano crude.
pancarrè|il|Toastbrot|Il toast si fa con il pancarrè.
pancetta|la|Bauchspeck|Rosolo la pancetta in padella.
pandoro|il|Pandoro (Weihnachtskuchen)|A Natale mangiamo il pandoro.
panettone|il|Panettone|Il panettone milanese ha l'uvetta.
panzerotto|il|frittierte Teigtasche|In Puglia si mangiano i panzerotti.
pappa|la|Brei|La pappa del bambino è pronta.
passata|la|passierte Tomaten|Compra una bottiglia di passata.
pasticcino|il|Törtchen|La domenica compriamo i pasticcini.
pastina|la|kleine Suppennudeln|Quando sono malato mangio la pastina in brodo.
patè|il|Pastete|Il patè di olive è buono sul pane.
pecorino|il|Schafskäse|Il pecorino romano è salato.
pelato|il|geschälte Tomate / kahl|Usa i pelati per il sugo.
pesto|il|Pesto|Il pesto alla genovese ha basilico e pinoli.
piadina|la|Piadina (Fladenbrot)|La piadina romagnola con prosciutto.
pinolo|il|Pinienkern|Aggiungi i pinoli all'insalata.
pistacchio|il|Pistazie|Il gelato al pistacchio è verde.
pizzetta|la|kleine Pizza|Alla festa ci sono le pizzette.
polenta|la|Polenta|La polenta con i funghi è buonissima.
polpo|il|Krake|L'insalata di polpo è un antipasto.
polipo|il|Krake / Polyp|Il polipo ha otto tentacoli.
polpa|la|Fruchtfleisch / Fleisch|La polpa della pesca è succosa.
polpetta|la|Frikadelle / Hackbällchen|Le polpette al sugo sono della nonna.
pollame|il|Geflügel|Il macellaio vende pollame.
pompelmo|il|Grapefruit|Il succo di pompelmo è amaro.
posata|la|Besteck(teil)|Metti le posate sul tavolo.
primizia|la|Frühgemüse / Frühobst|Le fragole di aprile sono una primizia.
impastare||kneten|Impasta la farina con l'acqua.
imbottigliare||abfüllen|Il vino viene imbottigliato in cantina.
inzuppare||eintunken / durchnässen|Inzuppo il biscotto nel latte.
latteria|la|Milchgeschäft / Molkerei|Compro il burro in latteria.
fornaio|il|Bäcker|Il fornaio inizia a lavorare alle tre.
panettiere|il|Bäcker|Il panettiere vende pane caldo.
pasticcere|il|Konditor|Il pasticcere prepara la torta nuziale.
pescheria|la|Fischgeschäft|Compro il pesce in pescheria.
filante||Fäden ziehend (Käse)|La mozzarella è filante.
melograno|il|Granatapfel(baum)|Nel giardino c'è un melograno.
`,
"A2 – Tiere 3": `
fagiano|il|Fasan|Il cacciatore ha preso un fagiano.
falco|il|Falke|Il falco vola alto.
felino|il|Katzentier / katzenhaft|Il leone è un felino.
foca|la|Robbe|Le foche vivono nei mari freddi.
fringuello|il|Fink|Il fringuello canta in primavera.
gazza|la|Elster|La gazza ruba gli oggetti lucidi.
ghiro|il|Siebenschläfer|Dormo come un ghiro.
giaguaro|il|Jaguar|Il giaguaro vive nella foresta.
gorilla|il|Gorilla|Il gorilla è molto forte.
granchio|il|Krebs / Krabbe|Sulla spiaggia c'è un granchio.
gufo|il|Eule / Uhu|Il gufo esce di notte.
gru|la|Kranich / Kran|La gru solleva i mattoni.
guaire||jaulen|Il cane guaisce dietro la porta.
guinzaglio|il|Hundeleine|Tieni il cane al guinzaglio!
ippopotamo|l'|Nilpferd|L'ippopotamo sta nel fiume.
lepre|la|Hase|La lepre corre velocissima.
leonessa|la|Löwin|La leonessa caccia per il branco.
leopardo|il|Leopard|Il leopardo ha la pelle a macchie.
lucciola|la|Glühwürmchen|D'estate si vedono le lucciole.
lucertola|la|Eidechse|Una lucertola prende il sole sul muro.
lumaca|la|Schnecke|Sei lento come una lumaca!
mammifero|il|Säugetier|La balena è un mammifero.
merlo|il|Amsel|Il merlo canta sul ramo.
micio|il|Mieze / Kätzchen|Vieni qui, micio!
mollusco|il|Weichtier|La cozza è un mollusco.
muggire||muhen|La mucca muggisce nella stalla.
muggito|il|Muhen|Si sente il muggito delle mucche.
mugolare||winseln|Il cane mugola di notte.
mungere||melken|Il contadino munge le mucche.
ovile|l'|Schafstall|Le pecore tornano all'ovile.
ovino||Schaf-|La carne ovina è tipica della Sardegna.
panda|il|Panda|Il panda mangia bambù.
pantera|la|Panther|La pantera nera è elegante.
papera|la|junge Ente / Versprecher|Il giornalista ha fatto una papera in diretta.
passero|il|Spatz|Un passero mangia le briciole.
pavone|il|Pfau|Il pavone apre la coda.
pettirosso|il|Rotkehlchen|Il pettirosso ha il petto arancione.
pidocchio|il|Laus|In classe ci sono i pidocchi.
pinguino|il|Pinguin|I pinguini non sanno volare.
pinna|la|Flosse|Al mare metto le pinne.
pipistrello|il|Fledermaus|Il pipistrello vola di notte.
pollaio|il|Hühnerstall|Le galline sono nel pollaio.
mangime|il|Futter|Compro il mangime per i pesci.
morso|il|Biss|Il morso del cane fa male.
morsicare||beißen|Il cane ha morsicato il postino.
pascolare||weiden|Le mucche pascolano nel prato.
muta|la|Meute / Neoprenanzug / Häutung|Il sub indossa la muta.
fiuto|il|Spürsinn / Nase|Il cane ha un ottimo fiuto.
fauna|la|Tierwelt|La fauna delle Alpi è ricca.
`,
"B1 – Pflanzen & Natur 2": `
fieno|il|Heu|Le mucche mangiano il fieno.
flora|la|Pflanzenwelt|La flora mediterranea è varia.
frumento|il|Weizen|Il frumento serve per il pane.
garofano|il|Nelke|Il garofano rosso è un simbolo.
gelsomino|il|Jasmin|Il gelsomino profuma di sera.
ghianda|la|Eichel|Lo scoiattolo raccoglie le ghiande.
giungla|la|Dschungel|Nella giungla vivono le scimmie.
glicine|il|Glyzinie|Il glicine copre il muro di viola.
lavanda|la|Lavendel|I campi di lavanda sono viola.
leccio|il|Steineiche|Il leccio è sempreverde.
legna|la|Brennholz|Metti la legna nel camino.
malva|la|Malve|La tisana alla malva fa bene alla gola.
mimosa|la|Mimose|L'8 marzo si regala la mimosa.
muschio|il|Moos|Il muschio cresce sulle pietre.
ortica|l'|Brennnessel|Non toccare le ortiche!
ortensia|l'|Hortensie|Le ortensie sono blu e rosa.
palma|la|Palme|Sulla spiaggia ci sono le palme.
papavero|il|Mohn|Nel campo ci sono papaveri rossi.
pannocchia|la|Maiskolben|Arrostiamo le pannocchie.
petalo|il|Blütenblatt|La rosa perde i petali.
pigna|la|Tannenzapfen|Raccogliamo le pigne nel bosco.
pineta|la|Pinienwald|Passeggiamo nella pineta vicino al mare.
pioppo|il|Pappel|I pioppi crescono lungo il fiume.
platano|il|Platane|Il viale è pieno di platani.
primula|la|Primel|La primula fiorisce a marzo.
potare||beschneiden (Pflanzen)|In inverno potiamo gli alberi.
mietere||mähen / ernten|A luglio si miete il grano.
fecondare||befruchten|Le api fecondano i fiori.
fertilizzante|il|Dünger|Usa un fertilizzante naturale.
granaio|il|Kornspeicher|Il grano è nel granaio.
pagliaio|il|Heuhaufen|Cercare un ago in un pagliaio.
podere|il|Gut / Bauernhof|Hanno un podere in Toscana.
palude|la|Sumpf|La palude è piena di zanzare.
penisola|la|Halbinsel|L'Italia è una penisola.
lava|la|Lava|La lava scende dal vulcano.
lido|il|Strand / Strandbad|Andiamo al lido.
molo|il|Mole / Pier|Le barche sono legate al molo.
pozzanghera|la|Pfütze|Il bambino salta nelle pozzanghere.
gelo|il|Frost|Il gelo ha rovinato le piante.
maltempo|il|Unwetter / schlechtes Wetter|Per il maltempo il traghetto non parte.
piovoso||regnerisch|Novembre è un mese piovoso.
polveroso||staubig|La strada è polverosa.
fangoso||schlammig|Il sentiero è fangoso.
pianeggiante||flach / eben|La zona è pianeggiante.
fiorito||blühend|Il balcone è fiorito.
piena|la|Hochwasser|Il fiume è in piena.
pergola|la|Pergola / Laube|Mangiamo sotto la pergola.
messe|la|Ernte|La messe è abbondante quest'anno.
ozono|l'|Ozon|Il buco nell'ozono preoccupa gli scienziati.
orma|l'|Fußspur|Ci sono orme di animali nella neve.
`
});

add({
"A2 – Haushalt & Bad 3": `
federa|la|Kissenbezug|Cambia la federa del cuscino.
fermaglio|il|Spange / Klammer|Ha un fermaglio nei capelli.
fiammifero|il|Streichholz|Accendi il fornello con un fiammifero.
fodera|la|Futter (Kleidung) / Bezug|La giacca ha la fodera di seta.
fogna|la|Kanalisation|L'acqua va nella fogna.
fontanella|la|Trinkbrunnen|A Roma ci sono tante fontanelle.
forcina|la|Haarnadel|Ferma i capelli con una forcina.
giravite|il|Schraubenzieher|Mi serve un giravite piccolo.
gancio|il|Haken|Appendi lo strofinaccio al gancio.
griglia|la|Grill / Gitter|Cuociamo le verdure sulla griglia.
guardaroba|il|Kleiderschrank / Garderobe|Lascia il cappotto al guardaroba.
lampadario|il|Kronleuchter / Deckenlampe|Il lampadario è di vetro di Murano.
lavabo|il|Waschbecken|Il lavabo del bagno è nuovo.
lavandino|il|Spülbecken / Waschbecken|I piatti sono nel lavandino.
lavapiatti|la|Spülmaschine|Metti i bicchieri nella lavapiatti.
lavello|il|Spüle|Il lavello è pieno di piatti.
lucidare||polieren|Lucida le scarpe prima della festa.
mobilio|il|Möbel (Gesamtheit)|Il mobilio è antico.
molla|la|Feder (Metall)|La molla del materasso è rotta.
multipresa|la|Mehrfachsteckdose|Collega tutto alla multipresa.
oliare||ölen|Olia la catena della bici.
paletta|la|Kehrschaufel / Kelle|Prendi scopa e paletta.
panca|la|Bank|Ci sediamo sulla panca.
paralume|il|Lampenschirm|Il paralume è giallo.
paravento|il|Paravent / Wandschirm|Si cambia dietro il paravento.
pattumiera|la|Mülleimer|Butta la carta nella pattumiera.
persiana|la|Fensterladen|Chiudi le persiane, c'è troppo sole.
pianoterra|il|Erdgeschoss|Abito al pianoterra.
piastra|la|Herdplatte / Glätteisen|Accendi la piastra a induzione.
piumino|il|Daunendecke / Daunenjacke|D'inverno dormo con il piumino.
poggiapiedi|il|Fußstütze|Metti i piedi sul poggiapiedi.
pomello|il|Knauf|Il pomello della porta è d'ottone.
portacenere|il|Aschenbecher|Il portacenere è pieno.
portachiavi|il|Schlüsselanhänger|Mi hanno regalato un portachiavi.
portafinestra|la|Fenstertür|La portafinestra dà sul balcone.
portaombrelli|il|Schirmständer|Metti l'ombrello nel portaombrelli.
portamonete|il|Geldbörse (für Münzen)|Il portamonete è nella borsa.
portineria|la|Pförtnerloge|Il pacco è in portineria.
prolunga|la|Verlängerungskabel|Serve una prolunga per la lampada.
palazzina|la|kleines Wohnhaus|Abitano in una palazzina di tre piani.
imbuto|l'|Trichter|Versa l'olio con l'imbuto.
insetticida|l'|Insektenspray|Spruzza l'insetticida contro le zanzare.
guarnizione|la|Dichtung / Garnierung|La guarnizione del rubinetto perde.
fasciatoio|il|Wickeltisch|Il fasciatoio è in bagno.
posacenere|il|Aschenbecher|C'è un posacenere sul tavolo?
`,
"A2 – Kleidung & Spiel 2": `
fibbia|la|Schnalle|La cintura ha una fibbia d'argento.
fiocco|il|Schleife / Flocke|Il regalo ha un fiocco rosso.
frangia|la|Pony (Frisur) / Fransen|Si è tagliata la frangia.
giubba|la|Jacke / Uniformjacke|Il soldato indossa la giubba.
grembiule|il|Schürze / Kittel|I bambini portano il grembiule a scuola.
impermeabile|l'|Regenmantel / wasserdicht|Prendi l'impermeabile, piove.
indumento|l'|Kleidungsstück|Porta indumenti caldi.
infradito|l'|Flip-Flop|Al mare metto le infradito.
minigonna|la|Minirock|Indossa una minigonna nera.
mocassino|il|Mokassin|Porta mocassini marroni.
mutandina|la|Slip / Höschen|Ha comprato mutandine di cotone.
orecchino|l'|Ohrring|Ha perso un orecchino.
occhiello|l'|Knopfloch|Metti un fiore all'occhiello.
panciotto|il|Weste|Lo sposo indossa il panciotto.
pantofola|la|Hausschuh|Metto le pantofole a casa.
parrucca|la|Perücke|A Carnevale porta una parrucca blu.
polsino|il|Manschette|La camicia ha i polsini bianchi.
pettinatura|la|Frisur|Che bella pettinatura!
figurina|la|Sammelbild|I bambini scambiano le figurine dei calciatori.
filastrocca|la|Kinderreim|La maestra insegna una filastrocca.
fionda|la|Steinschleuder|Il bambino gioca con la fionda.
girotondo|il|Ringelreihen|I bambini fanno il girotondo.
gomitolo|il|Wollknäuel|Il gatto gioca con il gomitolo.
indovinello|l'|Rätsel|Ti faccio un indovinello.
labirinto|il|Labyrinth|Ci siamo persi nel labirinto.
marionetta|la|Marionette|Lo spettacolo di marionette piace ai bambini.
nascondino|il|Versteckspiel|Giochiamo a nascondino!
pallanuoto|la|Wasserball|L'Italia è forte nella pallanuoto.
palloncino|il|Luftballon|Il palloncino vola via.
pattinaggio|il|Eislaufen / Rollschuhlaufen|Facciamo pattinaggio sul ghiaccio.
pattino|il|Schlittschuh / Rollschuh|Ho comprato pattini nuovi.
petardo|il|Böller|A Capodanno si sparano i petardi.
giornalino|il|Comicheft / Schülerzeitung|Leggo un giornalino di fumetti.
gnomo|lo|Gnom / Zwerg|Nel giardino c'è uno gnomo di ceramica.
fantoccio|il|Puppe / Strohmann|Bruciano un fantoccio a fine Carnevale.
mummia|la|Mumie|Al museo egizio ci sono le mummie.
pallottoliere|il|Rechenschieber (Kugel)|Il bambino conta con il pallottoliere.
copertina|la|Decke (klein)|Il neonato dorme sotto una copertina.
`,
"B1 – Berufe & Rollen 2": `
fabbro|il|Schmied / Schlosser|Il fabbro ripara il cancello.
falegname|il|Tischler|Il falegname fa un tavolo di legno.
ferroviere|il|Bahnangestellter|Mio nonno era ferroviere.
fantino|il|Jockey|Il fantino vince il Palio.
geometra|il|Bautechniker / Vermesser|Il geometra misura il terreno.
geografo|il|Geograf|Il geografo studia le montagne.
grossista|il|Großhändler|Compriamo dal grossista.
guidatore|il|Fahrer|Il guidatore ha bevuto troppo.
imbianchino|l'|Maler (Anstreicher)|L'imbianchino dipinge le pareti.
istruttore|l'|Ausbilder / Trainer|L'istruttore di nuoto è paziente.
libraio|il|Buchhändler|Il libraio mi consiglia un romanzo.
macchinista|il|Lokführer|Il macchinista guida il treno.
manovale|il|Hilfsarbeiter|Il manovale porta i mattoni.
massaia|la|Hausfrau|La massaia fa la spesa al mercato.
metalmeccanico|il|Metallarbeiter|I metalmeccanici sono in sciopero.
mugnaio|il|Müller|Il mugnaio macina il grano.
muratore|il|Maurer|Il muratore costruisce il muro.
negoziante|il|Ladenbesitzer|Il negoziante abbassa la saracinesca.
oculista|l'|Augenarzt|Vado dall'oculista per gli occhiali.
orefice|l'|Goldschmied|L'orefice ripara la collana.
orologiaio|l'|Uhrmacher|Porto l'orologio dall'orologiaio.
ortolano|l'|Gemüsehändler|L'ortolano vende verdura fresca.
oste|l'|Wirt|L'oste ci porta il vino della casa.
palombaro|il|Taucher|Il palombaro scende in fondo al mare.
paracadutista|il|Fallschirmspringer|Il paracadutista atterra nel prato.
parroco|il|Pfarrer|Il parroco celebra la messa.
posteggiatore|il|Parkwächter|Il posteggiatore ci trova un posto.
madrina|la|Patin|La madrina regala una collanina.
mendicante|il|Bettler|Un mendicante chiede qualche moneta.
lattante|il|Säugling|Il lattante dorme tutto il giorno.
maggiorenne||volljährig|In Italia si diventa maggiorenni a diciotto anni.
pellegrino|il|Pilger|I pellegrini camminano verso Santiago.
peccatore|il|Sünder|Siamo tutti peccatori.
monaca|la|Nonne|La monaca vive in convento.
monello|il|Lausbub|Quel monello ha rotto il vetro.
furfante|il|Gauner|Quel furfante mi ha imbrogliato.
galeotto|il|Sträfling|Il galeotto è scappato.
ostaggio|l'|Geisel|I rapinatori prendono un ostaggio.
mutilato|il|Versehrter / verstümmelt|È un mutilato di guerra.
oppressore|l'|Unterdrücker|Il popolo si ribella all'oppressore.
maniaco|il|Wahnsinniger / besessen|È un maniaco della pulizia.
pettegolo||tratschsüchtig / Klatschbase|La vicina è pettegola.
prepotente||herrschsüchtig / Tyrann|Non fare il prepotente!
mancino||Linkshänder|Mio figlio è mancino.
pellerossa|il|Indianer (veraltet)|Nei vecchi film ci sono i pellerossa.
`,
"B1 – Verkehr & Technik 3": `
fanale|il|Scheinwerfer / Laterne|Il fanale posteriore è rotto.
gasolio|il|Diesel|Questa macchina va a gasolio.
locomotiva|la|Lokomotive|La vecchia locomotiva è a vapore.
missile|il|Rakete|Il missile parte nello spazio.
mitragliatrice|la|Maschinengewehr|Nel film si sente una mitragliatrice.
motociclismo|il|Motorradsport|Il motociclismo è popolare in Italia.
motociclista|il|Motorradfahrer|Il motociclista indossa il casco.
motoscafo|il|Motorboot|Andiamo a Capri in motoscafo.
navicella|la|Raumkapsel / Gondel|La navicella torna sulla Terra.
oblò|l'|Bullauge|Dall'oblò si vede il mare.
paracadute|il|Fallschirm|Si è lanciato con il paracadute.
parafulmine|il|Blitzableiter|Il campanile ha un parafulmine.
parabrezza|il|Windschutzscheibe|Il parabrezza è sporco.
paraurti|il|Stoßstange|Ho ammaccato il paraurti.
pedale|il|Pedal|Il pedale del freno è duro.
pedalare||Rad fahren / treten|Pedalo fino al lago.
pneumatico|lo|Reifen|Cambiamo gli pneumatici invernali.
portabagagli|il|Gepäckträger / Kofferraum|Metti la valigia nel portabagagli.
portaerei|la|Flugzeugträger|La portaerei è enorme.
petroliera|la|Öltanker|Una petroliera è affondata.
peschereccio|il|Fischerboot|Il peschereccio torna in porto.
lamiera|la|Blech|Il tetto è di lamiera.
lancetta|la|Zeiger (Uhr)|La lancetta segna le tre.
lanterna|la|Laterne|La lanterna illumina il sentiero.
ottone|l'|Messing|La maniglia è d'ottone.
platino|il|Platin|L'anello è di platino.
pendolo|il|Pendel|L'orologio a pendolo è antico.
fornace|la|Brennofen|I mattoni cuociono nella fornace.
fluoro|il|Fluor|Il dentifricio contiene fluoro.
gettone|il|Spielmarke / Chip|Ci vuole un gettone per il carrello.
evidenziatore|l'|Textmarker|Sottolinea con l'evidenziatore giallo.
lapis|il|Bleistift (veraltet)|Scrive a lapis.
pennarello|il|Filzstift|Colora con i pennarelli.
manganello|il|Schlagstock|Il poliziotto ha un manganello.
pallottola|la|Kugel (Waffe)|La pallottola ha colpito il muro.
piccone|il|Spitzhacke|Il minatore usa il piccone.
pialla|la|Hobel|Il falegname usa la pialla.
pinza|la|Zange|Passami le pinze.
pinzetta|la|Pinzette|Tolgo la spina con la pinzetta.
lima|la|Feile|Si lima le unghie con la lima.
limare||feilen|Lima le unghie.
murare||zumauern|Hanno murato la vecchia porta.
intonaco|l'|Putz|L'intonaco si stacca dal muro.
fune|la|Seil|La funivia è appesa a una fune.
frusta|la|Peitsche / Schneebesen|Monta le uova con la frusta.
naufragio|il|Schiffbruch|Il naufragio del Titanic è famoso.
navale||Schiffs- / Marine-|È un ingegnere navale.
`,
"B1 – Körper & Gesundheit 4": `
fiala|la|Ampulle|Prendi una fiala al giorno.
forfora|la|Schuppen (Haar)|Uso uno shampoo contro la forfora.
fossetta|la|Grübchen|Ha le fossette quando ride.
ganascia|la|Kiefer / Backe|Mi fa male la ganascia.
gargarismo|il|Gurgeln|Fai i gargarismi con acqua e sale.
gengiva|la|Zahnfleisch|Mi sanguinano le gengive.
indigestione|l'|Magenverstimmung|Ho fatto indigestione di dolci.
ingessare||eingipsen|Gli hanno ingessato il braccio.
intestino|l'|Darm|L'intestino è lungo diversi metri.
lebbra|la|Lepra|La lebbra oggi si può curare.
lentiggine|la|Sommersprosse|Ha il viso pieno di lentiggini.
mammella|la|Brust / Euter|Il cancro alla mammella si può prevenire.
mestruazione|la|Menstruation|Ha mal di pancia per le mestruazioni.
mignolo|il|kleiner Finger / kleiner Zeh|Ho sbattuto il mignolo del piede.
occhiaia|l'|Augenring|Ho le occhiaie perché ho dormito poco.
ombelico|l'|Bauchnabel|Ha un piercing all'ombelico.
palato|il|Gaumen|Il vino è morbido al palato.
palpebra|la|Augenlid|Ho la palpebra gonfia.
paralisi|la|Lähmung|Dopo l'ictus ha una paralisi.
paralizzato||gelähmt|È rimasto paralizzato dalla paura.
peste|la|Pest / Plage|La peste del 1630 colpì Milano.
piaga|la|Wunde / Plage|La disoccupazione è una piaga sociale.
pipì|la|Pipi|Il bambino deve fare la pipì.
pisolino|il|Nickerchen|Dopo pranzo faccio un pisolino.
polpastrello|il|Fingerkuppe|Mi sono tagliato il polpastrello.
massaggio|il|Massage|Ho bisogno di un massaggio.
medicare||verarzten|L'infermiere medica la ferita.
incurabile||unheilbar|È una malattia incurabile.
omogeneizzato|l'|Babygläschen|Il bambino mangia l'omogeneizzato alla mela.
pomata|la|Salbe|Metti la pomata sul livido.
pastiglia|la|Tablette|Prendi una pastiglia per la gola.
pasticca|la|Pastille / Tablette|Ho preso una pasticca per il mal di testa.
lozione|la|Lotion|Uso una lozione dopo il sole.
lacca|la|Haarspray / Lack|Si mette la lacca sui capelli.
lametta|la|Rasierklinge|Cambia la lametta del rasoio.
ovatta|l'|Watte|Pulisci con un po' d'ovatta.
garza|la|Mullbinde|Copri la ferita con una garza.
profilattico|il|Kondom / vorbeugend|Il profilattico protegge dalle malattie.
pannolino|il|Windel|Cambia il pannolino al bambino.
pannolone|il|Erwachsenenwindel|La nonna usa il pannolone.
`
});

add({
"B1 – Charakter & Eigenschaften 2": `
fiducioso||zuversichtlich|Sono fiducioso, andrà bene.
freddezza|la|Kälte / Kühle|Mi ha salutato con freddezza.
garbo|il|Anstand / Takt|Parla sempre con garbo.
genuino||echt / natürlich|Sono prodotti genuini della campagna.
gioioso||fröhlich|È un bambino gioioso.
grazioso||hübsch / niedlich|Che casetta graziosa!
immaturo||unreif|È ancora immaturo per la sua età.
impaziente||ungeduldig|Sono impaziente di partire.
impreciso||ungenau|La traduzione è imprecisa.
imprudente||unvorsichtig|È stato imprudente guidare con la neve.
incivile||unzivilisiert / rücksichtslos|Buttare la carta per terra è incivile.
incompleto||unvollständig|Il modulo è incompleto.
inconsolabile||untröstlich|La bambina è inconsolabile.
incontentabile||nie zufrieden|Il mio capo è incontentabile.
incorreggibile||unverbesserlich|Sei incorreggibile!
indescrivibile||unbeschreiblich|La vista è indescrivibile.
indifeso||wehrlos|Il cucciolo è indifeso.
indisciplinato||undiszipliniert|La classe è indisciplinata.
inefficace||unwirksam|La medicina è inefficace.
inerte||reglos / träge|Il corpo giaceva inerte.
inesperto||unerfahren|È un guidatore inesperto.
infame||niederträchtig / Verräter|È un'accusa infame.
infedele||untreu|Il marito è infedele.
inseparabile||unzertrennlich|Sono amici inseparabili.
invidioso||neidisch|Non essere invidioso.
invincibile||unbesiegbar|Si sente invincibile.
irriconoscibile||nicht wiederzuerkennen|Con la barba sei irriconoscibile!
istintivo||instinktiv|È stata una reazione istintiva.
istruttivo||lehrreich|È un documentario istruttivo.
laborioso||fleißig / mühsam|È un popolo laborioso.
logoro||abgenutzt|Il cappotto è logoro.
lucente||glänzend|Ha i capelli lucenti.
mascherato||maskiert / verkleidet|Andiamo alla festa mascherati.
nocivo||schädlich|Il fumo è nocivo alla salute.
osceno||obszön|Ha fatto un gesto osceno.
ostinato||stur / hartnäckig|È ostinato come un mulo.
ovale||oval|Il tavolo è ovale.
pauroso||ängstlich / furchterregend|Il mio cane è pauroso.
peloso||haarig|Il cane è molto peloso.
piccino||klein / Kleiner|Il piccino dorme.
pieghevole||faltbar|Ho una bici pieghevole.
pregiato||wertvoll / edel|È un vino pregiato.
profumato||duftend|Il bucato è profumato.
progressista||fortschrittlich|Ha idee progressiste.
malizia|la|Bosheit / List|Lo ha detto senza malizia.
modestia|la|Bescheidenheit|Parla con modestia dei suoi successi.
pigrizia|la|Faulheit|La pigrizia è il suo difetto.
maleducazione|la|Unhöflichkeit|Parlare con la bocca piena è maleducazione.
nervosismo|il|Nervosität|C'è nervosismo prima della partita.
inesperienza|l'|Unerfahrenheit|Ha sbagliato per inesperienza.
popolarità|la|Beliebtheit|La sua popolarità è in crescita.
ospitalità|l'|Gastfreundschaft|Grazie per l'ospitalità.
`,
"B1 – Verben 14": `
evaporare||verdunsten|L'acqua evapora al sole.
fiatare||atmen / einen Mucks machen|Non ha fiatato per tutta la sera.
foderare||füttern / einschlagen (Buch)|Fodero i libri di scuola.
galleggiare||schwimmen (an der Oberfläche)|Il legno galleggia.
gironzolare||herumschlendern|Gironzoliamo per il centro.
graffiare||kratzen|Il gatto mi ha graffiato.
imballare||verpacken|Imballiamo i piatti per il trasloco.
imbiancare||weißen / streichen|Imbianchiamo la cucina.
imbrogliare||betrügen|Il venditore ci ha imbrogliato.
imprigionare||einsperren|Lo hanno imprigionato per dieci anni.
incamminarsi||sich auf den Weg machen|Ci incamminiamo verso il rifugio.
incantare||verzaubern|La musica incanta il pubblico.
incartare||einpacken|Può incartarlo? È un regalo.
incatenare||anketten|Incatena la bici al palo.
inchiodare||festnageln / scharf bremsen|Ha inchiodato davanti al semaforo.
incitare||anfeuern|I tifosi incitano la squadra.
incoronare||krönen|Il papa incoronò Carlo Magno.
incrinare||einen Sprung bekommen / trüben|Il bicchiere si è incrinato.
indietreggiare||zurückweichen|Il cane indietreggia spaventato.
ingelosire||eifersüchtig machen|Vuole ingelosire la fidanzata.
ingrandire||vergrößern|Ingrandisci la foto.
innervosire||nervös machen|Il traffico mi innervosisce.
inquinare||verschmutzen|Le macchine inquinano l'aria.
insospettire||misstrauisch machen|Il suo silenzio mi insospettisce.
intasare||verstopfen|Il traffico intasa le strade.
intimidire||einschüchtern|Non farti intimidire!
impallidire||erblassen|Quando ha sentito la notizia è impallidito.
luccicare||glitzern|Il mare luccica al sole.
maltrattare||misshandeln|Non maltrattare gli animali!
marcire||verfaulen|La frutta marcisce al caldo.
modellare||formen / modellieren|Modella l'argilla con le mani.
multare||Bußgeld verhängen|Il vigile mi ha multato.
odorare||riechen|Il cane odora la mia mano.
ondeggiare||schwanken / wogen|Il grano ondeggia al vento.
padroneggiare||beherrschen|Padroneggia tre lingue.
parteggiare||Partei ergreifen|Parteggio per la squadra di casa.
pestare||zerstampfen / treten auf|Mi hai pestato il piede!
pitturare||streichen / malen|Pitturiamo la camera di azzurro.
pizzicare||kneifen / jucken|Il maglione di lana pizzica.
poggiare||stützen / liegen auf|Poggia la testa sul cuscino.
propagandare||Propaganda machen für|Il partito propaganda le sue idee.
prosciugare||trockenlegen|Il sole ha prosciugato il lago.
`,
"B1 – Alltag & Welt 4": `
ettaro|l'|Hektar|Il podere è di cinque ettari.
facilitazione|la|Erleichterung / Vergünstigung|Ci sono facilitazioni per gli studenti.
fanteria|la|Infanterie|Il nonno era in fanteria.
fessura|la|Spalt / Ritze|Entra aria dalla fessura.
fidanzamento|il|Verlobung|Festeggiamo il fidanzamento.
finimondo|il|Weltuntergang / Chaos|È successo il finimondo!
fracasso|il|Krach|Che fracasso fanno i vicini!
fruscio|il|Rascheln|Sento un fruscio tra le foglie.
geometria|la|Geometrie|La geometria non è il mio forte.
giretto|il|kleiner Rundgang|Facciamo un giretto in centro?
giuria|la|Jury|La giuria assegna il premio.
graffio|il|Kratzer|La macchina ha un graffio.
grinza|la|Falte|La camicia è piena di grinze.
imbroglio|l'|Betrug / Schwindel|È tutto un imbroglio!
incasso|l'|Einnahme|L'incasso della serata è buono.
insuccesso|l'|Misserfolg|Il film è stato un insuccesso.
larghezza|la|Breite|Qual è la larghezza della porta?
laccio|il|Schnürsenkel|Allaccia il laccio della scarpa.
malaugurio|il|böses Omen|Non dirlo, porta malaugurio!
malavita|la|Unterwelt|La malavita controlla il porto.
maltrattamento|il|Misshandlung|Il maltrattamento degli animali è reato.
massacro|il|Massaker|Il massacro è stato terribile.
merceria|la|Kurzwarenladen|Compro i bottoni in merceria.
meridione|il|Süden (Italiens)|Il meridione ha un clima caldo.
meridiano|il|Meridian / Längengrad|Il meridiano di Greenwich passa per Londra.
miscuglio|il|Gemisch|È un miscuglio di colori.
nascondiglio|il|Versteck|Il gatto ha un nascondiglio sotto il letto.
negazione|la|Verneinung|"Non" è una negazione.
novella|la|Novelle|Il Decameron contiene cento novelle.
obbiettivo|l'|Ziel / Objektiv|Il mio obbiettivo è imparare l'italiano.
ospizio|l'|Altersheim|La nonna vive in un ospizio.
padronato|il|Arbeitgeberschaft|Il padronato e i sindacati trattano.
parabola|la|Gleichnis / Parabel / Satellitenschüssel|Gesù racconta una parabola.
paraocchi|il|Scheuklappen|Ha i paraocchi, non vede altro.
pareggio|il|Unentschieden|La partita finisce in pareggio.
passeggio|il|Spaziergang / Promenade|La gente va a passeggio sul corso.
pasticcio|il|Durcheinander / Auflauf|Che pasticcio hai combinato!
peggioramento|il|Verschlechterung|C'è un peggioramento del tempo.
pelletteria|la|Lederwarengeschäft|In questa pelletteria vendono borse.
pentagono|il|Fünfeck|Disegna un pentagono.
parallelepipedo|il|Quader|La scatola è un parallelepipedo.
porcheria|la|Schweinerei / Mist|Non mangiare quella porcheria!
porcellana|la|Porzellan|Il servizio è di porcellana.
portafortuna|il|Glücksbringer|Il quadrifoglio è un portafortuna.
locanda|la|Gasthaus|Dormiamo in una vecchia locanda.
maiuscola|la|Großbuchstabe|I nomi si scrivono con la maiuscola.
'ndrangheta|la|'Ndrangheta (Mafia in Kalabrien)|La 'ndrangheta è un'organizzazione criminale.
feriale||Werktags-|L'orario feriale è diverso da quello festivo.
forestale||Forst-|La guardia forestale controlla il bosco.
fosforescente||phosphoreszierend|Le stelle fosforescenti brillano al buio.
illegittimo||unrechtmäßig / unehelich|È un figlio illegittimo.
letterale||wörtlich|È una traduzione letterale.
oppresso||unterdrückt|Il popolo oppresso chiede libertà.
oppressivo||drückend / unterdrückerisch|È un regime oppressivo.
perpendicolare||senkrecht|Le due linee sono perpendicolari.
penultimo||vorletzter|È il penultimo giorno di vacanza.
plurale|il|Plural|Qual è il plurale di "uovo"?
geometrico||geometrisch|È un disegno geometrico.
ionico||ionisch|La costa ionica della Calabria è bellissima.
numerazione|la|Nummerierung|Controlla la numerazione delle pagine.
`,
"B1 – Länder & Regionen 3": `
friulano||friaulisch|Il frico è un piatto friulano.
laziale||aus Latium|Roma è la città laziale più grande.
ligure||ligurisch|Il pesto è una salsa ligure.
lucano||aus der Basilikata|Matera è una città lucana.
marchigiano||aus den Marken|Le olive all'ascolana sono marchigiane.
molisano||aus Molise|Il Molise è piccolo, ma i molisani sono ospitali.
gallese||walisisch|Il drago è il simbolo gallese.
finlandese||finnisch / Finne|La sauna finlandese è caldissima.
islandese||isländisch / Isländer|I cavalli islandesi sono piccoli.
israeliano||israelisch / Israeli|Ha un collega israeliano.
lettone||lettisch / Lette|Riga è la capitale lettone.
libico||libysch / Libyer|Il deserto libico è immenso.
lituano||litauisch / Litauer|Vilnius è la capitale lituana.
lussemburghese||luxemburgisch|Il mio collega è lussemburghese.
macedone||mazedonisch|Il lago di Ocrida è macedone.
maltese||maltesisch / Malteser|Il maltese è una lingua particolare.
marocchino||marokkanisch / Marokkaner|Il tè marocchino è alla menta.
messicano||mexikanisch / Mexikaner|Il cibo messicano è piccante.
montenegrino||montenegrinisch|La costa montenegrina è bella.
norvegese||norwegisch / Norweger|I fiordi norvegesi sono spettacolari.
palestinese||palästinensisch / Palästinenser|Ha un amico palestinese.
peruviano||peruanisch / Peruaner|Machu Picchu è un sito peruviano.
nordamericano||nordamerikanisch|Il mercato nordamericano è grande.
giordano||jordanisch / Jordanier|Petra è una città giordana.
`
});
/* Nachträge Teil 2 */
add({
"B1 – Alltag & Welt 4": `
flauto|il|Flöte|Mia figlia suona il flauto.
gemma|la|Edelstein / Knospe|L'anello ha una gemma verde.
lenza|la|Angelschnur|Il pescatore lancia la lenza.
mulino|il|Mühle|Il mulino a vento gira.
nettare|il|Nektar / Saft|Le api raccolgono il nettare.
paniere|il|Korb / Warenkorb|Il paniere è pieno di frutta.
pergolato|il|Laubengang|Pranziamo sotto il pergolato.
pezza|la|Flicken / Lappen|Metti una pezza sui pantaloni.
pezzuola|la|Tüchlein|Pulisci gli occhiali con la pezzuola.
pigione|la|Miete (veraltet)|Paga la pigione ogni mese.
polverina|la|Pulver|Sciogli la polverina nell'acqua.
portacipria|il|Puderdose|Ha un portacipria d'argento.
manodopera|la|Arbeitskräfte|Manca manodopera in agricoltura.
maestranza|la|Belegschaft / Handwerker|Le maestranze lavorano al restauro.
`,
"B1 – Berufe & Rollen 2": `
figliastro|il|Stiefsohn|Ha un buon rapporto con il figliastro.
finanziatore|il|Geldgeber|Il progetto cerca nuovi finanziatori.
gobbo|il|Buckliger / bucklig|Non stare gobbo, raddrizza la schiena!
`,
"B1 – Verben 14": `
oltrepassare||überschreiten|Non oltrepassare la linea gialla.
piallare||hobeln|Il falegname pialla la tavola.
`
});

/* ---------- Teil 3 (p bis z) ---------- */
add({
"A2 – Essen & Küche 6": `
prosecco|il|Prosecco|Brindiamo con un bicchiere di prosecco.
provola|la|Provola (Käse)|La provola affumicata è buona alla griglia.
provolone|il|Provolone (Käse)|Un panino con il provolone.
purè|il|Kartoffelpüree|Il purè accompagna la carne.
radicchio|il|Radicchio|Il radicchio di Treviso è rosso.
ragù|il|Ragù / Fleischsoße|Il ragù bolognese cuoce per ore.
rapa|la|Rübe|Le cime di rapa sono tipiche della Puglia.
ravanello|il|Radieschen|Metti i ravanelli nell'insalata.
rosticceria|la|Imbiss (mit Gebratenem)|Compriamo un pollo arrosto in rosticceria.
salatino|il|Salzgebäck|Con l'aperitivo ci sono i salatini.
salume|il|Wurstware|In Emilia ci sono ottimi salumi.
salvia|la|Salbei|Burro e salvia sui ravioli.
sardina|la|Sardine|Le sardine fritte sono economiche.
scamorza|la|Scamorza (Käse)|La scamorza fusa sul pane.
semifreddo|il|Halbgefrorenes|Per dessert c'è un semifreddo al caffè.
semolino|il|Grieß|La nonna fa il budino di semolino.
senape|la|Senf|Il wurstel con la senape.
seppia|la|Tintenfisch (Sepia)|Il risotto al nero di seppia è nero.
sfoglia|la|Teigplatte / Blätterteig|La sfoglia per le lasagne è fatta in casa.
sogliola|la|Seezunge|La sogliola alla mugnaia è delicata.
sottaceto|il|eingelegtes Gemüse (in Essig)|Mi piacciono i cetrioli sottaceto.
sottolio||in Öl eingelegt|Compro i carciofini sottolio.
spalmabile||streichfähig|La crema è spalmabile.
spalmare||streichen (aufs Brot)|Spalma il burro sul pane.
spiedino|lo|Spieß|Facciamo spiedini di carne e verdura.
spiedo|lo|Bratspieß|Il pollo allo spiedo gira lentamente.
spremere||auspressen|Spremi due arance.
spumante|lo|Sekt|A Capodanno si stappa lo spumante.
spuntino|lo|Imbiss / Snack|Faccio uno spuntino alle undici.
squisito||köstlich|Questa torta è squisita!
stracchino|lo|Stracchino (Weichkäse)|La piadina con lo stracchino.
strutto|lo|Schmalz|Una volta si cucinava con lo strutto.
susina|la|Pflaume|Le susine sono mature.
taleggio|il|Taleggio (Käse)|Il taleggio ha un sapore forte.
tagliatella|la|Bandnudel|Tagliatelle al ragù per tutti!
tarallo|il|Tarallo (Kringel)|I taralli pugliesi sono croccanti.
tartufo|il|Trüffel|Il tartufo bianco d'Alba è caro.
tisana|la|Kräutertee|Bevo una tisana prima di dormire.
torrone|il|Nougat|A Natale mangiamo il torrone.
tortellino|il|Tortellino|I tortellini in brodo sono il piatto di Natale.
trota|la|Forelle|Peschiamo trote nel torrente.
vongola|la|Venusmuschel|Spaghetti alle vongole, per favore.
zucchina|la|Zucchini|Le zucchine ripiene sono buonissime.
zuppa|la|Suppe|Una zuppa calda d'inverno.
wurstel|il|Würstchen|Il bambino vuole il wurstel con le patatine.
`,
"A2 – Essen & Küche 7": `
rinfresco|il|Empfang / Buffet|Dopo la cerimonia c'è un rinfresco.
sorso|il|Schluck|Bevi un sorso d'acqua.
sbornia|la|Rausch / Kater|Ieri ha preso una sbornia.
salare||salzen|Sala l'acqua della pasta.
soffriggere||andünsten|Soffriggi la cipolla nell'olio.
scongelare||auftauen|Scongela il pesce in frigo.
tritare||hacken / klein schneiden|Trita il prezzemolo.
travasare||umfüllen|Travasa il vino in una caraffa.
scodella|la|Schale / Napf|Mangio i cereali in una scodella.
tegame|il|Pfanne / Schmortopf|Cuoci le uova nel tegame.
teglia|la|Backblech / Auflaufform|Metti le lasagne nella teglia.
saliera|la|Salzstreuer|Passami la saliera.
tovaglietta|la|Platzset|Metti le tovagliette sul tavolo.
stoviglia|la|Geschirr (meist Mehrzahl)|Laviamo le stoviglie.
stuzzicadenti|lo|Zahnstocher|C'è uno stuzzicadenti?
tostapane|il|Toaster|Il pane è nel tostapane.
rancio|il|Essen (beim Militär)|I soldati mangiano il rancio.
recipiente|il|Gefäß|Versa il latte in un recipiente.
scolapiatti|lo|Abtropfgestell|Metti i piatti nello scolapiatti.
spuma|la|Schaum / Mousse|La spuma di salmone è un antipasto.
susino|il|Pflaumenbaum|Il susino è pieno di frutti.
`,
"A2 – Tiere 4": `
pulce|la|Floh|Il cane ha le pulci.
pulcino|il|Küken|Il pulcino segue la chioccia.
puledro|il|Fohlen|Il puledro corre nel prato.
puma|il|Puma|Il puma è un felino americano.
quaglia|la|Wachtel|Le uova di quaglia sono piccole.
rana|la|Frosch|La rana salta nello stagno.
rettile|il|Reptil|Il serpente è un rettile.
rinoceronte|il|Nashorn|Il rinoceronte ha un corno sul naso.
rondine|la|Schwalbe|Le rondini tornano in primavera.
ruminante|il|Wiederkäuer|La mucca è un ruminante.
sanguisuga|la|Blutegel|Nello stagno ci sono le sanguisughe.
scarafaggio|lo|Kakerlake|C'è uno scarafaggio in cucina!
scoiattolo|lo|Eichhörnchen|Lo scoiattolo sale sull'albero.
scorpione|lo|Skorpion|Lo scorpione ha la coda velenosa.
scrofa|la|Sau|La scrofa allatta i maialini.
sciame|lo|Schwarm|Uno sciame di api vola sul giardino.
selvaggina|la|Wild(bret)|In autunno si mangia la selvaggina.
sorcio|il|Maus|Il gatto ha preso un sorcio.
stallone|lo|Hengst|Lo stallone è nero.
struzzo|lo|Strauß (Vogel)|Lo struzzo non vola.
suino||Schweine- / Schwein|La carne suina è economica.
talpa|la|Maulwurf|La talpa scava gallerie.
tarlo|il|Holzwurm|Il mobile ha il tarlo.
tordo|il|Drossel|Il tordo canta nel bosco.
tortora|la|Turteltaube|Due tortore sul tetto.
usignolo|l'|Nachtigall|L'usignolo canta di notte.
vespa|la|Wespe / Vespa (Roller)|Una vespa mi ha punto.
vipera|la|Viper / Kreuzotter|Attenzione alle vipere in montagna.
zebra|la|Zebra|La zebra ha le strisce bianche e nere.
zanna|la|Stoßzahn / Reißzahn|L'elefante ha due zanne.
ringhiare||knurren|Il cane ringhia al postino.
ringhio|il|Knurren|Si sente un ringhio dietro la porta.
ruggire||brüllen|Il leone ruggisce.
ruggito|il|Gebrüll|Il ruggito del leone fa paura.
scodinzolare||mit dem Schwanz wedeln|Il cane scodinzola felice.
ronzare||summen|Una mosca ronza nella stanza.
ronzio|il|Summen|Il ronzio della zanzara non mi fa dormire.
svolazzare||flattern|Le farfalle svolazzano nel prato.
tosare||scheren|Il pastore tosa le pecore.
trottare||traben|Il cavallo trotta.
zoccolo|lo|Huf / Holzschuh|Il cavallo ha perso un ferro dallo zoccolo.
velenoso||giftig|Questo fungo è velenoso.
`,
"B1 – Pflanzen & Natur 3": `
quadrifoglio|il|vierblättriges Kleeblatt|Ho trovato un quadrifoglio!
quercia|la|Eiche|La quercia ha cento anni.
rampicante||Kletter- / Kletterpflanze|L'edera è una pianta rampicante.
risaia|la|Reisfeld|In Piemonte ci sono molte risaie.
rovo|il|Brombeerstrauch|Mi sono graffiato con i rovi.
ruscello|il|Bach|Un ruscello scorre nel bosco.
salice|il|Weide (Baum)|Il salice piangente è vicino al lago.
scirocco|lo|Schirokko (Südwind)|Con lo scirocco fa caldo e umido.
scoglio|lo|Klippe / Fels|Ci tuffiamo dallo scoglio.
selva|la|Wald (gehoben)|Ci siamo persi in una selva oscura.
siepe|la|Hecke|Il giardino è circondato da una siepe.
spiga|la|Ähre|Le spighe di grano sono dorate.
stagno|lo|Teich / Zinn|Le rane vivono nello stagno.
terriccio|il|Blumenerde|Compra un sacco di terriccio.
trifoglio|il|Klee|Le mucche mangiano il trifoglio.
tulipano|il|Tulpe|In aprile fioriscono i tulipani.
uragano|l'|Hurrikan|L'uragano ha distrutto le case.
valanga|la|Lawine|C'è pericolo di valanghe.
vigna|la|Weinberg|Le vigne coprono le colline.
vite|la|Weinrebe / Schraube|La vite produce l'uva. Stringi la vite!
violetta|la|Veilchen|Le violette sono piccole e viola.
violetto||violett|Ha un vestito violetto.
zolla|la|Erdscholle|Il contadino rompe le zolle.
roccioso||felsig|La costa è rocciosa.
rocca|la|Burg / Festung|La rocca domina il paese.
ventata|la|Windstoß|Una ventata di aria fresca.
vampata|la|Hitzewallung / Stichflamme|Ho una vampata di calore.
tramontare||untergehen (Sonne)|Il sole tramonta alle otto.
settentrione|il|Norden|Il settentrione è più industriale.
tenebra|la|Finsternis|Le tenebre avvolgono la valle.
sughero|il|Kork|Il tappo è di sughero.
trebbiare||dreschen|In estate si trebbia il grano.
vendemmiare||Weinlese halten|A settembre si vendemmia.
sbocciare||aufblühen|Le rose sono sbocciate.
`
});

add({
"A2 – Haushalt & Bad 4": `
rasoio|il|Rasierer|Il rasoio elettrico è scarico.
rastrello|il|Rechen|Raccogli le foglie con il rastrello.
registratore|il|Rekorder|Il nonno ha un vecchio registratore.
ricambio|il|Ersatz(teil)|Porta un cambio di ricambio.
ricarica|la|Aufladung / Guthaben|Faccio una ricarica di dieci euro.
riflettore|il|Scheinwerfer (Bühne)|I riflettori illuminano il palco.
ringhiera|la|Geländer|Tieniti alla ringhiera.
rotella|la|Rädchen / Rolle|La sedia ha le rotelle.
rullo|il|Rolle / Walze|Dipingi il muro con il rullo.
salvadanaio|il|Sparschwein|Metto le monete nel salvadanaio.
salvagente|il|Rettungsring / Schwimmreifen|Il bambino nuota con il salvagente.
salvietta|la|Serviette / Feuchttuch|Prendi una salvietta umidificata.
saponetta|la|Seifenstück|La saponetta è finita.
scaldabagno|lo|Boiler|Lo scaldabagno è rotto, l'acqua è fredda.
scalinata|la|Freitreppe|La scalinata di Trinità dei Monti è a Roma.
scalino|lo|Stufe|Attento allo scalino!
scarpiera|la|Schuhschrank|Metti le scarpe nella scarpiera.
schedario|lo|Kartei|Lo schedario è in ordine alfabetico.
schiuma|la|Schaum|La birra ha troppa schiuma.
sgabello|lo|Hocker|Siediti sullo sgabello.
smacchiatore|lo|Fleckentferner|Usa lo smacchiatore sulla camicia.
sgrassatore|lo|Fettlöser|Pulisci il forno con lo sgrassatore.
smalto|lo|Nagellack / Emaille|Si mette lo smalto rosso.
sofà|il|Sofa|Ci sediamo sul sofà.
soffitta|la|Dachboden|Le vecchie foto sono in soffitta.
solaio|il|Dachboden / Decke|Il solaio è pieno di scatole.
soppalco|il|Hochebene (Zwischengeschoss)|Il letto è sul soppalco.
soprammobile|il|Nippesfigur|La nonna ha tanti soprammobili.
spazzola|la|Bürste|Pettina i capelli con la spazzola.
spazzolone|lo|Schrubber|Lava il pavimento con lo spazzolone.
spillo|lo|Stecknadel|Fissa l'orlo con gli spilli.
spago|lo|Schnur|Lega il pacco con lo spago.
stendibiancheria|lo|Wäscheständer|Stendi i panni sullo stendibiancheria.
stufa|la|Ofen|La stufa a legna scalda la stanza.
stuoia|la|Matte|Mettiamo una stuoia sulla sabbia.
talco|il|Talkpuder|Metti il talco al bambino.
tappetino|il|Matte / Mauspad|Pulisciti le scarpe sul tappetino.
tegola|la|Dachziegel|Il vento ha fatto cadere una tegola.
termosifone|il|Heizkörper|Il termosifone è freddo.
tettoia|la|Vordach|Ci ripariamo sotto la tettoia.
tinello|il|Essküche|Mangiamo nel tinello.
toilette|la|Toilette|Dov'è la toilette?
toletta|la|Frisiertisch|La nonna si pettina alla toletta.
torcia|la|Taschenlampe / Fackel|Prendi la torcia, è buio.
trapunta|la|Steppdecke|D'inverno dormo sotto la trapunta.
utensile|l'|Werkzeug / Utensil|Gli utensili da cucina sono nel cassetto.
ventilatore|il|Ventilator|Accendi il ventilatore, fa caldo.
roulotte|la|Wohnwagen|Andiamo in vacanza in roulotte.
`,
"B1 – Werkzeug & Werkstatt": `
vanga|la|Spaten|Scava con la vanga.
trapano|il|Bohrmaschine|Mi presti il trapano?
tenaglia|la|Kneifzange|Togli il chiodo con la tenaglia.
scalpello|lo|Meißel|Lo scultore lavora con lo scalpello.
scure|la|Axt|Il boscaiolo prende la scure.
tassello|il|Dübel|Metti un tassello nel muro.
staffa|la|Halterung / Steigbügel|Fissa la mensola con due staffe.
tacca|la|Kerbe|Fa una tacca sul bastone.
valvola|la|Ventil|La valvola della bici perde aria.
stanga|la|Stange|Una stanga chiude il cancello.
spranga|la|Eisenstange / Riegel|Hanno bloccato la porta con una spranga.
sbarra|la|Schranke / Gitterstab|La sbarra del parcheggio è alzata.
telaio|il|Rahmen / Webstuhl|Il telaio della bici è leggero.
tornio|il|Drehbank|L'operaio lavora al tornio.
tino|il|Bottich|L'uva fermenta nel tino.
timbro|il|Stempel|Serve il timbro dell'ufficio.
saldatura|la|Schweißnaht / Lötstelle|La saldatura si è rotta.
segheria|la|Sägewerk|Il legno viene tagliato in segheria.
stoppa|la|Werg|L'idraulico usa la stoppa.
rocchetto|il|Garnrolle / Spule|Un rocchetto di filo rosso.
scheggia|la|Splitter|Mi è entrata una scheggia nel dito.
stampella|la|Krücke / Kleiderbügel|Cammina con le stampelle.
`,
"B1 – Körper & Gesundheit 5": `
ricciolo|il|Locke|La bambina ha i riccioli biondi.
ruga|la|Falte|Ha qualche ruga intorno agli occhi.
saliva|la|Speichel|Il cane ha molta saliva.
siringa|la|Spritze|L'infermiera prepara la siringa.
sopracciglio|il|Augenbraue|Alza un sopracciglio.
stinco|lo|Schienbein / Haxe|Ho preso un calcio sullo stinco.
tonsilla|la|Mandel (Hals)|Gli hanno tolto le tonsille.
torcicollo|il|steifer Hals|Ho il torcicollo.
ulcera|l'|Geschwür|Ha un'ulcera allo stomaco.
vertebra|la|Wirbel|Si è rotto una vertebra.
vertigine|la|Schwindel|Soffro di vertigini in alto.
vomito|il|Erbrochenes / Erbrechen|Ha nausea e vomito.
trasfusione|la|Transfusion|Ha bisogno di una trasfusione.
trapianto|il|Transplantation|Il trapianto di cuore è riuscito.
scarlattina|la|Scharlach|Il bambino ha la scarlattina.
rosolia|la|Röteln|La rosolia è pericolosa in gravidanza.
prurito|il|Juckreiz|Ho prurito alla schiena.
prudere||jucken|Mi prude il naso.
purga|la|Abführmittel|Una volta si dava la purga ai bambini.
respirazione|la|Atmung|Controlla la respirazione.
ricaduta|la|Rückfall|Ha avuto una ricaduta.
sanguinare||bluten|Il naso sanguina.
sbadigliare||gähnen|Sbadiglio perché ho sonno.
sbadiglio|lo|Gähnen|Non riesce a trattenere uno sbadiglio.
russare||schnarchen|Mio marito russa forte.
ruttare||rülpsen|Non si rutta a tavola!
rutto|il|Rülpser|Che maleducato, ha fatto un rutto!
sputo|lo|Spucke|C'è uno sputo per terra.
smorfia|la|Grimasse|Fa una smorfia di disgusto.
sudato||verschwitzt|Sono tutto sudato.
slogare||verrenken / verstauchen|Mi sono slogato la caviglia.
unguento|l'|Salbe|Metti l'unguento sulla scottatura.
psichiatria|la|Psychiatrie|Lavora in psichiatria.
pungere||stechen|Una vespa mi ha punto.
`,
"A2 – Kleidung & Pflege": `
ricamo|il|Stickerei|La tovaglia ha un ricamo a mano.
ricamare||sticken|La nonna ricama un fazzoletto.
rammendo|il|Stopfen / gestopfte Stelle|Il calzino ha un rammendo.
scialle|lo|Schal / Tuch|Si mette uno scialle sulle spalle.
soprabito|il|Übermantel|Prendi il soprabito, fa fresco.
stivaletto|lo|Stiefelette|Porta stivaletti neri.
stringa|la|Schnürsenkel|Si è slacciata la stringa.
suola|la|Sohle|La suola della scarpa è consumata.
tunica|la|Tunika|Indossa una tunica bianca.
tonaca|la|Kutte / Soutane|Il frate porta la tonaca marrone.
trina|la|Spitze (Stoff)|Il colletto è di trina.
velluto|il|Samt / Cord|I pantaloni di velluto sono caldi.
vellutato||samtig|È una crema vellutata.
radere||rasieren|Si rade ogni mattina.
rasare||rasieren / kahl scheren|Si è rasato la testa.
sbarbare||rasieren (Bart)|Si sbarba prima del lavoro.
truccare||schminken|Si trucca per la festa.
spettinare||zerzausen|Il vento mi spettina.
sporcizia|la|Schmutz|Che sporcizia in questa cucina!
sudicio||schmutzig|Ha le mani sudicie.
sbottonare||aufknöpfen|Sbottona la giacca.
slacciare||aufbinden / lösen|Slaccia le scarpe.
travestirsi||sich verkleiden|A Carnevale mi travesto da pirata.
specchiarsi||sich spiegeln|Si specchia nella vetrina.
spazzolare||bürsten|Spazzola il cane.
`,
"B1 – Verkehr & Freizeit": `
pulmino|il|Kleinbus|Il pulmino porta i bambini a scuola.
racchetta|la|Schläger|Ho comprato una racchetta da tennis.
remare||rudern|Remiamo fino all'isola.
remo|il|Ruder|Si è rotto un remo.
rimorchio|il|Anhänger|Il trattore traina un rimorchio.
rodaggio|il|Einfahren (Motor) / Eingewöhnung|La macchina nuova è in rodaggio.
rotaia|la|Schiene|Il tram corre sulle rotaie.
ruspa|la|Bagger|La ruspa demolisce la casa.
scafo|lo|Rumpf (Schiff)|Lo scafo della barca è bianco.
scappamento|lo|Auspuff|Il tubo di scappamento fa rumore.
sciatore|lo|Skifahrer|Lo sciatore scende veloce.
scivolo|lo|Rutsche|I bambini scendono dallo scivolo.
scompartimento|lo|Abteil|Lo scompartimento è pieno.
seggiolino|il|Kindersitz|Il bambino viaggia nel seggiolino.
seggiovia|la|Sessellift|Saliamo con la seggiovia.
slitta|la|Schlitten|I bambini scendono con la slitta.
sorpasso|il|Überholen|Il sorpasso in curva è vietato.
sottomarino|il|U-Boot|Il sottomarino scende in profondità.
sottopassaggio|il|Unterführung|Usa il sottopassaggio per attraversare.
sterzare||lenken|Sterza a destra!
sterzo|lo|Lenkrad / Lenkung|Lo sterzo è duro.
tergicristallo|il|Scheibenwischer|Accendi il tergicristallo, piove.
timone|il|Ruder (Steuer)|Il capitano è al timone.
timoniere|il|Steuermann|Il timoniere guida la barca.
traforo|il|Tunnel (durch Berge)|Il traforo del Monte Bianco collega Italia e Francia.
trampolino|il|Sprungbrett / Schanze|Si tuffa dal trampolino.
trattore|il|Traktor|Il contadino guida il trattore.
transito|il|Durchfahrt|Divieto di transito ai camion.
zattera|la|Floß|Costruiamo una zattera.
tamponare||auffahren / abtupfen|Mi hanno tamponato al semaforo.
trainare||ziehen / abschleppen|Il carro attrezzi traina l'auto.
rifornimento|il|Tanken / Nachschub|Facciamo rifornimento al prossimo distributore.
pugilato|il|Boxen|Il pugilato è uno sport duro.
punteggio|il|Punktestand|Qual è il punteggio?
rivincita|la|Revanche|Voglio la rivincita!
scacchiera|la|Schachbrett|La scacchiera ha sessantaquattro caselle.
scalata|la|Besteigung|La scalata è durata dieci ore.
scudetto|lo|Meistertitel (Fußball)|La squadra ha vinto lo scudetto.
tifo|il|Anfeuern / Typhus|Faccio il tifo per la Roma.
tombola|la|Tombola (Spiel)|A Natale giochiamo a tombola.
trofeo|il|Trophäe|Il trofeo è in bacheca.
trottola|la|Kreisel|Il bambino gioca con la trottola.
tuffo|il|Sprung (ins Wasser)|Facciamo un tuffo in mare!
telecronaca|la|Fernsehübertragung|Ascolto la telecronaca della partita.
scampagnata|la|Ausflug ins Grüne|A Pasquetta facciamo una scampagnata.
pupazzo|il|Puppe / Schneemann|Facciamo un pupazzo di neve!
tamburo|il|Trommel|Il bambino suona il tamburo.
zampogna|la|Dudelsack (italienisch)|A Natale suonano le zampogne.
tarantella|la|Tarantella (Tanz)|Balliamo la tarantella.
serenata|la|Ständchen|Le canta una serenata sotto il balcone.
stornello|lo|Volkslied (kurz)|Cantano stornelli romani.
ritornello|il|Refrain|Cantiamo tutti il ritornello!
stonare||falsch singen|Canta bene, ma ogni tanto stona.
recita|la|Aufführung|La recita di Natale è venerdì.
veglione|il|Silvesterball|Andiamo al veglione di Capodanno.
ritrovo|il|Treffpunkt|Il bar è il ritrovo dei giovani.
taverna|la|Taverne|Ceniamo in una taverna greca.
`
});

add({
"B1 – Menschen & Charakter 2": `
rapinatore|il|Räuber|Il rapinatore è scappato in moto.
recluta|la|Rekrut|Le reclute si allenano in caserma.
rigattiere|il|Trödler|Ho comprato la lampada da un rigattiere.
ripetente|il|Sitzenbleiber|In classe ci sono due ripetenti.
sagrestano|il|Küster|Il sagrestano suona le campane.
sarto|il|Schneider|Il sarto accorcia i pantaloni.
scaricatore|lo|Hafenarbeiter / Packer|Gli scaricatori lavorano al porto.
sceriffo|lo|Sheriff|Lo sceriffo arresta il bandito.
scolaro|lo|Schüler (Grundschule)|Gli scolari entrano in classe.
scultore|lo|Bildhauer|Michelangelo era anche scultore.
seduttore|il|Verführer|Si crede un grande seduttore.
spacciatore|lo|Dealer|La polizia ha arrestato uno spacciatore.
spazzino|lo|Straßenkehrer|Lo spazzino pulisce la strada.
stregone|lo|Hexenmeister|Lo stregone prepara una pozione.
telecronista|il|Fernsehkommentator|Il telecronista grida "gol!".
tiranno|il|Tyrann|Il tiranno governa con la paura.
torero|il|Torero|Il torero affronta il toro.
tutore|il|Vormund|Il tutore si occupa del ragazzo.
vandalo|il|Vandale|I vandali hanno rotto le panchine.
viaggiatrice|la|Reisende|La viaggiatrice ha perso il treno.
zingaro|lo|(abwertend) Zigeuner – besser: rom, sinti|Oggi si dice "rom" o "sinti", non "zingaro".
zitella|la|(abwertend) alte Jungfer|È una parola antiquata e offensiva.
rauco||heiser|Ho la voce rauca.
rozzo||grob / ungehobelt|Ha modi rozzi.
rude||rau / schroff|È un uomo rude ma buono.
sapiente||weise / gelehrt|Il vecchio sapiente dà consigli.
sbadato||schusselig|Sono sbadato, ho perso le chiavi.
scontento||unzufrieden|Il cliente è scontento.
scortese||unhöflich|La commessa è stata scortese.
sfortunato||vom Pech verfolgt|Che giornata sfortunata!
sfrenato||zügellos|Fa una vita sfrenata.
sgarbato||unfreundlich / grob|Non essere sgarbato con la nonna.
slanciato||schlank / hochgewachsen|Ha una figura slanciata.
snello||schlank|È alta e snella.
sorridente||lächelnd|È sempre sorridente.
spensierato||unbeschwert|È stata un'estate spensierata.
svelto||flink / schnell|Sii svelto, il treno parte!
valoroso||tapfer|È un soldato valoroso.
volenteroso||willig / eifrig|È uno studente volenteroso.
viziato||verwöhnt|È un bambino viziato.
scherzoso||scherzhaft|Ha un tono scherzoso.
scalzo||barfuß|Cammina scalzo sulla spiaggia.
zoppo||hinkend|Il cane è zoppo.
sdraiato||liegend|È sdraiato sul divano.
`,
"B1 – Verben 15": `
raddrizzare||geraderichten|Raddrizza la schiena!
rallegrare||erfreuen / aufheitern|La tua visita mi rallegra.
rattristare||traurig machen|La notizia mi rattrista.
recintare||einzäunen|Hanno recintato il giardino.
ricalcare||durchpausen / nachahmen|Ricalca il disegno.
ricompensare||belohnen|Ti ricompenserò per l'aiuto.
riconciliarsi||sich versöhnen|I due fratelli si sono riconciliati.
ricopiare||abschreiben|Ricopia il tema in bella.
rifinire||den letzten Schliff geben|Rifinisco gli ultimi dettagli.
rigovernare||abspülen|Rigoverna la cucina dopo cena.
rilegare||binden (Buch)|Faccio rilegare la tesi.
rimbombare||dröhnen / hallen|Il tuono rimbomba nella valle.
rimborsare||erstatten|Ci rimborsano il biglietto.
rimodernare||modernisieren|Hanno rimodernato il bagno.
rincarare||teurer werden|La benzina è rincarata.
ringiovanire||verjüngen|Questa crema ti ringiovanisce.
rinnegare||verleugnen|Non rinnega le sue origini.
riordinare||aufräumen|Riordina la tua camera!
riscattare||freikaufen / einlösen|Ha riscattato il debito.
risciacquare||ausspülen|Risciacqua i piatti.
risplendere||strahlen|Il sole risplende sul mare.
ristampare||nachdrucken|Hanno ristampato il libro.
ritoccare||nachbessern|Ritocca la foto.
rivoltare||umdrehen / wenden|Rivolta la frittata.
rodere||nagen|Il topo rode il formaggio.
rotolare||rollen|La palla rotola giù per la strada.
sabotare||sabotieren|Hanno sabotato la macchina.
saccheggiare||plündern|I barbari saccheggiarono Roma.
saltellare||hüpfen|Il bambino saltella felice.
sbiadire||verblassen|I colori sono sbiaditi al sole.
sbiancare||bleichen / erblassen|Sbianca i denti dal dentista.
sbigottire||bestürzen|La notizia ci ha sbigottito.
sbloccare||entsperren / lösen|Sblocca il telefono con il codice.
sboccare||münden|Il fiume sbocca nel mare.
sbriciolare||zerkrümeln|Sbriciola il pane per gli uccelli.
sbuffare||schnauben|Sbuffa perché è annoiato.
scandalizzare||schockieren|Il suo vestito ha scandalizzato tutti.
scansare||ausweichen|Scansa la buca!
scarabocchiare||kritzeln|Il bambino scarabocchia sul foglio.
scarcerare||aus der Haft entlassen|Lo hanno scarcerato ieri.
scavalcare||überklettern|Ha scavalcato il muro.
sciacquare||ausspülen|Sciacqua la bocca.
scioperare||streiken|I ferrovieri scioperano domani.
scolpire||meißeln / bildhauern|Scolpisce il marmo.
`,
"B1 – Verben 16": `
sconsigliare||abraten|Ti sconsiglio quel ristorante.
screpolare||rissig werden|Il freddo mi screpola le labbra.
scricchiolare||knarren|Il pavimento scricchiola.
scurire||dunkel werden / verdunkeln|Il cielo si scurisce.
sdebitarsi||sich revanchieren|Come posso sdebitarmi?
sdegnare||verschmähen|Sdegna ogni aiuto.
sfinire||erschöpfen|La corsa mi ha sfinito.
sfollare||evakuieren / räumen|Hanno sfollato il paese.
sganciare||abkoppeln / lockermachen|Sgancia il rimorchio.
sgonfiare||Luft ablassen|Si è sgonfiata la gomma.
sgozzare||die Kehle durchschneiden|Nel film l'assassino sgozza la vittima.
sgridare||ausschimpfen|La maestra sgrida gli alunni.
slegare||losbinden|Slega il cane.
smacchiare||Flecken entfernen|Devo smacchiare la tovaglia.
smascherare||entlarven|La polizia ha smascherato il truffatore.
smuovere||bewegen / verrücken|Non riesco a smuovere il mobile.
soccorrere||helfen / retten|Il bagnino soccorre il bambino.
sorteggiare||auslosen|Sorteggiamo i gruppi.
sostare||halten / parken|È vietato sostare davanti al cancello.
spellare||häuten / pellen|Mi sono spellato il ginocchio.
spennare||rupfen / ausnehmen (Geld)|In quel ristorante ti spennano!
spianare||ebnen / ausrollen|Spiana la pasta con il mattarello.
spruzzare||spritzen / sprühen|Spruzza il profumo.
stipendiare||besolden|L'azienda stipendia venti persone.
storcere||verdrehen|Storce il naso davanti al piatto.
strangolare||erwürgen|Nel giallo la vittima è strangolata.
stuzzicare||reizen / necken|Non stuzzicare il cane!
susseguirsi||aufeinanderfolgen|Le notizie si susseguono.
tappezzare||tapezieren|Hanno tappezzato la stanza.
tassare||besteuern|Lo Stato tassa i redditi.
traballare||wackeln|Il tavolo traballa.
traboccare||überlaufen|L'acqua trabocca dalla vasca.
tranquillizzare||beruhigen|Il medico ci tranquillizza.
truffare||betrügen|L'hanno truffato al telefono.
viziare||verwöhnen|I nonni viziano i nipoti.
zoppicare||hinken|Zoppica da quando è caduto.
violentare||vergewaltigen|La donna è stata violentata, dice il giornale.
`,
"B1 – Alltag & Welt 5": `
raccomandazione|la|Empfehlung / Vitamin B|Ha trovato lavoro per raccomandazione.
rafforzamento|il|Verstärkung|Serve un rafforzamento della sicurezza.
ragnatela|la|Spinnennetz|In cantina ci sono ragnatele.
rapimento|il|Entführung|Il rapimento è durato un mese.
rateale||Raten-|Pago con un pagamento rateale.
recinto|il|Gehege / Zaun|Le pecore sono nel recinto.
reggimento|il|Regiment|Il reggimento sfila in piazza.
repressione|la|Unterdrückung|La repressione del dissenso è dura.
resoconto|il|Bericht|Fammi un resoconto della riunione.
rettangolare||rechteckig|Il tavolo è rettangolare.
rimanenza|la|Restbestand|Le rimanenze vanno in saldo.
rimprovero|il|Tadel|Ha ricevuto un rimprovero dal capo.
rincorsa|la|Anlauf|Prende la rincorsa e salta.
rinforzo|il|Verstärkung|Arrivano i rinforzi.
rinuncia|la|Verzicht|È stata una dolorosa rinuncia.
rinvio|il|Aufschub / Verweis|Il rinvio della partita è ufficiale.
rione|il|Stadtviertel|Abita in un rione popolare.
ripensamento|il|Sinneswandel|Ho avuto un ripensamento.
ripido||steil|La salita è ripida.
ripiego|il|Notlösung|È solo un ripiego.
ripieno|il|Füllung / gefüllt|Il ripieno dei tortellini è di carne.
riscatto|il|Lösegeld / Freikauf|I rapitori chiedono un riscatto.
risentimento|il|Groll|Prova risentimento verso il fratello.
ritirata|la|Rückzug|L'esercito batte in ritirata.
ritto||aufrecht|Sta ritto in piedi.
riunito||vereinigt / versammelt|La famiglia è riunita a tavola.
riuscita|la|Gelingen|La riuscita della festa dipende da te.
rivendita|la|Verkaufsstelle|È una rivendita di tabacchi.
rivestimento|il|Verkleidung / Beschichtung|Il rivestimento del muro è in legno.
rombo|il|Dröhnen / Raute / Steinbutt|Si sente il rombo dei motori.
rosario|il|Rosenkranz|La nonna dice il rosario.
rosato||rosé / rosa|Beviamo un vino rosato.
roseo||rosig|Il futuro non è roseo.
rossore|il|Röte|Il rossore sulle guance.
rustico||rustikal / ländlich|Hanno un casale rustico.
sberla|la|Ohrfeige|Gli ha dato una sberla.
sbarramento|lo|Sperre|La polizia ha fatto uno sbarramento.
sbocco|lo|Mündung / Ausweg|Non c'è sbocco per questo lavoro.
scampo|lo|Ausweg / Kaisergranat|Non c'è scampo!
scappatoia|la|Hintertür / Schlupfloch|Ha trovato una scappatoia.
scarabocchio|lo|Gekritzel|Il quaderno è pieno di scarabocchi.
scavo|lo|Ausgrabung|Gli scavi di Pompei sono famosi.
scheletro|lo|Skelett|Al museo c'è uno scheletro di dinosauro.
schiacciato||zerquetscht / platt|Il panino è schiacciato.
scivolata|la|Ausrutscher / Grätsche|Ha fatto una scivolata sul ghiaccio.
scossa|la|Stromschlag / Erdstoß|Ho preso la scossa!
scrupolo|lo|Skrupel / Gewissenhaftigkeit|Lavora con scrupolo.
seccatura|la|Ärgernis|Che seccatura dover rifare tutto!
`,
"B1 – Alltag & Welt 6": `
semestre|il|Halbjahr / Semester|Il semestre finisce a gennaio.
serietà|la|Ernsthaftigkeit / Zuverlässigkeit|Lavora con serietà.
sfollamento|lo|Evakuierung|Lo sfollamento del paese è durato ore.
sgarbo|lo|Unhöflichkeit|Mi ha fatto uno sgarbo.
sgombro|lo|Makrele / frei, geräumt|La stanza è sgombra.
sillaba|la|Silbe|"Casa" ha due sillabe.
smisurato||maßlos|Ha un'ambizione smisurata.
soggezione|la|Befangenheit / Ehrfurcht|Il professore mi mette soggezione.
solletico|il|Kitzeln|Soffro il solletico.
soprannome|il|Spitzname|Il suo soprannome è "Il Rosso".
sorteggio|il|Auslosung|Il sorteggio dei gironi è domani.
spaccatura|la|Spaltung / Riss|C'è una spaccatura nel partito.
spaccio|lo|Laden / Drogenhandel|Lo spaccio aziendale vende a prezzi bassi.
spazioso||geräumig|L'appartamento è spazioso.
sperone|lo|Sporn|Lo sperone di roccia sporge sul mare.
spiazzo|lo|freier Platz / Lichtung|Ci fermiamo in uno spiazzo.
spigolo|lo|Kante|Ho sbattuto contro lo spigolo del tavolo.
spionaggio|lo|Spionage|È un film di spionaggio.
splendente||strahlend|È una giornata splendente.
spogliatoio|lo|Umkleide|I giocatori sono nello spogliatoio.
spoglio||kahl|Gli alberi sono spogli in inverno.
sporgente||vorstehend|Ha i denti sporgenti.
sproposito|lo|Unsinn / Unsumme|Ha speso uno sproposito.
squallido||trostlos / schäbig|È un albergo squallido.
squarcio|lo|Riss / Spalt|Uno squarcio di cielo azzurro.
stacco|lo|Abstand / Pause|C'è uno stacco di cinque minuti.
stampatello|lo|Blockschrift|Scrivi il nome in stampatello.
svolgimento|lo|Verlauf / Ausführung|Lo svolgimento del tema è buono.
superbia|la|Hochmut|La superbia è un peccato.
tatto|il|Tastsinn / Takt|Ha poco tatto.
tic|il|Tick|Ha un tic all'occhio.
ticchettio|il|Ticken / Prasseln|Sento il ticchettio della pioggia.
tornaconto|il|Eigennutz|Lo fa per il suo tornaconto.
trabocchetto|il|Falle|È una domanda trabocchetto.
trafila|la|Prozedur / Instanzenweg|Che trafila per avere il permesso!
trancio|il|Stück (Fisch, Pizza)|Un trancio di pizza margherita.
trattenuta|la|Abzug (vom Lohn)|Le trattenute sullo stipendio sono alte.
trincea|la|Schützengraben|I soldati combattevano in trincea.
tribù|la|Stamm|La tribù vive nella foresta.
umorismo|l'|Humor|Ha un grande senso dell'umorismo.
urna|l'|Urne / Wahlurne|Gli elettori vanno alle urne.
vanto|il|Stolz / Prahlerei|È il vanto della città.
variopinto||bunt|Il mercato è variopinto.
veglia|la|Nachtwache|Fa la veglia al malato.
venuta|la|Ankunft / Kommen|Aspettiamo la venuta della primavera.
volantino|il|Flugblatt|Distribuiscono volantini in piazza.
volata|la|Endspurt|Vince in volata.
votazione|la|Abstimmung|La votazione è segreta.
tessile||Textil-|L'industria tessile di Prato.
telegramma|il|Telegramm|Una volta si mandava un telegramma.
telegrafo|il|Telegraf|Il telegrafo fu inventato nell'Ottocento.
telegrafico||telegrafisch / knapp|Una risposta telegrafica.
telecomandato||ferngesteuert|Il bambino ha una macchina telecomandata.
tirrenico||tyrrhenisch|La costa tirrenica è lunga.
ultravioletto||ultraviolett|I raggi ultravioletti scottano la pelle.
`,
"B1 – Länder & Regionen 4": `
pugliese||apulisch|Le orecchiette sono un piatto pugliese.
romagnolo||aus der Romagna|La piadina è romagnola.
umbro||umbrisch|Perugia è una città umbra.
valdostano||aus dem Aostatal|La fontina è un formaggio valdostano.
trentino||aus dem Trentino|Le mele trentine sono famose.
sudtirolese||Südtiroler|Lo speck sudtirolese è affumicato.
veneziano||venezianisch / Venezianer|La gondola veneziana è nera.
siamese||siamesisch|Ha un gatto siamese.
slavo||slawisch|Il russo è una lingua slava.
slovacco||slowakisch / Slowake|Bratislava è la capitale slovacca.
sloveno||slowenisch / Slowene|Trieste è vicina al confine sloveno.
serbo||serbisch / Serbe|Belgrado è la capitale serba.
romeno||rumänisch / Rumäne|Il romeno è una lingua neolatina.
rumeno||rumänisch / Rumäne|La mia vicina è rumena.
scozzese||schottisch / Schotte|Il whisky scozzese è famoso.
siriano||syrisch / Syrer|Ha accolto una famiglia siriana.
svedese||schwedisch / Schwede|I mobili svedesi sono pratici.
ucraino||ukrainisch / Ukrainer|Kiev è la capitale ucraina.
ungherese||ungarisch / Ungar|Il gulasch è un piatto ungherese.
tunisino||tunesisch / Tunesier|Il cuscus tunisino è piccante.
sudamericano||südamerikanisch|Ama la musica sudamericana.
socialdemocratico||sozialdemokratisch|È un partito socialdemocratico.
`
});
/* Nachträge Teil 3 */
add({
"B1 – Alltag & Welt 6": `
puntiglio|il|Starrsinn / Ehrgeiz|Lo fa per puntiglio.
ricevimento|il|Empfang|Il ricevimento di nozze è in una villa.
ricompensa|la|Belohnung|C'è una ricompensa per chi trova il cane.
rosetta|la|Brötchen (Rosette)|A Roma compro le rosette.
ruggine|la|Rost|Il cancello è pieno di ruggine.
sigaro|il|Zigarre|Il nonno fuma il sigaro.
strillo|lo|Kreischen|Ho sentito uno strillo.
sventola|la|Ohrfeige / Fächer|Gli ha dato una sventola.
tagliola|la|Fangeisen|Il lupo è finito nella tagliola.
tavoletta|la|Tafel (Schokolade) / Tablett|Mangio una tavoletta di cioccolato.
toppa|la|Flicken / Schlüsselloch|Metti una toppa sui jeans.
trapezio|il|Trapez|L'acrobata vola sul trapezio.
zuffa|la|Rauferei|C'è stata una zuffa tra tifosi.
torbido||trüb|L'acqua del fiume è torbida.
soffice||weich|Il cuscino è soffice.
`,
"B1 – Verben 16": `
sgrassare||entfetten|Sgrassa il forno.
vagire||wimmern (Baby)|Il neonato vagisce nella culla.
`
});
})();

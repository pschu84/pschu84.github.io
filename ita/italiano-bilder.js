/* Bildhilfen für den Vokabeltrainer (vokabeln.html)
   1) Eigene animierte SVG-Szenen für wichtige Bewegungsverben (selbst erstellt)
   2) Piktogramme von ARASAAC, live geladen von arasaac.org
      Piktogramm-Urheber: Sergio Palao. Herkunft: ARASAAC (https://arasaac.org).
      Eigentümer: Regierung von Aragón (Spanien). Lizenz: CC BY-NC-SA 4.0.
   Umfang: A1 Lektion 1 bis 16 (bis Adjektive 2).
   Bilder, die die Antwort eindeutig verraten (Ziffern, Farben, Flaggen, Uhrzeiten ...), stehen nur auf der Antwortseite.
   Abstrakte Wörter (caso, fatto, modo ...) bekommen bewusst kein Bild. */
(function(){

/* ── ARASAAC: Vokabel → Piktogramm-ID (von Hand geprüft) ── */
var PIC = {"casa":2317,"acqua":2248,"pane":2494,"uomo":4665,"donna":4703,"bambino":2485,"giorno":26799,"notte":26997,"anno":6903,"ora":7129,"nome":27357,"città":2704,"strada":2302,"scuola":3082,"libro":2450,"tavolo":3129,"porta":2535,"finestra":2611,"mano":2928,"testa":2673,"cibo":4610,"vino":2614,"caffè":2296,"latte":2445,"carne":2316,"pesce":2520,"verdura":28343,"paese":38586,"sedia":3155,"occhio":6573,"orecchio":2871,"bocca":2663,"naso":2887,"piede":2841,"gamba":8666,"braccio":2669,"cuore":2715,"stomaco":3309,"schiena":2748,"dente":10267,"capelli":2851,"cosa":11318,"parte":5436,"punto":3218,"mondo":30015,"mare":2925,"montagna":2909,"fiume":2811,"lago":6022,"cielo":38270,"sole":2798,"luna":2933,"stella":2752,"fuoco":4654,"terra":3160,"luce":8619,"buio":8643,"colore":5968,"suono":27073,"parola":9837,"lettera":2688,"numero":2879,"prezzo":9874,"soldi":4630,"conto":38971,"negozio":9117,"mercato":32942,"supermercato":3389,"farmacia":3313,"ospedale":3116,"medico":2467,"polizia":2824,"banca":6055,"ufficio":27533,"chiesa":3118,"piazza":6184,"parco":2859,"giardino":2434,"cucina":5965,"bagno":5921,"letto":2304,"divano":2571,"armadio":2258,"specchio":2385,"chiave":8153,"telefono":2791,"computer":7190,"televisione":25498,"radio":24336,"camera":5988,"salotto":39108,"immagine":2360,"essere":5465,"avere":7271,"fare":11749,"stare":5466,"sapere":9034,"potere":11750,"volere":5441,"dovere":15523,"vedere":2474,"sentire":6572,"parlare":3345,"mangiare":2349,"bere":2276,"dormire":2369,"lavorare":2599,"studiare":2387,"comprare":6457,"leggere":2447,"scrivere":2380,"dire":9693,"chiedere":9844,"chiamare":6552,"rispondere":9031,"lavare":34826,"pulire":3351,"cucinare":2342,"giocare":2439,"vestirsi":2781,"aiutare":4570,"capire":6019,"pensare":8661,"ricordare":11357,"dimenticare":26258,"imparare":8029,"insegnare":26809,"mostrare":11308,"guardare":6564,"ascoltare":2381,"toccare":3293,"tenere":39414,"lasciare":11748,"vincere":7218,"pagare":29070,"costare":9874,"vendere":6652,"ricevere":17042,"spedire":21828,"mandare":25062,"usare":15485,"cambiare":8053,"cominciare":5431,"finire":5358,"continuare":17050,"smettere":28429,"provare":26144,"decidere":37861,"scegliere":11694,"preferire":30510,"piacere":21917,"amare":6600,"odiare":38936,"avere fame":7272,"avere sete":7273,"avere freddo":28653,"avere caldo":28655,"avere paura":35571,"avere ragione":21381,"avere torto":22198,"avere bisogno di":37160,"stare bene":5397,"stare male":7040,"mattina":25704,"pomeriggio":7268,"ieri":6926,"oggi":7131,"domani":7152,"adesso":13026,"dopo":13080,"prima":13028,"sempre":17322,"mai":5527,"spesso":37029,"a volte":27564,"primavera":5553,"estate":5604,"autunno":5531,"inverno":5493,"minuto":37374,"raramente":27385,"settimana":7244,"mese":7161,"padre":2497,"madre":31148,"fratello":2423,"sorella":2422,"figlio":9887,"figlia":9885,"nonno":2244,"nonna":2243,"zio":30255,"zia":30271,"cugino":30340,"nipote":10342,"marito":11550,"moglie":11552,"fidanzato":38939,"fidanzata":38937,"amico":8487,"amica":8486,"persona":34557,"gente":7116,"ragazzo":4673,"ragazza":10206,"signore":4744,"signora":4745,"bambina":10362,"anziano":25796,"adulto":6886,"famiglia":2392,"bello":11194,"brutto":4648,"grande":4658,"piccolo":4716,"buono":4581,"cattivo":4690,"nuovo":4705,"vecchio":4770,"lungo":4675,"corto":4615,"alto":4557,"basso":4571,"largo":4559,"stretto":4643,"caro":4589,"economico":4574,"facile":4645,"difficile":4629,"forte":4655,"debole":4620,"stanco":2314,"contento":3245,"triste":2606,"arrabbiato":2374,"simpatico":7251,"antipatico":6902,"gentile":33994,"vicino":30383,"sera":3176,"ciao":6009,"arrivederci":34467,"grazie":8128,"per favore":38907,"scusa":11625,"scusi":11625,"sì":5584,"no":5526,"benvenuto":6936,"età":7072,"indirizzo":30231,"germania":8011,"italia":8143,"lingua":32546,"abitare":7302,"conoscere":6993,"auguri":13018,"complimenti":38566,"cognome":27327,"nazionalità":12338,"bene":5397,"male":5504,"va bene":5397,"tedesco":8011,"italiano":8143,"chiamarsi":27357,"a domani":7152,"salve":6009,"salutare":6009,"chi":9853,"che cosa":22620,"dove":7764,"quando":22621,"perché":11348,"come":22619,"quale":11351,"molto":7168,"poco":7209,"troppo":39188,"niente":29839,"tutto":5596,"qualcuno":5374,"metà":19570,"litro":7145,"euro":5092,"centesimo":4775,"pezzo":27093,"fetta":35045,"bottiglia":2288,"scatola":5935,"pacco":38946,"tazza":2582,"lattina":6545,"più":5508,"meno":5512,"contare":2714,"compleanno":3087,"calendario":3071,"festa":7099,"data":34799,"fine settimana":36706,"weekend":36706,"subito":25736,"dopodomani":38277,"l'altro ieri":38272,"in ritardo":37780,"vacanze":3166,"natale":3134,"capodanno":32536,"orologio da polso":2549,"pasqua":39162,"tardi":32749,"poi":32749,"meteo":8233,"pioggia":3123,"neve":3135,"vento":7259,"nuvola":2883,"temporale":34892,"nebbia":2885,"ghiaccio":7128,"temperatura":34898,"grado":34898,"piovere":7148,"nevicare":7172,"fa caldo":6952,"fa freddo":31886,"fa bel tempo":2798,"sereno":2798,"nuvoloso":2882,"albero":2256,"caldo":4583,"freddo":4652,"fiore":3102,"erba":3113,"pianta":3143,"animale":6901,"cane":2517,"gatto":2406,"uccello":2490,"cavallo":2294,"mucca":2609,"pesce rosso":2520,"spiaggia":2826,"bosco":2666,"campagna":2683,"isola":2966,"sabbia":4565,"pietra":6594,"natura":20389,"arcobaleno":2986,"angolo":3382,"semaforo":2567,"ponte":6194,"centro":15748,"museo":3132,"pasticceria":3361,"gelateria":3347,"pizzeria":11344,"monumento":36297,"incrocio":39244,"bar":4573,"panetteria":6576,"edicola":2956,"posta":3086,"hotel":9895,"marciapiede":2247,"quartiere":25849,"palazzo":38882,"edificio":5989,"torre":6232,"duomo":3118,"via":2302,"fontana":3273,"parcheggio":6283,"centro commerciale":11211,"tempo libero":11653,"film":24797,"canzone":24795,"calcio":7137,"partita":6170,"squadra":7088,"gioco":9810,"nuotare":6568,"ballare":6052,"cantare":2315,"suonare":2521,"disegnare":8088,"dipingere":5574,"viaggiare":10186,"foto":7107,"chitarra":2417,"pianoforte":2521,"concerto":11584,"fare sport":30604,"piscina":3142,"bici":2277,"videogioco":21945,"fumetto":3401,"divertente":8593,"noioso":31744,"annoiarsi":2245,"divertirsi":8992,"riposare":3299,"invitare":11287,"regalo":3149,"festeggiare":7099,"biglietto del cinema":4602,"campeggio":5939,"preferito":30012,"svegliarsi":8988,"lavarsi":2271,"fare la doccia":2371,"pettinarsi":2512,"visitare":11396,"ordinare":15377,"vivere":7302,"nascere":8176,"piangere":3239,"ridere":30393,"sorridere":13354,"baciare":6062,"abbracciare":6023,"fumare":7112,"guidare":2712,"ripetere":11752,"tradurre":37085,"telefonare":36306,"rispondere al telefono":36306,"aspettare l'autobus":2263,"preparare":6190,"prepararsi":6190,"fare colazione":4625,"fare i compiti":32556,"fare la spesa":8986,"andare a letto":2369,"mangiare fuori":32408,"morire":8172,"giovane":26146,"felice":6892,"allegro":8582,"sano":12293,"pulito":4680,"sporco":4750,"malato":7040,"ricco":4733,"povero":4723,"magro":25048,"pronto":17004,"vero":39287,"importante":11471,"giusto":21381,"sbagliato":22198,"stesso":4667,"diverso":4628,"gratis":11582,"tranquillo":31310,"famoso":10203,"timido":8707,"salato":4739,"buonissimo":32340,"chiaro":4604,"pesante":27025,"leggero":4679,"carino":11194,"bellissimo":4660};

/* ── SVG-Baukasten ── */
var INK="var(--ink,#2B2A26)", ACC="var(--verde,#2F7D4F)", OBJ="var(--oro,#9A6F12)", OBJL="var(--oro-l,#FBF0D6)",
    ARR="var(--rosso,#C2412D)", PAP="var(--paper,#FFFDF8)", LINE="var(--line,#EADFC9)";
var G = 90; // Bodenlinie

function pl(pts,c,w){ return '<polyline points="'+pts.join(" ")+'" fill="none" stroke="'+(c||INK)+'" stroke-width="'+(w||4)+'" stroke-linecap="round" stroke-linejoin="round"/>'; }
function ln(x1,y1,x2,y2,c,w){ return pl([x1,y1,x2,y2],c,w); }

/* Strichfigur: Posen in lokalen Koordinaten (Füße bei y=0, Blick nach rechts) */
var POSE = {
  stand:{h:[0,-56], s:[[0,-48,0,-24],[-11,-30,0,-44,11,-30],[-8,0,0,-24,8,0]]},
  walkA:{h:[2,-56], s:[[2,-48,0,-24],[-9,-32,2,-44,12,-34],[-11,0,-5,-12,0,-24,7,-11,10,0]]},
  walkB:{h:[2,-56], s:[[2,-48,0,-24],[12,-32,2,-44,-8,-34],[10,0,4,-12,0,-24,-3,-12,-6,0]]},
  runA: {h:[7,-54], s:[[5,-46,0,-24],[5,-42,13,-36,19,-42],[5,-42,-4,-36,-10,-30],[-16,-6,-8,-12,0,-24,10,-14,6,0]]},
  runB: {h:[7,-54], s:[[5,-46,0,-24],[5,-42,-3,-36,-9,-41],[5,-42,12,-35,16,-29],[12,-6,6,-14,0,-24,-6,-12,-2,0]]},
  sit:  {h:[0,-59], s:[[0,-51,0,-27],[0,-47,9,-37,15,-33],[0,-27,16,-27,16,0]]},
  jump: {h:[0,-62], s:[[0,-54,0,-32],[-13,-64,0,-50,13,-64],[-9,-14,-6,-22,0,-32,6,-22,9,-14]]},
  win:  {h:[0,-56], s:[[0,-48,0,-24],[-13,-62,0,-44,13,-62],[-8,0,0,-24,8,0]]},
  give: {h:[0,-56], s:[[0,-48,0,-24],[17,-40,0,-44,15,-35],[-8,0,0,-24,8,0]]},
  hold: {h:[0,-56], s:[[0,-48,0,-24],[13,-36,0,-44,13,-30],[-8,0,0,-24,8,0]]},
  holdA:{h:[2,-56], s:[[2,-48,0,-24],[14,-36,2,-44,14,-30],[-11,0,-5,-12,0,-24,7,-11,10,0]]},
  holdB:{h:[2,-56], s:[[2,-48,0,-24],[14,-36,2,-44,14,-30],[10,0,4,-12,0,-24,-3,-12,-6,0]]},
  wait: {h:[0,-56], s:[[0,-48,0,-24],[-6,-30,-12,-37,0,-44,12,-37,6,-30],[-8,0,0,-24,8,0]]},
  look: {h:[0,-56], s:[[0,-48,0,-24],[18,-44,0,-44],[0,-44,-9,-31],[-8,0,0,-24,8,0]]},
  wave: {h:[0,-56], s:[[0,-48,0,-24],[-11,-30,0,-44,12,-56,16,-62],[-8,0,0,-24,8,0]]}
};
function P(name,x,y,opt){
  opt=opt||{}; var p=POSE[name], c=opt.c||INK;
  var body=p.s.map(function(s){return pl(s,c,4);}).join("")+
    '<circle cx="'+p.h[0]+'" cy="'+p.h[1]+'" r="7.5" fill="'+PAP+'" stroke="'+c+'" stroke-width="4"/>';
  return '<g transform="translate('+x+','+(y==null?G:y)+')'+(opt.flip?' scale(-1,1)':'')+'">'+body+'</g>';
}
/* Gehende Figur: zwei Schrittposen im Wechsel */
function walker(a,b,x,opt){ return '<g class="vb-stepA">'+P(a,x,G,opt)+'</g><g class="vb-stepB">'+P(b,x,G,opt)+'</g>'; }
function g(cls,inner,style){ return '<g class="'+cls+'"'+(style?' style="'+style+'"':'')+'>'+inner+'</g>'; }

function ground(){ return ln(8,G+1,152,G+1,LINE,2); }
function chair(x){ return pl([x-12,40,x-12,G],OBJ,4)+pl([x-12,66,x+10,66,x+10,G],OBJ,4); }
function table(x){ return ln(x-22,64,x+22,64,OBJ,5)+ln(x-17,64,x-17,G,OBJ,4)+ln(x+17,64,x+17,G,OBJ,4); }
function box(x,y){ return '<rect x="'+(x-8)+'" y="'+(y-12)+'" width="16" height="12" rx="2" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="2.5"/>'+ln(x,y-12,x,y,OBJ,1.5); }
function frame(x){ return '<rect x="'+x+'" y="38" width="30" height="'+(G-38)+'" fill="'+LINE+'" stroke="'+OBJ+'" stroke-width="3"/>'; }
function panel(x,cls){ return '<g class="'+cls+'"><rect x="'+x+'" y="38" width="30" height="'+(G-38)+'" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="3"/><circle cx="'+(x+24)+'" cy="66" r="2.5" fill="'+OBJ+'"/></g>'; }
function house(x,doorOpen){
  return '<polygon points="'+(x-26)+','+52+' '+x+','+28+' '+(x+26)+','+52+'" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="3" stroke-linejoin="round"/>'+
    '<rect x="'+(x-22)+'" y="52" width="44" height="'+(G-52)+'" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="3"/>'+
    '<rect x="'+(x-8)+'" y="66" width="16" height="'+(G-66)+'" fill="'+(doorOpen?INK:LINE)+'" opacity="'+(doorOpen?.75:1)+'"/>';
}
function flag(x){ return ln(x,G,x,40,INK,3)+'<polygon class="vb-wave" points="'+x+',40 '+(x+22)+',47 '+x+',54" fill="'+ARR+'"/>'; }
function arrow(dir,x,y,len){
  len=len||22; var h=7, p;
  if(dir==="up")    p=ln(x,y,x,y-len,ARR,4)+pl([x-h,y-len+h,x,y-len,x+h,y-len+h],ARR,4);
  if(dir==="down")  p=ln(x,y,x,y+len,ARR,4)+pl([x-h,y+len-h,x,y+len,x+h,y+len-h],ARR,4);
  if(dir==="right") p=ln(x,y,x+len,y,ARR,4)+pl([x+len-h,y-h,x+len,y,x+len-h,y+h],ARR,4);
  if(dir==="left")  p=ln(x,y,x-len,y,ARR,4)+pl([x-len+h,y-h,x-len,y,x-len+h,y+h],ARR,4);
  return p;
}
function txt(s,x,y,size,c){ return '<text x="'+x+'" y="'+y+'" font-size="'+(size||18)+'" font-weight="800" text-anchor="middle" fill="'+(c||ARR)+'" font-family="system-ui,sans-serif">'+s+'</text>'; }
function clock(x,y){ return '<circle cx="'+x+'" cy="'+y+'" r="15" fill="'+PAP+'" stroke="'+OBJ+'" stroke-width="3"/>'+ln(x,y,x+7,y,INK,3)+
  '<g class="vb-spin" style="transform-origin:'+x+'px '+y+'px">'+ln(x,y,x,y-11,ARR,2.5)+'</g>'; }
function lens(x,y){ return '<circle cx="'+x+'" cy="'+y+'" r="9" fill="rgba(255,255,255,.5)" stroke="'+INK+'" stroke-width="3.5"/>'+ln(x+6,y+6,x+15,y+15,INK,4.5); }
function key(x,y){ return '<circle cx="'+x+'" cy="'+y+'" r="5" fill="none" stroke="'+OBJ+'" stroke-width="3"/>'+pl([x+5,y,x+18,y,x+18,y+4],OBJ,3)+ln(x+13,y,x+13,y+4,OBJ,3); }
function suitcase(x,y){ return '<rect x="'+(x-7)+'" y="'+(y-11)+'" width="14" height="11" rx="2" fill="'+ARR+'"/>'+pl([x-3,y-11,x-3,y-14,x+3,y-14,x+3,y-11],INK,2); }
function shadow(x,cls){ return '<ellipse class="'+(cls||"")+'" cx="'+x+'" cy="'+(G+1)+'" rx="13" ry="3" fill="'+INK+'" opacity=".18" style="transform-origin:'+x+'px '+(G+1)+'px"/>'; }

/* ── Szenen ── */
var S = {
  alzarsi: function(){ return chair(64)+g("vb-fA",P("sit",56))+g("vb-fB",P("stand",66))+g("vb-fB vb-rise",arrow("up",104,62)); },
  sedersi: function(){ return chair(64)+g("vb-fA",P("stand",66))+g("vb-fB",P("sit",56))+g("vb-fB vb-sink",arrow("down",104,36)); },
  entrare: function(){ return house(122,true)+g("vb-walk",walker("walkA","walkB",22),"--dx:96px")+arrow("right",58,24); },
  uscire:  function(){ return house(38,true)+g("vb-walkOut",walker("walkA","walkB",38),"--dx:96px")+arrow("right",80,24); },
  aprire:  function(){ return frame(64)+panel(64,"vb-open")+'<path d="M104 40 q14 18 0 36" fill="none" stroke="'+ARR+'" stroke-width="4" stroke-linecap="round"/>'+pl([98,72,104,76,106,69],ARR,4); },
  chiudere:function(){ return frame(64)+panel(64,"vb-close")+'<path d="M104 76 q14 -18 0 -36" fill="none" stroke="'+ARR+'" stroke-width="4" stroke-linecap="round"/>'+pl([98,44,104,40,106,47],ARR,4); },
  cadere:  function(){ return g("vb-fall",P("stand",80),"transform-origin:80px 90px")+g("vb-fB",txt("✦",104,58,16)+txt("✦",120,70,12)); },
  saltare: function(){ return shadow(80,"vb-shadow")+g("vb-jump",P("jump",80,86))+arrow("up",118,64); },
  correre: function(){ return g("vb-run",walker("runA","runB",18),"--dx:110px")+g("vb-run",ln(-2,50,-16,50,ARR,3)+ln(0,62,-12,62,ARR,3),"--dx:110px"); },
  camminare:function(){ return g("vb-stroll",walker("walkA","walkB",30),"--dx:90px"); },
  andare:  function(){ return g("vb-walk",walker("walkA","walkB",30),"--dx:80px")+arrow("right",64,22,30); },
  venire:  function(){ return P("wave",22,G,{c:ACC})+g("vb-walk",walker("walkA","walkB",138,{flip:true}),"--dx:-90px")+arrow("left",104,22,30); },
  arrivare:function(){ return flag(128)+g("vb-arrive",walker("walkA","walkB",20),"--dx:88px")+g("vb-fB",txt("✓",140,30,20,ACC)); },
  partire: function(){ return house(30,false)+g("vb-walkOut",walker("walkA","walkB",64),"--dx:84px")+g("vb-walkOut",suitcase(80,72),"--dx:84px"); },
  tornare: function(){ return house(126,false)+'<path d="M40 30 q46 -22 74 0" fill="none" stroke="'+ARR+'" stroke-width="4" stroke-linecap="round"/>'+pl([106,26,114,30,108,37],ARR,4)+g("vb-walk",walker("walkA","walkB",30),"--dx:78px"); },
  dare:    function(){ return P("give",44)+P("hold",116,G,{flip:true,c:ACC})+g("vb-move",box(62,54),"--dx:36px;--dy:0px"); },
  prendere:function(){ return table(112)+P("hold",44)+g("vb-move",box(108,64),"--dx:-49px;--dy:-2px")+arrow("left",96,28); },
  portare: function(){ return g("vb-walk",walker("holdA","holdB",30)+box(46,58),"--dx:78px"); },
  mettere: function(){ return table(106)+P("give",46)+g("vb-move",box(64,52),"--dx:42px;--dy:12px")+arrow("down",128,22,18); },
  togliere:function(){ return table(80)+box(80,64)+g("vb-lift",box(80,52),"--dx:46px;--dy:-30px")+arrow("up",58,46); },
  cercare: function(){ return P("look",40)+g("vb-sweep",lens(70,44),"--dx:56px")+g("vb-fB",txt("?",134,30,22)); },
  trovare: function(){ return P("look",40)+key(112,80)+g("vb-find",lens(70,44),"--dx:36px;--dy:28px")+g("vb-fB",txt("!",132,62,24,ACC)); },
  perdere: function(){ return P("hold",56)+g("vb-drop",key(66,56),"--dy:30px")+g("vb-fB",txt("?",44,24,22)); },
  aspettare:function(){ return P("wait",58)+clock(110,46)+txt("…",58,22,20,INK); }
};

/* ── Eigene Bilder ohne Boden: Zahlen, Ordnungszahlen, Farben, Wochentage, Monate, Tageszeiten ── */
function dots(n){
  if (n>12) return "";
  var out="", cols=Math.min(n,6), rows=Math.ceil(n/6), r=4.2, gap=12;
  for (var k=0;k<n;k++){ var c=k%6, rw=Math.floor(k/6), inRow=(rw<rows-1)?6:(n-6*(rows-1));
    var x=80-(inRow-1)*gap/2+c*gap, y=74+rw*12;
    out+='<circle class="vb-pop" style="animation-delay:'+(k*.12)+'s" cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+ARR+'"/>'; }
  return out;
}
function zahl(n){ return function(){ return txt(String(n).replace(/(\d)(?=(\d{3})+$)/,"$1."), 80, n>12?64:52, n>12?40:34, ACC)+dots(n); }; }
function podest(place){ return function(){
  var H={1:46,2:32,3:22}, X={2:34,1:80,3:126}, out="";
  [2,1,3].forEach(function(p){ var on=p===place;
    out+='<rect x="'+(X[p]-22)+'" y="'+(G-H[p])+'" width="44" height="'+H[p]+'" rx="3" fill="'+(on?ARR:OBJL)+'" stroke="'+(on?ARR:OBJ)+'" stroke-width="2.5"/>'+
         txt(p+".",X[p],G-H[p]+18,15,on?PAP:OBJ);
    if(on) out+='<g class="vb-hop"><g transform="translate('+X[p]+','+(G-H[p])+') scale(.55) translate('+(-X[p])+','+(-(G-H[p]))+')">'+P("win",X[p],G-H[p],{c:INK})+'</g></g>'; });
  return out; }; }
function farbe(c){ return function(){ return '<g class="vb-blob"><path d="M80 18 C108 14 124 34 120 56 C116 80 96 92 74 88 C50 84 36 70 40 48 C44 28 58 20 80 18Z" fill="'+c+'" stroke="rgba(0,0,0,.18)" stroke-width="2"/></g>'; }; }
function woche(d){ return function(){ var out="";
  for (var k=0;k<7;k++){ var x=13+k*20, on=k===d, we=k>=5;
    out+='<rect class="'+(on?"vb-pulse":"")+'" x="'+x+'" y="34" width="16" height="34" rx="4" fill="'+(on?ARR:(we?"#F3E2C6":OBJL))+'" stroke="'+(on?ARR:OBJ)+'" stroke-width="2" style="transform-origin:'+(x+8)+'px 51px"/>'; }
  return out+txt("1",21,84,11,OBJ)+txt("7",141,84,11,OBJ); }; }
function monat(m){ return function(){ var out="";
  for (var k=0;k<12;k++){ var c=k%4, r=Math.floor(k/4), x=36+c*23, y=14+r*25, on=k===m;
    out+='<rect class="'+(on?"vb-pulse":"")+'" x="'+x+'" y="'+y+'" width="19" height="21" rx="3" fill="'+(on?ARR:OBJL)+'" stroke="'+(on?ARR:OBJ)+'" stroke-width="2" style="transform-origin:'+(x+9.5)+'px '+(y+10.5)+'px"/>'+
      txt(k+1,x+9.5,y+15,10,on?PAP:OBJ); }
  return out; }; }
function sonne(cls,y){ return '<g class="'+cls+'"><circle cx="80" cy="'+y+'" r="14" fill="#E9B63B"/>'+
  [0,45,90,135,180,225,270,315].map(function(a){var r=a*Math.PI/180;return ln(80+Math.cos(r)*19,y+Math.sin(r)*19,80+Math.cos(r)*25,y+Math.sin(r)*25,"#E9B63B",3);}).join("")+'</g>'; }
function horizont(){ return '<rect x="8" y="70" width="144" height="26" fill="'+PAP+'"/>'+ln(8,70,152,70,OBJ,3); }
function mond(){ return '<path class="vb-glow" d="M92 22 a22 22 0 1 0 14 38 a18 18 0 1 1 -14 -38z" fill="#E9CF8A"/>'+txt("✦",42,34,12,"#E9B63B")+txt("✦",124,26,10,"#E9B63B")+txt("✦",58,70,9,"#E9B63B"); }
function glas(cls){ return '<clipPath id="vbg"><path d="M60 22 L100 22 L94 88 L66 88Z"/></clipPath>'+
  '<g clip-path="url(#vbg)"><rect class="'+cls+'" x="56" y="22" width="48" height="66" fill="#7FB8D9"/></g>'+
  '<path d="M60 22 L100 22 L94 88 L66 88Z" fill="none" stroke="'+INK+'" stroke-width="3.5" stroke-linejoin="round"/>'; }

var NG = {
  "uno":zahl(1),"due":zahl(2),"tre":zahl(3),"quattro":zahl(4),"cinque":zahl(5),"sei":zahl(6),"sette":zahl(7),"otto":zahl(8),
  "nove":zahl(9),"dieci":zahl(10),"undici":zahl(11),"dodici":zahl(12),"venti":zahl(20),"trenta":zahl(30),"cento":zahl(100),"mille":zahl(1000),
  "primo":podest(1),"secondo":podest(2),"terzo":podest(3),
  "rosso":farbe("#D23B2E"),"blu":farbe("#2F5FC4"),"verde":farbe("#3A9A5B"),"giallo":farbe("#F2CC2E"),"bianco":farbe("#FFFFFF"),
  "nero":farbe("#1E1E1E"),"grigio":farbe("#9A9A9A"),"rosa":farbe("#F4A6C1"),"arancione":farbe("#F28C28"),"viola":farbe("#8A4FC2"),"marrone":farbe("#8B5A2B"),
  "lunedì":woche(0),"martedì":woche(1),"mercoledì":woche(2),"giovedì":woche(3),"venerdì":woche(4),"sabato":woche(5),"domenica":woche(6),
  "gennaio":monat(0),"febbraio":monat(1),"marzo":monat(2),"aprile":monat(3),"maggio":monat(4),"giugno":monat(5),
  "luglio":monat(6),"agosto":monat(7),"settembre":monat(8),"ottobre":monat(9),"novembre":monat(10),"dicembre":monat(11),
  "buongiorno":function(){ return sonne("vb-rise2",48)+horizont(); },
  "buonasera":function(){ return '<rect x="8" y="4" width="144" height="66" fill="#F6D7B0" opacity=".5"/>'+sonne("vb-set",48)+horizont(); },
  "buonanotte":mond,
  "pieno":function(){ return glas("vb-fill"); },
  "vuoto":function(){ return glas("vb-empty"); },
  "secondo|sekunde":function(){ return '<circle cx="80" cy="52" r="32" fill="'+PAP+'" stroke="'+INK+'" stroke-width="4"/>'+ln(80,14,80,20,INK,5)+ln(72,12,88,12,INK,5)+
     '<g class="vb-tick" style="transform-origin:80px 52px">'+ln(80,52,80,28,ARR,3.5)+'</g><circle cx="80" cy="52" r="3.5" fill="'+INK+'"/>'; }
};
/* Bewegte Gegensätze mit Boden */
S.veloce = function(){ return g("vb-run",walker("runA","runB",18),"--dx:110px")+g("vb-run",ln(-2,50,-16,50,ARR,3)+ln(0,62,-12,62,ARR,3),"--dx:110px"); };
S.lento  = function(){ return g("vb-slow",'<path d="M26 '+G+' L70 '+G+' q6 0 6 -6 L76 80" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="3" stroke-linejoin="round"/>'+
  '<circle cx="50" cy="72" r="16" fill="#E9CF8A" stroke="'+OBJ+'" stroke-width="3"/><path d="M50 72 m0 -9 a9 9 0 1 1 -8 5 a5 5 0 1 1 6 -2" fill="none" stroke="'+OBJ+'" stroke-width="2.5"/>'+
  ln(74,80,78,66,OBJ,2.5)+ln(76,80,84,68,OBJ,2.5)+'<circle cx="78" cy="65" r="2.5" fill="'+INK+'"/><circle cx="84" cy="67" r="2.5" fill="'+INK+'"/>',"--dx:46px")+txt("…",120,40,22,INK); };
S.aperto = S.aprire; S.chiuso = S.chiudere;

/* ── Lektion 9 bis 12: Präpositionen, Mengen, Uhrzeiten ── */
function kiste(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="3"/>'; }
function ball(x,y,r,cls){ return '<circle class="'+(cls||"")+'" cx="'+x+'" cy="'+y+'" r="'+(r||9)+'" fill="'+ARR+'" stroke="#8E2C1F" stroke-width="2"/>'; }
function zeigen(x,tx){ return '<g transform="translate('+x+','+G+')">'+pl([0,-48,0,-24],INK,4)+pl([0,-44,(tx-x)>0?16:-16,-40],INK,4)+pl([-8,0,0,-24,8,0],INK,4)+
  '<circle cx="0" cy="-56" r="7.5" fill="'+PAP+'" stroke="'+INK+'" stroke-width="4"/></g>'; }
function uhr(h,m,sector){ return function(){
  var cx=80,cy=50,r=34, out='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+PAP+'" stroke="'+INK+'" stroke-width="4"/>';
  if (sector){ var a=sector/60*2*Math.PI, x=cx+Math.sin(a)*(r-3), y=cy-Math.cos(a)*(r-3);
    out+='<path class="vb-glow" d="M'+cx+' '+cy+' L'+cx+' '+(cy-r+3)+' A'+(r-3)+' '+(r-3)+' 0 '+(sector>30?1:0)+' 1 '+x.toFixed(1)+' '+y.toFixed(1)+'Z" fill="'+ARR+'" opacity=".55"/>'; }
  for (var k=0;k<12;k++){ var a2=k/12*2*Math.PI; out+=ln(cx+Math.sin(a2)*(r-4),cy-Math.cos(a2)*(r-4),cx+Math.sin(a2)*(r-9),cy-Math.cos(a2)*(r-9),INK,k%3?2:3.5); }
  var ha=(h%12+m/60)/12*2*Math.PI, ma=m/60*2*Math.PI;
  out+=ln(cx,cy,cx+Math.sin(ha)*17,cy-Math.cos(ha)*17,INK,5)+ln(cx,cy,cx+Math.sin(ma)*26,cy-Math.cos(ma)*26,INK,3.5)+'<circle cx="'+cx+'" cy="'+cy+'" r="3.5" fill="'+INK+'"/>';
  if (h===0) out+=mondKlein(); if (h===12) out+='<circle cx="134" cy="22" r="9" fill="#E9B63B"/>';
  return out; }; }
function mondKlein(){ return '<path d="M132 12 a11 11 0 1 0 7 19 a9 9 0 1 1 -7 -19z" fill="#E9CF8A"/>'; }
function torte(teil){ return function(){
  var cx=80,cy=50,r=34, a=teil*2*Math.PI, x=cx+Math.sin(a)*r, y=cy-Math.cos(a)*r;
  return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="3"/>'+
    '<g class="vb-pulse" style="transform-origin:'+cx+'px '+cy+'px"><path d="M'+cx+' '+cy+' L'+cx+' '+(cy-r)+' A'+r+' '+r+' 0 '+(teil>.5?1:0)+' 1 '+x.toFixed(1)+' '+y.toFixed(1)+'Z" fill="'+ARR+'" stroke="#8E2C1F" stroke-width="2.5"/></g>'; }; }
function reihe(n,on){ return function(){ var out="", w=18, x0=80-(n*w+(n-1)*4)/2;
  for (var k=0;k<n;k++){ var x=x0+k*(w+4), act=k===on;
    out+='<rect class="'+(act?"vb-pulse":"")+'" x="'+x+'" y="40" width="'+w+'" height="24" rx="4" fill="'+(act?ARR:OBJL)+'" stroke="'+(act?ARR:OBJ)+'" stroke-width="2" style="transform-origin:'+(x+w/2)+'px 52px"/>'; }
  return out+'<g class="vb-sweep" style="--dx:'+((n-1)*(w+4))+'px">'+arrow("right",x0-2,78,16)+'</g>'; }; }

Object.assign(NG, {
  "zero":zahl(0),"tredici":zahl(13),"quattordici":zahl(14),"quindici":zahl(15),"sedici":zahl(16),"diciassette":zahl(17),"diciotto":zahl(18),
  "diciannove":zahl(19),"quaranta":zahl(40),"cinquanta":zahl(50),"sessanta":zahl(60),"settanta":zahl(70),"ottanta":zahl(80),"novanta":zahl(90),
  "duecento":zahl(200),"milione":zahl(1000000),
  "mezzo":torte(.5),"quarto":torte(.25),"quinto":reihe(6,4),"ultimo":reihe(6,5),
  "mezzogiorno":uhr(12,0),"mezzanotte":uhr(0,0),"mezz'ora":uhr(3,30,30),"quarto d'ora":uhr(3,15,15),
  "doppio":function(){ return kiste(36,38,26,26)+txt("×2",80,57,16,ARR)+'<g class="vb-fB">'+kiste(98,38,26,26)+kiste(102,34,26,26)+'</g>'; }
});
S.su      = function(){ return kiste(56,52,48,38)+ball(80,43,9,"vb-land"); };
S.sopra   = function(){ return kiste(56,58,48,32)+'<g class="vb-bob">'+ball(80,26,9)+'</g>'+'<line x1="80" y1="38" x2="80" y2="54" stroke="'+ARR+'" stroke-width="2" stroke-dasharray="3 3"/>'; };
S.sotto   = function(){ return table(80)+ball(80,G-9,9,"vb-roll"); };
S.in      = function(){ return ball(80,60,9,"vb-dropin")+'<path d="M54 50 L54 90 L106 90 L106 50" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="3" opacity=".6"/>'+ln(54,50,44,40,OBJ,3)+ln(106,50,116,40,OBJ,3); };
S.davanti = function(){ return kiste(66,40,52,50)+ball(70,74,14); };
S.dietro  = function(){ return ball(94,46,14)+kiste(54,46,52,44); };
S.fra     = function(){ return kiste(22,52,36,38)+kiste(102,52,36,38)+ball(80,81,9,"vb-bob"); };
S.lontano = function(){ return P("look",24)+'<line x1="44" y1="60" x2="124" y2="60" stroke="'+ARR+'" stroke-width="2.5" stroke-dasharray="5 5"/>'+pl([116,53,126,60,116,67],ARR,3)+'<g transform="translate(140,'+G+') scale(.5) translate(-140,-'+G+')">'+house(140,false)+'</g>'; };
S.qui     = function(){ return zeigen(64,90)+'<g class="vb-pulse" style="transform-origin:86px 88px">'+'<ellipse cx="86" cy="88" rx="12" ry="3.5" fill="none" stroke="'+ARR+'" stroke-width="3"/></g>'+arrow("down",86,58,24); };
S["lì"]   = function(){ return zeigen(30,130)+ball(122,G-9,9)+'<line x1="50" y1="46" x2="112" y2="70" stroke="'+ARR+'" stroke-width="2.5" stroke-dasharray="5 5"/>'; };
S["là"]   = function(){ return zeigen(22,150)+'<g transform="translate(146,'+G+') scale(.45) translate(-146,-'+G+')">'+house(146,false)+'</g>'+'<line x1="42" y1="46" x2="132" y2="60" stroke="'+ARR+'" stroke-width="2.5" stroke-dasharray="5 5"/>'; };
S.con     = function(){ return P("hold",46)+box(62,58)+P("hold",108,G,{flip:true,c:ACC})+ln(60,52,94,52,"transparent",1); };
S.senza   = function(){ return P("stand",56)+'<g opacity=".55">'+box(104,G)+'</g>'+ln(90,64,118,92,ARR,4)+ln(118,64,90,92,ARR,4); };

/* ── Lektion 13 bis 16: Wege, Richtungen, Bewegungen ── */
function strasse(){ return '<path d="M64 98 L64 54 L8 54 L8 30 L152 30 L152 54 L96 54 L96 98Z" fill="#E6DDCB" stroke="'+OBJ+'" stroke-width="2"/>'; }
function weg(d){ return '<path class="vb-draw" d="'+d+'" fill="none" stroke="'+ARR+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" pathLength="100"/>'; }
function spitze(x,y,dir){ var h=8, p={up:[x-h,y+h,x,y,x+h,y+h],right:[x-h,y-h,x,y,x-h,y+h],left:[x+h,y-h,x,y,x+h,y+h]}[dir];
  return '<g class="vb-fB">'+pl(p,ARR,5)+'</g>'; }
function treppe(){ var out=""; for (var k=0;k<5;k++) out+='<rect x="'+(30+k*20)+'" y="'+(G-(k+1)*9)+'" width="'+(130-30-k*20)+'" height="9" fill="'+OBJL+'" stroke="'+OBJ+'" stroke-width="2"/>'; return out; }
function klein(name,x,y,sc){ return '<g transform="translate('+x+','+y+') scale('+sc+') translate('+(-x)+','+(-y)+')">'+P(name,x,y)+'</g>'; }
function birne(an){ return '<g class="'+(an?"vb-on":"vb-off")+'"><circle cx="80" cy="40" r="20" stroke="'+INK+'" stroke-width="3.5"/></g>'+
  '<rect x="71" y="58" width="18" height="14" rx="2" fill="#B9B2A3" stroke="'+INK+'" stroke-width="3"/>'+ln(73,64,87,64,INK,2)+
  '<g class="'+(an?"vb-rays":"vb-rays-off")+'">'+[[-35,40,-27,40],[35,40,27,40],[-25,15,-19,21],[25,15,19,21],[0,4,0,12]].map(function(r){return ln(80+r[0],r[1],80+r[2],r[3],"#E9B63B",3.5);}).join("")+'</g>'; }

S.destra   = function(){ return strasse()+weg("M80 96 L80 44 L140 44")+spitze(140,44,"right"); };
S.sinistra = function(){ return strasse()+weg("M80 96 L80 44 L20 44")+spitze(20,44,"left"); };
S.dritto   = function(){ return '<path d="M64 98 L64 4 L96 4 L96 98Z" fill="#E6DDCB" stroke="'+OBJ+'" stroke-width="2"/>'+weg("M80 96 L80 12")+spitze(80,12,"up"); };
S.girare   = function(){ return strasse()+weg("M80 96 L80 60 Q80 44 96 44 L140 44")+spitze(140,44,"right"); };
S.attraversare = function(){ var z=""; for (var k=0;k<5;k++) z+='<rect x="'+(50+k*13)+'" y="72" width="8" height="18" fill="#fff" stroke="'+LINE+'"/>';
  return '<rect x="8" y="70" width="144" height="22" fill="#B9B2A3"/>'+z+'<g transform="translate(0,-18)">'+g("vb-walk",walker("walkA","walkB",30),"--dx:100px")+'</g>'; };
S.salire   = function(){ return treppe()+g("vb-climb",klein("stand",40,G-9,.62),"--dx:80px;--dy:-36px")+arrow("up",146,56); };
S.scendere = function(){ return treppe()+g("vb-climb",klein("stand",120,G-45,.62),"--dx:-80px;--dy:36px")+arrow("down",146,32); };
S.accendere= function(){ return birne(true); };
S.spegnere = function(){ return birne(false); };
S.fermarsi = function(){ return '<g transform="translate(130,0)">'+ln(0,G,0,50,INK,3)+'<polygon points="-9,22 9,22 18,31 18,45 9,54 -9,54 -18,45 -18,31" fill="'+ARR+'" stroke="#8E2C1F" stroke-width="2"/></g>'+
  g("vb-arrive",walker("walkA","walkB",20),"--dx:74px"); };
S.volare   = function(){ return g("vb-fly",'<path d="M20 50 q10 -12 20 0 q10 -12 20 0" fill="none" stroke="'+INK+'" stroke-width="4" stroke-linecap="round"/>',"--dx:90px")+'<path d="M8 74 q40 -16 80 0 t64 -6" fill="none" stroke="'+LINE+'" stroke-width="2" stroke-dasharray="4 5"/>'; };
S["accanto a"]  = function(){ return kiste(48,46,40,44)+ball(100,G-11,11,"vb-pulse"); };
S["vicino a"]   = function(){ return house(62,false)+ball(98,G-9,9,"vb-pulse"); };
S["lontano da"] = S.lontano;
S["di fronte a"]= function(){ return '<rect x="64" y="30" width="32" height="62" fill="#E6DDCB"/>'+P("stand",36)+P("stand",124,G,{flip:true,c:ACC})+'<line x1="48" y1="44" x2="112" y2="44" stroke="'+ARR+'" stroke-width="2.5" stroke-dasharray="5 5"/>'; };

var CSS = "\
.vbild{display:flex;flex-direction:column;align-items:center;margin:6px 0 0}\
.vbild svg{width:116px;height:73px;overflow:visible}\
.vbild img{width:72px;height:72px;object-fit:contain;border-radius:12px;background:#fff;padding:3px;box-shadow:0 1px 3px rgba(60,40,10,.12)}\
.vb-credit{max-width:560px;margin:14px auto 24px;padding:0 16px;font-size:9px;line-height:1.4;color:var(--soft,#A79F90);text-align:center}\
.vb-credit a{color:inherit}\
.vb-toggle{position:absolute;bottom:12px;left:12px;border:none;background:var(--bg,#FBF6EC);border-radius:50%;width:36px;height:36px;font-size:16px;cursor:pointer}\
.vb-toggle.off{opacity:.45;filter:grayscale(1)}\
.vbild g{transform-box:view-box}\
.vbild .vb-fA{animation:vbFA 3.2s infinite}\
.vbild .vb-fB{animation:vbFB 3.2s infinite}\
@keyframes vbFA{0%,38%{opacity:1}48%,92%{opacity:0}100%{opacity:1}}\
@keyframes vbFB{0%,38%{opacity:0}48%,92%{opacity:1}100%{opacity:0}}\
.vbild .vb-rise{animation:vbFB 3.2s infinite,vbRise 3.2s infinite}\
.vbild .vb-sink{animation:vbFB 3.2s infinite,vbSink 3.2s infinite}\
@keyframes vbRise{0%,40%{transform:translateY(10px)}70%,100%{transform:translateY(0)}}\
@keyframes vbSink{0%,40%{transform:translateY(-10px)}70%,100%{transform:translateY(0)}}\
.vbild .vb-stepA{animation:vbStepA .5s steps(1) infinite}\
.vbild .vb-stepB{animation:vbStepB .5s steps(1) infinite}\
@keyframes vbStepA{0%{opacity:1}50%{opacity:0}}\
@keyframes vbStepB{0%{opacity:0}50%{opacity:1}}\
.vbild .vb-walk{animation:vbWalk 3.2s linear infinite}\
@keyframes vbWalk{0%{transform:translateX(0);opacity:0}8%{opacity:1}78%{transform:translateX(var(--dx));opacity:1}92%,100%{transform:translateX(var(--dx));opacity:0}}\
.vbild .vb-walkOut{animation:vbWalkOut 3.2s linear infinite}\
@keyframes vbWalkOut{0%{transform:translateX(0);opacity:0}12%{opacity:1}80%{transform:translateX(var(--dx));opacity:1}92%,100%{transform:translateX(var(--dx));opacity:0}}\
.vbild .vb-arrive{animation:vbArrive 3.2s linear infinite}\
@keyframes vbArrive{0%{transform:translateX(0);opacity:0}8%{opacity:1}45%,92%{transform:translateX(var(--dx));opacity:1}100%{transform:translateX(var(--dx));opacity:0}}\
.vbild .vb-run{animation:vbWalk 1.8s linear infinite}\
.vbild .vb-run .vb-stepA,.vbild .vb-run .vb-stepB{animation-duration:.3s}\
.vbild .vb-stroll{animation:vbWalk 4.8s linear infinite}\
.vbild .vb-stroll .vb-stepA,.vbild .vb-stroll .vb-stepB{animation-duration:.8s}\
.vbild .vb-open{transform-origin:64px 0;transform-box:view-box;animation:vbOpen 3.2s infinite}\
.vbild .vb-close{transform-origin:64px 0;transform-box:view-box;animation:vbClose 3.2s infinite}\
@keyframes vbOpen{0%,25%{transform:scaleX(1)}55%,92%{transform:scaleX(.2)}100%{transform:scaleX(1)}}\
@keyframes vbClose{0%,25%{transform:scaleX(.2)}55%,92%{transform:scaleX(1)}100%{transform:scaleX(.2)}}\
.vbild .vb-fall{animation:vbFall 3.2s infinite}\
@keyframes vbFall{0%,25%{transform:rotate(0)}50%{transform:rotate(84deg)}54%{transform:rotate(78deg)}58%,92%{transform:rotate(84deg)}100%{transform:rotate(0)}}\
.vbild .vb-jump{animation:vbJump 1.2s cubic-bezier(.3,0,.7,1) infinite}\
@keyframes vbJump{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}\
.vbild .vb-shadow{animation:vbShadow 1.2s cubic-bezier(.3,0,.7,1) infinite}\
@keyframes vbShadow{0%,100%{transform:scale(1)}50%{transform:scale(.55)}}\
.vbild .vb-move{animation:vbMove 3.2s ease-in-out infinite}\
@keyframes vbMove{0%,20%{transform:translate(0,0)}60%,90%{transform:translate(var(--dx),var(--dy))}100%{transform:translate(0,0)}}\
.vbild .vb-lift{animation:vbLift 3.2s ease-in-out infinite}\
@keyframes vbLift{0%,20%{transform:translate(0,0);opacity:1}65%{transform:translate(var(--dx),var(--dy));opacity:1}80%,92%{transform:translate(var(--dx),var(--dy));opacity:0}100%{transform:translate(0,0);opacity:0}}\
.vbild .vb-sweep{animation:vbSweep 2.4s ease-in-out infinite}\
@keyframes vbSweep{0%,100%{transform:translateX(0)}50%{transform:translateX(var(--dx))}}\
.vbild .vb-find{animation:vbMove 3.2s ease-in-out infinite}\
.vbild .vb-drop{animation:vbDrop 3.2s infinite}\
@keyframes vbDrop{0%,30%{transform:translateY(0) rotate(0)}48%{transform:translateY(var(--dy)) rotate(0)}52%{transform:translateY(calc(var(--dy) - 4px))}56%,92%{transform:translateY(var(--dy))}100%{transform:translateY(0)}}\
.vbild .vb-spin{animation:vbSpin 3.2s linear infinite;transform-box:view-box}\
@keyframes vbSpin{to{transform:rotate(360deg)}}\
.vbild .vb-wave{animation:vbWaveF 1s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}\
@keyframes vbWaveF{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.8)}}\
.vbild .vb-pop{animation:vbPop .4s cubic-bezier(.2,1.6,.4,1) both;transform-box:fill-box;transform-origin:center}\
@keyframes vbHop{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}\
@keyframes vbPop{from{transform:scale(0)}to{transform:scale(1)}}\
.vbild .vb-hop{animation:vbHop 1.2s cubic-bezier(.3,0,.7,1) infinite}\
.vbild .vb-blob{animation:vbBlob 3s ease-in-out infinite;transform-box:fill-box;transform-origin:center}\
@keyframes vbBlob{0%,100%{transform:scale(1) rotate(0)}50%{transform:scale(1.06) rotate(4deg)}}\
.vbild .vb-pulse{animation:vbPulse 1.6s ease-in-out infinite}\
@keyframes vbPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}\
.vbild .vb-rise2{animation:vbSun 3.2s ease-out infinite}\
@keyframes vbSun{0%{transform:translateY(40px)}60%,100%{transform:translateY(0)}}\
.vbild .vb-set{animation:vbSet 3.2s ease-in infinite}\
@keyframes vbSet{0%,15%{transform:translateY(0)}80%,100%{transform:translateY(40px)}}\
.vbild .vb-glow{animation:vbGlow 2.4s ease-in-out infinite}\
@keyframes vbGlow{0%,100%{opacity:1}50%{opacity:.7}}\
.vbild .vb-fill{animation:vbFill 3.2s ease-in-out infinite}\
@keyframes vbFill{0%,10%{transform:translateY(66px)}70%,100%{transform:translateY(4px)}}\
.vbild .vb-empty{animation:vbFill 3.2s ease-in-out infinite reverse}\
.vbild .vb-tick{animation:vbTick 4s steps(8) infinite}\
@keyframes vbTick{to{transform:rotate(360deg)}}\
.vbild .vb-slow{animation:vbWalk 6s linear infinite}\
.vbild .vb-bob{animation:vbBob 2s ease-in-out infinite}\
@keyframes vbBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\
.vbild .vb-land{animation:vbLand 3.2s ease-in infinite}\
@keyframes vbLand{0%{transform:translateY(-34px);opacity:0}15%{opacity:1}45%,92%{transform:translateY(0);opacity:1}100%{opacity:0}}\
.vbild .vb-dropin{animation:vbDropIn 3.2s ease-in infinite}\
@keyframes vbDropIn{0%{transform:translateY(-48px);opacity:0}15%{opacity:1}50%,90%{transform:translateY(10px);opacity:1}100%{transform:translateY(10px);opacity:0}}\
.vbild .vb-roll{animation:vbRoll 3.2s ease-in-out infinite}\
@keyframes vbRoll{0%{transform:translateX(-60px)}45%,90%{transform:translateX(0)}100%{transform:translateX(-60px)}}\
.vbild .vb-draw{stroke-dasharray:100;animation:vbDraw 3.2s ease-in-out infinite}\
@keyframes vbDraw{0%{stroke-dashoffset:100}45%,92%{stroke-dashoffset:0}100%{stroke-dashoffset:100}}\
.vbild .vb-climb{animation:vbClimb 3.2s ease-in-out infinite}\
@keyframes vbClimb{0%,10%{transform:translate(0,0);opacity:1}75%,88%{transform:translate(var(--dx),var(--dy));opacity:1}100%{transform:translate(var(--dx),var(--dy));opacity:0}}\
.vbild .vb-on circle{animation:vbOn 3.2s infinite}\
@keyframes vbOn{0%,30%{fill:#F1EDE4}45%,92%{fill:#F7D354}100%{fill:#F1EDE4}}\
.vbild .vb-off circle{animation:vbOn 3.2s infinite reverse}\
.vbild .vb-rays{animation:vbFB 3.2s infinite}\
.vbild .vb-rays-off{animation:vbFA 3.2s infinite}\
.vbild .vb-fly{animation:vbFly 3.2s ease-in-out infinite}\
@keyframes vbFly{0%{transform:translate(0,10px)}50%{transform:translate(calc(var(--dx)/2),-10px)}100%{transform:translate(var(--dx),6px)}}\
@media (prefers-reduced-motion:reduce){.vbild *{animation:none!important}.vbild .vb-fA,.vbild .vb-stepB{opacity:0}.vbild .vb-fB,.vbild .vb-rise,.vbild .vb-sink{opacity:1}}";

var st=document.createElement("style"); st.textContent=CSS; document.head.appendChild(st);

/* Öffentliche Schnittstelle für vokabeln.html */
/* Diese Bilder verraten die Antwort eindeutig (Ziffern, Farben, Flaggen, Uhrzeiten, Bruchteile): nur auf der Antwortseite */
var NUR_HINTEN = /^$/;
var NUR_HINTEN_SET = {};
["uno","due","tre","quattro","cinque","sei","sette","otto","nove","dieci","undici","dodici","venti","trenta","cento","mille",
 "zero","tredici","quattordici","quindici","sedici","diciassette","diciotto","diciannove","quaranta","cinquanta","sessanta","settanta","ottanta","novanta","duecento","milione",
 "primo","secondo","terzo","quarto","quinto","ultimo","mezzo","doppio",
 "rosso","blu","verde","giallo","bianco","nero","grigio","rosa","arancione","viola","marrone",
 "lunedì","martedì","mercoledì","giovedì","venerdì","sabato","domenica",
 "gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",
 "mezzogiorno","mezzanotte","mezz'ora","quarto d'ora"].forEach(function(w){ NUR_HINTEN_SET[w]=1; });
var NUR_HINTEN_PIC = {};
[8011,8143,5092,4775,5508,5512,19570].forEach(function(id){ NUR_HINTEN_PIC[id]=1; });

window.IT_BILD = function(it, de){
  var k=(it||"").toLowerCase().trim().replace(/\/[a-z]+$/,""), kd=k+"|"+(de||"").toLowerCase().trim();
  var svg=function(inner){ return {type:"anim", svg:'<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+inner+'</svg>'}; };
  var b=null;
  if (NG[kd]) b=svg(NG[kd]());
  else if (S[k]) b=svg(ground()+S[k]());
  else if (NG[k]) b=svg(NG[k]());
  if (b){ b.backOnly = NUR_HINTEN.test(k) || NUR_HINTEN_SET[k]===1; return b; }
  if (PIC[k]) { var id=PIC[k]; return {type:"pic", id:id, backOnly: NUR_HINTEN_PIC[id]===1,
      src:"https://static.arasaac.org/pictograms/"+id+"/"+id+"_300.png",
      alt:"https://api.arasaac.org/v1/pictograms/"+id+"?download=false"}; }
  return null;
};
})();

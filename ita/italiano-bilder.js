/* Bildhilfen für den Vokabeltrainer (vokabeln.html)
   1) Eigene animierte SVG-Szenen für wichtige Bewegungsverben (selbst erstellt)
   2) Piktogramme von ARASAAC, live geladen von arasaac.org
      Piktogramm-Urheber: Sergio Palao. Herkunft: ARASAAC (https://arasaac.org).
      Eigentümer: Regierung von Aragón (Spanien). Lizenz: CC BY-NC-SA 4.0.
   Testumfang: A1 Lektion 1 bis 4 (Grundwörter 1/2, Verben 1/2).
   Abstrakte Wörter (caso, fatto, modo ...) bekommen bewusst kein Bild. */
(function(){

/* ── ARASAAC: Vokabel → Piktogramm-ID (von Hand geprüft) ── */
var PIC = {"casa":2317,"acqua":2248,"pane":2494,"uomo":4665,"donna":4703,"bambino":2485,"giorno":26799,"notte":26997,"anno":6903,"ora":7129,"nome":27357,"città":2704,"strada":2302,"scuola":3082,"libro":2450,"tavolo":3129,"porta":2535,"finestra":2611,"mano":2928,"testa":2673,"cibo":4610,"vino":2614,"caffè":2296,"latte":2445,"carne":2316,"pesce":2520,"verdura":28343,"paese":38586,"sedia":3155,"occhio":6573,"orecchio":2871,"bocca":2663,"naso":2887,"piede":2841,"gamba":8666,"braccio":2669,"cuore":2715,"stomaco":3309,"schiena":2748,"dente":10267,"capelli":2851,"cosa":11318,"parte":5436,"punto":3218,"mondo":30015,"mare":2925,"montagna":2909,"fiume":2811,"lago":6022,"cielo":38270,"sole":2798,"luna":2933,"stella":2752,"fuoco":4654,"terra":3160,"luce":8619,"buio":8643,"colore":5968,"suono":27073,"parola":9837,"lettera":2688,"numero":2879,"prezzo":9874,"soldi":4630,"conto":38971,"negozio":9117,"mercato":32942,"supermercato":3389,"farmacia":3313,"ospedale":3116,"medico":2467,"polizia":2824,"banca":6055,"ufficio":27533,"chiesa":3118,"piazza":6184,"parco":2859,"giardino":2434,"cucina":5965,"bagno":5921,"letto":2304,"divano":2571,"armadio":2258,"specchio":2385,"chiave":8153,"telefono":2791,"computer":7190,"televisione":25498,"radio":24336,"camera":5988,"salotto":39108,"immagine":2360,"essere":5465,"avere":7271,"fare":11749,"stare":5466,"sapere":9034,"potere":11750,"volere":5441,"dovere":15523,"vedere":2474,"sentire":6572,"parlare":3345,"mangiare":2349,"bere":2276,"dormire":2369,"lavorare":2599,"studiare":2387,"comprare":6457,"leggere":2447,"scrivere":2380,"dire":9693,"chiedere":9844,"chiamare":6552,"rispondere":9031,"lavare":34826,"pulire":3351,"cucinare":2342,"giocare":2439,"vestirsi":2781,"aiutare":4570,"capire":6019,"pensare":8661,"ricordare":11357,"dimenticare":26258,"imparare":8029,"insegnare":26809,"mostrare":11308,"guardare":6564,"ascoltare":2381,"toccare":3293,"tenere":39414,"lasciare":11748,"vincere":7218,"pagare":29070,"costare":9874,"vendere":6652,"ricevere":17042,"spedire":21828,"mandare":25062,"usare":15485,"cambiare":8053,"cominciare":5431,"finire":5358,"continuare":17050,"smettere":28429,"provare":26144,"decidere":37861,"scegliere":11694,"preferire":30510,"piacere":21917,"amare":6600,"odiare":38936,"avere fame":7272,"avere sete":7273,"avere freddo":28653,"avere caldo":28655,"avere paura":35571,"avere ragione":21381,"avere torto":22198,"avere bisogno di":37160,"stare bene":5397,"stare male":7040};

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
@media (prefers-reduced-motion:reduce){.vbild *{animation:none!important}.vbild .vb-fA,.vbild .vb-stepB{opacity:0}.vbild .vb-fB,.vbild .vb-rise,.vbild .vb-sink{opacity:1}}";

var st=document.createElement("style"); st.textContent=CSS; document.head.appendChild(st);

/* Öffentliche Schnittstelle für vokabeln.html */
window.IT_BILD = function(it){
  var k=(it||"").toLowerCase().trim();
  if (S[k]) return {type:"anim", svg:'<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+ground()+S[k]()+'</svg>'};
  if (PIC[k]) { var id=PIC[k]; return {type:"pic", id:id,
      src:"https://static.arasaac.org/pictograms/"+id+"/"+id+"_300.png",
      alt:"https://api.arasaac.org/v1/pictograms/"+id+"?download=false"}; }
  return null;
};
})();

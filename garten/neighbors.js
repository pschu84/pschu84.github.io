/* Pflanz-Nachbarn (Mischkultur)
   Grundlage: BUND, „Mischkultur: Gute und schlechte Nachbarn“ (BUND-Pflanzplan, naturnahes Gärtnern).
   Die Tabelle wird hier auf die Einträge der Pflanzenbibliothek abgebildet.
   Regel: Ein Paar gilt als gut, wenn es mindestens einmal als gut und nie als schlecht genannt ist,
   und als ungünstig, wenn es mindestens einmal als schlecht und nie als gut genannt ist.
   Widersprüchliche Paare (in der Vorlage z. B. Erbsen und Stangenbohnen) werden weggelassen. */
(function () {
  const G = {
    "Buschbohnen": ["buschbohne"], "Stangenbohnen": ["stangenbohne"], "Bohnen": ["buschbohne", "stangenbohne"],
    "Dill": ["dill"], "Erbsen": ["erbse"], "Erdbeeren": ["erdbeere"], "Gurken": ["gurke"],
    "Kartoffeln": ["kartoffel"], "Knoblauch": ["knoblauch"], "Kohlgewächse": ["gruenkohl", "blattsenf"],
    "Kohlrabi": ["kohlrabi"], "Salat": ["salat"], "Kürbis": ["kuerbis"], "Lauch": ["lauch"], "Mais": ["mais"],
    "Mangold": ["mangold"], "Möhren": ["moehre"], "Paprika": ["paprika"], "Petersilie": ["petersilie"],
    "Pfefferminze": ["minze"], "Radieschen": ["radieschen"], "Rhabarber": ["rhabarber"], "Rote Bete": ["rotebete"],
    "Salbei": ["salbei"], "Spinat": ["spinat"], "Tomaten": ["tomate"], "Zucchini": ["zucchini"],
    "Zwiebeln": ["zwiebel"], "Estragon": ["estragon"], "Himbeeren": ["himbeere", "himbeere-herbst"],
    "Obstbäume": ["apfel", "birne", "suesskirsche", "sauerkirsche", "saeulenobst", "pflaume", "mirabelle", "reneklode", "pfirsich", "aprikose", "quitte", "nashi", "prunus"]
  };
  // Art | gute Nachbarn | schlechte Nachbarn (Namen ohne Bibliothekseintrag, z. B. Sellerie, Fenchel, werden ignoriert)
  const T = [
    ["Buschbohnen", "Tomaten,Rhabarber,Radieschen,Rote Bete,Salat,Mangold,Gurken,Kohlrabi,Kohlgewächse,Kartoffeln", "Zwiebeln,Lauch,Knoblauch,Erbsen"],
    ["Dill", "Zwiebeln,Rote Bete,Salat,Möhren,Gurken,Erbsen", "Estragon"],
    ["Erbsen", "Radieschen,Salat,Kohlgewächse,Kohlrabi,Dill,Möhren", "Tomaten,Stangenbohnen,Lauch,Knoblauch,Kartoffeln"],
    ["Erdbeeren", "Radieschen,Rote Bete,Petersilie,Lauch,Knoblauch,Buschbohnen,Salat,Zwiebeln,Spinat", "Kohlgewächse,Kartoffeln,Tomaten,Himbeeren"],
    ["Gurken", "Zwiebeln,Stangenbohnen,Rote Bete,Salat,Kohlgewächse,Knoblauch,Buschbohnen,Dill", "Radieschen"],
    ["Kartoffeln", "Spinat,Pfefferminze,Kohlrabi,Dill,Buschbohnen", "Tomaten,Erbsen,Rote Bete,Kohlgewächse"],
    ["Knoblauch", "Tomaten,Rote Bete,Obstbäume,Gurken,Möhren,Erdbeeren", "Bohnen,Erbsen,Kohlgewächse"],
    ["Kohlgewächse", "Tomaten,Stangenbohnen,Spinat,Rhabarber,Buschbohnen,Salat,Gurken,Radieschen,Mangold,Lauch,Erdbeeren,Erbsen", "Kohlgewächse,Zwiebeln,Knoblauch,Kartoffeln"],
    ["Kohlrabi", "Tomaten,Stangenbohnen,Spinat,Lauch,Kartoffeln,Buschbohnen,Erbsen,Rote Bete,Radieschen,Salat", ""],
    ["Salat", "Zwiebeln,Tomaten,Stangenbohnen,Buschbohnen,Kohlrabi,Kohlgewächse,Rhabarber,Dill,Radieschen,Gurken,Erdbeeren,Erbsen,Pfefferminze,Mais,Lauch,Rote Bete", "Petersilie"],
    ["Kürbis", "Bohnen,Mais,Kohlrabi,Erbsen,Zwiebeln", "Gurken,Tomaten"],
    ["Lauch", "Tomaten,Salat,Kohlrabi,Kohlgewächse,Möhren,Erdbeeren", "Stangenbohnen,Buschbohnen,Erbsen,Rote Bete"],
    ["Mais", "Salat,Kürbis,Gurken,Kartoffeln", "Rote Bete,Tomaten"],
    ["Mangold", "Radieschen,Kohlgewächse,Möhren,Buschbohnen", ""],
    ["Möhren", "Zwiebeln,Tomaten,Erbsen,Dill,Lauch,Knoblauch,Radieschen,Mangold", ""],
    ["Paprika", "Möhren,Zwiebeln,Lauch,Gurken,Erdbeeren", ""],
    ["Petersilie", "Tomaten,Radieschen,Erdbeeren", "Salat"],
    ["Pfefferminze", "Tomaten,Salat,Möhren", ""],
    ["Radieschen", "Tomaten,Stangenbohnen,Spinat,Salat,Petersilie,Mangold,Kohlgewächse,Möhren,Kohlrabi,Erdbeeren,Erbsen,Buschbohnen", "Gurken"],
    ["Rhabarber", "Spinat,Salat,Kohlgewächse,Buschbohnen", ""],
    ["Rote Bete", "Zwiebeln,Salat,Kohlrabi,Knoblauch,Gurken,Erdbeeren,Dill,Buschbohnen", "Mais,Lauch"],
    ["Spinat", "Tomaten,Stangenbohnen,Rhabarber,Radieschen,Kohlrabi,Kohlgewächse,Kartoffeln,Erdbeeren", "Rote Bete,Mangold"],
    ["Stangenbohnen", "Zucchini,Spinat,Radieschen,Salat,Kohlrabi,Kohlgewächse,Gurken", "Zwiebeln,Lauch,Knoblauch"],
    ["Tomaten", "Spinat,Radieschen,Salat,Pfefferminze,Petersilie,Mais,Kohlrabi,Kohlgewächse,Knoblauch,Möhren,Buschbohnen,Lauch", "Kartoffeln,Erbsen"],
    ["Zucchini", "Zwiebeln,Stangenbohnen", ""],
    ["Zwiebeln", "Zucchini,Rote Bete,Dill,Gurken,Salat,Möhren,Erdbeeren", "Stangenbohnen,Kohlgewächse,Buschbohnen"],
    ["Obstbäume", "Knoblauch", ""]
  ];
  // Kurze Begründungen für bekannte Paare (Schlüssel alphabetisch sortiert, mit „|“ getrennt)
  const WHY = {
    "moehre|zwiebel": "Der Geruch soll Möhrenfliege und Zwiebelfliege gegenseitig verwirren.",
    "lauch|moehre": "Der Geruch soll Möhrenfliege und Lauchmotte gegenseitig verwirren.",
    "kartoffel|tomate": "Beide sind Nachtschattengewächse und bekommen dieselbe Kraut- und Braunfäule.",
    "erdbeere|himbeere": "Gemeinsame Schädlinge und Krankheiten, z. B. Erdbeerblütenstecher und Grauschimmel.",
    "blattsenf|gruenkohl": "Beides Kreuzblütler: gleiche Schädlinge und Krankheiten (Kohlweißling, Kohlhernie).",
    "mangold|spinat": "Nahe verwandt (Fuchsschwanzgewächse): Konkurrenz um dieselben Nährstoffe und gleiche Schädlinge.",
    "rotebete|spinat": "Nahe verwandt (Fuchsschwanzgewächse): Konkurrenz um dieselben Nährstoffe und gleiche Schädlinge.",
    "buschbohne|zwiebel": "Zwiebelgewächse gelten als wachstumshemmend für Bohnen und Erbsen.",
    "stangenbohne|zwiebel": "Zwiebelgewächse gelten als wachstumshemmend für Bohnen und Erbsen.",
    "buschbohne|lauch": "Zwiebelgewächse gelten als wachstumshemmend für Bohnen und Erbsen.",
    "lauch|stangenbohne": "Zwiebelgewächse gelten als wachstumshemmend für Bohnen und Erbsen.",
    "buschbohne|knoblauch": "Zwiebelgewächse gelten als wachstumshemmend für Bohnen und Erbsen.",
    "knoblauch|stangenbohne": "Zwiebelgewächse gelten als wachstumshemmend für Bohnen und Erbsen.",
    "erbse|lauch": "Zwiebelgewächse gelten als wachstumshemmend für Bohnen und Erbsen.",
    "erbse|knoblauch": "Zwiebelgewächse gelten als wachstumshemmend für Bohnen und Erbsen.",
    "kuerbis|mais": "Klassische Mischkultur „Drei Schwestern“ mit Bohnen: Mais gibt Halt, Kürbis beschattet den Boden.",
    "gurke|kuerbis": "Beides Kürbisgewächse: gleiche Krankheiten wie Mehltau, Konkurrenz um Platz.",
    "kohlrabi|tomate": "Tomaten sollen Kohlweißlinge fernhalten.",
    "gruenkohl|tomate": "Tomaten sollen Kohlweißlinge fernhalten.",
    "kartoffel|rotebete": "", "erbse|tomate": ""
  };
  const tmp = {};
  const ids = n => G[n.trim()] || [];
  function mark(a, b, v) {
    if (a === b) return;
    const k = a < b ? a + "|" + b : b + "|" + a;
    const e = tmp[k] || (tmp[k] = { g: 0, b: 0 }); e[v]++;
  }
  T.forEach(([art, gut, schlecht]) => {
    ids(art).forEach(a => {
      gut.split(",").filter(Boolean).forEach(n => ids(n).forEach(b => mark(a, b, "g")));
      schlecht.split(",").filter(Boolean).forEach(n => ids(n).forEach(b => mark(a, b, "b")));
    });
  });
  const NB = {};
  Object.keys(tmp).forEach(k => { const e = tmp[k]; if (e.g && !e.b) NB[k] = "g"; else if (e.b && !e.g) NB[k] = "b"; });
  window.NEIGH = {
    rel(a, b) { if (!a || !b || a === b) return null; return NB[a < b ? a + "|" + b : b + "|" + a] || null; },
    why(a, b) { return WHY[a < b ? a + "|" + b : b + "|" + a] || ""; },
    of(id) {
      const g = [], b = [];
      Object.keys(NB).forEach(k => { const [x, y] = k.split("|"); const o = x === id ? y : y === id ? x : null; if (o) (NB[k] === "g" ? g : b).push(o); });
      return { g, b };
    },
    source: "BUND: Mischkultur – Gute und schlechte Nachbarn",
    url: "https://www.bund.net/fileadmin/user_upload_bund/publikationen/naturnahes-gaertnern/Mischkultur-Gemuese-BUND.pdf"
  };
})();

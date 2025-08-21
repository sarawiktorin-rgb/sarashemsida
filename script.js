// ---------- Data ----------
const recipes = [
  {
    id: "tomatpasta",
    title: "Krämig tomatpasta",
    time: "20 min", servings: 2,
    tags: ["billigt","snabbt","vego"],
    emoji: "🍝",
    ingredients: [
      "250 g pasta",
      "1 gul lök",
      "2 vitlöksklyftor",
      "1 burk krossade tomater (400 g)",
      "1 dl matlagningsgrädde (valfritt)",
      "1 msk olivolja",
      "Salt och svartpeppar",
      "Färsk basilika (valfritt)"
    ],
    steps: [
      "Koka pastan enligt anvisning.",
      "Fräs hackad lök och vitlök i olja 2–3 min.",
      "Häll i krossade tomater, låt sjuda 5 min. Rör i grädde om du vill.",
      "Smaka av med salt och peppar. Blanda med pastan. Toppa med basilika."
    ]
  },
  {
    id: "kikartsgryta",
    title: "Kikärtsgryta med spenat",
    time: "25 min", servings: 3,
    tags: ["billigt","nyttigt","veganskt","vego"],
    emoji: "🍲",
    ingredients: [
      "1 gul lök",
      "2 vitlöksklyftor",
      "1 msk curry eller garam masala",
      "1 burk krossade tomater (400 g)",
      "1 burk kikärter (400 g), sköljda",
      "2–3 nävar färsk spenat",
      "1 msk olja, salt & peppar"
    ],
    steps: [
      "Fräs lök och vitlök i olja.",
      "Tillsätt kryddor, tomater och kikärter. Sjud 10–12 min.",
      "Vänd ner spenat tills den faller ihop. Smaka av."
    ]
  },
  {
    id: "tonfiskpasta",
    title: "Tonfiskpasta",
    time: "15 min", servings: 2,
    tags: ["billigt","snabbt","fisk"],
    emoji: "🐟",
    ingredients: [
      "250 g pasta",
      "1 burk tonfisk i vatten/olja",
      "1 dl crème fraiche eller grädde",
      "1 liten rödlök",
      "1 msk citronjuice",
      "Salt, peppar"
    ],
    steps: [
      "Koka pastan.",
      "Blanda avrunnen tonfisk med finhackad lök, crème fraiche och citron.",
      "Smaka av och blanda med pastan."
    ]
  },
  {
    id: "kycklingwok",
    title: "Kycklingwok med nudlar",
    time: "20 min", servings: 2,
    tags: ["snabbt","kyckling"],
    emoji: "🍜",
    ingredients: [
      "2 port äggnudlar",
      "300 g kycklingstrimlor",
      "1 påse wokgrönsaker",
      "2 msk soja",
      "1 msk olja",
      "Chili/sesam (valfritt)"
    ],
    steps: [
      "Koka nudlarna kort.",
      "Stek kyckling i olja tills genomstekt.",
      "Tillsätt grönsaker och soja, woka 3–4 min. Vänd i nudlarna."
    ]
  },
  {
    id: "ugnspannkaka",
    title: "Ugnspannkaka med bacon",
    time: "30 min", servings: 4,
    tags: ["billigt","kött"],
    emoji: "🥓",
    ingredients: [
      "4 ägg",
      "6 dl mjölk",
      "2,5 dl vetemjöl",
      "1 pkt bacon",
      "1 tsk salt"
    ],
    steps: [
      "Vispa ihop ägg, mjölk, mjöl och salt.",
      "Lägg strimlad bacon i ugnsform, förgrädda 5 min i 225°C.",
      "Häll över smeten och grädda 20–25 min."
    ]
  },
  {
    id: "shakshuka",
    title: "Shakshuka",
    time: "25 min", servings: 2,
    tags: ["billigt","vego","nyttigt"],
    emoji: "🍳",
    ingredients: [
      "1 gul lök",
      "1 paprika",
      "2 vitlöksklyftor",
      "1 burk krossade tomater (400 g)",
      "1 tsk spiskummin",
      "3–4 ägg",
      "Salt, peppar, olja"
    ],
    steps: [
      "Fräs lök, vitlök och paprika i olja.",
      "Tillsätt tomater och kryddor, sjud 8–10 min.",
      "Gör gropar och knäck i ägg. Lägg på lock tills vitan stelnat."
    ]
  },
  {
    id: "linsbolognese",
    title: "Linsbolognese",
    time: "30 min", servings: 4,
    tags: ["billigt","veganskt","vego","nyttigt"],
    emoji: "🥫",
    ingredients: [
      "1 gul lök, 2 vitlöksklyftor",
      "2 morötter",
      "1,5 dl röda linser (sköljda)",
      "1 burk krossade tomater (400 g)",
      "3 dl vatten/buljong",
      "Oregano, salt, peppar"
    ],
    steps: [
      "Fräs lök och morot.",
      "Tillsätt linser, tomat och vatten. Sjud 15–20 min.",
      "Smaka av. Servera med pasta."
    ]
  },
  {
    id: "potatis-purjo",
    title: "Potatis- & purjolökssoppa",
    time: "25 min", servings: 3,
    tags: ["billigt","vego","nyttigt"],
    emoji: "🥔",
    ingredients: [
      "600 g potatis",
      "1 purjolök",
      "1 grönsaksbuljongtärning",
      "7 dl vatten",
      "1 dl mjölk/grädde (valfritt)",
      "Salt, peppar"
    ],
    steps: [
      "Tärna potatis och strimla purjo. Fräs purjo lätt.",
      "Häll på vatten och buljong. Koka tills potatis mjuk.",
      "Mixa slät, späd med mjölk/grädde, smaka av."
    ]
  },
  {
    id: "vegotacos",
    title: "Snabba vego-tacos",
    time: "15 min", servings: 2,
    tags: ["snabbt","vego"],
    emoji: "🌮",
    ingredients: [
      "Tortillabröd",
      "1 burk svarta bönor (sköljda)",
      "1 påse sallad",
      "Salsa/majs/avokado (valfritt)",
      "Tacolibablandning",
      "Yoghurt/creme fraiche"
    ],
    steps: [
      "Värm tortillor.",
      "Stek bönor med tacokrydda 3–4 min.",
      "Fyll bröden med bönor, sallad och toppings."
    ]
  },
  {
    id: "lax-citron",
    title: "Lax i ugn med citron",
    time: "20 min", servings: 2,
    tags: ["snabbt","nyttigt","fisk"],
    emoji: "🐟",
    ingredients: [
      "2 laxfiléer",
      "1 citron",
      "Salt, peppar",
      "Olivolja",
      "Potatis/ris (till servering)"
    ],
    steps: [
      "Lägg lax i form, salta/peppra, ringla olja.",
      "Skiva citron och lägg ovanpå. Baka 12–15 min i 200°C.",
      "Servera med potatis/ris och grönsaker."
    ]
  },
  {
    id: "tikka-wraps",
    title: "Kyckling tikka-wraps",
    time: "20 min", servings: 2,
    tags: ["snabbt","kyckling"],
    emoji: "🌯",
    ingredients: [
      "300 g kycklingstrimlor",
      "2 msk tikka masala-krydda",
      "2 msk yoghurt",
      "Tortillabröd",
      "Sallad, lök, gurka"
    ],
    steps: [
      "Blanda kyckling med yoghurt och krydda. Stek tills klar.",
      "Fyll wrap med kyckling och grönsaker."
    ]
  },
  {
    id: "kottfarsas",
    title: "Köttfärssås på 20 min",
    time: "20 min", servings: 4,
    tags: ["snabbt","kött"],
    emoji: "🍝",
    ingredients: [
      "400 g nötfärs",
      "1 gul lök",
      "1 burk krossade tomater (400 g)",
      "1 msk tomatpuré",
      "Oregano, salt, peppar, olja"
    ],
    steps: [
      "Fräs lök i olja. Bryn färsen.",
      "Tillsätt tomater och tomatpuré, koka 10 min.",
      "Smaka av och servera med pasta."
    ]
  }
];

// ---------- Helpers ----------
const el = sel => document.querySelector(sel);
const els = sel => Array.from(document.querySelectorAll(sel));

function svgPlaceholder(emoji, hueA = 140, hueB = 50){
  // Skapar en enkel inspirerande bild som data-URI (SVG + gradient + emoji)
  const svg =
`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='hsl(${hueA},45%,70%)'/>
      <stop offset='1' stop-color='hsl(${hueB},85%,75%)'/>
    </linearGradient>
  </defs>
  <rect width='1200' height='800' fill='url(#g)'/>
  <g font-family='system-ui,Segoe UI,Arial' text-anchor='middle'>
    <text x='600' y='420' font-size='220'>${emoji}</text>
  </g>
  <circle cx='1080' cy='120' r='70' fill='rgba(255,255,255,.55)'/>
  <rect x='40' y='640' width='300' height='40' rx='20' fill='rgba(255,255,255,.35)'/>
</svg>`;
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

function normalize(s){ return s.toLowerCase().trim(); }

// ---------- Render cards ----------
const grid = el("#recipesGrid");
function renderCards(list){
  grid.innerHTML = "";
  list.forEach((r, idx) => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("data-id", r.id);
    card.setAttribute("data-tags", r.tags.join(","));
    card.innerHTML = `
      <div class="thumb">
        <img alt="" src="${svgPlaceholder(r.emoji, 120 + (idx*17)%60, 40 + (idx*23)%60)}"/>
      </div>
      <div class="title">
        <h3>${r.title}</h3>
        <div class="tags">
          ${r.tags.slice(0,2).map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    `;
    card.addEventListener("click", () => openRecipe(r.id));
    grid.appendChild(card);
  });
}
renderCards(recipes);

// ---------- Search & Filters ----------
const searchInput = el("#searchInput");
const activeFilters = new Set();

function applyFilters(){
  const q = normalize(searchInput.value);
  const filtered = recipes.filter(r => {
    const matchesText =
      !q ||
      normalize(r.title).includes(q) ||
      r.ingredients.some(i => normalize(i).includes(q));
    const matchesFilter =
      activeFilters.size === 0 ||
      Array.from(activeFilters).every(f => r.tags.includes(f));
    return matchesText && matchesFilter;
  });
  renderCards(filtered);
  if(filtered.length === 0){
    grid.innerHTML = `<p class="muted">Inga recept matchade din sökning eller dina filter.</p>`;
  }
}

searchInput.addEventListener("input", applyFilters);

els(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    if(btn.id === "clearFilters"){
      activeFilters.clear();
      els(".chip").forEach(b => b.setAttribute("aria-pressed","false"));
    } else {
      const f = btn.dataset.filter;
      const pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
      if(pressed) activeFilters.delete(f); else activeFilters.add(f);
    }
    applyFilters();
  });
});

// ---------- Recipe modal ----------
const modal = el("#recipeModal");
const closeRecipeBtn = el("#closeRecipe");

let lastFocus = null;
let currentRecipe = null;

function openRecipe(id){
  currentRecipe = recipes.find(r => r.id === id);
  if(!currentRecipe) return;

  el("#recipeImg").src = svgPlaceholder(currentRecipe.emoji);
  el("#recipeImg").alt = currentRecipe.title;
  el("#recipeTitle").textContent = currentRecipe.title;
  el("#recipeInfo").textContent = `${currentRecipe.time} • ${currentRecipe.servings} portioner`;
  el("#recipeTags").innerHTML = currentRecipe.tags.map(t => `<span class="tag">${t}</span>`).join("");
  el("#ingredientsList").innerHTML = currentRecipe.ingredients
    .map(i => `<li><button class="secondary add-item" data-item="${i.replace(/"/g,'&quot;')}">+ Lägg till</button> ${i}</li>`).join("");
  el("#stepsList").innerHTML = currentRecipe.steps.map(s => `<li>${s}</li>`).join("");

  els(".add-item").forEach(btn => btn.addEventListener("click", e => {
    e.stopPropagation();
    addToList(btn.dataset.item);
  }));
  el("#addAllBtn").onclick = () => {
    currentRecipe.ingredients.forEach(addToList);
  };

  lastFocus = document.activeElement;
  modal.setAttribute("aria-hidden","false");
  el("#recipeTitle").focus({preventScroll:true});
}
function closeRecipe(){
  modal.setAttribute("aria-hidden","true");
  if(lastFocus) lastFocus.focus({preventScroll:true});
}
closeRecipeBtn.addEventListener("click", closeRecipe);
modal.addEventListener("click", e => { if(e.target === modal) closeRecipe(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") {
  if(modal.getAttribute("aria-hidden")==="false") closeRecipe();
  if(drawer.getAttribute("aria-hidden")==="false") closeList();
}});

// ---------- Shopping list ----------
const drawer = el("#shoppingList");
const openListBtn = el("#openListBtn");
const closeListBtn = el("#closeList");
const listEl = el("#listItems");
const countEl = el("#listCount");

let shopping = loadList();

function loadList(){
  try{
    const raw = localStorage.getItem("studentmat_shoppingList");
    const parsed = raw ? JSON.parse(raw) : { items: [] };
    renderList(parsed.items);
    return parsed;
  }catch{ return { items: [] }; }
}
function saveList(){
  localStorage.setItem("studentmat_shoppingList", JSON.stringify(shopping));
  updateBadge();
}
function updateBadge(){
  countEl.textContent = String(shopping.items.filter(i => !i.checked).length);
}
function renderList(items){
  listEl.innerHTML = items.length ? "" : `<li class="muted" style="border:none;background:transparent">Listan är tom.</li>`;
  items.forEach((it, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input id="chk-${idx}" type="checkbox" ${it.checked?"checked":""} />
      <label for="chk-${idx}">${it.text}</label>
      <button class="linklike" aria-label="Ta bort" title="Ta bort">Ta bort</button>
    `;
    const cb = li.querySelector("input");
    cb.addEventListener("change", () => { it.checked = cb.checked; saveList(); });
    li.querySelector("button").addEventListener("click", () => {
      shopping.items.splice(idx,1); saveList(); renderList(shopping.items);
    });
    listEl.appendChild(li);
  });
  updateBadge();
}
function addToList(text){
  const exists = shopping.items.find(i => normalize(i.text) === normalize(text));
  if(!exists) shopping.items.push({ text, checked:false });
  saveList();
  renderList(shopping.items);
  // Öppna listan vid första tillägget för tydlighet
  openList();
}

function openList(){ drawer.setAttribute("aria-hidden","false"); }
function closeList(){ drawer.setAttribute("aria-hidden","true"); }
openListBtn.addEventListener("click", openList);
closeListBtn.addEventListener("click", closeList);

el("#copyList").addEventListener("click", async () => {
  const txt = shopping.items.map(i => `${i.checked?"[x]":"[ ]"} ${i.text}`).join("\n");
  try{ await navigator.clipboard.writeText(txt); alert("Inköpslistan är kopierad!"); }
  catch{ alert("Kunde inte kopiera. Markera och kopiera manuellt."); }
});
el("#downloadList").addEventListener("click", () => {
  const txt = shopping.items.map(i => `- ${i.text}`).join("\n");
  const blob = new Blob([txt], {type:"text/plain"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "inkopslista.txt";
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
});
el("#clearList").addEventListener("click", () => {
  if(confirm("Vill du tömma hela inköpslistan?")){
    shopping.items = []; saveList(); renderList(shopping.items);
  }
});

// Init badge on load
updateBadge();

// Bonus: förifyll sök med URL-param ?q=
const params = new URLSearchParams(location.search);
if(params.get("q")){ searchInput.value = params.get("q"); applyFilters(); }

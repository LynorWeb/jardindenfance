// Maquette Jardin d'enfance — démo (aucune commande réelle n'est envoyée)
const IMG = (id, v, dim = "600x10000", extra = "") =>
  `https://image.jimcdn.com/app/cms/image/transf/dimension=${dim}:format=jpg${extra}/path/s89cf7954462e4da2/image/${id}/version/${v}/image.jpg`;

const bouquets = [
  { id: "charmant", name: "Le Charmant", desc: "Fleurs de saison, tout simplement.", img: IMG("icbea1e2f4c7c2988", 1714322483), sizes: [30, 40, 50] },
  { id: "ravissant", name: "Le Ravissant", desc: "Champêtre, dans des tons pastel.", img: IMG("i84f870f7c2c594bb", 1714322483), sizes: [40, 50, 60] },
  { id: "luxuriant", name: "Le Luxuriant", desc: "Généreux, pastel ou coloré.", img: IMG("i8c0a18176fa4ca03", 1714322483), sizes: [60, 80, 100] },
  { id: "seches", name: "Fleurs séchées", desc: "Un bouquet qui dure des mois.", img: IMG("ifb04fee2e564cbf9", 1714322483), sizes: [30, 45, 60] },
];

const deuil = [
  { id: "petales", name: "Pétales, geste d'adieu", desc: "Pour 25 personnes · blanc, rose ou multicolore", img: IMG("ib09b518141e5f593", 1748655481), sizes: [30, 45, 60] },
  { id: "roses", name: "Les roses pour dire adieu", desc: "À partir de 30 roses · blanc, rose, rouge ou multicolore", img: IMG("ie2e5fef6d3be7871", 1748655481), sizes: [110, 150, 200] },
  { id: "coeur-ouvert", name: "Cœur ouvert", desc: "Composition en forme de cœur ouvert", img: IMG("i1d6ce8715724acb1", 1714322587, "1024x456", ":rotate=90"), sizes: [100, 130, 160] },
  { id: "longueur", name: "Composition longueur", desc: "Composition allongée", img: IMG("i36ed7ee5bb57d71f", 1748598378, "1024x910", ":rotate=90"), sizes: [100, 140, 180] },
  { id: "coussin", name: "Coussin rond", desc: "Coussin de fleurs fraîches", img: IMG("if0a3d8257e648d06", 1714322565, "1024x456", ":rotate=90"), sizes: [100, 130, 160] },
  { id: "couronne", name: "Couronne", desc: "Couronne de fleurs de saison", img: IMG("if966ccd72d33a76c", 1714322519), sizes: [120, 160, 200] },
  { id: "coeur", name: "Cœur", desc: "Cœur plein de fleurs fraîches", img: IMG("i87a1fcf8f29d2717", 1714322601, "1024x456", ":rotate=90"), sizes: [150, 190, 230] },
  { id: "jardin", name: "Jardin de plantes fleuries", desc: "Modèle présenté : 150 €", img: IMG("i81bf59eea0ce3727", 1748655481), sizes: [50, 100, 150] },
];

const galleryImgs = [
  IMG("i6a74d37d8e133274", 1605131341, "1000x1000", ":rotate=90"),
  IMG("idb669eda9bd8df6f", 1687601015, "1000x1000"),
  IMG("i96beab1e5351b24b", 1687601015, "1000x1000"),
  IMG("i713e351217793978", 1687601015, "1000x1000", ":rotate=90"),
  IMG("ic39b4dd2b1b96a9f", 1687601015, "1000x1000"),
  IMG("i384bd7696e7e4310", 1687601015, "1000x1000"),
  IMG("i4473f21053fcd317", 1687601009, "1000x1000"),
  IMG("i4f0f5ca1e54db8d7", 1687601009, "1000x1000"),
  IMG("id4a5c96e64e55b58", 1687601009, "1000x1000"),
];

const all = [...bouquets, ...deuil];
const $ = (s, el = document) => el.querySelector(s);
const euro = (n) => n.toLocaleString("fr-FR") + " €";
const fill = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

// --- Blocs présents selon la page
fill("#bouquetGrid", bouquets.map((p) => `
  <button class="pin reveal" data-id="${p.id}">
    <div class="pin__img"><img loading="lazy" src="${p.img}" alt="${p.name}"></div>
    <p class="pin__name">${p.name}</p>
    <p class="pin__desc">${p.desc}</p>
    <span class="tag"><small>dès</small>${euro(p.sizes[0])}</span>
  </button>`).join(""));

fill("#deuilGrid", deuil.map((p) => `
  <li class="reveal"><button data-id="${p.id}">
    <img loading="lazy" src="${p.img}" alt="${p.name}">
    <div><strong>${p.name}</strong><span>${p.desc}</span></div>
    <em><small>dès</small>${euro(p.sizes[0])}</em>
  </button></li>`).join(""));

fill("#gallery", galleryImgs.map((s, i) => `<img src="${s}" alt="Décoration florale de mariage ${i + 1}">`).join(""));

// --- Horaires + enseigne ouvert / fermé
const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const slots = [[9.5, 12.5], [14.5, 19]];
const isWorkday = (d) => d >= 2 && d <= 6;
const fmt = (h) => `${Math.floor(h)}h${h % 1 ? String(Math.round((h % 1) * 60)).padStart(2, "0") : ""}`;
const today = new Date().getDay();
fill("#hours", [2, 3, 4, 5, 6, 0, 1].map((d) =>
  `<tr class="${d === today ? "is-today" : ""}"><td>${days[d]}</td><td>${isWorkday(d) ? slots.map(([a, b]) => `${fmt(a)}–${fmt(b)}`).join(" · ") : "fermé"}</td></tr>`
).join(""));

function updateStatus() {
  const el = $("#status"), txt = $("#statusText");
  if (!el) return;
  const n = new Date(), d = n.getDay(), h = n.getHours() + n.getMinutes() / 60;
  const open = isWorkday(d) && slots.find(([a, b]) => h >= a && h < b);
  if (open) {
    el.className = "sign is-open";
    txt.textContent = `C'est ouvert ! Jusqu'à ${fmt(open[1])}`;
    return;
  }
  el.className = "sign is-closed";
  if (isWorkday(d)) {
    const next = slots.find(([a]) => h < a);
    if (next) { txt.textContent = `Fermé pour l'instant · réouverture à ${fmt(next[0])}`; return; }
  }
  let nd = (d + 1) % 7;
  while (!isWorkday(nd)) nd = (nd + 1) % 7;
  txt.textContent = `Fermé · on se retrouve ${nd === (d + 1) % 7 ? "demain" : days[nd].toLowerCase()} à ${fmt(slots[0][0])}`;
}
updateStatus();
setInterval(updateStatus, 60000);

// --- Menu mobile + en-tête
const burger = $("#burger"), mm = $("#mobileMenu");
burger.addEventListener("click", () => {
  const open = mm.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
});
mm.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { mm.classList.remove("is-open"); burger.setAttribute("aria-expanded", false); }
});
addEventListener("scroll", () => $("#header").classList.toggle("is-scrolled", scrollY > 40), { passive: true });

// --- Fiche produit
let current = null, size = 0;
const modal = $("#modal");
document.addEventListener("click", (e) => {
  const c = e.target.closest("[data-id]");
  if (!c) return;
  current = all.find((p) => p.id === c.dataset.id);
  size = current.sizes[0];
  $("#mImg").src = current.img;
  $("#mImg").alt = current.name;
  $("#mTitle").textContent = current.name;
  $("#mDesc").textContent = current.desc;
  $("#mSizes").innerHTML = current.sizes.map((s, i) =>
    `<button class="chip ${i ? "" : "is-on"}" data-size="${s}">${["Classique", "Généreux", "Prestige"][i]} · ${euro(s)}</button>`).join("");
  $("#mCard").checked = false;
  $("#mMsg").hidden = true;
  $("#mMsg").value = "";
  modal.hidden = false;
});
$("#mSizes").addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  size = +b.dataset.size;
  [...$("#mSizes").children].forEach((x) => x.classList.toggle("is-on", x === b));
});
$("#mCard").addEventListener("change", (e) => ($("#mMsg").hidden = !e.target.checked));
const closeModal = () => (modal.hidden = true);
$("#mClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => e.target === modal && closeModal());

// --- Panier (ticket de caisse), gardé dans le navigateur d'une page à l'autre
const store = {
  get() { try { return JSON.parse(localStorage.getItem("je-panier")) || {}; } catch { return {}; } },
  set(v) { try { localStorage.setItem("je-panier", JSON.stringify(v)); } catch {} },
};
const fees = { retrait: 0, caen: 9, peri: 12 };
const saved = store.get();
const cart = Array.isArray(saved.cart) ? saved.cart : [];
let mode = saved.mode in fees ? saved.mode : "retrait";
document.querySelectorAll("[data-mode]").forEach((x) => x.classList.toggle("is-on", x.dataset.mode === mode));

$("#mAdd").addEventListener("click", () => {
  const { id, name, img } = current;
  cart.push({ id, name, img, price: size, msg: $("#mCard").checked ? $("#mMsg").value : "" });
  closeModal();
  renderCart();
  openDrawer();
});
function renderCart() {
  store.set({ cart, mode });
  $("#cartCount").textContent = cart.length;
  $("#dFoot").hidden = !cart.length;
  $("#dItems").innerHTML = cart.length
    ? cart.map((it, i) => `<div class="line"><b>${it.name}</b><span>${euro(it.price)}</span><small>${it.msg ? "+ carte écrite à la main" : "1 x"}</small><button data-rm="${i}">retirer</button></div>`).join("") +
      (fees[mode] ? `<div class="line"><b>Livraison</b><span>${euro(fees[mode])}</span></div>` : "")
    : `<p class="empty">Votre panier est encore vide.<br><a href="bouquets.html">Choisissez un bouquet !</a></p>`;
  const total = cart.reduce((s, it) => s + it.price, 0) + (cart.length ? fees[mode] : 0);
  $("#dTotal").textContent = euro(total);
}
$("#dItems").addEventListener("click", (e) => {
  if (e.target.dataset.rm == null) return;
  cart.splice(+e.target.dataset.rm, 1);
  renderCart();
});
$("#dFoot").addEventListener("click", (e) => {
  const b = e.target.closest("[data-mode]");
  if (!b) return;
  mode = b.dataset.mode;
  [...b.parentElement.children].forEach((x) => x.classList.toggle("is-on", x === b));
  renderCart();
});
const drawer = $("#drawer"), overlay = $("#overlay");
function openDrawer() { drawer.classList.add("is-open"); overlay.hidden = false; }
function closeDrawer() { drawer.classList.remove("is-open"); overlay.hidden = true; }
$("#cartBtn").addEventListener("click", () => { renderCart(); openDrawer(); });
$("#dClose").addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
$("#dDate").min = new Date().toISOString().slice(0, 10);
$("#dDate").value = tomorrow.toISOString().slice(0, 10);
$("#dPay").addEventListener("click", () => toast("Démo : ici, le client paie en ligne (CB, Apple Pay, Google Pay) et la boutique reçoit la commande."));

for (const [sel, msg] of [
  ["#rdvForm", "Démo : la demande de rendez-vous arrive directement dans la boîte mail de la boutique."],
  ["#contactForm", "Démo : votre message arrive directement dans la boîte mail de la boutique."],
]) {
  const f = $(sel);
  if (f) f.addEventListener("submit", (e) => { e.preventDefault(); toast(msg); f.reset(); });
}
addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeDrawer(); } });

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast.t);
  toast.t = setTimeout(() => (t.hidden = true), 4200);
}
renderCart();

// --- Apparition douce au défilement
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const fmt = n => "$" + n.toLocaleString("es-AR");
let activeCat = "todos", search = "", sortBy = "destacados";
let currentPage = 1;
const PER_PAGE = 24;
let cart = JSON.parse(localStorage.getItem("wg_cart") || "[]");

const grid = document.getElementById("productGrid");
const noResults = document.getElementById("noResults");
const resultCount = document.getElementById("resultCount");
const paginationEl = document.getElementById("pagination");

function getFiltered() {
  let list = PRODUCTS.filter(p =>
    (activeCat === "todos" || p.cat === activeCat) &&
    (!search || p.name.toLowerCase().includes(search) || p.catLabel.toLowerCase().includes(search) || p.vendor.toLowerCase().includes(search))
  );
  if (sortBy === "precio-asc") list.sort((a,b) => a.price - b.price);
  else if (sortBy === "precio-desc") list.sort((a,b) => b.price - a.price);
  else if (sortBy === "nombre") list.sort((a,b) => a.name.localeCompare(b.name));
  return list;
}

function renderProducts() {
  const list = getFiltered();
  const total = list.length;
  const pages = Math.ceil(total / PER_PAGE);
  if (currentPage > pages) currentPage = 1;
  const start = (currentPage - 1) * PER_PAGE;
  const slice = list.slice(start, start + PER_PAGE);

  resultCount.textContent = `${total} producto${total !== 1 ? "s" : ""}`;
  noResults.hidden = total > 0;

  grid.innerHTML = slice.map(p => `
    <article class="card">
      <div class="card-img">
        ${p.emoji}
        ${p.old ? `<span class="card-tag">Oferta</span>` : ""}
      </div>
      <div class="card-body">
        <span class="card-cat">${p.catLabel}</span>
        <h3>${p.name}</h3>
        <div class="card-meta">
          ${p.vendor ? `<span class="card-vendor">${p.vendor}</span>` : ""}
          <span class="card-sku">${p.sku}</span>
        </div>
        <div class="card-price">
          <span class="price">${fmt(p.price)}</span>
          ${p.old ? `<span class="price-old">${fmt(p.old)}</span>` : ""}
        </div>
        <button class="add-btn" data-id="${p.id}">Agregar al carrito</button>
      </div>
    </article>`).join("");

  renderPagination(pages);
}

function renderPagination(pages) {
  if (pages <= 1) { paginationEl.innerHTML = ""; return; }
  const prev = currentPage > 1;
  const next = currentPage < pages;
  let html = `<div class="pag-inner">`;
  html += `<button class="pag-btn" data-page="${currentPage - 1}" ${!prev ? "disabled" : ""}>‹</button>`;

  // show up to 7 page buttons
  const start = Math.max(1, currentPage - 3);
  const end = Math.min(pages, start + 6);
  for (let i = start; i <= end; i++) {
    html += `<button class="pag-btn ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
  }
  html += `<button class="pag-btn" data-page="${currentPage + 1}" ${!next ? "disabled" : ""}>›</button>`;
  html += `<span class="pag-info">Página ${currentPage} de ${pages}</span>`;
  html += `</div>`;
  paginationEl.innerHTML = html;
}

// ====== Carrito ======
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function saveCart() { localStorage.setItem("wg_cart", JSON.stringify(cart)); }

function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else {
    const p = PRODUCTS.find(p => p.id === id);
    if (!p) return;
    cart.push({ id, name: p.name, price: p.price, emoji: p.emoji, qty: 1 });
  }
  saveCart(); renderCart(); openCart();
}
function changeQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); renderCart();
}
function removeItem(id) { cart = cart.filter(i => i.id !== id); saveCart(); renderCart(); }

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  cartCount.textContent = count;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cartTotal.textContent = fmt(total);
  if (cart.length === 0) { cartItems.innerHTML = `<p class="cart-empty">Tu carrito está vacío 🛒</p>`; return; }
  cartItems.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-emoji">${i.emoji}</div>
      <div class="cart-item-info">
        <h4>${i.name}</h4>
        <span class="ci-price">${fmt(i.price * i.qty)}</span>
        <div class="qty">
          <button data-q="-1" data-id="${i.id}">−</button>
          <span>${i.qty}</span>
          <button data-q="1" data-id="${i.id}">+</button>
        </div>
      </div>
      <button class="ci-remove" data-rm="${i.id}">🗑️</button>
    </div>`).join("");
}

// ====== Drawer ======
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
function openCart() { cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }

// ====== Eventos ======
document.addEventListener("click", e => {
  if (e.target.matches(".add-btn")) addToCart(+e.target.dataset.id);
  if (e.target.matches("[data-q]")) changeQty(+e.target.dataset.id, +e.target.dataset.q);
  if (e.target.matches("[data-rm]")) removeItem(+e.target.dataset.rm);
  if (e.target.matches(".pag-btn") && !e.target.disabled) {
    currentPage = +e.target.dataset.page;
    renderProducts();
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("cartToggle").onclick = openCart;
document.getElementById("cartClose").onclick = closeCart;
cartOverlay.onclick = closeCart;

document.getElementById("catGrid").addEventListener("click", e => {
  const btn = e.target.closest(".cat-card");
  if (!btn) return;
  document.querySelectorAll(".cat-card").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  activeCat = btn.dataset.cat;
  currentPage = 1;
  renderProducts();
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("searchToggle").onclick = () => {
  document.getElementById("searchBar").classList.toggle("open");
  document.getElementById("searchInput").focus();
};
document.getElementById("searchInput").addEventListener("input", e => {
  search = e.target.value.toLowerCase().trim();
  currentPage = 1;
  renderProducts();
});
document.getElementById("sortSelect").onchange = e => { sortBy = e.target.value; currentPage = 1; renderProducts(); };
document.getElementById("menuToggle").onclick = () => document.getElementById("nav").classList.toggle("open");

// ====== Init ======
renderProducts();
renderCart();

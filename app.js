// ====== Catálogo de productos (editá precios/textos a gusto) ======
const PRODUCTS = [
  {id:1, name:"Panel LED Cultivo 240W Full Spectrum", cat:"iluminacion", emoji:"💡", price:189000, old:249000, tag:"Más vendido", rating:5, stock:true, desc:"Espectro completo, alta eficiencia, ideal para indoor."},
  {id:2, name:"Vaporizador Portátil de Hierbas", cat:"vaporizadores", emoji:"🌬️", price:145000, old:175000, tag:"Oferta", rating:5, stock:true, desc:"Temperatura regulable, batería de larga duración."},
  {id:3, name:"Kit Nutrientes Bloom + Grow 1L", cat:"nutrientes", emoji:"🧪", price:38000, old:null, tag:null, rating:4, stock:true, desc:"Set completo de floración y crecimiento."},
  {id:4, name:"Grinder Metálico 4 Partes", cat:"parafernalia", emoji:"⚙️", price:12500, old:18000, tag:"Oferta", rating:5, stock:true, desc:"Aluminio aeronáutico con recolector de polen."},
  {id:5, name:"Carpa de Cultivo Indoor 80x80x160", cat:"clima", emoji:"⛺", price:96000, old:null, tag:null, rating:4, stock:true, desc:"Reflectante, resistente y de fácil armado."},
  {id:6, name:"Extractor de Aire + Filtro de Carbón", cat:"clima", emoji:"🌀", price:78000, old:95000, tag:"Oferta", rating:5, stock:true, desc:"Control de olores y renovación de aire."},
  {id:7, name:"Tijera de Poda de Precisión", cat:"herramientas", emoji:"✂️", price:9500, old:null, tag:null, rating:5, stock:true, desc:"Punta curva, acero inoxidable, antiadherente."},
  {id:8, name:"Pipa de Vidrio Artesanal", cat:"parafernalia", emoji:"🍃", price:14000, old:null, tag:"Nuevo", rating:4, stock:true, desc:"Vidrio borosilicato resistente al calor."},
  {id:9, name:"Medidor pH Digital", cat:"herramientas", emoji:"📟", price:22000, old:29000, tag:"Oferta", rating:4, stock:true, desc:"Calibración automática, alta precisión."},
  {id:10, name:"Panel LED Quantum Board 480W", cat:"iluminacion", emoji:"🔆", price:320000, old:null, tag:"Premium", rating:5, stock:true, desc:"Para cultivos grandes, máximo rendimiento."},
  {id:11, name:"Vaporizador de Mesa Premium", cat:"vaporizadores", emoji:"💨", price:410000, old:null, tag:"Premium", rating:5, stock:false, desc:"Calidad de vapor superior, control digital."},
  {id:12, name:"Sustrato Premium 50L", cat:"nutrientes", emoji:"🪴", price:26000, old:null, tag:null, rating:5, stock:true, desc:"Aireado y rico en nutrientes."},
  {id:13, name:"Bandeja + Macetas Textiles x5", cat:"herramientas", emoji:"🪣", price:18500, old:24000, tag:"Oferta", rating:4, stock:true, desc:"Macetas geotextiles que oxigenan la raíz."},
  {id:14, name:"Set Papelillos + Filtros + Encendedor", cat:"parafernalia", emoji:"📦", price:6500, old:null, tag:null, rating:4, stock:true, desc:"Kit completo de accesorios."},
  {id:15, name:"Termohigrómetro Digital", cat:"clima", emoji:"🌡️", price:11000, old:null, tag:null, rating:5, stock:true, desc:"Mide temperatura y humedad en tiempo real."},
  {id:16, name:"Bomba de Riego Automática", cat:"herramientas", emoji:"💧", price:34000, old:42000, tag:"Oferta", rating:4, stock:true, desc:"Riego programable para tu indoor."},
];

const fmt = n => "$" + n.toLocaleString("es-AR");
let activeCat = "todos", search = "", sortBy = "destacados";
let cart = JSON.parse(localStorage.getItem("vv_cart") || "[]");

// ====== Render productos ======
const grid = document.getElementById("productGrid");
const noResults = document.getElementById("noResults");
const resultCount = document.getElementById("resultCount");

function getFiltered(){
  let list = PRODUCTS.filter(p =>
    (activeCat === "todos" || p.cat === activeCat) &&
    (p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search) || p.cat.includes(search))
  );
  if(sortBy === "precio-asc") list.sort((a,b)=>a.price-b.price);
  if(sortBy === "precio-desc") list.sort((a,b)=>b.price-a.price);
  return list;
}

function renderProducts(){
  const list = getFiltered();
  resultCount.textContent = `${list.length} producto${list.length!==1?"s":""}`;
  noResults.hidden = list.length > 0;
  grid.innerHTML = list.map(p => `
    <article class="card">
      <div class="card-img">
        ${p.emoji}
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ""}
        ${!p.stock ? `<span class="card-tag out">Sin stock</span>` : ""}
      </div>
      <div class="card-body">
        <span class="card-cat">${p.cat}</span>
        <h3>${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="rating">${"★".repeat(p.rating)}${"☆".repeat(5-p.rating)}</div>
        <div class="card-price">
          <span class="price">${fmt(p.price)}</span>
          ${p.old ? `<span class="price-old">${fmt(p.old)}</span>` : ""}
        </div>
        <button class="add-btn" data-id="${p.id}" ${!p.stock?"disabled":""}>
          ${p.stock ? "Agregar al carrito" : "Sin stock"}
        </button>
      </div>
    </article>`).join("");
}

// ====== Carrito ======
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function saveCart(){ localStorage.setItem("vv_cart", JSON.stringify(cart)); }

function addToCart(id){
  const item = cart.find(i => i.id === id);
  if(item) item.qty++;
  else { const p = PRODUCTS.find(p=>p.id===id); cart.push({id, name:p.name, price:p.price, emoji:p.emoji, qty:1}); }
  saveCart(); renderCart(); openCart();
}
function changeQty(id, d){
  const item = cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += d;
  if(item.qty<=0) cart = cart.filter(i=>i.id!==id);
  saveCart(); renderCart();
}
function removeItem(id){ cart = cart.filter(i=>i.id!==id); saveCart(); renderCart(); }

function renderCart(){
  const count = cart.reduce((s,i)=>s+i.qty,0);
  cartCount.textContent = count;
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  cartTotal.textContent = fmt(total);
  if(cart.length===0){ cartItems.innerHTML = `<p class="cart-empty">Tu carrito está vacío 🛒</p>`; return; }
  cartItems.innerHTML = cart.map(i=>`
    <div class="cart-item">
      <div class="cart-item-emoji">${i.emoji}</div>
      <div class="cart-item-info">
        <h4>${i.name}</h4>
        <span class="ci-price">${fmt(i.price*i.qty)}</span>
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
function openCart(){ cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart(){ cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }

// ====== Eventos ======
document.addEventListener("click", e=>{
  if(e.target.matches(".add-btn")) addToCart(+e.target.dataset.id);
  if(e.target.matches("[data-q]")) changeQty(+e.target.dataset.id, +e.target.dataset.q);
  if(e.target.matches("[data-rm]")) removeItem(+e.target.dataset.rm);
});
document.getElementById("cartToggle").onclick = openCart;
document.getElementById("cartClose").onclick = closeCart;
cartOverlay.onclick = closeCart;

document.getElementById("catGrid").addEventListener("click", e=>{
  const btn = e.target.closest(".cat-card");
  if(!btn) return;
  document.querySelectorAll(".cat-card").forEach(c=>c.classList.remove("active"));
  btn.classList.add("active");
  activeCat = btn.dataset.cat;
  renderProducts();
  document.getElementById("productos").scrollIntoView({behavior:"smooth"});
});

document.getElementById("searchToggle").onclick = ()=>{
  document.getElementById("searchBar").classList.toggle("open");
  document.getElementById("searchInput").focus();
};
document.getElementById("searchInput").addEventListener("input", e=>{
  search = e.target.value.toLowerCase().trim(); renderProducts();
});
document.getElementById("sortSelect").onchange = e=>{ sortBy = e.target.value; renderProducts(); };
document.getElementById("menuToggle").onclick = ()=> document.getElementById("nav").classList.toggle("open");

// ====== Init ======
renderProducts();
renderCart();

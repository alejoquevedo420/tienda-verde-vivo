const CDN = 'https://kilimanjarotiendadecultivo.com/wp-content/uploads/';

const PRODUCTS = [
  {id:1,  name:"Advanced Flawless Finish 250ml",    cat:"fertilizantes", img:CDN+"2020/07/31-600x600.jpg",          price:15000,  old:18800,  tag:"Mas vendido", rating:5, stock:true,  desc:"Aditivo de enjuague para la etapa final del cultivo. Elimina residuos de nutrientes acumulados en el sustrato y mejora notablemente el sabor y aroma del producto cosechado. Ideal para los ultimos 7-10 dias antes de la cosecha."},
  {id:2,  name:"Biobizz Bio Grow 500ml",             cat:"fertilizantes", img:CDN+"2020/07/31-600x600.jpg",          price:15000,  old:18800,  tag:null,          rating:4, stock:true,  desc:"Fertilizante liquido organico certificado para fase vegetativa. Elaborado con extractos de algas marinas y azucares naturales que estimulan el crecimiento rapido y saludable de raices, tallos y follaje."},
  {id:3,  name:"Grotek Vitamax Pro 500ml",           cat:"fertilizantes", img:CDN+"2020/07/31-600x600.jpg",          price:15000,  old:null,   tag:null,          rating:4, stock:true,  desc:"Suplemento vitaminico completo con minerales quelados y aminoacidos esenciales. Aumenta la resistencia natural al estres hidrico y termico. Compatible con cualquier sistema de cultivo, organico o mineral."},
  {id:4,  name:"Feeding Bio Bloom 125gr",            cat:"fertilizantes", img:CDN+"2020/07/31-600x600.jpg",          price:15000,  old:18800,  tag:"Oferta",      rating:5, stock:true,  desc:"Fertilizante solido de floracion de liberacion lenta. Formula organica con alto contenido de fosforo y potasio que maximiza la produccion de flores, resinas y terpenos durante la etapa de bloom."},
  {id:5,  name:"Kawsay Bloom 1L",                   cat:"fertilizantes", img:CDN+"2020/07/31-600x600.jpg",          price:15000,  old:null,   tag:"Nuevo",       rating:5, stock:true,  desc:"Fertilizante argentino 100% organico para floracion, desarrollado para condiciones de cultivo locales. Aporta fosforo y potasio en proporciones ideales para maximizar la produccion y los aromas naturales."},
  {id:6,  name:"Thanos Lixiviado Vege 1L",          cat:"fertilizantes", img:CDN+"2020/07/31-600x600.jpg",          price:15000,  old:null,   tag:null,          rating:4, stock:true,  desc:"Fertilizante organico basado en vermicompost lixiviado para fase vegetativa. Rico en microorganismos beneficiosos, aminoacidos y acidos humicos que mejoran la estructura del suelo y la absorcion de nutrientes."},
  {id:7,  name:"Kawsay Base A 1L",                  cat:"fertilizantes", img:CDN+"2020/07/31-600x600.jpg",          price:15000,  old:18800,  tag:null,          rating:4, stock:true,  desc:"Componente A del sistema de nutricion base Kawsay para cultivo hidroponico y en sustrato. Formula concentrada argentina con macronutrientes en equilibrio perfecto para cualquier etapa del ciclo de cultivo."},

  {id:8,  name:"Carpa Dr. Cultivo 60x60x180cm",     cat:"carpas",        img:CDN+"2021/12/02CP05-600x600.jpg",      price:180000, old:225000, tag:"Oferta",      rating:4, stock:true,  desc:"Carpa compacta ideal para espacios reducidos o para iniciarse en el cultivo indoor. Interior en Mylar reflectante de alta calidad, estructura de acero con conectores robustos y sistema de cierre velcro anti-luz."},
  {id:9,  name:"Carpa Dr. Cultivo 80x80x200cm",     cat:"carpas",        img:CDN+"2021/12/02CP05-600x600.jpg",      price:180000, old:225000, tag:"Mas vendido", rating:5, stock:true,  desc:"Carpa indoor con interior Mylar reflectante al 95%. Estructura de acero inoxidable con cremalleras dobles, ventanas de observacion y bandeja anti-goteo. Perfecta para 1-4 plantas bajo LED de 200-400W."},
  {id:10, name:"Carpa Dr. Cultivo 120x120x200cm",   cat:"carpas",        img:CDN+"2021/12/02CP08-1-600x600.jpg",    price:180000, old:null,   tag:"Premium",     rating:5, stock:true,  desc:"Carpa indoor de alta capacidad para cultivos medianos o comerciales. Interior Mylar al 99%, multiples entradas de ventilacion, aberturas para cables y ductos. Soporta luminarias de hasta 600W sin problemas."},
  {id:11, name:"Carpa Dr. Cultivo 150x150x200cm",   cat:"carpas",        img:CDN+"2021/12/02CP08-1-600x600.jpg",    price:180000, old:225000, tag:null,          rating:5, stock:true,  desc:"Carpa profesional de gran superficie para producciones serias. Lona Oxford 600D resistente con interior Mylar brillante. Multiples zonas de ventilacion y aberturas para sistemas de riego hidroponico."},

  {id:12, name:"Bong de Vidrio 24cm",               cat:"bongs",         img:CDN+"2021/07/01BG16-600x600.png",      price:18000,  old:22500,  tag:"Mas vendido", rating:5, stock:true,  desc:"Bong de vidrio borosilicato resistente al calor con filtracion por agua. Diseno clasico de 24cm con base ancha estable, boquilla ergonomica, cazuela de vidrio y tallo extraible de 14.5mm para limpieza facil."},
  {id:13, name:"Bong Squad Atrapa Hielos",          cat:"bongs",         img:CDN+"2021/12/01BG21-600x600.jpg",      price:18000,  old:null,   tag:"Nuevo",       rating:5, stock:true,  desc:"Bong con sistema atrapa hielos que enfria notablemente el vapor. Los cubos de hielo en el cuello del tubo reducen la temperatura antes de inhalar, generando una experiencia mucho mas suave y confortable."},
  {id:14, name:"Bong Iceborg Atomic 22cm",          cat:"bongs",         img:CDN+"2021/12/01BG29.jpg",              price:18000,  old:22500,  tag:"Oferta",      rating:4, stock:true,  desc:"Bong de vidrio templado de 22cm con diseno Iceborg y percolador integrado. Filtra y enfria el vapor en multiples etapas. Fabricado en vidrio borosilicato grueso de 5mm para mayor durabilidad y resistencia."},
  {id:15, name:"Bong Ceramico Chico",               cat:"bongs",         img:CDN+"2021/12/01BG25.jpg",              price:18000,  old:22500,  tag:null,          rating:4, stock:true,  desc:"Bong artesanal de ceramica esmaltada resistente al calor y de facil limpieza. Diseno compacto con acabado mate. La ceramica proporciona una filtracion pura con mejor conservacion del sabor natural del material."},
  {id:16, name:"Pipa de Vidrio Elefante",           cat:"bongs",         img:CDN+"2021/06/109PV02-600x600.jpg",     price:14000,  old:null,   tag:null,          rating:4, stock:true,  desc:"Pipa artesanal de vidrio borosilicato resistente al calor con diseno elefante. Cazuela profunda para carga generosa, boquilla ergonomica con filtrado natural. Pieza unica de coleccion fabricada a mano."},
  {id:17, name:"Bong Doble Percolador",             cat:"bongs",         img:CDN+"2021/07/01BG16-600x600.png",      price:18000,  old:22500,  tag:"Premium",     rating:5, stock:true,  desc:"Bong de alto rendimiento con doble percolador de disco. La doble filtracion enfria y suaviza el vapor significativamente. Vidrio borosilicato de 5mm con junta sellada hermeticamente para mayor durabilidad."},
  {id:18, name:"Bong Mini Vidrio Squadafum",        cat:"bongs",         img:CDN+"2021/12/01BG21-600x600.jpg",      price:18000,  old:22500,  tag:null,          rating:4, stock:true,  desc:"Mini bong de vidrio borosilicato Squadafum, perfecto para uso diario y portabilidad. Compacto pero con filtracion efectiva por agua. Fabricado con vidrio grueso de calidad premium resistente a golpes."},

  {id:19, name:"Picador Metalico Cubo Chala 4p",    cat:"picadores",     img:CDN+"2022/07/108PM70-600x653.jpg",     price:9000,   old:11300,  tag:"Mas vendido", rating:5, stock:true,  desc:"Picador de aluminio aeronautico con diseno cubo y 4 partes. Recolector de kief con malla de acero inoxidable y raspador incluido. Dientes en forma de diamante para una molienda uniforme, fina y sin esfuerzo."},
  {id:20, name:"Picador Metalico Bob Marley 3p",    cat:"picadores",     img:CDN+"2022/07/108PM70-600x653.jpg",     price:9000,   old:11300,  tag:"Oferta",      rating:4, stock:true,  desc:"Picador metalico de 3 partes con diseno tributo Bob Marley plateado. Aluminio anodizado con grabado detallado. Tapa con iman de cierre fuerte y dientes afilados para molienda rapida, pareja y sin atascos."},
  {id:21, name:"Picador Metalico Tornasol 4p",      cat:"picadores",     img:CDN+"2022/07/108PM70-600x653.jpg",     price:9000,   old:null,   tag:"Nuevo",       rating:5, stock:true,  desc:"Picador premium con acabado tornasol iridiscente y 4 partes. Recolector de kief con malla de acero de alta precision y raspador incluido. Dientes hexagonales para molienda fina y consistente con pocas rotaciones."},
  {id:22, name:"Picador Rick Morty 4p 50mm",        cat:"picadores",     img:CDN+"2022/07/108PM70-600x653.jpg",     price:9000,   old:11300,  tag:null,          rating:4, stock:true,  desc:"Picador de 50mm con diseno Rick y Morty y 4 partes. Aluminio de alta calidad con impresion detallada de los personajes. Recolector de kief, malla de acero inoxidable y dientes afilados de larga durabilidad."},

  {id:23, name:"Termohigrometro HTC-2 Con Sonda",   cat:"clima",         img:CDN+"2020/10/482-600x600.jpg",         price:45000,  old:56300,  tag:"Mas vendido", rating:5, stock:true,  desc:"Medidor digital de temperatura y humedad con sonda externa Hedao para monitoreo preciso dentro de la carpa. Pantalla LCD retroiluminada, memoria max/min y amplio rango para cultivos exigentes."},
  {id:24, name:"Ducto Extraccion 4 pulgadas x Metro",cat:"clima",        img:CDN+"2021/07/182DT01-600x462.jpg",     price:45000,  old:null,   tag:null,          rating:4, stock:true,  desc:"Ducto flexible de 10cm de diametro y 1 metro de largo. Aluminio multicapa resistente al calor y los olores. Imprescindible para conectar extractores, filtros de carbon y carpas en un sistema de ventilacion eficiente."},
  {id:25, name:"Integra Boost 8gr 55%",             cat:"clima",         img:CDN+"2021/07/182DT01-600x462.jpg",     price:45000,  old:56300,  tag:"Oferta",      rating:5, stock:true,  desc:"Regulador de humedad bidireccional al 55% para curado y conservacion de cosechas. Sin sal ni sustancias toxicas. El indicador visual senala exactamente cuando debe reemplazarse para maxima efectividad."},
  {id:26, name:"Frascos al Vacio 0.9L Growers",     cat:"clima",         img:CDN+"2021/07/182DT01-600x462.jpg",     price:45000,  old:56300,  tag:null,          rating:4, stock:true,  desc:"Frasco hermetico de vidrio con sistema de vacio integrado para preservar cosechas y concentrados. Sello de silicona que bloquea humedad y oxigeno. Conserva el aroma, potencia y frescura por mucho mas tiempo."},

  {id:27, name:"Cultivate Premium 25L",             cat:"sustratos",     img:CDN+"2021/12/121ST46-600x599.jpg",     price:12000,  old:15000,  tag:"Mas vendido", rating:5, stock:true,  desc:"Sustrato premium enriquecido con perlita, fibra de coco, humus de lombriz y micorrizas. Balance ideal entre retencion de humedad y drenaje. pH pre-calibrado, listo para plantar desde el primer dia."},
  {id:28, name:"Cultivate Auto 25L",                cat:"sustratos",     img:CDN+"2021/12/121ST46-600x599.jpg",     price:12000,  old:null,   tag:null,          rating:4, stock:true,  desc:"Sustrato formulado para variedades autoflorecientes. Mezcla ligera y porosa que facilita el rapido desarrollo radicular. Enriquecido con trichodermas y micorrizas para un arranque optimo sin fertilizantes iniciales."},
  {id:29, name:"Harina de Sangre 100gr",            cat:"sustratos",     img:CDN+"2021/12/121ST46-600x599.jpg",     price:12000,  old:15000,  tag:null,          rating:4, stock:true,  desc:"Enmienda organica de accion rapida con alto contenido de nitrogeno natural. Ideal para corregir deficiencias en fase vegetativa y enriquecer sustratos ecologicos. Compatible con todas las tecnicas de cultivo organico."},
  {id:30, name:"Azomite 500gr Juani Juana",         cat:"sustratos",     img:CDN+"2021/12/121ST46-600x599.jpg",     price:12000,  old:15000,  tag:null,          rating:5, stock:true,  desc:"Mineral volcanico con mas de 70 elementos traza esenciales. Mejora la actividad microbiana del suelo, potencia el crecimiento radicular y la absorcion de nutrientes. De las mejores enmiendas minerales para cultivo organico."},

  {id:31, name:"Peachimetro para Suelo 3 en 1",     cat:"herramientas",  img:CDN+"2021/11/128MD08-600x600.jpg",     price:16000,  old:20000,  tag:null,          rating:4, stock:true,  desc:"Medidor multifuncion 3 en 1 para suelo: pH, temperatura y luminosidad. Funciona sin baterias mediante sensores de contacto. Imprescindible para diagnosticar el estado del sustrato y ajustar las condiciones de cultivo."},
  {id:32, name:"Red Scrog Dr. Cultivo 3x3ft",       cat:"herramientas",  img:CDN+"2021/11/128MD08-600x600.jpg",     price:14000,  old:17500,  tag:null,          rating:5, stock:true,  desc:"Red de entrenamiento SCROG para maximizar el area de dosel y la exposicion luminica. Malla de nylon resistente con cuadros de 5x5cm. Compatible con la mayoria de carpas de cultivo indoor del mercado."},
  {id:33, name:"Poleas GHP Ajustables 5kg",         cat:"herramientas",  img:CDN+"2021/11/128MD08-600x600.jpg",     price:14000,  old:17500,  tag:null,          rating:4, stock:true,  desc:"Sistema de poleas para colgar luminarias, filtros y extractores con carga maxima de 5kg cada una. Ajuste de altura sencillo con mecanismo de trinquete sin herramientas. Pack de 2 unidades incluidas."},

  {id:34, name:"Encendedor Magiclick Catalitico",   cat:"extracciones",  img:CDN+"2021/11/194EN03-600x599.jpg",     price:12000,  old:15000,  tag:null,          rating:4, stock:true,  desc:"Encendedor catalitico de gas butano sin llama visible, ideal para vaporizadores y dabbing. Llama azul de alta temperatura con mecanismo de ajuste preciso y seguro. Recargable con gas butano estandar."},
  {id:35, name:"Contenedor Silicona Calavera",      cat:"extracciones",  img:CDN+"2021/11/194EN03-600x599.jpg",     price:12000,  old:null,   tag:"Nuevo",       rating:5, stock:true,  desc:"Contenedor antiadherente de silicona grado alimentario con diseno calavera. Perfecto para almacenar concentrados, extracciones y aceites. Resistente al calor hasta 230C, facil de limpiar, sin retencion de olores."},
  {id:36, name:"Contenedor Cuadrado 5ml",           cat:"extracciones",  img:CDN+"2021/11/194EN03-600x599.jpg",     price:12000,  old:15000,  tag:null,          rating:4, stock:true,  desc:"Contenedor compacto de silicona antiadherente grado alimentario de 5ml. Material no toxico e inerte a solventes y aceites. Tapa hermetica que preserva la consistencia y potencia del concentrado almacenado."},

  {id:37, name:"Gancho Suspension Porta Lamparas",  cat:"iluminacion",   img:CDN+"2022/07/246GC01-600x600.jpg",     price:120000, old:150000, tag:null,          rating:4, stock:true,  desc:"Sistema de suspension ajustable para luminarias de cultivo, soporta hasta 10kg. Permite regular la altura al dosel sin herramientas con ajuste continuo. Compatible con paneles LED, reflectores HPS y CMH."},
  {id:38, name:"Soporte Cooler 4 Eclipse",          cat:"iluminacion",   img:CDN+"2022/07/246GC01-600x600.jpg",     price:120000, old:null,   tag:null,          rating:4, stock:true,  desc:"Soporte metalico para ventiladores de circulacion interna dentro de la carpa de cultivo. Diseno eclipse de 4 brazos adaptable a diferentes diametros de tubo. Instalacion sencilla sin perforar la estructura."},

  {id:39, name:"Armador RAW 79mm",                  cat:"papeles",       img:CDN+"2021/11/129AT07-600x599.jpg",     price:3500,   old:4400,   tag:"Mas vendido", rating:5, stock:true,  desc:"Armador de papelillos RAW clasico de 79mm. Produce armados perfectos y parejos en segundos. Rodillo de tela de alta resistencia lavable y reutilizable. Compatible con papelillos estandar 1/4 y slim."},
  {id:40, name:"Armador OCB 110mm",                 cat:"papeles",       img:CDN+"2021/11/129AT07-600x599.jpg",     price:3500,   old:null,   tag:null,          rating:4, stock:true,  desc:"Armador OCB de 110mm para papelillos XL y King Size. Plastico de alta calidad con rodillo de tela durable. Produce cigarrillos uniformes y compactos. Ideal para quienes prefieren el formato largo."},
  {id:41, name:"RAW Classic 300 Hojas",             cat:"papeles",       img:CDN+"2021/11/129AT07-600x599.jpg",     price:3500,   old:4400,   tag:"Oferta",      rating:5, stock:true,  desc:"Libreta de 300 hojas RAW Classic en papel de canamo sin cloro ni blanqueantes. Ultra finas con goma arabiga natural para un sellado perfecto. La combustion mas limpia del mercado."},
  {id:42, name:"Tips Lion Rolling Pre-rolled x55",  cat:"papeles",       img:CDN+"2021/11/129AT07-600x599.jpg",     price:3500,   old:4400,   tag:null,          rating:4, stock:true,  desc:"Pack de 55 filtros de carton pre-enrollados Lion Rolling Circus. Filtracion optima para un armado comodo y limpio. Carton sin blanqueantes ni tintas, tamano slim compatible con todos los papelillos del mercado."},

  {id:43, name:"Tabaquera GB Portatil",             cat:"parafernalia",  img:CDN+"2022/06/241TB01.jpg",             price:8000,   old:10000,  tag:null,          rating:4, stock:true,  desc:"Caja portatil hermetica para guardar tabaco, hierbas y accesorios. Cierre de presion que mantiene el contenido fresco y protegido. Material plastico resistente a golpes con interior liso de facil limpieza."},
  {id:44, name:"Bandeja Vidrio Templado Mediana",   cat:"parafernalia",  img:CDN+"2022/06/241TB01.jpg",             price:8000,   old:null,   tag:null,          rating:5, stock:true,  desc:"Bandeja de vidrio templado tamano mediano para preparacion de materiales. Superficie lisa antiadherente de facil limpieza, bordes elevados que contienen el material. Diseno Hempacka impreso bajo el vidrio."},
  {id:45, name:"Cenicero Metal Blunt Rey",          cat:"parafernalia",  img:CDN+"2022/06/241TB01.jpg",             price:8000,   old:10000,  tag:null,          rating:4, stock:true,  desc:"Cenicero metalico compacto con fondo profundo anti-derrames. Acabado lacado resistente al calor. Ranuras anti-rodamiento en los bordes para descansar cigarrillos y blunts de forma segura y estable."},
];

const fmt = n => "$" + n.toLocaleString("es-AR");
let activeCat = "todos", search = "", sortBy = "destacados";
let cart = JSON.parse(localStorage.getItem("wg_cart") || "[]");

const CATS = {
  todos:"Todos", fertilizantes:"Fertilizantes", carpas:"Carpas Indoor",
  bongs:"Pipas y Bongs", picadores:"Picadores", clima:"Clima",
  sustratos:"Sustratos", herramientas:"Herramientas", extracciones:"Extracciones",
  iluminacion:"Iluminacion", papeles:"Papeles", parafernalia:"Parafernalia"
};

const grid = document.getElementById("productGrid");
const noResults = document.getElementById("noResults");
const resultCount = document.getElementById("resultCount");

function getFiltered(){
  let list = PRODUCTS.filter(p =>
    (activeCat === "todos" || p.cat === activeCat) &&
    (!search || p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search))
  );
  if(sortBy === "precio-asc") list.sort((a,b)=>a.price-b.price);
  if(sortBy === "precio-desc") list.sort((a,b)=>b.price-a.price);
  return list;
}

function renderProducts(){
  const list = getFiltered();
  resultCount.textContent = list.length + " producto" + (list.length!==1?"s":"");
  noResults.hidden = list.length > 0;
  grid.innerHTML = list.map(function(p){
    return '<article class="card">' +
      '<div class="card-img-wrap">' +
        '<img class="card-img-real" src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
        '<div class="card-img-fallback" style="display:none">🌿</div>' +
        (p.tag ? '<span class="card-tag">' + p.tag + '</span>' : '') +
        (!p.stock ? '<span class="card-tag out">Sin stock</span>' : '') +
      '</div>' +
      '<div class="card-body">' +
        '<span class="card-cat">' + (CATS[p.cat]||p.cat) + '</span>' +
        '<h3>' + p.name + '</h3>' +
        '<p class="card-desc">' + p.desc + '</p>' +
        '<div class="rating">' + "★".repeat(p.rating) + "☆".repeat(5-p.rating) + '</div>' +
        '<div class="card-price">' +
          '<span class="price">' + fmt(p.price) + '</span>' +
          (p.old ? '<span class="price-old">' + fmt(p.old) + '</span>' : '') +
        '</div>' +
        '<button class="add-btn" data-id="' + p.id + '"' + (!p.stock?' disabled':'') + '>' +
          (p.stock ? 'Agregar al carrito' : 'Sin stock') +
        '</button>' +
      '</div></article>';
  }).join("");
}

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function saveCart(){ localStorage.setItem("wg_cart", JSON.stringify(cart)); }

function addToCart(id){
  var item = cart.find(function(i){ return i.id===id; });
  if(item) item.qty++;
  else { var p = PRODUCTS.find(function(p){ return p.id===id; }); cart.push({id:id, name:p.name, price:p.price, img:p.img, qty:1}); }
  saveCart(); renderCart(); openCart();
}
function changeQty(id, d){
  var item = cart.find(function(i){ return i.id===id; });
  if(!item) return;
  item.qty += d;
  if(item.qty<=0) cart = cart.filter(function(i){ return i.id!==id; });
  saveCart(); renderCart();
}
function removeItem(id){ cart = cart.filter(function(i){ return i.id!==id; }); saveCart(); renderCart(); }

function renderCart(){
  var count = cart.reduce(function(s,i){ return s+i.qty; },0);
  cartCount.textContent = count;
  var total = cart.reduce(function(s,i){ return s+i.price*i.qty; },0);
  cartTotal.textContent = fmt(total);
  if(cart.length===0){ cartItems.innerHTML = '<p class="cart-empty">Tu carrito esta vacio</p>'; return; }
  cartItems.innerHTML = cart.map(function(i){
    return '<div class="cart-item">' +
      '<div class="cart-item-thumb"><img src="' + i.img + '" alt="' + i.name + '" onerror="this.style.display=\'none\'" style="width:50px;height:50px;object-fit:cover;border-radius:8px"></div>' +
      '<div class="cart-item-info"><h4>' + i.name + '</h4>' +
      '<span class="ci-price">' + fmt(i.price*i.qty) + '</span>' +
      '<div class="qty"><button data-q="-1" data-id="' + i.id + '">-</button><span>' + i.qty + '</span><button data-q="1" data-id="' + i.id + '">+</button></div></div>' +
      '<button class="ci-remove" data-rm="' + i.id + '">X</button></div>';
  }).join("");
}

var cartDrawer = document.getElementById("cartDrawer");
var cartOverlay = document.getElementById("cartOverlay");
function openCart(){ cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart(){ cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }

document.addEventListener("click", function(e){
  if(e.target.matches(".add-btn")) addToCart(+e.target.dataset.id);
  if(e.target.matches("[data-q]")) changeQty(+e.target.dataset.id, +e.target.dataset.q);
  if(e.target.matches("[data-rm]")) removeItem(+e.target.dataset.rm);
});
document.getElementById("cartToggle").onclick = openCart;
document.getElementById("cartClose").onclick = closeCart;
cartOverlay.onclick = closeCart;

document.getElementById("catGrid").addEventListener("click", function(e){
  var btn = e.target.closest(".cat-card");
  if(!btn) return;
  document.querySelectorAll(".cat-card").forEach(function(c){ c.classList.remove("active"); });
  btn.classList.add("active");
  activeCat = btn.dataset.cat;
  renderProducts();
  document.getElementById("productos").scrollIntoView({behavior:"smooth"});
});

document.getElementById("searchToggle").onclick = function(){
  document.getElementById("searchBar").classList.toggle("open");
  document.getElementById("searchInput").focus();
};
document.getElementById("searchInput").addEventListener("input", function(e){
  search = e.target.value.toLowerCase().trim(); renderProducts();
});
document.getElementById("sortSelect").onchange = function(e){ sortBy = e.target.value; renderProducts(); };
document.getElementById("menuToggle").onclick = function(){ document.getElementById("nav").classList.toggle("open"); };

renderProducts();
renderCart();

/* ===== 全站設定 ===== */
body {
  font-family: 'Poppins', 'Noto Sans TC', sans-serif;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  color: #111;
  line-height: 2.1;
  letter-spacing: 0.5px;
}

h1, h2, h3 {
  margin: 0;
}

/* ===== 導覽列 ===== */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 3px solid #ff6b3d;
  background: linear-gradient(90deg, #ffffff 0%, #f9f9f9 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  opacity: 0;
  transform: translateY(-20px);
  animation: header-slide 1s forwards;
}

.logo {
  font-size: 1.8em;
  font-weight: bold;
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-style: italic;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 1px;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff6b3d, #ff8c42);
  transition: width 0.3s ease;
}

nav a:hover::after,
nav a.active::after {
  width: 100%;
}

nav a:hover,
nav a.active {
  color: #ff6b3d;
}

/* ===== Hero 區塊 ===== */
.hero {
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #ff6b3d 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.03) 10px,
    rgba(255, 255, 255, 0.03) 20px
  );
  animation: slide 20s linear infinite;
}

@keyframes slide {
  0% { left: -100%; }
  100% { left: 100%; }
}

.hero h2, .hero p, .btn {
  opacity: 0;
  transform: translateY(20px);
  animation: hero-fade 0.8s forwards;
  position: relative;
  z-index: 1;
}

.hero h2 { animation-delay: 0.3s; }
.hero p { animation-delay: 0.5s; }
.btn { animation-delay: 0.7s; }

.hero h2 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 900;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.hero p {
  font-size: 1.1em;
  color: #f0f0f0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

.btn {
  display: inline-block;
  margin-top: 20px;
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.4s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(255, 107, 61, 0.4);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 107, 61, 0.6);
  background: linear-gradient(135deg, #ff8c42 0%, #ff6b3d 100%);
}

.btn:hover::before {
  left: 100%;
}

/* ===== 商品區 ===== */
.products, .shop {
  text-align: center;
  padding: 60px 20px;
}

.products h2, .shop h2 {
  font-size: 2.2em;
  margin-bottom: 30px;
  position: relative;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.products h2::after, .shop h2::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b3d, #ff8c42);
  margin: 15px auto 0;
  border-radius: 2px;
}

.product-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.product-card {
  width: 250px;
  border: none;
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
  transform: translateY(20px);
  animation: product-fade 0.5s forwards;
  animation-play-state: paused;
  background: #ffffff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  position: relative;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 107, 61, 0.1) 0%, transparent 100%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
}

.product-card:hover {
  transform: translateY(-12px) scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 107, 61, 0.25);
}

.product-card:hover::before {
  opacity: 1;
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: contain;
  object-position: center;
  background-color: white;
  border-radius: 12px 12px 0 0;
  transition: transform 0.4s ease;
  padding: 10px;
  box-sizing: border-box;
}

.product-card:hover img {
  transform: scale(1.1);
}

.product-card h3 {
  margin: 12px 12px 5px;
  font-size: 1.1em;
  font-weight: 700;
  color: #111;
}

.product-card p {
  margin: 0 12px 12px;
  color: #ff6b3d;
  font-weight: 700;
  font-size: 1.2em;
}

/* ===== 關於頁 ===== */
.about, .contact {
  text-align: center;
  padding: 60px 20px;
  max-width: 800px;
  margin: auto;
  opacity: 0;
  transform: translateY(30px);
  animation: section-fade 0.8s forwards;
  animation-play-state: paused;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 12px;
  border-top: 3px solid #ff6b3d;
}

.about h2, .contact h2 {
  color: #111;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.about p {
  color: #555;
  margin-top: 15px;
  line-height: 1.8;
}

.contact ul {
  list-style: none;
  padding: 0;
  color: #333;
  margin-top: 10px;
}

.contact li {
  margin: 10px 0;
  font-weight: 500;
}

/* ===== 頁尾 ===== */
footer {
  text-align: center;
  padding: 30px 20px;
  background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
  color: white;
  font-size: 0.9em;
  border-top: 3px solid #ff6b3d;
  letter-spacing: 1px;
}

/* ===== 動畫 Keyframes ===== */
@keyframes header-slide {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes hero-fade {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes product-fade {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes section-fade {
  to { opacity: 1; transform: translateY(0); }
}

/* ===== RWD ===== */
/* 平板大尺寸 */
@media (max-width: 1024px) {
  header { padding: 18px 30px; }
  .logo { font-size: 1.6em; }
  nav ul { gap: 18px; }
  .hero { padding: 80px 20px; }
  .hero h2 { font-size: 1.9em; }
  .product-card { width: 45%; }
  .products, .shop, .about, .contact { padding: 50px 20px; }
}

/* 平板小尺寸 */
@media (max-width: 768px) {
  header { flex-direction: column; align-items: center; gap: 10px; }
  nav ul { flex-wrap: wrap; justify-content: center; gap: 15px; }
  .logo { font-size: 1.5em; }
  .hero { padding: 70px 15px; }
  .hero h2 { font-size: 1.7em; }
  .hero p { font-size: 1em; }
  .btn { padding: 10px 18px; font-size: 0.95em; }
  .product-card { width: 48%; }
  .products, .shop, .about, .contact { padding: 40px 15px; }
}

/* 手機 */
@media (max-width: 480px) {
  header { flex-direction: column; align-items: center; gap: 8px; }
  nav ul { flex-direction: column; gap: 8px; }
  .logo { font-size: 1.3em; }
  .hero { padding: 50px 10px; }
  .hero h2 { font-size: 1.4em; }
  .hero p { font-size: 0.95em; }
  .btn { padding: 8px 16px; font-size: 0.9em; }
  .product-card { width: 100%; }
  .products, .shop, .about, .contact { padding: 30px 10px; }
  .about p, .contact li { font-size: 0.9em; }
}
.carousel {
  position: relative;
  overflow: hidden;
  max-width: 1000px;
  margin: auto;
}

.carousel-track {
  display: flex;
  /*transition: transform 0.5s ease-in-out;*/
}

.carousel-item {
  min-width: 250px;
  margin: 0 10px;
  background: #ffffff;
  border: none;
  border-radius: 12px;
  text-align: center;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
}

.carousel-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(255, 107, 61, 0.25);
}

.carousel-item img {
  width: 100%;
  height: 220px;
  object-fit: contain;
  object-position: center;
  background-color: white;
  border-radius: 12px 12px 0 0;
  transition: transform 0.4s ease;
  padding: 10px;
  box-sizing: border-box;
}

.carousel-item:hover img {
  transform: scale(1.08);
}

.carousel-item h3 {
  font-size: 1.1em;
  margin: 10px 12px 5px;
  height: 40px;
  overflow: hidden;
  font-weight: 700;
  color: #111;
}

.carousel-item p {
  font-size: 1em;
  color: #ff6b3d;
  margin: 5px 12px 12px;
  font-weight: 700;
}


.carousel button.prev,
.carousel button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  border: none;
  color: #fff;
  padding: 10px 12px;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 61, 0.3);
  font-weight: bold;
}

.carousel button.prev:hover,
.carousel button.next:hover {
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 8px 25px rgba(255, 107, 61, 0.5);
}

.carousel button.prev { left: 10px; }
.carousel button.next { right: 10px; }

/* ===== RWD ===== */
@media (max-width: 1024px) {
  .carousel-item { min-width: 45%; }
}

@media (max-width: 768px) {
  .carousel-item { min-width: 60%; }
}

@media (max-width: 480px) {
  .carousel-item { min-width: 80%; }
}
.category {
  margin-bottom: 20px;
}

.category-toggle {
  width: 100%;
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  color: white;
  padding: 14px 16px;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(255, 107, 61, 0.25);
}

.category-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 61, 0.4);
}

.category-items {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.5s ease;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 10px;
  visibility: hidden;
}

.category-items.active {
  max-height: 3000px;
  padding: 20px 10px;
  visibility: visible;
}
/* Modal 背景 */
.product-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

/* Modal 內容 */
.modal-content {
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  padding: 30px;
  border-radius: 15px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
  animation: zoomIn 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 2px solid #ff6b3d;
}

.modal-content img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.modal-content h3 {
  margin: 10px 0;
}

.modal-content p {
  margin: 5px 0 15px 0;
}

.modal-content .add-to-cart {
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  color: #fff;
  padding: 12px 28px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(255, 107, 61, 0.3);
  margin: 10px 5px;
}

.modal-content .add-to-cart:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 61, 0.5);
}

/* 關閉按鈕 */
.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;
}

/* 放大動畫 */
@keyframes zoomIn {
  from {transform: scale(0.5); opacity: 0;}
  to {transform: scale(1); opacity: 1;}
}
.member-buttons {
  text-align: center;
  margin: 20px 0;
}

.member-buttons button {
  padding: 12px 28px;
  border: none;
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(255, 107, 61, 0.3);
}

.member-buttons button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 61, 0.5);
}

.member-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.6);
  justify-content: center;
  align-items: center;
}

.member-modal .modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 2px solid #ff6b3d;
}

.member-modal .close {
  position: absolute;
  top: 10px; right: 15px;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
}

.member-modal .close:hover {
  color: #ff6b3d;
}

.member-modal input {
  width: 85%;
  padding: 11px;
  margin: 10px 0;
  border-radius: 8px;
  border: 2px solid #ddd;
  transition: all 0.3s ease;
  font-size: 0.95em;
}

.member-modal input:focus {
  outline: none;
  border-color: #ff6b3d;
  box-shadow: 0 0 0 3px rgba(255, 107, 61, 0.1);
}

.member-modal button {
  margin-top: 10px;
  width: 55%;
  padding: 11px;
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 61, 0.3);
}

.member-modal button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 61, 0.5);
}

.member-modal a {
  color: #ff6b3d;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 600;
}

.member-modal a:hover {
  color: #ff8c42;
}
.help {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: left;
}

.help h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  color: #ff6b3d;
}

.accordion-item {
  border-bottom: 1px solid #ddd;
}

.accordion-header {
  background-color: #f7f7f7;
  cursor: pointer;
  padding: 16px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: all 0.3s ease;
  font-size: 1.1em;
  font-weight: 600;
  border-left: 4px solid transparent;
  background: linear-gradient(90deg, #f7f7f7 0%, #ffffff 100%);
}

.accordion-header:hover {
  background-color: #ffe7dc;
  border-left-color: #ff6b3d;
  padding-left: 20px;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
  padding: 0 15px;
  border-left: 3px solid #ff6b3d;
  margin-left: 10px;
}

.accordion-content p {
  margin: 15px 0;
  color: #555;
  line-height: 1.7;
}

/* ===== 新功能樣式 ===== */
.product-card .wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.product-card .wishlist-btn:hover {
  background: #ff6b3d;
  color: white;
  transform: scale(1.1);
}

.product-card .wishlist-btn.active {
  background: #ff6b3d;
  color: white;
}

.cart-counter {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3em;
  box-shadow: 0 6px 20px rgba(255, 107, 61, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 50;
}

.cart-counter:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(255, 107, 61, 0.6);
}

.back-to-top {
  position: fixed;
  bottom: 110px;
  right: 30px;
  background: linear-gradient(135deg, #111 0%, #333 100%);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  font-size: 1.2em;
  z-index: 49;
}

.back-to-top.show {
  display: flex;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 5px 0;
}

.rating span {
  color: #ff6b3d;
  font-size: 0.9em;
}

.quick-view-btn {
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  border: 2px solid #ff6b3d;
  color: #ff6b3d;
  border-radius: 0 0 12px 12px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9em;
}

.quick-view-btn:hover {
  background: #ff6b3d;
  color: white;
}

/* ===== 購物車側邊欄 ===== */
.cart-sidebar {
  position: fixed;
  right: -400px;
  top: 0;
  width: 400px;
  height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
  z-index: 99;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cart-sidebar.open {
  right: 0;
}

.cart-sidebar-header {
  padding: 20px;
  border-bottom: 2px solid #ff6b3d;
  background: linear-gradient(90deg, #ffffff 0%, #f9f9f9 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-sidebar-header h2 {
  margin: 0;
  font-size: 1.5em;
  color: #111;
}

.cart-close-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
}

.cart-close-btn:hover {
  color: #ff6b3d;
}

.cart-items-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.cart-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 12px;
}

.cart-item-img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background-color: #f5f5f5;
}

.cart-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart-item-name {
  font-weight: 700;
  color: #111;
  font-size: 0.95em;
  margin: 0;
}

.cart-item-price {
  color: #ff6b3d;
  font-weight: 700;
  font-size: 1em;
  margin: 5px 0;
}

.cart-item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cart-item-qty-btn {
  background: #f5f5f5;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  color: #333;
  transition: all 0.3s ease;
}

.cart-item-qty-btn:hover {
  background: #ff6b3d;
  color: white;
}

.cart-item-qty {
  min-width: 30px;
  text-align: center;
  font-weight: 700;
}

.cart-item-remove {
  background: #ffe7dc;
  border: none;
  color: #ff6b3d;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8em;
  transition: all 0.3s ease;
  margin-left: auto;
  font-weight: 600;
}

.cart-item-remove:hover {
  background: #ff6b3d;
  color: white;
}

.cart-empty {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

.cart-empty-icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.cart-footer {
  border-top: 2px solid #f0f0f0;
  padding: 20px;
  background: white;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1.2em;
  font-weight: 700;
}

.cart-total-label {
  color: #333;
}

.cart-total-amount {
  color: #ff6b3d;
}

.cart-checkout-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ff6b3d 0%, #ff8c42 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(255, 107, 61, 0.3);
}

.cart-checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 61, 0.5);
}

.cart-checkout-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cart-clear-btn {
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  font-size: 0.9em;
}

.cart-clear-btn:hover {
  background: #ffe7dc;
  color: #ff6b3d;
}

@media (max-width: 480px) {
  .cart-sidebar {
    width: 100%;
    right: -100%;
  }
}

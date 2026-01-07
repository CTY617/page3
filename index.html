<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DIFFERENT.Personalities | 潮流服飾</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <header>
    <h1 class="logo">DIFFERENT.Personalities</h1>
    <nav>
      <ul>
        <li><a href="index.html" class="active">首頁</a></li>
        <li><a href="shop.html">商品</a></li>
        <li><a href="about.html">關於我們</a></li>
      </ul>
    </nav>
  </header>



  <section class="hero">
    <h2>URBAN STREET STYLE</h2>
    <p>展現你的態度，穿出街頭靈魂。</p>
    <img src="https://i.pinimg.com/736x/f0/0e/7d/f00e7d29a4682da8c8323cd512d4ba03.jpg" alt="front"><br>
    <a href="shop.html" class="btn">立即選購</a>
    
  </section>

  <section class="products">
    <h2>熱門單品</h2>
    <div class="product-grid">
      <div class="product-card">
        <img src="https://i.pinimg.com/1200x/c5/09/df/c509dff884d3fad39a094090b82c6ca1.jpg" alt="hoodie">
        <h3>黑色連帽上衣</h3>
        <p>$1,680</p>
      </div>
      <div class="product-card">
        <img src="https://i.pinimg.com/736x/0f/5f/9a/0f5f9abf14f111aaa3d0968b9d558fec.jpg" alt="shoes">
        <h3>白色潮鞋</h3>
        <p>$2,980</p>
      </div>
      <div class="product-card">
        <img src="https://i.pinimg.com/1200x/8a/9e/b8/8a9eb8e8f6a7f83884833802c8af4b34.jpg" alt="cap">
        <h3>漁夫帽</h3>
        <p>$880</p>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2025 DIFFERENT.Personalities All rights reserved.</p>
  </footer>

  <!-- 購物車計數器 -->
  <div class="cart-counter" id="cartCounter" title="購物車">0</div>
  
  <!-- 購物車側邊欄 -->
  <div class="cart-sidebar" id="cartSidebar">
    <div class="cart-sidebar-header">
      <h2>購物車</h2>
      <button class="cart-close-btn" id="cartCloseBtn">&times;</button>
    </div>
    <div class="cart-items-container" id="cartItemsContainer">
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>購物車為空</p>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-total">
        <span class="cart-total-label">總金額：</span>
        <span class="cart-total-amount">$0</span>
      </div>
      <button class="cart-checkout-btn" id="cartCheckoutBtn">結帳</button>
      <button class="cart-clear-btn" id="cartClearBtn">清空購物車</button>
    </div>
  </div>
  
  <!-- 返回頂部按鈕 -->
  <button class="back-to-top" id="backToTop">↑</button>

  <!-- 商品放大彈窗 -->
<div class="product-modal" id="productModal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <img src="" alt="" id="modalImg">
    <h3 id="modalTitle"></h3>
    <p id="modalPrice"></p>
    <button class="add-to-cart">加入購物車</button>

  </div>
</div>
<script>
document.addEventListener('DOMContentLoaded', () => {
  // 購物車系統
  const cartCounter = document.getElementById('cartCounter');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
  const cartClearBtn = document.getElementById('cartClearBtn');
  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const closeBtn = document.querySelector('.product-modal .close');
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  const backToTop = document.getElementById('backToTop');

  // 初始化購物車數據
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartUI();

  // 選取所有商品卡片
  const products = document.querySelectorAll('.product-card, .carousel-item');

  products.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img').src;
      const title = card.querySelector('h3').innerText;
      const priceText = card.querySelector('p').innerText;
      const price = parseInt(priceText.replace(/[$,]/g, ''));

      modalImg.src = img;
      modalTitle.innerText = title;
      modalPrice.innerText = priceText;
      modalPrice.dataset.price = price;

      modal.style.display = 'flex';
    });
  });

  // 加入購物車功能
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = modalTitle.innerText;
      const price = parseInt(modalPrice.dataset.price || 0);
      const img = modalImg.src;

      // 檢查購物車中是否已存在該商品
      const existingItem = cart.find(item => item.title === title);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ title, price, img, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();

      // 購物車動畫效果
      cartCounter.style.transform = 'scale(1.2)';
      setTimeout(() => {
        cartCounter.style.transform = 'scale(1)';
      }, 200);

      alert(`${title} 已加入購物車！`);
      modal.style.display = 'none';
    });
  });

  // 購物車UI更新
  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartCounter.textContent = totalItems;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>購物車為空</p></div>';
    } else {
      cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-details">
            <p class="cart-item-name">${item.title}</p>
            <p class="cart-item-price">$${item.price}</p>
            <div class="cart-item-controls">
              <button class="cart-item-qty-btn" onclick="decreaseQty(${index})">-</button>
              <span class="cart-item-qty">${item.quantity}</span>
              <button class="cart-item-qty-btn" onclick="increaseQty(${index})">+</button>
              <button class="cart-item-remove" onclick="removeItem(${index})">移除</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    document.querySelector('.cart-total-amount').textContent = `$${totalPrice.toLocaleString()}`;
    cartCheckoutBtn.disabled = cart.length === 0;
  }

  // 購物車全局函數
  window.decreaseQty = function(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  };

  window.increaseQty = function(index) {
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  };

  window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  };

  // 購物車計數器點擊打開側邊欄
  cartCounter.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
  });

  // 關閉購物車側邊欄
  cartCloseBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
  });

  // 點擊背景關閉側邊欄
  document.addEventListener('click', (e) => {
    if (!cartSidebar.contains(e.target) && !cartCounter.contains(e.target)) {
      cartSidebar.classList.remove('open');
    }
  });

  // 結帳功能
  cartCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    alert(`訂單確認！\n共 ${cart.reduce((sum, item) => sum + item.quantity, 0)} 件商品\n總金額：$${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}`);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    cartSidebar.classList.remove('open');
  });

  // 清空購物車
  cartClearBtn.addEventListener('click', () => {
    if (confirm('確定要清空購物車嗎？')) {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
    }
  });

  // 點擊關閉
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 點擊 modal 背景也關閉
  modal.addEventListener('click', (e) => {
    if(e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // 返回頂部功能
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
</script>

  <script>
document.addEventListener('DOMContentLoaded', () => {
  // 選取要觸發動畫的元素
  const animatedElements = document.querySelectorAll('.product-card, .about, .contact');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target); // 只觸發一次
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});
</script>

</body>
</html>

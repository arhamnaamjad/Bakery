// ===================== Menu data =====================
  const menuItems = [
    { name: "Chocolate Fudge Cake", price: "Rs. 2500", category: "cakes", image: "images/chocolate-fudge-cake.jpg" },
    { name: "Red Velvet Cake", price: "Rs. 2400", category: "cakes", image: "images/red-velvet-cake.png" },
    { name: "Vanilla Bean Cake", price: "Rs. 2200", category: "cakes", image: "images/vanilla-bean-cake.png" },
    { name: "Classic Cupcakes (6 pcs)", price: "Rs. 1800", category: "cupcakes", image: "images/classic-cupcakes.png" },
    { name: "Strawberry Cupcakes (6 pcs)", price: "Rs. 1950", category: "cupcakes", image: "images/strawberry-cupcakes.png" },
    { name: "Chocolate Chip Cookies", price: "Rs. 650", category: "cookies", image: "images/chocolate-chip-cookies.png" },
    { name: "Oatmeal Raisin Cookies", price: "Rs. 600", category: "cookies", image: "images/oatmeal-raisin-cookies.png" },
    { name: "Butterscotch Pastry", price: "Rs. 320", category: "pastries", image: "images/butterscotch-pastry.png" },
    { name: "Butter Croissant", price: "Rs. 280", category: "pastries", image: "images/butter-croissant.jpg" },
    { name: "Fruit Tart", price: "Rs. 350", category: "pastries", image: "images/fruit-tart.png" },
    { name: "Black Forest Cake", price: "Rs. 2600", category: "cakes", image: "images/black-forest-cake.png" },
    { name: "Lemon Cupcakes (6 pcs)", price: "Rs. 1850", category: "cupcakes", image: "images/lemon-cupcakes.png" },
  ];

  const grid = document.getElementById("menuGrid");
  grid.innerHTML = menuItems.map((item, i) => `
    <div class="menu-item show" data-category="${item.category}" style="transition-delay:${Math.min(i * 60, 360)}ms">
      <div class="menu-item__media">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="menu-item__cat">${item.category}</span>
      </div>
      <div class="menu-item__body">
        <p class="menu-item__name">${item.name}</p>
        <div class="menu-item__row">
          <span class="menu-item__price">${item.price}</span>
          <button class="menu-item__add" aria-label="Add ${item.name} to cart">+</button>
        </div>
      </div>
    </div>
  `).join("");

  // ===================== Menu filter tabs =====================
  const tabs = document.querySelectorAll(".menu-tab");
  const items = document.querySelectorAll(".menu-item");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      items.forEach(item => {
        const match = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("show", match);
      });
    });
  });

  // ===================== Navbar scroll + mobile menu =====================
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  // ===================== Scroll reveal =====================
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach(el => observer.observe(el));

  // ===================== Contact form (frontend only) =====================
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    success.classList.add("show");
    form.reset();
    setTimeout(() => success.classList.remove("show"), 5000);
  });

  // ===================== Footer year =====================
  document.getElementById("year").textContent = new Date().getFullYear();

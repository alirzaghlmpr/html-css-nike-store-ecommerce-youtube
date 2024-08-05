import products from "./constants/products.js";

const doesUserLoggedIn = JSON.parse(
  localStorage.getItem("logged-in")
)?.username;

const headerDynamicContentContainer = document.querySelector(
  "#header-dynamic-content"
);
const productsGridContainer = document.querySelector(".product-grid");

document.addEventListener("DOMContentLoaded", () => {
  if (doesUserLoggedIn) {
    const cart = JSON.parse(localStorage.getItem(doesUserLoggedIn))?.cart;

    headerDynamicContentContainer.insertAdjacentHTML(
      "beforeend",
      `<a id="cart" href="/cart.html" class="flex">
            <img src="./assets//icons/cart.png" alt="" />
            <span id="cart_badge">${cart.length}</span>
          </a>
          <button onclick="logout()" id="logout-button">
            <span>خروج</span>
            <img src="./assets/icons/logout.png" alt="" />
          </button>`
    );

    products.map((product) => {
      productsGridContainer.insertAdjacentHTML(
        "beforeend",
        `        <article class="product-grid-item">
          <img src="${product?.img}" alt="" />
          <p class="flex justify-between padding-1">
            <span>نام</span><span class="font-exo2">${product?.name}</span>
          </p>
          <p class="flex justify-between padding-1">
            <span>قیمت</span><span>${product?.price.toLocaleString()} تومان</span>
          </p>
          <div onclick='addToCart(${product.id},${product.price},"${
          product.name
        }","${product.img}")' class="product-to-cart-section padding-1">
            <button class="font-size-1">افزودن به سید خرید</button>
          </div>
        </article>`
      );
    });
  } else {
    headerDynamicContentContainer.insertAdjacentHTML(
      "beforeend",
      `<a class="header__login-button" href="/login.html">
            <img src="./assets//icons/user.png" alt="" />
            <span>ورود</span>
          </a>`
    );

    products.map((product) => {
      productsGridContainer.insertAdjacentHTML(
        "beforeend",
        `        <article class="product-grid-item">
            <img src="${product?.img}" alt="" />
            <p class="flex justify-between padding-1">
              <span>نام</span><span class="font-exo2">${product?.name}</span>
            </p>
            <p class="flex justify-between padding-1">
              <span>قیمت</span><span>${product?.price.toLocaleString()} تومان</span>
            </p>
            <div onclick="goToLogin()"class="product-to-cart-section padding-1">
                <button class="font-size-1">ورود برای خرید</button>
            </div>
          </article>`
      );
    });
  }
});

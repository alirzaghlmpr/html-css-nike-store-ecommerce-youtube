const loggedInUser = JSON.parse(localStorage.getItem("logged-in"))?.username;

const cartContainer = document.querySelector(".cart-container");
const cartItemsContainer = document.querySelector("#cart_items-container");

document.addEventListener("DOMContentLoaded", () => {
  if (loggedInUser) {
    const cart = JSON.parse(localStorage.getItem(loggedInUser))?.cart;

    cartContainer.insertAdjacentHTML(
      "afterbegin",
      `<p class="font-rokh font-size-2 font-weight-700">سبد خرید شما :</p>
      <p class="font-exo2 font-size-1">username : ${loggedInUser}</p>
      <a href="/index.html" class="font-size-1">بازگشت به صفحه اصلی</a>
      `
    );

    cart.length > 0
      ? cart.map(({ name, price, id, img }) => {
          cartItemsContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="cart-item flex justify-between items-center padding-1">
          <img src="${img}" alt="" />
          <p class="font-exo2">${name}</p>
          <p>${price.toLocaleString()} تومان</p>
          <button onclick="deleteItem(${id})">حذف</button>
        </div>`
          );
        })
      : cartItemsContainer.insertAdjacentHTML(
          "beforeend",
          `<p class="text-center padding-3">کالایی در سبد خرید وجود ندارد<p>`
        );

    let totalPrices = 0;
    cart.map(({ price }) => (totalPrices += price));

    cartContainer.insertAdjacentHTML(
      "beforeend",
      `<p>مجموعا ${
        cart.length
      } کالا  به ارزش ${totalPrices.toLocaleString()}<p>`
    );
  } else {
    cartContainer.insertAdjacentHTML(
      "beforeend",
      `<p class="font-size-4 font-weight-700 font-rokh">باید حتما لاگین کنید!</p>
      <a href="/login.html">برای ورود کلیک کنید!</a>`
    );
  }
});

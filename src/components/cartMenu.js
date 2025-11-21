
export function cartMenu(element) {
  element.innerHTML = `
    <div class="cart__close" id="cart-close">
      <i class="fa-solid fa-xmark"></i>
    </div>
    <h3 class="cart__title">Your Cart</h3>
    <p class="cart__subtitle">3 Products in Your Cart</p>
    <div class="cart__content box">
      <div class="cart__item">
        <div class="cart__item--img">
          <img src="/assets/images/product-1.jpg" alt="Product 1">
        </div>
        <div class="cart__item--details">
          <h4 class="cart__item--name">Product 1</h4>
          <p class="cart__item--price">$29.99</p>
        </div>
      </div>
    </div>
  `;


  const cartMenu = element;
  const cartButton = document.getElementById('cart-button');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartClose = element.querySelector('#cart-close');

  // Show cart menu and overlay
  if (cartButton) {
    cartButton.addEventListener('click', () => {
      cartMenu.classList.add('show-cart');
      cartOverlay.classList.add('show-overlay');
    });
  }

  // Hide cart menu and overlay
  if (cartClose) {
    cartClose.addEventListener('click', () => {
      cartMenu.classList.remove('show-cart');
      cartOverlay.classList.remove('show-overlay');
    });
  }

  // Close cart when clicking on overlay
  if (cartOverlay) {
    cartOverlay.addEventListener('click', () => {
      cartMenu.classList.remove('show-cart');
      cartOverlay.classList.remove('show-overlay');
    });
  }
}

/**
 * Generate HTML for cart quantity controls.
 * @param {number} quantity - The current quantity of the item.
 * @returns {string} HTML string for the quantity controls.
 */
export function quantity(quantity = 1) {
  return `
    <div class="cart__item--quantity">
      <button id="decrease-button" class="cart__item--quantity-decrease">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <span class="cart__item--quantity-number">${quantity}</span>
      <button id="increase-button" class="cart__item--quantity-increase">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  `;
}

/**
 * Attach event listeners to quantity control buttons.
 * @param {HTMLElement} element - The parent element containing cart items.
 * @param {Object} cart - The cart object with methods to update quantities.
 * @param {Function} rerenderCartMenu - Function to rerender the cart menu UI.
 * @returns {void}
 */
export function quantityListeners(element, cart, rerenderCartMenu) {
  const cartItemDivs = element.querySelectorAll('.cart__item, .cart-page__item');
  cartItemDivs.forEach(cartItemDiv => {
    const decreaseButton = cartItemDiv.querySelector('.cart__item--quantity-decrease');
    const increaseButton = cartItemDiv.querySelector('.cart__item--quantity-increase');
    const productId = cartItemDiv.getAttribute('data-product-id');

    if (decreaseButton) {
      decreaseButton.addEventListener('click', () => {
        const item = cart.getCartItems().find(i => String(i.id) === String(productId));
        if (item) {
          if (item.quantity > 1) {
            cart.updateItemQuantity(item.id, item.quantity - 1);
          } else {
            cart.removeFromCart(item.id);
          }
          rerenderCartMenu(element);
        }
      });
    }

    if (increaseButton) {
      increaseButton.addEventListener('click', () => {
        const item = cart.getCartItems().find(i => String(i.id) === String(productId));
        if (item) {
          cart.updateItemQuantity(item.id, item.quantity + 1);
          rerenderCartMenu(element);
        }
      });
    }
  });
}

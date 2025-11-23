// Import the productMenuCartCard component
import { useCart } from '../utils/useCart.js';
import { productMenuCartCard } from './cards/productMenuCartCard.js';

export function cartMenu(element) {
  const cart = useCart();

  element.innerHTML = `
    <div class="cart__container">
      <div class="cart__close" id="cart-close">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <h3 class="cart__title">Your Cart</h3>
      <p class="cart__subtitle">${cart.getCartCount()} Products in Your Cart</p>
      <div class="cart__content">
          ${cart.getCartItems().length === 0 ? '' : (
            cart.getCartItems().map(item => productMenuCartCard(item)).join('')
          )}
      </div>
      <div class="cart__checkout">
        <button class="btn btn__large btn__primary btn__full-width">
            Checkout
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </button>
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

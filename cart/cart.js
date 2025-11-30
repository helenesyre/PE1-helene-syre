import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { productCartCard } from '../src/components/cards/productCartCard.js';
import { useCart } from '../src/utils/useCart.js';
import { quantityListeners } from '../src/utils/quantity.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')
// Initialize footer
document.querySelector('#footer').innerHTML = footer();

// Prevent form refresh on promocode apply
// Logic adapted from https://www.w3schools.com/jsref/event_preventdefault.asp
document.addEventListener('DOMContentLoaded', () => {
  const promocodeForm = document.getElementById('promocode-form');
  if (promocodeForm) {
    promocodeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Reset input field
      const input = promocodeForm.querySelector('input[name="promocode"]');
      if (input) input.value = '';
    });
  }
});

//Render quantity controls in cart
const quantityContainer = document.getElementById('cart-quantity');
if (quantityContainer) {
	quantityContainer.innerHTML = quantity(1);
}
// Render product cart card in .cart-page__content
const cartContentDiv = document.querySelector('.cart-page__content');
const cart = useCart();

function renderCart() {
  if (cartContentDiv) {
    cartContentDiv.innerHTML = '';

    cart.getCartItems().map(item => cartContentDiv.append(productCartCard(item)));

    const clearButton = document.createElement('button');
    clearButton.id = 'clear-cart';
    clearButton.className = 'button--clear-cart';
    clearButton.setAttribute('aria-label', 'Clear cart');
    clearButton.innerHTML = `
          Clear Cart
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
    `;
    cartContentDiv.append(clearButton);
  }

  // Attach remove button event delegation once
  if (cartContentDiv) {
    cartContentDiv.addEventListener('click', (e) => {
      // Clear entire cart
      const clearButton = e.target.closest('#clear-cart');
      if (clearButton) {
        cart.clearCart();
        renderCart();
        return;
      }
    });
  }


  quantityListeners(cartContentDiv, cart, renderCart);
}


function updateCartCount() {
  const cartCountSpan = document.getElementById('cart-count');
  if (cartCountSpan) {
    cartCountSpan.textContent = cart.getCartCount();
  }
}

function renderCartAndCount() {
  renderCart();
  updateCartCount();
}

renderCartAndCount();

document.addEventListener('cartModified', () => {
  renderCartAndCount();
});

function cartSummary() {
  const { subtotal, taxes, discount, delivery, total } = cart.getCartSummary();
  // Inject summary HTML into .summary__items
  const cartSummarySection = document.querySelector('.summary__items');
  if (cartSummarySection) {
    cartSummarySection.innerHTML = `
      <div class="summary__item">
        <span>Subtotal</span>
        <span>$${subtotal}</span>
      </div>
      <div class="summary__item">
        <span>Delivery cost</span>
        <span>$${delivery}</span>
      </div>
      <div class="summary__item">
        <span>Tax</span>
        <span>$${taxes}</span>
      </div>
      <div class="summary__item discount">
        <span>Discount</span>
        <span class="discount">-$${discount}</span>
      </div>
      <div class="summary__item summary__item--total">
        <span>Total</span>
        <span>$${total}</span>
      </div>
    `;
  }
  
}

cartSummary();

document.addEventListener('cartModified', () => {
  cartSummary();
});
// Returns the HTML markup for the cart quantity controls
export function quantity(quantity = 1) {
  return `
    <div class="cart__item--quantity">
      <button class="cart__item--quantity-decrease">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <span class="cart__item--quantity-number">${quantity}</span>
      <button class="cart__item--quantity-increase">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  `;
}

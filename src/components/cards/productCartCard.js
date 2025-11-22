// Card component for displaying a product in the cart
export function productCartCard() {
  return `
    <div class="cart__item box">

        <div class="cart__item--info">
            <div class="cart__item--img">
            <img src="/src/assets/images/headphones.jpg" alt="Product 1">
            </div>

            <div class="cart__item--details">
                <div class="cart__item--tags">
                    <span class="tag--cart">headphones</span>
                    <span class="tag--cart">electronics</span>
                </div>
                <h4 class="cart__item--name">Product 1</h4>
                <div class="cart__item--price">
                    <p class="cart__item--price-discount">$19.99</p>
                    <p class="cart__item--price-old">$29.99</p>
                </div>
            </div>
        </div>

        <div class="cart__item--actions">
            <div class="cart__item--quantity">
                <button class="cart__item--quantity-decrease">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg>
                </button>
                <span class="cart__item--quantity-number">1</span>
                <button class="cart__item--quantity-increase">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>
            </div>
            <div class="cart__item--remove">
                <button class="cart__item--remove-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
  `;
}
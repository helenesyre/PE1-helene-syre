import { quantity } from "../../utils/quantity.js";
import { useCart } from "../../utils/useCart.js";
// Card component for displaying a product in the cart
export function productCartCard(product) {
    let priceHTML = '';
    const totalPrice = (product.price * product.quantity).toFixed(2);
    if (
        typeof product.discountedPrice === 'number' &&
        product.discountedPrice < product.price
    ) {
        const totalDiscounted = (product.discountedPrice * product.quantity).toFixed(2);
        priceHTML = `
            <p class="cart-page__item--price-discount">$${totalDiscounted}</p>
            <p class="cart-page__item--price-old">$${totalPrice}</p>
        `;
    } else {
        priceHTML = `<p class="cart-page__item--price-regular">$${totalPrice}</p>`;
    }
    const element = document.createElement('div');
    element.classList.add('cart-page__item', 'box');
    element.setAttribute('data-product-id', product.id);

    element.innerHTML = `
        <div class="cart-page__item--info">
            <div class="cart-page__item--img">
            <img src="${product.image.url}" alt="${product.image.alt}">
            </div>
            <div class="cart-page__item--details">
                <div class="cart-page__item--tags">
                    ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h4 class="cart-page__item--name">${product.title}</h4>
                <div class="cart-page__item--price">
                    ${priceHTML}
                </div>
            </div>
        </div>

        <div class="cart-page__item--actions">
            ${quantity(product.quantity)}
            <div class="cart-page__item--remove">
                <button id="remove-button-${product.id}" class="cart-page__item--remove-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    `;

    const cart = useCart();

    element.querySelector(`#remove-button-${product.id}`).addEventListener('click', () => {
        cart.removeFromCart(product.id);
    });
    
    return element;
}
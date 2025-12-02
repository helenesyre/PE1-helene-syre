/** 
 * Price comparison logic from:
 * Compare old and new price for each element if any is equal or not
 * @publisher: Mohamed-Yousef
 * @date: 2022-02-01
 * link: https://stackoverflow.com/questions/70943684/compare-old-and-new-price-for-each-element-if-any-is-equal-or-not
*/

/**
 * Creates a product card element.
 * @param {Object} product - The product data.
 * @param {string} product.id - The product ID.
 * @param {string} product.title - The product title.
 * @param {Object} product.image - The product image object.
 * @param {string} product.image.url - The URL of the product image.
 * @param {number} product.price - The regular price of the product.
 * @param {number} product.discountedPrice - The discounted price of the product.
 * @param {Array<string>} product.tags - An array of tags associated with the product.
 * @returns {HTMLElement} The product card element.
 */
export function prouductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    let priceHTML = `<p class="product-card__price--regular">$${product.price}</p>`;
    if (product.discountedPrice < product.price) {
        priceHTML = `
        <div class="product-card__price">
            <p class="product-card__price--discount">$${product.discountedPrice}</p>
            <p class="product-card__price--old">$${product.price}</p>
        </div>`;
    }        
    
    card.innerHTML = `
    <a href="${import.meta.env.BASE_URL}/product/?id=${product.id}">
        <div class="product-card__image-wrapper">
            <div class="product-card__favorite-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </div>
            <img src="${product.image.url}" alt="${product.title}" class="product-card__image"/>
        </div>
    </a>
    <div class="product-card__tags">
        ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <h5 class="product-card__title">${product.title}</h5>
    ${priceHTML}
    <a href="${import.meta.env.BASE_URL}/product/?id=${product.id}" class="button button--small button--responsive-medium button--primary button--full-width">Buy Now</a>
    `;
    return card;
}
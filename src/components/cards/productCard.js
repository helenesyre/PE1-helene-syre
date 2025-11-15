// Link for price comparison logic:
// https://stackoverflow.com/questions/70943684/compare-old-and-new-price-for-each-element-if-any-is-equal-or-not

export function prouductCard(product) {
    const card = document.createElement('div');
    card.className = 'product__card';

    let priceHTML = `<p class="product__card__price--regular">$${product.price}</p>`;
    if (product.discountedPrice < product.price) {
        priceHTML = `
        <div class="product__card__price">
            <p class="product__card__price--discount">$${product.discountedPrice}</p>
            <p class="product__card__price--old">$${product.price}</p>
        </div>`;
    }        
    
    card.innerHTML = `
    <a href="/product.html?id=${product.id}" class="product__card__link">
        <div class="product__card__image-wrapper">
            <div class="product__card__favorite-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </div>
            <img src="${product.image.url}" alt="${product.title}" class="product__card__image"/>
        </div>
    </a>
    <div class="product__card__tags">
        ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <h4 class="product__card__title">${product.title}</h4>
    ${priceHTML}
    <a href="./product/index.html" class="btn btn-primary btn__full-width">Buy Now</a>
    `;
    return card;
}
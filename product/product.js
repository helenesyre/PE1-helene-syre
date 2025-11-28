import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { getProductById } from "../src/utils/fetch";
import { productReviews } from '../src/components/productReviews.js';
import { renderStarRating } from '../src/utils/rating.js';
import { similarGrid } from '../src/components/grids/similarGrid.js';
import { showSimpleToast, showToast } from '../src/utils/toast.js';
import { useAuth } from '../src/utils/useAuth.js';
import { useCart } from '../src/utils/useCart.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')
// Initialize footer
document.querySelector('#footer').innerHTML = footer();


export async function displayProduct() {
    // Get product ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const auth = useAuth();
    const cart = useCart();

    if (!productId) {
        console.error('No product ID found in URL');
        return;
    }

    try {
        const product = await getProductById(productId);
        const productsContainer = document.getElementById('products-container');

        let priceHTML = `<p class="product__price--regular">$${product.price}</p>`;
        if (product.discountedPrice < product.price) {
            priceHTML = `
            <div class="product__price-container">
                <p class="product__price--discounted">$${product.discountedPrice}</p>
                <p class="product__price">$${product.price}</p>
            </div>`;
        }
        const productStarsHTML = renderStarRating(product.rating);
        const addToCart = () => {
            cart.addToCart(product)
        }
        
        productsContainer.innerHTML = `
        <div class="product__page">
            <div class="product__image-wrapper">
                <a href="../index.html" class="back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Back to Home
                </a>
                <img src="${product.image.url}" alt="${product.title}" class="product__image" />
            </div>
            <div class="product__details">
                <div class="product__overview">
                    <h1>${product.title}</h1>
                    <div class="product__pricing-rating">
                        ${priceHTML}
                        <div class="product__rating">
                            ${productStarsHTML} <span class="product__review-count">(${product.reviews.length} reviews)</span>
                        </div>
                    </div>
                </div>
                <div class="product__description box">
                    <h2>Description</h2>
                    <p>${product.description}</p>
                </div>
                <div class="product__categories">
                    <h2>Categories</h2>
                    <div class="product__tags-container">
                        ${product.tags.map(tag => `<span class="product__tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="product__actions">
                    <button id="add-to-cart-btn" class="btn btn__large btn__primary btn__full-width ${auth.isLoggedIn() ? '' : 'btn_disabled'}" ${auth.isLoggedIn() ? '' : 'disabled'}>Add to Cart</button>
                    ${auth.isLoggedIn() ? '' : (`<p>Login to be able to buy product.</p>`)}
                </div>
                <div class="product__wishlist-share">
                    <div class="wishlist">
                        <p>Add to Wishlist</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </div>
                    <button id="copy-link-btn" class="share">
                        <p>Share</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>`;
        
    // Add event listener for copy link button
    document.getElementById('copy-link-btn').addEventListener('click', copyCurrentLinkToClipboard);
    document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);
    
    // Display product reviews
    document.getElementById('product-reviews-container').innerHTML = productReviews(product.reviews);
    } catch (error) {
        console.error('Error fetching product:', error);
    }
}

/* Source from 16.nov: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard */
async function copyCurrentLinkToClipboard() {
  try {
    // Get the current URL with its query parameters
    const currentUrl = window.location.href;
    // Write the URL to the clipboard
    await navigator.clipboard.writeText(currentUrl);
    // Show a toast notification
    showSimpleToast('Product link copied to clipboard!', 'success');
  } catch (err) {
    // Show a toast notification
    showSimpleToast('Failed to copy product link to clipboard.', 'error');
  }
}

// Call the function to display the product
displayProduct();

// Similar grid initialization
async function initSimilarGrid() {
    const similarSection = await similarGrid();
    document.querySelector('#similarGrid').appendChild(similarSection);
}

initSimilarGrid();


async function handleAddToCart(product) {
    
}

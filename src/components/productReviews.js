/** 
 * Avatar initials logic reference from:
 * How do I set profile image as first letters of first and last name?
 * @publisher: Penny Liu
 * @date: 2020-05-07
 * accessed: 2025-11-16
 * link: https://stackoverflow.com/questions/36823343/how-do-i-set-profile-image-as-first-letters-of-first-and-last-name
*/

import { renderStarRating } from '../utils/rating.js';

/**
 * Generates HTML for product reviews.
 * @param {Array<Object>} reviews - Array of review objects.
 * @returns {string} HTML string for the product reviews section.
 */
export function productReviews(reviews) {
    if (!reviews || reviews.length === 0) {
        return `<p>No reviews available for this product.</p>`;
    }
    return `${reviews.map(review => `
    <div class="product__review-item box">
        <div class="product__review-header">
            <div class="product__review-avatar">${review.username.split(' ').map(name => name[0]).join('').toUpperCase().slice(0, 2)}</div>
            <div>
                <p class="product__review-author">${review.username}</p>
                <div class="product__review-rating">
                    ${renderStarRating(review.rating)} <span class="reviews__review-count">${review.rating}</span>
                </div>
            </div>
        </div>
        <p class="product__review-comment">${review.description}</p>
    </div>`).join('')}`;
}
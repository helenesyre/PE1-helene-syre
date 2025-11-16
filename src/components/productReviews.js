/* Avatar initials logic reference (Penny Liu) 16.nov:
https://stackoverflow.com/questions/36823343/how-do-i-set-profile-image-as-first-letters-of-first-and-last-name
*/

import { renderStarRating } from '../utils/rating.js';

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
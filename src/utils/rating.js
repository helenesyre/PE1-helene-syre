/**
 * Source from:
 * Math.floor()
 * @publisher: MDN Contributors
 * @date: 2025-07-10
 * accessed: 2025-11-16
 * link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/

/**
 * Renders star rating HTML based on the given rating.
 * @param {number} rating - The rating value (0 to 5).
 * @returns {string} HTML string representing the star rating.
 */
export function renderStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `
      <svg id="fullStars" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
        <defs>
          <clipPath id="clippath">
          <rect width="20" height="20" style="fill: none;"/>
          </clipPath>
        </defs>
        <g style="clip-path: url(#clippath);">
          <path d="M8.78.76c.45-1.14,1.99-1.14,2.45,0l2.1,5.28,5.45.46c1.17.1,1.65,1.63.76,2.43l-4.16,3.72,1.27,5.56c.27,1.2-.97,2.14-1.98,1.5l-4.67-2.98-4.67,2.98c-1.01.64-2.25-.31-1.98-1.5l1.27-5.56L.47,8.92c-.9-.8-.42-2.33.76-2.43l5.45-.46L8.78.76Z" style="fill: currentColor; fill-rule: evenodd;"/>
        </g>
      </svg>`;
  }
  if (halfStar) {
    starsHTML += `
      <svg id="halfStar" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
        <defs>
          <clipPath id="clippath">
          <rect width="10" height="20" style="fill: none;"/>
          </clipPath>
          <clipPath id="clippath-1">
          <rect x="10" width="10" height="20" style="fill: none;"/>
          </clipPath>
        </defs>
        <g style="clip-path: url(#clippath);">
          <path d="M8.78.85c.45-1.14,1.99-1.14,2.45,0l2.1,5.28,5.45.46c1.17.1,1.65,1.63.76,2.43l-4.16,3.72,1.27,5.56c.27,1.2-.97,2.14-1.98,1.5l-4.67-2.98-4.67,2.98c-1.01.64-2.25-.31-1.98-1.5l1.27-5.56L.47,9.02c-.9-.8-.42-2.33.76-2.43l5.45-.46L8.78.85Z" style="fill: currentColor; fill-rule: evenodd;"/>
        </g>
        <g style="clip-path: url(#clippath-1);">
          <path d="M8.78.85c.45-1.14,1.99-1.14,2.45,0l2.1,5.28,5.45.46c1.17.1,1.65,1.63.76,2.43l-4.16,3.72,1.27,5.56c.27,1.2-.97,2.14-1.98,1.5l-4.67-2.98-4.67,2.98c-1.01.64-2.25-.31-1.98-1.5l1.27-5.56L.47,9.02c-.9-.8-.42-2.33.76-2.43l5.45-.46L8.78.85Z" style="fill: var(--color-black-50); fill-rule: evenodd;"/>
        </g>
      </svg>`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `
      <svg id="emptyStar" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
        <defs>
          <clipPath id="clippath">
          <rect width="20" height="20" style="fill: none;"/>
          </clipPath>
        </defs>
        <g style="clip-path: url(#clippath);">
          <path d="M8.78.76c.45-1.14,1.99-1.14,2.45,0l2.1,5.28,5.45.46c1.17.1,1.65,1.63.76,2.43l-4.16,3.72,1.27,5.56c.27,1.2-.97,2.14-1.98,1.5l-4.67-2.98-4.67,2.98c-1.01.64-2.25-.31-1.98-1.5l1.27-5.56L.47,8.92c-.9-.8-.42-2.33.76-2.43l5.45-.46L8.78.76Z" style="fill: currentColor; fill-rule: evenodd;"/>
        </g>
      </svg>`;
  }

  return `<div class="star-rating">${starsHTML}</div>`;
}

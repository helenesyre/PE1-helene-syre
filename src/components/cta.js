/**
 * Call-to-Action (CTA) component rendering function.
 * @returns {string} HTML string for the CTA section.
 */
export default function cta() {
    return `
    <div class="container">
        <div class="cta__content">
            <div class="cta__text">
                <h2 class="section__title section__title--centered">Subscribe to our Newsletter!</h2>
                <p class="section__subtitle section__subtitle--centered">Join our newsletter to get exclusive offers on new products, sales and more.</p>
            </div>
            <form class="cta__form" action="#" method="post">
                <label for="cta-email" class="sr-only">Email address</label>
                <input id="cta-email" type="email" class="cta__input" placeholder="Enter your email...">
                <button type="submit" class="button--cta">Subscribe</button>
            </form>
            <svg class="cta__shape-top-left" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 169">
                <path d="M29.01,139.9c6,5.96,3.42,11.5,6.05,18.01,2.44,6.05,8.03,10.06,14.54,10.76,11.95-.85,25.44,1.11,37.21-.05,15.16-1.51,20.79-20.95,8.83-30.51-7.68-6.13-16.64-1.01-23.65-9.77-6.23-7.78-.91-16.4-10.19-23.81-7.61-6.08-16.5-1.08-23.51-9.59-8.73-10.59-1.7-26.09,12-27.04,22.68-1.58,47.2,1.22,70.07,0,15.32-1.64,21.36-20.78,9.14-30.55-7.68-6.13-16.64-1.01-23.65-9.77-4.7-5.87-2.57-10.42-4.77-16.42-1.84-5.01-6.74-9.41-12-10.59C64.72-.56,40.17.39,15.76.09,7.37.98.86,7.31,0,15.69l.1,105.03c1.04,4.72,3.51,8.93,7.66,11.55,7.3,4.62,14.51.94,21.25,7.63Z" style="fill: currentColor;"/>
            </svg>
            <svg class="cta__shape-bottom-right" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 153">
                <path d="M110.19,152.88l-65.44.12c-4.87-.51-9.12-3.21-11.58-7.47-4.11-7.1-.23-14.57-8.63-20.2-4.68-3.15-8.28-2.07-13.17-3.44-6.79-1.93-10.45-8.26-10.94-15.03-.49-6.76-.88-28.85.61-34.38,1-3.72,3.91-7.51,7.24-9.4,6.28-3.58,12.76-.75,18.49-6.63,5.11-5.25,2.99-9.83,5.05-15.65,2.41-6.86,8.47-10.07,15.38-10.56,10.15-.75,21.56.94,31.58,0,6.26-.57,11.62-5.98,12.62-12.11.37-2.26.1-4.56.78-6.94,3.85-13.26,22.36-15.3,28.78-3.05,2.88,5.49.65,11.05,4.93,16.58,5.99,7.71,13.32,3.85,20.19,8.18,3.87,2.44,6.57,7.16,6.93,11.74v63.84c-.53,5.19-3.6,10.07-8.24,12.45-5.57,2.85-10.96.51-16.45,5.01-7.75,6.33-3.64,13.43-8.33,20.49-2.23,3.36-5.83,5.57-9.78,6.43v.02ZM110.21,121.59c6.2-1.5,11.88-5.44,12.7-11.87,0-16.02,7.61-46.54-16.63-48.2-20.27-1.4-42.65.67-63.03.51-6.91,1.79-11.05,7.26-11.62,14.34-.57,6.9-.88,28.3.59,34.36,1.43,5.84,6.57,10.36,12.54,10.97l65.46-.12Z" style="fill: currentColor;"/>
            </svg>
        </div>
    </div>`;
}
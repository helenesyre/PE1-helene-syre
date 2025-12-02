import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { useCart } from '../src/utils/useCart.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')

// Initialize footer
document.querySelector('#footer').innerHTML = footer();

/** 
 * Code logic from:
 * Math.random()
 * @publisher: MDN Contributors
 * @date: 2025-07-10
 * link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

/** 
 * Generates a random order number in the format ORD-XXXXX.
 * @returns {number} A random 5-digit order number.
 */
function generateRandomOrderNumber() {
	// Generates a random 5-digit number between 10000 and 99999
	return Math.floor(10000 + Math.random() * 90000);
}

/** 
 * Sets up the success page by displaying order details and clearing the cart.
 * @returns {void}
 */
function successPageSetup() {
    // Display order number in the success page
	const orderNumber = document.getElementById('order-number');
	if (orderNumber) {
		const randomOrderNum = generateRandomOrderNumber();
		orderNumber.textContent = `Order Number: ORD-${randomOrderNum}`;
	}

    // Display cart total in the success page
    const orderTotal = document.getElementById('order-total');
    if (orderTotal) {
        const cart = useCart();
        const { total } = cart.getCartSummary();
        orderTotal.textContent = `$${total}`;
    }
  
    // Clear cart when clicking 'Track order' or 'Continue Shopping'
    const cart = useCart();
    const trackOrderButton = document.querySelector('.button--track-order');
    const continueShoppingButton = document.querySelector('.button--continue-shopping');
    function handleClearCart() {
        cart.clearCart();
    }
    if (trackOrderButton) {
        trackOrderButton.addEventListener('click', handleClearCart);
    }
    if (continueShoppingButton) {
        continueShoppingButton.addEventListener('click', handleClearCart);
    }
};

successPageSetup();

document.addEventListener('cartModified', () => {
  successPageSetup();
});


// Logic from JS1 course material
/** 
 * Formats a date to "DD MMM YYYY".
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/** 
 * Gets today's date formatted as "DD MMM YYYY".
 * @returns {string} The formatted date string for today.
 */
function todaysDate() {
    const today = new Date();
    return formatDate(today);
}

/** 
 * Calculates the estimated delivery date (7 days from today) and formats it.
 * @returns {string} The formatted estimated delivery date string.
 */
function estimatedDeliveryDate() {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7);
    return formatDate(deliveryDate);
}

document.getElementById('order-date').textContent = todaysDate();
document.getElementById('delivery-date').textContent = estimatedDeliveryDate();


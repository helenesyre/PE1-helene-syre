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

// Generate and display a random order number
function generateRandomOrderNumber() {
	// Generates a random 5-digit number between 10000 and 99999
	return Math.floor(10000 + Math.random() * 90000);
}

function successPageSetup() {
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


// Logic from JS course material
function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function todaysDate() {
    const today = new Date();
    return formatDate(today);
}

function estimatedDeliveryDate() {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7);
    return formatDate(deliveryDate);
}

document.getElementById('order-date').textContent = todaysDate();
document.getElementById('delivery-date').textContent = estimatedDeliveryDate();


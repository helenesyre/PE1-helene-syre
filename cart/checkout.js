import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { useCart } from '../src/utils/useCart.js';
import { showToast } from "../src/utils/toast.js";
import { validateCardNumber, validateFullName, validateExpirationDate, validateCVV, validateEmail, validatePhoneNumber, validateName, validateAddress, validateLocationName, validatePostalCode, validationErrorMessageHTML, formatCardNumberInput, formatExpirationDateInput } from '../src/utils/validation.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')

// Initialize footer
document.querySelector('#footer').innerHTML = footer();

const cart = useCart();

/** 
 * Renders the cart summary section in the checkout page.
 * @returns {void}
 */
function cartSummary() {
  const { subtotal, taxes, discount, delivery, total } = cart.getCartSummary();
  // Inject summary HTML into .summary__items
  const cartSummarySection = document.querySelector('.summary__items');
  if (cartSummarySection) {
    cartSummarySection.innerHTML = `
        <div class="summary__item">
            <span>Subtotal</span>
            <span>$${subtotal}</span>
        </div>
        <div class="summary__item">
            <span>Delivery cost</span>
            <span>$${delivery}</span>
        </div>
        <div class="summary__item">
            <span>Tax</span>
            <span>$${taxes}</span>
        </div>
        <div class="summary__item discount">
            <span>Discount</span>
            <span class="discount">-$${discount}</span>
        </div>
        <div class="summary__item summary__item--total">
            <span>Total</span>
            <span>$${total}</span>
        </div>
    `;
  }
  
}

cartSummary();

document.addEventListener('cartModified', () => {
  cartSummary();
});

// Select all payment method radio buttons
const radios = document.querySelectorAll('input[name="payment-method"]');

const paymentMethodChanged = new Event('paymentMethodChanged');

// Add change event listeners to each radio button
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    radios.forEach(r => r.closest('label').classList.remove('checked'));
    radio.closest('label').classList.add('checked');
    document.dispatchEvent(paymentMethodChanged);
  });
});

/** 
 * Code setup and adaptation based on:
 * Set the required attribute in JavaScript
 * @publisher: Mike
 * @date: 2023-08-06
 * link: https://javascriptf1.com/snippet/set-the-required-attribute-in-javascript
*/

// Listen for payment method changes
document.addEventListener('paymentMethodChanged', () => {
  const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
  if (selectedMethod === 'card') {
    document.querySelector('.checkout__payment-method-card-info').style.display = 'flex';
    document.querySelector('#card-number').setAttribute('required', true);
    document.querySelector('#card-holder-name').setAttribute('required', true);
    document.querySelector('#expiration-date').setAttribute('required', true);
    document.querySelector('#cvv').setAttribute('required', true);
  } else {
    document.querySelector('.checkout__payment-method-card-info').style.display = 'none';
    document.querySelector('#card-number').removeAttribute('required');
    document.querySelector('#card-holder-name').removeAttribute('required');
    document.querySelector('#expiration-date').removeAttribute('required');
    document.querySelector('#cvv').removeAttribute('required');
  }
});

/** 
 * Displays a validation error message after the specified input element.
 * @param {HTMLElement} input - The input element to show the error for.
 * @param {string} message - The validation error message to display.
 * @returns {void}
 */
function showValidationError(input, message) {
    const oldError = input.parentElement.querySelector('.form__error');
    if (oldError) oldError.remove();
    input.insertAdjacentHTML('afterend', validationErrorMessageHTML(message));
}

// Card number input formatting
const cardNumberInput = document.getElementById('card-number');
if (cardNumberInput) {
    cardNumberInput.addEventListener('input', () => {
        cardNumberInput.value = formatCardNumberInput(cardNumberInput.value);
    });
}

// Expiration date input formatting
document.addEventListener("DOMContentLoaded", () => {
  const expirationInput = document.getElementById("expiration-date");
  if (expirationInput) {
    expirationInput.addEventListener("input", (e) => {
      const formatted = formatExpirationDateInput(e.target.value);
      e.target.value = formatted;
    });
  }
});

/**
 * Handles the form submission event for the checkout form.
 * Form submission validation handling
 * @param {Event} event - The form submission event.
 * @returns {void}
 */
const form = document.querySelector('#checkout__form');
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    // Validate form inputs
    const formData = new FormData(event.target);
    event.target.querySelectorAll('.form__error').forEach(errorElement => errorElement.remove());
    let isValid = true;
    for (const [name, value] of formData.entries()) {
        switch(name) {
            case 'card-number': {
                const input = event.target.querySelector('#card-number');
                if ((value && validateCardNumber(value)) || input.required === false) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid card number (format: XXXX XXXX XXXX XXXX).');
                }
                break;
            }
            case 'card-holder-name': {
                const input = event.target.querySelector('#card-holder-name');
                if ((value && validateFullName(value)) || input.required === false) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter the full name as shown on the card.');
                }
                break;
            }
            case 'expiration-date': {
                const input = event.target.querySelector('#expiration-date');
                if ((value && validateExpirationDate(value)) || input.required === false) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid expiration date (MM/YY).');
                }
                break;
            }
            case 'cvv': {
                const input = event.target.querySelector('#cvv');
                if ((value && validateCVV(value)) || input.required === false) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid CVV (3 or 4 digits).');
                }
                break;
            }
            case 'first-name': {
                const input = event.target.querySelector('#first-name');
                if (value && validateName(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid name.');
                }
                break;
            }
            case 'last-name': {
                const input = event.target.querySelector('#last-name');
                if (value && validateName(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid name.');
                }
                break;
            }
            case 'address': {
                const input = event.target.querySelector('#address');
                if (value && validateAddress(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid address (letters, numbers, commas, spaces only).');
                }
                break;
            }
            case 'city': {
                const input = event.target.querySelector('#city');
                if (value && validateLocationName(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid city name.');
                }
                break;
            }
            case 'province': {
                const input = event.target.querySelector('#province');
                if (value && validateLocationName(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid province name.');
                }
                break;
            }
            case 'country': {
                const input = event.target.querySelector('#country');
                if (value && validateLocationName(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid country name.');
                }
                break;
            }
            case 'postal-code': {
                const input = event.target.querySelector('#postal-code');
                if (value && validatePostalCode(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid postal code.');
                }
                break;
            }
            case 'email': {
                const input = event.target.querySelector('#email');
                if (value && validateEmail(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid email address.');
                }
                break;
            }
            case 'phone-number': {
                const input = event.target.querySelector('#phone-number');
                if (value && validatePhoneNumber(value)) {
                    continue;
                } else {
                    isValid = false;
                    showValidationError(input, 'Please enter a valid phone number.');
                }
                break;
            }
        }
    }
    if (isValid) {
        showToast('Purchase successful! Redirecting...', 'Purchase Success', 'success');
        // Redirect after a short delay to allow toast to be seen
        setTimeout(() => {
            window.location.href = `${import.meta.env.BASE_URL}/cart/success`;
        }, 2000);
    }
});



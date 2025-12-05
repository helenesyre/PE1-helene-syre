import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { createPasswordToggle, confirmPasswordToggle } from '../src/utils/passwordToggle.js';
import { passwordsMatch, validateNoroffEmail, validateUsername, validatePassword, validationErrorMessageHTML } from '../src/utils/validation.js';
import { useAuth } from '../src/utils/useAuth.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')
// Initialize footer
document.querySelector('#footer').innerHTML = footer();

// Initialize password visibility toggle for create password field
createPasswordToggle('#create-password', '#view-icon-create');

// Initialize password visibility toggle for confirm password field
confirmPasswordToggle('#confirm-password', '#view-icon-confirm');

/** 
 * Code setup and adaptation based on:
 * switch
 * @publisher: MDN Contributors
 * @date: 2025-07-08
 * accessed: 2025-11-18
 * link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
*/

/** 
 * Code setup and adaptation based on:
 * Event: preventDefault() method
 * @publisher: MDN Contributors
 * @date: 2024-09-18
 * accessed: 2025-11-19
 * link: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
*/

/** 
 * Handles the signup form submission, including validation and API interaction.
 * @returns {void}
 */
const form = document.querySelector('#signup-form');
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    // Validate form inputs
    const formData = new FormData(event.target);
    event.target.querySelectorAll('.form__error').forEach(errorElement => errorElement.remove());
    let isValid = true;
    for (const [name, value] of formData.entries()) {
        switch(name) {
            case 'username':
                if (value && validateUsername(value)) {
                    continue;
                } else {
                    isValid = false;
                    event.target.querySelector('#username').parentElement.innerHTML += validationErrorMessageHTML('Username can only contain letters, numbers, and underscores.');
                }
                break;
            case 'email':
                if (value && validateNoroffEmail(value)) {
                    continue;
                } else {
                    isValid = false;
                    event.target.querySelector('#email').parentElement.innerHTML += validationErrorMessageHTML('Please enter a valid email address.');
                }
                break;
            case 'create-password':
                if (value && validatePassword(value)) {
                    continue;
                } else {
                    isValid = false;
                    event.target.querySelector('#create-password').parentElement.parentElement.innerHTML += validationErrorMessageHTML('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
                }
                break;
            case 'confirm-password':
                if (value && passwordsMatch(formData.get('create-password'), value)) {
                    continue;
                } else {
                    isValid = false;
                    event.target.querySelector('#confirm-password').parentElement.parentElement.innerHTML += validationErrorMessageHTML('Passwords do not match.');
                }
                break;
            default:
                break;
        }
    }
    if (isValid) {
        // Submit the form - API registration
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('create-password');

        const auth = useAuth();
        await auth.register(username, email, password);
    }
});
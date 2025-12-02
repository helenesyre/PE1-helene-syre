import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { passwordToggle } from '../src/utils/passwordToggle.js';
import { validateNoroffEmail, validatePassword, validationErrorMessageHTML } from '../src/utils/validation.js';
import { useAuth } from '../src/utils/useAuth.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')
// Initialize footer
document.querySelector('#footer').innerHTML = footer();

// Initialize password visibility toggle
passwordToggle('#password', '#view-icon');

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
 * Handles the login form submission, including validation and API interaction.
 * @returns {void}
 */
const form = document.querySelector('#login__form');
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    // Validate form inputs
    const formData = new FormData(event.target);
    event.target.querySelectorAll('.form__error').forEach(errorElement => errorElement.remove());
    let isValid = true;
    for (const [name, value] of formData.entries()) {
        switch(name) {
            case 'email':
                if (value && validateNoroffEmail(value)) {
                    continue;
                } else {
                    isValid = false;
                    event.target.querySelector('#email').parentElement.innerHTML += validationErrorMessageHTML('Please enter a valid email address.');
                }
                break;
            case 'password':
                if (value && validatePassword(value)) {
                    continue;
                } else {
                    isValid = false;
                    event.target.querySelector('#password').parentElement.parentElement.innerHTML += validationErrorMessageHTML('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
                }
                break;
        }
    }
    
    if (isValid) {
        // Submit the form to API
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const auth = useAuth();
        await auth.login(email, password);
    }
});
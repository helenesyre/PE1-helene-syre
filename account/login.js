import '../src/assets/styles/style.css';
import '../src/assets/styles/forms.css';
import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { passwordToggle } from '../src/utils/passwordToggle.js';
import { validateEmail, validatePassword, validationErrorMessageHTML } from '../src/utils/validation.js';
import { useAuth } from '../src/utils/useAuth.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')
// Initialize footer
document.querySelector('#footer').innerHTML = footer();

// Initialize password visibility toggle
passwordToggle('#password', '#view-icon');

/** 
 * Code setup and adapted from 18-19.nov:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
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
                if (value && validateEmail(value)) {
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
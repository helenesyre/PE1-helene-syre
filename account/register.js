import '../src/assets/styles/style.css';
import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { createPasswordToggle, confirmPasswordToggle } from '../src/utils/passwordToggle.js';
import { passwordsMatch, validateEmail, validateUsername, validatePassword, validationErrorMessageHTML } from '../src/utils/validation.js';
import useFetch from '../src/utils/useFetch.js';
import { showToast } from '../src/utils/toast.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')
// Initialize footer
document.querySelector('#footer').innerHTML = footer();

// Initialize password visibility toggle for create password field
createPasswordToggle('#create-password', '#view-icon-create');

// Initialize password visibility toggle for confirm password field
confirmPasswordToggle('#confirm-password', '#view-icon-confirm');

/** 
 * Code setup and adapted from 18-19.nov:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
*/
const form = document.querySelector('#signup__form');
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
                if (value && validateEmail(value)) {
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

        const userData = {
            name: username,
            email: email,
            password: password,
            bio: "This is my NightNode bio",
            avatar: {
                url: "https://i.postimg.cc/L6m0d8vW/Night-Node-6.webp",
                alt: "Placeholder NightNode avatar"
            },
            banner: {
                url: "https://i.postimg.cc/26QyZws2/Night-Node-3.webp",
                alt: "Placeholder NightNode banner"
            },
            venueManager: false
        };

        try {
            const response = await useFetch("/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            if (response) {
                showToast('Registration successful! Redirecting to login...', 'Registration Success', 'success');
                // Redirect after a short delay to allow toast to be seen
                setTimeout(() => {
                    window.location.href = "/account/login.html";
                }, 3000);
            } else {
                showToast('Registration failed. Please try again.', 'Registration Error', 'error');
            }

        } catch (error) {
            showToast('Something went wrong. Please try again later.', 'Registration Error', 'error');
        }
    }
});
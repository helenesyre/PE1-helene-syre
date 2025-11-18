import '../src/assets/styles/style.css';
import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { createPasswordToggle, confirmPasswordToggle } from '../src/utils/passwordToggle.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')
// Initialize footer
document.querySelector('#footer').innerHTML = footer();


// Initialize password visibility toggle for create password field
createPasswordToggle('#create-password', '#view-icon-create');

// Initialize password visibility toggle for confirm password field
confirmPasswordToggle('#confirm-password', '#view-icon-confirm');
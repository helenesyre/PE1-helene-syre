import '../src/assets/styles/style.css';
import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { passwordToggle } from '../src/utils/passwordToggle.js';
import { validateForm } from '../src/utils/validation.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')
// Initialize footer
document.querySelector('#footer').innerHTML = footer();

// Initialize password visibility toggle
passwordToggle('#password', '#view-icon');

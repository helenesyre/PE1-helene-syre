import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')

// Initialize footer
document.querySelector('#footer').innerHTML = footer();
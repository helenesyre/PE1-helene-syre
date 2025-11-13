import './assets/styles/style.css';
import { setupCounter } from './counter.js';
import { navbar } from './components/navbar.js';
import footer from './components/footer.js';
import { heroCarousel, handleCarousel } from './components/carousel.js';
import { featuredGrid } from './components/grids/featuredGrid.js';

// Initialize navbar
navbar(document.querySelector('#navbar-container'))

// Initialize carousel
document.querySelector('#header .hero-carousel').innerHTML = await heroCarousel();
handleCarousel();

// Initialize footer
document.querySelector('#footer').innerHTML = footer();

// Featured grid (for testing purposes)
const featuredSection = await featuredGrid();
document.querySelector('#featuredGrid').appendChild(featuredSection);

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'))

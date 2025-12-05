import { navbar } from "./components/navbar.js";
import footer from "./components/footer.js";
import { heroCarousel, handleCarousel } from "./components/carousel.js";
import { featuredGrid } from "./components/grids/featuredGrid.js";
import cta from "./components/cta.js";

// Initialize navbar
navbar(document.querySelector("#navbar-container"));

// Initialize hero carousel
document.querySelector("#header .hero-carousel").innerHTML =
  await heroCarousel();
handleCarousel();

// Initialize footer
document.querySelector("#footer").innerHTML = footer();

// Featured grid initialization
const featuredSection = await featuredGrid();
document.querySelector("#featuredGrid").innerHTML = featuredSection.outerHTML;

// Initialize CTA
document.querySelector("#cta").innerHTML = cta();

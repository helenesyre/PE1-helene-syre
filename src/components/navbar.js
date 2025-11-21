import { cartMenu } from './cartMenu.js';

export function navbar(element, variant = 'dark') {
  const lightClass = variant === 'light' ? 'nav--light' : '';
  element.innerHTML = `
    <nav class="nav container ${lightClass}">
        <div class="nav__brand">
          <!-- Toggle button -->
          <div class="nav__toggle" id="nav-toggle">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M1,4h22M1,12h22M1,20h22" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
            </svg>
          </div>

          <a href="/">
            <svg class="nav__logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 35.61">
              <g>
                <polygon points="65.92 6.32 60.67 6.32 48.33 19.16 48.33 6.32 43.68 6.32 43.68 31.35 48.33 31.35 48.33 24.9 52.3 20.87 61.13 31.35 66.6 31.35 55.4 17.5 65.92 6.32" style="fill: currentColor"/>
                <path d="M82.36,13.27c-1.54-.85-3.3-1.27-5.27-1.27s-3.7.42-5.22,1.27c-1.53.85-2.73,2-3.61,3.45-.88,1.45-1.32,3.15-1.32,5.08s.44,3.56,1.32,5.04c.88,1.48,2.09,2.64,3.63,3.49,1.54.85,3.27,1.27,5.2,1.27s3.71-.42,5.26-1.27c1.55-.85,2.76-2,3.63-3.47.87-1.47,1.31-3.15,1.31-5.06s-.44-3.62-1.31-5.08c-.87-1.45-2.07-2.6-3.61-3.45ZM82.03,24.97c-.49.92-1.16,1.62-2.02,2.11-.86.49-1.84.73-2.93.73s-2-.24-2.86-.73c-.86-.49-1.54-1.19-2.04-2.11-.5-.92-.75-1.97-.75-3.16s.25-2.27.75-3.16c.5-.89,1.18-1.59,2.04-2.07.86-.49,1.82-.73,2.9-.73s2.04.24,2.9.73c.86.49,1.53,1.18,2.02,2.07.49.89.73,1.95.73,3.16s-.24,2.25-.73,3.16Z" style="fill: currentColor;"/>
                <path d="M95.85,15.03v-2.77h-4.26v19.1h4.43v-9.23c0-2,.5-3.49,1.5-4.47,1-.98,2.36-1.47,4.08-1.47.14,0,.3,0,.46.02.17.01.33.03.5.05v-4.26c-1.79,0-3.3.34-4.54,1.02-.92.5-1.64,1.17-2.18,2Z" style="fill: currentColor;"/>
                <path d="M123.69,16.72c-.87-1.45-2.07-2.6-3.61-3.45-1.54-.85-3.3-1.27-5.27-1.27s-3.7.42-5.22,1.27c-1.53.85-2.73,2-3.61,3.45-.88,1.45-1.32,3.15-1.32,5.08s.44,3.56,1.32,5.04c.88,1.48,2.09,2.64,3.63,3.49,1.54.85,3.27,1.27,5.2,1.27s3.71-.42,5.26-1.27c1.55-.85,2.76-2,3.63-3.47.87-1.47,1.31-3.15,1.31-5.06s-.44-3.62-1.31-5.08ZM119.76,24.97c-.49.92-1.16,1.62-2.02,2.11-.86.49-1.84.73-2.93.73s-2-.24-2.86-.73c-.86-.49-1.54-1.19-2.04-2.11-.5-.92-.75-1.97-.75-3.16s.25-2.27.75-3.16c.5-.89,1.18-1.59,2.04-2.07.86-.49,1.82-.73,2.9-.73s2.04.24,2.9.73c.86.49,1.53,1.18,2.02,2.07.49.89.73,1.95.73,3.16s-.24,2.25-.73,3.16Z" style="fill: currentColor;"/>
              </g>
              <path d="M10.07.06c.29-.04.59-.03.89-.03.48,0,.97,0,1.45,0,.96,0,1.93-.02,2.89-.02s1.84,0,2.76,0c.06,0,.11,0,.17,0,1.08.01,2.05.71,2.63,1.61,1.08,1.7.06,3.63,2.25,4.9,2.02,1.17,6.99.23,9.5.57,1.86.25,2.88,1.94,2.99,3.69.3,4.56-.23,9.44,0,14.03-.09,1.22-.7,2.4-1.76,3.04-1.47.87-3.02.19-4.36,1.57s-.62,2.79-1.49,4.25c-.53.9-1.34,1.44-2.35,1.7-4.75-.03-9.95.44-14.67.12-1.45-.1-2.71-.62-3.42-1.95-.65-1.24-.17-2.54-1.11-3.79-1.37-1.81-2.95-.96-4.56-1.84-1.06-.58-1.71-1.73-1.79-2.92-.33-4.76.26-9.89,0-14.69.12-1.2.84-2.33,1.92-2.88,1.3-.66,2.55-.12,3.83-1.16,1.8-1.47.85-3.11,1.94-4.74.43-.65,1.09-1.11,1.82-1.36.15-.05.3-.08.45-.1ZM10.06,7.28c-1.35.31-2.67,1.44-2.7,2.86-.05,2.5,0,5.37,0,7.99.08.84.62,1.79,1.29,2.29,1.64,1.23,3.56.2,5,2.15,1,1.35.48,2.66,1.22,3.95.36.63,1.05,1.22,1.74,1.46,1.33.47,6.41.37,8.02.27,2.16-.14,3.56-1.3,3.72-3.53.14-1.9.15-5.17,0-7.06-.11-1.32-.78-2.52-2.02-3.06-1.38-.6-2.68-.07-3.96-1.31-1.45-1.42-.75-2.76-1.5-4.24-.48-.95-1.57-1.74-2.64-1.79-2.58-.11-5.52-.07-8.17.03Z" style="fill: currentColor;"/>
            </svg>
          </a>
        </div>

        <div class="nav__overlay" id="nav-overlay"></div>
        <div class="cart__overlay" id="cart-overlay"></div>
        <div class="cart__menu" id="cart-menu"></div>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li><a href="/" class="nav__link nav__link--active">Home</a></li>
            <li><a href="/shop" class="nav__link">Shop</a></li>
            <li><a href="/about" class="nav__link">About us</a></li>
            <li><a href="/contact" class="nav__link">Contact</a></li>
          </ul>

          <!-- Close button -->
          <div class="nav__close" id="nav-close">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <ul class="nav__actions">
          <li>
            <a href="#search" class="nav__link">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <defs>
                  <clipPath id="clippath">
                    <rect width="24" height="24" style="fill: none;"/>
                  </clipPath>
                </defs>
                <g style="clip-path: url(#clippath);">
                  <path d="M23,23l-6.35-6.35M16.65,16.65c1.72-1.72,2.68-4.05,2.68-6.48s-.97-4.76-2.68-6.48c-1.72-1.72-4.05-2.68-6.48-2.68s-4.76.97-6.48,2.68c-1.72,1.72-2.68,4.05-2.68,6.48s.97,4.76,2.68,6.48c1.72,1.72,4.05,2.68,6.48,2.68s4.76-.97,6.48-2.68Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <div href="#" class="nav__link" id="cart-button">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <defs>
                  <clipPath id="clippath">
                    <rect width="24" height="24" style="fill: none;"/>
                  </clipPath>
                </defs>
                <g style="clip-path: url(#clippath);">
                  <g>
                    <path d="M4.5,21.12c0,.5.2.97.55,1.33.35.35.83.55,1.33.55s.97-.2,1.33-.55c.35-.35.55-.83.55-1.33s-.2-.97-.55-1.33c-.35-.35-.83-.55-1.33-.55s-.97.2-1.33.55c-.35.35-.55.83-.55,1.33Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                    <path d="M12,21.12c0,.5.2.97.55,1.33.35.35.83.55,1.33.55s.97-.2,1.33-.55c.35-.35.55-.83.55-1.33s-.2-.97-.55-1.33c-.35-.35-.83-.55-1.33-.55s-.97.2-1.33.55c-.35.35-.55.83-.55,1.33Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                    <path d="M.75,7.25l2.33,7.89c.09.32.27.6.54.8.26.2.58.31.91.31h10.82c.33,0,.65-.11.91-.31.26-.2.45-.48.54-.8l3.24-12.15c.13-.48.41-.9.8-1.2.39-.3.88-.47,1.37-.47h1.04" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                  </g>
                </g>
              </svg>
            </div>
          </li>
          <li>
            <a href="/account/login.html" class="nav__link">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <defs>
                  <clipPath id="clippath">
                    <rect width="24" height="24" style="fill: none;"/>
                  </clipPath>
                </defs>
                <g style="clip-path: url(#clippath);">
                  <path d="M19.31,20.22c-.85-1.13-1.96-2.05-3.23-2.68-1.27-.63-2.67-.96-4.08-.96-1.42,0-2.81.33-4.08.96-1.27.63-2.37,1.55-3.23,2.68M19.31,20.22c1.67-1.48,2.84-3.44,3.37-5.6.53-2.17.39-4.44-.4-6.53-.79-2.08-2.2-3.88-4.04-5.15-1.84-1.27-4.01-1.94-6.24-1.94s-4.41.68-6.24,1.94c-1.84,1.27-3.24,3.06-4.04,5.15-.79,2.08-.93,4.36-.4,6.53.53,2.17,1.71,4.12,3.37,5.6M19.31,20.22c-2.01,1.79-4.62,2.78-7.31,2.78-2.7,0-5.3-.99-7.31-2.78M15.67,9.25c0,.97-.39,1.91-1.07,2.59-.69.69-1.62,1.07-2.59,1.07s-1.91-.39-2.59-1.07c-.69-.69-1.07-1.62-1.07-2.59s.39-1.91,1.07-2.59c.69-.69,1.62-1.07,2.59-1.07s1.91.39,2.59,1.07c.69.69,1.07,1.62,1.07,2.59Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>`
  
  /* Mobile Menu Toggle */
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navOverlay = document.getElementById('nav-overlay');

  // Show menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
      navOverlay.classList.add('show-overlay');
    });
  }

  // Hide menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      navOverlay.classList.remove('show-overlay');
    });
  }

  // Close menu when clicking on overlay
  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      navOverlay.classList.remove('show-overlay');
    });
  }

  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      navOverlay.classList.remove('show-overlay');
    });
  });

  /* Render cart menu component */
  const cartMenuDiv = document.getElementById('cart-menu');
  if (cartMenuDiv) {
    cartMenu(cartMenuDiv);
  }

}
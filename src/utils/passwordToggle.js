const viewOffSVG = `
<svg id="view-on" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
    <defs>
        <clipPath id="clippath">
        <rect width="20" height="20" style="fill: none;"/>
        </clipPath>
    </defs>
    <g style="clip-path: url(#clippath);">
        <g>
        <path d="M2.32,17.5L17.94,2.5" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
        <path d="M7.5,15.87c.81.25,1.65.38,2.5.38,3.42.06,6.88-2.34,9.02-4.7.23-.25.36-.58.36-.93s-.13-.67-.36-.93c-.77-.85-1.63-1.62-2.56-2.3" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
        <path d="M14.24,6.06c-1.31-.68-2.76-1.04-4.24-1.06-3.33-.06-6.83,2.29-9.02,4.7-.23.25-.36.58-.36.93s.13.67.36.93c1.18,1.32,2.57,2.45,4.11,3.33" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
        <path d="M7.5,12.56c-.45-.63-.66-1.4-.59-2.17.07-.77.42-1.49.97-2.02.56-.54,1.29-.85,2.06-.89.77-.04,1.53.2,2.14.68" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
        <path d="M13.12,10.62c0,.41-.08.82-.24,1.2-.16.38-.39.72-.68,1.01-.29.29-.63.52-1.01.68-.38.16-.79.24-1.2.24" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
        </g>
    </g>
</svg>`;

const viewOnSVG = `
<svg id="view-off" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
  <defs>
    <clipPath id="clippath">
      <rect width="20" height="20" style="fill: none;"/>
    </clipPath>
  </defs>
  <g style="clip-path: url(#clippath);">
    <g>
      <path d="M7.5,15.87c.81.25,1.65.38,2.5.38,3.42.06,6.88-2.34,9.02-4.7.23-.25.36-.58.36-.93s-.13-.67-.36-.93c-.77-.85-1.63-1.62-2.56-2.3" style="fill: none; stroke: #8c9299; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
      <path d="M14.24,6.06c-1.31-.68-2.76-1.04-4.24-1.06-3.33-.06-6.83,2.29-9.02,4.7-.23.25-.36.58-.36.93s.13.67.36.93c1.18,1.32,2.57,2.45,4.11,3.33" style="fill: none; stroke: #8c9299; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
      <path d="M7.5,12.56c-.45-.63-.66-1.4-.59-2.17.07-.77.42-1.49.97-2.02.56-.54,1.29-.85,2.06-.89.77-.04,1.53.2,2.14.68" style="fill: none; stroke: #8c9299; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
      <path d="M13.12,10.62c0,.41-.08.82-.24,1.2-.16.38-.39.72-.68,1.01-.29.29-.63.52-1.01.68-.38.16-.79.24-1.2.24" style="fill: none; stroke: #8c9299; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
    </g>
  </g>
</svg>`;

/** 
 * Tutorial from:
 * Show / Hide Password using HTML CSS and JavaScript | Toggle Password
 * @publisher: OnlineITtuts Tutorials
 * @date: 2023-05-01
 * accessed: 2025-11-18
 * link: https://www.youtube.com/watch?v=i_uwBWEA30c
*/

/**
 * Initialize password visibility toggle for a password input field
 * @param {string} passwordInputSelector - CSS selector for the password input element
 * @param {string} viewIconSelector - CSS selector for the view icon container element
 * @returns {void}
 */
export function passwordToggle(passwordInputSelector, viewIconSelector) {
    const passwordInput = document.querySelector(passwordInputSelector);
    const viewIconContainer = document.querySelector(viewIconSelector);

    // Initialize with the "off" icon (password hidden)
    viewIconContainer.innerHTML = viewOffSVG;

    // Add click event listener to toggle password visibility
    viewIconContainer.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            viewIconContainer.innerHTML = viewOnSVG;
        } else {
            passwordInput.type = 'password';
            viewIconContainer.innerHTML = viewOffSVG;
        }
    });
}

/**
 * Initialize password visibility toggle for the create password field.
 * @returns {void}
*/
export function createPasswordToggle() {
    const createPasswordInput = document.querySelector('#create-password');
    const viewIconCreateContainer = document.querySelector('#view-icon-create');

    // Initialize with the "off" icon (password hidden)
    viewIconCreateContainer.innerHTML = viewOffSVG;
    viewIconCreateContainer.addEventListener('click', () => {
        if (createPasswordInput.type === 'password') {
            createPasswordInput.type = 'text';
            viewIconCreateContainer.innerHTML = viewOnSVG;
        } else {
            createPasswordInput.type = 'password';
            viewIconCreateContainer.innerHTML = viewOffSVG;
        }
    });
}

/** 
 * Initialize password visibility toggle for the confirm password field.
 * @returns {void}
*/
export function confirmPasswordToggle() {
    const confirmPasswordInput = document.querySelector('#confirm-password');
    const viewIconConfirmContainer = document.querySelector('#view-icon-confirm');

    // Initialize with the "off" icon (password hidden)
    viewIconConfirmContainer.innerHTML = viewOffSVG;
    viewIconConfirmContainer.addEventListener('click', () => {
        if (confirmPasswordInput.type === 'password') {
            confirmPasswordInput.type = 'text';
            viewIconConfirmContainer.innerHTML = viewOnSVG;
        } else {
            confirmPasswordInput.type = 'password';
            viewIconConfirmContainer.innerHTML = viewOffSVG;
        }
    });
}
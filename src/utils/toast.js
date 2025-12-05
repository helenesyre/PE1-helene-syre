/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} [title] - Optional title for the toast
 * @param {string} [type] - Type of toast: 'warning', 'success', 'error' (default: 'success')
 * @returns {void}
 */
export function showToast(message, title, type = "success") {
  const toast = document.createElement("div");
  const titleElement = document.createElement("h4");
  const textElement = document.createElement("p");
  const iconElement = document.createElement("span");
  const textContentElement = document.createElement("div");
  const closeButton = document.createElement("button");

  toast.className = "toast";
  switch (type) {
    case "success":
      iconElement.innerHTML = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <defs>
            <clipPath id="clippath">
              <rect width="24" height="24" style="fill: none;"/>
            </clipPath>
          </defs>
          <g style="clip-path: url(#clippath);">
            <path d="M8.33,12.92l2.75,2.75,4.58-6.42M23,12c0,1.44-.28,2.87-.84,4.21-.55,1.33-1.36,2.55-2.38,3.57-1.02,1.02-2.23,1.83-3.57,2.38-1.33.55-2.76.84-4.21.84s-2.87-.28-4.21-.84c-1.33-.55-2.55-1.36-3.57-2.38-1.02-1.02-1.83-2.23-2.38-3.57-.55-1.33-.84-2.76-.84-4.21,0-2.92,1.16-5.72,3.22-7.78,2.06-2.06,4.86-3.22,7.78-3.22s5.72,1.16,7.78,3.22c2.06,2.06,3.22,4.86,3.22,7.78Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
          </g>
        </svg>
      `;
      toast.classList.add(`toast--${type}`);
      break;
    case "error":
      iconElement.innerHTML = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <defs>
            <clipPath id="clippath">
              <rect width="24" height="24" style="fill: none;"/>
            </clipPath>
          </defs>
          <g style="clip-path: url(#clippath);">
            <g>
              <path d="M16.65.8H7.35L.75,7.3v9.4l6.6,6.5h9.3l6.6-6.5V7.3L16.65.8Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
              <path d="M12,6.5c0,.5,0,7.43,0,7.74v.26" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
              <path d="M12,18.25c-.21,0-.38-.17-.38-.38s.17-.38.38-.38" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
              <path d="M12,18.25c.21,0,.38-.17.38-.38s-.17-.38-.38-.38" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
            </g>
          </g>
        </svg>
      `;
      toast.classList.add(`toast--${type}`);
      break;
    case "warning":
      iconElement.innerHTML = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24">
          <path d="M1.74,23h22.03c.18,0,.36-.06.51-.17.15-.11.28-.28.36-.47.08-.19.12-.41.11-.63-.01-.22-.07-.43-.17-.61L13.56,1.52c-.09-.16-.21-.29-.35-.39-.14-.09-.3-.14-.46-.14s-.32.05-.46.14c-.14.09-.26.22-.35.39L.92,21.11c-.1.18-.16.39-.17.61-.01.22.03.44.11.63.08.19.21.36.36.47.15.11.33.17.51.17Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
          <path d="M12.75,7.5c0,.5,0,7.43,0,7.74v.26" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
          <path d="M12.75,19.25c-.21,0-.38-.17-.38-.38s.17-.38.38-.38" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
          <path d="M12.75,19.25c.21,0,.38-.17.38-.38s-.17-.38-.38-.38" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
        </svg>
      `;
      toast.classList.add(`toast--${type}`);
      break;
    default:
      iconElement.innerHTML = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <defs>
            <clipPath id="clippath">
              <rect width="24" height="24" style="fill: none;"/>
            </clipPath>
          </defs>
          <g style="clip-path: url(#clippath);">
            <g>
              <path d="M14.2,16.4h-.73c-.39,0-.76-.15-1.04-.43-.28-.28-.43-.65-.43-1.04v-3.67c0-.19-.08-.38-.21-.52-.14-.14-.32-.21-.52-.21h-.73" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
              <path d="M11.63,7.6c-.2,0-.37-.16-.37-.37s.16-.37.37-.37" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
              <path d="M11.63,7.6c.2,0,.37-.16.37-.37s-.16-.37-.37-.37" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
              <path d="M12,23c6.08,0,11-4.92,11-11S18.08,1,12,1,1,5.92,1,12s4.92,11,11,11Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
            </g>
          </g>
        </svg>
      `;
      toast.classList.add("toast--default");
  }
  textElement.textContent = message;

  titleElement.textContent =
    title ||
    (type === "success" ? "Success" : type === "error" ? "Error" : "Warning");
  textElement.textContent = message;
  closeButton.innerHTML = `
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <path d="M.75,12.75L12.75.75M.75.75l12,12" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
    </svg>
  `;
  closeButton.onclick = () => {
    toast.remove();
  };
  toast.appendChild(iconElement);
  textContentElement.appendChild(titleElement);
  textContentElement.appendChild(textElement);
  toast.appendChild(textContentElement);
  toast.appendChild(closeButton);

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} [type] - Type of toast: 'success', 'error' (default: 'success')
 * @returns {void}
 */
export function showSimpleToast(message, type = "success") {
  const toast = document.createElement("div");
  const titleElement = document.createElement("h4");
  const iconElement = document.createElement("span");
  const textContentElement = document.createElement("div");
  const closeButton = document.createElement("button");

  toast.className = "toast-simple";
  switch (type) {
    case "success":
      iconElement.innerHTML = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <defs>
            <clipPath id="clippath">
              <rect width="24" height="24" style="fill: none;"/>
            </clipPath>
          </defs>
          <g style="clip-path: url(#clippath);">
            <path d="M8.33,12.92l2.75,2.75,4.58-6.42M23,12c0,1.44-.28,2.87-.84,4.21-.55,1.33-1.36,2.55-2.38,3.57-1.02,1.02-2.23,1.83-3.57,2.38-1.33.55-2.76.84-4.21.84s-2.87-.28-4.21-.84c-1.33-.55-2.55-1.36-3.57-2.38-1.02-1.02-1.83-2.23-2.38-3.57-.55-1.33-.84-2.76-.84-4.21,0-2.92,1.16-5.72,3.22-7.78,2.06-2.06,4.86-3.22,7.78-3.22s5.72,1.16,7.78,3.22c2.06,2.06,3.22,4.86,3.22,7.78Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
          </g>
        </svg>
      `;
      toast.classList.add(`toast--${type}`);
      break;
    case "error":
      iconElement.innerHTML = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <defs>
            <clipPath id="clippath">
              <rect width="24" height="24" style="fill: none;"/>
            </clipPath>
          </defs>
          <g style="clip-path: url(#clippath);">
            <g>
              <path d="M16.65.8H7.35L.75,7.3v9.4l6.6,6.5h9.3l6.6-6.5V7.3L16.65.8Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
              <path d="M12,6.5c0,.5,0,7.43,0,7.74v.26" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
              <path d="M12,18.25c-.21,0-.38-.17-.38-.38s.17-.38.38-.38" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
              <path d="M12,18.25c.21,0,.38-.17.38-.38s-.17-.38-.38-.38" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
            </g>
          </g>
        </svg>
      `;
      toast.classList.add(`toast--${type}`);
      break;
    default:
      iconElement.innerHTML = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <defs>
            <clipPath id="clippath">
              <rect width="24" height="24" style="fill: none;"/>
            </clipPath>
          </defs>
          <g style="clip-path: url(#clippath);">
            <g>
              <path d="M14.2,16.4h-.73c-.39,0-.76-.15-1.04-.43-.28-.28-.43-.65-.43-1.04v-3.67c0-.19-.08-.38-.21-.52-.14-.14-.32-.21-.52-.21h-.73" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
              <path d="M11.63,7.6c-.2,0-.37-.16-.37-.37s.16-.37.37-.37" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
              <path d="M11.63,7.6c.2,0,.37-.16.37-.37s-.16-.37-.37-.37" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
              <path d="M12,23c6.08,0,11-4.92,11-11S18.08,1,12,1,1,5.92,1,12s4.92,11,11,11Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
            </g>
          </g>
        </svg>
      `;
      toast.classList.add("toast--default");
  }

  titleElement.textContent = message;
  closeButton.innerHTML = `
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <path d="M.75,12.75L12.75.75M.75.75l12,12" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
    </svg>
  `;
  closeButton.onclick = () => {
    toast.remove();
  };
  toast.appendChild(iconElement);
  textContentElement.appendChild(titleElement);
  toast.appendChild(textContentElement);
  toast.appendChild(closeButton);

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

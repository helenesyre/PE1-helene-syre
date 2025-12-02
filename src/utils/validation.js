/** 
 * Code setup and adaptation based on:
 * Regular Expressions (RegExp)
 * @publisher: firasdib
 * @date: 2024-04-20
 * accessed: 2025-11-18
 * link: https://regex101.com/
*/

/** 
 * Code setup and adaptation based on:
 * Form Validation with JavaScript (All HTML Input Types)
 * @publisher: Ravi Patel
 * @date: 2024-09-13
 * accessed: 2025-11-19
 * link: https://medium.com/@ravipatel.it/form-validation-with-javascript-all-html-input-types-2b0f0bb6e28e
*/

/**
 * Validates a value against a given regex pattern.
 * @param {string} value - The value to validate.
 * @param {string} pattern - The regex pattern as a string.
 * @returns {boolean} True if the value matches the pattern, false otherwise.
 */
function validatePattern(value, pattern) {
    const regex = new RegExp(pattern);
    return regex.test(value);
}

/**
 * Validates a Noroff email address format
 * @param {string} email - The email input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateNoroffEmail(email) {
    // validate only stud.noroff.no emails
    return validatePattern(email, "^[a-zA-Z0-9._%+-]+@stud.noroff.no$");
}

/**
 * Validates a general email address format
 * @param {string} email - The email input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateEmail(email) {
    return validatePattern(email, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
}
 

/**
 * Validates a phone number format
 * Allows optional '+' at the start, followed by 7 to 15 digits
 * @param {string} phoneNumber - The phone number input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validatePhoneNumber(phoneNumber) {
    return validatePattern(phoneNumber, "^\\+?\\d{7,15}$");
}

/** 
 * Validates first or last name
 * Allows only letters (including accented), spaces, hyphens, and apostrophes
 * @param {string} name - The name input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateName(name) {
    return validatePattern(name, "^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$");
}

/**
 * Validates full name (first and last)
 * Allows only letters (including accented), spaces, hyphens, and apostrophes
 * Must contain at least a first and last name separated by a space
 * @param {string} fullName - The full name input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateFullName(fullName) {
    return validatePattern(fullName, "^[A-Za-zÀ-ÖØ-öø-ÿ' -]+ [A-Za-zÀ-ÖØ-öø-ÿ' -]+$");
}

/**
 * Validates username for Noroff API
 * Username must only contain letters, numbers, and underscores (no spaces or special characters)
 * @param {string} username - The username to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateUsername(username) {
    return validatePattern(username, "^[a-zA-Z0-9_]+$") && username.length > 0;
}

/**
 * Validates password strength
 * Password must be at least 8 characters long
 * Contain at least one uppercase letter, one lowercase letter, one number, and one special character
 * @param {string} password - The password to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validatePassword(password) {
    return (
        password.length >= 8 
        && /[A-Z]/.test(password) 
        && /[a-z]/.test(password) 
        && /[0-9]/.test(password) 
        && /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
}

/**
 * Checks if two passwords match
 * @param {string} createPassword - The created password.
 * @param {string} confirmPassword - The confirmed password.
 * @returns {boolean} True if passwords match, false otherwise.
 */
export function passwordsMatch(createPassword, confirmPassword) {
    return createPassword === confirmPassword;
}

/**
 * Validates an address format
 * Allows only letters (including accented), numbers, and commas
 * Requires at least one letter and at least one number
 * @param {string} address - The address input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateAddress(address) {
    return validatePattern(address, "^(?=.*[A-Za-zÀ-ÖØ-öø-ÿ])(?=.*\\d)[A-Za-zÀ-ÖØ-öø-ÿ0-9, ]+$");
}

/**
 * Validates a city, province, or country name
 * Allows only letters (including accented), spaces, hyphens, and apostrophes
 * 2-60 characters
 * @param {string} value - The location name input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateLocationName(value) {
    return validatePattern(value, "^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,60}$");
}

/**
 * Validates a postal code format
 * Accepts formats like "1234" or "1234-5678"
 * @param {string} postalCode - The postal code input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validatePostalCode(postalCode) {
    return validatePattern(postalCode, "^\\d{4}(-\\d{4})?$");
}

/**
 * Validates a card number format
 * Accepts both spaced ("1234 5678 9012 3456") and unspaced ("1234567890123456")
 * @param {string} cardNumber - The card number input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateCardNumber(cardNumber) {
    // Remove all spaces for validation
    const cleaned = cardNumber.replace(/\s+/g, "");
    return validatePattern(cleaned, "^\\d{16}$"); // Must be exactly 16 digits
}

/**
 * Formats a card number input to add spaces every 4 digits
 * Usage: call in input event handler for card number field
 * @param {string} value - The raw input value.
 * @returns {string} Formatted value with spaces every 4 digits.
 */
export function formatCardNumberInput(value) {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "").slice(0, 16); // Limit to 16 digits
    // Insert space every 4 digits
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
}


/**
 * Formats an expiration date input to MM/YY as the user types.
 * Usage: call in input event handler for expiration date field.
 * @param {string} value - The raw input value.
 * @returns {string} Formatted value (MM/YY, max 5 characters).
 */
export function formatExpirationDateInput(value) {
    // Remove all non-digit characters
    let cleaned = value.replace(/\D/g, "").slice(0, 4); // Limit to 4 digits
    if (cleaned.length > 2) {
        cleaned = cleaned.substring(0, 2) + "/" + cleaned.substring(2);
    }
    return cleaned.substring(0, 5); // Ensure max length is 5 (MM/YY)
}

/**
 * Validates an expiration date format (MM/YY)
 * @param {string} value - The formatted expiration date (MM/YY)
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateExpirationDate(value) {
    return validatePattern(value, "^(0[1-9]|1[0-2])\\/\\d{2}$");
}

/**
 * Validates a CVV format (3 or 4 digits)
 * @param {string} cvv - The CVV input value.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateCVV(cvv) {
    // Remove all non-digit characters and limit to 4 digits
    const cleaned = cvv.replace(/\D/g, '').substring(0, 4);
    return validatePattern(cleaned, "^\\d{3,4}$");
}


/**
 * Generates HTML for a validation error message.
 * @param {string} message - The error message to display.
 * @returns {string} HTML string for the validation error message.
 */
export function validationErrorMessageHTML(message = "Validation error") {
    return `
        <div class="form__error" id="name-error">
            <svg class="form__error-icon" id="name-error-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18">
                <defs>
                    <clipPath id="clippath">
                    <rect width="18" height="18" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g style="clip-path: url(#clippath);">
                    <g>
                    <path d="M12.49.6h-6.98L.56,5.48v7.05l4.95,4.88h6.98l4.95-4.88v-7.05L12.49.6Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"/>
                    <path d="M9,4.88c0,.38,0,5.57,0,5.81v.19" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                    <path d="M9,13.69c-.16,0-.28-.13-.28-.28s.13-.28.28-.28" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
                    <path d="M9,13.69c.16,0,.28-.13.28-.28s-.13-.28-.28-.28" style="fill: none; stroke: currentColor; stroke-width: 1.5px;"/>
                    </g>
                </g>
            </svg>
            <p class="form__error-message" id="name-error-message">${message}</p>
        </div>
    `;
}
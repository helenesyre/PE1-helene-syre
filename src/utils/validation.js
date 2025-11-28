/**
 * Validation utility functions for form inputs
 * Code setup and adapted from 18-19.nov:
 * https://regex101.com/
 * https://medium.com/@ravipatel.it/form-validation-with-javascript-all-html-input-types-2b0f0bb6e28e
 * 
 */

function validatePattern(value, pattern) {
    const regex = new RegExp(pattern);
    return regex.test(value);
}

/**
 * Validates a Noroff email address format
 */
export function validateNoroffEmail(email) {
    // validate only stud.noroff.no emails
    return validatePattern(email, "^[a-zA-Z0-9._%+-]+@stud.noroff.no$");
}

/**
 * Validates a general email address format
 */
export function validateEmail(email) {
    return validatePattern(email, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
}
 

/**
 * Validates a phone number format
 */
export function validatePhoneNumber(phoneNumber) {
    return validatePattern(phoneNumber, "^\\+?\\d{7,15}$");
}

/** 
 * Validates first or last name
 */
export function validateName(name) {
    return validatePattern(name, "^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$");
}

/**
 * Validates full name (first and last)
 */
export function validateFullName(fullName) {
    return validatePattern(fullName, "^[A-Za-zÀ-ÖØ-öø-ÿ' -]+ [A-Za-zÀ-ÖØ-öø-ÿ' -]+$");
}

/**
 * Validates username for Noroff API
 * Username must only contain letters, numbers, and underscores (no spaces or special characters)
 */
export function validateUsername(username) {
    return validatePattern(username, "^[a-zA-Z0-9_]+$") && username.length > 0;
}

/**
 * Validates password strength
 * Password must be at least 8 characters long
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
 */
export function passwordsMatch( createPassword, confirmPassword) {
    return createPassword === confirmPassword;
}

/**
 * Validates an address format
 * Allows only letters (including accented), numbers, and commas.
 * Requires at least one letter and at least one number.
 */
export function validateAddress(address) {
    return validatePattern(address, "^(?=.*[A-Za-zÀ-ÖØ-öø-ÿ])(?=.*\\d)[A-Za-zÀ-ÖØ-öø-ÿ0-9, ]+$");
}

/**
 * Validates a city, province, or country name
 * Allows only letters (including accented), spaces, hyphens, and apostrophes
 * 2-60 characters
 */
export function validateLocationName(value) {
    return validatePattern(value, "^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,60}$");
}

/**
 * Validates a postal code format
 */
export function validatePostalCode(postalCode) {
    return validatePattern(postalCode, "^\\d{4}(-\\d{4})?$");
}

/**
 * Validates a card number format
 * Accepts both spaced ("1234 5678 9012 3456") and unspaced ("1234567890123456")
 */
export function validateCardNumber(cardNumber) {
    // Remove all spaces for validation
    const cleaned = cardNumber.replace(/\s+/g, "");
    return validatePattern(cleaned, "^\\d{16}$"); // Must be exactly 16 digits
}

/**
 * Formats a card number input to add spaces every 4 digits
 * Usage: call in input event handler for card number field
 */
export function formatCardNumberInput(value) {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "").slice(0, 16); // Limit to 16 digits
    // Insert space every 4 digits
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
}

/**
 * Validates an expiration date format (MM/YY)
 */
export function validateExpirationDate(expirationDate) {
    // Remove all non-digit characters
    let value = expirationDate.replace(/\D/g, "");
    value = value.substring(0, 4); // Limit to max 4 digits (MMYY)
    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2); // Auto-insert slash after 2 digits
    }
    value = value.substring(0, 5); // Ensure max length is 5 (MM/YY)
    return validatePattern(value, "^(0[1-9]|1[0-2])\\/\\d{2}$");
}

/**
 * Validates a CVV format (3 or 4 digits)
 */
export function validateCVV(cvv) {
    // Remove all non-digit characters and limit to 4 digits
    const cleaned = cvv.replace(/\D/g, '').substring(0, 4);
    return validatePattern(cleaned, "^\\d{3,4}$");
}


/* Error validation message HTML structure. Insert inside of .form__group */
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
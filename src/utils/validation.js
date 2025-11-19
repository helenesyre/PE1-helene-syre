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
 * Validates an email address format
 */
export function validateEmail(email) {
    // validate only stud.noroff.no emails
    return validatePattern(email, "^[a-zA-Z0-9._%+-]+@stud.noroff.no$");
}

/** 
 * Validates first or last name
 */
export function validateName(name) {
    return validatePattern(name, "^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$");
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
import { showSimpleToast } from "./toast";

/**
 * Custom event to notify when the cart has been modified.
 * @type {Event}
 */
export const cartModified = new Event('cartModified');

/**
 * Custom hook for managing the shopping cart.
 * Provides methods to add, update, remove items, and retrieve cart information.
 *
 * Methods:
 * - getCartItems(): Returns an array of items in the cart.
 * - addToCart(product, quantity): Adds a product to the cart with the specified quantity.
 * - updateItemQuantity(productId, quantity): Updates the quantity of a specific product in the cart.
 * - removeFromCart(productId): Removes a product from the cart.
 * - clearCart(): Clears all items from the cart.
 * - getCartCount(): Returns the total number of items in the cart.
 * - getCartTotal(): Returns the total price of items in the cart.
 * - getCartTotalDiscount(): Returns the total discount amount for items in the cart.
 * - isEmpty(): Returns true if the cart is empty, false otherwise.
 * - getCartSummary(): Returns an object with subtotal, taxes, discount, delivery, and total amounts.
 *
 * @returns {Object} Cart management methods.
 */
export function useCart() {
    const CART_KEY = 'cart';

    function saveCart(cart) {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
            document.dispatchEvent(cartModified);
        } catch (error) {
            showSimpleToast('Error saving cart to localStorage', 'error');
            throw error;
        }
    }

    function loadCart() {
        try {
            const cart = localStorage.getItem(CART_KEY);
            return cart ? JSON.parse(cart) : [];
        } catch (error) {
            showSimpleToast('Error loading cart from localStorage', 'error');
            throw error;
        }
    }

    function getCartItems() {
        try {
            return loadCart();
        } catch (error) {
            showSimpleToast('Error getting cart items', 'error');
            return [];
        }
    }

    function addToCart(product, quantity = 1) {
        try {
            const cart = loadCart();
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }
            saveCart(cart);
        } catch (error) {
            showSimpleToast('Error adding product to cart', 'error');
            throw error;
        }
    }

    function updateItemQuantity(productId, quantity) {
        try {
            if (quantity < 1) {
                removeFromCart(productId);
                return;
            }
            const cart = loadCart();
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
                saveCart(cart);
            }
        } catch (error) {
            showSimpleToast('Error updating cart item', 'error');
            throw error;
        }
    }

    function removeFromCart(productId) {
        try {
            let cart = loadCart();
            cart = cart.filter(item => item.id !== productId);
            saveCart(cart);
        } catch (error) {
            showSimpleToast('Error removing product from cart', 'error');
            throw error;
        }
    }

    function clearCart() {
        try {
            localStorage.removeItem(CART_KEY);
        } catch (error) {
            showSimpleToast('Error clearing cart', 'error');
            throw error;
        }
    }

    function getCartCount() {
        try {
            const cart = loadCart();
            return cart.reduce((total, item) => total + item.quantity, 0);
        } catch (error) {
            showSimpleToast('Error getting cart count', 'error');
            throw error;
        }
    }

    function getCartTotal() {
        try {
            const cart = loadCart();
            return cart.reduce((total, item) => total + (item.discountedPrice && item.discountedPrice < item.price ? item.discountedPrice : item.price) * item.quantity, 0);
        } catch (error) {
            showSimpleToast('Error getting cart total', 'error');
            throw error;
        }
    }

    function getCartTotalDiscount() {
        try {
            const cart = loadCart();
            return cart.reduce((total, item) => {
                if (typeof item.discountedPrice === 'number' && item.discountedPrice < item.price) {
                    return total + (item.price - item.discountedPrice) * item.quantity;
                }
                return total;
            }, 0);
        } catch (error) {
            showSimpleToast('Error getting cart total discount', 'error');
            throw error;
        }
    }

    function isEmpty() {
        try {
            const cart = loadCart();
            return cart.length === 0;
        } catch (error) {
            showSimpleToast('Error checking if cart is empty', 'error');
            throw error;
        }
    }

    function getCartSummary() {
        const subtotal = getCartTotal().toFixed(2);
        const taxes = (subtotal * 0.10).toFixed(2);
        const discount = getCartTotalDiscount().toFixed(2);
        const delivery = (parseFloat(subtotal) + parseFloat(taxes) - parseFloat(discount)).toFixed(2) > 500 ? '0.00' : '15.00';
        const total = (parseFloat(subtotal) + parseFloat(delivery) + parseFloat(taxes) - parseFloat(discount)).toFixed(2);
        return { subtotal, taxes, discount, delivery, total};
    }

    return {
        getCartItems,
        addToCart,
        updateItemQuantity,
        removeFromCart,
        clearCart,
        getCartCount,
        getCartTotal,
        getCartTotalDiscount,
        isEmpty,
        getCartSummary,
    };

    function clearCart() {
        try {
            localStorage.removeItem(CART_KEY);
        } catch (error) {
            showSimpleToast('Error clearing cart', 'error');
            throw error;
        }
    }
}
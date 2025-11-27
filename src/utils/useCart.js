import { showSimpleToast } from "./toast";

export const cartModified = new Event('cartModified');

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
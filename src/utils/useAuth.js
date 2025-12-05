import { showToast } from "./toast";
import { useCart } from "./useCart";
import useFetch from "./useFetch";

/**
 * Custom hook for user authentication.
 * Provides methods for login, registration, logout, and checking authentication status.
 *
 * Methods:
 * - login(email, password): Logs in the user and stores auth data in localStorage.
 * - register(username, email, password, isVenueManager): Registers a new user.
 * - logout(): Logs out the user and clears auth data.
 * - isLoggedIn(): Returns true if a user is logged in.
 * - isAdmin(): Returns true if the user is a venue manager.
 * - getToken(): Returns the current access token.
 *
 * @returns {Object} Authentication methods.
 */
export function useAuth() {
  async function login(email, password) {
    try {
      const response = await useFetch("/auth/login?_holidaze=true", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response) {
        // Save token and profile name
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("profileName", response.data.name);
        localStorage.setItem("venueManager", response.data.venueManager);
        // Show toast before redirect
        showToast('Login successful! Redirecting to home...', 'Login Success', 'success');
        // Redirect after a short delay to allow toast to be seen
        setTimeout(() => {
          window.location.href = `${import.meta.env.BASE_URL}/`;
        }, 2000);
      } else {
        showToast("Login failed: " + (response.errors?.[0]?.message || "Check console for details."), "Error", "error");
      }
    } catch (error) {
      showToast('Login failed. Please try again.', 'Error', 'error');
    }
  }

  async function register(username, email, password, isVenueManager = false) {
    const userData = {
      name: username,
      email: email,
      password: password,
      bio: "This is my NightNode bio",
      avatar: {
        url: "https://i.postimg.cc/L6m0d8vW/Night-Node-6.webp",
        alt: "Placeholder NightNode avatar"
      },
      banner: {
        url: "https://i.postimg.cc/26QyZws2/Night-Node-3.webp",
        alt: "Placeholder NightNode banner"
      },
      venueManager: isVenueManager
    };

    try {
      const response = await useFetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response) {
        showToast('Registration successful! Redirecting to login...', 'Registration Success', 'success');
        // Redirect after a short delay to allow toast to be seen
        setTimeout(() => {
          window.location.href = `${import.meta.env.BASE_URL}/account/login`;
        }, 2000);
      } else {
        showToast('Registration failed. Please try again.', 'Registration Error', 'error');
      }

    } catch (error) {
      showToast('Something went wrong. Please try again later.', 'Registration Error', 'error');
    }
  }

  function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('profileName');
    localStorage.removeItem('venueManager');
    const cart = useCart();
    cart.clearCart();
    window.location.reload();
  }

  function isLoggedIn() {
    const token = localStorage.getItem('accessToken');
    return !!token;
  }

  function isAdmin() {
    const venueManager = localStorage.getItem('venueManager');
    return venueManager === 'true';
  }

  function getToken() {
    return localStorage.getItem('accessToken');
  }


  return {
    login,
    register,
    isLoggedIn,
    isAdmin,
    logout,
    getToken,
  };
}

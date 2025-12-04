import { navbar } from '../src/components/navbar.js';
import footer from '../src/components/footer.js';
import { showToast } from '../src/utils/toast.js';
import { useAuth } from '../src/utils/useAuth.js';

// Initialize light navbar
navbar(document.querySelector('#navbar-container'), 'light')

// Initialize footer
document.querySelector('#footer').innerHTML = footer();

/**
 * Profile page script
 * Handles displaying user profile information and logout functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  const profileName = localStorage.getItem('profileName');
  const profileNameElem = document.getElementById('profile-name');
  const profileAvatarElem = document.getElementById('profile-avatar');
  if (profileNameElem) {
    profileNameElem.textContent = profileName ?? 'User';
  }
  // Set initials in avatar
  if (profileAvatarElem) {
    const initials = (profileName ?? 'User')
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
    profileAvatarElem.textContent = initials;
  }
  // Logout button handler
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    const { logout } = useAuth();
    logoutButton.addEventListener('click', () => {
      showToast('You have been logged out.', 'Logout', 'info');
      setTimeout(() => {
        logout();
        window.location.href = `${import.meta.env.BASE_URL}/account/login`;
      }, 2000);
    });
  }
});
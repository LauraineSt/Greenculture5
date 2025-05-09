/**
 * GreenCulture Header Component
 * This script handles the functionality of the header navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const navDropdown = document.getElementById('nav-dropdown');
  
    if (menuToggle && navDropdown) {
      menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        navDropdown.classList.toggle('active');
      });
  
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navDropdown.contains(event.target)) {
          navDropdown.classList.remove('active');
        }
      });
    }
  
    // User account icon functionality
    const userAccount = document.getElementById('user-account');
  
    if (userAccount) {
      userAccount.addEventListener('click', function() {
        // Redirect to login page
        window.location.href = 'login.html';
      });
    }
  
    // Add active state for current page
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
  
      if (linkPage === currentPage) {
        link.style.fontWeight = '700';
        link.style.color = '#a67c5c';
      }
    });
  
    // Handle window resize to close menu on mobile orientation change
    window.addEventListener('resize', function() {
      if (window.innerWidth < 768 && navDropdown.classList.contains('active')) {
        navDropdown.classList.remove('active');
      }
    });
  });
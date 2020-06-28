// Select DOM elements related to Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of Menu
let showMenu = false;

// Add event when Menu Btn clicked
menuBtn.addEventListener("click", toggleMenu);

// Create function that fires when event occurs
function toggleMenu() {
  // Add class values
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Reset actual state of Menu
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Reset actual state of Menu
    showMenu = false;
  }
}

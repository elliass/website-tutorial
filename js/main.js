/*** Display Menu ***/

// Select DOM elements related to Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const mainBg = document.querySelector(".main-bg");

// Set initial state of Menu
let showMenu = false;

// Add event when Menu Btn clicked
menuBtn.addEventListener("click", toggleMenu);

// Create function that fires when event occurs
function toggleMenu() {
  if (!showMenu) {
    // Add class values
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    mainBg.classList.add("close");

    // Reset actual state of Menu
    showMenu = true;
  } else {
    // Remove class values
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    mainBg.classList.remove("close");

    // Reset actual state of Menu
    showMenu = false;
  }
}

// /*** Display Project Description ***/

// // Select DOM elements related to Project Image and Description
// const prjctImages = document.querySelectorAll(".project-img");
// const prjctDescrs = document.querySelectorAll(".back-description");

// // Set initial state of Description
// let showDescr = false;

// // Add event when Image clicked
// prjctImages.forEach((item) => item.addEventListener("mouseenter", toggleDescr));

// // Create function that fires when event occurs
// function toggleDescr() {
//   if (!showDescr) {
//     // Add class values
//     prjctImages.forEach((item) => item.classList.add("close"));
//     prjctDescrs.forEach((item) => item.classList.add("show"));

//     // Reset actual state of Description
//     showDescr = true;
//   } else {
//     // Remove class values
//     prjctImages.forEach((item) => item.classList.remove("close"));
//     prjctDescrs.forEach((item) => item.classList.remove("show"));

//     // Reset actual state of Description
//     showDescr = false;
//   }
// }

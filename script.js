document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenu = document.querySelector(".close-menu");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.add("active");
    });

    closeMenu.addEventListener("click", function() {
        menu.classList.remove("active");
    });
});

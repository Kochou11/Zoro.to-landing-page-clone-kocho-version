const mobileNavToggle = document.getElementById("mobile-toggle");
const navItems = document.querySelector("nav ul");
const navMenuBtn = document.querySelector("nav a");

mobileNavToggle.addEventListener("click", function(){
    navItems.classList.toggle("show");
    navMenuBtn.classList.toggle("active");
})
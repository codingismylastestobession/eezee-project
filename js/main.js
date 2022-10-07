var navExpandBtn = document.getElementById("nav-expand-btn");
var navMainBtn = document.getElementById("navBtn");
var navItems = document.getElementById("nav-items");
navItems.style.display = "none";
navExpandBtn.addEventListener("click", function() {
if (navItems.style.display === "none") {
    navItems.style.display = "block";
    navMainBtn.className = "fa-solid fa-xmark"
    }
else {
    navItems.style.display = "none"
    navMainBtn.className = "fa-solid fa-bars"
}
});
console.log(navBtn.attributes)
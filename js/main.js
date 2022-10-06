var navExpandBtn = document.getElementById("nav-expand-btn");
var navItems = document.getElementById("nav-items");
navItems.style.display = "none";
navExpandBtn.addEventListener("click", function() {
if (navItems.style.display === "none") {
    navItems.style.display = "block";
    }
else {
    navItems.style.display = "none"
}
});
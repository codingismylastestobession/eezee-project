var navExpandBtn = document.getElementById("nav-expand-btn");
var navItems = document.getElementById("nav-items");
navItems.style.display = "none";
navExpandBtn.addEventListener("click", function() {
if (navItems.style.display === "none") {
    navItems.style.display = "block";
    navExpandBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
else {
    navItems.style.display = "none"
    navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
}
});

var dropBtn = document.getElementsByClassName("dropbtn")[0];
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  dropBtn.addEventListener("click", dropdown);
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
const navbarNav = document.querySelector(".navbar-nav");
const toggle = document.getElementById("toggle");

document.getElementById("burger").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hm = document.querySelector("#burger");
console.log(hm);
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

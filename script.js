const sidenav = document.querySelector("#mySidenav");
const openNav = document.querySelector("#openBtn");
const closeNav = document.querySelector("#closeBtn");


/* Set the width of the side navigation to 250px */
openNav.addEventListener("click", () => {
  sidenav.classList.add("active");
});

/* Set the width of the side navigation to 0 */
closeNav.addEventListener("click", () => {
  sidenav.classList.remove("active");
});


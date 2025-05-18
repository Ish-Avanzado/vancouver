const toggles = document.querySelector(".toggle__menu");
const hNav = document.querySelector(".header__nav");
toggles.addEventListener("click", () => {
    toggles.classList.toggle("open");
  hNav.classList.toggle("open");
});

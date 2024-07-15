let menu = document.querySelector(".menu-icon");
let ul = document.querySelector("ul");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    ul.classList.toggle("active");
});
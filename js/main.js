let burger = document.querySelector(".burger");
let popup = document.querySelector(".popup-menu")

burger.onclick = function () {
    burger.classList.toggle("burger-open")
    popup.classList.toggle("popup-show")
}
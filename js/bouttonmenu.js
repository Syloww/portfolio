document.querySelector("#menuboutton").addEventListener("click", menuderoulant);

function menuderoulant() {
    document.querySelector(".menuderoulant").classList.toggle("montrer")
    setTimeout(() => {
        document.querySelector(".liens_menu").classList.toggle("slide-in-bottom");
        document.querySelector(".liens_menu").classList.toggle("slide-out-right");
    }, 16);
}
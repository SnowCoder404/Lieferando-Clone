function toggleMenu() {
    document.getElementById("myLinks").classList.toggle("d_none")
    document.getElementById("menu").classList.toggle("d_none")
}

function loadTemplate() {
    content = document.getElementById("mainContent");

    for (let index = 0; index < myDishes.length; index++) {
        content.innerHTML += templateHTML(index);
    }
}
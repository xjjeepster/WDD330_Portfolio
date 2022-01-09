let onclick = document.querySelector('#listControl');
onclick.addEventListener('click', menuListControl);

function menuListControl() {
    let menu = document.querySelector(".weeklinks");
    if (menu.getElementsByClassName.display === "block") {
        menu.getElementsByClassName.display = "none";
    } else {
        menu.style.display = "block";
    }
}
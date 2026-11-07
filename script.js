const grid = document.querySelector('.wrapper');

grid.addEventListener("click", function(event) {

    const card = event.target.closest(".card");
    if (!card) return;

    const button = card.querySelector(".button")
    const limit = document.querySelectorAll('.card.selected').length



    if (card.classList.contains("selected")){
        card.classList.remove("selected");
        button.textContent = "Выбрать"
    }else if(limit < 2){
        card.classList.add("selected")
        button.textContent = "Отменить"
    }

    const selectedCount = document.querySelectorAll('.card.selected').length;

    const next = document.querySelector(".Next")
    if (selectedCount > 1){
        next.style.display = "flex"
    }else{
        next.style.display = "none"
    }
});

const next = document.querySelector(".Next")
const first = document.querySelector(".first")
const second = document.querySelector(".second")


next.addEventListener("click", function() {
    first.style.display = "none"
    second.style.display = "flex"
});



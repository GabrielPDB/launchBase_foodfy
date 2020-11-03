const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        const recipeIndex = card.getAttribute('id')

        window.location.href = `/recipes/${recipeIndex}`
    })
}

/* RECIPE SHOW/HIDE */

const buttons = document.querySelectorAll('.showHideButton')
const items = document.querySelectorAll('.recipe_item')

for (let button of buttons) {
    button.addEventListener('click', function () {
        if (button.innerHTML === "esconder") {
            button.innerHTML = 'mostrar'
        } else {
            button.innerHTML = 'esconder'
        }
    })
}

for (let button in buttons) {
    buttons[button].addEventListener('click', function () {
        if (items[button].classList.contains('hide')) {
            items[button].classList.remove('hide')
        } else {
            items[button].classList.add('hide')
        }
    })
}
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        const recipeIndex = card.getAttribute('id')

        window.location.href = `/recipes/${recipeIndex}`
    })
}

/* CURRENT PAGE MENU */

const currentPage = location.pathname
const menuItems = document.querySelectorAll('header .menu a')
console.log(currentPage)
for (item of menuItems) {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('selected')
    }
}

/* RECIPE SHOW/HIDE */

const buttons = document.querySelectorAll('.showHideButton')
const items = document.querySelectorAll('.recipe_item')

for (let button of buttons) {
    button.addEventListener('click', function () {
        
    })
}

for (let button in buttons) {
    buttons[button].addEventListener('click', function () {
        if (buttons[button].innerHTML === "esconder") {
            buttons[button].innerHTML = 'mostrar'
        } else {
            buttons[button].innerHTML = 'esconder'
        }
        
        if (items[button].classList.contains('hide')) {
            items[button].classList.remove('hide')
        } else {
            items[button].classList.add('hide')
        }
    })
}




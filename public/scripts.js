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

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('selected')
    }
}

/* DYNAMIC INPUTS */

function addIngredient() {
    const ingredients = document.querySelector('#ingredients')
    const fieldContainer = document.querySelectorAll('.ingredient')

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == '') return false
    
    // Deixa o valor do input vazio
    newField.children[0].value = ''
    ingredients.appendChild(newField)
}

function addStep() {
    const steps = document.querySelector('#steps')
    const fieldContainer = document.querySelectorAll('.step')


    // Realiza um clone do último passo adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == '') return false

    // Deixa o valor do input vazio
    newField.children[0].value = ''
    steps.appendChild(newField)
}

document.querySelector('.add-ingredient').addEventListener('click', addIngredient)
document.querySelector('.add-step').addEventListener('click', addStep)

/* RECIPE SHOW/HIDE */

const buttons = document.querySelectorAll('.showHideButton')
const items = document.querySelectorAll('.recipe_item')

for (let button of buttons) {
    button.addEventListener('click', function () {
        
    })
}

for (const button in buttons) {
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




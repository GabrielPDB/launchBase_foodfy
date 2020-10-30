const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')




for (let card of cards) {
    card.addEventListener('click', function () {
        const image_src = card.querySelector('.card-image img').src
        const card_name = card.querySelector('.card-name h3').textContent
        const card_author = card.querySelector('.card-author h4').textContent
        
        modalOverlay.classList.add('active')
        
        modalOverlay.querySelector('.card').innerHTML = `
                <div class="card-image">
                    <img src="${image_src}" alt="${card_name}">
                </div>
                <div class="card-name">
                    <p>${card_name}</p>
                </div>
                <div class="card-author">
                    <p>${card_author}</p>
                </div>
        `

    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
})
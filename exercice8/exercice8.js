const redColorButton = document.getElementById('redColorButton')
const blackColorButton = document.getElementById('blackColorButton')
const goldColorButton = document.getElementById('goldColorButton')
const CB06CARD =document.getElementById('CB06CARD')


redColorButton.addEventListener('click', event => {
    if(CB06CARD.classList.contains('bg-black')){
        CB06CARD.classList.replace("bg-black","bg-red-600")
        CB06CARD.classList.add("text-white")
    }
    if(CB06CARD.classList.contains('bg-white')){
        CB06CARD.classList.replace("bg-white","bg-red-600")
        CB06CARD.classList.add("text-white")
    }
    if(CB06CARD.classList.contains('bg-yellow-500')){
        CB06CARD.classList.replace("bg-yellow-500","bg-red-600")
        CB06CARD.classList.add("text-white")
    }
})

blackColorButton.addEventListener('click', event => {
    if(CB06CARD.classList.contains('bg-white')){
        CB06CARD.classList.replace("bg-white","bg-black")
        CB06CARD.classList.add("text-white")
    }
    if(CB06CARD.classList.contains('bg-red-600')){
        CB06CARD.classList.replace("bg-red-600","bg-black")
        CB06CARD.classList.add("text-white")
    }
    if(CB06CARD.classList.contains('bg-yellow-500')){
        CB06CARD.classList.replace("bg-yellow-500","bg-black")
        CB06CARD.classList.add("text-white")
    }
})

goldColorButton.addEventListener('click', event => {
    if(CB06CARD.classList.contains('bg-white')){
        CB06CARD.classList.replace("bg-white","bg-yellow-500")
        CB06CARD.classList.add("text-white")
    }
    if(CB06CARD.classList.contains('bg-red-600')){
        CB06CARD.classList.replace("bg-red-600","bg-yellow-500")
        CB06CARD.classList.add("text-white")
    }
    if(CB06CARD.classList.contains('bg-black')){
        CB06CARD.classList.replace("bg-black","bg-yellow-500")
        CB06CARD.classList.add("text-white")
    }
})
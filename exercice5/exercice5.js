const valeurDuCompteur = document.getElementById('valeurDuCompteur')

let compteur = []


let count = 0

function afficherCount() {
    valeurDuCompteur.textContent = `0`
    compteur.forEach(count => {
        valeurDuCompteur.textContent = `${count}`
    })
}

const augmentationBtn = document.getElementById('augmenter')
const diminuer = document.getElementById('diminuer')
const reset = document.getElementById('reset')

reset.addEventListener('click', event => {
    compteur.length = 0
    count = 0
    afficherCount()
})

augmentationBtn.addEventListener('click', event => {
    count++

    if (count === 10) {
        valeurDuCompteur.classList.add('text-green-500')
    }

    if (count !== 10) {
        valeurDuCompteur.classList.remove('text-green-500')
    }
    compteur.push(count)



    afficherCount()


})

diminuer.addEventListener('click', event => {
    compteur.splice(count - 1, 1)
    count = count - 1
    if (count < 0) {
        count = 0
    }
    if (count === 10) {
        valeurDuCompteur.classList.add('text-green-500')
    }

    if (count !== 10) {
        valeurDuCompteur.classList.remove('text-green-500')
    }
    afficherCount()
})
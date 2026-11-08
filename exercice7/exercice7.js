const listeArticles = []
const articlesAcheter = []

const articleInput = document.getElementById('articleInput')
const boutonAjout = document.getElementById('boutonAjout')
const errorMessage = document.getElementById('errorMessage')
const articlesCreer = document.getElementById('articlesCreer')
let id=0

affichageArticles()
deleteArticle()
function affichageArticles() {
    articlesCreer.innerHTML = ``
    listeArticles.forEach((article) => {
        articlesCreer.innerHTML += `<p id = "${id}" class="px-3 border border-[#EBEFEA] shadow-xs rounded-2xl text-heading text-sm px-3 py-2.5 shadow-xs">
                ${article}
            </p>
            <button data-deleteArticle="${article}"
                class="deleteButton bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Supprimer</button>
            <button data-acheterArticle="${article}"
                class="acheterButton bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Acheter</button>`
    })
    deleteArticle()
}

boutonAjout.addEventListener('click', event => {
    if (articleInput.value === '') {
        errorMessage.innerText = `Veuillez entrer un article`
    }
    if (articleInput.value !== '') {
        errorMessage.innerText = ``
        listeArticles.push(articleInput.value)
        id++
    }
    console.log(id)
    affichageArticles()
})

function deleteArticle() {

    let deleteButton = document.querySelectorAll('.deleteButton')

    deleteButton.forEach(btn => btn.addEventListener('click', event => {
        let articleDeleted = event.currentTarget.dataset.deleteArticle
        let articleDeletedIndex = listeArticles.indexOf(articleDeleted)

        listeArticles.splice(articleDeletedIndex, 1)
        affichageArticles()
    }))
}

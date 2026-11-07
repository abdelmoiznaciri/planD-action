const livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", prix: 10.50 },
    { titre: "1984", auteur: "George Orwell", prix: 8.90 },
    { titre: "L'Étranger", auteur: "Albert Camus", prix: 7.20 },
    { titre: "Fondation", auteur: "Isaac Asimov", prix: 11.40 },
    { titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", prix: 19.99 }
];

const livreCartes = document.getElementById('livreCartes')

function afiichageDesLivres() {
    livres.forEach((livre) => {
        livreCartes.innerHTML += `<div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${livre.titre}</div>
        <p class="text-gray-700 text-base">
        ${livre.auteur}
        </p>
        <p class="text-gray-700 text-base">
        ${livre.prix}$
                </p>
                </div>
                </div>`
    });
}

afiichageDesLivres()
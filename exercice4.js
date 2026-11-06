const boutiqueProduits = [
    {
        id: 1,
        nom: "Ordinateur",
        prix: 7500,
        categorie: "Informatique"
    },
    {
        id: 2,
        nom: "Téléphone",
        prix: 3500,
        categorie: "Électronique"
    },
    {
        id: 3,
        nom: "Casque",
        prix: 150,
        categorie: "Accessoires"
    },
    {
        id: 4,
        nom: "Clavier",
        prix: 100,
        categorie: "Informatique"
    },
    {
        id: 5,
        nom: "Chaussures",
        prix: 200,
        categorie: "Vêtements"
    },
    {
        id: 6,
        nom: "Montre",
        prix: 300,
        categorie: "Accessoires"
    }
]

function recuperationDesProduitsMoinsDe200dh (){
    let produitmoinde200 = boutiqueProduits.filter(produit => produit.prix < 200)
    console.log(produitmoinde200)
}

recuperationDesProduitsMoinsDe200dh()

function rechercheProduit(id){
    let produitRechercher = boutiqueProduits.find(aprenant => aprenant.id == id)

    if (produitRechercher){
        console.log(produitRechercher)
    }
}

rechercheProduit(1)

function lesNomDesProduits (){
    let nomDesProduits = []

    boutiqueProduits.forEach(produit => nomDesProduits.push(produit.nom))

    console.log(nomDesProduits)
}

lesNomDesProduits()

function laSommeDesPrixDeProduits (){
    let sommeProduits = 0
    boutiqueProduits.forEach(produit => sommeProduits += produit.prix)
    console.log(sommeProduits)
}

laSommeDesPrixDeProduits()
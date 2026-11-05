let produits =[{
    nom:"t-shirt",
    prix: 150,
    quantite: 1
},
{
    nom:"pantalon",
    prix: 250,
    quantite: 1
},
{
    nom:"jacket",
    prix: 150,
    quantite: 1
}]

let total = 0

for (let i = 0 ; i <produits.length ; i++){
    calcul = produits[i].prix * produits[i].quantite
    total += calcul 
}

if (total >= 500){
    reduction = total * 10/100
    total = total - reduction
}

console.log(total + "DH")
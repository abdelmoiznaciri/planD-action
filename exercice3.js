let tabAprenant = [{
    id: 1,
    nom: 'labobo1',
    age: 17,
    note: 19
},
{
    id: 2,
    nom: 'labobo2',
    age: 21,
    note: 19
},
{
    id: 3,
    nom: 'labobo3',
    age: 19,
    note: 19
},
{
    id: 4,
    nom: 'labobo4',
    age: 18,
    note: 19
},
{
    id: 5,
    nom: 'labobo5',
    age: 16,
    note: 19
}]


function ajouterAprenant(id, nom, age, note) {
    tabAprenant.push({
        id: id,
        nom: nom,
        age: age,
        note: note
    })
}

ajouterAprenant(6,'abdo',20,11)
console.log(tabAprenant);

function modifieAprenant(id, note) {
    let aprenant = tabAprenant.find(aprenant => aprenant.id == id)

    if (aprenant) {
        aprenant.note = note
    }
}

modifieAprenant(6,20)
console.log(tabAprenant)

function supprimerAprenant (id){
    let indexAprenant = tabAprenant.indexOf(tabAprenant.find(aprenant => aprenant.id == id))

    if (indexAprenant) {
        tabAprenant.splice(indexAprenant,1)
    }
}

supprimerAprenant(6)
console.log(tabAprenant)

function rechercherAprenant(nom){
    let Aprenant = tabAprenant.find(aprenant => aprenant.nom == nom)

    if (Aprenant){
        console.log(Aprenant)
    }
}

rechercherAprenant('labobo1')
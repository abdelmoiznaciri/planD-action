let tableauxDeNote = [10, 9, 19, 11, 13, 15, 7, 17, 11]
let moyenne = 0

function moyenneDesNotes() {
    let total = 0
    for (let i = 0; i < tableauxDeNote.length; i++) {
        total += tableauxDeNote[i]
    }

    moyenne = total / tableauxDeNote.length
    console.log(`La moyenne des notes est : ${moyenne}`)
    moyennePlusOuMoinsde10()
}

function meilleurNote() {
    let meilleurNote = 0
    for (let i = 0; i < tableauxDeNote.length; i++) {
        if (meilleurNote < tableauxDeNote[i]) {
            meilleurNote = tableauxDeNote[i]
        }
    }
    console.log(`la meilleur note est : ${meilleurNote}`)
}

function superieurde10() {
    let nbrSupDe10 = 0
    for (let i = 0; i < tableauxDeNote.length; i++) {
        if (tableauxDeNote[i] >= 10) {
            nbrSupDe10++
        }
    }
    console.log(`les nombre superieur de 10 sont : ${nbrSupDe10}`)
}

function moyennePlusOuMoinsde10 (){
    if (moyenne > 10){
        console.log('la moyenne de la classe est superieure a 10')
    }else if(moyenne <= 10){
        console.log("la moyenne de la classe n'est pas superieure a 10")
    }
}

moyenneDesNotes()
meilleurNote()
superieurde10()


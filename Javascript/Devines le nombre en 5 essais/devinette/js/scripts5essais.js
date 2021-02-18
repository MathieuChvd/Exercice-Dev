const GENERE = Math.floor(Math.random() * 100) + 1;
console.log(GENERE);

for(var essai = 1; essai <= 5; essai++){
    // On demande le nombre au joueur
    var demande = prompt("Entrez un nombre entre 1 et 100");

    if(demande > GENERE){
        // Sortie Oui
        console.log("Plus petit que " + demande);
    }else{
        // Sortie Non
        if(demande < GENERE){
            // Sortie Oui
            console.log(`Plus grand que ${demande}`);
        }else{
            // Sortie Non
            console.log("C'est gagné, il fallait trouver " + GENERE);

            // Ici je dois interrompre la boucle (on "casse" la boucle)
            break;
        }
    }
}

if(essai === 6){
    console.log(`Perdu, il fallait trouver ${GENERE}`);
}
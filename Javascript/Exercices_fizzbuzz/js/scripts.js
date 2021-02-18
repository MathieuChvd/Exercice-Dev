

for(let nombre = 1; nombre <= 300; nombre++){
    let texte = "";
    if(nombre % 3 === 0){
        texte = texte + "Fizz"; // texte += "Fizz"
    }
    if(nombre % 5 === 0){
        texte = texte + "Buzz"; // texte += "Buzz"
    }
    if(texte != ""){
        // Texte pas vide
        console.log(texte);
    }else{
        // Texte vide
        console.log(nombre);
    }
}


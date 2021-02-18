// for(let nombre = 1; nombre <= 200; nombre++){
//     // Ici on vérifie les multiples
//     // nombre % 3 donne le reste de la division entière (nombre / 3)
//     if(nombre % 3 === 0 && nombre % 5 === 0){ // nombre % 15 === 0
//         // Oui
//         console.log("FizzBuzz");
//     }else{
//         // Non
//         if(nombre % 3 === 0){
//             // Oui
//             console.log("Fizz");
//         }else{
//             // Non
//             if(nombre % 5 === 0){
//                 // Oui
//                 console.log("Buzz");
//             }else{
//                 // Non
//                 console.log(nombre);
//             }
//         }
//     }
// }

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

// for(let nombre = 1; nombre <= 300; nombre++){
//     let texte = "";
//     texte += (nombre % 3 === 0) ? "Fizz" : "";
//     texte += (nombre % 5 === 0) ? "Buzz" : "";
//     console.log(texte != "" ? texte : nombre);
// }
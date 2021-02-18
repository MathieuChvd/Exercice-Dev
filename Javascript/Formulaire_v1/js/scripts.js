// On attend que le document soit chargé
window.onload = function(){
    
    // On va chercher le champ pseudo
    const PSEUDO = document.querySelector("#pseudo");

    // On écoute l'évènement "input"
    PSEUDO.addEventListener("input", function(){
        // On doit compter les caractères présents dans le champ pseudo
        if(this.textLength < 5){
            // Bordure rouge
            this.style.border = "2px solid red";
        }else{
            // Bordure verte
            this.style.border = "2px solid green";
        }
    });

    // On va chercher l'élément "email2"
    const EMAIL2 = document.querySelector("#email2");

    EMAIL2.addEventListener("change", function(){
        // Ici email2 a changé
        console.log(this);
    });

} // Fin window.onload
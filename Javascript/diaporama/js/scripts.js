// Quand je clique sur la flèche droite, on défile les images dans l'ordre croissant (1, 2, 3...)
// On initialise le compteur à 0, numéro de la 1ère diapo
let compteur = 0;

// On s'assure que la page est chargée
window.onload = function(){
    // On va chercher toutes les classes diapo__element
    const ELEMENTS = document.querySelectorAll(".diapo__element");

    // On compte le nombre d'images (pour savoir où arrêter le compteur)
    const NB_IMAGES = ELEMENTS.length;

    // On va chercher l'élément "fleche-droite"
    const DROITE = document.querySelector("#fleche-droite");

    // On écoute l'évènement "click"
    // DROITE.addEventListener("click", function(){
    //     // On fait avancer d'une image
    //     // On fait évoluer le compteur (0, 1, 2, 0, 1, 2...)
    //     // AVANT de changer le compteur on enlève la classe diapo__element--active
    //     // On se trouve sur l'image à masquer
    //     // On retire la classe diapo__element--active de l'élément pointé par le compteur
    //     ELEMENTS[compteur].classList.remove("diapo__element--active");

    //     // On vérifie si on est à la dernière image
    //     if(compteur === NB_IMAGES - 1){
    //         compteur = 0;
    //     }else{
    //         compteur++;
    //     }

    //     // APRES avoir changé le compteur on ajoute la classe diapo__element--active
    //     // On se trouve sur l'image à afficher
    //     ELEMENTS[compteur].classList.add("diapo__element--active");
    // });
    DROITE.addEventListener("click", defile);

    // On va chercher l'élément "fleche-gauche"
    const GAUCHE = document.querySelector("#fleche-gauche");

    // On écoute l'évènement "click"
    GAUCHE.addEventListener("click", function(){
        // On fait reculer d'une image
        // On fait évoluer le compteur (0, 2, 1, 0, 2, 1...)
        // AVANT de changer le compteur on enlève la classe diapo__element--active
        // On se trouve sur l'image à masquer
        ELEMENTS[compteur].classList.remove("diapo__element--active");

        // On vérifie si on est à la première image
        if(compteur === 0){
            // Si on est à la 1ère image, on va à la dernière
            compteur = NB_IMAGES - 1;
        }else{
            // Sinon on décrémente le compteur
            compteur--;
        }

        // APRES avoir changé le compteur on ajoute la classe diapo__element--active
        // On se trouve sur l'image à afficher
        ELEMENTS[compteur].classList.add("diapo__element--active");
    });

    // Exécuter quelquechose toutes les 5 secondes
    // let timer = setInterval(function(){
    //     // On fait avancer d'une image
    //     // On fait évoluer le compteur (0, 1, 2, 0, 1, 2...)
    //     // AVANT de changer le compteur on enlève la classe diapo__element--active
    //     // On se trouve sur l'image à masquer
    //     // On retire la classe diapo__element--active de l'élément pointé par le compteur
    //     ELEMENTS[compteur].classList.remove("diapo__element--active");

    //     // On vérifie si on est à la dernière image
    //     if(compteur === NB_IMAGES - 1){
    //         compteur = 0;
    //     }else{
    //         compteur++;
    //     }

    //     // APRES avoir changé le compteur on ajoute la classe diapo__element--active
    //     // On se trouve sur l'image à afficher
    //     ELEMENTS[compteur].classList.add("diapo__element--active");

    // }, 5000);

    // La variable est indispensable si on souhaite interrompre l'intervalle
    let timer = setInterval(defile, 5000);

    function defile(){
        // On fait avancer d'une image
        // On fait évoluer le compteur (0, 1, 2, 0, 1, 2...)
        // AVANT de changer le compteur on enlève la classe diapo__element--active
        // On se trouve sur l'image à masquer
        // On retire la classe diapo__element--active de l'élément pointé par le compteur
        ELEMENTS[compteur].classList.remove("diapo__element--active");

        // On vérifie si on est à la dernière image
        if(compteur === NB_IMAGES - 1){
            compteur = 0;
        }else{
            compteur++;
        }

        // APRES avoir changé le compteur on ajoute la classe diapo__element--active
        // On se trouve sur l'image à afficher
        ELEMENTS[compteur].classList.add("diapo__element--active");
    }

    // Gestion du survol
    const DIAPO = document.querySelector(".diapo");

    // On écoute l'évènement "mouseover"
    DIAPO.addEventListener("mouseover", function(){
        // On stoppe le défilement
        clearInterval(timer);
    });

    // On écoute l'évènement "mouseout"
    DIAPO.addEventListener("mouseout", function(){
        // On redémarre le défilement
        timer = setInterval(defile, 5000);
    });

} // Fin window.onload

/*
Mettre en place un défilement toutes les 5 secondes
Arrêter le défilement si la souris se trouve sur le diaporama
Reprendre quand la souris n'est plus dessus
*/

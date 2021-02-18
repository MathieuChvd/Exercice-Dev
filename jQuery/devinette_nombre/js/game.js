/**
 * Le jeu du plus ou moins !
 */

var nbEssais = 5;
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

$(function() {

    // Écouteur d'évènement sur notre formulaire de bienvenue !
    $("#form-welcome").on("submit", welcome);
    // $("#form-welcome").submit(welcome);

    $("#game").on("submit", game);
});

function game(event)
{
    event.preventDefault();

    // Récupère le nombre choisi par le joueur
    let response = $("#number").val();

    if (nbEssais !== 0) {
        // Si le nombre du joueur est plus petit...
        if (response < randomNumber) {
            // On lui indique par un message
            $(".indication").text('Le nombre à trouver est plus grand !');
        }
        // Si le nombre du joueur est plus grand...
        else if (response > randomNumber) {
            $(".indication").text('Le nombre à trouver est plus petit !');
        }
        // Sinon, gagné !
        else {
            $(".indication").text('Bravo ! Tu as gagné ! 🤩');
        }

        // Décrémente la variable
        nbEssais--;
    }
    else {
        $(".indication").text('Tu ne peux plus jouer !');
    }
}

// Fonction associée à notre formulaire de bienvenue
function welcome(event)
{
    // L'action d'envoi du formulaire ne sera pas prise en compte
    // comme elle se serait normalement
    event.preventDefault();

    // Récupère la valeur du champ ayant l'ID "gamer"
    let pseudo = $("#gamer").val();

    // Remonte jusqu'au parent et le supprime
    $(this).parent().remove();

    // Afficher la deuxième "card"
    // show() pour afficher un élément caché
    // find() trouve un "enfant" de l'élément courant
    // text() modifie le contenu de l'élément
    $("#form-game").show().find("h2").text(`Bienvenue ${pseudo} !`);
}

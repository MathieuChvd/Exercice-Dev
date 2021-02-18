/**
 * Vérification du formulaire en JQuery
 */

// On attends que le DOM charge
// Document Object Model
$(function() {
    // Écouteur d'évènement sur le champ texte "pseudo"
    $("#pseudo").on("input", verifPseudo);

    // Écouteur d'évènement sur le champ texte "email"
    $("#email").on("input", verifEmail);

    // Écouteur d'évènement sur le champ texte "password"
    $("#password").on("input", verifPassword);

    // Écouteur d'évènement sur le champ texte "confirm-password"
    $("#confirm-password").on("input", verifConfirmPassword);

    // Écouteur d'évènement sur l'icône des yeux
    $(".bi-eye").on("click", showHidePassword);
});

// Fonction permettant d'afficher ou de masquer un mot de passe dans un champ texte
function showHidePassword()
{
    // Récupère le champ "password"
    let inputPwd = $(this).parent().prev();
    // Si l'attribut "type" est égal à "password", alors on le modifie en "text"
   if (inputPwd.attr("type") === "password") {
        inputPwd.attr("type", "text");
    }
    // Sinon, c'est que l'attribut "type" n'est pas égal à "password", donc
    // on le repasse en "password"
    else {
        inputPwd.attr("type", "password");
    }
}

// Fonction permettant de vérifier si le mot de passe et sa confirmation correspondent
function verifConfirmPassword()
{
    // Si le mot de passe et sa confirmation correspondent, nous sommes heureux...
    if ($(this).val() === $("#password").val()) {
        $(this).addClass("border border-success").removeClass("border-danger");
        $(this).parent().next().addClass("d-none");
    }
    // Sinon, on hurle...
    else {
        $(this).addClass("border border-danger");
        $(this).parent().next().removeClass("d-none");
    }
}

function isValidPassword(password)
{
    var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
    return regExp.test(password);
}

// Fonction permettant de vérifier le mot de passe
function verifPassword()
{
    // Si le mot de passe est supérieur ou égal à 6, Bravo !
    if (isValidPassword($(this).val())) {
        $(this).addClass("border border-success").removeClass("border-danger");
        // parent() : Permet de remonter d'un noeud dans le DOM, soit remonte à
        // l'élément HTML au dessus
        $(this).parent().next().addClass("d-none");
    }
    // Sinon, je suis déçu...
    else {
        $(this).addClass("border border-danger");
        $(this).parent().next().removeClass("d-none");
    }
}

function isEmail(email)
{
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// Fonction permettant de vérifier la validité de mon email
function verifEmail()
{
    // Si la syntaxe de l'email est correct, Oh joie !
    if (isEmail($(this).val())) {
        // Ajoute les classes CSS Bootstrap pour avoir les bordures en vert
        // et retire la classe CSS qui permet d'avoir les bordures en rouge
        $(this).addClass("border border-success").removeClass("border-danger");

        // Ajoute la classe Bootstrap "d-none" sur l'élément HTML suivant le champ texte
        $(this).next().addClass("d-none");
    }
    // Sinon, une erreur
    else {
        $(this).addClass("border border-danger");
        $(this).next().removeClass("d-none");
    }
}

// Fonction permettant de vérifier mon pseudonyme
function verifPseudo()
{
    // Si le pseudo est supérieur ou égal à 5, Bravo !
    // val() récupère la valeur contenu dans le champ texte
    if ($(this).val().length >= 5) {
        $(this).addClass("border border-success").removeClass("border-danger");
        $(this).next().addClass("d-none");
    }
    // Sinon, je suis déçu...
    else {
        $(this).addClass("border border-danger");
        // next() : récupère l'élément juste en dessous du champ"input#pseudo" en retirant la classe
        // Bootstrap "d-none", qui veut dire "display: none"
        $(this).next().removeClass("d-none");
    }
}

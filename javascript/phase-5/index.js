// Demander le nom et le prénom de l'utilisateur
function demanderNom() {
    var nom = prompt("Quel est votre nom ?");
    return nom;
}

// Fonction pour demander le prénom de l'utilisateur via une boîte de dialogue
function demanderPrenom() {
    var prenom = prompt("Quel est votre prénom ?");
    return prenom;
}

// Appel des fonctions pour obtenir le nom et le prénom
var nomUtilisateur = demanderNom();
var prenomUtilisateur = demanderPrenom();

// Afficher les informations via une alerte
var message = "Nom: " + nomUtilisateur + "\nPrénom: " + prenomUtilisateur;
alert(message);

// Calculer le produit de deux nombres entrés par l'utilisateur
var a = 15;
var b = 3;
var c = a + b;
console.log(c);
// Afficher le résultat du produit

// Demande la température en degrés Celsius à l'utilisateur
var celsius = parseFloat(prompt("Entrez la température en degrés Celsius :"));

// Convertit les degrés Celsius en degrés Fahrenheit
var fahrenheit = (celsius * 9/5) + 32;

// Affiche la température convertie en degrés Fahrenheit
console.log("La température en degrés Fahrenheit est : " + fahrenheit);

// Demande à l'utilisateur son année de naissance
var anneeNaissance = prompt("Quelle est votre année de naissance ?");

// Calcule l'année actuelle
var anneeActuelle = new Date().getFullYear();

// Calcule l'âge de l'utilisateur
var age = anneeActuelle - anneeNaissance;

// Vérifie si l'utilisateur est majeur ou mineur
var estMajeur = age >= 18;

// Affiche l'âge de l'utilisateur et s'il est majeur ou mineur
console.log("Vous avez " + age + " ans.");
if (estMajeur) {
  console.log("Vous êtes majeur.");
} else {
  console.log("Vous êtes mineur.");
}


// Demande à l'utilisateur d'entrer un nombre
let nombre = parseInt(prompt("Entrez un nombre :"));

// Vérifie si le nombre est pair en utilisant l'opérateur modulo %
if (nombre % 2 === 0) {
  console.log("Le nombre est pair.");
} else {
  console.log("Le nombre est impair.");
}


// Saisie des nombres entiers
let nombre1 = parseInt(prompt("Entrez le premier nombre entier :"));
let nombre2 = parseInt(prompt("Entrez le deuxième nombre entier :"));

// Saisie de l'opérateur
let operateur = prompt("Entrez l'opérateur (+, -, * ou /) :");

// Vérification de l'opérateur et calcul du résultat
let resultat;
switch (operateur) {
  case '+':
    resultat = nombre1 + nombre2;
    break;
  case '-':
    resultat = nombre1 - nombre2;
    break;
  case '*':
    resultat = nombre1 * nombre2;
    break;
  case '/':
    if (nombre2 !== 0) {
      resultat = nombre1 / nombre2;
    } else {
      console.log("Erreur : Division par zéro !");
    }
    break;
  default:
    console.log("Erreur : Opérateur invalide !");
}

// Affichage du résultat si calculé
if (resultat !== undefined) {
  console.log("Résultat : " + resultat);
}



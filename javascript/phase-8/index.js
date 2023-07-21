document.getElementById("prenomForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    // Récupère la valeur du champ prénom
    var prenomInput = document.getElementById("prenom");
    var prenom = prenomInput.value.trim();

    if (prenom !== "") {
      // Affiche le prénom dans la console
      console.log(prenom);
      // Réinitialise le champ prénom
      prenomInput.value = "";
      prenomInput.focus(); // Place le curseur dans le champ prénom
    } else {
      // Récupère tous les prénoms déjà saisis
      var prenoms = document.getElementsByTagName("li");
      var nbPrenoms = prenoms.length;

      // Affiche le nombre de prénoms et les prénoms saisis dans la console
      console.log("Nombre de prénoms : " + nbPrenoms);
      console.log("Prénoms saisis :");
      for (var i = 0; i < nbPrenoms; i++) {
        console.log(prenoms[i].textContent);
      }
    }
  });



  function afficherNombresInferieurs(N) {
    for (let i = 0; i < N; i++) {
      console.log(i);
    }
  }
  
  // Exemple d'utilisation avec N = 10
  afficherNombresInferieurs(10);
  


  let sum = 0;
let count = 0;

while (true) {
  const number = parseInt(prompt("Entrez un entier (0 pour arrêter la saisie):"));

  if (number === 0) {
    break;
  }

  sum += number;
  count++;
}

const average = sum / count;

console.log("Somme :", sum);
console.log("Moyenne :", average);



// Demande à l'utilisateur d'entrer la valeur de N et X
var N = parseInt(prompt("Entrez la valeur de N :"));
var X = parseInt(prompt("Entrez la valeur de X :"));

// Vérifie si les valeurs entrées sont valides
if (isNaN(N) || isNaN(X)) {
  console.log("Veuillez entrer des nombres valides pour N et X.");
} else {
  console.log("Les", N, "premiers multiples de", X, "sont :");
  
  // Calcule et affiche les N premiers multiples de X
  for (var i = 1; i <= N; i++) {
    var multiple = X * i;
    console.log(multiple);
  }
}




// Demande à l'utilisateur d'entrer un mot
var mot = prompt("Entrez un mot :");

// Convertit le mot en minuscules pour simplifier la vérification des voyelles
var motMinuscules = mot.toLowerCase();

// Déclare un compteur pour les voyelles
var compteurVoyelles = 0;

// Parcourt chaque lettre du mot
for (var i = 0; i < motMinuscules.length; i++) {
  // Vérifie si la lettre est une voyelle
  if (
    motMinuscules.charAt(i) === "a" ||
    motMinuscules.charAt(i) === "e" ||
    motMinuscules.charAt(i) === "i" ||
    motMinuscules.charAt(i) === "o" ||
    motMinuscules.charAt(i) === "u" ||
    motMinuscules.charAt(i) === "y"
  ) {
    // Incrémente le compteur de voyelles
    compteurVoyelles++;
  }
}

// Affiche le nombre de voyelles dans le mot
console.log("Le mot", mot, "contient", compteurVoyelles, "voyelle(s).");

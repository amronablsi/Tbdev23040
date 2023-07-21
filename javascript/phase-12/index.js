 // Tableau pour stocker les valeurs saisies
 var valeurs = [];

 // Fonction pour saisir les valeurs
 function saisirValeurs() {
     var saisie;
     do {
         saisie = window.prompt("Entrez une valeur numérique (0 pour arrêter) :");
         var valeur = parseFloat(saisie);
         if (!isNaN(valeur)) {
             valeurs.push(valeur);
         }
     } while (valeur !== 0);
 }

 // Fonction pour calculer la somme des valeurs
 function calculerSomme() {
     var somme = 0;
     for (var i = 0; i < valeurs.length; i++) {
         somme += valeurs[i];
     }
     return somme;
 }

 // Fonction pour calculer la moyenne des valeurs
 function calculerMoyenne() {
     var somme = calculerSomme();
     return somme / valeurs.length;
 }

 // Fonction principale
 function main() {
     saisirValeurs();

     // Retirer le 0 de la liste pour l'affichage
     valeurs.pop();

     var nombreDeValeurs = valeurs.length;
     var somme = calculerSomme();
     var moyenne = calculerMoyenne();

     // Afficher les résultats
     alert("Nombre de valeurs saisies : " + nombreDeValeurs +
           "\nSomme des valeurs : " + somme +
           "\nMoyenne des valeurs : " + moyenne.toFixed(2));
 }

 // Appeler la fonction principale
 main();
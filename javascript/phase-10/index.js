// Fonction pour saisir un entier valide
function saisirEntier(message) {
    let entier = parseInt(prompt(message));
    while (isNaN(entier)) {
      entier = parseInt(prompt("Veuillez saisir un nombre entier valide :"));
    }
    return entier;
  }
  
  // Fonction pour remplir le tableau avec les valeurs saisies par l'utilisateur
  function remplirTableau(taille) {
    const tableau = [];
    for (let i = 0; i < taille; i++) {
      tableau.push(prompt(`Saisissez la valeur ${i + 1} :`));
    }
    return tableau;
  }
  
  // Fonction pour afficher le contenu du tableau
  function afficherTableau(tableau) {
    console.log("Contenu du tableau :");
    for (let i = 0; i < tableau.length; i++) {
      console.log(`[${i}] => ${tableau[i]}`);
    }
  }
  
  // Programme principal
  console.log("Création d'un tableau");
  const tailleTableau = saisirEntier("Veuillez saisir la taille du tableau :");
  const monTableau = remplirTableau(tailleTableau);
  afficherTableau(monTableau);
  
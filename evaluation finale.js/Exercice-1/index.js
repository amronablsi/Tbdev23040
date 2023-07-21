function denombrePersonnes() {
    let age;
    let countMoins20 = 0;
    let countEntre20et40 = 0;
    let countPlus40 = 0;
  
    while (true) {
      age = parseInt(prompt("Entrez l'âge de la personne (ou un nombre supérieur ou égal à 100 pour arrêter) :"));
  
      if (isNaN(age)) {
        alert("Veuillez entrer un âge valide.");
        continue;
      }
  
      if (age < 20) {
        countMoins20++;
      } else if (age >= 20 && age <= 40) {
        countEntre20et40++;
      } else if (age > 40) {
        countPlus40++;
      }
  
      if (age >= 100) {
        break;
      }
    }
  
    console.log("Personnes d'âge strictement inférieur à 20 ans : " + countMoins20);
    console.log("Personnes d'âge compris entre 20 ans et 40 ans (inclus) : " + countEntre20et40);
    console.log("Personnes d'âge strictement supérieur à 40 ans : " + countPlus40);
  }
  
  denombrePersonnes();
  
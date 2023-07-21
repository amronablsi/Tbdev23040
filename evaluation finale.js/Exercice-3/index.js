var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

function searchAndRemoveName(name) {
  var index = tab.indexOf(name);

  if (index !== -1) {
    // Found the name in the array
    for (var i = index; i < tab.length - 1; i++) {
      // Shift the elements to the left, effectively removing the name
      tab[i] = tab[i + 1];
    }
    tab[tab.length - 1] = " "; // Set the last element to blank
    console.log("Le prénom '" + name + "' a été supprimé du tableau.");
  } else {
    // Name not found in the array
    console.log("Le prénom '" + name + "' n'a pas été trouvé dans le tableau.");
  }
}


var prenomASupprimer = "Melik";
searchAndRemoveName(prenomASupprimer);

console.log(tab); // Affiche le tableau après la suppression
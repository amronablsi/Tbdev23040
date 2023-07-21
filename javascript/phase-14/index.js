    // Fonction qui vérifie la proposition de l'utilisateur
    function verif() {
        // Récupérer l'élément div pour afficher les informations
        var label = document.getElementById("label1");
  
        // Récupérer la valeur saisie par l'utilisateur
        var userGuess = parseInt(document.getElementById("textBox1").value, 10);
  
        // Vérifier si l'utilisateur a saisi un nombre valide
        if (isNaN(userGuess)) {
          label.textContent = "Veuillez saisir un nombre valide.";
          return;
        }
  
        // Générer le nombre magique aléatoire entre 1 et 100
        var magicNumber = Math.floor(Math.random() * 100) + 1;
  
        // Comparer la valeur saisie avec le nombre magique
        if (userGuess === magicNumber) {
          label.textContent = "Félicitations ! Vous avez trouvé le nombre magique.";
        } else if (userGuess < magicNumber) {
          label.textContent = "Trop petit. Essayez encore.";
        } else {
          label.textContent = "Trop grand. Essayez encore.";
        }
      }
  
      // Code pour rendre le JavaScript non intrusif
      document.getElementById("button1").addEventListener("click", verif);
  
      // Vous pouvez également ajouter un événement pour gérer la touche "Entrée" lorsqu'elle est pressée dans le champ de saisie
      document.getElementById("textBox1").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          verif();
        }
      });
    
  

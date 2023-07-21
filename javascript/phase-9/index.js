function strtok(str1, str2, n) {
    // Utiliser la méthode split() pour diviser str1 en un tableau de mots
    const wordsArray = str1.split(str2);
  
    // Vérifier si l'indice n est valide
    if (n <= 0 || n > wordsArray.length) {
      return "Indice invalide";
    }
  
    // Renvoyer le nième mot (à l'indice n-1)
    return wordsArray[n - 1];
  }
  
  // Exemple d'utilisation
  const str1 = "robert ;dupont ;amiens ;80000";
  const str2 = " ; "; // Attention aux espaces autour du séparateur
  const n = 3;
  const result = strtok(str1, str2, n);
  console.log(result); // Output: "amiens"
  

  // Fonction qui retourne le produit de deux variables x, y passées en paramètre
  function produit(x, y) {
    return x * y;
  }

  // Fonction qui affiche l'image passée en paramètre (le chemin de l'image)
  
  function afficheProduit() {
    const x = 10;
    const y = 5;
    const resultSpan = document.getElementById("result");
    resultSpan.textContent = produit(x, y);
  }

  function afficheImage() {
    const imagePath = "javascript/phase-9/papillon.jpg";
    afficheImg(imagePath);
  }
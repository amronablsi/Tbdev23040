function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Expression régulière pour vérifier que le nom contient uniquement des lettres et des espaces
  var nameRegex = /^[A-Za-z\s]+$/;

  // Expression régulière pour vérifier que l'email est valide
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(name)) {
    alert("Veuillez entrer un nom valide (lettres uniquement).");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return false;
  }

  // Vous pouvez ajouter d'autres validations ici pour le message, si nécessaire.

  return true; // Soumission du formulaire si tout est valide.
}

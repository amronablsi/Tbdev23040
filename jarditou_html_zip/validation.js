 // Function to validate the form
 function validateForm() {
  // Get the form inputs
  var userName = document.getElementById("user-name").value.trim();
  var userFirstName = document.getElementById("user-firstname").value.trim();
  var gender = document.querySelector('input[name="gender"]:checked');
  var dateOfBirth = document.getElementById("date").value.trim();
  var userCode = document.getElementById("user-code").value.trim();
  var address = document.getElementById("Adresse").value.trim();
  var city = document.getElementById("city").value.trim();
  var email = document.getElementById("emailinput").value.trim();
  var sujet = document.getElementById("sujet").value.trim();
  var message = document.getElementById("message").value.trim();
  var cgu = document.getElementById("cgu").checked;

  // Check if required fields are empty
  if (userName === "" || userFirstName === "" || !gender || dateOfBirth === "" || userCode === "" || address === "" || city === "" || email === "" || sujet === "choiser" || message === "" || !cgu) {
      alert("Veuillez remplir tous les champs obligatoires (marqués par *)");
      return false; // Prevent form submission
  }

  // You can add more specific validation for each field if needed.

  // Form is valid, allow submission
  return true;
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var selectedOption = document.getElementById("environnement").value;
    if (selectedOption === "") {
      document.getElementById("environnement-error").style.display = "block";
      event.preventDefault();
    } else {
      document.getElementById("environnement-error").style.display = "none";
    }
  });
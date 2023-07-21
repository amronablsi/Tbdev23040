// Fonction pour afficher ou masquer les messages d'erreur en fonction de la validation du formulaire
function validateForm() {
    let isValid = true;

    if (document.getElementById("societe").value === "") {
        document.getElementById("societe-error").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("societe-error").style.display = "none";
    }

    if (document.getElementById("personne").value === "") {
        document.getElementById("personne-error").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("personne-error").style.display = "none";
    }

    if (!/^[0-9]{5}$/.test(document.getElementById("codepostal").value)) {
        document.getElementById("codepostal-error").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("codepostal-error").style.display = "none";
    }

    if (document.getElementById("ville").value === "") {
        document.getElementById("ville-error").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("ville-error").style.display = "none";
    }

    if (!document.getElementById("email").checkValidity()) {
        document.getElementById("email-error").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    if (document.getElementById("environnement").value === "") {
        document.getElementById("environnement-error").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("environnement-error").style.display = "none";
    }

    return isValid;
}
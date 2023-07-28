function verif() {
    alert('gne');
    var nom = document.getElementById('nom').value;
    var prénom = document.getElementById('prénom').value;
    var postal = document.getElementById('postal').value;
    var ville = document.getElementById('ville').value;
    var email = document.getElementById('mail').value;
    var sujet = document .getElementById('sujet')
    var mailVerif = RegExp('^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$');
    var lettre = RegExp('^[a-zA-Z]+$');
    var postalVerif = RegExp('^[0-9]{5}$');
    
  
    if (lettre.test(nom) == false) {
        alert('Veuillez saisir un nom de nom correct.');
        return;
    }
    if (lettre.test(prénom) == false) {
        alert('Veuillez saisir un prénom correct.');
        return;
    }
    if (postalVerif.test(postal) == false){
        alert('Veuillez saisir un code postal correct');
        return;
    }
    if (lettre.test(ville) == false) {
        alert('Veuillez saisir un nom de ville correct.');
        return;
    }
    if (mailVerif.test(email) == false) {
        alert('Veuillez saisir un Email correct.');
        return;
    }
  }
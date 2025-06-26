// Générer un mot de passe d'un certain nombre de caractères

function générerMotDePasse() {
  // Déclaration variables en récupérant les id des input
  const passwordOutput = document.getElementById('password-output');
  const passwordLengthInput = document.getElementById('password-length');
  const displayPasswordLength = document.getElementById(
    'display-password-length'
  );
  const generateButton = document.getElementById('generateButton');

  const lowercaseCheckbox = document.getElementById('lowercase');
  const uppercaseCheckbox = document.getElementById('uppercase');
  const numbersCheckbox = document.getElementById('numbers');
  const symbolsCheckbox = document.getElementById('symbols');

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{};:,.<>?/';

  // Met à jour l'affichage de la longueur
  passwordLengthInput.addEventListener('input', () => {
    displayPasswordLength.value = passwordLengthInput.value;
  });

  generateButton.addEventListener('click', () => {
    const length = parseInt(passwordLengthInput.value, 10);
    let caractères = '';

    if (lowercaseCheckbox.checked) {
      caractères = caractères + lowercaseChars;
    }

    if (uppercaseCheckbox.checked) {
      caractères = caractères + uppercaseChars;
    }

    if (numbersCheckbox.checked) {
      caractères = caractères + numberChars;
    }

    if (symbolsCheckbox.checked) {
      caractères = caractères + symbolChars;
    }

    if (caractères === '') {
      passwordOutput.value = alert('Sélectionnez au moins un type !');
      return;
    }

    let password = '';

    for (let i = 0; i < length; i++) {
      // Choisir un index au hasard dans la chaîne de caractères possibles
      let nombreAleatoire = Math.random(); // un nombre entre 0 et 1
      let index = Math.floor(nombreAleatoire * caractères.length);

      // Ajouter le caractère correspondant au mot de passe
      password = password + caractères[index];
    }

    passwordOutput.value = password;
  });
}

générerMotDePasse();

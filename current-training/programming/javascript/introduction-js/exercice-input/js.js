// Générer un mot de passe d'un certain nombre de caractères

// Déclaration variables en récupérant les id des input
const passwordOutput = document.getElementById('password-output');
const passwordLength = document.getElementById('password-length');
const displayPasswordLength = document.getElementById(
  'display-password-length'
);
const generateButton = document.getElementById('generateButton');

const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()-_=+[]{};:,.<>?/';

function générerMotDePasse() {
  // Mise à jour l'affichage de la longueur
  passwordLength.addEventListener('input', () => {
    displayPasswordLength.value = passwordLength.value;
  });

  generateButton.addEventListener('click', () => {
    // Conditions de génération en fonction des types
    let caractères = '';
    if (lowercase.cheked) {
      caractères = caractères + lowercaseChars;
    }

    if (uppercase.cheked) {
      caractères = caractères + uppercaseChars;
    }

    if (numbers.checked) {
      caractères = caractères + numberChars;
    }

    if (symbols.checked) {
      caractères = caractères + symbolChars;
    }

    if (
      !lowercase.checked &&
      !uppercase.checked &&
      !numbers.checked &&
      !symbols.checked
    ) {
      passwordOutput.value = 'Choisissez au moins un type';
      return;
    }

    let password = '';

    for (let i = 0; i <= length; i++) {}
  });
}

générerMotDePasse();

// Pas terminé - correction sur Discord

/* Demandez à l'utilisateur de deviner un nombre entre 1 et 100. */
/* Utilisez une boucle while pour permettre à l'utilisateur de saisir des nombres jusqu'à ce qu'il devine correctement. */

// const nombreATrouver = 33;
// let tentative;

// while (tentative !== nombreATrouver) {
//   tentative = parseInt(prompt('Devinez un nombre en 1 et 100'));
//   console.log(tentative);

//   if (tentative < nombreATrouver) {
//     console.log("C'est plus grand !");
//   } else if (tentative > nombreATrouver) {
//     console.log("C'est plus petit !");
//   } else {
//     console.log('Bravo, vous avez trouvé !');
//   }
// }

// Résultat attendu de l'exercice sans ajout :

// let nombreADeviner = 66;
// let nombreEntre;
// while (nombreEntre !== nombreADeviner) {
//   nombreEntre = parseInt(prompt('entrez un nombre'));
// }

// Afficher les nombres de 1 à 10 :

// let nombre = 1;

// while (nombre <= 10) {
//   console.log(nombre++);
// }

// Calculer la somme des nombres de 1 à 100 :

let chiffre = 1;
let calcul = 0;

while (chiffre < 100) {
  calcul = calcul + chiffre;
  chiffre++;
  console.log(calcul);
}

// ou

let chiffre = 0; // Faire attention à l'emplacement des incrémentations qui peut tout changer ! Lecture de haut en bas en Js
let calcul = 1;

while (chiffre < 100) {
  chiffre++;
  calcul = calcul + chiffre;
  console.log(calcul);
}

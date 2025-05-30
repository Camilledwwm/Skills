// Créez une fonction qui prend en entrée l'âge d'une personne et
// affiche "Majeur" si l'âge est supérieur ou égal à 18, sinon affichez "Mineur".

// CONDITIONS

function verifierAge(age) {
  if (age >= 18) {
    console.log('Majeur(e)');
  } else {
    console.log('Mineur(e)');
  }
}

verifierAge(15);

// OU (Commenter l'un des codes pour voir le résultat de l'autre)

function verifierAge(age) {
  if (age >= 18) {
    return 'Majeur(e)';
  } else {
    return 'Mineur(e)';
  }
}

let verif = verifierAge(33);
console.log(verif);

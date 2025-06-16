// Mots à trouver

let motsATrouver = [
  'PAPILLON',
  'MYSTERE',
  'CHEVALIER',
  'ORACLE',
  'MAGICIEN',
  'CREPUSCULE',
  'RUISSEAU',
  'VOLCAN',
  'DONJON',
  'EXPERIENCE',
  'DRAGON',
  'SORTILEGE',
  'QUETE',
  'PORTAIL',
  'ELIXIR',
  'CHATEAU',
  'EPEE',
  'INVOCATION',
  'SORCIERE',
  'GRIFFON',
  'ENCHANTEMENT',
  'ARMURE',
  'TAVERNE',
  'GRIMOIRE',
  'RELIQUE',
  'TROLL',
  'MALEDICTION',
  'RUNE',
  'SCEPTRE',
  'MANNE',
  'FANTOME',
  'MEDAILLON',
  'ENIGME',
  'RITUEL',
  'CRISTAL',
  'GUERRIER',
  'REGENERATION',
  'ARCHER',
  'CHAMAN',
  'BOSS',
  'GOBELIN',
  'SANCTUAIRE',
  'NECROMANCIEN',
  'MANA',
  'PALADIN',
  'FORGE',
  'LABYRINTHE',
  'ECLAT',
  'DIMENSION'
];

let motSecret = motsATrouver[Math.floor(Math.random() * motsATrouver.length)]; // Math.floor() arrondit un décimal à l'entier inférieur ( 2.99 donne 2 ).
// Math.random() est une fonction qui génère un nombre compris entre 0 et 1 non inclus ( de 0 à 0.9999 ).

let lettresTrouvées = Array(motSecret.length).fill('_');
// Crée un tableau sans nom particulier doté d'entrées vides. Il permet de remplacer les lettres du mot généré par un underscore ( _ )

let tentativesRestantes = 6;
// La fleur est dotée de 12 pétales qui tombent deux par deux.

function afficherMot() {
  document.getElementById('word').textContent = lettresTrouvées.join(' ');
}

afficherMot();

// Partie clavier + vérification lettre :
const lettresClavier = document.querySelectorAll('.letter');

const pétales = document.querySelectorAll('.petal');

let erreurs = 0;

let jeuTerminé = false;

function verifierLettre(lettre) {
  if (jeuTerminé) return;

  let lettreTrouvée = false;

  // Vérifie si la lettre est dans le mot
  for (let i = 0; i < motSecret.length; i++) {
    if (motSecret[i] === lettre) {
      lettresTrouvées[i] = lettre;
      lettreTrouvée = true;
    }
  }
  // Si mauvaise lettre, alors plus d'erreurs et moins de tentatives
  if (!lettreTrouvée) {
    tentativesRestantes--;
    erreurs++;

    const petales = document.querySelectorAll('.petal');
    const indexDepart = (erreurs - 1) * 2;

    // Faire tomber 2 pétales par erreur
    for (let i = indexDepart; i < indexDepart + 2; i++) {
      if (petales[i]) {
        petales[i].classList.add('fall');
      }
    }

    // Animation en cas d'échec
    if (tentativesRestantes <= 0) {
      jeuTerminé = true;
      setTimeout(() => {
        alert("C'est perdu ! Le mot était : " + motSecret);
      }, 500);
    }
  }
}

lettresClavier.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (jeuTerminé) return;
    const lettreCliquée = event.target.textContent;
    verifierLettre(lettreCliquée);
    afficherMot();

    // Animation en cas de victoire
    setTimeout(() => {
      if (!lettresTrouvées.includes('_')) {
        jeuTerminé = true;
        alert('Bravo ! Tu as trouvé le mot !');
      }
    }, 50);

    event.target.style.cursor = 'not-allowed';
    event.target.style.backgroundColor = 'grey';
    event.target.style.color = 'rgb(94, 94, 94)';
    event.target.style.boxShadow = 'none';
    event.target.style.opacity = '0.6';
  });
});

// Bouton Nouveau Mot, réinitialiser le jeu :
const newGame = document.getElementById('new-game');

function redemarrerJeu() {
  motSecret = motsATrouver[Math.floor(Math.random() * motsATrouver.length)];
  lettresTrouvées = Array(motSecret.length).fill('_');
  tentativesRestantes = 6;
  erreurs = 0;
  jeuTerminé = false;
  afficherMot();

  // Réinitialise les pétales
  const petales = document.querySelectorAll('.petal');
  petales.forEach((petale) => {
    petale.classList.remove('fall');
  });

  // Réinitialise le clavier
  lettresClavier.forEach((element) => {
    element.style.cursor = 'pointer';
    element.style.backgroundColor = '';
    element.style.color = 'purple';
    element.style.boxShadow = '2px 2px 2px rgb(167, 90, 167)';
    element.style.opacity = '1';
  });
}

newGame.addEventListener('click', () => {
  redemarrerJeu();
});

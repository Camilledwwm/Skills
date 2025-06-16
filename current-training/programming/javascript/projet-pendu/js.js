// Mots à trouver

let motsATrouver = [
  'ALCHEMISTE',
  'ARCHER',
  'ARMURE',
  'BATAILLE',
  'BOSS',
  'BOUCLIER',
  'CARAVANE',
  'CHAMAN',
  'CHATEAU',
  'CHEVALIER',
  'CLAN',
  'CONJURATION',
  'COURONNE',
  'CREPUSCULE',
  'CRISTAL',
  'DEMON',
  'DESTIN',
  'DIMENSION',
  'DONJON',
  'DRAGON',
  'DRUIDE',
  'ECLAT',
  'ECLIPSE',
  'ECUIER',
  'ELIXIR',
  'ENCHANTEMENT',
  'ENFER',
  'ENIGME',
  'ENVOUTEMENT',
  'EPEE',
  'ETHER',
  'EXPERIENCE',
  'FANTOME',
  'FEE',
  'FLAMME',
  'FORGE',
  'FORTERESSE',
  'GEOLE',
  'GOBELIN',
  'GOULE',
  'GRIFFON',
  'GRIMOIRE',
  'GUERRIER',
  'GUILDE',
  'HALLEBARDE',
  'HEROS',
  'HERITAGE',
  'INVOCATION',
  'INVISIBILITE',
  'KATANA',
  'LABYRINTHE',
  'LEGENDE',
  'LICH',
  'LIVRE',
  'LUNE',
  'MAITRE',
  'MALEDICTION',
  'MANA',
  'MANNE',
  'MARTEAU',
  'MAGICIEN',
  'MEDAILLON',
  'MIRAGE',
  'MONSTRE',
  'MONTURE',
  'MURMURE',
  'MYSTERE',
  'NECROMANCIEN',
  'OBSCURITE',
  'OMBRE',
  'ORACLE',
  'PALADIN',
  'PARCHEMIN',
  'PAPILLON',
  'PHENIX',
  'POISON',
  'PORTAIL',
  'PRESTIGE',
  'PRINCE',
  'PROPHETIE',
  'QUETE',
  'RAGE',
  'REGENERATION',
  'RELIQUE',
  'RITUEL',
  'RUISSEAU',
  'RUNE',
  'SALLE DU TRONE',
  'SANG',
  'SANCTUAIRE',
  'SCEPTRE',
  'SORCELLERIE',
  'SORCIERE',
  'SORTILEGE',
  'TAVERNE',
  'TEMPETE',
  'TROLL',
  'VAMPIRE',
  'VOLCAN'
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
    event.target.style.color = '#5e5e5e';
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
    element.style.boxShadow = '2px 2px 2px #a75aa7';
    element.style.opacity = '1';
  });
}

newGame.addEventListener('click', () => {
  redemarrerJeu();
});

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

lettresClavier.forEach((element) => {
  element.addEventListener('click', (event) => {
    const lettreCliquée = element.textContent;
  });
});

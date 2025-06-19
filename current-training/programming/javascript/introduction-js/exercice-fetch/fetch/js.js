// Littéralement, cette ligne de code se lit de la manière suivante :
// Prends (l'url suivante)
// Puis (réponse)

// Fetch() est une promesse
// (words) peut être n'importe quel nom de variable

// On ne peut pas intégrer plusieurs url à un fetch(), on ne peut associer qu'une url par fetch.

// Le nombre de .then() n'est pas limité à proprement parler mais il veut mieux éviter d'en avoir trop pour la lisibilité du code.

// Ici, littéralement : Prends la catégorie 21 du site trouve-mot.fr et affiche dix mots. Forme d'aléatoire rechargé à chaque refresh.
fetch('https://trouve-mot.fr/api/categorie/21/10')
  .then((response) => response.json())
  .then((words) => console.log(words));

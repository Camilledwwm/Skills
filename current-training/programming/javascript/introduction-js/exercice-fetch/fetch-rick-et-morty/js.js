// A l'aide de l'API Rick et Morty et du fetch, créez un site mono page (One Page Application) qui permettra d'afficher tous les personnages de la série (afficher le nom et son image)

const personnages = document.getElementById('personnages');

for (let page = 1; page <= 42; page++) {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`) // Prends l'url de l'API Rick & Morty sur toutes les pages
    .then((response) => response.json()) // Puis répond
    .then((data) => {
      // Puis pour chaque personnage, affiche
      data.results.forEach((character) => {
        const carte = document.createElement('div');
        carte.className = 'card';
        personnages.appendChild(carte);

        const images = document.createElement('img'); // Crée une div contenant la classe image
        images.className = 'images';
        carte.appendChild(images); // Envoie la nouvelle div dans celle contenant l'id personnages
        images.src = character.image; // Complète la div image par l'image du personnage

        const noms = document.createElement('div');
        noms.className = 'noms';
        carte.appendChild(noms);
        noms.textContent = character.name;
      });
    });
}

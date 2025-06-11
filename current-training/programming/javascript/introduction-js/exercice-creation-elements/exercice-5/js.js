// Ajoutez trois boutons à votre page HTML, chacun ayant un identifiant unique.
// Créez une seule fonction de gestionnaire d'événements JavaScript.
// Lorsque vous cliquez sur l'un des boutons, un message s'affiche dans la console indiquant l'identifiant du bouton sur lequel vous avez cliqué.

const boutonUn = document.getElementById('bouton1');
const boutonDeux = document.getElementById('bouton2');
const boutonTrois = document.getElementById('bouton3');

function déterminerId() {
  boutonUn.addEventListener('click', (event) => {
    console.log(event.target.id);
  });
  boutonDeux.addEventListener('click', (event) => {
    console.log(event.target.id);
  });
  boutonTrois.addEventListener('click', (event) => {
    console.log(event.target.id);
  });
  return;
}

déterminerId();

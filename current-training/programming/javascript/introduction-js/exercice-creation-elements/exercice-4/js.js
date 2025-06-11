// Ajoutez plusieurs éléments de type <li> à une liste <ul> sur votre page HTML.
// Ajoutez un bouton à la page. Lorsque vous cliquez sur ce bouton, le premier élément de la liste doit être supprimé.

const bouton = document.createElement('button');
document.body.appendChild(bouton);

bouton.addEventListener('click', (event) => {
  const liste = document.querySelector('li');
  liste.remove();
});

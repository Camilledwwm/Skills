// Ajoutez un bouton à votre page HTML.
// Lorsque vous cliquez sur ce bouton, un nouvel élément de type <li> doit être créé et ajouté à une liste <ul> existante sur la page avec le texte "Nouvel élément"

const bouton = document.createElement('button');
document.body.appendChild(bouton);

bouton.addEventListener('click', (event) => {
  const nav = document.querySelector('ul');
  const liste = document.createElement('li');
  nav.appendChild(liste);
  liste.textContent = 'Nouvel élément';
});

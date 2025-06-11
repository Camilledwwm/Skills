// Ajoutez un bouton à votre page HTML et un paragraphe avec du texte.
// Lorsque vous cliquez sur le bouton, changez la couleur du texte du paragraphe en rouge.

const bouton = document.querySelector('button');
const p = document.querySelector('p');

bouton.addEventListener('click', (event) => {
  p.style.color = 'red';
});

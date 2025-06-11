// Ajoutez un bouton à votre page HTML et un paragraphe vide.
// Lorsque vous cliquez sur le bouton, le texte "Hello, world!" doit être ajouté au paragraphe.

const bouton = document.querySelector('button');
const p = document.querySelector('p');

bouton.addEventListener('click', (event) => {
  p.textContent = 'Hello word !';
});

// EVENT LISTENER
// Passer un carré rose à bleu au click :

const carre = document.getElementById('carre');

function changeColor() {
  carre.addEventListener('click', () => {
    carre.style.backgroundColor = 'blue';
  });
}

changeColor('carre');

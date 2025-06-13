// A l'aide de toggle(), ajoutez ou supprimez une classe qui permettra l'affichage ou non d'un menu burger :

const burgerIcon = document.querySelector('.burger-icon');
const menu = document.getElementById('menu');

burgerIcon.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

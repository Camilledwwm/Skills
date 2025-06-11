// A partir de ce morceau de code, construiser un code js qui permettra à une boule de suivre le curseur de votre souris :

const cercle = document.querySelector('.cercle');

document.addEventListener('mousemove', (event) => {
  cercle.style.transform = `translate(${event.clientX - 50}px, ${
    event.clientY - 50
  }px)`;
  cercle.style.transition = '0.15s';
});

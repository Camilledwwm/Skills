const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = new FormData(form);

  console.log(data.get('lastName'));
  console.log(data.get('firstName'));
});

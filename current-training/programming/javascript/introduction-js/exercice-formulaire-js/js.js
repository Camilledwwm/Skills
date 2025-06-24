const form = document.getElementById('mockForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  fetch('https://685a973e9f6ef96111570661.mockapi.io/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prenom: firstName,
      nom: lastName
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
    });
});

// forEach : Affiche chaque nombre du tableau avec ce message :
// "Le nombre est : X"

const nombres = [1, 5, 12, 8, 130, 44];

nombres.forEach((element) => {
  console.log('Le nombre est X');
});

// filter : Crée un nouveau tableau grandsNombres qui contient uniquement les nombres supérieurs à 10.

const grandsNombres = nombres.filter((nombre) => nombre > 10);
console.log(grandsNombres);

// map : Crée un nouveau tableau doubles qui contient le double de chaque nombre du tableau de base.

const doubles = nombres.map((nombre) => nombre * 2);
console.log(doubles);

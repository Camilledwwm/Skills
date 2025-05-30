// Affichez les nombres pairs de 1 à 20 en utilisant une boucle for :

for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}

// ou

let nombresPairs = '';

for (let i = 2; i <= 20; i += 2) {
  nombresPairs = nombresPairs + i;
}

console.log(nombresPairs);

// Correction :

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

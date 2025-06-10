// Écrivez une fonction qui prend en entrée un mois (1 pour janvier, 2 pour février, etc.) et retourne le nombre de jours dans ce mois. Assurez-vous de gérer correctement le cas de février pour les années bissextiles (29 jours) et non bissextiles (28 jours).

let demo = new Date();

function moisATrouver(mois) {
  switch (mois) {
    case 1:
      console.log(`Le mois de Janvier comporte 31 jours`);
      break;

    case 2:
      if (demo.getFullYear() % 4 == 0) {
        console.log(`Février compte 29 jours`);
      } else {
        console.log(`Février compte 28 jours`);
      }
      break;

    case 3:
      console.log(`Le mois de Mars comporte 31 jours`);
      break;

    case 4:
      console.log(`Le mois d'Avril comporte 30 jours`);
      break;

    case 5:
      console.log(`Le mois de Mai comporte 31 jours`);
      break;

    case 6:
      console.log(`Le mois de Juin comporte 30 jours`);
      break;

    case 7:
      console.log(`Le mois de Juillet comporte 31 jours`);
      break;

    case 8:
      console.log(`Le mois d'Août comporte 31 jours`);
      break;

    case 9:
      console.log(`Le mois de Septembre comporte 30 jours`);
      break;

    case 10:
      console.log(`Le mois d'Octobre comporte 31 jours`);
      break;

    case 11:
      console.log(`Le mois de Novembre comporte 30 jours`);
      break;

    case 12:
      console.log(`Le mois de Décembre comporte 31 jours`);
      break;

    default:
      break;
  }
  return;
}

moisATrouver(12);

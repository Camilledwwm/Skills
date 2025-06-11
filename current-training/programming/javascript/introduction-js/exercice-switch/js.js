// Écrivez une fonction qui prend en entrée un mois (1 pour janvier, 2 pour février, etc.) et retourne le nombre de jours dans ce mois. Assurez-vous de gérer correctement le cas de février pour les années bissextiles (29 jours) et non bissextiles (28 jours).

let demo = new Date();

function moisATrouver(mois) {
  switch (mois) {
    case 1:
      console.log(`Le mois de Janvier comporte 31 jours`);
      return 31;

    case 2:
      if (demo.getFullYear() % 4 == 0) {
        console.log(`Février compte 29 jours`);
        return 29;
      } else {
        console.log(`Février compte 28 jours`);
        return 28;
      }

    case 3:
      console.log(`Le mois de Mars comporte 31 jours`);
      return 31;

    case 4:
      console.log(`Le mois d'Avril comporte 30 jours`);
      return 30;

    case 5:
      console.log(`Le mois de Mai comporte 31 jours`);
      return 31;

    case 6:
      console.log(`Le mois de Juin comporte 30 jours`);
      return 30;

    case 7:
      console.log(`Le mois de Juillet comporte 31 jours`);
      return 31;

    case 8:
      console.log(`Le mois d'Août comporte 31 jours`);
      return 31;

    case 9:
      console.log(`Le mois de Septembre comporte 30 jours`);
      return 30;

    case 10:
      console.log(`Le mois d'Octobre comporte 31 jours`);
      return 31;

    case 11:
      console.log(`Le mois de Novembre comporte 30 jours`);
      return 30;

    case 12:
      console.log(`Le mois de Décembre comporte 31 jours`);
      return 31;

    default:
      console.log(`Le mois sélectionné ne correspond pas`);
      break;
  }
}

moisATrouver(12);

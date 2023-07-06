function jourtravaille(date) {
    var joursFeries = [
        new Date(2020, 0, 1), // Jour de l'an
        new Date(2020, 3, 13), // Lundi de Pâques
        new Date(2020, 4, 1), // Fête du Travail
        new Date(2020, 4, 8), // Victoire des Alliés
        new Date(2020, 4, 21), // Ascension
        new Date(2020, 5, 1), // Lundi de Pentecôte
        new Date(2020, 6, 14), // Fête Nationale
        new Date(2020, 7, 15), // Assomption
        new Date(2020, 10, 1), // Toussaint
        new Date(2020, 10, 11), // Armistice
        new Date(2020, 11, 25) // Noël
    ];

    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var annee = date.getFullYear();

    for (var i = 0; i < joursFeries.length; i++) {
        if (date.getTime() === joursFeries[i].getTime()) {
            console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié");
            return;
        }
    }

    if (date.getDay() === 6 || date.getDay() === 0) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end");
    } else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé");
    }
}

jourtravaille(new Date(2020, 4, 1)); // Le 1/5/2020 est un jour férié
jourtravaille(new Date(2020, 4, 2)); // Non, le 2/5/2020 est un week-end
jourtravaille(new Date(2020, 4, 4)); // Oui, le 4/5/2020 est un jour travaillé

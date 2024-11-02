/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    // Tableau contenant le nombre maximum de jours par mois
    const joursParMois = [
        31, // Janvier
        isBissextile(annee) ? 29 : 28, // Février
        31, // Mars
        30, // Avril
        31, // Mai
        30, // Juin
        31, // Juillet
        31, // Août
        30, // Septembre
        31, // Octobre
        30, // Novembre
        31  // Décembre
    ];

    // Vérifie si l'année, le mois et le jour sont valides
    return annee > 0 && mois >= 1 && mois <= 12 && jour >= 1 && jour <= joursParMois[mois - 1];
}

// Exemple d'utilisation
const jour = 29; // Modifier pour tester d'autres dates
const mois = 2;
const annee = 2024;

// Vérifie si la date est valide et affiche un message dans la console
if (isValid(jour, mois, annee)) {
    console.log(`La date ${jour}/${mois}/${annee} est valide.`);
} else {
    console.log(`La date ${jour}/${mois}/${annee} n'est pas valide.`);
}


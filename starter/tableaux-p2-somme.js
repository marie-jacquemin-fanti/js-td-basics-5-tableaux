/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10.
2. Affichez le tableau (précédé du texte : "Voici mon tableau de nombres :").
3. Calculez puis affichez la somme des valeurs du tableau 'nombres' :
   - Utilisez la méthode 'forEach()' pour afficher la somme des nombres dans le tableau (précédée du texte : "La somme des nombres de mon tableau est …").
   - Utilisez une boucle 'for/of' pour faire la même chose.
*/

/*const nombres=[11, 3, 7, 2, 9, 10];
console.log("Voici mon tableau de nombres : " + nombres);

console.log("La somme des nombres de mon tableau est …");
let somme1=0;
nombres.forEach(function (nombre){
    somme1 += nombre;
});
console.log("La somme des nombres de mon tableau est : " + somme1);


let somme2=0;
for (const nombre of nombres){                     /!*l'élément que l'on veut et de ou il vient*!/
    somme2 += nombre;                             /!*on par de 0 on ajoute nombre qui donne nouveau nombre et ainsi de suite*!/
}
console.log("La somme des nombres de mon tableau est : " + somme2);*/









/*
Version alternative (avec BONUS) :
1. Initialisez
   - une variable 'message' à une chaîne vide ;
   - une variable 'somme' à 0.
2. Parcourez votre tableau de nombres à l'aide d'une boucle 'for' pour construire le message : "… + … + … = ".
3. Parcourez votre tableau de nombres à l'aide d'une boucle 'for/of' pour calculer la somme des valeurs du tableau.
4. Affichez le message final : "… + … + … = …".
*/

const nombres=[11, 3, 7, 2, 9, 10];

let message="";
let somme=0;

for(let i =0; i<nombres.length; i++){
    message += nombres[i];                                        /*Ajouter le nombre courant au message*/
    somme += nombres[i];                                           /*Calculer la somme. prend somme ajoute nombre puis devient le nouveau nombre*/
    if (i < nombres.length - 1) {                              /*même chose que n-1, la dernier position dans le tableau -1. Temps que ce n'est pas le dernier*/
        message += " + ";                                    /*Ajoute un séparateur temps que la condition est respecter*/
    }
}
console.log("Le message final : " + message);



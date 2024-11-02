/*
TABLEAUX - PRÉPA 1 : Les trois mousquetaires
1. Créez un tableau nommé 'mousquetaires' contenant les noms des trois mousquetaires, Athos, Porthos et Aramis.
2. Utilisez une boucle 'for' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Voici les Trois Mousquetaires :".
3. Ajoutez au tableau le mousquetaire d'Artagnan.
4. Utilisez la méthode 'forEach()' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Ils sont quatre à présent :".
5. Supprimez Aramis du tableau.
6. Utilisez une boucle 'for-of' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Le pauvre Aramis est mort…".
*/

const mousquetaires = ["Athos", "Porthos", "Aramis"];
for (let i= 0; i<mousquetaires.length; i++){                   /*na pas mettre de = sinon il vas au dela de ce qu'il peut*/
    /*console.log(mousquetaires[i]);*/
}
console.log("Ils sont quatre à présent :");
mousquetaires.push("Artagnan");
mousquetaires.forEach(function (mousquetaire){
    console.log(mousquetaire);
});

/*revoir*/
const indexAramis = mousquetaires.indexOf("Aramis");                /*indexOf permet de donnée l'index du tableau de ce qui est entre ""*/
if (indexAramis !== -1) {                /* Si "Aramis" n'est pas = à -1 c'est qu'il est dans le tableau. On mes -1 car c'est une valeur qui n'existe pas dans les tableaux*/
    mousquetaires.splice(indexAramis, 1);         /* .splice est fait pour supprimer ou ajouter. (indexAramis) c'est l'élément que l'on veut suprimer et le (1) qui suis le nombre que l'on veut supprimer*/
}

console.log("Le pauvre Aramis est mort…");
for (const mousquetaire of mousquetaires) {   /*boucle const nom (le tableau sur le quelle on veut faire ça)*/
    console.log(mousquetaire);
}
/*****************************
* 023 - TABLEAUX - CODING CHALLENGE 3
*/
// 1. Créez un tableau appelé 'factures' contenant les trois montants des factures.
// 2. Créez une fonction appelée 'calculateurPourboire' prenant une facture comme argument.
// 3. À l'intérieur de la fonction 'calculateurPourboire', utilisez des instructions conditionnelles pour calculer le pourboire en fonction du montant de la facture.
//    - Si la facture est inférieure à $50, calculez 20% de la facture.
//    - Si la facture est entre $50 et $200, calculez 15% de la facture.
//    - Si la facture est supérieure à $200, calculez 10% de la facture.
// 4. La fonction 'calculateurPourboire' devrait renvoyer le montant du pourboire.
// 5. Créez un tableau vide appelé 'pourboires'.
// 6. Créez un autre tableau vide appelé 'montantsFinaux'.
// 7. Utilisez la fonction 'calculateurPourboire' pour calculer les pourboires pour chaque facture du tableau 'factures' et ajoutez-les au tableau 'pourboires'.
// 8. Pour chaque facture, calculez le montant final payé en ajoutant le montant de la facture au montant du pourboire, puis ajoutez-le au tableau 'montantsFinaux'.
// 9. Affichez les tableaux 'pourboires' et 'montantsFinaux' dans la console pour voir les résultats.

const factures=[150,200,50];
function calculateurPourboire(facture) {
    let pourboire;
    if (facture < 50) {
        pourboire = facture * 0.20;
    } else if (facture >= 50 && facture <= 200) {
        pourboire = facture * 0.15;
    } else {
        pourboire = facture * 0.10;
    }
    return pourboire;
}
const pourboires=[];
const montantsFinaux=[];

for (let i = 0; i < factures.length; i++) {
    const pourboire = calculateurPourboire(factures[i]);
    pourboires.push(pourboire);
    const montantFinal = factures[i] + pourboire;
    montantsFinaux.push(montantFinal);
}
console.log("Pourboires : ", pourboires);
console.log("Montants finaux : ", montantsFinaux);
/*
1. Ligne 8, comment je fait pour calculer le % d'une somme que je ne connais pas ?
*/
console.log("01 - Functions");

var nb1 = 10, nb2 = 20;

function additionner (nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner(nb1, nb2);

console.log("resultat1 =", resultat1);

var somme = additionner;

var resultat2 = somme(nb1, nb2);

console.log("resultat2 =", resultat2);
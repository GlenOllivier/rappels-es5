var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function (ville) {
    console.log(ville);
});

var lettreADansToutesLesVilles = villes.every(function(ville) {
    return ville.indexOf("a") >= 0;
});
console.log(lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(function(ville) {
    return ville.indexOf("-") >= 0;
});
console.log(auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(function(ville){
    return ville.indexOf(" ") === -1 && ville.indexOf("-") === -1;
});
console.log(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function(ville){
    return ville.lastIndexOf("s") === ville.length - 1 && ville.length !== 0;
}).map(function(ville) {
    return ville.toUpperCase();
});
console.log(villesMajusculeSeTerminantParS);
function Personne(prenom, nom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function() {
        return this.prenom + this.nom + this.pseudo;
    }
}

function afficherPersonne (personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

console.log(jules.age);

Personne.prototype.age = null;
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function() {
    return this.nom.charAt(0) + this.prenom.charAt(0);
}
console.log(jules.getInitiales());

robert = {
    prenom : "Robert",
    nom : "LEPREFET",
    pseudo : "robert77",
    getNomComplet : function() {
        return this.prenom + this.nom + this.pseudo;
    }
};

afficherPersonne(robert);

function Client(prenom, nom, pseudo, numeroClient) {
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = function() {
        return this.numeroClient + this.nom + this.prenom;
    }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01");
afficherPersonne(steve);

console.log(steve.numeroClient);
console.log(steve.getInfos());

//**ici je vais configurer la voiture 
// Définition de la classe Voiture
class voiture {
  // constructeur = propriétés
  constructor(nbroue, typevolant, nbpedale,typevitesse,coleur,nombreporte,nbsiege) {
    this.nombreroue= nbroue;
    this.volant= typevolant;
    this.nombrepedale= nbpedale;
    this.coleur= coleur;
    this.nombreporte = nombreporte;
    this.nbsiege
    }

}

let voiture1 = new voiture(4,"roue",3,"manuel","bleu",5,5);

//**ici j'affiche ma methode */
demarrer(){
console.log("VRUUUUUUUHM!!!!");
console.log("lavoiureademarer");

}

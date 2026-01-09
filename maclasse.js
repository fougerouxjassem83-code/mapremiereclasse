//**j'apprends a créer des classes JavaScript */
//*
//**
//*coment déclarer une classe! 
//*pour déclarer
// *je commence par le mot-clé classe */
/**je donne un nom a la clas
 * 1.je commance par le mot clée class
 * 2.je donne un nom a la class
 * le nom doit commencer par une majuscule
 * 3.je definie les proprieté et les methodes de la class
 * 
 * 
 //ma classe personne*/
//*les propriété d'une personne nom,village ,annédenaissance

 class Personne { // classe Personne (majuscule recommandée)

    // constructeur de la classe
    constructor(nomPersonne, villagePersonne, anneeNaissance) {
        this.nom = nomPersonne;
        this.village = villagePersonne;
        this.annee = anneeNaissance;
    }

    // méthode bienvenue
    bienvenue() {
        alert("Bienvenue " + this.nom);
    }

    //**ici je vais calculer l'Age */
    calculAge() {
        let anneActuelle = new Date().getFullYear;
        return anneActuelle - this.annee;
    }
    
    age() {
        alert("vous avez" + personne1.calculAge() + "ans");


        }

    
    }

    





// création d'un objet à partir de la classe Personne
let personne1 = new Personne("Ali", "Combani", 1999);

// affichage dans la console
console.log("personne1", personne1);

// appel de la méthode
personne1.bienvenue();

//**ici je vais cree un deuxieme objet  personne2 */


let personne2 = new Personne("fatima", "chiconi", 1999);
console.log("ya fatima",personne2);








//** ici jai mis une methode */

    

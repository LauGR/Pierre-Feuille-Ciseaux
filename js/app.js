var joueur = prompt("quelle est votre nom ?");
var ordinateur = ["feuille", "pierre", "ciseaux"];
var choixutilisateur = prompt("choississez entre pierre,feuille ou ciseaux");
var choixordinateur = Math.floor(Math.random() * ordinateur.length);
var gagnant ="";

var comparer = function compare(choixordinateur, choixutilisateur) {
    if (choixutilisateur === "pierre" || choixutilisateur === "feuille" || choixutilisateur === "ciseaux") {
        if (choixordinateur === "pierre" || choixordinateur === "feuille" || choixordinateur === "ciseaux") {
            if (choixordinateur == choixutilisateur) {
                alert("Egalité");
            } else if (choixordinateur === "pierre" && choixutilisateur === "feuille") {
                alert(joueur + "vous avez perdu");
            } else if (choixordinateur === "pierre" && choixutilisateur === "ciseaux") {
                alert(joueur + "vous avez gagné");
            } else if (choixordinateur === "feuille" && choixutilisateur === "ciseaux") {
                alert(joueur + "vous avez perdu");
            } else if (choixordinateur === "feuille" && choixutilisateur === "pierre") {
                alert(joueur + "vous avez gagné");
            } else if (choixordinateur === "ciseaux" && choixutilisateur === "pierre") {
                alert(joueur + "vous avez perdu");
            } else if (choixordinateur === "ciseaux" && choixutilisateur === "feuille") {
                alert(joueur + "vous avez gagné");
            } else {
                
            }
        }

    }
}

alert(gagnant);



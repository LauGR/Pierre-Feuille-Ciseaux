
var a = "pierre";
var b = "feuille";
var c = "ciseaux";

var joueur = prompt("Quelle est votre nom ?");
var choixUtilisateur = prompt("Votre choix est " + a + ',' + b + ',' + c + '?');
var choixOrdi = Math.floor(Math.random() * 3);
var scortU =0;
var scortO = 0;





switch (choixOrdi) {
    case 0:
        alert('pierre');
        break;
    case 1:
        alert('feuille');
        break;
    case 2:
        alert('ciseaux');
        break;
}

function comparer(choixOrdi, choixUtilisateur) {
 
       if(choixUtilisateur === choixOrdi) {
           alert("égalité.");
       }
       else if((choixUtilisateur === a && choixOrdi === c) || (choixUtilisateur === b && choixOrdi === a) || (choixUtilisateur === c && choixOrdi === b)) {
           alert("Vous avez gagné");
           scortU++;
           
       }
       else if((choixUtilisateur === b && choixOrdi === c) || (choixUtilisateur === a && choixOrdi === b) || (choixUtilisateur === c && choixOrdi === a)) {
           alert("Vous avez perdu");
           scortO++;
       }
 
   }




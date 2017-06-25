var a = "pierre";
var b = "feuille";
var c = "ciseaux";
var joueur = prompt("Quelle est votre nom ?");
var choixjoueur = prompt("Votre choix est " + a + ',' + b + ',' + c + '?');
var choixordinateur = Math.floor(Math.random() * 3);




switch (choixordinateur) {
    case 0:
        alert('pierre');
        break;
    case 1:
        alert('feuille');
        break;
    case 2:
        alert('ciseaux');
        break;
    default:
        alert('No choice');
}

if (choixjouer === a && choixordinateur === b) {
    alert("C'est perdu");
} else if (choixjouer === a && choixordinateur === c) {
    alert("C'est gagné");
} else if (choixjoueur === b && choixordinateur === a) {
    alert("C'est gagné")
} else if (choixjouer === b && choixordinateur === c) {
    alert("C'est perdu");
} else if (choixjoueur === c && choixordinateur === a) {
    alert("C'est perdu");
} else if (choixjoueur === c && choixordinateur === b) {
    alert("C'est gagné");
} else if (choixjoueur ===  a || choixjoueur === b || choixjoueur === c && choixjoueur === choixordinateur) {
    alert("Egalité");
} else {
    
}

confirm("Voulez-vous rejouer ?");
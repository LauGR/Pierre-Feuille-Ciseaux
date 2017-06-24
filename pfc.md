.l'utilisateur doit choisir entre pierre,feuille et ciseau
. l'ordinateur doit choisir entre pierre , feuille et ciseau
. Si l'ordinateur meilleur réponse que l'utilisateur , l'ordi gagne sinon c'est l'utilisateur

DEBUT
joueur <- Entrer ("Votre nom")
choixjoueur <- Entrer("entre pierre , feuille ou ciseaux")  
choixordinateur <- choix aléatoire

SI choixutilsateur = pierre ou choixutilisateur = ciseaux ou choixutilisateur =  feuille
    SI choixordinateur = pierre ou choixordinateur = ciseaux ou choixordinateur = feuille 
        SI choixjoueur = choix ordinateur ALORS
            Affiche "égalité"
                SINON SI choixjoueur = pierre ET choixordinateur = feuille ALORS
                    Affiche "joueur perd"
                SINON SI choixjoueur = pierre ET choixordinateur = ciseaux ALORS
                    Affiche "joueur gagne"
                SINON SI choixjoueur = ciseaux ET choixordinateur = pierre ALORS
                    Affiche "Ordinateur gagne"
                SINON SI choixjoueur = ciseaux ET choixordinateur = feuille ALORS
                    Affiche "joueur gagne"
                SINON SI choixjoueur = feuille ET choixordinateur = pierre ALORS
                    Affiche "joueur gagne"
                SINON SI choixjoueur = feuille ET choixordinateur = ciseaux ALORS
                    Affiche "ordinateur gagne"
        SINON rien
        FINSI
    FINSI
FINSI
Afficher "le nom du gagnant"
Afficher "Voulez-vous rejouer ?" 
SI Oui relancer le jeu 
SINON Fin du programme


FIN




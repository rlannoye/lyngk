"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};
Lyngk.Players = {Joueur1:0,Joueur2:1};

Lyngk.Engine = function () {

    var tabIntersection=[];
    var joueurCourant;

    this.gettabIntersection=function(){
        return tabIntersection;
    }

    this.getJoueurCourant=function(){
        return joueurCourant;
    }

    this.placerPion=function(inter,piece){
        inter.setListPiece(piece);
        if(inter.getListPiece().length==1){
            inter.setEtat("ONE_PIECE");
        }
        if(inter.getListPiece().length>1 && inter.getListPiece().length<5){
            inter.setEtat("STACK");
        }
        if(inter.getListPiece().length>=5){
            inter.setEtat("FULL_STACK");
        }
    }

    this.debutjeu=function() {
        var tabcouleur = ["BLACK", "IVORY", "BLUE", "RED", "GREEN", "WHITE", "WHITE", "WHITE"];
        var lettres = "ABCDEFGHI";
        var compteurcouleur=[0,0,0,0,0,0];
        var aleatoire;

        joueurCourant=Lyngk.Players.Joueur1;

        for (var i = 0; i < lettres.length; i++) {
            for (var j = 1; j <= 9; j++) {
                var C = new Lyngk.Coordinates(lettres[i], j);
                if (C.dansTableau()) {
                    do {
                        aleatoire = Math.floor(Math.random() * 6);
                    } while ((compteurcouleur[aleatoire]>=8 && aleatoire !== 5) || (aleatoire===5 && compteurcouleur[aleatoire] >= 3));

                    //console.log(lettres[i]+" "+j+" "+aleatoire);

                    compteurcouleur[aleatoire]++;
                    tabIntersection.push(new Lyngk.Intersection(C));
                    var tempPiece = new Lyngk.Piece(tabcouleur[aleatoire]);
                    this.placerPion(tabIntersection[tabIntersection.length - 1], tempPiece);
                 }
            }
        }
    }

     this.getIntersection=function(c){
        var i = 0;
        var found = false;

        while (!found && i < tabIntersection.length) {
            var coordinates = tabIntersection[i].getCoords();

            if (coordinates.getLigne() === c.getLigne() && coordinates.getColonne() === c.getColonne()) {
                found = true;
            } else {
                ++i;
            }
        }
        if (i < tabIntersection.length) {
            return tabIntersection[i];
        } else {
            return null;
        }
    }

    this.deplacement=function(c1,c2){
        var source = this.getIntersection(c1);
        var destination = this.getIntersection(c2);
        //if(deplacementsPossibles(c1,c2)) {
            destination.putPiece(source);
            source.removePiece();
       // }


    }
/*
    this.deplacementsPossibles(c1,c2){
        var possible=false;
        //deplacement vers le haut ou vers le bas sur la meme colonne
        if(c1.getColonne().charCodeAt(0) === c2.getColonne().charCodeAt(0)){
            var soustractionLigne = c1.getLigne() - c2.getLigne();
            //si la soustraction est egale a 1 (vers le haut) ou -1 (vers le bas)
            if(soustractionLigne === 1 || soustractionLigne === -1){
                possible = true;
            }
        }
        //deplacement vers la gauche sur la meme ligne ou celle d en dessous
        else if(c1.getColonne().charCodeAt(0)< c2.getColonne().charCodeAt(0)){
            var soustractionLigne = c1.getLigne() - c2.getLigne();
            //si la soustraction est egale a 0 (meme ligne) ou -1 (vers le bas)
            if(soustractionLigne === 0 || soustractionLigne === -1){
                possible = true;
            }
        }
        //deplacement vers la droite
        else if(c1.getColonne().charCodeAt(0) > c2.getColonne().charCodeAt(0)){
            var soustractionLigne = c1.getLigne() - c2.getLigne();
            //si la soustraction est egale a 0(meme ligne) ou 1(vers le haut)
            if(soustractionLigne === 1 || soustractionLigne === 0){
                possible = true;
            }
        }

        var soustractionColonne = (c1.getColonne().charCodeAt(0))-(c2.getColonne().charCodeAt(0));

        //si va au-dela de la premiere pile rencontree,alors faux (histoire 19)
        if(soustractionColonne > 1 || soustractionColonne < -1){
            possible=false;
        }

        //hauteur maximale de la pile est egale a 5 (histoire 20), 3 = Lyngk.State.FULL_STACK
        if(tabIntersection[c1].getEtat() === 3) {
            possible = false;
        }

        //une piece seule ne peut pas etre deplacee sur une pile (histoire 21), 1=Lyngk.State.ONE_PIECE,2=Lyngk.State.STACK
        if(tabIntersection[c1].getEtat() === 1 && tabIntersection[c2].getEtat() === 2){
            possible=false;
        }

        //une pile ne peut pas etre deplacee sur une pile de taille superieure (histoire 22)
        if(tabIntersection[c1].getTaillePile() < tabIntersection[c2].getTaillePile()){
            possible=false;
        }

        //on parcourt toutes les pieces de l alignement
        for(var i=0; i<tabIntersection[c1].getListPiece().length;i++){
            //faux si 2 pieces ont la meme couleur et que ca n est pas la blanche
            if((tabIntersection[c1].getCouleur()===tabIntersection[c2].getCouleur()) && getCouleur() !=5){
                possible=false;
            }
        }
    }
*/

};

"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var tabIntersection=[];

    this.gettabIntersection=function(){
        return tabIntersection;
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
        destination.putPiece(source);
        source.removePiece();

    }

};

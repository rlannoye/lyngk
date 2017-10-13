"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {
    this.placerPion=function(inter,piece){
        inter.setListPiece(piece);
        if(inter.getListPiece().length==1){
            inter.setEtat("ONE_PIECE");
        }
        if(inter.getListPiece().length>1 && length<5){
            inter.setEtat("STACK");
        }
        if(inter.getListPiece().length>=5){
            inter.setEtat("FULL_STACK");
        }
    }

    this.debutjeu=function() {
        var tabcouleur = ["BLACK", "IVORY", "BLUE", "RED", "GREEN", "WHITE", "WHITE", "WHITE"];
        var tabIntersection = [];
        var tabPiece = [];
        var lettres = "ABCDEFGHI";
        for (var i = 0; i < lettres.length; i++) {
            for (var j = 1; j <= 9; j++) {
                var C = new Lyngk.Coordinates(lettres[i], j);
                if (C.dansTableau()) {
                    tabIntersection.push(new Lyngk.Intersection(C, 'WHITE'));
                    for (var k = 0; k < tabcouleur.length; k++) {
                        tabPiece.push(new Lyngk.Piece(C, tabcouleur[k]));
                        this.placerPion(tabIntersection[tabIntersection.length - 1], tabPiece[tabPiece.length - 1]);
                    }
                 }
            }
        }
        return tabIntersection;
    }
};

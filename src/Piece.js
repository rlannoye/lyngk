"use strict";

Lyngk.Piece = function (color) {
    var couleur=Lyngk.Color[color];

    this.getCouleur=function(){
        return couleur;
    }

    this.setCouleur=function(nouvellecouleur){
        couleur=Lyngk.Color[nouvellecouleur];
    }
};

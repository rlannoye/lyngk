"use strict";

Lyngk.Piece = function (c,color) {
    var coord=c;
    var couleur=Lyngk.Color[color];

    this.getCouleur=function(){
        return couleur;
    }

    this.setCouleur=function(nouvellecouleur){
        couleur=Lyngk.Color[nouvellecouleur];
    }
};

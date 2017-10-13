"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection=function(c,color){
    var coords=c;
    var etat=Lyngk.State.VACANT;
    var listePiece=[];
    var couleur=Lyngk.Color.VACANT;

    this.getEtat=function(){
        return etat;
    };

    this.setEtat=function(etat_p){
        etat=Lyngk.State[etat_p];
    };

    this.getListPiece=function(){
        return listePiece;
    };

    this.setListPiece=function(nouvellepiece){
        listePiece.push(nouvellepiece);
    };



};

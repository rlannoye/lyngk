"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection=function(c){
    var coords=c;
    var etat=Lyngk.State.VACANT;
    var listePiece=[];

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

    this.getCouleur=function(){
        return listePiece[listePiece.length-1].getCouleur();
    }

    this.getCoords=function(){
        return coords;
    }

    this.putPiece=function(s){
        listePiece.push(s.getListPiece()[0]);
    }

    this.removePiece=function(){
        listePiece=[];
    }

    this.getTaillePile=function(){
        return listePiece.length;
    }

};

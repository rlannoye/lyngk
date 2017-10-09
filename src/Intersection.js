"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection=function(){
    var etat=Lyngk.State.VACANT;
    var color;

    this.getEtat=function(){
        return etat;
    }

    this.getColor=function(){
        return color;
    }

    this.pion=function(c){
        etat=Lyngk.State.ONE_PIECE;
        color=c;
    }


};

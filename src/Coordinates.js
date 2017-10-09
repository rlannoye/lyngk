"use strict";

Lyngk.Coordinates = function (c, l) {
    var colonne=c;
    var ligne=l;

    this.est_valid=function(){
        if(colonne==="A" && ligne===1){
            return false;
        }
    }

    this.dansTableau=function(){
        var tabval={
            "A" : [3 ,3],
            "B" : [2 ,5],
            "C" : [1 ,7],
            "D" : [2 ,7],
            "E" : [2 ,8],
            "F" : [3 ,8],
            "G" : [3 ,9],
            "H" : [5 ,8],
            "I" : [7 ,7]
        };
        if(l>=tabval[c][0] && l<=tabval[c][1]){
            return true;
        }
        return false;
    }
    this.toString=function(){
        if(this.est_valid()==false)
            return "invalid";
        else
            return c+l;
    }

    this.getLigne=function(){
        return ligne;
    }

    this.getColonne=function(){
        return colonne;
    }

    this.clone=function(){
        return new Lyngk.Coordinates(c,l)
    }

    
};


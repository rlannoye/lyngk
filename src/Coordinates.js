"use strict";

Lyngk.Coordinates = function (c, l) {
    var colonne=c;
    var ligne=l;

    this.est_valid=function(){
        if(colonne==="A" && ligne===1){
            return false;
        }
    }

};

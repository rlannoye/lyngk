"use strict";

Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};
Lyngk.Players = {Player1:0,Player2:1};

Lyngk.Engine = function () {

    var tabIntersection=[];
    var currentPlayer;

    this.getTabIntersection = function () {
        return tabIntersection;
    };

    this.getCurrentPlayer = function () {
        return currentPlayer;
    };

    this.place = function (inter, piece) {
        inter.setListPiece(piece);
        if(inter.getListPiece().length === 1){
            inter.setState("ONE_PIECE");
        }
        if(inter.getListPiece().length>1 && inter.getListPiece().length<5){
            inter.setState("STACK");
        }
        if(inter.getListPiece().length>=5){
            inter.setState("FULL_STACK");
        }
    };

    this.beginGame = function () {
        var tabColor = ["BLACK", "IVORY", "BLUE", "RED", "GREEN",
            "WHITE", "WHITE", "WHITE"];
        var letter = "ABCDEFGHI";
        var countColor=[0,0,0,0,0,0];
        var random;
        currentPlayer=Lyngk.Players.Player1;
        for (var i = 0; i < letter.length; i++) {
            for (var j = 1; j <= 9; j++) {
                var C = new Lyngk.Coordinates(letter[i], j);
                if (C.inTab()) {
                    do {
                        random = Math.floor(Math.random() * 6);
                    } while ((countColor[random]>=8 && random !== 5) ||
                    (random===5 && countColor[random] >= 3));
                    countColor[random]++;
                    tabIntersection.push(new Lyngk.Intersection(C));
                    var tempPiece = new Lyngk.Piece(tabColor[random]);
                    this.place(tabIntersection[tabIntersection.length - 1], tempPiece);
                 }
            }
        }
    };

    this.getIntersection = function (c) {
        var i = 0;
        var found = false;
        while (!found && i < tabIntersection.length) {
            var coordinates = tabIntersection[i].getCoordinates();
            if (coordinates.getLine() === c.getLine() && coordinates.getColumn() === c.getColumn()) {
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
    };

    this.move = function (c1, c2) {
        var source = this.getIntersection(c1);
        var destination = this.getIntersection(c2);
        destination.putPiece(source);
        source.removePiece();
    };

};

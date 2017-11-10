"use strict";

Lyngk.Piece = function (color) {
    var theColor = Lyngk.Color[color];

    this.getColor = function () {
        return theColor;
    };

    this.setColor = function (newColor) {
        theColor = Lyngk.Color[newColor];
    };
};

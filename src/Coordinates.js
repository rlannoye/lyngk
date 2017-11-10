"use strict";

Lyngk.Coordinates = function (c, l) {
    var column = c;
    var line = l;

    this.isValid = function () {
        if (column === "A" && line === 1) {
            return false;
        }
    };

    this.inTab = function () {
        var tabVal = {"A": [3, 3], "B": [2, 5],
            "C": [1, 7], "D": [2, 7], "E": [2, 8],
            "F": [3, 8], "G": [3, 9], "H": [5, 8], "I": [7, 7]};
        if (l >= tabVal[c][0] && l <= tabVal[c][1]) {
            return true;
        }
    };

    this.toString = function () {
        if (this.isValid() === false) {
            return "invalid";
        } else {
            return c + l;
        }
    };

    this.getLine = function () {
        return line;
    };

    this.getColumn = function () {
        return column;
    };

    this.clone = function () {
        return new Lyngk.Coordinates(c, l);
    };

    this.hash = function () {
        return (column.charCodeAt(0) - 64) * 9 + line;
    };

};


"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c) {
    var coordinates = c;
    var state = Lyngk.State.VACANT;
    var listOfPieces = [];

    this.getState = function () {
        return state;
    };

    this.setState = function (stateP) {
        state = Lyngk.State[stateP];
    };

    this.getListPiece = function () {
        return listOfPieces;
    };

    this.setListPiece = function (newPieces) {
        listOfPieces.push(newPieces);
    };

    this.getColor = function () {
        return listOfPieces[listOfPieces.length - 1].getColor();
    };

    this.getCoordinates = function () {
        return coordinates;
    };

    this.putPiece = function (s) {
        listOfPieces.push(s.getListPiece()[0]);
    };

    this.removePiece = function () {
        listOfPieces = [];
    };

    this.getHeightStack = function () {
        return listOfPieces.length;
    };
};

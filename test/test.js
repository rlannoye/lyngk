'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.test1=function(){
    var c=new Lyngk.Coordinates("A",1);
    assertTrue(c.est_valid()==false);
};

LyngkTestCase.prototype.test2=function(){
    var colonnes="ABCDEFGHI";
    var cpt=0;
    var c;
    for(var i=0;i<9;i++) {
        for (var j = 1; j <= 9; j++) {
            var c = new Lyngk.Coordinates(colonnes[i], j);
            if (c.dansTableau()) {
                cpt++;
            }
        }
    }
    assertTrue(cpt===43);

};

LyngkTestCase.prototype.test3=function(){
    var c='A';
    var l=3;
    var ch=c+l;
    var c=new Lyngk.Coordinates(c,l);
    assertTrue(c.toString()==ch);
};

LyngkTestCase.prototype.test4=function(){
    var c =new Lyngk.Coordinates("A",1);
    assertTrue(c.toString()==="invalid");
};

LyngkTestCase.prototype.test5=function(){
    var c =new Lyngk.Coordinates("A",1);
    var c2=c.clone();
    assertTrue(c.getLigne()==c2.getLigne() && c.getColonne()==c2.getColonne());
};

LyngkTestCase.prototype.test6hash=function(){
    var c = new Lyngk.Coordinates("A",3);
    var test6=c.hash();
    assertTrue(test6==12);
};

LyngkTestCase.prototype.test7etat=function(){
    var lettres="ABCDEFGHI";
    var compteur=0;
    for(var i=0;i<lettres.length;i++){
        for(var j=1;j<=9;j++){
            var C=new Lyngk.Coordinates(lettres[i],j);
            if(C.dansTableau()){
                var intersec=new Lyngk.Intersection(C);
                if(intersec.getEtat() !==0){
                    compteur++;
                }
            }
        }
    }
    assertTrue(compteur===0);
};





LyngkTestCase.prototype.test8color=function(){
    var newEngine=new Lyngk.Engine();
    var coords =new Lyngk.Coordinates('B',5);
    var inter=new Lyngk.Intersection(coords,'BLUE');
    var piece=new Lyngk.Piece(coords,'BLUE');
    newEngine.placerPion(inter,piece);
    assertTrue(inter.getEtat()===1);
};

LyngkTestCase.prototype.test9color=function(){
    var newEngine=new Lyngk.Engine();
    var coords =new Lyngk.Coordinates('B',5);
    var inter=new Lyngk.Intersection(coords);
    var piece1=new Lyngk.Piece('BLUE');
    var piece2=new Lyngk.Piece('RED');
    newEngine.placerPion(inter,piece1);
    newEngine.placerPion(inter,piece2);
    assertTrue(inter.getEtat()===2);
};

LyngkTestCase.prototype.test10color=function(){
    var newEngine=new Lyngk.Engine();
    var coords =new Lyngk.Coordinates('B',5);
    var inter=new Lyngk.Intersection(coords);
    var piece1=new Lyngk.Piece('BLUE');
    var piece2=new Lyngk.Piece('RED');
    newEngine.placerPion(inter,piece1);
    newEngine.placerPion(inter,piece2);
    newEngine.placerPion(inter,piece2);
    newEngine.placerPion(inter,piece2);
    newEngine.placerPion(inter,piece1);
    assertTrue(inter.getEtat()===3);
};

LyngkTestCase.prototype.test11=function(){
    var lettres="ABCDEFGHI";
    var compteur=0;
    var newEngine=new Lyngk.Engine();
    var tabIntersection=[];
    var tabPiece=[];
    for(var i=0;i<lettres.length;i++){
        for(var j=1;j<=9;j++) {
            var C = new Lyngk.Coordinates(lettres[i], j);
            if (C.dansTableau()) {
                tabIntersection.push(new Lyngk.Intersection(C));
                tabPiece.push(new Lyngk.Piece(C));
                newEngine.placerPion(tabIntersection[tabIntersection.length-1],tabPiece[tabPiece.length-1]);
            }
        }
    }
    //parcours des intersections
    for(var i=0;i<tabIntersection.length;i++){
        if(tabIntersection[i].getEtat()!==1){
            compteur++;
        }
    }
    assertTrue(compteur===0);
};

LyngkTestCase.prototype.test12=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    // recupere la liste des intersections au debut du jeu pour verifier les bonnes couleurs
    var listeIntersection=newEngine.gettabIntersection();
    var compteurBleu=0;
    var compteurBlanc=0;
    var compteurRouge=0;
    var compteurVert=0;
    var compteurIvoire=0;
    var compteurNoir=0;

    listeIntersection.forEach(function(element){
        element.getListPiece().forEach(function(piece)
        {
            if(piece.getCouleur()===0){

                compteurNoir++;
            }
            if(piece.getCouleur()===1){
                compteurIvoire++;
            }
            if(piece.getCouleur()===2){
                compteurBleu++;
            }
            if(piece.getCouleur()===3){
                compteurRouge++;
            }
            if(piece.getCouleur()===4){
                compteurVert++;
            }
            if(piece.getCouleur()===5){
                compteurBlanc++;
            }
        });
    });


    assertTrue(compteurBlanc===3 &&
        compteurVert===8 &&
        compteurRouge===8 &&
        compteurBleu===8 &&
        compteurIvoire===8 &&
        compteurNoir===8);


};

LyngkTestCase.prototype.test13=function() {
    var newEngine = new Lyngk.Engine();
    newEngine.debutjeu();
    var listeIntersection = newEngine.gettabIntersection();
    var compteur=0;
    listeIntersection.forEach(function (element){
        var hauteur=element.getListPiece().length;
        if(hauteur!==1)
            compteur++;

    });
    assertTrue(compteur===0);
};

LyngkTestCase.prototype.test14=function() {
    var newEngine = new Lyngk.Engine();
    newEngine.debutjeu();
    var listeIntersection = newEngine.gettabIntersection();
    var aleatoire = Math.floor(Math.random() * 43);
    var listePiece =listeIntersection[aleatoire].getListPiece();
    assertTrue(listeIntersection[aleatoire].getCouleur() === listePiece[listePiece.length-1].getCouleur());
};

LyngkTestCase.prototype.test15=function() {
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var coords =new Lyngk.Coordinates('A',3);
    var coords2 =new Lyngk.Coordinates('B',3);
    var couleurPiece1=newEngine.getIntersection(coords).getCouleur();
    newEngine.deplacement(coords,coords2);
    var couleurPiece2=newEngine.getIntersection(coords2).getCouleur();
    assertTrue(couleurPiece1===couleurPiece2 );
};

/*
LyngkTestCase.prototype.test16=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var listeIntersection = newEngine.gettabIntersection();
    var compteur=0;
    var coords=new Lyngk.Coordinates('A',3);
    var coords2=new Lyngk.Coordinates('B',3);
    newEngine.deplacement(coords,coords2);
    var coords3=new Lyngk.Coordinates('B',3);
    var coords4=new Lyngk.Coordinates('B',2);
    var couleurPiece1=newEngine.getIntersection(coords3).getCouleur();
    newEngine.deplacement(coords3,coords4);
    var couleurPiece2=newEngine.getIntersection(coords4).getCouleur();
    listeIntersection.forEach(function (element){
    var hauteur=element.getListPiece().length;
    if(hauteur!==3)
        compteur++;

    });
    assertTrue((couleurPiece1===couleurPiece2) && compteur==0);
};
*/

LyngkTestCase.prototype.test17=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var coords1=new Lyngk.Coordinates('B',2);
    var inter=new Lyngk.Intersection(coords1);
    var coords2=new Lyngk.Coordinates('B',3);
    var couleurPiece1=newEngine.getIntersection(coords1).getCouleur();
    newEngine.deplacement(coords1,coords2);
    var couleurPiece2=newEngine.getIntersection(coords2).getCouleur();
    newEngine.deplacement(coords2,coords1);
    assertTrue(inter.getEtat()===0);
};

/*LyngkTestCase.prototype.test18=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var listeIntersection = newEngine.gettabIntersection();
    var compteur=0;
    var coords=new Lyngk.Coordinates('C',2);
    var coords2=new Lyngk.Coordinates('B',3);
    newEngine.deplacement(coords,coords2);
    listeIntersection.forEach(function (element){
        var hauteur=element.getListPiece().length;
        if(hauteur!==1)
            compteur++;

    });
    assertTrue(coords.compteur===0 && coords2.compteur===0);
};
*/

/*LyngkTestCase.prototype.test19=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var listeIntersection = newEngine.gettabIntersection();
    var compteur=0;
    var coords=new Lyngk.Coordinates('H',5);
    var coords2=new Lyngk.Coordinates('F',5);
    newEngine.deplacement(coords,coords2);
    listeIntersection.forEach(function (element){
        var hauteur=element.getListPiece().length;
        if(hauteur!==1)
            compteur++;

    });
    assertTrue(coords.compteur===0 && coords2.compteur===0);
};
*/

/*LyngkTestCase.prototype.test20=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var coords=new Lyngk.Coordinates('A',3);
    var coords2=new Lyngk.Coordinates('B',3);
    var coords3=new Lyngk.Coordinates('B',2);
    var coords4=new Lyngk.Coordinates('C',2);
    var coords5=new Lyngk.Coordinates('D',2);
    var coords6=new Lyngk.Coordinates('E',2);
    newEngine.deplacement(coords,coords2);
    newEngine.deplacement(coords2,coords3);
    newEngine.deplacement(coords3,coords4);
    newEngine.deplacement(coords4,coords5);
    //la pile ne peut pas etre deplacee en E2 car la pile searit trop haute
    newEngine.deplacement(coords5,coords6);
    assertTrue(coords5.getTaillePile()===5 && coords6.getTaillePile()===1);
};
*/

/*
LyngkTestCase.prototype.test21=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var coords=new Lyngk.Coordinates('A',3);
    var coords2=new Lyngk.Coordinates('B',3);
    var coords3=new Lyngk.Coordinates('C',3);
    newEngine.deplacement(coords,coords2);
    //deplacement impossible, une piece ne peut pas etre deplacee sur une pile
    newEngine.deplacement(coords3,coords2);
    assertTrue(coords2.getTaillePile()===2 && coords3.getTaillePile()===1);
};
*/

/*
LyngkTestCase.prototype.test22=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var coords=new Lyngk.Coordinates('I',7);
    var coords2=new Lyngk.Coordinates('H',6);
    var coords3=new Lyngk.Coordinates('G',4);
    var coords4=new Lyngk.Coordinates('G',5);
    var coords5=new Lyngk.Coordinates('G',6);
    newEngine.deplacement(coords,coords2);
    newEngine.deplacement(coords3,coords4);
    newEngine.deplacement(coords4,coords5);
    assertTrue(coords5.getTaillePile()===3 && coords2.getTaillePile()===2);
};
*/

/*
LyngkTestCase.prototype.test23=function(){
    var newEngine=new Lyngk.Engine();
    newEngine.debutjeu();
    var coords=new Lyngk.Coordinates('F',3);
    var coords2=new Lyngk.Coordinates('F',4);
    var coords3=new Lyngk.Coordinates('F',5);
    var coords4=new Lyngk.Coordinates('F',6);
    var coords5=new Lyngk.Coordinates('F',7);
    newEngine.deplacement(coords,coords2);
    newEngine.deplacement(coords2,coords3);
    newEngine.deplacement(coords3,coords4);
    newEngine.deplacement(coords4,coords5);
    assertTrue(coords5.getTaillePile()===5);
};
*/
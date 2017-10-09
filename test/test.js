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
        for (var j = 0; j < 9; j++) {
            var c = new Lyngk.Coordinates(colonnes[i], j + 1);
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
    console.log(ch);
    assertTrue(c.toString()==ch);
};

LyngkTestCase.prototype.test4=function(){
    var c =new Lyngk.Coordinates("A",1);
    console.log(c);
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
    var c = new Lyngk.Intersection();
    assertTrue(c.getEtat() === Lyngk.State.VACANT);
};

LyngkTestCase.prototype.test8color=function(){
    var c = new Lyngk.Intersection();
    c.pion(Lyngk.Color.BLUE);
    assertTrue(c.getEtat()===Lyngk.State.ONE_PIECE && c.getColor()===Lyngk.Color.BLUE);
};

LyngkTestCase.prototype.test9color=function(){
    var c = new Lyngk.Intersection();
    c.pion(Lyngk.Color.BLUE);
    c.pion(Lyngk.Color.RED);
    assertTrue(c.getEtat()===Lyngk.State.STACK && c.getColor()===Lyngk.Color.RED);
};
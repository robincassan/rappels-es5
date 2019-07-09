console.log("01 - Fonctions");
var aff = console.log;


var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2){
    return nb1 + nb2;
}

var resultat1 = additionner(nombre1, nombre2);
console.log(resultat1);
aff(resultat1);


// somme
var somme = additionner;
resultat2 = somme(nombre1, nombre2);
aff(resultat2);

// multi
function multiplication(nb1,nb2){
    return nb1*nb2;
}
// soustraction
function soustraction (n1, n2){
    return n1-n2; 
}

resultat3 = multiplication (nombre1, nombre2);
aff(resultat3);

function afficherOperation (nomOperation, operation, nb1, nb2) {
    aff(nomOperation + "(" + nb1+ ","+nb2+") = " + operation(nb1,nb2));
    return ;
}

afficherOperation( "Somme", somme, 20, 40);
afficherOperation( "Multiplication", multiplication, 10, 20);
afficherOperation( "soustracion", soustraction, 15, 5);



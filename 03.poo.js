var aff = console.log;

function Personne(nom, prenom, pseudo) {
this.nom = nom;
this.prenom = prenom;
this.pseudo = pseudo;
   
}

// méthode getInitiales
function getInitiales(personne){
    return personne.nom.charAt(0) + personne.prenom.charAt(0);
}



function getNomComplet(Personne) {
    return Personne.prenom + '  ' + Personne.nom + '   ' + Personne.pseudo    ;
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE","paul44");

aff(jules.nom);
aff(jules.prenom);
aff(jules.pseudo);

aff(getNomComplet(jules));

function afficherPersonne (personne){
    aff(getNomComplet(personne));
}

afficherPersonne(paul);
afficherPersonne(jules);

jules.pseudo = "jules44";

afficherPersonne(jules);

aff(jules.age);

Personne.prototype.age = "NON RENSEIGNE";

aff(jules.age);
jules.age = 30; 
aff(jules.age);

aff(getInitiales(jules));

var robert = {
    nom:"LEPREFET",
    prenom:"Robert",
    pseudo:"robert77",
}
afficherPersonne(robert);

function Client (nom, prenom, pseudo, numeroClient){
    Personne.call(this,nom, prenom, pseudo );
    this.numeroClient = numeroClient;  
}
function getInfos (client) {
    return client.prenom +'  '+ client.nom + '  ' + client.numeroClient;
    
}
var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
aff(steve.numeroClient);
aff(getInfos(steve));



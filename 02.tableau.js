var villes = new Array('nantes', 'paris', 'saint-nazaire', 'angers', 'le mans');
var aff = console.log;
 
// affichage du tableau
villes.forEach(element => {
    aff(element);
});
// si toutes les villes contiennent la lettre a
var lettreADansToutesLesVilles = villes.every(function(valeur){
    return valeur.includes('a');
});
aff('lettreADansToutesLesVilles = '+lettreADansToutesLesVilles);

// si au moins une ville contient '-'
var auMoinsUneVilleAvecUnTiret = villes.some(function (valeur){
    return valeur.includes('-');
});
aff('auMoinsUneVilleAvecUnTiret = '+ auMoinsUneVilleAvecUnTiret );

var villesSansTiretSansEspace = villes.filter(function(valeur){
    return (!valeur.includes('-') && !valeur.includes(' ')  );
})
aff('villesSansTiretSansEspace = ',villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function(valeur){
    return valeur.endsWith('s');

} ).map(function(valeur){
    return valeur.toUpperCase();
})
aff('villesMajusculeSeTerminantParS = ',villesMajusculeSeTerminantParS);

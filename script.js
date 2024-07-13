
function analysePhrase(phrase) {

    // Initialisation des compteurs

    let longueurPhrase = 0;
    let nombreMots = 0;
    let nombreVoyelles = 0;

    // Parcourir chaque caractère de la phrase
    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];

        // Incrémenter le compteur de longueur de la phrase
        longueurPhrase++;

        // Vérifier si le caractère est une voyelle 
        if (char.match(/[aeiouAEIOU]/)) {
            nombreVoyelles++;
        }

        // Vérifier si le caractère est un espace ou le point final
        if (char === ' ' || char === '.') {
            nombreMots++;
        }
    }

    // Soustraire 1 du nombre de mots pour exclure le point final comme mot
    nombreMots--;

    // Retourner les résultats sous forme d'objet
    return {
        longueurPhrase: longueurPhrase,
        nombreMots: nombreMots,
        nombreVoyelles: nombreVoyelles
    };
}

// Exemple d'utilisation :
let phrase = "Bonjour, comment allez-vous ?";
let resultats = analysePhrase(phrase);

console.log("Phrase :", phrase);
console.log("Longueur de la phrase :", resultats.longueurPhrase);
console.log("Nombre de mots :", resultats.nombreMots);
console.log("Nombre de voyelles :", resultats.nombreVoyelles);








function permutations(x, y, z) { 
    var permutations = [];  

    permute([], [x, y, z], permutations); 

    return permutations;
}





// js permutation


// Exemple de valeurs initiales
let x = 1;  
let y = 2;
let z = 3; 


// Affichage des valeurs initiales
console.log("Avant permutation :");
console.log("x =", x, ", y =", y, ", z =", z);

// Permutation des valeurs
let temp = x;
x = y;
y = z;
z = temp;

// Affichage des valeurs après permutation
console.log("Après permutation :");
console.log("x =", x, ", y =", y, ", z =", z);

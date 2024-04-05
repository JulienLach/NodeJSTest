const path = require("path"); // path est un module natif de Node.js

// Afficher le nom du fichier
console.log(path.basename(__filename));

// Afficher le nom du répertoire
console.log(path.dirname(__filename));

// Afficher l'exension du fichier
console.log(path.extname(__filename));

// Créer un objet path
console.log(path.parse(__filename));

// Concaténer des chemins
console.log(path.join(__dirname, "test", "hello.html"));

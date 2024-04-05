const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((requete, reponse) => {
  // Afficher les fichier
  if (requete.url === "/") {
    reponse.writeHead(200, { "Content-Type": "text/html" });
    reponse.end("<h1>Accueil test</h1>");
  }
});

// Définir le port sur 5000 ou sur le port d'environnement de l'hote
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Serveur démarré sur le port 5000..."));

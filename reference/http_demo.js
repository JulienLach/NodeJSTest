const http = require("http");

// Créer un objet serveur
const serveur = http
  .createServer((requete, reponse) => {
    // Envoyer une réponse affichée dans le navigateur
    reponse.write("Bonjour!");
    reponse.end();
  })
  .listen(5000, () => console.log("Serveur démarré sur le port 5000..."));

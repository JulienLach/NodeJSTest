const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((requete, reponse) => {
  // Afficher les fichier
  //   if (requete.url === "/") {
  //     // si l'url est la racine
  //     fs.readFile(
  //       // appeler la méthode readFile de fs pour lire le fichier index.html
  //       path.join(__dirname, "public", "index.html"), // indiquer le chemin du fichier index.html
  //       (err, content) => {
  //         // si le fichier est lu avec succès ou s'il y a une erreur fonction de callback
  //         if (err) throw err; // si erreur, afficher l'erreur
  //         reponse.writeHead(200, { "Content-Type": "text/html" }); // si pas d'erreur, afficher le code 200 et le type de contenu
  //         reponse.end(content); // afficher le contenu du fichier
  //       }
  //     );
  //   }
  //   // Afficher la page about.html
  //   if (requete.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         reponse.writeHead(200, { "Content-Type": "text/html" });
  //         reponse.end(content);
  //       }
  //     );
  //   }
  //   // Afficher du JSON
  //   if (requete.url === "/api/utilisateurs") {
  //     const utilisateurs = [
  //       { nom: "Bob Smith", age: 40 },
  //       { nom: "John Doe", age: 30 },
  //     ];
  //     reponse.writeHead(200, { "Content-Type": "application/json" });
  //     reponse.end(JSON.stringify(utilisateurs));
  //   }
  // rendre le path des fichiers statiques dynamique
  let filePath = path.join(
    __dirname,
    "public",
    requete.url === "/" ? "index.html" : requete.url
  );

  // Extension du fichier
  let extension = path.extname(filePath);

  // Type de contenu par défaut
  let contentType = "text/html";

  // Vérifier l'extension et définir le type de contenu
  switch (extension) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Lire le fichier
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page non trouvée
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            reponse.writeHead(200, { "Content-Type": "text/html" });
            reponse.end(content, "utf8");
          }
        );
      } else {
        // Erreur serveur
        reponse.writeHead(500);
        reponse.end(`Erreur serveur: ${err.code}`);
      }
    } else {
      // Succès
      reponse.writeHead(200, { "Content-Type": contentType });
      reponse.end(content, "utf8");
    }
  });
});

// Définir le port sur 5000 ou sur le port d'environnement de l'hote
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Serveur démarré sur le port 5000..."));

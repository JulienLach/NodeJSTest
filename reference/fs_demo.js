const fs = require("fs");
const path = require("path");

// Créer un dossier
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Dossier créé...");
// });

// Créer un fichier et écrire dedans
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello world !",
//   (err) => {
//     // callback
//     if (err) throw err;
//     console.log("Fichier créé et écris...");

//     // Ajouter du texte dans le fichier
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " Test écriture NodeJS",
//       (err) => {
//         if (err) throw err;
//         console.log("Fichier créé et écris...");
//       }
//     );
//   }
// );

// Lire un fichier
// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// Renommer un fichier
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("Fichier renommé...");
  }
);

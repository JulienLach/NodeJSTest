const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);
// get le chemin complet de l'url

console.log(myUrl.href);

// get le nom de l'hôte (racine)
console.log(myUrl.host);

// get le nom de l'hôte (racine)
console.log(myUrl.hostname);

// get le chemin de l'url
console.log(myUrl.pathname);

// get la query les paramètres de l'url
console.log(myUrl.search);

// get les paramètres de l'url
console.log(myUrl.searchParams);

// ajouter un paramètre à l'url
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// boucler sur les paramètres de l'url
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

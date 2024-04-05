const EventEmitter = require("events");

// Créer une classe qui étend EventEmitter pour créer un objet personnalisé
class MyEmitter extends EventEmitter {}

// Instancier un objet de la classe MyEmitter
const myEmitter = new MyEmitter();

// Créer un gestionnaire d'événements
myEmitter.on("event", () => {
  console.log("an event occurred!");
});

// lancer un événement
myEmitter.emit("event");
myEmitter.emit("event");

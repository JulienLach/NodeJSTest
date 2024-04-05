const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  afficherMessage(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg }); //quand on appelle la méthode afficherMessage, on émet un évènement "message" avec un objet contenant un id unique et le message
  }
}

// module.exports = Logger; // export de la classe Logger pour pouvoir l'utiliser dans index.js

const logger = new Logger();

logger.on("message", (data) => console.log("Afficher évènement:", data));

logger.afficherMessage("Hello World");
// j'ai créé un objet logger à partir de la classe Logger, j'ai écouté l'évènement "message" et
// j'ai appelé la méthode afficherMessage de l'objet logger. Quand j'ai appelé la méthode afficherMessage,
// cela a émis un évènement "message" avec un objet contenant un id unique et le message. Ensuite,
// j'ai affiché l'évènement avec les données de l'objet.

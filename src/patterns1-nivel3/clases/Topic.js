const EventEmitter = require("events");

class Topic extends EventEmitter{
  constructor(name) {
    super();
    this.name = name;
    this.users = [];
    this.mensajes = [];
    this.on("connection", (date) => {
      console.log(
        `[${date.toLocaleString()}] Alerta de Tema: Nuevo mensaje en el tema ${this.name}`
      );
    });
  }
  subscribe(userSub) {
    this.users.push(userSub);
    this.on("connection", (date, user, message) => {
      userSub.notify();
      console.log(
        `[${date.toLocaleString()}] ${userSub.name}: ${
          this.users.find((u) => u == user)?.name
        } ha escrito "${message}" al tema ${this.name}`
      );
    });
  }
  unSubscribe(user) {
    this.users = this.users.filter((e) => e != user);
  }
  writeMessage(user, message) {
    try {
      this.mensajes.push(message);
      this.emit("connection", new Date(), user, message);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Topic;

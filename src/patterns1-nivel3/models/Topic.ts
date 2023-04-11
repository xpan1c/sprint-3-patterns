import { EventEmitter } from "events";
import { User } from "./User";

export class Topic {
  private name: string;
  private emitter: EventEmitter;
  private subscribers: User[];

  constructor(name: string) {
    this.name = name;
    this.emitter = new EventEmitter();
    this.subscribers = [];
  }

  subscribe(user: User): void {
    this.subscribers.push(user);
    this.emitter.on("message", (message: string) => {
      user.receiveMessage(this.name, message);
    });
  }

  addMessage(user: User, message: string): void {
    console.log(`${user["name"]} ha publicado un nuevo mensaje en el tema ${this.name}: ${message}`);
    this.emitter.emit("message", message);
  }
}

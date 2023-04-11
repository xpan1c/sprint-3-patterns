import { User } from "./models/User";
import { Topic } from "./models/Topic";

const user1 = new User("Danny");
const user2 = new User("Carlos");
const user3 = new User("Jose");

const topic1 = new Topic("Dev");
const topic2 = new Topic("Production");

topic1.subscribe(user1);
topic2.subscribe(user2);
topic2.subscribe(user3);

topic1.addMessage(user1, "¡Hola, esto es un mensaje para el Tema 1!");
topic2.addMessage(user2, "¡Hola, esto es un mensaje para el Tema 2!");

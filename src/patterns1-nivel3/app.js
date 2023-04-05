const User = require('./clases/User');
const Topic = require('./clases/Topic');

const a = new Topic("Cosas")

const user1 = new User("Carlos")
const user2 = new User("Danny")

a.subscribe(user1);
a.subscribe(user2);

// const user3 = new User("Alfredo")
a.writeMessage(user1,"Buenos dias")
a.writeMessage(user2,"Que tal?")
a.writeMessage(user1,"Bien y tu?")
a.writeMessage(user2,"Bien gracias")
a.writeMessage(user1,"Adios")
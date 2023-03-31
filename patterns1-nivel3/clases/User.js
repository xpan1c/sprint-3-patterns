const EventEmitter = require('events');
const myEmitter = new EventEmitter();

class User{
    constructor(name){
        this.name = name;
    }
    notify(){
        console.log(`User: ${this.name} notificado`);
    }
}

module.exports = User;
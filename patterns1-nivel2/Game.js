const Player = require('./Player.js');
const Scoreboard = require('./Scoreboard');
console.log(Player.prototype);
class Game {
    constructor(){
        this.scoreboard = new Scoreboard();
    }
    addPlayer(name){
        this.scoreboard.addPlayer(new Player(name))
    }
    showPlayers(){
        console.log(this.scoreboard.players); 
    }
}
module.exports = Game; 

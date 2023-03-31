const Scoreboard = require('./Scoreboard');

class Player {
    constructor(name){
        this.name = name;
        this.points = 0;
        this.scoreboard = new Scoreboard(this);
    }
    setPoints(points){
        this.points += points;
    }
}
console.log(module.exports);

module.exports = Player;
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

module.exports = Player;
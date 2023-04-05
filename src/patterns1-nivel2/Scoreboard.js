const MAX_SCORE = 10;
class Scoreboard{
    static instance;
    MAX_SCORE = 10;
    score = [];
    players = [];
    constructor(Player){
        this.players.sort;
        if (!!Scoreboard) {
            return Scoreboard.instance
          }
          Scoreboard.instance = this;
        }
    addPlayer(Player){
        this.players.push(Player);
    }
    showPlayers(){
        return this.players;
    }
    updateScoreboard(){

    }
}
module.exports = Scoreboard;
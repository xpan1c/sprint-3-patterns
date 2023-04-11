import {Player} from "./Player"
import {Scoreboard} from "./Scoreboard"

class Game{
    private players: Set<Player>;
    private name: string;
    private scoreboard: Scoreboard;
    constructor(name: string) {
        this.name = name;
        this.players = new Set();
        this.scoreboard = Scoreboard.getInstance()
    }
    
    getName() : string {
        return this.name;
    }
    getPlayersNames(): string[] {
        let names: string[] = []
        this.players.forEach((player)=> names.push(player.getName()))
        return names
    }

    getPlayerByName(name: string): Player{
        for (const existingPlayer of this.players) {
            if(existingPlayer.getName() === name){
                return existingPlayer;
            }
        }
        throw new Error(`${name} does not exist.`)
    }

    addPlayer(player: Player):void{
        for (const existingPlayer of this.players) {
            if(existingPlayer.getName() === player.getName()){
                throw new Error(`${player.getName()} already exists.`)
            }
        }
        this.players.add(player)
        this.scoreboard.addPlayer(player)
    }
}
export {Game}

import readline from 'readline';
import { Game } from "./models/Game";
import { Player } from "./models/Player";
import { Scoreboard } from './models/Scoreboard';

const GAME_NAME = "Tres en raya"

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const game = new Game(GAME_NAME);


const newPlayer = (): void => rl.question("Player name: ", (name) => {
    try {
        const player = new Player(name);
        game.addPlayer(player);
        console.log(`${name} has been added to the game.`);
    } catch (error) {
        console.log(`\x1b[31m${error}\x1b[0m`);
    }
    showMenu();
});

const handlePlayerAndPoints = (name: string, points: string) : void => {
    try {
        const player = game.getPlayerByName(name);
        Scoreboard.getInstance().updateScore(player, parseInt(points));
        console.log(`${name} score has been updated to ${Scoreboard.getInstance().getPlayerScore(player)}.`);
    } catch (error) {
        console.log(`\x1b[31m${error}\x1b[0m`);
    }
    showMenu();
};

const showPlayersUtil = () : void => {
    const names = game.getPlayersNames();
    console.log(`Currently playing: ${names.join(", ")}.`);
}

const showPlayers = () : void => {
    showPlayersUtil();
    showMenu();
}
const updateScore = () : void => {
        showPlayersUtil();
        rl.question(`Name of the player: `, (name) => {
                rl.question(`Points: `,(points) => {
                    handlePlayerAndPoints(name, points);
                })
    })    
}

const showScores = () : void => {
    const scoresMap = Scoreboard.getInstance().getScores();
    const scoresArray = Array.from(scoresMap.entries());
    scoresArray.sort((a, b) => b[1] - a[1]);
    console.log("\x1b[32m====== Scores ======\x1b[0m");
    for (const [player, score] of scoresArray) {
        console.log(`${player.getName()}: ${score}`);
    }
    showMenu();
}



const showWinner = () : void => {
    try {
        const winner: Player = Scoreboard.getInstance().getWinner();
        console.log(`The winner is ${winner.getName()} with a score of ${Scoreboard.getInstance().getPlayerScore(winner)}`);
    } catch (error) {
        console.log(`\x1b[31m${error}\x1b[0m`);
    }
    showMenu();
};

const closeApp = () : void => {
    rl.close()
}

interface Options {
    [key: string]: () => void;
}

const options: Options = {
    "1": newPlayer,
    "2": updateScore,
    "3": showScores,
    "4": showPlayers,
    "5": showWinner,
    "6": closeApp,
};


const executeOption = (option: string) => {
    const selectedOption = options[option];
    if (selectedOption) {
        selectedOption();
    } else {
        console.log("Option not valid");
        showMenu();
    }
}

const showMenu = () => {
    console.log(`
\x1b[32m====== Menu ======\x1b[32m
\x1b[0m1. Add Player
2. Update Score
3. Show scores
4. Show Players
5. Show winner
6. Exit\x1b[0m`);
    rl.question(`\x1b[33mPress a number: `, (option) => {
        executeOption(option);
    })
}
showMenu();
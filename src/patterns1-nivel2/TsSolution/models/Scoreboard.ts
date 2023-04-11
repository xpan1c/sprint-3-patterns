import { Player } from "./Player";

//const MAX_SCORE = 10;

class Scoreboard {
    private static instance: Scoreboard;
    private scores: Map<Player, number>;
    private constructor() {
        this.scores = new Map();
    }
    public static getInstance(): Scoreboard {
        if (!Scoreboard.instance) {
            Scoreboard.instance = new Scoreboard();
        }
        return Scoreboard.instance;
    }
    addPlayer(player: Player): void {
        this.scores.set(player, 0);
    }
    updateScore(player: Player, score: number): void {
        const actualScore: number = this.scores.get(player)!;
        const newScore: number = actualScore + score;
        if (newScore < 0) {
            throw new Error(`${player.getName()}'s score cannot be negative.`);
        }
        this.scores.set(player, score + actualScore);
    }

    getPlayerScore(player: Player): number {
        if (!this.scores.has(player)) {
            throw new Error(`${player.getName()} does not exist`);
        }
        return this.scores.get(player)!;
    }

    getScores(): Map<Player, number> {
        return this.scores;
    }
    getWinner(): Player {
        let highestScore = -Infinity;
        let winner: Player | null = null;
        this.scores.forEach((score, player) => {
            if (score > highestScore) {
                highestScore = score;
                winner = player;
            } else if (score === highestScore && winner) {
                throw new Error("Tie between two or more players.");
            }
        });
        if (!winner) {
            throw new Error("No winner yet.");
        }
        return winner;
    }
}
export { Scoreboard };

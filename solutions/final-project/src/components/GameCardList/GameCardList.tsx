import { useEffect, useState } from "react";
import GameModel from "../../models/GameModel";
import GameCard from "../GameCard/GameCard";


export default function GameCardList() {

    const [games, setGames] = useState<GameModel[]>([]) 

    useEffect(() => {
        fetch("http://localhost:1337/games").then((response) => response.json().then((data) => setGames(data)));
    }, [setGames]);

    return (
        games ? (
            <div>
                {games.map((game: GameModel) => (
                    <GameCard game={game} key={game.id}/>
                ))}
            </div>
        ) : (
            <div>Loading ...</div>
        )
    );
}
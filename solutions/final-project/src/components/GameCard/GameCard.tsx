import { useNavigate } from "react-router-dom";
import GameModel from "../../models/GameModel";
import CustomButton from "../CustomButton/CustomButton";
import "./GameCard.css";



interface GameCardProps {
    game: GameModel
}


export default function GameCard(props: GameCardProps) {

    const navigate = useNavigate();

    return (
            <div className="gamecard">
                <h1>
                    {props.game.name}
                </h1>
                <div>
                    {props.game.description}
                </div>
                <p>
                    Release: {props.game.release_date}
                </p>
                <span>
                    Price: {props.game.price}€
                    <CustomButton buttonText={"Open Details"} onClick={() => navigate(`${props.game.id}`)} />
                </span>
            </div>
    );



}
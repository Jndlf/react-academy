import GameCardList from "../../components/GameCardList/GameCardList";
import "./LibraryPage.css"

export default function LibraryPage() {
    return (
        <div className="Library">
            <p>nterra Games Library</p>
            <GameCardList />
        </div>
    );
}
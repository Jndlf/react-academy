import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import logo from "../../assets/nterra.svg";
import "./HomePage.css";


export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="Home">
            <header className="Home-Header">
                <img src={logo} className="Home-Logo" alt="nterra"></img>
                <h1>Welcome to the nterra Games Library!</h1>
                <CustomButton buttonText={"Go to Games Library!"} onClick={() => navigate("/library")}/>
            </header>
        </div>
    );
}
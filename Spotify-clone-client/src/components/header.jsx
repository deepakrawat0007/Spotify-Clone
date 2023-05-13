import "./page.css";
import icon from "../assets/icons8-spotify-48.png"

const Header = () =>{
    return (
        <div className="head">
            <img src={icon} alt="icon"/>
            <p>Spotify</p>
        </div>
    )
}

export default Header;
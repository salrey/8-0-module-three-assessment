import "./Nav.css";
import ghibliLogo from "./ghibli-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">     
                <img src={ghibliLogo} alt="ghibli-logo" height="50px" width="50px"/>
            </Link>
            <div className="menu">
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </div>
        </nav>
    )
};

export default Nav;
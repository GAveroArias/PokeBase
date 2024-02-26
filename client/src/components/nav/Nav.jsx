import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";

function Nav({ onSearch }) {
    return (
        <div className="NavContainer">
            <div className="NavLinks">
                <Link to="/form">
                    <button>Crear Pokemon!</button>
                </Link>
            </div>
            <div className="SearchContainer">
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
}

export default Nav;

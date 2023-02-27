import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav className="navbar">

            <ul className="navbar-nav">
                <li >
                    <Link className=""

                        to='/'>
                        Home
                    </Link>
                </li>

                <li >
                    <Link className="" to="/destination">
                        Destination
                    </Link>
                </li>

                <li >
                    <Link className="" to="/crew">
                        Crew
                    </Link>
                </li>

                <li >
                    <Link className="" to="/technology">
                        Technology
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
import { AppBar,styled,Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(AppBar)`
    background: #ffffff;
    color: #000;

`

const Header = () => {

    return (
        <Component>
            <Toolbar>
                <Link to="/login">LOGOUT</Link>
            </Toolbar>
        </Component>
    )
}

export default Header
import { Link } from "react-router-dom";
import "./LogInButton.css";

function LogInButton(props) {
    return (
        <div>
            <Link to="/" className="log-style" onClick={props.onclick}> Log In </Link>
        </div>
    )
}

export default LogInButton;
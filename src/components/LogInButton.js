import { Link } from "react-router-dom";
import "./LogInButton.css";

function LogInButton() {
    return (
        <div>
            <Link to="/" className="log-style"> Log In </Link>
        </div>
    )
}

export default LogInButton;
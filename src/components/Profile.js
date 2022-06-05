import { Link } from "react-router-dom";
import "./Profile.css";

function Profile(props) {
    if (props.login) {
        return (
            <div>
                <Link>Username</Link>
            </div>
        )
    } else {
        return (
            <div>
                <Link to="/login" id="login">Log In</Link>
            </div>
        )
    }
}

export default Profile;
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile(props) {
    if (props.login) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}

export default Profile;
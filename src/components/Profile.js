import { useContext } from "react";
import { Link } from "react-router-dom";
import { NameContext } from "../Contexts";
import "./Profile.css";

function Profile(props) {

    //eslint-disable-next-line
    const { fullName, setFullName } = useContext(NameContext);

    if (props.login) {
        return (
            <div>
                <Link>{fullName}</Link>
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
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NameContext } from "../Contexts";
import { getFetch } from "../fetch";
import "./Profile.css";

function Profile() {

    //eslint-disable-next-line
    const { fullName, setFullName } = useContext(NameContext);

    const [data, setData] = useState({ "Logged": false });

    const test = false;

    useEffect(() => {
        getFetch("").then(res => { setData(res) })
    }, [fullName])

    if (data["Logged"]) {

        return (
            <div>
                <Link id="login">{fullName}</Link>
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
import { Link } from "react-router-dom";
import "./ReqButton.css";

function ReqButton(props) {
    return (
        <div>
            <Link to="/" className="log-style" onClick={props.onclick}>{props.title}</Link>
        </div>
    )
}

export default ReqButton;
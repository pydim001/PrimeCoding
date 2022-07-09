import { postFetch } from "../fetch";
import "./ErrorMessage.css";

function ErrorMessage(props) {
    const successes = ["An account already exists with this email",
        "Either the email or password is incorrect",
        "This email address is invalid", "Both the passwords you have typed don't match"]
    if (successes.includes(props.message)) {
        return (
            <div id="err-box">
                <p id="err-txt">{props.message}</p>
            </div>
        )
    } else {
        const request = { "Logged": true }
        postFetch("", request)
        props.setName(props.message)
    }

}

export default ErrorMessage;
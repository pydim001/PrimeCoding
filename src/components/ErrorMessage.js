import "./ErrorMessage.css";

function ErrorMessage(props) {
    const successes = ["Logged in", "New User Created", "", null]
    if (!successes.includes(props.message)) {
        return (
            <div id="err-box">
                <p id="err-txt">{props.message}</p>
            </div>
        )
    }

}

export default ErrorMessage;
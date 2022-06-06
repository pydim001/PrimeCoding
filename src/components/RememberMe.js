import "./RememberMe.css";

function RememberMe() {
    return (
        <div id="re-comp">
            <div className="re-me" id="check-div">
                <input type="checkbox" id="check-box" />
            </div>
            <div className="re-me" id="remember-me"><p>Remember Me</p></div>
        </div>
    )
}

export default RememberMe;
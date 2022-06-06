import "./LogIn.css";
import { Link } from "react-router-dom";
import LogInButton from "../components/LogInButton";
import RememberMe from "../components/RememberMe";
import Field from "../components/Field";

function LogIn(props) {

    const login = () => {

    }

    return (
        <div id="login-page">
            <div id="login-header">
                <h1>Log In</h1>
                <div id="username">
                    <Field name="Username" width={500} type="text" />
                </div>
                <div id="password">
                    <Field name="Password" inputStyle={{ marginBottom: 50 }} width={500} type="password" />
                    <div className="r-me">
                        <RememberMe />
                    </div>
                </div>
                <div id="lib">
                    <LogInButton onclick={login} />
                </div>
                <div className="forgot"><p><Link to="/forgot-username" className="f-links">Forgot username?</Link></p></div>
                <div className="forgot"><p><Link to="/forgot-password" className="f-links">Forgot password?</Link></p></div>
                <div className="forgot"><p>Don't have an account? <Link to="/signup" id="signup" className="f-links">Signup</Link></p></div>
            </div>
        </div>
    )
}

export default LogIn;
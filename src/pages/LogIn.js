import "./LogIn.css";
import { Link } from "react-router-dom";
import LogInButton from "../components/LogInButton";

function LogIn(props) {
    return (
        <div>
            <div id="login-header">
                <h1>Login</h1>
                <div id="username">
                    <h3 className="labels">Username:</h3>
                    <input type="text" className="inputs" />
                </div>
                <div id="password">
                    <h3 className="labels">Password:</h3>
                    <input type="text" className="inputs" id="second-input" />
                </div>
                <div id="lib">
                    <LogInButton />
                </div>
                <div className="forgot"><p><Link>Forgot username?</Link></p></div>
                <div className="forgot"><p><Link>Forgot password?</Link></p></div>
                <div className="forgot"><p>Don't have an account? <Link to="/signup" id="signup">Signup</Link></p></div>



            </div>
        </div>
    )
}

export default LogIn;
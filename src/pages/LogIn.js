import "./LogIn.css";
import { Link } from "react-router-dom";
import ReqButton from "../components/ReqButton";
import RememberMe from "../components/RememberMe";
import Field from "../components/Field";
import { useState } from "react";
import { postFetch } from "../fetch";
import ErrorMessage from "../components/ErrorMessage";
//import ErrorMessage from "../components/ErrorMessage";

function LogIn(props) {

    // eslint-disable-next-line
    const [data, setData] = useState();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const login = () => {
        const request = {
            "email": email,
            "password": password
        }
        postFetch("login/", request).then(res => { setData(res) })
    }

    return (
        <div id="login-page">
            <div id="login-header">
                <div id="log-err">
                    <ErrorMessage message={data} />
                </div>
                <h1>Log In</h1>
                <div id="username">
                    <Field name="Email" width={500} type="text" onChange={setEmail} />
                </div>
                <div id="password">
                    <Field name="Password" inputStyle={{ marginBottom: 50 }} width={500} type="password" onChange={setPassword} />
                    <div className="r-me">
                        <RememberMe />
                    </div>
                </div>
                <div id="lib">
                    <ReqButton onclick={login} title="Log In" />
                </div>
                <div className="forgot"><p><Link to="/forgot-username" className="f-links">Forgot username?</Link></p></div>
                <div className="forgot"><p><Link to="/forgot-password" className="f-links">Forgot password?</Link></p></div>
                <div className="forgot"><p>Don't have an account? <Link to="/signup" id="signup" className="f-links">Signup</Link></p></div>
            </div>
        </div>
    )
}

export default LogIn;
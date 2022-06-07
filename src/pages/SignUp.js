import "./SignUp.css";
import Field from "../components/Field";
import ReqButton from "../components/ReqButton";
import { useState } from 'react';
import { postFetch } from "../fetch";

function SignUp() {

    const [data, setData] = useState();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();

    const signup = () => {
        if (confirm === password) {
            const request = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "username": username,
                "password": password
            }
            console.log(request);
            postFetch("signup/", request).then(res => { setData(res) });
        }
    }

    return (
        <div id="signup-div">
            <div id="login-header">
                <h1>Sign Up</h1>
                <div className="forms" id="name-form">
                    <div className="half-name">
                        <Field name="First Name" width={200} type="text" onChange={setFirstName} />
                    </div>
                    <div className="half-name">
                        <Field name="Last Name" width={200} type="text" onChange={setLastName} />
                    </div>
                </div>
                <div className="forms">
                    <Field name="Email" width={500} type="text" onChange={setEmail} />
                </div>
                <div className="forms">
                    <Field name="Username" width={500} type="text" onChange={setUsername} />
                </div>
                <div className="forms">
                    <Field name="Password" width={500} type="password" onChange={setPassword} />
                </div>
                <div className="forms">
                    <Field name="Confirm Password" inputStyle={{ marginBottom: 50 }} width={500} type="password" onChange={setConfirm} />
                </div>
                <div id="lib">
                    <ReqButton onclick={signup} title="Sign Up" />
                </div>
            </div>
        </div>
    )
}

export default SignUp;
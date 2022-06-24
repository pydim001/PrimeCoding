import "./SignUp.css";
import Field from "../components/Field";
import ReqButton from "../components/ReqButton";
import { useState } from 'react';
import { postFetch } from "../fetch";
import ErrorMessage from "../components/ErrorMessage";

function SignUp() {

    // eslint-disable-next-line
    const [data, setData] = useState();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();

    const validEmail = (email) => {
        if (!email.includes("@")) {
            return false;
        }
        const spl = email.split("@");
        if (spl[spl.length - 1].includes(".")) {
            return true;
        } else return false;
    }

    const signup = () => {
        if (confirm === password) {
            if (validEmail(email)) {
                const request = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password
                }
                postFetch("signup/", request).then(res => { setData(res) });
            }
        }
    }

    return (
        <div id="signup-div">
            <div id="login-header">
                <div>
                    <ErrorMessage message={data} />
                </div>
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
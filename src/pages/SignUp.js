import "./SignUp.css";
import Field from "../components/Field";
import ReqButton from "../components/ReqButton";

function SignUp() {

    const login = () => {

    }

    return (
        <div id="signup-div">
            <div id="login-header">
                <h1>Sign Up</h1>
                <div className="forms" id="name-form">
                    <div className="half-name">
                        <Field name="First Name" width={200} type="text" />
                    </div>
                    <div className="half-name">
                        <Field name="Last Name" width={200} type="text" />
                    </div>
                </div>
                <div className="forms">
                    <Field name="Email" width={500} type="text" />
                </div>
                <div className="forms">
                    <Field name="Username" width={500} type="text" />
                </div>
                <div className="forms">
                    <Field name="Password" width={500} type="password" />
                </div>
                <div className="forms">
                    <Field name="Confirm Password" inputStyle={{ marginBottom: 50 }} width={500} type="password" />
                </div>
                <div id="lib">
                    <ReqButton onclick={login} title="Sign Up" />
                </div>
            </div>
        </div>
    )
}

export default SignUp;
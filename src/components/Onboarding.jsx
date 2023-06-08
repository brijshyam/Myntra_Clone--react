import React, { useRef, useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
    const emailRef = useRef();
    const passRef = useRef();
    const [error, setError] = useState("");
    const [signup, setSignup] = useState(false);
    const navigateTo = useNavigate();
    const signupHandler = (e) => {
        e.preventDefault();
        setSignup(true);
    };

    const loginHandler = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (
            userData.email === emailRef.current.value &&
            passRef.current.value === userData.password
        ) {
            const stored = JSON.parse(localStorage.getItem("userData"));
            stored.loggedIn = true;
            localStorage.setItem("userData", JSON.stringify(stored));
            navigateTo("/");
        } else {
            setError("Invalid username or password!");
        }
    };

    return (
        <div className="login-page">
            {!signup ? (
                <div className="login-container">
                    <h1>Login</h1>
                    <form className="form-grp">
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your Email"
                            ref={emailRef}
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your Password"
                            ref={passRef}
                        />
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <button className="btn" onClick={loginHandler}>
                            Login
                        </button>
                    </form>
                    <div className="signup-wrapper">
                        <p>Do not have an account?</p>
                        <button className="btn" onClick={signupHandler}>
                            Signup
                        </button>
                    </div>
                    <div className="google-wrapper">
                        <button className="btn">
                            <box-icon type="logo" name="google"></box-icon>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            ) : (
                <SignUpFields setSignup={setSignup} />
            )}
        </div>
    );
}

const SignUpFields = ({ setSignup }) => {
    const emailRef = useRef();
    const nameRef = useRef();
    const passRef = useRef();
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(() => {
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            return JSON.parse(storedData);
        }
        return {
            name: "",
            email: "",
            password: "",
            loggedIn: false,
        };
    });

    const signUpClickHandler = (e) => {
        e.preventDefault();
        if (userData.email === emailRef.current.value) {
            setError("Entered email id is already registered!");
        } else {
            const newUser = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passRef.current.value,
            };
            localStorage.setItem("userData", JSON.stringify(newUser));
            const dataEntered = localStorage.getItem("userData");
            console.log(dataEntered);
        }
        nameRef.current.value = "";
        emailRef.current.value = "";
        passRef.current.value = "";
    };
    return (
        <div className="login-container">
            <h1>Signup</h1>
            <form className="form-grp">
                <input
                    ref={nameRef}
                    type="name"
                    id="name"
                    placeholder="Enter your name"
                />
                <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                />
                <input
                    ref={passRef}
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button className="btn" onClick={signUpClickHandler}>
                    Signup
                </button>
                <button className="btn" onClick={() => setSignup(false)}>
                    Login
                </button>
            </form>
            <div className="google-wrapper">
                <button className="btn">
                    <box-icon type="logo" name="google"></box-icon>
                    Sign Up with Google
                </button>
            </div>
        </div>
    );
};

export default LoginSignup;

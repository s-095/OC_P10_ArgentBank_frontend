import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginReducer } from "../../redux/slices/loginSlice";
import { logUser } from "../../redux/actions/loginAction";
import "./sign-in.scss";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = { email: username, password };

        try {
            const token = await logUser(user);
            dispatch(loginReducer({ token: token }))
            navigate("/user");
        } catch (error) {
            console.error("Erreur d’authentification :", error.message);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="sign-in">
            <NavBar />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default SignIn;

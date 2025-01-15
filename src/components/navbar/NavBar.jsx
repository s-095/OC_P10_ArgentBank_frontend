import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            </Link>
            <h1 className="sr-only">Argent Bank</h1>
            {isLoggedIn ? (
                <div>
                    <Link to="/user" className="main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Tony
                    </Link>
                    <button className="main-nav-item" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Sign Out
                    </button>
                </div>
            ) : (
                <Link to="/sign-in" className="main-nav-item">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </Link>
            )}
        </nav>
    )
};

export default NavBar;

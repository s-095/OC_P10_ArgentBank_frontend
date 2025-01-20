import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutReducer } from "../../redux/slices/loginSlice";
import "./navbar.scss";
import logo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const token = useSelector((state) => state.login.token);
    const username = useSelector((state) => state.user.userName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutReducer());
        navigate("/");
    };

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            </Link>
            <h1 className="sr-only">Argent Bank</h1>
            {token ? (
                <div>
                    <Link to="/user" className="main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} />
                        {username}
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
    );
};

export default NavBar;

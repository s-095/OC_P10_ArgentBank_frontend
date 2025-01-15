import NavBar from "../../components/navbar/NavBar"
import Footer from "../../components/footer/Footer"
import Accounts from "../../components/accounts/Accounts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "./user.scss"

function User() {
    return (
        <div>
            <NavBar />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <Accounts
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance" />
                <Accounts
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance" />
                <Accounts
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance" />
            </main>
            <Footer />
        </div>
    );
}

export default User;

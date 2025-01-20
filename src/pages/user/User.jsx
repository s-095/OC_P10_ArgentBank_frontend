import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile, updateUserProfile } from "../../redux/actions/userAction";
import { setUserProfile } from "../../redux/slices/userSlice";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import Accounts from "../../components/accounts/Accounts";
import "./user.scss";

function User() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.login.token);
    const user = useSelector((state) => state.user);

    const [isEditingUser, setIsEditingUser] = useState(false);
    const [editedUserName, setEditedUserName] = useState(user.userName || "");

    useEffect(() => {
        if (token) {
            fetchUserProfile(token)
                .then((data) => {
                    dispatch(setUserProfile(data.body));
                    setEditedUserName(data.body.userName || "");
                })
                .catch((error) =>
                    console.error("Erreur lors de la récupération des infos utilisateur :", error)
                );
        }
    }, [token, dispatch]);

    const handleSave = async () => {
        try {
            const updatedData = { userName: editedUserName };
            await updateUserProfile(token, updatedData);

            dispatch(updateUserName(editedUserName));
            setIsEditingUser(false);

        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil :", error);
        }
    };

    const handleCancel = () => {
        setEditedUserName(user.userName || "");
        setIsEditingUser(false);
    };

    return (
        <div>
            <NavBar />
            <main className="main bg-dark">
                {isEditingUser ? (
                    <div className="header">
                        <h1>Edit user info</h1>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSave();
                            }}
                        >
                            <div>
                                <label>Username: </label>
                                <input
                                    type="text"
                                    value={editedUserName || ""}
                                    onChange={(e) => setEditedUserName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>First Name: </label>
                                <input type="text" value={user.firstName || ""} readOnly />
                            </div>
                            <div>
                                <label>Last Name: </label>
                                <input type="text" value={user.lastName || ""} readOnly />
                            </div>

                            <button type="submit" className="save-button">
                                Save
                            </button>
                            <button type="button" className="cancel-button" onClick={handleCancel}>
                                Cancel
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="header">
                        <h1>
                            Welcome back<br />
                            {user.firstName} {user.lastName} !
                        </h1>
                        <button
                            className="edit-button"
                            onClick={() => setIsEditingUser(true)}
                        >
                            Edit Name
                        </button>
                    </div>
                )}
                <Accounts
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />
                <Accounts
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                />
                <Accounts
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                />
            </main>
            <Footer />
        </div>
    );
}

export default User;

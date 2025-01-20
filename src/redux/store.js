import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer:
    {
        login: loginSlice,
        user: userSlice,
    },
    devTools: true
});

export default store;

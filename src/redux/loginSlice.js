import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: { token: null },
    reducers: {
        loginReducer: (state, action) => {
            state.token = action.payload.token
        },
        logoutReducer: (state) => {
            state.token = null;
        }
    }
});

export default loginSlice.reducer;
export const { loginReducer, logoutReducer } = loginSlice.actions;
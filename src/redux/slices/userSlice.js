import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        firstName: null,
        lastName: null,
        userName: null,
    },
    reducers: {
        setUserProfile: (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
        },
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { setUserProfile, updateUserName } = userSlice.actions;

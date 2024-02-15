import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isUserLoggedIn: false,
    userLoading: true,
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.userLoading = false;
        },
        handleUserLogin: (state, action) => {
            state.user = action.payload;
            state.isUserLoggedIn = true;
            state.userLoading = false;
        },
        resetState: state => {
            state.user = null;
            state.isUserLoggedIn = false;
            state.userLoading = false;
        },
    },
});

// Reducer
export default slice.reducer;

// Actions
export const { setUser, handleUserLogin, resetState } = slice.actions;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;

}
interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: null,

};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action:PayloadAction<User>) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        }
    },
})
export const {login, logout} = authReducer.actions;
export default authReducer.reducer;
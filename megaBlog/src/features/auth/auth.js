import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Plugin the funciton and the variables that you want 
        login: (state, action) => {
            state.status = true,
            state.userData = action.payload.userData;
        }, 
        logout: (state) => {
            state.status = false,
            state.userData = null;
        }
    }
})

// Export the reducers to use them in the componenet through useDispatch and useSelector
export const {login, logout} = authSlice.actions;

// Export the reducers for store
export default  authSlice.reducer
import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/auth'
const store = configureStore({
    reducer: {authReducer}
})


export default store;
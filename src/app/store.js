import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "../actions/User";


export default configureStore({
    reducer:{
        user:useReducer
    }
})
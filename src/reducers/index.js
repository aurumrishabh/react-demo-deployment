// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    counter: authReducer,
});

export default rootReducer;

// src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // Apply Redux Thunk middleware
);

export default store;

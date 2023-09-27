// src/reducers/counterReducer.js
const initialState = {
    count: 0,
    userData: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'SIGNIN':
            return { ...state, userData: {}};
        case 'SIGNOUT':
            return { ...state, userData: {}}
        default:
            return state;
    }
};

export default authReducer;
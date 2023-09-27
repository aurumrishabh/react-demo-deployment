// src/reducers/counterReducer.js
const initialState = {
    count: 0,
    isFetching: false,
    data: null,
    error: null,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'FETCH_DATA_REQUEST':
            return { ...state, isFetching: true, error: null };
        case 'FETCH_DATA_SUCCESS':
            return { ...state, isFetching: false, data: action.payload };
        case 'FETCH_DATA_FAILURE':
            return { ...state, isFetching: false, error: action.error };
        default:
            return state;
    }
};

export default counterReducer;

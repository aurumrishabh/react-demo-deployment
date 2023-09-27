import axios from "axios";

export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});

// Async action using Redux Thunk
export const fetchData = () => {
    return (dispatch) => {
        // Dispatch an action to indicate the start of the data fetching process
        dispatch({ type: 'FETCH_DATA_REQUEST' });
        const url="";
        // Simulate an asynchronous API call (replace with your actual API call)
        axios.get(url)
            .then((response)=>{
                dispatch({type:"FETCH_DATA_SUCCESS", payload: response})
            })
            .catch((error)=>{
                dispatch({ type: 'FETCH_DATA_FAILURE', error: error });
            })
            .finally(()=>{

            });
        setTimeout(() => {
            // On success, dispatch an action with the fetched data
            const data = { /* fetched data */ };
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });

            // On error, dispatch an action to handle errors
            // dispatch({ type: 'FETCH_DATA_FAILURE', error: 'Error message' });
        }, 1000); // Simulated delay
    };
};


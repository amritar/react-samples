import {useReducer, useEffect} from 'react';

// TODO: Move reducers and dispatch-actions into respective sub-folders
const URL = '//swapi.dev/api/people'; //name
const INITIAL_STATE = {
    status: 'LOADING', 
    result: null, 
    error: null,
}; 

const STATUSES = { DEFAULT: 'LOADING', SUCCESS: 'SUCCESS', ERROR:"ERROR" };

// Interdependent state
// Takes in current state, action and returns new State
function myReducer(state, { type, payload }){
    switch(type){
        case "LOADING":
            return {...state, status:type }; // should we setState here or not??
        case "ERROR":
            return {...state, status:type, error: payload };
        case "SUCCESS":
            return {...state, status: type, result: payload};
        default:
            return state; 
    }
}

function useLoader(initialState){
    return useReducer(myReducer, initialState)
}

export default function DisplayExtData() {
    const [state, dispatch] = useReducer(myReducer, INITIAL_STATE);
    // OR could customize:
    // const [state, dispatch] = useLoader(INITIAL_STATE);
    useEffect(() => {
        dispatch({type: 'LOADING'}); //Sent on mount

        fetch(URL)
        .then((data) => data.json())
        .then(
            ({ results }) => dispatch({type: "SUCCESS", payload: results,})
        )
        .catch(({ error } ) => dispatch({type: "ERROR", payload: error,}));
    
    }, []);

    const {status, result, error } = state; // Destructure the state based on what it was set initially/is used. 
    
    if(status === STATUSES.DEFAULT ){
        return <h3> Initializing... </h3>;
    }
    if(status === STATUSES.ERROR){
        return <h3> Error: {error} </h3>
    }
    return (
        <>
        <h3> Results:</h3>
        <ol>
            {result.map(( { name }) => (
                <li key={name}>{name}</li>
            ))}
        </ol>
        </>
    )

}
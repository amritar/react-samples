import { useEffect, useState } from "react";
//import { useReducer } from 'react';

export default function Countdown({from}){
    // Setting up defaults:
    // https://stackoverflow.com/questions/47774695/react-functional-component-default-props-vs-default-parameters
    const [seconds, setSeconds ] = useState(from); // Gets decremented
    const [isRunning, setRunning] = useState(false); // Reset to false,if user pauses or if counter is complete.

    useEffect(() => {
        if(!isRunning) {
            return;
        }

        const interval = setInterval(() => {
            setSeconds((value) => {
                if(value>1){
                    return value-1;
                } else {
                    setRunning(false); 
                }
            })
        }, 1000); //for SetInterval

        // Return any cleanup 
        return () => clearInterval(interval);
    }, [isRunning]);
    
    return (
        <section>
            <h2> Time left: {seconds} </h2>
            <button onClick = {() => setSeconds(from)}>Reset </button>
            <button onClick={() => setRunning( (v) => !v)} 
            disabled = {seconds === 0}>
            {isRunning? "Pause":"Resume"}</button>
        </section>
    );
}
// function reducer(state, )
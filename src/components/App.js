import React from "react";
import Accordion from './Accordion';
import Calculator from './Calculator';
import Countdown from './Countdown';
import DisplayExtData from './DisplayExtData';

const App = () => {
    return (
        <>
        <h1>
            Hello world!
            Download the
            <a href="https://reactjs.org/link/react-devtools"> React DevTools </a>
            for a better development experience.
        </h1>
        Accordion/Toggle: <Accordion />
        Calculator: <Calculator operand1={7} operand2={4} />
        Countdown: <Countdown from={10} />
        <DisplayExtData />
        </>

    )
}

export default App

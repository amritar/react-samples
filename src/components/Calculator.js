// Chapter 5 React quickly
import {useState } from 'react';
// const OPERATORS = {
//     ADD: (a,b) => a+b,
//     SUBTRACT: (a, b) => a-b, 
//     MULTIPLY: (a,b) => a*b,
// };

const ADD   = (a, b) => a + b;
const SUBTRACT = (a, b) => a - b;
const MULTIPLY    = (a, b) => a * b;

function Calculator({operand1, operand2}){
    // const [ value, setter = useState(default);
    const [operator, setOperator] = useState(() => ADD); 
   return (
        <main>
            <h1> Calculator</h1>

            <button onClick = {()=> setOperator(() => ADD)}>+</button>
            <button onClick = {()=> setOperator(() => SUBTRACT)}>- </button>
            <button onClick = {()=> setOperator(() => MULTIPLY)}>*</button>
            {/* <button onClick = {()=> setOperator(() => )}>+</button> */}
            <p> Result of {operand1} and {operand2}:
            {<code>{operator(operand1, operand2)}</code>}
            </p>
        </main>
   )
}

export default Calculator;

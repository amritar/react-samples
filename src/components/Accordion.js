import {useState} from 'react';

function Accordion() {
    const [ isExpanded, setExpanded] = useState(false); // Set to a static value
    return (
        <main>
            <h2 style= {{ display: 'flex', gap: '6px '}}>Show more:</h2>
            <button onClick = {() => setExpanded(false)}> - </button>
            <button onClick = {() => setExpanded(true)}> + </button>
            
            {isExpanded && (
                <p>Showing secure information:<code>Extra data to process.</code>
                </p>
            )}
        </main>
    );
}

export default Accordion;

import { useState } from "react";

function Licznik() {
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}> Dodaj </button>
        </div>
    )
}

export default Licznik;
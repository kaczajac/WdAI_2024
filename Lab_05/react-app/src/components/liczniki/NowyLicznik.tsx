import { useState } from "react";
import Przycisk from "./Przycisk";

function NowyLicznik() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>
            <Przycisk onClick={() => setCounter(counter + 1)}/>
        </div>
    )
}

export default NowyLicznik;
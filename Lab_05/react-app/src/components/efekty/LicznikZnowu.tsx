import { useEffect, useState } from "react";

function LicznikZnowu() {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        console.log('Hello world');
    }, []);

    useEffect(() => {
        console.log('Licznik zwiększył się do ' + counter);
    });

    const addCount = () => {
        setCounter(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={addCount}> Dodaj </button>
        </div>
    )
}

export default LicznikZnowu;
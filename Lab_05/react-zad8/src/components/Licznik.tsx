import { useEffect, useState } from "react";


function Licznik() {

    const [count, setCount] = useState<number>(() => {
        const storedCount = localStorage.getItem('count');
        return storedCount !== null ? parseInt(storedCount) : 0;
    });

    const handleClick = () => {
        setCount(c => c + 1);
        localStorage.setItem('count', count.toString())
    }

    useEffect(() => {
        localStorage.setItem('count', count.toString())
    }, [count])

    return (
        <>
            <h1> Licznik: {count} </h1>
            <button type="button" onClick={handleClick}> Dodaj </button>
        </>
    )

}

export default Licznik;
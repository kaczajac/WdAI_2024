import { useEffect, useState } from "react";


function Odliczanie() {

    const [licznik, setLicznik] = useState(15);
    const [message, setMessage] = useState('START');
    const [running, setRunning] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const changeMessage = () => {
        setRunning(!running);
        setMessage(running ? 'START' : 'STOP');
    }

    const handleLicznikChange = () => {
        setLicznik(prevLicznik => (prevLicznik > 0 ? Number((prevLicznik - 0.1).toFixed(2)) : 0));
    }

    useEffect(() => {

        let timer: number;
        if (running && licznik > 0) {
            timer = setInterval(handleLicznikChange, 100);
        }  

        if (licznik === 0) {
            setRunning(false);
            setMessage('Odliczanie zakończone');
            setDisabled(true);
        }

        return () => clearInterval(timer);

    }, [running, licznik])

    return (
        <>
            <div>
                Licznik: {licznik}
            </div>
            <button type="button" onClick={changeMessage} disabled={disabled}> {message} </button>
        </>
    )
}

export default Odliczanie;
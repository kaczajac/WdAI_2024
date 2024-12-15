import { ChangeEvent, useEffect, useState } from "react";

function Haslo() {
    const [message, setMessage] = useState('Proszę wprowadzić hasło');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const handleFirst = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstPassword(event.target.value);
    };

    const handleSecond = (event: ChangeEvent<HTMLInputElement>) => {
        setSecondPassword(event.target.value);
    };

    const compare = () => {
        if (!firstPassword && !secondPassword) {
            setMessage('Proszę wprowadzić hasło');
        }
        else if (firstPassword !== secondPassword) {
            setMessage('Hasła nie są zgodne');
        }
        else setMessage('');
    }

    useEffect(() => {
        compare();
    }, [firstPassword, secondPassword])

    return (
        <>
            <div>
                Hasło: <input type="text" value={firstPassword} onChange={handleFirst} placeholder="Wpisz hasło..."/>
            </div>
            <div>
                Powtórz hasło: <input type="text" value={secondPassword} onChange={handleSecond} placeholder="Powtórz hasło..."/>
            </div>
            <div>{message}</div>
        </>
    )
}

export default Haslo;
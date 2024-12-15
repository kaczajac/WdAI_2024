import { ChangeEvent, useEffect, useState } from "react";


function Tytul() {

    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        document.title = `${textValue}`;
    }, [textValue]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
    };

    return (
        <>
            <input type="text" value={textValue} onChange={handleChange}/>
        </>
    )
}

export default Tytul;
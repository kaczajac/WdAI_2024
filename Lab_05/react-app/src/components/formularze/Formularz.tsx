import { ChangeEvent, useState } from "react";

function Formularz() {
    const [text, setText] = useState('');

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <>
            <div>{text}</div>
            <input type="text" value={text} onChange={handleChange}></input>
        </>
    )
}

export default Formularz;
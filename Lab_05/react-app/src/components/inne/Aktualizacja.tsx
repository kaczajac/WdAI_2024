import { useState } from "react";


function Aktualizacja() {
    const [pomidor, setPomidor] = useState({nazwa : "Pomidor", 
                                            cena : 50});

    const handleClick = () => {
        setPomidor(prevPomidor => ({
            ...prevPomidor,
            cena : 100
        }));
    }

    return (
        <>
            <div>
                Aktualnie {pomidor.nazwa} kosztuje {pomidor.cena}
            </div>
            <button type="button" onClick={handleClick}> Zmień cenę </button>
        </>
    )
}

export default Aktualizacja;

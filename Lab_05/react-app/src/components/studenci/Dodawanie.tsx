import { FormEvent, useState } from "react";
import { Student } from "./StudentManager";


interface DodawanieProps {
    add: (newStudent: Student) => void;
}

function Dodawanie({ add }: DodawanieProps) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (isValid()) {
            const newStudent = { 
                                imie : name,
                                nazwisko: surname,
                                rocznik: parseInt(year)
                                }
            add(newStudent);
            
            setName('');
            setSurname('');
            setYear('');
            setError('');
        }
    }

    const isValid = () => {
        if (!name || !surname || !year) {
            setError('Wypełnij brakujące pola');
            return false;
        }
        else if (isNaN(Number(year))) {
            setError('Błędna wartość dla: rocznik');
            return false;
        }
        return true;
    }

    return (
        <>  
            <h3> Dodaj Studenta</h3>
            { error && <p style={{color: 'red'}}> {error} </p> }
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Podaj imię studenta </label>
                    <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                </div>

                <div>
                    <label> Podaj nazwisko studenta </label>
                    <input type="text" value={surname} onChange={event => setSurname(event.target.value)}/>
                </div>

                <div>
                    <label> Podaj rocznik studenta </label>
                    <input type="text" value={year} onChange={event => setYear(event.target.value)}/>
                </div>
                <button type="submit"> Dodaj studenta </button>
            </form>
        </>
    )
}

export default Dodawanie;
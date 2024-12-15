
const Students: Student[] = [{ imie: "Michael", nazwisko: "Scott", rocznik: 2024 },
                                { imie: "Dwight", nazwisko: "Shrute", rocznik: 1969 },
                                { imie: "Jim", nazwisko: "Halpert", rocznik: 1423 },
                                { imie: "Angela", nazwisko: "Martin", rocznik: 2270 }];

interface Student {
    imie : string;
    nazwisko: string;
    rocznik: number;
}


function Studenci() {
    return (
        <>
            <table>
                {Students.map((student, index) => (
                    <tr key={index}>
                        <th> {student.imie} </th>
                        <th> {student.nazwisko} </th>
                        <th> {student.rocznik} </th>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default Studenci;
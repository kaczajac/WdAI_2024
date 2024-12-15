const a: boolean = true;
const b: boolean = false;

function Ternary() {
    return (
        <>
            <div>
                Stwierdzenie a jest {a ? "prawdziwe" : "fałszywe"}
            </div>
            <div>
                Stwierdzenie b jest {b ? "prawdziwe" : "fałszywe"}
            </div>
        </>
    )
}

export default Ternary;
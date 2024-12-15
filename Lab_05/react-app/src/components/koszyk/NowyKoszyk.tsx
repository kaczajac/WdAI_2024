import Produkt from './Produkt'

const Produkty: string[] = ["banan", "mango", "marchewka", "gruszka", "jabłko"];

function NowyKoszyk() {
    return( 
        <>
            {Produkty.map(item => <Produkt nazwa={item}/>)}
        </>
    )
}

export default NowyKoszyk;
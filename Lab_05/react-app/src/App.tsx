import Licznik from "./components/liczniki/Licznik";
import Koszyk from "./components/koszyk/Koszyk";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizacja";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";
import LicznikZnowu from "./components/efekty/LicznikZnowu";
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";
import Komentarze from "./components/produkty/Komentarze";

function App() {
  return (
    <>
      <h1> Ćwiczenie 1 </h1>
      <h2> Koszyk</h2>
      <Koszyk/>
      <h2> NowyKoszyk</h2>
      <NowyKoszyk/>
      <hr/>

      <h1> Ćwiczenie 2 </h1>
      <h2> Licznik </h2>
      <Licznik/>
      <h2> NowyLicznik </h2>
      <NowyLicznik/>
      <hr/>

      <h1> Ćwiczenie 3 </h1>
      <h2> Formularz </h2>
      <Formularz/>
      <h2> Haslo </h2>
      <Haslo/>
      <h2> Logowanie </h2>
      <Logowanie/>
      <hr/>
      
      <h1> Ćwiczenie 4 </h1>
      <h2> Ternary </h2>
      <Ternary/>
      <h2> Aktualizacja </h2>
      <Aktualizacja/>
      <hr/>

      <h1> Ćwiczenie 5 </h1>
      <h2> Studenci </h2>
      <Studenci/>
      <h2> StudentManager </h2>
      <StudentManager/>
      <hr/>

      <h1> Ćwiczenie 6 </h1>
      <h2> Licznik (znowu) </h2>
      <LicznikZnowu/>
      <h2> Tytul </h2>
      <Tytul/>
      <h2> Odliczanie </h2>
      <Odliczanie/>

      <h1> Ćwiczenie 7 </h1>
      <h2> Komentarze </h2>
      <Komentarze/>
      <hr/>
    </>
  )
}

export default App;

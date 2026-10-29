
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">

            <Header />

            <div className="games">
                <h2>Welkom bij mijn eerste React-applicatie!</h2>

                <p>Naam: Rabaz Abdulkarim</p>

                <p>Studentnummer: 2243902</p>

                <p>Klas: g3</p>
            </div>

            <Footer />

        </div>
    );
}

export default App;

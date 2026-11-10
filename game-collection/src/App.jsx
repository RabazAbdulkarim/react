import "./App.css";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <Header title="🎮 Game Collection" />
            
            <div className="game-list">
                <GameCard
                    title="Minecraft"
                    platform="PC"
                />
                <GameCard
                    title="Mario Kart"
                    platform="Nintendo Switch"
                />
                <GameCard
                    title="Rocket League"
                    platform="PlayStation 5"
                />
            </div>

            <Footer />
        </div>
    );
}

export default App;
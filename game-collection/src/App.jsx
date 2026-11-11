import "./App.css";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";

function App() {
    const games = [
        { id: 1, title: "Minecraft", platform: "PC" },
        { id: 2, title: "Mario Kart", platform: "Nintendo Switch" },
        { id: 3, title: "Rocket League", platform: "PlayStation 5" },
        { id: 4, title: "Stardew Valley", platform: "PC" }
    ];

    return (
        <div className="container">
            <Header title="🎮 Game Collection" />

            <div className="game-list">
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        title={game.title}
                        platform={game.platform}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default App;
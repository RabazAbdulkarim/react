import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";

function App() {
    const [search, setSearch] = useState("");

    const games = [
        { id: 1, title: "Minecraft", platform: "PC" },
        { id: 2, title: "Mario Kart", platform: "Nintendo Switch" },
        { id: 3, title: "Rocket League", platform: "PlayStation 5" },
        { id: 4, title: "Stardew Valley", platform: "PC" },
        { id: 5, title: "The Legend of Zelda", platform: "Nintendo Switch" },
        { id: 6, title: "Fortnite", platform: "PC" },
        { id: 7, title: "EA Sports FC 26", platform: "PlayStation 5" }
    ];

    const filteredGames = games.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <Header title="🎮 Game Collection" />

            <input
                className="search-input"
                type="text"
                placeholder="Zoek een game..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <div className="game-list">
                {filteredGames.map((game) => (
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
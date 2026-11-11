import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import games from "./data/games.json";

function App() {
    const [search, setSearch] = useState("");

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
                        genre={game.genre}
                        rating={game.rating}
                        year={game.year}
                        image={game.image}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default App;
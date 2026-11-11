import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import games from "./data/games.json";

function App() {
    const [search, setSearch] = useState("");
    const [sortByRating, setSortByRating] = useState(false);

    const safeGames = Array.isArray(games) ? games : [];
    const searchText = search.toLowerCase();

    const filteredGames = safeGames
        .filter((game) => {
            const searchableFields = [
                game.title,
                game.genre,
                game.platform,
                game.developer
            ];

            return searchableFields.some((field) =>
                String(field || "").toLowerCase().includes(searchText)
            );
        })
        .sort((gameA, gameB) => {
            if (sortByRating) {
                return Number(gameB.rating || 0) - Number(gameA.rating || 0);
            }

            return Number(gameA.id || 0) - Number(gameB.id || 0);
        });

    return (
        <div className="container">
            <Header title="🎮 Rabaz's Game Collection" />

            <p className="tagline">
                Ontdek, zoek en bewonder mijn favoriete games.
            </p>

            <div className="collection-controls">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Zoek op game, genre, platform of developer..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <button
                    className="sort-button"
                    onClick={() => setSortByRating(!sortByRating)}
                >
                    {sortByRating
                        ? "Sorteer op collectie"
                        : "Sorteer op rating"}
                </button>
            </div>

            <p className="results-count">
                {filteredGames.length} games gevonden
            </p>

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
                        developer={game.developer}
                        multiplayer={game.multiplayer}
                    />
                ))}
            </div>

            {filteredGames.length === 0 && (
                <p className="empty-message">
                    Geen games gevonden. Probeer een andere zoekopdracht.
                </p>
            )}

            <Footer />
        </div>
    );
}

export default App;
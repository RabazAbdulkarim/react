import { useState } from "react";

function GameCard(props) {
    const [favorite, setFavorite] = useState(false);

    return (
        <div className="game-card">
            <h2>{props.title}</h2>
            <p>Platform: {props.platform}</p>
            <p>Genre: {props.genre}</p>
            <p>Rating: ⭐ {props.rating}</p>
            <p>Jaar: {props.year}</p>

            <button
                className="favorite-button"
                onClick={() => setFavorite(!favorite)}
            >
                {favorite ? "❤️ Favoriet" : "🤍 Favoriet"}
            </button>
        </div>
    );
}

export default GameCard;
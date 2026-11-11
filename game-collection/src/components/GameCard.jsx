import { useState } from "react";

function GameCard(props) {
    const [favorite, setFavorite] = useState(false);

    return (
        <div className="game-card">
            <h2>{props.title}</h2>
            <p>Platform: {props.platform}</p>

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
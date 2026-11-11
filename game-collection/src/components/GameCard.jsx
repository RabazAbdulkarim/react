import { useState } from "react";

function GameCard(props) {
    const [favorite, setFavorite] = useState(false);

    return (
        <article className="game-card">
            {props.image && (
                <img
                    src={`/images/${props.image}`}
                    alt={`AI-afbeelding voor ${props.title}`}
                    className="game-image"
                />
            )}

            <div className="game-card-content">
                <h2>{props.title}</h2>

                <p><strong>Platform:</strong> {props.platform}</p>
                <p><strong>Genre:</strong> {props.genre}</p>
                <p><strong>Rating:</strong> ⭐ {props.rating}</p>
                <p><strong>Jaar:</strong> {props.year}</p>
                <p><strong>Developer:</strong> {props.developer}</p>
                <p><strong>Multiplayer:</strong> {props.multiplayer}</p>

                <button
                    className="favorite-button"
                    onClick={() => setFavorite(!favorite)}
                >
                    {favorite ? "❤️ Favoriet" : "🤍 Favoriet"}
                </button>
            </div>
        </article>
    );
}

export default GameCard;
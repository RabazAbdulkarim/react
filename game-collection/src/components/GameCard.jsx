function GameCard(props) {
    return (
        <div className="game-card">
            <h2>{props.title}</h2>
            <p>Platform: {props.platform}</p>
        </div>
    );
}

export default GameCard;
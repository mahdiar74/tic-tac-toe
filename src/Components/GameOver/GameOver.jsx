export default function GameOver( {isDraw , winner , handleRematch} ){
    return(
        <section className="gameover">
            <p>Game Over!</p>
            { winner && <p> {winner}  Won!</p>}
            { (!winner && isDraw) && <p>it's a draw!</p> }
            <button onClick={handleRematch}>Rematch</button>
        </section>
    )
}
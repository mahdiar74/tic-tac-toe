import PlayerItem from "./PlayerItem";

function Player( { gameTurn, players, setActivePlayerName }) {


  return (
    <div className="player-row">
        <PlayerItem setActivePlayerName={setActivePlayerName} initialName={players.X} playerSymbol={'X'} isActive={gameTurn[0]?.player == 'X' ? 'active' : null} />
        <PlayerItem setActivePlayerName={setActivePlayerName} initialName={players.O} playerSymbol={'O'} isActive={gameTurn[0]?.player == 'O' ? 'active' : null} />
    </div>
  );
}

export default Player;
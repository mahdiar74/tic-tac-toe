import Player from './Components/Player/Player.jsx'
import GameBoard from './Components/GameBoard/GameBoard.jsx'
import Log from './Components/Log/Log.jsx'
import GameOver from './Components/GameOver/GameOver.jsx'
import { useState } from 'react';
import winning from './winning.js';
import './App.css';

let initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const players = {
  'X': 'Player 1',
  'O': 'Player 2',
}
function deriveBoardGame(gameTurn, initialBoard){
  let boardGame = [...initialBoard.map( innerArray => [...innerArray] )];
  
  for( const turn of gameTurn ){
    const {rowIndex, colIndex} = turn['square'];
    boardGame[rowIndex][colIndex] = turn['player'];
  }
  return boardGame;

}
function deriveWinner( boardGame, winning, players){
  let winner;
  for( const win of winning ){
    const firstSqure = boardGame[win[0].row][win[0].column];
    const secondSqure = boardGame[win[1].row][win[1].column];
    const thirdSquare = boardGame[win[2].row][win[2].column];

    if( firstSqure && firstSqure == secondSqure && secondSqure == thirdSquare ){
      winner = players[firstSqure];
    }
  }
  return winner;
}
function setCurrentPlayer( gameTurn ){
  let activePlayer = 'X';
    if( gameTurn.length > 0 && gameTurn[0].player == 'X'){
      activePlayer = 'O';
    }
    return activePlayer;
}
function App() {

  const [gameTurn, setGameTurn] = useState([]);
  const [gamePlayers, setGamePlayers] = useState(players);
  const boardGame = deriveBoardGame( gameTurn, initialBoard );
  const winner = deriveWinner(boardGame, winning, gamePlayers);

  function setActivePlayerName( symbol, playerName ){
    setGamePlayers( prevPlayers => {
      let newPlayers ={
        ...prevPlayers , 
        [symbol]: playerName 
      };
      return newPlayers;
    })
  }
  let isDraw = false;
  if( gameTurn.length == 9  && !winner ){
    isDraw = true;
  }

  let activePlayer = setCurrentPlayer(gameTurn);
  function handleGameTurn( rowIndex , colIndex ){

    setGameTurn( prevGameTurn => {
      let currentPlayer = setCurrentPlayer(prevGameTurn);

      let newGameTurn = [ { square:{ rowIndex, colIndex} , player: currentPlayer} , ...prevGameTurn];

      return newGameTurn;
    })
  }

  function handleRematch(){
    setGameTurn([]);
  }

  return (
    <article className='main'>
      <Player players={players} setActivePlayerName={setActivePlayerName} gameTurn={gameTurn}  />
      <GameBoard activePlayer={activePlayer} boardGame={boardGame} handleGameTurn={handleGameTurn} />
      <Log gameTurn={gameTurn} />
      { (winner || isDraw) && <GameOver isDraw={isDraw} winner={winner} handleRematch={handleRematch} /> }
    </article>
  );
}

export default App;

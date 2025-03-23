import Tile from "../Tile/Tile";


function GameBoard({ boardGame , handleGameTurn , activePlayer }) {

  return (
    <div className="board">
      {
        boardGame.map( (boardGameRow, rowIndex) => {
          return(
          <div className="row" key={rowIndex}>
            {
              boardGameRow.map( (boardGameCol , colIndex)  => <Tile key={colIndex} handleGameTurn={ handleGameTurn } rowIndex={ rowIndex } colIndex={ colIndex } symbol={ boardGame[rowIndex][colIndex] } isActive={ boardGame[rowIndex][colIndex] } />)
            }
          </div>
          );
        } )
      }
    </div>
  );
}

export default GameBoard;
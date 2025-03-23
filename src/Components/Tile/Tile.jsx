export default function Tile( {handleGameTurn , isActive , symbol , rowIndex , colIndex  } ){
    return(
        <button onClick={() => handleGameTurn(rowIndex, colIndex) } disabled={ isActive ? true : false }> { symbol } </button>
    )
}
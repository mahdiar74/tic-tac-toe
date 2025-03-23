function Log({gameTurn}) {
  let output = gameTurn.map( (item, i) => <span key={i}>{item.player} Played : {item.square.rowIndex},{item.square.colIndex}</span> );

return (<div className="log">
      {
        output
      }
      </div>
  );
}

export default Log;
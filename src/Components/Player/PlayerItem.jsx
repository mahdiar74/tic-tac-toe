import { useState } from "react";

function PlayerItem({ initialName, playerSymbol, isActive, setActivePlayerName}) {

    const [playerName , setPlayerName] = useState( initialName );
    const [isEditing , setisEditing] = useState( false );

    function handleIsEditingChange(){
        setisEditing( editing => ! editing );
        setActivePlayerName( playerSymbol, playerName )
    }
    function handlePlayerNameChange( ev ){
        setPlayerName( ev.target.value );
    }
    let nameEl = isEditing ? <input value={playerName} onChange={ handlePlayerNameChange } type='text' /> : <span>{ playerName }</span>
    let buttonTxt = isEditing ? "Save" : 'Edit'
    return (
      <div className={isActive}>
        <span className="name">{ nameEl }</span>
        <span>{ playerSymbol }</span>
        <button onClick={handleIsEditingChange }>{ buttonTxt }</button>
      </div>
    );
  }
  
export default PlayerItem;
import React from 'react'
import Produto from './Produto';

function Dismount () {
  const [ ativo, setAtivo ] = React.useState( false );
  return (
    <div>
      { ativo && <Produto /> }
      <button onClick={ () => setAtivo( !ativo ) }>Ativar</button>
    </div>
  )
}

export default Dismount